#!/usr/bin/env node

/* eslint-disable */

const {
  YARG_LOCALE,
  readPackage,
  readManifest,
  verifyPackage,
  verifyManifest,
  writeManifest,
  generateNewUuids,
  pkgMainToPath,
  deleteIfExists,
  copyLog,
  getFileName,
  recursiveCopySync,
  buildLog,
  walkDirSync,
  syncModuleMatcher,
  syncAltModuleMatcher,
  asyncModuleMatcher,
  comLog,
  bundleLog,
  warnLog,
} = require('./utils')
const fs = require('fs')
const path = require('path')
const Yargs = require('yargs')
const chalk = require('chalk')
const { zip } = require('zip-a-folder')
const os = require('os')

// Run before cli checks
require('./beforeCli')()

const cwd = process.cwd()
const scriptRoute = path.resolve(cwd, 'scripts')
const beapi = fs.readFileSync(path.resolve(__dirname, '../dist', 'index.mjs'), 'utf8')

Yargs.scriptName('')
Yargs.usage(`${chalk.hex('#698fff')('beapi')} ${chalk.gray('<command>')} ${chalk.grey('[flags]')}`)
Yargs.help('help', chalk.grey('Show all commands for beapi.'))
Yargs.alias('h', 'help')
Yargs.version(false)
Yargs.strict()
Yargs.demandCommand(1, 1)
Yargs.updateLocale(YARG_LOCALE)

// Build Command
Yargs.command(
  'build',
  chalk.gray('Build BeAPI project for gametest.'),
  (y) => {
    y.usage(`${chalk.hex('#698fff')('beapi')} ${chalk.gray('build')} ${chalk.grey('[flags]')}`)
    y.help('help', chalk.grey('Help for command build.'))
    y.alias('h', 'help')
  },
  (argv) => {
    try {
      build(argv)
    } catch (error) {
      console.error(error)
      process.exit(1)
    }
  },
)
function build() {
  const startTime = Date.now()

  // Read project descriptor files
  const package = readPackage(cwd)
  const manifest = readManifest(cwd)

  // Verify project descriptor files
  verifyPackage(package)
  verifyManifest(manifest)

  // Update manifest UUIDs if needed
  writeManifest(cwd, generateNewUuids(manifest))

  // Parse package main field and retrieve source code folder routes
  const sourceCode = pkgMainToPath(package.main)
  const sourceCodeRoute = path.resolve(cwd, sourceCode)

  // Delete scripts folder recursively if exists
  // Prevents possible issues with files being left over
  deleteIfExists(scriptRoute)

  // Recursively copy all files from built source to scripts folder
  copyLog(`Recursively copying "${getFileName(sourceCodeRoute)}" to "${getFileName(scriptRoute)}"`)
  recursiveCopySync(sourceCodeRoute, scriptRoute)

  // Creates modules folder
  fs.mkdirSync(path.resolve(`${scriptRoute}/beapi_modules`))

  // PMK: Copies all resources listed in files
  copyResources(package)
  // PMK: Copies all modules
  copyModules(package)

  // Creates two regexs, one for matching synchronous imports
  // one for matching asynchronous imports.
  buildLog(`Attempting module transfers in "${getFileName(scriptRoute)}"`)
  const syncMatcher = syncModuleMatcher('beapi-core')
  const syncAltMatcher = syncAltModuleMatcher('beapi-core')
  const asyncMatcher = asyncModuleMatcher('beapi-core')

  // Walk all files in script directory.
  for (const file of walkDirSync(scriptRoute)) {
    // Create a relative router resolver
    const router = path
      .relative(file, scriptRoute)
      .substring(3)
      .replace(/\\|\\\\/g, '/')

    // Create pointer to module router
    const module = `${router.length ? '' : '.'}${router}/beapi_modules/BEAPI_CORE_SCRIPT.js`

    // Read contents and update all imports to pointer
    const contents = fs.readFileSync(file, 'utf-8')
    fs.writeFileSync(
      file,
      contents
        .replace(syncMatcher, ` from '${module}'`)
        .replace(syncAltMatcher, `\nimport '${module}'`)
        .replace(asyncMatcher, `import('${module}')`),
    )
    buildLog(`Wrote module transfers to "${path.relative(scriptRoute, file)}"`)
  }

  // PMK: Links all beapi-modules
  buildLog(`Linking all BeAPI compatible NPM modules`)
  linkModules(package)

  // Creates new file in script dir with BeAPI dist
  buildLog(`Creating BEAPI_CORE_SCRIPT in "${getFileName(scriptRoute)}"`)
  fs.writeFileSync(path.resolve(scriptRoute, 'beapi_modules', 'BEAPI_CORE_SCRIPT.js'), beapi)

  // Done 😊
  comLog(`Successfully Built ${chalk.grey(`in ${Date.now() - startTime}ms 😊`)}`)
}

// PMK: Start
function copyModules(package) {
  // Removes and creates the modules folder
  copyLog(`Recursively copying all modules to "${getFileName(scriptRoute)}"`)
  for (const dep of Object.keys(package.dependencies)) {
    const modulePath = path.resolve(`${cwd}/node_modules/${dep}`)
    const modulePackage = readPackage(modulePath)
    if (!modulePackage.beapiModule) continue
    recursiveCopySync(
      path.resolve(`${modulePath}/${modulePackage.main.split('/')[0]}`),
      path.resolve(`${scriptRoute}/beapi_modules/${dep.replace(/\\|\\\\|\//g, '-')}`),
    )
  }
}

const nocopy = [
  'scripts',
  'src',
  'pack_icon.png',
  'manifest.json',
  'dist',
  'node_modules',
  'package.json',
  'package-lock.json'
]

// PMK: Copy files includes module files
function copyResources(package) {
  copyLog(`Recursively copying all includes module files to "${getFileName(cwd)}"`)
  const files = []
  for (const dep of Object.keys(package.dependencies)) {
    const modulePath = path.resolve(`${cwd}/node_modules/${dep}`)
    const modulePackage = readPackage(modulePath)
    if (!modulePackage.beapiModule || !modulePackage.files) continue
    for (const resource of modulePackage.files) {
      if (nocopy.includes(resource)) continue
      const resourcePath = path.resolve(`${cwd}/node_modules/${dep}/${resource}`)
      if (!fs.existsSync(resourcePath)) {
        warnLog(`The included file "${resource}" does not exist in the main root... skipping file.`)

        continue
      }
      if (resource.includes('.')) {
        files.push({
          name: resource,
          path: resourcePath,
          type: 'file',
        })
      } else {
        files.push({
          name: resource,
          path: resourcePath,
          type: 'folder',
        })
      }
    }
  }
  for (const folder of files.filter((x) => x.type === 'folder')) {
    const newPath = path.resolve(`${cwd}/${folder.name}`)
    copyLog(`Recursively copying "${folder.name}" to "${getFileName(cwd)}\\${getFileName(newPath)}"`)
    if (!fs.existsSync(newPath)) fs.mkdirSync(newPath)
    recursiveCopySync(
      path.resolve(`${folder.path}`),
      path.resolve(`${cwd}/${folder.name}`),
    )
  }
  for (const file of files.filter((x) => x.type === 'file')) {
    const newPath = path.resolve(`${cwd}/${file.name}`)
    copyLog(`Recursively copying "${file.name}" to "${getFileName(cwd)}\\${getFileName(newPath)}"`)
    fs.copyFileSync(file.path, newPath)
  }
}

function linkModules(package) {
  for (const dep of Object.keys(package.dependencies)) {
    const modulePath = path.resolve(`${cwd}/node_modules/${dep}`)
    const modulePackage = readPackage(modulePath)
    if (!modulePackage.beapiModule) continue
    const syncMatcher = syncModuleMatcher(dep)
    const syncAltMatcher = syncAltModuleMatcher(dep)
    const asyncMatcher = asyncModuleMatcher(dep)
    for (const file of walkDirSync(scriptRoute)) {
      // OLD: package.main.split('/')[1]
      const modulePathSplit = modulePackage.main.split('/')
      const modulePath = modulePathSplit.filter((x) => x !== modulePathSplit[0]).join('/')
      const router = path
        .relative(file, scriptRoute)
        .substring(3)
        .replace(/\\|\\\\/g, '/')
      const module = `${router.length ? '' : '.'}${router}/beapi_modules/${dep.replace(/\\|\\\\|\//g, '-')}/${modulePath}`
      const contents = fs.readFileSync(file, 'utf-8')
      fs.writeFileSync(
        file,
        contents
          .replace(syncMatcher, ` from '${module}'`)
          .replace(syncAltMatcher, `\nimport '${module}'`)
          .replace(asyncMatcher, `import('${module}')`),
      )
      buildLog(`Linked module "${dep}" to "${path.relative(scriptRoute, file)}"`)
    }
  }
}
// PMK: End

// Bundle Command
Yargs.command(
  'bundle',
  chalk.gray('Bundle built BeAPI project into .mcpack'),
  (y) => {
    y.usage(`${chalk.hex('#698fff')('beapi')} ${chalk.gray('bundle')} ${chalk.grey('[flags]')}`)
    y.help('help', chalk.grey('Help for command bundle.'))
    y.alias('h', 'help')
  },
  (argv) => {
    bundle(argv).catch((err) => {
      console.error(err)
      process.exit(1)
    })
  },
)
async function bundle() {
  // Ensure project is built
  build()

  const startTime = Date.now()

  // Read project descriptor files
  const package = readPackage(cwd)
  const manifest = readManifest(cwd)

  if (!package?.include?.length) throw Error('No files to bundle')

  // Verify project descriptor files
  verifyPackage(package)
  verifyManifest(manifest)

  // Create temporary directory
  const temp = fs.mkdtempSync(`${os.tmpdir()}${path.sep}`)
  bundleLog(`Created temporary directory ${temp}`)

  // Get included files
  const includedFiles = Array.isArray(package.include) ? package.include : []
  bundleLog(`Found ${includedFiles.length} items to be included in "package.json"`)

  // Loop through included files and add to temp dir
  for (const file of includedFiles) {
    recursiveCopySync(path.resolve(cwd, file), path.resolve(temp, getFileName(file)))
    bundleLog(`Copied ${file}`)
  }

  // Create zip
  bundleLog(`Creating mcpack archive`)
  await zip(temp, path.resolve(cwd, 'bundled-beapi-project.mcpack'))

  // Remove temp dir
  bundleLog(`Cleanup`)
  fs.rmSync(temp, { recursive: true })

  comLog(`Successfully Bundled ${chalk.grey(`in ${Date.now() - startTime}ms 😊`)}`)
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
Yargs.argv

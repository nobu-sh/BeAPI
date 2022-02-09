"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6103],{8665:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(3366),l=a(7294),r=a(6010),i=a(4161),o=a(9960),c="sidebar_q+wC",s="sidebarItemTitle_9G5K",m="sidebarItemList_6T4b",d="sidebarItem_cjdF",u="sidebarItemLink_zyXk",g="sidebarItemLinkActive_wcJs",p=a(5999);function v(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(c,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(s,"margin-bottom--md")},t.title),l.createElement("ul",{className:m},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:d},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:g},e.title))}))))}var h=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,o=e.children,c=(0,n.Z)(e,h),s=t&&t.items.length>0;return l.createElement(i.Z,c,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},s&&l.createElement("aside",{className:"col col--3"},l.createElement(v,{sidebar:t})),l.createElement("main",{className:(0,r.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},8561:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(7294),l=a(6010),r=a(3905),i=a(5999),o=a(9960),c=a(4996),s=a(3616),m=a(7440),d=a(6753),u="blogPostTitle_d4p0",g="blogPostData_-Im+",p="blogPostDetailsFull_xD8n",v=a(62),h="image_9q7L";var E=function(e){var t=e.author,a=t.name,l=t.title,r=t.url,i=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:r},n.createElement("img",{className:h,src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(o.Z,{href:r,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),l&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},f="authorCol_8c0z";function b(e){var t=e.authors,a=e.assets;return 0===t.length?null:n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var r;return n.createElement("div",{className:(0,l.Z)("col col--6",f),key:t},n.createElement(E,{author:Object.assign({},e,{imageURL:null!=(r=a.authorsImageUrls[t])?r:e.imageURL})}))})))}var N=function(e){var t,a,h,E,f=(h=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return h(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),N=(0,c.C)().withBaseUrl,_=e.children,Z=e.frontMatter,k=e.assets,y=e.metadata,T=e.truncated,P=e.isBlogPostPage,L=void 0!==P&&P,C=y.date,x=y.formattedDate,w=y.permalink,I=y.tags,H=y.readingTime,A=y.title,M=y.editUrl,O=y.authors,B=null!=(t=k.image)?t:Z.image,S=!L&&T,U=I.length>0;return n.createElement("article",{className:L?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(E=L?"h1":"h2",n.createElement("header",null,n.createElement(E,{className:u,itemProp:"headline"},L?A:n.createElement(o.Z,{itemProp:"url",to:w},A)),n.createElement("div",{className:(0,l.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:C,itemProp:"datePublished"},x),void 0!==H&&n.createElement(n.Fragment,null," \xb7 ",f(H))),n.createElement(b,{authors:O,assets:k}))),B&&n.createElement("meta",{itemProp:"image",content:N(B,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(r.Zo,{components:m.Z},_)),(U||T)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[p]=L,a))},U&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":S})},n.createElement(v.Z,{tags:I})),L&&M&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:M})),S&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":U})},n.createElement(o.Z,{to:y.permalink,"aria-label":"Read more about "+A},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9360:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),l=a(1217),r=a(8665),i=a(8561),o=a(5999),c=a(9960);var s=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(c.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(c.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(3616),d=a(1575);var u=function(e){var t,a=e.content,o=e.sidebar,c=a.frontMatter,u=a.assets,g=a.metadata,p=g.title,v=g.description,h=g.nextItem,E=g.prevItem,f=g.date,b=g.tags,N=g.authors,_=c.hide_table_of_contents,Z=c.keywords,k=c.toc_min_heading_level,y=c.toc_max_heading_level,T=null!=(t=u.image)?t:c.image;return n.createElement(r.Z,{wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogPostPage,sidebar:o,toc:!_&&a.toc&&a.toc.length>0?n.createElement(d.Z,{toc:a.toc,minHeadingLevel:k,maxHeadingLevel:y}):void 0},n.createElement(l.Z,{title:p,description:v,keywords:Z,image:T},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:f}),N.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:N.map((function(e){return e.url})).filter(Boolean).join(",")}),b.length>0&&n.createElement("meta",{property:"article:tag",content:b.map((function(e){return e.label})).join(",")})),n.createElement(i.Z,{frontMatter:c,assets:u,metadata:g,isBlogPostPage:!0},n.createElement(a,null)),(h||E)&&n.createElement(s,{nextItem:h,prevItem:E}))}},6753:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),l=a(5999),r=a(7462),i=a(3366),o=a(6010),c="iconEdit_mS5F",s=["className"];var m=function(e){var t=e.className,a=(0,i.Z)(e,s);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},d=a(3616);function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:d.kM.common.editThisPage},n.createElement(m,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},9649:function(e,t,a){a.d(t,{N:function(){return u},Z:function(){return g}});var n=a(3366),l=a(7462),r=a(7294),i=a(6010),o=a(5999),c=a(3616),s="anchorWithStickyNavbar_y2LR",m="anchorWithHideOnScrollNavbar_3ly5",d=["id"],u=function(e){var t=Object.assign({},e);return r.createElement("header",null,r.createElement("h1",(0,l.Z)({},t,{id:void 0}),t.children))},g=function(e){return"h1"===e?u:(t=e,function(e){var a,u=e.id,g=(0,n.Z)(e,d),p=(0,c.LU)().navbar.hideOnScroll;return u?r.createElement(t,(0,l.Z)({},g,{className:(0,i.Z)("anchor",(a={},a[m]=p,a[s]=!p,a)),id:u}),g.children,r.createElement("a",{className:"hash-link",href:"#"+u,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,g)});var t}},7440:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(7462),l=a(3366),r=a(7294),i=a(2859),o=a(9960),c=a(3899),s=a(9649),m=a(6010),d=a(3616),u="details_h+cY";function g(e){var t=Object.assign({},e);return r.createElement(d.PO,(0,n.Z)({},t,{className:(0,m.Z)("alert alert--info",u,t.className)}))}var p=["mdxType","originalType"];var v={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){var n=e.props,i=(n.mdxType,n.originalType,(0,l.Z)(n,p));return r.createElement(e.props.originalType,i)}return e}(e)}));return r.createElement(i.Z,e,t)},code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(c.Z,e):r.createElement("code",e)},a:function(e){return r.createElement(o.Z,e)},pre:function(e){var t,a=e.children;return(0,r.isValidElement)(a)&&(0,r.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?a.props.children:r.createElement(c.Z,(0,r.isValidElement)(a)?null==a?void 0:a.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=r.createElement(r.Fragment,null,t.filter((function(e){return e!==a})));return r.createElement(g,(0,n.Z)({},e,{summary:a}),l)},h1:(0,s.Z)("h1"),h2:(0,s.Z)("h2"),h3:(0,s.Z)("h3"),h4:(0,s.Z)("h4"),h5:(0,s.Z)("h5"),h6:(0,s.Z)("h6")}},5002:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7462),l=a(3366),r=a(7294),i=a(3616),o=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function c(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(c,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function s(e){var t=e.toc,a=e.className,s=void 0===a?"table-of-contents table-of-contents__left-border":a,m=e.linkClassName,d=void 0===m?"table-of-contents__link":m,u=e.linkActiveClassName,g=void 0===u?void 0:u,p=e.minHeadingLevel,v=e.maxHeadingLevel,h=(0,l.Z)(e,o),E=(0,i.LU)(),f=null!=p?p:E.tableOfContents.minHeadingLevel,b=null!=v?v:E.tableOfContents.maxHeadingLevel,N=(0,i.DA)({toc:t,minHeadingLevel:f,maxHeadingLevel:b}),_=(0,r.useMemo)((function(){if(d&&g)return{linkClassName:d,linkActiveClassName:g,minHeadingLevel:f,maxHeadingLevel:b}}),[d,g,f,b]);return(0,i.Si)(_),r.createElement(c,(0,n.Z)({toc:N,className:s,linkClassName:d},h))}},1575:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7462),l=a(3366),r=a(7294),i=a(6010),o=a(5002),c="tableOfContents_vrFS",s=["className"];var m=function(e){var t=e.className,a=(0,l.Z)(e,s);return r.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",t)},r.createElement(o.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},7774:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),l=a(6010),r=a(9960),i="tag_WK-t",o="tagRegular_LXbV",c="tagWithCount_S5Zl";var s=function(e){var t,a=e.permalink,s=e.name,m=e.count;return n.createElement(r.Z,{href:a,className:(0,l.Z)(i,(t={},t[o]=!m,t[c]=m,t))},s,m&&n.createElement("span",null,m))}},62:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),l=a(6010),r=a(5999),i=a(7774),o="tags_NBRY",c="tag_F03v";function s(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:c},n.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);
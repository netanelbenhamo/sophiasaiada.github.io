(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{W27q:function(t,e,r){"use strict";r.r(e);var n=r("q1tI"),o=r.n(n),c=r("txSG"),a=r("Wbzz"),s=r("bz+c"),i=(r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("91GP"),r("7ljp"));r("jm62"),r("ioFf"),r("KKXr"),r("pIFo"),r("Bs6F");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var b=function(t){var e,r;function n(e){var r;return(r=t.call(this,e)||this).state={prefix:e.prefix.replace(/ /g," "),words:e.words.map((function(t){var e=t.word;return{opacity:0,color:t.color,letters:r.fixRTL(e).replace(/ /g," ").split("").map((function(t){return{content:t,mode:"out"}}))}})),currentWordIndex:0},console.log(r.state),r.setLetterMode=r.setLetterMode.bind(p(r)),r.animateLetterMode=r.animateLetterMode.bind(p(r)),r.changeWord=r.changeWord.bind(p(r)),r}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var c=n.prototype;return c.componentDidMount=function(){var t=this;this.changeWord(),this.changeWordInterval=setInterval((function(){return t.changeWord()}),4e3)},c.componentWillUnmount=function(){this.changeWordInterval&&clearInterval(this.changeWordInterval)},c.animateLetterMode=function(t,e,r){var n=this;setTimeout((function(){n.setLetterMode(t,e,r)}),80*e)},c.setLetterMode=function(t,e,r){this.setState({words:this.state.words.map((function(n,o){return d({},n,{letters:o===t?n.letters.map((function(t,n){return{content:t.content,mode:n===e?r:t.mode}})):n.letters})}))})},c.changeWord=function(){var t=this,e=this.state.currentWordIndex,r=e===this.state.words.length-1?0:e+1;this.state.words[e].letters.forEach((function(r,n){t.animateLetterMode(e,n,"out")})),this.state.words[r].letters.forEach((function(e,n){t.setLetterMode(r,n,"behind")})),setTimeout((function(){t.state.words[r].letters.forEach((function(e,n){t.animateLetterMode(r,n,"in")})),t.setState({words:t.state.words.map((function(t,e){return d({},t,{opacity:e===r?1:t.opacity})})),currentWordIndex:r})}),300)},c.fixRTL=function(t){return t.replace(/[a-zA-Z\-]+/g,(function(t){return t.split("").reverse().join("")}))},c.render=function(){return o.a.createElement("div",{className:"word-changer--container"},o.a.createElement("div",{className:"word-changer--prefix"},this.state.prefix),o.a.createElement("div",{className:"word-changer--word-container"},this.state.words.map((function(t,e){return o.a.createElement("div",{className:"word-changer--word",style:{opacity:t.opacity,color:t.color},key:"word-"+e},t.letters.map((function(t,r){var n=t.content,c=t.mode;return o.a.createElement("div",{className:"word-changer--letter "+c,key:"letter-"+e+"-"+r},n)})))}))))},n}(o.a.Component);var m,h=(m="Text",function(t){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.mdx)("div",t)}),f={_frontmatter:{}};function j(t){var e=t.components,r=function(t,e){if(null==t)return{};var r,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,["components"]);return Object(i.mdx)("wrapper",Object.assign({},f,r,{components:e,mdxType:"MDXLayout"}),Object(i.mdx)(h,{sx:{fontFamily:"heading",fontSize:[4,5,6],color:"heading"},mdxType:"Text"},Object(i.mdx)(h,{sx:{mb:-4},mdxType:"Text"},"היי, אני סופיה,"),Object(i.mdx)(b,{prefix:"מפתחת ",words:[{color:"#29b1d6",word:"React"},{color:"#9c27b0",word:"Full-Stack"},{color:"#1976d2",word:"iOS"},{color:"#d19600",word:"Python"},{color:"#689f38",word:"Android"}],mdxType:"WordChanger"})),Object(i.mdx)("p",null,"מפתחת Full-Stack במובייל וב-Web עם ניסיון של שנה וחצי.",Object(i.mdx)("br",null),"ב-2020 סיימתי תואר ראשון במדעי המחשב ומתתמטיקה בהצטיינות.",Object(i.mdx)("br",null),"חובבת גרפים ואלגוריתמים, אבל לא יצא לי לעסוק בזה באופן מקצועי.",Object(i.mdx)("br",null)))}j.isMDXComponent=!0;var O={_frontmatter:{}};function v(t){var e=t.components,r=function(t,e){if(null==t)return{};var r,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,["components"]);return Object(i.mdx)("wrapper",Object.assign({},O,r,{components:e,mdxType:"MDXLayout"}))}v.isMDXComponent=!0;var g=r("oymC"),y=r("sTtg"),w=function(t){var e=t.children;return Object(c.h)("section",{sx:{mb:[5,5,6],ul:{margin:0,padding:0},li:{listStyle:"none",mb:3},a:{variant:"links.listItem"}}},e)},x=r("+yNS"),S=r("n/Q7"),W=(r("f3/d"),r("izhR")),M=(r("SCpI"),function(t){var e=t.projects;return Object(c.h)("section",{sx:{mb:[3,4,5]}},e.map((function(t){return Object(c.h)(W.a,{mb:4,className:"project"},Object(c.h)(c.d.a,{as:"a",href:t.url,sx:{fontWeight:"semibold",fontSize:[1,2,3],color:"text"}},t.name),t.stars&&Object(c.h)("div",{className:"project--stars",sx:{display:["none","block"]}},t.stars," GitHub Stars"),Object(c.h)("div",{className:"project--description",dangerouslySetInnerHTML:{__html:t.description}}),Object(c.h)("p",{sx:{color:"secondary",mt:1,mb:0,a:{color:"secondary"},fontSize:[1,1,2]}},t.tags&&Object(c.h)(o.a.Fragment,null,t.tags.map((function(t,e){return Object(c.h)("div",{className:"project--tag",key:t},t)}))),t.stars&&Object(c.h)("div",{className:"project--tag",sx:{display:["inline-block","none"]}},t.stars," GitHub Stars")))})))}),L=function(t){var e=t.posts,r=Object(x.a)(),n=r.basePath,o=r.blogPath,i=r.projects;return Object(c.h)(s.a,null,Object(c.h)("section",{sx:{mb:[5,6,7],p:{fontSize:[1,2,3],mt:2}}},Object(c.h)(j,null)),Object(c.h)(g.a,{text:"פוסטים אחרונים"},Object(c.h)(a.Link,{to:Object(S.a)("/"+n+"/"+o)},"לכל הפוסטים")),Object(c.h)(y.a,{posts:e,showTags:!1}),Object(c.h)(w,null,Object(c.h)(v,null)),Object(c.h)(g.a,{text:"פרויקטים"},Object(c.h)("a",{href:"https://github.com/SophiaSaiada"},"ל-GitHub")),Object(c.h)(M,{projects:i}),Object(c.h)(w,null,Object(c.h)(v,null)))};r.d(e,"query",(function(){return P}));e.default=function(t){var e=t.data.allPost;return o.a.createElement(L,{posts:e.nodes})};var P="1043101128"}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-homepage-query-tsx-207910df6bff71bff32b.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},I5cv:function(t,e,r){var n=r("XKFU"),c=r("Kuth"),o=r("2OiF"),u=r("y3w9"),i=r("0/R4"),a=r("eeVq"),p=r("8MEG"),f=(r("dyZX").Reflect||{}).construct,l=a((function(){function t(){}return!(f((function(){}),[],t)instanceof t)})),s=!a((function(){f((function(){}))}));n(n.S+n.F*(l||s),"Reflect",{construct:function(t,e){o(t),u(e);var r=arguments.length<3?t:o(arguments[2]);if(s&&!l)return f(t,e,r);if(t==r){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return n.push.apply(n,e),new(p.apply(t,n))}var a=r.prototype,b=c(i(a)?a:Object.prototype),y=Function.apply.call(t,b,e);return i(y)?y:b}})},X8hv:function(t,e,r){function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function c(t,e,r){return(c=n()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var c=new(Function.bind.apply(t,n));return r&&o(c,r.prototype),c}).apply(null,arguments)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r("jm62"),r("yt8O"),r("RW0V"),r("XfO3"),r("HEwt"),r("rE2o"),r("ioFf"),r("rGqo"),r("/SS/"),r("a1Th"),r("Btvt"),r("I5cv"),r("I5cv"),r("/SS/"),r("XfO3"),r("HEwt"),r("a1Th"),r("rE2o"),r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var f=r("q1tI"),l=r("7ljp"),s=l.useMDXComponents,b=l.mdx,y=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.components,n=t.children,o=function(t,e){if(null==t)return{};var r,n,c={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(c[r]=t[r]);return c}(t,["scope","components","children"]),i=s(r),p=y(e),l=f.useMemo((function(){if(!n)return null;var t=a({React:f,mdx:b},p),e=Object.keys(t),r=e.map((function(e){return t[e]}));return c(Function,["_fn"].concat(u(e),[""+n])).apply(void 0,[{}].concat(u(r)))}),[n,e]);return f.createElement(l,a({components:i},o))}},xdpm:function(t,e,r){"use strict";r.r(e);r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var n=r("q1tI"),c=r.n(n),o=r("txSG"),u=r("izhR"),i=r("A2+M"),a=r("bz+c"),p=r("TI0m"),f=r("GIzu"),l=(r("vg9a"),["32px","16px","8px","4px"].map((function(t){return"rgba(0, 0, 0, 0.15) 0px "+t+" "+t+" 0px"})),function(t){var e=t.data.post;return Object(o.h)(a.a,null,Object(o.h)(f.a,{title:e.title,description:e.description?e.description:e.excerpt,image:e.banner?e.banner.childImageSharp.resize.src:void 0}),Object(o.h)(u.c,{variant:"h2",as:"h2"},e.title),Object(o.h)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},Object(o.h)("time",null,e.date),e.tags&&Object(o.h)(c.a.Fragment,null," — ",Object(o.h)(p.a,{tags:e.tags}))),Object(o.h)("section",{sx:{my:5}},Object(o.h)(i.MDXRenderer,null,e.body)))});function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"query",(function(){return O}));e.default=function(t){var e=t.data,r=e.post;return c.a.createElement(l,{data:b({},e,{post:r})})};var O="1197585309"}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-cd26edfd0417c5285bd3.js.map
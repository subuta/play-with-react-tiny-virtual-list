!function(e){function t(t){for(var r,i,c=t[0],u=t[1],l=t[2],f=0,m=[];f<c.length;f++)i=c[f],o[i]&&m.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);m.length;)m.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/play-with-react-tiny-virtual-list/";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=u;a.push([42,1]),n()}({10:function(e,t,n){"use strict";var r=n(6),o=n.n(r),a=n(33);function i(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}var c=new(n.n(a).a)({max:500,maxAge:36e5});t.a=function(){var e=function(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function c(e){i(a,r,o,c,u,"next",e)}function u(e){i(a,r,o,c,u,"throw",e)}c(void 0)})}}(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c.has(t)){e.next=5;break}return e.next=3,window.fetch(t).then(function(e){return e.json()});case 3:n=e.sent,c.set(t,n);case 5:return e.abrupt("return",c.get(t));case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},13:function(e,t,n){"use strict";var r=n(6),o=n.n(r),a=n(2),i=n(3),c=n.n(i);function u(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}t.a=Object(a.b)(Object(a.h)("vh","setVh",0),Object(a.f)(function(e){var t=e.setVh;return{listen:function(){var e=c.a.debounce(function(e){return t(window.innerHeight)},300);return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}}}),Object(a.c)({componentDidMount:function(){var e=function(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){u(a,r,o,i,c,"next",e)}function c(e){u(a,r,o,i,c,"throw",e)}i(void 0)})}}(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.unlisten=this.props.listen();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),componentWillUnmount:function(){this.unlisten&&this.unlisten()}}))},17:function(e,t,n){"use strict";var r=n(2),o=n(3),a=n.n(o),i=n(40);t.a=Object(r.b)(Object(r.h)("size","setSize",{height:0,width:0}),Object(r.e)(function(e){var t=e.setSize,n=null,r=a.a.noop,o=new i.a(function(e){var n=a.a.first(e).contentRect,r=n.top,o=n.right,i=n.bottom,c=n.left,u=n.height,l=n.width;t({height:r+(i-u)+u,width:c+(o-l)+l})}),c=function(){if(n)return o.observe(n),function(){o.unobserve(n),n=null}};return{observe:c,setSizeRef:function(){return function(e){n=e,r=c()}},unobserve:function(){return function(){r()}}}}),Object(r.c)({componentWillUnmount:function(){this.props.unobserve()}}))},18:function(e,t,n){"use strict";var r=n(2),o=n(3),a=n.n(o);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isReversed,n=void 0!==t&&t,o=e.virtualRowsSize,i=void 0===o?0:o,c=e.estimatedSize,u=void 0===c?100:c;return Object(r.b)(Object(r.i)(function(e){return{overScanCount:3,initialScrollToIndex:e.rows.length+i-1}},{}),Object(r.g)(function(e,t){return e.rows.length!==t.rows.length},function(e){return{itemCount:e.rows.length+i}}),Object(r.e)(function(){var e=null,t=[],r=a.a.noop,o=a.a.noop;return{getActualIndex:function(e){var t=e.itemCount;return function(e){return n?t-e-1:e+1}},setListRef:function(){return function(t){null!==t&&(e=t,window.listRef=e,r=function(t){e.recomputeSizes(t)},o=function(){e.forceUpdate()})}},cacheHeight:function(){return function(e,n){t[e]=n,r(e)}},forceUpdateList:function(){return function(){return o()}},getCachedHeight:function(){return function(){return t}}}}),Object(r.e)(function(e){var t=e.overScanCount,n={startIndex:-1,stopIndex:-1},r="SCROLL_DIRECTION_NONE";return{compareScroll:function(){return function(e){if(-1===n.startIndex&&(n.startIndex=e.startIndex),n.startIndex===e.startIndex)return{scrollDirection:"SCROLL_DIRECTION_NONE"};var o="SCROLL_DIRECTION_UP"===(r=n.startIndex>e.startIndex?"SCROLL_DIRECTION_UP":"SCROLL_DIRECTION_DOWN")?e.startIndex:e.stopIndex,a="SCROLL_DIRECTION_UP"===r?e.startIndex+t:e.stopIndex-t;return n=e,{scrollDirection:r,currentIndex:o,visibleCurrentIndex:a}}}}}),Object(r.e)(function(e){var t=e.onLoadMore||function(){};return t=a.a.debounce(t,100,{leading:!0,trailing:!1}),{onItemsRendered:function(e){return function(r){var o=e.rows,a=e.getActualIndex,i=e.compareScroll,c=a(n?r.stopIndex:r.startIndex),u=a(n?r.startIndex:r.stopIndex),l=i({startIndex:c,stopIndex:u}),s=l.scrollDirection,f=l.currentIndex;if("SCROLL_DIRECTION_NONE"!==s){var m="SCROLL_DIRECTION_UP"===s&&0===c,p="SCROLL_DIRECTION_DOWN"===s&&u>=o.length-1;(m||p)&&requestAnimationFrame(function(){t({scrollDirection:s,currentIndex:f,isAtFirst:m,isAtLast:p})})}}},itemSize:function(e){var t=e.getCachedHeight;return function(e){return t()[e]||u}}}}))}},32:function(e,t,n){"use strict";(function(e){var r=n(6),o=n.n(r),a=n(0),i=n.n(a),c=n(7),u=n(11),l=n(12),s=n(10),f=n(3),m=n.n(f),p=n(2),d=n(13);function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}var g=window.innerWidth>=576,b=Object(p.b)(Object(c.hot)(e),d.a,Object(p.h)("photos","setPhotos",[]),Object(p.c)({componentDidMount:function(){var e=function(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){v(a,r,o,i,c,"next",e)}function c(e){v(a,r,o,i,c,"throw",e)}i(void 0)})}}(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.a)("https://picsum.photos/list");case 2:t=e.sent,t=m.a.map(t,function(e){return e.randomSize=g?100*m.a.random(3,8):100*m.a.random(1,4),e}),this.props.setPhotos(t);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}),Object(p.g)(function(e,t){return e.photos.length!==t.photos.length},function(e){var t=e.photos;return{renderItem:function(e){var n=e.style,r=e.index,o=t[r];return i.a.createElement("div",{className:"Row",style:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){h(e,t,n[t])})}return e}({},n),key:r},i.a.createElement("span",{style:{background:"white",position:"absolute",top:0,left:0,padding:"0 8px"}},"Row #",r," By ",o.author,i.a.createElement("small",null,"randomSize=",o.randomSize)),i.a.createElement("a",{href:o.post_url,target:"_blank"},i.a.createElement("img",{src:"https://picsum.photos/".concat(o.randomSize,"?image=").concat(o.id),alt:""})))}}}));t.a=b(function(e){var t=e.photos,n=e.renderItem,r=e.vh;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{width:"100vw",height:r,itemCount:t.length,renderItem:n,itemSize:function(e){return t[e].randomSize}}),i.a.createElement("footer",null,i.a.createElement("span",null,i.a.createElement(u.a,{to:"/pokemons"},"/pokemons")," | ",i.a.createElement(u.a,{to:"/load-more"},"/load-more")),i.a.createElement("span",{className:"c-comment"},"SEE: ",i.a.createElement("a",{href:"https://picsum.photos/",target:"_blank"},"Lorem Picsum")," for more images.")))})}).call(this,n(14)(e))},36:function(e,t,n){"use strict";(function(e){var r=n(6),o=n.n(r),a=n(0),i=n.n(a),c=n(7),u=n(11),l=n(12),s=n(37),f=n.n(s),m=n(10),p=n(3),d=n.n(p),h=n(38),v=n(2),g=n(13),b=n(18);function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}var O=Object(v.b)(Object(c.hot)(e),g.a,Object(v.i)(function(){return{rows:[],scrollToIndex:null,draftScrollToIndex:""}},{setRows:function(){return function(e){return{rows:e}}},setDraftScrollToIndex:function(){return function(e){return{draftScrollToIndex:e.target.value}}},setScrollToIndex:function(){return function(e){return""===e?{scrollToIndex:null}:{scrollToIndex:d.a.isNaN(Number(e))?null:Number(e)}}}}),Object(v.c)({componentDidMount:function(){var e=function(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){y(a,r,o,i,c,"next",e)}function c(e){y(a,r,o,i,c,"throw",e)}i(void 0)})}}(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)("https://pokeapi.co/api/v2/pokemon/");case 2:t=e.sent,n=d.a.map(t.results,function(e){return e.id=e.url.match("https://pokeapi.co/api/v2/pokemon/([0-9]+)/")[1],e}),this.props.setRows(n);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}),Object(b.a)({estimatedSize:200}),Object(v.g)(function(e,t){return!d.a.isEqual(e.location,t.location)},function(e){var t=e.location;return{query:{lang:f.a.parse(t.search.split("?")[1]).lang||"en"}}}),Object(v.g)(function(e,t){var n=e.rows.length!==t.rows.length,r=!d.a.isEqual(e.query,t.query);return n||r},function(e){var t=e.rows,n=e.query,r=e.cacheHeight,o=e.forceUpdateList;return d.a.delay(function(){return o()}),{renderItem:function(e){var o=e.style,a=e.index,c=t[a];return i.a.createElement("div",{className:"row",style:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){w(e,t,n[t])})}return e}({},o),key:a},i.a.createElement(h.a,{pokemon:c,lang:n.lang,onMeasure:function(e){var t=e.height;return r(a,t)}}))}}}));t.a=O(function(e){var t=e.query,n=e.vh,r=e.rows,o=e.draftScrollToIndex,a=e.setDraftScrollToIndex,c=e.setScrollToIndex,s=e.scrollToIndex,f=e.renderItem,m=e.setListRef,p=e.itemSize,d="en";"en"===t.lang?d="ja":"ja"===t.lang?d="random":"random"===t.lang&&(d="en");var h=r.length;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"c-search-form"},i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c(o)}},i.a.createElement("label",null,i.a.createElement("span",{style:{marginRight:4}},"No"),i.a.createElement("input",{type:"number",onChange:a,value:o,style:{width:40}})),i.a.createElement("button",{style:{marginLeft:8},onClick:function(){return c(o)}},"Go"))),i.a.createElement(l.a,{lang:t.lang,width:"100vw",height:n,itemCount:h,renderItem:f,itemSize:p,overscanCount:5,scrollToIndex:null==s?null:s-1,ref:m}),i.a.createElement("footer",null,i.a.createElement("span",null,i.a.createElement(u.a,{to:"/load-more"},"/load-more")," | ",i.a.createElement(u.a,{to:"/images"},"/images")," | ",i.a.createElement(u.a,{to:"/pokemons?lang=".concat(d),style:{marginRight:16}},"/pokemons?lang=",d)),i.a.createElement("span",{className:"c-comment"},"SEE: ",i.a.createElement("a",{href:"https://pokeapi.co/",target:"_blank"},"PokéAPI")," for more Pokemons!")))})}).call(this,n(14)(e))},38:function(e,t,n){"use strict";(function(e){var r=n(6),o=n.n(r),a=n(0),i=n.n(a),c=n(7),u=n(39),l=n(10),s=n(17),f=n(3),m=n.n(f),p=n(2);function d(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}var h=function(e){return new u.a(function(){var t=function(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){d(a,r,o,i,c,"next",e)}function c(e){d(a,r,o,i,c,"throw",e)}i(void 0)})}}(o.a.mark(function t(n){var r,a,i,c,u,s,f,p,d;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.a)("https://pokeapi.co/api/v2/pokemon/".concat(e,"/"));case 2:return r=t.sent,a=m.a.get(r,"species.url","https://pokeapi.co/api/v2/pokemon-species/".concat(e,"/")),t.next=6,Object(l.a)(a);case 6:i=t.sent,c=m.a.get(m.a.sample(i.names),"language.name"),s=(u=function(e){var t=m.a.groupBy(e,"language.name"),n=m.a.pick(t,["ja","en",c]);return m.a.transform(n,function(e,t,n){e[n]=m.a.first(t)},{})})(i.names),f=m.a.get(r,"sprites.front_default",null),p=m.a.get(r,"sprites.back_default",null),d=u(i.flavor_text_entries),n({id:e,frontImage:f,backImage:p,names:s,flavorTexts:d,randomLang:c});case 14:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())},v=Object(p.b)(Object(c.hot)(e),s.a,Object(p.g)(function(e,t){return!m.a.isEqual(e.size,t.size)},function(e){var t=e.size,n=e.onMeasure,r=void 0===n?m.a.noop:n;0!==t.height&&r(t)}),Object(p.h)("detail","setDetail",null),Object(p.c)({componentDidMount:function(){var e=this.props,t=e.pokemon,n=e.setDetail;e.observe;this.promise=h(t.id).then(function(e){return n(e)})},componentWillUnmount:function(){this.promise&&this.promise.cancel()}}),Object(p.a)(function(e){return!e.detail},Object(p.d)(function(){return null}),m.a.identity));t.a=v(function(e){var t=e.detail,n=void 0===t?{}:t,r=e.pokemon,o=e.setSizeRef,a=n.id,c=n.names,u=void 0===c?{}:c,l=n.flavorTexts,s=void 0===l?{}:l,f=n.frontImage,m=n.backImage,p="random"===e.lang?n.randomLang:e.lang,d=(u[p]?u[p]:u.en).name,h=s[p]?s[p]:s.en,v=h.flavor_text,g=h.version;return i.a.createElement("div",{ref:o,style:{color:"white"}},i.a.createElement("p",{style:{margin:0}},i.a.createElement("span",{style:{background:"white",padding:"0 8px",color:"black"}},"No.",a," name=",d," lang=",p)),i.a.createElement("a",{href:r.url,target:"_blank"},i.a.createElement("img",{src:f,style:{minHeight:96},alt:""}),i.a.createElement("img",{src:m,style:{minHeight:96},alt:""})),i.a.createElement("pre",{style:{margin:"0 0 0 8px",padding:"0 0 16px",wordBreak:"break-word",whiteSpace:"pre-wrap"}},v,i.a.createElement("b",null,"(",g.name,")")))})}).call(this,n(14)(e))},39:function(e,t,n){"use strict";var r=n(24),o=n.n(r);o.a.config({cancellation:!0}),t.a=o.a},41:function(e,t,n){"use strict";(function(e){var r=n(0),o=n.n(r),a=n(7),i=n(11),c=n(25),u=n.n(c),l=n(3),s=n.n(l),f=n(12),m=n(2),p=n(13),d=n(17),h=n(18);function v(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){b(e,t,n[t])})}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=Object(m.b)(d.a,Object(m.g)(function(e,t){return!s.a.isEqual(e.size,t.size)},function(e){var t=e.size,n=e.onMeasure,r=void 0===n?s.a.noop:n;0!==t.height&&r(t)}))(function(e){var t=e.text,n=e.setSizeRef,r=e.style;return o.a.createElement("p",{ref:n,style:g({},r,{margin:0})},t)}),y=Object(m.b)(Object(a.hot)(e),p.a,Object(m.h)("rows","setRows",s.a.fill(new Array(100),1)),Object(m.e)({onLoadMore:function(e){var t=e.rows,n=e.setRows;return function(e){e.isAtFirst||s.a.delay(function(){n(v(t).concat(v(s.a.fill(new Array(100),1))))},300)}}}),Object(h.a)({isReversed:!0,virtualRowsSize:50,estimatedSize:200}),Object(m.g)(function(e,t){return e.itemCount!==t.itemCount},function(e){var t=e.rows,n=e.getActualIndex,r=e.cacheHeight,a=e.forceUpdateList;return s.a.delay(function(){return a()}),{renderItem:function(e){var a=e.index,i=e.style,c=n(a),l=t[c];u.a.seed(a);var s=u.a.lorem.paragraphs();return o.a.createElement("div",{className:"row-".concat(a),style:g({},i),key:a},o.a.createElement("span",{style:{background:"white",color:"black",position:"absolute",top:0,left:0,height:20}},l?"Row ".concat(c):"Loading..."),o.a.createElement(w,{text:l?s:"",style:{paddingTop:20},onMeasure:function(e){var t=e.height;return r(a,t)}}))}}}))(function(e){var t=e.vh,n=e.setListRef,r=e.overScanCount,a=e.itemCount,c=e.initialScrollToIndex,u=e.onItemsRendered,l=e.renderItem,s=e.itemSize;return o.a.createElement("div",{style:{color:"white"}},o.a.createElement(f.a,{ref:n,width:"auto",height:t||window.innerHeight,itemCount:a,overscanCount:r,renderItem:l,itemSize:s,scrollToIndex:c,onItemsRendered:u}),o.a.createElement("footer",null,o.a.createElement("span",null,o.a.createElement(i.a,{to:"/images"},"/images")," | ",o.a.createElement(i.a,{to:"/pokemons"},"/pokemons")),o.a.createElement("span",{className:"c-comment"},"Scroll up to load more(Slack-like behavior).")))});t.a=y}).call(this,n(14)(e))},42:function(e,t,n){e.exports=n(43)},43:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(31),i=n.n(a),c=n(1111),u=n(1112),l=n(1110),s=n(26),f=n(32),m=n(36),p=n(41),d=o.a.createElement("div",null,o.a.createElement("style",{type:"text/css"},'\n      body {\n        background-color: #242424;\n        margin: 0;\n        font-family: menlo, "andale mono", "courier new", system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;\n      }\n\n      footer {\n        position: fixed;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        padding: 8px;\n        background-color: white;\n        color: #242424;\n        text-align: right;\n        display: flex;\n        justify-content: flex-start;\n        flex-wrap: wrap;\n      }\n\n      img {\n          max-width: 100vw;\n      }\n\n      .c-comment {\n        margin: 8px 0 0;\n      }\n\n      .c-search-form {\n        position: fixed;\n        top: 0;\n        right: 0;\n        z-index: 100;\n        background-color: white;\n        padding: 8px;\n      }\n\n      @media (min-width: 576px) {\n        footer {\n            padding: 8px 8px 32px;\n            justify-content: space-between;\n        }\n\n        img {\n          max-width: initial;\n        }\n\n        .c-credits {\n          margin: 0;\n        }\n      }\n    '),o.a.createElement(c.a,null,o.a.createElement(u.a,null,o.a.createElement(l.a,{exact:!0,from:"/",to:"/images"}),o.a.createElement(s.a,{exact:!0,path:"/images",component:f.a}),o.a.createElement(s.a,{exact:!0,path:"/pokemons",component:m.a}),o.a.createElement(s.a,{exact:!0,path:"/load-more",component:p.a}))));i.a.render(d,document.querySelector("#app"))}});
//# sourceMappingURL=main.ce57e4d3.js.map
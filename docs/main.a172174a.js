!function(e){function n(n){for(var r,i,c=n[0],u=n[1],l=n[2],f=0,m=[];f<c.length;f++)i=c[f],o[i]&&m.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(n);m.length;)m.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var u=t[c];0!==o[u]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={0:0},a=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/play-with-react-tiny-virtual-list/";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var s=u;a.push([39,1]),t()}({10:function(e,n,t){"use strict";var r=t(6),o=t.n(r),a=t(29);function i(e,n,t,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}var c=new(t.n(a).a)({max:500,maxAge:36e5});n.a=function(){var e=function(e){return function(){var n=this,t=arguments;return new Promise(function(r,o){var a=e.apply(n,t);function c(e){i(a,r,o,c,u,"next",e)}function u(e){i(a,r,o,c,u,"throw",e)}c(void 0)})}}(o.a.mark(function e(n){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c.has(n)){e.next=5;break}return e.next=3,window.fetch(n).then(function(e){return e.json()});case 3:t=e.sent,c.set(n,t);case 5:return e.abrupt("return",c.get(n));case 6:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},13:function(e,n,t){"use strict";var r=t(6),o=t.n(r),a=t(2),i=t(3),c=t.n(i);function u(e,n,t,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}n.a=Object(a.b)(Object(a.h)("vh","setVh",0),Object(a.f)(function(e){var n=e.setVh;return{listen:function(){var e=c.a.debounce(function(e){return n(window.innerHeight)},300);return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}}}),Object(a.c)({componentDidMount:function(){var e=function(e){return function(){var n=this,t=arguments;return new Promise(function(r,o){var a=e.apply(n,t);function i(e){u(a,r,o,i,c,"next",e)}function c(e){u(a,r,o,i,c,"throw",e)}i(void 0)})}}(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.unlisten=this.props.listen();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),componentWillUnmount:function(){this.unlisten&&this.unlisten()}}))},28:function(e,n,t){"use strict";(function(e){var r=t(6),o=t.n(r),a=t(0),i=t.n(a),c=t(7),u=t(11),l=t(12),s=t(10),f=t(3),m=t.n(f),p=t(2),d=t(13);function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function v(e,n,t,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}var g=window.innerWidth>=576,b=Object(p.b)(Object(c.hot)(e),d.a,Object(p.h)("photos","setPhotos",[]),Object(p.c)({componentDidMount:function(){var e=function(e){return function(){var n=this,t=arguments;return new Promise(function(r,o){var a=e.apply(n,t);function i(e){v(a,r,o,i,c,"next",e)}function c(e){v(a,r,o,i,c,"throw",e)}i(void 0)})}}(o.a.mark(function e(){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.a)("https://picsum.photos/list");case 2:n=e.sent,n=m.a.map(n,function(e){return e.randomSize=g?100*m.a.random(3,8):100*m.a.random(1,4),e}),this.props.setPhotos(n);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}),Object(p.g)(function(e,n){return e.photos.length!==n.photos.length},function(e){var n=e.photos;return{renderItem:function(e){var t=e.style,r=e.index,o=n[r];return i.a.createElement("div",{className:"Row",style:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){h(e,n,t[n])})}return e}({},t),key:r},i.a.createElement("span",{style:{background:"white",position:"absolute",top:0,left:0,padding:"0 8px"}},"Row #",r," By ",o.author,i.a.createElement("small",null,"randomSize=",o.randomSize)),i.a.createElement("a",{href:o.post_url,target:"_blank"},i.a.createElement("img",{src:"https://picsum.photos/".concat(o.randomSize,"?image=").concat(o.id),alt:""})))}}}));n.a=b(function(e){var n=e.photos,t=e.renderItem,r=e.vh;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{width:"100vw",height:r,itemCount:n.length,renderItem:t,itemSize:function(e){return n[e].randomSize}}),i.a.createElement("footer",null,i.a.createElement("span",null,i.a.createElement(u.a,{to:"/pokemons"},"/pokemons")," | ",i.a.createElement(u.a,{to:"/load-more"},"/load-more")),i.a.createElement("span",{className:"c-comment"},"SEE: ",i.a.createElement("a",{href:"https://picsum.photos/",target:"_blank"},"Lorem Picsum")," for more images.")))})}).call(this,t(15)(e))},32:function(e,n,t){"use strict";(function(e){var r=t(6),o=t.n(r),a=t(0),i=t.n(a),c=t(7),u=t(11),l=t(12),s=t(33),f=t.n(s),m=t(10),p=t(3),d=t.n(p),h=t(34),v=t(2),g=t(13);function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w(e,n,t,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}var y=Object(v.b)(Object(c.hot)(e),g.a,Object(v.g)(function(e,n){return!d.a.isEqual(e.location,n.location)},function(e){var n=e.location;return{query:{lang:f.a.parse(n.search.split("?")[1]).lang||"en"}}}),Object(v.i)(function(){return{pokemons:[],scrollToIndex:null,draftScrollToIndex:""}},{setPokemons:function(){return function(e){return{pokemons:e}}},setDraftScrollToIndex:function(){return function(e){return{draftScrollToIndex:e.target.value}}},setScrollToIndex:function(){return function(e){return""===e?{scrollToIndex:null}:{scrollToIndex:d.a.isNaN(Number(e))?null:Number(e)}}}}),Object(v.c)({componentDidMount:function(){var e=function(e){return function(){var n=this,t=arguments;return new Promise(function(r,o){var a=e.apply(n,t);function i(e){w(a,r,o,i,c,"next",e)}function c(e){w(a,r,o,i,c,"throw",e)}i(void 0)})}}(o.a.mark(function e(){var n,t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)("https://pokeapi.co/api/v2/pokemon/");case 2:n=e.sent,t=d.a.map(n.results,function(e){return e.id=e.url.match("https://pokeapi.co/api/v2/pokemon/([0-9]+)/")[1],e}),this.props.setPokemons(t);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}),Object(v.e)(function(){var e=[],n=null,t=d.a.noop;return{setListRef:function(){return function(e){(n=e)&&(t=function(){return requestAnimationFrame(function(){return n&&n.recomputeSizes()})})}},setItemSizesCache:function(){return function(n,r){e[n]=r,t()}},getItemSizesCache:function(){return function(){return e}}}}),Object(v.g)(function(e,n){var t=e.pokemons.length!==n.pokemons.length,r=!d.a.isEqual(e.query,n.query);return t||r},function(e){var n=e.pokemons,t=e.query,r=e.setItemSizesCache,o=e.getItemSizesCache;return{renderItem:function(e){var o=e.style,a=e.index,c=n[a];return i.a.createElement("div",{className:"row",style:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){b(e,n,t[n])})}return e}({},o),key:a},i.a.createElement(h.a,{pokemon:c,lang:t.lang,onMeasure:function(e){var n=e.height;return r(a,n)}}))},getItemSizes:function(){var e=d.a.fill(new Array(n.length),0),t=o();return d.a.merge(e,t)}}}));n.a=y(function(e){var n=e.query,t=e.vh,r=e.pokemons,o=e.draftScrollToIndex,a=e.setDraftScrollToIndex,c=e.setScrollToIndex,s=e.scrollToIndex,f=e.renderItem,m=e.setListRef,p=e.getItemSizes,d="en";"en"===n.lang?d="ja":"ja"===n.lang?d="random":"random"===n.lang&&(d="en");var h=r.length;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"c-search-form"},i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c(o)}},i.a.createElement("label",null,i.a.createElement("span",{style:{marginRight:4}},"No"),i.a.createElement("input",{type:"number",onChange:a,value:o,style:{width:40}})),i.a.createElement("button",{style:{marginLeft:8},onClick:function(){return c(o)}},"Go"))),i.a.createElement(l.a,{lang:n.lang,width:"100vw",height:t,itemCount:h,renderItem:f,itemSize:function(e){return p()[e]||200},overscanCount:5,scrollToIndex:null==s?null:s-1,ref:m}),i.a.createElement("footer",null,i.a.createElement("span",null,i.a.createElement(u.a,{to:"/load-more"},"/load-more")," | ",i.a.createElement(u.a,{to:"/images"},"/images")," | ",i.a.createElement(u.a,{to:"/pokemons?lang=".concat(d),style:{marginRight:16}},"/pokemons?lang=",d)),i.a.createElement("span",{className:"c-comment"},"SEE: ",i.a.createElement("a",{href:"https://pokeapi.co/",target:"_blank"},"PokéAPI")," for more Pokemons!")))})}).call(this,t(15)(e))},34:function(e,n,t){"use strict";(function(e){var r=t(6),o=t.n(r),a=t(0),i=t.n(a),c=t(7),u=t(35),l=t(10),s=t(36),f=t(3),m=t.n(f),p=t(2);function d(e,n,t,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}var h=function(e){return new u.a(function(){var n=function(e){return function(){var n=this,t=arguments;return new Promise(function(r,o){var a=e.apply(n,t);function i(e){d(a,r,o,i,c,"next",e)}function c(e){d(a,r,o,i,c,"throw",e)}i(void 0)})}}(o.a.mark(function n(t){var r,a,i,c,u,s,f,p,d;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(l.a)("https://pokeapi.co/api/v2/pokemon/".concat(e,"/"));case 2:return r=n.sent,a=m.a.get(r,"species.url","https://pokeapi.co/api/v2/pokemon-species/".concat(e,"/")),n.next=6,Object(l.a)(a);case 6:i=n.sent,c=m.a.get(m.a.sample(i.names),"language.name"),s=(u=function(e){var n=m.a.groupBy(e,"language.name"),t=m.a.pick(n,["ja","en",c]);return m.a.transform(t,function(e,n,t){e[t]=m.a.first(n)},{})})(i.names),f=m.a.get(r,"sprites.front_default",null),p=m.a.get(r,"sprites.back_default",null),d=u(i.flavor_text_entries),t({id:e,frontImage:f,backImage:p,names:s,flavorTexts:d,randomLang:c});case 14:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}())},v=Object(p.b)(Object(c.hot)(e),s.a,Object(p.h)("detail","setDetail",null),Object(p.c)({componentDidMount:function(){var e=this.props,n=e.pokemon,t=e.setDetail;e.observe;this.promise=h(n.id).then(function(e){return t(e)})},componentWillUnmount:function(){this.promise&&this.promise.cancel()}}),Object(p.a)(function(e){return!e.detail},Object(p.d)(function(){return null}),m.a.identity));n.a=v(function(e){var n=e.detail,t=void 0===n?{}:n,r=e.pokemon,o=e.setMeasureRef,a=t.id,c=t.names,u=void 0===c?{}:c,l=t.flavorTexts,s=void 0===l?{}:l,f=t.frontImage,m=t.backImage,p="random"===e.lang?t.randomLang:e.lang,d=(u[p]?u[p]:u.en).name,h=s[p]?s[p]:s.en,v=h.flavor_text,g=h.version;return i.a.createElement("div",{ref:o,style:{color:"white"}},i.a.createElement("p",{style:{margin:0}},i.a.createElement("span",{style:{background:"white",padding:"0 8px",color:"black"}},"No.",a," name=",d," lang=",p)),i.a.createElement("a",{href:r.url,target:"_blank"},i.a.createElement("img",{src:f,alt:""}),i.a.createElement("img",{src:m,alt:""})),i.a.createElement("pre",{style:{margin:"0 0 0 8px",padding:"0 0 16px",wordBreak:"break-word",whiteSpace:"pre-wrap"}},v,i.a.createElement("b",null,"(",g.name,")")))})}).call(this,t(15)(e))},35:function(e,n,t){"use strict";var r=t(14),o=t.n(r);o.a.config({cancellation:!0}),n.a=o.a},36:function(e,n,t){"use strict";var r=t(2),o=t(3),a=t.n(o),i=t(14),c=t.n(i),u=t(37);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}n.a=Object(r.b)(Object(r.f)(function(e){var n=e.onMeasure,t=void 0===n?a.a.noop:n,r=null,o=a.a.noop,i={height:0,width:0},s=new u.a(function(e){var n=a.a.first(e).contentRect,r=n.top,o=n.right,c=n.bottom,u=n.left,l=n.height,s=n.width;t(i={height:r+(c-l)+l,width:u+(o-s)+s})}),f=function(){if(r){s.observe(r);var e=r.querySelectorAll("img");return c.a.map(e,function(e){return new c.a(function(n){e.onload=function(){return n()}})}).then(function(){return t(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){l(e,n,t[n])})}return e}({},i,{isLoaded:!0}))}),function(){s.unobserve(r),r=null}}};return{observe:f,setMeasureRef:function(e){r=e,o=f()},unobserve:function(){o()}}}),Object(r.c)({componentWillUnmount:function(){this.props.unobserve()}}))},38:function(e,n,t){"use strict";(function(e){var r=t(0),o=t.n(r),a=t(7),i=t(11),c=t(3),u=t.n(c),l=t(12),s=t(2),f=t(13);function m(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p=Object(s.b)(Object(a.hot)(e),f.a,Object(s.i)(function(){var e=u.a.fill(Array(20),1),n=e.length+50;return{overScanCount:3,virtualRowsCount:n,rows:e,initialScrollToIndex:n-1}},{prependRows:function(e){return function(n){var t=m(e.rows).concat(m(n));return{virtualRowsCount:t.length+50,rows:t}}}}),Object(s.e)({getVirtualIndex:function(e){var n=e.virtualRowsCount;return function(e){return n-e-1}}}),Object(s.e)(function(e){var n=e.overScanCount,t={startIndex:-1,stopIndex:-1},r="SCROLL_DIRECTION_NONE";return{compareScroll:function(){return function(e){if(-1===t.startIndex&&(t.startIndex=e.startIndex),t.startIndex===e.startIndex)return{scrollDirection:"SCROLL_DIRECTION_NONE"};var o="SCROLL_DIRECTION_UP"===(r=t.startIndex>e.startIndex?"SCROLL_DIRECTION_UP":"SCROLL_DIRECTION_DOWN")?e.startIndex:e.stopIndex,a="SCROLL_DIRECTION_UP"===r?e.startIndex+n:e.stopIndex-n;return t=e,{scrollDirection:r,currentIndex:o,visibleCurrentIndex:a}}}}}),Object(s.g)(["prependRows"],function(e){var n=e.prependRows;return{prependRows:u.a.debounce(n,300,{leading:!0,trailing:!1})}}),Object(s.e)({onLoadMore:function(e){var n=e.prependRows;return function(e){e.isAtFirst||u.a.delay(function(){return n(u.a.fill(Array(20),1))},300)}}}),Object(s.e)(function(e){var n=u.a.debounce(e.onLoadMore,100,{leading:!0});return{onItemsRendered:function(t){t.virtualRowsCount;var r=t.rows,o=t.getVirtualIndex;return function(t){var a=o(t.stopIndex),i=o(t.startIndex),c=e.compareScroll({startIndex:a,stopIndex:i}),u=c.scrollDirection,l=c.currentIndex;if("SCROLL_DIRECTION_NONE"!==u){var s="SCROLL_DIRECTION_UP"===u&&0===a,f="SCROLL_DIRECTION_DOWN"===u&&i>=r.length-1;(s||f)&&n({scrollDirection:u,currentIndex:l,isAtFirst:s,isAtLast:f})}}}}}),Object(s.g)(function(e,n){return e.rows.length!==n.rows.length},function(e){var n=e.rows,t=e.getVirtualIndex;return{renderItem:function(e){var r=e.style,a=t(e.index),i=n[a];return o.a.createElement("div",{className:"Row",style:r,key:a},i?"Row ".concat(a):"Loading...")}}}))(function(e){var n=e.vh,t=e.overScanCount,r=e.virtualRowsCount,a=e.initialScrollToIndex,c=e.onItemsRendered,u=e.renderItem;return o.a.createElement("div",{style:{color:"white"}},o.a.createElement(l.a,{width:"auto",height:n||window.innerHeight,itemCount:r,overscanCount:t,renderItem:u,itemSize:50,scrollToIndex:a,onItemsRendered:c}),o.a.createElement("footer",null,o.a.createElement("span",null,o.a.createElement(i.a,{to:"/images"},"/images")," | ",o.a.createElement(i.a,{to:"/pokemons"},"/pokemons")),o.a.createElement("span",{className:"c-comment"},"Scroll up to load more(Slack-like behavior).")))});n.a=p}).call(this,t(15)(e))},39:function(e,n,t){e.exports=t(40)},40:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(27),i=t.n(a),c=t(62),u=t(63),l=t(61),s=t(23),f=t(28),m=t(32),p=t(38),d=o.a.createElement("div",null,o.a.createElement("style",{type:"text/css"},'\n      body {\n        background-color: #242424;\n        margin: 0;\n        font-family: menlo, "andale mono", "courier new", system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;\n      }\n\n      footer {\n        position: fixed;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        padding: 8px;\n        background-color: white;\n        color: #242424;\n        text-align: right;\n        display: flex;\n        justify-content: flex-start;\n        flex-wrap: wrap;\n      }\n\n      img {\n          max-width: 100vw;\n      }\n\n      .c-comment {\n        margin: 8px 0 0;\n      }\n\n      .c-search-form {\n        position: fixed;\n        top: 0;\n        right: 0;\n        z-index: 100;\n        background-color: white;\n        padding: 8px;\n      }\n\n      @media (min-width: 576px) {\n        footer {\n            padding: 8px 8px 32px;\n            justify-content: space-between;\n        }\n\n        img {\n          max-width: initial;\n        }\n\n        .c-credits {\n          margin: 0;\n        }\n      }\n    '),o.a.createElement(c.a,null,o.a.createElement(u.a,null,o.a.createElement(l.a,{exact:!0,from:"/",to:"/images"}),o.a.createElement(s.a,{exact:!0,path:"/images",component:f.a}),o.a.createElement(s.a,{exact:!0,path:"/pokemons",component:m.a}),o.a.createElement(s.a,{exact:!0,path:"/load-more",component:p.a}))));i.a.render(d,document.querySelector("#app"))}});
//# sourceMappingURL=main.a172174a.js.map
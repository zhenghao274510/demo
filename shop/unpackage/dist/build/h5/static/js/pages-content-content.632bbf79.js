(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-content-content"],{"21b8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("28a5"),n("386d");var i={data:function(){return{webviewStyles:{progress:{color:"#FF3333"}},url:""}},onLoad:function(t){if(this.getRequest("uid")){var e=this.getRequest("uid");this.$store.commit("changeUid",e)}this.url=decodeURIComponent(t.url),console.log(this.url)},methods:{getRequest:function(t){for(var e=window.location.search.substring(1),n=e.split("&"),i=0;i<n.length;i++){var a=n[i].split("=");if(a[0]==t)return a[1]}return!1}}};e.default=i},5440:function(t,e,n){"use strict";n.r(e);var i=n("21b8"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"63f2":function(t,e,n){var i=n("822d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("a5597e92",i,!0,{sourceMap:!1,shadowMode:!1})},6870:function(t,e,n){"use strict";var i=n("63f2"),a=n.n(i);a.a},"822d":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"uni-page-body[data-v-60f6b3dd]{width:100%;height:100%}.contain[data-v-60f6b3dd]{width:100%;height:100%;background:#fff;overflow:hidden}.list[data-v-60f6b3dd]{width:94%;height:100%;position:relative;margin:0 auto}uni-web-view[data-v-60f6b3dd]{width:100%;padding:%?30?% 0}",""])},baac:function(t,e,n){"use strict";n.r(e);var i=n("be5d"),a=n("5440");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("6870");var o,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"60f6b3dd",null,!1,i["a"],o);e["default"]=s.exports},be5d:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"contain"},[n("v-uni-view",{staticClass:"list"},[n("v-uni-web-view",{attrs:{"webview-styles":t.webviewStyles,src:t.url}})],1)],1)},r=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return i})}}]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xingzhengshensuDetail/xingzhengshensuDetail"],{"32cc":function(t,e,a){},"6e83":function(t,e,a){"use strict";var n=a("32cc"),i=a.n(n);i.a},"8bbf":function(t,e,a){"use strict";(function(t){a("80ed"),a("921b");n(a("66fd"));var e=n(a("ed01"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},c753:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=(t._self._c,a("6910"));t.$mp.data=Object.assign({},{$root:{m0:n}})},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},d617:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("c48d"),i=o(a("4870")),u=o(a("741d"));function o(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{show:!1,radio:0,user:"",card:"",tel:"",address:"",content:"",location:"",imageData:[],list:{},url:u.default.baseUrl}},onLoad:function(t){this.init(t.id)},methods:{init:function(t){var e=this,a={id:t};i.default.showLoading("加载中...");var u={url:"/appealGover/detail",data:a,header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(t){console.log(t),1==t.data.success&&(i.default.hideLoading(),e.list=t.data.body,1==e.list.anonymous&&(e.list.cname="****"),e.imageData=t.data.body.material,e.imageData=e.imageData.split("|"))}};(0,n.ajax)(u)}}};e.default=r},ed01:function(t,e,a){"use strict";a.r(e);var n=a("c753"),i=a("f658");for(var u in i)"default"!==u&&function(t){a.d(e,t,function(){return i[t]})}(u);a("6e83");var o=a("2877"),r=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},f658:function(t,e,a){"use strict";a.r(e);var n=a("d617"),i=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);e["default"]=i.a}},[["8bbf","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/news"],{"33fe":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(e("95a3")),u=e("92ac"),o=r(e("51d2"));function r(n){return n&&n.__esModule?n:{default:n}}var c=function(){return Promise.all([e.e("common/vendor"),e.e("components/u-parse/u-parse")]).then(e.bind(null,"caa5"))},i={data:function(){return{article:"详情",url:a.default.baseUrl,list:""}},components:{uParse:c},onLoad:function(n){this.list=JSON.parse(n.list),this.init()},methods:{init:function(){var n=this,t={};o.default.showLoading("加载中...");var e={url:this.list.url,data:t,header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(t){console.log(t),1==t.data.success&&(o.default.hideLoading(),n.article=t.data.body.content)}};(0,u.ajax)(e)}}};t.default=i},5936:function(n,t,e){"use strict";e.r(t);var a=e("821e"),u=e("a72b");for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);e("c09e");var r=e("2877"),c=Object(r["a"])(u["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports},"637c":function(n,t,e){},"821e":function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return u})},a72b:function(n,t,e){"use strict";e.r(t);var a=e("33fe"),u=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);t["default"]=u.a},c09e:function(n,t,e){"use strict";var a=e("637c"),u=e.n(a);u.a},c962:function(n,t,e){"use strict";(function(n){e("9183"),e("921b");a(e("66fd"));var t=a(e("5936"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])}},[["c962","common/runtime","common/vendor"]]]);
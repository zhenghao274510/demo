(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/needDetail/needDetail"],{"053f":function(t,a,e){},"1f70":function(t,a,e){"use strict";e.r(a);var n=e("437b"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},"437b":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=o(e("ba6d")),i=e("8442");function o(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{Color:"#333",backColor:"#fff",ids:"",list:{},shop:{}}},onLoad:function(t){this.init(t.id),this.ids=t.id},methods:{init:function(a){var e=this,o={uid:t.getStorageSync("uid"),gxId:a};n.default.showLoading("",(function(){var t={url:"/api/gongXuInfo",data:o,success:function(t){if(console.log(t),0==t.data.result){n.default.hideLoading(),e.list=t.data.dateList;var a={uid:e.list.uid};n.default.showLoading("",(function(){var t={url:"/api/myShop",data:a,success:function(t){console.log(t),0==t.data.result?(n.default.hideLoading(),e.shop=t.data.data):(n.default.hideLoading(),n.default.showToast(t.data.resultNote))}};(0,i.ajax)(t)}))}else n.default.hideLoading(),n.default.showToast(t.data.resultNote)}};(0,i.ajax)(t)}))},goCare:function(){var a=this,e={uid:t.getStorageSync("uid"),gxId:this.ids,type:1};n.default.showLoading("",(function(){var t={url:"/api/gongXuAttention",data:e,success:function(t){console.log(t),0==t.data.result?("N"==a.list.isGZ?a.list.isGZ="Y":a.list.isGZ="N",a.$forceUpdate(),n.default.showToast(t.data.resultNote),n.default.hideLoading()):(n.default.hideLoading(),n.default.showToast(t.data.resultNote))}};(0,i.ajax)(t)}))},goUser:function(){t.navigateTo({url:"/pages/user/user?id="+this.list.uid})},goShop:function(a){var e="";1==a?e=this.shop.weidianUrl:2==a?e=this.shop.jingdongUrl:3==a?e=this.shop.taobaoUrl:4==a&&(e=this.shop.disanfangUrl),t.navigateTo({url:"/pages/web/web?url="+e})}}};a.default=u}).call(this,e("543d")["default"])},5968:function(t,a,e){"use strict";(function(t){e("e91d");n(e("66fd"));var a=n(e("650d"));function n(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("543d")["createPage"])},"650d":function(t,a,e){"use strict";e.r(a);var n=e("6e50"),i=e("1f70");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("7ee3");var u,d=e("f0c5"),s=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,"4b084398",null,!1,n["a"],u);a["default"]=s.exports},"6e50":function(t,a,e){"use strict";var n,i=function(){var t=this,a=t.$createElement;t._self._c},o=[];e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}))},"7ee3":function(t,a,e){"use strict";var n=e("053f"),i=e.n(n);i.a}},[["5968","common/runtime","common/vendor"]]]);
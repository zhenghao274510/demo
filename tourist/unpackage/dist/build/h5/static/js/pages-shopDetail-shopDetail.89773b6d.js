(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shopDetail-shopDetail"],{"0cd9":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvElEQVQ4T6WTsQ4BURREzyAk4hcp6PyLUiORqGg0ShGJP/AFPkCl0mHkFbuR9XbfLrefc+fOmyf+HNXR2x4AJ2AmafOpSQJs94EjcJY0LS6sBNjuAgfgImkcc1sKsN0BdsAVmEhybYDtNrAFblXiAPxyYLsFrIEHMCzbnLmJAZZADxhJeqVeKQZYACH5nwEBugJCDs1PCJZtZ5Bn4xCzm+tCUkXKnTQuUsTJvXGVC5A5sJcU2plP8jOlevAGSstLEV5cjvMAAAAASUVORK5CYII="},"0f53":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{url:{type:String,default:""}},data:function(){return{webviewStyles:{progress:{color:"#FF3333"}}}},onLoad:function(t){if(this.getRequest("uid")){var e=this.getRequest("uid");this.$store.commit("changeUid",e)}this.url=decodeURIComponent(t.url)},methods:{getRequest:function(t){for(var e=window.location.search.substring(1),i=e.split("&"),a=0;a<i.length;a++){var n=i[a].split("=");if(n[0]==t)return n[1]}return!1}}};e.default=a},"1aab":function(t,e,i){"use strict";i.r(e);var a=i("70b9"),n=i("f5d5");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("c207");var o=i("2877"),c=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"8b7ed724",null);e["default"]=c.exports},3418:function(t,e,i){var a=i("6a3e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("9c6647aa",a,!0,{sourceMap:!1,shadowMode:!1})},"6a3e":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".contains[data-v-8b7ed724]{width:100%;height:100%;background:#fff;overflow:hidden}.list[data-v-8b7ed724]{width:94%;height:100%;position:relative;margin:0 auto;overflow:hidden}uni-web-view[data-v-8b7ed724]{width:100%;height:100%\n\t/* padding: 30upx 0; */}",""])},"6ce4":function(t,e,i){"use strict";i.r(e);var a=i("74d7"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"70b9":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"contains"},[i("v-uni-view",{staticClass:"list"},[i("v-uni-web-view",{attrs:{"webview-styles":t.webviewStyles,src:t.url}})],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"74d7":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("f42a"),n=s(i("1aab"));function s(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{url:"http://m.xgcyz1978.com/display/activity?id=cd300ecb3c1d47868d1db6fda97b9228",list:"",bannerList:[],ids:""}},components:{webView:n.default},onLoad:function(t){var e=this;this.ids=t.id;var i={productId:t.id},n={url:"/api/gzh/productDetail",data:i,success:function(t){console.log(t),0==t.data.result&&(e.bannerList=t.data.bannerList,e.list=t.data)}};(0,a.ajax)(n)},methods:{back:function(){uni.navigateBack({delta:1})},goOrder:function(){var t=JSON.stringify(this.list);uni.navigateTo({url:"../shopOrder/shopOrder?list="+t+"&id="+this.ids})}}};e.default=o},7517:function(t,e,i){"use strict";i.r(e);var a=i("f39b"),n=i("6ce4");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("eabb");var o=i("2877"),c=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"e3afc85a",null);e["default"]=c.exports},a654:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-e3afc85a]{width:100%;height:100%;background:#fff}.contain[data-v-e3afc85a]{width:100%;height:100%;position:relative}.banner[data-v-e3afc85a]{width:100%;height:100%}.back[data-v-e3afc85a]{width:%?60?%;height:%?60?%;border-radius:50%;background:rgba(0,0,0,.3);position:absolute;top:%?100?%;left:%?30?%;z-index:100;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.backs[data-v-e3afc85a]{width:%?32?%;height:%?32?%}.produce[data-v-e3afc85a]{width:100%;padding:%?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:14px;color:#333;border-bottom:6px solid #f9f9f9}.title[data-v-e3afc85a]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.price[data-v-e3afc85a]{font-size:14px;color:#de2910}.score[data-v-e3afc85a]{color:#de2910}.old[data-v-e3afc85a]{color:#666;text-decoration:line-through;margin-right:%?200?%}.name[data-v-e3afc85a]{margin-top:%?20?%}.detail[data-v-e3afc85a]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:14px;color:#333}.hot_title[data-v-e3afc85a]{width:100%;height:%?80?%;padding:0 %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:12px;color:#333}.hot_left[data-v-e3afc85a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.activity[data-v-e3afc85a]{border-left:2px solid #de2910;padding-left:%?20?%;font-size:14px;color:#de2910}.buy[data-v-e3afc85a]{width:100%;height:%?90?%;line-height:%?90?%;text-align:center;font-size:15px;color:#fff;background:#de2910;position:fixed;left:0;bottom:0;z-index:999}body.?%PAGE?%[data-v-e3afc85a]{background:#fff}",""])},c207:function(t,e,i){"use strict";var a=i("3418"),n=i.n(a);n.a},e490:function(t,e,i){var a=i("a654");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("506302a8",a,!0,{sourceMap:!1,shadowMode:!1})},eabb:function(t,e,i){"use strict";var a=i("e490"),n=i.n(a);n.a},f39b:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"contain"},[a("v-uni-view",{staticClass:"back",on:{click:function(e){e=t.$handleEvent(e),t.back(e)}}},[a("img",{staticClass:"backs",attrs:{src:i("0cd9"),alt:""}})]),a("van-swipe",{attrs:{autoplay:5e3,height:200,"indicator-color":"#DE2910"}},t._l(t.bannerList,function(t,e){return a("van-swipe-item",{key:e},[a("img",{staticClass:"banner",attrs:{src:t,alt:""}})])}),1),a("v-uni-view",{staticClass:"produce"},[a("v-uni-view",{staticClass:"title"},[1==t.list.type?[a("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(t.list.oldPrice))])]:t._e(),2==t.list.type?[a("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(t.list.price))]),a("v-uni-view",{staticClass:"old"},[t._v("￥"+t._s(t.list.oldPrice))]),a("v-uni-view",{staticClass:"score"},[t._v("积分："+t._s(t.list.point))])]:t._e(),3==t.list.type?[a("v-uni-view",{staticClass:"score"},[t._v("积分："+t._s(t.list.point))])]:t._e()],2),a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.list.title))])],1),a("v-uni-view",{staticClass:"detail"},[a("v-uni-view",{staticClass:"hot_title"},[a("v-uni-view",{staticClass:"hot_left"},[a("v-uni-view",{staticClass:"activity"},[t._v("商品详情")])],1)],1),t.list?a("v-uni-view",{staticStyle:{width:"100%",height:"calc(100vh - 200px - 166upx - 76upx - 130upx)"}},[a("webView",{attrs:{url:t.list.url}})],1):t._e()],1),a("v-uni-view",{staticClass:"buy",on:{click:function(e){e=t.$handleEvent(e),t.goOrder(e)}}},[t._v("立即购买")])],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},f42a:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ajax=void 0;var a=function(t){t=t||{},t.url=t.url||"",t.data=JSON.stringify(t.data||{}),t.method=t.method||"POST",t.header=t.header||{"Content-Type":"application/json"},t.success=t.success||function(){},t.fail=t.fail||function(){},console.log(t.data),uni.request({url:"http://m.xgcyz1978.com"+t.url,data:t.data,method:t.method,header:t.header,dataType:"json",success:function(e){t.success(e)},fail:function(e){t.fail(e),uni.showToast({title:"请稍后重试",icon:"none"})}})};e.ajax=a},f5d5:function(t,e,i){"use strict";i.r(e);var a=i("0f53"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-shop"],{"05b4":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"contain"},[a("v-uni-view",{staticClass:"fixed"},[a("cu-custom",{attrs:{isBack:!0,Color:t.Color,backColor:t.backColor,bgColor:"bg-shadeTop text-white"}},[a("template",{attrs:{slot:"backText"},slot:"backText"},[a("img",{staticClass:"msg",attrs:{src:i("5528"),alt:""},on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.goSearch(e)}}})]),a("template",{attrs:{slot:"content"},slot:"content"},[t._v("纪念币商城")]),a("template",{attrs:{slot:"right"},slot:"right"},[a("img",{staticClass:"msg",attrs:{src:i("a6a5"),alt:""},on:{click:function(e){e=t.$handleEvent(e),t.goType(e)}}})])],2)],1),a("van-swipe",{attrs:{autoplay:5e3,height:150,"indicator-color":"#DE2910"}},t._l(t.bannerList,function(e,i){return a("van-swipe-item",{key:i,on:{click:function(i){i=t.$handleEvent(i),t.goUrl(e.type,e.content)}}},[a("img",{staticClass:"banner",attrs:{src:e.image,alt:""}})])}),1),a("v-uni-view",{staticClass:"score"},[a("v-uni-view",{staticClass:"score_list",on:{click:function(e){e=t.$handleEvent(e),t.goType(e)}}},[a("v-uni-image",{attrs:{mode:"scaleToFill",src:"../../static/img/shop1.png"}})],1),a("v-uni-view",{staticClass:"score_list",on:{click:function(e){e=t.$handleEvent(e),t.goScore(e)}}},[a("v-uni-image",{attrs:{mode:"scaleToFill",src:"../../static/img/shop2.png"}})],1)],1),a("v-uni-view",{staticClass:"hot"},[a("v-uni-view",{staticClass:"hot_title"},[a("v-uni-view",{staticClass:"hot_left"},[a("v-uni-view",{staticClass:"activity"},[t._v("热门推荐")])],1)],1),a("v-uni-view",{staticClass:"recommend"},t._l(t.productList,function(e,i){return a("v-uni-view",{key:i,staticClass:"recommend_list",on:{click:function(i){i=t.$handleEvent(i),t.goDetail(e.productId)}}},[a("img",{staticClass:"recommend_img",attrs:{src:e.image,alt:""}}),a("v-uni-view",{staticClass:"recommend_title"},[t._v(t._s(e.title))]),a("v-uni-view",{staticClass:"recommend_price"},[1==e.type?[a("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(e.oldPrice))])]:t._e(),2==e.type?[a("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(e.price))]),a("v-uni-view",{staticClass:"scores"},[t._v("纪念币："+t._s(e.point))])]:t._e(),3==e.type?[a("v-uni-view",{staticClass:"scores"},[t._v("纪念币："+t._s(e.point))])]:t._e()],2)],1)}),1)],1)],1)},o=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o})},"1f23":function(t,e,i){"use strict";var a=i("db4f"),o=i.n(a);o.a},5528:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFENDJBNjg4QjQ0NzExRTlBM0MzQkM5MDU4QzdBMEFFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFENDJBNjg5QjQ0NzExRTlBM0MzQkM5MDU4QzdBMEFFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUQ0MkE2ODZCNDQ3MTFFOUEzQzNCQzkwNThDN0EwQUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUQ0MkE2ODdCNDQ3MTFFOUEzQzNCQzkwNThDN0EwQUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7PKPZfAAAJAklEQVR42rRW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"},a6a5:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAYAAACGVs+MAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFERDNDNTE4QjQ0NzExRTk4M0YxQzdERTRGMDM1MTAzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFERDNDNTE5QjQ0NzExRTk4M0YxQzdERTRGMDM1MTAzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUREM0M1MTZCNDQ3MTFFOTgzRjFDN0RFNEYwMzUxMDMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUREM0M1MTdCNDQ3MTFFOTgzRjFDN0RFNEYwMzUxMDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6rJ1FoAAAGrElEQVR42qxX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"},a8c2:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".contain[data-v-53cd5b1c]{width:100%;height:100%;background:#fff}.msg[data-v-53cd5b1c]{width:%?38?%;height:%?38?%}.banner[data-v-53cd5b1c]{width:100%;height:100%}.score[data-v-53cd5b1c]{width:100%;padding:%?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.score_list[data-v-53cd5b1c]{width:48%;height:%?180?%}.score_list>uni-image[data-v-53cd5b1c]{width:100%;height:100%}.hot_title[data-v-53cd5b1c]{width:100%;height:%?80?%;padding:0 %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:12px;color:#333}.hot_left[data-v-53cd5b1c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.activity[data-v-53cd5b1c]{border-left:2px solid #de2910;padding-left:%?20?%;font-size:14px;color:#de2910}.recommend[data-v-53cd5b1c]{width:100%;padding:%?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;background:#f9f9f9;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.recommend_list[data-v-53cd5b1c]{width:48%;border-radius:4px;background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:12px;color:#666;overflow:hidden;margin-bottom:%?30?%}.recommend_img[data-v-53cd5b1c]{width:100%\n\t/* height: 200upx; */}.recommend_title[data-v-53cd5b1c]{width:100%;height:%?50?%;line-height:%?50?%;padding-left:%?24?%;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.recommend_price[data-v-53cd5b1c]{width:100%;padding:0 %?20?% %?12?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.price[data-v-53cd5b1c]{font-size:14px;color:#de2910}.scores[data-v-53cd5b1c]{color:#de2910}",""])},c8b5:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5"),i("386d");var a=i("f42a"),o={data:function(){return{Color:"#DE2910",value:"",backColor:"#FFFFFF",bannerList:[],productList:[]}},onShow:function(){if(this.getRequest("uid")){var e=this.getRequest("uid");this.$store.commit("changeUid",e);var i=this,o={uid:this.$store.state.uid},n={url:"/api/gzh/index",data:o,success:function(e){t.log(e),0==e.data.result&&(i.$store.commit("changeVip",e.data.vipType),i.$store.commit("changeCustomer",e.data.customer))}};(0,a.ajax)(n)}this.init()},methods:{getRequest:function(t){for(var e=window.location.search.substring(1),i=e.split("&"),a=0;a<i.length;a++){var o=i[a].split("=");if(o[0]==t)return o[1]}return!1},init:function(){var e=this,i={url:"/api/gzh/shopIndex",data:{},success:function(i){t.log(i),0==i.data.result&&(e.bannerList=i.data.bannerList,e.productList=i.data.productList)}};(0,a.ajax)(i)},goSearch:function(){uni.navigateTo({url:"../shopSearch/shopSearch"})},goDetail:function(t){uni.navigateTo({url:"../shopDetail/shopDetail?id="+t})},goType:function(){uni.navigateTo({url:"../shopType/shopType"})},goScore:function(){uni.navigateTo({url:"../shopScore/shopScore"})},goUrl:function(t,e){1==t?uni.navigateTo({url:"../shopDetail/shopDetail?id="+e}):2==t?uni.navigateTo({url:"../shopType/shopType"}):3==t&&uni.navigateTo({url:"../content/content?url="+encodeURIComponent(e)})}}};e.default=o}).call(this,i("5a52")["default"])},db4f:function(t,e,i){var a=i("a8c2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("8d0c11ec",a,!0,{sourceMap:!1,shadowMode:!1})},f42a:function(t,e,i){"use strict";(function(t){var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.ajaxs=e.ajax=void 0;var o=a(i("f499")),n=function(e){e=e||{},e.url=e.url||"",e.data=(0,o.default)(e.data||{}),e.method=e.method||"POST",e.header=e.header||{"Content-Type":"application/json"},e.success=e.success||function(){},e.fail=e.fail||function(){},t.log(e.data),uni.request({url:"https://m.xgcyz1978.com"+e.url,data:e.data,method:e.method,header:e.header,dataType:"json",success:function(t){e.success(t)},fail:function(t){e.fail(t),uni.showToast({title:"请稍后重试",icon:"none"})}})};e.ajax=n;var c=function(e){e=e||{},e.url=e.url||"",e.data=(0,o.default)(e.data||{}),e.method=e.method||"POST",e.header=e.header||{"Content-Type":"application/json"},e.success=e.success||function(){},e.fail=e.fail||function(){},t.log(e.data),uni.request({url:"https://m.xgcyz1978.com"+e.url,data:e.data,method:e.method,header:e.header,dataType:"json",success:function(t){e.success(t)},fail:function(t){e.fail(t),uni.showToast({title:"请稍后重试",icon:"none"})}})};e.ajaxs=c}).call(this,i("5a52")["default"])},fef2:function(t,e,i){"use strict";i.r(e);var a=i("c8b5"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=o.a},ff9d:function(t,e,i){"use strict";i.r(e);var a=i("05b4"),o=i("fef2");for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);i("1f23");var c=i("2877"),s=Object(c["a"])(o["default"],a["a"],a["b"],!1,null,"53cd5b1c",null);e["default"]=s.exports}}]);
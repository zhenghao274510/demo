(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-productDetail-productDetail"],{"27f2":function(i,t,e){"use strict";var s=e("3205"),a=e.n(s);a.a},3205:function(i,t,e){var s=e("d48f");"string"===typeof s&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals);var a=e("4f06").default;a("f5c4e208",s,!0,{sourceMap:!1,shadowMode:!1})},"3f02":function(i,t,e){"use strict";var s,a=function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("v-uni-view",{staticClass:"contain"},[s("v-uni-view",{staticClass:"fixed"},[s("cu-custom",{attrs:{isBack:!0,Color:i.Color,isIcon:!0,bgColor:"bg-shadeTop text-white",backColor:i.backColor}},[s("template",{attrs:{slot:"backText"},slot:"backText"}),s("template",{attrs:{slot:"content"},slot:"content"},[i._v("订单详情")])],2)],1),s("v-uni-view",{staticClass:"wrapper"},[s("v-uni-view",{staticClass:"lists"},[s("v-uni-view",{staticClass:"item"},[s("v-uni-view",{staticClass:"list-middle"},[s("img",{attrs:{src:i.list.productImage,alt:""}}),s("v-uni-view",{staticClass:"product"},[s("v-uni-view",[i._v(i._s(i.list.productTitle))]),s("v-uni-view",{staticClass:"price"},[s("v-uni-view",{staticStyle:{color:"red"}},[i._v("￥"+i._s(i.list.price))]),s("v-uni-view",{staticStyle:{"margin-left":"40upx"}},[i._v("x"+i._s(i.list.qty)+i._s(i.list.unit))])],1)],1)],1)],1),s("v-uni-view",{staticClass:"item"},[s("v-uni-view",{staticClass:"common"},[s("v-uni-view",{staticClass:"left"},[i._v("姓名")]),s("v-uni-view",{staticClass:"right"},[i._v(i._s(i.list.username))])],1),s("v-uni-view",{staticClass:"common"},[s("v-uni-view",{staticClass:"left"},[i._v("联系方式")]),s("v-uni-view",{staticClass:"right"},[i._v(i._s(i.list.phone))])],1),s("v-uni-view",{staticClass:"common"},[s("v-uni-view",{staticClass:"left"},[i._v("数量")]),s("v-uni-view",{staticClass:"right"},[i._v(i._s(i.list.qty))])],1),s("v-uni-view",{staticClass:"common"},[s("v-uni-view",{staticClass:"left"},[i._v("到期时间")]),s("v-uni-view",{staticClass:"right"},[i._v(i._s(i.list.expireDate))])],1),s("v-uni-view",{staticClass:"common"},[s("v-uni-view",{staticClass:"left"},[i._v("物流公司")]),s("v-uni-view",{staticClass:"right"},[i._v(i._s(i.list.expressName))])],1),s("v-uni-view",{staticClass:"common"},[s("v-uni-view",{staticClass:"left"},[i._v("物流单号")]),s("v-uni-view",{staticClass:"right"},[i._v(i._s(i.list.expressNo))])],1)],1),s("v-uni-view",{staticClass:"item"},[s("v-uni-view",{staticClass:"common"},[s("v-uni-view",{staticClass:"left"},[i._v("订单号")]),s("v-uni-view",{staticClass:"right"},[i._v(i._s(i.order))])],1),s("v-uni-view",{staticClass:"common"},[s("v-uni-view",{staticClass:"left"},[i._v("提交时间")]),s("v-uni-view",{staticClass:"right"},[i._v(i._s(i.list.createDate))])],1),s("v-uni-view",{staticClass:"common"},[s("v-uni-view",{staticClass:"left"},[i._v("货品总价")]),s("v-uni-view",{staticClass:"right"},[i._v("￥"+i._s(i.list.amount))])],1),i.list.finishDate?s("v-uni-view",{staticClass:"common"},[s("v-uni-view",{staticClass:"left"},[i._v("成交时间")]),s("v-uni-view",{staticClass:"right"},[i._v(i._s(i.list.finishDate))])],1):i._e()],1),s("v-uni-view",{staticClass:"item",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.goReport.apply(void 0,arguments)}}},[s("v-uni-view",{staticClass:"order"},[s("v-uni-view",{staticClass:"left"},[i._v("返款记录")]),s("img",{attrs:{src:e("53b6"),alt:""}})],1)],1)],1)],1)],1)},n=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return n}),e.d(t,"a",function(){return s})},"53b6":function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAASCAYAAACNdSR1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1RUUyRjBBMzFCMTExRUFBRjRERUI5QzFBNERBNkJEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ1RUUyRjBCMzFCMTExRUFBRjRERUI5QzFBNERBNkJEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDVFRTJGMDgzMUIxMTFFQUFGNERFQjlDMUE0REE2QkQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDVFRTJGMDkzMUIxMTFFQUFGNERFQjlDMUE0REE2QkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5N/vFRAAAApklEQVR42mIUFBTsYGBgkAXiOCD+y4AHsACxGRA7Qvl4NTABsQ8Q7wfiKCBeBMTM+BR/I1YDE5QmSgMTEhum4RguDUxomkEavID4FDYNTFic9hGI3bBpYMLhcWwamJgYSAC4FPMD8S5ohC2DRtY/JiIV/sVmMk6F6IrxKkRWjKxwMxAnYEtQTFgUhgDxb1yhsRNN4S9cQcfMycnJCrUyFJ9CEAAIMAASuC+ypp88JAAAAABJRU5ErkJggg=="},"5fd9":function(i,t,e){"use strict";e.r(t);var s=e("efbe"),a=e.n(s);for(var n in s)"default"!==n&&function(i){e.d(t,i,function(){return s[i]})}(n);t["default"]=a.a},"65dd":function(i,t,e){"use strict";var s=e("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.ajax=void 0;var a=s(e("f499")),n=function(i){i=i||{},i.url=i.url||"",i.data=(0,a.default)(i.data)||{},i.method=i.method||"POST",i.header=i.header||{"Content-Type":"application/json"},i.success=i.success||function(){},i.fail=i.fail||function(){},console.log(i.data),uni.request({url:"http://m.tfgwzz.com:8080/api"+i.url,data:i.data,method:i.method,header:i.header,dataType:"json",success:function(t){i.success(t)},fail:function(t){i.fail(t),uni.showToast({title:"请稍后重试",icon:"none"})}})};t.ajax=n},"9ff2":function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={showToast:function(i){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none",e=arguments.length>2?arguments[2]:void 0;uni.showToast({title:i,icon:t,duration:2e3,mask:!0,success:e})},hideToast:function(){uni.hideToast()},showLoading:function(i,t){uni.showLoading({title:i,mask:!0,success:t})},hideLoading:function(){uni.hideLoading()}},a=s;t.default=a},d48f:function(i,t,e){t=i.exports=e("2350")(!1),t.push([i.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.contain[data-v-8c3b0be2]{width:100%;min-height:100vh;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#ededed}.contain .fixed[data-v-8c3b0be2]{width:100%}.contain .wrapper[data-v-8c3b0be2]{width:100%;padding:0 %?28?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.contain .wrapper .lists[data-v-8c3b0be2]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.contain .wrapper .lists .item[data-v-8c3b0be2]{width:100%;padding:0 %?24?%;box-sizing:border-box;background:#fff;border-radius:4px;margin:0 0 %?30?%}.contain .wrapper .lists .item .list-middle[data-v-8c3b0be2]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;padding:%?24?% 0}.contain .wrapper .lists .item .list-middle img[data-v-8c3b0be2]{width:%?140?%;height:%?140?%;border-radius:4px}.contain .wrapper .lists .item .list-middle .product[data-v-8c3b0be2]{width:75%;height:%?140?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;justify-content:space-around;font-size:%?30?%;color:#111;padding-left:%?24?%;box-sizing:border-box}.contain .wrapper .lists .item .list-middle .product .price[data-v-8c3b0be2]{width:100%;height:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;color:#999}.contain .wrapper .lists .item .list-middle .product .price uni-view[data-v-8c3b0be2]{height:%?40?%;line-height:%?40?%}.contain .wrapper .lists .item .common[data-v-8c3b0be2]{width:100%;height:%?70?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.contain .wrapper .lists .item .common .left[data-v-8c3b0be2]{width:30%;font-size:%?30?%;color:#666}.contain .wrapper .lists .item .common .right[data-v-8c3b0be2]{font-size:%?30?%;color:#111}.contain .wrapper .lists .item .order[data-v-8c3b0be2]{width:100%;height:%?70?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?30?%;color:#666}.contain .wrapper .lists .item .order img[data-v-8c3b0be2]{width:%?15?%;height:%?20?%}',""])},efbe:function(i,t,e){"use strict";var s=e("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(e("9ff2")),n=e("65dd"),o={data:function(){return{Color:"#333",backColor:"#EDEDED",order:"",list:{}}},onLoad:function(i){this.order=i.id,this.init(i.id)},methods:{init:function(i){var t=this,e={orderId:i};a.default.showLoading("",function(){var i={url:"/orderDetail",data:e,success:function(i){console.log(i),0==i.data.result?(a.default.hideLoading(),t.list=i.data):(a.default.hideLoading(),a.default.showToast(i.data.resultNote))}};(0,n.ajax)(i)})},goReport:function(){uni.navigateTo({url:"/pages/report/report?id="+this.order})}}};t.default=o},f08f:function(i,t,e){"use strict";e.r(t);var s=e("3f02"),a=e("5fd9");for(var n in a)"default"!==n&&function(i){e.d(t,i,function(){return a[i]})}(n);e("27f2");var o,l=e("f0c5"),c=Object(l["a"])(a["default"],s["b"],s["c"],!1,null,"8c3b0be2",null,!1,s["a"],o);t["default"]=c.exports}}]);
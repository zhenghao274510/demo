(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-vipRoomOrder-vipRoomOrder"],{1231:function(t,i,e){"use strict";var n=e("6723"),a=e.n(n);a.a},1754:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.neil-modal[data-v-411647c2]{position:fixed;visibility:hidden;width:100%;height:100%;top:0;left:0;z-index:100000;-webkit-transition:visibility .2s ease-in;-o-transition:visibility .2s ease-in;transition:visibility .2s ease-in}.neil-modal.neil-modal--show[data-v-411647c2]{visibility:visible}.neil-modal__header[data-v-411647c2]{position:relative;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;padding:%?18?% %?24?%;line-height:1.5;color:#333;font-size:%?32?%;text-align:center}.neil-modal__header[data-v-411647c2]:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-top:1px solid #e5e5e5;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5)}.neil-modal__container[data-v-411647c2]{position:absolute;z-index:999;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;-o-transition:transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;width:%?540?%;border-radius:%?20?%;background-color:#fff;overflow:hidden;opacity:0;-webkit-transition:opacity .2s ease-in;-o-transition:opacity .2s ease-in;transition:opacity .2s ease-in}.neil-modal__content[data-v-411647c2]{position:relative;color:#333;font-size:%?28?%;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.5}.neil-modal__content[data-v-411647c2]:after{content:" ";position:absolute;left:0;bottom:-1px;right:0;height:1px;border-bottom:1px solid #e5e5e5;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5)}.neil-modal__footer[data-v-411647c2]{position:relative;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;color:#333;font-size:%?32?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.neil-modal__footer-left[data-v-411647c2],.neil-modal__footer-right[data-v-411647c2]{position:relative;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;height:%?88?%;font-size:%?28?%;line-height:%?88?%;text-align:center;background-color:#fff;color:#333}.neil-modal__footer-right[data-v-411647c2]{color:#007aff}.neil-modal__footer-left[data-v-411647c2]:after{content:" ";position:absolute;right:-1px;top:0;width:1px;bottom:0;border-right:1px solid #e5e5e5;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleX(.5);-ms-transform:scaleX(.5);transform:scaleX(.5)}.neil-modal__footer-hover[data-v-411647c2]{background-color:#f1f1f1}.neil-modal__mask[data-v-411647c2]{display:block;position:absolute;z-index:998;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5);opacity:0;-webkit-transition:opacity .2s ease-in;-o-transition:opacity .2s ease-in;transition:opacity .2s ease-in}.neil-modal__mask.neil-modal--show[data-v-411647c2]{opacity:1}.neil-modal--padding[data-v-411647c2]{padding:%?32?% %?24?%;min-height:%?90?%}.neil-modal--show .neil-modal__container[data-v-411647c2],.neil-modal--show .neil-modal__mask[data-v-411647c2]{opacity:1}',""])},"251c":function(t,i,e){"use strict";e.r(i);var n=e("49db"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);i["default"]=a.a},3645:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"neil-modal",props:{title:{type:String,default:""},content:String,align:{type:String,default:"center"},cancelText:{type:String,default:"取消"},cancelColor:{type:String,default:"#333333"},confirmText:{type:String,default:"确定"},confirmColor:{type:String,default:"#DE2910"},showCancel:{type:[Boolean,String],default:!0},show:{type:[Boolean,String],default:!1},autoClose:{type:[Boolean,String],default:!0}},data:function(){return{isOpen:!1}},watch:{show:function(t){this.isOpen=t}},created:function(){this.isOpen=this.show},methods:{bindTouchmove:function(){},clickLeft:function(){var t=this;setTimeout(function(){t.$emit("cancel")},200)},clickRight:function(){var t=this;setTimeout(function(){t.$emit("confirm")},200)},closeModal:function(){this.showAnimation=!1,this.isOpen=!1,this.$emit("close")}}};i.default=n},"46af":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"contain"},[n("v-uni-view",{staticClass:"fixed"},[n("cu-custom",{attrs:{isBack:!0,Color:t.Color,backColor:t.backColor,isIcon:!0,bgColor:"bg-shadeTop text-white"}},[n("template",{attrs:{slot:"backText"},slot:"backText"}),n("template",{attrs:{slot:"content"},slot:"content"},[t._v("订单详情")]),n("template",{attrs:{slot:"right"},slot:"right"},[n("v-uni-view",{staticClass:"call",on:{click:function(i){i=t.$handleEvent(i),t.goService(i)}}},[n("img",{attrs:{src:e("529c"),alt:""}}),n("v-uni-view",[t._v("客服")])],1)],1)],2)],1),n("v-uni-view",{staticClass:"orderMsg",staticStyle:{"margin-top":"30upx"}},[n("v-uni-view",{staticClass:"orderHead"},[n("v-uni-view",{staticClass:"title-left"},[t._v("订单信息")]),0==t.dataList.state?n("v-uni-view",{staticClass:"title-right"},[t._v("待支付")]):t._e(),1==t.dataList.state?n("v-uni-view",{staticClass:"title-right"},[t._v("已支付")]):t._e(),3==t.dataList.state?n("v-uni-view",{staticClass:"title-right",staticStyle:{color:"#A5A5A5"}},[t._v("已过期")]):t._e(),2==t.dataList.state?n("v-uni-view",{staticClass:"title-right",staticStyle:{color:"#A5A5A5"}},[t._v("已完成")]):t._e()],1),n("v-uni-view",{staticClass:"orderList"},[n("v-uni-view",{staticClass:"list"},[n("v-uni-text",[t._v("订单编号：")]),n("v-uni-view",{staticClass:"content"},[t._v(t._s(t.dataList.orderId))])],1),n("v-uni-view",{staticClass:"list"},[n("v-uni-text",[t._v("付款时间：")]),n("v-uni-view",{staticClass:"content"},[t._v(t._s(t.dataList.createDate))])],1),n("v-uni-view",{staticClass:"list"},[n("v-uni-text",[t._v("贵宾厅：")]),n("v-uni-view",{staticClass:"content"},[t._v(t._s(t.dataList.title))])],1),n("v-uni-view",{staticClass:"list"},[n("v-uni-text",[t._v("贵宾厅位置：")]),n("v-uni-view",{staticClass:"content"},[t._v(t._s(t.dataList.address))])],1),n("v-uni-view",{staticClass:"list"},[n("v-uni-text",[t._v("到厅时间：")]),n("v-uni-view",{staticClass:"content"},[t._v(t._s(t.dataList.reserveDate))])],1),n("v-uni-view",{staticClass:"list"},[n("v-uni-text",[t._v("服务人次：")]),n("v-uni-view",{staticClass:"content"},[t._v(t._s(t.dataList.numbers)+"人")])],1),n("v-uni-view",{staticClass:"list"},[n("v-uni-text",[t._v("应付总额：")]),n("v-uni-view",{staticClass:"content"},[t._v("¥"+t._s(t.dataList.amount))])],1)],1)],1),n("v-uni-view",{staticClass:"orderMsg"},[n("v-uni-view",{staticClass:"title"},[t._v("联系人信息")]),n("v-uni-view",{staticClass:"orderList"},[n("v-uni-view",{staticClass:"list"},[n("v-uni-text",[t._v("联系人：")]),n("v-uni-view",{staticClass:"content"},[t._v(t._s(t.dataList.username))])],1),n("v-uni-view",{staticClass:"list"},[n("v-uni-text",[t._v("手机号：")]),n("v-uni-view",{staticClass:"content"},[t._v(t._s(t.dataList.phone))])],1)],1)],1),n("v-uni-view",{staticClass:"orderMsg"},[n("v-uni-view",{staticClass:"title"},[t._v("服务须知")]),n("v-uni-view",{staticClass:"notice"},[n("v-uni-view",[t._v(t._s(t.dataList.introduction))])],1)],1),1==t.dataList.state||3==t.dataList.state?n("v-uni-view",{staticClass:"bind_card"},[n("v-uni-view",{staticClass:"card_btn",on:{click:function(i){i=t.$handleEvent(i),t.open(i)}}},[t._v("取消预订")])],1):t._e(),n("model",{attrs:{show:t.show,title:"退单须知",content:"距离预约时间"+t.refundList.hours+"小时以上退单需要扣除"+parseInt(t.refundList.front)+"%违约金，距离预约时间"+parseInt(t.refundList.hours)+"小时内需要扣除"+parseInt(t.refundList.behind)+"%违约金。 订单超时需要扣除"+parseInt(t.refundList.expire)+"%违约金。",align:t.left},on:{cancel:function(i){i=t.$handleEvent(i),t.cancel(i)},confirm:function(i){i=t.$handleEvent(i),t.confirm(i)}}})],1)},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})},"49db":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=s(e("53aa")),a=e("f42a"),o=e("ad18");function s(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{Color:"#DE2910",value:"",backColor:"#FFFFFF",show:!1,left:"justify",dataList:{},id:"",serviceList:[],refundList:{}}},components:{model:n.default,Toast:o.Toast},onLoad:function(t){if(this.getRequest("uid")){var i=this.getRequest("uid");this.$store.commit("changeUid",i)}this.id=t.id,this.init()},methods:{getRequest:function(t){for(var i=window.location.search.substring(1),e=i.split("&"),n=0;n<e.length;n++){var a=e[n].split("=");if(a[0]==t)return a[1]}return!1},init:function(){var t=this,i={uid:t.$store.state.uid,orderId:t.id},e={url:"/api/gzh/viphallOrderDetail",data:i,success:function(i){console.log(i),0==i.data.result&&(t.dataList=i.data,t.serviceList=i.data.assistantList,t.refundList=i.data.refund)}};(0,a.ajax)(e)},cancel:function(){this.show=!1},confirm:function(){this.show=!1;var t=this,i={uid:t.$store.state.uid,orderId:t.id},e={url:"/api/gzh/cancelViphallOrder",data:i,success:function(t){console.log(t),0==t.data.result&&((0,o.Toast)("取消成功"),setTimeout(function(){uni.navigateBack({delta:1})},500))}};(0,a.ajax)(e)},open:function(){this.show=!0},goService:function(){var t=this;uni.makePhoneCall({phoneNumber:t.$store.state.customer})}}};i.default=r},"529c":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADOUlEQVRYR8VXu24TQRQ9d40EEUIZvgCvrZC1hITpkJBIXNGAkpRUMV9AUkEXpwsV5gvidHQY0dAlCPo4ovAmYG/SQcUYkByk2Bfd8a5jO+tH1g5Mt9qZOeee+xzCf14UFd+bUWnEMG3ON1Czv+hSlLtGJuDFlcJlLLOFLIB0H7ASNVHAH2zZh1qPQmgkAhVH5YjwFIAylzL2AJQYOJRPAuKGFOG2D6qJkbddvT6MxEACnqPiTHgjlzOjZgErOEaxn3WyH8B8E8gTGfeUiLFku9oQDVt9CYiP+RK2xWoGXll15EaVVdzFV5AHYRmAphNk+sVIKAHf8l0BJ8YT29WFYVKG/fcclWXCpiFRhx1mQCiBqqNK4s9xwANClZRaIeCluCNR1nd6iZ4h4AfcGhhbCVdLxI+9qo4qiDvCDOoiYHw3BY8ZZB0jPqrPhzGUe5tXcEgE7nVFF4FALmasJ12dG3bxef4HyjKwmizrfHC2i0A1pYoAFohhD0qd8wAHe/3A9gC8TZT14hkCvvw/pMgkXN2v0kXBbp9pB3cd1wP3thWozFx7SLHYOylr/ipRHZlx46CznrSKKGAxMrard/wq2oLzZqc32KJnzPydQN8kDScRC1VH7YAwB8YHBtJSIanRfGwf/HzdRaA6q4qwsEBNfgGi90zYniSBRFlTJ4a9X3veRaAyO71BosBJ45EVi/2+CAJfHbVjEeaoiVV7v5UJpzHQ6nhrxMgYX12AAgMJeDfVIsdM52uv3pyNkgJBanedPW7cT3i/PnYpIB+mWADzvgKlZFmvRAHtPOOndwEsXZXvEqiRcPXV0EI0Ltig83467vb2mJEmokkQ69eQ/gmBtvXAUaKsZWpqrwsn4MeATFZpamDJPtDSb8YnYFrsFNYIZkqWEluw6ljvLN2d4DLWhQV1ZAUqKZUnmEn5yDfnBgPFZFkvmdLuqHkGNkGIDxpuIhOopmRWPfVpxVGfiXCLGQWTygLcUibU8rHSsN26O3p7xVGfiHBPEBmoEVAkIDdsroiugD+4isWmohGyzHxggR4MA51MEMq7IQYZNluvIcYeNZA97xsxsgKBFeaRCuC8wGPFwCQqY3DHX7gJkDBp4BrmAAAAAElFTkSuQmCC"},"53aa":function(t,i,e){"use strict";e.r(i);var n=e("7892"),a=e("785c");for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);e("1231");var s=e("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"411647c2",null);i["default"]=r.exports},"5c98":function(t,i,e){"use strict";var n=e("9c52"),a=e.n(n);a.a},"626d":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,"uni-page-body[data-v-d855c266]{width:100%;height:100%}.contain[data-v-d855c266]{width:100%;height:100%;background:#f8f8f8}.call[data-v-d855c266]{margin-right:%?30?%;color:#de2910;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:12px}.call>img[data-v-d855c266]{width:%?30?%;height:%?30?%}.orderMsg[data-v-d855c266]{width:92%;padding:%?30?% 0 0;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#fff;border-radius:4px;margin:%?30?% auto 0}.orderHead[data-v-d855c266]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.title-left[data-v-d855c266]{padding-left:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-left:4px solid red;font-size:14px;color:#333}.title-right[data-v-d855c266]{font-size:14px;color:#de2910;padding-right:%?20?%}.title[data-v-d855c266]{width:100%;padding-left:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-left:4px solid red;font-size:14px;color:#333}.orderList[data-v-d855c266]{width:100%;padding:%?28?%;-webkit-box-sizing:border-box;box-sizing:border-box}.list[data-v-d855c266]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:%?24?%;font-size:14px;color:#333}.content[data-v-d855c266]{width:70%;text-align:justify}.notice[data-v-d855c266]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:%?28?%}.notice>uni-view[data-v-d855c266]{margin-bottom:%?10?%;font-size:12px;color:#999}.bind_card[data-v-d855c266]{width:92%;margin:%?60?% auto 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#eee;border-radius:4px;color:#a5a5a5;font-size:15px;margin-bottom:%?60?%}.card_btn[data-v-d855c266]{width:100%;border-radius:4px;border:1px solid #eee;height:%?80?%;line-height:%?80?%;text-align:center}",""])},6460:function(t,i,e){"use strict";e.r(i);var n=e("46af"),a=e("251c");for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);e("5c98");var s=e("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"d855c266",null);i["default"]=r.exports},6723:function(t,i,e){var n=e("1754");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("43bea3fc",n,!0,{sourceMap:!1,shadowMode:!1})},"785c":function(t,i,e){"use strict";e.r(i);var n=e("3645"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);i["default"]=a.a},7892:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"neil-modal",class:{"neil-modal--show":t.isOpen},on:{touchmove:function(i){i.stopPropagation(),i.preventDefault(),i=t.$handleEvent(i),t.bindTouchmove(i)}}},[e("v-uni-view",{staticClass:"neil-modal__mask"}),e("v-uni-view",{staticClass:"neil-modal__container"},[t.title.length>0?e("v-uni-view",{staticClass:"neil-modal__header"},[t._v(t._s(t.title))]):t._e(),e("v-uni-view",{staticClass:"neil-modal__content",class:t.content?"neil-modal--padding":"",style:{textAlign:t.align}},[t.content?[e("v-uni-text",{staticClass:"modal-content"},[t._v(t._s(t.content))])]:[t._t("default")]],2),e("v-uni-view",{staticClass:"neil-modal__footer"},[t.showCancel?e("v-uni-view",{staticClass:"neil-modal__footer-left",style:{color:t.cancelColor},attrs:{"hover-class":"neil-modal__footer-hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(i){i=t.$handleEvent(i),t.clickLeft(i)}}},[t._v(t._s(t.cancelText))]):t._e(),e("v-uni-view",{staticClass:"neil-modal__footer-right",style:{color:t.confirmColor},attrs:{"hover-class":"neil-modal__footer-hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(i){i=t.$handleEvent(i),t.clickRight(i)}}},[t._v(t._s(t.confirmText))])],1)],1)],1)},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})},"9c52":function(t,i,e){var n=e("626d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("1feea788",n,!0,{sourceMap:!1,shadowMode:!1})},f42a:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.ajaxs=i.ajax=void 0;var n=function(t){t=t||{},t.url=t.url||"",t.data=JSON.stringify(t.data||{}),t.method=t.method||"POST",t.header=t.header||{"Content-Type":"application/json"},t.success=t.success||function(){},t.fail=t.fail||function(){},console.log(t.data),uni.request({url:"https://m.xgcyz1978.com"+t.url,data:t.data,method:t.method,header:t.header,dataType:"json",success:function(i){t.success(i)},fail:function(i){t.fail(i),uni.showToast({title:"请稍后重试",icon:"none"})}})};i.ajax=n;var a=function(t){t=t||{},t.url=t.url||"",t.data=JSON.stringify(t.data||{}),t.method=t.method||"POST",t.header=t.header||{"Content-Type":"application/json"},t.success=t.success||function(){},t.fail=t.fail||function(){},console.log(t.data),uni.request({url:"https://m.xgcyz1978.com"+t.url,data:t.data,method:t.method,header:t.header,dataType:"json",success:function(i){t.success(i)},fail:function(i){t.fail(i),uni.showToast({title:"请稍后重试",icon:"none"})}})};i.ajaxs=a}}]);
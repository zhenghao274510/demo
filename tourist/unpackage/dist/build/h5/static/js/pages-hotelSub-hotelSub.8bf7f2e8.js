(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-hotelSub-hotelSub"],{"2a19":function(t,e,i){"use strict";var a=i("b673"),o=i.n(a);o.a},4263:function(t,e,i){"use strict";i.r(e);var a=i("62eb"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=o.a},"62eb":function(t,e,i){"use strict";(function(t){var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("e814"));i("28a5"),i("3b2b"),i("a481");var n=i("f42a"),s=i("ad18"),c={data:function(){return{Color:"#E73C1D",backColor:"#FFFFFF",list:{},user:"",tel:"",card:"",code:"",cardName:"",cardNum:"",connect:"",show1:!1,show2:!1,show3:!1,clock:"18:00之前",columns1:["18:00之前","18:00-06:00","06:00之后"],columns2:["身份证","护照","其他"],currentTime:new Date,minDate:new Date,time1:"MM/YY",time2:"",cardType:"身份证"}},onLoad:function(t){this.list=JSON.parse(t.list)},computed:{date1:function(){return this.$store.state.hotelDate1},date2:function(){return this.$store.state.hotelDate2}},methods:{choiceTime:function(){this.show1=!0},onCancel1:function(){this.show1=!1},onConfirm1:function(t){this.show1=!1,this.clock=t},goType:function(){this.show3=!0},onCancel2:function(){this.show3=!1},onConfirm2:function(t){this.show3=!1,this.cardType=t},useTime:function(){this.show2=!0},confirm:function(t){this.time1=this.dateFtt("MM/dd",t),this.time2=this.dateFtt("yyyy/MM/dd",t),this.show2=!1},cancel:function(){this.show2=!1},dateFtt:function(t,e){var i={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var a in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),i)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[a]:("00"+i[a]).substr((""+i[a]).length)));return t},goSubmit:function(){var e=this;if(""!=this.user)if(""!=this.connect)if(""!=this.tel)if(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(this.tel)){if(1==this.list.type){var i={uid:e.$store.state.uid,HId:e.list.HId,RoomId:e.list.RoomId,ProductId:e.list.ProductId,IsGuarantee:!1,InDate:e.$store.state.hotelFullDate1,OutDate:e.$store.state.hotelFullDate2,LatestTime:e.clock,OrderAmount:e.list.total,RoomsCount:1,Passengers:e.user,ContactName:e.connect,ContactMobile:e.tel,CreditCard:null,BookRemark:""};uni.showLoading({title:"提交中",mask:!0});var a={url:"/api/gzh/hotelCreateOrder",data:i,success:function(t){if(0==t.data.result){var i=t.data.orderId,a=t.data.body.appId,o=t.data.body.timeStamp,n=t.data.body.nonceStr,c=t.data.body.prepay,l=t.data.body.signType,r=t.data.body.paySign;e.onBridgeReady(a,o,n,c,l,r,i)}else uni.hideLoading(),(0,s.Toast)(t.data.resultNote)}};(0,n.ajaxs)(a)}else if(0==this.list.type&&0!=this.list.safeType){if(""==this.card)return void(0,s.Toast)("请输入信用卡卡号");if("MM/YY"==this.time1)return void(0,s.Toast)("请选择有效期");if(""==this.code)return void(0,s.Toast)("请输入CVV2码");if(""==this.cardName)return void(0,s.Toast)("请输入持卡人");if(""==this.cardNum)return void(0,s.Toast)("请输入证件号");if("身份证"==this.cardType){var c=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;if(!c.test(this.cardNum))return void(0,s.Toast)("身份证不合法")}var l=this.time2.split("/"),r=0;"身份证"==e.cardType?r=0:"护照"==e.cardType||e.cardType;var d={Number:e.card,CVV:e.code,ExpirationYear:(0,o.default)(l[0]),ExpirationMonth:(0,o.default)(l[1]),HolderName:e.cardName,IdType:r,IdNo:e.cardNum},u={uid:e.$store.state.uid,HId:e.list.HId,RoomId:e.list.RoomId,ProductId:e.list.ProductId,IsGuarantee:!1,InDate:e.$store.state.hotelFullDate1,OutDate:e.$store.state.hotelFullDate2,LatestTime:e.clock,OrderAmount:e.list.total,RoomsCount:1,Passengers:e.user,ContactName:e.connect,ContactMobile:e.tel,CreditCard:d,BookRemark:""};uni.showLoading({title:"提交中",mask:!0});var b={url:"/api/gzh/hotelCreateOrder",data:u,success:function(t){0==t.data.result?(uni.hideLoading(),uni.navigateTo({url:"../hotelSuc/hotelSuc"})):(uni.hideLoading(),(0,s.Toast)(t.data.resultNote))}};(0,n.ajaxs)(b)}else if(0==this.list.type&&0==this.list.safeType){var p={uid:e.$store.state.uid,HId:e.list.HId,RoomId:e.list.RoomId,ProductId:e.list.ProductId,IsGuarantee:!1,InDate:e.$store.state.hotelFullDate1,OutDate:e.$store.state.hotelFullDate2,LatestTime:e.clock,OrderAmount:e.list.total,RoomsCount:1,Passengers:e.user,ContactName:e.connect,ContactMobile:e.tel,CreditCard:null,BookRemark:""};t.log(p),uni.showLoading({title:"提交中",mask:!0});var f={url:"/api/gzh/hotelCreateOrder",data:p,success:function(t){0==t.data.result?(uni.hideLoading(),uni.navigateTo({url:"../hotelSuc/hotelSuc"})):(uni.hideLoading(),(0,s.Toast)(t.data.resultNote))}};(0,n.ajaxs)(f)}}else(0,s.Toast)("手机号格式不正确");else(0,s.Toast)("手机号不能为空");else(0,s.Toast)("请输入联系人姓名");else(0,s.Toast)("请输入入住人姓名")},onBridgeReady:function(t,e,i,a,o,n,c){WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:t,timeStamp:e,nonceStr:i,package:a,signType:o,paySign:n},function(t){"get_brand_wcpay_request:ok"===t.err_msg?(uni.hideLoading(),uni.navigateTo({url:"../hotelSuc/hotelSuc"})):"get_brand_wcpay_request:cancel"===t.err_msg?(uni.hideLoading(),(0,s.Toast)("用户取消支付")):"get_brand_wcpay_request:fail"===t.err_msg&&(uni.hideLoading(),(0,s.Toast)("网络异常，请重试"))})}}};e.default=c}).call(this,i("5a52")["default"])},"69c5":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"contain"},[a("v-uni-view",{staticClass:"fixed"},[a("cu-custom",{attrs:{isBack:!0,Color:t.Color,backColor:t.backColor,isIcon:!0,bgColor:"bg-shadeTop text-white"}},[a("template",{attrs:{slot:"backText"},slot:"backText"}),a("template",{attrs:{slot:"content"},slot:"content"},[t._v("填写订单")])],2)],1),a("v-uni-view",{staticClass:"wrapper"},[a("v-uni-view",{staticClass:"top"},[a("v-uni-view",[t._v(t._s(t.list.name))]),5==t.list.star?a("v-uni-view",{staticClass:"star"},[t._v("五星级/豪华")]):t._e(),4==t.list.star?a("v-uni-view",{staticClass:"star"},[t._v("四星级/高档")]):t._e(),3==t.list.star?a("v-uni-view",{staticClass:"star"},[t._v("三星级/舒适")]):t._e(),t.list.star<=2?a("v-uni-view",{staticClass:"star"},[t._v("二星级/普通")]):t._e()],1),a("v-uni-view",{staticClass:"time"},[a("v-uni-view",{staticClass:"hotel-date"},[a("img",{attrs:{src:i("e444"),alt:""}}),a("v-uni-view",{staticStyle:{"margin-left":"30upx"}},[t._v("入住时间 "+t._s(t.date1))])],1),a("v-uni-view",{staticClass:"hotel-date"},[a("img",{attrs:{src:i("e444"),alt:""}}),a("v-uni-view",{staticStyle:{"margin-left":"30upx"}},[t._v("离店时间 "+t._s(t.date2))])],1)],1),a("v-uni-view",{staticClass:"time"},[a("v-uni-view",[t._v(t._s(t.list.room))]),a("v-uni-view",{staticStyle:{color:"#E73C1D"}},[t._v("1间")])],1),a("v-uni-view",{staticClass:"forms"},[a("v-uni-view",{staticStyle:{width:"200upx"}},[t._v("入住人")]),a("v-uni-input",{attrs:{type:"text",placeholder:"请输入姓名","placeholder-class":"place"},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1),a("v-uni-view",{staticClass:"forms"},[a("v-uni-view",{staticStyle:{width:"200upx"}},[t._v("联系人")]),a("v-uni-input",{attrs:{type:"text",placeholder:"请输入联系人","placeholder-class":"place"},model:{value:t.connect,callback:function(e){t.connect=e},expression:"connect"}})],1),a("v-uni-view",{staticClass:"forms"},[a("v-uni-view",{staticStyle:{width:"200upx"}},[t._v("联系手机")]),a("v-uni-input",{attrs:{type:"text",placeholder:"请输入手机号","placeholder-class":"place"},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}})],1),a("v-uni-view",{staticClass:"time",on:{click:function(e){e=t.$handleEvent(e),t.choiceTime(e)}}},[a("v-uni-view",[t._v("到店时间")]),a("v-uni-view",{staticClass:"choice"},[a("v-uni-view",{staticStyle:{color:"#E73C1D"}},[t._v(t._s(t.clock))]),a("img",{staticStyle:{width:"24upx","margin-left":"20upx"},attrs:{src:i("ba84"),alt:""}})],1)],1),0==t.list.type&&0!=t.list.safeType?a("v-uni-view",{staticClass:"bank"},[a("v-uni-view",{staticClass:"safe"},[a("v-uni-view",{staticClass:"card"},[t._v("信用卡担保")]),a("v-uni-view",{staticClass:"content"},[t._v(t._s(t.list.safe))])],1),a("v-uni-view",{staticClass:"bankCard"},[a("v-uni-view",{staticClass:"formCard"},[a("v-uni-view",{staticStyle:{width:"200upx"}},[t._v("信用卡号")]),a("v-uni-input",{attrs:{type:"text",placeholder:"请输入信用卡号","placeholder-class":"place"},model:{value:t.card,callback:function(e){t.card=e},expression:"card"}})],1),a("v-uni-view",{staticClass:"time",on:{click:function(e){e=t.$handleEvent(e),t.useTime(e)}}},[a("v-uni-view",[t._v("有效期")]),a("v-uni-view",{staticClass:"choice"},[a("v-uni-view",{staticStyle:{color:"#E73C1D"}},[t._v(t._s(t.time1))]),a("img",{staticStyle:{width:"24upx","margin-left":"20upx"},attrs:{src:i("ba84"),alt:""}})],1)],1),a("v-uni-view",{staticClass:"formCard"},[a("v-uni-view",{staticStyle:{width:"200upx"}},[t._v("CVV2码")]),a("v-uni-input",{attrs:{type:"text",placeholder:"卡背后末三位数字","placeholder-class":"place"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1),a("v-uni-view",{staticClass:"formCard"},[a("v-uni-view",{staticStyle:{width:"200upx"}},[t._v("持卡人")]),a("v-uni-input",{attrs:{type:"text",placeholder:"请输入持卡人姓名","placeholder-class":"place"},model:{value:t.cardName,callback:function(e){t.cardName=e},expression:"cardName"}})],1),a("v-uni-view",{staticClass:"time",on:{click:function(e){e=t.$handleEvent(e),t.goType(e)}}},[a("v-uni-view",[t._v("证件类型")]),a("v-uni-view",{staticClass:"choice"},[a("v-uni-view",{staticStyle:{color:"#E73C1D"}},[t._v(t._s(t.cardType))]),a("img",{staticStyle:{width:"24upx","margin-left":"20upx"},attrs:{src:i("ba84"),alt:""}})],1)],1),a("v-uni-view",{staticClass:"formCard",staticStyle:{"border-bottom":"none"}},[a("v-uni-view",{staticStyle:{width:"200upx"}},[t._v("证件卡号")]),a("v-uni-input",{attrs:{type:"text",placeholder:"证件卡号","placeholder-class":"place"},model:{value:t.cardNum,callback:function(e){t.cardNum=e},expression:"cardNum"}})],1)],1)],1):t._e()],1),a("v-uni-view",{staticClass:"payBtn"},[a("v-uni-view",[t._v("订单总价："),a("v-uni-text",{staticStyle:{"font-size":"16px",color:"#E73C1D"}},[t._v("￥"+t._s(t.list.total))])],1),a("v-uni-view",{staticClass:"btns",on:{click:function(e){e=t.$handleEvent(e),t.goSubmit(e)}}},[t._v("提交订单")])],1),a("van-popup",{attrs:{position:"bottom"},model:{value:t.show1,callback:function(e){t.show1=e},expression:"show1"}},[a("van-picker",{attrs:{"show-toolbar":"",columns:t.columns1},on:{cancel:function(e){e=t.$handleEvent(e),t.onCancel1(e)},confirm:function(e){e=t.$handleEvent(e),t.onConfirm1(e)}}})],1),a("van-popup",{attrs:{position:"bottom"},model:{value:t.show3,callback:function(e){t.show3=e},expression:"show3"}},[a("van-picker",{attrs:{"show-toolbar":"",columns:t.columns2},on:{cancel:function(e){e=t.$handleEvent(e),t.onCancel2(e)},confirm:function(e){e=t.$handleEvent(e),t.onConfirm2(e)}}})],1),a("van-popup",{attrs:{position:"bottom",overlay:!1},model:{value:t.show2,callback:function(e){t.show2=e},expression:"show2"}},[a("van-datetime-picker",{attrs:{type:"date","min-date":t.minDate},on:{cancel:function(e){e=t.$handleEvent(e),t.cancel(e)},confirm:function(e){e=t.$handleEvent(e),t.confirm(e)}},model:{value:t.currentTime,callback:function(e){t.currentTime=e},expression:"currentTime"}})],1)],1)},o=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o})},"90ce":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-c8ecb600]{width:100%;background:#f8f8f8}.contain[data-v-c8ecb600]{width:100%;height:100%}.wrapper[data-v-c8ecb600]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.top[data-v-c8ecb600]{width:100%;padding:%?20?% %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.star[data-v-c8ecb600]{margin-top:%?20?%;font-size:14px;color:#e73c1d}.forms[data-v-c8ecb600],.time[data-v-c8ecb600]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:%?24?% %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff;border-bottom:1px solid #eee;font-size:12px;color:#666}.hotel-date[data-v-c8ecb600]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.item-left>img[data-v-c8ecb600]{width:%?30?%}.place[data-v-c8ecb600]{font-size:12px;color:#999}uni-input[data-v-c8ecb600]{font-size:12px;color:#666;text-align:right}.choice[data-v-c8ecb600]{height:%?36?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.bank[data-v-c8ecb600]{width:100%;padding:%?30?% 0;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:%?120?%}.safe[data-v-c8ecb600]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box}.card[data-v-c8ecb600]{width:30%;background:#e73c1d;border-radius:4px;font-size:12px;color:#fff;padding:%?10?%;text-align:center}.content[data-v-c8ecb600]{width:100%;padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff;border-radius:4px;font-size:12px;color:#666;text-align:justify;margin-top:%?30?%}.bankCard[data-v-c8ecb600]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:%?30?%}.formCard[data-v-c8ecb600]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:%?24?% %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:12px;color:#666;background:#fff;border-bottom:1px solid #eee}.payBtn[data-v-c8ecb600]{width:100%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;position:fixed;left:0;bottom:0;background:#fff;padding:0 0 0 %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:1px 1px 5px #eee;box-shadow:1px 1px 5px #eee}.btns[data-v-c8ecb600]{width:%?180?%;height:%?90?%;line-height:%?90?%;text-align:center;background:#e73c1d;font-size:14px;color:#fff}body.?%PAGE?%[data-v-c8ecb600]{background:#f8f8f8}",""])},b673:function(t,e,i){var a=i("90ce");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("1301bf1d",a,!0,{sourceMap:!1,shadowMode:!1})},ba84:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA6UlEQVRYR8XXzQ3CMAyGYbsTRckCdAM2ADZgE9gAmIAVWCBVRmGBSKhXhIh/PkOuTvU+7cUq058Pj/qllC0R7Xrvh9bac3RfO5cC7kTUeu8zGjEErG+Uc94z8yUCIQJEIsSAKIQKEIFQA9AIEwCJMANQCBcAgXADvAgIwIOAAawIKMCCgAPeEI9a6/xtQ4YASinXdYUT0a3Wuv8pQBNfYdAvoI1DAZY4DGCNQwCeuBvgjbsAiLgZgIqbAMi4GoCOqwARcTEgKi4C5JyPzHySLBbtf6EIkFJK0zRtlmU5WwKjZ6DLaBT7NH8Bz0DMId00QY0AAAAASUVORK5CYII="},de04:function(t,e,i){"use strict";i.r(e);var a=i("69c5"),o=i("4263");for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);i("2a19");var s=i("2877"),c=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,"c8ecb600",null);e["default"]=c.exports},e444:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgxRDEyODZDQzJGQzExRTlBRTQ3RkVEMjJBQjhCRTVFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgxRDEyODZEQzJGQzExRTlBRTQ3RkVEMjJBQjhCRTVFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODFEMTI4NkFDMkZDMTFFOUFFNDdGRUQyMkFCOEJFNUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODFEMTI4NkJDMkZDMTFFOUFFNDdGRUQyMkFCOEJFNUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6qPjbkAAABH0lEQVR42mK8pynAAATWQMwOxO5A7AHEC4D4FBAzMkDAfyA2A+JEIN4JxNuA+BcQH2UBEguBOA6q8AUQVwHxPAbsIB2Ie4C4BMpfxISkGQQ4gdibATfwBGJmJH4cI9ALsUAGB9RJzFD2N6izkQEj1IKfQPwXiNmA+AcL1FRuNIUgcWEk20Aa3gLxbzRDv4Jc8B+Hc0Hh8R3JZnFsikBh8BGL+FYglgRiJSBWBGIJIF6LRd1HFhy26wFxF9SfS4H4NBCLYFMI8sIHIM2PJ+SVoOFxmhQXwMAyIL4PdQUDrjDABxqB2BaILXEpwOeC2UB8C4in4bOBCS1lIQNQLEwFYmc8+plBLmDFIenDQBiwggyoh2YgrLGEJUkjgzaAAAMApWsxcI1E1OYAAAAASUVORK5CYII="},f42a:function(t,e,i){"use strict";(function(t){var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.ajaxs=e.ajax=void 0;var o=a(i("f499")),n=function(e){e=e||{},e.url=e.url||"",e.data=(0,o.default)(e.data||{}),e.method=e.method||"POST",e.header=e.header||{"Content-Type":"application/json"},e.success=e.success||function(){},e.fail=e.fail||function(){},t.log(e.data),uni.request({url:"https://m.xgcyz1978.com"+e.url,data:e.data,method:e.method,header:e.header,dataType:"json",success:function(t){e.success(t)},fail:function(t){e.fail(t),uni.showToast({title:"请稍后重试",icon:"none"})}})};e.ajax=n;var s=function(e){e=e||{},e.url=e.url||"",e.data=(0,o.default)(e.data||{}),e.method=e.method||"POST",e.header=e.header||{"Content-Type":"application/json"},e.success=e.success||function(){},e.fail=e.fail||function(){},t.log(e.data),uni.request({url:"https://m.xgcyz1978.com"+e.url,data:e.data,method:e.method,header:e.header,dataType:"json",success:function(t){e.success(t)},fail:function(t){e.fail(t),uni.showToast({title:"请稍后重试",icon:"none"})}})};e.ajaxs=s}).call(this,i("5a52")["default"])}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-vipAppointment-vipAppointment"],{"17f7":function(t,e,i){"use strict";var a=i("2344"),n=i.n(a);n.a},2344:function(t,e,i){var a=i("f700");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("5985fcb3",a,!0,{sourceMap:!1,shadowMode:!1})},"3f49":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("3b2b"),i("a481"),i("28a5"),i("386d"),i("7f7f");var a=i("f42a"),n=i("ad18"),s={data:function(){return{Color:"#DE2910",value:1,backColor:"#FFFFFF",currentTime:new Date,minDate:new Date,show:!1,time:"请选择到厅时间",name:"",user:"",tel:"",id:"",isVip:0,notice:"",price:0}},components:{Toast:n.Toast},onLoad:function(t){if(this.getRequest("uid")){var e=this.getRequest("uid");this.$store.commit("changeUid",e)}this.name=decodeURIComponent(t.name),this.id=t.id,this.isVip=t.isVip,this.notice=decodeURIComponent(t.notice),this.price=t.price},methods:{getRequest:function(t){for(var e=window.location.search.substring(1),i=e.split("&"),a=0;a<i.length;a++){var n=i[a].split("=");if(n[0]==t)return n[1]}return!1},init:function(){var e=this,i={vipHallId:this.id,uid:this.$store.state.uid},n={url:"/api/gzh/vipHallDetail",data:i,success:function(i){t.log(i),0==i.data.result&&(e.imgs=i.data.images,e.listData=i.data,e.serviceList=i.data.serviceList,e.assistantList=i.data.assistantList,e.name=i.data.title,e.isVip=i.data.isVip)}};(0,a.ajax)(n)},confirm:function(t){this.time=this.dateFtt("yyyy-MM-dd hh:mm",t),this.show=!1},cancel:function(){this.show=!1},choiceTime:function(){this.show=!0},dateFtt:function(t,e){var i={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var a in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),i)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[a]:("00"+i[a]).substr((""+i[a]).length)));return t},paySuc:function(){if("请选择到厅时间"!=this.time)if(""!=this.user)if(""!=this.tel)if(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(this.tel)){var t=this,e={uid:this.$store.state.uid,vipHallId:t.id,numbers:t.value,reserveDate:t.time,username:t.user,phone:t.tel,amount:t.price},i={url:"/api/gzh/bookingVipHall",data:e,success:function(e){if(0==e.data.result){var i=e.data.orderId,a=e.data.body.appId,s=e.data.body.timeStamp,o=e.data.body.nonceStr,c=e.data.body.prepay,l=e.data.body.signType,r=e.data.body.paySign;t.onBridgeReady(a,s,o,c,l,r,i)}else(0,n.Toast)(e.data.resultNote)}};(0,a.ajax)(i)}else(0,n.Toast)("手机号格式不正确");else(0,n.Toast)("手机号不能为空");else(0,n.Toast)("请输入联系人");else(0,n.Toast)("请选择时间")},onBridgeReady:function(t,e,i,a,s,o,c){var l=this;WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:t,timeStamp:e,nonceStr:i,package:a,signType:s,paySign:o},function(t){"get_brand_wcpay_request:ok"===t.err_msg?(l.sub=!1,(0,n.Toast)("您已成功预约贵宾厅"),setTimeout(function(){uni.navigateTo({url:"../vipOrder/vipOrder"})},500)):"get_brand_wcpay_request:cancel"===t.err_msg?(l.sub=!1,(0,n.Toast)("用户取消支付")):"get_brand_wcpay_request:fail"===t.err_msg&&(l.sub=!1,(0,n.Toast)("网络异常，请重试"))})},goOrder:function(){if("请选择到厅时间"!=this.time)if(""!=this.user)if(""!=this.tel)if(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(this.tel)){var t=this,e={uid:this.$store.state.uid,vipHallId:t.id,numbers:t.value,reserveDate:t.time,username:t.user,phone:t.tel,amount:0},i={url:"/api/gzh/bookingVipHall",data:e,success:function(t){0==t.data.result?((0,n.Toast)("您已成功预约贵宾厅"),setTimeout(function(){uni.navigateTo({url:"../vipOrder/vipOrder"})},500)):(0,n.Toast)(t.data.resultNote)}};(0,a.ajax)(i)}else(0,n.Toast)("手机号格式不正确");else(0,n.Toast)("手机号不能为空");else(0,n.Toast)("请输入联系人");else(0,n.Toast)("请选择时间")}}};e.default=s}).call(this,i("5a52")["default"])},"74f5":function(t,e,i){"use strict";i.r(e);var a=i("3f49"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"85f6":function(t,e,i){"use strict";i.r(e);var a=i("96f9"),n=i("74f5");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("17f7");var o=i("2877"),c=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"076cf87d",null);e["default"]=c.exports},"96f9":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"contain"},[i("v-uni-view",{staticClass:"fixed"},[i("cu-custom",{attrs:{isBack:!0,Color:t.Color,backColor:t.backColor,isIcon:!0,bgColor:"bg-shadeTop text-white"}},[i("template",{attrs:{slot:"backText"},slot:"backText"}),i("template",{attrs:{slot:"content"},slot:"content"},[t._v("填写订单")])],2)],1),i("v-uni-view",{staticClass:"formData"},[i("v-uni-view",{staticClass:"list"},[i("v-uni-view",[t._v("贵宾厅")]),i("v-uni-view",{staticClass:"right"},[t._v(t._s(t.name))])],1),i("v-uni-view",{staticClass:"list"},[i("v-uni-view",[t._v("到厅时间")]),i("v-uni-view",{staticClass:"right",staticStyle:{color:"#999"},on:{click:function(e){e=t.$handleEvent(e),t.choiceTime(e)}}},[t._v(t._s(t.time))])],1),i("v-uni-view",{staticClass:"list"},[i("v-uni-view",[t._v("到厅人数")]),i("v-uni-view",{staticClass:"right",staticStyle:{background:"none","padding-left":"0"}},[i("van-stepper",{attrs:{integer:"",min:1,"disable-input":"","input-width":"32px"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1),i("v-uni-view",{staticClass:"list"},[i("v-uni-view",[t._v("联系人")]),i("v-uni-view",{staticClass:"right"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入联系人姓名"},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1)],1),i("v-uni-view",{staticClass:"list"},[i("v-uni-view",[t._v("手机号")]),i("v-uni-view",{staticClass:"right"},[i("v-uni-input",{attrs:{type:"number",placeholder:"请输入手机号"},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}})],1)],1)],1),i("v-uni-view",{staticClass:"notice"},[i("v-uni-view",{staticClass:"title",staticStyle:{"margin-bottom":"30upx"}},[t._v("服务须知")]),i("v-uni-view",{staticClass:"mark"},[t._v(t._s(t.notice))])],1),0==t.isVip?i("v-uni-view",{staticClass:"pay"},[i("v-uni-view",{staticClass:"money"},[t._v("实付款："),i("v-uni-text",[t._v("￥"+t._s(t.price))])],1),i("v-uni-view",{staticClass:"payBtn",on:{click:function(e){e=t.$handleEvent(e),t.paySuc(e)}}},[t._v("立即支付")])],1):t._e(),1==t.isVip?i("v-uni-view",{staticClass:"sort",on:{click:function(e){e=t.$handleEvent(e),t.goOrder(e)}}},[t._v("立即预约")]):t._e(),i("van-popup",{attrs:{position:"bottom",overlay:!1},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("van-datetime-picker",{attrs:{type:"datetime","min-date":t.minDate},on:{cancel:function(e){e=t.$handleEvent(e),t.cancel(e)},confirm:function(e){e=t.$handleEvent(e),t.confirm(e)}},model:{value:t.currentTime,callback:function(e){t.currentTime=e},expression:"currentTime"}})],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},f42a:function(t,e,i){"use strict";(function(t){var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.ajaxs=e.ajax=void 0;var n=a(i("f499")),s=function(e){e=e||{},e.url=e.url||"",e.data=(0,n.default)(e.data||{}),e.method=e.method||"POST",e.header=e.header||{"Content-Type":"application/json"},e.success=e.success||function(){},e.fail=e.fail||function(){},t.log(e.data),uni.request({url:"https://m.xgcyz1978.com"+e.url,data:e.data,method:e.method,header:e.header,dataType:"json",success:function(t){e.success(t)},fail:function(t){e.fail(t),uni.showToast({title:"请稍后重试",icon:"none"})}})};e.ajax=s;var o=function(e){e=e||{},e.url=e.url||"",e.data=(0,n.default)(e.data||{}),e.method=e.method||"POST",e.header=e.header||{"Content-Type":"application/json"},e.success=e.success||function(){},e.fail=e.fail||function(){},t.log(e.data),uni.request({url:"https://m.xgcyz1978.com"+e.url,data:e.data,method:e.method,header:e.header,dataType:"json",success:function(t){e.success(t)},fail:function(t){e.fail(t),uni.showToast({title:"请稍后重试",icon:"none"})}})};e.ajaxs=o}).call(this,i("5a52")["default"])},f700:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-076cf87d]{width:100%;height:100%}.contain[data-v-076cf87d]{width:100%;height:100%;background:#f8f8f8}.formData[data-v-076cf87d]{width:92%;margin:%?30?% auto;background:#fff;border-radius:4px;padding:0 %?20?%;-webkit-box-sizing:border-box;box-sizing:border-box}.list[data-v-076cf87d]{width:100%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:14px;color:#333\n\t/* border-bottom: 1px solid #eee; */}.right[data-v-076cf87d]{width:70%;text-align:left}.notice[data-v-076cf87d]{width:100%;padding:0 %?30?% %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:12px;color:#999}.mark[data-v-076cf87d]{width:100%;margin-bottom:%?12?%}.pay[data-v-076cf87d]{width:100%;height:%?100?%;padding-left:%?30?%;border-top:2px solid #eee;position:fixed;left:0;bottom:0;z-index:99;background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.money[data-v-076cf87d]{height:%?100?%;line-height:%?100?%}.money>uni-text[data-v-076cf87d]{margin-left:%?30?%;color:red}.sort[data-v-076cf87d]{width:100%;height:%?100?%;padding-left:%?30?%;\n\t/* border-top: 2px solid #eee; */position:fixed;left:0;bottom:0;z-index:99;background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.right[data-v-076cf87d],.right>uni-input[data-v-076cf87d]{background:#f8f8f8;padding:0 %?20?%;height:%?60?%;line-height:%?60?%}.pay[data-v-076cf87d]{width:100%;height:%?100?%;padding-left:%?30?%;border-top:2px solid #eee;position:fixed;left:0;bottom:0;z-index:99;background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.money[data-v-076cf87d]{height:%?100?%;line-height:%?100?%}.money>uni-text[data-v-076cf87d]{margin-left:%?30?%;color:red}.payBtn[data-v-076cf87d]{height:%?100?%;line-height:%?100?%;font-size:14px;color:#fff;padding:0 %?40?%;background:#de2910}.sort[data-v-076cf87d]{width:100%;height:%?100?%;padding-left:%?30?%;border-top:2px solid #eee;position:fixed;left:0;bottom:0;z-index:99;background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#de2910;color:#fff;font-size:15px}.van-stepper__minus[data-v-076cf87d],.van-stepper__plus[data-v-076cf87d]{background-color:#fff!important}",""])}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shopOrder-shopOrder"],{"0226":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-a6babae0]{width:100%;height:100%}.contain[data-v-a6babae0]{width:100%;height:100%;background:#f9f9f9;position:relative}.address[data-v-a6babae0]{width:100%;padding:%?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px;color:#333;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-top:6px solid #f9f9f9;border-bottom:6px solid #f9f9f9;background:#fff}.choice[data-v-a6babae0]{width:80%}.right1[data-v-a6babae0]{width:%?40?%;height:%?40?%}.list[data-v-a6babae0]{width:100%;padding:%?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:14px;color:#333;border-bottom:6px solid #f9f9f9;background:#fff}.list_left[data-v-a6babae0]{width:%?200?%;height:%?200?%}.list_right[data-v-a6babae0]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:%?200?%;padding-left:%?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.name[data-v-a6babae0]{width:100%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.score[data-v-a6babae0]{font-size:12px;color:#de2910;margin-top:%?28?%}.price[data-v-a6babae0]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.newPrice[data-v-a6babae0]{font-size:16px;color:#de2910}.oldPrice[data-v-a6babae0]{font-size:14px;color:#999;text-decoration:line-through}.count[data-v-a6babae0]{width:100%;padding:%?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#fff}.num[data-v-a6babae0]{font-size:14px;color:#de2910}.beizhu[data-v-a6babae0]{width:100%;padding:0 %?30?% %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:14px;color:#333}.beizhu_title[data-v-a6babae0]{width:100%;height:%?90?%;line-height:%?90?%}uni-textarea[data-v-a6babae0]{width:100%;height:%?220?%;border-radius:4px;background:#f1f1f1!important;border:none;font-size:12px;color:#666;padding:%?20?%}.pay[data-v-a6babae0]{width:100%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-left:%?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:15px;color:#333;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;position:fixed;left:0;bottom:0;background:#fff}.submit[data-v-a6babae0]{width:%?300?%;height:%?90?%;line-height:%?90?%;text-align:center;font-size:15px;background:#de2910;color:#fff}",""])},"2c64":function(t,e,i){"use strict";var a=i("7356"),s=i.n(a);s.a},"32e2":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i("f42a");var a=i("ad18"),s={data:function(){return{Color:"#DE2910",value:"",backColor:"#FFFFFF",values:1,text:"",list:"",ids:""}},onLoad:function(t){if(this.getRequest("uid")){var e=this.getRequest("uid");this.$store.commit("changeUid",e)}t.list&&(this.list=JSON.parse(t.list),this.ids=t.id)},computed:{address:function(){var t="";return t=null==this.$store.state.saveAddress?"请选择收货地址":this.$store.state.saveAddress.city+this.$store.state.saveAddress.address,t},total:function(){var t=0;return 1==this.list.type?t=parseFloat(this.list.oldPrice)*this.values:2==this.list.type?t=parseFloat(this.list.price)*this.values:3==this.list.type&&(t=0),t}},methods:{getRequest:function(t){for(var e=window.location.search.substring(1),i=e.split("&"),a=0;a<i.length;a++){var s=i[a].split("=");if(s[0]==t)return s[1]}return!1},Back:function(){uni.navigateBack({delta:1})},money:function(){if("请选择收货地址"!=this.address){var t=JSON.stringify(this.list);console.log(t),uni.navigateTo({url:"../shopPay/shopPay?list="+t+"&total="+this.total+"&id="+this.ids+"&text="+this.text})}else(0,a.Toast)("收货地址不能为空")},goAddress:function(){uni.navigateTo({url:"../shopAddress/shopAddress"})}}};e.default=s},7356:function(t,e,i){var a=i("0226");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("07fc09ce",a,!0,{sourceMap:!1,shadowMode:!1})},"8f05":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyElEQVQ4T7WSMQoCUQxEJ4tiuZfYCyRpbC29hpUn8AIitlZaKFiIggiCrZ2tkCx7Cg9gu/gFKxF1/YppwzxmMiH8OPSjHv8BqOqqLMtRURTHKodPHWRZ1kjTdA1gbGb7d5B3EWoisgSwdvftK0jVDUhEJgDM3afPIFWAm0ZV+wBOZjZ+hHwEYOY2EbXcvRcNYOYOETXdvQvgEgMgZh4kSXI2s2HUEVW1HkKYE9HOzDbRNYrIIoQwy/P88NUjVYnu9x+1EB0hxsEV9wo6EV1AcpEAAAAASUVORK5CYII="},b24a:function(t,e,i){"use strict";i.r(e);var a=i("32e2"),s=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=s.a},b37c:function(t,e,i){"use strict";i.r(e);var a=i("f710"),s=i("b24a");for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);i("2c64");var n=i("2877"),l=Object(n["a"])(s["default"],a["a"],a["b"],!1,null,"a6babae0",null);e["default"]=l.exports},f42a:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ajax=void 0;var a=function(t){t=t||{},t.url=t.url||"",t.data=JSON.stringify(t.data||{}),t.method=t.method||"POST",t.header=t.header||{"Content-Type":"application/json"},t.success=t.success||function(){},t.fail=t.fail||function(){},console.log(t.data),uni.request({url:"http://m.xgcyz1978.com"+t.url,data:t.data,method:t.method,header:t.header,dataType:"json",success:function(e){t.success(e)},fail:function(e){t.fail(e),uni.showToast({title:"请稍后重试",icon:"none"})}})};e.ajax=a},f710:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"contain"},[a("v-uni-view",{staticClass:"fixed"},[a("cu-custom",{attrs:{isBacks:!0,Color:t.Color,backColor:t.backColor,isIcons:!0,bgColor:"bg-shadeTop text-white"},on:{Back:function(e){e=t.$handleEvent(e),t.Back(e)}}},[a("template",{attrs:{slot:"backText"},slot:"backText"}),a("template",{attrs:{slot:"content"},slot:"content"},[t._v("确认订单")])],2)],1),a("v-uni-view",{staticClass:"address",on:{click:function(e){e=t.$handleEvent(e),t.goAddress(e)}}},[a("v-uni-view",{staticClass:"choice"},[t._v(t._s(t.address))]),a("img",{staticClass:"right1",attrs:{src:i("8f05"),alt:""}})],1),a("v-uni-view",{staticClass:"list"},[a("img",{staticClass:"list_left",attrs:{src:t.list.image,alt:""}}),a("v-uni-view",{staticClass:"list_right"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.list.title))]),1==t.list.type?a("v-uni-view",{staticClass:"score"},[t._v("积分：0")]):t._e(),2==t.list.type?a("v-uni-view",{staticClass:"score"},[t._v("积分："+t._s(t.list.point))]):t._e(),3==t.list.type?a("v-uni-view",{staticClass:"score"},[t._v("积分："+t._s(t.list.point))]):t._e(),a("v-uni-view",{staticClass:"price"},[1==t.list.type?a("v-uni-view",{staticClass:"newPrice"},[t._v("￥"+t._s(t.list.oldPrice))]):t._e(),2==t.list.type?a("v-uni-view",{staticClass:"newPrice"},[t._v("￥"+t._s(t.list.price))]):t._e(),3==t.list.type?a("v-uni-view",{staticClass:"newPrice"},[t._v("￥0")]):t._e(),2==t.list.type?a("v-uni-view",{staticClass:"oldPrice"},[t._v("￥"+t._s(t.list.oldPrice))]):t._e(),a("van-stepper",{attrs:{integer:"",min:1,"disable-input":"","input-width":"24px","button-size":"20px"},model:{value:t.values,callback:function(e){t.values=e},expression:"values"}})],1)],1)],1),a("v-uni-view",{staticClass:"beizhu"},[a("v-uni-view",{staticClass:"beizhu_title"},[t._v("备注")]),a("v-uni-textarea",{attrs:{placeholder:"买家留言"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),a("v-uni-view",{staticClass:"pay"},[a("v-uni-view",{staticClass:"total"},[t._v("实付款："),a("v-uni-text",{staticStyle:{color:"#DE2910"}},[t._v("￥"+t._s(t.total))])],1),a("v-uni-view",{staticClass:"submit",on:{click:function(e){e=t.$handleEvent(e),t.money(e)}}},[t._v("立即购买")])],1)],1)},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})}}]);
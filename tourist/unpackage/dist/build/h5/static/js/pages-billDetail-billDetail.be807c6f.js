(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-billDetail-billDetail"],{"27b2":function(t,e,i){"use strict";var a=i("bee5"),o=i.n(a);o.a},"87ec":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5"),i("386d");i("f42a");var a={data:function(){return{Color:"#DE2910",value:"",backColor:"#FFFFFF",remark:"",location:"",order:""}},onLoad:function(t){if(this.getRequest("uid")){var e=this.getRequest("uid");this.$store.commit("changeUid",e)}},onShow:function(){this.$store.state.billRemark&&(this.remark=this.$store.state.billRemark),this.$store.state.billLocation&&(this.location=this.$store.state.billLocation),this.$store.state.billRemark&&(this.order=this.$store.state.billOrder)},methods:{getRequest:function(t){for(var e=window.location.search.substring(1),i=e.split("&"),a=0;a<i.length;a++){var o=i[a].split("=");if(o[0]==t)return o[1]}return!1},goCheck:function(){this.$store.commit("changeBillRemark",this.remark),this.$store.commit("changeBillLocation",this.location),this.$store.commit("changeBillOrder",this.order),uni.navigateBack({delta:1})}}};e.default=a},be3a:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-4f79158f]{width:100%;height:100%}.contain[data-v-4f79158f]{width:100%;height:100%;background:#fff}.wrapper[data-v-4f79158f]{width:100%;border-top:1px solid #eee;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:%?30?%;-webkit-box-sizing:border-box;box-sizing:border-box}.list-top[data-v-4f79158f]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}.state[data-v-4f79158f]{padding-left:%?20?%;border-left:2px solid #de2910;font-size:15px}.list[data-v-4f79158f]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:%?20?%;padding-bottom:%?20?%;border-bottom:1px dashed #eee}.list-item[data-v-4f79158f]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:%?70?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:14px}.input-placeholder[data-v-4f79158f]{font-size:14px;color:#999}.forms[data-v-4f79158f]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.forms>uni-input[data-v-4f79158f]{width:100%;height:%?70?%;line-height:%?70?%}.look[data-v-4f79158f]{width:100%;height:%?90?%;line-height:%?90?%;text-align:center;font-size:14px;color:#fff;background:#e73c1d;position:fixed;left:0;bottom:0}",""])},bee5:function(t,e,i){var a=i("be3a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("2b5d4610",a,!0,{sourceMap:!1,shadowMode:!1})},ec16:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"contain"},[i("v-uni-view",{staticClass:"fixed"},[i("cu-custom",{attrs:{isBack:!0,Color:t.Color,backColor:t.backColor,isIcon:!0,bgColor:"bg-shadeTop text-white"}},[i("template",{attrs:{slot:"backText"},slot:"backText"}),i("template",{attrs:{slot:"content"},slot:"content"},[t._v("开具发票")])],2)],1),i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-view",{staticClass:"list-top"},[i("v-uni-view",{staticClass:"state"},[t._v("发票详情")])],1),i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"list-item"},[i("v-uni-view",{staticStyle:{width:"32%"}},[t._v("备注说明：")]),i("v-uni-view",{staticClass:"forms"},[i("v-uni-input",{attrs:{type:"text",placeholder:"填写备注说明","placeholder-class":"input-placeholder"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)],1),i("v-uni-view",{staticClass:"list-item"},[i("v-uni-view",{staticStyle:{width:"32%"}},[t._v("地址和电话：")]),i("v-uni-view",{staticClass:"forms"},[i("v-uni-input",{attrs:{type:"text",placeholder:"填写地址和电话","placeholder-class":"input-placeholder"},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}})],1)],1),i("v-uni-view",{staticClass:"list-item"},[i("v-uni-view",{staticStyle:{width:"32%"}},[t._v("开户行和账号：")]),i("v-uni-view",{staticClass:"forms"},[i("v-uni-input",{attrs:{type:"text",placeholder:"填写开户行和账号","placeholder-class":"input-placeholder"},model:{value:t.order,callback:function(e){t.order=e},expression:"order"}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"look",on:{click:function(e){e=t.$handleEvent(e),t.goCheck(e)}}},[t._v("确定")])],1)},o=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o})},f135:function(t,e,i){"use strict";i.r(e);var a=i("ec16"),o=i("feef");for(var s in o)"default"!==s&&function(t){i.d(e,t,function(){return o[t]})}(s);i("27b2");var n=i("2877"),l=Object(n["a"])(o["default"],a["a"],a["b"],!1,null,"4f79158f",null);e["default"]=l.exports},f42a:function(t,e,i){"use strict";(function(t){var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.ajaxs=e.ajax=void 0;var o=a(i("f499")),s=function(e){e=e||{},e.url=e.url||"",e.data=(0,o.default)(e.data||{}),e.method=e.method||"POST",e.header=e.header||{"Content-Type":"application/json"},e.success=e.success||function(){},e.fail=e.fail||function(){},t.log(e.data),uni.request({url:"https://m.xgcyz1978.com"+e.url,data:e.data,method:e.method,header:e.header,dataType:"json",success:function(t){e.success(t)},fail:function(t){e.fail(t),uni.showToast({title:"请稍后重试",icon:"none"})}})};e.ajax=s;var n=function(e){e=e||{},e.url=e.url||"",e.data=(0,o.default)(e.data||{}),e.method=e.method||"POST",e.header=e.header||{"Content-Type":"application/json"},e.success=e.success||function(){},e.fail=e.fail||function(){},t.log(e.data),uni.request({url:"https://m.xgcyz1978.com"+e.url,data:e.data,method:e.method,header:e.header,dataType:"json",success:function(t){e.success(t)},fail:function(t){e.fail(t),uni.showToast({title:"请稍后重试",icon:"none"})}})};e.ajaxs=n}).call(this,i("5a52")["default"])},feef:function(t,e,i){"use strict";i.r(e);var a=i("87ec"),o=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=o.a}}]);
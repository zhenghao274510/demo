(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cardsDetail-cardsDetail"],{"14ec":function(t,e,i){var a=i("d568");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("4e8996e8",a,!0,{sourceMap:!1,shadowMode:!1})},2230:function(t,e,i){"use strict";i.r(e);var a=i("808c"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},"7f2d":function(t,e,i){"use strict";var a=i("14ec"),s=i.n(a);s.a},"808c":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("f42a"),s=(i("ad18"),{data:function(){return{Color:"#DE2910",value:"",backColor:"#FFFFFF",head:"",user:"",company:"",tel:"",wx:"",work:"",section:"",text1:"",text2:"",show:!0,type:null,list:{}}},onLoad:function(t){if(this.getRequest("uid")){var e=this.getRequest("uid");this.$store.commit("changeUid",e)}this.type=t.type,"undefined"!=t.list&&(this.list=JSON.parse(t.list))},onShow:function(){var t=this;if(0==this.type)this.init1();else{var e=this.list;t.show=!1,t.head=e.icon,t.user=e.username,t.company=e.company,t.tel=e.phone,t.wx=e.weixin,t.work=e.industry,t.section=e.city,t.text1=e.content,t.text2=e.introduction}},methods:{getRequest:function(t){for(var e=window.location.search.substring(1),i=e.split("&"),a=0;a<i.length;a++){var s=i[a].split("=");if(s[0]==t)return s[1]}return!1},init1:function(){var t=this,e={uid:this.$store.state.uid},i={url:"/api/gzh/userCard",data:e,success:function(e){console.log(e),0==e.data.result&&(t.head=e.data.icon,t.user=e.data.username,t.company=e.data.company,t.tel=e.data.phone,t.wx=e.data.weixin,t.work=e.data.industry,t.section=e.data.city,t.text1=e.data.content,t.text2=e.data.introduction)}};(0,a.ajaxs)(i)},goEditor:function(){uni.navigateTo({url:"../cardsEditor/cardsEditor"})}}});e.default=s},c614:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"contain"},[i("v-uni-view",{staticClass:"fixed"},[i("cu-custom",{attrs:{isBack:!0,Color:t.Color,backColor:t.backColor,isIcon:!0,bgColor:"bg-shadeTop text-white"}},[i("template",{attrs:{slot:"backText"},slot:"backText"}),i("template",{attrs:{slot:"content"},slot:"content"},[t._v("名片详情")]),t.show?i("template",{attrs:{slot:"right"},slot:"right"},[i("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.goEditor(e)}}},[t._v("编辑")])],1):t._e()],2)],1),i("v-uni-view",{staticClass:"forms"},[i("img",{staticClass:"imgs",attrs:{src:""==t.head?"http://pic13.nipic.com/20110409/7119492_114440620000_2.jpg":t.head,alt:""}}),i("v-uni-view",{staticClass:"form-item"},[i("v-uni-view",{staticClass:"items"},[i("v-uni-view",[t._v("姓       名：")]),i("v-uni-input",{attrs:{type:"text",placeholder:"请输入姓名","placeholder-class":"place",disabled:""},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1),i("v-uni-view",{staticClass:"items"},[i("v-uni-view",[t._v("公司名称：")]),i("v-uni-input",{attrs:{type:"text",placeholder:"请输入公司名称","placeholder-class":"place",disabled:""},model:{value:t.company,callback:function(e){t.company=e},expression:"company"}})],1),i("v-uni-view",{staticClass:"items"},[i("v-uni-view",[t._v("联系方式：")]),i("v-uni-input",{attrs:{type:"text",placeholder:"请输入联系方式","placeholder-class":"place",disabled:""},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}})],1),i("v-uni-view",{staticClass:"items"},[i("v-uni-view",[t._v("微       信：")]),i("v-uni-input",{attrs:{type:"text",placeholder:"请输入微信号","placeholder-class":"place",disabled:""},model:{value:t.wx,callback:function(e){t.wx=e},expression:"wx"}})],1),i("v-uni-view",{staticClass:"items"},[i("v-uni-view",[t._v("行       业：")]),i("v-uni-input",{attrs:{type:"text",placeholder:"请输入所属行业","placeholder-class":"place",disabled:""},model:{value:t.work,callback:function(e){t.work=e},expression:"work"}})],1),i("v-uni-view",{staticClass:"items",on:{click:function(e){e=t.$handleEvent(e),t.openPicker(e)}}},[i("v-uni-view",[t._v("地       区：")]),i("v-uni-input",{attrs:{type:"text",placeholder:"请选择所属地区","placeholder-class":"place",disabled:""},model:{value:t.section,callback:function(e){t.section=e},expression:"section"}})],1),i("v-uni-view",{staticClass:"contents"},[i("v-uni-view",{staticClass:"user_msg"},[t._v("公司简介")]),i("v-uni-view",{staticClass:"msg"},[i("v-uni-textarea",{attrs:{placeholder:"公司简介","placeholder-class":"places",disabled:""},model:{value:t.text1,callback:function(e){t.text1=e},expression:"text1"}})],1)],1),i("v-uni-view",{staticClass:"contents",staticStyle:{"padding-top":"0"}},[i("v-uni-view",{staticClass:"user_msg"},[t._v("个性签名")]),i("v-uni-view",{staticClass:"msg"},[i("v-uni-textarea",{attrs:{placeholder:"个性签名","placeholder-class":"places",disabled:""},model:{value:t.text2,callback:function(e){t.text2=e},expression:"text2"}})],1)],1)],1)],1)],1)},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},cdaf:function(t,e,i){"use strict";i.r(e);var a=i("c614"),s=i("2230");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("7f2d");var o=i("2877"),c=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,"27abdac1",null);e["default"]=c.exports},d568:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-27abdac1]{width:100%;background:#fff}.contain[data-v-27abdac1]{width:100%;height:100%}.forms[data-v-27abdac1]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 %?30?% %?110?%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.imgs[data-v-27abdac1]{width:%?160?%;height:%?160?%;border-radius:50%;overflow:hidden;margin:%?30?% 0 %?50?%}.form-item[data-v-27abdac1]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.items[data-v-27abdac1]{width:100%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px dashed #eee;font-size:14px;color:#333}.place[data-v-27abdac1]{font-size:14px;color:#999}.places[data-v-27abdac1]{font-size:12px;color:#999}uni-input[data-v-27abdac1]{text-align:right}.contents[data-v-27abdac1]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:%?50?% 0 %?25?%}.user_msg[data-v-27abdac1]{width:100%;height:%?40?%;line-height:%?40?%;font-size:14px;color:#333;padding-left:%?20?%;border-left:2px solid #de2910}.msg[data-v-27abdac1]{width:100%;height:%?240?%;border-radius:4px;background:#e3e3e6;margin:%?30?% 0}uni-textarea[data-v-27abdac1]{display:inline-block;width:100%;height:%?240?%;padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:12px;color:#333}body.?%PAGE?%[data-v-27abdac1]{background:#fff}",""])},f42a:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ajaxs=e.ajax=void 0;var a=function(t){t=t||{},t.url=t.url||"",t.data=JSON.stringify(t.data||{}),t.method=t.method||"POST",t.header=t.header||{"Content-Type":"application/json"},t.success=t.success||function(){},t.fail=t.fail||function(){},console.log(t.data),uni.request({url:"https://m.xgcyz1978.com"+t.url,data:t.data,method:t.method,header:t.header,dataType:"json",success:function(e){t.success(e)},fail:function(e){t.fail(e),uni.showToast({title:"请稍后重试",icon:"none"})}})};e.ajax=a;var s=function(t){t=t||{},t.url=t.url||"",t.data=JSON.stringify(t.data||{}),t.method=t.method||"POST",t.header=t.header||{"Content-Type":"application/json"},t.success=t.success||function(){},t.fail=t.fail||function(){},console.log(t.data),uni.request({url:"https://m.xgcyz1978.com"+t.url,data:t.data,method:t.method,header:t.header,dataType:"json",success:function(e){t.success(e)},fail:function(e){t.fail(e),uni.showToast({title:"请稍后重试",icon:"none"})}})};e.ajaxs=s}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-stageMessage-stageMessage"],{"118f":function(t,e,i){"use strict";i.r(e);var a=i("c22a"),n=i("7bbf");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("8962");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"18bd8e91",null);e["default"]=r.exports},"3d76":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("f42a"),n=i("ad18"),s={data:function(){return{Color:"#DE2910",value:"",backColor:"#FFFFFF",minHour:10,maxHour:20,minDate:new Date,maxDate:new Date,currentDate:new Date,show:!1,title:"",time:"",address:"",useTime:"",price:15,prices:"",user:"",tel:"",nowUse:"",person:1,vipType:null,ids:"",content:"",list:{}}},computed:{total:function(){var t=0;if(""==this.person)return t=0,t;var e=this.price*parseFloat(this.person);return e}},onLoad:function(t){if(this.ids=t.id,this.init(),console.log(this.$store.state.vipType),this.getRequest("uid")){var e=this.getRequest("uid");this.$store.commit("changeUid",e)}},methods:{getRequest:function(t){for(var e=window.location.search.substring(1),i=e.split("&"),a=0;a<i.length;a++){var n=i[a].split("=");if(n[0]==t)return n[1]}return!1},init:function(){var t=this,e={uid:this.$store.state.uid,fastWayId:this.ids},i={url:"/api/gzh/fastWayDetail",data:e,success:function(e){console.log(e),0==e.data.result&&(t.list=e.data,t.time=e.data.serviceTime,t.useTime=e.data.validity,t.address=e.data.address,t.vipType=e.data.isVip,0==t.vipType?(t.price=e.data.price,t.prices="￥"+e.data.price+"/人"):(t.price=e.data.vipPrice,t.prices="￥"+e.data.vipPrice+"/人（非会员价"+e.data.price+"）"),t.content=e.data.introduction,console.log(t.content))}};(0,a.ajaxs)(i)},choiceTime:function(){this.show=!0},dateFormat:function(t,e){var i,a={"Y+":e.getFullYear().toString(),"m+":(e.getMonth()+1).toString(),"d+":e.getDate().toString(),"H+":e.getHours().toString(),"M+":e.getMinutes().toString(),"S+":e.getSeconds().toString()};for(var n in a)i=new RegExp("("+n+")").exec(t),i&&(t=t.replace(i[1],1==i[1].length?a[n]:a[n].padStart(i[1].length,"0")));return t},confirm:function(t){this.show=!1;var e=new Date(t);this.nowUse=this.dateFormat("YYYY-mm-dd HH:MM",e)},cancel:function(){this.show=!1},paySuc:function(){if(""!=this.user)if(""!=this.tel)if(/^1[3456789]\d{9}$/.test(this.tel))if(""!=this.nowUse)if(""!=this.person){var t=this.list;t.user=this.user,t.tel=this.tel,t.nowUse=this.nowUse,t.person=this.person,t.total=this.total;var e=JSON.stringify(t);uni.navigateTo({url:"../stagePay/stagePay?list="+e+"&id="+this.ids})}else(0,n.Toast)("请填写人数");else(0,n.Toast)("请选择使用时间");else(0,n.Toast)("手机号格式不正确");else(0,n.Toast)("手机号不能为空");else(0,n.Toast)("姓名不能为空")}}};e.default=s},"7ac4":function(t,e,i){var a=i("c8d9");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4dec7d80",a,!0,{sourceMap:!1,shadowMode:!1})},"7bbf":function(t,e,i){"use strict";i.r(e);var a=i("3d76"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},8962:function(t,e,i){"use strict";var a=i("7ac4"),n=i.n(a);n.a},c22a:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"contain"},[i("v-uni-view",{staticClass:"fixed"},[i("cu-custom",{attrs:{isBack:!0,Color:t.Color,backColor:t.backColor,isIcon:!0,bgColor:"bg-shadeTop text-white"},on:{Back:function(e){e=t.$handleEvent(e),t.BackPage(e)}}},[i("template",{attrs:{slot:"backText"},slot:"backText"}),i("template",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.title))])],2)],1),i("v-uni-view",{staticClass:"message"},[i("v-uni-view",{staticClass:"user_msg"},[t._v("订单信息")]),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("服务时间")]),i("v-uni-input",{attrs:{placeholder:"服务时间",name:"input",disabled:""},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("有效期")]),i("v-uni-input",{attrs:{placeholder:"有效期",name:"input",disabled:""},model:{value:t.useTime,callback:function(e){t.useTime=e},expression:"useTime"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("通道位置")]),i("v-uni-input",{attrs:{placeholder:"通道位置",name:"input",disabled:""},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("服务价格")]),i("v-uni-input",{attrs:{placeholder:"服务价格",name:"input",disabled:""},model:{value:t.prices,callback:function(e){t.prices=e},expression:"prices"}})],1)],1),i("v-uni-view",{staticClass:"message"},[i("v-uni-view",{staticClass:"user_msg"},[t._v("联系人信息")]),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("联系人")]),i("v-uni-input",{attrs:{placeholder:"请输入姓名",name:"input"},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("手机号")]),i("v-uni-input",{attrs:{placeholder:"请输入手机号码",name:"input"},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}})],1),i("v-uni-view",{staticClass:"cu-form-group",on:{click:function(e){e=t.$handleEvent(e),t.choiceTime(e)}}},[i("v-uni-view",{staticClass:"title"},[t._v("使用时间")]),i("v-uni-input",{attrs:{placeholder:"请选择时间",name:"input",disabled:""},model:{value:t.nowUse,callback:function(e){t.nowUse=e},expression:"nowUse"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("使用人数")]),i("v-uni-input",{attrs:{placeholder:"请填写人数",type:"number",name:"input"},model:{value:t.person,callback:function(e){t.person=e},expression:"person"}})],1)],1),i("v-uni-view",{staticClass:"message",staticStyle:{"margin-bottom":"120upx"}},[i("v-uni-view",{staticClass:"user_msg"},[t._v("服务须知")]),i("v-uni-view",{staticClass:"content"},[t._v(t._s(t.content))])],1),i("v-uni-view",{staticClass:"pay"},[i("v-uni-view",{staticClass:"money"},[t._v("实付款："),i("v-uni-text",[t._v("￥"+t._s(t.total))])],1),i("v-uni-view",{staticClass:"payBtn",on:{click:function(e){e=t.$handleEvent(e),t.paySuc(e)}}},[t._v("立即支付")])],1),i("van-popup",{attrs:{position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("van-datetime-picker",{attrs:{type:"datetime","min-date":t.minDate},on:{confirm:function(e){e=t.$handleEvent(e),t.confirm(e)},cancel:function(e){e=t.$handleEvent(e),t.cancel(e)}},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},c8d9:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-18bd8e91]{width:100%;\n\t/* height: 100%; */background:#fff}.contain[data-v-18bd8e91]{width:100%;height:100%}.message[data-v-18bd8e91]{width:100%;padding:%?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:14px;color:#333;\n\t/* border-bottom: 2px solid #eee; */background:#fff;margin:0 auto;border-radius:4px;border-top:1px solid #eee}.user_msg[data-v-18bd8e91]{width:100%;height:%?40?%;line-height:%?40?%;font-size:15px;color:#333;padding-left:%?20?%;border-left:2px solid #de2910}.cu-form-group[data-v-18bd8e91]{padding:0!important;min-height:%?90?%!important;padding-left:%?24?%!important;-webkit-box-sizing:border-box;box-sizing:border-box;border:none!important}.cu-form-group>uni-input[data-v-18bd8e91]{background:#f8f8f8;padding:0 %?20?%;height:%?60?%}.title[data-v-18bd8e91]{width:%?200?%}uni-input[data-v-18bd8e91]{font-size:12px}.content[data-v-18bd8e91]{width:100%;padding:%?20?% %?24?%;font-size:12px;color:#666}.pay[data-v-18bd8e91]{width:100%;height:%?100?%;padding-left:%?30?%;\n\t/* border-top: 2px solid #eee; */position:fixed;left:0;bottom:0;z-index:99;background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.money[data-v-18bd8e91]{height:%?100?%;line-height:%?100?%}.money>uni-text[data-v-18bd8e91]{margin-left:%?30?%;color:red}.payBtn[data-v-18bd8e91]{height:%?100?%;line-height:%?100?%;font-size:14px;color:#fff;padding:0 %?40?%;background:#de2910}body.?%PAGE?%[data-v-18bd8e91]{background:#fff}",""])},f42a:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ajaxs=e.ajax=void 0;var a=function(t){t=t||{},t.url=t.url||"",t.data=JSON.stringify(t.data||{}),t.method=t.method||"POST",t.header=t.header||{"Content-Type":"application/json"},t.success=t.success||function(){},t.fail=t.fail||function(){},console.log(t.data),uni.request({url:"https://m.xgcyz1978.com"+t.url,data:t.data,method:t.method,header:t.header,dataType:"json",success:function(e){t.success(e)},fail:function(e){t.fail(e),uni.showToast({title:"请稍后重试",icon:"none"})}})};e.ajax=a;var n=function(t){t=t||{},t.url=t.url||"",t.data=JSON.stringify(t.data||{}),t.method=t.method||"POST",t.header=t.header||{"Content-Type":"application/json"},t.success=t.success||function(){},t.fail=t.fail||function(){},console.log(t.data),uni.request({url:"https://m.xgcyz1978.com"+t.url,data:t.data,method:t.method,header:t.header,dataType:"json",success:function(e){t.success(e)},fail:function(e){t.fail(e),uni.showToast({title:"请稍后重试",icon:"none"})}})};e.ajaxs=n}}]);
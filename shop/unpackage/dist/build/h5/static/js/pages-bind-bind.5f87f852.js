(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bind-bind"],{"28e1":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"contain"},[i("v-uni-view",{staticClass:"fixed"},[i("cu-custom",{attrs:{isBack:!0,Color:t.Color,isIcon:!0,bgColor:"bg-shadeTop text-white"}},[i("template",{attrs:{slot:"backText"},slot:"backText"}),i("template",{attrs:{slot:"content"},slot:"content"},[t._v("绑定手机号")])],2)],1),i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-view",{staticClass:"warn"},[t._v("提交订单,请先绑定手机号")]),i("v-uni-view",{staticClass:"forms"},[i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"left"},[t._v("联系方式")]),i("v-uni-input",{attrs:{type:"number",placeholder:"请输入联系方式"},model:{value:t.call,callback:function(e){t.call=e},expression:"call"}})],1),i("v-uni-view",{staticClass:"item",staticStyle:{"justify-content":"space-between"}},[i("v-uni-view",{staticClass:"getCode"},[i("v-uni-view",{staticClass:"left"},[t._v("验证码")]),i("v-uni-input",{attrs:{type:"number",placeholder:"请输入验证码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1),i("v-uni-button",{staticClass:"code",attrs:{type:"button",disabled:t.btnState},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getValidate.apply(void 0,arguments)}}},[t._v(t._s(t.rTime)),t.btnState?i("span",[t._v("s")]):t._e()])],1)],1),i("v-uni-view",{staticClass:"submit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goSubmit.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},"3bf0":function(t,e,i){"use strict";var a=i("989d"),n=i.n(a);n.a},"3e9b":function(t,e,i){"use strict";i.r(e);var a=i("28e1"),n=i("5222");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("3bf0");var s,d=i("f0c5"),l=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"6f5d31f0",null,!1,a["a"],s);e["default"]=l.exports},"4be3":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("9ff2")),o=i("65dd"),s={data:function(){return{Color:"#333",call:"",code:"",btnState:!1,rTime:"获取验证码"}},methods:{getValidate:function(){if(""!=this.call)if(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(this.call)){var t=this,e={phone:this.call},i={url:"/checkPhone",data:e,success:function(e){if(0==e.data.result)if(0==e.data.state){t.rTime=60;t.rTime;t.btnState=!0;var i=setInterval(function(){--t.rTime<=0&&(t.rTime="获取验证码",clearInterval(i),t.btnState=!1)},1e3),a={phone:t.call};n.default.showLoading("发送中...",function(){var t={url:"/sendSms",data:a,success:function(t){console.log(t),0==t.data.result?(n.default.hideLoading(),n.default.showToast("发送成功")):(n.default.hideLoading(),n.default.showToast(t.data.resultNote))}};(0,o.ajax)(t)})}else n.default.showToast("该手机号已被注册");else n.default.showToast(e.data.resultNote)}};(0,o.ajax)(i)}else n.default.showToast("手机号格式不正确");else n.default.showToast("手机号不能为空")},goSubmit:function(){if(""!=this.call)if(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(this.call))if(""!=this.code){var t={uid:uni.getStorageSync("uid"),phone:this.call,code:this.code};n.default.showLoading("",function(){var e={url:"/bindPhone",data:t,success:function(t){console.log(t),0==t.data.result?(n.default.hideLoading(),n.default.showToast("绑定成功"),setTimeout(function(){uni.navigateBack({delta:1})},500)):(n.default.hideLoading(),n.default.showToast(t.data.resultNote))}};(0,o.ajax)(e)})}else n.default.showToast("验证码不能为空");else n.default.showToast("手机号格式不正确");else n.default.showToast("手机号不能为空")}}};e.default=s},5222:function(t,e,i){"use strict";i.r(e);var a=i("4be3"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"65dd":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.ajax=void 0;var n=a(i("f499")),o=function(t){t=t||{},t.url=t.url||"",t.data=(0,n.default)(t.data)||{},t.method=t.method||"POST",t.header=t.header||{"Content-Type":"application/json"},t.success=t.success||function(){},t.fail=t.fail||function(){},console.log(t.data),uni.request({url:"http://m.tfgwzz.com:8080/api"+t.url,data:t.data,method:t.method,header:t.header,dataType:"json",success:function(e){t.success(e)},fail:function(e){t.fail(e),uni.showToast({title:"请稍后重试",icon:"none"})}})};e.ajax=o},"885d":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.contain[data-v-6f5d31f0]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.contain .fixed[data-v-6f5d31f0]{width:100%}.contain .wrapper[data-v-6f5d31f0]{width:100%;padding:0 %?28?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.contain .wrapper .warn[data-v-6f5d31f0]{width:100%;height:%?80?%;line-height:%?80?%;text-align:center;font-size:%?28?%;color:red}.contain .wrapper .forms[data-v-6f5d31f0]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.contain .wrapper .forms .item[data-v-6f5d31f0]{width:100%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;color:#111;border-bottom:1px solid #eee}.contain .wrapper .forms .item .left[data-v-6f5d31f0]{width:%?180?%;height:%?80?%;line-height:%?80?%}.contain .wrapper .forms .item uni-input[data-v-6f5d31f0]{width:40%;height:%?80?%;font-size:%?28?%;color:#111}.contain .wrapper .forms .item .getCode[data-v-6f5d31f0]{width:65%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.contain .wrapper .forms .item .getCode .left[data-v-6f5d31f0]{width:%?180?%;height:%?80?%;line-height:%?80?%}.contain .wrapper .forms .item .getCode uni-input[data-v-6f5d31f0]{width:40%;height:%?80?%;font-size:%?28?%;color:#111}.contain .wrapper .forms .item .code[data-v-6f5d31f0]{padding-left:%?30?%;height:%?40?%;line-height:%?40?%;font-size:%?28?%;color:red;border-radius:0;border-left:1px solid red;text-align:right;background:none;outline:none}.contain .wrapper .forms .item .code[data-v-6f5d31f0]:after{border:none!important}.contain .wrapper .submit[data-v-6f5d31f0]{width:80%;height:%?80?%;line-height:%?80?%;text-align:center;margin:%?80?% auto;background:#111;border-radius:4px;font-size:%?30?%;color:#fff}',""])},"989d":function(t,e,i){var a=i("885d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("ff21ac3a",a,!0,{sourceMap:!1,shadowMode:!1})},"9ff2":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={showToast:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none",i=arguments.length>2?arguments[2]:void 0;uni.showToast({title:t,icon:e,duration:2e3,mask:!0,success:i})},hideToast:function(){uni.hideToast()},showLoading:function(t,e){uni.showLoading({title:t,mask:!0,success:e})},hideLoading:function(){uni.hideLoading()}},n=a;e.default=n}}]);
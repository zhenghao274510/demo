(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bind-bind"],{"0e8d":function(t,e,i){"use strict";var n=i("abf5"),a=i.n(n);a.a},4555:function(t,e,i){"use strict";i.r(e);var n=i("b62f"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},9013:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.contain[data-v-565bcd58]{width:100%;height:100vh;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden}.contain .fixed[data-v-565bcd58]{width:100%}.contain .forms[data-v-565bcd58]{width:92%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.contain .forms .common[data-v-565bcd58]{width:100%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:1px solid #eee;padding:0 %?10?%;box-sizing:border-box;margin-bottom:%?20?%}.contain .forms .common > uni-input[data-v-565bcd58]{font-size:14px;color:#333}.contain .forms .codes[data-v-565bcd58]{height:%?60?%;line-height:%?60?%;background:#f60;border-radius:%?40?%;font-size:14px;color:#fff;margin:0}.contain .login[data-v-565bcd58]{width:60%;height:%?90?%;line-height:%?90?%;border-radius:%?40?%;background:#f60;text-align:center;font-size:15px;color:#fff;margin-top:%?100?%}',""]),t.exports=e},9814:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"contain"},[i("v-uni-view",{staticClass:"fixed"},[i("cu-custom",{attrs:{isBack:!0,Color:t.Color,isIcon:!0,bgColor:"bg-shadeTop text-white"}},[i("template",{attrs:{slot:"backText"},slot:"backText"}),i("template",{attrs:{slot:"content"},slot:"content"},[t._v("换绑手机号")])],2)],1),i("div",{staticClass:"forms"},[i("div",{staticClass:"common"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入手机号"},model:{value:t.call,callback:function(e){t.call=e},expression:"call"}})],1),i("div",{staticClass:"common",staticStyle:{"padding-right":"0"}},[i("v-uni-input",{attrs:{type:"text",placeholder:"验证码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),i("v-uni-button",{staticClass:"codes",attrs:{type:"button",disabled:t.btnState},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getValidate.apply(void 0,arguments)}}},[t._v(t._s(t.rTime)),t.btnState?i("span",[t._v("s")]):t._e()])],1)]),i("div",{staticClass:"login",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goSubmit.apply(void 0,arguments)}}},[t._v("绑定")])],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},abf5:function(t,e,i){var n=i("9013");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4f6b4352",n,!0,{sourceMap:!1,shadowMode:!1})},b62f:function(t,e,i){"use strict";(function(t){var n=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("477d")),o=n(i("eac7")),s=i("5048"),c={data:function(){return{Color:"#333",call:"",code:"",code1:"",btnState:!1,rTime:"获取验证码",type:!0}},components:{cmdNavBar:a.default},methods:{getValidate:function(){if(""!=this.call)if(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[189])\d{8}$/.test(this.call)){var e=this;this.call;this.rTime=60;this.rTime;this.btnState=!0;var i=setInterval((function(){--e.rTime<=0&&(e.rTime="获取验证码",clearInterval(i),e.btnState=!1)}),1e3),n={cmd:"getValidateCode",phone:e.call,type:2};o.default.showLoading("发送中...",(function(){var i={data:n,success:function(i){t("log",i," at pages/bind/bind.vue:76"),0==i.data.result?(o.default.hideLoading(),o.default.showToast("发送成功"),e.code1=i.data.code):(o.default.hideLoading(),o.default.showToast(i.data.resultNote))}};(0,s.ajax)(i)}))}else o.default.showToast("手机号格式不正确");else o.default.showToast("手机号不能为空")},goSubmit:function(){if(""!=this.call)if(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[189])\d{8}$/.test(this.call))if(""!=this.code){var e={cmd:"bindingphone",uid:uni.getStorageSync("uid"),phone:this.call,code:this.code};o.default.showLoading("",(function(){var i={data:e,success:function(e){t("log",e," at pages/bind/bind.vue:120"),0==e.data.result?(o.default.hideLoading(),o.default.showToast("绑定成功"),setTimeout((function(){uni.navigateBack({delta:1})}),500)):(o.default.hideLoading(),o.default.showToast(e.data.resultNote))}};(0,s.ajax)(i)}))}else o.default.showToast("验证码不能为空");else o.default.showToast("手机号格式不正确");else o.default.showToast("手机号不能为空")}}};e.default=c}).call(this,i("0de9")["log"])},b7c4:function(t,e,i){"use strict";i.r(e);var n=i("9814"),a=i("4555");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("0e8d");var s,c=i("f0c5"),d=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"565bcd58",null,!1,n["a"],s);e["default"]=d.exports}}]);
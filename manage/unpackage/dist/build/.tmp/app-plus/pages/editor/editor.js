(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/editor/editor"],{"0bd0":function(t,e,o){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=o("131d"),i=n(o("5264"));function n(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{Color:"#333",ids:"",user:"",tel:"",passport:"",weight:0}},onLoad:function(t){var e=JSON.parse(t.item);this.ids=e.id,this.user=e.owner,this.tel=e.ownermobile,this.passport=e.passportnum,this.weight=e.weight},methods:{goSubmit:function(){var e=/^[\u2E80-\u9FFF]+$/;if(!e.test(this.user)||this.user.length>6||0==this.user.length)i.default.showToast("请输入6位以内的汉字");else if(""!=this.tel)if(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(this.tel))if(""!=this.passport)if(""==this.weight||this.weight<=0)i.default.showToast("自重必须大于0");else{var o={token:t.getStorageSync("token"),id:this.ids,owner:this.user,ownermobile:this.tel,passportnum:this.passport,weight:this.weight,os:t.getSystemInfoSync().platform,osversion:t.getSystemInfoSync().system,appversion:t.getStorageSync("appversion")};i.default.showLoading("",function(){var e={url:"/api/truck/updtruckinfo",data:o,success:function(e){console.log(a(JSON.stringify(e)," at pages\\editor\\editor.vue:100")),0==e.data.Code?(i.default.hideLoading(),i.default.showToast("修改成功"),setTimeout(function(){t.navigateBack({delta:1})},500)):-2==e.data.Code||-1==e.data.Code?(i.default.hideLoading(),i.default.showToast(e.data.Description),t.removeStorageSync("token"),setTimeout(function(){t.redirectTo({url:"/pages/login/login"})},500)):(i.default.hideLoading(),i.default.showToast(e.data.Description))}};(0,s.ajax)(e)})}else i.default.showToast("行车证不能为空");else i.default.showToast("手机号格式不正确");else i.default.showToast("手机号不能为空")}}};e.default=u}).call(this,o("6e42")["default"],o("0de9")["default"])},"0fcb":function(t,e,o){"use strict";o.r(e);var a=o("b018"),s=o("da77");for(var i in s)"default"!==i&&function(t){o.d(e,t,function(){return s[t]})}(i);o("c048");var n=o("2877"),u=Object(n["a"])(s["default"],a["a"],a["b"],!1,null,"a15265a6",null);e["default"]=u.exports},a0e6:function(t,e,o){},b018:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},s=[];o.d(e,"a",function(){return a}),o.d(e,"b",function(){return s})},c048:function(t,e,o){"use strict";var a=o("a0e6"),s=o.n(a);s.a},da77:function(t,e,o){"use strict";o.r(e);var a=o("0bd0"),s=o.n(a);for(var i in a)"default"!==i&&function(t){o.d(e,t,function(){return a[t]})}(i);e["default"]=s.a},f93d:function(t,e,o){"use strict";(function(t){o("2448"),o("921b");a(o("66fd"));var e=a(o("0fcb"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])}},[["f93d","common/runtime","common/vendor"]]]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-together-together"],{"111c3":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("ad18"),o=a("f42a"),s={data:function(){return{Color:"#E73C1D",backColor:"#FFFFFF",val:"",user:"",tel:"",email:""}},methods:{submit:function(){if(""!=this.user)if(""!=this.tel)if(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(this.tel)){var t=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;if(""!=this.email)if(t.test(this.email))if(""!=this.val)if(this.val.length>200)(0,i.Toast)("简介内容不能超过200字");else{var e={url:"/api/gzh/applyCooperate",data:{uid:this.$store.state.uid,username:this.user,phone:this.tel,email:this.email,content:this.val},success:function(t){0==t.data.result?((0,i.Toast)("提交成功"),uni.navigateBack({delta:1})):(0,i.Toast)(t.data.resultNote)}};(0,o.ajax)(e)}else(0,i.Toast)("简介不能为空");else(0,i.Toast)("邮箱格式不正确");else(0,i.Toast)("邮箱不能为空")}else(0,i.Toast)("手机号格式不正确");else(0,i.Toast)("手机号不能为空");else(0,i.Toast)("联系人不能为空")}}};e.default=s},"371c":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'uni-page-body[data-v-7b424a9c]{width:100%;height:100%;background:#fff}.contain[data-v-7b424a9c]{width:100%;height:100%}uni-input[data-v-7b424a9c]{text-align:right}.place[data-v-7b424a9c]{font-size:12px;color:#999}.content[data-v-7b424a9c]{width:100%;padding:0 %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box}uni-textarea[data-v-7b424a9c]{width:100%;height:%?260?%;border:1px solid #eee;border-radius:4px;padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:12px;color:#333;background:#e3e3e6}.submit[data-v-7b424a9c]{width:92%;height:%?80?%;line-height:%?80?%;text-align:center;font-size:14px;color:#fff;background:#e73c1d;border-radius:4px;margin:%?60?% auto 0}.forms[data-v-7b424a9c]{width:100%;padding:0 %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.item[data-v-7b424a9c]{width:100%;height:%?84?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:14px;color:#333;border-bottom:1px dashed #eee}.mark[data-v-7b424a9c]{width:100%;height:%?32?%;line-height:%?32?%;padding-left:%?50?%;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;margin:%?50?% 0 %?30?%}.mark[data-v-7b424a9c]:after{content:"";position:absolute;top:0;left:%?30?%;width:3px;height:%?32?%;border-radius:4px;background:#e73c1d}.tip[data-v-7b424a9c]{width:100%;font-size:12px;color:#999;text-align:justify;padding:%?40?% %?30?% 0;-webkit-box-sizing:border-box;box-sizing:border-box}body.?%PAGE?%[data-v-7b424a9c]{background:#fff}',""])},"3fa7":function(t,e,a){var i=a("371c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("1c4e92fe",i,!0,{sourceMap:!1,shadowMode:!1})},"64cd":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"contain"},[a("v-uni-view",{staticClass:"fixed"},[a("cu-custom",{attrs:{isBack:!0,Color:t.Color,backColor:t.backColor,isIcon:!0,bgColor:"bg-shadeTop text-white"}},[a("template",{attrs:{slot:"backText"},slot:"backText"}),a("template",{attrs:{slot:"content"},slot:"content"},[t._v("商务合作")])],2)],1),a("v-uni-view",{staticClass:"forms"},[a("v-uni-view",{staticClass:"item"},[a("v-uni-view",[t._v("联系人：")]),a("v-uni-input",{attrs:{type:"text",placeholder:"请输入联系人","placeholder-class":"place"},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1),a("v-uni-view",{staticClass:"item"},[a("v-uni-view",[t._v("联系电话：")]),a("v-uni-input",{attrs:{type:"text",placeholder:"请输入联系电话","placeholder-class":"place"},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}})],1),a("v-uni-view",{staticClass:"item"},[a("v-uni-view",[t._v("邮箱：")]),a("v-uni-input",{attrs:{type:"text",placeholder:"请输入邮箱","placeholder-class":"place"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),a("v-uni-view",{staticClass:"mark"},[t._v("合作项目简介")]),a("v-uni-view",{staticClass:"content"},[a("v-uni-textarea",{attrs:{placeholder:"反馈内容","placeholder-class":"place"},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1),a("v-uni-view",{staticClass:"submit",on:{click:function(e){e=t.$handleEvent(e),t.submit(e)}}},[t._v("提交")]),a("v-uni-view",{staticClass:"tip"},[t._v("提交完成后，平台工作人员会在3个工作日内主动致电您，请耐心等待！")])],1)},o=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return o})},7184:function(t,e,a){"use strict";var i=a("3fa7"),o=a.n(i);o.a},"8d0e":function(t,e,a){"use strict";a.r(e);var i=a("64cd"),o=a("92db");for(var s in o)"default"!==s&&function(t){a.d(e,t,function(){return o[t]})}(s);a("7184");var n=a("2877"),l=Object(n["a"])(o["default"],i["a"],i["b"],!1,null,"7b424a9c",null);e["default"]=l.exports},"92db":function(t,e,a){"use strict";a.r(e);var i=a("111c3"),o=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=o.a},f42a:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ajaxs=e.ajax=void 0;var i=function(t){t=t||{},t.url=t.url||"",t.data=JSON.stringify(t.data||{}),t.method=t.method||"POST",t.header=t.header||{"Content-Type":"application/json"},t.success=t.success||function(){},t.fail=t.fail||function(){},console.log(t.data),uni.request({url:"https://m.xgcyz1978.com"+t.url,data:t.data,method:t.method,header:t.header,dataType:"json",success:function(e){t.success(e)},fail:function(e){t.fail(e),uni.showToast({title:"请稍后重试",icon:"none"})}})};e.ajax=i;var o=function(t){t=t||{},t.url=t.url||"",t.data=JSON.stringify(t.data||{}),t.method=t.method||"POST",t.header=t.header||{"Content-Type":"application/json"},t.success=t.success||function(){},t.fail=t.fail||function(){},console.log(t.data),uni.request({url:"https://m.xgcyz1978.com"+t.url,data:t.data,method:t.method,header:t.header,dataType:"json",success:function(e){t.success(e)},fail:function(e){t.fail(e),uni.showToast({title:"请稍后重试",icon:"none"})}})};e.ajaxs=o}}]);
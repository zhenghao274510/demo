(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ask-ask"],{"04fb":function(t,i,e){var a=e("ffa3");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("5e5caf32",a,!0,{sourceMap:!1,shadowMode:!1})},"18b2":function(t,i,e){"use strict";var a=e("04fb"),n=e.n(a);n.a},"1dcd":function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"contain"},[e("v-uni-view",{staticClass:"wrapper"},[e("v-uni-view",{staticClass:"title"},[t._v("我的法律咨询")]),t._l(t.list,(function(i,a){return e("v-uni-view",{key:a,staticClass:"item"},[e("v-uni-view",{staticClass:"user"},[e("v-uni-view",[t._v("咨询人："+t._s(i.cusName))]),e("v-uni-view",[t._v(t._s(i.adtime))])],1),e("v-uni-view",{staticClass:"address"},[e("v-uni-view",[t._v("焦作市：")]),e("v-uni-view",{staticClass:"detail"},[t._v(t._s(i.address))])],1),e("v-uni-view",{staticClass:"address"},[e("v-uni-view",[t._v("当前状态：")]),1==i.state?e("v-uni-view",{staticClass:"detail"},[t._v("待政研室处理")]):t._e(),2==i.state?e("v-uni-view",{staticClass:"detail"},[t._v("政研室驳回用户")]):t._e(),3==i.state?e("v-uni-view",{staticClass:"detail"},[t._v("待业务部处理")]):t._e(),4==i.state?e("v-uni-view",{staticClass:"detail"},[t._v("政研室同意业务部处理")]):t._e(),5==i.state?e("v-uni-view",{staticClass:"detail"},[t._v("待政研室业务审核")]):t._e()],1),e("v-uni-view",{staticClass:"bg"},[e("v-uni-view",{staticClass:"content"},[t._v(t._s(i.Message))]),i.file.length>0?e("v-uni-view",{staticClass:"imgs"},t._l(i.file,(function(t,i){return e("v-uni-image",{key:i,attrs:{src:t}})})),1):t._e(),i.video.length>0?e("v-uni-view",{staticClass:"video"},t._l(i.video,(function(t,i){return e("v-uni-video",{key:i,staticClass:"videos",attrs:{src:t,controls:!0}})})),1):t._e()],1),4==i.state?e("v-uni-view",{staticClass:"bg"},[e("v-uni-view",{staticClass:"titles"},[t._v("处理意见："+t._s(i.content))])],1):t._e()],1)})),e("paging",{attrs:{total:t.total,pageSize:2,radius:6,arrow:!1,background:"#ffffff",color:"#000000",activecolor:"#ffffff",activebackground:"#172454"},on:{changes:function(i){arguments[0]=i=t.$handleEvent(i),t.dd.apply(void 0,arguments)}},model:{value:t.curren,callback:function(i){t.curren=i},expression:"curren"}})],2)],1)},s=[];e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}))},3139:function(t,i,e){"use strict";e.r(i);var a=e("cfd6"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},cfd6:function(t,i,e){"use strict";var a=e("ee27");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("217e")),s=e("496e"),r=a(e("58c6")),o=a(e("ae53")),d={data:function(){return{total:0,curren:1,page:1,list:[]}},components:{paging:o.default,uniIcons:r.default},onLoad:function(){this.init()},methods:{dd:function(t){this.page=t,this.init()},init:function(){var t=this,i={customerId:uni.getStorageSync("uid"),type:1,nowPage:this.page,pageCount:2},e={url:"lawyerOnlyawns",data:i,success:function(i){console.log(i),i.data.success?(t.total=2*i.data.body.totalPage,i.data.body.maps&&(t.list=i.data.body.maps)):n.default.showToast(i.data.msg)}};(0,s.ajax)(e)}}};i.default=d},de67:function(t,i,e){"use strict";e.r(i);var a=e("1dcd"),n=e("3139");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("18b2");var r,o=e("f0c5"),d=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"45352900",null,!1,a["a"],r);i["default"]=d.exports},ffa3:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.contain[data-v-45352900]{width:100%;min-height:100vh;background:#fff}.contain .wrapper[data-v-45352900]{width:1200px;min-height:100vh;margin:0 auto;padding-top:%?15?%;padding-bottom:%?15?%;box-sizing:border-box}.contain .wrapper .title[data-v-45352900]{width:100%;text-align:center;font-size:16px;font-weight:600;color:#333}.contain .wrapper .item[data-v-45352900]{width:100%;padding:28px;box-sizing:border-box;background:#f6f6f6;margin-top:30px;border-radius:6px}.contain .wrapper .item .user[data-v-45352900]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:14px;color:#333}.contain .wrapper .item .user .nick[data-v-45352900]{width:20%}.contain .wrapper .item .address[data-v-45352900]{width:100%;font-size:14px;color:#333;display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?10?%}.contain .wrapper .item .address .nick[data-v-45352900]{width:17%}.contain .wrapper .item .address .detail[data-v-45352900]{width:80%}.contain .wrapper .item .bg[data-v-45352900]{width:100%;margin-top:%?10?%}.contain .wrapper .item .bg .titles[data-v-45352900]{width:100%;font-size:14px;color:#333}.contain .wrapper .item .bg .content[data-v-45352900]{width:100%;font-size:14px;color:#333;line-height:20px}.contain .wrapper .item .bg .imgs[data-v-45352900]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?10?%}.contain .wrapper .item .bg .imgs uni-image[data-v-45352900]{width:%?30?%;height:%?30?%;border-radius:4px;margin-right:%?10?%}.contain .wrapper .item .bg .video[data-v-45352900]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-top:%?10?%}.contain .wrapper .item .bg .video .videos[data-v-45352900]{width:40%;height:%?100?%}',""]),t.exports=i}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-web-web"],{"331b":function(t,n,a){"use strict";var e,r=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"contain"},[a("v-uni-view",{staticClass:"wrapper"},[a("v-uni-view",{staticClass:"title"},[t._v("协议详情")]),a("u-parse",{staticStyle:{"font-size":"15px","text-align":"justify"},attrs:{content:t.content}})],1)],1)},i=[];a.d(n,"b",(function(){return r})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return e}))},a8ad:function(t,n,a){var e=a("c881");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var r=a("4f06").default;r("44e8dd14",e,!0,{sourceMap:!1,shadowMode:!1})},c881:function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.contain[data-v-109c60c1]{width:100%;min-height:100vh;background:#fff}.contain .wrapper[data-v-109c60c1]{width:1200px;min-height:100vh;margin:0 auto;padding-top:%?15?%;box-sizing:border-box}.contain .wrapper .title[data-v-109c60c1]{width:100%;text-align:center;font-size:16px;font-weight:600;color:#333;margin-bottom:%?20?%}',""]),t.exports=n},d672:function(t,n,a){"use strict";var e=a("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=e(a("217e")),i=a("496e"),c=e(a("73b5")),o={data:function(){return{content:""}},components:{uParse:c.default},onLoad:function(){this.init()},methods:{init:function(t){var n=this,a={},e={url:"agreementList",data:a,success:function(t){console.log(t),t.data.success?n.content=t.data.body.maps[0].content:r.default.showToast(t.data.msg)}};(0,i.ajax)(e)}}};n.default=o},e4b8:function(t,n,a){"use strict";var e=a("a8ad"),r=a.n(e);r.a},eb03:function(t,n,a){"use strict";a.r(n);var e=a("331b"),r=a("eb5a");for(var i in r)"default"!==i&&function(t){a.d(n,t,(function(){return r[t]}))}(i);a("e4b8");var c,o=a("f0c5"),s=Object(o["a"])(r["default"],e["b"],e["c"],!1,null,"109c60c1",null,!1,e["a"],c);n["default"]=s.exports},eb5a:function(t,n,a){"use strict";a.r(n);var e=a("d672"),r=a.n(e);for(var i in e)"default"!==i&&function(t){a.d(n,t,(function(){return e[t]}))}(i);n["default"]=r.a}}]);
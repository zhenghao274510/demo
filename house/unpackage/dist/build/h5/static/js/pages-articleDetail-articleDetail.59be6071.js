(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-articleDetail-articleDetail"],{"466d8":function(t,e,n){"use strict";n.r(e);var i=n("be38"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},"4f80":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.contain[data-v-688b204d]{width:100%;height:100vh;background:#f6f6f6;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:relative}.contain .fixed[data-v-688b204d]{width:100%}.contain .wrapper[data-v-688b204d]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}',""]),t.exports=e},5834:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"contain"},[n("v-uni-view",{staticClass:"fixed"},[n("cu-custom",{attrs:{isBacks:!0,bgColor:"bg-shadeTop"},on:{goBack:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[n("template",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.title))])],2)],1),n("v-uni-view",{staticClass:"wrapper"},[n("iframe",{attrs:{src:t.content,frameborder:"0",height:t.height}})])],1)},o=[]},"64a7":function(t,e,n){"use strict";var i=n("b6eb"),r=n.n(i);r.a},b67b:function(t,e,n){"use strict";n.r(e);var i=n("5834"),r=n("466d8");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("64a7");var a,c=n("f0c5"),s=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"688b204d",null,!1,i["a"],a);e["default"]=s.exports},b6eb:function(t,e,n){var i=n("4f80");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("46ece63b",i,!0,{sourceMap:!1,shadowMode:!1})},be38:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("e143")),o={data:function(){return{content:"http://las.jwnguqc.cn/back.html?id=1014",setTime:null,time:0,show:!1,type:1,height:0,webviewStyles:{progress:{color:"#FF3333"},height:"800px"},title:"文章详情"}},onLoad:function(t){this.height=uni.getSystemInfoSync().windowHeight-r.default.prototype.CustomBar+"px",this.type=t.type;decodeURIComponent(t.url);this.content=decodeURIComponent(t.url)},methods:{goBack:function(){uni.reLaunch({url:"/pages/article/article?nav=2"})}}};e.default=o}}]);
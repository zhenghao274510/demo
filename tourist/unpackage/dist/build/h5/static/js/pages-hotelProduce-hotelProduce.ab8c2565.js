(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-hotelProduce-hotelProduce"],{"3a66":function(t,i,e){var o=e("7877");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=e("4f06").default;n("1ffcdc23",o,!0,{sourceMap:!1,shadowMode:!1})},"65eb":function(t,i,e){"use strict";e.r(i);var o=e("a992"),n=e("e31c");for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);e("8ac3");var s=e("2877"),c=Object(s["a"])(n["default"],o["a"],o["b"],!1,null,"1870bd2d",null);i["default"]=c.exports},7877:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,"uni-page-body[data-v-1870bd2d]{width:100%;background:#f8f8f8}.contain[data-v-1870bd2d]{width:100%;height:100%}.hotel-produce[data-v-1870bd2d]{width:100%;height:%?80?%;line-height:%?80?%;padding:0 %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px;color:#333}.content1[data-v-1870bd2d]{width:100%;padding:%?20?% %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:12px;color:#666;text-align:justify;background:#fff}body.?%PAGE?%[data-v-1870bd2d]{background:#f8f8f8}",""])},"8ac3":function(t,i,e){"use strict";var o=e("3a66"),n=e.n(o);n.a},a992:function(t,i,e){"use strict";var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"contain"},[e("v-uni-view",{staticClass:"fixed"},[e("cu-custom",{attrs:{isBack:!0,Color:t.Color,backColor:t.backColor,isIcon:!0,bgColor:"bg-shadeTop text-white"}},[e("template",{attrs:{slot:"backText"},slot:"backText"}),e("template",{attrs:{slot:"content"},slot:"content"},[t._v("酒店介绍")])],2)],1),e("v-uni-view",{staticClass:"hotel-produce"},[t._v("酒店介绍")]),e("v-uni-view",{staticClass:"content1"},[t._v(t._s(t.list.Contents))]),e("v-uni-view",{staticClass:"hotel-produce"},[t._v("酒店服务")]),e("v-uni-view",{staticClass:"content1"},[t._v(t._s(t.list.Service))]),e("v-uni-view",{staticClass:"hotel-produce"},[t._v("酒店交通")]),e("v-uni-view",{staticClass:"content1"},[e("v-uni-rich-text",{attrs:{nodes:t.list.Traffic}})],1),e("v-uni-view",{staticClass:"hotel-produce"},[t._v("酒店地址")]),e("v-uni-view",{staticClass:"content1"},[t._v(t._s(t.list.Address))])],1)},n=[];e.d(i,"a",function(){return o}),e.d(i,"b",function(){return n})},c2d9:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o={data:function(){return{Color:"#E73C1D",backColor:"#FFFFFF",list:{}}},onLoad:function(t){this.list=JSON.parse(t.list),this.list.Traffic=this.list.Traffic.split("-").join("<br/>")}};i.default=o},e31c:function(t,i,e){"use strict";e.r(i);var o=e("c2d9"),n=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(i,t,function(){return o[t]})}(a);i["default"]=n.a}}]);
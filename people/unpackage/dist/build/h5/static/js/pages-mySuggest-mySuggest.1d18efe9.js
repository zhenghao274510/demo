(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mySuggest-mySuggest"],{"034a":function(t,i,e){"use strict";var n=e("ee27");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("c67f")),s=e("c806"),o=n(e("8c3a")),l={data:function(){return{Color:"#333",list:[],mescroll:null,downOption:{use:!0,auto:!0,autoShowLoading:!0,isLock:!1,isBoth:!0,offset:80,inOffsetRate:1,outOffsetRate:.2,bottomOffset:20,minAngle:45,textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ..."},upOption:{use:!0,auto:!0,isLock:!1,isBoth:!0,page:{num:0,size:10,time:null},noMoreSize:6,textLoading:"加载中 ...",textNoMore:"-- 没有更多数据 --",toTop:{src:"http://www.mescroll.com/img/mescroll-totop.png",offset:1e3,duration:300},empty:{use:!0,icon:"http://www.mescroll.com/img/mescroll-empty.png",tip:"没有搜索到相关数据"}}}},components:{MescrollUni:o.default},onUnload:function(){this.mescroll=null},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},methods:{mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.list=[],this.mescroll.resetUpScroll()},upCallback:function(t){t.num,t.size;var i=this;i.init(t)},topClick:function(){console.log("点击了回到顶部按钮")},init:function(t){var i=this,e={customerId:uni.getStorageSync("uid"),type:2,nowPage:t.num,pageCount:t.size},n={url:"lawyerOnlyawns",data:e,success:function(e){if(console.log(e),e.data.success){if(e.data.body.maps)for(var n=0;n<e.data.body.maps.length;n++)i.list.push(e.data.body.maps[n])}else a.default.showToast(e.data.msg);var s=[];e.data.body.maps&&(s=e.data.body.maps);var o=1;e.data.body.totalPage&&(o=e.data.body.totalPage),t.endByPage(s.length,o)}};(0,s.ajax)(n)}}};i.default=l},1010:function(t,i,e){"use strict";var n={mescrollUni:e("8c3a").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"contain"},[e("v-uni-view",{staticClass:"fixed"},[e("cu-custom",{attrs:{isBack:!0,Color:t.Color,isIcon:!0,bgColor:"bg-shadeTop text-white"}},[e("template",{attrs:{slot:"backText"},slot:"backText"}),e("template",{attrs:{slot:"content"},slot:"content"},[t._v("我的问题反映")])],2)],1),e("v-uni-view",{staticClass:"wrapper"},[e("mescroll-uni",{attrs:{down:t.downOption,up:t.upOption},on:{down:function(i){arguments[0]=i=t.$handleEvent(i),t.downCallback.apply(void 0,arguments)},up:function(i){arguments[0]=i=t.$handleEvent(i),t.upCallback.apply(void 0,arguments)},init:function(i){arguments[0]=i=t.$handleEvent(i),t.mescrollInit.apply(void 0,arguments)},emptyclick:function(i){arguments[0]=i=t.$handleEvent(i),t.emptyClick.apply(void 0,arguments)},topclick:function(i){arguments[0]=i=t.$handleEvent(i),t.topClick.apply(void 0,arguments)}}},t._l(t.list,(function(i,n){return e("v-uni-view",{key:n,staticClass:"item"},[e("v-uni-view",{staticClass:"user"},[e("v-uni-view",[t._v("咨询人： "+t._s(i.cusName))]),e("v-uni-view",[t._v(t._s(i.adtime))])],1),e("v-uni-view",{staticClass:"address"},[e("v-uni-view",{staticClass:"nick"},[t._v("焦作市：")]),e("v-uni-view",{staticClass:"detail"},[t._v(t._s(i.address))])],1),e("v-uni-view",{staticStyle:{"margin-top":"24rpx"}},[t._v("类型项： "+t._s(i.proName))]),e("v-uni-view",{staticClass:"address"},[e("v-uni-view",{staticClass:"nick",staticStyle:{width:"23%"}},[t._v("当前状态：")]),1==i.state?e("v-uni-view",{staticClass:"detail"},[t._v("待政研室处理")]):t._e(),2==i.state?e("v-uni-view",{staticClass:"detail"},[t._v("政研室驳回用户")]):t._e(),3==i.state?e("v-uni-view",{staticClass:"detail"},[t._v("待业务部处理")]):t._e(),4==i.state?e("v-uni-view",{staticClass:"detail"},[t._v("政研室同意业务部处理")]):t._e(),5==i.state?e("v-uni-view",{staticClass:"detail"},[t._v("待政研室业务审核")]):t._e()],1),e("v-uni-view",{staticClass:"bg"},[e("v-uni-view",{staticClass:"content"},[t._v(t._s(i.Message))]),i.file.length>0?e("v-uni-view",{staticClass:"imgs"},t._l(i.file,(function(t,i){return e("v-uni-image",{key:i,attrs:{src:t}})})),1):t._e(),i.video.length>0?e("v-uni-view",{staticClass:"video"},t._l(i.video,(function(t,i){return e("v-uni-video",{key:i,staticClass:"videos",attrs:{src:t,controls:!0}})})),1):t._e()],1),4==i.state?e("v-uni-view",{staticClass:"bg"},[e("v-uni-view",{staticClass:"titles"},[t._v("处理意见：")]),e("v-uni-view",{staticClass:"content"},[t._v(t._s(i.content))])],1):t._e()],1)})),1)],1)],1)},s=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}))},"1b42":function(t,i,e){"use strict";e.r(i);var n=e("1010"),a=e("cd51");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("4eec");var o,l=e("f0c5"),r=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"30d3711b",null,!1,n["a"],o);i["default"]=r.exports},"4eec":function(t,i,e){"use strict";var n=e("af47"),a=e.n(n);a.a},"524c":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.contain[data-v-30d3711b]{width:100%;min-height:100vh;background:#f6f6f6;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.contain .fixed[data-v-30d3711b]{width:100%}.contain .wrapper[data-v-30d3711b]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.contain .wrapper .item[data-v-30d3711b]{width:100%;padding:%?28?%;box-sizing:border-box;background:#fff;margin-top:%?30?%}.contain .wrapper .item .user[data-v-30d3711b]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;color:#333}.contain .wrapper .item .user .nick[data-v-30d3711b]{width:20%}.contain .wrapper .item .address[data-v-30d3711b]{width:100%;font-size:%?28?%;color:#333;display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?24?%}.contain .wrapper .item .address .nick[data-v-30d3711b]{width:17%}.contain .wrapper .item .address .detail[data-v-30d3711b]{width:80%}.contain .wrapper .item .bg[data-v-30d3711b]{width:100%;padding:%?20?%;border-radius:4px;background:#f6f6f6;margin-top:%?30?%}.contain .wrapper .item .bg .content[data-v-30d3711b]{width:100%;font-size:%?26?%;color:#333;line-height:20px}.contain .wrapper .item .bg .imgs[data-v-30d3711b]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?28?%}.contain .wrapper .item .bg .imgs uni-image[data-v-30d3711b]{width:%?100?%;height:%?100?%;border-radius:4px;margin-right:%?28?%}.contain .wrapper .item .bg .video[data-v-30d3711b]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-top:%?24?%}.contain .wrapper .item .bg .video .videos[data-v-30d3711b]{width:100%;height:%?240?%;margin-bottom:%?24?%}',""]),t.exports=i},af47:function(t,i,e){var n=e("524c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("69812e1a",n,!0,{sourceMap:!1,shadowMode:!1})},cd51:function(t,i,e){"use strict";e.r(i);var n=e("034a"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-point-point"],{"18b8":function(t,e,i){"use strict";i.r(e);var n=i("47a2"),o=i("9940");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("9a80");var l,s=i("f0c5"),r=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"ef92f776",null,!1,n["a"],l);e["default"]=r.exports},"47a2":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={mescrollUni:i("4ba6").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"contain"},[i("v-uni-view",{staticClass:"fixed"},[i("cu-custom",{attrs:{isBacks:!0,bgColor:"#333",Bg:t.Bg},on:{goBack:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[i("template",{attrs:{slot:"content"},slot:"content"},[t._v("积分详情")])],2)],1),i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticStyle:{"font-size":"50rpx","margin-bottom":"24rpx"}},[t._v(t._s(t.point))]),i("v-uni-view",[t._v("积分")]),i("v-uni-view",{staticClass:"record",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goReport.apply(void 0,arguments)}}},[t._v("兑换记录")])],1),i("mescroll-uni",{attrs:{down:t.downOption,up:t.upOption},on:{down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)},init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},emptyclick:function(e){arguments[0]=e=t.$handleEvent(e),t.emptyClick.apply(void 0,arguments)},topclick:function(e){arguments[0]=e=t.$handleEvent(e),t.topClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"list"},t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"item",style:{background:(n+1)%2==0?"none":"#ffffff"}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-view",[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"time"},[t._v(t._s(e.adtime))])],1),i("v-uni-view",{staticClass:"left",staticStyle:{"align-items":"flex-end"}},[1==e.type||2==e.type||3==e.type||4==e.type||6==e.type?i("v-uni-view",{staticStyle:{color:"green"}},[t._v("+"+t._s(e.integrals))]):t._e(),0==e.type||5==e.type?i("v-uni-view",{staticStyle:{color:"red"}},[t._v("-"+t._s(e.integrals))]):t._e(),1==e.state?i("v-uni-view",{staticClass:"state"},[t._v("已到账")]):t._e(),0==e.state?i("v-uni-view",{staticClass:"state"},[t._v("未到账")]):t._e()],1)],1)})),1)],1)],1)},a=[]},9940:function(t,e,i){"use strict";i.r(e);var n=i("a738"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"9a80":function(t,e,i){"use strict";var n=i("b5c8"),o=i.n(n);o.a},a738:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("4ba6")),a={data:function(){return{Bg:"#ffffff",point:0,list:[],mescroll:null,downOption:{use:!0,auto:!0,autoShowLoading:!0,isLock:!1,isBoth:!0,offset:80,inOffsetRate:1,outOffsetRate:.2,bottomOffset:20,minAngle:45,textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ..."},upOption:{use:!0,auto:!0,isLock:!1,isBoth:!0,page:{num:0,size:10,time:null},noMoreSize:3,textLoading:"加载中 ...",textNoMore:"-- 已经到底了 --",toTop:{src:"http://www.mescroll.com/img/mescroll-totop.png",offset:1e3,duration:300},empty:{use:!0,icon:"http://www.mescroll.com/img/mescroll-empty.png",tip:"没有符合条件的数据"}}}},components:{MescrollUni:o.default},onUnload:function(){this.mescroll=null},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onLoad:function(t){this.point=t.score},methods:{goBack:function(){uni.navigateBack({delta:1})},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.list=[],this.mescroll.resetUpScroll()},upCallback:function(t){t.num,t.size;var e=this;e.init(t)},topClick:function(){console.log("点击了回到顶部按钮")},init:function(t){var e=this,i=this,n={uid:uni.getStorageSync("uid"),nowPage:t.num,pageCount:t.size};this.$u.post("getmemberintegralslist",n).then((function(n){if(console.log(n),0==n.result){if(n.dataList)for(var o=0;o<n.dataList.length;o++)i.list.push(n.dataList[o])}else e.$refs.uToast.show({title:n.resultNote,type:"none"});var a=[];n.dataList&&(a=n.dataList);var l=1;n.totalPage&&(l=n.totalPage),t.endByPage(a.length,l)}))},goReport:function(){uni.navigateTo({url:"/pages/exchange/exchange?type=2"})}}};e.default=a},b5c8:function(t,e,i){var n=i("fa8f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("59f578b0",n,!0,{sourceMap:!1,shadowMode:!1})},fa8f:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.contain[data-v-ef92f776]{width:100%;min-height:100vh;background:#f6f6f6;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.contain .fixed[data-v-ef92f776]{width:100%}.contain .top[data-v-ef92f776]{width:100%;height:%?240?%;background:#fe5f23;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%;color:#fff;position:relative}.contain .top .record[data-v-ef92f776]{width:%?160?%;height:%?60?%;line-height:%?60?%;text-align:center;background:#fff;-webkit-border-top-left-radius:24px;border-top-left-radius:24px;-webkit-border-bottom-left-radius:24px;border-bottom-left-radius:24px;font-size:%?28?%;color:#fe5f23;position:absolute;top:%?90?%;right:0}.contain .list[data-v-ef92f776]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.contain .list .item[data-v-ef92f776]{width:100%;padding:%?28?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #eee}.contain .list .item .left[data-v-ef92f776]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;font-size:%?30?%;color:#333}.contain .list .item .left .time[data-v-ef92f776]{font-size:%?28?%;color:#999;margin-top:%?24?%}.contain .list .item .left .state[data-v-ef92f776]{font-size:%?26?%;color:#999;margin-top:%?24?%}.contain .list .item[data-v-ef92f776]:last-child{border-bottom:none}',""]),t.exports=e}}]);
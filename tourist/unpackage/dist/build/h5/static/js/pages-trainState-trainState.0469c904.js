(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-trainState-trainState"],{"6d0c":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-e3ec5dac]{width:100%;height:100%}.contain[data-v-e3ec5dac]{width:100%;height:100%;background:#f8f8f8}.wrapper[data-v-e3ec5dac]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:fixed;left:0;top:50px;z-index:999;background:#fff}.tabs[data-v-e3ec5dac]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#fff}.tab[data-v-e3ec5dac]{font-size:14px;color:#333;padding:%?16?% 0}.active[data-v-e3ec5dac]{color:#de2910;border-bottom:2px solid #de2910}.lists[data-v-e3ec5dac]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:%?120?% %?30?% %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box}.list[data-v-e3ec5dac]{width:100%;padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff;border-radius:4px;-webkit-box-shadow:1px 1px 4px #eee;box-shadow:1px 1px 4px #eee;margin-bottom:%?30?%}.list-top[data-v-e3ec5dac]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:14px;color:#666;border-bottom:1px dashed #eee;padding-bottom:%?20?%}.list-middel[data-v-e3ec5dac]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?20?% 0;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px dashed #eee}.list-code[data-v-e3ec5dac]{font-size:18px;font-weight:500;color:#333}.start[data-v-e3ec5dac]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:%?20?%}.start-point[data-v-e3ec5dac]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:14px;color:#333}.start1[data-v-e3ec5dac]{padding:0 2px;background:#de2910;border-radius:4px;font-size:12px;color:#fff;margin-right:%?14?%}.start2[data-v-e3ec5dac]{padding:0 2px;background:#01910b;border-radius:4px;font-size:12px;color:#fff;margin-right:%?14?%}.start-time[data-v-e3ec5dac]{font-size:12px;margin-top:%?14?%}.icons[data-v-e3ec5dac]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:12px;color:#333}.icons>img[data-v-e3ec5dac]{width:%?150?%;margin:%?20?% %?40?% 0}.icons>uni-view[data-v-e3ec5dac]{margin-left:%?40?%;margin-top:%?10?%}.list-bottom[data-v-e3ec5dac]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:12px;color:#333;padding:%?20?% 0 0}",""])},"7d7e":function(t,e,i){"use strict";(function(t){var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5"),i("386d");var s=i("f42a"),n=a(i("9785")),o={data:function(){return{Color:"#DE2910",value:"",backColor:"#FFFFFF",datas:["全部","待付款","待出行","已完成","退款"],itemIndex:0,tabType:0,list:[],totalPage:2,mescroll:null,downOption:{use:!0,auto:!0,autoShowLoading:!0,isLock:!1,isBoth:!0,offset:80,inOffsetRate:1,outOffsetRate:.2,bottomOffset:20,minAngle:45,textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ..."},upOption:{use:!0,auto:!0,isLock:!1,isBoth:!0,page:{num:0,size:10,time:null},noMoreSize:6,textLoading:"加载中 ...",textNoMore:"-- 没有更多数据 --",toTop:{src:"http://www.mescroll.com/img/mescroll-totop.png",offset:1e3,duration:300},empty:{use:!0,icon:"http://www.mescroll.com/img/mescroll-empty.png",tip:"暂无订单数据"}},show:!1,val:"",orderId:"",look:!1}},components:{MescrollUni:n.default},onLoad:function(){if(this.getRequest("uid")){var t=this.getRequest("uid");this.$store.commit("changeUid",t)}},onShow:function(){this.mescroll&&(this.list=[],this.mescroll.resetUpScroll())},onUnload:function(){this.mescroll=null},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},methods:{getRequest:function(t){for(var e=window.location.search.substring(1),i=e.split("&"),a=0;a<i.length;a++){var s=i[a].split("=");if(s[0]==t)return s[1]}return!1},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.list=[],t.resetUpScroll()},upCallback:function(t){t.num,t.size;var e=this;0===this.tabType?e.init("0",t):1===this.tabType?e.init("1",t):2===this.tabType?e.init("2",t):3===this.tabType?e.init("3",t):4===this.tabType&&e.init("4",t)},topClick:function(){t.log("点击了回到顶部按钮")},init:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1?arguments[1]:void 0,a=this,n={uid:this.$store.state.uid,type:e},o={url:"/api/gzh/trainOrderList",data:n,success:function(e){if(t.log(e),0==e.data.result){for(var s=0;s<e.data.dataList.length;s++)a.list.push(e.data.dataList[s]);a.look=!1}var n=e.data.dataList,o=e.data.totalPage;i.endByPage(n.length,o)}};(0,s.ajaxs)(o)},change:function(t){if(this.look)return!1;this.itemIndex=t,this.look=!0,this.tabType!==t&&(this.tabType=t,this.list=[],this.mescroll.resetUpScroll())},goDetail:function(t){uni.navigateTo({url:"../trainDetail/trainDetail?id="+t})},back:function(){uni.navigateTo({url:"../order/order"})}}};e.default=o}).call(this,i("5a52")["default"])},"7d87":function(t,e,i){var a=i("6d0c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("6c0c36f6",a,!0,{sourceMap:!1,shadowMode:!1})},"87bb":function(t,e,i){"use strict";i.r(e);var a=i("7d7e"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},"8e23":function(t,e,i){"use strict";var a=i("7d87"),s=i.n(a);s.a},b0dc4:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAAHCAYAAACShLqlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI5QjYxMUQzQzI2OTExRTlCQ0U5QTFFQkM5QkI5MUI3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI5QjYxMUQ0QzI2OTExRTlCQ0U5QTFFQkM5QkI5MUI3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjlCNjExRDFDMjY5MTFFOUJDRTlBMUVCQzlCQjkxQjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjlCNjExRDJDMjY5MTFFOUJDRTlBMUVCQzlCQjkxQjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4/pMTzAAAAb0lEQVR42mI0NjZmGAVkgSggFgTiqdgkmUbDh2wgBcRTgDhmNGCpC15D6cXYAnc0YMkHyGEHCty80YClDniDxp8IxMUwDgsQ+wAx62g4kQzcsYj1ALEMEBeCAnY9NIBHAengAxqfDYgLQOUvQIABAFEmDFeH7KKoAAAAAElFTkSuQmCC"},d38f:function(t,e,i){"use strict";i.r(e);var a=i("f54c"),s=i("87bb");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("8e23");var o=i("2877"),l=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,"e3ec5dac",null);e["default"]=l.exports},f54c:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"contain"},[a("v-uni-view",{staticClass:"fixed"},[a("cu-custom",{attrs:{isBacks:!0,Color:t.Color,backColor:t.backColor,isIcons:!0,bgColor:"bg-shadeTop text-white"},on:{Back:function(e){e=t.$handleEvent(e),t.back(e)}}},[a("template",{attrs:{slot:"backText"},slot:"backText"}),a("template",{attrs:{slot:"content"},slot:"content"},[t._v("火车票订单")])],2)],1),a("v-uni-view",{staticClass:"wrapper"},[a("v-uni-view",{staticClass:"tabs"},t._l(t.datas,function(e,i){return a("v-uni-view",{key:i,staticClass:"tab",class:t.itemIndex==i?"active":"",on:{click:function(e){e=t.$handleEvent(e),t.change(i)}}},[t._v(t._s(e))])}),1)],1),a("mescroll-uni",{attrs:{down:t.downOption,up:t.upOption},on:{down:function(e){e=t.$handleEvent(e),t.downCallback(e)},up:function(e){e=t.$handleEvent(e),t.upCallback(e)},init:function(e){e=t.$handleEvent(e),t.mescrollInit(e)},emptyclick:function(e){e=t.$handleEvent(e),t.emptyClick(e)},topclick:function(e){e=t.$handleEvent(e),t.topClick(e)}}},[a("v-uni-view",{staticClass:"lists"},t._l(t.list,function(e,s){return a("v-uni-view",{key:s,staticClass:"list",on:{click:function(i){i=t.$handleEvent(i),t.goDetail(e.orderId)}}},[a("v-uni-view",{staticClass:"list-top"},[a("v-uni-view",[t._v("订单编号："+t._s(e.orderId))])],1),a("v-uni-view",{staticClass:"list-middel"},[a("v-uni-view",{staticClass:"list-code"},[t._v(t._s(e.trainNo))]),a("v-uni-view",{staticClass:"start"},[a("v-uni-view",{staticClass:"start-point"},[a("v-uni-view",{staticClass:"start1"},[t._v("始")]),a("v-uni-view",[t._v(t._s(e.startCity))])],1),a("v-uni-view",{staticClass:"start-time"},[t._v(t._s(e.startTime))])],1),a("v-uni-view",{staticClass:"icons"},[a("img",{attrs:{src:i("b0dc4"),alt:""}}),a("v-uni-view",[t._v("3小时10分钟")])],1),a("v-uni-view",{staticClass:"start"},[a("v-uni-view",{staticClass:"start-point"},[a("v-uni-view",{staticClass:"start2"},[t._v("终")]),a("v-uni-view",[t._v(t._s(e.endCity))])],1),a("v-uni-view",{staticClass:"start-time"},[t._v(t._s(e.endTime))])],1)],1),a("v-uni-view",{staticClass:"list-bottom"},[a("v-uni-view",[t._v("出发日期："+t._s(e.startDate))]),1==e.state?a("v-uni-view",{staticClass:"state"},[t._v("新订单")]):t._e(),2==e.state?a("v-uni-view",{staticClass:"state"},[t._v("已付款")]):t._e(),3==e.state?a("v-uni-view",{staticClass:"state"},[t._v("已出票")]):t._e(),4==e.state?a("v-uni-view",{staticClass:"state"},[t._v("已取消")]):t._e(),5==e.state?a("v-uni-view",{staticClass:"state"},[t._v("已确认")]):t._e(),6==e.state?a("v-uni-view",{staticClass:"state"},[t._v("退票")]):t._e(),8==e.state?a("v-uni-view",{staticClass:"state"},[t._v("已退款")]):t._e(),9==e.state?a("v-uni-view",{staticClass:"state"},[t._v("退款中")]):t._e(),10==e.state?a("v-uni-view",{staticClass:"state"},[t._v("不能出票_退款中")]):t._e(),11==e.state?a("v-uni-view",{staticClass:"state"},[t._v("不能出票_已退款")]):t._e(),12==e.state?a("v-uni-view",{staticClass:"state"},[t._v("后续支付")]):t._e(),13==e.state?a("v-uni-view",{staticClass:"state"},[t._v("不能出票")]):t._e(),14==e.state?a("v-uni-view",{staticClass:"state"},[t._v("出票中")]):t._e()],1)],1)}),1)],1)],1)},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shopScore-shopScore"],{"2ea7":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"contain"},[o("cu-custom",{attrs:{isBack:!0,Color:t.Color,backColor:t.backColor,isIcon:!0,bgColor:"bg-shadeTop text-white"}},[o("template",{attrs:{slot:"backText"},slot:"backText"}),o("template",{attrs:{slot:"content"},slot:"content"},[t._v("纪念币商城")])],2),o("v-uni-view",{staticClass:"topImg"},[o("img",{attrs:{src:i("5a7a")}})]),o("mescroll-uni",{attrs:{down:t.downOption,up:t.upOption},on:{down:function(e){e=t.$handleEvent(e),t.downCallback(e)},up:function(e){e=t.$handleEvent(e),t.upCallback(e)},init:function(e){e=t.$handleEvent(e),t.mescrollInit(e)},emptyclick:function(e){e=t.$handleEvent(e),t.emptyClick(e)},topclick:function(e){e=t.$handleEvent(e),t.topClick(e)}}},[o("v-uni-view",{staticClass:"recommend"},t._l(t.list,function(e,i){return o("v-uni-view",{key:i,staticClass:"recommend_list",on:{click:function(i){i=t.$handleEvent(i),t.goDetail(e.productId)}}},[o("img",{staticClass:"recommend_img",attrs:{src:e.image,alt:""}}),o("v-uni-view",{staticClass:"recommend_title"},[t._v(t._s(e.title))]),o("v-uni-view",{staticClass:"recommend_price"},[[o("v-uni-view",{staticClass:"scores"},[t._v("纪念币："+t._s(e.point))])]],2)],1)}),1)],1)],1)},n=[];i.d(e,"a",function(){return o}),i.d(e,"b",function(){return n})},"480c":function(t,e,i){"use strict";i.r(e);var o=i("2ea7"),n=i("53f9");for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);i("69dd");var s=i("2877"),l=Object(s["a"])(n["default"],o["a"],o["b"],!1,null,"b20e49dc",null);e["default"]=l.exports},"53f9":function(t,e,i){"use strict";i.r(e);var o=i("ecf8"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);e["default"]=n.a},"5a7a":function(t,e,i){t.exports=i.p+"static/img/1.858a1f9f.jpg"},"65cb":function(t,e,i){var o=i("c2aa");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("46bfea41",o,!0,{sourceMap:!1,shadowMode:!1})},"69dd":function(t,e,i){"use strict";var o=i("65cb"),n=i.n(o);n.a},c2aa:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".contain[data-v-b20e49dc]{width:100%;height:100%;background:#f8f8f8;overflow:hidden}.fixed[data-v-b20e49dc]{position:fixed;z-index:99}.topImg[data-v-b20e49dc]{width:100%;height:150px}.topImg>img[data-v-b20e49dc]{width:100%;height:100%}.recommend[data-v-b20e49dc]{width:100%;padding:%?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;background:#f9f9f9;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.recommend_list[data-v-b20e49dc]{width:48%;border-radius:4px;background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:12px;color:#666;overflow:hidden;margin-bottom:%?30?%}.recommend_img[data-v-b20e49dc]{width:100%\n\t/* height: 200upx; */}.recommend_title[data-v-b20e49dc]{width:100%;height:%?50?%;line-height:%?50?%;padding-left:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.recommend_price[data-v-b20e49dc]{width:100%;padding:0 %?20?% %?12?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.price[data-v-b20e49dc]{font-size:14px;color:#de2910}.scores[data-v-b20e49dc]{color:#de2910}",""])},ecf8:function(t,e,i){"use strict";(function(t){var o=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5"),i("386d");var n=i("f42a"),a=o(i("9785")),s={data:function(){return{Color:"#DE2910",value:"",backColor:"#FFFFFF",list:[],totalPage:2,mescroll:null,downOption:{use:!0,auto:!0,autoShowLoading:!0,isLock:!1,isBoth:!0,offset:80,inOffsetRate:1,outOffsetRate:.2,bottomOffset:20,minAngle:45,textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ..."},upOption:{use:!0,auto:!0,isLock:!1,isBoth:!0,page:{num:0,size:10,time:null},noMoreSize:6,textLoading:"加载中 ...",textNoMore:"-- 没有更多数据 --",toTop:{src:"http://www.mescroll.com/img/mescroll-totop.png",offset:1e3,duration:300},empty:{use:!0,icon:"http://www.mescroll.com/img/mescroll-empty.png",tip:"还没有数据"}}}},components:{MescrollUni:a.default},onLoad:function(){if(this.getRequest("uid")){var t=this.getRequest("uid");this.$store.commit("changeUid",t)}},onUnload:function(){this.mescroll=null},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},methods:{getRequest:function(t){for(var e=window.location.search.substring(1),i=e.split("&"),o=0;o<i.length;o++){var n=i[o].split("=");if(n[0]==t)return n[1]}return!1},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.list=[],t.resetUpScroll()},upCallback:function(t){t.num,t.size;var e=this;e.init(t)},topClick:function(){t.log("点击了回到顶部按钮")},init:function(e){var i=this,o={type:1,pageNo:e.num},a={url:"/api/gzh/productList",data:o,success:function(o){if(t.log(o),0==o.data.result)for(var n=0;n<o.data.dataList.length;n++)i.list.push(o.data.dataList[n]);var a=o.data.dataList,s=o.data.totalPage;e.endByPage(a.length,s)}};(0,n.ajax)(a)},goDetail:function(t){uni.navigateTo({url:"../shopDetail/shopDetail?id="+t})}}};e.default=s}).call(this,i("5a52")["default"])}}]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jianbao/jianbao"],{1623:function(t,e,n){"use strict";var o=n("4ca0"),a=n.n(o);a.a},4885:function(t,e,n){"use strict";(function(t){n("80ed"),n("921b");o(n("66fd"));var e=o(n("ba02"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"4ca0":function(t,e,n){},"90d4":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("c48d"),a=i(n("4870")),l=i(n("741d"));function i(t){return t&&t.__esModule?t:{default:t}}var c=function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"c64d"))},u={data:function(){return{url:l.default.baseUrl,list:[],totalPage:2,mescroll:null,downOption:{use:!0,auto:!0,autoShowLoading:!0,isLock:!1,isBoth:!0,offset:80,inOffsetRate:1,outOffsetRate:.2,bottomOffset:20,minAngle:45,textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ..."},upOption:{use:!0,auto:!0,isLock:!1,isBoth:!0,page:{num:0,size:8,time:null},noMoreSize:5,textLoading:"加载中 ...",textNoMore:"-- 没有更多数据 --",toTop:{src:"http://www.mescroll.com/img/mescroll-totop.png",offset:1e3,duration:300},empty:{use:!0,icon:"http://www.mescroll.com/img/mescroll-empty.png",tip:"还没有新的数据"}}}},components:{MescrollUni:c},onLoad:function(){},onUnload:function(){this.mescroll=null},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},methods:{mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.list=[],t.resetUpScroll()},upCallback:function(t){var e=t.num,n=t.size,l=this,i={pageNum:e,pageSize:n};a.default.showLoading("加载中...");var c={url:"/news/inspec",data:i,header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(e){if(console.log(e),1==e.data.success&&(a.default.hideLoading(),e.data.body.pageInfo.list)){var n=e.data.body.pageInfo.list;n.forEach(function(t){t.title=l.unescape(t.title),t.intro=l.unescape(t.intro),l.list.push(t)})}void 0==e.data.body.pageInfo.list&&(e.data.body.pageInfo.list=[]);var o=e.data.body.pageInfo.list,i=e.data.body.pageInfo.pages;t.endByPage(o.length,i)}};(0,o.ajax)(c)},topClick:function(){console.log("点击了回到顶部按钮")},unescape:function(t){return t.replace(t?/&(?!#?\w+;)/g:/&/g,"&amp;").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&#39;/g,"'")},goDetail:function(e){var n={title:e.title,publisher:e.publisher,createDate:e.createDate,url:e.url};t.navigateTo({url:"../news/news?list="+JSON.stringify(n)})}}};e.default=u}).call(this,n("543d")["default"])},"939c":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},ba02:function(t,e,n){"use strict";n.r(e);var o=n("939c"),a=n("f826");for(var l in a)"default"!==l&&function(t){n.d(e,t,function(){return a[t]})}(l);n("1623");var i=n("2877"),c=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports},f826:function(t,e,n){"use strict";n.r(e);var o=n("90d4"),a=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);e["default"]=a.a}},[["4885","common/runtime","common/vendor"]]]);
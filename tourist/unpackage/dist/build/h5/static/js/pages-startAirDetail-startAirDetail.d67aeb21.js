(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-startAirDetail-startAirDetail"],{"1c33":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,"uni-page-body[data-v-799f61af]{width:100%;height:100%;background:#f9f9f9;position:relative}.contain[data-v-799f61af]{width:100%;height:100%}.top[data-v-799f61af]{width:100%;height:%?300?%;background-image:-webkit-linear-gradient(top,#e02b11,#f75f33);position:fixed;top:0;left:0;z-index:99;padding:0 %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box}.title[data-v-799f61af]{width:100%;height:50px;line-height:50px;text-align:center;font-size:15px;color:#fff;position:relative}.back[data-v-799f61af]{position:absolute;left:0}.current[data-v-799f61af]{width:100%;height:%?40?%;text-align:center;font-size:15px;color:#fff}.detail[data-v-799f61af]{position:absolute;width:100%;padding:%?30?%;left:0;top:%?70?%;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:999;box-sizing:border-box}.wrapper[data-v-799f61af]{width:100%;background:#fff;border-radius:4px}.choiceTitle[data-v-799f61af]{width:100%;height:%?80?%;font-size:14px;color:#999;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.clock[data-v-799f61af]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:14px;color:#333;padding:0 %?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:%?20?%}.start[data-v-799f61af]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.time[data-v-799f61af]{font-size:18px}.start>img[data-v-799f61af]{width:%?280?%;margin-top:%?10?%}.bottomList[data-v-799f61af]{height:%?80?%;line-height:%?80?%;text-align:center;font-size:12px;color:#999;margin-top:%?16?%}.result[data-v-799f61af]{width:100%;position:absolute;top:%?400?%;bottom:0;left:0;right:0;z-index:9999;padding:0 %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff;border-radius:4px}.airs-list[data-v-799f61af]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:%?20?% 0;border-bottom:1px solid #eee}.airs-list[data-v-799f61af]:last-child{border-bottom:none}.airs-top[data-v-799f61af]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.air-btns[data-v-799f61af]{padding:%?6?% %?40?%;background:#e02b11;border-radius:4px;font-size:14px;color:#fff}.airs-mark[data-v-799f61af]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:12px;color:#e02b11;margin:%?16?% 0}.airs-mark>uni-view[data-v-799f61af]{padding:%?2?% %?20?%;border:1px solid #e02b11;border-radius:4px;margin-right:%?20?%}.recommend[data-v-799f61af]{width:100%;font-size:14px;color:#333;margin-top:%?10?%;color:#999}body.?%PAGE?%[data-v-799f61af]{background:#f9f9f9}",""])},"5e7d":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"contain"},[a("v-uni-view",{staticClass:"top"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-text",{staticClass:"cuIcon-back back",on:{click:function(i){i=t.$handleEvent(i),t.back(i)}}}),a("v-uni-view",{staticClass:"current"},[t._v(t._s(t.date1)+" "+t._s(t.day1))])],1)],1),a("v-uni-view",{staticClass:"detail"},[a("v-uni-view",{staticClass:"wrapper"},[a("v-uni-view",{staticClass:"choiceTitle"},[a("v-uni-view",[t._v(t._s(t.choiceDate))]),a("v-uni-view",{staticStyle:{"margin-left":"20upx"}},[t._v(t._s(t.city1)+"-"+t._s(t.city2))])],1),a("v-uni-view",{staticClass:"clock"},[a("v-uni-view",{staticClass:"start"},[a("v-uni-view",{staticClass:"time"},[t._v(t._s(t.list.DepartTime))]),a("v-uni-view",[t._v(t._s(t.list.DepartAirportName.indexOf("国")>-1?t.list.DepartAirportName.substr(0,t.list.DepartAirportName.indexOf("国")):t.list.DepartAirportName)+t._s(t.list.DepartAirportTerminal))])],1),a("v-uni-view",{staticClass:"start"},[a("v-uni-view",{staticStyle:{"font-size":"12px"}},[t._v(t._s(t.list.Duration))]),a("img",{attrs:{src:e("fa2f"),alt:""}})],1),a("v-uni-view",{staticClass:"start"},[a("v-uni-view",{staticClass:"time"},[t._v(t._s(t.list.ArriveTime))]),a("v-uni-view",[t._v(t._s(t.list.ArriveAirportName.indexOf("国")>-1?t.list.ArriveAirportName.substr(0,t.list.ArriveAirportName.indexOf("国")):t.list.ArriveAirportName)+t._s(t.list.ArriveAirportTerminal))])],1)],1),a("v-uni-view",{staticClass:"bottomList"},[t._v(t._s(t.list.AirCompanyName)+t._s(t.list.FlightNo)+" | "+t._s(t.list.PlaneType))])],1)],1),a("v-uni-view",{staticClass:"result"},[a("v-uni-scroll-view",{staticClass:"airs",staticStyle:{height:"100%"},attrs:{"scroll-y":"","scroll-with-animation":""}},t._l(t.list.Cabins,function(i,e){return a("v-uni-view",{key:e,staticClass:"airs-list"},[a("v-uni-view",{staticClass:"airs-top"},[a("v-uni-view",{staticClass:"airs-price"},[a("v-uni-view",{staticStyle:{"font-size":"20px",color:"#E02B11"}},[t._v("￥"+t._s(i.Fare))]),0!=i.BabyFare?a("v-uni-view",{staticStyle:{"font-size":"12px",color:"#999"}},[t._v("婴儿"),a("v-uni-text",{staticStyle:{color:"#E02B11"}},[t._v("￥"+t._s(i.BabyFare))])],1):t._e()],1),a("v-uni-view",{staticClass:"air-btns",on:{click:function(i){i=t.$handleEvent(i),t.goOrder(e)}}},[t._v("预定")])],1),a("v-uni-view",{staticClass:"airs-mark"},[a("v-uni-view",[t._v("极速出票")]),a("v-uni-view",[t._v("实时政策")])],1),i.Discount>=100?t._e():a("v-uni-view",{staticClass:"recommend"},[t._v(t._s(i.CabinName)+t._s(i.Discount/100)+"折")])],1)}),1)],1)],1)},s=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return s})},"631f":function(t,i,e){var a=e("1c33");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("4011ca5e",a,!0,{sourceMap:!1,shadowMode:!1})},"671e":function(t,i,e){"use strict";e.r(i);var a=e("5e7d"),s=e("d5e6");for(var n in s)"default"!==n&&function(t){e.d(i,t,function(){return s[t]})}(n);e("6cb2");var r=e("2877"),o=Object(r["a"])(s["default"],a["a"],a["b"],!1,null,"799f61af",null);i["default"]=o.exports},"6cb2":function(t,i,e){"use strict";var a=e("631f"),s=e.n(a);s.a},bbf9:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{city1:"",city2:"",choiceDate:"",list:[],index:0}},computed:{date1:function(){return this.$store.state.date1},day1:function(){return this.$store.state.day1}},onLoad:function(t){if(this.getRequest("uid")){var i=this.getRequest("uid");this.$store.commit("changeUid",i)}this.choiceDate=t.date;var e=JSON.parse(t.list);this.list=e[t.index],console.log(this.list),this.$store.commit("changeListStart",JSON.stringify(e[t.index]))},onReady:function(){var t=this.$store.state.city1,i=this.$store.state.city2;this.city1=t,this.city2=i},methods:{getRequest:function(t){for(var i=window.location.search.substring(1),e=i.split("&"),a=0;a<e.length;a++){var s=e[a].split("=");if(s[0]==t)return s[1]}return!1},back:function(){uni.navigateBack({delta:1})},goOrder:function(t){uni.navigateTo({url:"../airEnd/airEnd?index="+t+"&airCompany="+this.list.AirCompanyCode})}}};i.default=a},d5e6:function(t,i,e){"use strict";e.r(i);var a=e("bbf9"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,function(){return a[t]})}(n);i["default"]=s.a},fa2f:function(t,i){t.exports="data:image/png;base64,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"}}]);
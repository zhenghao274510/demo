(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-no-no"],{"35a9":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},onLoad:function(){if(this.getRequest("uid")){var t=this.getRequest("uid");this.$store.commit("changeUid",t);var e=this,i={uid:this.$store.state.uid},n={url:"/api/gzh/index",data:i,success:function(t){console.log(t),0==t.data.result&&(e.$store.commit("changeVip",t.data.vipType),e.$store.commit("changeCustomer",t.data.customer))}};ajax(n)}},onReady:function(){},methods:{getRequest:function(t){for(var e=window.location.search.substring(1),i=e.split("&"),n=0;n<i.length;n++){var a=i[n].split("=");if(a[0]==t)return a[1]}return!1}}};e.default=n},4343:function(t,e,i){"use strict";var n=i("4610"),a=i.n(n);a.a},4610:function(t,e,i){var n=i("6282");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("dc0b0ec0",n,!0,{sourceMap:!1,shadowMode:!1})},6282:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-c1e6a6d6]{width:100%;height:100%}.contain[data-v-c1e6a6d6]{width:100%;height:100%;background:#fff}.list[data-v-c1e6a6d6]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:15px;color:#999}.list>img[data-v-c1e6a6d6]{width:50%;margin-bottom:%?30?%}",""])},"73d2":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"contain"},[n("v-uni-view",{staticClass:"list"},[n("img",{attrs:{src:i("c48a"),alt:""}}),n("v-uni-view",[t._v("暂未开通，敬请期待！")])],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},ae81:function(t,e,i){"use strict";i.r(e);var n=i("73d2"),a=i("c9b3");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("4343");var c=i("2877"),r=Object(c["a"])(a["default"],n["a"],n["b"],!1,null,"c1e6a6d6",null);e["default"]=r.exports},c48a:function(t,e,i){t.exports=i.p+"static/img/none.153a9d33.png"},c9b3:function(t,e,i){"use strict";i.r(e);var n=i("35a9"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a}}]);
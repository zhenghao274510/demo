(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-productDetail-productDetail"],{"01e9":function(t,i,e){"use strict";e.r(i);var n=e("5c10"),a=e("258f");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("cab7");var o,s=e("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"b5a02ffc",null,!1,n["a"],o);i["default"]=c.exports},1297:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={showToast:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none",e=arguments.length>2?arguments[2]:void 0;uni.showToast({title:t,icon:i,duration:2e3,mask:!0,success:e})},hideToast:function(){uni.hideToast()},showLoading:function(t,i){uni.showLoading({title:t,mask:!0,success:i})},hideLoading:function(){uni.hideLoading()}},a=n;i.default=a},"18af":function(t,i,e){"use strict";e.r(i);var n=e("8bcd"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},"258f":function(t,i,e){"use strict";e.r(i);var n=e("3715"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},3715:function(t,i,e){"use strict";e("c975"),e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"u-swiper",props:{list:{type:Array,default:function(){return[]}},title:{type:Boolean,default:!1},indicator:{type:Object,default:function(){return{}}},borderRadius:{type:[Number,String],default:8},interval:{type:[String,Number],default:3e3},mode:{type:String,default:"round"},height:{type:[Number,String],default:250},indicatorPos:{type:String,default:"bottomCenter"},effect3d:{type:Boolean,default:!1},effect3dPreviousMargin:{type:[Number,String],default:50},autoplay:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},circular:{type:Boolean,default:!0},imgMode:{type:String,default:"aspectFill"},name:{type:String,default:"image"},bgColor:{type:String,default:"#f3f4f6"},current:{type:[Number,String],default:0},titleStyle:{type:Object,default:function(){return{}}}},watch:{list:function(t,i){t.length!==i.length&&(this.uCurrent=0)},current:function(t){this.uCurrent=t}},data:function(){return{uCurrent:this.current}},computed:{justifyContent:function(){return"topLeft"==this.indicatorPos||"bottomLeft"==this.indicatorPos?"flex-start":"topCenter"==this.indicatorPos||"bottomCenter"==this.indicatorPos?"center":"topRight"==this.indicatorPos||"bottomRight"==this.indicatorPos?"flex-end":void 0},titlePaddingBottom:function(){var t=0;return"none"==this.mode?"12rpx":(t=["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"==this.mode?"60rpx":["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"!=this.mode?"40rpx":"12rpx",t)},elCurrent:function(){return Number(this.current)}},methods:{listClick:function(t){this.$emit("click",t)},change:function(t){var i=t.detail.current;this.uCurrent=i,this.$emit("change",i)},animationfinish:function(t){}}};i.default=n},"42d5":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-swiper-wrap[data-v-b5a02ffc]{position:relative;overflow:hidden;-webkit-transform:translateY(0);transform:translateY(0)}.u-swiper-image[data-v-b5a02ffc]{width:100%;will-change:transform;height:100%;display:block;pointer-events:none}.u-swiper-indicator[data-v-b5a02ffc]{padding:0 %?24?%;position:absolute;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\nwidth:100%;z-index:1}.u-indicator-item-rect[data-v-b5a02ffc]{width:%?26?%;height:%?8?%;margin:0 %?6?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-rect-active[data-v-b5a02ffc]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-dot[data-v-b5a02ffc]{width:%?14?%;height:%?14?%;margin:0 %?6?%;-webkit-border-radius:%?20?%;border-radius:%?20?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-dot-active[data-v-b5a02ffc]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-round[data-v-b5a02ffc]{width:%?14?%;height:%?14?%;margin:0 %?6?%;-webkit-border-radius:%?20?%;border-radius:%?20?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-round-active[data-v-b5a02ffc]{width:%?34?%;background-color:hsla(0,0%,100%,.8)}.u-indicator-item-number[data-v-b5a02ffc]{padding:%?6?% %?16?%;line-height:1;background-color:rgba(0,0,0,.3);-webkit-border-radius:%?100?%;border-radius:%?100?%;font-size:%?26?%;color:hsla(0,0%,100%,.8)}.u-list-scale[data-v-b5a02ffc]{-webkit-transform-origin:center center;transform-origin:center center}.u-list-image-wrap[data-v-b5a02ffc]{width:100%;height:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-transition:all .5s;transition:all .5s;overflow:hidden;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative}.u-swiper-title[data-v-b5a02ffc]{position:absolute;background-color:rgba(0,0,0,.3);bottom:0;left:0;width:100%;font-size:%?28?%;padding:%?12?% %?24?%;color:hsla(0,0%,100%,.9)}.u-swiper-item[data-v-b5a02ffc]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\noverflow:hidden;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=i},"4aae":function(t,i,e){var n=e("42d5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("c0f6abc0",n,!0,{sourceMap:!1,shadowMode:!1})},"5c10":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-swiper-wrap",style:{borderRadius:t.borderRadius+"rpx"}},[e("v-uni-swiper",{style:{height:t.height+"rpx",backgroundColor:t.bgColor},attrs:{current:t.elCurrent,interval:t.interval,circular:t.circular,duration:t.duration,autoplay:t.autoplay,"previous-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0","next-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)},animationfinish:function(i){arguments[0]=i=t.$handleEvent(i),t.animationfinish.apply(void 0,arguments)}}},t._l(t.list,(function(i,n){return e("v-uni-swiper-item",{key:n,staticClass:"u-swiper-item"},[e("v-uni-view",{staticClass:"u-list-image-wrap",class:[t.uCurrent!=n?"u-list-scale":""],style:{borderRadius:t.borderRadius+"rpx",transform:t.effect3d&&t.uCurrent!=n?"scaleY(0.9)":"scaleY(1)",margin:t.effect3d&&t.uCurrent!=n?"0 20rpx":0},on:{click:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.listClick(n)}}},[e("v-uni-image",{staticClass:"u-swiper-image",attrs:{src:i[t.name]||i,mode:t.imgMode}}),t.title&&i.title?e("v-uni-view",{staticClass:"u-swiper-title u-line-1",style:[{"padding-bottom":t.titlePaddingBottom},t.titleStyle]},[t._v(t._s(i.title))]):t._e()],1)],1)})),1),e("v-uni-view",{staticClass:"u-swiper-indicator",style:{top:"topLeft"==t.indicatorPos||"topCenter"==t.indicatorPos||"topRight"==t.indicatorPos?"12rpx":"auto",bottom:"bottomLeft"==t.indicatorPos||"bottomCenter"==t.indicatorPos||"bottomRight"==t.indicatorPos?"12rpx":"auto",justifyContent:t.justifyContent,padding:"0 "+(t.effect3d?"74rpx":"24rpx")}},["rect"==t.mode?t._l(t.list,(function(i,n){return e("v-uni-view",{key:n,staticClass:"u-indicator-item-rect",class:{"u-indicator-item-rect-active":n==t.uCurrent}})})):t._e(),"dot"==t.mode?t._l(t.list,(function(i,n){return e("v-uni-view",{key:n,staticClass:"u-indicator-item-dot",class:{"u-indicator-item-dot-active":n==t.uCurrent}})})):t._e(),"round"==t.mode?t._l(t.list,(function(i,n){return e("v-uni-view",{key:n,staticClass:"u-indicator-item-round",class:{"u-indicator-item-round-active":n==t.uCurrent}})})):t._e(),"number"==t.mode?[e("v-uni-view",{staticClass:"u-indicator-item-number"},[t._v(t._s(t.uCurrent+1)+"/"+t._s(t.list.length))])]:t._e()],2)],1)},r=[]},"71c4":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}));var n={uSwiper:e("01e9").default,uParse:e("7018").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"contain"},[e("v-uni-view",{staticClass:"fixed"},[e("cu-custom",{attrs:{isBacks:!0,bgColor:"#333",Bg:t.Bg},on:{goBack:function(i){arguments[0]=i=t.$handleEvent(i),t.goBack.apply(void 0,arguments)}}},[e("template",{attrs:{slot:"content"},slot:"content"},[e("v-uni-view",{staticStyle:{color:"#333"}},[t._v("商品详情")])],1)],2)],1),e("v-uni-view",{staticClass:"banner"},[e("u-swiper",{attrs:{list:t.obj.images,"border-radius":"0",height:"680"}}),e("v-uni-view",{staticClass:"product"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.obj.name))]),e("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(t.obj.price))]),e("v-uni-view",{staticClass:"content"},[t._v(t._s(t.obj.descs))])],1),e("v-uni-view",{staticClass:"produce"},[e("u-parse",{attrs:{content:t.obj.content}})],1)],1),e("v-uni-view",{staticClass:"bottom"},[e("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(t.obj.price))]),e("v-uni-view",{staticClass:"buy",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goBuy.apply(void 0,arguments)}}},[t._v("购买")])],1)],1)},r=[]},7978:function(t,i,e){"use strict";e.r(i);var n=e("71c4"),a=e("18af");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("fe68");var o,s=e("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"5defb990",null,!1,n["a"],o);i["default"]=c.exports},"8bcd":function(t,i,e){"use strict";var n=e("4ea4");e("ac1f"),e("1276"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("ff68")),r=(n(e("1297")),e("527e")),o=window.location.href.split("#")[0],s={data:function(){return{Bg:"#ffffff",style:{div:"color: #333;font-size:30rpx;margin-bottom:20rpx;line-height:18px;",span:"font-size: 30rpx",img:"margin-bottom:20rpx;"},obj:{},ids:"",type:0}},components:{uParse:a.default},onLoad:function(t){var i=this;t.type&&(this.type=1),this.ids=t.id,uni.setStorageSync("addressId",""),this.$u.post("getgoodsarticledetail",{goodsid:t.id}).then((function(t){console.log(t),0==t.result&&(i.obj=t.dataobject)}))},onShow:function(){this.shareFilm()},methods:{goBack:function(){(this.type=1)?uni.reLaunch({url:"/pages/article/article?nav=4"}):uni.navigateBack({delta:1})},goBuy:function(){uni.getStorageSync("uid")?uni.navigateTo({url:"/pages/address/address?goodsid="+this.obj.goodsid+"&price="+this.obj.price}):this.$u.post("weixinlogin?type=1").then((function(t){console.log(t)}))},shareFilm:function(){var t=this;uni.request({url:"http://integral.dazhoutian.net:8080/integralwall/api/wxShare",method:"POST",header:{"content-type":"application/json;charset=UTF-8"},data:{url:o},success:function(i){console.log(i);var e=t;r.config({debug:!1,appId:i.data.appId,timestamp:i.data.timestamp,nonceStr:i.data.nonceStr,signature:i.data.signature,surl:o,jsApiList:["updateAppMessageShareData","updateTimelineShareData"]}),r.ready((function(){r.updateAppMessageShareData({title:e.obj.name,desc:e.obj.descs,link:"http://integral.dazhoutian.net/integralwall/home/pages/productDetail/productDetail?id="+e.ids+"&type=1",imgUrl:"http://integral.dazhoutian.net/integralwall/userfiles/files/logo.jpg",success:function(){},cancel:function(){}}),r.updateTimelineShareData({title:e.obj.name,link:"http://integral.dazhoutian.net/integralwall/home/pages/productDetail/productDetail?id="+e.ids+"&type=1",imgUrl:"http://integral.dazhoutian.net/integralwall/userfiles/files/logo.jpg",success:function(){},cancel:function(){}})}))},fail:function(){console.log("request fail",err)},complete:function(){}})}}};i.default=s},a8f9:function(t,i,e){var n=e("f626");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("5e156538",n,!0,{sourceMap:!1,shadowMode:!1})},cab7:function(t,i,e){"use strict";var n=e("4aae"),a=e.n(n);a.a},f626:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.contain[data-v-5defb990]{width:100%;min-height:100vh;background:#f6f6f6;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.contain .fixed[data-v-5defb990]{width:100%}.contain .banner[data-v-5defb990]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.contain .banner .product[data-v-5defb990]{width:100%;padding:0 %?28?%;-webkit-box-sizing:border-box;box-sizing:border-box}.contain .banner .product .title[data-v-5defb990]{width:100%;font-size:%?30?%;font-weight:600;color:#333;margin:%?30?% 0}.contain .banner .product .price[data-v-5defb990]{width:100%;font-size:%?30?%;font-weight:600;color:#fe5f23;margin-bottom:%?30?%}.contain .banner .product .content[data-v-5defb990]{width:100%;font-size:%?28?%;color:#999;line-height:20px;margin-bottom:%?30?%}.contain .banner .produce[data-v-5defb990]{width:100%;padding:%?28?%;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff;margin-bottom:%?120?%}.contain .bottom[data-v-5defb990]{position:fixed;left:0;bottom:0;width:100%;height:%?90?%;background:#fff;-webkit-box-shadow:0 1px 5px rgba(0,0,0,.2);box-shadow:0 1px 5px rgba(0,0,0,.2);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?28?%;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:999}.contain .bottom .price[data-v-5defb990]{font-size:%?30?%;font-weight:600;color:#fe5f23}.contain .bottom .buy[data-v-5defb990]{width:%?160?%;height:%?70?%;line-height:%?70?%;background:#fe5f23;-webkit-border-radius:4px;border-radius:4px;font-size:%?28?%;color:#fff;text-align:center}',""]),t.exports=i},fe68:function(t,i,e){"use strict";var n=e("a8f9"),a=e.n(n);a.a}}]);
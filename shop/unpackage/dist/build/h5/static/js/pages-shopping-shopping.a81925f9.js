(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shopping-shopping"],{"0174":function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"contain"},[i("v-uni-view",{staticClass:"fixed"},[i("cu-custom",{attrs:{isBack:!1,Color:e.Color,isIcon:!0,bgColor:"bg-shadeTop text-white",backColor:e.backColor}},[i("template",{attrs:{slot:"backText"},slot:"backText"}),i("template",{attrs:{slot:"content"},slot:"content"},[e._v("代理商")]),i("template",{attrs:{slot:"right"},slot:"right"},[i("v-uni-view",{staticClass:"mine",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goOpen.apply(void 0,arguments)}}},[e._v("我要推广")])],1)],2)],1),i("v-uni-view",{staticClass:"wrapper"},[i("img",{staticClass:"bg",attrs:{src:n("f767"),alt:""}}),i("v-uni-view",{staticClass:"lists"},[i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"total"},[e._v("我的代理总人数")]),i("v-uni-view",{staticClass:"num"},[e._v(e._s(e.total))])],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"tab"},e._l(e.tab,function(t,n){return i("v-uni-view",{key:n,staticClass:"tab-item",class:e.itemIndex==n?"active":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.change(n)}}},[e._v(e._s(t.name)+"("+e._s(0==n?e.num1:e.num2)+")")])}),1),i("mescroll-uni",{staticStyle:{width:"100%"},attrs:{down:e.downOption,up:e.upOption},on:{down:function(t){arguments[0]=t=e.$handleEvent(t),e.downCallback.apply(void 0,arguments)},up:function(t){arguments[0]=t=e.$handleEvent(t),e.upCallback.apply(void 0,arguments)},init:function(t){arguments[0]=t=e.$handleEvent(t),e.mescrollInit.apply(void 0,arguments)},emptyclick:function(t){arguments[0]=t=e.$handleEvent(t),e.emptyClick.apply(void 0,arguments)},topclick:function(t){arguments[0]=t=e.$handleEvent(t),e.topClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"report"},e._l(e.list,function(t,n){return i("v-uni-view",{key:n,staticClass:"report-list"},[i("v-uni-view",{staticClass:"report-left"},[i("img",{attrs:{src:t.icon,alt:""}}),i("v-uni-view",{staticClass:"msg"},[i("v-uni-view",[e._v(e._s(t.nickname))]),i("v-uni-view",{staticStyle:{color:"24upx"}},[e._v("获得收益："+e._s(t.fee))])],1)],1),i("v-uni-view",{staticClass:"report-right"},[e._v("累计出货："),i("span",{staticStyle:{color:"red"}},[e._v("￥"+e._s(t.amount))])])],1)}),1)],1)],1)],1)],1),e.show?i("v-uni-view",{staticClass:"bgs",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goHide.apply(void 0,arguments)}}},[i("img",{attrs:{src:n("de52"),alt:""}})]):e._e()],1)},o=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return i})},"0487":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.contain[data-v-5f76eaba]{width:100%;min-height:100vh;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#ededed;position:relative}.contain .fixed[data-v-5f76eaba]{width:100%}.contain .fixed .mine[data-v-5f76eaba]{width:%?160?%;color:red;text-align:right}.contain .wrapper[data-v-5f76eaba]{width:100%;padding:0 %?28?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.contain .wrapper .bg[data-v-5f76eaba]{width:100%;height:%?260?%;border-radius:4px;margin-bottom:%?20?%}.contain .wrapper .lists[data-v-5f76eaba]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.contain .wrapper .lists .item[data-v-5f76eaba]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;border-radius:4px;margin:0 0 %?20?%;font-size:%?30?%;color:#111}.contain .wrapper .lists .item .total[data-v-5f76eaba]{width:100%;height:%?90?%;line-height:%?90?%;text-align:center;font-size:%?30?%;color:red}.contain .wrapper .lists .item .num[data-v-5f76eaba]{font-size:%?80?%;color:#111;margin-bottom:%?30?%}.contain .wrapper .lists .item .tab[data-v-5f76eaba]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% 0}.contain .wrapper .lists .item .tab .tab-item[data-v-5f76eaba]{width:50%;height:%?60?%;line-height:%?60?%;text-align:center;font-size:%?30?%;color:#999}.contain .wrapper .lists .item .tab .tab-item.active[data-v-5f76eaba]{color:#111}.contain .wrapper .lists .item .tab .tab-item[data-v-5f76eaba]:first-child{border-right:1px solid #eee}.contain .wrapper .lists .item .report[data-v-5f76eaba]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.contain .wrapper .lists .item .report .report-list[data-v-5f76eaba]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?24?% %?40?%;box-sizing:border-box}.contain .wrapper .lists .item .report .report-list .report-left[data-v-5f76eaba]{display:-webkit-box;display:-webkit-flex;display:flex}.contain .wrapper .lists .item .report .report-list .report-left img[data-v-5f76eaba]{width:%?100?%;height:%?100?%;border-radius:50%;margin-right:%?24?%}.contain .wrapper .lists .item .report .report-list .report-left .msg[data-v-5f76eaba]{height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?30?%;color:#111}.contain .wrapper .lists .item .report .report-list .report-right[data-v-5f76eaba]{font-size:%?30?%;color:#111}.contain .bgs[data-v-5f76eaba]{width:100%;height:100vh;background:rgba(0,0,0,.5);position:fixed;left:0;top:0;z-index:9999;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.contain .bgs img[data-v-5f76eaba]{width:%?650?%;height:%?650?%}',""])},"2c28":function(e,t,n){"use strict";var i=n("288e"),a=i(n("bd86"));n("28a5"),n("4917");var o=i(n("f499"));n("a481"),function(t,n){e.exports=n(t)}(window,function(e,t){function n(t,n,i){e.WeixinJSBridge?WeixinJSBridge.invoke(t,r(n),function(e){s(t,e,i)}):d(t,i)}function i(t,n,i){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){i&&i.trigger&&i.trigger(e),s(t,e,n)}):d(t,i||n)}function r(e){return(e=e||{}).appId=C.appId,e.verifyAppId=C.appId,e.verifySignType="sha1",e.verifyTimestamp=C.timestamp+"",e.verifyNonceStr=C.nonceStr,e.verifySignature=C.signature,e}function c(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function s(e,t,n){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var i=t.errMsg;i||(i=t.err_msg,delete t.err_msg,i=function(e,t){var n=e,i=g[n];i&&(n=i);var a="ok";if(t){var o=t.indexOf(":");"confirm"==(a=t.substring(o+1))&&(a="ok"),"failed"==a&&(a="fail"),-1!=a.indexOf("failed_")&&(a=a.substring(7)),-1!=a.indexOf("fail_")&&(a=a.substring(5)),"access denied"!=(a=(a=a.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=a||(a="permission denied"),"config"==n&&"function not exist"==a&&(a="ok"),""==a&&(a="fail")}return n+":"+a}(e,i),t.errMsg=i),(n=n||{})._complete&&(n._complete(t),delete n._complete),i=t.errMsg||"",C.debug&&!n.isInnerInvoke&&alert((0,o.default)(t));var a=i.indexOf(":");switch(i.substring(a+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function l(e){if(e){for(var t=0,n=e.length;t<n;++t){var i=e[t],a=m[i];a&&(e[t]=a)}return e}}function d(e,t){if(!(!C.debug||t&&t.isInnerInvoke)){var n=g[e];n&&(e=n),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function u(){return(new Date).getTime()}function p(t){x&&(e.WeixinJSBridge?t():h.addEventListener&&h.addEventListener("WeixinJSBridgeReady",t,!1))}if(!e.jWeixin){var f,m={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},g=function(){var e={};for(var t in m)e[m[t]]=t;return e}(),h=e.document,w=h.title,v=navigator.userAgent.toLowerCase(),b=navigator.platform.toLowerCase(),y=!(!b.match("mac")&&!b.match("win")),k=-1!=v.indexOf("wxdebugger"),x=-1!=v.indexOf("micromessenger"),M=-1!=v.indexOf("android"),z=-1!=v.indexOf("iphone")||-1!=v.indexOf("ipad"),T=(W=v.match(/micromessenger\/(\d+\.\d+\.\d+)/)||v.match(/micromessenger\/(\d+\.\d+)/))?W[1]:"",S={initStartTime:u(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},I={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:z?1:M?2:-1,clientVersion:T,url:encodeURIComponent(location.href)},C={},A={_completes:[]},P={state:0,data:{}};p(function(){S.initEndTime=u()});var O=!1,L=[],V=(f={config:function(t){d("config",C=t);var i=!1!==C.check;p(function(){if(i)n(m.config,{verifyJsApiList:l(C.jsApiList)},function(){A._complete=function(e){S.preVerifyEndTime=u(),P.state=1,P.data=e},A.success=function(e){I.isPreVerifyOk=0},A.fail=function(e){A._fail?A._fail(e):P.state=-1};var e=A._completes;return e.push(function(){!function(e){if(!(y||k||C.debug||T<"6.0.2"||I.systemType<0)){var t=new Image;I.appId=C.appId,I.initTime=S.initEndTime-S.initStartTime,I.preVerifyTime=S.preVerifyEndTime-S.preVerifyStartTime,V.getNetworkType({isInnerInvoke:!0,success:function(e){I.networkType=e.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+I.version+"&o="+I.isPreVerifyOk+"&s="+I.systemType+"&c="+I.clientVersion+"&a="+I.appId+"&n="+I.networkType+"&i="+I.initTime+"&p="+I.preVerifyTime+"&u="+I.url;t.src=n}})}}()}),A.complete=function(t){for(var n=0,i=e.length;n<i;++n)e[n]();A._completes=[]},A}()),S.preVerifyStartTime=u();else{P.state=1;for(var e=A._completes,t=0,a=e.length;t<a;++t)e[t]();A._completes=[]}}),V.invoke||(V.invoke=function(t,n,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,r(n),i)},V.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})},ready:function(e){0!=P.state?e():(A._completes.push(e),!x&&C.debug&&e())},error:function(e){T<"6.0.2"||(-1==P.state?e(P.data):A._fail=e)},checkJsApi:function(e){n("checkJsApi",{jsApiList:l(e.jsApiList)},(e._complete=function(e){if(M){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var n in t){var i=g[n];i&&(t[i]=t[n],delete t[n])}return e}(e)},e))},onMenuShareTimeline:function(e){i(m.onMenuShareTimeline,{complete:function(){n("shareTimeline",{title:e.title||w,desc:e.title||w,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){i(m.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?n("sendAppMessage",{title:e.title||w,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):n("sendAppMessage",{title:e.title||w,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){i(m.onMenuShareQQ,{complete:function(){n("shareQQ",{title:e.title||w,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){i(m.onMenuShareWeibo,{complete:function(){n("shareWeiboApp",{title:e.title||w,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){i(m.onMenuShareQZone,{complete:function(){n("shareQZone",{title:e.title||w,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){n("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){n("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){n("startRecord",{},e)},stopRecord:function(e){n("stopRecord",{},e)},onVoiceRecordEnd:function(e){i("onVoiceRecordEnd",e)},playVoice:function(e){n("playVoice",{localId:e.localId},e)},pauseVoice:function(e){n("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){n("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){i("onVoicePlayEnd",e)},uploadVoice:function(e){n("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){n("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){n("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){n("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(M){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){n(m.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){n("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){n("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===O?(O=!0,n("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(O=!1,0<L.length){var t=L.shift();wx.getLocalImgData(t)}},e))):L.push(e)},getNetworkType:function(e){n("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var n=e.subtype;if(delete e.subtype,n)e.networkType=n;else{var i=t.indexOf(":"),a=t.substring(i+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){n("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},(0,a.default)(f,"getLocation",function(e){n(m.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))}),(0,a.default)(f,"hideOptionMenu",function(e){n("hideOptionMenu",{},e)}),(0,a.default)(f,"showOptionMenu",function(e){n("showOptionMenu",{},e)}),(0,a.default)(f,"closeWindow",function(e){n("closeWindow",{},e=e||{})}),(0,a.default)(f,"hideMenuItems",function(e){n("hideMenuItems",{menuList:e.menuList},e)}),(0,a.default)(f,"showMenuItems",function(e){n("showMenuItems",{menuList:e.menuList},e)}),(0,a.default)(f,"hideAllNonBaseMenuItem",function(e){n("hideAllNonBaseMenuItem",{},e)}),(0,a.default)(f,"showAllNonBaseMenuItem",function(e){n("showAllNonBaseMenuItem",{},e)}),(0,a.default)(f,"scanQRCode",function(e){n("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(z){var t=e.resultStr;if(t){var n=JSON.parse(t);e.resultStr=n&&n.scan_code&&n.scan_code.scan_result}}},e))}),(0,a.default)(f,"openAddress",function(e){n(m.openAddress,{},(e._complete=function(e){var t;(t=e).postalCode=t.addressPostalCode,delete t.addressPostalCode,t.provinceName=t.proviceFirstStageName,delete t.proviceFirstStageName,t.cityName=t.addressCitySecondStageName,delete t.addressCitySecondStageName,t.countryName=t.addressCountiesThirdStageName,delete t.addressCountiesThirdStageName,t.detailInfo=t.addressDetailInfo,delete t.addressDetailInfo,e=t},e))}),(0,a.default)(f,"openProductSpecificView",function(e){n(m.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)}),(0,a.default)(f,"addCard",function(e){for(var t=e.cardList,i=[],a=0,o=t.length;a<o;++a){var r=t[a],c={card_id:r.cardId,card_ext:r.cardExt};i.push(c)}n(m.addCard,{card_list:i},(e._complete=function(e){var t=e.card_list;if(t){for(var n=0,i=(t=JSON.parse(t)).length;n<i;++n){var a=t[n];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=t,delete e.card_list}},e))}),(0,a.default)(f,"chooseCard",function(e){n("chooseCard",{app_id:C.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))}),(0,a.default)(f,"openCard",function(e){for(var t=e.cardList,i=[],a=0,o=t.length;a<o;++a){var r=t[a],c={card_id:r.cardId,code:r.code};i.push(c)}n(m.openCard,{card_list:i},e)}),(0,a.default)(f,"consumeAndShareCard",function(e){n(m.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)}),(0,a.default)(f,"chooseWXPay",function(e){n(m.chooseWXPay,c(e),e)}),(0,a.default)(f,"openEnterpriseRedPacket",function(e){n(m.openEnterpriseRedPacket,c(e),e)}),(0,a.default)(f,"startSearchBeacons",function(e){n(m.startSearchBeacons,{ticket:e.ticket},e)}),(0,a.default)(f,"stopSearchBeacons",function(e){n(m.stopSearchBeacons,{},e)}),(0,a.default)(f,"onSearchBeacons",function(e){i(m.onSearchBeacons,e)}),(0,a.default)(f,"openEnterpriseChat",function(e){n("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)}),(0,a.default)(f,"launchMiniProgram",function(e){n("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var t=e.split("?")[0],n=e.split("?")[1];return t+=".html",void 0!==n?t+"?"+n:t}}(e.path),envVersion:e.envVersion},e)}),(0,a.default)(f,"miniProgram",{navigateBack:function(e){e=e||{},p(function(){n("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){p(function(){n("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){p(function(){n("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){p(function(){n("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){p(function(){n("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){p(function(){n("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(t){p(function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})})}}),f),J=1,N={};return h.addEventListener("error",function(e){if(!M){var t=e.target,n=t.tagName,i=t.src;if(("IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=t["wx-id"];if(a||(a=J++,t["wx-id"]=a),N[a])return;N[a]=!0,wx.ready(function(){wx.getLocalImgData({localId:i,success:function(e){t.src=e.localData}})})}}},!0),h.addEventListener("load",function(e){if(!M){var t=e.target,n=t.tagName;if(t.src,"IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){var i=t["wx-id"];i&&(N[i]=!1)}}},!0),t&&(e.wx=e.jWeixin=V),V}var W})},"3eaa":function(e,t,n){var i=n("0487");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("07132148",i,!0,{sourceMap:!1,shadowMode:!1})},"9a29":function(e,t,n){"use strict";var i=n("3eaa"),a=n.n(i);a.a},afeb:function(e,t,n){"use strict";n.r(t);var i=n("0174"),a=n("de0c");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("9a29");var r,c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"5f76eaba",null,!1,i["a"],r);t["default"]=s.exports},de0c:function(e,t,n){"use strict";n.r(t);var i=n("e94c"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},de52:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnMAAAJzCAMAAABTbmU8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEyREEzMDlGMzQzRTExRUFBQ0VFRjA0QzQ1MjlGMUVCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjEyREEzMEEwMzQzRTExRUFBQ0VFRjA0QzQ1MjlGMUVCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTJEQTMwOUQzNDNFMTFFQUFDRUVGMDRDNDUyOUYxRUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTJEQTMwOUUzNDNFMTFFQUFDRUVGMDRDNDUyOUYxRUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7mx+SbAAAABlBMVEX///8A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"},e94c:function(e,t,n){"use strict";var i=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("28a5");var a=i(n("2c28")),o=i(n("9ff2")),r=n("65dd"),c=i(n("ee67")),s={data:function(){return{Color:"#333",backColor:"#EDEDED",itemIndex:0,tab:[{name:"一级代理商",count:10},{name:"二级代理商",count:20}],num1:0,num2:0,total:0,list:[],type:1,show:!1,mescroll:null,downOption:{use:!0,auto:!0,autoShowLoading:!0,isLock:!1,isBoth:!0,offset:80,inOffsetRate:1,outOffsetRate:.2,bottomOffset:20,minAngle:45,textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ..."},upOption:{use:!0,auto:!0,isLock:!1,isBoth:!0,page:{num:0,size:10,time:null},noMoreSize:6,textLoading:"加载中 ...",textNoMore:"-- 没有更多数据 --",toTop:{src:"http://www.mescroll.com/img/mescroll-totop.png",offset:1e3,duration:300},empty:{use:!0,icon:"http://www.mescroll.com/img/mescroll-empty.png",tip:"还没有好友哦~~"},timer:null}}},components:{MescrollUni:c.default},onUnload:function(){this.mescroll=null,clearTimeout(this.timer)},onHide:function(){clearTimeout(this.timer)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},onPageScroll:function(e){this.mescroll&&this.mescroll.onPageScroll(e)},onShow:function(){var e=this;this.timer=setTimeout(function(){e.goFriend(),e.goShare()},800)},methods:{change:function(e){this.itemIndex=e,0==e?this.type=1:1==e&&(this.type=2),this.list=[],this.mescroll.resetUpScroll()},mescrollInit:function(e){this.mescroll=e},downCallback:function(e){this.list=[],this.mescroll.resetUpScroll()},upCallback:function(e){e.num,e.size;var t=this;t.init(e,this.type)},topClick:function(){console.log("点击了回到顶部按钮")},init:function(e,t){var n=this,i={uid:uni.getStorageSync("uid"),type:t,pageNo:e.num,pageSize:e.size},a={url:"/myFriends",data:i,success:function(t){if(console.log(t),0==t.data.result){if(n.total=t.data.members,n.num1=t.data.total1,n.num2=t.data.total2,t.data.dataList)for(var i=0;i<t.data.dataList.length;i++)n.list.push(t.data.dataList[i])}else o.default.showToast(t.data.resultNote);var a=[];t.data.dataList&&(a=t.data.dataList);var r=1;t.data.totalPage&&(r=t.data.totalPage),e.endByPage(a.length,r)}};(0,r.ajax)(a)},goFriend:function(){var e=this,t=window.location.href.split("#")[0],n={url:t},i={url:"/auth",data:n,success:function(t){if(0==t.data.result){var n=t.data.appId,i=t.data.timestamp,a=t.data.noncestr,o=t.data.signature;e.shareFriend(n,i,a,o)}}};(0,r.ajax)(i)},goShare:function(){var e=this,t=window.location.href.split("#")[0],n={url:t},i={url:"/auth",data:n,success:function(t){if(0==t.data.result){var n=t.data.appId,i=t.data.timestamp,a=t.data.noncestr,o=t.data.signature;e.shareMenu(n,i,a,o)}}};(0,r.ajax)(i)},shareFriend:function(e,t,n,i){a.default.config({debug:!1,appId:e,timestamp:t,nonceStr:n,signature:i,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage"]}),a.default.error(function(e){}),a.default.ready(function(){a.default.onMenuShareAppMessage({title:"邀请你加入货集集",desc:"高价收购货品的平台",link:"http://m.tfgwzz.com/oauth/oauth.html?uid="+uni.getStorageSync("uid"),imgUrl:"http://m.tfgwzz.com/logo.png",type:"link",dataUrl:"",success:function(){o.default.showToast("分享成功")},cancel:function(){o.default.showToast("分享失败")}})})},shareMenu:function(e,t,n,i){a.default.config({debug:!1,appId:e,timestamp:t,nonceStr:n,signature:i,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage"]}),a.default.error(function(e){}),a.default.ready(function(){a.default.onMenuShareTimeline({title:"邀请你加入货集集",link:"http://m.tfgwzz.com/oauth/oauth.html?uid="+uni.getStorageSync("uid"),imgUrl:"http://m.tfgwzz.com/logo.png",success:function(){o.default.showToast("分享成功")},cancel:function(){o.default.showToast("分享失败")}})})},goOpen:function(){this.show=!0},goHide:function(){this.show=!1}}};t.default=s},f767:function(e,t,n){e.exports=n.p+"static/img/tuiguang.9cc78603.png"}}]);
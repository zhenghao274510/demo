(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index~pages-map-map~pages-type-type~pages-type1-type1~pages-type2-type2~pages-type3-type~8c14f7a8"],{1003:function(t,e){function i(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function o(t,e,o){return e&&i(t.prototype,e),o&&i(t,o),t}t.exports=o},2408:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ajax1=e.ajax=void 0;var o=function(t){t=t||{},t.url=t.url||"",t.data=JSON.stringify(t.data)||{},t.method=t.method||"POST",t.header=t.header||{"Content-Type":"application/json"},t.success=t.success||function(){},t.fail=t.fail||function(){},console.log(t.data),uni.request({url:"https://www.paobuxiu.cn/runrepair"+t.url,data:t.data,method:t.method,header:t.header,dataType:"json",success:function(e){t.success(e)},fail:function(e){t.fail(e),uni.showToast({title:"请稍后重试",icon:"none"})}})};e.ajax=o;var n=function(t){t=t||{},t.url=t.url||"",t.data=JSON.stringify(t.data)||{},t.method=t.method||"POST",t.header=t.header||{"Content-Type":"application/json"},t.success=t.success||function(){},t.fail=t.fail||function(){},console.log(t.data),uni.request({url:t.url,data:t.data,method:t.method,header:t.header,dataType:"json",success:function(e){t.success(e)},fail:function(e){t.fail(e),uni.showToast({title:"请稍后重试",icon:"none"})}})};e.ajax1=n},"3f49":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={showToast:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none",i=arguments.length>2?arguments[2]:void 0;uni.showToast({title:t,icon:e,duration:2e3,mask:!0,success:i})},hideToast:function(){uni.hideToast()},showLoading:function(t,e){uni.showLoading({title:t,mask:!0,success:e})},hideLoading:function(){uni.hideLoading()}},n=o;e.default=n},"5dff":function(t,e,i){var o,n,s;i("99af"),i("4160"),i("a15b"),i("a9e3"),i("b64b"),i("d3b7"),i("ac1f"),i("25f0"),i("5319"),i("159b"),function(i,r){n=[],o=r,s="function"===typeof o?o.apply(e,n):o,void 0===s||(t.exports=s)}(0,(function(){
/**
   * Vue Jsonp By LancerComet at 16:35, 2016.10.17.
   * # Carry Your World #
   *
   * @author: LancerComet
   * @license: MIT
   */
var t=null,e={install:function(e,o){e.jsonp=i,e.prototype.$jsonp=i,"number"===typeof o&&(t=o)}};function i(e,i,r){return i=i||{},r=r||t,new Promise((function(t,a){if("string"!==typeof e)throw new Error('[Vue.jsonp] Type of param "url" is not string.');var l=i.callbackQuery||"callback",c=i.callbackName||"jsonp_"+o();i[l]=c,delete i.callbackQuery,delete i.callbackName;var d=[];Object.keys(i).forEach((function(t){d=d.concat(n(t,i[t]))}));var u=s(d).join("&"),f=null;"number"===typeof r&&(f=setTimeout((function(){p(),g.removeChild(h),delete window[c],a({statusText:"Request Timeout",status:408})}),r)),window[c]=function(e){clearTimeout(f),p(),g.removeChild(h),t(e),delete window[c]};var g=document.querySelector("head"),h=document.createElement("script");function m(t){p(),clearTimeout(f),a({status:400,statusText:"Bad Request"})}function p(){h.removeEventListener("error",m)}h.addEventListener("error",m),h.src=e+(/\?/.test(e)?"&":"?")+u,g.appendChild(h)}))}function o(){return(Math.floor(1e5*Math.random())*Date.now()).toString(16)}function n(t,e){t=t.replace(/=/g,"");var i=[];switch(e.constructor){case String:case Number:case Boolean:i.push(encodeURIComponent(t)+"="+encodeURIComponent(e));break;case Array:e.forEach((function(e){i=i.concat(n(t+"[]=",e))}));break;case Object:Object.keys(e).forEach((function(o){var s=e[o];i=i.concat(n(t+"["+o+"]",s))}));break}return i}function s(t){var e=[];return t.forEach((function(t){"string"===typeof t?e.push(t):e=e.concat(s(t))})),e}return e}))},a7e4:function(t,e,i){i("99af"),i("4de4"),i("4160"),i("a15b"),i("4e82"),i("b680"),i("b64b"),i("acd8"),i("ac1f"),i("1276"),i("159b");var o=i("df34"),n=i("1003"),s={KEY_ERR:311,KEY_ERR_MSG:"key格式错误",PARAM_ERR:310,PARAM_ERR_MSG:"请求参数信息有误",SYSTEM_ERR:600,SYSTEM_ERR_MSG:"系统错误",WX_ERR_CODE:1e3,WX_OK_CODE:200},r="https://apis.map.qq.com/ws/",a=r+"place/v1/search",l=r+"place/v1/suggestion",c=r+"geocoder/v1/",d=r+"district/v1/list",u=r+"district/v1/getchildren",f=r+"distance/v1/",g=r+"direction/v1/",h={driving:"driving",transit:"transit"},m=6378136.49,p={safeAdd:function(t,e){var i=(65535&t)+(65535&e),o=(t>>16)+(e>>16)+(i>>16);return o<<16|65535&i},bitRotateLeft:function(t,e){return t<<e|t>>>32-e},md5cmn:function(t,e,i,o,n,s){return this.safeAdd(this.bitRotateLeft(this.safeAdd(this.safeAdd(e,t),this.safeAdd(o,s)),n),i)},md5ff:function(t,e,i,o,n,s,r){return this.md5cmn(e&i|~e&o,t,e,n,s,r)},md5gg:function(t,e,i,o,n,s,r){return this.md5cmn(e&o|i&~o,t,e,n,s,r)},md5hh:function(t,e,i,o,n,s,r){return this.md5cmn(e^i^o,t,e,n,s,r)},md5ii:function(t,e,i,o,n,s,r){return this.md5cmn(i^(e|~o),t,e,n,s,r)},binlMD5:function(t,e){var i,o,n,s,r;t[e>>5]|=128<<e%32,t[14+(e+64>>>9<<4)]=e;var a=1732584193,l=-271733879,c=-1732584194,d=271733878;for(i=0;i<t.length;i+=16)o=a,n=l,s=c,r=d,a=this.md5ff(a,l,c,d,t[i],7,-680876936),d=this.md5ff(d,a,l,c,t[i+1],12,-389564586),c=this.md5ff(c,d,a,l,t[i+2],17,606105819),l=this.md5ff(l,c,d,a,t[i+3],22,-1044525330),a=this.md5ff(a,l,c,d,t[i+4],7,-176418897),d=this.md5ff(d,a,l,c,t[i+5],12,1200080426),c=this.md5ff(c,d,a,l,t[i+6],17,-1473231341),l=this.md5ff(l,c,d,a,t[i+7],22,-45705983),a=this.md5ff(a,l,c,d,t[i+8],7,1770035416),d=this.md5ff(d,a,l,c,t[i+9],12,-1958414417),c=this.md5ff(c,d,a,l,t[i+10],17,-42063),l=this.md5ff(l,c,d,a,t[i+11],22,-1990404162),a=this.md5ff(a,l,c,d,t[i+12],7,1804603682),d=this.md5ff(d,a,l,c,t[i+13],12,-40341101),c=this.md5ff(c,d,a,l,t[i+14],17,-1502002290),l=this.md5ff(l,c,d,a,t[i+15],22,1236535329),a=this.md5gg(a,l,c,d,t[i+1],5,-165796510),d=this.md5gg(d,a,l,c,t[i+6],9,-1069501632),c=this.md5gg(c,d,a,l,t[i+11],14,643717713),l=this.md5gg(l,c,d,a,t[i],20,-373897302),a=this.md5gg(a,l,c,d,t[i+5],5,-701558691),d=this.md5gg(d,a,l,c,t[i+10],9,38016083),c=this.md5gg(c,d,a,l,t[i+15],14,-660478335),l=this.md5gg(l,c,d,a,t[i+4],20,-405537848),a=this.md5gg(a,l,c,d,t[i+9],5,568446438),d=this.md5gg(d,a,l,c,t[i+14],9,-1019803690),c=this.md5gg(c,d,a,l,t[i+3],14,-187363961),l=this.md5gg(l,c,d,a,t[i+8],20,1163531501),a=this.md5gg(a,l,c,d,t[i+13],5,-1444681467),d=this.md5gg(d,a,l,c,t[i+2],9,-51403784),c=this.md5gg(c,d,a,l,t[i+7],14,1735328473),l=this.md5gg(l,c,d,a,t[i+12],20,-1926607734),a=this.md5hh(a,l,c,d,t[i+5],4,-378558),d=this.md5hh(d,a,l,c,t[i+8],11,-2022574463),c=this.md5hh(c,d,a,l,t[i+11],16,1839030562),l=this.md5hh(l,c,d,a,t[i+14],23,-35309556),a=this.md5hh(a,l,c,d,t[i+1],4,-1530992060),d=this.md5hh(d,a,l,c,t[i+4],11,1272893353),c=this.md5hh(c,d,a,l,t[i+7],16,-155497632),l=this.md5hh(l,c,d,a,t[i+10],23,-1094730640),a=this.md5hh(a,l,c,d,t[i+13],4,681279174),d=this.md5hh(d,a,l,c,t[i],11,-358537222),c=this.md5hh(c,d,a,l,t[i+3],16,-722521979),l=this.md5hh(l,c,d,a,t[i+6],23,76029189),a=this.md5hh(a,l,c,d,t[i+9],4,-640364487),d=this.md5hh(d,a,l,c,t[i+12],11,-421815835),c=this.md5hh(c,d,a,l,t[i+15],16,530742520),l=this.md5hh(l,c,d,a,t[i+2],23,-995338651),a=this.md5ii(a,l,c,d,t[i],6,-198630844),d=this.md5ii(d,a,l,c,t[i+7],10,1126891415),c=this.md5ii(c,d,a,l,t[i+14],15,-1416354905),l=this.md5ii(l,c,d,a,t[i+5],21,-57434055),a=this.md5ii(a,l,c,d,t[i+12],6,1700485571),d=this.md5ii(d,a,l,c,t[i+3],10,-1894986606),c=this.md5ii(c,d,a,l,t[i+10],15,-1051523),l=this.md5ii(l,c,d,a,t[i+1],21,-2054922799),a=this.md5ii(a,l,c,d,t[i+8],6,1873313359),d=this.md5ii(d,a,l,c,t[i+15],10,-30611744),c=this.md5ii(c,d,a,l,t[i+6],15,-1560198380),l=this.md5ii(l,c,d,a,t[i+13],21,1309151649),a=this.md5ii(a,l,c,d,t[i+4],6,-145523070),d=this.md5ii(d,a,l,c,t[i+11],10,-1120210379),c=this.md5ii(c,d,a,l,t[i+2],15,718787259),l=this.md5ii(l,c,d,a,t[i+9],21,-343485551),a=this.safeAdd(a,o),l=this.safeAdd(l,n),c=this.safeAdd(c,s),d=this.safeAdd(d,r);return[a,l,c,d]},binl2rstr:function(t){var e,i="",o=32*t.length;for(e=0;e<o;e+=8)i+=String.fromCharCode(t[e>>5]>>>e%32&255);return i},rstr2binl:function(t){var e,i=[];for(i[(t.length>>2)-1]=void 0,e=0;e<i.length;e+=1)i[e]=0;var o=8*t.length;for(e=0;e<o;e+=8)i[e>>5]|=(255&t.charCodeAt(e/8))<<e%32;return i},rstrMD5:function(t){return this.binl2rstr(this.binlMD5(this.rstr2binl(t),8*t.length))},rstrHMACMD5:function(t,e){var i,o,n=this.rstr2binl(t),s=[],r=[];for(s[15]=r[15]=void 0,n.length>16&&(n=this.binlMD5(n,8*t.length)),i=0;i<16;i+=1)s[i]=909522486^n[i],r[i]=1549556828^n[i];return o=this.binlMD5(s.concat(this.rstr2binl(e)),512+8*e.length),this.binl2rstr(this.binlMD5(r.concat(o),640))},rstr2hex:function(t){var e,i,o="0123456789abcdef",n="";for(i=0;i<t.length;i+=1)e=t.charCodeAt(i),n+=o.charAt(e>>>4&15)+o.charAt(15&e);return n},str2rstrUTF8:function(t){return unescape(encodeURIComponent(t))},rawMD5:function(t){return this.rstrMD5(this.str2rstrUTF8(t))},hexMD5:function(t){return this.rstr2hex(this.rawMD5(t))},rawHMACMD5:function(t,e){return this.rstrHMACMD5(this.str2rstrUTF8(t),str2rstrUTF8(e))},hexHMACMD5:function(t,e){return this.rstr2hex(this.rawHMACMD5(t,e))},md5:function(t,e,i){return e?i?this.rawHMACMD5(e,t):this.hexHMACMD5(e,t):i?this.rawMD5(t):this.hexMD5(t)},getSig:function(t,e,i,o){var n=null,s=[];return Object.keys(t).sort().forEach((function(e){s.push(e+"="+t[e])})),"search"==i&&(n="/ws/place/v1/search?"+s.join("&")+e),"suggest"==i&&(n="/ws/place/v1/suggestion?"+s.join("&")+e),"reverseGeocoder"==i&&(n="/ws/geocoder/v1/?"+s.join("&")+e),"geocoder"==i&&(n="/ws/geocoder/v1/?"+s.join("&")+e),"getCityList"==i&&(n="/ws/district/v1/list?"+s.join("&")+e),"getDistrictByCityId"==i&&(n="/ws/district/v1/getchildren?"+s.join("&")+e),"calculateDistance"==i&&(n="/ws/distance/v1/?"+s.join("&")+e),"direction"==i&&(n="/ws/direction/v1/"+o+"?"+s.join("&")+e),n=this.md5(n),n},location2query:function(t){if("string"==typeof t)return t;for(var e="",i=0;i<t.length;i++){var o=t[i];e&&(e+=";"),o.location&&(e=e+o.location.lat+","+o.location.lng),o.latitude&&o.longitude&&(e=e+o.latitude+","+o.longitude)}return e},rad:function(t){return t*Math.PI/180},getEndLocation:function(t){for(var e=t.split(";"),i=[],o=0;o<e.length;o++)i.push({lat:parseFloat(e[o].split(",")[0]),lng:parseFloat(e[o].split(",")[1])});return i},getDistance:function(t,e,i,o){var n=this.rad(t),s=this.rad(i),r=n-s,a=this.rad(e)-this.rad(o),l=2*Math.asin(Math.sqrt(Math.pow(Math.sin(r/2),2)+Math.cos(n)*Math.cos(s)*Math.pow(Math.sin(a/2),2)));return l*=m,l=Math.round(1e4*l)/1e4,parseFloat(l.toFixed(0))},getWXLocation:function(t,e,i){wx.getLocation({type:"gcj02",success:t,fail:e,complete:i})},getLocationParam:function(t){if("string"==typeof t){var e=t.split(",");t=2===e.length?{latitude:t.split(",")[0],longitude:t.split(",")[1]}:{}}return t},polyfillParam:function(t){t.success=t.success||function(){},t.fail=t.fail||function(){},t.complete=t.complete||function(){}},checkParamKeyEmpty:function(t,e){if(!t[e]){var i=this.buildErrorConfig(s.PARAM_ERR,s.PARAM_ERR_MSG+e+"参数格式有误");return t.fail(i),t.complete(i),!0}return!1},checkKeyword:function(t){return!this.checkParamKeyEmpty(t,"keyword")},checkLocation:function(t){var e=this.getLocationParam(t.location);if(!e||!e.latitude||!e.longitude){var i=this.buildErrorConfig(s.PARAM_ERR,s.PARAM_ERR_MSG+" location参数格式有误");return t.fail(i),t.complete(i),!1}return!0},buildErrorConfig:function(t,e){return{status:t,message:e}},handleData:function(t,e,i){if("search"==i){for(var o=e.data,n=[],s=0;s<o.length;s++)n.push({id:o[s].id||null,title:o[s].title||null,latitude:o[s].location&&o[s].location.lat||null,longitude:o[s].location&&o[s].location.lng||null,address:o[s].address||null,category:o[s].category||null,tel:o[s].tel||null,adcode:o[s].ad_info&&o[s].ad_info.adcode||null,city:o[s].ad_info&&o[s].ad_info.city||null,district:o[s].ad_info&&o[s].ad_info.district||null,province:o[s].ad_info&&o[s].ad_info.province||null});t.success(e,{searchResult:o,searchSimplify:n})}else if("suggest"==i){var r=e.data,a=[];for(s=0;s<r.length;s++)a.push({adcode:r[s].adcode||null,address:r[s].address||null,category:r[s].category||null,city:r[s].city||null,district:r[s].district||null,id:r[s].id||null,latitude:r[s].location&&r[s].location.lat||null,longitude:r[s].location&&r[s].location.lng||null,province:r[s].province||null,title:r[s].title||null,type:r[s].type||null});t.success(e,{suggestResult:r,suggestSimplify:a})}else if("reverseGeocoder"==i){var l=e.result,c={address:l.address||null,latitude:l.location&&l.location.lat||null,longitude:l.location&&l.location.lng||null,adcode:l.ad_info&&l.ad_info.adcode||null,city:l.address_component&&l.address_component.city||null,district:l.address_component&&l.address_component.district||null,nation:l.address_component&&l.address_component.nation||null,province:l.address_component&&l.address_component.province||null,street:l.address_component&&l.address_component.street||null,street_number:l.address_component&&l.address_component.street_number||null,recommend:l.formatted_addresses&&l.formatted_addresses.recommend||null,rough:l.formatted_addresses&&l.formatted_addresses.rough||null};if(l.pois){var d=l.pois,u=[];for(s=0;s<d.length;s++)u.push({id:d[s].id||null,title:d[s].title||null,latitude:d[s].location&&d[s].location.lat||null,longitude:d[s].location&&d[s].location.lng||null,address:d[s].address||null,category:d[s].category||null,adcode:d[s].ad_info&&d[s].ad_info.adcode||null,city:d[s].ad_info&&d[s].ad_info.city||null,district:d[s].ad_info&&d[s].ad_info.district||null,province:d[s].ad_info&&d[s].ad_info.province||null});t.success(e,{reverseGeocoderResult:l,reverseGeocoderSimplify:c,pois:d,poisSimplify:u})}else t.success(e,{reverseGeocoderResult:l,reverseGeocoderSimplify:c})}else if("geocoder"==i){var f=e.result,g={title:f.title||null,latitude:f.location&&f.location.lat||null,longitude:f.location&&f.location.lng||null,adcode:f.ad_info&&f.ad_info.adcode||null,province:f.address_components&&f.address_components.province||null,city:f.address_components&&f.address_components.city||null,district:f.address_components&&f.address_components.district||null,street:f.address_components&&f.address_components.street||null,street_number:f.address_components&&f.address_components.street_number||null,level:f.level||null};t.success(e,{geocoderResult:f,geocoderSimplify:g})}else if("getCityList"==i){var h=e.result[0],m=e.result[1],p=e.result[2];t.success(e,{provinceResult:h,cityResult:m,districtResult:p})}else if("getDistrictByCityId"==i){var y=e.result[0];t.success(e,y)}else if("calculateDistance"==i){var _=e.result.elements,v=[];for(s=0;s<_.length;s++)v.push(_[s].distance);t.success(e,{calculateDistanceResult:_,distance:v})}else if("direction"==i){var b=e.result.routes;t.success(e,b)}else t.success(e)},buildWxRequestConfig:function(t,e,i){var o=this;return e.header={"content-type":"application/json"},e.method="GET",e.success=function(e){var n=e.data;0===n.status?o.handleData(t,n,i):t.fail(n)},e.fail=function(e){e.statusCode=s.WX_ERR_CODE,t.fail(o.buildErrorConfig(s.WX_ERR_CODE,e.errMsg))},e.complete=function(e){var i=+e.statusCode;switch(i){case s.WX_ERR_CODE:t.complete(o.buildErrorConfig(s.WX_ERR_CODE,e.errMsg));break;case s.WX_OK_CODE:var n=e.data;0===n.status?t.complete(n):t.complete(o.buildErrorConfig(n.status,n.message));break;default:t.complete(o.buildErrorConfig(s.SYSTEM_ERR,s.SYSTEM_ERR_MSG))}},e},locationProcess:function(t,e,i,o){var n=this;if(i=i||function(e){e.statusCode=s.WX_ERR_CODE,t.fail(n.buildErrorConfig(s.WX_ERR_CODE,e.errMsg))},o=o||function(e){e.statusCode==s.WX_ERR_CODE&&t.complete(n.buildErrorConfig(s.WX_ERR_CODE,e.errMsg))},t.location){if(n.checkLocation(t)){var r=p.getLocationParam(t.location);e(r)}}else n.getWXLocation(e,i,o)}},y=function(){"use strict";function t(e){if(o(this,t),!e.key)throw Error("key值不能为空");this.key=e.key}return n(t,[{key:"search",value:function(t){var e=this;if(t=t||{},p.polyfillParam(t),p.checkKeyword(t)){var i={keyword:t.keyword,orderby:t.orderby||"_distance",page_size:t.page_size||10,page_index:t.page_index||1,output:"json",key:e.key};t.address_format&&(i.address_format=t.address_format),t.filter&&(i.filter=t.filter);var o=t.distance||"1000",n=t.auto_extend||1,s=null,r=null;t.region&&(s=t.region),t.rectangle&&(r=t.rectangle);var l=function(e){s&&!r?(i.boundary="region("+s+","+n+","+e.latitude+","+e.longitude+")",t.sig&&(i.sig=p.getSig(i,t.sig,"search"))):r&&!s?(i.boundary="rectangle("+r+")",t.sig&&(i.sig=p.getSig(i,t.sig,"search"))):(i.boundary="nearby("+e.latitude+","+e.longitude+","+o+","+n+")",t.sig&&(i.sig=p.getSig(i,t.sig,"search"))),wx.request(p.buildWxRequestConfig(t,{url:a,data:i},"search"))};p.locationProcess(t,l)}}},{key:"getSuggestion",value:function(t){var e=this;if(t=t||{},p.polyfillParam(t),p.checkKeyword(t)){var i={keyword:t.keyword,region:t.region||"全国",region_fix:t.region_fix||0,policy:t.policy||0,page_size:t.page_size||10,page_index:t.page_index||1,get_subpois:t.get_subpois||0,output:"json",key:e.key};if(t.address_format&&(i.address_format=t.address_format),t.filter&&(i.filter=t.filter),t.location){var o=function(e){i.location=e.latitude+","+e.longitude,t.sig&&(i.sig=p.getSig(i,t.sig,"suggest")),wx.request(p.buildWxRequestConfig(t,{url:l,data:i},"suggest"))};p.locationProcess(t,o)}else t.sig&&(i.sig=p.getSig(i,t.sig,"suggest")),wx.request(p.buildWxRequestConfig(t,{url:l,data:i},"suggest"))}}},{key:"reverseGeocoder",value:function(t){var e=this;t=t||{},p.polyfillParam(t);var i={coord_type:t.coord_type||5,get_poi:t.get_poi||0,output:"json",key:e.key};t.poi_options&&(i.poi_options=t.poi_options);var o=function(e){i.location=e.latitude+","+e.longitude,t.sig&&(i.sig=p.getSig(i,t.sig,"reverseGeocoder")),wx.request(p.buildWxRequestConfig(t,{url:c,data:i},"reverseGeocoder"))};p.locationProcess(t,o)}},{key:"geocoder",value:function(t){var e=this;if(t=t||{},p.polyfillParam(t),!p.checkParamKeyEmpty(t,"address")){var i={address:t.address,output:"json",key:e.key};t.region&&(i.region=t.region),t.sig&&(i.sig=p.getSig(i,t.sig,"geocoder")),wx.request(p.buildWxRequestConfig(t,{url:c,data:i},"geocoder"))}}},{key:"getCityList",value:function(t){var e=this;t=t||{},p.polyfillParam(t);var i={output:"json",key:e.key};t.sig&&(i.sig=p.getSig(i,t.sig,"getCityList")),wx.request(p.buildWxRequestConfig(t,{url:d,data:i},"getCityList"))}},{key:"getDistrictByCityId",value:function(t){var e=this;if(t=t||{},p.polyfillParam(t),!p.checkParamKeyEmpty(t,"id")){var i={id:t.id||"",output:"json",key:e.key};t.sig&&(i.sig=p.getSig(i,t.sig,"getDistrictByCityId")),wx.request(p.buildWxRequestConfig(t,{url:u,data:i},"getDistrictByCityId"))}}},{key:"calculateDistance",value:function(t){var e=this;if(t=t||{},p.polyfillParam(t),!p.checkParamKeyEmpty(t,"to")){var i={mode:t.mode||"walking",to:p.location2query(t.to),output:"json",key:e.key};if(t.from&&(t.location=t.from),"straight"==i.mode){var o=function(e){for(var o=p.getEndLocation(i.to),n={message:"query ok",result:{elements:[]},status:0},s=0;s<o.length;s++)n.result.elements.push({distance:p.getDistance(e.latitude,e.longitude,o[s].lat,o[s].lng),duration:0,from:{lat:e.latitude,lng:e.longitude},to:{lat:o[s].lat,lng:o[s].lng}});var r=n.result.elements,a=[];for(s=0;s<r.length;s++)a.push(r[s].distance);return t.success(n,{calculateResult:r,distanceResult:a})};p.locationProcess(t,o)}else{o=function(e){i.from=e.latitude+","+e.longitude,t.sig&&(i.sig=p.getSig(i,t.sig,"calculateDistance")),wx.request(p.buildWxRequestConfig(t,{url:f,data:i},"calculateDistance"))};p.locationProcess(t,o)}}}},{key:"direction",value:function(t){var e=this;if(t=t||{},p.polyfillParam(t),!p.checkParamKeyEmpty(t,"to")){var i={output:"json",key:e.key};"string"==typeof t.to?i.to=t.to:i.to=t.to.latitude+","+t.to.longitude;var o=null;t.mode=t.mode||h.driving,o=g+t.mode,t.from&&(t.location=t.from),t.mode==h.driving&&(t.from_poi&&(i.from_poi=t.from_poi),t.heading&&(i.heading=t.heading),t.speed&&(i.speed=t.speed),t.accuracy&&(i.accuracy=t.accuracy),t.road_type&&(i.road_type=t.road_type),t.to_poi&&(i.to_poi=t.to_poi),t.from_track&&(i.from_track=t.from_track),t.waypoints&&(i.waypoints=t.waypoints),t.policy&&(i.policy=t.policy),t.plate_number&&(i.plate_number=t.plate_number)),t.mode==h.transit&&(t.departure_time&&(i.departure_time=t.departure_time),t.policy&&(i.policy=t.policy));var n=function(e){i.from=e.latitude+","+e.longitude,t.sig&&(i.sig=p.getSig(i,t.sig,"direction",t.mode)),wx.request(p.buildWxRequestConfig(t,{url:o,data:i},"direction"))};p.locationProcess(t,n)}}}]),t}();t.exports=y},df34:function(t,e){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}t.exports=i}}]);
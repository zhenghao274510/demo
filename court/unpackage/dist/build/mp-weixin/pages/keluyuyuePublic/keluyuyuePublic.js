(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/keluyuyuePublic/keluyuyuePublic"],{"285f":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(i("4870")),l=i("c48d"),u=s(i("741d"));function s(e){return e&&e.__esModule?e:{default:e}}var n=function(){return i.e("components/dy-Date/dy-Date").then(i.bind(null,"58e9"))},d={data:function(){return{user:"",title:"",apply:"",names:"",tel:"",card:"",time:"",img1:"",img2:"",img3:"",img4:"",img5:"",img6:"",url:u.default.baseUrl}},components:{datePicker:n},methods:{submit:function(){if(""!=this.user)if(""!=this.title)if(""!=this.apply)if(""!=this.names)if(""!=this.tel)if(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(this.tel)){var t=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;if(""!=this.card)if(t.test(this.card))if(""!=this.time)if(""!=this.img1&&""!=this.img2&&""!=this.img3){var i={uid:e.getStorageSync("uid"),suspect:this.user,cause:this.title,lname:this.names,identity:this.apply,idnum:this.card,telnum:this.tel,readingDate:this.time,lawyerCertificate:this.img4,idCard:this.img5,attorneyLetter:this.img6};a.default.showLoading("加载中...");var u={url:"/lawyerRecord/submit",data:i,header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(t){console.log(t),1==t.data.success&&(a.default.hideLoading(),a.default.showTitle("提交成功"),setTimeout(function(){e.navigateBack({delta:1})},500))}};(0,l.ajax)(u)}else a.default.showTitle("请上传证件图片");else a.default.showTitle("请选择时间");else a.default.showTitle("身份证不合法");else a.default.showTitle("身份证不能为空")}else a.default.showTitle("手机号格式不正确");else a.default.showTitle("手机号不能为空");else a.default.showTitle("请输入申请人姓名");else a.default.showTitle("请输入申请人身份");else a.default.showTitle("请输入案由");else a.default.showTitle("姓名不能为空")},load:function(t){var i=this,l={uid:i.$store.state.uid};a.default.showLoading("上传中..."),e.chooseImage({success:function(u){var s=u.tempFilePaths;e.uploadFile({url:"https://24h.haisongzi.com/service/uploadFile",filePath:s[0],name:"file",formData:l,success:function(e){a.default.hideLoading();var l=JSON.parse(e.data);1==t?(i.img1=i.url+l.body.filePath,i.img4=l.body.filePath):2==t?(i.img2=i.url+l.body.filePath,i.img5=l.body.filePath):3==t&&(i.img3=i.url+l.body.filePath,i.img6=l.body.filePath)}})}})},getData:function(e){console.log(e),this.time=e}}};t.default=d}).call(this,i("543d")["default"])},"3c88":function(e,t,i){"use strict";(function(e){i("80ed"),i("921b");a(i("66fd"));var t=a(i("e6fc"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("543d")["createPage"])},"5e69":function(e,t,i){"use strict";var a=i("8902"),l=i.n(a);l.a},8902:function(e,t,i){},d754:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},l=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return l})},e412:function(e,t,i){"use strict";i.r(t);var a=i("285f"),l=i.n(a);for(var u in a)"default"!==u&&function(e){i.d(t,e,function(){return a[e]})}(u);t["default"]=l.a},e6fc:function(e,t,i){"use strict";i.r(t);var a=i("d754"),l=i("e412");for(var u in l)"default"!==u&&function(e){i.d(t,e,function(){return l[e]})}(u);i("5e69");var s=i("2877"),n=Object(s["a"])(l["default"],a["a"],a["b"],!1,null,null,null);t["default"]=n.exports}},[["3c88","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/public/public"],{"0d1f":function(t,e,i){},4259:function(t,e,i){"use strict";i.r(e);var a=i("fc63"),o=i("c998");for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);i("9967");var s=i("2877"),l=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=l.exports},9967:function(t,e,i){"use strict";var a=i("0d1f"),o=i.n(a);o.a},b804:function(t,e,i){"use strict";(function(t){i("80ed"),i("921b");a(i("66fd"));var e=a(i("4259"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},c998:function(t,e,i){"use strict";i.r(e);var a=i("d751"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=o.a},d751:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("c48d"),o=s(i("4870")),n=s(i("741d"));function s(t){return t&&t.__esModule?t:{default:t}}var l=function(){return i.e("components/robby-image-upload/robby-image-upload").then(i.bind(null,"2a08"))},u={data:function(){return{show:!1,radio:1,user:"",card:"",tel:"",address:"",content:"",location:"上传位置",imageData:[],url:n.default.baseUrl}},components:{robbyImageUpload:l},onShow:function(){this.$store.state.location&&(this.location=this.$store.state.location)},methods:{shows:function(){this.show=!0},RadioChange:function(t){this.radio=t.detail.value,this.show=!1},deleteImage:function(t){console.log(t)},addImage:function(t){console.log(this.imageData),console.log(t)},inputList:function(t){console.log(t)},goMap:function(){t.navigateTo({url:"../map/map"})},submit:function(){if(""!=this.user){var e=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;if(""!=this.card)if(e.test(this.card))if(""!=this.tel)if(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(this.tel))if(""!=this.address)if(""!=this.content)if(this.content.length>300)o.default.showTitle("举报内容不能超过300字");else if(0!=this.imageData.length)if("上传位置"!=this.location){for(var i=this,n=this.imageData,s=0;s<n.length;s++)n[s].indexOf(this.url)>-1&&(n[s]=n[s].substr(this.url.length));var l=n.join("|"),u={uid:t.getStorageSync("uid"),anonymous:this.radio,cname:this.user,idnum:this.card,telnum:this.tel,address:this.address,content:this.content,material:l,location:this.location,latitude:this.$store.state.lat,longitude:this.$store.state.lon};o.default.showLoading("加载中...");var d={url:"/complSchool/submit",data:u,header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(e){console.log(e),1==e.data.success&&(o.default.hideLoading(),i.clear(),o.default.showTitle("提交成功"),setTimeout(function(){t.navigateBack({delta:1})},500))}};(0,a.ajax)(d)}else o.default.showTitle("请上传位置");else o.default.showTitle("请上传图片");else o.default.showTitle("举报内容不能为空");else o.default.showTitle("地址不能为空");else o.default.showTitle("手机号格式不正确");else o.default.showTitle("手机号不能为空");else o.default.showTitle("身份证不合法");else o.default.showTitle("身份证不能为空")}else o.default.showTitle("姓名不能为空")},clear:function(){this.radio=1,this.user="",this.card="",this.tel="",this.address="",this.content="",this.location="上传位置",this.imageData=[],this.$store.commit("changeLocation","")}}};e.default=u}).call(this,i("543d")["default"])},fc63:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,a=(t._self._c,i("6910"));t.$mp.data=Object.assign({},{$root:{m0:a}})},o=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o})}},[["b804","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["colorui/components/cu-custom"],{"0576":function(t,a,n){"use strict";var o=n("709c"),c=n.n(o);c.a},"0a32":function(t,a,n){"use strict";n.r(a);var o=n("bbbf"),c=n("bdc2");for(var e in c)"default"!==e&&function(t){n.d(a,t,function(){return c[t]})}(e);n("0576");var u=n("2877"),r=Object(u["a"])(c["default"],o["a"],o["b"],!1,null,null,null);a["default"]=r.exports},"5a04":function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar}},name:"cu-custom",computed:{style:function(){var t=this.StatusBar,a=this.CustomBar,n=this.bgImage,o=this.Color,c=this.backColor,e="height:".concat(a,"px;padding-top:").concat(t,"px;color:").concat(o,";background-color:").concat(c);return this.bgImage&&(e="".concat(e,"background-image:url(").concat(n,");color:").concat(o,";background-color:").concat(c)),e}},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},isIcon:{type:[Boolean,String],default:!1},isBacks:{type:[Boolean,String],default:!1},isIcons:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""},Color:{type:String,default:""},backColor:{type:String,default:"red"}},methods:{BackPage:function(){t.navigateBack({delta:1})},goRight:function(){this.$emit("goRight")},Back:function(){this.$emit("Back")}}};a.default=n}).call(this,n("543d")["default"])},"709c":function(t,a,n){},bbbf:function(t,a,n){"use strict";var o=function(){var t=this,a=t.$createElement;t._self._c},c=[];n.d(a,"a",function(){return o}),n.d(a,"b",function(){return c})},bdc2:function(t,a,n){"use strict";n.r(a);var o=n("5a04"),c=n.n(o);for(var e in o)"default"!==e&&function(t){n.d(a,t,function(){return o[t]})}(e);a["default"]=c.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'colorui/components/cu-custom-create-component',
    {
        'colorui/components/cu-custom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0a32"))
        })
    },
    [['colorui/components/cu-custom-create-component']]
]);                

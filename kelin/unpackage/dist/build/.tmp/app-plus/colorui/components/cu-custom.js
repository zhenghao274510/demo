(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["colorui/components/cu-custom"],{"0331":function(t,n,o){},"454d":function(t,n,o){"use strict";var a,c=function(){var t=this,n=t.$createElement;t._self._c},e=[];o.d(n,"b",function(){return c}),o.d(n,"c",function(){return e}),o.d(n,"a",function(){return a})},"6d77":function(t,n,o){"use strict";o.r(n);var a=o("bf5f"),c=o.n(a);for(var e in a)"default"!==e&&function(t){o.d(n,t,function(){return a[t]})}(e);n["default"]=c.a},b355:function(t,n,o){"use strict";var a=o("0331"),c=o.n(a);c.a},bf5f:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar}},name:"cu-custom",computed:{style:function(){var t=this.StatusBar,n=this.CustomBar,o=this.bgImage,a=this.Color,c=this.backColor,e="height:".concat(n,"px;padding-top:").concat(t,"px;color:").concat(a,";background-color:").concat(c);return this.bgImage&&(e="".concat(e,"background-image:url(").concat(o,");color:").concat(a,";background-color:").concat(c)),e}},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},isIcon:{type:[Boolean,String],default:!1},isBacks:{type:[Boolean,String],default:!1},isIcons:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""},Color:{type:String,default:""},backColor:{type:String,default:"#FFFFFF"}},methods:{BackPage:function(){t.navigateBack({delta:1})},goRight:function(){this.$emit("goRight")},Back:function(){this.$emit("Back")}}};n.default=o}).call(this,o("6e42")["default"])},cfb3:function(t,n,o){"use strict";o.r(n);var a=o("454d"),c=o("6d77");for(var e in c)"default"!==e&&function(t){o.d(n,t,function(){return c[t]})}(e);o("b355");var u,r=o("f0c5"),i=Object(r["a"])(c["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);n["default"]=i.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'colorui/components/cu-custom-create-component',
    {
        'colorui/components/cu-custom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("cfb3"))
        })
    },
    [['colorui/components/cu-custom-create-component']]
]);
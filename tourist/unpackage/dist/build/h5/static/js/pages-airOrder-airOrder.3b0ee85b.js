(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-airOrder-airOrder"],{"0203":function(t,i,e){"use strict";var a=e("6816"),s=e.n(a);s.a},"1cda":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAEd0lEQVRYR82YW2wUZRTHf2e2S7xQdhY0TdRSmBW6syAGKHhPNJLoAxgVjKJoQjAlRo0CvvhgEE30RZAHiYqSmIABwy1RHiSBaCLeQw0Ks8tlp9BqIlHYWUqqst05ZrZdWOltu62w8zhzzpnf953zXc5fqOBJx6M3GaL3KtyOMhmhHhjdE+osSjvCEYFvfJW9sVTml6H+Rsp1OJi4dvSVfq4ZYYlAouAnuCgOaJtidHS/8mtBxiMkUKzgnYKDsuEvI7x+qvPH2XL+OSjYF3dTM+Gk+azCK8A4hK8F3VjTVbOr/sip3wb6Sfvkcdd31XTNVeRJlDuAUwKvH6/z1t3zJV0D+Q4IlrbHTBKMzcBMRHaLyqsTk6e/K2fEF9u4iTGzIfQaqvcB+xV/YSx55mh/sfoFS8ejc0X0YyCH6DOWk91aCVBvwMgCVN4DRqnK47FUZldfcfsESyeiT4jqRyg/+TXG/BsPnm4fCahijKPTxt4QOufvQJiOyGLLyWy6OH4vMDdhPoCyA/iqU8Lzyi3WoYIHi+kqzX0G3IXwsOV4n5bG+A+Y21jbiBH6EcTplJo5/xdUEaAbrmsPaAI/P8s63HG4+O08WLD6Gk6aQWE3+CFjxkinr78ZPTZ1bL2R91uAEyfqvFuLq/U8WKttvqCwFtFHLCe7baipGY69mygsiK0CyyYmvbXd+yHQk+/jIPutZCZYzpf8ce3obtCZnRKeEJRQASwdN5eLsBrxb7GcMz9cciqgsM+p8b0qK2Ipb003mG0eEiFjOd6dlUK5tqmBr5X0Bj1N+vuHmzD3qRKNJb0p4jZGp2HoAVSXWqns+ssJ1pqILNVg8/XlZmm1zRcV3s6HjfpJP5/+9XKCFTbenN+usFxcO7oF0VmW48UqhQr8RiKVQZxW2zymyH5xbfMA0GYlvXnVAObaZnAajA/A/gS2WEnvueoAi6wDeTQA+0dE10x0si+XA1ZMWTm2pTblrtbWRORNVQlqrOrA3lCVFd2pFDZbjvf8UGeh1H6kit+1zXeAx6q5+KOfINpUddtF2jaXCaypvg32wpHUbKWyH1RaZyNRY2480ozI+4UjqWoP8cJxEjdXILxVDdcelJeslLe62i6KTZ0Sbjh/Uew5PAu3DFVdEEtlt1daa5X4peOR+SKyrdfVOghW2ozkw8b04VyBhgJX0oy0n6jzZvdqRgq1donbt9+n1V3dmTu3F3QKfr6pz/atOMqqbHgvwEUX0S0RtIT90EODqTpDSV1gG6hAOSO/E2EGsNhKehsvjtFv49Bqmw8qBA5/94gqI9Jr9vSQ7wJXGPDUhKS3s6+BDSxDxWsnI6HNAjNQ/RxDV1ba3hXaM19WIXK/QguaXxhLdRzpb7YHbbVKhLuVQBTYJ6KbyhHu2hqvuS4fys1TlUVA0BpmBFYNW7grHU3aikZklD6N6BIQu/AtkDrhUKA7CFqQMBUJtNgGYEpR6gRNorJBz8mHMTeTLacmB52xvoIE4jCicwRuKxGHa3tsO4risMK3qOypRBz+F9/NS1NRoHIiAAAAAElFTkSuQmCC"},"434e":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"contain"},[a("v-uni-view",{staticClass:"top"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-text",{staticClass:"cuIcon-back back",on:{click:function(i){i=t.$handleEvent(i),t.back(i)}}}),a("v-uni-view",[t._v(t._s(t.city1))]),a("img",{attrs:{src:e("e263"),alt:""}}),a("v-uni-view",[t._v(t._s(t.city2))])],1)],1),a("v-uni-view",{staticClass:"detail"},[a("v-uni-view",{staticClass:"detailList"},[a("v-uni-view",{staticClass:"detailTop"},[a("v-uni-view",{staticClass:"single"},[t._v("单程")]),a("v-uni-view",{staticClass:"order"},[a("v-uni-view",[t._v(t._s(t.date))]),a("v-uni-view",[t._v(t._s(t.list.DepartTime))]),a("v-uni-view",[t._v(t._s(t.listData.CabinName))])],1)],1),a("v-uni-view",{staticClass:"location"},[t._v(t._s(t.list.DepartAirportName.indexOf("国")>-1?t.list.DepartAirportName.substr(0,t.list.DepartAirportName.indexOf("国")):t.list.DepartAirportName)+t._s(t.list.DepartAirportTerminal)+" - "+t._s(t.list.ArriveAirportName.indexOf("国")>-1?t.list.ArriveAirportName.substr(0,t.list.ArriveAirportName.indexOf("国")):t.list.ArriveAirportName)+t._s(t.list.ArriveAirportTerminal))]),a("v-uni-view",{staticClass:"wait"},[t._v("预计支付成功后一小时二十分钟后出票")])],1)],1),a("v-uni-view",{staticClass:"list"},[a("v-uni-scroll-view",{staticClass:"airs",staticStyle:{height:"100%"},attrs:{"scroll-y":"","scroll-with-animation":""}},[a("v-uni-view",{staticClass:"data1"},[a("v-uni-view",{staticClass:"data1-left"},[a("v-uni-view",{staticStyle:{color:"#E02B11","font-size":"18px"}},[t._v("￥"+t._s(t.price1))]),t.checked?t._e():a("v-uni-view",{staticStyle:{"margin-left":"12upx"}},[t._v("成人票")]),t.checked?a("v-uni-view",{staticStyle:{"margin-left":"12upx"}},[t._v("儿童票")]):t._e(),a("v-uni-view",{staticStyle:{"margin-left":"12upx"}},[t._v("燃油 ￥"+t._s(t.Oil))])],1),a("v-uni-view",{staticClass:"data1-right"},[a("v-uni-view",[t._v("提供等额行程单")]),a("v-uni-view",{staticStyle:{"margin-top":"8upx"}},[t._v("机建 ￥"+t._s(t.Tax))]),a("v-uni-view",{staticStyle:{"margin-top":"8upx"}},[t._v("托运行李共20公斤")])],1)],1),a("v-uni-view",{staticClass:"data2",staticStyle:{"margin-bottom":"20upx"}},[a("v-uni-view",[t._v("乘机人")]),a("v-uni-view",{staticClass:"name"},[a("v-uni-input",{staticStyle:{width:"65%"},attrs:{type:"text",placeholder:"请选择乘机人","placeholder-class":"input-placeholder",disabled:""},model:{value:t.name,callback:function(i){t.name=i},expression:"name"}}),a("v-uni-view",{staticClass:"choice",on:{click:function(i){i=t.$handleEvent(i),t.airuser("0")}}},[t._v("选择乘机人")])],1)],1),a("v-uni-view",{staticClass:"dataForm",staticStyle:{"margin-bottom":"20upx"}},[a("v-uni-view",{staticClass:"data2"},[a("v-uni-view",[t._v("联系人")]),a("v-uni-view",{staticClass:"name"},[a("v-uni-input",{attrs:{type:"text",placeholder:"请输入联系人姓名","placeholder-class":"input-placeholder"},model:{value:t.user,callback:function(i){t.user=i},expression:"user"}})],1)],1),a("v-uni-view",{staticClass:"data2"},[a("v-uni-view",[t._v("手机号")]),a("v-uni-view",{staticClass:"name"},[a("v-uni-input",{attrs:{type:"text",placeholder:"用于接收出票短信","placeholder-class":"input-placeholder"},model:{value:t.phone,callback:function(i){t.phone=i},expression:"phone"}})],1)],1),t.checked?a("v-uni-view",{staticClass:"data2"},[a("v-uni-view",[t._v("票号")]),a("v-uni-view",{staticClass:"name"},[a("v-uni-input",{attrs:{type:"text",placeholder:"请输入成人票票号","placeholder-class":"input-placeholder"},model:{value:t.call,callback:function(i){t.call=i},expression:"call"}})],1)],1):t._e()],1),a("v-uni-view",{staticClass:"data2",staticStyle:{"margin-bottom":"20upx"}},[t.checked?t._e():a("v-uni-view",{staticClass:"protect"},[a("v-uni-view",{staticClass:"protect-content"},[t._v("是否携带婴儿")]),a("v-uni-view",{staticClass:"select"},[a("v-uni-view",{staticStyle:{"margin-right":"30upx"}},[t._v("婴儿票￥"+t._s(t.listData.BabyFare))]),a("van-checkbox",{attrs:{"checked-color":"#E02B11"},on:{change:function(i){i=t.$handleEvent(i),t.choiceBaby(i)}},model:{value:t.checked1,callback:function(i){t.checked1=i},expression:"checked1"}})],1)],1)],1),t.babyShow?a("v-uni-view",{staticClass:"data2",staticStyle:{"margin-bottom":"20upx"}},[a("v-uni-view",[t._v("乘机人")]),a("v-uni-view",{staticClass:"name"},[a("v-uni-input",{staticStyle:{width:"65%"},attrs:{type:"text",placeholder:"请选择乘机人","placeholder-class":"input-placeholder",disabled:""},model:{value:t.name1,callback:function(i){t.name1=i},expression:"name1"}}),a("v-uni-view",{staticClass:"choice",on:{click:function(i){i=t.$handleEvent(i),t.airuser("1")}}},[t._v("选择乘机人")])],1)],1):t._e(),a("v-uni-view",{staticClass:"data2",staticStyle:{"margin-bottom":"20upx"}},[a("v-uni-view",{staticClass:"protect"},[a("v-uni-view",{staticClass:"protect-content",on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.showSafe(i)}}},[a("v-uni-view",[t._v(t._s(t.safe1))]),a("v-uni-view",{staticStyle:{"font-size":"12px",color:"#999","margin-top":"8upx"}},[t._v(t._s(t.safe2))])],1),a("v-uni-view",{staticClass:"select"},[a("v-uni-view",{staticStyle:{"margin-right":"30upx"}},[t._v("￥"+t._s(t.safePrice)+"/份")]),a("van-checkbox",{attrs:{"checked-color":"#E02B11"},model:{value:t.checked2,callback:function(i){t.checked2=i},expression:"checked2"}})],1)],1)],1),a("v-uni-view",{staticClass:"data3"},[a("v-uni-view",[t._v("备注")]),a("v-uni-view",{staticClass:"area"},[a("v-uni-textarea",{attrs:{"placeholder-style":"color:#999;font-size:12px;",placeholder:"备注信息"},model:{value:t.contents,callback:function(i){t.contents=i},expression:"contents"}})],1)],1),a("v-uni-view",{staticClass:"data4"},[a("p",[t._v("订单包含机票、附加选购产品、机建燃油费、税费。")]),a("p",[t._v("点击去付款表示已阅读并同意"),a("v-uni-text",{staticStyle:{color:"#E02B11"}},[t._v("锂电池及危险品须知，航班信息免责声明，机票预订须知，运输总条件，机票增值产品供应商资质证明，保险经纪委托协议")])],1)])],1)],1),a("v-uni-view",{staticClass:"bottom-nav"},[a("v-uni-view",{staticClass:"nav-left"},[a("v-uni-view",{staticStyle:{color:"#E02B11","font-size":"16px"}},[t._v("￥"+t._s(t.total))]),a("v-uni-view",{staticStyle:{"margin-left":"10upx"}},[t._v("订单总价")])],1),a("v-uni-view",{staticClass:"buy",on:{click:function(i){i=t.$handleEvent(i),t.airPay(i)}}},[t._v("去付款")])],1),a("van-popup",{attrs:{position:"bottom"},model:{value:t.show1,callback:function(i){t.show1=i},expression:"show1"}},[a("v-uni-view",{staticClass:"editor"},[a("v-uni-view",{staticClass:"btns"},[a("v-uni-view",{on:{click:function(i){i=t.$handleEvent(i),t.cancel(i)}}},[t._v("取消")]),a("v-uni-view",{staticStyle:{color:"#E02B11"},on:{click:function(i){i=t.$handleEvent(i),t.confirm(i)}}},[t._v("确认")])],1),a("v-uni-view",{staticClass:"editorList",on:{click:function(i){i=t.$handleEvent(i),t.addUser(i)}}},[a("img",{attrs:{src:e("1cda"),alt:""}}),a("v-uni-view",[t._v("手动新增")])],1),a("van-radio-group",{on:{change:function(i){i=t.$handleEvent(i),t.choiceUser(i)}},model:{value:t.radio,callback:function(i){t.radio=i},expression:"radio"}},t._l(t.userList,function(i,s){return a("v-uni-view",{key:s,staticClass:"userList"},[a("v-uni-view",{staticClass:"userLeft"},[a("img",{attrs:{src:e("74f4"),alt:""},on:{click:function(e){e=t.$handleEvent(e),t.modifyUser(i.id)}}}),a("v-uni-view",{staticClass:"userMsg"},[a("v-uni-view",[t._v(t._s(i.username))]),0==i.cardType?a("v-uni-view",{staticStyle:{color:"#999"}},[t._v("身份证: "+t._s(i.cardNo))]):t._e(),1==i.cardType?a("v-uni-view",{staticStyle:{color:"#999"}},[t._v("护照: "+t._s(i.cardNo))]):t._e(),4==i.cardType?a("v-uni-view",{staticStyle:{color:"#999"}},[t._v("港澳通行证: "+t._s(i.cardNo))]):t._e(),5==i.cardType?a("v-uni-view",{staticStyle:{color:"#999"}},[t._v("台胞证: "+t._s(i.cardNo))]):t._e(),6==i.cardType?a("v-uni-view",{staticStyle:{color:"#999"}},[t._v("台湾通行证: "+t._s(i.cardNo))]):t._e(),7==i.cardType?a("v-uni-view",{staticStyle:{color:"#999"}},[t._v("回乡证: "+t._s(i.cardNo))]):t._e(),9==i.cardType?a("v-uni-view",{staticStyle:{color:"#999"}},[t._v("其他: "+t._s(i.cardNo))]):t._e()],1)],1),a("van-radio",{attrs:{name:i.id,"checked-color":"#E02B11"}})],1)}),1)],1)],1),a("van-popup",{attrs:{position:"bottom"},model:{value:t.show2,callback:function(i){t.show2=i},expression:"show2"}},t._l(t.content,function(i,e){return a("v-uni-view",{key:e,staticClass:"safe",on:{click:function(i){i=t.$handleEvent(i),t.hideSafe(i)}}},[t._v(t._s(i))])}),1),a("van-popup",{staticStyle:{background:"none !important"},attrs:{"close-on-click-overlay":!1},model:{value:t.sub,callback:function(i){t.sub=i},expression:"sub"}},[a("van-loading",{attrs:{type:"spinner"}})],1)],1)},s=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return s})},6816:function(t,i,e){var a=e("773c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("437259b4",a,!0,{sourceMap:!1,shadowMode:!1})},"74f4":function(t,i){t.exports="data:image/png;base64,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"},"773c":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,"uni-page-body[data-v-165db0f3]{width:100%;height:100%;background:#f9f9f9;position:relative}.contain[data-v-165db0f3]{width:100%;height:100%}\n\n/* .van-popup {\n\tbackground: none !important;\n} */.top[data-v-165db0f3]{width:100%;height:%?180?%;background-image:-webkit-linear-gradient(top,#e02b11,#f75f33);position:fixed;top:0;left:0;z-index:99;padding:0 %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box}.title[data-v-165db0f3]{width:100%;height:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:15px;color:#fff;position:relative}.title>img[data-v-165db0f3]{width:%?40?%;margin:0 %?20?%}.back[data-v-165db0f3]{position:absolute;left:0}.detail[data-v-165db0f3]{position:absolute;width:100%;padding:%?30?%;left:0;top:%?70?%;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:999;box-sizing:border-box}.detailList[data-v-165db0f3]{width:100%;padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:4px;background:#fff}.detailTop[data-v-165db0f3]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:14px;color:#333}.single[data-v-165db0f3]{color:#e02b11;padding:%?2?% %?20?%;border:1px solid #e02b11;border-radius:4px}.order[data-v-165db0f3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-left:%?30?%}.order>uni-view[data-v-165db0f3]{margin-right:%?20?%}.location[data-v-165db0f3]{width:100%;font-size:14px;color:#333;height:%?40?%;line-height:%?40?%;margin:%?8?% 0 %?8?% %?130?%}.wait[data-v-165db0f3]{width:100%;font-size:12px;color:#e02b11;height:%?40?%;line-height:%?40?%}.list[data-v-165db0f3]{width:100%;position:absolute;left:0;top:%?300?%;bottom:%?100?%;z-index:999}.data1[data-v-165db0f3]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:4px;background:#fff;padding:%?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:%?30?%}.data1-left[data-v-165db0f3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-right:1px solid #eee;padding-right:%?30?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:12px;color:#333}.data1-right[data-v-165db0f3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:12px;color:#333;padding-left:%?40?%}.dataForm[data-v-165db0f3]{width:100%}.data2[data-v-165db0f3]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:%?20?% %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px;color:#333;background:#fff}.name[data-v-165db0f3]{width:80%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 %?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#f9f9f9;border-radius:4px}.input-placeholder[data-v-165db0f3]{font-size:12px;color:#999}.choice[data-v-165db0f3]{padding:%?8?% %?20?%;font-size:12px;color:#fff;background:#e02b11;border-radius:4px}.protect[data-v-165db0f3]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:14px;color:#333}.protect-content[data-v-165db0f3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.select[data-v-165db0f3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:14px;color:#e02b11}.data3[data-v-165db0f3]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:%?20?% %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px;color:#333;background:#fff}.area[data-v-165db0f3]{width:100%;height:%?120?%;background:#f9f9f9;margin-top:%?20?%}.area>uni-textarea[data-v-165db0f3]{width:100%;height:100%;padding:%?12?%;-webkit-box-sizing:border-box;box-sizing:border-box}.data4[data-v-165db0f3]{width:100%;padding:%?20?% %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box}.data4>p[data-v-165db0f3]{font-size:12px;color:#999}.bottom-nav[data-v-165db0f3]{width:100%;height:%?100?%;position:fixed;left:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 0 0 %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#fff;-webkit-box-shadow:0 1px 4px #ccc;box-shadow:0 1px 4px #ccc}.nav-left[data-v-165db0f3]{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;font-size:12px;color:#333}.buy[data-v-165db0f3]{height:%?100?%;line-height:%?100?%;padding:0 %?60?%;font-size:14px;color:#fff;background:#e02b11}.editor[data-v-165db0f3]{width:100%;padding:%?30?%;background:#fff;border-radius:4px}.btns[data-v-165db0f3]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:14px;color:#333}.editorList[data-v-165db0f3]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:14px;color:#333;margin:%?30?% 0}.editorList>img[data-v-165db0f3],.userLeft>img[data-v-165db0f3]{width:%?40?%;height:%?40?%;margin-right:%?30?%}.userList[data-v-165db0f3]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:14px;color:#333;margin-bottom:%?30?%}.userLeft[data-v-165db0f3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.userMsg[data-v-165db0f3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.safe[data-v-165db0f3]{width:100%;padding:%?16?% %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:justify}.van-popup[data-v-165db0f3]{background:#fff}body.?%PAGE?%[data-v-165db0f3]{background:#f9f9f9}",""])},"8a39":function(t,i,e){"use strict";e.r(i);var a=e("e89d"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,function(){return a[t]})}(n);i["default"]=s.a},e263:function(t,i){t.exports="data:image/png;base64,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"},e89d:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e("f42a"),s=e("ad18"),n={data:function(){return{city1:"",city2:"",date:"",name:"",name1:"",user:"",call:"",phone:"",checked1:!1,checked2:!1,show1:!1,show2:!1,show3:!1,radio:"",list:{},listData:{},checked:!1,price:0,price1:0,userList:[],safe1:"",safe2:"",safePrice:0,childPrice:0,content:"",Oil:0,babyFare:0,babyFare1:0,contents:"",custorm:1,cardsType:0,cardsType1:0,cardNo:"",cardNo1:"",tel:"",tel1:"",InsProductCodes:"",birthday:"",birthday1:"",BookData:"",Tax:0,babyShow:!1,userType:0,sub:!1}},components:{Toast:s.Toast},computed:{total:function(){var t=0;return this.$store.state.checked?t=this.price1+this.Oil+this.Tax+this.childPrice:(t=this.price1+this.Oil+this.Tax,this.checked1&&(t+=this.babyFare+this.babyFare1)),this.checked2&&(t+=this.safePrice),t},total1:function(){var t=0;return this.$store.state.checked?t=this.price+this.Oil+this.Tax+this.childPrice:(t=this.price+this.Oil+this.Tax,this.checked1&&(t+=this.babyFare+this.babyFare1)),this.checked2&&(t+=this.safePrice),t}},onLoad:function(t){if(this.getRequest("uid")){var i=this.getRequest("uid");this.$store.commit("changeUid",i)}var e=this.$store.state.city1,a=this.$store.state.city2;this.city1=e,this.city2=a,this.date=t.date,this.list=JSON.parse(t.list),this.listData=this.list.Cabins[t.index],this.checked=this.$store.state.checked,this.$store.state.checked&&(this.custorm=2),this.Oil=this.list.Oil,this.Tax=this.list.Tax,this.babyFare=this.listData.BabyFare},onShow:function(){this.name="",this.name1="",this.init()},methods:{getRequest:function(t){for(var i=window.location.search.substring(1),e=i.split("&"),a=0;a<e.length;a++){var s=e[a].split("=");if(s[0]==t)return s[1]}return!1},hideSafe:function(){this.show2=!1},init:function(){var t=this;this.sub=!0;var i={uid:this.$store.state.uid},e={url:"/api/gzh/passengerList",data:i,success:function(i){console.log(i),0==i.data.result&&(t.userList=i.data.dataList)}};(0,a.ajax)(e);var s=this.list.DepartDate+" "+this.list.DepartTime,n={StartDate:s},o={url:"/api/gzh/flightGetFlightBookPara",data:n,success:function(i){console.log(i),0==i.data.result&&(t.babyFare1=i.data.Data.Flight_BabySerFee,t.childPrice=i.data.Data.Flight_ChildSerFee,t.safe1=i.data.Data.InsProducts[0].ProductShortName,t.safe2=i.data.Data.InsProducts[0].ShortDescription,t.safePrice=i.data.Data.InsProducts[0].SalePrice,t.content=i.data.Data.InsProducts[0].DetailDescription,t.InsProductCodes=i.data.Data.InsProducts[0].ProductCode,t.content=t.content.split("；"))}};(0,a.ajax)(o);this.checked;var r={FlightType:this.$store.state.singleState,PassengerType:1,PolicyFlights:[{AirLineCode:this.list.AirCompanyCode,Cabin:this.listData.CabinCode,Fare:this.listData.Fare,Oil:this.list.Oil,Tax:this.list.Tax,SCode:this.list.DepartAirportCode,ECode:this.list.ArriveAirportCode,TakeOffDateTime:this.list.DepartDate+" "+this.list.DepartTime,ArriveDateTime:this.list.ArriveDate+" "+this.list.ArriveTime,ST:this.list.DepartAirportTerminal,ET:this.list.ArriveAirportTerminal,FlightNo:this.list.FlightNo}]},l={url:"/api/gzh/flightGetFlightPolicy",data:r,success:function(i){console.log(i),0==i.data.result&&(t.sub=!1,t.BookData=i.data.Data.Policys[0].BookData,t.price=i.data.Data.Policys[0].SettlePrice,t.price1=i.data.Data.Policys[0].Fare)}};(0,a.ajax)(l)},back:function(){uni.navigateBack({delta:1})},airuser:function(t){this.show1=!0,this.userType=0==t?0:1},choiceBaby:function(t){console.log(t),this.babyShow=!!t},cancel:function(){this.show1=!1},confirm:function(){this.show1=!1},addUser:function(){uni.navigateTo({url:"../editorAir/editorAir?type=0"})},modifyUser:function(t){uni.navigateTo({url:"../editorAir/editorAir?type=1&id="+t})},choiceUser:function(t){for(var i=0;i<this.userList.length;i++)t==this.userList[i].id&&(0==this.userType?(this.name=this.userList[i].username,this.cardsType=this.userList[i].cardType,this.cardNo=this.userList[i].cardNo,this.tel=this.userList[i].phone,this.birthday=this.userList[i].birthday):(this.name1=this.userList[i].username,this.cardsType1=this.userList[i].cardType,this.cardNo1=this.userList[i].cardNo,this.tel1=this.userList[i].phone,this.birthday1=this.userList[i].birthday))},showSafe:function(){this.show2=!0},airPay:function(){var t=this;if(""!=this.name)if(""!=this.user)if(""!=this.phone)if(/^1[3456789]\d{9}$/.test(this.phone))if(this.checked1&&""==this.name1)(0,s.Toast)("请选择乘客");else if(this.checked&&""==this.call)(0,s.Toast)("票号不能为空");else{this.sub=!0;var i={FlightType:this.$store.state.singleState,Amount:this.total1,ContactName:this.user,BabyFare:this.babyFare,ContactTel:"",ContactMobile:this.phone,OrderRemark:this.contents},e=[{FlightNo:this.list.FlightNo,Cabin:this.listData.CabinCode,SAirportCode:this.list.DepartAirportCode,EAirportCode:this.list.ArriveAirportCode,STerminal:this.list.DepartAirportTerminal,ETerminal:this.list.ArriveAirportTerminal,FromDateTime:this.list.DepartDate+" "+this.list.DepartTime,ArriveDateTime:this.list.ArriveDate+" "+this.list.ArriveTime,PlaneType:this.list.PlaneType,Fare:this.listData.Fare,Oil:this.list.Oil,Tax:this.list.Tax,Discount:this.listData.Discount}],n=[];n=this.checked1?[{PsgType:this.custorm,PsgName:this.name,CardType:this.cardsType,CardNo:this.cardNo,Mobile:this.tel,InsProductCodes:this.checked2?this.InsProductCodes:"",BirthDay:this.birthday,AdultPnr:this.call},{PsgType:3,PsgName:this.name1,CardType:this.cardsType1,CardNo:this.cardNo1,Mobile:this.tel1,InsProductCodes:"",BirthDay:this.birthday1,AdultPnr:this.call}]:[{PsgType:this.custorm,PsgName:this.name,CardType:this.cardsType,CardNo:this.cardNo,Mobile:this.tel,InsProductCodes:this.checked2?this.InsProductCodes:"",BirthDay:this.birthday,AdultPnr:this.call}];var o={BookData:this.BookData},r={url:"/api/gzh/flightCreateOrder",data:{uid:this.$store.state.uid,OrderBase:i,AirLines:e,Passengers:n,Policy:o,totalMoney:this.total},success:function(i){if(0==i.data.result){var e=i.data.orderId,a=i.data.body.appId,n=i.data.body.timeStamp,o=i.data.body.nonceStr,r=i.data.body.prepay,l=i.data.body.signType,c=i.data.body.paySign;t.onBridgeReady(a,n,o,r,l,c,e)}else(0,s.Toast)(i.data.resultNote),t.sub=!1}};console.log(r.data),(0,a.ajax)(r)}else(0,s.Toast)("手机号格式不正确");else(0,s.Toast)("手机号不能为空");else(0,s.Toast)("请填写联系人");else(0,s.Toast)("请选择乘机人")},onBridgeReady:function(t,i,e,a,n,o){var r=this;WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:t,timeStamp:i,nonceStr:e,package:a,signType:n,paySign:o},function(t){"get_brand_wcpay_request:ok"===t.err_msg?(r.sub=!1,setTimeout(function(){uni.navigateTo({url:"/pages/sucAir/sucAir"})},300)):"get_brand_wcpay_request:cancel"===t.err_msg?(r.sub=!1,(0,s.Toast)("用户取消支付")):"get_brand_wcpay_request:fail"===t.err_msg&&(r.sub=!1,(0,s.Toast)("网络异常，请重试"))})}}};i.default=n},ee79:function(t,i,e){"use strict";e.r(i);var a=e("434e"),s=e("8a39");for(var n in s)"default"!==n&&function(t){e.d(i,t,function(){return s[t]})}(n);e("0203");var o=e("2877"),r=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,"165db0f3",null);i["default"]=r.exports},f42a:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.ajaxs=i.ajax=void 0;var a=function(t){t=t||{},t.url=t.url||"",t.data=JSON.stringify(t.data||{}),t.method=t.method||"POST",t.header=t.header||{"Content-Type":"application/json"},t.success=t.success||function(){},t.fail=t.fail||function(){},console.log(t.data),uni.request({url:"https://m.xgcyz1978.com"+t.url,data:t.data,method:t.method,header:t.header,dataType:"json",success:function(i){t.success(i)},fail:function(i){t.fail(i),uni.showToast({title:"请稍后重试",icon:"none"})}})};i.ajax=a;var s=function(t){t=t||{},t.url=t.url||"",t.data=JSON.stringify(t.data||{}),t.method=t.method||"POST",t.header=t.header||{"Content-Type":"application/json"},t.success=t.success||function(){},t.fail=t.fail||function(){},console.log(t.data),uni.request({url:"https://m.xgcyz1978.com"+t.url,data:t.data,method:t.method,header:t.header,dataType:"json",success:function(i){t.success(i)},fail:function(i){t.fail(i),uni.showToast({title:"请稍后重试",icon:"none"})}})};i.ajaxs=s}}]);
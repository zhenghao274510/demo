
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login","pages/index/index","pages/user/user","pages/message/message","pages/product/product","pages/report/report","pages/set/set","pages/modify/modify","pages/look/look","pages/read/read","pages/addUser/addUser","pages/reset/reset","pages/carsCount/carsCount","pages/editor/editor","pages/text/text","pages/check/check","pages/carNumber/carNumber","pages/list/list","pages/all/all","pages/carList/carList","pages/everyList/everyList","pages/useList/useList","pages/everyUse/everyUse","pages/useCar/useCar","pages/everyCar/everyCar","pages/rich/rich"],"window":{"navigationStyle":"custom","navigationBarTextStyle":"black"},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"企业绩效管理","compilerVersion":"2.7.9","entryPagePath":"pages/login/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login","meta":{"isQuit":true},"window":{"navigationBarTitleText":""}},{"path":"/pages/index/index","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/user/user","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/message/message","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/product/product","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/report/report","meta":{},"window":{"navigationBarTitleText":"","bounce":"none"}},{"path":"/pages/set/set","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/modify/modify","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/look/look","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/read/read","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/addUser/addUser","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/reset/reset","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/carsCount/carsCount","meta":{},"window":{"navigationBarTextStyle":"white"}},{"path":"/pages/editor/editor","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/text/text","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/check/check","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/carNumber/carNumber","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/list/list","meta":{},"window":{"navigationBarTextStyle":"white"}},{"path":"/pages/all/all","meta":{},"window":{"navigationBarTextStyle":"white"}},{"path":"/pages/carList/carList","meta":{},"window":{"navigationBarTextStyle":"white"}},{"path":"/pages/everyList/everyList","meta":{},"window":{"navigationBarTextStyle":"white"}},{"path":"/pages/useList/useList","meta":{},"window":{"navigationBarTextStyle":"white"}},{"path":"/pages/everyUse/everyUse","meta":{},"window":{"navigationBarTextStyle":"white"}},{"path":"/pages/useCar/useCar","meta":{},"window":{"navigationBarTextStyle":"white"}},{"path":"/pages/everyCar/everyCar","meta":{},"window":{"navigationBarTextStyle":"white"}},{"path":"/pages/rich/rich","meta":{},"window":{"navigationBarTextStyle":"white"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});

var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login","pages/home/home","pages/my/my","pages/memo/memo","pages/feedback/feedback","pages/chat/chat","subpackage/case_forward/case_forward","subpackage/knowledge-extend/knowledge-extend","subpackage/search/search","subpackage/lawyer_market/lawyer_market"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"LegalLoom","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#e4f2f2","background":"#e4f2f2"},"tabBar":{"borderStyle":"white","selectedColor":"black","backgroundColor":"#ebf6f6","color":"#000","list":[{"pagePath":"pages/home/home","iconPath":"/static/tabBar/home.png","text":"首页","selectedIconPath":"static/tabBar/home-selected.png"},{"pagePath":"pages/my/my","iconPath":"/static/tabBar/my.png","selectedIconPath":"/static/tabBar/my-selected.png","text":"我的"},{"pagePath":"pages/memo/memo","iconPath":"/static/tabBar/memo.png","selectedIconPath":"/static/tabBar/memo-selected.png","text":"备忘录"},{"pagePath":"pages/feedback/feedback","iconPath":"/static/tabBar/feedback.png","selectedIconPath":"/static/tabBar/feedback-selected.png","text":"反馈"}],"midButton":{"iconPath":"/static/tabBar/chat-bc.png","text":"AI对话","iconWidth":"40px","height":"60px"}},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"LegalLoom","compilerVersion":"3.96","entryPagePath":"pages/login/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login","meta":{"isQuit":true},"window":{"navigationBarTitleText":"LegalLoom","enablePullDownRefresh":false}},{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"LegalLoom","enablePullDownRefresh":false}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"LegalLoom","enablePullDownRefresh":false}},{"path":"/pages/memo/memo","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"LegalLoom","enablePullDownRefresh":false}},{"path":"/pages/feedback/feedback","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"LegalLoom","enablePullDownRefresh":false}},{"path":"/pages/chat/chat","meta":{},"window":{"navigationBarTitleText":"LegalLoom","enablePullDownRefresh":false}},{"path":"/subpackage/case_forward/case_forward","meta":{},"window":{"navigationBarTitleText":"LegalLoom","enablePullDownRefresh":false}},{"path":"/subpackage/knowledge-extend/knowledge-extend","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/subpackage/search/search","meta":{},"window":{"navigationBarTitleText":"LegalLoom","enablePullDownRefresh":false}},{"path":"/subpackage/lawyer_market/lawyer_market","meta":{},"window":{"navigationBarTitleText":"LegalLoom","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
window.__require=function t(e,n,i){function o(c,s){if(!n[c]){if(!e[c]){var u=c.split("/");if(u=u[u.length-1],!e[u]){var a="function"==typeof __require&&__require;if(!s&&a)return a(u,!0);if(r)return r(u,!0);throw new Error("Cannot find module '"+c+"'")}c=u}var l=n[c]={exports:{}};e[c][0].call(l.exports,function(t){return o(e[c][1][t]||t)},l,l.exports,t,e,n,i)}return n[c].exports}for(var r="function"==typeof __require&&__require,c=0;c<i.length;c++)o(i[c]);return o}({"CanvasVideo ":[function(t,e,n){"use strict";cc._RF.push(e,"97b4a+8tjJLbZqF167K6xQG","CanvasVideo ");var i,o=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},c=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(o,r){function c(t){try{u(i.next(t))}catch(e){r(e)}}function s(t){try{u(i.throw(t))}catch(e){r(e)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(c,s)}u((i=i.apply(t,e||[])).next())})},s=this&&this.__generator||function(t,e){var n,i,o,r,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return u([t,e])}}function u(r){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,i=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){c=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){c.label=r[1];break}if(6===r[0]&&c.label<o[1]){c.label=o[1],o=r;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(r);break}o[2]&&c.ops.pop(),c.trys.pop();continue}r=e.call(t,c)}catch(s){r=[6,s],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}};Object.defineProperty(n,"__esModule",{value:!0});var u=t("./txySdk"),a=cc._decorator,l=a.ccclass,h=a.property,p=a.requireComponent,f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.videoPlayer=null,e.nextSizeBtn=null,e.spriteFrameCache=[],e.index=0,e._index=0,e}return o(e,t),e.prototype.start=function(){u.default.inst.initSdk(),this.nextSizeBtn=cc.find("New Button",this.node.parent),this.nextSizeBtn.on("click",this.changeShowSizeMode.bind(this))},e.prototype.changeShowSizeMode=function(){switch(this._index%=5,console.log("\u7a97\u53e3\u5927\u5c0f\u6a21\u5f0f"),this._index){case 0:console.log("Sprite node size"),this.visSize=new cc.Size(this.node.width,this.node.height);break;case 1:console.log("cc.winSize"),this.visSize=cc.winSize;break;case 2:console.log("CanvasSize"),this.visSize=cc.view.getCanvasSize();break;case 3:console.log("FrameSize"),this.visSize=cc.view.getFrameSize();break;case 4:console.log("VisibleSize"),this.visSize=cc.view.getVisibleSize()}this._index++,this.init(this.videoPlayer)},e.prototype.init=function(t){var e=this;t!==this.videoPlayer&&(this.videoPlayer=t);var n=document.createElement("canvas");n.width=this.node.width,n.height=this.node.height,this._canvas=n,this._canvasCtx=n.getContext("2d"),this._sprite=this.getComponent(cc.Sprite),this._texture=new cc.Texture2D;for(var i=0;i<2;i++)this.spriteFrameCache.push(new cc.SpriteFrame);this.bind(function(){e.unschedule(e.updateTexture),e.schedule(e.updateTexture,.04,cc.macro.REPEAT_FOREVER)})},e.prototype.updateTexture=function(){return c(this,void 0,Promise,function(){var t,e;return s(this,function(){return this.videoPlayer?(t=this.videoPlayer._impl._video,this._canvasCtx.drawImage(t,0,0,this.visSize.width,this.visSize.height),this._texture.initWithElement(this._canvas),(e=this.spriteFrameCache[this.index]).setTexture(this._texture),this._sprite.spriteFrame=e,this.index=1^this.index,[2]):[2]})})},e.prototype.bind=function(t){var e=this;this._videoPlayer=document.querySelector("video.cocosVideo"),this._videoPlayer2=document.querySelector("local_video"),navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then(function(n){u.default.inst.livePush(),e.handleSuccess(n),t()}).catch(this.handleError)},e.prototype.handleSuccess=function(){this._videoPlayer.srcObject=this._videoPlayer2.srcObject},e.prototype.handleError=function(t){console.log("\u7ed1\u5b9a\u5931\u8d25:",t.ToString())},e.prototype.clearSprite=function(){this._sprite.spriteFrame=null},r([h(cc.VideoPlayer)],e.prototype,"videoPlayer",void 0),r([l,p(cc.Sprite)],e)}(cc.Component);n.default=f,cc._RF.pop()},{"./txySdk":"txySdk"}],ReqHttp:[function(t,e,n){"use strict";cc._RF.push(e,"2fb017Mu31DW6ZqCLZaDXp5","ReqHttp"),Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function t(){}return t.getInst=function(){return this._inst||(this._inst=new t),this._inst},Object.defineProperty(t,"inst",{get:function(){return this.getInst()},enumerable:!1,configurable:!0}),Object.defineProperty(t,"xhr",{get:function(){return this._xhr||(this._xhr=cc.loader.getXMLHttpRequest()),this._xhr},enumerable:!1,configurable:!0}),t.post=function(t,e,n){var i=this.xhr;i.open("POST",t),i.onreadystatechange=function(){if(4==i.readyState&&i.status>=200&&i.status<=207){var t=i.responseText;n(t)}},i.send(e)},t.get=function(t,e,n){var i=this.xhr;i.open("GET",t+e),i.onreadystatechange=function(){if(4==i.readyState&&i.status>=200&&i.status<=207){var t=i.responseText;n(t)}},i.send()},t._inst=null,t._xhr=null,t}();n.default=i,cc._RF.pop()},{}],test2:[function(t,e,n){"use strict";cc._RF.push(e,"1fbf8Z4yHxF17SGRgp2kpLm","test2");var i,o=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c=t("./txySdk"),s=cc._decorator,u=s.ccclass,a=(s.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.start=function(){c.default.inst.initSdk(),c.default.inst.livePush()},r([u],e)}(cc.Component));n.default=a,cc._RF.pop()},{"./txySdk":"txySdk"}],test:[function(t,e,n){"use strict";cc._RF.push(e,"9a5aeQuIWZNqJrTSr+WITEF","test");var i,o=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,u=(c.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.start=function(){if(window.wx){console.log("wx:"),console.log(window.wx);var t=window.wx;t.getUserInfo({success:function(t){console.log(t)}}),this.scheduleOnce(function(){var e={appId:"wxec08df14b53cbf89",path:"",success:function(){console.log("navigateToMiniProgram succ!!!")},fail:function(){console.log("navigateToMiniProgram fail!!!")}};t.navigateToMiniProgram(e)},5)}},r([s],e)}(cc.Component));n.default=u,cc._RF.pop()},{}],txySdk:[function(t,e,n){"use strict";cc._RF.push(e,"89808JMGt9O5bpGwBRgJMhI","txySdk"),Object.defineProperty(n,"__esModule",{value:!0});var i=window.TXLivePusher,o=function(){function t(){this._content="local_video",this._livePusher=null}return t.getInst=function(){return this._inst||(this._inst=new t),this._inst},Object.defineProperty(t,"inst",{get:function(){return this.getInst()},enumerable:!1,configurable:!0}),t.prototype.initSdk=function(){i&&(this._livePusher=new i,this._livePusher.setRenderView(this._content),this._livePusher.videoView.muted=!0)},t.prototype.supportTest=function(){i.checkSupport().then(function(t){console.log("checkSupport"),console.log(t)})},t.prototype.updateVideoQuality=function(t){this._livePusher.setVideoQuality(t)},t.prototype.updateAudioQuality=function(t){this._livePusher.setAudioQuality(t)},t.prototype.customProperty=function(t,e){this._livePusher.setProperty(t,e)},t.prototype.livePush=function(){this._livePusher.startCamera().then(function(){this.livePusher.startPush("webrtc://168799.livepush.myqcloud.com/AppName/10001")}).catch(function(t){console.log("\u6253\u5f00\u6444\u50cf\u5934\u5931\u8d25: "+t.toString())})},t.prototype.stoplive=function(){this._livePusher.stopPush(),this._livePusher.stopCamera(),this._livePusher.stopMicrophone()},t.prototype.SwitchCamera=function(t){t&&this.livePush(),!t&&this._livePusher.stopCamera()},t.prototype.SwitchMicrophone=function(t){t&&this._livePusher.startMicrophone(),!t&&this._livePusher.stopMicrophone()},t.prototype.quit=function(){this._livePusher.isPushing()&&this.stoplive(),this._livePusher.destroy()},t._inst=null,t}();n.default=o,cc._RF.pop()},{}]},{},["CanvasVideo ","ReqHttp","test","test2","txySdk"]);
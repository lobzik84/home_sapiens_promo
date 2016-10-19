!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Sweetalert2=t()}(this,function(){"use strict";function e(){null===v.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(v.previousBodyPadding=document.body.style.paddingRight,document.body.style.paddingRight=K()+"px")}function t(){null!==v.previousBodyPadding&&(document.body.style.paddingRight=v.previousBodyPadding,v.previousBodyPadding=null)}function n(){if(void 0===arguments[0])return console.error("SweetAlert2 expects at least 1 attribute!"),!1;var e=f({},U);switch(typeof arguments[0]){case"string":e.title=arguments[0],e.text=arguments[1]||"",e.type=arguments[2]||"";break;case"object":f(e,arguments[0]),e.extraParams=arguments[0].extraParams,"email"===e.input&&null===e.inputValidator&&(e.inputValidator=function(e){return new Promise(function(t,n){var o=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;o.test(e)?t():n("Invalid email address")})});break;default:return console.error('SweetAlert2: Unexpected type of argument! Expected "string" or "object", got '+typeof arguments[0]),!1}Q(e);var t=g();return new Promise(function(n,i){function a(t,n){for(var o=B(e.focusCancel),r=0;r<o.length;r++){t+=n,t===o.length?t=0:-1===t&&(t=o.length-1);var i=o[t];if(O(i))return i.focus()}}function s(t){var n=t||window.event,r=n.keyCode||n.which;if(-1!==[9,13,32,27].indexOf(r)){for(var l=n.target||n.srcElement,s=B(e.focusCancel),c=-1,u=0;u<s.length;u++)if(l===s[u]){c=u;break}9===r?(n.shiftKey?a(c,-1):a(c,1),I(n)):13===r||32===r?-1===c&&(e.focusCancel?j(P,n):j(b,n)):27===r&&e.allowEscapeKey===!0&&(o.closeModal(e.onClose),i("esc"))}}e.timer&&(t.timeout=setTimeout(function(){o.closeModal(e.onClose),i("timer")},e.timer));var c=function(n){switch(n=n||e.input){case"select":case"textarea":case"file":return M(t,l[n]);case"checkbox":return t.querySelector("."+l.checkbox+" input");case"radio":return t.querySelector("."+l.radio+" input:checked")||t.querySelector("."+l.radio+" input:first-child");case"range":return t.querySelector("."+l.range+" input");default:return M(t,l.input)}},u=function(){var t=c();if(!t)return null;switch(e.input){case"checkbox":return t.checked?1:0;case"radio":return t.checked?t.value:null;case"file":return t.files.length?t.files[0]:null;default:return e.inputAutoTrim?t.value.trim():t.value}};e.input&&setTimeout(function(){var e=c();e&&A(e)},0);var d,f=function(t){e.showLoaderOnConfirm&&o.showLoading(),e.preConfirm?e.preConfirm(t,e.extraParams).then(function(r){o.closeModal(e.onClose),n(r||t)},function(e){o.hideLoading(),e&&o.showValidationError(e)}):(o.closeModal(e.onClose),n(t))},h=function(t){var n=t||window.event,r=n.target||n.srcElement,a=S(),l=x(),s=a===r||a.contains(r),c=l===r||l.contains(r);switch(n.type){case"mouseover":case"mouseup":e.buttonsStyling&&(s?a.style.backgroundColor=m(e.confirmButtonColor,-.1):c&&(l.style.backgroundColor=m(e.cancelButtonColor,-.1)));break;case"mouseout":e.buttonsStyling&&(s?a.style.backgroundColor=e.confirmButtonColor:c&&(l.style.backgroundColor=e.cancelButtonColor));break;case"mousedown":e.buttonsStyling&&(s?a.style.backgroundColor=m(e.confirmButtonColor,-.2):c&&(l.style.backgroundColor=m(e.cancelButtonColor,-.2)));break;case"click":if(s&&o.isVisible())if(e.input){var d=u();e.inputValidator?(o.disableInput(),e.inputValidator(d,e.extraParams).then(function(){o.enableInput(),f(d)},function(e){o.enableInput(),e&&o.showValidationError(e)})):f(d)}else f(!0);else c&&o.isVisible()&&(o.closeModal(e.onClose),i("cancel"))}},y=t.querySelectorAll("button");for(d=0;d<y.length;d++)y[d].onclick=h,y[d].onmouseover=h,y[d].onmouseout=h,y[d].onmousedown=h;E().onclick=function(){o.closeModal(e.onClose),i("close")},r.onclick=function(t){t.target===r&&e.allowOutsideClick&&(o.closeModal(e.onClose),i("overlay"))};var b=S(),P=x();e.reverseButtons?b.parentNode.insertBefore(P,b):b.parentNode.insertBefore(b,P),v.previousWindowKeyDown=window.onkeydown,window.onkeydown=s,e.buttonsStyling&&(b.style.borderLeftColor=e.confirmButtonColor,b.style.borderRightColor=e.confirmButtonColor),o.showLoading=o.enableLoading=function(){V(w()),V(b,"inline-block"),q(b,l.loading),q(t,l.loading),b.disabled=!0,P.disabled=!0},o.hideLoading=o.disableLoading=function(){e.showConfirmButton||(T(b),e.showCancelButton||T(w())),L(b,l.loading),L(t,l.loading),b.disabled=!1,P.disabled=!1},o.enableButtons=function(){b.disabled=!1,P.disabled=!1},o.disableButtons=function(){b.disabled=!0,P.disabled=!0},o.enableConfirmButton=function(){b.disabled=!1},o.disableConfirmButton=function(){b.disabled=!0},o.enableInput=function(){var e=c();if(!e)return!1;if("radio"===e.type)for(var t=e.parentNode.parentNode,n=t.querySelectorAll("input"),o=0;o<n.length;o++)n[o].disabled=!1;else e.disabled=!1},o.disableInput=function(){var e=c();if(!e)return!1;if(e&&"radio"===e.type)for(var t=e.parentNode.parentNode,n=t.querySelectorAll("input"),o=0;o<n.length;o++)n[o].disabled=!0;else e.disabled=!0},o.recalculateHeight=R(function(){var e=g(),t=e.style.display;e.style.minHeight="",V(e),e.style.minHeight=e.scrollHeight+1+"px",e.style.display=t},50),o.showValidationError=function(e){var t=k();t.innerHTML=e,V(t);var n=c();A(n),q(n,"error")},o.resetValidationError=function(){var e=k();T(e),o.recalculateHeight();var t=c();t&&L(t,"error")},o.getProgressSteps=function(){return e.progressSteps},o.setProgressSteps=function(t){e.progressSteps=t,Q(e)},o.showProgressSteps=function(){V(C())},o.hideProgressSteps=function(){T(C())},o.enableButtons(),o.hideLoading(),o.resetValidationError();var H,N=["input","file","range","select","radio","checkbox","textarea"];for(d=0;d<N.length;d++){var W=l[N[d]],D=M(t,W);if(H=c(N[d])){for(var K in H.attributes)if(H.attributes.hasOwnProperty(K)){var U=H.attributes[K].name;"type"!==U&&"value"!==U&&H.removeAttribute(U)}for(var z in e.inputAttributes)H.setAttribute(z,e.inputAttributes[z])}D.className=W,e.inputClass&&q(D,e.inputClass),T(D)}var Z;switch(e.input){case"text":case"email":case"password":case"number":case"tel":H=M(t,l.input),H.value=e.inputValue,H.placeholder=e.inputPlaceholder,H.type=e.input,V(H);break;case"file":H=M(t,l.file),H.placeholder=e.inputPlaceholder,H.type=e.input,V(H);break;case"range":var F=M(t,l.range),J=F.querySelector("input"),$=F.querySelector("output");J.value=e.inputValue,J.type=e.input,$.value=e.inputValue,V(F);break;case"select":var _=M(t,l.select);if(_.innerHTML="",e.inputPlaceholder){var G=document.createElement("option");G.innerHTML=e.inputPlaceholder,G.value="",G.disabled=!0,G.selected=!0,_.appendChild(G)}Z=function(t){for(var n in t){var o=document.createElement("option");o.value=n,o.innerHTML=t[n],e.inputValue===n&&(o.selected=!0),_.appendChild(o)}V(_),_.focus()};break;case"radio":var X=M(t,l.radio);X.innerHTML="",Z=function(t){for(var n in t){var o=1,r=document.createElement("input"),i=document.createElement("label"),a=document.createElement("span");r.type="radio",r.name=l.radio,r.value=n,r.id=l.radio+"-"+o++,e.inputValue===n&&(r.checked=!0),a.innerHTML=t[n],i.appendChild(r),i.appendChild(a),i["for"]=r.id,X.appendChild(i)}V(X);var s=X.querySelectorAll("input");s.length&&s[0].focus()};break;case"checkbox":var ee=M(t,l.checkbox),te=c("checkbox");te.type="checkbox",te.value=1,te.id=l.checkbox,te.checked=Boolean(e.inputValue);var ne=ee.getElementsByTagName("span");ne.length&&ee.removeChild(ne[0]),ne=document.createElement("span"),ne.innerHTML=e.inputPlaceholder,ee.appendChild(ne),V(ee);break;case"textarea":var oe=M(t,l.textarea);oe.value=e.inputValue,oe.placeholder=e.inputPlaceholder,V(oe);break;case null:break;default:console.error('SweetAlert2: Unexpected type of input! Expected "text" or "email" or "password", "select", "checkbox", "textarea" or "file", got "'+e.input+'"')}"select"!==e.input&&"radio"!==e.input||(e.inputOptions instanceof Promise?(o.showLoading(),e.inputOptions.then(function(e){o.hideLoading(),Z(e)})):"object"==typeof e.inputOptions?Z(e.inputOptions):console.error("SweetAlert2: Unexpected type of inputOptions! Expected object or Promise, got "+typeof e.inputOptions)),Y(e.animation,e.onOpen),a(-1,1),r.scrollTop=0,"undefined"==typeof MutationObserver||p||(p=new MutationObserver(o.recalculateHeight),p.observe(t,{childList:!0,characterData:!0,subtree:!0}))})}function o(){var e=arguments;return o.isVisible()&&o.close(),n.apply(this,e)}var r,i="swal2-",a=function(e){var t={};for(var n in e)t[e[n]]=i+e[n];return t},l=a(["container","in","modal","overlay","close","content","spacer","confirm","cancel","icon","image","input","file","range","select","radio","checkbox","textarea","validationerror","progresssteps","activeprogressstep","progresscircle","progressline","loading","styled"]),s=a(["success","warning","info","question","error"]),c={title:"",text:"",html:"",type:null,customClass:"",animation:!0,allowOutsideClick:!0,allowEscapeKey:!0,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonColor:"#3085d6",confirmButtonClass:null,cancelButtonText:"Cancel",cancelButtonColor:"#aaa",cancelButtonClass:null,buttonsStyling:!0,reverseButtons:!1,focusCancel:!1,showCloseButton:!1,showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageClass:null,timer:null,width:500,padding:20,background:"#fff",input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:null,inputAttributes:{},inputValidator:null,progressSteps:[],currentProgressStep:null,progressStepsDistance:"40px",onOpen:null,onClose:null},u='<div class="'+l.modal+'" style="display: none" tabIndex="-1"><ul class="'+l.progresssteps+'"></ul><div class="'+l.icon+" "+s.error+'"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="'+l.icon+" "+s.question+'">?</div><div class="'+l.icon+" "+s.warning+'">!</div><div class="'+l.icon+" "+s.info+'">i</div><div class="'+l.icon+" "+s.success+'"><span class="line tip"></span> <span class="line long"></span><div class="placeholder"></div> <div class="fix"></div></div><img class="'+l.image+'"><h2></h2><div class="'+l.content+'"></div><input class="'+l.input+'"><input type="file" class="'+l.file+'"><div class="'+l.range+'"><output></output><input type="range"></div><select class="'+l.select+'"></select><div class="'+l.radio+'"></div><label for="'+l.checkbox+'" class="'+l.checkbox+'"><input type="checkbox"></label><textarea class="'+l.textarea+'"></textarea><div class="'+l.validationerror+'"></div><hr class="'+l.spacer+'"><button type="button" class="'+l.confirm+'">OK</button><button type="button" class="'+l.cancel+'">Cancel</button><span class="'+l.close+'">&times;</span></div>',d=document.getElementsByClassName(l.container);d.length?r=d[0]:(r=document.createElement("div"),r.className=l.container,r.innerHTML=u);var p,f=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},m=function(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;for(var n="#",o=0;3>o;o++){var r=parseInt(e.substr(2*o,2),16);r=Math.round(Math.min(Math.max(0,r+r*t),255)).toString(16),n+=("00"+r).substr(r.length)}return n},v={previousWindowKeyDown:null,previousActiveElement:null,previousBodyPadding:null},h=function(){if("undefined"==typeof document)return void console.error("SweetAlert2 requires document to initialize");if(!document.getElementsByClassName(l.container).length){document.body.appendChild(r);var e=g(),t=M(e,l.input),n=M(e,l.file),i=e.querySelector("."+l.range+" input"),a=M(e,l.select),s=e.querySelector("."+l.checkbox+" input"),c=M(e,l.textarea);return t.oninput=function(){o.resetValidationError()},t.onkeyup=function(e){e.stopPropagation(),13===e.keyCode&&o.clickConfirm()},n.onchange=function(){o.resetValidationError()},i.oninput=function(){o.resetValidationError(),i.previousSibling.value=i.value},i.onchange=function(){o.resetValidationError(),i.previousSibling.value=i.value},a.onchange=function(){o.resetValidationError()},s.onchange=function(){o.resetValidationError()},c.oninput=function(){o.resetValidationError()},e}},y=function(e){return r.querySelector("."+e)},g=function(){return document.body.querySelector("."+l.modal)||h()},b=function(){var e=g();return e.querySelectorAll("."+l.icon)},w=function(){return y(l.spacer)},C=function(){return y(l.progresssteps)},k=function(){return y(l.validationerror)},S=function(){return y(l.confirm)},x=function(){return y(l.cancel)},E=function(){return y(l.close)},B=function(e){var t=[S(),x()];return e&&t.reverse(),t.concat(Array.prototype.slice.call(g().querySelectorAll("button:not([class^="+i+"]), input:not([type=hidden]), textarea, select")))},P=function(e,t){return e.classList.contains(t)},A=function(e){if(e.focus(),"file"!==e.type){var t=e.value;e.value="",e.value=t}},q=function(e,t){if(e&&t){var n=t.split(/\s+/);n.forEach(function(t){e.classList.add(t)})}},L=function(e,t){if(e&&t){var n=t.split(/\s+/);n.forEach(function(t){e.classList.remove(t)})}},M=function(e,t){for(var n=0;n<e.childNodes.length;n++)if(P(e.childNodes[n],t))return e.childNodes[n]},V=function(e,t){t||(t="block"),e.style.opacity="",e.style.display=t},T=function(e){e.style.opacity="",e.style.display="none"},H=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},O=function(e){return e.offsetWidth||e.offsetHeight||e.getClientRects().length},N=function(e,t){e.style.removeProperty?e.style.removeProperty(t):e.style.removeAttribute(t)},j=function(e){if("function"==typeof MouseEvent){var t=new MouseEvent("click",{view:window,bubbles:!1,cancelable:!0});e.dispatchEvent(t)}else if(document.createEvent){var n=document.createEvent("MouseEvents");n.initEvent("click",!1,!1),e.dispatchEvent(n)}else document.createEventObject?e.fireEvent("onclick"):"function"==typeof e.onclick&&e.onclick()},I=function(e){"function"==typeof e.stopPropagation?(e.stopPropagation(),e.preventDefault()):window.event&&window.event.hasOwnProperty("cancelBubble")&&(window.event.cancelBubble=!0)},W=function(){var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",msAnimation:"MSAnimationEnd",animation:"animationend"};for(var n in t)if(t.hasOwnProperty(n)&&void 0!==e.style[n])return t[n];return!1}(),D=function(){var e=g();window.onkeydown=v.previousWindowKeyDown,v.previousActiveElement&&v.previousActiveElement.focus&&v.previousActiveElement.focus(),clearTimeout(e.timeout)},K=function(){var e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t},R=function(e,t,n){var o;return function(){var r=this,i=arguments,a=function(){o=null,n||e.apply(r,i)},l=n&&!o;clearTimeout(o),o=setTimeout(a,t),l&&e.apply(r,i)}},U=f({},c),z=[],Q=function(e){var t=g();for(var n in e)c.hasOwnProperty(n)||"extraParams"===n||console.warn('SweetAlert2: Unknown parameter "'+n+'"');t.style.width="number"==typeof e.width?e.width+"px":e.width,t.style.padding=e.padding+"px",t.style.background=e.background;var r=t.querySelector("h2"),i=t.querySelector("."+l.content),a=S(),u=x(),d=t.querySelector("."+l.close);r.innerHTML=e.title.split("\n").join("<br>");var p;if(e.text||e.html){if("object"==typeof e.html)if(i.innerHTML="",0 in e.html)for(p=0;p in e.html;p++)i.appendChild(e.html[p].cloneNode(!0));else i.appendChild(e.html.cloneNode(!0));else i.innerHTML=e.html||e.text.split("\n").join("<br>");V(i)}else T(i);e.showCloseButton?V(d):T(d),t.className=l.modal,e.customClass&&q(t,e.customClass);var f=C(),m=parseInt(null===e.currentProgressStep?o.getQueueStep():e.currentProgressStep,10);e.progressSteps.length?(V(f),H(f),m>=e.progressSteps.length&&console.warn("SweetAlert2: Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach(function(t,n){var o=document.createElement("li");if(q(o,l.progresscircle),o.innerHTML=t,n===m&&q(o,l.activeprogressstep),f.appendChild(o),n!==e.progressSteps.length-1){var r=document.createElement("li");q(r,l.progressline),r.style.width=e.progressStepsDistance,f.appendChild(r)}})):T(f);var v=b();for(p=0;p<v.length;p++)T(v[p]);if(e.type){var h=!1;for(var y in s)if(e.type===y){h=!0;break}if(!h)return console.error("SweetAlert2: Unknown alert type: "+e.type),!1;var k=t.querySelector("."+l.icon+"."+s[e.type]);switch(V(k),e.type){case"success":q(k,"animate"),q(k.querySelector(".tip"),"animate-success-tip"),q(k.querySelector(".long"),"animate-success-long");break;case"error":q(k,"animate-error-icon"),q(k.querySelector(".x-mark"),"animate-x-mark");break;case"warning":q(k,"pulse-warning")}}var E=t.querySelector("."+l.image);e.imageUrl?(E.setAttribute("src",e.imageUrl),V(E),e.imageWidth?E.setAttribute("width",e.imageWidth):E.removeAttribute("width"),e.imageHeight?E.setAttribute("height",e.imageHeight):E.removeAttribute("height"),E.className=l.image,e.imageClass&&q(E,e.imageClass)):T(E),e.showCancelButton?u.style.display="inline-block":T(u),e.showConfirmButton?N(a,"display"):T(a);var B=w();e.showConfirmButton||e.showCancelButton?V(B):T(B),a.innerHTML=e.confirmButtonText,u.innerHTML=e.cancelButtonText,e.buttonsStyling&&(a.style.backgroundColor=e.confirmButtonColor,u.style.backgroundColor=e.cancelButtonColor),a.className=l.confirm,q(a,e.confirmButtonClass),u.className=l.cancel,q(u,e.cancelButtonClass),e.buttonsStyling?(q(a,l.styled),q(u,l.styled)):(L(a,l.styled),L(u,l.styled),a.style.backgroundColor=a.style.borderLeftColor=a.style.borderRightColor="",u.style.backgroundColor=u.style.borderLeftColor=u.style.borderRightColor=""),e.animation===!0?L(t,"no-animation"):q(t,"no-animation")},Y=function(t,n){var o=g();t?(q(o,"show-swal2"),q(r,"fade"),L(o,"hide-swal2")):L(o,"fade"),V(o),r.style.overflowY="hidden",W&&!P(o,"no-animation")?o.addEventListener(W,function i(){o.removeEventListener(W,i),r.style.overflowY="auto"}):r.style.overflowY="auto",q(r,"in"),q(document.body,l["in"]),e(),v.previousActiveElement=document.activeElement,null!==n&&"function"==typeof n&&n.call(this,o)};return o.isVisible=function(){var e=g();return O(e)},o.queue=function(e){z=e;var t=g(),n=function(){z=[],t.removeAttribute("data-queue-step")};return new Promise(function(e,r){!function i(a,l){a<z.length?(t.setAttribute("data-queue-step",a),o(z[a]).then(function(){i(a+1,l)},function(e){n(),r(e)})):(n(),e())}(0)})},o.getQueueStep=function(){return g().getAttribute("data-queue-step")},o.insertQueueStep=function(e,t){return t&&t<z.length?z.splice(t,0,e):z.push(e)},o.deleteQueueStep=function(e){"undefined"!=typeof z[e]&&z.splice(e,1)},o.close=o.closeModal=function(e){var n=g();L(n,"show-swal2"),q(n,"hide-swal2");var o=n.querySelector("."+l.icon+"."+s.success);L(o,"animate"),L(o.querySelector(".tip"),"animate-success-tip"),L(o.querySelector(".long"),"animate-success-long");var i=n.querySelector("."+l.icon+"."+s.error);L(i,"animate-error-icon"),L(i.querySelector(".x-mark"),"animate-x-mark");var a=n.querySelector("."+l.icon+"."+s.warning);L(a,"pulse-warning"),D(),W&&!P(n,"no-animation")?n.addEventListener(W,function c(){n.removeEventListener(W,c),P(n,"hide-swal2")&&(T(n),L(r,"in"),L(document.body,l["in"]),t())}):(T(n),L(r,"in"),L(document.body,l["in"]),t()),null!==e&&"function"==typeof e&&e.call(this,n)},o.clickConfirm=function(){S().click()},o.clickCancel=function(){x().click()},o.setDefaults=function(e){if(!e)throw new Error("userParams is required");if("object"!=typeof e)throw new Error("userParams has to be a object");f(U,e)},o.resetDefaults=function(){U=f({},c)},o.version="5.2.1","function"==typeof Promise?Promise.prototype.done=Promise.prototype.done||function(){return this["catch"](function(){})}:console.warn("SweetAlert2: Please inlude Promise polyfill BEFORE including sweetalert2.js if IE10+ support needed."),o}),window.Sweetalert2&&(window.sweetAlert=window.swal=window.Sweetalert2);
                                                                                                                                            
                                                                                                                                            /*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   3.1.2
 */

(function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function e(t){return"function"==typeof t}function n(t){W=t}function r(t){H=t}function o(){return function(){process.nextTick(a)}}function i(){return function(){U(a)}}function s(){var t=0,e=new Q(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){t.port2.postMessage(0)}}function c(){return function(){setTimeout(a,1)}}function a(){for(var t=0;G>t;t+=2){var e=X[t],n=X[t+1];e(n),X[t]=void 0,X[t+1]=void 0}G=0}function f(){try{var t=require,e=t("vertx");return U=e.runOnLoop||e.runOnContext,i()}catch(n){return c()}}function l(t,e){var n=this,r=n._state;if(r===et&&!t||r===nt&&!e)return this;var o=new this.constructor(p),i=n._result;if(r){var s=arguments[r-1];H(function(){C(r,o,s,i)})}else j(n,o,t,e);return o}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function p(){}function _(){return new TypeError("You cannot resolve a promise with itself")}function v(){return new TypeError("A promises callback cannot return that same promise.")}function d(t){try{return t.then}catch(e){return rt.error=e,rt}}function y(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function m(t,e,n){H(function(t){var r=!1,o=y(n,e,function(n){r||(r=!0,e!==n?g(t,n):E(t,n))},function(e){r||(r=!0,S(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,S(t,o))},t)}function w(t,e){e._state===et?E(t,e._result):e._state===nt?S(t,e._result):j(e,void 0,function(e){g(t,e)},function(e){S(t,e)})}function b(t,n,r){n.constructor===t.constructor&&r===Z&&constructor.resolve===$?w(t,n):r===rt?S(t,rt.error):void 0===r?E(t,n):e(r)?m(t,n,r):E(t,n)}function g(e,n){e===n?S(e,_()):t(n)?b(e,n,d(n)):E(e,n)}function A(t){t._onerror&&t._onerror(t._result),T(t)}function E(t,e){t._state===tt&&(t._result=e,t._state=et,0!==t._subscribers.length&&H(T,t))}function S(t,e){t._state===tt&&(t._state=nt,t._result=e,H(A,t))}function j(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+et]=n,o[i+nt]=r,0===i&&t._state&&H(T,t)}function T(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,o,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?C(n,r,o,i):o(i);t._subscribers.length=0}}function P(){this.error=null}function x(t,e){try{return t(e)}catch(n){return ot.error=n,ot}}function C(t,n,r,o){var i,s,u,c,a=e(r);if(a){if(i=x(r,o),i===ot?(c=!0,s=i.error,i=null):u=!0,n===i)return void S(n,v())}else i=o,u=!0;n._state!==tt||(a&&u?g(n,i):c?S(n,s):t===et?E(n,i):t===nt&&S(n,i))}function M(t,e){try{e(function(e){g(t,e)},function(e){S(t,e)})}catch(n){S(t,n)}}function O(t){return new ft(this,t).promise}function k(t){function e(t){g(o,t)}function n(t){S(o,t)}var r=this,o=new r(p);if(!B(t))return S(o,new TypeError("You must pass an array to race.")),o;for(var i=t.length,s=0;o._state===tt&&i>s;s++)j(r.resolve(t[s]),void 0,e,n);return o}function Y(t){var e=this,n=new e(p);return S(n,t),n}function q(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function F(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function D(t){this._id=ct++,this._state=void 0,this._result=void 0,this._subscribers=[],p!==t&&("function"!=typeof t&&q(),this instanceof D?M(this,t):F())}function K(t,e){this._instanceConstructor=t,this.promise=new t(p),Array.isArray(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?E(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&E(this.promise,this._result))):S(this.promise,this._validationError())}function L(){var t;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;(!n||"[object Promise]"!==Object.prototype.toString.call(n.resolve())||n.cast)&&(t.Promise=at)}var N;N=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var U,W,z,B=N,G=0,H=function(t,e){X[G]=t,X[G+1]=e,G+=2,2===G&&(W?W(a):z())},I="undefined"!=typeof window?window:void 0,J=I||{},Q=J.MutationObserver||J.WebKitMutationObserver,R="undefined"!=typeof process&&"[object process]"==={}.toString.call(process),V="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,X=new Array(1e3);z=R?o():Q?s():V?u():void 0===I&&"function"==typeof require?f():c();var Z=l,$=h,tt=void 0,et=1,nt=2,rt=new P,ot=new P,it=O,st=k,ut=Y,ct=0,at=D;D.all=it,D.race=st,D.resolve=$,D.reject=ut,D._setScheduler=n,D._setAsap=r,D._asap=H,D.prototype={constructor:D,then:Z,"catch":function(t){return this.then(null,t)}};var ft=K;K.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},K.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===tt&&t>n;n++)this._eachEntry(e[n],n)},K.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===$){var o=d(t);if(o===Z&&t._state!==tt)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===at){var i=new n(p);b(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){e(t)}),e)}else this._willSettleAt(r(t),e)},K.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===tt&&(this._remaining--,t===nt?S(r,n):this._result[e]=n),0===this._remaining&&E(r,this._result)},K.prototype._willSettleAt=function(t,e){var n=this;j(t,void 0,function(t){n._settledAt(et,e,t)},function(t){n._settledAt(nt,e,t)})};var lt=L,ht={Promise:at,polyfill:lt};"function"==typeof define&&define.amd?define(function(){return ht}):"undefined"!=typeof module&&module.exports?module.exports=ht:"undefined"!=typeof this&&(this.ES6Promise=ht),lt()}).call(this);
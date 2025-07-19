(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var qf={exports:{}},bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function pS(){if(u_)return bo;u_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:u}}return bo.Fragment=e,bo.jsx=i,bo.jsxs=i,bo}var c_;function mS(){return c_||(c_=1,qf.exports=pS()),qf.exports}var Oe=mS(),Yf={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function gS(){if(f_)return st;f_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function S(U,$,xe){this.props=U,this.context=$,this.refs=R,this.updater=xe||M}S.prototype.isReactComponent={},S.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=S.prototype;function N(U,$,xe){this.props=U,this.context=$,this.refs=R,this.updater=xe||M}var L=N.prototype=new _;L.constructor=N,T(L,S.prototype),L.isPureReactComponent=!0;var D=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function z(U,$,xe,ye,Q,me){return xe=me.ref,{$$typeof:s,type:U,key:$,ref:xe!==void 0?xe:null,props:me}}function q(U,$){return z(U.type,$,void 0,void 0,void 0,U.props)}function w(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function C(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(xe){return $[xe]})}var G=/\/+/g;function le(U,$){return typeof U=="object"&&U!==null&&U.key!=null?C(""+U.key):$.toString(36)}function se(){}function ve(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(se,se):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function de(U,$,xe,ye,Q){var me=typeof U;(me==="undefined"||me==="boolean")&&(U=null);var Me=!1;if(U===null)Me=!0;else switch(me){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(U.$$typeof){case s:case e:Me=!0;break;case g:return Me=U._init,de(Me(U._payload),$,xe,ye,Q)}}if(Me)return Q=Q(U),Me=ye===""?"."+le(U,0):ye,D(Q)?(xe="",Me!=null&&(xe=Me.replace(G,"$&/")+"/"),de(Q,$,xe,"",function(lt){return lt})):Q!=null&&(w(Q)&&(Q=q(Q,xe+(Q.key==null||U&&U.key===Q.key?"":(""+Q.key).replace(G,"$&/")+"/")+Me)),$.push(Q)),1;Me=0;var Re=ye===""?".":ye+":";if(D(U))for(var we=0;we<U.length;we++)ye=U[we],me=Re+le(ye,we),Me+=de(ye,$,xe,me,Q);else if(we=x(U),typeof we=="function")for(U=we.call(U),we=0;!(ye=U.next()).done;)ye=ye.value,me=Re+le(ye,we++),Me+=de(ye,$,xe,me,Q);else if(me==="object"){if(typeof U.then=="function")return de(ve(U),$,xe,ye,Q);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return Me}function B(U,$,xe){if(U==null)return U;var ye=[],Q=0;return de(U,ye,"","",function(me){return $.call(xe,me,Q++)}),ye}function Z(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(xe){(U._status===0||U._status===-1)&&(U._status=1,U._result=xe)},function(xe){(U._status===0||U._status===-1)&&(U._status=2,U._result=xe)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var Y=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function Ee(){}return st.Children={map:B,forEach:function(U,$,xe){B(U,function(){$.apply(this,arguments)},xe)},count:function(U){var $=0;return B(U,function(){$++}),$},toArray:function(U){return B(U,function($){return $})||[]},only:function(U){if(!w(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},st.Component=S,st.Fragment=i,st.Profiler=l,st.PureComponent=N,st.StrictMode=r,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,st.__COMPILER_RUNTIME={__proto__:null,c:function(U){return F.H.useMemoCache(U)}},st.cache=function(U){return function(){return U.apply(null,arguments)}},st.cloneElement=function(U,$,xe){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var ye=T({},U.props),Q=U.key,me=void 0;if($!=null)for(Me in $.ref!==void 0&&(me=void 0),$.key!==void 0&&(Q=""+$.key),$)!k.call($,Me)||Me==="key"||Me==="__self"||Me==="__source"||Me==="ref"&&$.ref===void 0||(ye[Me]=$[Me]);var Me=arguments.length-2;if(Me===1)ye.children=xe;else if(1<Me){for(var Re=Array(Me),we=0;we<Me;we++)Re[we]=arguments[we+2];ye.children=Re}return z(U.type,Q,void 0,void 0,me,ye)},st.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},st.createElement=function(U,$,xe){var ye,Q={},me=null;if($!=null)for(ye in $.key!==void 0&&(me=""+$.key),$)k.call($,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(Q[ye]=$[ye]);var Me=arguments.length-2;if(Me===1)Q.children=xe;else if(1<Me){for(var Re=Array(Me),we=0;we<Me;we++)Re[we]=arguments[we+2];Q.children=Re}if(U&&U.defaultProps)for(ye in Me=U.defaultProps,Me)Q[ye]===void 0&&(Q[ye]=Me[ye]);return z(U,me,void 0,void 0,null,Q)},st.createRef=function(){return{current:null}},st.forwardRef=function(U){return{$$typeof:h,render:U}},st.isValidElement=w,st.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:Z}},st.memo=function(U,$){return{$$typeof:p,type:U,compare:$===void 0?null:$}},st.startTransition=function(U){var $=F.T,xe={};F.T=xe;try{var ye=U(),Q=F.S;Q!==null&&Q(xe,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(Ee,Y)}catch(me){Y(me)}finally{F.T=$}},st.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},st.use=function(U){return F.H.use(U)},st.useActionState=function(U,$,xe){return F.H.useActionState(U,$,xe)},st.useCallback=function(U,$){return F.H.useCallback(U,$)},st.useContext=function(U){return F.H.useContext(U)},st.useDebugValue=function(){},st.useDeferredValue=function(U,$){return F.H.useDeferredValue(U,$)},st.useEffect=function(U,$,xe){var ye=F.H;if(typeof xe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ye.useEffect(U,$)},st.useId=function(){return F.H.useId()},st.useImperativeHandle=function(U,$,xe){return F.H.useImperativeHandle(U,$,xe)},st.useInsertionEffect=function(U,$){return F.H.useInsertionEffect(U,$)},st.useLayoutEffect=function(U,$){return F.H.useLayoutEffect(U,$)},st.useMemo=function(U,$){return F.H.useMemo(U,$)},st.useOptimistic=function(U,$){return F.H.useOptimistic(U,$)},st.useReducer=function(U,$,xe){return F.H.useReducer(U,$,xe)},st.useRef=function(U){return F.H.useRef(U)},st.useState=function(U){return F.H.useState(U)},st.useSyncExternalStore=function(U,$,xe){return F.H.useSyncExternalStore(U,$,xe)},st.useTransition=function(){return F.H.useTransition()},st.version="19.1.0",st}var d_;function yh(){return d_||(d_=1,Yf.exports=gS()),Yf.exports}var pe=yh(),jf={exports:{}},Ao={},Zf={exports:{}},Kf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function _S(){return h_||(h_=1,function(s){function e(B,Z){var Y=B.length;B.push(Z);e:for(;0<Y;){var Ee=Y-1>>>1,U=B[Ee];if(0<l(U,Z))B[Ee]=Z,B[Y]=U,Y=Ee;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Z=B[0],Y=B.pop();if(Y!==Z){B[0]=Y;e:for(var Ee=0,U=B.length,$=U>>>1;Ee<$;){var xe=2*(Ee+1)-1,ye=B[xe],Q=xe+1,me=B[Q];if(0>l(ye,Y))Q<U&&0>l(me,ye)?(B[Ee]=me,B[Q]=Y,Ee=Q):(B[Ee]=ye,B[xe]=Y,Ee=xe);else if(Q<U&&0>l(me,Y))B[Ee]=me,B[Q]=Y,Ee=Q;else break e}}return Z}function l(B,Z){var Y=B.sortIndex-Z.sortIndex;return Y!==0?Y:B.id-Z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,v=null,x=3,M=!1,T=!1,R=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(B){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=B)r(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=i(p)}}function F(B){if(R=!1,D(B),!T)if(i(m)!==null)T=!0,k||(k=!0,le());else{var Z=i(p);Z!==null&&de(F,Z.startTime-B)}}var k=!1,z=-1,q=5,w=-1;function C(){return S?!0:!(s.unstable_now()-w<q)}function G(){if(S=!1,k){var B=s.unstable_now();w=B;var Z=!0;try{e:{T=!1,R&&(R=!1,N(z),z=-1),M=!0;var Y=x;try{t:{for(D(B),v=i(m);v!==null&&!(v.expirationTime>B&&C());){var Ee=v.callback;if(typeof Ee=="function"){v.callback=null,x=v.priorityLevel;var U=Ee(v.expirationTime<=B);if(B=s.unstable_now(),typeof U=="function"){v.callback=U,D(B),Z=!0;break t}v===i(m)&&r(m),D(B)}else r(m);v=i(m)}if(v!==null)Z=!0;else{var $=i(p);$!==null&&de(F,$.startTime-B),Z=!1}}break e}finally{v=null,x=Y,M=!1}Z=void 0}}finally{Z?le():k=!1}}}var le;if(typeof L=="function")le=function(){L(G)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,ve=se.port2;se.port1.onmessage=G,le=function(){ve.postMessage(null)}}else le=function(){_(G,0)};function de(B,Z){z=_(function(){B(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(B){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var Y=x;x=Z;try{return B()}finally{x=Y}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=x;x=B;try{return Z()}finally{x=Y}},s.unstable_scheduleCallback=function(B,Z,Y){var Ee=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Ee+Y:Ee):Y=Ee,B){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=Y+U,B={id:g++,callback:Z,priorityLevel:B,startTime:Y,expirationTime:U,sortIndex:-1},Y>Ee?(B.sortIndex=Y,e(p,B),i(m)===null&&B===i(p)&&(R?(N(z),z=-1):R=!0,de(F,Y-Ee))):(B.sortIndex=U,e(m,B),T||M||(T=!0,k||(k=!0,le()))),B},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(B){var Z=x;return function(){var Y=x;x=Z;try{return B.apply(this,arguments)}finally{x=Y}}}}(Kf)),Kf}var p_;function vS(){return p_||(p_=1,Zf.exports=_S()),Zf.exports}var Qf={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function xS(){if(m_)return Cn;m_=1;var s=yh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Cn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},Cn.flushSync=function(m){var p=d.T,g=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=g,r.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Cn.requestFormReset=function(m){r.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},Cn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Cn.version="19.1.0",Cn}var g_;function SS(){if(g_)return Qf.exports;g_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Qf.exports=xS(),Qf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function yS(){if(__)return Ao;__=1;var s=vS(),e=yh(),i=SS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return h(c),t;if(f===o)return h(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var y=!1,b=c.child;b;){if(b===a){y=!0,a=c,o=f;break}if(b===o){y=!0,o=c,a=f;break}b=b.sibling}if(!y){for(b=f.child;b;){if(b===a){y=!0,a=f,o=c;break}if(b===o){y=!0,o=f,a=c;break}b=b.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var se=Symbol.for("react.client.reference");function ve(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===se?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case S:return"Profiler";case R:return"StrictMode";case F:return"Suspense";case k:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case L:return(t.displayName||"Context")+".Provider";case N:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:ve(t.type)||"Memo";case q:n=t._payload,t=t._init;try{return ve(t(n))}catch{}}return null}var de=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Ee=[],U=-1;function $(t){return{current:t}}function xe(t){0>U||(t.current=Ee[U],Ee[U]=null,U--)}function ye(t,n){U++,Ee[U]=t.current,t.current=n}var Q=$(null),me=$(null),Me=$(null),Re=$(null);function we(t,n){switch(ye(Me,n),ye(me,t),ye(Q,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?zg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=zg(n),t=Ig(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}xe(Q),ye(Q,t)}function lt(){xe(Q),xe(me),xe(Me)}function Je(t){t.memoizedState!==null&&ye(Re,t);var n=Q.current,a=Ig(n,t.type);n!==a&&(ye(me,t),ye(Q,a))}function Nt(t){me.current===t&&(xe(Q),xe(me)),Re.current===t&&(xe(Re),So._currentValue=Y)}var It=Object.prototype.hasOwnProperty,gt=s.unstable_scheduleCallback,I=s.unstable_cancelCallback,xn=s.unstable_shouldYield,Mt=s.unstable_requestPaint,ht=s.unstable_now,ke=s.unstable_getCurrentPriorityLevel,_t=s.unstable_ImmediatePriority,Ze=s.unstable_UserBlockingPriority,rt=s.unstable_NormalPriority,Qt=s.unstable_LowPriority,O=s.unstable_IdlePriority,E=s.log,ee=s.unstable_setDisableYieldValue,ce=null,he=null;function oe(t){if(typeof E=="function"&&ee(t),he&&typeof he.setStrictMode=="function")try{he.setStrictMode(ce,t)}catch{}}var Be=Math.clz32?Math.clz32:Xe,Ue=Math.log,Ve=Math.LN2;function Xe(t){return t>>>=0,t===0?32:31-(Ue(t)/Ve|0)|0}var Se=256,ze=4194304;function Ye(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function je(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var b=o&134217727;return b!==0?(o=b&~f,o!==0?c=Ye(o):(y&=b,y!==0?c=Ye(y):a||(a=b&~t,a!==0&&(c=Ye(a))))):(b=o&~f,b!==0?c=Ye(b):y!==0?c=Ye(y):a||(a=o&~t,a!==0&&(c=Ye(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ce(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function at(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V(){var t=Se;return Se<<=1,(Se&4194048)===0&&(Se=256),t}function Le(){var t=ze;return ze<<=1,(ze&62914560)===0&&(ze=4194304),t}function Te(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ie(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ae(t,n,a,o,c,f){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,P=t.expirationTimes,J=t.hiddenUpdates;for(a=y&~a;0<a;){var ue=31-Be(a),ge=1<<ue;b[ue]=0,P[ue]=-1;var te=J[ue];if(te!==null)for(J[ue]=null,ue=0;ue<te.length;ue++){var ne=te[ue];ne!==null&&(ne.lane&=-536870913)}a&=~ge}o!==0&&_e(t,o,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(y&~n))}function _e(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Be(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function He(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Be(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function it(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Dt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tt(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:i_(t.type))}function Gn(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var hn=Math.random().toString(36).slice(2),on="__reactFiber$"+hn,Sn="__reactProps$"+hn,Nn="__reactContainer$"+hn,Ya="__reactEvents$"+hn,jo="__reactListeners$"+hn,Zo="__reactHandles$"+hn,ja="__reactResources$"+hn,ca="__reactMarker$"+hn;function fa(t){delete t[on],delete t[Sn],delete t[Ya],delete t[jo],delete t[Zo]}function wi(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Nn]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Vg(t);t!==null;){if(a=t[on])return a;t=Vg(t)}return n}t=a,a=t.parentNode}return null}function Di(t){if(t=t[on]||t[Nn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Za(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function da(t){var n=t[ja];return n||(n=t[ja]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(t){t[ca]=!0}var Ko=new Set,Qo={};function Ui(t,n){A(t,n),A(t+"Capture",n)}function A(t,n){for(Qo[t]=n,t=0;t<n.length;t++)Ko.add(n[t])}var W=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},ae={};function j(t){return It.call(ae,t)?!0:It.call(ie,t)?!1:W.test(t)?ae[t]=!0:(ie[t]=!0,!1)}function be(t,n,a){if(j(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function De(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Pe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var Fe,et;function Ke(t){if(Fe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Fe=n&&n[1]||"",et=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fe+t+et}var We=!1;function ct(t,n){if(!t||We)return"";We=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(ne){var te=ne}Reflect.construct(t,[],ge)}else{try{ge.call()}catch(ne){te=ne}t.call(ge.prototype)}}else{try{throw Error()}catch(ne){te=ne}(ge=t())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(ne){if(ne&&te&&typeof ne.stack=="string")return[ne.stack,te.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],b=f[1];if(y&&b){var P=y.split(`
`),J=b.split(`
`);for(c=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(o===P.length||c===J.length)for(o=P.length-1,c=J.length-1;1<=o&&0<=c&&P[o]!==J[c];)c--;for(;1<=o&&0<=c;o--,c--)if(P[o]!==J[c]){if(o!==1||c!==1)do if(o--,c--,0>c||P[o]!==J[c]){var ue=`
`+P[o].replace(" at new "," at ");return t.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",t.displayName)),ue}while(1<=o&&0<=c);break}}}finally{We=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ke(a):""}function Rt(t){switch(t.tag){case 26:case 27:case 5:return Ke(t.type);case 16:return Ke("Lazy");case 13:return Ke("Suspense");case 19:return Ke("SuspenseList");case 0:case 15:return ct(t.type,!1);case 11:return ct(t.type.render,!1);case 1:return ct(t.type,!0);case 31:return Ke("Activity");default:return""}}function Vt(t){try{var n="";do n+=Rt(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function vt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(t){var n=xt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){o=""+y,f.call(this,y)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function jt(t){t._valueTracker||(t._valueTracker=Qe(t))}function Et(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=xt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function bn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ha=/[\n"\\]/g;function kt(t){return t.replace(ha,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Li(t,n,a,o,c,f,y,b){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+vt(n)):t.value!==""+vt(n)&&(t.value=""+vt(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?An(t,y,vt(n)):a!=null?An(t,y,vt(a)):o!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+vt(b):t.removeAttribute("name")}function Ft(t,n,a,o,c,f,y,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+vt(a):"",n=n!=null?""+vt(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=b?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y)}function An(t,n,a){n==="number"&&bn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ln(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+vt(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function pn(t,n,a){if(n!=null&&(n=""+vt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+vt(a):""}function yn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(de(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=vt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function _i(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ni=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zh(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ni.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ih(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&zh(t,c,o)}else for(var f in n)n.hasOwnProperty(f)&&zh(t,f,n[f])}function Xu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var d0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),h0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jo(t){return h0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Wu=null;function qu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cr=null,wr=null;function Fh(t){var n=Di(t);if(n&&(t=n.stateNode)){var a=t[Sn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Li(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+kt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[Sn]||null;if(!c)throw Error(r(90));Li(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Et(o)}break e;case"textarea":pn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ln(t,!!a.multiple,n,!1)}}}var Yu=!1;function Hh(t,n,a){if(Yu)return t(n,a);Yu=!0;try{var o=t(n);return o}finally{if(Yu=!1,(Cr!==null||wr!==null)&&(zl(),Cr&&(n=Cr,t=wr,wr=Cr=null,Fh(n),t)))for(n=0;n<t.length;n++)Fh(t[n])}}function Ls(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Sn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ju=!1;if(Oi)try{var Ns={};Object.defineProperty(Ns,"passive",{get:function(){ju=!0}}),window.addEventListener("test",Ns,Ns),window.removeEventListener("test",Ns,Ns)}catch{ju=!1}var pa=null,Zu=null,$o=null;function Gh(){if($o)return $o;var t,n=Zu,a=n.length,o,c="value"in pa?pa.value:pa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===c[f-o];o++);return $o=c.slice(t,1<o?1-o:void 0)}function el(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function tl(){return!0}function Vh(){return!1}function On(t){function n(a,o,c,f,y){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tl:Vh,this.isPropagationStopped=Vh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=On(Ka),Os=g({},Ka,{view:0,detail:0}),p0=On(Os),Ku,Qu,Ps,il=g({},Os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$u,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ps&&(Ps&&t.type==="mousemove"?(Ku=t.screenX-Ps.screenX,Qu=t.screenY-Ps.screenY):Qu=Ku=0,Ps=t),Ku)},movementY:function(t){return"movementY"in t?t.movementY:Qu}}),kh=On(il),m0=g({},il,{dataTransfer:0}),g0=On(m0),_0=g({},Os,{relatedTarget:0}),Ju=On(_0),v0=g({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),x0=On(v0),S0=g({},Ka,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),y0=On(S0),M0=g({},Ka,{data:0}),Xh=On(M0),E0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=b0[t])?!!n[t]:!1}function $u(){return A0}var R0=g({},Os,{key:function(t){if(t.key){var n=E0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=el(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?T0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$u,charCode:function(t){return t.type==="keypress"?el(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?el(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),C0=On(R0),w0=g({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wh=On(w0),D0=g({},Os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$u}),U0=On(D0),L0=g({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),N0=On(L0),O0=g({},il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),P0=On(O0),B0=g({},Ka,{newState:0,oldState:0}),z0=On(B0),I0=[9,13,27,32],ec=Oi&&"CompositionEvent"in window,Bs=null;Oi&&"documentMode"in document&&(Bs=document.documentMode);var F0=Oi&&"TextEvent"in window&&!Bs,qh=Oi&&(!ec||Bs&&8<Bs&&11>=Bs),Yh=" ",jh=!1;function Zh(t,n){switch(t){case"keyup":return I0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Dr=!1;function H0(t,n){switch(t){case"compositionend":return Kh(n);case"keypress":return n.which!==32?null:(jh=!0,Yh);case"textInput":return t=n.data,t===Yh&&jh?null:t;default:return null}}function G0(t,n){if(Dr)return t==="compositionend"||!ec&&Zh(t,n)?(t=Gh(),$o=Zu=pa=null,Dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return qh&&n.locale!=="ko"?null:n.data;default:return null}}var V0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!V0[t.type]:n==="textarea"}function Jh(t,n,a,o){Cr?wr?wr.push(o):wr=[o]:Cr=o,n=kl(n,"onChange"),0<n.length&&(a=new nl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var zs=null,Is=null;function k0(t){Lg(t,0)}function al(t){var n=Za(t);if(Et(n))return t}function $h(t,n){if(t==="change")return n}var ep=!1;if(Oi){var tc;if(Oi){var nc="oninput"in document;if(!nc){var tp=document.createElement("div");tp.setAttribute("oninput","return;"),nc=typeof tp.oninput=="function"}tc=nc}else tc=!1;ep=tc&&(!document.documentMode||9<document.documentMode)}function np(){zs&&(zs.detachEvent("onpropertychange",ip),Is=zs=null)}function ip(t){if(t.propertyName==="value"&&al(Is)){var n=[];Jh(n,Is,t,qu(t)),Hh(k0,n)}}function X0(t,n,a){t==="focusin"?(np(),zs=n,Is=a,zs.attachEvent("onpropertychange",ip)):t==="focusout"&&np()}function W0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return al(Is)}function q0(t,n){if(t==="click")return al(n)}function Y0(t,n){if(t==="input"||t==="change")return al(n)}function j0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Vn=typeof Object.is=="function"?Object.is:j0;function Fs(t,n){if(Vn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!It.call(n,c)||!Vn(t[c],n[c]))return!1}return!0}function ap(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rp(t,n){var a=ap(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ap(a)}}function sp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?sp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function op(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=bn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=bn(t.document)}return n}function ic(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Z0=Oi&&"documentMode"in document&&11>=document.documentMode,Ur=null,ac=null,Hs=null,rc=!1;function lp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;rc||Ur==null||Ur!==bn(o)||(o=Ur,"selectionStart"in o&&ic(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Hs&&Fs(Hs,o)||(Hs=o,o=kl(ac,"onSelect"),0<o.length&&(n=new nl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Ur)))}function Qa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Lr={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},sc={},up={};Oi&&(up=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function Ja(t){if(sc[t])return sc[t];if(!Lr[t])return t;var n=Lr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in up)return sc[t]=n[a];return t}var cp=Ja("animationend"),fp=Ja("animationiteration"),dp=Ja("animationstart"),K0=Ja("transitionrun"),Q0=Ja("transitionstart"),J0=Ja("transitioncancel"),hp=Ja("transitionend"),pp=new Map,oc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");oc.push("scrollEnd");function li(t,n){pp.set(t,n),Ui(n,[t])}var mp=new WeakMap;function Jn(t,n){if(typeof t=="object"&&t!==null){var a=mp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Vt(n)},mp.set(t,n),n)}return{value:t,source:n,stack:Vt(n)}}var $n=[],Nr=0,lc=0;function rl(){for(var t=Nr,n=lc=Nr=0;n<t;){var a=$n[n];$n[n++]=null;var o=$n[n];$n[n++]=null;var c=$n[n];$n[n++]=null;var f=$n[n];if($n[n++]=null,o!==null&&c!==null){var y=o.pending;y===null?c.next=c:(c.next=y.next,y.next=c),o.pending=c}f!==0&&gp(a,c,f)}}function sl(t,n,a,o){$n[Nr++]=t,$n[Nr++]=n,$n[Nr++]=a,$n[Nr++]=o,lc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function uc(t,n,a,o){return sl(t,n,a,o),ol(t)}function Or(t,n){return sl(t,null,null,n),ol(t)}function gp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Be(a),t=f.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function ol(t){if(50<fo)throw fo=0,gf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Pr={};function $0(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,n,a,o){return new $0(t,n,a,o)}function cc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Pi(t,n){var a=t.alternate;return a===null?(a=kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function _p(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ll(t,n,a,o,c,f){var y=0;if(o=t,typeof t=="function")cc(t)&&(y=1);else if(typeof t=="string")y=tS(t,a,Q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=kn(31,a,n,c),t.elementType=w,t.lanes=f,t;case T:return $a(a.children,c,f,n);case R:y=8,c|=24;break;case S:return t=kn(12,a,n,c|2),t.elementType=S,t.lanes=f,t;case F:return t=kn(13,a,n,c),t.elementType=F,t.lanes=f,t;case k:return t=kn(19,a,n,c),t.elementType=k,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case L:y=10;break e;case N:y=9;break e;case D:y=11;break e;case z:y=14;break e;case q:y=16,o=null;break e}y=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=kn(y,a,n,c),n.elementType=t,n.type=o,n.lanes=f,n}function $a(t,n,a,o){return t=kn(7,t,o,n),t.lanes=a,t}function fc(t,n,a){return t=kn(6,t,null,n),t.lanes=a,t}function dc(t,n,a){return n=kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Br=[],zr=0,ul=null,cl=0,ei=[],ti=0,er=null,Bi=1,zi="";function tr(t,n){Br[zr++]=cl,Br[zr++]=ul,ul=t,cl=n}function vp(t,n,a){ei[ti++]=Bi,ei[ti++]=zi,ei[ti++]=er,er=t;var o=Bi;t=zi;var c=32-Be(o)-1;o&=~(1<<c),a+=1;var f=32-Be(n)+c;if(30<f){var y=c-c%5;f=(o&(1<<y)-1).toString(32),o>>=y,c-=y,Bi=1<<32-Be(n)+c|a<<c|o,zi=f+t}else Bi=1<<f|a<<c|o,zi=t}function hc(t){t.return!==null&&(tr(t,1),vp(t,1,0))}function pc(t){for(;t===ul;)ul=Br[--zr],Br[zr]=null,cl=Br[--zr],Br[zr]=null;for(;t===er;)er=ei[--ti],ei[ti]=null,zi=ei[--ti],ei[ti]=null,Bi=ei[--ti],ei[ti]=null}var Un=null,Zt=null,Ct=!1,nr=null,vi=!1,mc=Error(r(519));function ir(t){var n=Error(r(418,""));throw ks(Jn(n,t)),mc}function xp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[on]=t,n[Sn]=o,a){case"dialog":mt("cancel",n),mt("close",n);break;case"iframe":case"object":case"embed":mt("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)mt(po[a],n);break;case"source":mt("error",n);break;case"img":case"image":case"link":mt("error",n),mt("load",n);break;case"details":mt("toggle",n);break;case"input":mt("invalid",n),Ft(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),jt(n);break;case"select":mt("invalid",n);break;case"textarea":mt("invalid",n),yn(n,o.value,o.defaultValue,o.children),jt(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Bg(n.textContent,a)?(o.popover!=null&&(mt("beforetoggle",n),mt("toggle",n)),o.onScroll!=null&&mt("scroll",n),o.onScrollEnd!=null&&mt("scrollend",n),o.onClick!=null&&(n.onclick=Xl),n=!0):n=!1,n||ir(t)}function Sp(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Un=Un.return}}function Gs(t){if(t!==Un)return!1;if(!Ct)return Sp(t),Ct=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Lf(t.type,t.memoizedProps)),a=!a),a&&Zt&&ir(t),Sp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Zt=ci(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Zt=null}}else n===27?(n=Zt,Da(t.type)?(t=Bf,Bf=null,Zt=t):Zt=n):Zt=Un?ci(t.stateNode.nextSibling):null;return!0}function Vs(){Zt=Un=null,Ct=!1}function yp(){var t=nr;return t!==null&&(zn===null?zn=t:zn.push.apply(zn,t),nr=null),t}function ks(t){nr===null?nr=[t]:nr.push(t)}var gc=$(null),ar=null,Ii=null;function ma(t,n,a){ye(gc,n._currentValue),n._currentValue=a}function Fi(t){t._currentValue=gc.current,xe(gc)}function _c(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function vc(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;e:for(;f!==null;){var b=f;f=c;for(var P=0;P<n.length;P++)if(b.context===n[P]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),_c(f.return,a,t),o||(y=null);break e}f=b.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),_c(y,a,t),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===t){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function Xs(t,n,a,o){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var b=c.type;Vn(c.pendingProps.value,y.value)||(t!==null?t.push(b):t=[b])}}else if(c===Re.current){if(y=c.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(So):t=[So])}c=c.return}t!==null&&vc(n,t,a,o),n.flags|=262144}function fl(t){for(t=t.firstContext;t!==null;){if(!Vn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function rr(t){ar=t,Ii=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return Mp(ar,t)}function dl(t,n){return ar===null&&rr(t),Mp(t,n)}function Mp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ii===null){if(t===null)throw Error(r(308));Ii=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ii=Ii.next=n;return a}var ex=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},tx=s.unstable_scheduleCallback,nx=s.unstable_NormalPriority,un={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xc(){return{controller:new ex,data:new Map,refCount:0}}function Ws(t){t.refCount--,t.refCount===0&&tx(nx,function(){t.controller.abort()})}var qs=null,Sc=0,Ir=0,Fr=null;function ix(t,n){if(qs===null){var a=qs=[];Sc=0,Ir=Ef(),Fr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Sc++,n.then(Ep,Ep),n}function Ep(){if(--Sc===0&&qs!==null){Fr!==null&&(Fr.status="fulfilled");var t=qs;qs=null,Ir=0,Fr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ax(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Tp=B.S;B.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&ix(t,n),Tp!==null&&Tp(t,n)};var sr=$(null);function yc(){var t=sr.current;return t!==null?t:Xt.pooledCache}function hl(t,n){n===null?ye(sr,sr.current):ye(sr,n.pool)}function bp(){var t=yc();return t===null?null:{parent:un._currentValue,pool:t}}var Ys=Error(r(460)),Ap=Error(r(474)),pl=Error(r(542)),Mc={then:function(){}};function Rp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ml(){}function Cp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ml,ml),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Dp(t),t;default:if(typeof n.status=="string")n.then(ml,ml);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Dp(t),t}throw js=n,Ys}}var js=null;function wp(){if(js===null)throw Error(r(459));var t=js;return js=null,t}function Dp(t){if(t===Ys||t===pl)throw Error(r(483))}var ga=!1;function Ec(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function va(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ut&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=ol(t),gp(t,null,a),n}return sl(t,o,n,a),ol(t)}function Zs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,He(t,a)}}function bc(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ac=!1;function Ks(){if(Ac){var t=Fr;if(t!==null)throw t}}function Qs(t,n,a,o){Ac=!1;var c=t.updateQueue;ga=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var P=b,J=P.next;P.next=null,y===null?f=J:y.next=J,y=P;var ue=t.alternate;ue!==null&&(ue=ue.updateQueue,b=ue.lastBaseUpdate,b!==y&&(b===null?ue.firstBaseUpdate=J:b.next=J,ue.lastBaseUpdate=P))}if(f!==null){var ge=c.baseState;y=0,ue=J=P=null,b=f;do{var te=b.lane&-536870913,ne=te!==b.lane;if(ne?(yt&te)===te:(o&te)===te){te!==0&&te===Ir&&(Ac=!0),ue!==null&&(ue=ue.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var nt=t,$e=b;te=n;var Bt=a;switch($e.tag){case 1:if(nt=$e.payload,typeof nt=="function"){ge=nt.call(Bt,ge,te);break e}ge=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=$e.payload,te=typeof nt=="function"?nt.call(Bt,ge,te):nt,te==null)break e;ge=g({},ge,te);break e;case 2:ga=!0}}te=b.callback,te!==null&&(t.flags|=64,ne&&(t.flags|=8192),ne=c.callbacks,ne===null?c.callbacks=[te]:ne.push(te))}else ne={lane:te,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ue===null?(J=ue=ne,P=ge):ue=ue.next=ne,y|=te;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;ne=b,b=ne.next,ne.next=null,c.lastBaseUpdate=ne,c.shared.pending=null}}while(!0);ue===null&&(P=ge),c.baseState=P,c.firstBaseUpdate=J,c.lastBaseUpdate=ue,f===null&&(c.shared.lanes=0),Aa|=y,t.lanes=y,t.memoizedState=ge}}function Up(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Lp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Up(a[t],n)}var Hr=$(null),gl=$(0);function Np(t,n){t=qi,ye(gl,t),ye(Hr,n),qi=t|n.baseLanes}function Rc(){ye(gl,qi),ye(Hr,Hr.current)}function Cc(){qi=gl.current,xe(Hr),xe(gl)}var xa=0,ft=null,Ot=null,nn=null,_l=!1,Gr=!1,or=!1,vl=0,Js=0,Vr=null,rx=0;function Jt(){throw Error(r(321))}function wc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Vn(t[a],n[a]))return!1;return!0}function Dc(t,n,a,o,c,f){return xa=f,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?gm:_m,or=!1,f=a(o,c),or=!1,Gr&&(f=Pp(n,a,o,c)),Op(t),f}function Op(t){B.H=Tl;var n=Ot!==null&&Ot.next!==null;if(xa=0,nn=Ot=ft=null,_l=!1,Js=0,Vr=null,n)throw Error(r(300));t===null||mn||(t=t.dependencies,t!==null&&fl(t)&&(mn=!0))}function Pp(t,n,a,o){ft=t;var c=0;do{if(Gr&&(Vr=null),Js=0,Gr=!1,25<=c)throw Error(r(301));if(c+=1,nn=Ot=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=dx,f=n(a,o)}while(Gr);return f}function sx(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?$s(n):n,t=t.useState()[0],(Ot!==null?Ot.memoizedState:null)!==t&&(ft.flags|=1024),n}function Uc(){var t=vl!==0;return vl=0,t}function Lc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Nc(t){if(_l){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}_l=!1}xa=0,nn=Ot=ft=null,Gr=!1,Js=vl=0,Vr=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?ft.memoizedState=nn=t:nn=nn.next=t,nn}function an(){if(Ot===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var n=nn===null?ft.memoizedState:nn.next;if(n!==null)nn=n,Ot=t;else{if(t===null)throw ft.alternate===null?Error(r(467)):Error(r(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},nn===null?ft.memoizedState=nn=t:nn=nn.next=t}return nn}function Oc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $s(t){var n=Js;return Js+=1,Vr===null&&(Vr=[]),t=Cp(Vr,t,n),n=ft,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?gm:_m),t}function xl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return $s(t);if(t.$$typeof===L)return Rn(t)}throw Error(r(438,String(t)))}function Pc(t){var n=null,a=ft.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ft.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Oc(),ft.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=C;return n.index++,a}function Hi(t,n){return typeof n=="function"?n(t):n}function Sl(t){var n=an();return Bc(n,Ot,t)}function Bc(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,f=o.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}n.baseQueue=c=f,o.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var b=y=null,P=null,J=n,ue=!1;do{var ge=J.lane&-536870913;if(ge!==J.lane?(yt&ge)===ge:(xa&ge)===ge){var te=J.revertLane;if(te===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),ge===Ir&&(ue=!0);else if((xa&te)===te){J=J.next,te===Ir&&(ue=!0);continue}else ge={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(b=P=ge,y=f):P=P.next=ge,ft.lanes|=te,Aa|=te;ge=J.action,or&&a(f,ge),f=J.hasEagerState?J.eagerState:a(f,ge)}else te={lane:ge,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(b=P=te,y=f):P=P.next=te,ft.lanes|=ge,Aa|=ge;J=J.next}while(J!==null&&J!==n);if(P===null?y=f:P.next=b,!Vn(f,t.memoizedState)&&(mn=!0,ue&&(a=Fr,a!==null)))throw a;t.memoizedState=f,t.baseState=y,t.baseQueue=P,o.lastRenderedState=f}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function zc(t){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do f=t(f,y.action),y=y.next;while(y!==c);Vn(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Bp(t,n,a){var o=ft,c=an(),f=Ct;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!Vn((Ot||c).memoizedState,a);y&&(c.memoizedState=a,mn=!0),c=c.queue;var b=Fp.bind(null,o,c,t);if(eo(2048,8,b,[t]),c.getSnapshot!==n||y||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,kr(9,yl(),Ip.bind(null,o,c,a,n),null),Xt===null)throw Error(r(349));f||(xa&124)!==0||zp(o,n,a)}return a}function zp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ft.updateQueue,n===null?(n=Oc(),ft.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Ip(t,n,a,o){n.value=a,n.getSnapshot=o,Hp(n)&&Gp(t)}function Fp(t,n,a){return a(function(){Hp(n)&&Gp(t)})}function Hp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Vn(t,a)}catch{return!0}}function Gp(t){var n=Or(t,2);n!==null&&jn(n,t,2)}function Ic(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),or){oe(!0);try{a()}finally{oe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:t},n}function Vp(t,n,a,o){return t.baseState=a,Bc(t,Ot,typeof o=="function"?o:Hi)}function ox(t,n,a,o,c){if(El(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};B.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,kp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function kp(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var f=B.T,y={};B.T=y;try{var b=a(c,o),P=B.S;P!==null&&P(y,b),Xp(t,n,b)}catch(J){Fc(t,n,J)}finally{B.T=f}}else try{f=a(c,o),Xp(t,n,f)}catch(J){Fc(t,n,J)}}function Xp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Wp(t,n,o)},function(o){return Fc(t,n,o)}):Wp(t,n,a)}function Wp(t,n,a){n.status="fulfilled",n.value=a,qp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,kp(t,a)))}function Fc(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,qp(n),n=n.next;while(n!==o)}t.action=null}function qp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Yp(t,n){return n}function jp(t,n){if(Ct){var a=Xt.formState;if(a!==null){e:{var o=ft;if(Ct){if(Zt){t:{for(var c=Zt,f=vi;c.nodeType!==8;){if(!f){c=null;break t}if(c=ci(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Zt=ci(c.nextSibling),o=c.data==="F!";break e}}ir(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yp,lastRenderedState:n},a.queue=o,a=hm.bind(null,ft,o),o.dispatch=a,o=Ic(!1),f=Xc.bind(null,ft,!1,o.queue),o=Pn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=ox.bind(null,ft,c,f,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function Zp(t){var n=an();return Kp(n,Ot,t)}function Kp(t,n,a){if(n=Bc(t,n,Yp)[0],t=Sl(Hi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=$s(n)}catch(y){throw y===Ys?pl:y}else o=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ft.flags|=2048,kr(9,yl(),lx.bind(null,c,a),null)),[o,f,t]}function lx(t,n){t.action=n}function Qp(t){var n=an(),a=Ot;if(a!==null)return Kp(n,a,t);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function kr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ft.updateQueue,n===null&&(n=Oc(),ft.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function yl(){return{destroy:void 0,resource:void 0}}function Jp(){return an().memoizedState}function Ml(t,n,a,o){var c=Pn();o=o===void 0?null:o,ft.flags|=t,c.memoizedState=kr(1|n,yl(),a,o)}function eo(t,n,a,o){var c=an();o=o===void 0?null:o;var f=c.memoizedState.inst;Ot!==null&&o!==null&&wc(o,Ot.memoizedState.deps)?c.memoizedState=kr(n,f,a,o):(ft.flags|=t,c.memoizedState=kr(1|n,f,a,o))}function $p(t,n){Ml(8390656,8,t,n)}function em(t,n){eo(2048,8,t,n)}function tm(t,n){return eo(4,2,t,n)}function nm(t,n){return eo(4,4,t,n)}function im(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function am(t,n,a){a=a!=null?a.concat([t]):null,eo(4,4,im.bind(null,n,t),a)}function Hc(){}function rm(t,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&wc(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function sm(t,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&wc(n,o[1]))return o[0];if(o=t(),or){oe(!0);try{t()}finally{oe(!1)}}return a.memoizedState=[o,n],o}function Gc(t,n,a){return a===void 0||(xa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=ug(),ft.lanes|=t,Aa|=t,a)}function om(t,n,a,o){return Vn(a,n)?a:Hr.current!==null?(t=Gc(t,a,o),Vn(t,n)||(mn=!0),t):(xa&42)===0?(mn=!0,t.memoizedState=a):(t=ug(),ft.lanes|=t,Aa|=t,n)}function lm(t,n,a,o,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var y=B.T,b={};B.T=b,Xc(t,!1,n,a);try{var P=c(),J=B.S;if(J!==null&&J(b,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ue=ax(P,o);to(t,n,ue,Yn(t))}else to(t,n,o,Yn(t))}catch(ge){to(t,n,{then:function(){},status:"rejected",reason:ge},Yn())}finally{Z.p=f,B.T=y}}function ux(){}function Vc(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=um(t).queue;lm(t,c,n,Y,a===null?ux:function(){return cm(t),a(o)})}function um(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function cm(t){var n=um(t).next.queue;to(t,n,{},Yn())}function kc(){return Rn(So)}function fm(){return an().memoizedState}function dm(){return an().memoizedState}function cx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Yn();t=_a(a);var o=va(n,t,a);o!==null&&(jn(o,n,a),Zs(o,n,a)),n={cache:xc()},t.payload=n;return}n=n.return}}function fx(t,n,a){var o=Yn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},El(t)?pm(n,a):(a=uc(t,n,a,o),a!==null&&(jn(a,t,o),mm(a,n,o)))}function hm(t,n,a){var o=Yn();to(t,n,a,o)}function to(t,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(El(t))pm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,b=f(y,a);if(c.hasEagerState=!0,c.eagerState=b,Vn(b,y))return sl(t,n,c,0),Xt===null&&rl(),!1}catch{}finally{}if(a=uc(t,n,c,o),a!==null)return jn(a,t,o),mm(a,n,o),!0}return!1}function Xc(t,n,a,o){if(o={lane:2,revertLane:Ef(),action:o,hasEagerState:!1,eagerState:null,next:null},El(t)){if(n)throw Error(r(479))}else n=uc(t,a,o,2),n!==null&&jn(n,t,2)}function El(t){var n=t.alternate;return t===ft||n!==null&&n===ft}function pm(t,n){Gr=_l=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function mm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,He(t,a)}}var Tl={readContext:Rn,use:xl,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt},gm={readContext:Rn,use:xl,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:$p,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ml(4194308,4,im.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ml(4194308,4,t,n)},useInsertionEffect:function(t,n){Ml(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var o=t();if(or){oe(!0);try{t()}finally{oe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Pn();if(a!==void 0){var c=a(n);if(or){oe(!0);try{a(n)}finally{oe(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=fx.bind(null,ft,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=Ic(t);var n=t.queue,a=hm.bind(null,ft,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Hc,useDeferredValue:function(t,n){var a=Pn();return Gc(a,t,n)},useTransition:function(){var t=Ic(!1);return t=lm.bind(null,ft,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ft,c=Pn();if(Ct){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xt===null)throw Error(r(349));(yt&124)!==0||zp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,$p(Fp.bind(null,o,f,t),[t]),o.flags|=2048,kr(9,yl(),Ip.bind(null,o,f,a,n),null),a},useId:function(){var t=Pn(),n=Xt.identifierPrefix;if(Ct){var a=zi,o=Bi;a=(o&~(1<<32-Be(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=vl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=rx++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:kc,useFormState:jp,useActionState:jp,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Xc.bind(null,ft,!0,a),a.dispatch=n,[t,n]},useMemoCache:Pc,useCacheRefresh:function(){return Pn().memoizedState=cx.bind(null,ft)}},_m={readContext:Rn,use:xl,useCallback:rm,useContext:Rn,useEffect:em,useImperativeHandle:am,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:sm,useReducer:Sl,useRef:Jp,useState:function(){return Sl(Hi)},useDebugValue:Hc,useDeferredValue:function(t,n){var a=an();return om(a,Ot.memoizedState,t,n)},useTransition:function(){var t=Sl(Hi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:$s(t),n]},useSyncExternalStore:Bp,useId:fm,useHostTransitionStatus:kc,useFormState:Zp,useActionState:Zp,useOptimistic:function(t,n){var a=an();return Vp(a,Ot,t,n)},useMemoCache:Pc,useCacheRefresh:dm},dx={readContext:Rn,use:xl,useCallback:rm,useContext:Rn,useEffect:em,useImperativeHandle:am,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:sm,useReducer:zc,useRef:Jp,useState:function(){return zc(Hi)},useDebugValue:Hc,useDeferredValue:function(t,n){var a=an();return Ot===null?Gc(a,t,n):om(a,Ot.memoizedState,t,n)},useTransition:function(){var t=zc(Hi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:$s(t),n]},useSyncExternalStore:Bp,useId:fm,useHostTransitionStatus:kc,useFormState:Qp,useActionState:Qp,useOptimistic:function(t,n){var a=an();return Ot!==null?Vp(a,Ot,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Pc,useCacheRefresh:dm},Xr=null,no=0;function bl(t){var n=no;return no+=1,Xr===null&&(Xr=[]),Cp(Xr,t,n)}function io(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Al(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function vm(t){var n=t._init;return n(t._payload)}function xm(t){function n(X,H){if(t){var K=X.deletions;K===null?(X.deletions=[H],X.flags|=16):K.push(H)}}function a(X,H){if(!t)return null;for(;H!==null;)n(X,H),H=H.sibling;return null}function o(X){for(var H=new Map;X!==null;)X.key!==null?H.set(X.key,X):H.set(X.index,X),X=X.sibling;return H}function c(X,H){return X=Pi(X,H),X.index=0,X.sibling=null,X}function f(X,H,K){return X.index=K,t?(K=X.alternate,K!==null?(K=K.index,K<H?(X.flags|=67108866,H):K):(X.flags|=67108866,H)):(X.flags|=1048576,H)}function y(X){return t&&X.alternate===null&&(X.flags|=67108866),X}function b(X,H,K,fe){return H===null||H.tag!==6?(H=fc(K,X.mode,fe),H.return=X,H):(H=c(H,K),H.return=X,H)}function P(X,H,K,fe){var Ge=K.type;return Ge===T?ue(X,H,K.props.children,fe,K.key):H!==null&&(H.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===q&&vm(Ge)===H.type)?(H=c(H,K.props),io(H,K),H.return=X,H):(H=ll(K.type,K.key,K.props,null,X.mode,fe),io(H,K),H.return=X,H)}function J(X,H,K,fe){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=dc(K,X.mode,fe),H.return=X,H):(H=c(H,K.children||[]),H.return=X,H)}function ue(X,H,K,fe,Ge){return H===null||H.tag!==7?(H=$a(K,X.mode,fe,Ge),H.return=X,H):(H=c(H,K),H.return=X,H)}function ge(X,H,K){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=fc(""+H,X.mode,K),H.return=X,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case x:return K=ll(H.type,H.key,H.props,null,X.mode,K),io(K,H),K.return=X,K;case M:return H=dc(H,X.mode,K),H.return=X,H;case q:var fe=H._init;return H=fe(H._payload),ge(X,H,K)}if(de(H)||le(H))return H=$a(H,X.mode,K,null),H.return=X,H;if(typeof H.then=="function")return ge(X,bl(H),K);if(H.$$typeof===L)return ge(X,dl(X,H),K);Al(X,H)}return null}function te(X,H,K,fe){var Ge=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ge!==null?null:b(X,H,""+K,fe);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case x:return K.key===Ge?P(X,H,K,fe):null;case M:return K.key===Ge?J(X,H,K,fe):null;case q:return Ge=K._init,K=Ge(K._payload),te(X,H,K,fe)}if(de(K)||le(K))return Ge!==null?null:ue(X,H,K,fe,null);if(typeof K.then=="function")return te(X,H,bl(K),fe);if(K.$$typeof===L)return te(X,H,dl(X,K),fe);Al(X,K)}return null}function ne(X,H,K,fe,Ge){if(typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint")return X=X.get(K)||null,b(H,X,""+fe,Ge);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case x:return X=X.get(fe.key===null?K:fe.key)||null,P(H,X,fe,Ge);case M:return X=X.get(fe.key===null?K:fe.key)||null,J(H,X,fe,Ge);case q:var dt=fe._init;return fe=dt(fe._payload),ne(X,H,K,fe,Ge)}if(de(fe)||le(fe))return X=X.get(K)||null,ue(H,X,fe,Ge,null);if(typeof fe.then=="function")return ne(X,H,K,bl(fe),Ge);if(fe.$$typeof===L)return ne(X,H,K,dl(H,fe),Ge);Al(H,fe)}return null}function nt(X,H,K,fe){for(var Ge=null,dt=null,qe=H,tt=H=0,_n=null;qe!==null&&tt<K.length;tt++){qe.index>tt?(_n=qe,qe=null):_n=qe.sibling;var bt=te(X,qe,K[tt],fe);if(bt===null){qe===null&&(qe=_n);break}t&&qe&&bt.alternate===null&&n(X,qe),H=f(bt,H,tt),dt===null?Ge=bt:dt.sibling=bt,dt=bt,qe=_n}if(tt===K.length)return a(X,qe),Ct&&tr(X,tt),Ge;if(qe===null){for(;tt<K.length;tt++)qe=ge(X,K[tt],fe),qe!==null&&(H=f(qe,H,tt),dt===null?Ge=qe:dt.sibling=qe,dt=qe);return Ct&&tr(X,tt),Ge}for(qe=o(qe);tt<K.length;tt++)_n=ne(qe,X,tt,K[tt],fe),_n!==null&&(t&&_n.alternate!==null&&qe.delete(_n.key===null?tt:_n.key),H=f(_n,H,tt),dt===null?Ge=_n:dt.sibling=_n,dt=_n);return t&&qe.forEach(function(Pa){return n(X,Pa)}),Ct&&tr(X,tt),Ge}function $e(X,H,K,fe){if(K==null)throw Error(r(151));for(var Ge=null,dt=null,qe=H,tt=H=0,_n=null,bt=K.next();qe!==null&&!bt.done;tt++,bt=K.next()){qe.index>tt?(_n=qe,qe=null):_n=qe.sibling;var Pa=te(X,qe,bt.value,fe);if(Pa===null){qe===null&&(qe=_n);break}t&&qe&&Pa.alternate===null&&n(X,qe),H=f(Pa,H,tt),dt===null?Ge=Pa:dt.sibling=Pa,dt=Pa,qe=_n}if(bt.done)return a(X,qe),Ct&&tr(X,tt),Ge;if(qe===null){for(;!bt.done;tt++,bt=K.next())bt=ge(X,bt.value,fe),bt!==null&&(H=f(bt,H,tt),dt===null?Ge=bt:dt.sibling=bt,dt=bt);return Ct&&tr(X,tt),Ge}for(qe=o(qe);!bt.done;tt++,bt=K.next())bt=ne(qe,X,tt,bt.value,fe),bt!==null&&(t&&bt.alternate!==null&&qe.delete(bt.key===null?tt:bt.key),H=f(bt,H,tt),dt===null?Ge=bt:dt.sibling=bt,dt=bt);return t&&qe.forEach(function(hS){return n(X,hS)}),Ct&&tr(X,tt),Ge}function Bt(X,H,K,fe){if(typeof K=="object"&&K!==null&&K.type===T&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case x:e:{for(var Ge=K.key;H!==null;){if(H.key===Ge){if(Ge=K.type,Ge===T){if(H.tag===7){a(X,H.sibling),fe=c(H,K.props.children),fe.return=X,X=fe;break e}}else if(H.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===q&&vm(Ge)===H.type){a(X,H.sibling),fe=c(H,K.props),io(fe,K),fe.return=X,X=fe;break e}a(X,H);break}else n(X,H);H=H.sibling}K.type===T?(fe=$a(K.props.children,X.mode,fe,K.key),fe.return=X,X=fe):(fe=ll(K.type,K.key,K.props,null,X.mode,fe),io(fe,K),fe.return=X,X=fe)}return y(X);case M:e:{for(Ge=K.key;H!==null;){if(H.key===Ge)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){a(X,H.sibling),fe=c(H,K.children||[]),fe.return=X,X=fe;break e}else{a(X,H);break}else n(X,H);H=H.sibling}fe=dc(K,X.mode,fe),fe.return=X,X=fe}return y(X);case q:return Ge=K._init,K=Ge(K._payload),Bt(X,H,K,fe)}if(de(K))return nt(X,H,K,fe);if(le(K)){if(Ge=le(K),typeof Ge!="function")throw Error(r(150));return K=Ge.call(K),$e(X,H,K,fe)}if(typeof K.then=="function")return Bt(X,H,bl(K),fe);if(K.$$typeof===L)return Bt(X,H,dl(X,K),fe);Al(X,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,H!==null&&H.tag===6?(a(X,H.sibling),fe=c(H,K),fe.return=X,X=fe):(a(X,H),fe=fc(K,X.mode,fe),fe.return=X,X=fe),y(X)):a(X,H)}return function(X,H,K,fe){try{no=0;var Ge=Bt(X,H,K,fe);return Xr=null,Ge}catch(qe){if(qe===Ys||qe===pl)throw qe;var dt=kn(29,qe,null,X.mode);return dt.lanes=fe,dt.return=X,dt}finally{}}}var Wr=xm(!0),Sm=xm(!1),ni=$(null),xi=null;function Sa(t){var n=t.alternate;ye(cn,cn.current&1),ye(ni,t),xi===null&&(n===null||Hr.current!==null||n.memoizedState!==null)&&(xi=t)}function ym(t){if(t.tag===22){if(ye(cn,cn.current),ye(ni,t),xi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(xi=t)}}else ya()}function ya(){ye(cn,cn.current),ye(ni,ni.current)}function Gi(t){xe(ni),xi===t&&(xi=null),xe(cn)}var cn=$(0);function Rl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Pf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Wc(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var qc={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Yn(),c=_a(o);c.payload=n,a!=null&&(c.callback=a),n=va(t,c,o),n!==null&&(jn(n,t,o),Zs(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Yn(),c=_a(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=va(t,c,o),n!==null&&(jn(n,t,o),Zs(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Yn(),o=_a(a);o.tag=2,n!=null&&(o.callback=n),n=va(t,o,a),n!==null&&(jn(n,t,a),Zs(n,t,a))}};function Mm(t,n,a,o,c,f,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!Fs(a,o)||!Fs(c,f):!0}function Em(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&qc.enqueueReplaceState(n,n.state,null)}function lr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var Cl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Tm(t){Cl(t)}function bm(t){console.error(t)}function Am(t){Cl(t)}function wl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Rm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Yc(t,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){wl(t,n)},a}function Cm(t){return t=_a(t),t.tag=3,t}function wm(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;t.payload=function(){return c(f)},t.callback=function(){Rm(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){Rm(n,a,o),typeof c!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function hx(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Xs(n,a,c,!0),a=ni.current,a!==null){switch(a.tag){case 13:return xi===null?vf():a.alternate===null&&Kt===0&&(Kt=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Mc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Sf(t,o,c)),!1;case 22:return a.flags|=65536,o===Mc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Sf(t,o,c)),!1}throw Error(r(435,a.tag))}return Sf(t,o,c),vf(),!1}if(Ct)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==mc&&(t=Error(r(422),{cause:o}),ks(Jn(t,a)))):(o!==mc&&(n=Error(r(423),{cause:o}),ks(Jn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=Jn(o,a),c=Yc(t.stateNode,o,c),bc(t,c),Kt!==4&&(Kt=2)),!1;var f=Error(r(520),{cause:o});if(f=Jn(f,a),co===null?co=[f]:co.push(f),Kt!==4&&(Kt=2),n===null)return!0;o=Jn(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Yc(a.stateNode,o,t),bc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ra===null||!Ra.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Cm(c),wm(c,t,a,o),bc(a,c),!1}a=a.return}while(a!==null);return!1}var Dm=Error(r(461)),mn=!1;function Mn(t,n,a,o){n.child=t===null?Sm(n,null,a,o):Wr(n,t.child,a,o)}function Um(t,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var b in o)b!=="ref"&&(y[b]=o[b])}else y=o;return rr(n),o=Dc(t,n,a,y,f,c),b=Uc(),t!==null&&!mn?(Lc(t,n,c),Vi(t,n,c)):(Ct&&b&&hc(n),n.flags|=1,Mn(t,n,o,c),n.child)}function Lm(t,n,a,o,c){if(t===null){var f=a.type;return typeof f=="function"&&!cc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Nm(t,n,f,o,c)):(t=ll(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!tf(t,c)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Fs,a(y,o)&&t.ref===n.ref)return Vi(t,n,c)}return n.flags|=1,t=Pi(f,o),t.ref=n.ref,t.return=n,n.child=t}function Nm(t,n,a,o,c){if(t!==null){var f=t.memoizedProps;if(Fs(f,o)&&t.ref===n.ref)if(mn=!1,n.pendingProps=o=f,tf(t,c))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,Vi(t,n,c)}return jc(t,n,a,o,c)}function Om(t,n,a){var o=n.pendingProps,c=o.children,f=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Pm(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&hl(n,f!==null?f.cachePool:null),f!==null?Np(n,f):Rc(),ym(n);else return n.lanes=n.childLanes=536870912,Pm(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(hl(n,f.cachePool),Np(n,f),ya(),n.memoizedState=null):(t!==null&&hl(n,null),Rc(),ya());return Mn(t,n,c,a),n.child}function Pm(t,n,a,o){var c=yc();return c=c===null?null:{parent:un._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&hl(n,null),Rc(),ym(n),t!==null&&Xs(t,n,o,!0),null}function Dl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function jc(t,n,a,o,c){return rr(n),a=Dc(t,n,a,o,void 0,c),o=Uc(),t!==null&&!mn?(Lc(t,n,c),Vi(t,n,c)):(Ct&&o&&hc(n),n.flags|=1,Mn(t,n,a,c),n.child)}function Bm(t,n,a,o,c,f){return rr(n),n.updateQueue=null,a=Pp(n,o,a,c),Op(t),o=Uc(),t!==null&&!mn?(Lc(t,n,f),Vi(t,n,f)):(Ct&&o&&hc(n),n.flags|=1,Mn(t,n,a,f),n.child)}function zm(t,n,a,o,c){if(rr(n),n.stateNode===null){var f=Pr,y=a.contextType;typeof y=="object"&&y!==null&&(f=Rn(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=qc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Ec(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Rn(y):Pr,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Wc(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&qc.enqueueReplaceState(f,f.state,null),Qs(n,o,f,c),Ks(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,P=lr(a,b);f.props=P;var J=f.context,ue=a.contextType;y=Pr,typeof ue=="object"&&ue!==null&&(y=Rn(ue));var ge=a.getDerivedStateFromProps;ue=typeof ge=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ue||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||J!==y)&&Em(n,f,o,y),ga=!1;var te=n.memoizedState;f.state=te,Qs(n,o,f,c),Ks(),J=n.memoizedState,b||te!==J||ga?(typeof ge=="function"&&(Wc(n,a,ge,o),J=n.memoizedState),(P=ga||Mm(n,a,P,o,te,J,y))?(ue||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),f.props=o,f.state=J,f.context=y,o=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Tc(t,n),y=n.memoizedProps,ue=lr(a,y),f.props=ue,ge=n.pendingProps,te=f.context,J=a.contextType,P=Pr,typeof J=="object"&&J!==null&&(P=Rn(J)),b=a.getDerivedStateFromProps,(J=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==ge||te!==P)&&Em(n,f,o,P),ga=!1,te=n.memoizedState,f.state=te,Qs(n,o,f,c),Ks();var ne=n.memoizedState;y!==ge||te!==ne||ga||t!==null&&t.dependencies!==null&&fl(t.dependencies)?(typeof b=="function"&&(Wc(n,a,b,o),ne=n.memoizedState),(ue=ga||Mm(n,a,ue,o,te,ne,P)||t!==null&&t.dependencies!==null&&fl(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ne,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ne,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&te===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&te===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ne),f.props=o,f.state=ne,f.context=P,o=ue):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&te===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&te===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Dl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Wr(n,t.child,null,c),n.child=Wr(n,null,a,c)):Mn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Vi(t,n,c),t}function Im(t,n,a,o){return Vs(),n.flags|=256,Mn(t,n,a,o),n.child}var Zc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kc(t){return{baseLanes:t,cachePool:bp()}}function Qc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ii),t}function Fm(t,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ct){if(c?Sa(n):ya(),Ct){var b=Zt,P;if(P=b){e:{for(P=b,b=vi;P.nodeType!==8;){if(!b){b=null;break e}if(P=ci(P.nextSibling),P===null){b=null;break e}}b=P}b!==null?(n.memoizedState={dehydrated:b,treeContext:er!==null?{id:Bi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},P=kn(18,null,null,0),P.stateNode=b,P.return=n,n.child=P,Un=n,Zt=null,P=!0):P=!1}P||ir(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Pf(b)?n.lanes=32:n.lanes=536870912,null;Gi(n)}return b=o.children,o=o.fallback,c?(ya(),c=n.mode,b=Ul({mode:"hidden",children:b},c),o=$a(o,c,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,c=n.child,c.memoizedState=Kc(a),c.childLanes=Qc(t,y,a),n.memoizedState=Zc,o):(Sa(n),Jc(n,b))}if(P=t.memoizedState,P!==null&&(b=P.dehydrated,b!==null)){if(f)n.flags&256?(Sa(n),n.flags&=-257,n=$c(t,n,a)):n.memoizedState!==null?(ya(),n.child=t.child,n.flags|=128,n=null):(ya(),c=o.fallback,b=n.mode,o=Ul({mode:"visible",children:o.children},b),c=$a(c,b,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Wr(n,t.child,null,a),o=n.child,o.memoizedState=Kc(a),o.childLanes=Qc(t,y,a),n.memoizedState=Zc,n=c);else if(Sa(n),Pf(b)){if(y=b.nextSibling&&b.nextSibling.dataset,y)var J=y.dgst;y=J,o=Error(r(419)),o.stack="",o.digest=y,ks({value:o,source:null,stack:null}),n=$c(t,n,a)}else if(mn||Xs(t,n,a,!1),y=(a&t.childLanes)!==0,mn||y){if(y=Xt,y!==null&&(o=a&-a,o=(o&42)!==0?1:it(o),o=(o&(y.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane))throw P.retryLane=o,Or(t,o),jn(y,t,o),Dm;b.data==="$?"||vf(),n=$c(t,n,a)}else b.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=P.treeContext,Zt=ci(b.nextSibling),Un=n,Ct=!0,nr=null,vi=!1,t!==null&&(ei[ti++]=Bi,ei[ti++]=zi,ei[ti++]=er,Bi=t.id,zi=t.overflow,er=n),n=Jc(n,o.children),n.flags|=4096);return n}return c?(ya(),c=o.fallback,b=n.mode,P=t.child,J=P.sibling,o=Pi(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,J!==null?c=Pi(J,c):(c=$a(c,b,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,b=t.child.memoizedState,b===null?b=Kc(a):(P=b.cachePool,P!==null?(J=un._currentValue,P=P.parent!==J?{parent:J,pool:J}:P):P=bp(),b={baseLanes:b.baseLanes|a,cachePool:P}),c.memoizedState=b,c.childLanes=Qc(t,y,a),n.memoizedState=Zc,o):(Sa(n),a=t.child,t=a.sibling,a=Pi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Jc(t,n){return n=Ul({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ul(t,n){return t=kn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function $c(t,n,a){return Wr(n,t.child,null,a),t=Jc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Hm(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),_c(t.return,n,a)}function ef(t,n,a,o,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=c)}function Gm(t,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(Mn(t,n,o.children,a),o=cn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hm(t,a,n);else if(t.tag===19)Hm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(ye(cn,o),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Rl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ef(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Rl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}ef(n,!0,a,null,f);break;case"together":ef(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Vi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Aa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Xs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Pi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Pi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function tf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&fl(t)))}function px(t,n,a){switch(n.tag){case 3:we(n,n.stateNode.containerInfo),ma(n,un,t.memoizedState.cache),Vs();break;case 27:case 5:Je(n);break;case 4:we(n,n.stateNode.containerInfo);break;case 10:ma(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Sa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Fm(t,n,a):(Sa(n),t=Vi(t,n,a),t!==null?t.sibling:null);Sa(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Xs(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Gm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ye(cn,cn.current),o)break;return null;case 22:case 23:return n.lanes=0,Om(t,n,a);case 24:ma(n,un,t.memoizedState.cache)}return Vi(t,n,a)}function Vm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!tf(t,a)&&(n.flags&128)===0)return mn=!1,px(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,Ct&&(n.flags&1048576)!==0&&vp(n,cl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")cc(o)?(t=lr(o,t),n.tag=1,n=zm(null,n,o,t,a)):(n.tag=0,n=jc(null,n,o,t,a));else{if(o!=null){if(c=o.$$typeof,c===D){n.tag=11,n=Um(null,n,o,t,a);break e}else if(c===z){n.tag=14,n=Lm(null,n,o,t,a);break e}}throw n=ve(o)||o,Error(r(306,n,""))}}return n;case 0:return jc(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=lr(o,n.pendingProps),zm(t,n,o,c,a);case 3:e:{if(we(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Tc(t,n),Qs(n,o,null,a);var y=n.memoizedState;if(o=y.cache,ma(n,un,o),o!==f.cache&&vc(n,[un],a,!0),Ks(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Im(t,n,o,a);break e}else if(o!==c){c=Jn(Error(r(424)),n),ks(c),n=Im(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Zt=ci(t.firstChild),Un=n,Ct=!0,nr=null,vi=!0,a=Sm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Vs(),o===c){n=Vi(t,n,a);break e}Mn(t,n,o,a)}n=n.child}return n;case 26:return Dl(t,n),t===null?(a=qg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ct||(a=n.type,t=n.pendingProps,o=Wl(Me.current).createElement(a),o[on]=n,o[Sn]=t,Tn(o,a,t),tn(o),n.stateNode=o):n.memoizedState=qg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Je(n),t===null&&Ct&&(o=n.stateNode=kg(n.type,n.pendingProps,Me.current),Un=n,vi=!0,c=Zt,Da(n.type)?(Bf=c,Zt=ci(o.firstChild)):Zt=c),Mn(t,n,n.pendingProps.children,a),Dl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ct&&((c=o=Zt)&&(o=Vx(o,n.type,n.pendingProps,vi),o!==null?(n.stateNode=o,Un=n,Zt=ci(o.firstChild),vi=!1,c=!0):c=!1),c||ir(n)),Je(n),c=n.type,f=n.pendingProps,y=t!==null?t.memoizedProps:null,o=f.children,Lf(c,f)?o=null:y!==null&&Lf(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=Dc(t,n,sx,null,null,a),So._currentValue=c),Dl(t,n),Mn(t,n,o,a),n.child;case 6:return t===null&&Ct&&((t=a=Zt)&&(a=kx(a,n.pendingProps,vi),a!==null?(n.stateNode=a,Un=n,Zt=null,t=!0):t=!1),t||ir(n)),null;case 13:return Fm(t,n,a);case 4:return we(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Wr(n,null,o,a):Mn(t,n,o,a),n.child;case 11:return Um(t,n,n.type,n.pendingProps,a);case 7:return Mn(t,n,n.pendingProps,a),n.child;case 8:return Mn(t,n,n.pendingProps.children,a),n.child;case 12:return Mn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ma(n,n.type,o.value),Mn(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,rr(n),c=Rn(c),o=o(c),n.flags|=1,Mn(t,n,o,a),n.child;case 14:return Lm(t,n,n.type,n.pendingProps,a);case 15:return Nm(t,n,n.type,n.pendingProps,a);case 19:return Gm(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=Ul(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Pi(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Om(t,n,a);case 24:return rr(n),o=Rn(un),t===null?(c=yc(),c===null&&(c=Xt,f=xc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Ec(n),ma(n,un,c)):((t.lanes&a)!==0&&(Tc(t,n),Qs(n,null,null,a),Ks()),c=t.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ma(n,un,o)):(o=f.cache,ma(n,un,o),o!==c.cache&&vc(n,[un],a,!0))),Mn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ki(t){t.flags|=4}function km(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Qg(n)){if(n=ni.current,n!==null&&((yt&4194048)===yt?xi!==null:(yt&62914560)!==yt&&(yt&536870912)===0||n!==xi))throw js=Mc,Ap;t.flags|=8192}}function Ll(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Le():536870912,t.lanes|=n,Zr|=n)}function ao(t,n){if(!Ct)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function mx(t,n,a){var o=n.pendingProps;switch(pc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(n),null;case 1:return qt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Fi(un),lt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Gs(n)?ki(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,yp())),qt(n),null;case 26:return a=n.memoizedState,t===null?(ki(n),a!==null?(qt(n),km(n,a)):(qt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(ki(n),qt(n),km(n,a)):(qt(n),n.flags&=-16777217):(t.memoizedProps!==o&&ki(n),qt(n),n.flags&=-16777217),null;case 27:Nt(n),a=Me.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ki(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qt(n),null}t=Q.current,Gs(n)?xp(n):(t=kg(c,o,a),n.stateNode=t,ki(n))}return qt(n),null;case 5:if(Nt(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ki(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qt(n),null}if(t=Q.current,Gs(n))xp(n);else{switch(c=Wl(Me.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}t[on]=n,t[Sn]=o;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;e:switch(Tn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ki(n)}}return qt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ki(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=Me.current,Gs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Un,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Bg(t.nodeValue,a)),t||ir(n)}else t=Wl(t).createTextNode(o),t[on]=n,n.stateNode=t}return qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Gs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[on]=n}else Vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),c=!1}else c=yp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Gi(n),n):(Gi(n),null)}if(Gi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Ll(n,n.updateQueue),qt(n),null;case 4:return lt(),t===null&&Rf(n.stateNode.containerInfo),qt(n),null;case 10:return Fi(n.type),qt(n),null;case 19:if(xe(cn),c=n.memoizedState,c===null)return qt(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)ao(c,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Rl(t),f!==null){for(n.flags|=128,ao(c,!1),t=f.updateQueue,n.updateQueue=t,Ll(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)_p(a,t),a=a.sibling;return ye(cn,cn.current&1|2),n.child}t=t.sibling}c.tail!==null&&ht()>Pl&&(n.flags|=128,o=!0,ao(c,!1),n.lanes=4194304)}else{if(!o)if(t=Rl(f),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Ll(n,t),ao(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ct)return qt(n),null}else 2*ht()-c.renderingStartTime>Pl&&a!==536870912&&(n.flags|=128,o=!0,ao(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ht(),n.sibling=null,t=cn.current,ye(cn,o?t&1|2:t&1),n):(qt(n),null);case 22:case 23:return Gi(n),Cc(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qt(n),n.subtreeFlags&6&&(n.flags|=8192)):qt(n),a=n.updateQueue,a!==null&&Ll(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&xe(sr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Fi(un),qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function gx(t,n){switch(pc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Fi(un),lt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Nt(n),null;case 13:if(Gi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Vs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return xe(cn),null;case 4:return lt(),null;case 10:return Fi(n.type),null;case 22:case 23:return Gi(n),Cc(),t!==null&&xe(sr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Fi(un),null;case 25:return null;default:return null}}function Xm(t,n){switch(pc(n),n.tag){case 3:Fi(un),lt();break;case 26:case 27:case 5:Nt(n);break;case 4:lt();break;case 13:Gi(n);break;case 19:xe(cn);break;case 10:Fi(n.type);break;case 22:case 23:Gi(n),Cc(),t!==null&&xe(sr);break;case 24:Fi(un)}}function ro(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==c)}}catch(b){Ht(n,n.return,b)}}function Ma(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&t)===t){var y=o.inst,b=y.destroy;if(b!==void 0){y.destroy=void 0,c=n;var P=a,J=b;try{J()}catch(ue){Ht(c,P,ue)}}}o=o.next}while(o!==f)}}catch(ue){Ht(n,n.return,ue)}}function Wm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Lp(n,a)}catch(o){Ht(t,t.return,o)}}}function qm(t,n,a){a.props=lr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ht(t,n,o)}}function so(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Ht(t,n,c)}}function Si(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Ht(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ht(t,n,c)}else a.current=null}function Ym(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Ht(t,t.return,c)}}function nf(t,n,a){try{var o=t.stateNode;zx(o,t.type,a,n),o[Sn]=n}catch(c){Ht(t,t.return,c)}}function jm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Da(t.type)||t.tag===4}function af(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Da(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xl));else if(o!==4&&(o===27&&Da(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(rf(t,n,a),t=t.sibling;t!==null;)rf(t,n,a),t=t.sibling}function Nl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Da(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Nl(t,n,a),t=t.sibling;t!==null;)Nl(t,n,a),t=t.sibling}function Zm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,o,a),n[on]=t,n[Sn]=a}catch(f){Ht(t,t.return,f)}}var Xi=!1,$t=!1,sf=!1,Km=typeof WeakSet=="function"?WeakSet:Set,gn=null;function _x(t,n){if(t=t.containerInfo,Df=Ql,t=op(t),ic(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var y=0,b=-1,P=-1,J=0,ue=0,ge=t,te=null;t:for(;;){for(var ne;ge!==a||c!==0&&ge.nodeType!==3||(b=y+c),ge!==f||o!==0&&ge.nodeType!==3||(P=y+o),ge.nodeType===3&&(y+=ge.nodeValue.length),(ne=ge.firstChild)!==null;)te=ge,ge=ne;for(;;){if(ge===t)break t;if(te===a&&++J===c&&(b=y),te===f&&++ue===o&&(P=y),(ne=ge.nextSibling)!==null)break;ge=te,te=ge.parentNode}ge=ne}a=b===-1||P===-1?null:{start:b,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uf={focusedElem:t,selectionRange:a},Ql=!1,gn=n;gn!==null;)if(n=gn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,gn=t;else for(;gn!==null;){switch(n=gn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var nt=lr(a.type,c,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(nt,f),o.__reactInternalSnapshotBeforeUpdate=t}catch($e){Ht(a,a.return,$e)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Of(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Of(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,gn=t;break}gn=n.return}}function Qm(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ea(t,a),o&4&&ro(5,a);break;case 1:if(Ea(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){Ht(a,a.return,y)}else{var c=lr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Ht(a,a.return,y)}}o&64&&Wm(a),o&512&&so(a,a.return);break;case 3:if(Ea(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Lp(t,n)}catch(y){Ht(a,a.return,y)}}break;case 27:n===null&&o&4&&Zm(a);case 26:case 5:Ea(t,a),n===null&&o&4&&Ym(a),o&512&&so(a,a.return);break;case 12:Ea(t,a);break;case 13:Ea(t,a),o&4&&eg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Ax.bind(null,a),Xx(t,a))));break;case 22:if(o=a.memoizedState!==null||Xi,!o){n=n!==null&&n.memoizedState!==null||$t,c=Xi;var f=$t;Xi=o,($t=n)&&!f?Ta(t,a,(a.subtreeFlags&8772)!==0):Ea(t,a),Xi=c,$t=f}break;case 30:break;default:Ea(t,a)}}function Jm(t){var n=t.alternate;n!==null&&(t.alternate=null,Jm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&fa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Wt=null,Bn=!1;function Wi(t,n,a){for(a=a.child;a!==null;)$m(t,n,a),a=a.sibling}function $m(t,n,a){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(ce,a)}catch{}switch(a.tag){case 26:$t||Si(a,n),Wi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$t||Si(a,n);var o=Wt,c=Bn;Da(a.type)&&(Wt=a.stateNode,Bn=!1),Wi(t,n,a),go(a.stateNode),Wt=o,Bn=c;break;case 5:$t||Si(a,n);case 6:if(o=Wt,c=Bn,Wt=null,Wi(t,n,a),Wt=o,Bn=c,Wt!==null)if(Bn)try{(Wt.nodeType===9?Wt.body:Wt.nodeName==="HTML"?Wt.ownerDocument.body:Wt).removeChild(a.stateNode)}catch(f){Ht(a,n,f)}else try{Wt.removeChild(a.stateNode)}catch(f){Ht(a,n,f)}break;case 18:Wt!==null&&(Bn?(t=Wt,Gg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),To(t)):Gg(Wt,a.stateNode));break;case 4:o=Wt,c=Bn,Wt=a.stateNode.containerInfo,Bn=!0,Wi(t,n,a),Wt=o,Bn=c;break;case 0:case 11:case 14:case 15:$t||Ma(2,a,n),$t||Ma(4,a,n),Wi(t,n,a);break;case 1:$t||(Si(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&qm(a,n,o)),Wi(t,n,a);break;case 21:Wi(t,n,a);break;case 22:$t=(o=$t)||a.memoizedState!==null,Wi(t,n,a),$t=o;break;default:Wi(t,n,a)}}function eg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{To(t)}catch(a){Ht(n,n.return,a)}}function vx(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Km),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Km),n;default:throw Error(r(435,t.tag))}}function of(t,n){var a=vx(t);n.forEach(function(o){var c=Rx.bind(null,t,o);a.has(o)||(a.add(o),o.then(c,c))})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=t,y=n,b=y;e:for(;b!==null;){switch(b.tag){case 27:if(Da(b.type)){Wt=b.stateNode,Bn=!1;break e}break;case 5:Wt=b.stateNode,Bn=!1;break e;case 3:case 4:Wt=b.stateNode.containerInfo,Bn=!0;break e}b=b.return}if(Wt===null)throw Error(r(160));$m(f,y,c),Wt=null,Bn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)tg(n,t),n=n.sibling}var ui=null;function tg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),o&4&&(Ma(3,t,t.return),ro(3,t),Ma(5,t,t.return));break;case 1:Xn(n,t),Wn(t),o&512&&($t||a===null||Si(a,a.return)),o&64&&Xi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=ui;if(Xn(n,t),Wn(t),o&512&&($t||a===null||Si(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ca]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,o,a),f[on]=t,tn(f),o=f;break e;case"link":var y=Zg("link","href",c).get(o+(a.href||""));if(y){for(var b=0;b<y.length;b++)if(f=y[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(b,1);break t}}f=c.createElement(o),Tn(f,o,a),c.head.appendChild(f);break;case"meta":if(y=Zg("meta","content",c).get(o+(a.content||""))){for(b=0;b<y.length;b++)if(f=y[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(b,1);break t}}f=c.createElement(o),Tn(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[on]=t,tn(f),o=f}t.stateNode=o}else Kg(c,t.type,t.stateNode);else t.stateNode=jg(c,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Kg(c,t.type,t.stateNode):jg(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&nf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),Wn(t),o&512&&($t||a===null||Si(a,a.return)),a!==null&&o&4&&nf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),o&512&&($t||a===null||Si(a,a.return)),t.flags&32){c=t.stateNode;try{_i(c,"")}catch(ne){Ht(t,t.return,ne)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,nf(t,c,a!==null?a.memoizedProps:c)),o&1024&&(sf=!0);break;case 6:if(Xn(n,t),Wn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ne){Ht(t,t.return,ne)}}break;case 3:if(jl=null,c=ui,ui=ql(n.containerInfo),Xn(n,t),ui=c,Wn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{To(n.containerInfo)}catch(ne){Ht(t,t.return,ne)}sf&&(sf=!1,ng(t));break;case 4:o=ui,ui=ql(t.stateNode.containerInfo),Xn(n,t),Wn(t),ui=o;break;case 12:Xn(n,t),Wn(t);break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(hf=ht()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,of(t,o)));break;case 22:c=t.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,J=Xi,ue=$t;if(Xi=J||c,$t=ue||P,Xn(n,t),$t=ue,Xi=J,Wn(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Xi||$t||ur(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{b=P.stateNode;var ge=P.memoizedProps.style,te=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;b.style.display=te==null||typeof te=="boolean"?"":(""+te).trim()}}catch(ne){Ht(P,P.return,ne)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(ne){Ht(P,P.return,ne)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,of(t,a))));break;case 19:Xn(n,t),Wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,of(t,o)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(jm(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=af(t);Nl(t,f,c);break;case 5:var y=a.stateNode;a.flags&32&&(_i(y,""),a.flags&=-33);var b=af(t);Nl(t,b,y);break;case 3:case 4:var P=a.stateNode.containerInfo,J=af(t);rf(t,J,P);break;default:throw Error(r(161))}}catch(ue){Ht(t,t.return,ue)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function ng(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;ng(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ea(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Qm(t,n.alternate,n),n=n.sibling}function ur(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ma(4,n,n.return),ur(n);break;case 1:Si(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&qm(n,n.return,a),ur(n);break;case 27:go(n.stateNode);case 26:case 5:Si(n,n.return),ur(n);break;case 22:n.memoizedState===null&&ur(n);break;case 30:ur(n);break;default:ur(n)}t=t.sibling}}function Ta(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:Ta(c,f,a),ro(4,f);break;case 1:if(Ta(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Ht(o,o.return,J)}if(o=f,c=o.updateQueue,c!==null){var b=o.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)Up(P[c],b)}catch(J){Ht(o,o.return,J)}}a&&y&64&&Wm(f),so(f,f.return);break;case 27:Zm(f);case 26:case 5:Ta(c,f,a),a&&o===null&&y&4&&Ym(f),so(f,f.return);break;case 12:Ta(c,f,a);break;case 13:Ta(c,f,a),a&&y&4&&eg(c,f);break;case 22:f.memoizedState===null&&Ta(c,f,a),so(f,f.return);break;case 30:break;default:Ta(c,f,a)}n=n.sibling}}function lf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ws(a))}function uf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ws(t))}function yi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ig(t,n,a,o),n=n.sibling}function ig(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(t,n,a,o),c&2048&&ro(9,n);break;case 1:yi(t,n,a,o);break;case 3:yi(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ws(t)));break;case 12:if(c&2048){yi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,y=f.id,b=f.onPostCommit;typeof b=="function"&&b(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){Ht(n,n.return,P)}}else yi(t,n,a,o);break;case 13:yi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?yi(t,n,a,o):oo(t,n):f._visibility&2?yi(t,n,a,o):(f._visibility|=2,qr(t,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&lf(y,n);break;case 24:yi(t,n,a,o),c&2048&&uf(n.alternate,n);break;default:yi(t,n,a,o)}}function qr(t,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,y=n,b=a,P=o,J=y.flags;switch(y.tag){case 0:case 11:case 15:qr(f,y,b,P,c),ro(8,y);break;case 23:break;case 22:var ue=y.stateNode;y.memoizedState!==null?ue._visibility&2?qr(f,y,b,P,c):oo(f,y):(ue._visibility|=2,qr(f,y,b,P,c)),c&&J&2048&&lf(y.alternate,y);break;case 24:qr(f,y,b,P,c),c&&J&2048&&uf(y.alternate,y);break;default:qr(f,y,b,P,c)}n=n.sibling}}function oo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:oo(a,o),c&2048&&lf(o.alternate,o);break;case 24:oo(a,o),c&2048&&uf(o.alternate,o);break;default:oo(a,o)}n=n.sibling}}var lo=8192;function Yr(t){if(t.subtreeFlags&lo)for(t=t.child;t!==null;)ag(t),t=t.sibling}function ag(t){switch(t.tag){case 26:Yr(t),t.flags&lo&&t.memoizedState!==null&&iS(ui,t.memoizedState,t.memoizedProps);break;case 5:Yr(t);break;case 3:case 4:var n=ui;ui=ql(t.stateNode.containerInfo),Yr(t),ui=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=lo,lo=16777216,Yr(t),lo=n):Yr(t));break;default:Yr(t)}}function rg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function uo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,og(o,t)}rg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)sg(t),t=t.sibling}function sg(t){switch(t.tag){case 0:case 11:case 15:uo(t),t.flags&2048&&Ma(9,t,t.return);break;case 3:uo(t);break;case 12:uo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ol(t)):uo(t);break;default:uo(t)}}function Ol(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,og(o,t)}rg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ma(8,n,n.return),Ol(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ol(n));break;default:Ol(n)}t=t.sibling}}function og(t,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ws(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else e:for(a=t;gn!==null;){o=gn;var c=o.sibling,f=o.return;if(Jm(o),o===a){gn=null;break e}if(c!==null){c.return=f,gn=c;break e}gn=f}}}var xx={getCacheForType:function(t){var n=Rn(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Sx=typeof WeakMap=="function"?WeakMap:Map,Ut=0,Xt=null,pt=null,yt=0,Lt=0,qn=null,ba=!1,jr=!1,cf=!1,qi=0,Kt=0,Aa=0,cr=0,ff=0,ii=0,Zr=0,co=null,zn=null,df=!1,hf=0,Pl=1/0,Bl=null,Ra=null,En=0,Ca=null,Kr=null,Qr=0,pf=0,mf=null,lg=null,fo=0,gf=null;function Yn(){if((Ut&2)!==0&&yt!==0)return yt&-yt;if(B.T!==null){var t=Ir;return t!==0?t:Ef()}return Tt()}function ug(){ii===0&&(ii=(yt&536870912)===0||Ct?V():536870912);var t=ni.current;return t!==null&&(t.flags|=32),ii}function jn(t,n,a){(t===Xt&&(Lt===2||Lt===9)||t.cancelPendingCommit!==null)&&(Jr(t,0),wa(t,yt,ii,!1)),Ie(t,a),((Ut&2)===0||t!==Xt)&&(t===Xt&&((Ut&2)===0&&(cr|=a),Kt===4&&wa(t,yt,ii,!1)),Mi(t))}function cg(t,n,a){if((Ut&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Ce(t,n),c=o?Ex(t,n):xf(t,n,!0),f=o;do{if(c===0){jr&&!o&&wa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!yx(a)){c=xf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var b=t;c=co;var P=b.current.memoizedState.isDehydrated;if(P&&(Jr(b,y).flags|=256),y=xf(b,y,!1),y!==2){if(cf&&!P){b.errorRecoveryDisabledLanes|=f,cr|=f,c=4;break e}f=zn,zn=c,f!==null&&(zn===null?zn=f:zn.push.apply(zn,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){Jr(t,0),wa(t,n,0,!0);break}e:{switch(o=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:wa(o,n,ii,!ba);break e;case 2:zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=hf+300-ht(),10<c)){if(wa(o,n,ii,!ba),je(o,0,!0)!==0)break e;o.timeoutHandle=Fg(fg.bind(null,o,a,zn,Bl,df,n,ii,cr,Zr,ba,f,2,-0,0),c);break e}fg(o,a,zn,Bl,df,n,ii,cr,Zr,ba,f,0,-0,0)}}break}while(!0);Mi(t)}function fg(t,n,a,o,c,f,y,b,P,J,ue,ge,te,ne){if(t.timeoutHandle=-1,ge=n.subtreeFlags,(ge&8192||(ge&16785408)===16785408)&&(xo={stylesheets:null,count:0,unsuspend:nS},ag(n),ge=aS(),ge!==null)){t.cancelPendingCommit=ge(vg.bind(null,t,n,f,a,o,c,y,b,P,ue,1,te,ne)),wa(t,f,y,!J);return}vg(t,n,f,a,o,c,y,b,P)}function yx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Vn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wa(t,n,a,o){n&=~ff,n&=~cr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var f=31-Be(c),y=1<<f;o[f]=-1,c&=~y}a!==0&&_e(t,a,n)}function zl(){return(Ut&6)===0?(ho(0),!1):!0}function _f(){if(pt!==null){if(Lt===0)var t=pt.return;else t=pt,Ii=ar=null,Nc(t),Xr=null,no=0,t=pt;for(;t!==null;)Xm(t.alternate,t),t=t.return;pt=null}}function Jr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Fx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),_f(),Xt=t,pt=a=Pi(t.current,null),yt=n,Lt=0,qn=null,ba=!1,jr=Ce(t,n),cf=!1,Zr=ii=ff=cr=Aa=Kt=0,zn=co=null,df=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Be(o),f=1<<c;n|=t[c],o&=~f}return qi=n,rl(),a}function dg(t,n){ft=null,B.H=Tl,n===Ys||n===pl?(n=wp(),Lt=3):n===Ap?(n=wp(),Lt=4):Lt=n===Dm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,pt===null&&(Kt=1,wl(t,Jn(n,t.current)))}function hg(){var t=B.H;return B.H=Tl,t===null?Tl:t}function pg(){var t=B.A;return B.A=xx,t}function vf(){Kt=4,ba||(yt&4194048)!==yt&&ni.current!==null||(jr=!0),(Aa&134217727)===0&&(cr&134217727)===0||Xt===null||wa(Xt,yt,ii,!1)}function xf(t,n,a){var o=Ut;Ut|=2;var c=hg(),f=pg();(Xt!==t||yt!==n)&&(Bl=null,Jr(t,n)),n=!1;var y=Kt;e:do try{if(Lt!==0&&pt!==null){var b=pt,P=qn;switch(Lt){case 8:_f(),y=6;break e;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var J=Lt;if(Lt=0,qn=null,$r(t,b,P,J),a&&jr){y=0;break e}break;default:J=Lt,Lt=0,qn=null,$r(t,b,P,J)}}Mx(),y=Kt;break}catch(ue){dg(t,ue)}while(!0);return n&&t.shellSuspendCounter++,Ii=ar=null,Ut=o,B.H=c,B.A=f,pt===null&&(Xt=null,yt=0,rl()),y}function Mx(){for(;pt!==null;)mg(pt)}function Ex(t,n){var a=Ut;Ut|=2;var o=hg(),c=pg();Xt!==t||yt!==n?(Bl=null,Pl=ht()+500,Jr(t,n)):jr=Ce(t,n);e:do try{if(Lt!==0&&pt!==null){n=pt;var f=qn;t:switch(Lt){case 1:Lt=0,qn=null,$r(t,n,f,1);break;case 2:case 9:if(Rp(f)){Lt=0,qn=null,gg(n);break}n=function(){Lt!==2&&Lt!==9||Xt!==t||(Lt=7),Mi(t)},f.then(n,n);break e;case 3:Lt=7;break e;case 4:Lt=5;break e;case 7:Rp(f)?(Lt=0,qn=null,gg(n)):(Lt=0,qn=null,$r(t,n,f,7));break;case 5:var y=null;switch(pt.tag){case 26:y=pt.memoizedState;case 5:case 27:var b=pt;if(!y||Qg(y)){Lt=0,qn=null;var P=b.sibling;if(P!==null)pt=P;else{var J=b.return;J!==null?(pt=J,Il(J)):pt=null}break t}}Lt=0,qn=null,$r(t,n,f,5);break;case 6:Lt=0,qn=null,$r(t,n,f,6);break;case 8:_f(),Kt=6;break e;default:throw Error(r(462))}}Tx();break}catch(ue){dg(t,ue)}while(!0);return Ii=ar=null,B.H=o,B.A=c,Ut=a,pt!==null?0:(Xt=null,yt=0,rl(),Kt)}function Tx(){for(;pt!==null&&!xn();)mg(pt)}function mg(t){var n=Vm(t.alternate,t,qi);t.memoizedProps=t.pendingProps,n===null?Il(t):pt=n}function gg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Bm(a,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=Bm(a,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:Nc(n);default:Xm(a,n),n=pt=_p(n,qi),n=Vm(a,n,qi)}t.memoizedProps=t.pendingProps,n===null?Il(t):pt=n}function $r(t,n,a,o){Ii=ar=null,Nc(n),Xr=null,no=0;var c=n.return;try{if(hx(t,c,n,a,yt)){Kt=1,wl(t,Jn(a,t.current)),pt=null;return}}catch(f){if(c!==null)throw pt=c,f;Kt=1,wl(t,Jn(a,t.current)),pt=null;return}n.flags&32768?(Ct||o===1?t=!0:jr||(yt&536870912)!==0?t=!1:(ba=t=!0,(o===2||o===9||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),_g(n,t)):Il(n)}function Il(t){var n=t;do{if((n.flags&32768)!==0){_g(n,ba);return}t=n.return;var a=mx(n.alternate,n,qi);if(a!==null){pt=a;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=t}while(n!==null);Kt===0&&(Kt=5)}function _g(t,n){do{var a=gx(t.alternate,t);if(a!==null){a.flags&=32767,pt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pt=t;return}pt=t=a}while(t!==null);Kt=6,pt=null}function vg(t,n,a,o,c,f,y,b,P){t.cancelPendingCommit=null;do Fl();while(En!==0);if((Ut&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=lc,Ae(t,a,f,y,b,P),t===Xt&&(pt=Xt=null,yt=0),Kr=n,Ca=t,Qr=a,pf=f,mf=c,lg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Cx(rt,function(){return Eg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,c=Z.p,Z.p=2,y=Ut,Ut|=4;try{_x(t,n,a)}finally{Ut=y,Z.p=c,B.T=o}}En=1,xg(),Sg(),yg()}}function xg(){if(En===1){En=0;var t=Ca,n=Kr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=Z.p;Z.p=2;var c=Ut;Ut|=4;try{tg(n,t);var f=Uf,y=op(t.containerInfo),b=f.focusedElem,P=f.selectionRange;if(y!==b&&b&&b.ownerDocument&&sp(b.ownerDocument.documentElement,b)){if(P!==null&&ic(b)){var J=P.start,ue=P.end;if(ue===void 0&&(ue=J),"selectionStart"in b)b.selectionStart=J,b.selectionEnd=Math.min(ue,b.value.length);else{var ge=b.ownerDocument||document,te=ge&&ge.defaultView||window;if(te.getSelection){var ne=te.getSelection(),nt=b.textContent.length,$e=Math.min(P.start,nt),Bt=P.end===void 0?$e:Math.min(P.end,nt);!ne.extend&&$e>Bt&&(y=Bt,Bt=$e,$e=y);var X=rp(b,$e),H=rp(b,Bt);if(X&&H&&(ne.rangeCount!==1||ne.anchorNode!==X.node||ne.anchorOffset!==X.offset||ne.focusNode!==H.node||ne.focusOffset!==H.offset)){var K=ge.createRange();K.setStart(X.node,X.offset),ne.removeAllRanges(),$e>Bt?(ne.addRange(K),ne.extend(H.node,H.offset)):(K.setEnd(H.node,H.offset),ne.addRange(K))}}}}for(ge=[],ne=b;ne=ne.parentNode;)ne.nodeType===1&&ge.push({element:ne,left:ne.scrollLeft,top:ne.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<ge.length;b++){var fe=ge[b];fe.element.scrollLeft=fe.left,fe.element.scrollTop=fe.top}}Ql=!!Df,Uf=Df=null}finally{Ut=c,Z.p=o,B.T=a}}t.current=n,En=2}}function Sg(){if(En===2){En=0;var t=Ca,n=Kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=Z.p;Z.p=2;var c=Ut;Ut|=4;try{Qm(t,n.alternate,n)}finally{Ut=c,Z.p=o,B.T=a}}En=3}}function yg(){if(En===4||En===3){En=0,Mt();var t=Ca,n=Kr,a=Qr,o=lg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,Kr=Ca=null,Mg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ra=null),Dt(a),n=n.stateNode,he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(ce,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,c=Z.p,Z.p=2,B.T=null;try{for(var f=t.onRecoverableError,y=0;y<o.length;y++){var b=o[y];f(b.value,{componentStack:b.stack})}}finally{B.T=n,Z.p=c}}(Qr&3)!==0&&Fl(),Mi(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===gf?fo++:(fo=0,gf=t):fo=0,ho(0)}}function Mg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ws(n)))}function Fl(t){return xg(),Sg(),yg(),Eg()}function Eg(){if(En!==5)return!1;var t=Ca,n=pf;pf=0;var a=Dt(Qr),o=B.T,c=Z.p;try{Z.p=32>a?32:a,B.T=null,a=mf,mf=null;var f=Ca,y=Qr;if(En=0,Kr=Ca=null,Qr=0,(Ut&6)!==0)throw Error(r(331));var b=Ut;if(Ut|=4,sg(f.current),ig(f,f.current,y,a),Ut=b,ho(0,!1),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(ce,f)}catch{}return!0}finally{Z.p=c,B.T=o,Mg(t,n)}}function Tg(t,n,a){n=Jn(a,n),n=Yc(t.stateNode,n,2),t=va(t,n,2),t!==null&&(Ie(t,2),Mi(t))}function Ht(t,n,a){if(t.tag===3)Tg(t,t,a);else for(;n!==null;){if(n.tag===3){Tg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ra===null||!Ra.has(o))){t=Jn(a,t),a=Cm(2),o=va(n,a,2),o!==null&&(wm(a,o,n,t),Ie(o,2),Mi(o));break}}n=n.return}}function Sf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Sx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(cf=!0,c.add(a),t=bx.bind(null,t,n,a),n.then(t,t))}function bx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xt===t&&(yt&a)===a&&(Kt===4||Kt===3&&(yt&62914560)===yt&&300>ht()-hf?(Ut&2)===0&&Jr(t,0):ff|=a,Zr===yt&&(Zr=0)),Mi(t)}function bg(t,n){n===0&&(n=Le()),t=Or(t,n),t!==null&&(Ie(t,n),Mi(t))}function Ax(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),bg(t,a)}function Rx(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),bg(t,a)}function Cx(t,n){return gt(t,n)}var Hl=null,es=null,yf=!1,Gl=!1,Mf=!1,fr=0;function Mi(t){t!==es&&t.next===null&&(es===null?Hl=es=t:es=es.next=t),Gl=!0,yf||(yf=!0,Dx())}function ho(t,n){if(!Mf&&Gl){Mf=!0;do for(var a=!1,o=Hl;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var y=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-Be(42|t)+1)-1,f&=c&~(y&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,wg(o,f))}else f=yt,f=je(o,o===Xt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ce(o,f)||(a=!0,wg(o,f));o=o.next}while(a);Mf=!1}}function wx(){Ag()}function Ag(){Gl=yf=!1;var t=0;fr!==0&&(Ix()&&(t=fr),fr=0);for(var n=ht(),a=null,o=Hl;o!==null;){var c=o.next,f=Rg(o,n);f===0?(o.next=null,a===null?Hl=c:a.next=c,c===null&&(es=a)):(a=o,(t!==0||(f&3)!==0)&&(Gl=!0)),o=c}ho(t)}function Rg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var y=31-Be(f),b=1<<y,P=c[y];P===-1?((b&a)===0||(b&o)!==0)&&(c[y]=at(b,n)):P<=n&&(t.expiredLanes|=b),f&=~b}if(n=Xt,a=yt,a=je(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Lt===2||Lt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&I(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ce(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&I(o),Dt(a)){case 2:case 8:a=Ze;break;case 32:a=rt;break;case 268435456:a=O;break;default:a=rt}return o=Cg.bind(null,t),a=gt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&I(o),t.callbackPriority=2,t.callbackNode=null,2}function Cg(t,n){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Fl()&&t.callbackNode!==a)return null;var o=yt;return o=je(t,t===Xt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(cg(t,o,n),Rg(t,ht()),t.callbackNode!=null&&t.callbackNode===a?Cg.bind(null,t):null)}function wg(t,n){if(Fl())return null;cg(t,n,!0)}function Dx(){Hx(function(){(Ut&6)!==0?gt(_t,wx):Ag()})}function Ef(){return fr===0&&(fr=V()),fr}function Dg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Jo(""+t)}function Ug(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Ux(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=Dg((c[Sn]||null).action),y=o.submitter;y&&(n=(n=y[Sn]||null)?Dg(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var b=new nl("action","action",null,o,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(fr!==0){var P=y?Ug(c,y):new FormData(c);Vc(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(b.preventDefault(),P=y?Ug(c,y):new FormData(c),Vc(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var Tf=0;Tf<oc.length;Tf++){var bf=oc[Tf],Lx=bf.toLowerCase(),Nx=bf[0].toUpperCase()+bf.slice(1);li(Lx,"on"+Nx)}li(cp,"onAnimationEnd"),li(fp,"onAnimationIteration"),li(dp,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(K0,"onTransitionRun"),li(Q0,"onTransitionStart"),li(J0,"onTransitionCancel"),li(hp,"onTransitionEnd"),A("onMouseEnter",["mouseout","mouseover"]),A("onMouseLeave",["mouseout","mouseover"]),A("onPointerEnter",["pointerout","pointerover"]),A("onPointerLeave",["pointerout","pointerover"]),Ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ui("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ox=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function Lg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var b=o[y],P=b.instance,J=b.currentTarget;if(b=b.listener,P!==f&&c.isPropagationStopped())break e;f=b,c.currentTarget=J;try{f(c)}catch(ue){Cl(ue)}c.currentTarget=null,f=P}else for(y=0;y<o.length;y++){if(b=o[y],P=b.instance,J=b.currentTarget,b=b.listener,P!==f&&c.isPropagationStopped())break e;f=b,c.currentTarget=J;try{f(c)}catch(ue){Cl(ue)}c.currentTarget=null,f=P}}}}function mt(t,n){var a=n[Ya];a===void 0&&(a=n[Ya]=new Set);var o=t+"__bubble";a.has(o)||(Ng(n,t,2,!1),a.add(o))}function Af(t,n,a){var o=0;n&&(o|=4),Ng(a,t,o,n)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function Rf(t){if(!t[Vl]){t[Vl]=!0,Ko.forEach(function(a){a!=="selectionchange"&&(Ox.has(a)||Af(a,!1,t),Af(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Vl]||(n[Vl]=!0,Af("selectionchange",!1,n))}}function Ng(t,n,a,o){switch(i_(n)){case 2:var c=oS;break;case 8:c=lS;break;default:c=Gf}a=c.bind(null,n,a,t),c=void 0,!ju||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Cf(t,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var b=o.stateNode.containerInfo;if(b===c)break;if(y===4)for(y=o.return;y!==null;){var P=y.tag;if((P===3||P===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;b!==null;){if(y=wi(b),y===null)return;if(P=y.tag,P===5||P===6||P===26||P===27){o=f=y;continue e}b=b.parentNode}}o=o.return}Hh(function(){var J=f,ue=qu(a),ge=[];e:{var te=pp.get(t);if(te!==void 0){var ne=nl,nt=t;switch(t){case"keypress":if(el(a)===0)break e;case"keydown":case"keyup":ne=C0;break;case"focusin":nt="focus",ne=Ju;break;case"focusout":nt="blur",ne=Ju;break;case"beforeblur":case"afterblur":ne=Ju;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=g0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=U0;break;case cp:case fp:case dp:ne=x0;break;case hp:ne=N0;break;case"scroll":case"scrollend":ne=p0;break;case"wheel":ne=P0;break;case"copy":case"cut":case"paste":ne=y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=Wh;break;case"toggle":case"beforetoggle":ne=z0}var $e=(n&4)!==0,Bt=!$e&&(t==="scroll"||t==="scrollend"),X=$e?te!==null?te+"Capture":null:te;$e=[];for(var H=J,K;H!==null;){var fe=H;if(K=fe.stateNode,fe=fe.tag,fe!==5&&fe!==26&&fe!==27||K===null||X===null||(fe=Ls(H,X),fe!=null&&$e.push(mo(H,fe,K))),Bt)break;H=H.return}0<$e.length&&(te=new ne(te,nt,null,a,ue),ge.push({event:te,listeners:$e}))}}if((n&7)===0){e:{if(te=t==="mouseover"||t==="pointerover",ne=t==="mouseout"||t==="pointerout",te&&a!==Wu&&(nt=a.relatedTarget||a.fromElement)&&(wi(nt)||nt[Nn]))break e;if((ne||te)&&(te=ue.window===ue?ue:(te=ue.ownerDocument)?te.defaultView||te.parentWindow:window,ne?(nt=a.relatedTarget||a.toElement,ne=J,nt=nt?wi(nt):null,nt!==null&&(Bt=u(nt),$e=nt.tag,nt!==Bt||$e!==5&&$e!==27&&$e!==6)&&(nt=null)):(ne=null,nt=J),ne!==nt)){if($e=kh,fe="onMouseLeave",X="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&($e=Wh,fe="onPointerLeave",X="onPointerEnter",H="pointer"),Bt=ne==null?te:Za(ne),K=nt==null?te:Za(nt),te=new $e(fe,H+"leave",ne,a,ue),te.target=Bt,te.relatedTarget=K,fe=null,wi(ue)===J&&($e=new $e(X,H+"enter",nt,a,ue),$e.target=K,$e.relatedTarget=Bt,fe=$e),Bt=fe,ne&&nt)t:{for($e=ne,X=nt,H=0,K=$e;K;K=ts(K))H++;for(K=0,fe=X;fe;fe=ts(fe))K++;for(;0<H-K;)$e=ts($e),H--;for(;0<K-H;)X=ts(X),K--;for(;H--;){if($e===X||X!==null&&$e===X.alternate)break t;$e=ts($e),X=ts(X)}$e=null}else $e=null;ne!==null&&Og(ge,te,ne,$e,!1),nt!==null&&Bt!==null&&Og(ge,Bt,nt,$e,!0)}}e:{if(te=J?Za(J):window,ne=te.nodeName&&te.nodeName.toLowerCase(),ne==="select"||ne==="input"&&te.type==="file")var Ge=$h;else if(Qh(te))if(ep)Ge=Y0;else{Ge=W0;var dt=X0}else ne=te.nodeName,!ne||ne.toLowerCase()!=="input"||te.type!=="checkbox"&&te.type!=="radio"?J&&Xu(J.elementType)&&(Ge=$h):Ge=q0;if(Ge&&(Ge=Ge(t,J))){Jh(ge,Ge,a,ue);break e}dt&&dt(t,te,J),t==="focusout"&&J&&te.type==="number"&&J.memoizedProps.value!=null&&An(te,"number",te.value)}switch(dt=J?Za(J):window,t){case"focusin":(Qh(dt)||dt.contentEditable==="true")&&(Ur=dt,ac=J,Hs=null);break;case"focusout":Hs=ac=Ur=null;break;case"mousedown":rc=!0;break;case"contextmenu":case"mouseup":case"dragend":rc=!1,lp(ge,a,ue);break;case"selectionchange":if(Z0)break;case"keydown":case"keyup":lp(ge,a,ue)}var qe;if(ec)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Dr?Zh(t,a)&&(tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(tt="onCompositionStart");tt&&(qh&&a.locale!=="ko"&&(Dr||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Dr&&(qe=Gh()):(pa=ue,Zu="value"in pa?pa.value:pa.textContent,Dr=!0)),dt=kl(J,tt),0<dt.length&&(tt=new Xh(tt,t,null,a,ue),ge.push({event:tt,listeners:dt}),qe?tt.data=qe:(qe=Kh(a),qe!==null&&(tt.data=qe)))),(qe=F0?H0(t,a):G0(t,a))&&(tt=kl(J,"onBeforeInput"),0<tt.length&&(dt=new Xh("onBeforeInput","beforeinput",null,a,ue),ge.push({event:dt,listeners:tt}),dt.data=qe)),Ux(ge,t,J,a,ue)}Lg(ge,n)})}function mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function kl(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ls(t,a),c!=null&&o.unshift(mo(t,c,f)),c=Ls(t,n),c!=null&&o.push(mo(t,c,f))),t.tag===3)return o;t=t.return}return[]}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Og(t,n,a,o,c){for(var f=n._reactName,y=[];a!==null&&a!==o;){var b=a,P=b.alternate,J=b.stateNode;if(b=b.tag,P!==null&&P===o)break;b!==5&&b!==26&&b!==27||J===null||(P=J,c?(J=Ls(a,f),J!=null&&y.unshift(mo(a,J,P))):c||(J=Ls(a,f),J!=null&&y.push(mo(a,J,P)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var Px=/\r\n?/g,Bx=/\u0000|\uFFFD/g;function Pg(t){return(typeof t=="string"?t:""+t).replace(Px,`
`).replace(Bx,"")}function Bg(t,n){return n=Pg(n),Pg(t)===n}function Xl(){}function Pt(t,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||_i(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&_i(t,""+o);break;case"className":De(t,"class",o);break;case"tabIndex":De(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":De(t,a,o);break;case"style":Ih(t,o,f);break;case"data":if(n!=="object"){De(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Jo(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Pt(t,n,"name",c.name,c,null),Pt(t,n,"formEncType",c.formEncType,c,null),Pt(t,n,"formMethod",c.formMethod,c,null),Pt(t,n,"formTarget",c.formTarget,c,null)):(Pt(t,n,"encType",c.encType,c,null),Pt(t,n,"method",c.method,c,null),Pt(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Jo(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Xl);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Jo(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":mt("beforetoggle",t),mt("toggle",t),be(t,"popover",o);break;case"xlinkActuate":Pe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Pe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Pe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Pe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Pe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Pe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":be(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=d0.get(a)||a,be(t,a,o))}}function wf(t,n,a,o,c,f){switch(a){case"style":Ih(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?_i(t,o):(typeof o=="number"||typeof o=="bigint")&&_i(t,""+o);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Xl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Sn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):be(t,a,o)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pt(t,n,f,y,a,null)}}c&&Pt(t,n,"srcSet",a.srcSet,a,null),o&&Pt(t,n,"src",a.src,a,null);return;case"input":mt("invalid",t);var b=f=y=c=null,P=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var ue=a[o];if(ue!=null)switch(o){case"name":c=ue;break;case"type":y=ue;break;case"checked":P=ue;break;case"defaultChecked":J=ue;break;case"value":f=ue;break;case"defaultValue":b=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:Pt(t,n,o,ue,a,null)}}Ft(t,f,b,P,J,y,c,!1),jt(t);return;case"select":mt("invalid",t),o=y=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":y=b;break;case"multiple":o=b;default:Pt(t,n,c,b,a,null)}n=f,a=y,t.multiple=!!o,n!=null?ln(t,!!o,n,!1):a!=null&&ln(t,!!o,a,!0);return;case"textarea":mt("invalid",t),f=c=o=null;for(y in a)if(a.hasOwnProperty(y)&&(b=a[y],b!=null))switch(y){case"value":o=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Pt(t,n,y,b,a,null)}yn(t,o,c,f),jt(t);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Pt(t,n,P,o,a,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(o=0;o<po.length;o++)mt(po[o],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pt(t,n,J,o,a,null)}return;default:if(Xu(n)){for(ue in a)a.hasOwnProperty(ue)&&(o=a[ue],o!==void 0&&wf(t,n,ue,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Pt(t,n,b,o,a,null))}function zx(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,b=null,P=null,J=null,ue=null;for(ne in a){var ge=a[ne];if(a.hasOwnProperty(ne)&&ge!=null)switch(ne){case"checked":break;case"value":break;case"defaultValue":P=ge;default:o.hasOwnProperty(ne)||Pt(t,n,ne,null,o,ge)}}for(var te in o){var ne=o[te];if(ge=a[te],o.hasOwnProperty(te)&&(ne!=null||ge!=null))switch(te){case"type":f=ne;break;case"name":c=ne;break;case"checked":J=ne;break;case"defaultChecked":ue=ne;break;case"value":y=ne;break;case"defaultValue":b=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(r(137,n));break;default:ne!==ge&&Pt(t,n,te,ne,o,ge)}}Li(t,y,b,P,J,ue,f,c);return;case"select":ne=y=b=te=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":ne=P;default:o.hasOwnProperty(f)||Pt(t,n,f,null,o,P)}for(c in o)if(f=o[c],P=a[c],o.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":te=f;break;case"defaultValue":b=f;break;case"multiple":y=f;default:f!==P&&Pt(t,n,c,f,o,P)}n=b,a=y,o=ne,te!=null?ln(t,!!a,te,!1):!!o!=!!a&&(n!=null?ln(t,!!a,n,!0):ln(t,!!a,a?[]:"",!1));return;case"textarea":ne=te=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Pt(t,n,b,null,o,c)}for(y in o)if(c=o[y],f=a[y],o.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":te=c;break;case"defaultValue":ne=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Pt(t,n,y,c,o,f)}pn(t,te,ne);return;case"option":for(var nt in a)if(te=a[nt],a.hasOwnProperty(nt)&&te!=null&&!o.hasOwnProperty(nt))switch(nt){case"selected":t.selected=!1;break;default:Pt(t,n,nt,null,o,te)}for(P in o)if(te=o[P],ne=a[P],o.hasOwnProperty(P)&&te!==ne&&(te!=null||ne!=null))switch(P){case"selected":t.selected=te&&typeof te!="function"&&typeof te!="symbol";break;default:Pt(t,n,P,te,o,ne)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in a)te=a[$e],a.hasOwnProperty($e)&&te!=null&&!o.hasOwnProperty($e)&&Pt(t,n,$e,null,o,te);for(J in o)if(te=o[J],ne=a[J],o.hasOwnProperty(J)&&te!==ne&&(te!=null||ne!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(r(137,n));break;default:Pt(t,n,J,te,o,ne)}return;default:if(Xu(n)){for(var Bt in a)te=a[Bt],a.hasOwnProperty(Bt)&&te!==void 0&&!o.hasOwnProperty(Bt)&&wf(t,n,Bt,void 0,o,te);for(ue in o)te=o[ue],ne=a[ue],!o.hasOwnProperty(ue)||te===ne||te===void 0&&ne===void 0||wf(t,n,ue,te,o,ne);return}}for(var X in a)te=a[X],a.hasOwnProperty(X)&&te!=null&&!o.hasOwnProperty(X)&&Pt(t,n,X,null,o,te);for(ge in o)te=o[ge],ne=a[ge],!o.hasOwnProperty(ge)||te===ne||te==null&&ne==null||Pt(t,n,ge,te,o,ne)}var Df=null,Uf=null;function Wl(t){return t.nodeType===9?t:t.ownerDocument}function zg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ig(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Lf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Nf=null;function Ix(){var t=window.event;return t&&t.type==="popstate"?t===Nf?!1:(Nf=t,!0):(Nf=null,!1)}var Fg=typeof setTimeout=="function"?setTimeout:void 0,Fx=typeof clearTimeout=="function"?clearTimeout:void 0,Hg=typeof Promise=="function"?Promise:void 0,Hx=typeof queueMicrotask=="function"?queueMicrotask:typeof Hg<"u"?function(t){return Hg.resolve(null).then(t).catch(Gx)}:Fg;function Gx(t){setTimeout(function(){throw t})}function Da(t){return t==="head"}function Gg(t,n){var a=n,o=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var y=t.ownerDocument;if(a&1&&go(y.documentElement),a&2&&go(y.body),a&4)for(a=y.head,go(a),y=a.firstChild;y;){var b=y.nextSibling,P=y.nodeName;y[ca]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&y.rel.toLowerCase()==="stylesheet"||a.removeChild(y),y=b}}if(c===0){t.removeChild(f),To(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);To(n)}function Of(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Of(a),fa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Vx(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ca])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ci(t.nextSibling),t===null)break}return null}function kx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ci(t.nextSibling),t===null))return null;return t}function Pf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Xx(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Bf=null;function Vg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function kg(t,n,a){switch(n=Wl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function go(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);fa(t)}var ai=new Map,Xg=new Set;function ql(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Yi=Z.d;Z.d={f:Wx,r:qx,D:Yx,C:jx,L:Zx,m:Kx,X:Jx,S:Qx,M:$x};function Wx(){var t=Yi.f(),n=zl();return t||n}function qx(t){var n=Di(t);n!==null&&n.tag===5&&n.type==="form"?cm(n):Yi.r(t)}var ns=typeof document>"u"?null:document;function Wg(t,n,a){var o=ns;if(o&&typeof n=="string"&&n){var c=kt(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Xg.has(c)||(Xg.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Tn(n,"link",t),tn(n),o.head.appendChild(n)))}}function Yx(t){Yi.D(t),Wg("dns-prefetch",t,null)}function jx(t,n){Yi.C(t,n),Wg("preconnect",t,n)}function Zx(t,n,a){Yi.L(t,n,a);var o=ns;if(o&&t&&n){var c='link[rel="preload"][as="'+kt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+kt(a.imageSizes)+'"]')):c+='[href="'+kt(t)+'"]';var f=c;switch(n){case"style":f=is(t);break;case"script":f=as(t)}ai.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ai.set(f,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(_o(f))||n==="script"&&o.querySelector(vo(f))||(n=o.createElement("link"),Tn(n,"link",t),tn(n),o.head.appendChild(n)))}}function Kx(t,n){Yi.m(t,n);var a=ns;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+kt(o)+'"][href="'+kt(t)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=as(t)}if(!ai.has(f)&&(t=g({rel:"modulepreload",href:t},n),ai.set(f,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vo(f)))return}o=a.createElement("link"),Tn(o,"link",t),tn(o),a.head.appendChild(o)}}}function Qx(t,n,a){Yi.S(t,n,a);var o=ns;if(o&&t){var c=da(o).hoistableStyles,f=is(t);n=n||"default";var y=c.get(f);if(!y){var b={loading:0,preload:null};if(y=o.querySelector(_o(f)))b.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ai.get(f))&&zf(t,a);var P=y=o.createElement("link");tn(P),Tn(P,"link",t),P._p=new Promise(function(J,ue){P.onload=J,P.onerror=ue}),P.addEventListener("load",function(){b.loading|=1}),P.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Yl(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:b},c.set(f,y)}}}function Jx(t,n){Yi.X(t,n);var a=ns;if(a&&t){var o=da(a).hoistableScripts,c=as(t),f=o.get(c);f||(f=a.querySelector(vo(c)),f||(t=g({src:t,async:!0},n),(n=ai.get(c))&&If(t,n),f=a.createElement("script"),tn(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function $x(t,n){Yi.M(t,n);var a=ns;if(a&&t){var o=da(a).hoistableScripts,c=as(t),f=o.get(c);f||(f=a.querySelector(vo(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ai.get(c))&&If(t,n),f=a.createElement("script"),tn(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function qg(t,n,a,o){var c=(c=Me.current)?ql(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=is(a.href),a=da(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=is(a.href);var f=da(c).hoistableStyles,y=f.get(t);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,y),(f=c.querySelector(_o(t)))&&!f._p&&(y.instance=f,y.state.loading=5),ai.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ai.set(t,a),f||eS(c,t,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=as(a),a=da(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function is(t){return'href="'+kt(t)+'"'}function _o(t){return'link[rel="stylesheet"]['+t+"]"}function Yg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function eS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Tn(n,"link",a),tn(n),t.head.appendChild(n))}function as(t){return'[src="'+kt(t)+'"]'}function vo(t){return"script[async]"+t}function jg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+kt(a.href)+'"]');if(o)return n.instance=o,tn(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),tn(o),Tn(o,"style",c),Yl(o,a.precedence,t),n.instance=o;case"stylesheet":c=is(a.href);var f=t.querySelector(_o(c));if(f)return n.state.loading|=4,n.instance=f,tn(f),f;o=Yg(a),(c=ai.get(c))&&zf(o,c),f=(t.ownerDocument||t).createElement("link"),tn(f);var y=f;return y._p=new Promise(function(b,P){y.onload=b,y.onerror=P}),Tn(f,"link",o),n.state.loading|=4,Yl(f,a.precedence,t),n.instance=f;case"script":return f=as(a.src),(c=t.querySelector(vo(f)))?(n.instance=c,tn(c),c):(o=a,(c=ai.get(f))&&(o=g({},a),If(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),tn(c),Tn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Yl(o,a.precedence,t));return n.instance}function Yl(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,y=0;y<o.length;y++){var b=o[y];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function If(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var jl=null;function Zg(t,n,a){if(jl===null){var o=new Map,c=jl=new Map;c.set(a,o)}else c=jl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[ca]||f[on]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=t+y;var b=o.get(y);b?b.push(f):o.set(y,[f])}}return o}function Kg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function tS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Qg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var xo=null;function nS(){}function iS(t,n,a){if(xo===null)throw Error(r(475));var o=xo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=is(a.href),f=t.querySelector(_o(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=Zl.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=f,tn(f);return}f=t.ownerDocument||t,a=Yg(a),(c=ai.get(c))&&zf(a,c),f=f.createElement("link"),tn(f);var y=f;y._p=new Promise(function(b,P){y.onload=b,y.onerror=P}),Tn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Zl.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function aS(){if(xo===null)throw Error(r(475));var t=xo;return t.stylesheets&&t.count===0&&Ff(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Ff(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Zl(){if(this.count--,this.count===0){if(this.stylesheets)Ff(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Kl=null;function Ff(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Kl=new Map,n.forEach(rS,t),Kl=null,Zl.call(t))}function rS(t,n){if(!(n.state.loading&4)){var a=Kl.get(t);if(a)var o=a.get(null);else{a=new Map,Kl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}c=n.instance,y=c.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,c),a.set(y,c),this.count++,o=Zl.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var So={$$typeof:L,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function sS(t,n,a,o,c,f,y,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Jg(t,n,a,o,c,f,y,b,P,J,ue,ge){return t=new sS(t,n,a,y,b,P,J,ge),n=1,f===!0&&(n|=24),f=kn(3,null,null,n),t.current=f,f.stateNode=t,n=xc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Ec(f),t}function $g(t){return t?(t=Pr,t):Pr}function e_(t,n,a,o,c,f){c=$g(c),o.context===null?o.context=c:o.pendingContext=c,o=_a(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=va(t,o,n),a!==null&&(jn(a,t,n),Zs(a,t,n))}function t_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Hf(t,n){t_(t,n),(t=t.alternate)&&t_(t,n)}function n_(t){if(t.tag===13){var n=Or(t,67108864);n!==null&&jn(n,t,67108864),Hf(t,67108864)}}var Ql=!0;function oS(t,n,a,o){var c=B.T;B.T=null;var f=Z.p;try{Z.p=2,Gf(t,n,a,o)}finally{Z.p=f,B.T=c}}function lS(t,n,a,o){var c=B.T;B.T=null;var f=Z.p;try{Z.p=8,Gf(t,n,a,o)}finally{Z.p=f,B.T=c}}function Gf(t,n,a,o){if(Ql){var c=Vf(o);if(c===null)Cf(t,n,o,Jl,a),a_(t,o);else if(cS(c,t,n,a,o))o.stopPropagation();else if(a_(t,o),n&4&&-1<uS.indexOf(t)){for(;c!==null;){var f=Di(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Ye(f.pendingLanes);if(y!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;y;){var P=1<<31-Be(y);b.entanglements[1]|=P,y&=~P}Mi(f),(Ut&6)===0&&(Pl=ht()+500,ho(0))}}break;case 13:b=Or(f,2),b!==null&&jn(b,f,2),zl(),Hf(f,2)}if(f=Vf(o),f===null&&Cf(t,n,o,Jl,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Cf(t,n,o,null,a)}}function Vf(t){return t=qu(t),kf(t)}var Jl=null;function kf(t){if(Jl=null,t=wi(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Jl=t,null}function i_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ke()){case _t:return 2;case Ze:return 8;case rt:case Qt:return 32;case O:return 268435456;default:return 32}default:return 32}}var Xf=!1,Ua=null,La=null,Na=null,yo=new Map,Mo=new Map,Oa=[],uS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function a_(t,n){switch(t){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":yo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(n.pointerId)}}function Eo(t,n,a,o,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Di(n),n!==null&&n_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function cS(t,n,a,o,c){switch(n){case"focusin":return Ua=Eo(Ua,t,n,a,o,c),!0;case"dragenter":return La=Eo(La,t,n,a,o,c),!0;case"mouseover":return Na=Eo(Na,t,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return yo.set(f,Eo(yo.get(f)||null,t,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Mo.set(f,Eo(Mo.get(f)||null,t,n,a,o,c)),!0}return!1}function r_(t){var n=wi(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Gn(t.priority,function(){if(a.tag===13){var o=Yn();o=it(o);var c=Or(a,o);c!==null&&jn(c,a,o),Hf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $l(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Vf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Wu=o,a.target.dispatchEvent(o),Wu=null}else return n=Di(a),n!==null&&n_(n),t.blockedOn=a,!1;n.shift()}return!0}function s_(t,n,a){$l(t)&&a.delete(n)}function fS(){Xf=!1,Ua!==null&&$l(Ua)&&(Ua=null),La!==null&&$l(La)&&(La=null),Na!==null&&$l(Na)&&(Na=null),yo.forEach(s_),Mo.forEach(s_)}function eu(t,n){t.blockedOn===n&&(t.blockedOn=null,Xf||(Xf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,fS)))}var tu=null;function o_(t){tu!==t&&(tu=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){tu===t&&(tu=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(kf(o||a)===null)continue;break}var f=Di(a);f!==null&&(t.splice(n,3),n-=3,Vc(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function To(t){function n(P){return eu(P,t)}Ua!==null&&eu(Ua,t),La!==null&&eu(La,t),Na!==null&&eu(Na,t),yo.forEach(n),Mo.forEach(n);for(var a=0;a<Oa.length;a++){var o=Oa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)r_(a),a.blockedOn===null&&Oa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],y=c[Sn]||null;if(typeof f=="function")y||o_(a);else if(y){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[Sn]||null)b=y.formAction;else if(kf(c)!==null)continue}else b=y.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),o_(a)}}}function Wf(t){this._internalRoot=t}nu.prototype.render=Wf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Yn();e_(a,o,t,n,null,null)},nu.prototype.unmount=Wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;e_(t.current,2,null,t,null,null),zl(),n[Nn]=null}};function nu(t){this._internalRoot=t}nu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Tt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Oa.length&&n!==0&&n<Oa[a].priority;a++);Oa.splice(a,0,t),a===0&&r_(t)}};var l_=e.version;if(l_!=="19.1.0")throw Error(r(527,l_,"19.1.0"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var dS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!iu.isDisabled&&iu.supportsFiber)try{ce=iu.inject(dS),he=iu}catch{}}return Ao.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=Tm,f=bm,y=Am,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=Jg(t,1,!1,null,null,a,o,c,f,y,b,null),t[Nn]=n.current,Rf(t),new Wf(n)},Ao.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",f=Tm,y=bm,b=Am,P=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=Jg(t,1,!0,n,a??null,o,c,f,y,b,P,J),n.context=$g(null),a=n.current,o=Yn(),o=it(o),c=_a(o),c.callback=null,va(a,c,o),a=o,n.current.lanes=a,Ie(n,a),Mi(n),t[Nn]=n.current,Rf(t),new nu(n)},Ao.version="19.1.0",Ao}var v_;function MS(){if(v_)return jf.exports;v_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),jf.exports=yS(),jf.exports}var ES=MS();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var x_="popstate";function TS(s={}){function e(r,l){let{pathname:u,search:d,hash:h}=r.location;return Ud("",{pathname:u,search:d,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:Oo(l)}return AS(e,i,null,s)}function Yt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Ri(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function bS(){return Math.random().toString(36).substring(2,10)}function S_(s,e){return{usr:s.state,key:s.key,idx:e}}function Ud(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Cs(e):e,state:i,key:e&&e.key||r||bS()}}function Oo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Cs(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function AS(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,d=l.history,h="POP",m=null,p=g();p==null&&(p=0,d.replaceState({...d.state,idx:p},""));function g(){return(d.state||{idx:null}).idx}function v(){h="POP";let S=g(),_=S==null?null:S-p;p=S,m&&m({action:h,location:R.location,delta:_})}function x(S,_){h="PUSH";let N=Ud(R.location,S,_);p=g()+1;let L=S_(N,p),D=R.createHref(N);try{d.pushState(L,"",D)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;l.location.assign(D)}u&&m&&m({action:h,location:R.location,delta:1})}function M(S,_){h="REPLACE";let N=Ud(R.location,S,_);p=g();let L=S_(N,p),D=R.createHref(N);d.replaceState(L,"",D),u&&m&&m({action:h,location:R.location,delta:0})}function T(S){return RS(S)}let R={get action(){return h},get location(){return s(l,d)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(x_,v),m=S,()=>{l.removeEventListener(x_,v),m=null}},createHref(S){return e(l,S)},createURL:T,encodeLocation(S){let _=T(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:M,go(S){return d.go(S)}};return R}function RS(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Yt(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Oo(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function xv(s,e,i="/"){return CS(s,e,i,!1)}function CS(s,e,i,r){let l=typeof e=="string"?Cs(e):e,u=ra(l.pathname||"/",i);if(u==null)return null;let d=Sv(s);wS(d);let h=null;for(let m=0;h==null&&m<d.length;++m){let p=HS(u);h=IS(d[m],p,r)}return h}function Sv(s,e=[],i=[],r=""){let l=(u,d,h)=>{let m={relativePath:h===void 0?u.path||"":h,caseSensitive:u.caseSensitive===!0,childrenIndex:d,route:u};m.relativePath.startsWith("/")&&(Yt(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length));let p=ia([r,m.relativePath]),g=i.concat(m);u.children&&u.children.length>0&&(Yt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Sv(u.children,e,g,p)),!(u.path==null&&!u.index)&&e.push({path:p,score:BS(p,u.index),routesMeta:g})};return s.forEach((u,d)=>{var h;if(u.path===""||!((h=u.path)!=null&&h.includes("?")))l(u,d);else for(let m of yv(u.path))l(u,d,m)}),e}function yv(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let d=yv(r.join("/")),h=[];return h.push(...d.map(m=>m===""?u:[u,m].join("/"))),l&&h.push(...d),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function wS(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:zS(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var DS=/^:[\w-]+$/,US=3,LS=2,NS=1,OS=10,PS=-2,y_=s=>s==="*";function BS(s,e){let i=s.split("/"),r=i.length;return i.some(y_)&&(r+=PS),e&&(r+=LS),i.filter(l=>!y_(l)).reduce((l,u)=>l+(DS.test(u)?US:u===""?NS:OS),r)}function zS(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function IS(s,e,i=!1){let{routesMeta:r}=s,l={},u="/",d=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,g=u==="/"?e:e.slice(u.length)||"/",v=Pu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),x=m.route;if(!v&&p&&i&&!r[r.length-1].route.index&&(v=Pu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),d.push({params:l,pathname:ia([u,v.pathname]),pathnameBase:XS(ia([u,v.pathnameBase])),route:x}),v.pathnameBase!=="/"&&(u=ia([u,v.pathnameBase]))}return d}function Pu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=FS(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let u=l[0],d=u.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:v},x)=>{if(g==="*"){let T=h[x]||"";d=u.slice(0,u.length-T.length).replace(/(.)\/+$/,"$1")}const M=h[x];return v&&!M?p[g]=void 0:p[g]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:d,pattern:s}}function FS(s,e=!1,i=!0){Ri(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function HS(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ri(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function ra(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function GS(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Cs(s):s;return{pathname:i?i.startsWith("/")?i:VS(i,e):e,search:WS(r),hash:qS(l)}}function VS(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Jf(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function kS(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Mv(s){let e=kS(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function Ev(s,e,i,r=!1){let l;typeof s=="string"?l=Cs(s):(l={...s},Yt(!l.pathname||!l.pathname.includes("?"),Jf("?","pathname","search",l)),Yt(!l.pathname||!l.pathname.includes("#"),Jf("#","pathname","hash",l)),Yt(!l.search||!l.search.includes("#"),Jf("#","search","hash",l)));let u=s===""||l.pathname==="",d=u?"/":l.pathname,h;if(d==null)h=i;else{let v=e.length-1;if(!r&&d.startsWith("..")){let x=d.split("/");for(;x[0]==="..";)x.shift(),v-=1;l.pathname=x.join("/")}h=v>=0?e[v]:"/"}let m=GS(l,h),p=d&&d!=="/"&&d.endsWith("/"),g=(u||d===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var ia=s=>s.join("/").replace(/\/\/+/g,"/"),XS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),WS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,qS=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function YS(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var Tv=["POST","PUT","PATCH","DELETE"];new Set(Tv);var jS=["GET",...Tv];new Set(jS);var ws=pe.createContext(null);ws.displayName="DataRouter";var Fu=pe.createContext(null);Fu.displayName="DataRouterState";pe.createContext(!1);var bv=pe.createContext({isTransitioning:!1});bv.displayName="ViewTransition";var ZS=pe.createContext(new Map);ZS.displayName="Fetchers";var KS=pe.createContext(null);KS.displayName="Await";var Ci=pe.createContext(null);Ci.displayName="Navigation";var Fo=pe.createContext(null);Fo.displayName="Location";var ua=pe.createContext({outlet:null,matches:[],isDataRoute:!1});ua.displayName="Route";var Mh=pe.createContext(null);Mh.displayName="RouteError";function QS(s,{relative:e}={}){Yt(Ho(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=pe.useContext(Ci),{hash:l,pathname:u,search:d}=Go(s,{relative:e}),h=u;return i!=="/"&&(h=u==="/"?i:ia([i,u])),r.createHref({pathname:h,search:d,hash:l})}function Ho(){return pe.useContext(Fo)!=null}function qa(){return Yt(Ho(),"useLocation() may be used only in the context of a <Router> component."),pe.useContext(Fo).location}var Av="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Rv(s){pe.useContext(Ci).static||pe.useLayoutEffect(s)}function Cv(){let{isDataRoute:s}=pe.useContext(ua);return s?cy():JS()}function JS(){Yt(Ho(),"useNavigate() may be used only in the context of a <Router> component.");let s=pe.useContext(ws),{basename:e,navigator:i}=pe.useContext(Ci),{matches:r}=pe.useContext(ua),{pathname:l}=qa(),u=JSON.stringify(Mv(r)),d=pe.useRef(!1);return Rv(()=>{d.current=!0}),pe.useCallback((m,p={})=>{if(Ri(d.current,Av),!d.current)return;if(typeof m=="number"){i.go(m);return}let g=Ev(m,JSON.parse(u),l,p.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:ia([e,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[e,i,u,l,s])}pe.createContext(null);function Go(s,{relative:e}={}){let{matches:i}=pe.useContext(ua),{pathname:r}=qa(),l=JSON.stringify(Mv(i));return pe.useMemo(()=>Ev(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function $S(s,e){return wv(s,e)}function wv(s,e,i,r){var _;Yt(Ho(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=pe.useContext(Ci),{matches:u}=pe.useContext(ua),d=u[u.length-1],h=d?d.params:{},m=d?d.pathname:"/",p=d?d.pathnameBase:"/",g=d&&d.route;{let N=g&&g.path||"";Dv(m,!g||N.endsWith("*")||N.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)}let v=qa(),x;if(e){let N=typeof e=="string"?Cs(e):e;Yt(p==="/"||((_=N.pathname)==null?void 0:_.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${N.pathname}" was given in the \`location\` prop.`),x=N}else x=v;let M=x.pathname||"/",T=M;if(p!=="/"){let N=p.replace(/^\//,"").split("/");T="/"+M.replace(/^\//,"").split("/").slice(N.length).join("/")}let R=xv(s,{pathname:T});Ri(g||R!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Ri(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=ay(R&&R.map(N=>Object.assign({},N,{params:Object.assign({},h,N.params),pathname:ia([p,l.encodeLocation?l.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?p:ia([p,l.encodeLocation?l.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),u,i,r);return e&&S?pe.createElement(Fo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},S):S}function ey(){let s=uy(),e=YS(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},d=null;return console.error("Error handled by React Router default ErrorBoundary:",s),d=pe.createElement(pe.Fragment,null,pe.createElement("p",null,"💿 Hey developer 👋"),pe.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",pe.createElement("code",{style:u},"ErrorBoundary")," or"," ",pe.createElement("code",{style:u},"errorElement")," prop on your route.")),pe.createElement(pe.Fragment,null,pe.createElement("h2",null,"Unexpected Application Error!"),pe.createElement("h3",{style:{fontStyle:"italic"}},e),i?pe.createElement("pre",{style:l},i):null,d)}var ty=pe.createElement(ey,null),ny=class extends pe.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){console.error("React Router caught the following error during render",s,e)}render(){return this.state.error!==void 0?pe.createElement(ua.Provider,{value:this.props.routeContext},pe.createElement(Mh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function iy({routeContext:s,match:e,children:i}){let r=pe.useContext(ws);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),pe.createElement(ua.Provider,{value:s},i)}function ay(s,e=[],i=null,r=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let l=s,u=i==null?void 0:i.errors;if(u!=null){let m=l.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id])!==void 0);Yt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let d=!1,h=-1;if(i)for(let m=0;m<l.length;m++){let p=l[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=m),p.route.id){let{loaderData:g,errors:v}=i,x=p.route.loader&&!g.hasOwnProperty(p.route.id)&&(!v||v[p.route.id]===void 0);if(p.route.lazy||x){d=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((m,p,g)=>{let v,x=!1,M=null,T=null;i&&(v=u&&p.route.id?u[p.route.id]:void 0,M=p.route.errorElement||ty,d&&(h<0&&g===0?(Dv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,T=null):h===g&&(x=!0,T=p.route.hydrateFallbackElement||null)));let R=e.concat(l.slice(0,g+1)),S=()=>{let _;return v?_=M:x?_=T:p.route.Component?_=pe.createElement(p.route.Component,null):p.route.element?_=p.route.element:_=m,pe.createElement(iy,{match:p,routeContext:{outlet:m,matches:R,isDataRoute:i!=null},children:_})};return i&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?pe.createElement(ny,{location:i.location,revalidation:i.revalidation,component:M,error:v,children:S(),routeContext:{outlet:null,matches:R,isDataRoute:!0}}):S()},null)}function Eh(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ry(s){let e=pe.useContext(ws);return Yt(e,Eh(s)),e}function sy(s){let e=pe.useContext(Fu);return Yt(e,Eh(s)),e}function oy(s){let e=pe.useContext(ua);return Yt(e,Eh(s)),e}function Th(s){let e=oy(s),i=e.matches[e.matches.length-1];return Yt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function ly(){return Th("useRouteId")}function uy(){var r;let s=pe.useContext(Mh),e=sy("useRouteError"),i=Th("useRouteError");return s!==void 0?s:(r=e.errors)==null?void 0:r[i]}function cy(){let{router:s}=ry("useNavigate"),e=Th("useNavigate"),i=pe.useRef(!1);return Rv(()=>{i.current=!0}),pe.useCallback(async(l,u={})=>{Ri(i.current,Av),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:e,...u}))},[s,e])}var M_={};function Dv(s,e,i){!e&&!M_[s]&&(M_[s]=!0,Ri(!1,i))}pe.memo(fy);function fy({routes:s,future:e,state:i}){return wv(s,void 0,i,e)}function Ld(s){Yt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function dy({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:u=!1}){Yt(!Ho(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=s.replace(/^\/*/,"/"),h=pe.useMemo(()=>({basename:d,navigator:l,static:u,future:{}}),[d,l,u]);typeof i=="string"&&(i=Cs(i));let{pathname:m="/",search:p="",hash:g="",state:v=null,key:x="default"}=i,M=pe.useMemo(()=>{let T=ra(m,d);return T==null?null:{location:{pathname:T,search:p,hash:g,state:v,key:x},navigationType:r}},[d,m,p,g,v,x,r]);return Ri(M!=null,`<Router basename="${d}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:pe.createElement(Ci.Provider,{value:h},pe.createElement(Fo.Provider,{children:e,value:M}))}function hy({children:s,location:e}){return $S(Nd(s),e)}function Nd(s,e=[]){let i=[];return pe.Children.forEach(s,(r,l)=>{if(!pe.isValidElement(r))return;let u=[...e,l];if(r.type===pe.Fragment){i.push.apply(i,Nd(r.props.children,u));return}Yt(r.type===Ld,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Yt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let d={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(d.children=Nd(r.props.children,u)),i.push(d)}),i}var Ru="get",Cu="application/x-www-form-urlencoded";function Hu(s){return s!=null&&typeof s.tagName=="string"}function py(s){return Hu(s)&&s.tagName.toLowerCase()==="button"}function my(s){return Hu(s)&&s.tagName.toLowerCase()==="form"}function gy(s){return Hu(s)&&s.tagName.toLowerCase()==="input"}function _y(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function vy(s,e){return s.button===0&&(!e||e==="_self")&&!_y(s)}var au=null;function xy(){if(au===null)try{new FormData(document.createElement("form"),0),au=!1}catch{au=!0}return au}var Sy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function $f(s){return s!=null&&!Sy.has(s)?(Ri(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Cu}"`),null):s}function yy(s,e){let i,r,l,u,d;if(my(s)){let h=s.getAttribute("action");r=h?ra(h,e):null,i=s.getAttribute("method")||Ru,l=$f(s.getAttribute("enctype"))||Cu,u=new FormData(s)}else if(py(s)||gy(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(r=m?ra(m,e):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||Ru,l=$f(s.getAttribute("formenctype"))||$f(h.getAttribute("enctype"))||Cu,u=new FormData(h,s),!xy()){let{name:p,type:g,value:v}=s;if(g==="image"){let x=p?`${p}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else p&&u.append(p,v)}}else{if(Hu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Ru,r=null,l=Cu,d=s}return u&&l==="text/plain"&&(d=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function bh(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function My(s,e,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&ra(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function Ey(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ty(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function by(s,e,i){let r=await Promise.all(s.map(async l=>{let u=e.routes[l.route.id];if(u){let d=await Ey(u,i);return d.links?d.links():[]}return[]}));return wy(r.flat(1).filter(Ty).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function E_(s,e,i,r,l,u){let d=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>{var g;return i[p].pathname!==m.pathname||((g=i[p].route.path)==null?void 0:g.endsWith("*"))&&i[p].params["*"]!==m.params["*"]};return u==="assets"?e.filter((m,p)=>d(m,p)||h(m,p)):u==="data"?e.filter((m,p)=>{var v;let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(d(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let x=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((v=i[0])==null?void 0:v.params)||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function Ay(s,e,{includeHydrateFallback:i}={}){return Ry(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function Ry(s){return[...new Set(s)]}function Cy(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function wy(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let u=JSON.stringify(Cy(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}function Uv(){let s=pe.useContext(ws);return bh(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Dy(){let s=pe.useContext(Fu);return bh(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Ah=pe.createContext(void 0);Ah.displayName="FrameworkContext";function Lv(){let s=pe.useContext(Ah);return bh(s,"You must render this element inside a <HydratedRouter> element"),s}function Uy(s,e){let i=pe.useContext(Ah),[r,l]=pe.useState(!1),[u,d]=pe.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:v}=e,x=pe.useRef(null);pe.useEffect(()=>{if(s==="render"&&d(!0),s==="viewport"){let R=_=>{_.forEach(N=>{d(N.isIntersecting)})},S=new IntersectionObserver(R,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[s]),pe.useEffect(()=>{if(r){let R=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(R)}}},[r]);let M=()=>{l(!0)},T=()=>{l(!1),d(!1)};return i?s!=="intent"?[u,x,{}]:[u,x,{onFocus:Ro(h,M),onBlur:Ro(m,T),onMouseEnter:Ro(p,M),onMouseLeave:Ro(g,T),onTouchStart:Ro(v,M)}]:[!1,x,{}]}function Ro(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function Ly({page:s,...e}){let{router:i}=Uv(),r=pe.useMemo(()=>xv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?pe.createElement(Oy,{page:s,matches:r,...e}):null}function Ny(s){let{manifest:e,routeModules:i}=Lv(),[r,l]=pe.useState([]);return pe.useEffect(()=>{let u=!1;return by(s,e,i).then(d=>{u||l(d)}),()=>{u=!0}},[s,e,i]),r}function Oy({page:s,matches:e,...i}){let r=qa(),{manifest:l,routeModules:u}=Lv(),{basename:d}=Uv(),{loaderData:h,matches:m}=Dy(),p=pe.useMemo(()=>E_(s,e,m,l,r,"data"),[s,e,m,l,r]),g=pe.useMemo(()=>E_(s,e,m,l,r,"assets"),[s,e,m,l,r]),v=pe.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let T=new Set,R=!1;if(e.forEach(_=>{var L;let N=l.routes[_.route.id];!N||!N.hasLoader||(!p.some(D=>D.route.id===_.route.id)&&_.route.id in h&&((L=u[_.route.id])!=null&&L.shouldRevalidate)||N.hasClientLoader?R=!0:T.add(_.route.id))}),T.size===0)return[];let S=My(s,d,"data");return R&&T.size>0&&S.searchParams.set("_routes",e.filter(_=>T.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[d,h,r,l,p,e,s,u]),x=pe.useMemo(()=>Ay(g,l),[g,l]),M=Ny(g);return pe.createElement(pe.Fragment,null,v.map(T=>pe.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...i})),x.map(T=>pe.createElement("link",{key:T,rel:"modulepreload",href:T,...i})),M.map(({key:T,link:R})=>pe.createElement("link",{key:T,...R})))}function Py(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var Nv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Nv&&(window.__reactRouterVersion="7.7.0")}catch{}function By({basename:s,children:e,window:i}){let r=pe.useRef();r.current==null&&(r.current=TS({window:i,v5Compat:!0}));let l=r.current,[u,d]=pe.useState({action:l.action,location:l.location}),h=pe.useCallback(m=>{pe.startTransition(()=>d(m))},[d]);return pe.useLayoutEffect(()=>l.listen(h),[l,h]),pe.createElement(dy,{basename:s,children:e,location:u.location,navigationType:u.action,navigator:l})}var Ov=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pv=pe.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:d,state:h,target:m,to:p,preventScrollReset:g,viewTransition:v,...x},M){let{basename:T}=pe.useContext(Ci),R=typeof p=="string"&&Ov.test(p),S,_=!1;if(typeof p=="string"&&R&&(S=p,Nv))try{let w=new URL(window.location.href),C=p.startsWith("//")?new URL(w.protocol+p):new URL(p),G=ra(C.pathname,T);C.origin===w.origin&&G!=null?p=G+C.search+C.hash:_=!0}catch{Ri(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let N=QS(p,{relative:l}),[L,D,F]=Uy(r,x),k=Hy(p,{replace:d,state:h,target:m,preventScrollReset:g,relative:l,viewTransition:v});function z(w){e&&e(w),w.defaultPrevented||k(w)}let q=pe.createElement("a",{...x,...F,href:S||N,onClick:_||u?e:z,ref:Py(M,D),target:m,"data-discover":!R&&i==="render"?"true":void 0});return L&&!R?pe.createElement(pe.Fragment,null,q,pe.createElement(Ly,{page:N})):q});Pv.displayName="Link";var zy=pe.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:d,viewTransition:h,children:m,...p},g){let v=Go(d,{relative:p.relative}),x=qa(),M=pe.useContext(Fu),{navigator:T,basename:R}=pe.useContext(Ci),S=M!=null&&Wy(v)&&h===!0,_=T.encodeLocation?T.encodeLocation(v).pathname:v.pathname,N=x.pathname,L=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(N=N.toLowerCase(),L=L?L.toLowerCase():null,_=_.toLowerCase()),L&&R&&(L=ra(L,R)||L);const D=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let F=N===_||!l&&N.startsWith(_)&&N.charAt(D)==="/",k=L!=null&&(L===_||!l&&L.startsWith(_)&&L.charAt(_.length)==="/"),z={isActive:F,isPending:k,isTransitioning:S},q=F?e:void 0,w;typeof r=="function"?w=r(z):w=[r,F?"active":null,k?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let C=typeof u=="function"?u(z):u;return pe.createElement(Pv,{...p,"aria-current":q,className:w,ref:g,style:C,to:d,viewTransition:h},typeof m=="function"?m(z):m)});zy.displayName="NavLink";var Iy=pe.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:u,method:d=Ru,action:h,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:v,...x},M)=>{let T=ky(),R=Xy(h,{relative:p}),S=d.toLowerCase()==="get"?"get":"post",_=typeof h=="string"&&Ov.test(h),N=L=>{if(m&&m(L),L.defaultPrevented)return;L.preventDefault();let D=L.nativeEvent.submitter,F=(D==null?void 0:D.getAttribute("formmethod"))||d;T(D||L.currentTarget,{fetcherKey:e,method:F,navigate:i,replace:l,state:u,relative:p,preventScrollReset:g,viewTransition:v})};return pe.createElement("form",{ref:M,method:S,action:R,onSubmit:r?m:N,...x,"data-discover":!_&&s==="render"?"true":void 0})});Iy.displayName="Form";function Fy(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bv(s){let e=pe.useContext(ws);return Yt(e,Fy(s)),e}function Hy(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:d}={}){let h=Cv(),m=qa(),p=Go(s,{relative:u});return pe.useCallback(g=>{if(vy(g,e)){g.preventDefault();let v=i!==void 0?i:Oo(m)===Oo(p);h(s,{replace:v,state:r,preventScrollReset:l,relative:u,viewTransition:d})}},[m,h,p,i,r,e,s,l,u,d])}var Gy=0,Vy=()=>`__${String(++Gy)}__`;function ky(){let{router:s}=Bv("useSubmit"),{basename:e}=pe.useContext(Ci),i=ly();return pe.useCallback(async(r,l={})=>{let{action:u,method:d,encType:h,formData:m,body:p}=yy(r,e);if(l.navigate===!1){let g=l.fetcherKey||Vy();await s.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||d,formEncType:l.encType||h,flushSync:l.flushSync})}else await s.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||d,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,e,i])}function Xy(s,{relative:e}={}){let{basename:i}=pe.useContext(Ci),r=pe.useContext(ua);Yt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...Go(s||".",{relative:e})},d=qa();if(s==null){u.search=d.search;let h=new URLSearchParams(u.search),m=h.getAll("index");if(m.some(g=>g==="")){h.delete("index"),m.filter(v=>v).forEach(v=>h.append("index",v));let g=h.toString();u.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:ia([i,u.pathname])),Oo(u)}function Wy(s,e={}){let i=pe.useContext(bv);Yt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Bv("useViewTransitionState"),l=Go(s,{relative:e.relative});if(!i.isTransitioning)return!1;let u=ra(i.currentLocation.pathname,r)||i.currentLocation.pathname,d=ra(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Pu(l.pathname,d)!=null||Pu(l.pathname,u)!=null}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rh="177",qy=0,T_=1,Yy=2,zv=1,jy=2,$i=3,Wa=0,Fn=1,ea=2,ka=0,Ss=1,b_=2,A_=3,R_=4,Zy=5,Sr=100,Ky=101,Qy=102,Jy=103,$y=104,eM=200,tM=201,nM=202,iM=203,Od=204,Pd=205,aM=206,rM=207,sM=208,oM=209,lM=210,uM=211,cM=212,fM=213,dM=214,Bd=0,zd=1,Id=2,Es=3,Fd=4,Hd=5,Gd=6,Vd=7,Iv=0,hM=1,pM=2,Xa=0,mM=1,gM=2,_M=3,vM=4,xM=5,SM=6,yM=7,Fv=300,Ts=301,bs=302,kd=303,Xd=304,Gu=306,Wd=1e3,Mr=1001,qd=1002,gi=1003,MM=1004,ru=1005,Ti=1006,ed=1007,Er=1008,sa=1009,Hv=1010,Gv=1011,Po=1012,Ch=1013,br=1014,ta=1015,Vo=1016,wh=1017,Dh=1018,Bo=1020,Vv=35902,kv=1021,Xv=1022,mi=1023,zo=1026,Io=1027,Wv=1028,Uh=1029,qv=1030,Lh=1031,Nh=1033,wu=33776,Du=33777,Uu=33778,Lu=33779,Yd=35840,jd=35841,Zd=35842,Kd=35843,Qd=36196,Jd=37492,$d=37496,eh=37808,th=37809,nh=37810,ih=37811,ah=37812,rh=37813,sh=37814,oh=37815,lh=37816,uh=37817,ch=37818,fh=37819,dh=37820,hh=37821,Nu=36492,ph=36494,mh=36495,Yv=36283,gh=36284,_h=36285,vh=36286,EM=3200,TM=3201,bM=0,AM=1,Va="",si="srgb",As="srgb-linear",Bu="linear",zt="srgb",rs=7680,C_=519,RM=512,CM=513,wM=514,jv=515,DM=516,UM=517,LM=518,NM=519,w_=35044,D_="300 es",na=2e3,zu=2001;class Ds{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],td=Math.PI/180,xh=180/Math.PI;function ko(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function St(s,e,i){return Math.max(e,Math.min(i,s))}function OM(s,e){return(s%e+e)%e}function nd(s,e,i){return(1-i)*s+i*e}function Co(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function In(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Gt{constructor(e=0,i=0){Gt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=u[d+0],M=u[d+1],T=u[d+2],R=u[d+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(h===1){e[i+0]=x,e[i+1]=M,e[i+2]=T,e[i+3]=R;return}if(v!==R||m!==x||p!==M||g!==T){let S=1-h;const _=m*x+p*M+g*T+v*R,N=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const F=Math.sqrt(L),k=Math.atan2(F,_*N);S=Math.sin(S*k)/F,h=Math.sin(h*k)/F}const D=h*N;if(m=m*S+x*D,p=p*S+M*D,g=g*S+T*D,v=v*S+R*D,S===1-h){const F=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=F,p*=F,g*=F,v*=F}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[d],x=u[d+1],M=u[d+2],T=u[d+3];return e[i]=h*T+g*v+m*M-p*x,e[i+1]=m*T+g*x+p*v-h*M,e[i+2]=p*T+g*M+h*x-m*v,e[i+3]=g*T-h*v-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),v=h(u/2),x=m(r/2),M=m(l/2),T=m(u/2);switch(d){case"XYZ":this._x=x*g*v+p*M*T,this._y=p*M*v-x*g*T,this._z=p*g*T+x*M*v,this._w=p*g*v-x*M*T;break;case"YXZ":this._x=x*g*v+p*M*T,this._y=p*M*v-x*g*T,this._z=p*g*T-x*M*v,this._w=p*g*v+x*M*T;break;case"ZXY":this._x=x*g*v-p*M*T,this._y=p*M*v+x*g*T,this._z=p*g*T+x*M*v,this._w=p*g*v-x*M*T;break;case"ZYX":this._x=x*g*v-p*M*T,this._y=p*M*v+x*g*T,this._z=p*g*T-x*M*v,this._w=p*g*v+x*M*T;break;case"YZX":this._x=x*g*v+p*M*T,this._y=p*M*v+x*g*T,this._z=p*g*T-x*M*v,this._w=p*g*v-x*M*T;break;case"XZY":this._x=x*g*v-p*M*T,this._y=p*M*v-x*g*T,this._z=p*g*T+x*M*v,this._w=p*g*v+x*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=r+h+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(r>h&&r>v){const M=2*Math.sqrt(1+r-h-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>v){const M=2*Math.sqrt(1+h-r-v);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-r-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+d*h+l*p-u*m,this._y=l*g+d*m+u*h-r*p,this._z=u*g+d*p+r*m-l*h,this._w=d*g-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=d*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,i=0,r=0){re.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(U_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(U_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),g=2*(h*i-u*l),v=2*(u*r-d*i);return this.x=i+m*p+d*v-h*g,this.y=r+m*g+h*p-u*v,this.z=l+m*v+u*g-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return id.copy(this).projectOnVector(e),this.sub(id)}reflect(e){return this.sub(id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const id=new re,U_=new Xo;class ot{constructor(e,i,r,l,u,d,h,m,p){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p)}set(e,i,r,l,u,d,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],M=r[5],T=r[8],R=l[0],S=l[3],_=l[6],N=l[1],L=l[4],D=l[7],F=l[2],k=l[5],z=l[8];return u[0]=d*R+h*N+m*F,u[3]=d*S+h*L+m*k,u[6]=d*_+h*D+m*z,u[1]=p*R+g*N+v*F,u[4]=p*S+g*L+v*k,u[7]=p*_+g*D+v*z,u[2]=x*R+M*N+T*F,u[5]=x*S+M*L+T*k,u[8]=x*_+M*D+T*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*d*g-i*h*p-r*u*g+r*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=g*d-h*p,x=h*m-g*u,M=p*u-d*m,T=i*v+r*x+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=v*R,e[1]=(l*p-g*r)*R,e[2]=(h*r-l*d)*R,e[3]=x*R,e[4]=(g*i-l*m)*R,e[5]=(l*u-h*i)*R,e[6]=M*R,e[7]=(r*m-p*i)*R,e[8]=(d*i-r*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(ad.makeScale(e,i)),this}rotate(e){return this.premultiply(ad.makeRotation(-e)),this}translate(e,i){return this.premultiply(ad.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ad=new ot;function Zv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Iu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function PM(){const s=Iu("canvas");return s.style.display="block",s}const L_={};function ys(s){s in L_||(L_[s]=!0,console.warn(s))}function BM(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function zM(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function IM(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const N_=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),O_=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function FM(){const s={enabled:!0,workingColorSpace:As,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===zt&&(l.r=aa(l.r),l.g=aa(l.g),l.b=aa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===zt&&(l.r=Ms(l.r),l.g=Ms(l.g),l.b=Ms(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Va?Bu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[As]:{primaries:e,whitePoint:r,transfer:Bu,toXYZ:N_,fromXYZ:O_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:r,transfer:zt,toXYZ:N_,fromXYZ:O_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),s}const At=FM();function aa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ms(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ss;class HM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ss===void 0&&(ss=Iu("canvas")),ss.width=e.width,ss.height=e.height;const l=ss.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ss}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Iu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=aa(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(aa(i[r]/255)*255):i[r]=aa(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let GM=0;class Oh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=ko(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(rd(l[d].image)):u.push(rd(l[d]))}else u=rd(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function rd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?HM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VM=0;const sd=new re;class Hn extends Ds{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,r=Mr,l=Mr,u=Ti,d=Er,h=mi,m=sa,p=Hn.DEFAULT_ANISOTROPY,g=Va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=ko(),this.name="",this.source=new Oh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sd).x}get height(){return this.source.getSize(sd).y}get depth(){return this.source.getSize(sd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wd:e.x=e.x-Math.floor(e.x);break;case Mr:e.x=e.x<0?0:1;break;case qd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wd:e.y=e.y-Math.floor(e.y);break;case Mr:e.y=e.y<0?0:1;break;case qd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=Fv;Hn.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,i=0,r=0,l=1){en.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],v=m[8],x=m[1],M=m[5],T=m[9],R=m[2],S=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-R)<.01&&Math.abs(T-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+R)<.1&&Math.abs(T+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(M+1)/2,F=(_+1)/2,k=(g+x)/4,z=(v+R)/4,q=(T+S)/4;return L>D&&L>F?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=k/r,u=z/r):D>F?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=k/l,u=q/l):F<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(F),r=z/u,l=q/u),this.set(r,l,u,i),this}let N=Math.sqrt((S-T)*(S-T)+(v-R)*(v-R)+(x-g)*(x-g));return Math.abs(N)<.001&&(N=1),this.x=(S-T)/N,this.y=(v-R)/N,this.z=(x-g)/N,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this.w=St(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this.w=St(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kM extends Ds{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Hn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ti,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Oh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends kM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Kv extends Hn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class XM extends Hn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wo{constructor(e=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(fi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(fi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=fi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,fi):fi.fromBufferAttribute(u,d),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),su.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),su.copy(r.boundingBox)),su.applyMatrix4(e.matrixWorld),this.union(su)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),ou.subVectors(this.max,wo),os.subVectors(e.a,wo),ls.subVectors(e.b,wo),us.subVectors(e.c,wo),Ba.subVectors(ls,os),za.subVectors(us,ls),dr.subVectors(os,us);let i=[0,-Ba.z,Ba.y,0,-za.z,za.y,0,-dr.z,dr.y,Ba.z,0,-Ba.x,za.z,0,-za.x,dr.z,0,-dr.x,-Ba.y,Ba.x,0,-za.y,za.x,0,-dr.y,dr.x,0];return!od(i,os,ls,us,ou)||(i=[1,0,0,0,1,0,0,0,1],!od(i,os,ls,us,ou))?!1:(lu.crossVectors(Ba,za),i=[lu.x,lu.y,lu.z],od(i,os,ls,us,ou))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ji=[new re,new re,new re,new re,new re,new re,new re,new re],fi=new re,su=new Wo,os=new re,ls=new re,us=new re,Ba=new re,za=new re,dr=new re,wo=new re,ou=new re,lu=new re,hr=new re;function od(s,e,i,r,l){for(let u=0,d=s.length-3;u<=d;u+=3){hr.fromArray(s,u);const h=l.x*Math.abs(hr.x)+l.y*Math.abs(hr.y)+l.z*Math.abs(hr.z),m=e.dot(hr),p=i.dot(hr),g=r.dot(hr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const WM=new Wo,Do=new re,ld=new re;class Ph{constructor(e=new re,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):WM.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const i=Do.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Do,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ld.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(ld)),this.expandByPoint(Do.copy(e.center).sub(ld))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Zi=new re,ud=new re,uu=new re,Ia=new re,cd=new re,cu=new re,fd=new re;class qM{constructor(e=new re,i=new re(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Zi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,i),Zi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){ud.copy(e).add(i).multiplyScalar(.5),uu.copy(i).sub(e).normalize(),Ia.copy(this.origin).sub(ud);const u=e.distanceTo(i)*.5,d=-this.direction.dot(uu),h=Ia.dot(this.direction),m=-Ia.dot(uu),p=Ia.lengthSq(),g=Math.abs(1-d*d);let v,x,M,T;if(g>0)if(v=d*m-h,x=d*h-m,T=u*g,v>=0)if(x>=-T)if(x<=T){const R=1/g;v*=R,x*=R,M=v*(v+d*x+2*h)+x*(d*v+x+2*m)+p}else x=u,v=Math.max(0,-(d*x+h)),M=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(d*x+h)),M=-v*v+x*(x+2*m)+p;else x<=-T?(v=Math.max(0,-(-d*u+h)),x=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p):x<=T?(v=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(v=Math.max(0,-(d*u+h)),x=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p);else x=d>0?-u:u,v=Math.max(0,-(d*x+h)),M=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(ud).addScaledVector(uu,x),M}intersectSphere(e,i){Zi.subVectors(e.center,this.origin);const r=Zi.dot(this.direction),l=Zi.dot(Zi)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(u=(e.min.y-x.y)*g,d=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,d=(e.min.y-x.y)*g),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),v>=0?(h=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(h=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,i,r,l,u){cd.subVectors(i,e),cu.subVectors(r,e),fd.crossVectors(cd,cu);let d=this.direction.dot(fd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ia.subVectors(this.origin,e);const m=h*this.direction.dot(cu.crossVectors(Ia,cu));if(m<0)return null;const p=h*this.direction.dot(cd.cross(Ia));if(p<0||m+p>d)return null;const g=-h*Ia.dot(fd);return g<0?null:this.at(g/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,i,r,l,u,d,h,m,p,g,v,x,M,T,R,S){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p,g,v,x,M,T,R,S)}set(e,i,r,l,u,d,h,m,p,g,v,x,M,T,R,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=M,_[7]=T,_[11]=R,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/cs.setFromMatrixColumn(e,0).length(),u=1/cs.setFromMatrixColumn(e,1).length(),d=1/cs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=d*g,M=d*v,T=h*g,R=h*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+T*p,i[5]=x-R*p,i[9]=-h*m,i[2]=R-x*p,i[6]=T+M*p,i[10]=d*m}else if(e.order==="YXZ"){const x=m*g,M=m*v,T=p*g,R=p*v;i[0]=x+R*h,i[4]=T*h-M,i[8]=d*p,i[1]=d*v,i[5]=d*g,i[9]=-h,i[2]=M*h-T,i[6]=R+x*h,i[10]=d*m}else if(e.order==="ZXY"){const x=m*g,M=m*v,T=p*g,R=p*v;i[0]=x-R*h,i[4]=-d*v,i[8]=T+M*h,i[1]=M+T*h,i[5]=d*g,i[9]=R-x*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const x=d*g,M=d*v,T=h*g,R=h*v;i[0]=m*g,i[4]=T*p-M,i[8]=x*p+R,i[1]=m*v,i[5]=R*p+x,i[9]=M*p-T,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const x=d*m,M=d*p,T=h*m,R=h*p;i[0]=m*g,i[4]=R-x*v,i[8]=T*v+M,i[1]=v,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=M*v+T,i[10]=x-R*v}else if(e.order==="XZY"){const x=d*m,M=d*p,T=h*m,R=h*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+R,i[5]=d*g,i[9]=M*v-T,i[2]=T*v-M,i[6]=h*g,i[10]=R*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(YM,e,jM)}lookAt(e,i,r){const l=this.elements;return Zn.subVectors(e,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Fa.crossVectors(r,Zn),Fa.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Fa.crossVectors(r,Zn)),Fa.normalize(),fu.crossVectors(Zn,Fa),l[0]=Fa.x,l[4]=fu.x,l[8]=Zn.x,l[1]=Fa.y,l[5]=fu.y,l[9]=Zn.y,l[2]=Fa.z,l[6]=fu.z,l[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],M=r[13],T=r[2],R=r[6],S=r[10],_=r[14],N=r[3],L=r[7],D=r[11],F=r[15],k=l[0],z=l[4],q=l[8],w=l[12],C=l[1],G=l[5],le=l[9],se=l[13],ve=l[2],de=l[6],B=l[10],Z=l[14],Y=l[3],Ee=l[7],U=l[11],$=l[15];return u[0]=d*k+h*C+m*ve+p*Y,u[4]=d*z+h*G+m*de+p*Ee,u[8]=d*q+h*le+m*B+p*U,u[12]=d*w+h*se+m*Z+p*$,u[1]=g*k+v*C+x*ve+M*Y,u[5]=g*z+v*G+x*de+M*Ee,u[9]=g*q+v*le+x*B+M*U,u[13]=g*w+v*se+x*Z+M*$,u[2]=T*k+R*C+S*ve+_*Y,u[6]=T*z+R*G+S*de+_*Ee,u[10]=T*q+R*le+S*B+_*U,u[14]=T*w+R*se+S*Z+_*$,u[3]=N*k+L*C+D*ve+F*Y,u[7]=N*z+L*G+D*de+F*Ee,u[11]=N*q+L*le+D*B+F*U,u[15]=N*w+L*se+D*Z+F*$,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],g=e[2],v=e[6],x=e[10],M=e[14],T=e[3],R=e[7],S=e[11],_=e[15];return T*(+u*m*v-l*p*v-u*h*x+r*p*x+l*h*M-r*m*M)+R*(+i*m*M-i*p*x+u*d*x-l*d*M+l*p*g-u*m*g)+S*(+i*p*v-i*h*M-u*d*v+r*d*M+u*h*g-r*p*g)+_*(-l*h*g-i*m*v+i*h*x+l*d*v-r*d*x+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=e[9],x=e[10],M=e[11],T=e[12],R=e[13],S=e[14],_=e[15],N=v*S*p-R*x*p+R*m*M-h*S*M-v*m*_+h*x*_,L=T*x*p-g*S*p-T*m*M+d*S*M+g*m*_-d*x*_,D=g*R*p-T*v*p+T*h*M-d*R*M-g*h*_+d*v*_,F=T*v*m-g*R*m-T*h*x+d*R*x+g*h*S-d*v*S,k=i*N+r*L+l*D+u*F;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/k;return e[0]=N*z,e[1]=(R*x*u-v*S*u-R*l*M+r*S*M+v*l*_-r*x*_)*z,e[2]=(h*S*u-R*m*u+R*l*p-r*S*p-h*l*_+r*m*_)*z,e[3]=(v*m*u-h*x*u-v*l*p+r*x*p+h*l*M-r*m*M)*z,e[4]=L*z,e[5]=(g*S*u-T*x*u+T*l*M-i*S*M-g*l*_+i*x*_)*z,e[6]=(T*m*u-d*S*u-T*l*p+i*S*p+d*l*_-i*m*_)*z,e[7]=(d*x*u-g*m*u+g*l*p-i*x*p-d*l*M+i*m*M)*z,e[8]=D*z,e[9]=(T*v*u-g*R*u-T*r*M+i*R*M+g*r*_-i*v*_)*z,e[10]=(d*R*u-T*h*u+T*r*p-i*R*p-d*r*_+i*h*_)*z,e[11]=(g*h*u-d*v*u-g*r*p+i*v*p+d*r*M-i*h*M)*z,e[12]=F*z,e[13]=(g*R*l-T*v*l+T*r*x-i*R*x-g*r*S+i*v*S)*z,e[14]=(T*h*l-d*R*l-T*r*m+i*R*m+d*r*S-i*h*S)*z,e[15]=(d*v*l-g*h*l+g*r*m-i*v*m-d*r*x+i*h*x)*z,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,m=e.z,p=u*d,g=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*d,0,p*m-l*h,g*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,g=d+d,v=h+h,x=u*p,M=u*g,T=u*v,R=d*g,S=d*v,_=h*v,N=m*p,L=m*g,D=m*v,F=r.x,k=r.y,z=r.z;return l[0]=(1-(R+_))*F,l[1]=(M+D)*F,l[2]=(T-L)*F,l[3]=0,l[4]=(M-D)*k,l[5]=(1-(x+_))*k,l[6]=(S+N)*k,l[7]=0,l[8]=(T+L)*z,l[9]=(S-N)*z,l[10]=(1-(x+R))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=cs.set(l[0],l[1],l[2]).length();const d=cs.set(l[4],l[5],l[6]).length(),h=cs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],di.copy(this);const p=1/u,g=1/d,v=1/h;return di.elements[0]*=p,di.elements[1]*=p,di.elements[2]*=p,di.elements[4]*=g,di.elements[5]*=g,di.elements[6]*=g,di.elements[8]*=v,di.elements[9]*=v,di.elements[10]*=v,i.setFromRotationMatrix(di),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=na){const m=this.elements,p=2*u/(i-e),g=2*u/(r-l),v=(i+e)/(i-e),x=(r+l)/(r-l);let M,T;if(h===na)M=-(d+u)/(d-u),T=-2*d*u/(d-u);else if(h===zu)M=-d/(d-u),T=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=na){const m=this.elements,p=1/(i-e),g=1/(r-l),v=1/(d-u),x=(i+e)*p,M=(r+l)*g;let T,R;if(h===na)T=(d+u)*v,R=-2*v;else if(h===zu)T=u*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=R,m[14]=-T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const cs=new re,di=new sn,YM=new re(0,0,0),jM=new re(1,1,1),Fa=new re,fu=new re,Zn=new re,P_=new sn,B_=new Xo;class oa{constructor(e=0,i=0,r=0,l=oa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(St(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return P_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(P_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return B_.setFromEuler(this),this.setFromQuaternion(B_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oa.DEFAULT_ORDER="XYZ";class Qv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ZM=0;const z_=new re,fs=new Xo,Ki=new sn,du=new re,Uo=new re,KM=new re,QM=new Xo,I_=new re(1,0,0),F_=new re(0,1,0),H_=new re(0,0,1),G_={type:"added"},JM={type:"removed"},ds={type:"childadded",child:null},dd={type:"childremoved",child:null};class Qn extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qn.DEFAULT_UP.clone();const e=new re,i=new oa,r=new Xo,l=new re(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new ot}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return fs.setFromAxisAngle(e,i),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,i){return fs.setFromAxisAngle(e,i),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(I_,e)}rotateY(e){return this.rotateOnAxis(F_,e)}rotateZ(e){return this.rotateOnAxis(H_,e)}translateOnAxis(e,i){return z_.copy(e).applyQuaternion(this.quaternion),this.position.add(z_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(I_,e)}translateY(e){return this.translateOnAxis(F_,e)}translateZ(e){return this.translateOnAxis(H_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?du.copy(e):du.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Uo,du,this.up):Ki.lookAt(du,Uo,this.up),this.quaternion.setFromRotationMatrix(Ki),l&&(Ki.extractRotation(l.matrixWorld),fs.setFromRotationMatrix(Ki),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(G_),ds.child=e,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(JM),dd.child=e,this.dispatchEvent(dd),dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(G_),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,KM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,QM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),g=d(e.images),v=d(e.shapes),x=d(e.skeletons),M=d(e.animations),T=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Qn.DEFAULT_UP=new re(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new re,Qi=new re,hd=new re,Ji=new re,hs=new re,ps=new re,V_=new re,pd=new re,md=new re,gd=new re,_d=new en,vd=new en,xd=new en;class pi{constructor(e=new re,i=new re,r=new re){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),hi.subVectors(e,i),l.cross(hi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){hi.subVectors(l,i),Qi.subVectors(r,i),hd.subVectors(e,i);const d=hi.dot(hi),h=hi.dot(Qi),m=hi.dot(hd),p=Qi.dot(Qi),g=Qi.dot(hd),v=d*p-h*h;if(v===0)return u.set(0,0,0),null;const x=1/v,M=(p*m-h*g)*x,T=(d*g-h*m)*x;return u.set(1-M-T,T,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,i,r,l,u,d,h,m){return this.getBarycoord(e,i,r,l,Ji)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Ji.x),m.addScaledVector(d,Ji.y),m.addScaledVector(h,Ji.z),m)}static getInterpolatedAttribute(e,i,r,l,u,d){return _d.setScalar(0),vd.setScalar(0),xd.setScalar(0),_d.fromBufferAttribute(e,i),vd.fromBufferAttribute(e,r),xd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(_d,u.x),d.addScaledVector(vd,u.y),d.addScaledVector(xd,u.z),d}static isFrontFacing(e,i,r,l){return hi.subVectors(r,i),Qi.subVectors(e,i),hi.cross(Qi).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),hi.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return pi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return pi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;hs.subVectors(l,r),ps.subVectors(u,r),pd.subVectors(e,r);const m=hs.dot(pd),p=ps.dot(pd);if(m<=0&&p<=0)return i.copy(r);md.subVectors(e,l);const g=hs.dot(md),v=ps.dot(md);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(r).addScaledVector(hs,d);gd.subVectors(e,u);const M=hs.dot(gd),T=ps.dot(gd);if(T>=0&&M<=T)return i.copy(u);const R=M*p-m*T;if(R<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(r).addScaledVector(ps,h);const S=g*T-M*v;if(S<=0&&v-g>=0&&M-T>=0)return V_.subVectors(u,l),h=(v-g)/(v-g+(M-T)),i.copy(l).addScaledVector(V_,h);const _=1/(S+R+x);return d=R*_,h=x*_,i.copy(r).addScaledVector(hs,d).addScaledVector(ps,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ha={h:0,s:0,l:0},hu={h:0,s:0,l:0};function Sd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class wt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=At.workingColorSpace){return this.r=e,this.g=i,this.b=r,At.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=At.workingColorSpace){if(e=OM(e,1),i=St(i,0,1),r=St(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=Sd(d,u,e+1/3),this.g=Sd(d,u,e),this.b=Sd(d,u,e-1/3)}return At.colorSpaceToWorking(this,l),this}setStyle(e,i=si){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=si){const r=Jv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return At.workingToColorSpace(Dn.copy(this),e),Math.round(St(Dn.r*255,0,255))*65536+Math.round(St(Dn.g*255,0,255))*256+Math.round(St(Dn.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=At.workingColorSpace){At.workingToColorSpace(Dn.copy(this),i);const r=Dn.r,l=Dn.g,u=Dn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const v=d-h;switch(p=g<=.5?v/(d+h):v/(2-d-h),d){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=At.workingColorSpace){return At.workingToColorSpace(Dn.copy(this),i),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=si){At.workingToColorSpace(Dn.copy(this),e);const i=Dn.r,r=Dn.g,l=Dn.b;return e!==si?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ha),this.setHSL(Ha.h+e,Ha.s+i,Ha.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ha),e.getHSL(hu);const r=nd(Ha.h,hu.h,i),l=nd(Ha.s,hu.s,i),u=nd(Ha.l,hu.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new wt;wt.NAMES=Jv;let $M=0;class Vu extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=Ss,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Od,this.blendDst=Pd,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=C_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(r.blending=this.blending),this.side!==Wa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Od&&(r.blendSrc=this.blendSrc),this.blendDst!==Pd&&(r.blendDst=this.blendDst),this.blendEquation!==Sr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==C_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $v extends Vu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=Iv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new re,pu=new Gt;let eE=0;class Ai{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=w_,this.updateRanges=[],this.gpuType=ta,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)pu.fromBufferAttribute(this,i),pu.applyMatrix3(e),this.setXY(i,pu.x,pu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Co(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=In(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Co(i,this.array)),i}setX(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Co(i,this.array)),i}setY(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Co(i,this.array)),i}setZ(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Co(i,this.array)),i}setW(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array),u=In(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==w_&&(e.usage=this.usage),e}}class e0 extends Ai{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class t0 extends Ai{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Tr extends Ai{constructor(e,i,r){super(new Float32Array(e),i,r)}}let tE=0;const ri=new sn,yd=new Qn,ms=new re,Kn=new Wo,Lo=new Wo,vn=new re;class Rr extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zv(e)?t0:e0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ot().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,i,r){return ri.makeTranslation(e,i,r),this.applyMatrix4(ri),this}scale(e,i,r){return ri.makeScale(e,i,r),this.applyMatrix4(ri),this}lookAt(e){return yd.lookAt(e),yd.updateMatrix(),this.applyMatrix4(yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Tr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Kn.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ph);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Lo.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(Kn.min,Lo.min),Kn.expandByPoint(vn),vn.addVectors(Kn.max,Lo.max),Kn.expandByPoint(vn)):(Kn.expandByPoint(Lo.min),Kn.expandByPoint(Lo.max))}Kn.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)vn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)vn.fromBufferAttribute(h,p),m&&(ms.fromBufferAttribute(e,p),vn.add(ms)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let q=0;q<r.count;q++)h[q]=new re,m[q]=new re;const p=new re,g=new re,v=new re,x=new Gt,M=new Gt,T=new Gt,R=new re,S=new re;function _(q,w,C){p.fromBufferAttribute(r,q),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,C),x.fromBufferAttribute(u,q),M.fromBufferAttribute(u,w),T.fromBufferAttribute(u,C),g.sub(p),v.sub(p),M.sub(x),T.sub(x);const G=1/(M.x*T.y-T.x*M.y);isFinite(G)&&(R.copy(g).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(G),S.copy(v).multiplyScalar(M.x).addScaledVector(g,-T.x).multiplyScalar(G),h[q].add(R),h[w].add(R),h[C].add(R),m[q].add(S),m[w].add(S),m[C].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let q=0,w=N.length;q<w;++q){const C=N[q],G=C.start,le=C.count;for(let se=G,ve=G+le;se<ve;se+=3)_(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const L=new re,D=new re,F=new re,k=new re;function z(q){F.fromBufferAttribute(l,q),k.copy(F);const w=h[q];L.copy(w),L.sub(F.multiplyScalar(F.dot(w))).normalize(),D.crossVectors(k,w);const G=D.dot(m[q])<0?-1:1;d.setXYZW(q,L.x,L.y,L.z,G)}for(let q=0,w=N.length;q<w;++q){const C=N[q],G=C.start,le=C.count;for(let se=G,ve=G+le;se<ve;se+=3)z(e.getX(se+0)),z(e.getX(se+1)),z(e.getX(se+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ai(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new re,u=new re,d=new re,h=new re,m=new re,p=new re,g=new re,v=new re;if(e)for(let x=0,M=e.count;x<M;x+=3){const T=e.getX(x+0),R=e.getX(x+1),S=e.getX(x+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,S),g.subVectors(d,u),v.subVectors(l,u),g.cross(v),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,S),h.add(g),m.add(g),p.add(g),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),g.subVectors(d,u),v.subVectors(l,u),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,v=h.normalized,x=new p.constructor(m.length*g);let M=0,T=0;for(let R=0,S=m.length;R<S;R++){h.isInterleavedBufferAttribute?M=m[R]*h.data.stride+h.offset:M=m[R]*g;for(let _=0;_<g;_++)x[T++]=p[M++]}return new Ai(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Rr,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let g=0,v=p.length;g<v;g++){const x=p[g],M=e(x,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],v=u[p];for(let x=0,M=v.length;x<M;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,g=d.length;p<g;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const k_=new sn,pr=new qM,mu=new Ph,X_=new re,gu=new re,_u=new re,vu=new re,Md=new re,xu=new re,W_=new re,Su=new re;class bi extends Qn{constructor(e=new Rr,i=new $v){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){xu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=h[m],v=u[m];g!==0&&(Md.fromBufferAttribute(v,e),d?xu.addScaledVector(Md,g):xu.addScaledVector(Md.sub(i),g))}i.add(xu)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),mu.copy(r.boundingSphere),mu.applyMatrix4(u),pr.copy(e.ray).recast(e.near),!(mu.containsPoint(pr.origin)===!1&&(pr.intersectSphere(mu,X_)===null||pr.origin.distanceToSquared(X_)>(e.far-e.near)**2))&&(k_.copy(u).invert(),pr.copy(e.ray).applyMatrix4(k_),!(r.boundingBox!==null&&pr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,pr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,R=x.length;T<R;T++){const S=x[T],_=d[S.materialIndex],N=Math.max(S.start,M.start),L=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let D=N,F=L;D<F;D+=3){const k=h.getX(D),z=h.getX(D+1),q=h.getX(D+2);l=yu(this,_,e,r,p,g,v,k,z,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),R=Math.min(h.count,M.start+M.count);for(let S=T,_=R;S<_;S+=3){const N=h.getX(S),L=h.getX(S+1),D=h.getX(S+2);l=yu(this,d,e,r,p,g,v,N,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,R=x.length;T<R;T++){const S=x[T],_=d[S.materialIndex],N=Math.max(S.start,M.start),L=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let D=N,F=L;D<F;D+=3){const k=D,z=D+1,q=D+2;l=yu(this,_,e,r,p,g,v,k,z,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let S=T,_=R;S<_;S+=3){const N=S,L=S+1,D=S+2;l=yu(this,d,e,r,p,g,v,N,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function nE(s,e,i,r,l,u,d,h){let m;if(e.side===Fn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,e.side===Wa,h),m===null)return null;Su.copy(h),Su.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Su);return p<i.near||p>i.far?null:{distance:p,point:Su.clone(),object:s}}function yu(s,e,i,r,l,u,d,h,m,p){s.getVertexPosition(h,gu),s.getVertexPosition(m,_u),s.getVertexPosition(p,vu);const g=nE(s,e,i,r,gu,_u,vu,W_);if(g){const v=new re;pi.getBarycoord(W_,gu,_u,vu,v),l&&(g.uv=pi.getInterpolatedAttribute(l,h,m,p,v,new Gt)),u&&(g.uv1=pi.getInterpolatedAttribute(u,h,m,p,v,new Gt)),d&&(g.normal=pi.getInterpolatedAttribute(d,h,m,p,v,new re),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new re,materialIndex:0};pi.getNormal(gu,_u,vu,x.normal),g.face=x,g.barycoord=v}return g}class qo extends Rr{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],g=[],v=[];let x=0,M=0;T("z","y","x",-1,-1,r,i,e,d,u,0),T("z","y","x",1,-1,r,i,-e,d,u,1),T("x","z","y",1,1,e,r,i,l,d,2),T("x","z","y",1,-1,e,r,-i,l,d,3),T("x","y","z",1,-1,e,i,r,l,u,4),T("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Tr(p,3)),this.setAttribute("normal",new Tr(g,3)),this.setAttribute("uv",new Tr(v,2));function T(R,S,_,N,L,D,F,k,z,q,w){const C=D/z,G=F/q,le=D/2,se=F/2,ve=k/2,de=z+1,B=q+1;let Z=0,Y=0;const Ee=new re;for(let U=0;U<B;U++){const $=U*G-se;for(let xe=0;xe<de;xe++){const ye=xe*C-le;Ee[R]=ye*N,Ee[S]=$*L,Ee[_]=ve,p.push(Ee.x,Ee.y,Ee.z),Ee[R]=0,Ee[S]=0,Ee[_]=k>0?1:-1,g.push(Ee.x,Ee.y,Ee.z),v.push(xe/z),v.push(1-U/q),Z+=1}}for(let U=0;U<q;U++)for(let $=0;$<z;$++){const xe=x+$+de*U,ye=x+$+de*(U+1),Q=x+($+1)+de*(U+1),me=x+($+1)+de*U;m.push(xe,ye,me),m.push(ye,Q,me),Y+=6}h.addGroup(M,Y,w),M+=Y,x+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Ln(s){const e={};for(let i=0;i<s.length;i++){const r=Rs(s[i]);for(const l in r)e[l]=r[l]}return e}function iE(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function n0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const aE={clone:Rs,merge:Ln};var rE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class la extends Vu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rE,this.fragmentShader=sE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=iE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class i0 extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=na}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ga=new re,q_=new Gt,Y_=new Gt;class oi extends i0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=xh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(td*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xh*2*Math.atan(Math.tan(td*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ga.x,Ga.y).multiplyScalar(-e/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ga.x,Ga.y).multiplyScalar(-e/Ga.z)}getViewSize(e,i){return this.getViewBounds(e,q_,Y_),i.subVectors(Y_,q_)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(td*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gs=-90,_s=1;class oE extends Qn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new oi(gs,_s,e,i);l.layers=this.layers,this.add(l);const u=new oi(gs,_s,e,i);u.layers=this.layers,this.add(u);const d=new oi(gs,_s,e,i);d.layers=this.layers,this.add(d);const h=new oi(gs,_s,e,i);h.layers=this.layers,this.add(h);const m=new oi(gs,_s,e,i);m.layers=this.layers,this.add(m);const p=new oi(gs,_s,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===na)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===zu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,x,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class a0 extends Hn{constructor(e=[],i=Ts,r,l,u,d,h,m,p,g){super(e,i,r,l,u,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lE extends Ar{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new a0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new qo(5,5,5),u=new la({name:"CubemapFromEquirect",uniforms:Rs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:ka});u.uniforms.tEquirect.value=i;const d=new bi(l,u),h=i.minFilter;return i.minFilter===Er&&(i.minFilter=Ti),new oE(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}class Mu extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uE={type:"move"};class Ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const R of e.hand.values()){const S=i.getJointPose(R,r),_=this._getHandJoint(p,R);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),M=.02,T=.005;p.inputState.pinching&&x>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(uE)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Mu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class cE extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oa,this.environmentIntensity=1,this.environmentRotation=new oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Td=new re,fE=new re,dE=new ot;class vr{constructor(e=new re(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Td.subVectors(r,i).cross(fE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Td),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||dE.getNormalMatrix(e),l=this.coplanarPoint(Td).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new Ph,Eu=new re;class r0{constructor(e=new vr,i=new vr,r=new vr,l=new vr,u=new vr,d=new vr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=na){const r=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],m=l[3],p=l[4],g=l[5],v=l[6],x=l[7],M=l[8],T=l[9],R=l[10],S=l[11],_=l[12],N=l[13],L=l[14],D=l[15];if(r[0].setComponents(m-u,x-p,S-M,D-_).normalize(),r[1].setComponents(m+u,x+p,S+M,D+_).normalize(),r[2].setComponents(m+d,x+g,S+T,D+N).normalize(),r[3].setComponents(m-d,x-g,S-T,D-N).normalize(),r[4].setComponents(m-h,x-v,S-R,D-L).normalize(),i===na)r[5].setComponents(m+h,x+v,S+R,D+L).normalize();else if(i===zu)r[5].setComponents(h,v,R,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Eu.x=l.normal.x>0?e.max.x:e.min.x,Eu.y=l.normal.y>0?e.max.y:e.min.y,Eu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Eu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class s0 extends Hn{constructor(e,i,r=br,l,u,d,h=gi,m=gi,p,g=zo,v=1){if(g!==zo&&g!==Io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:v};super(x,l,u,d,h,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Yo extends Rr{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,v=e/h,x=i/m,M=[],T=[],R=[],S=[];for(let _=0;_<g;_++){const N=_*x-d;for(let L=0;L<p;L++){const D=L*v-u;T.push(D,-N,0),R.push(0,0,1),S.push(L/h),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let N=0;N<h;N++){const L=N+p*_,D=N+p*(_+1),F=N+1+p*(_+1),k=N+1+p*_;M.push(L,D,k),M.push(D,F,k)}this.setIndex(M),this.setAttribute("position",new Tr(T,3)),this.setAttribute("normal",new Tr(R,3)),this.setAttribute("uv",new Tr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.widthSegments,e.heightSegments)}}class hE extends Vu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=EM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pE extends Vu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class mE extends i0{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class gE extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function j_(s,e,i,r){const l=_E(r);switch(i){case kv:return s*e;case Wv:return s*e/l.components*l.byteLength;case Uh:return s*e/l.components*l.byteLength;case qv:return s*e*2/l.components*l.byteLength;case Lh:return s*e*2/l.components*l.byteLength;case Xv:return s*e*3/l.components*l.byteLength;case mi:return s*e*4/l.components*l.byteLength;case Nh:return s*e*4/l.components*l.byteLength;case wu:case Du:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Uu:case Lu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jd:case Kd:return Math.max(s,16)*Math.max(e,8)/4;case Yd:case Zd:return Math.max(s,8)*Math.max(e,8)/2;case Qd:case Jd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case eh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case nh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ih:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ah:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case rh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case sh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case oh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case lh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case uh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ch:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case fh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case dh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case hh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Nu:case ph:case mh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Yv:case gh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case _h:case vh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function _E(s){switch(s){case sa:case Hv:return{byteLength:1,components:1};case Po:case Gv:case Vo:return{byteLength:2,components:1};case wh:case Dh:return{byteLength:2,components:4};case br:case Ch:case ta:return{byteLength:4,components:1};case Vv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function o0(){let s=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function vE(s){const e=new WeakMap;function i(h,m){const p=h.array,g=h.usage,v=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,g),h.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const g=m.array,v=m.updateRanges;if(s.bindBuffer(p,h),v.length===0)s.bufferSubData(p,0,g);else{v.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<v.length;M++){const T=v[x],R=v[M];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++x,v[x]=R)}v.length=x+1;for(let M=0,T=v.length;M<T;M++){const R=v[M];s.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var xE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ME=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,AE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,CE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,LE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,NE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,GE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,VE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,XE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,WE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZE="gl_FragColor = linearToOutputTexel( gl_FragColor );",KE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,JE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$E=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,oT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_T=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ST=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ET=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,CT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,PT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,IT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,VT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$T=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ib=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ab=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ob=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ub=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,db=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_b=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ab=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Db=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ub=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Nb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:xE,alphahash_pars_fragment:SE,alphamap_fragment:yE,alphamap_pars_fragment:ME,alphatest_fragment:EE,alphatest_pars_fragment:TE,aomap_fragment:bE,aomap_pars_fragment:AE,batching_pars_vertex:RE,batching_vertex:CE,begin_vertex:wE,beginnormal_vertex:DE,bsdfs:UE,iridescence_fragment:LE,bumpmap_pars_fragment:NE,clipping_planes_fragment:OE,clipping_planes_pars_fragment:PE,clipping_planes_pars_vertex:BE,clipping_planes_vertex:zE,color_fragment:IE,color_pars_fragment:FE,color_pars_vertex:HE,color_vertex:GE,common:VE,cube_uv_reflection_fragment:kE,defaultnormal_vertex:XE,displacementmap_pars_vertex:WE,displacementmap_vertex:qE,emissivemap_fragment:YE,emissivemap_pars_fragment:jE,colorspace_fragment:ZE,colorspace_pars_fragment:KE,envmap_fragment:QE,envmap_common_pars_fragment:JE,envmap_pars_fragment:$E,envmap_pars_vertex:eT,envmap_physical_pars_fragment:fT,envmap_vertex:tT,fog_vertex:nT,fog_pars_vertex:iT,fog_fragment:aT,fog_pars_fragment:rT,gradientmap_pars_fragment:sT,lightmap_pars_fragment:oT,lights_lambert_fragment:lT,lights_lambert_pars_fragment:uT,lights_pars_begin:cT,lights_toon_fragment:dT,lights_toon_pars_fragment:hT,lights_phong_fragment:pT,lights_phong_pars_fragment:mT,lights_physical_fragment:gT,lights_physical_pars_fragment:_T,lights_fragment_begin:vT,lights_fragment_maps:xT,lights_fragment_end:ST,logdepthbuf_fragment:yT,logdepthbuf_pars_fragment:MT,logdepthbuf_pars_vertex:ET,logdepthbuf_vertex:TT,map_fragment:bT,map_pars_fragment:AT,map_particle_fragment:RT,map_particle_pars_fragment:CT,metalnessmap_fragment:wT,metalnessmap_pars_fragment:DT,morphinstance_vertex:UT,morphcolor_vertex:LT,morphnormal_vertex:NT,morphtarget_pars_vertex:OT,morphtarget_vertex:PT,normal_fragment_begin:BT,normal_fragment_maps:zT,normal_pars_fragment:IT,normal_pars_vertex:FT,normal_vertex:HT,normalmap_pars_fragment:GT,clearcoat_normal_fragment_begin:VT,clearcoat_normal_fragment_maps:kT,clearcoat_pars_fragment:XT,iridescence_pars_fragment:WT,opaque_fragment:qT,packing:YT,premultiplied_alpha_fragment:jT,project_vertex:ZT,dithering_fragment:KT,dithering_pars_fragment:QT,roughnessmap_fragment:JT,roughnessmap_pars_fragment:$T,shadowmap_pars_fragment:eb,shadowmap_pars_vertex:tb,shadowmap_vertex:nb,shadowmask_pars_fragment:ib,skinbase_vertex:ab,skinning_pars_vertex:rb,skinning_vertex:sb,skinnormal_vertex:ob,specularmap_fragment:lb,specularmap_pars_fragment:ub,tonemapping_fragment:cb,tonemapping_pars_fragment:fb,transmission_fragment:db,transmission_pars_fragment:hb,uv_pars_fragment:pb,uv_pars_vertex:mb,uv_vertex:gb,worldpos_vertex:_b,background_vert:vb,background_frag:xb,backgroundCube_vert:Sb,backgroundCube_frag:yb,cube_vert:Mb,cube_frag:Eb,depth_vert:Tb,depth_frag:bb,distanceRGBA_vert:Ab,distanceRGBA_frag:Rb,equirect_vert:Cb,equirect_frag:wb,linedashed_vert:Db,linedashed_frag:Ub,meshbasic_vert:Lb,meshbasic_frag:Nb,meshlambert_vert:Ob,meshlambert_frag:Pb,meshmatcap_vert:Bb,meshmatcap_frag:zb,meshnormal_vert:Ib,meshnormal_frag:Fb,meshphong_vert:Hb,meshphong_frag:Gb,meshphysical_vert:Vb,meshphysical_frag:kb,meshtoon_vert:Xb,meshtoon_frag:Wb,points_vert:qb,points_frag:Yb,shadow_vert:jb,shadow_frag:Zb,sprite_vert:Kb,sprite_frag:Qb},Ne={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Ei={basic:{uniforms:Ln([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Ln([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new wt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Ln([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Ln([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Ln([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new wt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Ln([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Ln([Ne.points,Ne.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Ln([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Ln([Ne.common,Ne.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Ln([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Ln([Ne.sprite,Ne.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Ln([Ne.common,Ne.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Ln([Ne.lights,Ne.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Ei.physical={uniforms:Ln([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Tu={r:0,b:0,g:0},gr=new oa,Jb=new sn;function $b(s,e,i,r,l,u,d){const h=new wt(0);let m=u===!0?0:1,p,g,v=null,x=0,M=null;function T(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:e).get(D)),D}function R(L){let D=!1;const F=T(L);F===null?_(h,m):F&&F.isColor&&(_(F,1),D=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,d):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(L,D){const F=T(D);F&&(F.isCubeTexture||F.mapping===Gu)?(g===void 0&&(g=new bi(new qo(1,1,1),new la({name:"BackgroundCubeMaterial",uniforms:Rs(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,z,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),gr.copy(D.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Jb.makeRotationFromEuler(gr)),g.material.toneMapped=At.getTransfer(F.colorSpace)!==zt,(v!==F||x!==F.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,v=F,x=F.version,M=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new bi(new Yo(2,2),new la({name:"BackgroundMaterial",uniforms:Rs(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=At.getTransfer(F.colorSpace)!==zt,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(v!==F||x!==F.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,v=F,x=F.version,M=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,D){L.getRGB(Tu,n0(s)),r.buffers.color.setClear(Tu.r,Tu.g,Tu.b,D,d)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,D=1){h.set(L),m=D,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(h,m)},render:R,addToRenderList:S,dispose:N}}function eA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,d=!1;function h(C,G,le,se,ve){let de=!1;const B=v(se,le,G);u!==B&&(u=B,p(u.object)),de=M(C,se,le,ve),de&&T(C,se,le,ve),ve!==null&&e.update(ve,s.ELEMENT_ARRAY_BUFFER),(de||d)&&(d=!1,D(C,G,le,se),ve!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ve).buffer))}function m(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function v(C,G,le){const se=le.wireframe===!0;let ve=r[C.id];ve===void 0&&(ve={},r[C.id]=ve);let de=ve[G.id];de===void 0&&(de={},ve[G.id]=de);let B=de[se];return B===void 0&&(B=x(m()),de[se]=B),B}function x(C){const G=[],le=[],se=[];for(let ve=0;ve<i;ve++)G[ve]=0,le[ve]=0,se[ve]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:le,attributeDivisors:se,object:C,attributes:{},index:null}}function M(C,G,le,se){const ve=u.attributes,de=G.attributes;let B=0;const Z=le.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const U=ve[Y];let $=de[Y];if($===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&($=C.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;B++}return u.attributesNum!==B||u.index!==se}function T(C,G,le,se){const ve={},de=G.attributes;let B=0;const Z=le.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let U=de[Y];U===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(U=C.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),ve[Y]=$,B++}u.attributes=ve,u.attributesNum=B,u.index=se}function R(){const C=u.newAttributes;for(let G=0,le=C.length;G<le;G++)C[G]=0}function S(C){_(C,0)}function _(C,G){const le=u.newAttributes,se=u.enabledAttributes,ve=u.attributeDivisors;le[C]=1,se[C]===0&&(s.enableVertexAttribArray(C),se[C]=1),ve[C]!==G&&(s.vertexAttribDivisor(C,G),ve[C]=G)}function N(){const C=u.newAttributes,G=u.enabledAttributes;for(let le=0,se=G.length;le<se;le++)G[le]!==C[le]&&(s.disableVertexAttribArray(le),G[le]=0)}function L(C,G,le,se,ve,de,B){B===!0?s.vertexAttribIPointer(C,G,le,ve,de):s.vertexAttribPointer(C,G,le,se,ve,de)}function D(C,G,le,se){R();const ve=se.attributes,de=le.getAttributes(),B=G.defaultAttributeValues;for(const Z in de){const Y=de[Z];if(Y.location>=0){let Ee=ve[Z];if(Ee===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(Ee=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(Ee=C.instanceColor)),Ee!==void 0){const U=Ee.normalized,$=Ee.itemSize,xe=e.get(Ee);if(xe===void 0)continue;const ye=xe.buffer,Q=xe.type,me=xe.bytesPerElement,Me=Q===s.INT||Q===s.UNSIGNED_INT||Ee.gpuType===Ch;if(Ee.isInterleavedBufferAttribute){const Re=Ee.data,we=Re.stride,lt=Ee.offset;if(Re.isInstancedInterleavedBuffer){for(let Je=0;Je<Y.locationSize;Je++)_(Y.location+Je,Re.meshPerAttribute);C.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Je=0;Je<Y.locationSize;Je++)S(Y.location+Je);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let Je=0;Je<Y.locationSize;Je++)L(Y.location+Je,$/Y.locationSize,Q,U,we*me,(lt+$/Y.locationSize*Je)*me,Me)}else{if(Ee.isInstancedBufferAttribute){for(let Re=0;Re<Y.locationSize;Re++)_(Y.location+Re,Ee.meshPerAttribute);C.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Re=0;Re<Y.locationSize;Re++)S(Y.location+Re);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let Re=0;Re<Y.locationSize;Re++)L(Y.location+Re,$/Y.locationSize,Q,U,$*me,$/Y.locationSize*Re*me,Me)}}else if(B!==void 0){const U=B[Z];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(Y.location,U);break;case 3:s.vertexAttrib3fv(Y.location,U);break;case 4:s.vertexAttrib4fv(Y.location,U);break;default:s.vertexAttrib1fv(Y.location,U)}}}}N()}function F(){q();for(const C in r){const G=r[C];for(const le in G){const se=G[le];for(const ve in se)g(se[ve].object),delete se[ve];delete G[le]}delete r[C]}}function k(C){if(r[C.id]===void 0)return;const G=r[C.id];for(const le in G){const se=G[le];for(const ve in se)g(se[ve].object),delete se[ve];delete G[le]}delete r[C.id]}function z(C){for(const G in r){const le=r[G];if(le[C.id]===void 0)continue;const se=le[C.id];for(const ve in se)g(se[ve].object),delete se[ve];delete le[C.id]}}function q(){w(),d=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:w,dispose:F,releaseStatesOfGeometry:k,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:S,disableUnusedAttributes:N}}function tA(s,e,i){let r;function l(p){r=p}function u(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function d(p,g,v){v!==0&&(s.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function h(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let M=0;for(let T=0;T<v;T++)M+=g[T];i.update(M,r,1)}function m(p,g,v,x){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)d(p[T],g[T],x[T]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let T=0;for(let R=0;R<v;R++)T+=g[R]*x[R];i.update(T,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function nA(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==mi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const q=z===Vo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==sa&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ta&&!q)}function m(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=T>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:F,maxSamples:k}}function iA(s){const e=this;let i=null,r=0,l=!1,u=!1;const d=new vr,h=new ot,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||l;return l=x,r=v.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,M){const T=v.clippingPlanes,R=v.clipIntersection,S=v.clipShadows,_=s.get(v);if(!l||T===null||T.length===0||u&&!S)u?g(null):p();else{const N=u?0:r,L=N*4;let D=_.clippingState||null;m.value=D,D=g(T,x,L,M);for(let F=0;F!==L;++F)D[F]=i[F];_.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,M,T){const R=v!==null?v.length:0;let S=null;if(R!==0){if(S=m.value,T!==!0||S===null){const _=M+R*4,N=x.matrixWorldInverse;h.getNormalMatrix(N),(S===null||S.length<_)&&(S=new Float32Array(_));for(let L=0,D=M;L!==R;++L,D+=4)d.copy(v[L]).applyMatrix4(N,h),d.normal.toArray(S,D),S[D+3]=d.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,S}}function aA(s){let e=new WeakMap;function i(d,h){return h===kd?d.mapping=Ts:h===Xd&&(d.mapping=bs),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===kd||h===Xd)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new lE(m.height);return p.fromEquirectangularTexture(s,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const xs=4,Z_=[.125,.215,.35,.446,.526,.582],yr=20,bd=new mE,K_=new wt;let Ad=null,Rd=0,Cd=0,wd=!1;const xr=(1+Math.sqrt(5))/2,vs=1/xr,Q_=[new re(-xr,vs,0),new re(xr,vs,0),new re(-vs,0,xr),new re(vs,0,xr),new re(0,xr,-vs),new re(0,xr,vs),new re(-1,1,-1),new re(1,1,-1),new re(-1,1,1),new re(1,1,1)],rA=new re;class J_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=rA}=u;Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ev(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ad,Rd,Cd),this._renderer.xr.enabled=wd,e.scissorTest=!1,bu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ts||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:Vo,format:mi,colorSpace:As,depthBuffer:!1},l=$_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sA(u)),this._blurMaterial=oA(u,e,i)}return l}_compileMaterial(e){const i=new bi(this._lodPlanes[0],e);this._renderer.compile(i,bd)}_sceneToCubeUV(e,i,r,l,u){const m=new oi(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(K_),v.toneMapping=Xa,v.autoClear=!1;const T=new $v({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),R=new bi(new qo,T);let S=!1;const _=e.background;_?_.isColor&&(T.color.copy(_),e.background=null,S=!0):(T.color.copy(K_),S=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[N],u.y,u.z)):L===1?(m.up.set(0,0,p[N]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[N],u.z)):(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[N]));const D=this._cubeSize;bu(l,L*D,N>2?D:0,D,D),v.setRenderTarget(l),S&&v.render(R,m),v.render(e,m)}R.geometry.dispose(),R.material.dispose(),v.toneMapping=M,v.autoClear=x,e.background=_}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ts||e.mapping===bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=tv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ev());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new bi(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;bu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,bd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=Q_[(l-u-1)%Q_.length];this._blur(e,u-1,u,d,h)}i.autoClear=r}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new bi(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*yr-1),R=u/T,S=isFinite(u)?1+Math.floor(g*R):yr;S>yr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${yr}`);const _=[];let N=0;for(let z=0;z<yr;++z){const q=z/R,w=Math.exp(-q*q/2);_.push(w),z===0?N+=w:z<S&&(N+=2*w)}for(let z=0;z<_.length;z++)_[z]=_[z]/N;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-r;const D=this._sizeLods[l],F=3*D*(l>L-xs?l-L+xs:0),k=4*(this._cubeSize-D);bu(i,F,k,3*D,2*D),m.setRenderTarget(i),m.render(v,bd)}}function sA(s){const e=[],i=[],r=[];let l=s;const u=s-xs+1+Z_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>s-xs?m=Z_[d-s+xs-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,T=6,R=3,S=2,_=1,N=new Float32Array(R*T*M),L=new Float32Array(S*T*M),D=new Float32Array(_*T*M);for(let k=0;k<M;k++){const z=k%3*2/3-1,q=k>2?0:-1,w=[z,q,0,z+2/3,q,0,z+2/3,q+1,0,z,q,0,z+2/3,q+1,0,z,q+1,0];N.set(w,R*T*k),L.set(x,S*T*k);const C=[k,k,k,k,k,k];D.set(C,_*T*k)}const F=new Rr;F.setAttribute("position",new Ai(N,R)),F.setAttribute("uv",new Ai(L,S)),F.setAttribute("faceIndex",new Ai(D,_)),e.push(F),l>xs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function $_(s,e,i){const r=new Ar(s,e,i);return r.texture.mapping=Gu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function bu(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function oA(s,e,i){const r=new Float32Array(yr),l=new re(0,1,0);return new la({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function ev(){return new la({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function tv(){return new la({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Bh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lA(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===kd||m===Xd,g=m===Ts||m===bs;if(p||g){let v=e.get(h);const x=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new J_(s)),v=p?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),v.texture;if(v!==void 0)return v.texture;{const M=h.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new J_(s)),v=p?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),h.addEventListener("dispose",u),v.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function uA(s){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ys("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function cA(s,e,i,r){const l={},u=new WeakMap;function d(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",d),delete l[x.id];const M=u.get(x);M&&(e.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(v,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,T=v.attributes.position;let R=0;if(M!==null){const N=M.array;R=M.version;for(let L=0,D=N.length;L<D;L+=3){const F=N[L+0],k=N[L+1],z=N[L+2];x.push(F,k,k,z,z,F)}}else if(T!==void 0){const N=T.array;R=T.version;for(let L=0,D=N.length/3-1;L<D;L+=3){const F=L+0,k=L+1,z=L+2;x.push(F,k,k,z,z,F)}}else return;const S=new(Zv(x)?t0:e0)(x,1);S.version=R;const _=u.get(v);_&&e.remove(_),u.set(v,S)}function g(v){const x=u.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function fA(s,e,i){let r;function l(x){r=x}let u,d;function h(x){u=x.type,d=x.bytesPerElement}function m(x,M){s.drawElements(r,M,u,x*d),i.update(M,r,1)}function p(x,M,T){T!==0&&(s.drawElementsInstanced(r,M,u,x*d,T),i.update(M,r,T))}function g(x,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,x,0,T);let S=0;for(let _=0;_<T;_++)S+=M[_];i.update(S,r,1)}function v(x,M,T,R){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)p(x[_]/d,M[_],R[_]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,u,x,0,R,0,T);let _=0;for(let N=0;N<T;N++)_+=M[N]*R[N];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function dA(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=h*(u/3);break;case s.LINES:i.lines+=h*(u/2);break;case s.LINE_STRIP:i.lines+=h*(u-1);break;case s.LINE_LOOP:i.lines+=h*u;break;case s.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function hA(s,e,i){const r=new WeakMap,l=new en;function u(d,h,m){const p=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(h);if(x===void 0||x.count!==v){let C=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var M=C;x!==void 0&&x.texture.dispose();const T=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let D=0;T===!0&&(D=1),R===!0&&(D=2),S===!0&&(D=3);let F=h.attributes.position.count*D,k=1;F>e.maxTextureSize&&(k=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const z=new Float32Array(F*k*4*v),q=new Kv(z,F,k,v);q.type=ta,q.needsUpdate=!0;const w=D*4;for(let G=0;G<v;G++){const le=_[G],se=N[G],ve=L[G],de=F*k*4*G;for(let B=0;B<le.count;B++){const Z=B*w;T===!0&&(l.fromBufferAttribute(le,B),z[de+Z+0]=l.x,z[de+Z+1]=l.y,z[de+Z+2]=l.z,z[de+Z+3]=0),R===!0&&(l.fromBufferAttribute(se,B),z[de+Z+4]=l.x,z[de+Z+5]=l.y,z[de+Z+6]=l.z,z[de+Z+7]=0),S===!0&&(l.fromBufferAttribute(ve,B),z[de+Z+8]=l.x,z[de+Z+9]=l.y,z[de+Z+10]=l.z,z[de+Z+11]=ve.itemSize===4?l.w:1)}}x={count:v,texture:q,size:new Gt(F,k)},r.set(h,x),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let T=0;for(let S=0;S<p.length;S++)T+=p[S];const R=h.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",R),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function pA(s,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const l0=new Hn,nv=new s0(1,1),u0=new Kv,c0=new XM,f0=new a0,iv=[],av=[],rv=new Float32Array(16),sv=new Float32Array(9),ov=new Float32Array(4);function Us(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=iv[l];if(u===void 0&&(u=new Float32Array(l),iv[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,s[d].toArray(u,h)}return u}function fn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function dn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function ku(s,e){let i=av[e];i===void 0&&(i=new Int32Array(e),av[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function mA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function gA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;s.uniform2fv(this.addr,e),dn(i,e)}}function _A(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(fn(i,e))return;s.uniform3fv(this.addr,e),dn(i,e)}}function vA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;s.uniform4fv(this.addr,e),dn(i,e)}}function xA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),dn(i,e)}else{if(fn(i,r))return;ov.set(r),s.uniformMatrix2fv(this.addr,!1,ov),dn(i,r)}}function SA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),dn(i,e)}else{if(fn(i,r))return;sv.set(r),s.uniformMatrix3fv(this.addr,!1,sv),dn(i,r)}}function yA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),dn(i,e)}else{if(fn(i,r))return;rv.set(r),s.uniformMatrix4fv(this.addr,!1,rv),dn(i,r)}}function MA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function EA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;s.uniform2iv(this.addr,e),dn(i,e)}}function TA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;s.uniform3iv(this.addr,e),dn(i,e)}}function bA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;s.uniform4iv(this.addr,e),dn(i,e)}}function AA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function RA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;s.uniform2uiv(this.addr,e),dn(i,e)}}function CA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;s.uniform3uiv(this.addr,e),dn(i,e)}}function wA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;s.uniform4uiv(this.addr,e),dn(i,e)}}function DA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(nv.compareFunction=jv,u=nv):u=l0,i.setTexture2D(e||u,l)}function UA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||c0,l)}function LA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||f0,l)}function NA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||u0,l)}function OA(s){switch(s){case 5126:return mA;case 35664:return gA;case 35665:return _A;case 35666:return vA;case 35674:return xA;case 35675:return SA;case 35676:return yA;case 5124:case 35670:return MA;case 35667:case 35671:return EA;case 35668:case 35672:return TA;case 35669:case 35673:return bA;case 5125:return AA;case 36294:return RA;case 36295:return CA;case 36296:return wA;case 35678:case 36198:case 36298:case 36306:case 35682:return DA;case 35679:case 36299:case 36307:return UA;case 35680:case 36300:case 36308:case 36293:return LA;case 36289:case 36303:case 36311:case 36292:return NA}}function PA(s,e){s.uniform1fv(this.addr,e)}function BA(s,e){const i=Us(e,this.size,2);s.uniform2fv(this.addr,i)}function zA(s,e){const i=Us(e,this.size,3);s.uniform3fv(this.addr,i)}function IA(s,e){const i=Us(e,this.size,4);s.uniform4fv(this.addr,i)}function FA(s,e){const i=Us(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function HA(s,e){const i=Us(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function GA(s,e){const i=Us(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function VA(s,e){s.uniform1iv(this.addr,e)}function kA(s,e){s.uniform2iv(this.addr,e)}function XA(s,e){s.uniform3iv(this.addr,e)}function WA(s,e){s.uniform4iv(this.addr,e)}function qA(s,e){s.uniform1uiv(this.addr,e)}function YA(s,e){s.uniform2uiv(this.addr,e)}function jA(s,e){s.uniform3uiv(this.addr,e)}function ZA(s,e){s.uniform4uiv(this.addr,e)}function KA(s,e,i){const r=this.cache,l=e.length,u=ku(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||l0,u[d])}function QA(s,e,i){const r=this.cache,l=e.length,u=ku(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||c0,u[d])}function JA(s,e,i){const r=this.cache,l=e.length,u=ku(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||f0,u[d])}function $A(s,e,i){const r=this.cache,l=e.length,u=ku(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||u0,u[d])}function e1(s){switch(s){case 5126:return PA;case 35664:return BA;case 35665:return zA;case 35666:return IA;case 35674:return FA;case 35675:return HA;case 35676:return GA;case 5124:case 35670:return VA;case 35667:case 35671:return kA;case 35668:case 35672:return XA;case 35669:case 35673:return WA;case 5125:return qA;case 36294:return YA;case 36295:return jA;case 36296:return ZA;case 35678:case 36198:case 36298:case 36306:case 35682:return KA;case 35679:case 36299:case 36307:return QA;case 35680:case 36300:case 36308:case 36293:return JA;case 36289:case 36303:case 36311:case 36292:return $A}}class t1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=OA(i.type)}}class n1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=e1(i.type)}}class i1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const Dd=/(\w+)(\])?(\[|\.)?/g;function lv(s,e){s.seq.push(e),s.map[e.id]=e}function a1(s,e,i){const r=s.name,l=r.length;for(Dd.lastIndex=0;;){const u=Dd.exec(r),d=Dd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){lv(i,p===void 0?new t1(h,s,e):new n1(h,s,e));break}else{let v=i.map[h];v===void 0&&(v=new i1(h),lv(i,v)),i=v}}}class Ou{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);a1(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function uv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const r1=37297;let s1=0;function o1(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const cv=new ot;function l1(s){At._getMatrix(cv,At.workingColorSpace,s);const e=`mat3( ${cv.elements.map(i=>i.toFixed(4))} )`;switch(At.getTransfer(s)){case Bu:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function fv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=s.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+o1(s.getShaderSource(e),d)}else return l}function u1(s,e){const i=l1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function c1(s,e){let i;switch(e){case mM:i="Linear";break;case gM:i="Reinhard";break;case _M:i="Cineon";break;case vM:i="ACESFilmic";break;case SM:i="AgX";break;case yM:i="Neutral";break;case xM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Au=new re;function f1(){At.getLuminanceCoefficients(Au);const s=Au.x.toFixed(4),e=Au.y.toFixed(4),i=Au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function h1(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function p1(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),d=u.name;let h=1;u.type===s.FLOAT_MAT2&&(h=2),u.type===s.FLOAT_MAT3&&(h=3),u.type===s.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:s.getAttribLocation(e,d),locationSize:h}}return i}function No(s){return s!==""}function dv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sh(s){return s.replace(m1,_1)}const g1=new Map;function _1(s,e){let i=ut[e];if(i===void 0){const r=g1.get(e);if(r!==void 0)i=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Sh(i)}const v1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pv(s){return s.replace(v1,x1)}function x1(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function mv(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function S1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===zv?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===jy?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function y1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ts:case bs:e="ENVMAP_TYPE_CUBE";break;case Gu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function M1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function E1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Iv:e="ENVMAP_BLENDING_MULTIPLY";break;case hM:e="ENVMAP_BLENDING_MIX";break;case pM:e="ENVMAP_BLENDING_ADD";break}return e}function T1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function b1(s,e,i,r){const l=s.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=S1(i),p=y1(i),g=M1(i),v=E1(i),x=T1(i),M=d1(i),T=h1(u),R=l.createProgram();let S,_,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(No).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(No).join(`
`),_.length>0&&(_+=`
`)):(S=[mv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),_=[mv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xa?"#define TONE_MAPPING":"",i.toneMapping!==Xa?ut.tonemapping_pars_fragment:"",i.toneMapping!==Xa?c1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,u1("linearToOutputTexel",i.outputColorSpace),f1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(No).join(`
`)),d=Sh(d),d=dv(d,i),d=hv(d,i),h=Sh(h),h=dv(h,i),h=hv(h,i),d=pv(d),h=pv(h),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===D_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===D_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=N+S+d,D=N+_+h,F=uv(l,l.VERTEX_SHADER,L),k=uv(l,l.FRAGMENT_SHADER,D);l.attachShader(R,F),l.attachShader(R,k),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function z(G){if(s.debug.checkShaderErrors){const le=l.getProgramInfoLog(R).trim(),se=l.getShaderInfoLog(F).trim(),ve=l.getShaderInfoLog(k).trim();let de=!0,B=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,F,k);else{const Z=fv(l,F,"vertex"),Y=fv(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+le+`
`+Z+`
`+Y)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(se===""||ve==="")&&(B=!1);B&&(G.diagnostics={runnable:de,programLog:le,vertexShader:{log:se,prefix:S},fragmentShader:{log:ve,prefix:_}})}l.deleteShader(F),l.deleteShader(k),q=new Ou(l,R),w=p1(l,R)}let q;this.getUniforms=function(){return q===void 0&&z(this),q};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,r1)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=s1++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=F,this.fragmentShader=k,this}let A1=0;class R1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new C1(e),i.set(e,r)),r}}class C1{constructor(e){this.id=A1++,this.code=e,this.usedTimes=0}}function w1(s,e,i,r,l,u,d){const h=new Qv,m=new R1,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function S(w,C,G,le,se){const ve=le.fog,de=se.geometry,B=w.isMeshStandardMaterial?le.environment:null,Z=(w.isMeshStandardMaterial?i:e).get(w.envMap||B),Y=Z&&Z.mapping===Gu?Z.image.height:null,Ee=T[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const U=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,$=U!==void 0?U.length:0;let xe=0;de.morphAttributes.position!==void 0&&(xe=1),de.morphAttributes.normal!==void 0&&(xe=2),de.morphAttributes.color!==void 0&&(xe=3);let ye,Q,me,Me;if(Ee){const Tt=Ei[Ee];ye=Tt.vertexShader,Q=Tt.fragmentShader}else ye=w.vertexShader,Q=w.fragmentShader,m.update(w),me=m.getVertexShaderID(w),Me=m.getFragmentShaderID(w);const Re=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),lt=se.isInstancedMesh===!0,Je=se.isBatchedMesh===!0,Nt=!!w.map,It=!!w.matcap,gt=!!Z,I=!!w.aoMap,xn=!!w.lightMap,Mt=!!w.bumpMap,ht=!!w.normalMap,ke=!!w.displacementMap,_t=!!w.emissiveMap,Ze=!!w.metalnessMap,rt=!!w.roughnessMap,Qt=w.anisotropy>0,O=w.clearcoat>0,E=w.dispersion>0,ee=w.iridescence>0,ce=w.sheen>0,he=w.transmission>0,oe=Qt&&!!w.anisotropyMap,Be=O&&!!w.clearcoatMap,Ue=O&&!!w.clearcoatNormalMap,Ve=O&&!!w.clearcoatRoughnessMap,Xe=ee&&!!w.iridescenceMap,Se=ee&&!!w.iridescenceThicknessMap,ze=ce&&!!w.sheenColorMap,Ye=ce&&!!w.sheenRoughnessMap,je=!!w.specularMap,Ce=!!w.specularColorMap,at=!!w.specularIntensityMap,V=he&&!!w.transmissionMap,Le=he&&!!w.thicknessMap,Te=!!w.gradientMap,Ie=!!w.alphaMap,Ae=w.alphaTest>0,_e=!!w.alphaHash,He=!!w.extensions;let it=Xa;w.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(it=s.toneMapping);const Dt={shaderID:Ee,shaderType:w.type,shaderName:w.name,vertexShader:ye,fragmentShader:Q,defines:w.defines,customVertexShaderID:me,customFragmentShaderID:Me,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Je,batchingColor:Je&&se._colorsTexture!==null,instancing:lt,instancingColor:lt&&se.instanceColor!==null,instancingMorph:lt&&se.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Re===null?s.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:As,alphaToCoverage:!!w.alphaToCoverage,map:Nt,matcap:It,envMap:gt,envMapMode:gt&&Z.mapping,envMapCubeUVHeight:Y,aoMap:I,lightMap:xn,bumpMap:Mt,normalMap:ht,displacementMap:x&&ke,emissiveMap:_t,normalMapObjectSpace:ht&&w.normalMapType===AM,normalMapTangentSpace:ht&&w.normalMapType===bM,metalnessMap:Ze,roughnessMap:rt,anisotropy:Qt,anisotropyMap:oe,clearcoat:O,clearcoatMap:Be,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Ve,dispersion:E,iridescence:ee,iridescenceMap:Xe,iridescenceThicknessMap:Se,sheen:ce,sheenColorMap:ze,sheenRoughnessMap:Ye,specularMap:je,specularColorMap:Ce,specularIntensityMap:at,transmission:he,transmissionMap:V,thicknessMap:Le,gradientMap:Te,opaque:w.transparent===!1&&w.blending===Ss&&w.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Ae,alphaHash:_e,combine:w.combine,mapUv:Nt&&R(w.map.channel),aoMapUv:I&&R(w.aoMap.channel),lightMapUv:xn&&R(w.lightMap.channel),bumpMapUv:Mt&&R(w.bumpMap.channel),normalMapUv:ht&&R(w.normalMap.channel),displacementMapUv:ke&&R(w.displacementMap.channel),emissiveMapUv:_t&&R(w.emissiveMap.channel),metalnessMapUv:Ze&&R(w.metalnessMap.channel),roughnessMapUv:rt&&R(w.roughnessMap.channel),anisotropyMapUv:oe&&R(w.anisotropyMap.channel),clearcoatMapUv:Be&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&R(w.sheenRoughnessMap.channel),specularMapUv:je&&R(w.specularMap.channel),specularColorMapUv:Ce&&R(w.specularColorMap.channel),specularIntensityMapUv:at&&R(w.specularIntensityMap.channel),transmissionMapUv:V&&R(w.transmissionMap.channel),thicknessMapUv:Le&&R(w.thicknessMap.channel),alphaMapUv:Ie&&R(w.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(ht||Qt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:se.isPoints===!0&&!!de.attributes.uv&&(Nt||Ie),fog:!!ve,useFog:w.fog===!0,fogExp2:!!ve&&ve.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:we,skinning:se.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:xe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:Nt&&w.map.isVideoTexture===!0&&At.getTransfer(w.map.colorSpace)===zt,decodeVideoTextureEmissive:_t&&w.emissiveMap.isVideoTexture===!0&&At.getTransfer(w.emissiveMap.colorSpace)===zt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ea,flipSided:w.side===Fn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:He&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&w.extensions.multiDraw===!0||Je)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Dt.vertexUv1s=p.has(1),Dt.vertexUv2s=p.has(2),Dt.vertexUv3s=p.has(3),p.clear(),Dt}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)C.push(G),C.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(N(C,w),L(C,w),C.push(s.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function N(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function L(w,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),w.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),w.push(h.mask)}function D(w){const C=T[w.type];let G;if(C){const le=Ei[C];G=aE.clone(le.uniforms)}else G=w.uniforms;return G}function F(w,C){let G;for(let le=0,se=g.length;le<se;le++){const ve=g[le];if(ve.cacheKey===C){G=ve,++G.usedTimes;break}}return G===void 0&&(G=new b1(s,C,w,u),g.push(G)),G}function k(w){if(--w.usedTimes===0){const C=g.indexOf(w);g[C]=g[g.length-1],g.pop(),w.destroy()}}function z(w){m.remove(w)}function q(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:D,acquireProgram:F,releaseProgram:k,releaseShaderCache:z,programs:g,dispose:q}}function D1(){let s=new WeakMap;function e(d){return s.has(d)}function i(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function l(d,h,m){s.get(d)[h]=m}function u(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function U1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function gv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function _v(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(v,x,M,T,R,S){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:M,groupOrder:T,renderOrder:v.renderOrder,z:R,group:S},s[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=M,_.groupOrder=T,_.renderOrder=v.renderOrder,_.z=R,_.group=S),e++,_}function h(v,x,M,T,R,S){const _=d(v,x,M,T,R,S);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,x,M,T,R,S){const _=d(v,x,M,T,R,S);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||U1),r.length>1&&r.sort(x||gv),l.length>1&&l.sort(x||gv)}function g(){for(let v=e,x=s.length;v<x;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:g,sort:p}}function L1(){let s=new WeakMap;function e(r,l){const u=s.get(r);let d;return u===void 0?(d=new _v,s.set(r,[d])):l>=u.length?(d=new _v,u.push(d)):d=u[l],d}function i(){s=new WeakMap}return{get:e,dispose:i}}function N1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new re,color:new wt};break;case"SpotLight":i={position:new re,direction:new re,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new wt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":i={color:new wt,position:new re,halfWidth:new re,halfHeight:new re};break}return s[e.id]=i,i}}}function O1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let P1=0;function B1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function z1(s){const e=new N1,i=O1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new re);const l=new re,u=new sn,d=new sn;function h(p){let g=0,v=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,T=0,R=0,S=0,_=0,N=0,L=0,D=0,F=0,k=0,z=0;p.sort(B1);for(let w=0,C=p.length;w<C;w++){const G=p[w],le=G.color,se=G.intensity,ve=G.distance,de=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=le.r*se,v+=le.g*se,x+=le.b*se;else if(G.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(G.sh.coefficients[B],se);z++}else if(G.isDirectionalLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Z=G.shadow,Y=i.get(G);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=de,r.directionalShadowMatrix[M]=G.shadow.matrix,N++}r.directional[M]=B,M++}else if(G.isSpotLight){const B=e.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(le).multiplyScalar(se),B.distance=ve,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,r.spot[R]=B;const Z=G.shadow;if(G.map&&(r.spotLightMap[F]=G.map,F++,Z.updateMatrices(G),G.castShadow&&k++),r.spotLightMatrix[R]=Z.matrix,G.castShadow){const Y=i.get(G);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.spotShadow[R]=Y,r.spotShadowMap[R]=de,D++}R++}else if(G.isRectAreaLight){const B=e.get(G);B.color.copy(le).multiplyScalar(se),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),r.rectArea[S]=B,S++}else if(G.isPointLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const Z=G.shadow,Y=i.get(G);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,r.pointShadow[T]=Y,r.pointShadowMap[T]=de,r.pointShadowMatrix[T]=G.shadow.matrix,L++}r.point[T]=B,T++}else if(G.isHemisphereLight){const B=e.get(G);B.skyColor.copy(G.color).multiplyScalar(se),B.groundColor.copy(G.groundColor).multiplyScalar(se),r.hemi[_]=B,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const q=r.hash;(q.directionalLength!==M||q.pointLength!==T||q.spotLength!==R||q.rectAreaLength!==S||q.hemiLength!==_||q.numDirectionalShadows!==N||q.numPointShadows!==L||q.numSpotShadows!==D||q.numSpotMaps!==F||q.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=S,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=D+F-k,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=z,q.directionalLength=M,q.pointLength=T,q.spotLength=R,q.rectAreaLength=S,q.hemiLength=_,q.numDirectionalShadows=N,q.numPointShadows=L,q.numSpotShadows=D,q.numSpotMaps=F,q.numLightProbes=z,r.version=P1++)}function m(p,g){let v=0,x=0,M=0,T=0,R=0;const S=g.matrixWorldInverse;for(let _=0,N=p.length;_<N;_++){const L=p[_];if(L.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),v++}else if(L.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const D=r.rectArea[T];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),d.identity(),u.copy(L.matrixWorld),u.premultiply(S),d.extractRotation(u),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),T++}else if(L.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const D=r.hemi[R];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(S),R++}}}return{setup:h,setupView:m,state:r}}function vv(s){const e=new z1(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function d(g){r.push(g)}function h(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function I1(s){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new vv(s),e.set(l,[h])):u>=d.length?(h=new vv(s),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const F1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function G1(s,e,i){let r=new r0;const l=new Gt,u=new Gt,d=new en,h=new hE({depthPacking:TM}),m=new pE,p={},g=i.maxTextureSize,v={[Wa]:Fn,[Fn]:Wa,[ea]:ea},x=new la({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:F1,fragmentShader:H1}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new Rr;T.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new bi(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zv;let _=this.type;this.render=function(k,z,q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||k.length===0)return;const w=s.getRenderTarget(),C=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),le=s.state;le.setBlending(ka),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const se=_!==$i&&this.type===$i,ve=_===$i&&this.type!==$i;for(let de=0,B=k.length;de<B;de++){const Z=k[de],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Ee=Y.getFrameExtents();if(l.multiply(Ee),u.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Ee.x),l.x=u.x*Ee.x,Y.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Ee.y),l.y=u.y*Ee.y,Y.mapSize.y=u.y)),Y.map===null||se===!0||ve===!0){const $=this.type!==$i?{minFilter:gi,magFilter:gi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ar(l.x,l.y,$),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const U=Y.getViewportCount();for(let $=0;$<U;$++){const xe=Y.getViewport($);d.set(u.x*xe.x,u.y*xe.y,u.x*xe.z,u.y*xe.w),le.viewport(d),Y.updateMatrices(Z,$),r=Y.getFrustum(),D(z,q,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===$i&&N(Y,q),Y.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(w,C,G)};function N(k,z){const q=e.update(R);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Ar(l.x,l.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(z,null,q,x,R,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(z,null,q,M,R,null)}function L(k,z,q,w){let C=null;const G=q.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(G!==void 0)C=G;else if(C=q.isPointLight===!0?m:h,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const le=C.uuid,se=z.uuid;let ve=p[le];ve===void 0&&(ve={},p[le]=ve);let de=ve[se];de===void 0&&(de=C.clone(),ve[se]=de,z.addEventListener("dispose",F)),C=de}if(C.visible=z.visible,C.wireframe=z.wireframe,w===$i?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:v[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const le=s.properties.get(C);le.light=q}return C}function D(k,z,q,w,C){if(k.visible===!1)return;if(k.layers.test(z.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&C===$i)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,k.matrixWorld);const se=e.update(k),ve=k.material;if(Array.isArray(ve)){const de=se.groups;for(let B=0,Z=de.length;B<Z;B++){const Y=de[B],Ee=ve[Y.materialIndex];if(Ee&&Ee.visible){const U=L(k,Ee,w,C);k.onBeforeShadow(s,k,z,q,se,U,Y),s.renderBufferDirect(q,null,se,U,k,Y),k.onAfterShadow(s,k,z,q,se,U,Y)}}}else if(ve.visible){const de=L(k,ve,w,C);k.onBeforeShadow(s,k,z,q,se,de,null),s.renderBufferDirect(q,null,se,de,k,null),k.onAfterShadow(s,k,z,q,se,de,null)}}const le=k.children;for(let se=0,ve=le.length;se<ve;se++)D(le[se],z,q,w,C)}function F(k){k.target.removeEventListener("dispose",F);for(const q in p){const w=p[q],C=k.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const V1={[Bd]:zd,[Id]:Gd,[Fd]:Vd,[Es]:Hd,[zd]:Bd,[Gd]:Id,[Vd]:Fd,[Hd]:Es};function k1(s,e){function i(){let V=!1;const Le=new en;let Te=null;const Ie=new en(0,0,0,0);return{setMask:function(Ae){Te!==Ae&&!V&&(s.colorMask(Ae,Ae,Ae,Ae),Te=Ae)},setLocked:function(Ae){V=Ae},setClear:function(Ae,_e,He,it,Dt){Dt===!0&&(Ae*=it,_e*=it,He*=it),Le.set(Ae,_e,He,it),Ie.equals(Le)===!1&&(s.clearColor(Ae,_e,He,it),Ie.copy(Le))},reset:function(){V=!1,Te=null,Ie.set(-1,0,0,0)}}}function r(){let V=!1,Le=!1,Te=null,Ie=null,Ae=null;return{setReversed:function(_e){if(Le!==_e){const He=e.get("EXT_clip_control");_e?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Le=_e;const it=Ae;Ae=null,this.setClear(it)}},getReversed:function(){return Le},setTest:function(_e){_e?Re(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(_e){Te!==_e&&!V&&(s.depthMask(_e),Te=_e)},setFunc:function(_e){if(Le&&(_e=V1[_e]),Ie!==_e){switch(_e){case Bd:s.depthFunc(s.NEVER);break;case zd:s.depthFunc(s.ALWAYS);break;case Id:s.depthFunc(s.LESS);break;case Es:s.depthFunc(s.LEQUAL);break;case Fd:s.depthFunc(s.EQUAL);break;case Hd:s.depthFunc(s.GEQUAL);break;case Gd:s.depthFunc(s.GREATER);break;case Vd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=_e}},setLocked:function(_e){V=_e},setClear:function(_e){Ae!==_e&&(Le&&(_e=1-_e),s.clearDepth(_e),Ae=_e)},reset:function(){V=!1,Te=null,Ie=null,Ae=null,Le=!1}}}function l(){let V=!1,Le=null,Te=null,Ie=null,Ae=null,_e=null,He=null,it=null,Dt=null;return{setTest:function(Tt){V||(Tt?Re(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(Tt){Le!==Tt&&!V&&(s.stencilMask(Tt),Le=Tt)},setFunc:function(Tt,Gn,hn){(Te!==Tt||Ie!==Gn||Ae!==hn)&&(s.stencilFunc(Tt,Gn,hn),Te=Tt,Ie=Gn,Ae=hn)},setOp:function(Tt,Gn,hn){(_e!==Tt||He!==Gn||it!==hn)&&(s.stencilOp(Tt,Gn,hn),_e=Tt,He=Gn,it=hn)},setLocked:function(Tt){V=Tt},setClear:function(Tt){Dt!==Tt&&(s.clearStencil(Tt),Dt=Tt)},reset:function(){V=!1,Le=null,Te=null,Ie=null,Ae=null,_e=null,He=null,it=null,Dt=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,M=[],T=null,R=!1,S=null,_=null,N=null,L=null,D=null,F=null,k=null,z=new wt(0,0,0),q=0,w=!1,C=null,G=null,le=null,se=null,ve=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=Z>=2);let Ee=null,U={};const $=s.getParameter(s.SCISSOR_BOX),xe=s.getParameter(s.VIEWPORT),ye=new en().fromArray($),Q=new en().fromArray(xe);function me(V,Le,Te,Ie){const Ae=new Uint8Array(4),_e=s.createTexture();s.bindTexture(V,_e),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<Te;He++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(Le+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return _e}const Me={};Me[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),Re(s.DEPTH_TEST),d.setFunc(Es),Mt(!1),ht(T_),Re(s.CULL_FACE),I(ka);function Re(V){g[V]!==!0&&(s.enable(V),g[V]=!0)}function we(V){g[V]!==!1&&(s.disable(V),g[V]=!1)}function lt(V,Le){return v[V]!==Le?(s.bindFramebuffer(V,Le),v[V]=Le,V===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Le),V===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function Je(V,Le){let Te=M,Ie=!1;if(V){Te=x.get(Le),Te===void 0&&(Te=[],x.set(Le,Te));const Ae=V.textures;if(Te.length!==Ae.length||Te[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,He=Ae.length;_e<He;_e++)Te[_e]=s.COLOR_ATTACHMENT0+_e;Te.length=Ae.length,Ie=!0}}else Te[0]!==s.BACK&&(Te[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(Te)}function Nt(V){return T!==V?(s.useProgram(V),T=V,!0):!1}const It={[Sr]:s.FUNC_ADD,[Ky]:s.FUNC_SUBTRACT,[Qy]:s.FUNC_REVERSE_SUBTRACT};It[Jy]=s.MIN,It[$y]=s.MAX;const gt={[eM]:s.ZERO,[tM]:s.ONE,[nM]:s.SRC_COLOR,[Od]:s.SRC_ALPHA,[lM]:s.SRC_ALPHA_SATURATE,[sM]:s.DST_COLOR,[aM]:s.DST_ALPHA,[iM]:s.ONE_MINUS_SRC_COLOR,[Pd]:s.ONE_MINUS_SRC_ALPHA,[oM]:s.ONE_MINUS_DST_COLOR,[rM]:s.ONE_MINUS_DST_ALPHA,[uM]:s.CONSTANT_COLOR,[cM]:s.ONE_MINUS_CONSTANT_COLOR,[fM]:s.CONSTANT_ALPHA,[dM]:s.ONE_MINUS_CONSTANT_ALPHA};function I(V,Le,Te,Ie,Ae,_e,He,it,Dt,Tt){if(V===ka){R===!0&&(we(s.BLEND),R=!1);return}if(R===!1&&(Re(s.BLEND),R=!0),V!==Zy){if(V!==S||Tt!==w){if((_!==Sr||D!==Sr)&&(s.blendEquation(s.FUNC_ADD),_=Sr,D=Sr),Tt)switch(V){case Ss:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case b_:s.blendFunc(s.ONE,s.ONE);break;case A_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case R_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ss:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case b_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case A_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case R_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}N=null,L=null,F=null,k=null,z.set(0,0,0),q=0,S=V,w=Tt}return}Ae=Ae||Le,_e=_e||Te,He=He||Ie,(Le!==_||Ae!==D)&&(s.blendEquationSeparate(It[Le],It[Ae]),_=Le,D=Ae),(Te!==N||Ie!==L||_e!==F||He!==k)&&(s.blendFuncSeparate(gt[Te],gt[Ie],gt[_e],gt[He]),N=Te,L=Ie,F=_e,k=He),(it.equals(z)===!1||Dt!==q)&&(s.blendColor(it.r,it.g,it.b,Dt),z.copy(it),q=Dt),S=V,w=!1}function xn(V,Le){V.side===ea?we(s.CULL_FACE):Re(s.CULL_FACE);let Te=V.side===Fn;Le&&(Te=!Te),Mt(Te),V.blending===Ss&&V.transparent===!1?I(ka):I(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),u.setMask(V.colorWrite);const Ie=V.stencilWrite;h.setTest(Ie),Ie&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),_t(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Re(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(V){C!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),C=V)}function ht(V){V!==qy?(Re(s.CULL_FACE),V!==G&&(V===T_?s.cullFace(s.BACK):V===Yy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),G=V}function ke(V){V!==le&&(B&&s.lineWidth(V),le=V)}function _t(V,Le,Te){V?(Re(s.POLYGON_OFFSET_FILL),(se!==Le||ve!==Te)&&(s.polygonOffset(Le,Te),se=Le,ve=Te)):we(s.POLYGON_OFFSET_FILL)}function Ze(V){V?Re(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function rt(V){V===void 0&&(V=s.TEXTURE0+de-1),Ee!==V&&(s.activeTexture(V),Ee=V)}function Qt(V,Le,Te){Te===void 0&&(Ee===null?Te=s.TEXTURE0+de-1:Te=Ee);let Ie=U[Te];Ie===void 0&&(Ie={type:void 0,texture:void 0},U[Te]=Ie),(Ie.type!==V||Ie.texture!==Le)&&(Ee!==Te&&(s.activeTexture(Te),Ee=Te),s.bindTexture(V,Le||Me[V]),Ie.type=V,Ie.texture=Le)}function O(){const V=U[Ee];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ee(){try{s.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ce(){try{s.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{s.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function oe(){try{s.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Be(){try{s.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ue(){try{s.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ve(){try{s.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xe(){try{s.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{s.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ze(V){ye.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),ye.copy(V))}function Ye(V){Q.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Q.copy(V))}function je(V,Le){let Te=p.get(Le);Te===void 0&&(Te=new WeakMap,p.set(Le,Te));let Ie=Te.get(V);Ie===void 0&&(Ie=s.getUniformBlockIndex(Le,V.name),Te.set(V,Ie))}function Ce(V,Le){const Ie=p.get(Le).get(V);m.get(Le)!==Ie&&(s.uniformBlockBinding(Le,Ie,V.__bindingPointIndex),m.set(Le,Ie))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Ee=null,U={},v={},x=new WeakMap,M=[],T=null,R=!1,S=null,_=null,N=null,L=null,D=null,F=null,k=null,z=new wt(0,0,0),q=0,w=!1,C=null,G=null,le=null,se=null,ve=null,ye.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:Re,disable:we,bindFramebuffer:lt,drawBuffers:Je,useProgram:Nt,setBlending:I,setMaterial:xn,setFlipSided:Mt,setCullFace:ht,setLineWidth:ke,setPolygonOffset:_t,setScissorTest:Ze,activeTexture:rt,bindTexture:Qt,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:ee,texImage2D:Xe,texImage3D:Se,updateUBOMapping:je,uniformBlockBinding:Ce,texStorage2D:Ue,texStorage3D:Ve,texSubImage2D:ce,texSubImage3D:he,compressedTexSubImage2D:oe,compressedTexSubImage3D:Be,scissor:ze,viewport:Ye,reset:at}}function X1(s,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Gt,g=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(O,E){return M?new OffscreenCanvas(O,E):Iu("canvas")}function R(O,E,ee){let ce=1;const he=Qt(O);if((he.width>ee||he.height>ee)&&(ce=ee/Math.max(he.width,he.height)),ce<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const oe=Math.floor(ce*he.width),Be=Math.floor(ce*he.height);v===void 0&&(v=T(oe,Be));const Ue=E?T(oe,Be):v;return Ue.width=oe,Ue.height=Be,Ue.getContext("2d").drawImage(O,0,0,oe,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+oe+"x"+Be+")."),Ue}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),O;return O}function S(O){return O.generateMipmaps}function _(O){s.generateMipmap(O)}function N(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(O,E,ee,ce,he=!1){if(O!==null){if(s[O]!==void 0)return s[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let oe=E;if(E===s.RED&&(ee===s.FLOAT&&(oe=s.R32F),ee===s.HALF_FLOAT&&(oe=s.R16F),ee===s.UNSIGNED_BYTE&&(oe=s.R8)),E===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(oe=s.R8UI),ee===s.UNSIGNED_SHORT&&(oe=s.R16UI),ee===s.UNSIGNED_INT&&(oe=s.R32UI),ee===s.BYTE&&(oe=s.R8I),ee===s.SHORT&&(oe=s.R16I),ee===s.INT&&(oe=s.R32I)),E===s.RG&&(ee===s.FLOAT&&(oe=s.RG32F),ee===s.HALF_FLOAT&&(oe=s.RG16F),ee===s.UNSIGNED_BYTE&&(oe=s.RG8)),E===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(oe=s.RG8UI),ee===s.UNSIGNED_SHORT&&(oe=s.RG16UI),ee===s.UNSIGNED_INT&&(oe=s.RG32UI),ee===s.BYTE&&(oe=s.RG8I),ee===s.SHORT&&(oe=s.RG16I),ee===s.INT&&(oe=s.RG32I)),E===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(oe=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(oe=s.RGB16UI),ee===s.UNSIGNED_INT&&(oe=s.RGB32UI),ee===s.BYTE&&(oe=s.RGB8I),ee===s.SHORT&&(oe=s.RGB16I),ee===s.INT&&(oe=s.RGB32I)),E===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(oe=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(oe=s.RGBA16UI),ee===s.UNSIGNED_INT&&(oe=s.RGBA32UI),ee===s.BYTE&&(oe=s.RGBA8I),ee===s.SHORT&&(oe=s.RGBA16I),ee===s.INT&&(oe=s.RGBA32I)),E===s.RGB&&ee===s.UNSIGNED_INT_5_9_9_9_REV&&(oe=s.RGB9_E5),E===s.RGBA){const Be=he?Bu:At.getTransfer(ce);ee===s.FLOAT&&(oe=s.RGBA32F),ee===s.HALF_FLOAT&&(oe=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(oe=Be===zt?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function D(O,E){let ee;return O?E===null||E===br||E===Bo?ee=s.DEPTH24_STENCIL8:E===ta?ee=s.DEPTH32F_STENCIL8:E===Po&&(ee=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===br||E===Bo?ee=s.DEPTH_COMPONENT24:E===ta?ee=s.DEPTH_COMPONENT32F:E===Po&&(ee=s.DEPTH_COMPONENT16),ee}function F(O,E){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==gi&&O.minFilter!==Ti?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function k(O){const E=O.target;E.removeEventListener("dispose",k),q(E),E.isVideoTexture&&g.delete(E)}function z(O){const E=O.target;E.removeEventListener("dispose",z),C(E)}function q(O){const E=r.get(O);if(E.__webglInit===void 0)return;const ee=O.source,ce=x.get(ee);if(ce){const he=ce[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&w(O),Object.keys(ce).length===0&&x.delete(ee)}r.remove(O)}function w(O){const E=r.get(O);s.deleteTexture(E.__webglTexture);const ee=O.source,ce=x.get(ee);delete ce[E.__cacheKey],d.memory.textures--}function C(O){const E=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(E.__webglFramebuffer[ce]))for(let he=0;he<E.__webglFramebuffer[ce].length;he++)s.deleteFramebuffer(E.__webglFramebuffer[ce][he]);else s.deleteFramebuffer(E.__webglFramebuffer[ce]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ce])}else{if(Array.isArray(E.__webglFramebuffer))for(let ce=0;ce<E.__webglFramebuffer.length;ce++)s.deleteFramebuffer(E.__webglFramebuffer[ce]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ce=0;ce<E.__webglColorRenderbuffer.length;ce++)E.__webglColorRenderbuffer[ce]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ce]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ee=O.textures;for(let ce=0,he=ee.length;ce<he;ce++){const oe=r.get(ee[ce]);oe.__webglTexture&&(s.deleteTexture(oe.__webglTexture),d.memory.textures--),r.remove(ee[ce])}r.remove(O)}let G=0;function le(){G=0}function se(){const O=G;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),G+=1,O}function ve(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function de(O,E){const ee=r.get(O);if(O.isVideoTexture&&Ze(O),O.isRenderTargetTexture===!1&&O.version>0&&ee.__version!==O.version){const ce=O.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(ee,O,E);return}}i.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+E)}function B(O,E){const ee=r.get(O);if(O.version>0&&ee.__version!==O.version){Me(ee,O,E);return}i.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+E)}function Z(O,E){const ee=r.get(O);if(O.version>0&&ee.__version!==O.version){Me(ee,O,E);return}i.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+E)}function Y(O,E){const ee=r.get(O);if(O.version>0&&ee.__version!==O.version){Re(ee,O,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+E)}const Ee={[Wd]:s.REPEAT,[Mr]:s.CLAMP_TO_EDGE,[qd]:s.MIRRORED_REPEAT},U={[gi]:s.NEAREST,[MM]:s.NEAREST_MIPMAP_NEAREST,[ru]:s.NEAREST_MIPMAP_LINEAR,[Ti]:s.LINEAR,[ed]:s.LINEAR_MIPMAP_NEAREST,[Er]:s.LINEAR_MIPMAP_LINEAR},$={[RM]:s.NEVER,[NM]:s.ALWAYS,[CM]:s.LESS,[jv]:s.LEQUAL,[wM]:s.EQUAL,[LM]:s.GEQUAL,[DM]:s.GREATER,[UM]:s.NOTEQUAL};function xe(O,E){if(E.type===ta&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ti||E.magFilter===ed||E.magFilter===ru||E.magFilter===Er||E.minFilter===Ti||E.minFilter===ed||E.minFilter===ru||E.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,Ee[E.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,Ee[E.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,Ee[E.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,U[E.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,U[E.minFilter]),E.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,$[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===gi||E.minFilter!==ru&&E.minFilter!==Er||E.type===ta&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(O,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ye(O,E){let ee=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",k));const ce=E.source;let he=x.get(ce);he===void 0&&(he={},x.set(ce,he));const oe=ve(E);if(oe!==O.__cacheKey){he[oe]===void 0&&(he[oe]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,ee=!0),he[oe].usedTimes++;const Be=he[O.__cacheKey];Be!==void 0&&(he[O.__cacheKey].usedTimes--,Be.usedTimes===0&&w(E)),O.__cacheKey=oe,O.__webglTexture=he[oe].texture}return ee}function Q(O,E,ee){return Math.floor(Math.floor(O/ee)/E)}function me(O,E,ee,ce){const oe=O.updateRanges;if(oe.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,ee,ce,E.data);else{oe.sort((Se,ze)=>Se.start-ze.start);let Be=0;for(let Se=1;Se<oe.length;Se++){const ze=oe[Be],Ye=oe[Se],je=ze.start+ze.count,Ce=Q(Ye.start,E.width,4),at=Q(ze.start,E.width,4);Ye.start<=je+1&&Ce===at&&Q(Ye.start+Ye.count-1,E.width,4)===Ce?ze.count=Math.max(ze.count,Ye.start+Ye.count-ze.start):(++Be,oe[Be]=Ye)}oe.length=Be+1;const Ue=s.getParameter(s.UNPACK_ROW_LENGTH),Ve=s.getParameter(s.UNPACK_SKIP_PIXELS),Xe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Se=0,ze=oe.length;Se<ze;Se++){const Ye=oe[Se],je=Math.floor(Ye.start/4),Ce=Math.ceil(Ye.count/4),at=je%E.width,V=Math.floor(je/E.width),Le=Ce,Te=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,at),s.pixelStorei(s.UNPACK_SKIP_ROWS,V),i.texSubImage2D(s.TEXTURE_2D,0,at,V,Le,Te,ee,ce,E.data)}O.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ue),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ve),s.pixelStorei(s.UNPACK_SKIP_ROWS,Xe)}}function Me(O,E,ee){let ce=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ce=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ce=s.TEXTURE_3D);const he=ye(O,E),oe=E.source;i.bindTexture(ce,O.__webglTexture,s.TEXTURE0+ee);const Be=r.get(oe);if(oe.version!==Be.__version||he===!0){i.activeTexture(s.TEXTURE0+ee);const Ue=At.getPrimaries(At.workingColorSpace),Ve=E.colorSpace===Va?null:At.getPrimaries(E.colorSpace),Xe=E.colorSpace===Va||Ue===Ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let Se=R(E.image,!1,l.maxTextureSize);Se=rt(E,Se);const ze=u.convert(E.format,E.colorSpace),Ye=u.convert(E.type);let je=L(E.internalFormat,ze,Ye,E.colorSpace,E.isVideoTexture);xe(ce,E);let Ce;const at=E.mipmaps,V=E.isVideoTexture!==!0,Le=Be.__version===void 0||he===!0,Te=oe.dataReady,Ie=F(E,Se);if(E.isDepthTexture)je=D(E.format===Io,E.type),Le&&(V?i.texStorage2D(s.TEXTURE_2D,1,je,Se.width,Se.height):i.texImage2D(s.TEXTURE_2D,0,je,Se.width,Se.height,0,ze,Ye,null));else if(E.isDataTexture)if(at.length>0){V&&Le&&i.texStorage2D(s.TEXTURE_2D,Ie,je,at[0].width,at[0].height);for(let Ae=0,_e=at.length;Ae<_e;Ae++)Ce=at[Ae],V?Te&&i.texSubImage2D(s.TEXTURE_2D,Ae,0,0,Ce.width,Ce.height,ze,Ye,Ce.data):i.texImage2D(s.TEXTURE_2D,Ae,je,Ce.width,Ce.height,0,ze,Ye,Ce.data);E.generateMipmaps=!1}else V?(Le&&i.texStorage2D(s.TEXTURE_2D,Ie,je,Se.width,Se.height),Te&&me(E,Se,ze,Ye)):i.texImage2D(s.TEXTURE_2D,0,je,Se.width,Se.height,0,ze,Ye,Se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){V&&Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,je,at[0].width,at[0].height,Se.depth);for(let Ae=0,_e=at.length;Ae<_e;Ae++)if(Ce=at[Ae],E.format!==mi)if(ze!==null)if(V){if(Te)if(E.layerUpdates.size>0){const He=j_(Ce.width,Ce.height,E.format,E.type);for(const it of E.layerUpdates){const Dt=Ce.data.subarray(it*He/Ce.data.BYTES_PER_ELEMENT,(it+1)*He/Ce.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,it,Ce.width,Ce.height,1,ze,Dt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,Ce.width,Ce.height,Se.depth,ze,Ce.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ae,je,Ce.width,Ce.height,Se.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Te&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,Ce.width,Ce.height,Se.depth,ze,Ye,Ce.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Ae,je,Ce.width,Ce.height,Se.depth,0,ze,Ye,Ce.data)}else{V&&Le&&i.texStorage2D(s.TEXTURE_2D,Ie,je,at[0].width,at[0].height);for(let Ae=0,_e=at.length;Ae<_e;Ae++)Ce=at[Ae],E.format!==mi?ze!==null?V?Te&&i.compressedTexSubImage2D(s.TEXTURE_2D,Ae,0,0,Ce.width,Ce.height,ze,Ce.data):i.compressedTexImage2D(s.TEXTURE_2D,Ae,je,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Te&&i.texSubImage2D(s.TEXTURE_2D,Ae,0,0,Ce.width,Ce.height,ze,Ye,Ce.data):i.texImage2D(s.TEXTURE_2D,Ae,je,Ce.width,Ce.height,0,ze,Ye,Ce.data)}else if(E.isDataArrayTexture)if(V){if(Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,je,Se.width,Se.height,Se.depth),Te)if(E.layerUpdates.size>0){const Ae=j_(Se.width,Se.height,E.format,E.type);for(const _e of E.layerUpdates){const He=Se.data.subarray(_e*Ae/Se.data.BYTES_PER_ELEMENT,(_e+1)*Ae/Se.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_e,Se.width,Se.height,1,ze,Ye,He)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,ze,Ye,Se.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,je,Se.width,Se.height,Se.depth,0,ze,Ye,Se.data);else if(E.isData3DTexture)V?(Le&&i.texStorage3D(s.TEXTURE_3D,Ie,je,Se.width,Se.height,Se.depth),Te&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,ze,Ye,Se.data)):i.texImage3D(s.TEXTURE_3D,0,je,Se.width,Se.height,Se.depth,0,ze,Ye,Se.data);else if(E.isFramebufferTexture){if(Le)if(V)i.texStorage2D(s.TEXTURE_2D,Ie,je,Se.width,Se.height);else{let Ae=Se.width,_e=Se.height;for(let He=0;He<Ie;He++)i.texImage2D(s.TEXTURE_2D,He,je,Ae,_e,0,ze,Ye,null),Ae>>=1,_e>>=1}}else if(at.length>0){if(V&&Le){const Ae=Qt(at[0]);i.texStorage2D(s.TEXTURE_2D,Ie,je,Ae.width,Ae.height)}for(let Ae=0,_e=at.length;Ae<_e;Ae++)Ce=at[Ae],V?Te&&i.texSubImage2D(s.TEXTURE_2D,Ae,0,0,ze,Ye,Ce):i.texImage2D(s.TEXTURE_2D,Ae,je,ze,Ye,Ce);E.generateMipmaps=!1}else if(V){if(Le){const Ae=Qt(Se);i.texStorage2D(s.TEXTURE_2D,Ie,je,Ae.width,Ae.height)}Te&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,Ye,Se)}else i.texImage2D(s.TEXTURE_2D,0,je,ze,Ye,Se);S(E)&&_(ce),Be.__version=oe.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Re(O,E,ee){if(E.image.length!==6)return;const ce=ye(O,E),he=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+ee);const oe=r.get(he);if(he.version!==oe.__version||ce===!0){i.activeTexture(s.TEXTURE0+ee);const Be=At.getPrimaries(At.workingColorSpace),Ue=E.colorSpace===Va?null:At.getPrimaries(E.colorSpace),Ve=E.colorSpace===Va||Be===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const Xe=E.isCompressedTexture||E.image[0].isCompressedTexture,Se=E.image[0]&&E.image[0].isDataTexture,ze=[];for(let _e=0;_e<6;_e++)!Xe&&!Se?ze[_e]=R(E.image[_e],!0,l.maxCubemapSize):ze[_e]=Se?E.image[_e].image:E.image[_e],ze[_e]=rt(E,ze[_e]);const Ye=ze[0],je=u.convert(E.format,E.colorSpace),Ce=u.convert(E.type),at=L(E.internalFormat,je,Ce,E.colorSpace),V=E.isVideoTexture!==!0,Le=oe.__version===void 0||ce===!0,Te=he.dataReady;let Ie=F(E,Ye);xe(s.TEXTURE_CUBE_MAP,E);let Ae;if(Xe){V&&Le&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,at,Ye.width,Ye.height);for(let _e=0;_e<6;_e++){Ae=ze[_e].mipmaps;for(let He=0;He<Ae.length;He++){const it=Ae[He];E.format!==mi?je!==null?V?Te&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,0,0,it.width,it.height,je,it.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,at,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,0,0,it.width,it.height,je,Ce,it.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,at,it.width,it.height,0,je,Ce,it.data)}}}else{if(Ae=E.mipmaps,V&&Le){Ae.length>0&&Ie++;const _e=Qt(ze[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,at,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Se){V?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ze[_e].width,ze[_e].height,je,Ce,ze[_e].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,at,ze[_e].width,ze[_e].height,0,je,Ce,ze[_e].data);for(let He=0;He<Ae.length;He++){const Dt=Ae[He].image[_e].image;V?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,0,0,Dt.width,Dt.height,je,Ce,Dt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,at,Dt.width,Dt.height,0,je,Ce,Dt.data)}}else{V?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,je,Ce,ze[_e]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,at,je,Ce,ze[_e]);for(let He=0;He<Ae.length;He++){const it=Ae[He];V?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,0,0,je,Ce,it.image[_e]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,at,je,Ce,it.image[_e])}}}S(E)&&_(s.TEXTURE_CUBE_MAP),oe.__version=he.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function we(O,E,ee,ce,he,oe){const Be=u.convert(ee.format,ee.colorSpace),Ue=u.convert(ee.type),Ve=L(ee.internalFormat,Be,Ue,ee.colorSpace),Xe=r.get(E),Se=r.get(ee);if(Se.__renderTarget=E,!Xe.__hasExternalTextures){const ze=Math.max(1,E.width>>oe),Ye=Math.max(1,E.height>>oe);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?i.texImage3D(he,oe,Ve,ze,Ye,E.depth,0,Be,Ue,null):i.texImage2D(he,oe,Ve,ze,Ye,0,Be,Ue,null)}i.bindFramebuffer(s.FRAMEBUFFER,O),_t(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,he,Se.__webglTexture,0,ke(E)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ce,he,Se.__webglTexture,oe),i.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(O,E,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,O),E.depthBuffer){const ce=E.depthTexture,he=ce&&ce.isDepthTexture?ce.type:null,oe=D(E.stencilBuffer,he),Be=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=ke(E);_t(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ue,oe,E.width,E.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,oe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,oe,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Be,s.RENDERBUFFER,O)}else{const ce=E.textures;for(let he=0;he<ce.length;he++){const oe=ce[he],Be=u.convert(oe.format,oe.colorSpace),Ue=u.convert(oe.type),Ve=L(oe.internalFormat,Be,Ue,oe.colorSpace),Xe=ke(E);ee&&_t(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xe,Ve,E.width,E.height):_t(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xe,Ve,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ve,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Je(O,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ce=r.get(E.depthTexture);ce.__renderTarget=E,(!ce.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),de(E.depthTexture,0);const he=ce.__webglTexture,oe=ke(E);if(E.depthTexture.format===zo)_t(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0);else if(E.depthTexture.format===Io)_t(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function Nt(O){const E=r.get(O),ee=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const ce=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ce){const he=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ce.removeEventListener("dispose",he)};ce.addEventListener("dispose",he),E.__depthDisposeCallback=he}E.__boundDepthTexture=ce}if(O.depthTexture&&!E.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");const ce=O.texture.mipmaps;ce&&ce.length>0?Je(E.__webglFramebuffer[0],O):Je(E.__webglFramebuffer,O)}else if(ee){E.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ce]),E.__webglDepthbuffer[ce]===void 0)E.__webglDepthbuffer[ce]=s.createRenderbuffer(),lt(E.__webglDepthbuffer[ce],O,!1);else{const he=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer[ce];s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,oe)}}else{const ce=O.texture.mipmaps;if(ce&&ce.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),lt(E.__webglDepthbuffer,O,!1);else{const he=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,oe)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function It(O,E,ee){const ce=r.get(O);E!==void 0&&we(ce.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&Nt(O)}function gt(O){const E=O.texture,ee=r.get(O),ce=r.get(E);O.addEventListener("dispose",z);const he=O.textures,oe=O.isWebGLCubeRenderTarget===!0,Be=he.length>1;if(Be||(ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture()),ce.__version=E.version,d.memory.textures++),oe){ee.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer[Ue]=[];for(let Ve=0;Ve<E.mipmaps.length;Ve++)ee.__webglFramebuffer[Ue][Ve]=s.createFramebuffer()}else ee.__webglFramebuffer[Ue]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)ee.__webglFramebuffer[Ue]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Be)for(let Ue=0,Ve=he.length;Ue<Ve;Ue++){const Xe=r.get(he[Ue]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=s.createTexture(),d.memory.textures++)}if(O.samples>0&&_t(O)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ue=0;Ue<he.length;Ue++){const Ve=he[Ue];ee.__webglColorRenderbuffer[Ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ue]);const Xe=u.convert(Ve.format,Ve.colorSpace),Se=u.convert(Ve.type),ze=L(Ve.internalFormat,Xe,Se,Ve.colorSpace,O.isXRRenderTarget===!0),Ye=ke(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,ze,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),lt(ee.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){i.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),xe(s.TEXTURE_CUBE_MAP,E);for(let Ue=0;Ue<6;Ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ve=0;Ve<E.mipmaps.length;Ve++)we(ee.__webglFramebuffer[Ue][Ve],O,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ve);else we(ee.__webglFramebuffer[Ue],O,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);S(E)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Be){for(let Ue=0,Ve=he.length;Ue<Ve;Ue++){const Xe=he[Ue],Se=r.get(Xe);i.bindTexture(s.TEXTURE_2D,Se.__webglTexture),xe(s.TEXTURE_2D,Xe),we(ee.__webglFramebuffer,O,Xe,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,0),S(Xe)&&_(s.TEXTURE_2D)}i.unbindTexture()}else{let Ue=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ue=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ue,ce.__webglTexture),xe(Ue,E),E.mipmaps&&E.mipmaps.length>0)for(let Ve=0;Ve<E.mipmaps.length;Ve++)we(ee.__webglFramebuffer[Ve],O,E,s.COLOR_ATTACHMENT0,Ue,Ve);else we(ee.__webglFramebuffer,O,E,s.COLOR_ATTACHMENT0,Ue,0);S(E)&&_(Ue),i.unbindTexture()}O.depthBuffer&&Nt(O)}function I(O){const E=O.textures;for(let ee=0,ce=E.length;ee<ce;ee++){const he=E[ee];if(S(he)){const oe=N(O),Be=r.get(he).__webglTexture;i.bindTexture(oe,Be),_(oe),i.unbindTexture()}}}const xn=[],Mt=[];function ht(O){if(O.samples>0){if(_t(O)===!1){const E=O.textures,ee=O.width,ce=O.height;let he=s.COLOR_BUFFER_BIT;const oe=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Be=r.get(O),Ue=E.length>1;if(Ue)for(let Xe=0;Xe<E.length;Xe++)i.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const Ve=O.texture.mipmaps;Ve&&Ve.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Xe=0;Xe<E.length;Xe++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),Ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Be.__webglColorRenderbuffer[Xe]);const Se=r.get(E[Xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Se,0)}s.blitFramebuffer(0,0,ee,ce,0,0,ee,ce,he,s.NEAREST),m===!0&&(xn.length=0,Mt.length=0,xn.push(s.COLOR_ATTACHMENT0+Xe),O.depthBuffer&&O.resolveDepthBuffer===!1&&(xn.push(oe),Mt.push(oe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Mt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xn))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ue)for(let Xe=0;Xe<E.length;Xe++){i.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.RENDERBUFFER,Be.__webglColorRenderbuffer[Xe]);const Se=r.get(E[Xe]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.TEXTURE_2D,Se,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function ke(O){return Math.min(l.maxSamples,O.samples)}function _t(O){const E=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ze(O){const E=d.render.frame;g.get(O)!==E&&(g.set(O,E),O.update())}function rt(O,E){const ee=O.colorSpace,ce=O.format,he=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ee!==As&&ee!==Va&&(At.getTransfer(ee)===zt?(ce!==mi||he!==sa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),E}function Qt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=se,this.resetTextureUnits=le,this.setTexture2D=de,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=It,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=we,this.useMultisampledRTT=_t}function W1(s,e){function i(r,l=Va){let u;const d=At.getTransfer(l);if(r===sa)return s.UNSIGNED_BYTE;if(r===wh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Dh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Vv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Hv)return s.BYTE;if(r===Gv)return s.SHORT;if(r===Po)return s.UNSIGNED_SHORT;if(r===Ch)return s.INT;if(r===br)return s.UNSIGNED_INT;if(r===ta)return s.FLOAT;if(r===Vo)return s.HALF_FLOAT;if(r===kv)return s.ALPHA;if(r===Xv)return s.RGB;if(r===mi)return s.RGBA;if(r===zo)return s.DEPTH_COMPONENT;if(r===Io)return s.DEPTH_STENCIL;if(r===Wv)return s.RED;if(r===Uh)return s.RED_INTEGER;if(r===qv)return s.RG;if(r===Lh)return s.RG_INTEGER;if(r===Nh)return s.RGBA_INTEGER;if(r===wu||r===Du||r===Uu||r===Lu)if(d===zt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===wu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Du)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Uu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===wu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Du)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Uu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Yd||r===jd||r===Zd||r===Kd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Yd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Kd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qd||r===Jd||r===$d)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Qd||r===Jd)return d===zt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===$d)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===eh||r===th||r===nh||r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===uh||r===ch||r===fh||r===dh||r===hh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===eh)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===th)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===nh)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ih)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ah)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===rh)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===sh)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===oh)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===lh)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===uh)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ch)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===fh)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===dh)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hh)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nu||r===ph||r===mh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Nu)return d===zt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ph)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===mh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Yv||r===gh||r===_h||r===vh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Nu)return u.COMPRESSED_RED_RGTC1_EXT;if(r===gh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===_h)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===vh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const q1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class j1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Hn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new la({vertexShader:q1,fragmentShader:Y1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new bi(new Yo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z1 extends Ds{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,g=null,v=null,x=null,M=null,T=null;const R=new j1,S=i.getContextAttributes();let _=null,N=null;const L=[],D=[],F=new Gt;let k=null;const z=new oi;z.viewport=new en;const q=new oi;q.viewport=new en;const w=[z,q],C=new gE;let G=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let me=L[Q];return me===void 0&&(me=new Ed,L[Q]=me),me.getTargetRaySpace()},this.getControllerGrip=function(Q){let me=L[Q];return me===void 0&&(me=new Ed,L[Q]=me),me.getGripSpace()},this.getHand=function(Q){let me=L[Q];return me===void 0&&(me=new Ed,L[Q]=me),me.getHandSpace()};function se(Q){const me=D.indexOf(Q.inputSource);if(me===-1)return;const Me=L[me];Me!==void 0&&(Me.update(Q.inputSource,Q.frame,p||d),Me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ve(){l.removeEventListener("select",se),l.removeEventListener("selectstart",se),l.removeEventListener("selectend",se),l.removeEventListener("squeeze",se),l.removeEventListener("squeezestart",se),l.removeEventListener("squeezeend",se),l.removeEventListener("end",ve),l.removeEventListener("inputsourceschange",de);for(let Q=0;Q<L.length;Q++){const me=D[Q];me!==null&&(D[Q]=null,L[Q].disconnect(me))}G=null,le=null,R.reset(),e.setRenderTarget(_),M=null,x=null,v=null,l=null,N=null,ye.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",se),l.addEventListener("selectstart",se),l.addEventListener("selectend",se),l.addEventListener("squeeze",se),l.addEventListener("squeezestart",se),l.addEventListener("squeezeend",se),l.addEventListener("end",ve),l.addEventListener("inputsourceschange",de),S.xrCompatible!==!0&&await i.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Re=null,we=null;S.depth&&(we=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Me=S.stencil?Io:zo,Re=S.stencil?Bo:br);const lt={colorFormat:i.RGBA8,depthFormat:we,scaleFactor:u};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(lt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new Ar(x.textureWidth,x.textureHeight,{format:mi,type:sa,depthTexture:new s0(x.textureWidth,x.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Me={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Me),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new Ar(M.framebufferWidth,M.framebufferHeight,{format:mi,type:sa,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),ye.setContext(l),ye.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function de(Q){for(let me=0;me<Q.removed.length;me++){const Me=Q.removed[me],Re=D.indexOf(Me);Re>=0&&(D[Re]=null,L[Re].disconnect(Me))}for(let me=0;me<Q.added.length;me++){const Me=Q.added[me];let Re=D.indexOf(Me);if(Re===-1){for(let lt=0;lt<L.length;lt++)if(lt>=D.length){D.push(Me),Re=lt;break}else if(D[lt]===null){D[lt]=Me,Re=lt;break}if(Re===-1)break}const we=L[Re];we&&we.connect(Me)}}const B=new re,Z=new re;function Y(Q,me,Me){B.setFromMatrixPosition(me.matrixWorld),Z.setFromMatrixPosition(Me.matrixWorld);const Re=B.distanceTo(Z),we=me.projectionMatrix.elements,lt=Me.projectionMatrix.elements,Je=we[14]/(we[10]-1),Nt=we[14]/(we[10]+1),It=(we[9]+1)/we[5],gt=(we[9]-1)/we[5],I=(we[8]-1)/we[0],xn=(lt[8]+1)/lt[0],Mt=Je*I,ht=Je*xn,ke=Re/(-I+xn),_t=ke*-I;if(me.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(_t),Q.translateZ(ke),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),we[10]===-1)Q.projectionMatrix.copy(me.projectionMatrix),Q.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Ze=Je+ke,rt=Nt+ke,Qt=Mt-_t,O=ht+(Re-_t),E=It*Nt/rt*Ze,ee=gt*Nt/rt*Ze;Q.projectionMatrix.makePerspective(Qt,O,E,ee,Ze,rt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Ee(Q,me){me===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(me.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let me=Q.near,Me=Q.far;R.texture!==null&&(R.depthNear>0&&(me=R.depthNear),R.depthFar>0&&(Me=R.depthFar)),C.near=q.near=z.near=me,C.far=q.far=z.far=Me,(G!==C.near||le!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,le=C.far),z.layers.mask=Q.layers.mask|2,q.layers.mask=Q.layers.mask|4,C.layers.mask=z.layers.mask|q.layers.mask;const Re=Q.parent,we=C.cameras;Ee(C,Re);for(let lt=0;lt<we.length;lt++)Ee(we[lt],Re);we.length===2?Y(C,z,q):C.projectionMatrix.copy(z.projectionMatrix),U(Q,C,Re)};function U(Q,me,Me){Me===null?Q.matrix.copy(me.matrixWorld):(Q.matrix.copy(Me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(me.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(me.projectionMatrix),Q.projectionMatrixInverse.copy(me.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=xh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(C)};let $=null;function xe(Q,me){if(g=me.getViewerPose(p||d),T=me,g!==null){const Me=g.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let Re=!1;Me.length!==C.cameras.length&&(C.cameras.length=0,Re=!0);for(let Je=0;Je<Me.length;Je++){const Nt=Me[Je];let It=null;if(M!==null)It=M.getViewport(Nt);else{const I=v.getViewSubImage(x,Nt);It=I.viewport,Je===0&&(e.setRenderTargetTextures(N,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(N))}let gt=w[Je];gt===void 0&&(gt=new oi,gt.layers.enable(Je),gt.viewport=new en,w[Je]=gt),gt.matrix.fromArray(Nt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Nt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(It.x,It.y,It.width,It.height),Je===0&&(C.matrix.copy(gt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Re===!0&&C.cameras.push(gt)}const we=l.enabledFeatures;if(we&&we.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Je=v.getDepthInformation(Me[0]);Je&&Je.isValid&&Je.texture&&R.init(e,Je,l.renderState)}}for(let Me=0;Me<L.length;Me++){const Re=D[Me],we=L[Me];Re!==null&&we!==void 0&&we.update(Re,me,p||d)}$&&$(Q,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),T=null}const ye=new o0;ye.setAnimationLoop(xe),this.setAnimationLoop=function(Q){$=Q},this.dispose=function(){}}}const _r=new oa,K1=new sn;function Q1(s,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,n0(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,N,L,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(S,_):_.isMeshToonMaterial?(u(S,_),v(S,_)):_.isMeshPhongMaterial?(u(S,_),g(S,_)):_.isMeshStandardMaterial?(u(S,_),x(S,_),_.isMeshPhysicalMaterial&&M(S,_,D)):_.isMeshMatcapMaterial?(u(S,_),T(S,_)):_.isMeshDepthMaterial?u(S,_):_.isMeshDistanceMaterial?(u(S,_),R(S,_)):_.isMeshNormalMaterial?u(S,_):_.isLineBasicMaterial?(d(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?m(S,_,N,L):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Fn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Fn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const N=e.get(_),L=N.envMap,D=N.envMapRotation;L&&(S.envMap.value=L,_r.copy(D),_r.x*=-1,_r.y*=-1,_r.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),S.envMapRotation.value.setFromMatrix4(K1.makeRotationFromEuler(_r)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,N,L){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*N,S.scale.value=L*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,N){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,_){_.matcap&&(S.matcap.value=_.matcap)}function R(S,_){const N=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function J1(s,e,i,r){let l={},u={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,L){const D=L.program;r.uniformBlockBinding(N,D)}function p(N,L){let D=l[N.id];D===void 0&&(T(N),D=g(N),l[N.id]=D,N.addEventListener("dispose",S));const F=L.program;r.updateUBOMapping(N,F);const k=e.render.frame;u[N.id]!==k&&(x(N),u[N.id]=k)}function g(N){const L=v();N.__bindingPointIndex=L;const D=s.createBuffer(),F=N.__size,k=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,F,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,D),D}function v(){for(let N=0;N<h;N++)if(d.indexOf(N)===-1)return d.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const L=l[N.id],D=N.uniforms,F=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let k=0,z=D.length;k<z;k++){const q=Array.isArray(D[k])?D[k]:[D[k]];for(let w=0,C=q.length;w<C;w++){const G=q[w];if(M(G,k,w,F)===!0){const le=G.__offset,se=Array.isArray(G.value)?G.value:[G.value];let ve=0;for(let de=0;de<se.length;de++){const B=se[de],Z=R(B);typeof B=="number"||typeof B=="boolean"?(G.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,le+ve,G.__data)):B.isMatrix3?(G.__data[0]=B.elements[0],G.__data[1]=B.elements[1],G.__data[2]=B.elements[2],G.__data[3]=0,G.__data[4]=B.elements[3],G.__data[5]=B.elements[4],G.__data[6]=B.elements[5],G.__data[7]=0,G.__data[8]=B.elements[6],G.__data[9]=B.elements[7],G.__data[10]=B.elements[8],G.__data[11]=0):(B.toArray(G.__data,ve),ve+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,le,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(N,L,D,F){const k=N.value,z=L+"_"+D;if(F[z]===void 0)return typeof k=="number"||typeof k=="boolean"?F[z]=k:F[z]=k.clone(),!0;{const q=F[z];if(typeof k=="number"||typeof k=="boolean"){if(q!==k)return F[z]=k,!0}else if(q.equals(k)===!1)return q.copy(k),!0}return!1}function T(N){const L=N.uniforms;let D=0;const F=16;for(let z=0,q=L.length;z<q;z++){const w=Array.isArray(L[z])?L[z]:[L[z]];for(let C=0,G=w.length;C<G;C++){const le=w[C],se=Array.isArray(le.value)?le.value:[le.value];for(let ve=0,de=se.length;ve<de;ve++){const B=se[ve],Z=R(B),Y=D%F,Ee=Y%Z.boundary,U=Y+Ee;D+=Ee,U!==0&&F-U<Z.storage&&(D+=F-U),le.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=D,D+=Z.storage}}}const k=D%F;return k>0&&(D+=F-k),N.__size=D,N.__cache={},this}function R(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function S(N){const L=N.target;L.removeEventListener("dispose",S);const D=d.indexOf(L.__bindingPointIndex);d.splice(D,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function _(){for(const N in l)s.deleteBuffer(l[N]);d=[],l={},u={}}return{bind:m,update:p,dispose:_}}class $1{constructor(e={}){const{canvas:i=PM(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const T=new Uint32Array(4),R=new Int32Array(4);let S=null,_=null;const N=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let F=!1;this._outputColorSpace=si;let k=0,z=0,q=null,w=-1,C=null;const G=new en,le=new en;let se=null;const ve=new wt(0);let de=0,B=i.width,Z=i.height,Y=1,Ee=null,U=null;const $=new en(0,0,B,Z),xe=new en(0,0,B,Z);let ye=!1;const Q=new r0;let me=!1,Me=!1;const Re=new sn,we=new sn,lt=new re,Je=new en,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function gt(){return q===null?Y:1}let I=r;function xn(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Rh}`),i.addEventListener("webglcontextlost",Ie,!1),i.addEventListener("webglcontextrestored",Ae,!1),i.addEventListener("webglcontextcreationerror",_e,!1),I===null){const W="webgl2";if(I=xn(W,A),I===null)throw xn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Mt,ht,ke,_t,Ze,rt,Qt,O,E,ee,ce,he,oe,Be,Ue,Ve,Xe,Se,ze,Ye,je,Ce,at,V;function Le(){Mt=new uA(I),Mt.init(),Ce=new W1(I,Mt),ht=new nA(I,Mt,e,Ce),ke=new k1(I,Mt),ht.reverseDepthBuffer&&x&&ke.buffers.depth.setReversed(!0),_t=new dA(I),Ze=new D1,rt=new X1(I,Mt,ke,Ze,ht,Ce,_t),Qt=new aA(D),O=new lA(D),E=new vE(I),at=new eA(I,E),ee=new cA(I,E,_t,at),ce=new pA(I,ee,E,_t),ze=new hA(I,ht,rt),Ve=new iA(Ze),he=new w1(D,Qt,O,Mt,ht,at,Ve),oe=new Q1(D,Ze),Be=new L1,Ue=new I1(Mt),Se=new $b(D,Qt,O,ke,ce,M,m),Xe=new G1(D,ce,ht),V=new J1(I,_t,ht,ke),Ye=new tA(I,Mt,_t),je=new fA(I,Mt,_t),_t.programs=he.programs,D.capabilities=ht,D.extensions=Mt,D.properties=Ze,D.renderLists=Be,D.shadowMap=Xe,D.state=ke,D.info=_t}Le();const Te=new Z1(D,I);this.xr=Te,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=Mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(B,Z,!1))},this.getSize=function(A){return A.set(B,Z)},this.setSize=function(A,W,ie=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,Z=W,i.width=Math.floor(A*Y),i.height=Math.floor(W*Y),ie===!0&&(i.style.width=A+"px",i.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(B*Y,Z*Y).floor()},this.setDrawingBufferSize=function(A,W,ie){B=A,Z=W,Y=ie,i.width=Math.floor(A*ie),i.height=Math.floor(W*ie),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,W,ie,ae){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,W,ie,ae),ke.viewport(G.copy($).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(xe)},this.setScissor=function(A,W,ie,ae){A.isVector4?xe.set(A.x,A.y,A.z,A.w):xe.set(A,W,ie,ae),ke.scissor(le.copy(xe).multiplyScalar(Y).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(A){ke.setScissorTest(ye=A)},this.setOpaqueSort=function(A){Ee=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,ie=!0){let ae=0;if(A){let j=!1;if(q!==null){const be=q.texture.format;j=be===Nh||be===Lh||be===Uh}if(j){const be=q.texture.type,De=be===sa||be===br||be===Po||be===Bo||be===wh||be===Dh,Pe=Se.getClearColor(),Fe=Se.getClearAlpha(),et=Pe.r,Ke=Pe.g,We=Pe.b;De?(T[0]=et,T[1]=Ke,T[2]=We,T[3]=Fe,I.clearBufferuiv(I.COLOR,0,T)):(R[0]=et,R[1]=Ke,R[2]=We,R[3]=Fe,I.clearBufferiv(I.COLOR,0,R))}else ae|=I.COLOR_BUFFER_BIT}W&&(ae|=I.DEPTH_BUFFER_BIT),ie&&(ae|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ie,!1),i.removeEventListener("webglcontextrestored",Ae,!1),i.removeEventListener("webglcontextcreationerror",_e,!1),Se.dispose(),Be.dispose(),Ue.dispose(),Ze.dispose(),Qt.dispose(),O.dispose(),ce.dispose(),at.dispose(),V.dispose(),he.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",on),Te.removeEventListener("sessionend",Sn),Nn.stop()};function Ie(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const A=_t.autoReset,W=Xe.enabled,ie=Xe.autoUpdate,ae=Xe.needsUpdate,j=Xe.type;Le(),_t.autoReset=A,Xe.enabled=W,Xe.autoUpdate=ie,Xe.needsUpdate=ae,Xe.type=j}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function He(A){const W=A.target;W.removeEventListener("dispose",He),it(W)}function it(A){Dt(A),Ze.remove(A)}function Dt(A){const W=Ze.get(A).programs;W!==void 0&&(W.forEach(function(ie){he.releaseProgram(ie)}),A.isShaderMaterial&&he.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,ie,ae,j,be){W===null&&(W=Nt);const De=j.isMesh&&j.matrixWorld.determinant()<0,Pe=Za(A,W,ie,ae,j);ke.setMaterial(ae,De);let Fe=ie.index,et=1;if(ae.wireframe===!0){if(Fe=ee.getWireframeAttribute(ie),Fe===void 0)return;et=2}const Ke=ie.drawRange,We=ie.attributes.position;let ct=Ke.start*et,Rt=(Ke.start+Ke.count)*et;be!==null&&(ct=Math.max(ct,be.start*et),Rt=Math.min(Rt,(be.start+be.count)*et)),Fe!==null?(ct=Math.max(ct,0),Rt=Math.min(Rt,Fe.count)):We!=null&&(ct=Math.max(ct,0),Rt=Math.min(Rt,We.count));const Vt=Rt-ct;if(Vt<0||Vt===1/0)return;at.setup(j,ae,Pe,ie,Fe);let vt,xt=Ye;if(Fe!==null&&(vt=E.get(Fe),xt=je,xt.setIndex(vt)),j.isMesh)ae.wireframe===!0?(ke.setLineWidth(ae.wireframeLinewidth*gt()),xt.setMode(I.LINES)):xt.setMode(I.TRIANGLES);else if(j.isLine){let Qe=ae.linewidth;Qe===void 0&&(Qe=1),ke.setLineWidth(Qe*gt()),j.isLineSegments?xt.setMode(I.LINES):j.isLineLoop?xt.setMode(I.LINE_LOOP):xt.setMode(I.LINE_STRIP)}else j.isPoints?xt.setMode(I.POINTS):j.isSprite&&xt.setMode(I.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))xt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Qe=j._multiDrawStarts,jt=j._multiDrawCounts,Et=j._multiDrawCount,bn=Fe?E.get(Fe).bytesPerElement:1,ha=Ze.get(ae).currentProgram.getUniforms();for(let kt=0;kt<Et;kt++)ha.setValue(I,"_gl_DrawID",kt),xt.render(Qe[kt]/bn,jt[kt])}else if(j.isInstancedMesh)xt.renderInstances(ct,Vt,j.count);else if(ie.isInstancedBufferGeometry){const Qe=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,jt=Math.min(ie.instanceCount,Qe);xt.renderInstances(ct,Vt,jt)}else xt.render(ct,Vt)};function Tt(A,W,ie){A.transparent===!0&&A.side===ea&&A.forceSinglePass===!1?(A.side=Fn,A.needsUpdate=!0,fa(A,W,ie),A.side=Wa,A.needsUpdate=!0,fa(A,W,ie),A.side=ea):fa(A,W,ie)}this.compile=function(A,W,ie=null){ie===null&&(ie=A),_=Ue.get(ie),_.init(W),L.push(_),ie.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),A!==ie&&A.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const ae=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const be=j.material;if(be)if(Array.isArray(be))for(let De=0;De<be.length;De++){const Pe=be[De];Tt(Pe,ie,j),ae.add(Pe)}else Tt(be,ie,j),ae.add(be)}),_=L.pop(),ae},this.compileAsync=function(A,W,ie=null){const ae=this.compile(A,W,ie);return new Promise(j=>{function be(){if(ae.forEach(function(De){Ze.get(De).currentProgram.isReady()&&ae.delete(De)}),ae.size===0){j(A);return}setTimeout(be,10)}Mt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Gn=null;function hn(A){Gn&&Gn(A)}function on(){Nn.stop()}function Sn(){Nn.start()}const Nn=new o0;Nn.setAnimationLoop(hn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(A){Gn=A,Te.setAnimationLoop(A),A===null?Nn.stop():Nn.start()},Te.addEventListener("sessionstart",on),Te.addEventListener("sessionend",Sn),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(W),W=Te.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,W,q),_=Ue.get(A,L.length),_.init(W),L.push(_),we.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Q.setFromProjectionMatrix(we),Me=this.localClippingEnabled,me=Ve.init(this.clippingPlanes,Me),S=Be.get(A,N.length),S.init(),N.push(S),Te.enabled===!0&&Te.isPresenting===!0){const be=D.xr.getDepthSensingMesh();be!==null&&Ya(be,W,-1/0,D.sortObjects)}Ya(A,W,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(Ee,U),It=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,It&&Se.addToRenderList(S,A),this.info.render.frame++,me===!0&&Ve.beginShadows();const ie=_.state.shadowsArray;Xe.render(ie,A,W),me===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=S.opaque,j=S.transmissive;if(_.setupLights(),W.isArrayCamera){const be=W.cameras;if(j.length>0)for(let De=0,Pe=be.length;De<Pe;De++){const Fe=be[De];Zo(ae,j,A,Fe)}It&&Se.render(A);for(let De=0,Pe=be.length;De<Pe;De++){const Fe=be[De];jo(S,A,Fe,Fe.viewport)}}else j.length>0&&Zo(ae,j,A,W),It&&Se.render(A),jo(S,A,W);q!==null&&z===0&&(rt.updateMultisampleRenderTarget(q),rt.updateRenderTargetMipmap(q)),A.isScene===!0&&A.onAfterRender(D,A,W),at.resetDefaultState(),w=-1,C=null,L.pop(),L.length>0?(_=L[L.length-1],me===!0&&Ve.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,N.pop(),N.length>0?S=N[N.length-1]:S=null};function Ya(A,W,ie,ae){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){ae&&Je.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);const De=ce.update(A),Pe=A.material;Pe.visible&&S.push(A,De,Pe,ie,Je.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const De=ce.update(A),Pe=A.material;if(ae&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Je.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Je.copy(De.boundingSphere.center)),Je.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(Pe)){const Fe=De.groups;for(let et=0,Ke=Fe.length;et<Ke;et++){const We=Fe[et],ct=Pe[We.materialIndex];ct&&ct.visible&&S.push(A,De,ct,ie,Je.z,We)}}else Pe.visible&&S.push(A,De,Pe,ie,Je.z,null)}}const be=A.children;for(let De=0,Pe=be.length;De<Pe;De++)Ya(be[De],W,ie,ae)}function jo(A,W,ie,ae){const j=A.opaque,be=A.transmissive,De=A.transparent;_.setupLightsView(ie),me===!0&&Ve.setGlobalState(D.clippingPlanes,ie),ae&&ke.viewport(G.copy(ae)),j.length>0&&ja(j,W,ie),be.length>0&&ja(be,W,ie),De.length>0&&ja(De,W,ie),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Zo(A,W,ie,ae){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ae.id]===void 0&&(_.state.transmissionRenderTarget[ae.id]=new Ar(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float")?Vo:sa,minFilter:Er,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const be=_.state.transmissionRenderTarget[ae.id],De=ae.viewport||G;be.setSize(De.z*D.transmissionResolutionScale,De.w*D.transmissionResolutionScale);const Pe=D.getRenderTarget();D.setRenderTarget(be),D.getClearColor(ve),de=D.getClearAlpha(),de<1&&D.setClearColor(16777215,.5),D.clear(),It&&Se.render(ie);const Fe=D.toneMapping;D.toneMapping=Xa;const et=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),_.setupLightsView(ae),me===!0&&Ve.setGlobalState(D.clippingPlanes,ae),ja(A,ie,ae),rt.updateMultisampleRenderTarget(be),rt.updateRenderTargetMipmap(be),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let We=0,ct=W.length;We<ct;We++){const Rt=W[We],Vt=Rt.object,vt=Rt.geometry,xt=Rt.material,Qe=Rt.group;if(xt.side===ea&&Vt.layers.test(ae.layers)){const jt=xt.side;xt.side=Fn,xt.needsUpdate=!0,ca(Vt,ie,ae,vt,xt,Qe),xt.side=jt,xt.needsUpdate=!0,Ke=!0}}Ke===!0&&(rt.updateMultisampleRenderTarget(be),rt.updateRenderTargetMipmap(be))}D.setRenderTarget(Pe),D.setClearColor(ve,de),et!==void 0&&(ae.viewport=et),D.toneMapping=Fe}function ja(A,W,ie){const ae=W.isScene===!0?W.overrideMaterial:null;for(let j=0,be=A.length;j<be;j++){const De=A[j],Pe=De.object,Fe=De.geometry,et=De.group;let Ke=De.material;Ke.allowOverride===!0&&ae!==null&&(Ke=ae),Pe.layers.test(ie.layers)&&ca(Pe,W,ie,Fe,Ke,et)}}function ca(A,W,ie,ae,j,be){A.onBeforeRender(D,W,ie,ae,j,be),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(D,W,ie,ae,A,be),j.transparent===!0&&j.side===ea&&j.forceSinglePass===!1?(j.side=Fn,j.needsUpdate=!0,D.renderBufferDirect(ie,W,ae,j,A,be),j.side=Wa,j.needsUpdate=!0,D.renderBufferDirect(ie,W,ae,j,A,be),j.side=ea):D.renderBufferDirect(ie,W,ae,j,A,be),A.onAfterRender(D,W,ie,ae,j,be)}function fa(A,W,ie){W.isScene!==!0&&(W=Nt);const ae=Ze.get(A),j=_.state.lights,be=_.state.shadowsArray,De=j.state.version,Pe=he.getParameters(A,j.state,be,W,ie),Fe=he.getProgramCacheKey(Pe);let et=ae.programs;ae.environment=A.isMeshStandardMaterial?W.environment:null,ae.fog=W.fog,ae.envMap=(A.isMeshStandardMaterial?O:Qt).get(A.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",He),et=new Map,ae.programs=et);let Ke=et.get(Fe);if(Ke!==void 0){if(ae.currentProgram===Ke&&ae.lightsStateVersion===De)return Di(A,Pe),Ke}else Pe.uniforms=he.getUniforms(A),A.onBeforeCompile(Pe,D),Ke=he.acquireProgram(Pe,Fe),et.set(Fe,Ke),ae.uniforms=Pe.uniforms;const We=ae.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=Ve.uniform),Di(A,Pe),ae.needsLights=tn(A),ae.lightsStateVersion=De,ae.needsLights&&(We.ambientLightColor.value=j.state.ambient,We.lightProbe.value=j.state.probe,We.directionalLights.value=j.state.directional,We.directionalLightShadows.value=j.state.directionalShadow,We.spotLights.value=j.state.spot,We.spotLightShadows.value=j.state.spotShadow,We.rectAreaLights.value=j.state.rectArea,We.ltc_1.value=j.state.rectAreaLTC1,We.ltc_2.value=j.state.rectAreaLTC2,We.pointLights.value=j.state.point,We.pointLightShadows.value=j.state.pointShadow,We.hemisphereLights.value=j.state.hemi,We.directionalShadowMap.value=j.state.directionalShadowMap,We.directionalShadowMatrix.value=j.state.directionalShadowMatrix,We.spotShadowMap.value=j.state.spotShadowMap,We.spotLightMatrix.value=j.state.spotLightMatrix,We.spotLightMap.value=j.state.spotLightMap,We.pointShadowMap.value=j.state.pointShadowMap,We.pointShadowMatrix.value=j.state.pointShadowMatrix),ae.currentProgram=Ke,ae.uniformsList=null,Ke}function wi(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Ou.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Di(A,W){const ie=Ze.get(A);ie.outputColorSpace=W.outputColorSpace,ie.batching=W.batching,ie.batchingColor=W.batchingColor,ie.instancing=W.instancing,ie.instancingColor=W.instancingColor,ie.instancingMorph=W.instancingMorph,ie.skinning=W.skinning,ie.morphTargets=W.morphTargets,ie.morphNormals=W.morphNormals,ie.morphColors=W.morphColors,ie.morphTargetsCount=W.morphTargetsCount,ie.numClippingPlanes=W.numClippingPlanes,ie.numIntersection=W.numClipIntersection,ie.vertexAlphas=W.vertexAlphas,ie.vertexTangents=W.vertexTangents,ie.toneMapping=W.toneMapping}function Za(A,W,ie,ae,j){W.isScene!==!0&&(W=Nt),rt.resetTextureUnits();const be=W.fog,De=ae.isMeshStandardMaterial?W.environment:null,Pe=q===null?D.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:As,Fe=(ae.isMeshStandardMaterial?O:Qt).get(ae.envMap||De),et=ae.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Ke=!!ie.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),We=!!ie.morphAttributes.position,ct=!!ie.morphAttributes.normal,Rt=!!ie.morphAttributes.color;let Vt=Xa;ae.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Vt=D.toneMapping);const vt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,xt=vt!==void 0?vt.length:0,Qe=Ze.get(ae),jt=_.state.lights;if(me===!0&&(Me===!0||A!==C)){const pn=A===C&&ae.id===w;Ve.setState(ae,A,pn)}let Et=!1;ae.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==jt.state.version||Qe.outputColorSpace!==Pe||j.isBatchedMesh&&Qe.batching===!1||!j.isBatchedMesh&&Qe.batching===!0||j.isBatchedMesh&&Qe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Qe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Qe.instancing===!1||!j.isInstancedMesh&&Qe.instancing===!0||j.isSkinnedMesh&&Qe.skinning===!1||!j.isSkinnedMesh&&Qe.skinning===!0||j.isInstancedMesh&&Qe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Qe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Qe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Qe.instancingMorph===!1&&j.morphTexture!==null||Qe.envMap!==Fe||ae.fog===!0&&Qe.fog!==be||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ve.numPlanes||Qe.numIntersection!==Ve.numIntersection)||Qe.vertexAlphas!==et||Qe.vertexTangents!==Ke||Qe.morphTargets!==We||Qe.morphNormals!==ct||Qe.morphColors!==Rt||Qe.toneMapping!==Vt||Qe.morphTargetsCount!==xt)&&(Et=!0):(Et=!0,Qe.__version=ae.version);let bn=Qe.currentProgram;Et===!0&&(bn=fa(ae,W,j));let ha=!1,kt=!1,Li=!1;const Ft=bn.getUniforms(),An=Qe.uniforms;if(ke.useProgram(bn.program)&&(ha=!0,kt=!0,Li=!0),ae.id!==w&&(w=ae.id,kt=!0),ha||C!==A){ke.buffers.depth.getReversed()?(Re.copy(A.projectionMatrix),zM(Re),IM(Re),Ft.setValue(I,"projectionMatrix",Re)):Ft.setValue(I,"projectionMatrix",A.projectionMatrix),Ft.setValue(I,"viewMatrix",A.matrixWorldInverse);const yn=Ft.map.cameraPosition;yn!==void 0&&yn.setValue(I,lt.setFromMatrixPosition(A.matrixWorld)),ht.logarithmicDepthBuffer&&Ft.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ft.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,kt=!0,Li=!0)}if(j.isSkinnedMesh){Ft.setOptional(I,j,"bindMatrix"),Ft.setOptional(I,j,"bindMatrixInverse");const pn=j.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Ft.setValue(I,"boneTexture",pn.boneTexture,rt))}j.isBatchedMesh&&(Ft.setOptional(I,j,"batchingTexture"),Ft.setValue(I,"batchingTexture",j._matricesTexture,rt),Ft.setOptional(I,j,"batchingIdTexture"),Ft.setValue(I,"batchingIdTexture",j._indirectTexture,rt),Ft.setOptional(I,j,"batchingColorTexture"),j._colorsTexture!==null&&Ft.setValue(I,"batchingColorTexture",j._colorsTexture,rt));const ln=ie.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&ze.update(j,ie,bn),(kt||Qe.receiveShadow!==j.receiveShadow)&&(Qe.receiveShadow=j.receiveShadow,Ft.setValue(I,"receiveShadow",j.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(An.envMap.value=Fe,An.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&W.environment!==null&&(An.envMapIntensity.value=W.environmentIntensity),kt&&(Ft.setValue(I,"toneMappingExposure",D.toneMappingExposure),Qe.needsLights&&da(An,Li),be&&ae.fog===!0&&oe.refreshFogUniforms(An,be),oe.refreshMaterialUniforms(An,ae,Y,Z,_.state.transmissionRenderTarget[A.id]),Ou.upload(I,wi(Qe),An,rt)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Ou.upload(I,wi(Qe),An,rt),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ft.setValue(I,"center",j.center),Ft.setValue(I,"modelViewMatrix",j.modelViewMatrix),Ft.setValue(I,"normalMatrix",j.normalMatrix),Ft.setValue(I,"modelMatrix",j.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const pn=ae.uniformsGroups;for(let yn=0,_i=pn.length;yn<_i;yn++){const Ni=pn[yn];V.update(Ni,bn),V.bind(Ni,bn)}}return bn}function da(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function tn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,W,ie){const ae=Ze.get(A);ae.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),Ze.get(A.texture).__webglTexture=W,Ze.get(A.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ie,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const ie=Ze.get(A);ie.__webglFramebuffer=W,ie.__useDefaultFramebuffer=W===void 0};const Ko=I.createFramebuffer();this.setRenderTarget=function(A,W=0,ie=0){q=A,k=W,z=ie;let ae=!0,j=null,be=!1,De=!1;if(A){const Fe=Ze.get(A);if(Fe.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(I.FRAMEBUFFER,null),ae=!1;else if(Fe.__webglFramebuffer===void 0)rt.setupRenderTarget(A);else if(Fe.__hasExternalTextures)rt.rebindTextures(A,Ze.get(A.texture).__webglTexture,Ze.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const We=A.depthTexture;if(Fe.__boundDepthTexture!==We){if(We!==null&&Ze.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(A)}}const et=A.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(De=!0);const Ke=Ze.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ke[W])?j=Ke[W][ie]:j=Ke[W],be=!0):A.samples>0&&rt.useMultisampledRTT(A)===!1?j=Ze.get(A).__webglMultisampledFramebuffer:Array.isArray(Ke)?j=Ke[ie]:j=Ke,G.copy(A.viewport),le.copy(A.scissor),se=A.scissorTest}else G.copy($).multiplyScalar(Y).floor(),le.copy(xe).multiplyScalar(Y).floor(),se=ye;if(ie!==0&&(j=Ko),ke.bindFramebuffer(I.FRAMEBUFFER,j)&&ae&&ke.drawBuffers(A,j),ke.viewport(G),ke.scissor(le),ke.setScissorTest(se),be){const Fe=Ze.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,Fe.__webglTexture,ie)}else if(De){const Fe=Ze.get(A.texture),et=W;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fe.__webglTexture,ie,et)}else if(A!==null&&ie!==0){const Fe=Ze.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Fe.__webglTexture,ie)}w=-1},this.readRenderTargetPixels=function(A,W,ie,ae,j,be,De,Pe=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe){ke.bindFramebuffer(I.FRAMEBUFFER,Fe);try{const et=A.textures[Pe],Ke=et.format,We=et.type;if(!ht.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-ae&&ie>=0&&ie<=A.height-j&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Pe),I.readPixels(W,ie,ae,j,Ce.convert(Ke),Ce.convert(We),be))}finally{const et=q!==null?Ze.get(q).__webglFramebuffer:null;ke.bindFramebuffer(I.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(A,W,ie,ae,j,be,De,Pe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe)if(W>=0&&W<=A.width-ae&&ie>=0&&ie<=A.height-j){ke.bindFramebuffer(I.FRAMEBUFFER,Fe);const et=A.textures[Pe],Ke=et.format,We=et.type;if(!ht.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ct),I.bufferData(I.PIXEL_PACK_BUFFER,be.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Pe),I.readPixels(W,ie,ae,j,Ce.convert(Ke),Ce.convert(We),0);const Rt=q!==null?Ze.get(q).__webglFramebuffer:null;ke.bindFramebuffer(I.FRAMEBUFFER,Rt);const Vt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await BM(I,Vt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ct),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,be),I.deleteBuffer(ct),I.deleteSync(Vt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,ie=0){const ae=Math.pow(2,-ie),j=Math.floor(A.image.width*ae),be=Math.floor(A.image.height*ae),De=W!==null?W.x:0,Pe=W!==null?W.y:0;rt.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,ie,0,0,De,Pe,j,be),ke.unbindTexture()};const Qo=I.createFramebuffer(),Ui=I.createFramebuffer();this.copyTextureToTexture=function(A,W,ie=null,ae=null,j=0,be=null){be===null&&(j!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=j,j=0):be=0);let De,Pe,Fe,et,Ke,We,ct,Rt,Vt;const vt=A.isCompressedTexture?A.mipmaps[be]:A.image;if(ie!==null)De=ie.max.x-ie.min.x,Pe=ie.max.y-ie.min.y,Fe=ie.isBox3?ie.max.z-ie.min.z:1,et=ie.min.x,Ke=ie.min.y,We=ie.isBox3?ie.min.z:0;else{const ln=Math.pow(2,-j);De=Math.floor(vt.width*ln),Pe=Math.floor(vt.height*ln),A.isDataArrayTexture?Fe=vt.depth:A.isData3DTexture?Fe=Math.floor(vt.depth*ln):Fe=1,et=0,Ke=0,We=0}ae!==null?(ct=ae.x,Rt=ae.y,Vt=ae.z):(ct=0,Rt=0,Vt=0);const xt=Ce.convert(W.format),Qe=Ce.convert(W.type);let jt;W.isData3DTexture?(rt.setTexture3D(W,0),jt=I.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(rt.setTexture2DArray(W,0),jt=I.TEXTURE_2D_ARRAY):(rt.setTexture2D(W,0),jt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const Et=I.getParameter(I.UNPACK_ROW_LENGTH),bn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ha=I.getParameter(I.UNPACK_SKIP_PIXELS),kt=I.getParameter(I.UNPACK_SKIP_ROWS),Li=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,vt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,et),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ke),I.pixelStorei(I.UNPACK_SKIP_IMAGES,We);const Ft=A.isDataArrayTexture||A.isData3DTexture,An=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const ln=Ze.get(A),pn=Ze.get(W),yn=Ze.get(ln.__renderTarget),_i=Ze.get(pn.__renderTarget);ke.bindFramebuffer(I.READ_FRAMEBUFFER,yn.__webglFramebuffer),ke.bindFramebuffer(I.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let Ni=0;Ni<Fe;Ni++)Ft&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ze.get(A).__webglTexture,j,We+Ni),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ze.get(W).__webglTexture,be,Vt+Ni)),I.blitFramebuffer(et,Ke,De,Pe,ct,Rt,De,Pe,I.DEPTH_BUFFER_BIT,I.NEAREST);ke.bindFramebuffer(I.READ_FRAMEBUFFER,null),ke.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||Ze.has(A)){const ln=Ze.get(A),pn=Ze.get(W);ke.bindFramebuffer(I.READ_FRAMEBUFFER,Qo),ke.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ui);for(let yn=0;yn<Fe;yn++)Ft?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ln.__webglTexture,j,We+yn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ln.__webglTexture,j),An?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,pn.__webglTexture,be,Vt+yn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pn.__webglTexture,be),j!==0?I.blitFramebuffer(et,Ke,De,Pe,ct,Rt,De,Pe,I.COLOR_BUFFER_BIT,I.NEAREST):An?I.copyTexSubImage3D(jt,be,ct,Rt,Vt+yn,et,Ke,De,Pe):I.copyTexSubImage2D(jt,be,ct,Rt,et,Ke,De,Pe);ke.bindFramebuffer(I.READ_FRAMEBUFFER,null),ke.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else An?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(jt,be,ct,Rt,Vt,De,Pe,Fe,xt,Qe,vt.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(jt,be,ct,Rt,Vt,De,Pe,Fe,xt,vt.data):I.texSubImage3D(jt,be,ct,Rt,Vt,De,Pe,Fe,xt,Qe,vt):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,be,ct,Rt,De,Pe,xt,Qe,vt.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,be,ct,Rt,vt.width,vt.height,xt,vt.data):I.texSubImage2D(I.TEXTURE_2D,be,ct,Rt,De,Pe,xt,Qe,vt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Et),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,bn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ha),I.pixelStorei(I.UNPACK_SKIP_ROWS,kt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Li),be===0&&W.generateMipmaps&&I.generateMipmap(jt),ke.unbindTexture()},this.copyTextureToTexture3D=function(A,W,ie=null,ae=null,j=0){return ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,ie,ae,j)},this.initRenderTarget=function(A){Ze.get(A).__webglFramebuffer===void 0&&rt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?rt.setTextureCube(A,0):A.isData3DTexture?rt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?rt.setTexture2DArray(A,0):rt.setTexture2D(A,0),ke.unbindTexture()},this.resetState=function(){k=0,z=0,q=null,ke.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),i.unpackColorSpace=At._getUnpackColorSpace()}}function eR(){const s=Cv(),e=()=>{s("/MainPage")};return Oe.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-10",children:Oe.jsxs("div",{className:"bg-black/60 rounded-3xl px-10 py-12 shadow-2xl backdrop-blur-md text-center",children:[Oe.jsx("h1",{className:"text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-wide drop-shadow-lg",children:"Bienvenue sur mon Portfolio"}),Oe.jsx("p",{className:"text-lg md:text-xl text-white mb-8 font-medium drop-shadow",children:"Découvrez mon profil"}),Oe.jsx("button",{className:"bg-gradient-to-r from-black to-purple-700 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:scale-105 hover:shadow-pink-400 transition-all duration-200",onClick:e,children:"Voir mon portfolio"})]})})}function tR(){const s=pe.useRef(null),e=pe.useRef([]);return pe.useEffect(()=>{const i=s.current,r=i.getContext("2d");let l=window.innerWidth,u=window.innerHeight;i.width=l,i.height=u;const d=()=>{l=window.innerWidth,u=window.innerHeight,i.width=l,i.height=u};window.addEventListener("resize",d);const h=g=>{e.current.push({x:g.clientX,y:g.clientY}),e.current.length>20&&e.current.shift()};window.addEventListener("mousemove",h);let m;const p=()=>{r.clearRect(0,0,l,u);for(let g=0;g<e.current.length;g++){const v=e.current[g];r.beginPath(),r.arc(v.x,v.y,16-g*.7,0,Math.PI*2),r.fillStyle=`rgba(109,40,217,${(1-g/e.current.length)*.7})`,r.shadowColor="#6d28d9",r.shadowBlur=8,r.fill()}m=requestAnimationFrame(p)};return p(),()=>{cancelAnimationFrame(m),window.removeEventListener("mousemove",h),window.removeEventListener("resize",d)}},[]),Oe.jsx("canvas",{ref:s,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",pointerEvents:"none",zIndex:20}})}const nR=[{titre:"Baccalauréat général",etablissement:"Lycée Clément Ader",annee:"2023",description:"Spécialité HGGSP(histoire-géographie-géopolitique-science politique), SES (sciences économiques et sociales)."},{titre:"L1 STAPS (LAS)",etablissement:"Université Sorbonne Paris Nord (IUT Bobigny)",annee:"2023 - 2024",description:"Sciences et Techniques des Activités Physiques et Sportives, Licence Accès Santé."},{titre:"Brevet de Technicien Supérieur (BTS) SIO-SLAM",etablissement:"IPSSI (Campus de Marne-la-Vallée)",annee:"2024 - 2026 (en cours d'obtention)",description:"Service Informatique aux Organisations, option Solutions Logicielles et Applications Métiers."},{titre:"Développeur stagiaire",etablissement:"Saint-Maur-Des-Fossés",annee:"28 avril 2025 - 25 juin 2025",description:"Développement d'un prototype de CRM pour courtier en prêt immobilier"}];function iR({darkMode:s}){return Oe.jsxs("section",{id:"parcours",className:"max-w-4xl mx-auto mb-32 px-4",children:[Oe.jsx("h2",{className:`text-3xl font-bold mb-8 text-center ${s?"text-white":"text-black"}`,children:"Mon Parcours Scolaire"}),Oe.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:nR.map((e,i)=>Oe.jsxs("div",{className:"bg-gradient-to-br from-black/80 to-purple-900/80 rounded-2xl shadow-xl p-6 text-white flex flex-col items-start hover:scale-105 transition-transform duration-200",children:[Oe.jsx("h3",{className:"text-xl font-semibold mb-2",children:e.titre}),Oe.jsx("div",{className:"text-purple-300 font-medium mb-1",children:e.etablissement}),Oe.jsx("div",{className:"text-sm text-purple-400 mb-2",children:e.annee}),Oe.jsx("p",{className:"text-sm",children:e.description})]},i))})]})}const aR=[{title:"JavaScript",description:"Langage de programmation pour le web, utilisé pour créer des applications interactives."},{title:"React",description:"Bibliothèque JavaScript pour construire des interfaces utilisateur modernes et dynamiques."},{title:"Java",description:"Langage de programmation orienté objet, utilisé pour développer des applications robustes et évolutives."},{title:"HTML & CSS",description:"Langages de balisage et de style utilisés pour créer des pages web et des interfaces utilisateur."},{title:"Tailwind CSS",description:"Framework CSS utilitaire pour créer des designs modernes et réactifs rapidement."},{title:"PHP",description:"Langage de script côté serveur, utilisé pour développer des applications web dynamiques."},{title:"MySQL",description:"Système de gestion de base de données relationnelle, utilisé pour stocker et gérer des données."},{title:"Python",description:"Langage de programmation polyvalent, utilisé pour le développement web, l'analyse de données et l'intelligence artificielle."},{title:"FastAPI",description:"Framework web moderne pour Python, utilisé pour créer des API rapides et performantes."},{title:"Typescript",description:"Superset de JavaScript qui ajoute des types statiques, facilitant le développement d'applications robustes."},{title:"Three.js",description:"Bibliothèque JavaScript pour créer des graphiques 3D interactifs dans le navigateur. (Débutant)"},{title:"Git",description:"Système de contrôle de version distribué, utilisé pour suivre les modifications du code et collaborer efficacement."}];function rR({darkMode:s}){return Oe.jsxs("section",{id:"skills",className:"max-w-4xl mx-auto mb-32 px-4",children:[Oe.jsx("h2",{className:`text-3xl font-bold mb-8 text-center ${s?"text-white":"text-black"}`,children:"Mes Compétences"}),Oe.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:aR.map((e,i)=>Oe.jsxs("div",{className:"bg-gradient-to-br from-black/80 to-purple-900/80 rounded-2xl shadow-xl p-6 text-white flex flex-col items-start hover:scale-105 transition-transform duration-200",children:[Oe.jsx("h3",{className:"text-xl font-semibold mb-2",children:e.title}),Oe.jsx("p",{className:"text-sm",children:e.description})]},i))})]})}function sR(){return Oe.jsx("section",{id:"veille",className:"max-w-4xl mx-auto mb-32 px-4",children:Oe.jsxs("div",{className:"bg-gradient-to-br from-black/90 to-purple-900/80 rounded-3xl shadow-2xl p-10 text-white flex flex-col items-start min-h-[350px]",children:[Oe.jsx("h2",{className:"text-3xl font-bold mb-4 text-purple-300",children:"Veille technologique : Three.js"}),Oe.jsxs("p",{className:"mb-6 text-lg",children:[Oe.jsx("span",{className:"font-semibold text-purple-400",children:"Three.js"})," est une bibliothèque JavaScript qui permet de créer et d'afficher des graphiques 3D dans le navigateur grâce à WebGL."]}),Oe.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[Oe.jsxs("li",{children:[Oe.jsx("span",{className:"font-semibold text-purple-400",children:"Accessibilité :"})," Rend la 3D accessible aux développeurs web sans connaissances approfondies en WebGL."]}),Oe.jsxs("li",{children:[Oe.jsx("span",{className:"font-semibold text-purple-400",children:"Richesse :"})," Permet de créer des scènes, caméras, lumières, matériaux, animations et effets avancés."]}),Oe.jsxs("li",{children:[Oe.jsx("span",{className:"font-semibold text-purple-400",children:"Communauté :"})," Large communauté, nombreux exemples et ressources, documentation complète."]}),Oe.jsxs("li",{children:[Oe.jsx("span",{className:"font-semibold text-purple-400",children:"Cas d'usage :"})," Visualisations interactives, portfolios, jeux, expériences immersives, data visualisation."]})]}),Oe.jsx("div",{className:"mt-6",children:Oe.jsx("a",{href:"https://threejs.org/",target:"_blank",rel:"noopener noreferrer",className:"text-purple-300 underline hover:text-purple-100",children:"Découvrir la documentation officielle de Three.js"})})]})})}function oR(){return Oe.jsx("header",{className:"w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-black/80 to-purple-900/80 backdrop-blur-md shadow-lg overflow-x-hidden",children:Oe.jsx("nav",{className:"max-w-6xl mx-auto flex items-center justify-between px-6 py-4",children:Oe.jsx("span",{className:"text-2xl font-extrabold text-white tracking-wide",children:"Mon Portfolio"})})})}const lR=[{title:"Respire stats",description:"Application lourde codé en java et la framework java spring, permettant de classifier des données extraites d'un fichier Excel."},{title:"Bibliothèque",description:"Site vitrine d'une bibliothèque codé en php et possèdant une base de données Mysql."},{title:"Générateur de factures pdf",description:"Site permettant de générer un modèle de facture selon les informations entrez d'un utlisateur enregistrées en localStorage, codé en javascript."},{title:"CRM pour courtier en prêt immbobilier",description:"Première version du développement d'un crm permettant de gérer des utilisateurs ainsi que des demandes. la partie client a été codée avec les langages de programmation Typescript, et les frameworks React et TailwindCSS avec une architecture Vite. La partie serveur a été codée avec une base de donnée Mysql, et le langage de programmation Python et une de ses frameworks: FastAPI"}];function uR({darkMode:s}){return Oe.jsxs("section",{id:"projets",className:"max-w-5xl mx-auto mb-32 px-4",children:[Oe.jsx("h2",{className:`text-3xl font-bold mb-8 text-center ${s?"text-white":"text-black"}`,children:"Mes Projets"}),Oe.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:lR.map((e,i)=>Oe.jsxs("div",{className:"bg-gradient-to-br from-black/80 to-purple-900/80 rounded-2xl shadow-xl p-6 text-white flex flex-col items-start hover:scale-105 transition-transform duration-200",children:[Oe.jsx("h3",{className:"text-xl font-semibold mb-2",children:e.title}),Oe.jsx("p",{className:"text-sm mb-4",children:e.description})]},i))})]})}function cR({darkMode:s,setDarkMode:e}){return Oe.jsx("footer",{className:"w-full bg-gradient-to-r from-black/80 to-purple-900/80 py-8 mt-16",children:Oe.jsxs("div",{className:"max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4",children:[Oe.jsxs("div",{className:"text-white text-lg font-semibold",children:["© ",new Date().getFullYear()," Mon Portfoliot"]}),Oe.jsxs("div",{className:"flex gap-6 items-center",children:[Oe.jsx("button",{onClick:()=>e(i=>!i),className:"px-4 py-2 rounded-full bg-purple-700 text-white font-semibold shadow hover:bg-purple-500 transition",children:s?"Mode clair":"Mode nuit"}),Oe.jsx("a",{href:"/portfolio/Mon-cv-alternance.pdf",download:!0,className:"text-purple-300 hover:text-white transition-colors duration-200",children:"Mon CV"}),Oe.jsx("a",{href:"https://github.com/Matthieu77220",target:"_blank",rel:"noopener noreferrer",className:"text-purple-300 hover:text-white transition-colors duration-200",children:"GitHub"}),Oe.jsx("a",{href:"https://www.linkedin.com/in/matthieu-dietrich-1841a1309/",target:"_blank",rel:"noopener noreferrer",className:"text-purple-300 hover:text-white transition-colors duration-200",children:"LinkedIn"})]})]})})}const fR=()=>{const[s,e]=pe.useState(!1);return Oe.jsxs("div",{className:`relative z-10 min-h-screen flex flex-col ${s?"bg-black":"bg-white"}`,children:[Oe.jsx(oR,{}),Oe.jsxs("main",{className:"flex-1 pt-28",children:[Oe.jsx(iR,{darkMode:s}),Oe.jsx(rR,{darkMode:s}),Oe.jsx(sR,{darkMode:s}),Oe.jsx(uR,{darkMode:s}),Oe.jsx(cR,{darkMode:s,setDarkMode:e})]})]})};function dR(){const s=pe.useRef(null),i=qa().pathname==="/";return pe.useEffect(()=>{if(!i)return;const r=window.innerWidth,l=window.innerHeight,u=new $1({antialias:!0});u.setSize(r,l),u.setClearColor(1579035,1),s.current.appendChild(u.domElement);const d=new oi(75,r/l,.1,100);d.position.z=5;const h=new cE,m=new Yo(20,12,128,128),p=new la({uniforms:{uTime:{value:0},uColorA:{value:new wt("#18181b")},uColorB:{value:new wt("#6d28d9")}},vertexShader:`
        uniform float uTime;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 pos = position;
          float freq = 2.0;
          float amp = 0.07;
          pos.z += sin(pos.x * 4.0 + uTime * freq) * amp;
          pos.z += cos(pos.y * 6.0 + uTime * freq * 0.7) * amp * 0.7;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,fragmentShader:`
        varying vec2 vUv;
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        void main() {
          vec3 color = mix(uColorA, uColorB, vUv.y);
          gl_FragColor = vec4(color, 1.0);
        }
      `,transparent:!1}),g=new bi(m,p);h.add(g);let v;const x=()=>{p.uniforms.uTime.value+=.01,u.render(h,d),v=requestAnimationFrame(x)};x();const M=()=>{const T=window.innerWidth,R=window.innerHeight;u.setSize(T,R),d.aspect=T/R,d.updateProjectionMatrix()};return window.addEventListener("resize",M),()=>{cancelAnimationFrame(v),window.removeEventListener("resize",M),s.current&&u.domElement.parentNode===s.current&&s.current.removeChild(u.domElement),u.dispose()}},[i]),Oe.jsxs(Oe.Fragment,{children:[i&&Oe.jsx("div",{ref:s,style:{width:"100vw",height:"100vh",overflow:"hidden",margin:0,padding:0,position:"fixed",top:0,left:0,zIndex:0}}),i&&Oe.jsx(tR,{}),Oe.jsxs(hy,{children:[Oe.jsx(Ld,{path:"/",element:Oe.jsx(eR,{})}),Oe.jsx(Ld,{path:"/MainPage",element:Oe.jsx(fR,{})})]})]})}ES.createRoot(document.getElementById("root")).render(Oe.jsx(pe.StrictMode,{children:Oe.jsx(By,{basename:"/portfolio/",children:Oe.jsx(dR,{})})}));

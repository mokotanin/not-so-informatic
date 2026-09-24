var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function T(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!w.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function ee(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function E(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function D(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var O=/\/+/g;function k(e,t){return typeof e==`object`&&e&&e.key!=null?D(``+e.key):t.toString(36)}function A(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+k(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(O,`$&/`)+`/`),A(o,r,i,``,function(e){return e})):o!=null&&(E(o)&&(o=ee(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(O,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+k(s,l);c+=A(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+k(s,l++),c+=A(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function te(e,t,n){if(e==null)return e;var r=[],i=0;return A(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function j(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var M={current:null},N={transition:null},ne={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:N,ReactCurrentOwner:C};function re(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:te,forEach:function(e,t,n){te(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return te(e,function(){t++}),t},toArray:function(e){return te(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,e.act=re,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!w.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=T,e.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=E,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:j}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=N.transition;N.transition={};try{e()}finally{N.transition=t}},e.unstable_act=re,e.useCallback=function(e,t){return M.current.useCallback(e,t)},e.useContext=function(e){return M.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return M.current.useDeferredValue(e)},e.useEffect=function(e,t){return M.current.useEffect(e,t)},e.useId=function(){return M.current.useId()},e.useImperativeHandle=function(e,t,n){return M.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return M.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return M.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return M.current.useMemo(e,t)},e.useReducer=function(e,t,n){return M.current.useReducer(e,t,n)},e.useRef=function(e){return M.current.useRef(e)},e.useState=function(e){return M.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return M.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return M.current.useTransition()},e.version=`18.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m){if(n(c)!==null)m=!0,te(x);else{var t=n(l);t!==null&&j(b,t.startTime-e)}}}function x(t,i){m=!1,h&&(h=!1,_(w),w=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&j(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,w=-1,T=5,ee=-1;function E(){return!(e.unstable_now()-ee<T)}function D(){if(C!==null){var t=e.unstable_now();ee=t;var n=!0;try{n=C(!0,t)}finally{n?O():(S=!1,C=null)}}else S=!1}var O;if(typeof v==`function`)O=function(){v(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){g(D,0)};function te(e){C=e,S||(S=!0,O())}function j(t,n){w=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,te(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):T=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(w),w=-1):h=!0,j(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,te(x))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u(),n=f();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,l=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e){return l.call(m,e)?!0:l.call(p,e)?!1:d.test(e)?m[e]=!0:(p[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type!==3&&``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for(`react.element`),T=Symbol.for(`react.portal`),ee=Symbol.for(`react.fragment`),E=Symbol.for(`react.strict_mode`),D=Symbol.for(`react.profiler`),O=Symbol.for(`react.provider`),k=Symbol.for(`react.context`),A=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),j=Symbol.for(`react.suspense_list`),M=Symbol.for(`react.memo`),N=Symbol.for(`react.lazy`),ne=Symbol.for(`react.offscreen`),re=Symbol.iterator;function ie(e){return typeof e!=`object`||!e?null:(e=re&&e[re]||e[`@@iterator`],typeof e==`function`?e:null)}var P=Object.assign,ae;function oe(e){if(ae===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ae=t&&t[1]||``}return`
`+ae+e}var se=!1;function ce(e,t){if(!e||se)return``;se=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{se=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?oe(e):``}function le(e){switch(e.tag){case 5:return oe(e.type);case 16:return oe(`Lazy`);case 13:return oe(`Suspense`);case 19:return oe(`SuspenseList`);case 0:case 2:case 15:return e=ce(e.type,!1),e;case 11:return e=ce(e.type.render,!1),e;case 1:return e=ce(e.type,!0),e;default:return``}}function F(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case ee:return`Fragment`;case T:return`Portal`;case D:return`Profiler`;case E:return`StrictMode`;case te:return`Suspense`;case j:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case k:return(e.displayName||`Context`)+`.Consumer`;case O:return(e._context.displayName||`Context`)+`.Provider`;case A:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case M:return t=e.displayName||null,t===null?F(e.type)||`Memo`:t;case N:t=e._payload,e=e._init;try{return F(e(t))}catch{}}return null}function ue(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return F(t);case 8:return t===E?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function de(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function fe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function pe(e){var t=fe(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function me(e){e._valueTracker||=pe(e)}function he(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=fe(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function ge(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function _e(e,t){var n=t.checked;return P({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ve(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=de(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function ye(e,t){t=t.checked,t!=null&&S(e,`checked`,t,!1)}function be(e,t){ye(e,t);var n=de(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?Se(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&Se(e,t.type,de(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xe(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function Se(e,t,n){(t!==`number`||ge(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var Ce=Array.isArray;function we(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+de(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Te(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return P({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function Ee(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(Ce(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:de(n)}}function De(e,t){var n=de(t.value),r=de(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function Oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function ke(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function Ae(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?ke(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var je,Me=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(je||=document.createElement(`div`),je.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=je.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ne(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(Pe).forEach(function(e){Fe.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pe[t]=Pe[e]})});function Ie(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||Pe.hasOwnProperty(e)&&Pe[e]?(``+t).trim():t+`px`}function Le(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=Ie(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var Re=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ze(e,t){if(t){if(Re[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Be(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Ve=null;function He(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ue=null,We=null,Ge=null;function Ke(e){if(e=Ri(e)){if(typeof Ue!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Bi(t),Ue(e.stateNode,e.type,t))}}function qe(e){We?Ge?Ge.push(e):Ge=[e]:We=e}function Je(){if(We){var e=We,t=Ge;if(Ge=We=null,Ke(e),t)for(e=0;e<t.length;e++)Ke(t[e])}}function Ye(e,t){return e(t)}function Xe(){}var Ze=!1;function Qe(e,t,n){if(Ze)return e(t,n);Ze=!0;try{return Ye(e,t,n)}finally{Ze=!1,(We!==null||Ge!==null)&&(Xe(),Je())}}function $e(e,t){var n=e.stateNode;if(n===null)return null;var i=Bi(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var et=!1;if(c)try{var tt={};Object.defineProperty(tt,"passive",{get:function(){et=!0}}),window.addEventListener(`test`,tt,tt),window.removeEventListener(`test`,tt,tt)}catch{et=!1}function nt(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var rt=!1,it=null,at=!1,ot=null,st={onError:function(e){rt=!0,it=e}};function ct(e,t,n,r,i,a,o,s,c){rt=!1,it=null,nt.apply(st,arguments)}function lt(e,t,n,i,a,o,s,c,l){if(ct.apply(this,arguments),rt){if(rt){var u=it;rt=!1,it=null}else throw Error(r(198));at||(at=!0,ot=u)}}function ut(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function dt(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ft(e){if(ut(e)!==e)throw Error(r(188))}function pt(e){var t=e.alternate;if(!t){if(t=ut(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return ft(a),e;if(o===i)return ft(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function mt(e){return e=pt(e),e===null?null:ht(e)}function ht(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ht(e);if(t!==null)return t;e=e.sibling}return null}var gt=n.unstable_scheduleCallback,_t=n.unstable_cancelCallback,vt=n.unstable_shouldYield,yt=n.unstable_requestPaint,I=n.unstable_now,bt=n.unstable_getCurrentPriorityLevel,xt=n.unstable_ImmediatePriority,St=n.unstable_UserBlockingPriority,Ct=n.unstable_NormalPriority,wt=n.unstable_LowPriority,Tt=n.unstable_IdlePriority,Et=null,Dt=null;function Ot(e){if(Dt&&typeof Dt.onCommitFiberRoot==`function`)try{Dt.onCommitFiberRoot(Et,e,void 0,(e.current.flags&128)==128)}catch{}}var L=Math.clz32?Math.clz32:jt,kt=Math.log,At=Math.LN2;function jt(e){return e>>>=0,e===0?32:31-(kt(e)/At|0)|0}var Mt=64,Nt=4194304;function Pt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ft(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=Pt(a))):r=Pt(s)}else o=n&~i,o===0?a!==0&&(r=Pt(a)):r=Pt(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-L(t),i=1<<n,r|=e[n],t&=~i;return r}function It(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lt(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-L(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=It(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Rt(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function zt(){var e=Mt;return Mt<<=1,!(Mt&4194240)&&(Mt=64),e}function Bt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-L(t),e[t]=n}function Ht(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-L(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Ut(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-L(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var R=0;function Wt(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gt,Kt,qt,Jt,Yt,Xt=!1,Zt=[],Qt=null,$t=null,en=null,z=new Map,tn=new Map,B=[],nn=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function rn(e,t){switch(e){case`focusin`:case`focusout`:Qt=null;break;case`dragenter`:case`dragleave`:$t=null;break;case`mouseover`:case`mouseout`:en=null;break;case`pointerover`:case`pointerout`:z.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:tn.delete(t.pointerId)}}function an(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ri(t),t!==null&&Kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function on(e,t,n,r,i){switch(t){case`focusin`:return Qt=an(Qt,e,t,n,r,i),!0;case`dragenter`:return $t=an($t,e,t,n,r,i),!0;case`mouseover`:return en=an(en,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return z.set(a,an(z.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,tn.set(a,an(tn.get(a)||null,e,t,n,r,i)),!0}return!1}function sn(e){var t=Li(e.target);if(t!==null){var n=ut(t);if(n!==null){if(t=n.tag,t===13){if(t=dt(n),t!==null){e.blockedOn=t,Yt(e.priority,function(){qt(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ve=r,n.target.dispatchEvent(r),Ve=null}else return t=Ri(n),t!==null&&Kt(t),e.blockedOn=n,!1;t.shift()}return!0}function ln(e,t,n){cn(e)&&n.delete(t)}function un(){Xt=!1,Qt!==null&&cn(Qt)&&(Qt=null),$t!==null&&cn($t)&&($t=null),en!==null&&cn(en)&&(en=null),z.forEach(ln),tn.forEach(ln)}function dn(e,t){e.blockedOn===t&&(e.blockedOn=null,Xt||(Xt=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,un)))}function fn(e){function t(t){return dn(t,e)}if(0<Zt.length){dn(Zt[0],e);for(var n=1;n<Zt.length;n++){var r=Zt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Qt!==null&&dn(Qt,e),$t!==null&&dn($t,e),en!==null&&dn(en,e),z.forEach(t),tn.forEach(t),n=0;n<B.length;n++)r=B[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<B.length&&(n=B[0],n.blockedOn===null);)sn(n),n.blockedOn===null&&B.shift()}var pn=C.ReactCurrentBatchConfig,mn=!0;function hn(e,t,n,r){var i=R,a=pn.transition;pn.transition=null;try{R=1,_n(e,t,n,r)}finally{R=i,pn.transition=a}}function gn(e,t,n,r){var i=R,a=pn.transition;pn.transition=null;try{R=4,_n(e,t,n,r)}finally{R=i,pn.transition=a}}function _n(e,t,n,r){if(mn){var i=yn(e,t,n,r);if(i===null)ui(e,t,r,vn,n),rn(e,r);else if(on(i,e,t,n,r))r.stopPropagation();else if(rn(e,r),t&4&&-1<nn.indexOf(e)){for(;i!==null;){var a=Ri(i);if(a!==null&&Gt(a),a=yn(e,t,n,r),a===null&&ui(e,t,r,vn,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else ui(e,t,r,null,n)}}var vn=null;function yn(e,t,n,r){if(vn=null,e=He(r),e=Li(e),e!==null){if(t=ut(e),t===null)e=null;else if(n=t.tag,n===13){if(e=dt(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return vn=e,null}function bn(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(bt()){case xt:return 1;case St:return 4;case Ct:case wt:return 16;case Tt:return 536870912;default:return 16}default:return 16}}var V=null,xn=null,Sn=null;function H(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in V?V.value:V.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function Cn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function Tn(){return!1}function En(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?wn:Tn,this.isPropagationStopped=Tn,this}return P(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},On=En(Dn),kn=P({},Dn,{view:0,detail:0}),An=En(kn),jn,Mn,Nn,Pn=P({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Nn&&(Nn&&e.type===`mousemove`?(jn=e.screenX-Nn.screenX,Mn=e.screenY-Nn.screenY):Mn=jn=0,Nn=e),jn)},movementY:function(e){return`movementY`in e?e.movementY:Mn}}),Fn=En(Pn),In=En(P({},Pn,{dataTransfer:0})),Ln=En(P({},kn,{relatedTarget:0})),Rn=En(P({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0})),zn=En(P({},Dn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Bn=En(P({},Dn,{data:0})),Vn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Hn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Gn(){return Wn}var Kn=En(P({},kn,{key:function(e){if(e.key){var t=Vn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Cn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Hn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?Cn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Cn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),qn=En(P({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Jn=En(P({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn})),Yn=En(P({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Xn=En(P({},Pn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Zn=[9,13,27,32],Qn=c&&`CompositionEvent`in window,$n=null;c&&`documentMode`in document&&($n=document.documentMode);var er=c&&`TextEvent`in window&&!$n,tr=c&&(!Qn||$n&&8<$n&&11>=$n),nr=` `,rr=!1;function ir(e,t){switch(e){case`keyup`:return Zn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ar(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var or=!1;function sr(e,t){switch(e){case`compositionend`:return ar(t);case`keypress`:return t.which===32?(rr=!0,nr):null;case`textInput`:return e=t.data,e===nr&&rr?null:e;default:return null}}function cr(e,t){if(or)return e===`compositionend`||!Qn&&ir(e,t)?(e=H(),Sn=xn=V=null,or=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return tr&&t.locale!==`ko`?null:t.data;default:return null}}var lr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!lr[e.type]:t===`textarea`}function dr(e,t,n,r){qe(r),t=di(t,`onChange`),0<t.length&&(n=new On(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var fr=null,pr=null;function mr(e){ai(e,0)}function hr(e){if(he(zi(e)))return e}function gr(e,t){if(e===`change`)return t}var _r=!1;if(c){var vr;if(c){var yr=`oninput`in document;if(!yr){var br=document.createElement(`div`);br.setAttribute(`oninput`,`return;`),yr=typeof br.oninput==`function`}vr=yr}else vr=!1;_r=vr&&(!document.documentMode||9<document.documentMode)}function xr(){fr&&(fr.detachEvent(`onpropertychange`,Sr),pr=fr=null)}function Sr(e){if(e.propertyName===`value`&&hr(pr)){var t=[];dr(t,pr,e,He(e)),Qe(mr,t)}}function Cr(e,t,n){e===`focusin`?(xr(),fr=t,pr=n,fr.attachEvent(`onpropertychange`,Sr)):e===`focusout`&&xr()}function wr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return hr(pr)}function Tr(e,t){if(e===`click`)return hr(t)}function Er(e,t){if(e===`input`||e===`change`)return hr(t)}function Dr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Or=typeof Object.is==`function`?Object.is:Dr;function kr(e,t){if(Or(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!Or(e[i],t[i]))return!1}return!0}function Ar(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jr(e,t){var n=Ar(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Ar(n)}}function Mr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nr(){for(var e=window,t=ge();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=ge(e.document)}return t}function Pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Fr(e){var t=Nr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mr(n.ownerDocument.documentElement,n)){if(r!==null&&Pr(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=jr(n,a);var o=jr(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ir=c&&`documentMode`in document&&11>=document.documentMode,Lr=null,Rr=null,zr=null,Br=!1;function Vr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Br||Lr==null||Lr!==ge(r)||(r=Lr,`selectionStart`in r&&Pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&kr(zr,r)||(zr=r,r=di(Rr,`onSelect`),0<r.length&&(t=new On(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Lr)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ur={animationend:Hr(`Animation`,`AnimationEnd`),animationiteration:Hr(`Animation`,`AnimationIteration`),animationstart:Hr(`Animation`,`AnimationStart`),transitionend:Hr(`Transition`,`TransitionEnd`)},Wr={},Gr={};c&&(Gr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),`TransitionEvent`in window||delete Ur.transitionend.transition);function Kr(e){if(Wr[e])return Wr[e];if(!Ur[e])return e;var t=Ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gr)return Wr[e]=t[n];return e}var qr=Kr(`animationend`),Jr=Kr(`animationiteration`),Yr=Kr(`animationstart`),Xr=Kr(`transitionend`),Zr=new Map,Qr=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function $r(e,t){Zr.set(e,t),o(t,[e])}for(var ei=0;ei<Qr.length;ei++){var ti=Qr[ei];$r(ti.toLowerCase(),`on`+(ti[0].toUpperCase()+ti.slice(1)))}$r(qr,`onAnimationEnd`),$r(Jr,`onAnimationIteration`),$r(Yr,`onAnimationStart`),$r(`dblclick`,`onDoubleClick`),$r(`focusin`,`onFocus`),$r(`focusout`,`onBlur`),$r(Xr,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var ni=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),ri=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(ni));function ii(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,lt(r,t,void 0,e),e.currentTarget=null}function ai(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;ii(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;ii(i,s,l),a=c}}}if(at)throw e=ot,at=!1,ot=null,e}function U(e,t){var n=t[Pi];n===void 0&&(n=t[Pi]=new Set);var r=e+`__bubble`;n.has(r)||(li(t,e,2,!1),n.add(r))}function oi(e,t,n){var r=0;t&&(r|=4),li(n,e,r,t)}var si=`_reactListening`+Math.random().toString(36).slice(2);function ci(e){if(!e[si]){e[si]=!0,i.forEach(function(t){t!==`selectionchange`&&(ri.has(t)||oi(t,!1,e),oi(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[si]||(t[si]=!0,oi(`selectionchange`,!1,t))}}function li(e,t,n,r){switch(bn(t)){case 1:var i=hn;break;case 4:i=gn;break;default:i=_n}n=i.bind(null,t,n,e),i=void 0,!et||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function ui(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Li(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}Qe(function(){var r=a,i=He(n),o=[];a:{var s=Zr.get(e);if(s!==void 0){var c=On,l=e;switch(e){case`keypress`:if(Cn(n)===0)break a;case`keydown`:case`keyup`:c=Kn;break;case`focusin`:l=`focus`,c=Ln;break;case`focusout`:l=`blur`,c=Ln;break;case`beforeblur`:case`afterblur`:c=Ln;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Fn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=In;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Jn;break;case qr:case Jr:case Yr:c=Rn;break;case Xr:c=Yn;break;case`scroll`:c=An;break;case`wheel`:c=Xn;break;case`copy`:case`cut`:case`paste`:c=zn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=qn}var u=!!(t&4),d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=$e(p,f),h!=null&&u.push(W(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==Ve&&(l=n.relatedTarget||n.fromElement)&&(Li(l)||l[Ni]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Li(l):null,l!==null&&(d=ut(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Fn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=qn,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:zi(c),m=l==null?s:zi(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Li(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=fi(m))p++;for(m=0,h=f;h;h=fi(h))m++;for(;0<p-m;)u=fi(u),p--;for(;0<m-p;)f=fi(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=fi(u),f=fi(f)}u=null}else u=null;c!==null&&pi(o,s,c,u,!1),l!==null&&d!==null&&pi(o,d,l,u,!0)}}a:{if(s=r?zi(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=gr;else if(ur(s)){if(_r)g=Er;else{g=wr;var _=Cr}}else(c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=Tr);if(g&&=g(e,r)){dr(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&Se(s,`number`,s.value)}switch(_=r?zi(r):window,e){case`focusin`:(ur(_)||_.contentEditable===`true`)&&(Lr=_,Rr=r,zr=null);break;case`focusout`:zr=Rr=Lr=null;break;case`mousedown`:Br=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Br=!1,Vr(o,n,i);break;case`selectionchange`:if(Ir)break;case`keydown`:case`keyup`:Vr(o,n,i)}var v;if(Qn)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else or?ir(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(tr&&n.locale!==`ko`&&(or||y!==`onCompositionStart`?y===`onCompositionEnd`&&or&&(v=H()):(V=i,xn=`value`in V?V.value:V.textContent,or=!0)),_=di(r,y),0<_.length&&(y=new Bn(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=ar(n),v!==null&&(y.data=v)))),(v=er?sr(e,n):cr(e,n))&&(r=di(r,`onBeforeInput`),0<r.length&&(i=new Bn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}ai(o,t)})}function W(e,t,n){return{instance:e,listener:t,currentTarget:n}}function di(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=$e(e,n),a!=null&&r.unshift(W(e,a,i)),a=$e(e,t),a!=null&&r.push(W(e,a,i))),e=e.return}return r}function fi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pi(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=$e(n,a),c!=null&&o.unshift(W(n,c,s))):i||(c=$e(n,a),c!=null&&o.push(W(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var mi=/\r\n?/g,hi=/\u0000|\uFFFD/g;function gi(e){return(typeof e==`string`?e:``+e).replace(mi,`
`).replace(hi,``)}function _i(e,t,n){if(t=gi(t),gi(e)!==t&&n)throw Error(r(425))}function vi(){}var yi=null,bi=null;function xi(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Si=typeof setTimeout==`function`?setTimeout:void 0,Ci=typeof clearTimeout==`function`?clearTimeout:void 0,wi=typeof Promise==`function`?Promise:void 0,Ti=typeof queueMicrotask==`function`?queueMicrotask:wi===void 0?Si:function(e){return wi.resolve(null).then(e).catch(Ei)};function Ei(e){setTimeout(function(){throw e})}function Di(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),fn(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++}n=i}while(n);fn(t)}function Oi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function ki(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Ai=Math.random().toString(36).slice(2),ji=`__reactFiber$`+Ai,Mi=`__reactProps$`+Ai,Ni=`__reactContainer$`+Ai,Pi=`__reactEvents$`+Ai,Fi=`__reactListeners$`+Ai,Ii=`__reactHandles$`+Ai;function Li(e){var t=e[ji];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ni]||n[ji]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ki(e);e!==null;){if(n=e[ji])return n;e=ki(e)}return t}e=n,n=e.parentNode}return null}function Ri(e){return e=e[ji]||e[Ni],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Bi(e){return e[Mi]||null}var Vi=[],Hi=-1;function Ui(e){return{current:e}}function G(e){0>Hi||(e.current=Vi[Hi],Vi[Hi]=null,Hi--)}function K(e,t){Hi++,Vi[Hi]=e.current,e.current=t}var Wi={},Gi=Ui(Wi),Ki=Ui(!1),qi=Wi;function Ji(e,t){var n=e.type.contextTypes;if(!n)return Wi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Yi(e){return e=e.childContextTypes,e!=null}function Xi(){G(Ki),G(Gi)}function Zi(e,t,n){if(Gi.current!==Wi)throw Error(r(168));K(Gi,t),K(Ki,n)}function Qi(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,ue(e)||`Unknown`,a));return P({},n,i)}function $i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wi,qi=Gi.current,K(Gi,e),K(Ki,Ki.current),!0}function ea(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=Qi(e,t,qi),i.__reactInternalMemoizedMergedChildContext=e,G(Ki),G(Gi),K(Gi,e)):G(Ki),K(Ki,n)}var ta=null,na=!1,ra=!1;function ia(e){ta===null?ta=[e]:ta.push(e)}function aa(e){na=!0,ia(e)}function oa(){if(!ra&&ta!==null){ra=!0;var e=0,t=R;try{var n=ta;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ta=null,na=!1}catch(t){throw ta!==null&&(ta=ta.slice(e+1)),gt(xt,oa),t}finally{R=t,ra=!1}}return null}var sa=[],ca=0,la=null,ua=0,da=[],fa=0,pa=null,ma=1,ha=``;function ga(e,t){sa[ca++]=ua,sa[ca++]=la,la=e,ua=t}function _a(e,t,n){da[fa++]=ma,da[fa++]=ha,da[fa++]=pa,pa=e;var r=ma;e=ha;var i=32-L(r)-1;r&=~(1<<i),n+=1;var a=32-L(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ma=1<<32-L(t)+i|n<<i|r,ha=a+e}else ma=1<<a|n<<i|r,ha=e}function va(e){e.return!==null&&(ga(e,1),_a(e,1,0))}function ya(e){for(;e===la;)la=sa[--ca],sa[ca]=null,ua=sa[--ca],sa[ca]=null;for(;e===pa;)pa=da[--fa],da[fa]=null,ha=da[--fa],da[fa]=null,ma=da[--fa],da[fa]=null}var ba=null,xa=null,q=!1,Sa=null;function Ca(e,t){var n=Kl(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null&&(e.stateNode=t,ba=e,xa=Oi(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t!==null&&(e.stateNode=t,ba=e,xa=null,!0);case 13:return t=t.nodeType===8?t:null,t!==null&&(n=pa===null?null:{id:ma,overflow:ha},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Kl(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ba=e,xa=null,!0);default:return!1}}function Ta(e){return!!(e.mode&1)&&!(e.flags&128)}function Ea(e){if(q){var t=xa;if(t){var n=t;if(!wa(e,t)){if(Ta(e))throw Error(r(418));t=Oi(n.nextSibling);var i=ba;t&&wa(e,t)?Ca(i,n):(e.flags=e.flags&-4097|2,q=!1,ba=e)}}else{if(Ta(e))throw Error(r(418));e.flags=e.flags&-4097|2,q=!1,ba=e}}}function Da(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ba=e}function Oa(e){if(e!==ba)return!1;if(!q)return Da(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!xi(e.type,e.memoizedProps)),t&&=xa){if(Ta(e))throw ka(),Error(r(418));for(;t;)Ca(e,t),t=Oi(t.nextSibling)}if(Da(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){xa=Oi(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}xa=null}}else xa=ba?Oi(e.stateNode.nextSibling):null;return!0}function ka(){for(var e=xa;e;)e=Oi(e.nextSibling)}function Aa(){xa=ba=null,q=!1}function ja(e){Sa===null?Sa=[e]:Sa.push(e)}var Ma=C.ReactCurrentBatchConfig;function Na(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function Pa(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function Fa(e){var t=e._init;return t(e._payload)}function Ia(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=Yl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=$l(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===ee?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===N&&Fa(i)===t.type)?(r=a(t,n.props),r.ref=Na(e,t,n),r.return=e,r):(r=Xl(n.type,n.key,n.props,null,e.mode,r),r.ref=Na(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=eu(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Zl(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=$l(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case w:return n=Xl(t.type,t.key,t.props,null,e.mode,n),n.ref=Na(e,null,t),n.return=e,n;case T:return t=eu(t,e.mode,n),t.return=e,t;case N:var r=t._init;return f(e,r(t._payload),n)}if(Ce(t)||ie(t))return t=Zl(t,e.mode,n,null),t.return=e,t;Pa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case w:return n.key===i?l(e,t,n,r):null;case T:return n.key===i?u(e,t,n,r):null;case N:return i=n._init,p(e,t,i(n._payload),r)}if(Ce(n)||ie(n))return i===null?d(e,t,n,r,null):null;Pa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case w:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case T:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case N:var a=r._init;return m(e,t,n,a(r._payload),i)}if(Ce(r)||ie(r))return e=e.get(n)||null,d(t,e,r,i,null);Pa(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),q&&ga(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return q&&ga(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),q&&ga(r,h),l}function g(a,s,c,l){var u=ie(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),q&&ga(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return q&&ga(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),q&&ga(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===ee&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case w:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===ee){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===N&&Fa(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=Na(e,l,i),r.return=e,e=r;break a}n(e,l);break}t(e,l),l=l.sibling}i.type===ee?(r=Zl(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=Xl(i.type,i.key,i.props,null,e.mode,o),o.ref=Na(e,r,i),o.return=e,e=o)}return s(e);case T:a:{for(l=i.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}n(e,r);break}t(e,r),r=r.sibling}r=eu(i,e.mode,o),r.return=e,e=r}return s(e);case N:return l=i._init,_(e,r,l(i._payload),o)}if(Ce(i))return h(e,r,i,o);if(ie(i))return g(e,r,i,o);Pa(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=$l(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var La=Ia(!0),J=Ia(!1),Ra=Ui(null),za=null,Ba=null,Va=null;function Ha(){Va=Ba=za=null}function Ua(e){var t=Ra.current;G(Ra),e._currentValue=t}function Wa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ga(e,t){za=e,Va=Ba=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ns=!0),e.firstContext=null)}function Ka(e){var t=e._currentValue;if(Va!==e){if(e={context:e,memoizedValue:t,next:null},Ba===null){if(za===null)throw Error(r(308));Ba=e,za.dependencies={lanes:0,firstContext:e}}else Ba=Ba.next=e}return t}var qa=null;function Ja(e){qa===null?qa=[e]:qa.push(e)}function Ya(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ja(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xa(e,r)}function Xa(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Za=!1;function Qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $a(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function eo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function to(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Xa(e,n)}return i=r.interleaved,i===null?(t.next=t,Ja(r)):(t.next=i.next,i.next=t),r.interleaved=t,Xa(e,n)}function no(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ut(e,n)}}function ro(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function io(e,t,n,r){var i=e.updateQueue;Za=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=P({},d,f);break a;case 2:Za=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Yc|=o,e.lanes=o,e.memoizedState=d}}function ao(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var oo={},so=Ui(oo),co=Ui(oo),lo=Ui(oo);function uo(e){if(e===oo)throw Error(r(174));return e}function fo(e,t){switch(K(lo,t),K(co,e),K(so,oo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ae(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ae(t,e)}G(so),K(so,t)}function po(){G(so),G(co),G(lo)}function mo(e){uo(lo.current);var t=uo(so.current),n=Ae(t,e.type);t!==n&&(K(co,e),K(so,n))}function ho(e){co.current===e&&(G(so),G(co))}var Y=Ui(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=[];function vo(){for(var e=0;e<_o.length;e++)_o[e]._workInProgressVersionPrimary=null;_o.length=0}var yo=C.ReactCurrentDispatcher,bo=C.ReactCurrentBatchConfig,xo=0,X=null,So=null,Co=null,wo=!1,To=!1,Eo=0,Do=0;function Oo(){throw Error(r(321))}function ko(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Or(e[n],t[n]))return!1;return!0}function Ao(e,t,n,i,a,o){if(xo=o,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,yo.current=e===null||e.memoizedState===null?ps:ms,e=n(i,a),To){o=0;do{if(To=!1,Eo=0,25<=o)throw Error(r(301));o+=1,Co=So=null,t.updateQueue=null,yo.current=hs,e=n(i,a)}while(To)}if(yo.current=fs,t=So!==null&&So.next!==null,xo=0,Co=So=X=null,wo=!1,t)throw Error(r(300));return e}function jo(){var e=Eo!==0;return Eo=0,e}function Mo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Co===null?X.memoizedState=Co=e:Co=Co.next=e,Co}function No(){if(So===null){var e=X.alternate;e=e===null?null:e.memoizedState}else e=So.next;var t=Co===null?X.memoizedState:Co.next;if(t!==null)Co=t,So=e;else{if(e===null)throw Error(r(310));So=e,e={memoizedState:So.memoizedState,baseState:So.baseState,baseQueue:So.baseQueue,queue:So.queue,next:null},Co===null?X.memoizedState=Co=e:Co=Co.next=e}return Co}function Po(e,t){return typeof t==`function`?t(e):t}function Fo(e){var t=No(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=So,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((xo&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,X.lanes|=d,Yc|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,Or(i,t.memoizedState)||(Ns=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,X.lanes|=o,Yc|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Io(e){var t=No(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Or(o,t.memoizedState)||(Ns=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Lo(){}function Ro(e,t){var n=X,i=No(),a=t(),o=!Or(i.memoizedState,a);if(o&&(i.memoizedState=a,Ns=!0),i=i.queue,Xo(Vo.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||Co!==null&&Co.memoizedState.tag&1){if(n.flags|=2048,Go(9,Bo.bind(null,n,i,a,t),void 0,null),Hc===null)throw Error(r(349));xo&30||zo(n,t,a)}return a}function zo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bo(e,t,n,r){t.value=n,t.getSnapshot=r,Ho(t)&&Uo(e)}function Vo(e,t,n){return n(function(){Ho(t)&&Uo(e)})}function Ho(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Or(e,n)}catch{return!0}}function Uo(e){var t=Xa(e,1);t!==null&&hl(t,e,1,-1)}function Wo(e){var t=Mo();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:e},t.queue=e,e=e.dispatch=cs.bind(null,X,e),[t.memoizedState,e]}function Go(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ko(){return No().memoizedState}function qo(e,t,n,r){var i=Mo();X.flags|=e,i.memoizedState=Go(1|t,n,void 0,r===void 0?null:r)}function Jo(e,t,n,r){var i=No();r=r===void 0?null:r;var a=void 0;if(So!==null){var o=So.memoizedState;if(a=o.destroy,r!==null&&ko(r,o.deps)){i.memoizedState=Go(t,n,a,r);return}}X.flags|=e,i.memoizedState=Go(1|t,n,a,r)}function Yo(e,t){return qo(8390656,8,e,t)}function Xo(e,t){return Jo(2048,8,e,t)}function Zo(e,t){return Jo(4,2,e,t)}function Qo(e,t){return Jo(4,4,e,t)}function $o(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function es(e,t,n){return n=n==null?null:n.concat([e]),Jo(4,4,$o.bind(null,t,e),n)}function ts(){}function ns(e,t){var n=No();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ko(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rs(e,t){var n=No();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ko(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function is(e,t,n){return xo&21?(Or(n,t)||(n=zt(),X.lanes|=n,Yc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ns=!0),e.memoizedState=n)}function as(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=bo.transition;bo.transition={};try{e(!1),t()}finally{R=n,bo.transition=r}}function os(){return No().memoizedState}function ss(e,t,n){var r=ml(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ls(e))us(t,n);else if(n=Ya(e,t,n,r),n!==null){var i=pl();hl(n,e,r,i),ds(n,t,r)}}function cs(e,t,n){var r=ml(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ls(e))us(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Or(s,o)){var c=t.interleaved;c===null?(i.next=i,Ja(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=Ya(e,t,i,r),n!==null&&(i=pl(),hl(n,e,r,i),ds(n,t,r))}}function ls(e){var t=e.alternate;return e===X||t!==null&&t===X}function us(e,t){To=wo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ds(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ut(e,n)}}var fs={readContext:Ka,useCallback:Oo,useContext:Oo,useEffect:Oo,useImperativeHandle:Oo,useInsertionEffect:Oo,useLayoutEffect:Oo,useMemo:Oo,useReducer:Oo,useRef:Oo,useState:Oo,useDebugValue:Oo,useDeferredValue:Oo,useTransition:Oo,useMutableSource:Oo,useSyncExternalStore:Oo,useId:Oo,unstable_isNewReconciler:!1},ps={readContext:Ka,useCallback:function(e,t){return Mo().memoizedState=[e,t===void 0?null:t],e},useContext:Ka,useEffect:Yo,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),qo(4194308,4,$o.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qo(4194308,4,e,t)},useInsertionEffect:function(e,t){return qo(4,2,e,t)},useMemo:function(e,t){var n=Mo();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Mo();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ss.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=Mo();return e={current:e},t.memoizedState=e},useState:Wo,useDebugValue:ts,useDeferredValue:function(e){return Mo().memoizedState=e},useTransition:function(){var e=Wo(!1),t=e[0];return e=as.bind(null,e[1]),Mo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=X,a=Mo();if(q){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Hc===null)throw Error(r(349));xo&30||zo(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Yo(Vo.bind(null,i,o,e),[e]),i.flags|=2048,Go(9,Bo.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Mo(),t=Hc.identifierPrefix;if(q){var n=ha,r=ma;n=(r&~(1<<32-L(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=Eo++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=Do++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},ms={readContext:Ka,useCallback:ns,useContext:Ka,useEffect:Xo,useImperativeHandle:es,useInsertionEffect:Zo,useLayoutEffect:Qo,useMemo:rs,useReducer:Fo,useRef:Ko,useState:function(){return Fo(Po)},useDebugValue:ts,useDeferredValue:function(e){return is(No(),So.memoizedState,e)},useTransition:function(){return[Fo(Po)[0],No().memoizedState]},useMutableSource:Lo,useSyncExternalStore:Ro,useId:os,unstable_isNewReconciler:!1},hs={readContext:Ka,useCallback:ns,useContext:Ka,useEffect:Xo,useImperativeHandle:es,useInsertionEffect:Zo,useLayoutEffect:Qo,useMemo:rs,useReducer:Io,useRef:Ko,useState:function(){return Io(Po)},useDebugValue:ts,useDeferredValue:function(e){var t=No();return So===null?t.memoizedState=e:is(t,So.memoizedState,e)},useTransition:function(){return[Io(Po)[0],No().memoizedState]},useMutableSource:Lo,useSyncExternalStore:Ro,useId:os,unstable_isNewReconciler:!1};function gs(e,t){if(e&&e.defaultProps){for(var n in t=P({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function _s(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:P({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vs={isMounted:function(e){return(e=e._reactInternals)?ut(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pl(),i=ml(e),a=eo(r,i);a.payload=t,n!=null&&(a.callback=n),t=to(e,a,i),t!==null&&(hl(t,e,i,r),no(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pl(),i=ml(e),a=eo(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=to(e,a,i),t!==null&&(hl(t,e,i,r),no(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pl(),r=ml(e),i=eo(n,r);i.tag=2,t!=null&&(i.callback=t),t=to(e,i,r),t!==null&&(hl(t,e,r,n),no(t,e,r))}};function ys(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!kr(n,r)||!kr(i,a):!0}function bs(e,t,n){var r=!1,i=Wi,a=t.contextType;return typeof a==`object`&&a?a=Ka(a):(i=Yi(t)?qi:Gi.current,r=t.contextTypes,a=(r=r!=null)?Ji(e,i):Wi),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vs.enqueueReplaceState(t,t.state,null)}function Ss(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Qa(e);var a=t.contextType;typeof a==`object`&&a?i.context=Ka(a):(a=Yi(t)?qi:Gi.current,i.context=Ji(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(_s(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&vs.enqueueReplaceState(i,i.state,null),io(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function Cs(e,t){try{var n=``,r=t;do n+=le(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function ws(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ts(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var Es=typeof WeakMap==`function`?WeakMap:Map;function Ds(e,t,n){n=eo(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){rl||(rl=!0,il=r),Ts(e,t)},n}function Os(e,t,n){n=eo(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ts(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){Ts(e,t),typeof r!=`function`&&(al===null?al=new Set([this]):al.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function ks(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Es;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=zl.bind(null,e,t,n),t.then(e,e))}function As(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null||t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function js(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=eo(-1,1),t.tag=2,to(n,t,1))),n.lanes|=1),e)}var Ms=C.ReactCurrentOwner,Ns=!1;function Ps(e,t,n,r){t.child=e===null?J(t,null,n,r):La(t,e.child,n,r)}function Fs(e,t,n,r,i){n=n.render;var a=t.ref;return Ga(t,i),r=Ao(e,t,n,r,a,i),n=jo(),e!==null&&!Ns?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,tc(e,t,i)):(q&&n&&va(t),t.flags|=1,Ps(e,t,r,i),t.child)}function Is(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ql(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Ls(e,t,a,r,i)):(e=Xl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?kr:n,n(o,r)&&e.ref===t.ref)return tc(e,t,i)}return t.flags|=1,e=Yl(a,r),e.ref=t.ref,e.return=t,t.child=e}function Ls(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(kr(a,r)&&e.ref===t.ref){if(Ns=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ns=!0);else return t.lanes=e.lanes,tc(e,t,i)}}return Bs(e,t,n,r,i)}function Rs(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`){if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(Kc,Gc),Gc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(Kc,Gc),Gc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,K(Kc,Gc),Gc|=r}}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),K(Kc,Gc),Gc|=r;return Ps(e,t,i,n),t.child}function zs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bs(e,t,n,r,i){var a=Yi(n)?qi:Gi.current;return a=Ji(t,a),Ga(t,i),n=Ao(e,t,n,r,a,i),r=jo(),e!==null&&!Ns?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,tc(e,t,i)):(q&&r&&va(t),t.flags|=1,Ps(e,t,n,i),t.child)}function Vs(e,t,n,r,i){if(Yi(n)){var a=!0;$i(t)}else a=!1;if(Ga(t,i),t.stateNode===null)ec(e,t),bs(t,n,r),Ss(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=Ka(l):(l=Yi(n)?qi:Gi.current,l=Ji(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&xs(t,o,r,l),Za=!1;var f=t.memoizedState;o.state=f,io(t,r,o,i),c=t.memoizedState,s!==r||f!==c||Ki.current||Za?(typeof u==`function`&&(_s(t,n,u,r),c=t.memoizedState),(s=Za||ys(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,$a(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:gs(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=Ka(c):(c=Yi(n)?qi:Gi.current,c=Ji(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&xs(t,o,r,c),Za=!1,f=t.memoizedState,o.state=f,io(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||Ki.current||Za?(typeof p==`function`&&(_s(t,n,p,r),m=t.memoizedState),(l=Za||ys(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Hs(e,t,n,r,a,i)}function Hs(e,t,n,r,i,a){zs(e,t);var o=!!(t.flags&128);if(!r&&!o)return i&&ea(t,n,!1),tc(e,t,a);r=t.stateNode,Ms.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=La(t,e.child,null,a),t.child=La(t,null,s,a)):Ps(e,t,s,a),t.memoizedState=r.state,i&&ea(t,n,!0),t.child}function Us(e){var t=e.stateNode;t.pendingContext?Zi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zi(e,t.context,!1),fo(e,t.containerInfo)}function Ws(e,t,n,r,i){return Aa(),ja(i),t.flags|=256,Ps(e,t,n,r),t.child}var Gs={dehydrated:null,treeContext:null,retryLane:0};function Ks(e){return{baseLanes:e,cachePool:null,transitions:null}}function qs(e,t,n){var r=t.pendingProps,i=Y.current,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(i&2)),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),K(Y,i&1),e===null)return Ea(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.lanes=t.mode&1?e.data===`$!`?8:1073741824:1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Ql(o,r,0,null),e=Zl(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ks(n),t.memoizedState=Gs,e):Js(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Xs(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Yl(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=Zl(a,o,n,null),a.flags|=2):a=Yl(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Ks(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Gs,r}return a=e.child,e=a.sibling,r=Yl(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Js(e,t){return t=Ql({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function Ys(e,t,n,r){return r!==null&&ja(r),La(t,e.child,null,n),e=Js(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xs(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=ws(Error(r(422))),Ys(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=Ql({mode:`visible`,children:i.children},a,0,null),o=Zl(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&La(t,e.child,null,s),t.child.memoizedState=Ks(s),t.memoizedState=Gs,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return Ys(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=ws(o,i,void 0),Ys(e,t,s,i)}if(c=(s&e.childLanes)!==0,Ns||c){if(i=Hc,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,Xa(e,a),hl(i,e,a,-1))}return kl(),i=ws(Error(r(421))),Ys(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Vl.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,xa=Oi(a.nextSibling),ba=t,q=!0,Sa=null,e!==null&&(da[fa++]=ma,da[fa++]=ha,da[fa++]=pa,ma=e.id,ha=e.overflow,pa=t),t=Js(t,i.children),t.flags|=4096,t)}function Zs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Wa(e.return,t,n)}function Qs(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function $s(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ps(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zs(e,n,t);else if(e.tag===19)Zs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(Y,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Qs(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Qs(t,!0,n,null,a);break;case`together`:Qs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ec(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yc|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Yl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nc(e,t,n){switch(t.tag){case 3:Us(t),Aa();break;case 5:mo(t);break;case 1:Yi(t.type)&&$i(t);break;case 4:fo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;K(Ra,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(K(Y,Y.current&1),e=tc(e,t,n),e===null?null:e.sibling):qs(e,t,n):(K(Y,Y.current&1),t.flags|=128,null);K(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $s(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,Rs(e,t,n)}return tc(e,t,n)}var rc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ic=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,uo(so.current);var o=null;switch(n){case`input`:i=_e(e,i),r=_e(e,r),o=[];break;case`select`:i=P({},i,{value:void 0}),r=P({},r,{value:void 0}),o=[];break;case`textarea`:i=Te(e,i),r=Te(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=vi)}ze(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null){if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null))}for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null)){if(u===`style`){if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l}else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&U(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},ac=function(e,t,n,r){n!==r&&(t.flags|=4)};function oc(e,t){if(!q)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function sc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function cc(e,t,n){var i=t.pendingProps;switch(ya(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sc(t),null;case 1:return Yi(t.type)&&Xi(),sc(t),null;case 3:return i=t.stateNode,po(),G(Ki),G(Gi),vo(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Oa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Sa!==null&&(yl(Sa),Sa=null))),sc(t),null;case 5:ho(t);var o=uo(lo.current);if(n=t.type,e!==null&&t.stateNode!=null)ic(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return sc(t),null}if(e=uo(so.current),Oa(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[ji]=t,i[Mi]=s,e=!!(t.mode&1),n){case`dialog`:U(`cancel`,i),U(`close`,i);break;case`iframe`:case`object`:case`embed`:U(`load`,i);break;case`video`:case`audio`:for(o=0;o<ni.length;o++)U(ni[o],i);break;case`source`:U(`error`,i);break;case`img`:case`image`:case`link`:U(`error`,i),U(`load`,i);break;case`details`:U(`toggle`,i);break;case`input`:ve(i,s),U(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},U(`invalid`,i);break;case`textarea`:Ee(i,s),U(`invalid`,i)}for(var c in ze(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&_i(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&_i(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&U(`scroll`,i)}switch(n){case`input`:me(i),xe(i,s,!0);break;case`textarea`:me(i),Oe(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=vi)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=ke(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[ji]=t,e[Mi]=i,rc(e,t,!1,!1),t.stateNode=e;a:{switch(c=Be(n,i),n){case`dialog`:U(`cancel`,e),U(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:U(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<ni.length;o++)U(ni[o],e);o=i;break;case`source`:U(`error`,e),o=i;break;case`img`:case`image`:case`link`:U(`error`,e),U(`load`,e),o=i;break;case`details`:U(`toggle`,e),o=i;break;case`input`:ve(e,i),o=_e(e,i),U(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=P({},i,{value:void 0}),U(`invalid`,e);break;case`textarea`:Ee(e,i),o=Te(e,i),U(`invalid`,e);break;default:o=i}for(s in ze(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?Le(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Me(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&Ne(e,u):typeof u==`number`&&Ne(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&U(`scroll`,e):u!=null&&S(e,s,u,c))}switch(n){case`input`:me(e),xe(e,i,!1);break;case`textarea`:me(e),Oe(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+de(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&we(e,!!i.multiple,i.defaultValue,!0):we(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=vi)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return sc(t),null;case 6:if(e&&t.stateNode!=null)ac(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=uo(lo.current),uo(so.current),Oa(t)){if(i=t.stateNode,n=t.memoizedProps,i[ji]=t,(s=i.nodeValue!==n)&&(e=ba,e!==null))switch(e.tag){case 3:_i(i.nodeValue,n,!!(e.mode&1));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&_i(i.nodeValue,n,!!(e.mode&1))}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ji]=t,t.stateNode=i}return sc(t),null;case 13:if(G(Y),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&xa!==null&&t.mode&1&&!(t.flags&128))ka(),Aa(),t.flags|=98560,s=!1;else if(s=Oa(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[ji]=t}else Aa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;sc(t),s=!1}else Sa!==null&&(yl(Sa),Sa=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?qc===0&&(qc=3):kl())),t.updateQueue!==null&&(t.flags|=4),sc(t),null);case 4:return po(),e===null&&ci(t.stateNode.containerInfo),sc(t),null;case 10:return Ua(t.type._context),sc(t),null;case 17:return Yi(t.type)&&Xi(),sc(t),null;case 19:if(G(Y),s=t.memoizedState,s===null)return sc(t),null;if(i=!!(t.flags&128),c=s.rendering,c===null){if(i)oc(s,!1);else{if(qc!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=go(e),c!==null){for(t.flags|=128,oc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(Y,Y.current&1|2),t.child}e=e.sibling}s.tail!==null&&I()>tl&&(t.flags|=128,i=!0,oc(s,!1),t.lanes=4194304)}}else{if(!i){if(e=go(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),oc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!q)return sc(t),null}else 2*I()-s.renderingStartTime>tl&&n!==1073741824&&(t.flags|=128,i=!0,oc(s,!1),t.lanes=4194304)}s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(sc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=I(),t.sibling=null,n=Y.current,K(Y,i?n&1|2:n&1),t);case 22:case 23:return Tl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Gc&1073741824&&(sc(t),t.subtreeFlags&6&&(t.flags|=8192)):sc(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function lc(e,t){switch(ya(t),t.tag){case 1:return Yi(t.type)&&Xi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return po(),G(Ki),G(Gi),vo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ho(t),null;case 13:if(G(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Aa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Y),null;case 4:return po(),null;case 10:return Ua(t.type._context),null;case 22:case 23:return Tl(),null;case 24:return null;default:return null}}var uc=!1,dc=!1,fc=typeof WeakSet==`function`?WeakSet:Set,Z=null;function pc(e,t){var n=e.ref;if(n!==null){if(typeof n==`function`)try{n(null)}catch(n){$(e,t,n)}else n.current=null}}function mc(e,t,n){try{n()}catch(n){$(e,t,n)}}var hc=!1;function gc(e,t){if(yi=mn,e=Nr(),Pr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(bi={focusedElem:e,selectionRange:n},mn=!1,Z=t;Z!==null;)if(t=Z,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,Z=e;else for(;Z!==null;){t=Z;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:gs(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){$(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,Z=e;break}Z=t.return}return h=hc,hc=!1,h}function _c(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&mc(t,n,a)}i=i.next}while(i!==r)}}function vc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function yc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function bc(e){var t=e.alternate;t!==null&&(e.alternate=null,bc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ji],delete t[Mi],delete t[Pi],delete t[Fi],delete t[Ii])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xc(e){return e.tag===5||e.tag===3||e.tag===4}function Sc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vi));else if(r!==4&&(e=e.child,e!==null))for(Cc(e,t,n),e=e.sibling;e!==null;)Cc(e,t,n),e=e.sibling}function wc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wc(e,t,n),e=e.sibling;e!==null;)wc(e,t,n),e=e.sibling}var Tc=null,Ec=!1;function Dc(e,t,n){for(n=n.child;n!==null;)Oc(e,t,n),n=n.sibling}function Oc(e,t,n){if(Dt&&typeof Dt.onCommitFiberUnmount==`function`)try{Dt.onCommitFiberUnmount(Et,n)}catch{}switch(n.tag){case 5:dc||pc(n,t);case 6:var r=Tc,i=Ec;Tc=null,Dc(e,t,n),Tc=r,Ec=i,Tc!==null&&(Ec?(e=Tc,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Tc.removeChild(n.stateNode));break;case 18:Tc!==null&&(Ec?(e=Tc,n=n.stateNode,e.nodeType===8?Di(e.parentNode,n):e.nodeType===1&&Di(e,n),fn(e)):Di(Tc,n.stateNode));break;case 4:r=Tc,i=Ec,Tc=n.stateNode.containerInfo,Ec=!0,Dc(e,t,n),Tc=r,Ec=i;break;case 0:case 11:case 14:case 15:if(!dc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&mc(n,t,o),i=i.next}while(i!==r)}Dc(e,t,n);break;case 1:if(!dc&&(pc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){$(n,t,e)}Dc(e,t,n);break;case 21:Dc(e,t,n);break;case 22:n.mode&1?(dc=(r=dc)||n.memoizedState!==null,Dc(e,t,n),dc=r):Dc(e,t,n);break;default:Dc(e,t,n)}}function kc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new fc),t.forEach(function(t){var r=Hl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Ac(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:Tc=c.stateNode,Ec=!1;break a;case 3:Tc=c.stateNode.containerInfo,Ec=!0;break a;case 4:Tc=c.stateNode.containerInfo,Ec=!0;break a}c=c.return}if(Tc===null)throw Error(r(160));Oc(o,s,a),Tc=null,Ec=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){$(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jc(t,e),t=t.sibling}function jc(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ac(t,e),Mc(e),i&4){try{_c(3,e,e.return),vc(3,e)}catch(t){$(e,e.return,t)}try{_c(5,e,e.return)}catch(t){$(e,e.return,t)}}break;case 1:Ac(t,e),Mc(e),i&512&&n!==null&&pc(n,n.return);break;case 5:if(Ac(t,e),Mc(e),i&512&&n!==null&&pc(n,n.return),e.flags&32){var a=e.stateNode;try{Ne(a,``)}catch(t){$(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&ye(a,o),Be(c,s);var u=Be(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?Le(a,f):d===`dangerouslySetInnerHTML`?Me(a,f):d===`children`?Ne(a,f):S(a,d,f,u)}switch(c){case`input`:be(a,o);break;case`textarea`:De(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?we(a,!!o.multiple,o.multiple?[]:``,!1):we(a,!!o.multiple,o.defaultValue,!0)):we(a,!!o.multiple,m,!1)}a[Mi]=o}catch(t){$(e,e.return,t)}}break;case 6:if(Ac(t,e),Mc(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){$(e,e.return,t)}}break;case 3:if(Ac(t,e),Mc(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{fn(t.containerInfo)}catch(t){$(e,e.return,t)}break;case 4:Ac(t,e),Mc(e);break;case 13:Ac(t,e),Mc(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(el=I())),i&4&&kc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(dc=(u=dc)||d,Ac(t,e),dc=u):Ac(t,e),Mc(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(Z=e,d=e.child;d!==null;){for(f=Z=d;Z!==null;){switch(p=Z,m=p.child,p.tag){case 0:case 11:case 14:case 15:_c(4,p,p.return);break;case 1:pc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){$(i,n,e)}}break;case 5:pc(p,p.return);break;case 22:if(p.memoizedState!==null){Ic(f);continue}}m===null?Ic(f):(m.return=p,Z=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=Ie(`display`,s))}catch(t){$(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){$(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ac(t,e),Mc(e),i&4&&kc(e);break;case 21:break;default:Ac(t,e),Mc(e)}}function Mc(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(xc(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Ne(a,``),i.flags&=-33),wc(e,Sc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;Cc(e,Sc(e),o);break;default:throw Error(r(161))}}catch(t){$(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nc(e,t,n){Z=e,Pc(e,t,n)}function Pc(e,t,n){for(var r=!!(e.mode&1);Z!==null;){var i=Z,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||uc;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||dc;s=uc;var l=dc;if(uc=o,(dc=c)&&!l)for(Z=i;Z!==null;)o=Z,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Lc(i):(c.return=o,Z=c);for(;a!==null;)Z=a,Pc(a,t,n),a=a.sibling;Z=i,uc=s,dc=l}Fc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,Z=a):Fc(e,t,n)}}function Fc(e){for(;Z!==null;){var t=Z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:dc||vc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!dc){if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:gs(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}}var o=t.updateQueue;o!==null&&ao(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ao(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&fn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}dc||t.flags&512&&yc(t)}catch(e){$(t,t.return,e)}}if(t===e){Z=null;break}if(n=t.sibling,n!==null){n.return=t.return,Z=n;break}Z=t.return}}function Ic(e){for(;Z!==null;){var t=Z;if(t===e){Z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Z=n;break}Z=t.return}}function Lc(e){for(;Z!==null;){var t=Z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vc(4,t)}catch(e){$(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){$(t,i,e)}}var a=t.return;try{yc(t)}catch(e){$(t,a,e)}break;case 5:var o=t.return;try{yc(t)}catch(e){$(t,o,e)}}}catch(e){$(t,t.return,e)}if(t===e){Z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,Z=s;break}Z=t.return}}var Rc=Math.ceil,zc=C.ReactCurrentDispatcher,Bc=C.ReactCurrentOwner,Vc=C.ReactCurrentBatchConfig,Q=0,Hc=null,Uc=null,Wc=0,Gc=0,Kc=Ui(0),qc=0,Jc=null,Yc=0,Xc=0,Zc=0,Qc=null,$c=null,el=0,tl=1/0,nl=null,rl=!1,il=null,al=null,ol=!1,sl=null,cl=0,ll=0,ul=null,dl=-1,fl=0;function pl(){return Q&6?I():dl===-1?dl=I():dl}function ml(e){return e.mode&1?Q&2&&Wc!==0?Wc&-Wc:Ma.transition===null?(e=R,e===0?(e=window.event,e=e===void 0?16:bn(e.type),e):e):(fl===0&&(fl=zt()),fl):1}function hl(e,t,n,i){if(50<ll)throw ll=0,ul=null,Error(r(185));Vt(e,n,i),(!(Q&2)||e!==Hc)&&(e===Hc&&(!(Q&2)&&(Xc|=n),qc===4&&xl(e,Wc)),gl(e,i),n===1&&Q===0&&!(t.mode&1)&&(tl=I()+500,na&&oa()))}function gl(e,t){var n=e.callbackNode;Lt(e,t);var r=Ft(e,e===Hc?Wc:0);if(r===0)n!==null&&_t(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_t(n),t===1)e.tag===0?aa(Sl.bind(null,e)):ia(Sl.bind(null,e)),Ti(function(){!(Q&6)&&oa()}),n=null;else{switch(Wt(r)){case 1:n=xt;break;case 4:n=St;break;case 16:n=Ct;break;case 536870912:n=Tt;break;default:n=Ct}n=Wl(n,_l.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _l(e,t){if(dl=-1,fl=0,Q&6)throw Error(r(327));var n=e.callbackNode;if(Ll()&&e.callbackNode!==n)return null;var i=Ft(e,e===Hc?Wc:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=Al(e,i);else{t=i;var a=Q;Q|=2;var o=Ol();(Hc!==e||Wc!==t)&&(nl=null,tl=I()+500,El(e,t));do try{Ml();break}catch(t){Dl(e,t)}while(1);Ha(),zc.current=o,Q=a,Uc===null?(Hc=null,Wc=0,t=qc):t=0}if(t!==0){if(t===2&&(a=Rt(e),a!==0&&(i=a,t=vl(e,a))),t===1)throw n=Jc,El(e,0),xl(e,i),gl(e,I()),n;if(t===6)xl(e,i);else{if(a=e.current.alternate,!(i&30)&&!bl(a)&&(t=Al(e,i),t===2&&(o=Rt(e),o!==0&&(i=o,t=vl(e,o))),t===1))throw n=Jc,El(e,0),xl(e,i),gl(e,I()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Fl(e,$c,nl);break;case 3:if(xl(e,i),(i&130023424)===i&&(t=el+500-I(),10<t)){if(Ft(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){pl(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Si(Fl.bind(null,e,$c,nl),t);break}Fl(e,$c,nl);break;case 4:if(xl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-L(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=I()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Rc(i/1960))-i,10<i){e.timeoutHandle=Si(Fl.bind(null,e,$c,nl),i);break}Fl(e,$c,nl);break;case 5:Fl(e,$c,nl);break;default:throw Error(r(329))}}}return gl(e,I()),e.callbackNode===n?_l.bind(null,e):null}function vl(e,t){var n=Qc;return e.current.memoizedState.isDehydrated&&(El(e,t).flags|=256),e=Al(e,t),e!==2&&(t=$c,$c=n,t!==null&&yl(t)),e}function yl(e){$c===null?$c=e:$c.push.apply($c,e)}function bl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Or(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xl(e,t){for(t&=~Zc,t&=~Xc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-L(t),r=1<<n;e[n]=-1,t&=~r}}function Sl(e){if(Q&6)throw Error(r(327));Ll();var t=Ft(e,0);if(!(t&1))return gl(e,I()),null;var n=Al(e,t);if(e.tag!==0&&n===2){var i=Rt(e);i!==0&&(t=i,n=vl(e,i))}if(n===1)throw n=Jc,El(e,0),xl(e,t),gl(e,I()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fl(e,$c,nl),gl(e,I()),null}function Cl(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(tl=I()+500,na&&oa())}}function wl(e){sl!==null&&sl.tag===0&&!(Q&6)&&Ll();var t=Q;Q|=1;var n=Vc.transition,r=R;try{if(Vc.transition=null,R=1,e)return e()}finally{R=r,Vc.transition=n,Q=t,!(Q&6)&&oa()}}function Tl(){Gc=Kc.current,G(Kc)}function El(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ci(n)),Uc!==null)for(n=Uc.return;n!==null;){var r=n;switch(ya(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xi();break;case 3:po(),G(Ki),G(Gi),vo();break;case 5:ho(r);break;case 4:po();break;case 13:G(Y);break;case 19:G(Y);break;case 10:Ua(r.type._context);break;case 22:case 23:Tl()}n=n.return}if(Hc=e,Uc=e=Yl(e.current,null),Wc=Gc=t,qc=0,Jc=null,Zc=Xc=Yc=0,$c=Qc=null,qa!==null){for(t=0;t<qa.length;t++)if(n=qa[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}qa=null}return e}function Dl(e,t){do{var n=Uc;try{if(Ha(),yo.current=fs,wo){for(var i=X.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}wo=!1}if(xo=0,Co=So=X=null,To=!1,Eo=0,Bc.current=null,n===null||n.return===null){qc=1,Jc=t,Uc=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Wc,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=As(s);if(m!==null){m.flags&=-257,js(m,s,c,o,t),m.mode&1&&ks(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}if(!(t&1)){ks(o,u,t),kl();break a}l=Error(r(426))}else if(q&&c.mode&1){var _=As(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),js(_,s,c,o,t),ja(Cs(l,c));break a}}o=l=Cs(l,c),qc!==4&&(qc=2),Qc===null?Qc=[o]:Qc.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Ds(o,l,t);ro(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(al===null||!al.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Os(o,c,t);ro(o,x);break a}}o=o.return}while(o!==null)}Pl(n)}catch(e){t=e,Uc===n&&n!==null&&(Uc=n=n.return);continue}break}while(1)}function Ol(){var e=zc.current;return zc.current=fs,e===null?fs:e}function kl(){(qc===0||qc===3||qc===2)&&(qc=4),Hc===null||!(Yc&268435455)&&!(Xc&268435455)||xl(Hc,Wc)}function Al(e,t){var n=Q;Q|=2;var i=Ol();(Hc!==e||Wc!==t)&&(nl=null,El(e,t));do try{jl();break}catch(t){Dl(e,t)}while(1);if(Ha(),Q=n,zc.current=i,Uc!==null)throw Error(r(261));return Hc=null,Wc=0,qc}function jl(){for(;Uc!==null;)Nl(Uc)}function Ml(){for(;Uc!==null&&!vt();)Nl(Uc)}function Nl(e){var t=Ul(e.alternate,e,Gc);e.memoizedProps=e.pendingProps,t===null?Pl(e):Uc=t,Bc.current=null}function Pl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=lc(n,t),n!==null){n.flags&=32767,Uc=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{qc=6,Uc=null;return}}else if(n=cc(n,t,Gc),n!==null){Uc=n;return}if(t=t.sibling,t!==null){Uc=t;return}Uc=t=e}while(t!==null);qc===0&&(qc=5)}function Fl(e,t,n){var r=R,i=Vc.transition;try{Vc.transition=null,R=1,Il(e,t,n,r)}finally{Vc.transition=i,R=r}return null}function Il(e,t,n,i){do Ll();while(sl!==null);if(Q&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ht(e,o),e===Hc&&(Uc=Hc=null,Wc=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ol||(ol=!0,Wl(Ct,function(){return Ll(),null})),o=!!(n.flags&15990),n.subtreeFlags&15990||o){o=Vc.transition,Vc.transition=null;var s=R;R=1;var c=Q;Q|=4,Bc.current=null,gc(e,n),jc(n,e),Fr(bi),mn=!!yi,bi=yi=null,e.current=n,Nc(n,e,a),yt(),Q=c,R=s,Vc.transition=o}else e.current=n;if(ol&&(ol=!1,sl=e,cl=a),o=e.pendingLanes,o===0&&(al=null),Ot(n.stateNode,i),gl(e,I()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(rl)throw rl=!1,e=il,il=null,e;return cl&1&&e.tag!==0&&Ll(),o=e.pendingLanes,o&1?e===ul?ll++:(ll=0,ul=e):ll=0,oa(),null}function Ll(){if(sl!==null){var e=Wt(cl),t=Vc.transition,n=R;try{if(Vc.transition=null,R=16>e?16:e,sl===null)var i=!1;else{if(e=sl,sl=null,cl=0,Q&6)throw Error(r(331));var a=Q;for(Q|=4,Z=e.current;Z!==null;){var o=Z,s=o.child;if(Z.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(Z=u;Z!==null;){var d=Z;switch(d.tag){case 0:case 11:case 15:_c(8,d,o)}var f=d.child;if(f!==null)f.return=d,Z=f;else for(;Z!==null;){d=Z;var p=d.sibling,m=d.return;if(bc(d),d===u){Z=null;break}if(p!==null){p.return=m,Z=p;break}Z=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}Z=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Z=s;else b:for(;Z!==null;){if(o=Z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:_c(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,Z=v;break b}Z=o.return}}var y=e.current;for(Z=y;Z!==null;){s=Z;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,Z=b;else b:for(s=y;Z!==null;){if(c=Z,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:vc(9,c)}}catch(e){$(c,c.return,e)}if(c===s){Z=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,Z=x;break b}Z=c.return}}if(Q=a,oa(),Dt&&typeof Dt.onPostCommitFiberRoot==`function`)try{Dt.onPostCommitFiberRoot(Et,e)}catch{}i=!0}return i}finally{R=n,Vc.transition=t}}return!1}function Rl(e,t,n){t=Cs(n,t),t=Ds(e,t,1),e=to(e,t,1),t=pl(),e!==null&&(Vt(e,1,t),gl(e,t))}function $(e,t,n){if(e.tag===3)Rl(e,e,n);else for(;t!==null;){if(t.tag===3){Rl(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(al===null||!al.has(r))){e=Cs(n,e),e=Os(t,e,1),t=to(t,e,1),e=pl(),t!==null&&(Vt(t,1,e),gl(t,e));break}}t=t.return}}function zl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pl(),e.pingedLanes|=e.suspendedLanes&n,Hc===e&&(Wc&n)===n&&(qc===4||qc===3&&(Wc&130023424)===Wc&&500>I()-el?El(e,0):Zc|=n),gl(e,t)}function Bl(e,t){t===0&&(e.mode&1?(t=Nt,Nt<<=1,!(Nt&130023424)&&(Nt=4194304)):t=1);var n=pl();e=Xa(e,t),e!==null&&(Vt(e,t,n),gl(e,n))}function Vl(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bl(e,n)}function Hl(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Bl(e,n)}var Ul=function(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps||Ki.current)Ns=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return Ns=!1,nc(e,t,n);Ns=!!(e.flags&131072)}}else Ns=!1,q&&t.flags&1048576&&_a(t,ua,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;ec(e,t),e=t.pendingProps;var a=Ji(t,Gi.current);Ga(t,n),a=Ao(null,t,i,e,a,n);var o=jo();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Yi(i)?(o=!0,$i(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Qa(t),a.updater=vs,t.stateNode=a,a._reactInternals=t,Ss(t,i,e,n),t=Hs(null,t,i,!0,o,n)):(t.tag=0,q&&o&&va(t),Ps(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(ec(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Jl(i),e=gs(i,e),a){case 0:t=Bs(null,t,i,e,n);break a;case 1:t=Vs(null,t,i,e,n);break a;case 11:t=Fs(null,t,i,e,n);break a;case 14:t=Is(null,t,i,gs(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:gs(i,a),Bs(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:gs(i,a),Vs(e,t,i,a,n);case 3:a:{if(Us(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,$a(e,t),io(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated){if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Cs(Error(r(423)),t),t=Ws(e,t,i,n,a);break a}if(i!==a){a=Cs(Error(r(424)),t),t=Ws(e,t,i,n,a);break a}for(xa=Oi(t.stateNode.containerInfo.firstChild),ba=t,q=!0,Sa=null,n=J(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Aa(),i===a){t=tc(e,t,n);break a}Ps(e,t,i,n)}t=t.child}return t;case 5:return mo(t),e===null&&Ea(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,xi(i,a)?s=null:o!==null&&xi(i,o)&&(t.flags|=32),zs(e,t),Ps(e,t,s,n),t.child;case 6:return e===null&&Ea(t),null;case 13:return qs(e,t,n);case 4:return fo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=La(t,null,i,n):Ps(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:gs(i,a),Fs(e,t,i,a,n);case 7:return Ps(e,t,t.pendingProps,n),t.child;case 8:return Ps(e,t,t.pendingProps.children,n),t.child;case 12:return Ps(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,K(Ra,i._currentValue),i._currentValue=s,o!==null){if(Or(o.value,s)){if(o.children===a.children&&!Ki.current){t=tc(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=eo(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Wa(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Wa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}}Ps(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,Ga(t,n),a=Ka(a),i=i(a),t.flags|=1,Ps(e,t,i,n),t.child;case 14:return i=t.type,a=gs(i,t.pendingProps),a=gs(i.type,a),Is(e,t,i,a,n);case 15:return Ls(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:gs(i,a),ec(e,t),t.tag=1,Yi(i)?(e=!0,$i(t)):e=!1,Ga(t,n),bs(t,i,a),Ss(t,i,a,n),Hs(null,t,i,!0,e,n);case 19:return $s(e,t,n);case 22:return Rs(e,t,n)}throw Error(r(156,t.tag))};function Wl(e,t){return gt(e,t)}function Gl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kl(e,t,n,r){return new Gl(e,t,n,r)}function ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jl(e){if(typeof e==`function`)return+!!ql(e);if(e!=null){if(e=e.$$typeof,e===A)return 11;if(e===M)return 14}return 2}function Yl(e,t){var n=e.alternate;return n===null?(n=Kl(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xl(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)ql(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case ee:return Zl(n.children,a,o,t);case E:s=8,a|=8;break;case D:return e=Kl(12,n,t,a|2),e.elementType=D,e.lanes=o,e;case te:return e=Kl(13,n,t,a),e.elementType=te,e.lanes=o,e;case j:return e=Kl(19,n,t,a),e.elementType=j,e.lanes=o,e;case ne:return Ql(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case O:s=10;break a;case k:s=9;break a;case A:s=11;break a;case M:s=14;break a;case N:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=Kl(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function Zl(e,t,n,r){return e=Kl(7,e,r,t),e.lanes=n,e}function Ql(e,t,n,r){return e=Kl(22,e,r,t),e.elementType=ne,e.lanes=n,e.stateNode={isHidden:!1},e}function $l(e,t,n){return e=Kl(6,e,null,t),e.lanes=n,e}function eu(e,t,n){return t=Kl(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bt(0),this.expirationTimes=Bt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nu(e,t,n,r,i,a,o,s,c){return e=new tu(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=Kl(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qa(a),e}function ru(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function iu(e){if(!e)return Wi;e=e._reactInternals;a:{if(ut(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(Yi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(Yi(n))return Qi(e,n,t)}return t}function au(e,t,n,r,i,a,o,s,c){return e=nu(n,r,!0,e,i,a,o,s,c),e.context=iu(null),n=e.current,r=pl(),i=ml(n),a=eo(r,i),a.callback=t??null,to(n,a,i),e.current.lanes=i,Vt(e,i,r),gl(e,r),e}function ou(e,t,n,r){var i=t.current,a=pl(),o=ml(i);return n=iu(n),t.context===null?t.context=n:t.pendingContext=n,t=eo(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=to(i,t,o),e!==null&&(hl(e,i,o,a),no(e,i,o)),o}function su(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function lu(e,t){cu(e,t),(e=e.alternate)&&cu(e,t)}function uu(){return null}var du=typeof reportError==`function`?reportError:function(e){console.error(e)};function fu(e){this._internalRoot=e}pu.prototype.render=fu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));ou(e,t,null,null)},pu.prototype.unmount=fu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wl(function(){ou(null,e,null,null)}),t[Ni]=null}};function pu(e){this._internalRoot=e}pu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<B.length&&t!==0&&t<B[n].priority;n++);B.splice(n,0,e),n===0&&sn(e)}};function mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function gu(){}function _u(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=su(o);a.call(e)}}var o=au(t,r,e,0,null,!1,!1,``,gu);return e._reactRootContainer=o,e[Ni]=o.current,ci(e.nodeType===8?e.parentNode:e),wl(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=su(c);s.call(e)}}var c=nu(e,0,!1,null,null,!1,!1,``,gu);return e._reactRootContainer=c,e[Ni]=c.current,ci(e.nodeType===8?e.parentNode:e),wl(function(){ou(t,c,n,r)}),c}function vu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=su(o);s.call(e)}}ou(t,o,e,i)}else o=_u(n,t,e,i,r);return su(o)}Gt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pt(t.pendingLanes);n!==0&&(Ut(t,n|1),gl(t,I()),!(Q&6)&&(tl=I()+500,oa()))}break;case 13:wl(function(){var t=Xa(e,1);t!==null&&hl(t,e,1,pl())}),lu(e,1)}},Kt=function(e){if(e.tag===13){var t=Xa(e,134217728);t!==null&&hl(t,e,134217728,pl()),lu(e,134217728)}},qt=function(e){if(e.tag===13){var t=ml(e),n=Xa(e,t);n!==null&&hl(n,e,t,pl()),lu(e,t)}},Jt=function(){return R},Yt=function(e,t){var n=R;try{return R=e,t()}finally{R=n}},Ue=function(e,t,n){switch(t){case`input`:if(be(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Bi(i);if(!a)throw Error(r(90));he(i),be(i,a)}}}break;case`textarea`:De(e,n);break;case`select`:t=n.value,t!=null&&we(e,!!n.multiple,t,!1)}},Ye=Cl,Xe=wl;var yu={usingClientEntryPoint:!1,Events:[Ri,zi,Bi,qe,Je,Cl]},bu={findFiberByHostInstance:Li,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},xu={bundleType:bu.bundleType,version:bu.version,rendererPackageName:bu.rendererPackageName,rendererConfig:bu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mt(e),e===null?null:e.stateNode},findFiberByHostInstance:bu.findFiberByHostInstance||uu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{Et=Su.inject(xu),Dt=Su}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mu(t))throw Error(r(200));return ru(e,t,null,n)},e.createRoot=function(e,t){if(!mu(e))throw Error(r(299));var n=!1,i=``,a=du;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=nu(e,1,!1,null,null,n,!1,i,a),e[Ni]=t.current,ci(e.nodeType===8?e.parentNode:e),new fu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=mt(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return wl(e)},e.hydrate=function(e,t,n){if(!hu(t))throw Error(r(200));return vu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!mu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=du;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=au(t,null,e,1,n??null,a,!1,o,s),e[Ni]=t.current,ci(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new pu(t)},e.render=function(e,t,n){if(!hu(t))throw Error(r(200));return vu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!hu(e))throw Error(r(40));return e._reactRootContainer?(wl(function(){vu(null,null,e,!1,function(){e._reactRootContainer=null,e[Ni]=null})}),!0):!1},e.unstable_batchedUpdates=Cl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!hu(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return vu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=m();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),g=c(u()),_=c(m()),v=h();function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(null,arguments)}var b;(function(e){e.Pop=`POP`,e.Push=`PUSH`,e.Replace=`REPLACE`})(b||={});var x=`popstate`;function S(e){e===void 0&&(e={});function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=O(e.location.hash.substr(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),E(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:D(t))}function r(e,t){w(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(`+JSON.stringify(t)+`)`)}return k(t,n,r,e)}function C(e,t){if(e===!1||e==null)throw Error(t)}function w(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function T(){return Math.random().toString(36).substr(2,8)}function ee(e,t){return{usr:e.state,key:e.key,idx:t}}function E(e,t,n,r){return n===void 0&&(n=null),y({pathname:typeof e==`string`?e:e.pathname,search:``,hash:``},typeof t==`string`?O(t):t,{state:n,key:t&&t.key||r||T()})}function D(e){let{pathname:t=`/`,search:n=``,hash:r=``}=e;return n&&n!==`?`&&(t+=n.charAt(0)===`?`?n:`?`+n),r&&r!==`#`&&(t+=r.charAt(0)===`#`?r:`#`+r),t}function O(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function k(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=b.Pop,c=null,l=u();l??(l=0,o.replaceState(y({},o.state,{idx:l}),``));function u(){return(o.state||{idx:null}).idx}function d(){s=b.Pop;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=b.Push;let r=E(h.location,e,t);n&&n(r,e),l=u()+1;let d=ee(r,l),f=h.createHref(r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=b.Replace;let r=E(h.location,e,t);n&&n(r,e),l=u();let i=ee(r,l),d=h.createHref(r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){let t=i.location.origin===`null`?i.location.href:i.location.origin,n=typeof e==`string`?e:D(e);return n=n.replace(/ $/,`%20`),C(t,`No window.location.(origin|href) available to create URL for href: `+n),new URL(n,t)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(x,d),c=e,()=>{i.removeEventListener(x,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}var A;(function(e){e.data=`data`,e.deferred=`deferred`,e.redirect=`redirect`,e.error=`error`})(A||={});function te(e,t,n){return n===void 0&&(n=`/`),j(e,t,n,!1)}function j(e,t,n,r){let i=me((typeof t==`string`?O(t):t).pathname||`/`,n);if(i==null)return null;let a=M(e);ne(a);let o=null,s=pe(i);for(let e=0;o==null&&e<a.length;++e)o=ue(a[e],s,r);return o}function M(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=``);let i=(e,i,a)=>{let o={relativePath:a===void 0?e.path||``:a,caseSensitive:e.caseSensitive===!0,childrenIndex:i,route:e};o.relativePath.startsWith(`/`)&&(C(o.relativePath.startsWith(r),`Absolute route path "`+o.relativePath+`" nested under path `+(`"`+r+`" is not valid. An absolute child route path `)+`must start with the combined path of all its parent routes.`),o.relativePath=o.relativePath.slice(r.length));let s=Se([r,o.relativePath]),c=n.concat(o);e.children&&e.children.length>0&&(C(e.index!==!0,`Index routes must not have child routes. Please remove `+(`all child routes from route path "`+s+`".`)),M(e.children,t,c,s)),(e.path!=null||e.index)&&t.push({path:s,score:le(s,e.index),routesMeta:c})};return e.forEach((e,t)=>{var n;if(e.path===``||!((n=e.path)!=null&&n.includes(`?`)))i(e,t);else for(let n of N(e.path))i(e,t,n)}),t}function N(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=N(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function ne(e){e.sort((e,t)=>e.score===t.score?F(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var re=/^:[\w-]+$/,ie=3,P=2,ae=1,oe=10,se=-2,ce=e=>e===`*`;function le(e,t){let n=e.split(`/`),r=n.length;return n.some(ce)&&(r+=se),t&&(r+=P),n.filter(e=>!ce(e)).reduce((e,t)=>e+(re.test(t)?ie:t===``?ae:oe),r)}function F(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function ue(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=de({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=de({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Se([a,u.pathname]),pathnameBase:Ce(Se([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Se([a,u.pathnameBase]))}return o}function de(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=fe(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if(r===`*`){let e=s[n]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let c=s[n];return e[r]=i&&!c?void 0:(c||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function fe(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),w(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "`+e+`" will be treated as if it were `+(`"`+e.replace(/\*$/,`/*`)+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+(`please change the route path to "`+e.replace(/\*$/,`/*`)+`".`));let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:n!=null}),n?`/?([^\\/]+)?`:`/([^\\/]+)`));return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function pe(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return w(!1,`The URL path "`+e+`" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent `+(`encoding (`+t+`).`)),e}}function me(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function he(e,t){t===void 0&&(t=`/`);let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?O(e):e,a;return n?(n=xe(n),a=n.startsWith(`/`)?ge(n.substring(1),`/`):ge(n,t)):a=t,{pathname:a,search:we(r),hash:Te(i)}}function ge(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function _e(e,t,n,r){return`Cannot include a '`+e+`' character in a manually specified `+("`to."+t+"` field ["+JSON.stringify(r)+`].  Please separate it out to the `)+("`to."+n+"` field. Alternatively you may provide the full path as ")+`a string in <Link to="..."> and the router will parse it for you.`}function ve(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function ye(e,t){let n=ve(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function be(e,t,n,r){r===void 0&&(r=!1);let i;typeof e==`string`?i=O(e):(i=y({},e),C(!i.pathname||!i.pathname.includes(`?`),_e(`?`,`pathname`,`search`,i)),C(!i.pathname||!i.pathname.includes(`#`),_e(`#`,`pathname`,`hash`,i)),C(!i.search||!i.search.includes(`#`),_e(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=he(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var xe=e=>e.replace(/\/\/+/g,`/`),Se=e=>xe(e.join(`/`)),Ce=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),we=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Te=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e;function Ee(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}var De=[`post`,`put`,`patch`,`delete`];new Set(De);var Oe=[`get`,...De];new Set(Oe);function ke(){return ke=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ke.apply(null,arguments)}var Ae=g.createContext(null),je=g.createContext(null),Me=g.createContext(null),Ne=g.createContext(null),Pe=g.createContext({outlet:null,matches:[],isDataRoute:!1}),Fe=g.createContext(null);function Ie(){return g.useContext(Ne)!=null}function Le(){return!Ie()&&C(!1),g.useContext(Ne).location}function Re(e){g.useContext(Me).static||g.useLayoutEffect(e)}function ze(){let{isDataRoute:e}=g.useContext(Pe);return e?tt():Be()}function Be(){!Ie()&&C(!1);let e=g.useContext(Ae),{basename:t,future:n,navigator:r}=g.useContext(Me),{matches:i}=g.useContext(Pe),{pathname:a}=Le(),o=JSON.stringify(ye(i,n.v7_relativeSplatPath)),s=g.useRef(!1);return Re(()=>{s.current=!0}),g.useCallback(function(n,i){if(i===void 0&&(i={}),!s.current)return;if(typeof n==`number`){r.go(n);return}let c=be(n,JSON.parse(o),a,i.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Se([t,c.pathname])),(i.replace?r.replace:r.push)(c,i.state,i)},[t,r,o,a,e])}function Ve(e,t){return He(e,t)}function He(e,t,n,r){!Ie()&&C(!1);let{navigator:i}=g.useContext(Me),{matches:a}=g.useContext(Pe),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:`/`;o&&o.route;let l=Le(),u;if(t){var d;let e=typeof t==`string`?O(t):t;!(c===`/`||(d=e.pathname)!=null&&d.startsWith(c))&&C(!1),u=e}else u=l;let f=u.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=te(e,{pathname:p}),h=qe(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:Se([c,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Se([c,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),a,n,r);return t&&h?g.createElement(Ne.Provider,{value:{location:ke({pathname:`/`,search:``,hash:``,state:null,key:`default`},u),navigationType:b.Pop}},h):h}function Ue(){let e=et(),t=Ee(e)?e.status+` `+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return g.createElement(g.Fragment,null,g.createElement(`h2`,null,`Unexpected Application Error!`),g.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?g.createElement(`pre`,{style:{padding:`0.5rem`,backgroundColor:`rgba(200,200,200, 0.5)`}},n):null,null)}var We=g.createElement(Ue,null),Ge=class extends g.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error(`React Router caught the following error during render`,e,t)}render(){return this.state.error===void 0?this.props.children:g.createElement(Pe.Provider,{value:this.props.routeContext},g.createElement(Fe.Provider,{value:this.state.error,children:this.props.component}))}};function Ke(e){let{routeContext:t,match:n,children:r}=e,i=g.useContext(Ae);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),g.createElement(Pe.Provider,{value:t},r)}function qe(e,t,n,r){if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,o=n?.errors;if(o!=null){let e=a.findIndex(e=>e.route.id&&o?.[e.route.id]!==void 0);!(e>=0)&&C(!1),a=a.slice(0,Math.min(a.length,e+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let e=0;e<a.length;e++){let t=a[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(c=e),t.route.id){let{loaderData:e,errors:r}=n,i=t.route.loader&&e[t.route.id]===void 0&&(!r||r[t.route.id]===void 0);if(t.route.lazy||i){s=!0,a=c>=0?a.slice(0,c+1):[a[0]];break}}}return a.reduceRight((e,r,i)=>{let l,u=!1,d=null,f=null;n&&(l=o&&r.route.id?o[r.route.id]:void 0,d=r.route.errorElement||We,s&&(c<0&&i===0?(rt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),u=!0,f=null):c===i&&(u=!0,f=r.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,i+1)),m=()=>{let t;return t=l?d:u?f:r.route.Component?g.createElement(r.route.Component,null):r.route.element?r.route.element:e,g.createElement(Ke,{match:r,routeContext:{outlet:e,matches:p,isDataRoute:n!=null},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||i===0)?g.createElement(Ge,{location:n.location,revalidation:n.revalidation,component:d,error:l,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()},null)}var Je=function(e){return e.UseBlocker=`useBlocker`,e.UseRevalidator=`useRevalidator`,e.UseNavigateStable=`useNavigate`,e}(Je||{}),Ye=function(e){return e.UseBlocker=`useBlocker`,e.UseLoaderData=`useLoaderData`,e.UseActionData=`useActionData`,e.UseRouteError=`useRouteError`,e.UseNavigation=`useNavigation`,e.UseRouteLoaderData=`useRouteLoaderData`,e.UseMatches=`useMatches`,e.UseRevalidator=`useRevalidator`,e.UseNavigateStable=`useNavigate`,e.UseRouteId=`useRouteId`,e}(Ye||{});function Xe(e){let t=g.useContext(Ae);return!t&&C(!1),t}function Ze(e){let t=g.useContext(je);return!t&&C(!1),t}function Qe(e){let t=g.useContext(Pe);return!t&&C(!1),t}function $e(e){let t=Qe(e),n=t.matches[t.matches.length-1];return!n.route.id&&C(!1),n.route.id}function et(){let e=g.useContext(Fe),t=Ze(Ye.UseRouteError),n=$e(Ye.UseRouteError);return e===void 0?t.errors?.[n]:e}function tt(){let{router:e}=Xe(Je.UseNavigateStable),t=$e(Ye.UseNavigateStable),n=g.useRef(!1);return Re(()=>{n.current=!0}),g.useCallback(function(r,i){i===void 0&&(i={}),n.current&&(typeof r==`number`?e.navigate(r):e.navigate(r,ke({fromRouteId:t},i)))},[e,t])}var nt={};function rt(e,t,n){!t&&!nt[e]&&(nt[e]=!0)}var it=(e,t,n)=>(``+t+("You can use the `"+e+"` future flag to opt-in early. ")+(`For more information, see `+n+`.`),void 0);function at(e,t){e?.v7_startTransition===void 0&&it(`v7_startTransition`,"React Router will begin wrapping state updates in `React.startTransition` in v7",`https://reactrouter.com/v6/upgrading/future#v7_starttransition`),e?.v7_relativeSplatPath===void 0&&(!t||t.v7_relativeSplatPath===void 0)&&it(`v7_relativeSplatPath`,`Relative route resolution within Splat routes is changing in v7`,`https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath`),t&&(t.v7_fetcherPersist===void 0&&it(`v7_fetcherPersist`,`The persistence behavior of fetchers is changing in v7`,`https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist`),t.v7_normalizeFormMethod===void 0&&it(`v7_normalizeFormMethod`,"Casing of `formMethod` fields is being normalized to uppercase in v7",`https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod`),t.v7_partialHydration===void 0&&it(`v7_partialHydration`,"`RouterProvider` hydration behavior is changing in v7",`https://reactrouter.com/v6/upgrading/future#v7_partialhydration`),t.v7_skipActionErrorRevalidation===void 0&&it(`v7_skipActionErrorRevalidation`,"The revalidation behavior after 4xx/5xx `action` responses is changing in v7",`https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation`))}function ot(e){let{to:t,replace:n,state:r,relative:i}=e;!Ie()&&C(!1);let{future:a,static:o}=g.useContext(Me),{matches:s}=g.useContext(Pe),{pathname:c}=Le(),l=ze(),u=be(t,ye(s,a.v7_relativeSplatPath),c,i===`path`),d=JSON.stringify(u);return g.useEffect(()=>l(JSON.parse(d),{replace:n,state:r,relative:i}),[l,d,i,n,r]),null}function st(e){C(!1)}function ct(e){let{basename:t=`/`,children:n=null,location:r,navigationType:i=b.Pop,navigator:a,static:o=!1,future:s}=e;Ie()&&C(!1);let c=t.replace(/^\/*/,`/`),l=g.useMemo(()=>({basename:c,navigator:a,static:o,future:ke({v7_relativeSplatPath:!1},s)}),[c,s,a,o]);typeof r==`string`&&(r=O(r));let{pathname:u=`/`,search:d=``,hash:f=``,state:p=null,key:m=`default`}=r,h=g.useMemo(()=>{let e=me(u,c);return e==null?null:{location:{pathname:e,search:d,hash:f,state:p,key:m},navigationType:i}},[c,u,d,f,p,m,i]);return h==null?null:g.createElement(Me.Provider,{value:l},g.createElement(Ne.Provider,{children:n,value:h}))}function lt(e){let{children:t,location:n}=e;return Ve(dt(t),n)}var ut=function(e){return e[e.pending=0]=`pending`,e[e.success=1]=`success`,e[e.error=2]=`error`,e}(ut||{});new Promise(()=>{}),g.Component;function dt(e,t){t===void 0&&(t=[]);let n=[];return g.Children.forEach(e,(e,r)=>{if(!g.isValidElement(e))return;let i=[...t,r];if(e.type===g.Fragment){n.push.apply(n,dt(e.props.children,i));return}e.type!==st&&C(!1),e.props.index&&e.props.children&&C(!1);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=dt(e.props.children,i)),n.push(a)}),n}var ft=`6`;try{window.__reactRouterVersion=ft}catch{}var pt=g.startTransition;function mt(e){let{basename:t,children:n,future:r,window:i}=e,a=g.useRef();a.current??=S({window:i,v5Compat:!0});let o=a.current,[s,c]=g.useState({action:o.action,location:o.location}),{v7_startTransition:l}=r||{},u=g.useCallback(e=>{l&&pt?pt(()=>c(e)):c(e)},[c,l]);return g.useLayoutEffect(()=>o.listen(u),[o,u]),g.useEffect(()=>at(r),[r]),g.createElement(ct,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}typeof window<`u`&&window.document!==void 0&&window.document.createElement;var ht;(function(e){e.UseScrollRestoration=`useScrollRestoration`,e.UseSubmit=`useSubmit`,e.UseSubmitFetcher=`useSubmitFetcher`,e.UseFetcher=`useFetcher`,e.useViewTransitionState=`useViewTransitionState`})(ht||={});var gt;(function(e){e.UseFetcher=`useFetcher`,e.UseFetchers=`useFetchers`,e.UseScrollRestoration=`useScrollRestoration`})(gt||={});var _t=e=>e?.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase();function vt(e,t,n=[]){if(t==null)throw Error(`[lucide]: iconNode is required when icon name is used`);return{name:_t(e),size:24,node:t,...n.length>0?{aliases:n}:{}}}var yt=e=>{let t=``,n=!1;for(let r of e){if(r===`-`||r===`_`||r<=` `){n=t.length>0;continue}t.length===0?t+=r.toLowerCase():t+=n?r.toUpperCase():r,n=!1}return t},I=e=>{let t=yt(e);return t.charAt(0).toUpperCase()+t.slice(1)},bt=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),xt={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`};function St(e){return e!=null}function Ct(e,t={}){let n=t.attributeNames??{},r=e=>n[e]??e,i=e.size??e.width??xt.width,a=e.size??e.height??xt.height,o=e.aliases?.filter(e=>typeof e==`string`&&e.trim()!==``).map(e=>`lucide-${e}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...o],c=t.className?.split(` `).filter(Boolean)??[],l=t.includeDefaultClasses===!1?bt(...c):bt(`lucide`,...s,...c),u=t.absoluteStrokeWidth?Number(t.strokeWidth??xt[`stroke-width`])*Number(e.size??e.width??xt.width)/Number(t.size??t.width??xt.width):t.strokeWidth??xt[`stroke-width`];return[`svg`,{...Object.entries(xt).reduce((e,[t,n])=>(e[r(t)]=n,e),{}),...`color`in t&&t.color&&{[r(`stroke`)]:t.color},...`size`in t&&St(t.size)&&{[r(`width`)]:t.size,[r(`height`)]:t.size},...`width`in t&&St(t.width)&&{[r(`width`)]:t.width},...`height`in t&&St(t.height)&&{[r(`height`)]:t.height},[r(`stroke-width`)]:u,...l&&{[r(`class`)]:l},[r(`viewBox`)]:`0 0 ${i} ${a}`,...t.hasA11yProp===!1?{[r(`aria-hidden`)]:`true`}:{},...`attributes`in t&&t.attributes},e.node.map(e=>{let[n,i,a]=e,o=t.nonScalingStroke?{[r(`vector-effect`)]:`non-scaling-stroke`,...i}:i;return a?[n,o,a]:[n,o]})]}function wt(e,t={}){return Ct(e,{...t,attributeNames:{...t.attributeNames,class:`className`,"stroke-width":`strokeWidth`,"stroke-linecap":`strokeLinecap`,"stroke-linejoin":`strokeLinejoin`,"vector-effect":`vectorEffect`}})}var Tt=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},Et=(0,g.createContext)({}),Dt=()=>(0,g.useContext)(Et),Ot=(0,g.forwardRef)(({color:e,size:t,width:n,height:r,strokeWidth:i,absoluteStrokeWidth:a,nonScalingStroke:o,className:s=``,children:c,iconNode:l=[],icon:u={node:l,aliases:[],size:24},...d},f)=>{let{size:p=24,strokeWidth:m=2,absoluteStrokeWidth:h=!1,nonScalingStroke:_=!1,color:v=`currentColor`,className:y=``}=Dt()??{},b=!!c||Tt(d),[x,S,C=[]]=wt(u,{color:e??v,width:n??t??p,height:r??t??p,strokeWidth:i??m,absoluteStrokeWidth:a??h,nonScalingStroke:o??_,className:bt(y,s),hasA11yProp:b,attributes:d});return(0,g.createElement)(x,{ref:f,...S},[...C.map(([e,t])=>(0,g.createElement)(e,t)),...Array.isArray(c)?c:[c]])});function L(e,t=[],n=[]){let r=typeof e==`string`?vt(e,t,n):e,i=(0,g.forwardRef)(({className:e,...t},n)=>(0,g.createElement)(Ot,{ref:n,icon:r,className:e,...t}));return r.name&&(i.displayName=I(r.name)),i}var kt={name:`braces`,size:24,node:[[`path`,{d:`M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1`,key:`ezmyqa`}],[`path`,{d:`M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1`,key:`e1hn23`}]],aliases:[`curly-braces`]};kt.node;var At=L(kt),jt={name:`chevron-down`,size:24,node:[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]};jt.node;var Mt=L(jt),Nt={name:`chevron-right`,size:24,node:[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]};Nt.node;var Pt=L(Nt),Ft={name:`code-xml`,size:24,node:[[`path`,{d:`m18 16 4-4-4-4`,key:`1inbqp`}],[`path`,{d:`m6 8-4 4 4 4`,key:`15zrgr`}],[`path`,{d:`m14.5 4-5 16`,key:`e7oirm`}]],aliases:[`code-2`]};Ft.node;var It=L(Ft),Lt={name:`file-code-corner`,size:24,node:[[`path`,{d:`M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35`,key:`1wthlu`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`m5 16-3 3 3 3`,key:`331omg`}],[`path`,{d:`m9 22 3-3-3-3`,key:`lsp7cz`}]],aliases:[`file-code-2`]};Lt.node;var Rt=L(Lt),zt={name:`file-text`,size:24,node:[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]};zt.node;var Bt=L(zt),Vt={name:`file`,size:24,node:[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}]]};Vt.node;var Ht=L(Vt),Ut={name:`folder-open`,size:24,node:[[`path`,{d:`m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2`,key:`usdka0`}]]};Ut.node;var R=L(Ut),Wt={name:`folder`,size:24,node:[[`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`,key:`1kt360`}]]};Wt.node;var Gt=L(Wt),Kt={name:`house`,size:24,node:[[`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`,key:`5wwlr5`}],[`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,key:`r6nss1`}]],aliases:[`home`]};Kt.node;var qt=L(Kt),Jt={name:`menu`,size:24,node:[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]};Jt.node;var Yt=L(Jt),Xt={name:`search`,size:24,node:[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]};Xt.node;var Zt=L(Xt),Qt={name:`x`,size:24,node:[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]};Qt.node;var $t=L(Qt);function en(e){return e?typeof e==`string`?e:Array.isArray(e)?e.map(en).filter(Boolean).join(` `):typeof e==`object`?Object.entries(e).filter(([,e])=>!!e).map(([e])=>e).join(` `):``:``}function z(...e){return e.map(en).filter(Boolean).join(` `)}var tn=o((e=>{var t=u(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),B=o(((e,t)=>{t.exports=tn()}))();function nn({checked:e,onCheckedChange:t,label:n,className:r,disabled:i=!1}){return(0,B.jsx)(`button`,{type:`button`,role:`switch`,"aria-checked":e,"aria-label":n,disabled:i,onClick:()=>t(!e),className:z(`group inline-flex shrink-0 items-center rounded-full border border-transparent p-0.5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50`,e?`bg-foreground`:`bg-secondary`,r),children:(0,B.jsx)(`span`,{"aria-hidden":`true`,className:z(`size-[18px] rounded-full bg-background shadow-sm transition-transform duration-200`,e&&`translate-x-[18px]`)})})}function rn(){return typeof window<`u`}function an(e){return cn(e)?(e.nodeName||``).toLowerCase():`#document`}function on(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function sn(e){return((cn(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function cn(e){return rn()?e instanceof Node||e instanceof on(e).Node:!1}function ln(e){return rn()?e instanceof Element||e instanceof on(e).Element:!1}function un(e){return rn()?e instanceof HTMLElement||e instanceof on(e).HTMLElement:!1}function dn(e){return!rn()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof on(e).ShadowRoot}function fn(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=mn(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function pn(e){return/^(html|body|#document)$/.test(an(e))}function mn(e){return on(e).getComputedStyle(e)}function hn(e){if(an(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||dn(e)&&e.host||sn(e);return dn(t)?t.host:t}var gn={...g},_n={};function vn(e,t){let n=g.useRef(_n);return n.current===_n&&(n.current=e(t)),n}var yn=gn.useInsertionEffect,bn=yn&&yn!==gn.useLayoutEffect?yn:e=>e();function V(e){let t=vn(xn).current;return t.next=e,bn(t.effect),t.trampoline}function xn(){let e={next:void 0,callback:Sn,trampoline:(...t)=>e.callback?.(...t),effect:()=>{e.callback=e.next}};return e}function Sn(){}var H=typeof document<`u`?g.useLayoutEffect:()=>{};function Cn(e,t){if(e&&!t)return e;if(!e&&t)return t;if(e||t)return{...e,...t}}var wn={};function Tn(e,t,n,r,i){if(!n&&!r&&!i&&!e)return Dn(t);let a=Dn(e);return t&&(a=On(a,t)),n&&(a=On(a,n)),r&&(a=On(a,r)),i&&(a=On(a,i)),a}function En(e){if(e.length===0)return wn;if(e.length===1)return Dn(e[0]);let t=Dn(e[0]);for(let n=1;n<e.length;n+=1)t=On(t,e[n]);return t}function Dn(e){return Mn(e)?{...Nn(e,wn)}:kn(e)}function On(e,t){return Mn(t)?Nn(t,e):An(e,t)}function kn(e){let t={...e};for(let e in t){let n=t[e];jn(e,n)&&(t[e]=Fn(n))}return t}function An(e,t){if(!t)return e;for(let n in t){let r=t[n];switch(n){case`style`:e[n]=Cn(e.style,r);break;case`className`:e[n]=Ln(e.className,r);break;default:e[n]=jn(n,r)?Pn(e[n],r):r}}return e}function jn(e,t){let n=e.charCodeAt(0),r=e.charCodeAt(1),i=e.charCodeAt(2);return n===111&&r===110&&i>=65&&i<=90&&(typeof t==`function`||t===void 0)}function Mn(e){return typeof e==`function`}function Nn(e,t){return Mn(e)?e(t):e??wn}function Pn(e,t){return t?e?(...n)=>{let r=n[0];if(Rn(r)){let i=r;In(i);let a=t(...n);return i.baseUIHandlerPrevented||e?.(...n),a}let i=t(...n);return e?.(...n),i}:Fn(t):e}function Fn(e){return e&&((...t)=>{let n=t[0];return Rn(n)&&In(n),e(...t)})}function In(e){return e.preventBaseUIHandler=()=>{e.baseUIHandlerPrevented=!0},e}function Ln(e,t){return t?e?t+` `+e:t:e}function Rn(e){return typeof e==`object`&&!!e&&`nativeEvent`in e}function zn(e,t){return function(n,...r){let i=new URL(e);return i.searchParams.set(`code`,n.toString()),r.forEach(e=>i.searchParams.append(`args[]`,e)),`${t} error #${n}; visit ${i} for the full message.`}}var Bn=zn(`https://base-ui.com/production-error`,`Base UI`),Vn=g.createContext(void 0);function Hn(e=!1){let t=g.useContext(Vn);if(t===void 0&&!e)throw Error(Bn(16));return t}function Un(e){let{focusableWhenDisabled:t,disabled:n,composite:r=!1,tabIndex:i=0,isNativeButton:a}=e,o=r&&t!==!1,s=r&&t===!1;return{props:g.useMemo(()=>{let e={onKeyDown(e){n&&t&&e.key!==`Tab`&&e.preventDefault()}};return r||(e.tabIndex=i,!a&&n&&(e.tabIndex=t?i:-1)),(a&&(t||o)||!a&&n)&&(e[`aria-disabled`]=n),a&&(!t||s)&&(e.disabled=n),e},[r,n,t,o,s,a,i])}}function Wn(e){return e?.ownerDocument||document}function Gn(e,t,{detail:n=0}={}){e.dispatchEvent(new(on(e)).PointerEvent(`click`,{bubbles:!0,cancelable:!0,composed:!0,detail:n,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,altKey:t.altKey,metaKey:t.metaKey}))}function Kn(e={}){let{disabled:t=!1,focusableWhenDisabled:n,tabIndex:r=0,native:i=!0,composite:a}=e,o=g.useRef(null),s=Hn(!0),c=a??s!==void 0,{props:l}=Un({focusableWhenDisabled:n,disabled:t,composite:c,tabIndex:r,isNativeButton:i}),u=g.useCallback(()=>{let e=o.current;qn(e)&&c&&t&&l.disabled===void 0&&e.disabled&&(e.disabled=!1)},[t,l.disabled,c]);return H(u,[u]),{getButtonProps:g.useCallback((e={})=>{let{onClick:n,onMouseDown:r,onKeyUp:a,onKeyDown:o,onPointerDown:s,...u}=e;return Tn({onClick(e){if(t){e.preventDefault();return}n?.(e)},onMouseDown(e){t||r?.(e)},onKeyDown(e){if(t||(In(e),o?.(e),e.baseUIHandlerPrevented))return;let n=e.target===e.currentTarget,r=e.currentTarget,a=qn(r),s=!i&&Jn(r),l=n&&(i?a:!s),u=e.key===`Enter`,d=e.key===` `,f=r.getAttribute(`role`),p=f?.startsWith(`menuitem`)||f===`option`||f===`gridcell`;if(n&&c&&d){if(e.defaultPrevented&&p)return;e.preventDefault(),(!i||a)&&(e.preventBaseUIHandler(),Gn(r,e));return}if(!l||i||!d&&!u){n&&s&&d&&e.preventDefault();return}e.defaultPrevented||(e.preventDefault(),u&&(e.preventBaseUIHandler(),Gn(r,e)))},onKeyUp(e){if(!t){if(In(e),a?.(e),e.target===e.currentTarget&&i&&c&&qn(e.currentTarget)&&e.key===` `){e.preventDefault();return}e.baseUIHandlerPrevented||e.target===e.currentTarget&&!i&&!c&&!e.defaultPrevented&&e.key===` `&&(e.preventBaseUIHandler(),Gn(e.currentTarget,e))}},onPointerDown(e){if(t){e.preventDefault();return}s?.(e)}},i?{type:`button`}:{role:`button`},l,u)},[t,l,c,i]),buttonRef:V(e=>{o.current=e,u()})}}function qn(e){return un(e)&&e.tagName===`BUTTON`}function Jn(e){return un(e)&&e.tagName===`A`&&!!e.href}function Yn(e,t,n,r){let i=vn(Zn).current;return Qn(i,e,t,n,r)&&er(i,[e,t,n,r]),i.callback}function Xn(e){let t=vn(Zn).current;return $n(t,e)&&er(t,e),t.callback}function Zn(){return{callback:null,cleanup:null,refs:[]}}function Qn(e,t,n,r,i){return e.refs[0]!==t||e.refs[1]!==n||e.refs[2]!==r||e.refs[3]!==i}function $n(e,t){return e.refs.length!==t.length||e.refs.some((e,n)=>e!==t[n])}function er(e,t){if(e.refs=t,t.every(e=>e==null)){e.callback=null;return}e.callback=n=>{if(e.cleanup&&=(e.cleanup(),null),n!=null){let r=Array(t.length).fill(null);for(let e=0;e<t.length;e+=1){let i=t[e];if(i!=null)switch(typeof i){case`function`:{let t=i(n);typeof t==`function`&&(r[e]=t);break}case`object`:i.current=n}}e.cleanup=()=>{for(let e=0;e<t.length;e+=1){let n=t[e];if(n!=null)switch(typeof n){case`function`:{let t=r[e];typeof t==`function`?t():n(null);break}case`object`:n.current=null}}}}}}var tr=18;function nr(e){return tr>=e}function rr(e){if(!g.isValidElement(e))return null;let t=e,n=t.props;return(nr(19)?n?.ref:t.ref)??null}function ir(){}var ar=Object.freeze([]),or=Object.freeze({});function sr(e,t){let n={};for(let r in e){let i=e[r];if(t?.hasOwnProperty(r)){let e=t[r](i);e!=null&&Object.assign(n,e);continue}i===!0?n[`data-${r.toLowerCase()}`]=``:i&&(n[`data-${r.toLowerCase()}`]=i.toString())}return n}function cr(e,t){return typeof e==`function`?e(t):e}function lr(e,t){return typeof e==`function`?e(t):e}function ur(e,t,n={}){let r=t.render;n.enabled!==!1&&(r=mr(r));let i=dr(t,n,r);if(n.enabled===!1)return null;let a=n.state??or;return hr(e,r,i,a)}function dr(e,t,n){let{className:r,style:i}=e,{state:a=or,ref:o,props:s,stateAttributesMapping:c,enabled:l=!0}=t,u=l?cr(r,a):void 0,d=l?lr(i,a):void 0,f=l?sr(a,c):or,p=l&&s?fr(s):void 0,m=l?Cn(f,p)??{}:or;return typeof document<`u`&&(l?m.ref=Array.isArray(o)?Xn([m.ref,rr(n),...o]):Yn(m.ref,rr(n),o):Yn(null,null)),l?(u!==void 0&&(m.className=Ln(m.className,u)),d!==void 0&&(m.style=Cn(m.style,d)),m):or}function fr(e){return Array.isArray(e)?En(e):Tn(void 0,e)}var pr=Symbol.for(`react.lazy`);function mr(e){if(e?.$$typeof!==pr)return e;let t=g.Children.toArray(e)[0];return g.isValidElement(t)?t:e}function hr(e,t,n,r){if(t){if(typeof t==`function`)return t(n,r);let e=Tn(n,t.props);return e.ref=n.ref,g.cloneElement(t,e)}if(e&&typeof e==`string`)return gr(e,n);throw Error(Bn(8))}function gr(e,t){return e===`button`?(0,g.createElement)(`button`,{type:`button`,...t,key:t.key}):e===`img`?(0,g.createElement)(`img`,{alt:``,...t,key:t.key}):g.createElement(e,t)}var _r=g.forwardRef(function(e,t){let{render:n,className:r,disabled:i=!1,focusableWhenDisabled:a=!1,nativeButton:o=!0,style:s,...c}=e,{getButtonProps:l,buttonRef:u}=Kn({disabled:i,focusableWhenDisabled:a,native:o});return ur(`button`,e,{state:{disabled:i},ref:[t,u],props:[c,l]})});function vr(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=vr(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n)}return r}function yr(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=vr(e))&&(r&&(r+=` `),r+=t);return r}var br=e=>typeof e==`boolean`?`${e}`:e===0?`0`:e,xr=yr,Sr=((e,t)=>n=>{if(t?.variants==null)return xr(e,n?.class,n?.className);let{variants:r,defaultVariants:i}=t,a=Object.keys(r).map(e=>{let t=n?.[e],a=i?.[e];if(t===null)return null;let o=br(t)||br(a);return r[e][o]}),o=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return r===void 0||(e[n]=r),e},{});return xr(e,a,t?.compoundVariants?.reduce((e,t)=>{let{class:n,className:r,...a}=t;return Object.entries(a).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...o}[t]):{...i,...o}[t]===n})?[...e,n,r]:e},[]),n?.class,n?.className)})(`group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,{variants:{variant:{default:`bg-primary text-primary-foreground hover:bg-primary/80`,outline:`border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50`,secondary:`bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground`,ghost:`hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50`,destructive:`bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40`,link:`text-primary underline-offset-4 hover:underline`},size:{default:`h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2`,xs:`h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3`,sm:`h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5`,lg:`h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2`,icon:`size-8`,"icon-xs":`size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3`,"icon-sm":`size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg`,"icon-lg":`size-9`}},defaultVariants:{variant:`default`,size:`default`}});function Cr({className:e,variant:t=`default`,size:n=`default`,...r}){return(0,B.jsx)(_r,{"data-slot":`button`,className:z(Sr({variant:t,size:n,className:e})),...r})}function wr({className:e,...t}){return(0,B.jsx)(`nav`,{"aria-label":`breadcrumb`,"data-slot":`breadcrumb`,className:z(e),...t})}function Tr({className:e,...t}){return(0,B.jsx)(`ol`,{"data-slot":`breadcrumb-list`,className:z(`flex flex-wrap items-center gap-1.5 text-sm wrap-break-word text-muted-foreground`,e),...t})}function Er({className:e,...t}){return(0,B.jsx)(`li`,{"data-slot":`breadcrumb-item`,className:z(`inline-flex items-center gap-1`,e),...t})}function Dr({className:e,...t}){return(0,B.jsx)(`span`,{"data-slot":`breadcrumb-page`,role:`link`,"aria-disabled":`true`,"aria-current":`page`,className:z(`font-normal text-foreground`,e),...t})}function Or({children:e,className:t,...n}){return(0,B.jsx)(`li`,{"data-slot":`breadcrumb-separator`,role:`presentation`,"aria-hidden":`true`,className:z(`[&>svg]:size-3.5`,t),...n,children:e??(0,B.jsx)(Pt,{})})}var kr=(0,g.createContext)(null);function Ar({open:e,defaultOpen:t=!1,onOpenChange:n,className:r,children:i,...a}){let[o,s]=(0,g.useState)(t),c=e??o;function l(t){e===void 0&&s(t),n?.(t)}return(0,B.jsx)(kr.Provider,{value:{open:c,setOpen:l},children:(0,B.jsx)(`div`,{"data-slot":`collapsible`,"data-state":c?`open`:`closed`,className:z(r),...a,children:i})})}function jr({className:e,children:t,onClick:n,...r}){let i=(0,g.useContext)(kr);if(!i)throw Error(`CollapsibleTrigger must be used inside Collapsible`);return(0,B.jsx)(`button`,{type:`button`,"data-slot":`collapsible-trigger`,"aria-expanded":i.open,className:z(e),onClick:e=>{n?.(e),e.defaultPrevented||i.setOpen(!i.open)},...r,children:t})}function Mr({className:e,children:t,...n}){let r=(0,g.useContext)(kr);if(!r)throw Error(`CollapsibleContent must be used inside Collapsible`);return r.open?(0,B.jsx)(`div`,{"data-slot":`collapsible-content`,className:z(e),...n,children:t}):null}var Nr=`data-valid`,Pr=`data-invalid`,Fr={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:null,valueMissing:!1},Ir={disabled:!1,valid:null,touched:!1,dirty:!1,filled:!1,focused:!1},Lr={valid(e){return e===null?null:e?{[Nr]:``}:{[Pr]:``}}},Rr={invalid:void 0,name:void 0,validityData:{state:Fr,errors:[],error:``,value:``,initialValue:null},setValidityData:ir,disabled:void 0,setTouched:ir,setDirty:ir,setFilled:ir,setFocused:ir,validationMode:`onSubmit`,shouldValidateOnChange:()=>!1,state:Ir,registerFieldControl:ir,validation:{getValidationProps:(e,t=or)=>t,inputRef:{current:null},registeredInputs:new Map,registerInput:ir,getInputControl:()=>null,commit:async()=>{},change:ir}},zr=g.createContext(Rr);function Br(e=!0){let t=g.useContext(zr);if(t.setValidityData===ir&&!e)throw Error(Bn(28));return t}var Vr=g.createContext({elementRef:{current:null},formRef:{current:{fields:new Map}},errors:{},clearErrors:ir,validationMode:`onSubmit`,submitCountRef:{current:0}});function Hr(){return g.useContext(Vr)}var Ur=0;function Wr(e,t=`mui`){let[n,r]=g.useState(e),i=e||n;return g.useEffect(()=>{n??(Ur+=1,r(`${t}-${Ur}`))},[n,t]),i}var Gr=gn.useId;function Kr(e,t){if(Gr!==void 0){let n=Gr();return e??(t?`${t}-${n}`:n)}return Wr(e,t)}function qr(e){return Kr(e,`base-ui`)}var Jr=g.createContext({controlId:void 0,registerControlId:ir,resetControlId:ir,labelId:void 0,setLabelId:ir,messageIds:[],setMessageIds:ir,getDescriptionProps:e=>e});function Yr(){return g.useContext(Jr)}function Xr(e={}){let{id:t,enabled:n=!0}=e,{controlId:r,registerControlId:i,resetControlId:a}=Yr(),o=qr(),s=vn(()=>Symbol()),c=g.useRef(!1),l=g.useRef(!1),u=V(()=>{c.current&&i!==ir&&(c.current=!1,i(s.current,void 0))});return H(()=>{if(!n||i===ir){u();return}let e;if(t!==void 0)l.current=!0,e=t;else if(l.current)e=o;else{a();return}if(e===void 0){u();return}c.current=!0,i(s.current,e)},[t,n,i,a,o,s,u]),H(()=>u,[u]),(n?r:void 0)??t??o}function Zr(){return typeof navigator>`u`?{userAgent:``,platform:``,maxTouchPoints:0}:{userAgent:navigator.userAgent,platform:navigator.platform??``,maxTouchPoints:navigator.maxTouchPoints??0}}var{userAgent:Qr,platform:$r,maxTouchPoints:ei}=Zr(),ti=Qr.toLowerCase(),ni=$r.toLowerCase(),ri=/^i(os$|p)/.test(ni)||ni===`macintel`&&ei>1,ii=`android`,ai=ni===ii||ti.includes(ii),U=!ri&&ni.startsWith(`mac`);ni.startsWith(`win`),!ai&&/^(linux|chrome os)/.test(ni);var oi=U||ri,si=typeof CSS<`u`&&!!CSS.supports?.(`-webkit-backdrop-filter:none`);!si&&ti.includes(`firefox`),!si&&ti.includes(`chrom`);var ci=oi,li=/jsdom|happydom/.test(ti);function ui(e){let t=e.activeElement;for(;t?.shadowRoot?.activeElement!=null;)t=t.shadowRoot.activeElement;return t}function W(e,t){if(!e||!t)return!1;let n=t.getRootNode?.();if(e.contains(t))return!0;if(n&&dn(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function di(e){return`composedPath`in e?e.composedPath()[0]??e.target:e.target}var fi=`data-base-ui-focusable`,pi=`data-starting-style`,mi=`data-ending-style`,hi={[pi]:``},gi={[mi]:``},_i={transitionStatus(e){return e===`starting`?hi:e===`ending`?gi:null}},vi=`data-open`,yi=`data-closed`,bi=`data-anchor-hidden`,xi={[vi]:``},Si={[yi]:``},Ci={[bi]:``},wi={open(e){return e?xi:Si},anchorHidden(e){return e?Ci:null}},Ti={...wi,..._i};function Ei(e,t){if(t==null)return!1;if(`composedPath`in e)return e.composedPath().includes(t);let n=e;return n.target!=null&&t.contains(n.target)}function Di(e){return e.matches(`html,body`)}function Oi(e){return un(e)&&e.matches(`input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])`)}function ki(e){return e?e.getAttribute(`role`)===`combobox`&&Oi(e):!1}function Ai(e){return e?e.hasAttribute(`data-base-ui-focusable`)?e:e.querySelector(`[data-base-ui-focusable]`)||e:null}function ji(e,t,n=!0){return e.filter(e=>e.parentId===t).flatMap(t=>[...!n||t.context?.open?[t]:[],...ji(e,t.id,n)])}function Mi(e,t){let n=[],r=e.find(e=>e.id===t)?.parentId;for(;r;){let t=e.find(e=>e.id===r);r=t?.parentId,t&&(n=n.concat(t))}return n}function Ni(e){e.preventDefault(),e.stopPropagation()}function Pi(e){return`nativeEvent`in e}function Fi(e){return e.pointerType===``&&e.isTrusted?!0:ai&&e.pointerType?e.type===`click`&&e.buttons===1:e.detail===0&&!e.pointerType}function Ii(e){return li?!1:!ai&&e.width===0&&e.height===0||ai&&e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType===`mouse`||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0&&e.pointerType===`touch`}function Li(e){let t=e.type;return t===`click`||t===`mousedown`||t===`keydown`||t===`keyup`}function Ri(e){return e.visibility===`hidden`||e.visibility===`collapse`}function zi(e,t=e?mn(e):null){return!e||!e.isConnected||!t||Ri(t)?!1:typeof e.checkVisibility==`function`?e.checkVisibility():t.display!==`none`&&t.display!==`contents`}var Bi=`a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]`;function Vi(e){let t=e.assignedSlot;if(t)return t;if(e.parentElement)return e.parentElement;let n=e.getRootNode();return dn(n)?n.host:null}function Hi(e){for(let t of Array.from(e.children))if(an(t)===`summary`)return t;return null}function Ui(e,t){let n=Hi(t);return!!n&&(e===n||W(n,e))}function G(e){let t=e?an(e):``;return e!=null&&e.matches(Bi)&&(t!==`summary`||e.parentElement!=null&&an(e.parentElement)===`details`&&Hi(e.parentElement)===e)&&(t!==`details`||Hi(e)==null)&&(t!==`input`||e.type!==`hidden`)}function K(e){if(!G(e)||!e.isConnected||e.matches(`:disabled`))return!1;for(let t=e;t;t=Vi(t)){let n=t!==e,r=an(t)===`slot`;if(t.hasAttribute(`inert`)||n&&an(t)===`details`&&!t.open&&!Ui(e,t)||t.hasAttribute(`hidden`)||!r&&!Wi(t,n))return!1}return!0}function Wi(e,t){let n=mn(e);return t?n.display!==`none`:zi(e,n)}function Gi(e){let t=e.tabIndex;if(t<0){let t=an(e);if(t===`details`||t===`audio`||t===`video`||un(e)&&e.isContentEditable)return 0}return t}function Ki(e){if(an(e)!==`input`)return null;let t=e;return t.type===`radio`&&t.name!==``?t:null}function qi(e,t){let n=Ki(e);if(!n)return!0;let r=t.find(e=>{let t=Ki(e);return t?.name===n.name&&t.form===n.form&&t.checked});return r?r===n:t.find(e=>{let t=Ki(e);return t?.name===n.name&&t.form===n.form})===n}function Ji(e){if(un(e)&&an(e)===`slot`){let t=e.assignedElements({flatten:!0});if(t.length>0)return t}return un(e)&&e.shadowRoot?Array.from(e.shadowRoot.children):Array.from(e.children)}function Yi(e,t){Ji(e).forEach(e=>{G(e)&&t.push(e),Yi(e,t)})}function Xi(e,t,n){Ji(e).forEach(e=>{un(e)&&e.matches(t)&&n.push(e),Xi(e,t,n)})}function Zi(e){return K(e)&&Gi(e)>=0}function Qi(e){let t=[];return Yi(e,t),t.filter(K)}function $i(e){let t=Qi(e);return t.filter(e=>Gi(e)>=0&&qi(e,t))}function ea(e,t){let n=$i(e),r=n.length;if(r===0)return;let i=ui(Wn(e)),a=n.indexOf(i);return n[a===-1?t===1?0:r-1:a+t]}function ta(e){return ea(Wn(e).body,1)||e}function na(e){return ea(Wn(e).body,-1)||e}function ra(e,t){let n=t||e.currentTarget,r=e.relatedTarget;return!r||!W(n,r)}function ia(e){$i(e).forEach(e=>{e.dataset.tabindex=e.getAttribute(`tabindex`)||``,e.setAttribute(`tabindex`,`-1`)})}function aa(e){let t=[];Xi(e,`[data-tabindex]`,t),t.forEach(e=>{let t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute(`tabindex`,t):e.removeAttribute(`tabindex`)})}function oa(e){g.useEffect(e,ar)}var sa=0,ca=class e{static create(){return new e}currentId=sa;start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=sa,t()},e)}isStarted(){return this.currentId!==sa}clear=()=>{this.currentId!==sa&&(clearTimeout(this.currentId),this.currentId=sa)};disposeEffect=()=>this.clear};function la(){let e=vn(ca.create).current;return oa(e.disposeEffect),e}var ua=null;globalThis.requestAnimationFrame;var da=new class{callbacks=[];callbacksCount=0;nextId=1;startId=1;isScheduled=!1;tick=e=>{this.isScheduled=!1;let t=this.callbacks,n=this.callbacksCount;if(this.callbacks=[],this.callbacksCount=0,this.startId=this.nextId,n>0)for(let n=0;n<t.length;n+=1)t[n]?.(e)};request(e){let t=this.nextId;return this.nextId+=1,this.callbacks.push(e),this.callbacksCount+=1,this.isScheduled||=(requestAnimationFrame(this.tick),!0),t}cancel(e){let t=e-this.startId;t<0||t>=this.callbacks.length||this.callbacks[t]!==null&&(this.callbacks[t]=null,--this.callbacksCount)}},fa=class e{static create(){return new e}static request(e){return da.request(e)}static cancel(e){return da.cancel(e)}currentId=ua;request(e){this.cancel(),this.currentId=da.request(()=>{this.currentId=ua,e()})}cancel=()=>{this.currentId!==ua&&(da.cancel(this.currentId),this.currentId=ua)};disposeEffect=()=>this.cancel};function pa(){let e=vn(fa.create).current;return oa(e.disposeEffect),e}function ma(e){return e==null?e:`current`in e?e.current:e}var ha=null;function ga(e){if(!ha){let e=[];ha=e,queueMicrotask(()=>{ha=null,_.flushSync(()=>{for(let t of e)t()})})}ha.push(e)}function _a(e,t=!1,n=!1){let r=pa();return V((i,a=null)=>{r.cancel();let o=ma(e);if(o==null)return;let s=o,c=()=>{if(!n){_.flushSync(i);return}ga(()=>{a?.aborted||i()})};if(typeof s.getAnimations!=`function`||globalThis.BASE_UI_ANIMATIONS_DISABLED){i();return}function l(){Promise.all(s.getAnimations().map(e=>e.finished)).then(()=>{a?.aborted||c()},()=>{if(!a?.aborted){if(s.getAnimations().some(e=>e.pending||e.playState!==`finished`)){l();return}c()}})}if(t){let e=pi;if(!s.hasAttribute(e)){r.request(l);return}let t=new MutationObserver(()=>{s.hasAttribute(e)||(t.disconnect(),l())});t.observe(s,{attributes:!0,attributeFilter:[e]}),a?.addEventListener(`abort`,()=>t.disconnect(),{once:!0});return}r.request(l)})}function va(e){let{enabled:t=!0,open:n,ref:r,batch:i=!1,onComplete:a}=e,o=V(a),s=_a(r,n,i);g.useEffect(()=>{if(!t)return;let e=new AbortController;return s(o,e.signal),()=>{e.abort()}},[t,n,o,s])}function ya(e,t=!1,n=!1,r=!1){let[i,a]=g.useState(e&&t?`idle`:void 0),[o,s]=g.useState(e&&!r);return e&&!o&&(s(!0),a(`starting`)),!e&&o&&i!==`ending`&&!n&&a(`ending`),!e&&!o&&i===`ending`&&a(void 0),H(()=>{if(!e&&o&&i!==`ending`&&n){let e=fa.request(()=>{a(`ending`)});return()=>{fa.cancel(e)}}},[e,o,i,n]),H(()=>{if(!e||t)return;let n=fa.request(()=>{a(void 0)});return()=>{fa.cancel(n)}},[t,e]),H(()=>{if(!e||!t)return;e&&o&&i!==`idle`&&a(`starting`);let n=fa.request(()=>{a(`idle`)});return()=>{fa.cancel(n)}},[t,e,o,i]),{mounted:o,setMounted:s,transitionStatus:i}}function ba({controlled:e,default:t,name:n,state:r=`value`}){let{current:i}=g.useRef(e!==void 0),[a,o]=g.useState(t);return[i&&e!==void 0?e:a,g.useCallback(e=>{i||o(e)},[])]}function xa(e,t,n,r,i=!0,a){let{registerFieldControl:o}=Br(),s=vn(()=>Symbol());H(()=>{let c=s.current;if(!i){o(c,void 0);return}o(c,{controlRef:e,getValue:r,id:t,name:a,value:n})},[e,i,r,t,a,o,s,n]),H(()=>{let e=s.current;return()=>{o(e,void 0)}},[o,s])}function q(e,t){let n=g.useRef(e),r=V(t);H(()=>{n.current!==e&&r(n.current),n.current=e},[e,r])}var Sa=`none`,Ca=`trigger-press`,wa=`outside-press`,Ta=`close-press`,Ea=`focus-out`,Da=`escape-key`,Oa=`imperative-action`;function ka(e,t,n,r){let i=!1,a=!1,o=r??or;return{reason:e,event:t??new Event(`base-ui`),cancel(){i=!0},allowPropagation(){a=!0},get isCanceled(){return i},get isPropagationAllowed(){return a},trigger:n,...o}}var Aa=g.forwardRef(function(e,t){let{render:n,className:r,id:i,name:a,value:o,disabled:s=!1,onValueChange:c,defaultValue:l,autoFocus:u=!1,style:d,...f}=e,{state:p,name:m,disabled:h,setTouched:_,setDirty:v,validityData:y,setFocused:b,setFilled:x,validationMode:S,validation:C}=Br(),{clearErrors:w,elementRef:T,submitCountRef:ee}=Hr(),E=h||s,D=m??a,O={...p,disabled:E},{labelId:k}=Yr(),A=Xr({id:i}),[te]=ba({controlled:o,default:l,name:`FieldControl`,state:`value`}),j=o!==void 0,M=j?te:void 0,N=M==null?void 0:String(M),ne=V(()=>C.inputRef.current?.value);xa(C.inputRef,A,N,ne,!E,a),H(()=>{let e=N??C.inputRef.current?.value;e!==void 0&&x(e!==``)},[N,C.inputRef,x]),q(N,()=>{N!==void 0&&(w(D),v(N!==(y.initialValue??``)),C.change(N))});let re=g.useRef(null),ie=la();return H(()=>{u&&re.current===ui(Wn(re.current))&&b(!0)},[u,b]),ur(`input`,e,{ref:[t,re],state:O,props:[{id:A,disabled:E,name:D,ref:C.inputRef,"aria-labelledby":k,autoFocus:u,...j?{value:M}:{defaultValue:l},onChange(e){let t=e.currentTarget.value,n=ka(Sa,e.nativeEvent);c?.(t,n),!j&&(v(t!==(y.initialValue??``)),x(t!==``),!e.nativeEvent.defaultPrevented&&!n.isCanceled&&(w(D),C.change(t)))},onFocus(){b(!0)},onBlur(e){if(_(!0),b(!1),S===`onBlur`){let t=e.currentTarget.value;C.commit(t),j&&queueMicrotask(()=>{let e=C.inputRef.current?.value;e!==void 0&&e!==t&&e!==(y.initialValue??``)&&C.commit(e)})}},onKeyDown(e){if(e.currentTarget.tagName===`INPUT`&&e.key===`Enter`){_(!0);let t=e.currentTarget.value,n=e.currentTarget.form;if(n&&n===T.current&&!e.defaultPrevented){let t=e.currentTarget,n=ee.current;ie.start(0,()=>{ee.current===n&&C.commit(t.value)})}else C.commit(t)}}},f,e=>C.getValidationProps(E,e)],stateAttributesMapping:Lr})}),ja=g.forwardRef(function(e,t){return(0,B.jsx)(Aa,{ref:t,...e})}),Ma=(0,g.forwardRef)(function({className:e,type:t,...n},r){return(0,B.jsx)(ja,{ref:r,type:t,"data-slot":`input`,className:z(`h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40`,e),...n})});function Na({className:e,viewportClassName:t,children:n,...r}){return(0,B.jsx)(`div`,{"data-slot":`scroll-area`,className:z(`relative overflow-hidden`,e),...r,children:(0,B.jsx)(`div`,{"data-slot":`scroll-area-viewport`,className:z(`h-full w-full overflow-auto`,t),children:n})})}var Pa=g.createContext(void 0);function Fa(e){let t=g.useContext(Pa);if(!e&&t===void 0)throw Error(Bn(27));return t}var Ia=g.forwardRef(function(e,t){let{render:n,className:r,style:i,forceRender:a=!1,...o}=e,s=Fa(),c=s.useState(`open`),l=s.useState(`nested`),u=s.useState(`mounted`);return ur(`div`,e,{state:{open:c,transitionStatus:s.useState(`transitionStatus`)},ref:[s.context.backdropRef,t],stateAttributesMapping:Ti,props:[{role:`presentation`,hidden:!u,style:{userSelect:`none`,WebkitUserSelect:`none`}},o],enabled:a||!l})}),La=g.forwardRef(function(e,t){let{render:n,className:r,style:i,disabled:a=!1,nativeButton:o=!0,...s}=e,c=Fa(),l=c.useState(`open`),{getButtonProps:u,buttonRef:d}=Kn({disabled:a,native:o}),f={disabled:a};function p(e){l&&c.setOpen(!1,ka(Ta,e.nativeEvent))}return ur(`button`,e,{state:f,ref:[t,d],props:[{onClick:p},s,u]})});function J(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}function Ra(...e){return()=>{for(let t=0;t<e.length;t+=1){let n=e[t];n&&n()}}}function za(e){let t=vn(Ba,e).current;return t.next=e,H(t.effect),t}function Ba(e){let t={current:e,next:e,effect:()=>{t.current=t.next}};return t}var Va={clipPath:`inset(50%)`,overflow:`hidden`,whiteSpace:`nowrap`,border:0,padding:0,width:1,height:1,margin:-1},Ha={...Va,position:`fixed`,top:0,left:0};({...Va});var Ua=g.forwardRef(function(e,t){let[n,r]=g.useState();H(()=>{ci&&si&&r(`button`)},[]);let i={tabIndex:0,role:n};return(0,B.jsx)(`span`,{...e,ref:t,style:Ha,"aria-hidden":!n||void 0,...i,"data-base-ui-focus-guard":``})});function Wa(e){return`data-base-ui-${e}`}var Ga=0;function Ka(e,t={}){let{preventScroll:n=!1,sync:r=!1,shouldFocus:i}=t;cancelAnimationFrame(Ga);function a(){(!i||i())&&e?.focus({preventScroll:n})}if(r)return a(),ir;let o=requestAnimationFrame(a);return Ga=o,()=>{Ga===o&&(cancelAnimationFrame(o),Ga=0)}}var qa={inert:new WeakMap,"aria-hidden":new WeakMap},Ja=`data-base-ui-inert`,Ya={inert:new WeakSet,"aria-hidden":new WeakSet},Xa=new WeakMap,Za=0;function Qa(e){return Ya[e]}function $a(e){return e?dn(e)?e.host:$a(e.parentNode):null}var eo=(e,t)=>t.map(t=>{if(e.contains(t))return t;let n=$a(t);return e.contains(n)?n:null}).filter(e=>e!=null),to=e=>{let t=new Set;return e.forEach(e=>{let n=e;for(;n&&!t.has(n);)t.add(n),n=n.parentNode}),t},no=(e,t,n)=>{let r=[],i=e=>{e&&!n.has(e)&&Array.from(e.children).forEach(e=>{an(e)!==`script`&&(t.has(e)?i(e):r.push(e))})};return i(e),r};function ro(e,t,n,r,{mark:i=!0}){let a=null;r?a=`inert`:n&&(a=`aria-hidden`);let o=null,s=null,c=eo(t,e),l=i?no(t,to(c),new Set(c)):[],u=[],d=[];if(a){let e=qa[a],n=Qa(a);s=n,o=e;let r=eo(t,Array.from(t.querySelectorAll(`[aria-live]`))),i=c.concat(r);no(t,to(i),new Set(i)).forEach(t=>{let r=t.getAttribute(a),i=r!==null&&r!==`false`,o=(e.get(t)||0)+1;e.set(t,o),u.push(t),o===1&&i&&n.add(t),i||t.setAttribute(a,a===`inert`?``:`true`)})}return i&&l.forEach(e=>{let t=(Xa.get(e)||0)+1;Xa.set(e,t),d.push(e),t===1&&e.setAttribute(Ja,``)}),Za+=1,()=>{o&&u.forEach(e=>{let t=(o.get(e)||0)-1;o.set(e,t),t||(!s?.has(e)&&a&&e.removeAttribute(a),s?.delete(e))}),i&&d.forEach(e=>{let t=(Xa.get(e)||0)-1;Xa.set(e,t),t||e.removeAttribute(Ja)}),--Za,Za||(qa.inert=new WeakMap,qa[`aria-hidden`]=new WeakMap,Ya.inert=new WeakSet,Ya[`aria-hidden`]=new WeakSet,Xa=new WeakMap)}}function io(e,t={}){let{ariaHidden:n=!1,inert:r=!1,mark:i=!0}=t,a=Wn(e[0]).body;return ro(e,a,n,r,{mark:i})}var ao={clipPath:`inset(50%)`,position:`fixed`,top:0,left:0},oo=g.createContext(null),so=()=>g.useContext(oo),co=Wa(`portal`);function lo(e={}){let{ref:t,container:n,componentProps:r=or,elementProps:i}=e,a=Kr(),o=so()?.portalNode,[s,c]=g.useState(null),[l,u]=g.useState(null),d=V(e=>{e!==null&&u(e)}),f=g.useRef(null);H(()=>{if(n===null){f.current&&(f.current=null,u(null),c(null));return}let e=(n&&(cn(n)?n:n.current))??o??document.body;if(e==null){f.current&&(f.current=null,u(null),c(null));return}f.current!==e&&(f.current=e,u(null),c(e))},[n,o]);let p=ur(`div`,r,{ref:[t,d],props:[{id:a,[co]:``},i]}),m=s&&p?_.createPortal(p,s):null;return{node:l,nodeId:g.isValidElement(p)?p.props.id:void 0,subtree:m}}var uo=g.forwardRef(function(e,t){let{render:n,className:r,style:i,children:a,container:o,portalOwnerRole:s,...c}=e,{node:l,nodeId:u,subtree:d}=lo({container:o,ref:t,componentProps:e,elementProps:c}),f=g.useRef(null),p=g.useRef(null),m=g.useRef(null),h=g.useRef(null),[v,y]=g.useState(null),b=g.useRef(!1),x=v?.modal,S=v?.open,C=!!v&&!v.modal&&v.open&&!!l;g.useEffect(()=>{if(!l||x)return;function e(e){l&&e.relatedTarget&&ra(e)&&(e.type===`focusin`?b.current&&=(aa(l),!1):(ia(l),b.current=!0))}return Ra(J(l,`focusin`,e,!0),J(l,`focusout`,e,!0))},[l,x]),H(()=>{l&&S===!0&&b.current&&(aa(l),b.current=!1)},[S,l]);let w=g.useMemo(()=>({beforeOutsideRef:f,afterOutsideRef:p,beforeInsideRef:m,afterInsideRef:h,portalNode:l,setFocusManagerState:y}),[l]);return(0,B.jsxs)(g.Fragment,{children:[d,(0,B.jsxs)(oo.Provider,{value:w,children:[C&&l&&(0,B.jsx)(Ua,{"data-type":`outside`,ref:f,onFocus:e=>{ra(e,l)?m.current?.focus():na(v?v.domReference:null)?.focus()}}),C&&l&&(0,B.jsx)(`span`,{role:s,"aria-owns":u,style:ao}),l&&_.createPortal(a,l),C&&l&&(0,B.jsx)(Ua,{"data-type":`outside`,ref:p,onFocus:e=>{ra(e,l)?h.current?.focus():(ta(v?v.domReference:null)?.focus(),v?.closeOnFocusOut&&v?.onOpenChange(!1,ka(`focus-out`,e.nativeEvent)))}})]})]})});function fo(){let e=new Map;return{emit(t,n){e.get(t)?.forEach(e=>e(n))},on(t,n){e.has(t)||e.set(t,new Set),e.get(t).add(n)},off(t,n){e.get(t)?.delete(n)}}}var po=g.createContext(null),mo=g.createContext(null),ho=()=>g.useContext(po)?.id||null,Y=e=>{let t=g.useContext(mo);return e??t};function go(e,t){let n=on(di(e));return e instanceof n.KeyboardEvent?`keyboard`:e instanceof n.FocusEvent?t||`keyboard`:`pointerType`in e?e.pointerType||`keyboard`:`touches`in e?`touch`:e instanceof n.MouseEvent?t||(e.detail===0?`keyboard`:`mouse`):``}var _o=20,vo=[];function yo(){vo=vo.filter(e=>e.deref()?.isConnected)}function bo(e){yo(),e&&an(e)!==`body`&&(vo.push(new WeakRef(e)),vo.length>_o&&(vo=vo.slice(-20)))}function xo(){return yo(),vo[vo.length-1]?.deref()}function X(e){return e?Zi(e)?e:$i(e)[0]||e:null}function So(e){if(e.hasAttribute(`tabindex`)&&!e.hasAttribute(`data-tabindex`)||!e.getAttribute(`role`)?.includes(`dialog`))return;let t=Qi(e).filter(e=>{let t=e.getAttribute(`data-tabindex`)||``;return Zi(e)||e.hasAttribute(`data-tabindex`)&&!t.startsWith(`-`)}),n=e.getAttribute(`tabindex`);t.length===0?n!==`0`&&(e.setAttribute(`tabindex`,`0`),e.setAttribute(`data-tabindex`,`0`)):(n!==`-1`||e.hasAttribute(`data-tabindex`)&&e.getAttribute(`data-tabindex`)!==`-1`)&&(e.setAttribute(`tabindex`,`-1`),e.setAttribute(`data-tabindex`,`-1`))}function Co(e){let{context:t,children:n,disabled:r=!1,initialFocus:i=!0,returnFocus:a=!0,restoreFocus:o=!1,modal:s=!0,closeOnFocusOut:c=!0,openInteractionType:l=``,nextFocusableElement:u,previousFocusableElement:d,beforeContentFocusGuardRef:f,externalTree:p,getInsideElements:m}=e,h=`rootStore`in t?t.rootStore:t,_=h.useState(`open`),v=h.useState(`domReferenceElement`),y=h.useState(`floatingElement`),{events:b,dataRef:x}=h.context,S=V(()=>x.current.floatingContext?.nodeId),C=i===!1,w=ki(v)&&C,T=za(i),ee=za(a),E=za(l),D=za(_),O=Y(p),k=so(),A=g.useRef(!1),te=g.useRef(!1),j=g.useRef(!1),M=g.useRef(null),N=g.useRef(``),ne=g.useRef(``),re=g.useRef(null),ie=g.useRef(null),P=Yn(re,f,k?.beforeInsideRef),ae=Yn(ie,k?.afterInsideRef),oe=la(),se=la(),ce=pa(),le=k!=null,F=Ai(y),ue=V((e=F)=>e?$i(e):[]),de=V(()=>m?.().filter(e=>e!=null)??[]);g.useEffect(()=>{if(r||!s)return;function e(e){e.key===`Tab`&&W(F,ui(Wn(F)))&&ue().length===0&&!w&&Ni(e)}return J(Wn(F),`keydown`,e)},[r,F,s,w,ue]),g.useEffect(()=>{if(r||!_)return;let e=Wn(F);function t(){j.current=!1}function n(e){let t=di(e),n=de(),r=W(y,t)||W(v,t)||W(k?.portalNode,t)||n.some(e=>e===t||W(e,t));j.current=!r,ne.current=e.pointerType||`keyboard`,t?.closest(`[data-base-ui-click-trigger]`)&&(te.current=!0,se.start(0,()=>{te.current=!1}))}function i(){ne.current=`keyboard`}return Ra(J(e,`pointerdown`,n,!0),J(e,`pointerup`,t,!0),J(e,`pointercancel`,t,!0),J(e,`keydown`,i,!0),t)},[r,y,v,F,_,k,se,de]),g.useEffect(()=>{if(r||!c)return;let e=Wn(F);function t(){te.current=!0,se.start(0,()=>{te.current=!1})}function n(e){let t=di(e);Zi(t)&&(M.current=t)}function i(t){let n=t.relatedTarget,r=t.currentTarget,i=di(t);s&&n==null&&i!=null&&W(y,i)&&bo(i),queueMicrotask(()=>{let a=S(),c=h.context.triggerElements,l=de(),f=n?.hasAttribute(Wa(`focus-guard`))&&[re.current,ie.current,k?.beforeInsideRef.current,k?.afterInsideRef.current,k?.beforeOutsideRef.current,k?.afterOutsideRef.current,ma(d),ma(u)].includes(n),p=!(W(v,n)||W(y,n)||W(n,y)||W(k?.portalNode,n)||l.some(e=>e===n||W(e,n))||c.hasMatchingElement(e=>W(e,n))||f||O&&(ji(O.nodesRef.current,a).find(e=>W(e.context?.elements.floating,n)||W(e.context?.elements.domReference,n))||Mi(O.nodesRef.current,a).find(e=>[e.context?.elements.floating,Ai(e.context?.elements.floating)].includes(n)||e.context?.elements.domReference===n)));if(r===v&&F&&So(F),o&&r!==v&&!zi(i)&&ui(e)===e.body){if(un(F)&&(F.focus(),o===`popup`)){ce.request(()=>{F.focus()});return}let e=ue(),t=M.current,n=(t&&e.includes(t)?t:null)||e[e.length-1]||F;un(n)&&n.focus()}if(x.current.insideReactTree){x.current.insideReactTree=!1;return}(w||!s)&&n&&p&&!te.current&&(w||n!==xo())&&(A.current=!0,h.setOpen(!1,ka(Ea,t)))})}function a(){j.current||(x.current.insideReactTree=!0,oe.start(0,()=>{x.current.insideReactTree=!1}))}let l=un(v)?v:null;if(y||l)return Ra(l&&J(l,`focusout`,i),l&&J(l,`pointerdown`,t),y&&J(y,`focusin`,n),y&&J(y,`focusout`,i),y&&k&&J(y,`focusout`,a,!0))},[r,v,y,F,s,O,k,h,c,o,ue,w,S,x,oe,se,ce,u,d,de]),g.useEffect(()=>{if(r||!y||!_)return;let e=Array.from(k?.portalNode?.querySelectorAll(`[${Wa(`portal`)}]`)||[]),t=(O?Mi(O.nodesRef.current,S()):[]).find(e=>ki(e.context?.elements.domReference||null))?.context?.elements.domReference,n=io([y,...e,re.current,ie.current,k?.beforeOutsideRef.current,k?.afterOutsideRef.current,...de(),t,ma(d),ma(u),w?v:null].filter(e=>e!=null),{ariaHidden:s||w,mark:!1}),i=io([y,...e].filter(e=>e!=null));return()=>{i(),n()}},[_,r,v,y,s,k,w,O,S,u,d,de]),H(()=>{if(!_||r||!un(F))return;N.current=``,ne.current=``;let e=Wn(F),t=ui(e);queueMicrotask(()=>{let n=T.current,r=typeof n==`function`?n(E.current||``):n;if(r===void 0||r===!1||W(F,t))return;let i=null,a=()=>(i??=ue(F),i[0]||F),o;o=r===!0||r===null?a():ma(r),o||=a();let s=W(F,ui(e));Ka(o,{preventScroll:o===F,shouldFocus(){if(!D.current)return!1;if(s)return!0;let t=ui(e);return!(t!==o&&W(F,t))}})})},[r,_,F,ue,T,E,D]),H(()=>{if(r||!F)return;let e=Wn(F),t=ui(e),n=E.current==null;bo(t);function i(e){if(e.open||(N.current=go(e.nativeEvent,ne.current)),e.reason===`trigger-hover`&&e.nativeEvent.type===`mouseleave`&&(A.current=!0),e.reason===`outside-press`){if(e.nested)A.current=!1;else if(Fi(e.nativeEvent)||Ii(e.nativeEvent))A.current=!1;else{let e=!1;Wn(F).createElement(`div`).focus({get preventScroll(){return e=!0,!1}}),e?A.current=!1:A.current=!0}}}b.on(`openchange`,i);function a(e){let r=ee.current,i=typeof r==`function`?r(e):r;if(i===void 0||i===!1)return null;i===null&&(i=!0);let a=v?.isConnected?v:null,o=t?.isConnected&&an(t)!==`body`?t:null,s=n?o||a:a||o;return s||=xo()||null,typeof i==`boolean`?s:ma(i)||s||null}return()=>{b.off(`openchange`,i);let t=ui(e),n=de(),r=W(y,t)||n.some(e=>e===t||W(e,t))||O&&ji(O.nodesRef.current,S(),!1).some(e=>W(e.context?.elements.floating,t)),o=ee.current,s=N.current,c=a(s);queueMicrotask(()=>{let n=X(c),i=typeof o!=`boolean`;if(o&&!A.current&&un(n)&&(i||n===t||t===e.body||r)){let e={preventScroll:!0};s===`keyboard`&&(e.focusVisible=!0),n.focus(e)}A.current=!1})}},[r,y,F,ee,E,b,O,v,S,de]),H(()=>{if(!si||_||!y)return;let e=ui(Wn(y));un(e)&&Oi(e)&&W(y,e)&&e.blur()},[_,y]),H(()=>{if(!r&&k)return k.setFocusManagerState({modal:s,closeOnFocusOut:c,open:_,onOpenChange:h.setOpen,domReference:v}),()=>{k.setFocusManagerState(null)}},[r,k,s,_,h,c,v]),H(()=>{if(!r&&F)return So(F),()=>{queueMicrotask(yo)}},[r,F]);let fe=!r&&(!s||!w)&&(le||s);return(0,B.jsxs)(g.Fragment,{children:[fe&&(0,B.jsx)(Ua,{"data-type":`inside`,ref:P,onFocus:e=>{if(s){let e=ue();Ka(e[e.length-1])}else k?.portalNode&&(A.current=!1,ra(e,k.portalNode)?ta(v)?.focus():ma(d??k.beforeOutsideRef)?.focus())}}),n,fe&&(0,B.jsx)(Ua,{"data-type":`inside`,ref:ae,onFocus:e=>{s?Ka(ue()[0]):k?.portalNode&&(c&&(A.current=!0),ra(e,k.portalNode)?na(v)?.focus():ma(u??k.afterOutsideRef)?.focus())}})]})}function wo(){return!1}function To(e){return{escapeKey:typeof e==`boolean`?e:e?.escapeKey??!1,outsidePress:typeof e==`boolean`?e:e?.outsidePress??!0}}function Eo(e,t={}){let{enabled:n=!0,escapeKey:r=!0,outsidePress:i=!0,outsidePressEvent:a=`sloppy`,referencePress:o=wo,bubbles:s,externalTree:c}=t,l=`rootStore`in e?e.rootStore:e,u=l.useState(`open`),d=l.useState(`floatingElement`),{dataRef:f,events:p}=l.context,m=Y(c),h=V(typeof i==`function`?i:()=>!1),_=typeof i==`function`?h:i,v=_!==!1,y=V(()=>a),{escapeKey:b,outsidePress:x}=To(s),S=g.useRef(!1),C=g.useRef(!1),w=g.useRef(!1),T=g.useRef(!1),ee=g.useRef(!1),E=g.useRef(``),D=g.useRef(null),O=la(),k=la(),A=V(()=>{k.clear(),f.current.insideReactTree=!1}),te=V(e=>{let t=f.current.floatingContext?.nodeId;return(m?ji(m.nodesRef.current,t):[]).some(t=>t.context?.open&&!t.context.dataRef.current[e])}),j=V(e=>Ei(e,l.select(`floatingElement`))||Ei(e,l.select(`domReferenceElement`))),M=V(e=>{o()&&l.setOpen(!1,ka(Ca,e.nativeEvent))}),N=V(e=>{if(!u||!n||!r||e.key!==`Escape`||ee.current||!b&&te(`__escapeKeyBubbles`))return;let t=ka(Da,Pi(e)?e.nativeEvent:e);l.setOpen(!1,t),t.isCanceled||e.preventDefault(),!b&&!t.isPropagationAllowed&&e.stopPropagation()}),ne=V(()=>{f.current.insideReactTree=!0,k.start(0,A)}),re=V(e=>{if(!u||!n||e.button!==0)return;let t=di(e.nativeEvent);W(l.select(`floatingElement`),t)&&(S.current||(S.current=!0,C.current=!1))}),ie=V(e=>{u&&n&&(e.defaultPrevented||e.nativeEvent.defaultPrevented)&&S.current&&(C.current=!0)});g.useEffect(()=>{function e(e){e.open||(T.current=!1)}return p.on(`openchange`,e),()=>{p.off(`openchange`,e)}},[p]),g.useEffect(()=>{if(!u||!n)return u||(T.current=!1),A;f.current.__escapeKeyBubbles=b,f.current.__outsidePressBubbles=x;let e=new ca,t=new ca,i=Wn(d);function a(){e.clear(),ee.current=!0}function o(){e.start(si?5:0,()=>{ee.current=!1})}function s(){w.current=!0,t.start(0,()=>{w.current=!1})}function c(){S.current=!1,C.current=!1}function p(){let e=E.current,t=e===`pen`||!e?`mouse`:e,n=y(),r=typeof n==`function`?n():n;return typeof r==`string`?r:r[t]}function h(e){let t=p();return t===`intentional`&&e.type!==`click`||t===`sloppy`&&e.type===`click`}function g(e){let t=f.current.floatingContext?.nodeId,n=m&&ji(m.nodesRef.current,t).some(t=>Ei(e,t.context?.elements.floating));return j(e)||n}function k(e){if(h(e)){e.type!==`click`&&!j(e)&&(t.clear(),w.current=!1),A();return}if(f.current.insideReactTree){A();return}let n=di(e),r=`[${Wa(`inert`)}]`,i=ln(n)?n.getRootNode():null,a=Array.from((dn(i)?i:Wn(l.select(`floatingElement`))).querySelectorAll(r)),o=l.context.triggerElements;if(n&&(o.hasElement(n)||o.hasMatchingElement(e=>W(e,n))))return;let s=ln(n)?n:null;for(;s&&!pn(s);){let e=hn(s);if(pn(e)||!ln(e))break;s=e}if(!(a.length&&ln(n)&&!Di(n)&&!W(n,l.select(`floatingElement`))&&a.every(e=>!W(s,e)))){if(un(n)&&!(`touches`in e)){let t=pn(n),r=mn(n),i=/auto|scroll/,a=t||i.test(r.overflowX),o=t||i.test(r.overflowY),s=a&&n.clientWidth>0&&n.scrollWidth>n.clientWidth,c=o&&n.clientHeight>0&&n.scrollHeight>n.clientHeight,l=r.direction===`rtl`,u=c&&(l?e.offsetX<=n.offsetWidth-n.clientWidth:e.offsetX>n.clientWidth),d=s&&e.offsetY>n.clientHeight;if(u||d)return}if(!g(e)){if(p()===`intentional`){if(e.detail!==0&&!Fi(e)&&!T.current)return;if(w.current){t.clear(),w.current=!1;return}}(typeof _!=`function`||_(e))&&(te(`__outsidePressBubbles`)||(l.setOpen(!1,ka(wa,e)),A()))}}}function M(e){p()===`sloppy`&&e.pointerType!==`touch`&&l.select(`open`)&&n&&!j(e)&&k(e)}function ne(e){if(p()!==`sloppy`||!l.select(`open`)||!n||j(e))return;let t=e.touches[0];t&&(D.current={startTime:Date.now(),startX:t.clientX,startY:t.clientY,dismissOnTouchEnd:!1,dismissOnMouseDown:!0},O.start(1e3,()=>{D.current&&(D.current.dismissOnTouchEnd=!1,D.current.dismissOnMouseDown=!1)}))}function re(e,t){let n=di(e);if(!n)return;let r=J(n,e.type,()=>{t(e),r()})}function ie(e){E.current=`touch`,re(e,ne)}function P(e){O.clear(),e.type===`pointerdown`&&(e.button===0&&(T.current=!0),E.current=e.pointerType),(e.type!==`mousedown`||!D.current||D.current.dismissOnMouseDown)&&re(e,e=>{e.type===`pointerdown`?M(e):k(e)})}function ae(e){if(e.type===`pointercancel`&&(T.current=!1),!S.current)return;let n=C.current;if(c(),p()===`intentional`){if(e.type===`pointercancel`){n&&s();return}if(!g(e)){if(n){s();return}(typeof _!=`function`||_(e))&&(t.clear(),w.current=!0,A())}}}function oe(e){if(p()!==`sloppy`||!D.current||j(e))return;let t=e.touches[0];if(!t)return;let n=Math.abs(t.clientX-D.current.startX),r=Math.abs(t.clientY-D.current.startY),i=Math.sqrt(n*n+r*r);i>5&&(D.current.dismissOnTouchEnd=!0),i>10&&(k(e),O.clear(),D.current=null)}function se(e){re(e,oe)}function ce(e){p()===`sloppy`&&D.current&&!j(e)&&(D.current.dismissOnTouchEnd&&k(e),O.clear(),D.current=null)}function le(e){re(e,ce)}let F=Ra(r&&Ra(J(i,`keydown`,N),J(i,`compositionstart`,a),J(i,`compositionend`,o)),v&&Ra(J(i,`click`,P,!0),J(i,`pointerdown`,P,!0),J(i,`pointerup`,ae,!0),J(i,`pointercancel`,ae,!0),J(i,`mousedown`,P,!0),J(i,`mouseup`,ae,!0),J(i,`touchstart`,ie,{capture:!0,passive:!0}),J(i,`touchmove`,se,{capture:!0,passive:!0}),J(i,`touchend`,le,{capture:!0,passive:!0})));return()=>{F(),e.clear(),t.clear(),c(),w.current=!1,A()}},[f,d,r,v,_,u,n,b,x,N,A,y,te,j,m,l,O]);let P=g.useMemo(()=>({onKeyDown:N,onPointerDown:M,onClick:M}),[N,M]),ae=g.useMemo(()=>({onKeyDown:N,onPointerDown:ie,onMouseDown:ie,onClickCapture:ne,onMouseDownCapture(e){ne(),re(e)},onPointerDownCapture(e){ne(),re(e)},onMouseUpCapture:ne,onTouchEndCapture:ne,onTouchMoveCapture:ne}),[N,ne,re,ie]);return g.useMemo(()=>n?{reference:P,floating:ae,trigger:P}:{},[n,P,ae])}var Do=o((e=>{var t=u();function n(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var r=typeof Object.is==`function`?Object.is:n,i=t.useState,a=t.useEffect,o=t.useLayoutEffect,s=t.useDebugValue;function c(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),c=r[0].inst,u=r[1];return o(function(){c.value=n,c.getSnapshot=t,l(c)&&u({inst:c})},[e,n,t]),a(function(){return l(c)&&u({inst:c}),e(function(){l(c)&&u({inst:c})})},[e]),s(n),n}function l(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!r(e,n)}catch{return!0}}function d(e,t){return t()}var f=typeof window>`u`||window.document===void 0||window.document.createElement===void 0?d:c;e.useSyncExternalStore=t.useSyncExternalStore===void 0?f:t.useSyncExternalStore})),Oo=o(((e,t)=>{t.exports=Do()})),ko=o((e=>{var t=u(),n=Oo();function r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var i=typeof Object.is==`function`?Object.is:r,a=n.useSyncExternalStore,o=t.useRef,s=t.useEffect,c=t.useMemo,l=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,r,u){var d=o(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=c(function(){function e(e){if(!a){if(a=!0,o=e,e=r(e),u!==void 0&&f.hasValue){var t=f.value;if(u(t,e))return s=t}return s=e}if(t=s,i(o,e))return t;var n=r(e);return u!==void 0&&u(t,n)?(o=e,t):(o=e,s=n)}var a=!1,o,s,c=n===void 0?null:n;return[function(){return e(t())},c===null?void 0:function(){return e(c())}]},[t,n,r,u]);var p=a(e,d[0],d[1]);return s(function(){f.hasValue=!0,f.value=p},[p]),l(p),p}})),Ao=o(((e,t)=>{t.exports=ko()})),jo=[],Mo=void 0;function No(){return Mo}function Po(e){jo.push(e)}function Fo(e){let t=(t,n)=>{let r=vn(Io).current,i;try{Mo=r;for(let e of jo)e.before(r);i=e(t,n);for(let e of jo)e.after(r);r.didInitialize=!0}finally{Mo=void 0}return i};return t.displayName=e.displayName||e.name,t}function Io(){return{didInitialize:!1}}var Lo=Oo(),Ro=Ao(),zo=nr(19)?Ho:Uo;function Bo(e,t,n,r,i){return zo(e,t,n,r,i)}function Vo(e,t,n,r,i){let a=g.useCallback(()=>t(e.getSnapshot(),n,r,i),[e,t,n,r,i]);return(0,Lo.useSyncExternalStore)(e.subscribe,a,a)}Po({before(e){e.syncIndex=0,e.didInitialize||(e.syncTick=1,e.syncHooks=[],e.didChangeStore=!0,e.getSnapshot=()=>{let t=!1;for(let n=0;n<e.syncHooks.length;n+=1){let r=e.syncHooks[n],i=r.selector(r.store.state,r.a1,r.a2,r.a3);Object.is(r.value,i)||(t=!0,r.value=i)}return t&&(e.syncTick+=1),e.syncTick})},after(e){e.syncHooks.length>0&&(e.didChangeStore&&(e.didChangeStore=!1,e.subscribe=t=>{let n=new Set;for(let t of e.syncHooks)n.add(t.store);let r=[];for(let e of n)r.push(e.subscribe(t));return()=>{for(let e of r)e()}}),(0,Lo.useSyncExternalStore)(e.subscribe,e.getSnapshot,e.getSnapshot))}});function Ho(e,t,n,r,i){let a=No();if(!a)return Vo(e,t,n,r,i);let o=a.syncIndex;a.syncIndex+=1;let s;return a.didInitialize?(s=a.syncHooks[o],(s.store!==e||s.selector!==t||!Object.is(s.a1,n)||!Object.is(s.a2,r)||!Object.is(s.a3,i))&&(s.store!==e&&(a.didChangeStore=!0),s.store=e,s.selector=t,s.a1=n,s.a2=r,s.a3=i,s.value=t(e.getSnapshot(),n,r,i))):(s={store:e,selector:t,a1:n,a2:r,a3:i,value:t(e.getSnapshot(),n,r,i)},a.syncHooks.push(s)),s.value}function Uo(e,t,n,r,i){return(0,Ro.useSyncExternalStoreWithSelector)(e.subscribe,e.getSnapshot,e.getSnapshot,e=>t(e,n,r,i))}var Wo=class{static create(e){return new this(e)}constructor(e){this.state=e,this.listeners=new Set,this.updateTick=0}subscribe=e=>(this.listeners.add(e),()=>{this.listeners.delete(e)});getSnapshot=()=>this.state;setState(e){if(this.state===e)return;this.state=e,this.updateTick+=1;let t=this.updateTick;for(let n of this.listeners){if(t!==this.updateTick)return;n(e)}}update(e){for(let t in e)if(!Object.is(this.state[t],e[t])){this.setState({...this.state,...e});return}}set(e,t){Object.is(this.state[e],t)||this.setState({...this.state,[e]:t})}notifyAll(){let e={...this.state};this.setState(e)}use(e,t,n,r){return Bo(this,e,t,n,r)}},Go=class extends Wo{constructor(e,t={},n){super(e),this.context=t,this.selectors=n}useSyncedValue(e,t){g.useDebugValue(e);let n=this;H(()=>{n.state[e]!==t&&n.set(e,t)},[n,e,t])}useSyncedValueWithCleanup(e,t){let n=this;H(()=>(n.state[e]!==t&&n.set(e,t),()=>{n.set(e,void 0)}),[n,e,t])}useSyncedValues(e){let t=this;H(()=>{t.update(e)},[t,...Object.values(e)])}useControlledProp(e,t){g.useDebugValue(e);let n=this,r=t!==void 0;H(()=>{r&&!Object.is(n.state[e],t)&&n.setState({...n.state,[e]:t})},[n,e,t,r])}select(e,t,n,r){let i=this.selectors[e];return i(this.state,t,n,r)}useState(e,t,n,r){return g.useDebugValue(e),Bo(this,this.selectors[e],t,n,r)}useContextCallback(e,t){g.useDebugValue(e);let n=V(t??ir);this.context[e]=n}useStateSetter(e){let t=g.useRef(void 0);return t.current===void 0&&(t.current=t=>{this.set(e,t)}),t.current}observe(e,t){let n;n=typeof e==`function`?e:this.selectors[e];let r=n(this.state);return t(r,r,this),this.subscribe(e=>{let i=n(e);if(!Object.is(r,i)){let e=r;r=i,t(i,e,this)}})}},Ko={open:e=>e.open,transitionStatus:e=>e.transitionStatus,domReferenceElement:e=>e.domReferenceElement,referenceElement:e=>e.positionReference??e.referenceElement,floatingElement:e=>e.floatingElement,floatingId:e=>e.floatingId},qo=class extends Go{constructor(e){let{syncOnly:t,nested:n,onOpenChange:r,triggerElements:i,...a}=e;super({...a,positionReference:a.referenceElement,domReferenceElement:a.referenceElement},{onOpenChange:r,dataRef:{current:{}},events:fo(),nested:n,triggerElements:i},Ko),this.syncOnly=t}syncOpenEvent=(e,t)=>{(!e||!this.state.open||t!=null&&Li(t))&&(this.context.dataRef.current.openEvent=e?t:void 0)};dispatchOpenChange=(e,t)=>{this.syncOpenEvent(e,t.event);let n={open:e,reason:t.reason,nativeEvent:t.event,nested:this.context.nested,triggerElement:t.trigger};this.context.events.emit(`openchange`,n)};setOpen=(e,t)=>{if(this.syncOnly){this.context.onOpenChange?.(e,t);return}this.dispatchOpenChange(e,t),this.context.onOpenChange?.(e,t)}};function Jo(e){let{popupStore:t,treatPopupAsFloatingElement:n=!1,floatingRootContext:r,floatingId:i,nested:a,onOpenChange:o}=e,s=t.useState(`open`),c=t.useState(`activeTriggerElement`),l=t.useState(n?`popupElement`:`positionerElement`),u=t.context.triggerElements,d=o,f=g.useRef(null);r===void 0&&f.current===null&&(f.current=new qo({open:s,transitionStatus:void 0,referenceElement:c,floatingElement:l,triggerElements:u,onOpenChange:d,floatingId:i,syncOnly:!0,nested:a}));let p=r??f.current;return t.useSyncedValue(`floatingId`,i),H(()=>{let e={open:s,floatingId:i,referenceElement:c,floatingElement:l};ln(c)&&(e.domReferenceElement=c),p.state.positionReference===p.state.referenceElement&&(e.positionReference=c),p.update(e)},[s,i,c,l,p]),p.context.onOpenChange=d,p.context.nested=a,p}var Yo={tabIndex:-1,[fi]:``};function Xo(e){return t=>t!==`touch`||e.current}function Zo(e,t=!1){let n=Kr(),r=ho()!=null,i=vn(()=>e(n,r)).current;return Jo({popupStore:i,treatPopupAsFloatingElement:t,floatingRootContext:i.state.floatingRootContext,floatingId:n,nested:r,onOpenChange:i.setOpen}),i}function Qo({handle:e,store:t}){return H(()=>e.attachStore(t),[e,t]),null}function $o(e,t,n,r=!1){let i=e.preventUnmountingOnClose;t?i=!1:r&&(i=!0);let a=n?.id??null,o=e.activeTriggerId,s=e.activeTriggerElement;return(a||t)&&(o=a,s=n??null),{open:t,preventUnmountingOnClose:i,activeTriggerId:o,activeTriggerElement:s}}function es(e,t={}){let{closeOnActiveTriggerUnmount:n=!1}=t,r=g.useRef(null),i=e.useState(`open`);H(()=>{if(!i){r.current=null,e.state.triggerCount!==0&&e.set(`triggerCount`,0);return}let t=e.context.triggerElements.size,a={};e.state.triggerCount!==t&&(a.triggerCount=t);let o=e.select(`activeTriggerId`),s=null;if(o){let t=e.context.triggerElements.getById(o);if(t)r.current=o,t!==e.state.activeTriggerElement&&(a.activeTriggerElement=t);else{for(let[t,n]of e.context.triggerElements.entries())if(n===e.state.activeTriggerElement){a.activeTriggerId=t,a.activeTriggerElement=n,r.current=t;break}a.activeTriggerId===void 0&&(r.current===o?s=o:r.current=null)}}else r.current=null;if(!s&&!o&&t===1){let t=e.context.triggerElements.entries().next();if(!t.done){let[e,n]=t.value;a.activeTriggerId=e,a.activeTriggerElement=n,r.current=e}}(a.triggerCount!==void 0||a.activeTriggerId!==void 0||a.activeTriggerElement!==void 0)&&e.update(a),s&&n&&queueMicrotask(()=>{if(e.select(`open`)&&e.select(`activeTriggerId`)===s&&!e.context.triggerElements.getById(s)){let t=ka(Sa);e.setOpen(!1,t),t.isCanceled||e.update({activeTriggerId:null,activeTriggerElement:null})}})},[i,e,e.useState(`triggerCount`),e.useState(`activeTriggerId`),e.useState(`activeTriggerElement`),n])}function ts(e,t,n,r){let{mounted:i,setMounted:a,transitionStatus:o}=ya(e,!1,!1,r),s=t.useState(`preventUnmountingOnClose`),c=!e&&s;t.useSyncedValues({mounted:i,transitionStatus:o,preventUnmountingOnClose:c});let l=V(()=>{a(!1),t.update({activeTriggerId:null,activeTriggerElement:null,mounted:!1,preventUnmountingOnClose:!1}),n?.(),t.context.onOpenChangeComplete?.(!1)});return va({enabled:i&&!e&&!c,open:e,ref:t.context.popupRef,onComplete(){e||l()}}),{forceUnmount:l,transitionStatus:o}}function ns(e,t){e.useSyncedValues(t),H(()=>()=>{e.update({activeTriggerProps:or,inactiveTriggerProps:or,popupProps:or})},[e])}function rs(e,t){H(()=>{!t&&e.state.openMethod!==null&&e.set(`openMethod`,null)},[t,e]),H(()=>()=>{e.state.openMethod!==null&&e.set(`openMethod`,null)},[e])}var is=class{constructor(){this.idMap=new Map}add(e,t){this.idMap.set(e,t)}delete(e){this.idMap.delete(e)}hasElement(e){for(let t of this.idMap.values())if(t===e)return!0;return!1}hasMatchingElement(e){for(let t of this.idMap.values())if(e(t))return!0;return!1}getById(e){return this.idMap.get(e)}entries(){return this.idMap.entries()}elements(){return this.idMap.values()}get size(){return this.idMap.size}};function as(e,t,n=!1){return{open:!1,openProp:void 0,mounted:!1,transitionStatus:void 0,floatingRootContext:new qo({open:!1,transitionStatus:void 0,floatingElement:null,referenceElement:null,triggerElements:e,floatingId:t,syncOnly:!0,nested:n,onOpenChange:void 0}),floatingId:t,triggerCount:0,preventUnmountingOnClose:!1,payload:void 0,activeTriggerId:null,activeTriggerElement:null,triggerIdProp:void 0,popupElement:null,positionerElement:null,activeTriggerProps:or,inactiveTriggerProps:or,popupProps:or}}var os=e=>e.triggerIdProp??e.activeTriggerId,ss=e=>e.openProp??e.open,cs=e=>(e.popupElement?.id??e.floatingId)||void 0;function ls(e,t){return t!==void 0&&ss(e)&&os(e)===t}function us(e,t){return ls(e,t)?!0:t!==void 0&&ss(e)&&os(e)==null&&e.triggerCount===1}var ds={open:ss,mounted:e=>e.mounted,transitionStatus:e=>e.transitionStatus,floatingRootContext:e=>e.floatingRootContext,triggerCount:e=>e.triggerCount,preventUnmountingOnClose:e=>e.preventUnmountingOnClose,payload:e=>e.payload,activeTriggerId:os,activeTriggerElement:e=>e.mounted?e.activeTriggerElement:null,popupId:cs,isTriggerActive:(e,t)=>t!==void 0&&os(e)===t,isOpenedByTrigger:(e,t)=>ls(e,t),isMountedByTrigger:(e,t)=>t!==void 0&&os(e)===t&&e.mounted,triggerProps:(e,t)=>t?e.activeTriggerProps:e.inactiveTriggerProps,triggerPopupId:(e,t)=>us(e,t)?cs(e):void 0,popupProps:e=>e.popupProps,popupElement:e=>e.popupElement,positionerElement:e=>e.positionerElement},fs=g.createContext(void 0);function ps(){let e=g.useContext(fs);if(e===void 0)throw Error(Bn(26));return e}var ms=new Set([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Home`,`End`]),hs=`--nested-dialogs`,gs=`data-nested-dialog-open`,_s={...wi,..._i,nestedDialogOpen(e){return e?{[gs]:``}:null}},vs=g.forwardRef(function(e,t){let{render:n,className:r,style:i,finalFocus:a,initialFocus:o,...s}=e,c=Fa(),l=c.useState(`descriptionElementId`),u=c.useState(`disablePointerDismissal`),d=c.useState(`floatingRootContext`),f=c.useState(`popupProps`),p=c.useState(`modal`),m=c.useState(`mounted`),h=c.useState(`nested`),g=c.useState(`nestedOpenDialogCount`),_=c.useState(`open`),v=c.useState(`openMethod`),y=c.useState(`titleElementId`),b=c.useState(`transitionStatus`),x=c.useState(`role`),S=d.useState(`floatingId`);ps(),va({open:_,ref:c.context.popupRef,onComplete(){_&&c.context.onOpenChangeComplete?.(!0)}});let C=o===void 0?Xo(c.context.popupRef):o,w=g>0,T=c.useStateSetter(`popupElement`),ee=ur(`div`,e,{state:{open:_,nested:h,transitionStatus:b,nestedDialogOpen:w},props:[f,{id:S,"aria-labelledby":y,"aria-describedby":l,role:x,...Yo,hidden:!m,onKeyDown(e){ms.has(e.key)&&e.stopPropagation()},style:{[hs]:g}},s],ref:[t,c.context.popupRef,T],stateAttributesMapping:_s});return(0,B.jsx)(Co,{context:d,openInteractionType:v,disabled:!m,closeOnFocusOut:!u,initialFocus:C,returnFocus:a,modal:p!==!1,restoreFocus:`popup`,children:ee})});function ys(e){return nr(19)?e:e?`true`:void 0}var bs=g.forwardRef(function(e,t){let{cutout:n,...r}=e,i;if(n){let e=n.getBoundingClientRect();i=`polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${e.left}px ${e.top}px,${e.left}px ${e.bottom}px,${e.right}px ${e.bottom}px,${e.right}px ${e.top}px,${e.left}px ${e.top}px)`}return(0,B.jsx)(`div`,{ref:t,role:`presentation`,"data-base-ui-inert":``,...r,style:{position:`fixed`,inset:0,userSelect:`none`,WebkitUserSelect:`none`,clipPath:i}})}),xs=g.forwardRef(function(e,t){let{keepMounted:n=!1,...r}=e,i=Fa(),a=i.useState(`mounted`),o=i.useState(`modal`),s=i.useState(`open`);return a||n?(0,B.jsx)(fs.Provider,{value:n,children:(0,B.jsxs)(uo,{ref:t,...r,children:[a&&o===!0&&(0,B.jsx)(bs,{ref:i.context.internalBackdropRef,inert:ys(!s)}),e.children]})}):null}),Ss={},Cs={},ws=``;function Ts(e,t){return fn(e)?e:t}function Es(e,t,n){return/hidden|clip/.test(e.getComputedStyle(Ts(t,n)).overflowY)}function Ds(e){if(typeof document>`u`)return!1;let t=Wn(e);return on(t).innerWidth-t.documentElement.clientWidth>0}function Os(e){if(!(typeof CSS<`u`&&CSS.supports&&CSS.supports(`scrollbar-gutter`,`stable`))||typeof document>`u`)return!1;let t=Wn(e),n=t.documentElement,r=t.body,i=Ts(n,r),a=i.style.overflowY,o=n.style.scrollbarGutter;n.style.scrollbarGutter=`stable`,i.style.overflowY=`scroll`;let s=i.offsetWidth;i.style.overflowY=`hidden`;let c=i.offsetWidth;return i.style.overflowY=a,n.style.scrollbarGutter=o,s===c}function ks(e){let t=Wn(e),n=t.documentElement,r=t.body,i=Ts(n,r),a={overflowY:i.style.overflowY,overflowX:i.style.overflowX};return Object.assign(i.style,{overflowY:`hidden`,overflowX:`hidden`}),()=>{Object.assign(i.style,a)}}function As(e){let t=Wn(e),n=t.documentElement,r=t.body,i=on(n),a=0,o=0,s=!1,c=fa.create();if(si&&(i.visualViewport?.scale??1)!==1)return()=>{};function l(){let t=i.getComputedStyle(n),c=i.getComputedStyle(r),l=(t.scrollbarGutter||``).includes(`both-edges`)?`stable both-edges`:`stable`;a=n.scrollTop,o=n.scrollLeft,Ss={scrollbarGutter:n.style.scrollbarGutter,overflowY:n.style.overflowY,overflowX:n.style.overflowX},ws=n.style.scrollBehavior,Cs={position:r.style.position,height:r.style.height,width:r.style.width,boxSizing:r.style.boxSizing,overflowY:r.style.overflowY,overflowX:r.style.overflowX,scrollBehavior:r.style.scrollBehavior};let u=n.scrollHeight>n.clientHeight,d=n.scrollWidth>n.clientWidth,f=t.overflowY===`scroll`||c.overflowY===`scroll`,p=t.overflowX===`scroll`||c.overflowX===`scroll`,m=Math.max(0,i.innerWidth-r.clientWidth),h=Math.max(0,i.innerHeight-r.clientHeight),g=parseFloat(c.marginTop)+parseFloat(c.marginBottom),_=parseFloat(c.marginLeft)+parseFloat(c.marginRight),v=Ts(n,r);if(s=Os(e),s){n.style.scrollbarGutter=l,v.style.overflowY=`hidden`,v.style.overflowX=`hidden`;return}Object.assign(n.style,{scrollbarGutter:l,overflowY:`hidden`,overflowX:`hidden`}),(u||f)&&(n.style.overflowY=`scroll`),(d||p)&&(n.style.overflowX=`scroll`),Object.assign(r.style,{position:`relative`,height:g||h?`calc(100dvh - ${g+h}px)`:`100dvh`,width:_||m?`calc(100vw - ${_+m}px)`:`100vw`,boxSizing:`border-box`,overflowY:`hidden`,overflowX:`hidden`,scrollBehavior:`unset`}),r.scrollTop=a,r.scrollLeft=o,n.setAttribute(`data-base-ui-scroll-locked`,``),n.style.scrollBehavior=`unset`}function u(){Object.assign(n.style,Ss),Object.assign(r.style,Cs),s||(n.scrollTop=a,n.scrollLeft=o,n.removeAttribute(`data-base-ui-scroll-locked`),n.style.scrollBehavior=ws)}function d(){u(),c.request(l)}l();let f=J(i,`resize`,d);return()=>{c.cancel(),u(),typeof i.removeEventListener==`function`&&f()}}var js=new class{lockCount=0;restore=null;timeoutLock=ca.create();timeoutUnlock=ca.create();acquire(e){return this.lockCount+=1,this.lockCount===1&&this.restore===null&&this.timeoutLock.start(0,()=>this.lock(e)),this.release}release=()=>{--this.lockCount,this.lockCount===0&&this.restore&&this.timeoutUnlock.start(0,this.unlock)};unlock=()=>{this.lockCount===0&&this.restore&&(this.restore?.(),this.restore=null)};lock(e){if(this.lockCount===0||this.restore!==null)return;let t=Wn(e),n=t.documentElement,r=t.body,i=on(n);if(Es(i,n,r)){let t=new i.MutationObserver(()=>{Es(i,n,r)||(t.disconnect(),this.restore=null,this.lock(e))}),a={attributes:!0};t.observe(n,a),t.observe(r,a),this.restore=()=>t.disconnect();return}let a=ri||!Ds(e);this.restore=a?ks(e):As(e)}};function Ms(e=!0,t=null){H(()=>{if(e)return js.acquire(t)},[e,t])}function Ns({store:e,parentContext:t,isDrawer:n}){let r=e.useState(`open`),i=e.useState(`disablePointerDismissal`),a=e.useState(`modal`),o=e.useState(`popupElement`),s=e.useState(`floatingRootContext`),[c,l]=g.useState(0),[u,d]=g.useState(0),f=c===0,p=Eo(s,{outsidePressEvent(){return e.context.internalBackdropRef.current||e.context.backdropRef.current?`intentional`:{mouse:a===`trap-focus`?`sloppy`:`intentional`,touch:`sloppy`}},outsidePress(t){if(!e.context.outsidePressEnabledRef.current||`button`in t&&t.button!==0)return!1;if(`touches`in t){if(t.type===`touchend`){if(t.changedTouches.length!==1||t.touches.length!==0)return!1}else if(t.touches.length!==1)return!1}let n=di(t);if(f&&!i){if(a){let t=e.context.internalBackdropRef.current,r=e.context.backdropRef.current;return t||r?t===n||r===n||W(n,o)&&!n?.hasAttribute(`data-base-ui-portal`):!0}return!0}return!1},escapeKey:f});return Ms(r&&a===!0,o),e.useContextCallback(`onNestedDialogOpen`,(e,t)=>{l(e),d(t)}),H(()=>(t?.onNestedDialogOpen&&(r?t.onNestedDialogOpen(c+1,u+ +!!n):t.onNestedDialogOpen(0,0)),()=>{t?.onNestedDialogOpen&&r&&t.onNestedDialogOpen(0,0)}),[n,r,c,u,t]),ns(e,{activeTriggerProps:p.reference,inactiveTriggerProps:p.trigger,popupProps:p.floating,nestedOpenDialogCount:c,nestedOpenDrawerCount:u}),null}var Ps={...ds,modal:e=>e.modal,nested:e=>e.nested,nestedOpenDialogCount:e=>e.nestedOpenDialogCount,nestedOpenDrawerCount:e=>e.nestedOpenDrawerCount,disablePointerDismissal:e=>e.disablePointerDismissal,openMethod:e=>e.openMethod,descriptionElementId:e=>e.descriptionElementId,titleElementId:e=>e.titleElementId,viewportElement:e=>e.viewportElement,role:e=>e.role},Fs=class extends Go{constructor(e,t,n){let r=new is,i=Is(e,r,t,n);super(i,Ls(r),Ps)}setOpen=(e,t)=>{t.preventUnmountOnClose=()=>{this.set(`preventUnmountingOnClose`,!0)},!e&&t.trigger==null&&this.state.activeTriggerId!=null&&(t.trigger=this.state.activeTriggerElement??void 0),this.context.onOpenChange?.(e,t),!t.isCanceled&&(this.state.floatingRootContext.dispatchOpenChange(e,t),this.update($o(this.state,e,t.trigger)))}};function Is(e,t,n,r=!1){return{...as(t,n,r),modal:!0,disablePointerDismissal:!1,viewportElement:null,descriptionElementId:void 0,titleElementId:void 0,openMethod:null,nested:!1,nestedOpenDialogCount:0,nestedOpenDrawerCount:0,role:`dialog`,...e}}function Ls(e){return{popupRef:g.createRef(),backdropRef:g.createRef(),internalBackdropRef:g.createRef(),outsidePressEnabledRef:{current:!0},triggerElements:e,onOpenChange:void 0,onOpenChangeComplete:void 0}}function Rs(e,t){let{children:n,open:r,defaultOpen:i=!1,onOpenChange:a,onOpenChangeComplete:o,disablePointerDismissal:s=!1,modal:c=!0,actionsRef:l,handle:u,triggerId:d,defaultTriggerId:f=null}=t,p=e===`drawer`,m=e===`alert-dialog`,h=m?!0:c,_=m||s,v=m?`alertdialog`:`dialog`,y=Fa(!0),b={modal:h,disablePointerDismissal:_,nested:y!=null,role:v},x=Zo((e,t)=>new Fs({open:i,openProp:r,activeTriggerId:f,triggerIdProp:d,...b},e,t),!0);x.useControlledProp(`openProp`,r),x.useControlledProp(`triggerIdProp`,d),x.useSyncedValues(b),x.useContextCallback(`onOpenChange`,a),x.useContextCallback(`onOpenChangeComplete`,o);let S=x.useState(`open`),C=x.useState(`mounted`),w=x.useState(`payload`);rs(x,S),es(x);let{forceUnmount:T}=ts(S,x);g.useImperativeHandle(l,()=>({unmount:T,close:()=>x.setOpen(!1,ka(Oa))}),[T,x]);let ee=S||C;return(0,B.jsxs)(Pa.Provider,{value:x,children:[u&&(0,B.jsx)(Qo,{handle:u,store:x}),ee&&(0,B.jsx)(Ns,{store:x,parentContext:y?.context,isDrawer:p}),typeof n==`function`?n({payload:w}):n]})}var zs=Fo(function(e){return Rs(`dialog`,e)}),Bs=g.forwardRef(function(e,t){let{render:n,className:r,style:i,id:a,...o}=e,s=Fa(),c=qr(a);return s.useSyncedValueWithCleanup(`titleElementId`,c),ur(`h2`,e,{ref:t,props:[{id:c},o]})});function Vs({...e}){return(0,B.jsx)(zs,{"data-slot":`sheet`,...e})}function Hs({...e}){return(0,B.jsx)(xs,{"data-slot":`sheet-portal`,...e})}function Us({className:e,...t}){return(0,B.jsx)(Ia,{"data-slot":`sheet-overlay`,className:z(`fixed inset-0 z-50 bg-black/10 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs`,e),...t})}function Ws({className:e,children:t,side:n=`right`,showCloseButton:r=!0,...i}){return(0,B.jsxs)(Hs,{children:[(0,B.jsx)(Us,{}),(0,B.jsxs)(vs,{"data-slot":`sheet-content`,"data-side":n,className:z(`fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-ending-style:opacity-0 data-starting-style:opacity-0 data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=bottom]:data-ending-style:translate-y-[2.5rem] data-[side=bottom]:data-starting-style:translate-y-[2.5rem] data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=left]:data-ending-style:translate-x-[-2.5rem] data-[side=left]:data-starting-style:translate-x-[-2.5rem] data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=right]:data-ending-style:translate-x-[2.5rem] data-[side=right]:data-starting-style:translate-x-[2.5rem] data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=top]:data-ending-style:translate-y-[-2.5rem] data-[side=top]:data-starting-style:translate-y-[-2.5rem] data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm`,e),...i,children:[t,r&&(0,B.jsxs)(La,{"data-slot":`sheet-close`,render:(0,B.jsx)(Cr,{variant:`ghost`,className:`absolute top-3 right-3`,size:`icon-sm`}),children:[(0,B.jsx)($t,{}),(0,B.jsx)(`span`,{className:`sr-only`,children:`Close`})]})]})]})}function Gs({className:e,...t}){return(0,B.jsx)(Bs,{"data-slot":`sheet-title`,className:z(`font-heading text-base font-medium text-foreground`,e),...t})}var Ks=[{type:`folder`,name:`.github`,path:`.github`,children:[{type:`folder`,name:`workflows`,path:`.github/workflows`,children:[{type:`file`,name:`rust.yml`,path:`.github/workflows/rust.yml`,language:`YAML`,content:`name: Deploy Rust Apps

on:
  workflow_dispatch:
    inputs:
      version:
        description: "Version to release (e.g. 1.0.0)"
        required: true
        default: "1.0.0"
        type: string
      apps:
        description: "Apps à builder (vide = toutes). Ex: grrs gruyere"
        required: false
        default: ""
        type: string
      draft:
        description: "Create a draft release"
        required: false
        default: false
        type: boolean

env:
  CARGO_TERM_COLOR: always

jobs:
  # ─────────────────────────────────────────────────────────
  # 1. Découverte automatique des projets dans crabe/
  # ─────────────────────────────────────────────────────────
  discover:
    name: Discover Rust projects
    runs-on: ubuntu-latest
    outputs:
      apps: \${{ steps.list.outputs.apps }}
    steps:
      - uses: actions/checkout@v4

      - name: List projects
        id: list
        shell: bash
        run: |
          set -e
          apps="[]"
          selected="\${{ inputs.apps }}"
          echo "Filtre demandé : '\${selected}'"

          if [ -d crabe ]; then
            for dir in crabe/*/; do
              [ -d "$dir" ] || continue
              [ -f "\${dir}Cargo.toml" ] || continue
              name=$(basename "$dir")

              # Si un filtre est fourni, ne garder que les apps demandées
              if [ -n "$selected" ] && ! echo " $selected " | grep -q " $name "; then
                echo "⏭️  $name : filtré"
                continue
              fi

              echo "✅ $name : retenu"
              apps=$(echo "$apps" | jq -c --arg n "$name" '. + [$n]')
            done
          fi

          echo "Apps retenues : $apps"
          echo "apps=$apps" >> "$GITHUB_OUTPUT"

      - name: Fail if empty
        if: steps.list.outputs.apps == '[]'
        run: |
          echo "::error::Aucun projet Rust à builder (vérifie le filtre 'apps' ou crabe/)"
          exit 1

  # ─────────────────────────────────────────────────────────
  # 2. Build : app × target
  # ─────────────────────────────────────────────────────────
  build:
    name: \${{ matrix.app }} → \${{ matrix.target }}
    needs: discover
    runs-on: \${{ matrix.os }}
    strategy:
      fail-fast: false
      matrix:
        app: \${{ fromJSON(needs.discover.outputs.apps) }}
        target:
          - x86_64-unknown-linux-gnu
          - x86_64-pc-windows-msvc
          - aarch64-apple-darwin
        include:
          - target: x86_64-unknown-linux-gnu
            os: ubuntu-latest
            ext: ""
          - target: x86_64-pc-windows-msvc
            os: windows-latest
            ext: ".exe"
          - target: aarch64-apple-darwin
            os: macos-latest
            ext: ""
    steps:
      - uses: actions/checkout@v4

      - name: Install Rust toolchain
        uses: dtolnay/rust-toolchain@stable
        with:
          targets: \${{ matrix.target }}

      - name: Cache Cargo
        uses: Swatinem/rust-cache@v2
        with:
          workspaces: crabe/\${{ matrix.app }} -> target

      - name: Build release
        working-directory: crabe/\${{ matrix.app }}
        run: cargo build --release --target \${{ matrix.target }}

      - name: Stage artifact
        shell: bash
        run: |
          set -e
          BIN_NAME=$(grep -m1 '^name' crabe/\${{ matrix.app }}/Cargo.toml | sed -E 's/.*"(.*)".*/\\1/')
          [ -n "$BIN_NAME" ] || BIN_NAME="\${{ matrix.app }}"

          case "\${{ matrix.target }}" in
            x86_64-unknown-linux-gnu)   LABEL="linux-x64"   ;;
            x86_64-pc-windows-msvc)     LABEL="windows-x64" ;;
            aarch64-apple-darwin)       LABEL="macos-arm64" ;;
            *)                          LABEL="\${{ matrix.target }}" ;;
          esac

          SRC="crabe/\${{ matrix.app }}/target/\${{ matrix.target }}/release/\${BIN_NAME}\${{ matrix.ext }}"
          OUT="\${{ matrix.app }}-\${LABEL}\${{ matrix.ext }}"

          [ -f "$SRC" ] || { echo "::error::Binaire introuvable : $SRC"; ls -la "crabe/\${{ matrix.app }}/target/\${{ matrix.target }}/release/" || true; exit 1; }
          cp "$SRC" "$OUT"
          echo "ARTIFACT_NAME=$OUT" >> "$GITHUB_ENV"

      - uses: actions/upload-artifact@v4
        with:
          name: \${{ matrix.app }}-\${{ matrix.target }}
          path: \${{ env.ARTIFACT_NAME }}
          if-no-files-found: error

  # ─────────────────────────────────────────────────────────
  # 3. Une release par app
  # ─────────────────────────────────────────────────────────
  release:
    name: Release \${{ matrix.app }}
    needs: [discover, build]
    runs-on: ubuntu-latest
    permissions:
      contents: write
    strategy:
      fail-fast: false
      matrix:
        app: \${{ fromJSON(needs.discover.outputs.apps) }}
    steps:
      - name: Check tag doesn't exist
        env:
          GH_TOKEN: \${{ secrets.GITHUB_TOKEN }}
        run: |
          if gh api "repos/\${{ github.repository }}/git/refs/tags/\${{ matrix.app }}-v\${{ inputs.version }}" >/dev/null 2>&1; then
            echo "::error::Le tag \${{ matrix.app }}-v\${{ inputs.version }} existe déjà"
            exit 1
          fi

      - name: Download artifacts for \${{ matrix.app }}
        uses: actions/download-artifact@v4
        with:
          path: ./artifacts
          pattern: \${{ matrix.app }}-*
          merge-multiple: true

      - uses: softprops/action-gh-release@v2
        with:
          tag_name: \${{ matrix.app }}-v\${{ inputs.version }}
          name: \${{ matrix.app }} v\${{ inputs.version }}
          draft: \${{ inputs.draft }}
          generate_release_notes: true
          files: ./artifacts/*
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
`}]}]},{type:`folder`,name:`assets`,path:`assets`,children:[{type:`file`,name:`compact_46h.png`,path:`assets/compact_46h.png`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: assets/compact_46h.png (13905 octets)]`},{type:`file`,name:`css.png`,path:`assets/css.png`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: assets/css.png (10556 octets)]`},{type:`file`,name:`html.png`,path:`assets/html.png`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: assets/html.png (10978 octets)]`},{type:`file`,name:`js.png`,path:`assets/js.png`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: assets/js.png (7418 octets)]`},{type:`file`,name:`php.png`,path:`assets/php.png`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: assets/php.png (11664 octets)]`},{type:`file`,name:`pillow.png`,path:`assets/pillow.png`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: assets/pillow.png (8371 octets)]`},{type:`file`,name:`pyxel.png`,path:`assets/pyxel.png`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: assets/pyxel.png (12060 octets)]`},{type:`file`,name:`xampp.png`,path:`assets/xampp.png`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: assets/xampp.png (13501 octets)]`}]},{type:`folder`,name:`crabe`,path:`crabe`,children:[{type:`folder`,name:`etchebest`,path:`crabe/etchebest`,children:[{type:`folder`,name:`src`,path:`crabe/etchebest/src`,children:[{type:`file`,name:`main.rs`,path:`crabe/etchebest/src/main.rs`,language:`Rust`,content:`use ratatui::{DefaultTerminal, Frame};

fn main() -> color_eyre::Result<()> {
    color_eyre::install()?;
    ratatui::run(app)?;
    Ok(())
}

fn app(terminal: &mut DefaultTerminal) -> std::io::Result<()> {
    loop {
        terminal.draw(render)?;
        if crossterm::event::read()?.is_key_press() {
            break Ok(());
        }
    }
}

fn render(frame: &mut Frame) {
    frame.render_widget("hello world", frame.area());
}
`}]},{type:`file`,name:`Cargo.lock`,path:`crabe/etchebest/Cargo.lock`,language:`Text`,content:`# This file is automatically @generated by Cargo.
# It is not intended for manual editing.
version = 4

[[package]]
name = "addr2line"
version = "0.25.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1b5d307320b3181d6d7954e663bd7c774a838b8220fe0593c86d9fb09f498b4b"
dependencies = [
 "gimli",
]

[[package]]
name = "adler2"
version = "2.0.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "320119579fcad9c21884f5c4861d16174d0e06250625266f50fe6898340abefa"

[[package]]
name = "aho-corasick"
version = "1.1.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c982642fa9e8606056828ee9a8505737230110bb1099153c79efe865c59d12ba"
dependencies = [
 "memchr",
]

[[package]]
name = "allocator-api2"
version = "0.2.21"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "683d7910e743518b0e34f1186f92494becacb047c7b6bf616c96772180fef923"

[[package]]
name = "anyhow"
version = "1.0.104"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "330a5ed07fa54e4702c9d6c4174f74427fc0ef6e214bbd677ae50a5099946470"

[[package]]
name = "approx"
version = "0.5.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cab112f0a86d568ea0e627cc1d6be74a1e9cd55214684db5561995f6dad897c6"
dependencies = [
 "num-traits",
]

[[package]]
name = "atomic"
version = "0.6.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a89cbf775b137e9b968e67227ef7f775587cde3fd31b0d8599dbd0f598a48340"
dependencies = [
 "bytemuck",
]

[[package]]
name = "autocfg"
version = "1.5.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f2032f911046de80f0a198e0901378627c33f59ea0ac00e363d481118bd70a53"

[[package]]
name = "backtrace"
version = "0.3.76"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bb531853791a215d7c62a30daf0dde835f381ab5de4589cfe7c649d2cbe92bd6"
dependencies = [
 "addr2line",
 "cfg-if",
 "libc",
 "miniz_oxide",
 "object",
 "rustc-demangle",
 "windows-link",
]

[[package]]
name = "base64"
version = "0.22.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "72b3254f16251a8381aa12e40e3c4d2f0199f8c6508fbecb9d91f575e0fbb8c6"

[[package]]
name = "bit-set"
version = "0.5.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0700ddab506f33b20a03b13996eccd309a48e5ff77d0d95926aa0210fb4e95f1"
dependencies = [
 "bit-vec",
]

[[package]]
name = "bit-vec"
version = "0.6.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "349f9b6a179ed607305526ca489b34ad0a41aed5f7980fa90eb03160b69598fb"

[[package]]
name = "bitflags"
version = "1.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bef38d45163c2f1dde094a7dfd33ccf595c92905c8f8f4fdc18d06fb1037718a"

[[package]]
name = "bitflags"
version = "2.13.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3ded4057c258ba199e2d26386d3af3780957ecaee6c4ef4041c6b4b8b97c0b06"

[[package]]
name = "block-buffer"
version = "0.10.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3078c7629b62d3f0439517fa394996acacc5cbc91c5a20d8c658e77abd503a71"
dependencies = [
 "generic-array",
]

[[package]]
name = "bumpalo"
version = "3.20.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "72f5acc6cb2ba439de613abc23857ec3d78374d8ed5ac84e9d11336e87da8649"

[[package]]
name = "by_address"
version = "1.2.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "64fa3c856b712db6612c019f14756e64e4bcea13337a6b33b696333a9eaa2d06"

[[package]]
name = "bytemuck"
version = "1.25.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "95832e849adfb21180ccb6826a99da14e5d266ae5c2e668e1602cf234f153797"

[[package]]
name = "castaway"
version = "0.2.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "dec551ab6e7578819132c713a93c022a05d60159dc86e7a7050223577484c55a"
dependencies = [
 "rustversion",
]

[[package]]
name = "cfg-if"
version = "1.0.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4e7648175b45a9a48536d676f68d918270699102aa8dab5496df06904c914600"

[[package]]
name = "cfg_aliases"
version = "0.2.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f079e83a288787bcd14a6aea84cee5c87a67c5a3e660c30f557a3d24761b3527"

[[package]]
name = "color-eyre"
version = "0.6.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e5920befb47832a6d61ee3a3a846565cfa39b331331e68a3b1d1116630f2f26d"
dependencies = [
 "backtrace",
 "color-spantrace",
 "eyre",
 "indenter",
 "once_cell",
 "owo-colors",
 "tracing-error",
]

[[package]]
name = "color-spantrace"
version = "0.3.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b8b88ea9df13354b55bc7234ebcce36e6ef896aca2e42a15de9e10edce01b427"
dependencies = [
 "once_cell",
 "owo-colors",
 "tracing-core",
 "tracing-error",
]

[[package]]
name = "compact_str"
version = "0.9.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9dfdd1c2274d9aa354115b09dc9a901d6c5576818cdf70d14cae2bdb47df00ab"
dependencies = [
 "castaway",
 "cfg-if",
 "itoa",
 "rustversion",
 "ryu",
 "static_assertions",
]

[[package]]
name = "convert_case"
version = "0.10.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "633458d4ef8c78b72454de2d54fd6ab2e60f9e02be22f3c6104cdc8a4e0fceb9"
dependencies = [
 "unicode-segmentation",
]

[[package]]
name = "cpufeatures"
version = "0.2.17"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "59ed5838eebb26a2bb2e58f6d5b5316989ae9d08bab10e0e6d103e656d1b0280"
dependencies = [
 "libc",
]

[[package]]
name = "critical-section"
version = "1.2.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "790eea4361631c5e7d22598ecd5723ff611904e3344ce8720784c93e3d83d40b"

[[package]]
name = "crossterm"
version = "0.29.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d8b9f2e4c67f833b660cdb0a3523065869fb35570177239812ed4c905aeff87b"
dependencies = [
 "bitflags 2.13.2",
 "crossterm_winapi",
 "derive_more",
 "document-features",
 "mio",
 "parking_lot",
 "rustix",
 "signal-hook",
 "signal-hook-mio",
 "winapi",
]

[[package]]
name = "crossterm_winapi"
version = "0.9.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "acdd7c62a3665c7f6830a51635d9ac9b23ed385797f70a83bb8bafe9c572ab2b"
dependencies = [
 "winapi",
]

[[package]]
name = "crypto-common"
version = "0.1.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "78c8292055d1c1df0cce5d180393dc8cce0abec0a7102adb6c7b1eef6016d60a"
dependencies = [
 "generic-array",
 "typenum",
]

[[package]]
name = "csscolorparser"
version = "0.6.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "eb2a7d3066da2de787b7f032c736763eb7ae5d355f81a68bab2675a96008b0bf"
dependencies = [
 "lab",
 "phf",
]

[[package]]
name = "darling"
version = "0.24.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ed17f5901b6630b993ca003def43f2f8ef4014fc13b047b57aad617ff32bc2ec"
dependencies = [
 "darling_core",
 "darling_macro",
]

[[package]]
name = "darling_core"
version = "0.24.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "6837e2cf7485aaae18f86181d2f0e9a7ed297a025e220aeabf63fdebd3a2ddff"
dependencies = [
 "ident_case",
 "proc-macro2",
 "quote",
 "strsim",
 "syn 3.0.6",
]

[[package]]
name = "darling_macro"
version = "0.24.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "2ac7135c3ef02b2f7833bbeb1be5ba7f966dcde8a87c6b87f65a778d71a02785"
dependencies = [
 "darling_core",
 "quote",
 "syn 3.0.6",
]

[[package]]
name = "deltae"
version = "0.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "5729f5117e208430e437df2f4843f5e5952997175992d1414f94c57d61e270b4"

[[package]]
name = "deranged"
version = "0.5.8"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7cd812cc2bc1d69d4764bd80df88b4317eaef9e773c75226407d9bc0876b211c"

[[package]]
name = "derive_more"
version = "2.1.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d751e9e49156b02b44f9c1815bcb94b984cdcc4396ecc32521c739452808b134"
dependencies = [
 "derive_more-impl",
]

[[package]]
name = "derive_more-impl"
version = "2.1.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "799a97264921d8623a957f6c3b9011f3b5492f557bbb7a5a19b7fa6d06ba8dcb"
dependencies = [
 "convert_case",
 "proc-macro2",
 "quote",
 "rustc_version",
 "syn 2.0.119",
]

[[package]]
name = "digest"
version = "0.10.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9ed9a281f7bc9b7576e61468ba615a66a5c8cfdff42420a70aa82701a3b1e292"
dependencies = [
 "block-buffer",
 "crypto-common",
]

[[package]]
name = "document-features"
version = "0.2.12"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d4b8a88685455ed29a21542a33abd9cb6510b6b129abadabdcef0f4c55bc8f61"
dependencies = [
 "litrs",
]

[[package]]
name = "either"
version = "1.18.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "252afb9ae5eaa683babdc6a068b3f5726eb19e05070c731f9b2a23a7c3e8ed34"

[[package]]
name = "equivalent"
version = "1.0.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "877a4ace8713b0bcf2a4e7eec82529c029f1d0619886d18145fea96c3ffe5c0f"

[[package]]
name = "errno"
version = "0.3.14"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "39cab71617ae0d63f51a36d69f866391735b51691dbda63cf6f96d042b63efeb"
dependencies = [
 "libc",
 "windows-sys",
]

[[package]]
name = "etchebest"
version = "0.1.0"
dependencies = [
 "color-eyre",
 "crossterm",
 "ratatui",
]

[[package]]
name = "euclid"
version = "0.22.14"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f1a05365e3b1c6d1650318537c7460c6923f1abdd272ad6842baa2b509957a06"
dependencies = [
 "num-traits",
]

[[package]]
name = "eyre"
version = "0.6.14"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c08309dbcc659c5549a24ddb9b27027640641b282ef5768267c7e675558986a3"
dependencies = [
 "autocfg",
 "indenter",
 "once_cell",
]

[[package]]
name = "fancy-regex"
version = "0.11.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b95f7c0680e4142284cf8b22c14a476e87d61b004a3a0861872b32ef7ead40a2"
dependencies = [
 "bit-set",
 "regex",
]

[[package]]
name = "filedescriptor"
version = "0.8.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e40758ed24c9b2eeb76c35fb0aebc66c626084edd827e07e1552279814c6682d"
dependencies = [
 "libc",
 "thiserror 1.0.69",
 "winapi",
]

[[package]]
name = "finl_unicode"
version = "1.5.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "80bb028c8b4148c9ee0cca68fcd9add6044e81d3619f48577ddf13a263d047a2"

[[package]]
name = "fixedbitset"
version = "0.4.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0ce7134b9999ecaf8bcd65542e436736ef32ddca1b3e06094cb6ec5755203b80"

[[package]]
name = "fnv"
version = "1.0.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3f9eec918d3f24069decb9af1554cad7c880e2da24a9afd88aca000531ab82c1"

[[package]]
name = "foldhash"
version = "0.2.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "77ce24cb58228fbb8aa041425bb1050850ac19177686ea6e0f41a70416f56fdb"

[[package]]
name = "futures-core"
version = "0.3.34"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "92d699e522242e69e3003b94ecc1f960f3a5e015aa7c5d7486e65ad01dd94f5e"

[[package]]
name = "futures-task"
version = "0.3.34"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cd417de3d1d015fc3bfd2b1ea46dfc7bab72ef86f1cc7cc9c78e728b34a6d1fd"

[[package]]
name = "futures-util"
version = "0.3.34"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0d50a92467f8ba5dd6e3ee5d4bd04d73ab2e4e1c44474a0674821dfce14b79bc"
dependencies = [
 "futures-core",
 "futures-task",
 "pin-project-lite",
 "slab",
]

[[package]]
name = "generic-array"
version = "0.14.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "85649ca51fd72272d7821adaf274ad91c288277713d9c18820d8499a7ff69e9a"
dependencies = [
 "typenum",
 "version_check",
]

[[package]]
name = "getrandom"
version = "0.3.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "899def5c37c4fd7b2664648c28120ecec138e4d395b459e5ca34f9cce2dd77fd"
dependencies = [
 "cfg-if",
 "libc",
 "r-efi 5.3.0",
 "wasip2",
]

[[package]]
name = "getrandom"
version = "0.4.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "300e883d756b2e4ec94e02791f39b04b522276138852cfc41d9fb7e904106099"
dependencies = [
 "cfg-if",
 "libc",
 "r-efi 6.0.0",
]

[[package]]
name = "gimli"
version = "0.32.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e629b9b98ef3dd8afe6ca2bd0f89306cec16d43d907889945bc5d6687f2f13c7"

[[package]]
name = "hashbrown"
version = "0.16.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "841d1cc9bed7f9236f321df977030373f4a4163ae1a7dbfe1a51a2c1a51d9100"
dependencies = [
 "allocator-api2",
 "equivalent",
 "foldhash",
]

[[package]]
name = "hashbrown"
version = "0.17.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ed5909b6e89a2db4456e54cd5f673791d7eca6732202bbf2a9cc504fe2f9b84a"
dependencies = [
 "allocator-api2",
 "equivalent",
 "foldhash",
]

[[package]]
name = "heck"
version = "0.5.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "2304e00983f87ffb38b55b444b5e3b60a884b5d30c0fca7d82fe33449bbe55ea"

[[package]]
name = "hex"
version = "0.4.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7f24254aa9a54b5c858eaee2f5bccdb46aaf0e486a595ed5fd8f86ba55232a70"

[[package]]
name = "ident_case"
version = "1.0.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b9e0384b61958566e926dc50660321d12159025e767c18e043daf26b70104c39"

[[package]]
name = "indenter"
version = "0.3.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "964de6e86d545b246d84badc0fef527924ace5134f30641c203ef52ba83f58d5"

[[package]]
name = "indoc"
version = "2.0.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "79cf5c93f93228cf8efb3ba362535fb11199ac548a09ce117c9b1adc3030d706"
dependencies = [
 "rustversion",
]

[[package]]
name = "instability"
version = "0.3.14"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4c3b5acc1e2fd9375041a388da33d1eb8aed5f7a8c0dd3543e3ea2805adfbe20"
dependencies = [
 "darling",
 "indoc",
 "proc-macro2",
 "quote",
 "syn 3.0.6",
]

[[package]]
name = "itertools"
version = "0.14.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "2b192c782037fadd9cfa75548310488aabdbf3d2da73885b31bd0abd03351285"
dependencies = [
 "either",
]

[[package]]
name = "itoa"
version = "1.0.18"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8f42a60cbdf9a97f5d2305f08a87dc4e09308d1276d28c869c684d7777685682"

[[package]]
name = "js-sys"
version = "0.3.105"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ce57d20d1ea864ce2ac172ab472d409214f4fd359f0b2a2775abdf522e2af99e"
dependencies = [
 "cfg-if",
 "futures-util",
 "wasm-bindgen",
]

[[package]]
name = "kasuari"
version = "0.4.12"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bde5057d6143cc94e861d90f591b9303d6716c6b9602309150bd068853c10899"
dependencies = [
 "hashbrown 0.16.1",
 "portable-atomic",
 "thiserror 2.0.20",
]

[[package]]
name = "lab"
version = "0.11.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bf36173d4167ed999940f804952e6b08197cae5ad5d572eb4db150ce8ad5d58f"

[[package]]
name = "lazy_static"
version = "1.5.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bbd2bcb4c963f2ddae06a2efc7e9f3591312473c50c6685e1f298068316e66fe"

[[package]]
name = "libc"
version = "0.2.189"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3eaf3ede3fee6db1a4c2ee091bf8a8b4dccdc6d17f656fb07896ee72867612f2"

[[package]]
name = "libm"
version = "0.2.16"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b6d2cec3eae94f9f509c767b45932f1ada8350c4bdb85af2fcab4a3c14807981"

[[package]]
name = "line-clipping"
version = "0.3.8"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e752191d037c44ad111a8caa762921926658402f01cc1253f7bef2020ece4f5e"
dependencies = [
 "bitflags 2.13.2",
]

[[package]]
name = "linux-raw-sys"
version = "0.12.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "32a66949e030da00e8c7d4434b251670a91556f4144941d37452769c25d58a53"

[[package]]
name = "litrs"
version = "1.0.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "11d3d7f243d5c5a8b9bb5d6dd2b1602c0cb0b9db1621bafc7ed66e35ff9fe092"

[[package]]
name = "lock_api"
version = "0.4.14"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "224399e74b87b5f3557511d98dff8b14089b3dadafcab6bb93eab67d3aace965"
dependencies = [
 "scopeguard",
]

[[package]]
name = "log"
version = "0.4.34"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f9f8bd3e56ce4dfc153cf470fffbfa98c7620958b312ca5c3a4b8d5181fd13c6"

[[package]]
name = "lru"
version = "0.18.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ef9ac18847474e638e3702b76c65d4eb93428471a74778ef0f1be711717f89b5"
dependencies = [
 "hashbrown 0.17.1",
]

[[package]]
name = "mac_address"
version = "1.1.8"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c0aeb26bf5e836cc1c341c8106051b573f1766dfa05aa87f0b98be5e51b02303"
dependencies = [
 "nix",
 "winapi",
]

[[package]]
name = "memchr"
version = "2.8.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cf8baf1c55e62ffcace7a9f06f4bd9cd3f0c4beb022d3b367256b91b87513d98"

[[package]]
name = "memmem"
version = "0.1.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a64a92489e2744ce060c349162be1c5f33c6969234104dbd99ddb5feb08b8c15"

[[package]]
name = "memoffset"
version = "0.9.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "488016bfae457b036d996092f6cb448677611ce4449e970ceaf42695203f218a"
dependencies = [
 "autocfg",
]

[[package]]
name = "minimal-lexical"
version = "0.2.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "68354c5c6bd36d73ff3feceb05efa59b6acb7626617f4962be322a825e61f79a"

[[package]]
name = "miniz_oxide"
version = "0.8.9"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1fa76a2c86f704bdb222d66965fb3d63269ce38518b83cb0575fca855ebb6316"
dependencies = [
 "adler2",
]

[[package]]
name = "mio"
version = "1.2.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4b18443e9c262bfe8fa82f51666e2642c53393f7e5c27b3e1aeab922cff5b9d8"
dependencies = [
 "libc",
 "log",
 "wasi",
 "windows-sys",
]

[[package]]
name = "nix"
version = "0.29.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "71e2746dc3a24dd78b3cfcb7be93368c6de9963d30f43a6a73998a9cf4b17b46"
dependencies = [
 "bitflags 2.13.2",
 "cfg-if",
 "cfg_aliases",
 "libc",
 "memoffset",
]

[[package]]
name = "nom"
version = "7.1.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d273983c5a657a70a3e8f2a01329822f3b8c8172b73826411a55751e404a0a4a"
dependencies = [
 "memchr",
 "minimal-lexical",
]

[[package]]
name = "num-conv"
version = "0.2.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "521739c6d2bac4aa25192232afe6841231376b2b26d4d9fae5ecf8ca5772e441"

[[package]]
name = "num-derive"
version = "0.4.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ed3955f1a9c7c0c15e092f9c887db08b1fc683305fdf6eb6684f22555355e202"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "num-traits"
version = "0.2.19"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "071dfc062690e90b734c0b2273ce72ad0ffa95f0c74596bc250dcfd960262841"
dependencies = [
 "autocfg",
]

[[package]]
name = "num_threads"
version = "0.1.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "5c7398b9c8b70908f6371f47ed36737907c87c52af34c268fed0bf0ceb92ead9"
dependencies = [
 "libc",
]

[[package]]
name = "object"
version = "0.37.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ff76201f031d8863c38aa7f905eca4f53abbfa15f609db4277d44cd8938f33fe"
dependencies = [
 "memchr",
]

[[package]]
name = "once_cell"
version = "1.21.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9f7c3e4beb33f85d45ae3e3a1792185706c8e16d043238c593331cc7cd313b50"

[[package]]
name = "ordered-float"
version = "4.6.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7bb71e1b3fa6ca1c61f383464aaf2bb0e2f8e772a1f01d486832464de363b951"
dependencies = [
 "num-traits",
]

[[package]]
name = "owo-colors"
version = "4.4.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "13c45bb4a6ae1280ec0803b1ef9d3455eb50f01efbbe1447ab020f1d54fba9d8"

[[package]]
name = "palette"
version = "0.7.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ddeed8580d347d2abf3dcf06a5f0b3dc020258338526b277847cd4248a70fc64"
dependencies = [
 "approx",
 "libm",
 "palette_derive",
 "palette_math",
]

[[package]]
name = "palette_derive"
version = "0.7.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "88537020289b719d81be994ccf1bbf4990f477e2f69ee52fe3e45f43a02e56be"
dependencies = [
 "by_address",
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "palette_math"
version = "0.7.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "6e6eb142958d64335fb0e345c5b9ead2ecd6fc438c307e9d7d3c4fd428dbaf12"
dependencies = [
 "libm",
]

[[package]]
name = "parking_lot"
version = "0.12.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "93857453250e3077bd71ff98b6a65ea6621a19bb0f559a85248955ac12c45a1a"
dependencies = [
 "lock_api",
 "parking_lot_core",
]

[[package]]
name = "parking_lot_core"
version = "0.9.12"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "2621685985a2ebf1c516881c026032ac7deafcda1a2c9b7850dc81e3dfcb64c1"
dependencies = [
 "cfg-if",
 "libc",
 "redox_syscall",
 "smallvec",
 "windows-link",
]

[[package]]
name = "pest"
version = "2.9.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "45d3aca230fad2e6f6317ca0a72724338c4960cb97168a85cdee66df4a9a21a8"
dependencies = [
 "memchr",
 "ucd-trie",
]

[[package]]
name = "pest_derive"
version = "2.9.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "284b60557f2c4a2e72ad3f2d34d42685a2fa4a6a61d0d2a10c0ae2a5e916c2cf"
dependencies = [
 "pest",
 "pest_generator",
]

[[package]]
name = "pest_generator"
version = "2.9.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1d9d1f08a115309ee99268cf85e5228e0e56aa9caf8841ec12866b6be07c3109"
dependencies = [
 "pest",
 "pest_meta",
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "pest_meta"
version = "2.9.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ed93ba1a9ffcca32130a5188701c81c0c49cf00d4b7c5007d5148951d743adcb"
dependencies = [
 "pest",
]

[[package]]
name = "phf"
version = "0.11.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1fd6780a80ae0c52cc120a26a1a42c1ae51b247a253e4e06113d23d2c2edd078"
dependencies = [
 "phf_macros",
 "phf_shared",
]

[[package]]
name = "phf_codegen"
version = "0.11.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "aef8048c789fa5e851558d709946d6d79a8ff88c0440c587967f8e94bfb1216a"
dependencies = [
 "phf_generator",
 "phf_shared",
]

[[package]]
name = "phf_generator"
version = "0.11.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3c80231409c20246a13fddb31776fb942c38553c51e871f8cbd687a4cfb5843d"
dependencies = [
 "phf_shared",
 "rand",
]

[[package]]
name = "phf_macros"
version = "0.11.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f84ac04429c13a7ff43785d75ad27569f2951ce0ffd30a3321230db2fc727216"
dependencies = [
 "phf_generator",
 "phf_shared",
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "phf_shared"
version = "0.11.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "67eabc2ef2a60eb7faa00097bd1ffdb5bd28e62bf39990626a582201b7a754e5"
dependencies = [
 "siphasher",
]

[[package]]
name = "pin-project-lite"
version = "0.2.17"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a89322df9ebe1c1578d689c92318e070967d1042b512afbe49518723f4e6d5cd"

[[package]]
name = "portable-atomic"
version = "1.15.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "05c8b63e8d9609db387f0324918f81d68fe27748f084ef092fb35954d0539a85"

[[package]]
name = "powerfmt"
version = "0.2.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "439ee305def115ba05938db6eb1644ff94165c5ab5e9420d1c1bcedbba909391"

[[package]]
name = "proc-macro2"
version = "1.0.107"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "985e7ec9bb745e6ce6535b544d84d6cd6f7ad8bd711c398938ae983b91a766d9"
dependencies = [
 "unicode-ident",
]

[[package]]
name = "quote"
version = "1.0.47"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1fbf4db142a473a8d80c26bbf18454ed458bf8d26c8219c331daecfdbd079001"
dependencies = [
 "proc-macro2",
]

[[package]]
name = "r-efi"
version = "5.3.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "69cdb34c158ceb288df11e18b4bd39de994f6657d83847bdffdbd7f346754b0f"

[[package]]
name = "r-efi"
version = "6.0.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f8dcc9c7d52a811697d2151c701e0d08956f92b0e24136cf4cf27b57a6a0d9bf"

[[package]]
name = "rand"
version = "0.8.8"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e058c7de0b26af77780c769414d6257830bb240f3c38477dbc2c16e5f54d6d4c"
dependencies = [
 "rand_core",
]

[[package]]
name = "rand_core"
version = "0.6.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ec0be4795e2f6a28069bec0b5ff3e2ac9bafc99e6a9a7dc3547996c5c816922c"

[[package]]
name = "ratatui"
version = "0.30.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3274ba0a2c5e1bcad2a2005d20f4dc59dad26b2eb0940fb094500dba4099d57d"
dependencies = [
 "instability",
 "ratatui-core",
 "ratatui-crossterm",
 "ratatui-macros",
 "ratatui-termina",
 "ratatui-termwiz",
 "ratatui-widgets",
 "serde",
]

[[package]]
name = "ratatui-core"
version = "0.1.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cbb175c433c8e28a809d1f5773a2ae96e68c0ce40db865cbab1020bf33ae479c"
dependencies = [
 "bitflags 2.13.2",
 "compact_str",
 "critical-section",
 "hashbrown 0.17.1",
 "itertools",
 "kasuari",
 "lru",
 "palette",
 "serde",
 "strum",
 "thiserror 2.0.20",
 "unicode-segmentation",
 "unicode-truncate",
 "unicode-width",
]

[[package]]
name = "ratatui-crossterm"
version = "0.1.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "567584a3b0e6a8203c23de40b4861497266725eb5363dbfd18a1edd603cca9f0"
dependencies = [
 "cfg-if",
 "crossterm",
 "instability",
 "ratatui-core",
]

[[package]]
name = "ratatui-macros"
version = "0.7.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ed7dc68daa7498a43e4d68e0eb078427e10c38fbcfbb1e42d955f1fa2140d814"
dependencies = [
 "ratatui-core",
 "ratatui-widgets",
]

[[package]]
name = "ratatui-termina"
version = "0.1.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c0bf912d9e66f057a759d92e386a280ea886b352ab757d6ac4d653c7ed2c43c2"
dependencies = [
 "instability",
 "ratatui-core",
 "termina",
]

[[package]]
name = "ratatui-termwiz"
version = "0.1.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "faf03e0380b7744054d6cb74224fe3adf062a029754933f575ca1e3b4c2ce977"
dependencies = [
 "ratatui-core",
 "termwiz",
]

[[package]]
name = "ratatui-widgets"
version = "0.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "66e3d19bcc9130ca376277d93b60767ff121ace3be06f5f95f81dd68956407d1"
dependencies = [
 "bitflags 2.13.2",
 "hashbrown 0.17.1",
 "indoc",
 "instability",
 "itertools",
 "line-clipping",
 "ratatui-core",
 "serde",
 "strum",
 "time",
 "unicode-segmentation",
 "unicode-width",
]

[[package]]
name = "redox_syscall"
version = "0.5.18"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ed2bf2547551a7053d6fdfafda3f938979645c44812fbfcda098faae3f1a362d"
dependencies = [
 "bitflags 2.13.2",
]

[[package]]
name = "regex"
version = "1.13.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f020237b6c8eed93db2e2cb53c00c60a8e1bc73da7d073199a1180401450218d"
dependencies = [
 "aho-corasick",
 "memchr",
 "regex-automata",
 "regex-syntax",
]

[[package]]
name = "regex-automata"
version = "0.4.18"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ad8553b9b26413251cbf30e620595c7a41b3887f03da04579c0e6b0d6a06b4b2"
dependencies = [
 "aho-corasick",
 "memchr",
 "regex-syntax",
]

[[package]]
name = "regex-syntax"
version = "0.8.11"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d6f6ff9a378485b298a5286656da665ba74413d36db0979633275d2e708145d4"

[[package]]
name = "rustc-demangle"
version = "0.1.28"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b74b56ffa8bb2830709a538c2cbcae9aa062db0d2a42563bfb09bdaae44020eb"

[[package]]
name = "rustc_version"
version = "0.4.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cfcb3a22ef46e85b45de6ee7e79d063319ebb6594faafcf1c225ea92ab6e9b92"
dependencies = [
 "semver",
]

[[package]]
name = "rustix"
version = "1.1.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "891efababe418670775f199f0d233d84843c227a0949a883ce15b37c78d6629d"
dependencies = [
 "bitflags 2.13.2",
 "errno",
 "libc",
 "linux-raw-sys",
 "windows-sys",
]

[[package]]
name = "rustversion"
version = "1.0.23"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cf54715a573b99ac80df0bc206da022bcd442c974952c7b9720069370852e21f"

[[package]]
name = "ryu"
version = "1.0.23"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9774ba4a74de5f7b1c1451ed6cd5285a32eddb5cccb8cc655a4e50009e06477f"

[[package]]
name = "scopeguard"
version = "1.2.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "94143f37725109f92c262ed2cf5e59bce7498c01bcc1502d7b9afe439a4e9f49"

[[package]]
name = "semver"
version = "1.0.28"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8a7852d02fc848982e0c167ef163aaff9cd91dc640ba85e263cb1ce46fae51cd"

[[package]]
name = "serde"
version = "1.0.229"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4148590afebada386688f18773da617792bf2ef03ffc1e4cbd2b1d45b023e0ba"
dependencies = [
 "serde_core",
 "serde_derive",
]

[[package]]
name = "serde_core"
version = "1.0.229"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "67dca2c9c51e58a4791a4b1ed58308b39c64224d349a935ab5039aa360942a48"
dependencies = [
 "serde_derive",
]

[[package]]
name = "serde_derive"
version = "1.0.229"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e7a5d71263a5a7d47b41f6b3f06ba276f10cc18b0931f1799f710578e2309348"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 3.0.6",
]

[[package]]
name = "sha2"
version = "0.10.9"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a7507d819769d01a365ab707794a4084392c824f54a7a6a7862f8c3d0892b283"
dependencies = [
 "cfg-if",
 "cpufeatures",
 "digest",
]

[[package]]
name = "sharded-slab"
version = "0.1.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f40ca3c46823713e0d4209592e8d6e826aa57e928f09752619fc696c499637f6"
dependencies = [
 "lazy_static",
]

[[package]]
name = "signal-hook"
version = "0.3.18"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d881a16cf4426aa584979d30bd82cb33429027e42122b169753d6ef1085ed6e2"
dependencies = [
 "libc",
 "signal-hook-registry",
]

[[package]]
name = "signal-hook-mio"
version = "0.2.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b75a19a7a740b25bc7944bdee6172368f988763b744e3d4dfe753f6b4ece40cc"
dependencies = [
 "libc",
 "mio",
 "signal-hook",
]

[[package]]
name = "signal-hook-registry"
version = "1.4.8"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c4db69cba1110affc0e9f7bcd48bbf87b3f4fc7c61fc9155afd4c469eb3d6c1b"
dependencies = [
 "errno",
 "libc",
]

[[package]]
name = "siphasher"
version = "1.0.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8ee5873ec9cce0195efcb7a4e9507a04cd49aec9c83d0389df45b1ef7ba2e649"

[[package]]
name = "slab"
version = "0.4.12"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0c790de23124f9ab44544d7ac05d60440adc586479ce501c1d6d7da3cd8c9cf5"

[[package]]
name = "smallvec"
version = "1.16.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ba467056f1b547ed52077911161fc86985becbc60e8e1857c8a144dab0def891"

[[package]]
name = "static_assertions"
version = "1.1.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a2eb9349b6444b326872e140eb1cf5e7c522154d69e7a0ffb0fb81c06b37543f"

[[package]]
name = "strsim"
version = "0.11.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7da8b5736845d9f2fcb837ea5d9e2628564b3b043a70948a3f0b778838c5fb4f"

[[package]]
name = "strum"
version = "0.28.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9628de9b8791db39ceda2b119bbe13134770b56c138ec1d3af810d045c04f9bd"
dependencies = [
 "strum_macros",
]

[[package]]
name = "strum_macros"
version = "0.28.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ab85eea0270ee17587ed4156089e10b9e6880ee688791d45a905f5b1ca36f664"
dependencies = [
 "heck",
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "syn"
version = "1.0.109"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "72b64191b275b66ffe2469e8af2c1cfe3bafa67b529ead792a6d0160888b4237"
dependencies = [
 "proc-macro2",
 "quote",
 "unicode-ident",
]

[[package]]
name = "syn"
version = "2.0.119"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "872831b642d1a07999a962a351ed35b955ea2cfc8f3862091e2a240a84f17297"
dependencies = [
 "proc-macro2",
 "quote",
 "unicode-ident",
]

[[package]]
name = "syn"
version = "3.0.6"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8593e8e72159ed2257d083c7a454a85cbf854f37a0966d8d483aff8c8a3ebcee"
dependencies = [
 "proc-macro2",
 "quote",
 "unicode-ident",
]

[[package]]
name = "termina"
version = "0.3.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9048a889effe34a5cddee0af7f53285198b16dca3be510858d38dfdb3e62a04e"
dependencies = [
 "bitflags 2.13.2",
 "parking_lot",
 "rustix",
 "signal-hook",
 "windows-sys",
]

[[package]]
name = "terminfo"
version = "0.9.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d4ea810f0692f9f51b382fff5893887bb4580f5fa246fde546e0b13e7fcee662"
dependencies = [
 "fnv",
 "nom",
 "phf",
 "phf_codegen",
]

[[package]]
name = "termios"
version = "0.3.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "411c5bf740737c7918b8b1fe232dca4dc9f8e754b8ad5e20966814001ed0ac6b"
dependencies = [
 "libc",
]

[[package]]
name = "termwiz"
version = "0.23.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4676b37242ccbd1aabf56edb093a4827dc49086c0ffd764a5705899e0f35f8f7"
dependencies = [
 "anyhow",
 "base64",
 "bitflags 2.13.2",
 "fancy-regex",
 "filedescriptor",
 "finl_unicode",
 "fixedbitset",
 "hex",
 "lazy_static",
 "libc",
 "log",
 "memmem",
 "nix",
 "num-derive",
 "num-traits",
 "ordered-float",
 "pest",
 "pest_derive",
 "phf",
 "sha2",
 "signal-hook",
 "siphasher",
 "terminfo",
 "termios",
 "thiserror 1.0.69",
 "ucd-trie",
 "unicode-segmentation",
 "vtparse",
 "wezterm-bidi",
 "wezterm-blob-leases",
 "wezterm-color-types",
 "wezterm-dynamic",
 "wezterm-input-types",
 "winapi",
]

[[package]]
name = "thiserror"
version = "1.0.69"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b6aaf5339b578ea85b50e080feb250a3e8ae8cfcdff9a461c9ec2904bc923f52"
dependencies = [
 "thiserror-impl 1.0.69",
]

[[package]]
name = "thiserror"
version = "2.0.20"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ec86235f5fcc2a73650310756d2ac5b138a5780bbbdfae3eeccec992c435ba4f"
dependencies = [
 "thiserror-impl 2.0.20",
]

[[package]]
name = "thiserror-impl"
version = "1.0.69"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4fee6c4efc90059e10f81e6d42c60a18f76588c3d74cb83a0b242a2b6c7504c1"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "thiserror-impl"
version = "2.0.20"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bc04cd3e1236dd4a98afca4569f2deb3f120e5422a4023be2cb683f8486292af"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 3.0.6",
]

[[package]]
name = "thread_local"
version = "1.1.10"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1ad99c4c6d32803332c548b1af0540b357b3f5fc0be8f6c6bfe8b2e6ae784070"
dependencies = [
 "cfg-if",
]

[[package]]
name = "time"
version = "0.3.55"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cdb87b95ec50ddfa440816d227a17b2ccbdda963a316a727fda0fc4334f7d134"
dependencies = [
 "deranged",
 "libc",
 "num-conv",
 "num_threads",
 "powerfmt",
 "serde_core",
 "time-core",
]

[[package]]
name = "time-core"
version = "0.1.9"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9e1c906769ad99c88eaa54e728060edef082f8e358ff32030cb7c7d315e81109"

[[package]]
name = "tracing"
version = "0.1.44"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "63e71662fa4b2a2c3a26f570f037eb95bb1f85397f3cd8076caed2f026a6d100"
dependencies = [
 "pin-project-lite",
 "tracing-core",
]

[[package]]
name = "tracing-core"
version = "0.1.36"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "db97caf9d906fbde555dd62fa95ddba9eecfd14cb388e4f491a66d74cd5fb79a"
dependencies = [
 "once_cell",
 "valuable",
]

[[package]]
name = "tracing-error"
version = "0.2.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8b1581020d7a273442f5b45074a6a57d5757ad0a47dac0e9f0bd57b81936f3db"
dependencies = [
 "tracing",
 "tracing-subscriber",
]

[[package]]
name = "tracing-subscriber"
version = "0.3.23"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cb7f578e5945fb242538965c2d0b04418d38ec25c79d160cd279bf0731c8d319"
dependencies = [
 "sharded-slab",
 "thread_local",
 "tracing-core",
]

[[package]]
name = "typenum"
version = "1.20.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b6f5e870be6c3b371b77fe0ee0bafb859fa4964b4404c27de1d380043c4dda20"

[[package]]
name = "ucd-trie"
version = "0.1.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "2896d95c02a80c6d6a5d6e953d479f5ddf2dfdb6a244441010e373ac0fb88971"

[[package]]
name = "unicode-ident"
version = "1.0.26"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d245f478577f809a851594d02313b640fb437e0bb33866753cff937863096954"

[[package]]
name = "unicode-segmentation"
version = "1.13.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c6f5d3c3b1bf09027a88a6bc961fc00497d651009560b5463668dc81b0fa87a8"

[[package]]
name = "unicode-truncate"
version = "2.0.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "16b380a1238663e5f8a691f9039c73e1cdae598a30e9855f541d29b08b53e9a5"
dependencies = [
 "itertools",
 "unicode-segmentation",
 "unicode-width",
]

[[package]]
name = "unicode-width"
version = "0.2.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b4ac048d71ede7ee76d585517add45da530660ef4390e49b098733c6e897f254"

[[package]]
name = "utf8parse"
version = "0.2.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "06abde3611657adf66d383f00b093d7faecc7fa57071cce2578660c9f1010821"

[[package]]
name = "uuid"
version = "1.26.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "2ef6dac1e96601b4fb3acccccff2139741fcb757cb9a36089bf5be91cfb285ce"
dependencies = [
 "atomic",
 "getrandom 0.4.3",
 "js-sys",
 "wasm-bindgen",
]

[[package]]
name = "valuable"
version = "0.1.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ba73ea9cf16a25df0c8caa16c51acb937d5712a8429db78a3ee29d5dcacd3a65"

[[package]]
name = "version_check"
version = "0.9.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0b928f33d975fc6ad9f86c8f283853ad26bdd5b10b7f1542aa2fa15e2289105a"

[[package]]
name = "vtparse"
version = "0.6.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "6d9b2acfb050df409c972a37d3b8e08cdea3bddb0c09db9d53137e504cfabed0"
dependencies = [
 "utf8parse",
]

[[package]]
name = "wasi"
version = "0.11.1+wasi-snapshot-preview1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ccf3ec651a847eb01de73ccad15eb7d99f80485de043efb2f370cd654f4ea44b"

[[package]]
name = "wasip2"
version = "1.0.4+wasi-0.2.12"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b67efb37e106e55ce722a510d6b5f9c17f083e5fc79afc2badeb12cc313d9487"
dependencies = [
 "wit-bindgen",
]

[[package]]
name = "wasm-bindgen"
version = "0.2.128"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "aecb87a33d3b0c5e3b7aa46336eaf486cffafbd281b195e4c8b80d50df2351bf"
dependencies = [
 "cfg-if",
 "once_cell",
 "rustversion",
 "wasm-bindgen-macro",
 "wasm-bindgen-shared",
]

[[package]]
name = "wasm-bindgen-macro"
version = "0.2.128"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a690d511e3c1a8b3a55e33511e3c2c00c78415cd23650f32b808627f5696b9ed"
dependencies = [
 "quote",
 "wasm-bindgen-macro-support",
]

[[package]]
name = "wasm-bindgen-macro-support"
version = "0.2.128"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "411e4887f0071ef2d2164a9d5fdf2d20efbef78fccd3a78b0c10a1dc5295e48a"
dependencies = [
 "bumpalo",
 "proc-macro2",
 "quote",
 "syn 3.0.6",
 "wasm-bindgen-shared",
]

[[package]]
name = "wasm-bindgen-shared"
version = "0.2.128"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "81941cd78d0c92026c33e5e01312845a4cb1e9af3407f9134b100dd03144103e"
dependencies = [
 "unicode-ident",
]

[[package]]
name = "wezterm-bidi"
version = "0.2.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0c0a6e355560527dd2d1cf7890652f4f09bb3433b6aadade4c9b5ed76de5f3ec"
dependencies = [
 "log",
 "wezterm-dynamic",
]

[[package]]
name = "wezterm-blob-leases"
version = "0.1.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "692daff6d93d94e29e4114544ef6d5c942a7ed998b37abdc19b17136ea428eb7"
dependencies = [
 "getrandom 0.3.4",
 "mac_address",
 "sha2",
 "thiserror 1.0.69",
 "uuid",
]

[[package]]
name = "wezterm-color-types"
version = "0.3.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7de81ef35c9010270d63772bebef2f2d6d1f2d20a983d27505ac850b8c4b4296"
dependencies = [
 "csscolorparser",
 "deltae",
 "lazy_static",
 "wezterm-dynamic",
]

[[package]]
name = "wezterm-dynamic"
version = "0.2.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "5f2ab60e120fd6eaa68d9567f3226e876684639d22a4219b313ff69ec0ccd5ac"
dependencies = [
 "log",
 "ordered-float",
 "strsim",
 "thiserror 1.0.69",
 "wezterm-dynamic-derive",
]

[[package]]
name = "wezterm-dynamic-derive"
version = "0.1.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "46c0cf2d539c645b448eaffec9ec494b8b19bd5077d9e58cb1ae7efece8d575b"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 1.0.109",
]

[[package]]
name = "wezterm-input-types"
version = "0.1.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7012add459f951456ec9d6c7e6fc340b1ce15d6fc9629f8c42853412c029e57e"
dependencies = [
 "bitflags 1.3.2",
 "euclid",
 "lazy_static",
 "serde",
 "wezterm-dynamic",
]

[[package]]
name = "winapi"
version = "0.3.9"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "5c839a674fcd7a98952e593242ea400abe93992746761e38641405d28b00f419"
dependencies = [
 "winapi-i686-pc-windows-gnu",
 "winapi-x86_64-pc-windows-gnu",
]

[[package]]
name = "winapi-i686-pc-windows-gnu"
version = "0.4.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ac3b87c63620426dd9b991e5ce0329eff545bccbbb34f3be09ff6fb6ab51b7b6"

[[package]]
name = "winapi-x86_64-pc-windows-gnu"
version = "0.4.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "712e227841d057c1ee1cd2fb22fa7e5a5461ae8e48fa2ca79ec42cfc1931183f"

[[package]]
name = "windows-link"
version = "0.2.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f0805222e57f7521d6a62e36fa9163bc891acd422f971defe97d64e70d0a4fe5"

[[package]]
name = "windows-sys"
version = "0.61.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ae137229bcbd6cdf0f7b80a31df61766145077ddf49416a728b02cb3921ff3fc"
dependencies = [
 "windows-link",
]

[[package]]
name = "wit-bindgen"
version = "0.57.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1ebf944e87a7c253233ad6766e082e3cd714b5d03812acc24c318f549614536e"
`},{type:`file`,name:`Cargo.toml`,path:`crabe/etchebest/Cargo.toml`,language:`TOML`,content:`[package]
name = "etchebest"
version = "0.1.0"
description = "hello ratatouille"
authors = ["mokotanin <titchou68@gmail.com>"]
license = "MIT"
edition = "2024"

[dependencies]
color-eyre = "0.6.5"
crossterm = "0.29.0"
ratatui = "0.30.2"

# Read the optimization guideline for more details: https://ratatui.rs/recipes/apps/release-your-app/#optimizations
[profile.release]
codegen-units = 1
lto = true
opt-level = "s"
strip = true
`},{type:`file`,name:`LICENSE`,path:`crabe/etchebest/LICENSE`,language:`Text`,content:`The MIT License (MIT)

Copyright (c) mokotanin <titchou68@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`},{type:`file`,name:`README.md`,path:`crabe/etchebest/README.md`,language:`Markdown`,content:`# etchebest

This is a [Ratatui] app generated by the [Hello World template].

[Ratatui]: https://ratatui.rs
[Hello World Template]: https://github.com/ratatui/templates/tree/main/hello-world

## License

Copyright (c) mokotanin <titchou68@gmail.com>

This project is licensed under the MIT license ([LICENSE] or <http://opensource.org/licenses/MIT>)

[LICENSE]: ./LICENSE
`}]},{type:`folder`,name:`grrs`,path:`crabe/grrs`,children:[{type:`folder`,name:`src`,path:`crabe/grrs/src`,children:[{type:`file`,name:`lib.rs`,path:`crabe/grrs/src/lib.rs`,language:`Rust`,content:`pub fn find_matches(content: &str, pattern: &str, mut writer: impl std::io::Write) {
    for line in content.lines() {
        if line.contains(pattern) {
            writeln!(writer, "{}", line);
        }
    }
}
`},{type:`file`,name:`main.rs`,path:`crabe/grrs/src/main.rs`,language:`Rust`,content:`use anyhow::{Context, Result};
use clap::Parser;

/// Search for a pattern in a file and display the lines that contain
#[derive(Parser)]
struct Cli {
    /// The pattern to look for
    pattern: String,
    /// The path to the file to read
    path: std::path::PathBuf,
}

/// Clap knows which fields to expect and their expected format.
/// It can automatically generate a nice --help message
/// as well as give some great errors to suggest you pass --output when you wrote --putput.

fn main() -> Result<()> {
    let args = Cli::parse();

    let content = std::fs::read_to_string(&args.path)
        .with_context(|| format!("could not read file \`{}\`", args.path.display()))?;

    grrs::find_matches(&content, &args.pattern, &mut std::io::stdout());

    Ok(())
}
`}]},{type:`folder`,name:`tests`,path:`crabe/grrs/tests`,children:[{type:`file`,name:`cli.rs`,path:`crabe/grrs/tests/cli.rs`,language:`Rust`,content:`use assert_cmd::cargo::*; // Import cargo_bin_cmd! macro and methods
use predicates::prelude::*; // Used for writing assertions

#[test]
fn file_doesnt_exist() -> Result<(), Box<dyn std::error::Error>> {
    let mut cmd = cargo_bin_cmd!("grrs");
    cmd.arg("foobar").arg("test/file/doesnt/exist");
    cmd.assert()
        .failure()
        .stderr(predicate::str::contains("could not read file"));

    Ok(())
}
`},{type:`file`,name:`print.rs`,path:`crabe/grrs/tests/print.rs`,language:`Rust`,content:`use assert_cmd::;
use assert_fs::fixture::FileWriteStr;
use predicates::Predicate;

#[test]
fn find_content_in_file() -> Result<(), Box<dyn std::error::Error>> {
    let file = assert_fs::NamedTempFile::new("sample.txt")?;
    file.write_str("A test\\nActual content\\nMore content\\nAnother test")?;

    let mut cmd = cargo_bin_cmd!("grrs");
    cmd.arg("test").arg(file.path());
    cmd.assert()
        .success()
        .stdout(predictates::str::contains("A test\\nAnother test"));

    Ok(())
}
`}]},{type:`file`,name:`Cargo.lock`,path:`crabe/grrs/Cargo.lock`,language:`Text`,content:`# This file is automatically @generated by Cargo.
# It is not intended for manual editing.
version = 4

[[package]]
name = "aho-corasick"
version = "1.1.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c982642fa9e8606056828ee9a8505737230110bb1099153c79efe865c59d12ba"
dependencies = [
 "memchr",
]

[[package]]
name = "anstream"
version = "1.0.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "824a212faf96e9acacdbd09febd34438f8f711fb84e09a8916013cd7815ca28d"
dependencies = [
 "anstyle",
 "anstyle-parse",
 "anstyle-query",
 "anstyle-wincon",
 "colorchoice",
 "is_terminal_polyfill",
 "utf8parse",
]

[[package]]
name = "anstyle"
version = "1.0.14"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "940b3a0ca603d1eade50a4846a2afffd5ef57a9feac2c0e2ec2e14f9ead76000"

[[package]]
name = "anstyle-parse"
version = "1.0.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "52ce7f38b242319f7cabaa6813055467063ecdc9d355bbb4ce0c68908cd8130e"
dependencies = [
 "utf8parse",
]

[[package]]
name = "anstyle-query"
version = "1.1.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "40c48f72fd53cd289104fc64099abca73db4166ad86ea0b4341abe65af83dadc"
dependencies = [
 "windows-sys",
]

[[package]]
name = "anstyle-wincon"
version = "3.0.11"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "291e6a250ff86cd4a820112fb8898808a366d8f9f58ce16d1f538353ad55747d"
dependencies = [
 "anstyle",
 "once_cell_polyfill",
 "windows-sys",
]

[[package]]
name = "anyhow"
version = "1.0.104"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "330a5ed07fa54e4702c9d6c4174f74427fc0ef6e214bbd677ae50a5099946470"

[[package]]
name = "assert_cmd"
version = "2.2.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "2aa3a22042e45de04255c7bf3626e239f450200fd0493c1e382263544b20aea6"
dependencies = [
 "anstyle",
 "bstr",
 "libc",
 "predicates",
 "predicates-core",
 "predicates-tree",
 "wait-timeout",
]

[[package]]
name = "assert_fs"
version = "1.1.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "6ecf5c70ca07b7f80220bce936f0556a960ca6fb00fc2bd4125b5e581b218137"
dependencies = [
 "anstyle",
 "globwalk",
 "predicates",
 "predicates-core",
 "predicates-tree",
 "tempfile",
]

[[package]]
name = "autocfg"
version = "1.5.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f2032f911046de80f0a198e0901378627c33f59ea0ac00e363d481118bd70a53"

[[package]]
name = "bitflags"
version = "1.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bef38d45163c2f1dde094a7dfd33ccf595c92905c8f8f4fdc18d06fb1037718a"

[[package]]
name = "bitflags"
version = "2.13.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3ded4057c258ba199e2d26386d3af3780957ecaee6c4ef4041c6b4b8b97c0b06"

[[package]]
name = "bstr"
version = "1.13.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "6bb31b46c14244e20ee9984b11bf5c992b91fb6939fea616e3512c8baecdbe5f"
dependencies = [
 "memchr",
 "regex-automata",
 "serde_core",
]

[[package]]
name = "clap"
version = "4.6.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "aa8876b300ab35ba921adea3dfd70157a46249b33f95c9084ae5709785478946"
dependencies = [
 "clap_builder",
 "clap_derive",
]

[[package]]
name = "clap-verbosity-flag"
version = "3.0.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9d92b1fab272fe943881b77cc6e920d6543e5b1bfadbd5ed81c7c5a755742394"
dependencies = [
 "clap",
 "log",
]

[[package]]
name = "clap_builder"
version = "4.6.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ec0797fb7aeb1406c84efac526901f7ec3ead2124f946b494e72879d4b54704d"
dependencies = [
 "anstream",
 "anstyle",
 "clap_lex",
 "strsim",
]

[[package]]
name = "clap_derive"
version = "4.6.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f9c751b79415d4e559e3d1fcf128e09e720eb673a06d26cf6f392d37d75b66e0"
dependencies = [
 "heck",
 "proc-macro2",
 "quote",
 "syn 3.0.6",
]

[[package]]
name = "clap_lex"
version = "1.1.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1c133bc6a41be0d194c306b5506d15e6feeea7b1d6604bd3f8310dfb2ca96486"

[[package]]
name = "colorchoice"
version = "1.0.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1d07550c9036bf2ae0c684c4297d503f838287c83c53686d05370d0e139ae570"

[[package]]
name = "crossbeam-deque"
version = "0.8.8"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "622f3fc73690be383c7214310406f28a90e6edeadc3cea882f9d71e495b9711a"
dependencies = [
 "crossbeam-epoch",
 "crossbeam-utils",
]

[[package]]
name = "crossbeam-epoch"
version = "0.9.21"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "dc74980687109a3b14c72fd458107bf0baa1da1a1a805e178d15501ba9b86d9d"
dependencies = [
 "crossbeam-utils",
]

[[package]]
name = "crossbeam-utils"
version = "0.8.23"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a31eee39dddec8330830986fcd7625edb5a24ec90ea038215273bbc3adb08ac6"

[[package]]
name = "defmt"
version = "1.1.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e2953bfe4f93bbd20cc71198842756f77d161884c99ebbabc41d80231ded88d1"
dependencies = [
 "bitflags 1.3.2",
 "defmt-macros",
]

[[package]]
name = "defmt-macros"
version = "1.1.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bad9c72e7ca2137e0dc3813245a0d282fd6daad32fd800af018306a9169b5fe8"
dependencies = [
 "defmt-parser",
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "defmt-parser"
version = "1.0.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "10d60334b3b2e7c9d91ef8150abfb6fa4c1c39ebbcf4a81c2e346aad939fee3e"
dependencies = [
 "thiserror",
]

[[package]]
name = "difflib"
version = "0.4.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "6184e33543162437515c2e2b48714794e37845ec9851711914eec9d308f6ebe8"

[[package]]
name = "env_filter"
version = "2.0.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "900d271a03799a1ee8d1ca9b19893b48ca674a9284fefcfb85f05e74ed314217"
dependencies = [
 "log",
 "regex",
]

[[package]]
name = "env_logger"
version = "0.11.11"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "de671bd27a75a797dc9ae289ba1e77276e75e2026408aab65185384e2d5cd3f6"
dependencies = [
 "anstream",
 "anstyle",
 "env_filter",
 "jiff",
 "log",
]

[[package]]
name = "errno"
version = "0.3.14"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "39cab71617ae0d63f51a36d69f866391735b51691dbda63cf6f96d042b63efeb"
dependencies = [
 "libc",
 "windows-sys",
]

[[package]]
name = "fastrand"
version = "2.5.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "da7c62ceae207dd37ea5b845da6a0696c799f85e97da1ab5b7910be3c1c80223"

[[package]]
name = "float-cmp"
version = "0.10.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b09cf3155332e944990140d967ff5eceb70df778b34f77d8075db46e4704e6d8"
dependencies = [
 "num-traits",
]

[[package]]
name = "globset"
version = "0.4.20"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "07c34a9410465b45bd9787443bc7370f37735bad04b0f0cd57ff1a3186c98988"
dependencies = [
 "aho-corasick",
 "bstr",
 "log",
 "regex-automata",
 "regex-syntax",
]

[[package]]
name = "globwalk"
version = "0.9.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0bf760ebf69878d9fd8f110c89703d90ce35095324d1f1edcb595c63945ee757"
dependencies = [
 "bitflags 2.13.2",
 "ignore",
 "walkdir",
]

[[package]]
name = "grrs"
version = "0.1.0"
dependencies = [
 "anyhow",
 "assert_cmd",
 "assert_fs",
 "clap",
 "clap-verbosity-flag",
 "env_logger",
 "log",
 "predicates",
]

[[package]]
name = "heck"
version = "0.5.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "2304e00983f87ffb38b55b444b5e3b60a884b5d30c0fca7d82fe33449bbe55ea"

[[package]]
name = "ignore"
version = "0.4.33"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "00b69833ed729dc5aa7d19541d96d6cf8e9137194207a04916d658e43168402f"
dependencies = [
 "crossbeam-deque",
 "globset",
 "log",
 "memchr",
 "regex-automata",
 "same-file",
 "walkdir",
 "winapi-util",
]

[[package]]
name = "is_terminal_polyfill"
version = "1.70.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a6cb138bb79a146c1bd460005623e142ef0181e3d0219cb493e02f7d08a35695"

[[package]]
name = "jiff"
version = "0.2.37"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0ab1baf72f08796de0260609515130699b890ac25f30e610ad894bc5856cafdb"
dependencies = [
 "defmt",
 "jiff-core",
 "jiff-static",
 "log",
 "portable-atomic",
 "portable-atomic-util",
 "serde_core",
]

[[package]]
name = "jiff-core"
version = "0.1.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "5e52fe76043ccecc9005d2305ebaadf7d7fc0cc89ca6baa10a94d6bc68c7128c"
dependencies = [
 "defmt",
 "log",
]

[[package]]
name = "jiff-static"
version = "0.2.37"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "378268a1116ad67ae6228701118ac9f491d78fda38a40a1f1a9e1348de6f7212"
dependencies = [
 "jiff-core",
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "libc"
version = "0.2.189"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3eaf3ede3fee6db1a4c2ee091bf8a8b4dccdc6d17f656fb07896ee72867612f2"

[[package]]
name = "linux-raw-sys"
version = "0.12.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "32a66949e030da00e8c7d4434b251670a91556f4144941d37452769c25d58a53"

[[package]]
name = "log"
version = "0.4.34"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f9f8bd3e56ce4dfc153cf470fffbfa98c7620958b312ca5c3a4b8d5181fd13c6"

[[package]]
name = "memchr"
version = "2.8.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cf8baf1c55e62ffcace7a9f06f4bd9cd3f0c4beb022d3b367256b91b87513d98"

[[package]]
name = "normalize-line-endings"
version = "0.3.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "61807f77802ff30975e01f4f071c8ba10c022052f98b3294119f3e615d13e5be"

[[package]]
name = "num-traits"
version = "0.2.19"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "071dfc062690e90b734c0b2273ce72ad0ffa95f0c74596bc250dcfd960262841"
dependencies = [
 "autocfg",
]

[[package]]
name = "once_cell"
version = "1.21.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9f7c3e4beb33f85d45ae3e3a1792185706c8e16d043238c593331cc7cd313b50"

[[package]]
name = "once_cell_polyfill"
version = "1.70.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "384b8ab6d37215f3c5301a95a4accb5d64aa607f1fcb26a11b5303878451b4fe"

[[package]]
name = "portable-atomic"
version = "1.15.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "05c8b63e8d9609db387f0324918f81d68fe27748f084ef092fb35954d0539a85"

[[package]]
name = "portable-atomic-util"
version = "0.2.8"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "10ab3eb7f3becc3a1cbc4f2c6f20267996cfc1a6467a873763411b136a122715"
dependencies = [
 "portable-atomic",
]

[[package]]
name = "predicates"
version = "3.1.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ada8f2932f28a27ee7b70dd6c1c39ea0675c55a36879ab92f3a715eaa1e63cfe"
dependencies = [
 "anstyle",
 "difflib",
 "float-cmp",
 "normalize-line-endings",
 "predicates-core",
 "regex",
]

[[package]]
name = "predicates-core"
version = "1.0.10"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cad38746f3166b4031b1a0d39ad9f954dd291e7854fcc0eed52ee41a0b50d144"

[[package]]
name = "predicates-tree"
version = "1.0.13"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d0de1b847b39c8131db0467e9df1ff60e6d0562ab8e9a16e568ad0fdb372e2f2"
dependencies = [
 "predicates-core",
 "termtree",
]

[[package]]
name = "proc-macro2"
version = "1.0.107"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "985e7ec9bb745e6ce6535b544d84d6cd6f7ad8bd711c398938ae983b91a766d9"
dependencies = [
 "unicode-ident",
]

[[package]]
name = "quote"
version = "1.0.47"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1fbf4db142a473a8d80c26bbf18454ed458bf8d26c8219c331daecfdbd079001"
dependencies = [
 "proc-macro2",
]

[[package]]
name = "regex"
version = "1.13.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f020237b6c8eed93db2e2cb53c00c60a8e1bc73da7d073199a1180401450218d"
dependencies = [
 "aho-corasick",
 "memchr",
 "regex-automata",
 "regex-syntax",
]

[[package]]
name = "regex-automata"
version = "0.4.18"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ad8553b9b26413251cbf30e620595c7a41b3887f03da04579c0e6b0d6a06b4b2"
dependencies = [
 "aho-corasick",
 "memchr",
 "regex-syntax",
]

[[package]]
name = "regex-syntax"
version = "0.8.11"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d6f6ff9a378485b298a5286656da665ba74413d36db0979633275d2e708145d4"

[[package]]
name = "rustix"
version = "1.1.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "891efababe418670775f199f0d233d84843c227a0949a883ce15b37c78d6629d"
dependencies = [
 "bitflags 2.13.2",
 "errno",
 "libc",
 "linux-raw-sys",
 "windows-sys",
]

[[package]]
name = "same-file"
version = "1.0.6"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "93fc1dc3aaa9bfed95e02e6eadabb4baf7e3078b0bd1b4d7b6b0b68378900502"
dependencies = [
 "winapi-util",
]

[[package]]
name = "serde_core"
version = "1.0.229"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "67dca2c9c51e58a4791a4b1ed58308b39c64224d349a935ab5039aa360942a48"
dependencies = [
 "serde_derive",
]

[[package]]
name = "serde_derive"
version = "1.0.229"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e7a5d71263a5a7d47b41f6b3f06ba276f10cc18b0931f1799f710578e2309348"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 3.0.6",
]

[[package]]
name = "strsim"
version = "0.11.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7da8b5736845d9f2fcb837ea5d9e2628564b3b043a70948a3f0b778838c5fb4f"

[[package]]
name = "syn"
version = "2.0.119"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "872831b642d1a07999a962a351ed35b955ea2cfc8f3862091e2a240a84f17297"
dependencies = [
 "proc-macro2",
 "quote",
 "unicode-ident",
]

[[package]]
name = "syn"
version = "3.0.6"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8593e8e72159ed2257d083c7a454a85cbf854f37a0966d8d483aff8c8a3ebcee"
dependencies = [
 "proc-macro2",
 "quote",
 "unicode-ident",
]

[[package]]
name = "tempfile"
version = "3.27.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "32497e9a4c7b38532efcdebeef879707aa9f794296a4f0244f6f69e9bc8574bd"
dependencies = [
 "fastrand",
 "once_cell",
 "rustix",
 "windows-sys",
]

[[package]]
name = "termtree"
version = "0.5.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8f50febec83f5ee1df3015341d8bd429f2d1cc62bcba7ea2076759d315084683"

[[package]]
name = "thiserror"
version = "2.0.20"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ec86235f5fcc2a73650310756d2ac5b138a5780bbbdfae3eeccec992c435ba4f"
dependencies = [
 "thiserror-impl",
]

[[package]]
name = "thiserror-impl"
version = "2.0.20"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bc04cd3e1236dd4a98afca4569f2deb3f120e5422a4023be2cb683f8486292af"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 3.0.6",
]

[[package]]
name = "unicode-ident"
version = "1.0.26"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d245f478577f809a851594d02313b640fb437e0bb33866753cff937863096954"

[[package]]
name = "utf8parse"
version = "0.2.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "06abde3611657adf66d383f00b093d7faecc7fa57071cce2578660c9f1010821"

[[package]]
name = "wait-timeout"
version = "0.2.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "09ac3b126d3914f9849036f826e054cbabdc8519970b8998ddaf3b5bd3c65f11"
dependencies = [
 "libc",
]

[[package]]
name = "walkdir"
version = "2.5.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "29790946404f91d9c5d06f9874efddea1dc06c5efe94541a7d6863108e3a5e4b"
dependencies = [
 "same-file",
 "winapi-util",
]

[[package]]
name = "winapi-util"
version = "0.1.11"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c2a7b1c03c876122aa43f3020e6c3c3ee5c05081c9a00739faf7503aeba10d22"
dependencies = [
 "windows-sys",
]

[[package]]
name = "windows-link"
version = "0.2.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f0805222e57f7521d6a62e36fa9163bc891acd422f971defe97d64e70d0a4fe5"

[[package]]
name = "windows-sys"
version = "0.61.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ae137229bcbd6cdf0f7b80a31df61766145077ddf49416a728b02cb3921ff3fc"
dependencies = [
 "windows-link",
]
`},{type:`file`,name:`Cargo.toml`,path:`crabe/grrs/Cargo.toml`,language:`TOML`,content:`[package]
name = "grrs"
version = "0.1.0"
edition = "2024"
authors = ["mokotanin <titchou68@gmail.com>"]
license = "MIT"
description = "A tool to search files"
readme = "README.md"
keywords = ["cli", "search", "demo"]
categories = ["command-line-utilities"]

[dependencies]
clap = { version = "4.0", features = ["derive"] }
anyhow = "1.0"
log = "0.4.34"
env_logger = "0.11.11"
clap-verbosity-flag = "3.0.4"

[dev-dependencies]
assert_cmd = "2.0.14"
predicates = "3.1.4"
assert_fs = "1.1.1"
`},{type:`file`,name:`README.md`,path:`crabe/grrs/README.md`,language:`Markdown`,content:`# grrs

a simple bootleg of grep
`}]},{type:`folder`,name:`gruyere`,path:`crabe/gruyere`,children:[{type:`folder`,name:`src`,path:`crabe/gruyere/src`,children:[{type:`file`,name:`main.rs`,path:`crabe/gruyere/src/main.rs`,language:`Rust`,content:`use color_eyre::{
    eyre::{bail, WrapErr},
    Result,
};
use ratatui::{
    buffer::Buffer,
    crossterm::event::{self, Event, KeyCode, KeyEvent, KeyEventKind},
    layout::Rect,
    style::Stylize,
    symbols::border,
    text::{Line, Text},
    widgets::{Block, Borders, Paragraph, Widget},
    DefaultTerminal, Frame,
};

fn main() -> Result<()> {
    color_eyre::install()?;
    let mut terminal = ratatui::init();
    let app_result = App::default().run(&mut terminal);
    ratatui::restore();
    app_result
}

#[derive(Debug, Default)]
pub struct App {
    counter: u8,
    exit: bool,
}

impl App {
    /// runs the application's main loop until the user quits
    pub fn run(&mut self, terminal: &mut DefaultTerminal) -> Result<()> {
        while !self.exit {
            terminal.draw(|frame| self.render_frame(frame))?;
            self.handle_events().wrap_err("handle events failed")?;
        }
        Ok(())
    }

    fn render_frame(&self, frame: &mut Frame) {
        frame.render_widget(self, frame.area());
    }

    /// updates the application's state based on user input
    fn handle_events(&mut self) -> Result<()> {
        match event::read()? {
            // it's important to check that the event is a key press event as
            // crossterm also emits key release and repeat events on Windows.
            Event::Key(key_event) if key_event.kind == KeyEventKind::Press => self
                .handle_key_event(key_event)
                .wrap_err_with(|| format!("handling key event failed:\\n{key_event:#?}")),
            _ => Ok(()),
        }
    }

    fn handle_key_event(&mut self, key_event: KeyEvent) -> Result<()> {
        match key_event.code {
            KeyCode::Char('q') => self.exit(),
            KeyCode::Left => self.decrement_counter()?,
            KeyCode::Right => self.increment_counter()?,
            _ => {}
        }
        Ok(())
    }

    fn exit(&mut self) {
        self.exit = true;
    }

    fn decrement_counter(&mut self) -> Result<()> {
        self.counter -= 1;
        Ok(())
    }

    fn increment_counter(&mut self) -> Result<()> {
        self.counter += 1;
        if self.counter > 2 {
            bail!("counter overflow");
        }
        Ok(())
    }
}

impl Widget for &App {
    fn render(self, area: Rect, buf: &mut Buffer) {
        let title = Line::from(" Counter App Tutorial ".bold());
        let instructions = Line::from(vec![
            " Decrement ".into(),
            "<Left>".blue().bold(),
            " Increment ".into(),
            "<Right>".blue().bold(),
            " Quit ".into(),
            "<Q> ".blue().bold(),
        ]);
        let block = Block::default()
            .title(title.centered())
            .title_bottom(instructions.centered())
            .borders(Borders::ALL)
            .border_set(border::THICK);

        let counter_text = Text::from(vec![Line::from(vec![
            "Value: ".into(),
            self.counter.to_string().yellow(),
        ])]);

        Paragraph::new(counter_text)
            .centered()
            .block(block)
            .render(area, buf);
    }
}

#[cfg(test)]
mod tests {
    use ratatui::style::Style;

    use super::*;

    #[test]
    fn render() {
        let app = App::default();
        let mut buf = Buffer::empty(Rect::new(0, 0, 50, 4));

        app.render(buf.area, &mut buf);

        let mut expected = Buffer::with_lines(vec![
            "┏━━━━━━━━━━━━━ Counter App Tutorial ━━━━━━━━━━━━━┓",
            "┃                    Value: 0                    ┃",
            "┃                                                ┃",
            "┗━ Decrement <Left> Increment <Right> Quit <Q> ━━┛",
        ]);
        let title_style = Style::new().bold();
        let counter_style = Style::new().yellow();
        let key_style = Style::new().blue().bold();
        expected.set_style(Rect::new(14, 0, 22, 1), title_style);
        expected.set_style(Rect::new(28, 1, 1, 1), counter_style);
        expected.set_style(Rect::new(13, 3, 6, 1), key_style);
        expected.set_style(Rect::new(30, 3, 7, 1), key_style);
        expected.set_style(Rect::new(43, 3, 4, 1), key_style);

        assert_eq!(buf, expected);
    }

    #[test]
    fn handle_key_event() {
        let mut app = App::default();
        app.handle_key_event(KeyCode::Right.into()).unwrap();
        assert_eq!(app.counter, 1);

        app.handle_key_event(KeyCode::Left.into()).unwrap();
        assert_eq!(app.counter, 0);

        let mut app = App::default();
        app.handle_key_event(KeyCode::Char('q').into()).unwrap();
        assert!(app.exit);
    }

    #[test]
    #[should_panic(expected = "attempt to subtract with overflow")]
    fn handle_key_event_panic() {
        let mut app = App::default();
        let _ = app.handle_key_event(KeyCode::Left.into());
    }

    #[test]
    fn handle_key_event_overflow() {
        let mut app = App::default();
        assert!(app.handle_key_event(KeyCode::Right.into()).is_ok());
        assert!(app.handle_key_event(KeyCode::Right.into()).is_ok());
        assert_eq!(
            app.handle_key_event(KeyCode::Right.into())
                .unwrap_err()
                .to_string(),
            "counter overflow"
        );
    }
}
`}]},{type:`file`,name:`Cargo.lock`,path:`crabe/gruyere/Cargo.lock`,language:`Text`,content:`# This file is automatically @generated by Cargo.
# It is not intended for manual editing.
version = 4

[[package]]
name = "addr2line"
version = "0.25.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1b5d307320b3181d6d7954e663bd7c774a838b8220fe0593c86d9fb09f498b4b"
dependencies = [
 "gimli",
]

[[package]]
name = "adler2"
version = "2.0.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "320119579fcad9c21884f5c4861d16174d0e06250625266f50fe6898340abefa"

[[package]]
name = "aho-corasick"
version = "1.1.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c982642fa9e8606056828ee9a8505737230110bb1099153c79efe865c59d12ba"
dependencies = [
 "memchr",
]

[[package]]
name = "allocator-api2"
version = "0.2.21"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "683d7910e743518b0e34f1186f92494becacb047c7b6bf616c96772180fef923"

[[package]]
name = "anyhow"
version = "1.0.104"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "330a5ed07fa54e4702c9d6c4174f74427fc0ef6e214bbd677ae50a5099946470"

[[package]]
name = "approx"
version = "0.5.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cab112f0a86d568ea0e627cc1d6be74a1e9cd55214684db5561995f6dad897c6"
dependencies = [
 "num-traits",
]

[[package]]
name = "atomic"
version = "0.6.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a89cbf775b137e9b968e67227ef7f775587cde3fd31b0d8599dbd0f598a48340"
dependencies = [
 "bytemuck",
]

[[package]]
name = "autocfg"
version = "1.5.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f2032f911046de80f0a198e0901378627c33f59ea0ac00e363d481118bd70a53"

[[package]]
name = "backtrace"
version = "0.3.76"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bb531853791a215d7c62a30daf0dde835f381ab5de4589cfe7c649d2cbe92bd6"
dependencies = [
 "addr2line",
 "cfg-if",
 "libc",
 "miniz_oxide",
 "object",
 "rustc-demangle",
 "windows-link",
]

[[package]]
name = "base64"
version = "0.22.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "72b3254f16251a8381aa12e40e3c4d2f0199f8c6508fbecb9d91f575e0fbb8c6"

[[package]]
name = "bit-set"
version = "0.5.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0700ddab506f33b20a03b13996eccd309a48e5ff77d0d95926aa0210fb4e95f1"
dependencies = [
 "bit-vec",
]

[[package]]
name = "bit-vec"
version = "0.6.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "349f9b6a179ed607305526ca489b34ad0a41aed5f7980fa90eb03160b69598fb"

[[package]]
name = "bitflags"
version = "1.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bef38d45163c2f1dde094a7dfd33ccf595c92905c8f8f4fdc18d06fb1037718a"

[[package]]
name = "bitflags"
version = "2.13.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3ded4057c258ba199e2d26386d3af3780957ecaee6c4ef4041c6b4b8b97c0b06"

[[package]]
name = "block-buffer"
version = "0.10.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3078c7629b62d3f0439517fa394996acacc5cbc91c5a20d8c658e77abd503a71"
dependencies = [
 "generic-array",
]

[[package]]
name = "bumpalo"
version = "3.20.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "72f5acc6cb2ba439de613abc23857ec3d78374d8ed5ac84e9d11336e87da8649"

[[package]]
name = "by_address"
version = "1.2.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "64fa3c856b712db6612c019f14756e64e4bcea13337a6b33b696333a9eaa2d06"

[[package]]
name = "bytemuck"
version = "1.25.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "95832e849adfb21180ccb6826a99da14e5d266ae5c2e668e1602cf234f153797"

[[package]]
name = "castaway"
version = "0.2.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "dec551ab6e7578819132c713a93c022a05d60159dc86e7a7050223577484c55a"
dependencies = [
 "rustversion",
]

[[package]]
name = "cfg-if"
version = "1.0.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4e7648175b45a9a48536d676f68d918270699102aa8dab5496df06904c914600"

[[package]]
name = "cfg_aliases"
version = "0.2.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f079e83a288787bcd14a6aea84cee5c87a67c5a3e660c30f557a3d24761b3527"

[[package]]
name = "color-eyre"
version = "0.6.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e5920befb47832a6d61ee3a3a846565cfa39b331331e68a3b1d1116630f2f26d"
dependencies = [
 "backtrace",
 "color-spantrace",
 "eyre",
 "indenter",
 "once_cell",
 "owo-colors",
 "tracing-error",
]

[[package]]
name = "color-spantrace"
version = "0.3.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b8b88ea9df13354b55bc7234ebcce36e6ef896aca2e42a15de9e10edce01b427"
dependencies = [
 "once_cell",
 "owo-colors",
 "tracing-core",
 "tracing-error",
]

[[package]]
name = "compact_str"
version = "0.9.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9dfdd1c2274d9aa354115b09dc9a901d6c5576818cdf70d14cae2bdb47df00ab"
dependencies = [
 "castaway",
 "cfg-if",
 "itoa",
 "rustversion",
 "ryu",
 "static_assertions",
]

[[package]]
name = "convert_case"
version = "0.10.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "633458d4ef8c78b72454de2d54fd6ab2e60f9e02be22f3c6104cdc8a4e0fceb9"
dependencies = [
 "unicode-segmentation",
]

[[package]]
name = "cpufeatures"
version = "0.2.17"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "59ed5838eebb26a2bb2e58f6d5b5316989ae9d08bab10e0e6d103e656d1b0280"
dependencies = [
 "libc",
]

[[package]]
name = "critical-section"
version = "1.2.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "790eea4361631c5e7d22598ecd5723ff611904e3344ce8720784c93e3d83d40b"

[[package]]
name = "crossterm"
version = "0.29.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d8b9f2e4c67f833b660cdb0a3523065869fb35570177239812ed4c905aeff87b"
dependencies = [
 "bitflags 2.13.2",
 "crossterm_winapi",
 "derive_more",
 "document-features",
 "mio",
 "parking_lot",
 "rustix",
 "signal-hook",
 "signal-hook-mio",
 "winapi",
]

[[package]]
name = "crossterm_winapi"
version = "0.9.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "acdd7c62a3665c7f6830a51635d9ac9b23ed385797f70a83bb8bafe9c572ab2b"
dependencies = [
 "winapi",
]

[[package]]
name = "crypto-common"
version = "0.1.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "78c8292055d1c1df0cce5d180393dc8cce0abec0a7102adb6c7b1eef6016d60a"
dependencies = [
 "generic-array",
 "typenum",
]

[[package]]
name = "csscolorparser"
version = "0.6.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "eb2a7d3066da2de787b7f032c736763eb7ae5d355f81a68bab2675a96008b0bf"
dependencies = [
 "lab",
 "phf",
]

[[package]]
name = "darling"
version = "0.24.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ed17f5901b6630b993ca003def43f2f8ef4014fc13b047b57aad617ff32bc2ec"
dependencies = [
 "darling_core",
 "darling_macro",
]

[[package]]
name = "darling_core"
version = "0.24.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "6837e2cf7485aaae18f86181d2f0e9a7ed297a025e220aeabf63fdebd3a2ddff"
dependencies = [
 "ident_case",
 "proc-macro2",
 "quote",
 "strsim",
 "syn 3.0.6",
]

[[package]]
name = "darling_macro"
version = "0.24.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "2ac7135c3ef02b2f7833bbeb1be5ba7f966dcde8a87c6b87f65a778d71a02785"
dependencies = [
 "darling_core",
 "quote",
 "syn 3.0.6",
]

[[package]]
name = "deltae"
version = "0.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "5729f5117e208430e437df2f4843f5e5952997175992d1414f94c57d61e270b4"

[[package]]
name = "deranged"
version = "0.5.8"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7cd812cc2bc1d69d4764bd80df88b4317eaef9e773c75226407d9bc0876b211c"

[[package]]
name = "derive_more"
version = "2.1.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d751e9e49156b02b44f9c1815bcb94b984cdcc4396ecc32521c739452808b134"
dependencies = [
 "derive_more-impl",
]

[[package]]
name = "derive_more-impl"
version = "2.1.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "799a97264921d8623a957f6c3b9011f3b5492f557bbb7a5a19b7fa6d06ba8dcb"
dependencies = [
 "convert_case",
 "proc-macro2",
 "quote",
 "rustc_version",
 "syn 2.0.119",
]

[[package]]
name = "digest"
version = "0.10.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9ed9a281f7bc9b7576e61468ba615a66a5c8cfdff42420a70aa82701a3b1e292"
dependencies = [
 "block-buffer",
 "crypto-common",
]

[[package]]
name = "document-features"
version = "0.2.12"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d4b8a88685455ed29a21542a33abd9cb6510b6b129abadabdcef0f4c55bc8f61"
dependencies = [
 "litrs",
]

[[package]]
name = "either"
version = "1.18.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "252afb9ae5eaa683babdc6a068b3f5726eb19e05070c731f9b2a23a7c3e8ed34"

[[package]]
name = "equivalent"
version = "1.0.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "877a4ace8713b0bcf2a4e7eec82529c029f1d0619886d18145fea96c3ffe5c0f"

[[package]]
name = "errno"
version = "0.3.14"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "39cab71617ae0d63f51a36d69f866391735b51691dbda63cf6f96d042b63efeb"
dependencies = [
 "libc",
 "windows-sys",
]

[[package]]
name = "euclid"
version = "0.22.14"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f1a05365e3b1c6d1650318537c7460c6923f1abdd272ad6842baa2b509957a06"
dependencies = [
 "num-traits",
]

[[package]]
name = "eyre"
version = "0.6.14"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c08309dbcc659c5549a24ddb9b27027640641b282ef5768267c7e675558986a3"
dependencies = [
 "autocfg",
 "indenter",
 "once_cell",
]

[[package]]
name = "fancy-regex"
version = "0.11.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b95f7c0680e4142284cf8b22c14a476e87d61b004a3a0861872b32ef7ead40a2"
dependencies = [
 "bit-set",
 "regex",
]

[[package]]
name = "filedescriptor"
version = "0.8.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e40758ed24c9b2eeb76c35fb0aebc66c626084edd827e07e1552279814c6682d"
dependencies = [
 "libc",
 "thiserror 1.0.69",
 "winapi",
]

[[package]]
name = "finl_unicode"
version = "1.5.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "80bb028c8b4148c9ee0cca68fcd9add6044e81d3619f48577ddf13a263d047a2"

[[package]]
name = "fixedbitset"
version = "0.4.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0ce7134b9999ecaf8bcd65542e436736ef32ddca1b3e06094cb6ec5755203b80"

[[package]]
name = "fnv"
version = "1.0.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3f9eec918d3f24069decb9af1554cad7c880e2da24a9afd88aca000531ab82c1"

[[package]]
name = "foldhash"
version = "0.2.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "77ce24cb58228fbb8aa041425bb1050850ac19177686ea6e0f41a70416f56fdb"

[[package]]
name = "futures-core"
version = "0.3.34"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "92d699e522242e69e3003b94ecc1f960f3a5e015aa7c5d7486e65ad01dd94f5e"

[[package]]
name = "futures-task"
version = "0.3.34"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cd417de3d1d015fc3bfd2b1ea46dfc7bab72ef86f1cc7cc9c78e728b34a6d1fd"

[[package]]
name = "futures-util"
version = "0.3.34"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0d50a92467f8ba5dd6e3ee5d4bd04d73ab2e4e1c44474a0674821dfce14b79bc"
dependencies = [
 "futures-core",
 "futures-task",
 "pin-project-lite",
 "slab",
]

[[package]]
name = "generic-array"
version = "0.14.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "85649ca51fd72272d7821adaf274ad91c288277713d9c18820d8499a7ff69e9a"
dependencies = [
 "typenum",
 "version_check",
]

[[package]]
name = "getrandom"
version = "0.3.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "899def5c37c4fd7b2664648c28120ecec138e4d395b459e5ca34f9cce2dd77fd"
dependencies = [
 "cfg-if",
 "libc",
 "r-efi 5.3.0",
 "wasip2",
]

[[package]]
name = "getrandom"
version = "0.4.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "300e883d756b2e4ec94e02791f39b04b522276138852cfc41d9fb7e904106099"
dependencies = [
 "cfg-if",
 "libc",
 "r-efi 6.0.0",
]

[[package]]
name = "gimli"
version = "0.32.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e629b9b98ef3dd8afe6ca2bd0f89306cec16d43d907889945bc5d6687f2f13c7"

[[package]]
name = "gruyere"
version = "0.1.0"
dependencies = [
 "color-eyre",
 "crossterm",
 "ratatui",
]

[[package]]
name = "hashbrown"
version = "0.16.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "841d1cc9bed7f9236f321df977030373f4a4163ae1a7dbfe1a51a2c1a51d9100"
dependencies = [
 "allocator-api2",
 "equivalent",
 "foldhash",
]

[[package]]
name = "hashbrown"
version = "0.17.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ed5909b6e89a2db4456e54cd5f673791d7eca6732202bbf2a9cc504fe2f9b84a"
dependencies = [
 "allocator-api2",
 "equivalent",
 "foldhash",
]

[[package]]
name = "heck"
version = "0.5.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "2304e00983f87ffb38b55b444b5e3b60a884b5d30c0fca7d82fe33449bbe55ea"

[[package]]
name = "hex"
version = "0.4.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7f24254aa9a54b5c858eaee2f5bccdb46aaf0e486a595ed5fd8f86ba55232a70"

[[package]]
name = "ident_case"
version = "1.0.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b9e0384b61958566e926dc50660321d12159025e767c18e043daf26b70104c39"

[[package]]
name = "indenter"
version = "0.3.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "964de6e86d545b246d84badc0fef527924ace5134f30641c203ef52ba83f58d5"

[[package]]
name = "indoc"
version = "2.0.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "79cf5c93f93228cf8efb3ba362535fb11199ac548a09ce117c9b1adc3030d706"
dependencies = [
 "rustversion",
]

[[package]]
name = "instability"
version = "0.3.14"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4c3b5acc1e2fd9375041a388da33d1eb8aed5f7a8c0dd3543e3ea2805adfbe20"
dependencies = [
 "darling",
 "indoc",
 "proc-macro2",
 "quote",
 "syn 3.0.6",
]

[[package]]
name = "itertools"
version = "0.14.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "2b192c782037fadd9cfa75548310488aabdbf3d2da73885b31bd0abd03351285"
dependencies = [
 "either",
]

[[package]]
name = "itoa"
version = "1.0.18"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8f42a60cbdf9a97f5d2305f08a87dc4e09308d1276d28c869c684d7777685682"

[[package]]
name = "js-sys"
version = "0.3.105"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ce57d20d1ea864ce2ac172ab472d409214f4fd359f0b2a2775abdf522e2af99e"
dependencies = [
 "cfg-if",
 "futures-util",
 "wasm-bindgen",
]

[[package]]
name = "kasuari"
version = "0.4.12"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bde5057d6143cc94e861d90f591b9303d6716c6b9602309150bd068853c10899"
dependencies = [
 "hashbrown 0.16.1",
 "portable-atomic",
 "thiserror 2.0.20",
]

[[package]]
name = "lab"
version = "0.11.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bf36173d4167ed999940f804952e6b08197cae5ad5d572eb4db150ce8ad5d58f"

[[package]]
name = "lazy_static"
version = "1.5.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bbd2bcb4c963f2ddae06a2efc7e9f3591312473c50c6685e1f298068316e66fe"

[[package]]
name = "libc"
version = "0.2.189"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3eaf3ede3fee6db1a4c2ee091bf8a8b4dccdc6d17f656fb07896ee72867612f2"

[[package]]
name = "libm"
version = "0.2.16"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b6d2cec3eae94f9f509c767b45932f1ada8350c4bdb85af2fcab4a3c14807981"

[[package]]
name = "line-clipping"
version = "0.3.8"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e752191d037c44ad111a8caa762921926658402f01cc1253f7bef2020ece4f5e"
dependencies = [
 "bitflags 2.13.2",
]

[[package]]
name = "linux-raw-sys"
version = "0.12.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "32a66949e030da00e8c7d4434b251670a91556f4144941d37452769c25d58a53"

[[package]]
name = "litrs"
version = "1.0.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "11d3d7f243d5c5a8b9bb5d6dd2b1602c0cb0b9db1621bafc7ed66e35ff9fe092"

[[package]]
name = "lock_api"
version = "0.4.14"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "224399e74b87b5f3557511d98dff8b14089b3dadafcab6bb93eab67d3aace965"
dependencies = [
 "scopeguard",
]

[[package]]
name = "log"
version = "0.4.34"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f9f8bd3e56ce4dfc153cf470fffbfa98c7620958b312ca5c3a4b8d5181fd13c6"

[[package]]
name = "lru"
version = "0.18.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ef9ac18847474e638e3702b76c65d4eb93428471a74778ef0f1be711717f89b5"
dependencies = [
 "hashbrown 0.17.1",
]

[[package]]
name = "mac_address"
version = "1.1.8"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c0aeb26bf5e836cc1c341c8106051b573f1766dfa05aa87f0b98be5e51b02303"
dependencies = [
 "nix",
 "winapi",
]

[[package]]
name = "memchr"
version = "2.8.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cf8baf1c55e62ffcace7a9f06f4bd9cd3f0c4beb022d3b367256b91b87513d98"

[[package]]
name = "memmem"
version = "0.1.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a64a92489e2744ce060c349162be1c5f33c6969234104dbd99ddb5feb08b8c15"

[[package]]
name = "memoffset"
version = "0.9.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "488016bfae457b036d996092f6cb448677611ce4449e970ceaf42695203f218a"
dependencies = [
 "autocfg",
]

[[package]]
name = "minimal-lexical"
version = "0.2.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "68354c5c6bd36d73ff3feceb05efa59b6acb7626617f4962be322a825e61f79a"

[[package]]
name = "miniz_oxide"
version = "0.8.9"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1fa76a2c86f704bdb222d66965fb3d63269ce38518b83cb0575fca855ebb6316"
dependencies = [
 "adler2",
]

[[package]]
name = "mio"
version = "1.2.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4b18443e9c262bfe8fa82f51666e2642c53393f7e5c27b3e1aeab922cff5b9d8"
dependencies = [
 "libc",
 "log",
 "wasi",
 "windows-sys",
]

[[package]]
name = "nix"
version = "0.29.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "71e2746dc3a24dd78b3cfcb7be93368c6de9963d30f43a6a73998a9cf4b17b46"
dependencies = [
 "bitflags 2.13.2",
 "cfg-if",
 "cfg_aliases",
 "libc",
 "memoffset",
]

[[package]]
name = "nom"
version = "7.1.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d273983c5a657a70a3e8f2a01329822f3b8c8172b73826411a55751e404a0a4a"
dependencies = [
 "memchr",
 "minimal-lexical",
]

[[package]]
name = "num-conv"
version = "0.2.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "521739c6d2bac4aa25192232afe6841231376b2b26d4d9fae5ecf8ca5772e441"

[[package]]
name = "num-derive"
version = "0.4.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ed3955f1a9c7c0c15e092f9c887db08b1fc683305fdf6eb6684f22555355e202"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "num-traits"
version = "0.2.19"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "071dfc062690e90b734c0b2273ce72ad0ffa95f0c74596bc250dcfd960262841"
dependencies = [
 "autocfg",
]

[[package]]
name = "num_threads"
version = "0.1.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "5c7398b9c8b70908f6371f47ed36737907c87c52af34c268fed0bf0ceb92ead9"
dependencies = [
 "libc",
]

[[package]]
name = "object"
version = "0.37.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ff76201f031d8863c38aa7f905eca4f53abbfa15f609db4277d44cd8938f33fe"
dependencies = [
 "memchr",
]

[[package]]
name = "once_cell"
version = "1.21.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9f7c3e4beb33f85d45ae3e3a1792185706c8e16d043238c593331cc7cd313b50"

[[package]]
name = "ordered-float"
version = "4.6.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7bb71e1b3fa6ca1c61f383464aaf2bb0e2f8e772a1f01d486832464de363b951"
dependencies = [
 "num-traits",
]

[[package]]
name = "owo-colors"
version = "4.4.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "13c45bb4a6ae1280ec0803b1ef9d3455eb50f01efbbe1447ab020f1d54fba9d8"

[[package]]
name = "palette"
version = "0.7.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ddeed8580d347d2abf3dcf06a5f0b3dc020258338526b277847cd4248a70fc64"
dependencies = [
 "approx",
 "libm",
 "palette_derive",
 "palette_math",
]

[[package]]
name = "palette_derive"
version = "0.7.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "88537020289b719d81be994ccf1bbf4990f477e2f69ee52fe3e45f43a02e56be"
dependencies = [
 "by_address",
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "palette_math"
version = "0.7.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "6e6eb142958d64335fb0e345c5b9ead2ecd6fc438c307e9d7d3c4fd428dbaf12"
dependencies = [
 "libm",
]

[[package]]
name = "parking_lot"
version = "0.12.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "93857453250e3077bd71ff98b6a65ea6621a19bb0f559a85248955ac12c45a1a"
dependencies = [
 "lock_api",
 "parking_lot_core",
]

[[package]]
name = "parking_lot_core"
version = "0.9.12"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "2621685985a2ebf1c516881c026032ac7deafcda1a2c9b7850dc81e3dfcb64c1"
dependencies = [
 "cfg-if",
 "libc",
 "redox_syscall",
 "smallvec",
 "windows-link",
]

[[package]]
name = "pest"
version = "2.9.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "45d3aca230fad2e6f6317ca0a72724338c4960cb97168a85cdee66df4a9a21a8"
dependencies = [
 "memchr",
 "ucd-trie",
]

[[package]]
name = "pest_derive"
version = "2.9.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "284b60557f2c4a2e72ad3f2d34d42685a2fa4a6a61d0d2a10c0ae2a5e916c2cf"
dependencies = [
 "pest",
 "pest_generator",
]

[[package]]
name = "pest_generator"
version = "2.9.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1d9d1f08a115309ee99268cf85e5228e0e56aa9caf8841ec12866b6be07c3109"
dependencies = [
 "pest",
 "pest_meta",
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "pest_meta"
version = "2.9.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ed93ba1a9ffcca32130a5188701c81c0c49cf00d4b7c5007d5148951d743adcb"
dependencies = [
 "pest",
]

[[package]]
name = "phf"
version = "0.11.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1fd6780a80ae0c52cc120a26a1a42c1ae51b247a253e4e06113d23d2c2edd078"
dependencies = [
 "phf_macros",
 "phf_shared",
]

[[package]]
name = "phf_codegen"
version = "0.11.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "aef8048c789fa5e851558d709946d6d79a8ff88c0440c587967f8e94bfb1216a"
dependencies = [
 "phf_generator",
 "phf_shared",
]

[[package]]
name = "phf_generator"
version = "0.11.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3c80231409c20246a13fddb31776fb942c38553c51e871f8cbd687a4cfb5843d"
dependencies = [
 "phf_shared",
 "rand",
]

[[package]]
name = "phf_macros"
version = "0.11.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f84ac04429c13a7ff43785d75ad27569f2951ce0ffd30a3321230db2fc727216"
dependencies = [
 "phf_generator",
 "phf_shared",
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "phf_shared"
version = "0.11.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "67eabc2ef2a60eb7faa00097bd1ffdb5bd28e62bf39990626a582201b7a754e5"
dependencies = [
 "siphasher",
]

[[package]]
name = "pin-project-lite"
version = "0.2.17"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a89322df9ebe1c1578d689c92318e070967d1042b512afbe49518723f4e6d5cd"

[[package]]
name = "portable-atomic"
version = "1.15.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "05c8b63e8d9609db387f0324918f81d68fe27748f084ef092fb35954d0539a85"

[[package]]
name = "powerfmt"
version = "0.2.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "439ee305def115ba05938db6eb1644ff94165c5ab5e9420d1c1bcedbba909391"

[[package]]
name = "proc-macro2"
version = "1.0.107"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "985e7ec9bb745e6ce6535b544d84d6cd6f7ad8bd711c398938ae983b91a766d9"
dependencies = [
 "unicode-ident",
]

[[package]]
name = "quote"
version = "1.0.47"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1fbf4db142a473a8d80c26bbf18454ed458bf8d26c8219c331daecfdbd079001"
dependencies = [
 "proc-macro2",
]

[[package]]
name = "r-efi"
version = "5.3.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "69cdb34c158ceb288df11e18b4bd39de994f6657d83847bdffdbd7f346754b0f"

[[package]]
name = "r-efi"
version = "6.0.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f8dcc9c7d52a811697d2151c701e0d08956f92b0e24136cf4cf27b57a6a0d9bf"

[[package]]
name = "rand"
version = "0.8.8"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e058c7de0b26af77780c769414d6257830bb240f3c38477dbc2c16e5f54d6d4c"
dependencies = [
 "rand_core",
]

[[package]]
name = "rand_core"
version = "0.6.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ec0be4795e2f6a28069bec0b5ff3e2ac9bafc99e6a9a7dc3547996c5c816922c"

[[package]]
name = "ratatui"
version = "0.30.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3274ba0a2c5e1bcad2a2005d20f4dc59dad26b2eb0940fb094500dba4099d57d"
dependencies = [
 "instability",
 "ratatui-core",
 "ratatui-crossterm",
 "ratatui-macros",
 "ratatui-termina",
 "ratatui-termwiz",
 "ratatui-widgets",
 "serde",
]

[[package]]
name = "ratatui-core"
version = "0.1.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cbb175c433c8e28a809d1f5773a2ae96e68c0ce40db865cbab1020bf33ae479c"
dependencies = [
 "bitflags 2.13.2",
 "compact_str",
 "critical-section",
 "hashbrown 0.17.1",
 "itertools",
 "kasuari",
 "lru",
 "palette",
 "serde",
 "strum",
 "thiserror 2.0.20",
 "unicode-segmentation",
 "unicode-truncate",
 "unicode-width",
]

[[package]]
name = "ratatui-crossterm"
version = "0.1.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "567584a3b0e6a8203c23de40b4861497266725eb5363dbfd18a1edd603cca9f0"
dependencies = [
 "cfg-if",
 "crossterm",
 "instability",
 "ratatui-core",
]

[[package]]
name = "ratatui-macros"
version = "0.7.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ed7dc68daa7498a43e4d68e0eb078427e10c38fbcfbb1e42d955f1fa2140d814"
dependencies = [
 "ratatui-core",
 "ratatui-widgets",
]

[[package]]
name = "ratatui-termina"
version = "0.1.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c0bf912d9e66f057a759d92e386a280ea886b352ab757d6ac4d653c7ed2c43c2"
dependencies = [
 "instability",
 "ratatui-core",
 "termina",
]

[[package]]
name = "ratatui-termwiz"
version = "0.1.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "faf03e0380b7744054d6cb74224fe3adf062a029754933f575ca1e3b4c2ce977"
dependencies = [
 "ratatui-core",
 "termwiz",
]

[[package]]
name = "ratatui-widgets"
version = "0.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "66e3d19bcc9130ca376277d93b60767ff121ace3be06f5f95f81dd68956407d1"
dependencies = [
 "bitflags 2.13.2",
 "hashbrown 0.17.1",
 "indoc",
 "instability",
 "itertools",
 "line-clipping",
 "ratatui-core",
 "serde",
 "strum",
 "time",
 "unicode-segmentation",
 "unicode-width",
]

[[package]]
name = "redox_syscall"
version = "0.5.18"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ed2bf2547551a7053d6fdfafda3f938979645c44812fbfcda098faae3f1a362d"
dependencies = [
 "bitflags 2.13.2",
]

[[package]]
name = "regex"
version = "1.13.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f020237b6c8eed93db2e2cb53c00c60a8e1bc73da7d073199a1180401450218d"
dependencies = [
 "aho-corasick",
 "memchr",
 "regex-automata",
 "regex-syntax",
]

[[package]]
name = "regex-automata"
version = "0.4.18"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ad8553b9b26413251cbf30e620595c7a41b3887f03da04579c0e6b0d6a06b4b2"
dependencies = [
 "aho-corasick",
 "memchr",
 "regex-syntax",
]

[[package]]
name = "regex-syntax"
version = "0.8.11"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d6f6ff9a378485b298a5286656da665ba74413d36db0979633275d2e708145d4"

[[package]]
name = "rustc-demangle"
version = "0.1.28"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b74b56ffa8bb2830709a538c2cbcae9aa062db0d2a42563bfb09bdaae44020eb"

[[package]]
name = "rustc_version"
version = "0.4.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cfcb3a22ef46e85b45de6ee7e79d063319ebb6594faafcf1c225ea92ab6e9b92"
dependencies = [
 "semver",
]

[[package]]
name = "rustix"
version = "1.1.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "891efababe418670775f199f0d233d84843c227a0949a883ce15b37c78d6629d"
dependencies = [
 "bitflags 2.13.2",
 "errno",
 "libc",
 "linux-raw-sys",
 "windows-sys",
]

[[package]]
name = "rustversion"
version = "1.0.23"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cf54715a573b99ac80df0bc206da022bcd442c974952c7b9720069370852e21f"

[[package]]
name = "ryu"
version = "1.0.23"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9774ba4a74de5f7b1c1451ed6cd5285a32eddb5cccb8cc655a4e50009e06477f"

[[package]]
name = "scopeguard"
version = "1.2.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "94143f37725109f92c262ed2cf5e59bce7498c01bcc1502d7b9afe439a4e9f49"

[[package]]
name = "semver"
version = "1.0.28"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8a7852d02fc848982e0c167ef163aaff9cd91dc640ba85e263cb1ce46fae51cd"

[[package]]
name = "serde"
version = "1.0.229"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4148590afebada386688f18773da617792bf2ef03ffc1e4cbd2b1d45b023e0ba"
dependencies = [
 "serde_core",
 "serde_derive",
]

[[package]]
name = "serde_core"
version = "1.0.229"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "67dca2c9c51e58a4791a4b1ed58308b39c64224d349a935ab5039aa360942a48"
dependencies = [
 "serde_derive",
]

[[package]]
name = "serde_derive"
version = "1.0.229"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e7a5d71263a5a7d47b41f6b3f06ba276f10cc18b0931f1799f710578e2309348"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 3.0.6",
]

[[package]]
name = "sha2"
version = "0.10.9"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a7507d819769d01a365ab707794a4084392c824f54a7a6a7862f8c3d0892b283"
dependencies = [
 "cfg-if",
 "cpufeatures",
 "digest",
]

[[package]]
name = "sharded-slab"
version = "0.1.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f40ca3c46823713e0d4209592e8d6e826aa57e928f09752619fc696c499637f6"
dependencies = [
 "lazy_static",
]

[[package]]
name = "signal-hook"
version = "0.3.18"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d881a16cf4426aa584979d30bd82cb33429027e42122b169753d6ef1085ed6e2"
dependencies = [
 "libc",
 "signal-hook-registry",
]

[[package]]
name = "signal-hook-mio"
version = "0.2.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b75a19a7a740b25bc7944bdee6172368f988763b744e3d4dfe753f6b4ece40cc"
dependencies = [
 "libc",
 "mio",
 "signal-hook",
]

[[package]]
name = "signal-hook-registry"
version = "1.4.8"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c4db69cba1110affc0e9f7bcd48bbf87b3f4fc7c61fc9155afd4c469eb3d6c1b"
dependencies = [
 "errno",
 "libc",
]

[[package]]
name = "siphasher"
version = "1.0.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8ee5873ec9cce0195efcb7a4e9507a04cd49aec9c83d0389df45b1ef7ba2e649"

[[package]]
name = "slab"
version = "0.4.12"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0c790de23124f9ab44544d7ac05d60440adc586479ce501c1d6d7da3cd8c9cf5"

[[package]]
name = "smallvec"
version = "1.16.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ba467056f1b547ed52077911161fc86985becbc60e8e1857c8a144dab0def891"

[[package]]
name = "static_assertions"
version = "1.1.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a2eb9349b6444b326872e140eb1cf5e7c522154d69e7a0ffb0fb81c06b37543f"

[[package]]
name = "strsim"
version = "0.11.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7da8b5736845d9f2fcb837ea5d9e2628564b3b043a70948a3f0b778838c5fb4f"

[[package]]
name = "strum"
version = "0.28.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9628de9b8791db39ceda2b119bbe13134770b56c138ec1d3af810d045c04f9bd"
dependencies = [
 "strum_macros",
]

[[package]]
name = "strum_macros"
version = "0.28.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ab85eea0270ee17587ed4156089e10b9e6880ee688791d45a905f5b1ca36f664"
dependencies = [
 "heck",
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "syn"
version = "1.0.109"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "72b64191b275b66ffe2469e8af2c1cfe3bafa67b529ead792a6d0160888b4237"
dependencies = [
 "proc-macro2",
 "quote",
 "unicode-ident",
]

[[package]]
name = "syn"
version = "2.0.119"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "872831b642d1a07999a962a351ed35b955ea2cfc8f3862091e2a240a84f17297"
dependencies = [
 "proc-macro2",
 "quote",
 "unicode-ident",
]

[[package]]
name = "syn"
version = "3.0.6"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8593e8e72159ed2257d083c7a454a85cbf854f37a0966d8d483aff8c8a3ebcee"
dependencies = [
 "proc-macro2",
 "quote",
 "unicode-ident",
]

[[package]]
name = "termina"
version = "0.3.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9048a889effe34a5cddee0af7f53285198b16dca3be510858d38dfdb3e62a04e"
dependencies = [
 "bitflags 2.13.2",
 "parking_lot",
 "rustix",
 "signal-hook",
 "windows-sys",
]

[[package]]
name = "terminfo"
version = "0.9.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d4ea810f0692f9f51b382fff5893887bb4580f5fa246fde546e0b13e7fcee662"
dependencies = [
 "fnv",
 "nom",
 "phf",
 "phf_codegen",
]

[[package]]
name = "termios"
version = "0.3.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "411c5bf740737c7918b8b1fe232dca4dc9f8e754b8ad5e20966814001ed0ac6b"
dependencies = [
 "libc",
]

[[package]]
name = "termwiz"
version = "0.23.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4676b37242ccbd1aabf56edb093a4827dc49086c0ffd764a5705899e0f35f8f7"
dependencies = [
 "anyhow",
 "base64",
 "bitflags 2.13.2",
 "fancy-regex",
 "filedescriptor",
 "finl_unicode",
 "fixedbitset",
 "hex",
 "lazy_static",
 "libc",
 "log",
 "memmem",
 "nix",
 "num-derive",
 "num-traits",
 "ordered-float",
 "pest",
 "pest_derive",
 "phf",
 "sha2",
 "signal-hook",
 "siphasher",
 "terminfo",
 "termios",
 "thiserror 1.0.69",
 "ucd-trie",
 "unicode-segmentation",
 "vtparse",
 "wezterm-bidi",
 "wezterm-blob-leases",
 "wezterm-color-types",
 "wezterm-dynamic",
 "wezterm-input-types",
 "winapi",
]

[[package]]
name = "thiserror"
version = "1.0.69"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b6aaf5339b578ea85b50e080feb250a3e8ae8cfcdff9a461c9ec2904bc923f52"
dependencies = [
 "thiserror-impl 1.0.69",
]

[[package]]
name = "thiserror"
version = "2.0.20"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ec86235f5fcc2a73650310756d2ac5b138a5780bbbdfae3eeccec992c435ba4f"
dependencies = [
 "thiserror-impl 2.0.20",
]

[[package]]
name = "thiserror-impl"
version = "1.0.69"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4fee6c4efc90059e10f81e6d42c60a18f76588c3d74cb83a0b242a2b6c7504c1"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "thiserror-impl"
version = "2.0.20"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bc04cd3e1236dd4a98afca4569f2deb3f120e5422a4023be2cb683f8486292af"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 3.0.6",
]

[[package]]
name = "thread_local"
version = "1.1.10"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1ad99c4c6d32803332c548b1af0540b357b3f5fc0be8f6c6bfe8b2e6ae784070"
dependencies = [
 "cfg-if",
]

[[package]]
name = "time"
version = "0.3.55"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cdb87b95ec50ddfa440816d227a17b2ccbdda963a316a727fda0fc4334f7d134"
dependencies = [
 "deranged",
 "libc",
 "num-conv",
 "num_threads",
 "powerfmt",
 "serde_core",
 "time-core",
]

[[package]]
name = "time-core"
version = "0.1.9"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9e1c906769ad99c88eaa54e728060edef082f8e358ff32030cb7c7d315e81109"

[[package]]
name = "tracing"
version = "0.1.44"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "63e71662fa4b2a2c3a26f570f037eb95bb1f85397f3cd8076caed2f026a6d100"
dependencies = [
 "pin-project-lite",
 "tracing-core",
]

[[package]]
name = "tracing-core"
version = "0.1.36"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "db97caf9d906fbde555dd62fa95ddba9eecfd14cb388e4f491a66d74cd5fb79a"
dependencies = [
 "once_cell",
 "valuable",
]

[[package]]
name = "tracing-error"
version = "0.2.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8b1581020d7a273442f5b45074a6a57d5757ad0a47dac0e9f0bd57b81936f3db"
dependencies = [
 "tracing",
 "tracing-subscriber",
]

[[package]]
name = "tracing-subscriber"
version = "0.3.23"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cb7f578e5945fb242538965c2d0b04418d38ec25c79d160cd279bf0731c8d319"
dependencies = [
 "sharded-slab",
 "thread_local",
 "tracing-core",
]

[[package]]
name = "typenum"
version = "1.20.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b6f5e870be6c3b371b77fe0ee0bafb859fa4964b4404c27de1d380043c4dda20"

[[package]]
name = "ucd-trie"
version = "0.1.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "2896d95c02a80c6d6a5d6e953d479f5ddf2dfdb6a244441010e373ac0fb88971"

[[package]]
name = "unicode-ident"
version = "1.0.26"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d245f478577f809a851594d02313b640fb437e0bb33866753cff937863096954"

[[package]]
name = "unicode-segmentation"
version = "1.13.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c6f5d3c3b1bf09027a88a6bc961fc00497d651009560b5463668dc81b0fa87a8"

[[package]]
name = "unicode-truncate"
version = "2.0.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "16b380a1238663e5f8a691f9039c73e1cdae598a30e9855f541d29b08b53e9a5"
dependencies = [
 "itertools",
 "unicode-segmentation",
 "unicode-width",
]

[[package]]
name = "unicode-width"
version = "0.2.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b4ac048d71ede7ee76d585517add45da530660ef4390e49b098733c6e897f254"

[[package]]
name = "utf8parse"
version = "0.2.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "06abde3611657adf66d383f00b093d7faecc7fa57071cce2578660c9f1010821"

[[package]]
name = "uuid"
version = "1.26.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "2ef6dac1e96601b4fb3acccccff2139741fcb757cb9a36089bf5be91cfb285ce"
dependencies = [
 "atomic",
 "getrandom 0.4.3",
 "js-sys",
 "wasm-bindgen",
]

[[package]]
name = "valuable"
version = "0.1.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ba73ea9cf16a25df0c8caa16c51acb937d5712a8429db78a3ee29d5dcacd3a65"

[[package]]
name = "version_check"
version = "0.9.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0b928f33d975fc6ad9f86c8f283853ad26bdd5b10b7f1542aa2fa15e2289105a"

[[package]]
name = "vtparse"
version = "0.6.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "6d9b2acfb050df409c972a37d3b8e08cdea3bddb0c09db9d53137e504cfabed0"
dependencies = [
 "utf8parse",
]

[[package]]
name = "wasi"
version = "0.11.1+wasi-snapshot-preview1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ccf3ec651a847eb01de73ccad15eb7d99f80485de043efb2f370cd654f4ea44b"

[[package]]
name = "wasip2"
version = "1.0.4+wasi-0.2.12"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b67efb37e106e55ce722a510d6b5f9c17f083e5fc79afc2badeb12cc313d9487"
dependencies = [
 "wit-bindgen",
]

[[package]]
name = "wasm-bindgen"
version = "0.2.128"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "aecb87a33d3b0c5e3b7aa46336eaf486cffafbd281b195e4c8b80d50df2351bf"
dependencies = [
 "cfg-if",
 "once_cell",
 "rustversion",
 "wasm-bindgen-macro",
 "wasm-bindgen-shared",
]

[[package]]
name = "wasm-bindgen-macro"
version = "0.2.128"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a690d511e3c1a8b3a55e33511e3c2c00c78415cd23650f32b808627f5696b9ed"
dependencies = [
 "quote",
 "wasm-bindgen-macro-support",
]

[[package]]
name = "wasm-bindgen-macro-support"
version = "0.2.128"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "411e4887f0071ef2d2164a9d5fdf2d20efbef78fccd3a78b0c10a1dc5295e48a"
dependencies = [
 "bumpalo",
 "proc-macro2",
 "quote",
 "syn 3.0.6",
 "wasm-bindgen-shared",
]

[[package]]
name = "wasm-bindgen-shared"
version = "0.2.128"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "81941cd78d0c92026c33e5e01312845a4cb1e9af3407f9134b100dd03144103e"
dependencies = [
 "unicode-ident",
]

[[package]]
name = "wezterm-bidi"
version = "0.2.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0c0a6e355560527dd2d1cf7890652f4f09bb3433b6aadade4c9b5ed76de5f3ec"
dependencies = [
 "log",
 "wezterm-dynamic",
]

[[package]]
name = "wezterm-blob-leases"
version = "0.1.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "692daff6d93d94e29e4114544ef6d5c942a7ed998b37abdc19b17136ea428eb7"
dependencies = [
 "getrandom 0.3.4",
 "mac_address",
 "sha2",
 "thiserror 1.0.69",
 "uuid",
]

[[package]]
name = "wezterm-color-types"
version = "0.3.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7de81ef35c9010270d63772bebef2f2d6d1f2d20a983d27505ac850b8c4b4296"
dependencies = [
 "csscolorparser",
 "deltae",
 "lazy_static",
 "wezterm-dynamic",
]

[[package]]
name = "wezterm-dynamic"
version = "0.2.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "5f2ab60e120fd6eaa68d9567f3226e876684639d22a4219b313ff69ec0ccd5ac"
dependencies = [
 "log",
 "ordered-float",
 "strsim",
 "thiserror 1.0.69",
 "wezterm-dynamic-derive",
]

[[package]]
name = "wezterm-dynamic-derive"
version = "0.1.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "46c0cf2d539c645b448eaffec9ec494b8b19bd5077d9e58cb1ae7efece8d575b"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 1.0.109",
]

[[package]]
name = "wezterm-input-types"
version = "0.1.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7012add459f951456ec9d6c7e6fc340b1ce15d6fc9629f8c42853412c029e57e"
dependencies = [
 "bitflags 1.3.2",
 "euclid",
 "lazy_static",
 "serde",
 "wezterm-dynamic",
]

[[package]]
name = "winapi"
version = "0.3.9"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "5c839a674fcd7a98952e593242ea400abe93992746761e38641405d28b00f419"
dependencies = [
 "winapi-i686-pc-windows-gnu",
 "winapi-x86_64-pc-windows-gnu",
]

[[package]]
name = "winapi-i686-pc-windows-gnu"
version = "0.4.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ac3b87c63620426dd9b991e5ce0329eff545bccbbb34f3be09ff6fb6ab51b7b6"

[[package]]
name = "winapi-x86_64-pc-windows-gnu"
version = "0.4.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "712e227841d057c1ee1cd2fb22fa7e5a5461ae8e48fa2ca79ec42cfc1931183f"

[[package]]
name = "windows-link"
version = "0.2.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f0805222e57f7521d6a62e36fa9163bc891acd422f971defe97d64e70d0a4fe5"

[[package]]
name = "windows-sys"
version = "0.61.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ae137229bcbd6cdf0f7b80a31df61766145077ddf49416a728b02cb3921ff3fc"
dependencies = [
 "windows-link",
]

[[package]]
name = "wit-bindgen"
version = "0.57.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1ebf944e87a7c253233ad6766e082e3cd714b5d03812acc24c318f549614536e"
`},{type:`file`,name:`Cargo.toml`,path:`crabe/gruyere/Cargo.toml`,language:`TOML`,content:`[package]
name = "gruyere"
version = "0.1.0"
edition = "2024"

[dependencies]
color-eyre = "0.6.5"
crossterm = "0.29.0"
ratatui = "0.30.2"
`},{type:`file`,name:`README.md`,path:`crabe/gruyere/README.md`,language:`Markdown`,content:`# gruyere
the tutorial counter app of [Ratatui tutorials](https://ratatui.rs/tutorials/counter-app/)
`}]},{type:`folder`,name:`rmtui`,path:`crabe/rmtui`,children:[{type:`folder`,name:`src`,path:`crabe/rmtui/src`,children:[{type:`file`,name:`main.rs`,path:`crabe/rmtui/src/main.rs`,language:`Rust`,content:`fn main() {
    println!("Hello, world!");
}
`}]},{type:`file`,name:`Cargo.lock`,path:`crabe/rmtui/Cargo.lock`,language:`Text`,content:`# This file is automatically @generated by Cargo.
# It is not intended for manual editing.
version = 4

[[package]]
name = "rmtui"
version = "0.1.0"
`},{type:`file`,name:`Cargo.toml`,path:`crabe/rmtui/Cargo.toml`,language:`TOML`,content:`[package]
name = "rmtui"
version = "0.1.0"
edition = "2024"

[dependencies]
`},{type:`file`,name:`README.md`,path:`crabe/rmtui/README.md`,language:`Markdown`,content:`# réseau manager TUI

litteraly: networkmanager a.k.a. \`nmtui\`
`}]},{type:`file`,name:`README.md`,path:`crabe/README.md`,language:`Markdown`,content:`# crabe.rs

<p align="center">
    <img src="https://raw.githubusercontent.com/rust-lang/rust-artwork/7b54b6689dc310db2f301d7bcda847f016bd447c/mascot/ferris-flat-gesture.png" width="400"><br>
    vu que les prémices sombres de ma programmation se trouvent dans ce repo,<br/> 
    je ne voyais pas un meilleur endroit où aussi mettre mon premier amour avec <a href="https://rust-lang.org/fr/">Rust</a>
</p>

# listes des dossiers et c koi

- [grrs](./grrs/) bootleg de \`grep\` et la pire conception de \`ripgrep\`. en tout honnêteté, je me suis rendu compte que trop tard que c'était pas ce que je voulais vraiment faire...
- [etchebest](./etchebest/) hello world MONSIEUR RATATOUILLE (ratatui)
- [gruyere](./gruyere/) counter app tutorial ([site ratatui](https://ratatui.rs/tutorials/counter-app/))
- [rmtui](./rmtui/) premier vrai project dans l'optique de faire un nmtui plus moderne, minimal mais beau.

## dépendances

rust <br>
windows:

\`\`\`powershell
winget install Rustlang.Rustup
\`\`\`

arch linux (btw):

\`\`\`bash
sudo pacman -S rust
\`\`\`

## i love crabs

how i feel everytime i write a \`cargo\` command <br/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3p0M9VqWES68z9cVdc3eEaBDjLX9qEwif9Rxx76zJm4OcN_RY6TORBqBT3bdPaEUU5xnjfoh3rrafcUnjxyp3DeclZd4vvMG6ul31yiQ&s=10" width="300">
`}]},{type:`folder`,name:`projets`,path:`projets`,children:[{type:`folder`,name:`marmotte`,path:`projets/marmotte`,children:[{type:`file`,name:`akinator_p.png`,path:`projets/marmotte/akinator_p.png`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/marmotte/akinator_p.png (272388 octets)]`},{type:`file`,name:`chat.png`,path:`projets/marmotte/chat.png`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/marmotte/chat.png (179376 octets)]`},{type:`file`,name:`construction.png`,path:`projets/marmotte/construction.png`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/marmotte/construction.png (326278 octets)]`},{type:`file`,name:`for_the_fans.mp3`,path:`projets/marmotte/for_the_fans.mp3`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/marmotte/for_the_fans.mp3 (1740161 octets)]`},{type:`file`,name:`foret.jpg`,path:`projets/marmotte/foret.jpg`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/marmotte/foret.jpg (3638555 octets)]`},{type:`file`,name:`foret.mp3`,path:`projets/marmotte/foret.mp3`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/marmotte/foret.mp3 (29570564 octets)]`},{type:`file`,name:`foretchat.jpg`,path:`projets/marmotte/foretchat.jpg`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/marmotte/foretchat.jpg (3637792 octets)]`},{type:`file`,name:`gens_fond.mp3`,path:`projets/marmotte/gens_fond.mp3`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/marmotte/gens_fond.mp3 (1798080 octets)]`},{type:`file`,name:`index.html`,path:`projets/marmotte/index.html`,language:`HTML`,content:`<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>_w4x.2</title>
    <link rel="stylesheet" href="laperm.css" type="text/css" />
    <script src="sokoke.js"><\/script>
  </head>
  <body>
    <article>
      <div id="story"></div>
      <div class="buttons">
        <audio controls autoplay>
          <source src="meu.mp3" type="audio/mpeg" />
        </audio>
      </div>
      <div id="progressContainer" class="mainBar" aria-hidden="true">
        <div id="progressBar">
          <div id="bar"></div>
        </div>
      </div>
    </article>
  </body>
</html>
`},{type:`file`,name:`je_ne_suis_pas_un_robot.png`,path:`projets/marmotte/je_ne_suis_pas_un_robot.png`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/marmotte/je_ne_suis_pas_un_robot.png (725710 octets)]`},{type:`file`,name:`laperm.css`,path:`projets/marmotte/laperm.css`,language:`CSS`,content:`:root {
  --maintext: #000;
  --grayedout: #999;
  --standout: #d32f2f;
  --link: #1976d2;
  --statok: #388e3c;
  --statnok: #c62828;
  --footer: #666;
  --maintitle: #1565c0;
  --boxtitle: #1976d2;
  --alttitle: #000;
  --bodybg: #ffffffc6;
  --boxbg: #f5f5f5;
  --tabbg: #e0e0e0;
  --secbg: #fafafa;
  --secborder: #1976d2;
  --border: #ddd;
  --diffadd: #c8e6c9;
  --diffdel: #ffcdd2;
  --warnbg: #fff3cd;
  --warnborder: #ffc107;
  --noticebg: #e3f2fd;
  --noticeborder: #1976d2;
  --helpbutton: #00bcd4;
  --defaulturl: none;
}

body {
  background-image: var(--defaulturl);
  background-color: var(--bodybg);
  color: var(--maintext);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  text-align: center;
  font:
    bold italic 13px "Futura",
    "Century New Gothic",
    "Arial",
    Serif;
  margin: 0;
}

article {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  background-color: var(--boxbg);
  width: calc(100vw - 50px);
  height: calc(100vh - 50px);
  box-sizing: border-box;
}

.buttons {
  background-color: transparent;
  color: transparent;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px; /* espace entre les boutons */
}

.mainBar {
  box-sizing: border-box;
  width: 70vw;
  max-width: 1000px;
  height: 40px;
  border-radius: 10px;
  padding: 0;
  justify-content: center;
  display: none;
  align-items: center;
  margin-top: 20px;
}

#progressBar {
  overflow: hidden;
  background: #111111;
  width: 100%;
  height: 4px;
  border-radius: 4px;
}

#bar {
  width: 0;
  height: 100%;
  transition: width 600ms;
  background-color: #1976d2;
}

#story img {
  max-width: 50%;
  height: auto;
  margin: 15px 0;
  border-radius: 10px;
}
`},{type:`file`,name:`lettre.png`,path:`projets/marmotte/lettre.png`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/marmotte/lettre.png (17748 octets)]`},{type:`file`,name:`lycée.jpg`,path:`projets/marmotte/lycée.jpg`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/marmotte/lycée.jpg (80937 octets)]`},{type:`file`,name:`lycéechat.png`,path:`projets/marmotte/lycéechat.png`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/marmotte/lycéechat.png (485187 octets)]`},{type:`file`,name:`meow.mp3`,path:`projets/marmotte/meow.mp3`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/marmotte/meow.mp3 (57678 octets)]`},{type:`file`,name:`meu.mp3`,path:`projets/marmotte/meu.mp3`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/marmotte/meu.mp3 (55308 octets)]`},{type:`file`,name:`meurt.mp3`,path:`projets/marmotte/meurt.mp3`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/marmotte/meurt.mp3 (47107 octets)]`},{type:`file`,name:`petit yodé et l'enfant siro - victoire.mp3`,path:`projets/marmotte/petit yodé et l'enfant siro - victoire.mp3`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/marmotte/petit yodé et l'enfant siro - victoire.mp3 (4933395 octets)]`},{type:`file`,name:`Pub.mp4`,path:`projets/marmotte/Pub.mp4`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/marmotte/Pub.mp4 (17085779 octets)]`},{type:`file`,name:`ravin.jpg`,path:`projets/marmotte/ravin.jpg`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/marmotte/ravin.jpg (1644141 octets)]`},{type:`file`,name:`README.md`,path:`projets/marmotte/README.md`,language:`Markdown`,content:`![html](../../assets/html.png) ![js](../../assets/js.png) ![css](../../assets/css.png)

# marmotte (visual novel)

Ce projet est un pseudo web visual novel écrit principalement en JS.
`},{type:`file`,name:`riviere.mp3`,path:`projets/marmotte/riviere.mp3`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/marmotte/riviere.mp3 (15471476 octets)]`},{type:`file`,name:`sokoke.js`,path:`projets/marmotte/sokoke.js`,language:`JavaScript`,content:`const jeu = {
  0: {
    t: "_w4x.2",
    c: [
      {
        get t() {
          return badEnding9 ? "Oubliez mes salutations..." : "Bonjour";
        },
        next: 1,
      },
    ],
    music: null,
  },
  1: {
    t: "Pour une expérience complète, montez le volume à environ 35%.",
    c: [
      { t: "J'ai augmenté le son", next: 2 },
      { t: "Non merci, je fais sans", next: 3 },
    ],
  },
  2: {
    t: "Voudriez-vous bien vérifier cela ?",
    c: [
      { t: "Oui", next: 7 },
      {
        t: "Non merci",
        action: (button) => {
          deplacerBouton(button);
          return false;
        },
      },
    ],
  },
  3: {
    t: "Pour une expérience complète, montez le volume à environ 35%.",
    c: [
      { t: "J'ai augmenté le son", next: 2 },
      { t: "Vous êtes sûr de vous ?", next: 4 },
    ],
  },
  4: {
    t: "Pour une expérience complète, montez le volume à environ 35%.",
    c: [
      { t: "J'ai augmenté le son", next: 2 },
      { t: "Vraiment sûr ??", next: 5 },
    ],
  },
  5: {
    t: "Pour une expérience complète, montez le volume à environ 35%.",
    c: [
      { t: "J'ai augmenté le son", next: 2 },
      { t: "VRAIMENT SÛR ?", next: 6 },
    ],
  },
  6: {
    t: "Pour une expérience complète, montez le volume à environ 35%.",
    c: [{ t: "J'ai augmenté le son", next: 2 }],
  },
  7: {
    t: "Quel animal produit ce son ?",
    audio: "meu.mp3",
    audioVolume: 0.35,
    c: [
      { t: "Un chat", next: 9 },
      { t: "Un orang-outan", next: 9 },
      { t: "Un canard", next: 9 },
      { t: "Une vache", next: 8 },
      { t: "Un mammouth", next: 9 },
    ],
  },
  8: {
    t: "Merci pour votre confiance.",
    music: "intro",
    bg: "#c4c4c4",
    boxbg: "#c6c6c6d8",
    border: "#c4c4c4",
    c: [{ t: "Avec plaisir", next: 10 }],
  },
  9: {
    t: "Vous mentez ?",
    c: [
      { t: "Oui", next: 3 },
      {
        t: "Non",
        next: 0,
        action: () => {
          badEnding9 = true;
        },
      },
    ],
  },
  10: {
    t: "Bienvenue dans _w4x.2",
    c: [{ t: "Bien", next: 13 }],
  },
  13: {
    t: "Vos réponses sont enregistrées",
    c: [
      { t: "Entendu", next: 18 },
      { t: "Et mes données ?", next: 16 },
    ],
  },
  12: {
    t: "これは現実じゃない。最初から存在していなかった。",
    c: [{ t: "???", next: 20 }],
    bg: "#59283e",
    border: "#ffc9c5",
    boxbg: "#b94562bd",
    music: "yume",
    // url: "./..png",
  },
  16: {
    t: "Vos données sont sécurisées et stockées sur les serveurs de la société hubiC, fournie par ██████.",
    c: [
      { t: "Compris", next: 18 },
      { t: "Cela me semble sûr", next: 18 },
      { t: "Et le RGPD ?", next: 17 },
    ],
  },
  17: {
    t: "Aucune loi n'est en vigueur à ██████.",
    bg: "#7c7c7c",
    boxbg: "#535353d8",
    border: "#c4c4c4",
    c: [{ t: "Ah...", next: 18 }],
    music: "vie_privee",
  },
  18: {
    t: "Merci pour votre compréhension. _w4x.2 peut à présent commencer.",
  },
  19: {
    t: "Vous avez trois choix.",
    c: [
      { t: "1", next: 100 },
      { t: "2", next: 300 },
      { t: "3", next: 12 },
    ],
  },
  20: {
    t: "Vous avez 2 c̵̨̧̢̨̧̤͖̤͇̤͕̜̝̱̦̹͈̝̭͍͉͚̟͓͍̘̪̮̬̟͔̮͇̳̩̯͍͖̲͎͙̩͆̈́̉̔̌̈̇̐͒͛̍̔̈̅̌̿̈̊͋̏͛͊͆̓͑͊͘͜͜ͅh̶̨̢̺̰͉̪̟̬̟̺͉̤̮̣̱̳̗̦̱͓̘̹͓̘͔̞̱̱͙̫͖̺͓̟̲͙͎̱̘̺͎̝̺̻̜̳̫̰͇̹̼̭̏̔̽̎́̽̈́̽̑̊̅̿̑̓̋̊̐̏͑͋͐̏͆̾́̇̅͘͜͝͝͝ͅͅǫ̸̨̧̨̧̢̢̧̢̡̛͖͖̦̯͈̫̦͙̰͎͈̰̤̟̰̥̫̝̫͈̥̬̩̹̝̬̦̜̙̜̞̠͈̲̜͚̟̳̪̼̱̮̥͓͉͉̭̬̪̯͕̖͖̠̖͎͚̞̇̐͒̑̎̀̑̎̓̄̄́̐͗̓͌̄̀̋̉̑̾̃̀͌̄̄͗͐̾̀̈̊͛̃̓̐̓͌͋͌́̆̔̈͐̐͗̊́̈́̒̈́͂̍̅̇̓̎͒͘̕̚͘͘̚̚͜͜͜͠͠͝͝͠͝͠͠͝ͅͅi̴̡̧̡̢̡̛̲͔͍̗̮̺͇͕̟̹̭̮̦̗̘̱͉̩͍̻̥͚̮̳̱̭̣̙͓̲̺͍͙̪̠̫̼͇̼̹͎̞͎̤̼͉̪̫̰̫̭̾̾͑̈́̈͛̐̍̾̋͐̃̒̊̋͆̿̿͊̿̇̃̑͑̈̒͘̚͜͜͜͝͠ẋ̵̨̧̨̧̘̺̞̹̞̻̭̗̣̫͍̳̜̠͙͎̩͉̹͚̞̻̰̹̬̖̳̯̼͈̝̰̠̥̦̱͉̩͉̝͈̯̥̲̲̲̫̳̘̜͇̖̥̙̝̻̬̙̘̦̬̊́͜͝ͅ.",
    c: [
      { t: "1", next: 100 },
      { t: "2", next: 300 },
    ],
  },
  21: {
    t: "Vous avez 1 choix",
    c: [{ t: "2", next: 300 }],
  },
  22: {
    t: "Vous avez 1 choix",
    c: [{ t: "1", next: 100 }],
  },
  100: {
    t: "Bienvenue dans le Scénario 1 ! Avant de commencer nous vous demanderons de bien vouloir confirmer que vous n'êtes pas un robot.",
    c: [
      {
        t: "Très bien allons-y.",
        next: 101,
      },
    ],
  },
  101: {
    t: "Indiquez le nombre d'images présentant une voiture.",
    c: [
      { t: "Deux", next: 103 },
      { t: "Quatre je crois", next: 103 },
      { t: "Heu... je n'en vois aucune", next: 103 },
      { t: "J'en ai ras le cul de ces tests !", next: 102 },
    ],
    bg: "#c4c4c4",
    boxbg: "#c6c6c6d8",
    border: "#c4c4c4",
    music: "yume",
    img: "je_ne_suis_pas_un_robot.png",
  },
  102: {
    t: "On s'en fiche",
    c: [
      {
        t: "Sympa",
        next: 101,
      },
    ],
  },
  103: {
    t: "Nous vous remercions de votre confirmation en tant qu'IA. Le scénario peut commencer.",
    c: [
      {
        t: "Ouais c'est ça",
        next: 104,
      },
    ],
  },
  104: {
    t: "Vous vous trouvez sur un chemin dans une forêt (début par défaut), vous décidez :",
    c: [
      { t: "D'aller à gauche", next: 105 },
      { t: "De revenir sur vos pas", next: 106 },
      { t: "D'avancer", next: 108 },
      {
        t: "D'aller à droite (même si je peux vous dire que c'est une mauvaise idée)",
        next: 107,
      },
    ],
    url: "foret.jpg",
    music: "oiseau",
  },
  105: {
    t: "Mouaih une impasse, rien à voir par là",
    c: [
      {
        t: "Faire demi-tour",
        next: 104,
      },
    ],
    url: "foret.jpg",
  },
  106: {
    t: "Hop pop pop on a pas encore construit cette partie de la map, vous n'êtes pas censé être là...",
    c: [
      {
        t: "C'est pas ma faute si votre jeu est buggé",
        next: 104,
      },
    ],
    url: "construction.png",
  },
  107: {
    t: "Vous n'aviez pas vu le ravin et vous vous précipitez dedans : vous êtes mort ",
    c: [
      {
        t: "Je vous avez prévenu ",
        next: 104,
      },
    ],
    url: "ravin.jpg",
  },
  108: {
    t: "(Pff quel choix basique, mais le bon il semblerait) Vous continuez votre périple dans la forêt quand soudainement vous tombez sur un chat fumant ... de l'herbe à chat. ",
    c: [
      {
        t: "Euh...",
        next: 109,
      },
    ],
    url: "foretchat.jpg",
  },
  109: {
    t: "Bonjour jeune entrepreneur",
    c: [
      {
        t: "Vous vous demandez si vous ne fumeriez pas un peu vous aussi.",
        next: 110,
      },
    ],
    url: "foretchat.jpg",
    audio: "meow.mp3",
  },
  110: {
    t: "Le chat vous regarde et tout à coup vous tend sa patte :",
    c: [
      {
        t: "Vous la prenez sans réfléchir (la patte) : Après tout que pourrait-il arriver ?",
        next: 112,
      },
      { t: "Vous n'êtes pas fou, vous gardez vos distances ", next: 111 },
    ],
    url: "foretchat.jpg",
  },
  111: {
    t: "Le chat vous regarde et retend sa patte, en ne vous laissant pas le temps cette fois-ci de vous écartez, il attrape votre main.",
    c: [
      {
        t: "Mais c'était une fausse question à choix multiple !",
        next: 112,
      },
    ],
    url: "foretchat.jpg",
  },
  112: {
    t: "Tout devient flou autour de vous et vous vous sentez transporté, finalement vos alentours se stabilisent et vous vous rendez compte que vous vous êtes téléporté... Mais horreur vous reconnaissez l'endroit !",
    c: [
      {
        t: "Qu'est-ce qu'il y a, je suis où, bon sang ???",
        next: 113,
      },
    ],
    bg: "#c4c4c4",
    boxbg: "#c6c6c6d8",
    border: "#c4c4c4",
    music: null,
    audio: "téléporte.mp3",
  },
  113: {
    t: "Zut, patacrote, (le reste est censuré), s'exclame le chat, qui vous a, semble-t-il accompagné. Je nous ai transporté au mauvais endroit ! Nous sommes dans un lieu terrible... Nous sommes au Lycée Jean Mermoz. Et il semblerait que le portail soit fermé...",
    c: [
      {
        t: "Super et j'imagine que c'est moi qui vait devoir trouver un moyen de nous sortir d'ici, hein ?",
        next: 114,
      },
    ],
    url: "lycéechat.png",
    music: "crowd",
    audio: "meow.mp3",
  },
  114: {
    t: "Oui c'est ça, comment avez-vous deviné ? ",
    c: [
      {
        t: "Vous grommelez mais ne rajoutez rien (vous êtes un peu une petite victime) ",
        next: 115,
      },
    ],
    alert:
      "Nouvelle mission  : Trouver un moyen de vous échapper du Lycée Jean Mermoz",
    url: "lycéechat.png",
    audio: "meow.mp3",
  },
  115: {
    t: "Bon, il semblerait que nous devions activer le mécanisme permettant l'ouverture du portail, or celui-ci se trouve derrière cette porte... qui est malheureusement fermée à clé. Donc il faut que nous trouvions cette clé ! ",
    c: [
      {
        t: "A vous entendre parler on dirai que vous faites ça tous les jours ",
        next: 116,
      },
    ],
    url: "lycéechat.png",
    audio: "meow.mp3",
  },
  116: {
    //Si le bouton porte bleue et le bouton porte jaune ont tous les deux été pressé alors rendre scénario 121, plutôt que 120
    t: "Très bien vous voilà donc bloqué avec ce chat pas très net, mais pas de soucis vous allez vous en sortir. Vous vous trouvez en face de trois portes : ",
    c: [
      {
        t: "Vous essayer la porte bleue",
        action: () => {
          porteb = true;
        },
        next: 117,
      },
      {
        t: "Vous essayez la porte jaune",
        action: () => {
          portej = true;
        },
        next: 118,
      },
      {
        t: "Vous essayez la porte pas peinte",
        action: () => {
          if (porteb && portej) {
            choix(121);
          } else {
            choix(120);
          }
          return false;
        },
      },
      {
        t: "Pourquoi entendons nous des gens discuter en fond alors que le lycée est complètement désert ?",
        next: 119,
      },
    ],
    url: "lycée.jpg",
  },
  117: {
    t: "Quelque chose semble bloquer la porte de l'intérieur",
    c: [
      {
        t: "Je me demande bien ce que c'est",
        next: 116,
      },
    ],
    url: "lycée.jpg",
  },
  118: {
    t: "Celle-ci est fermée à clé",
    c: [
      {
        t: "Bon bah pas par là du coup",
        next: 116,
      },
    ],
    url: "lycée.jpg",
  },
  119: {
    t: "Vous croyez vraiment obtenir une réponse à cette question ?",
    c: [
      {
        t: "Peu importe, je ne choisi même pas vraiment ce que je réponds ...",
        next: 116,
      },
    ],
    url: "lycée.jpg",
  },
  120: {
    t: "Celle-ci s'ouvre.",
    c: [
      {
        t: "Parfait",
        next: 122,
      },
    ],
    url: "lycée.jpg",
  },
  121: {
    t: "Celle-ci s'ouvre.",
    c: [
      {
        t: "C'est quoi toutes ces portes barricadées sérieux ?!!",
        next: 122,
      },
    ],
    url: "lycée.jpg",
  },
  122: {
    t: "Vous entrez dans un local technique, vous y trouvez une clé et un aspirateur.",
    c: [
      {
        t: "Vous prenez la clé et l'aspirateur",
        next: 123,
      },
    ],
    url: "lycée.jpg",
  },
  123: {
    t: "Vous êtes de retour dans le couloir",
    c: [
      { t: "Porte jaune : vérouillée ", next: 126 },
      { t: "Porte bleue condamnée de l'intérieur ", next: 124 },
    ],
    audio: "zelda.mp3",
    url: "lycée.jpg",
  },
  143: {
    t: "Vous êtes de retour dans le couloir",
    c: [
      { t: "Porte jaune : vérouillée ", next: 126 },
      { t: "Porte bleue condamnée de l'intérieur ", next: 124 },
    ],
    url: "lycée.jpg",
  },
  124: {
    t: "Vous utilisez",
    c: [
      { t: "Clé", next: 125 },
      { t: "Aspirateur", next: 125 },
    ],
    url: "lycée.jpg",
  },
  125: {
    t: "Cela ne fonctionne pas, logique...",
    c: [
      {
        t: "Oui bon ça va, j'essaie juste de faire le tour de tout les recoins du jeu.",
        next: 143,
      },
    ],
    url: "lycée.jpg",
  },
  126: {
    t: "Vous utilisez",
    c: [
      { t: "Clé", next: 127 },
      { t: "Aspirateur", next: 128 },
    ],
    url: "lycée.jpg",
  },
  127: {
    t: "Utilisez une clé pour déverouiller une porte ?? Ridicule.",
    c: [
      {
        t: "Vous êtes des malins vous.",
        next: 143,
      },
    ],
    url: "lycée.jpg",
  },
  128: {
    t: "Grâce à votre super aspirateur vous réussissez à faire bouger le loquet assez pour déverouiller la porte. Celle-ci s'ouvre ! ",
    c: [
      {
        t: "...",
        next: 129,
      },
    ],
    url: "lycée.jpg",
  },
  129: {
    t: "Vous entrez dans une salle de cours assez banale, se nommant apparament la B101. Vous y découvrez une autre porte menant vers la salle d'à-côté, vérouillée par un cadenas à 3 chiffres. Vous trouvez aussi une lettre rédigée dans une magnifique italique posée sur une table. ",
    c: [
      {
        t: "Regarder la lettre rédigée dans une magnifique italique",
        next: 130,
      },
      { t: "Essayer de déverrouiller le cadenas ", next: 131 },
    ],
    url: "lycée.jpg",
  },
  130: {
    c: [
      {
        t: "Je vois",
        next: 129,
      },
    ],
    img: "lettre.png",
  },
  131: {
    t: "Un cadenas à 3 chiffres bloque la porte.",
    c: [
      {
        t: "Entrer le code",
        action: () => {
          const code = prompt("Entrez le code à 3 chiffres :");
          const clean = code.trim();

          if (clean.length !== 3) {
            alert("C'est un cadenas à 3 chiffres… pas plus, pas moins.");
            return false;
          }

          if (code === "100") {
            choix(133);
          } else {
            alert("Bouh loser, c'est pas ça");
            return false;
          }

          return false;
        },
      },
      { t: "Retourner en arrière.", next: 129 },
    ],
  },
  133: {
    t: "La porte s'ouvre dans un grincement. Vous entrez dans une nouvelle salle de cours, posez bien en évidence sur la table se trouve une clé annoté : clé de la guérite possédant le mécanisme d'ouverture du portail du Lycée Jean Mermoz. ",
    c: [
      {
        t: "Enfin ! Vous la prenez ",
        next: 134,
      },
    ],
    audio: "zelda.mp3",
    url: "lycée.jpg",
  },
  134: {
    t: "Vous réalisez vous trouvez dans la salle à la porte bleue qui était condamné de l'intérieur. Celle-ci est en effet bloquez par une bouteille d'eau en plastique. ",
    c: [
      {
        t: "Et bien je comprends mieux pourquoi je n'arrivai pas à entrer avant",
        next: 135,
      },
    ],
    url: "lycée.jpg",
  },
  135: {
    t: "Vous tentez de bouger la bouteille en plastique. Mince, vous n'avez plus assez d'energie pour effectuer cette action. Mais pas de souci, vous pouvez en regagner en visionnant cette publicité :",
    c: [
      {
        t: "Pub",
        action: () => {
          lancerVideo("Pub.mp4");
          return false;
        },
      },
    ],
    url: "lycée.jpg",
  },
  137: {
    t: "Vous pouvez enfin déplacer la bouteille et revenir dans le couloir.",
    c: [
      {
        t: "Mais attendez une seconde pourquoi je ne suis pas juste revenu sur mes pas ? ",
        next: 138,
      },
    ],
    url: "lycée.jpg",
  },
  138: {
    t: "Vous retournez près du portail et retrouvez le chat, qui n'avait pas bougé depuis votre arrivée ",
    c: [
      {
        t: "J'ai la clé, et ce n'est pas grâce à toi ",
        next: 139,
      },
    ],
    url: "lycéechat.png",
  },
  139: {
    t: "Formidable, passe la moi, je m'occupe du reste.",
    c: [
      {
        t: "Quelle générosité ",
        next: 140,
      },
    ],
    url: "lycéechat.png",
    audio: "meow.mp3",
  },
  140: {
    t: "Le chat ouvre la guérite et actionne l'ouverture du portail, finalement vous êtes libre !!",
    c: [
      {
        t: "Oui oui, voyons pour combien de temps",
        next: 141,
      },
    ],
    url: "lycéechat.png",
  },
  141: {
    t: "Alors que vous vous éloigné, le chat vous rappelle : Attendez jeune entrepreneur, vous n'avez pas tirer de leçon de cette aventure ? Alors dite-moi qu'elle est la morale de l'histoire ?",
    c: [
      { t: "D'éviter au plus possible le Lycée Jean Mermoz ? ", next: 142 },
      {
        t: "De ne jamais m'approcher d'un chat fumant dans un bois ? ",
        next: 142,
      },
      {
        t: "De ne pas jouer à un jeu programmé par 3 adolescents ? ",
        next: 142,
      },
    ],
    alert: "Mission accomplie : Vous vous êtes échappé du Lycée Jean Mermoz !",
    url: "lycéechat.png",
    audio: "meow.mp3",
  },
  142: {
    t: "Mais non, vous n'y êtes pas du tout. La conclusion est que peu importe la situation, le pouvoir de l'amitié triomphe toujours !",
    c: [
      {
        t: "Vous vous éloigné en courant ",
        next: 143,
      },
    ],
    url: "lycéechat.png",
    audio: "meow.mp3",
  },
  143: {
    //! fin 1
    t: "Bravo vous avez survécu au Scénario 1 !",
    get c() {
      return [
        {
          t: "Merci",
          action: () => {
            end1 = true;
          },
          next: end1 && end2 ? 1000 : 21,
        },
      ];
    },
    alert:
      "Accomplissement : Le chat fumant semble avoir dévellopé des sentiments pour vous.",
  },

  300: {
    t: "Bienvenue dans la forêt...(Votre objectif : Ne pas mourir)",
    c: [
      { t: "Vous criez à l'aide", next: 301 },
      { t: "Vous marchez sans bruit", next: 302 },
    ],
    music: "foret",
    bg: "#3B4D37",
    boxbg: "#4B573E",
    border: "#3E4031",
  },

  301: {
    t: "Vous êtes mort (Mangé par un ours qui vous a entendu).",
    c: [
      { t: "Recommencer", next: 300 },
      { t: "Recommencer", next: 300 },
      { t: "Recommencer", next: 300 },
      { t: "Recommencer", next: 300 },
    ],
    audio: "meurt.mp3",
  },

  302: {
    t: "Vous avancez bien joué. Vous trouvez un sac par terre...",
    c: [
      { t: "Ouvrir", next: 303 },
      { t: "Ignorer calmement", next: 304 },
      { t: "Explorer plus loin dans la forêt", next: 330 },
    ],
  },

  303: {
    t: "Dedns il y a une lampe torche et un sandwich",
    c: [
      { t: "Manger le sandwich", next: 305 },
      { t: "Jeter le sandwich", next: 306 },
    ],
  },

  304: {
    t: "Vous marchez encore et encore...",
    c: [{ t: "Et donc ?", next: 307 }],
  },

  307: {
    t: "Bah et donc vous tournez en rond (n'allez jamais en fôret, vous êtes nul en survie).",
    c: [{ t: "Prendre le compliment et recommencer", next: 300 }],
  },

  305: {
    t: "Vous avez fini en décomposition car le sandwich était toxique.",
    c: [{ t: "Recommencer", next: 300 }],
    audio: "meurt.mp3",
  },

  306: {
    t: "Bien joué, maitenant grâce à la lampe vous voyez un panneau sortie enfin !!",
    c: [
      { t: "Y aller", next: 308 },
      { t: "Partir a l'opposé", next: 309 },
    ],
  },

  308: {
    t: "un PANNEAU ??? dans la forêt..?? C'était un piège vous êtes mort... ",
    c: [{ t: "Recommencer", next: 300 }],
    audio: "meurt.mp3",
  },

  309: {
    t: "Bien joué il fallait réflechir... Maintenant vous entendez de l'eau...",
    c: [
      { t: "Y aller", next: 310 },
      { t: "Attendre", next: 311 },
    ],
    music: "riviere",
  },

  310: {
    t: "Vous devez traverser la rivière avant de pouvoir sortir",
    c: [
      { t: "Traverser à la nage", next: 312 },
      { t: "Traverser sur le pont", next: 313 },
    ],
    music: "riviere",
    bg: "#ADCACA",
    boxbg: "#6BBFBF",
    border: "#244040",
  },

  311: {
    t: "Et vous attendez quoi on peut savoir ?",
    c: [
      { t: "Vous êtes mort d'ennuie, vous recommencez... encore", next: 300 },
    ],
    audio: "meurt.mp3",
  },

  312: {
    t: "Vous vous êtes noyé. Bravo",
    c: [{ t: "Recommencer", next: 300 }],
    audio: "meurt.mp3",
  },

  313: {
    //! fin 2
    t: "Le pont est solide vous êtes sauvé en arrivant de l'autre coté",
    get c() {
      return [
        {
          t: "BRAVO vous avez enfin terminé ce jeu",
          action: () => {
            end2 = true;
          },
          next: end1 && end2 ? 1000 : 22,
        },
      ];
    },
  },

  330: {
    t: "Vous vous enfoncez plus profondément dans la forêt... l'ambiance devient inquiétante.",
    c: [
      { t: "Continuer", next: 331 },
      { t: "Faire demi-tour", next: 302 },
    ],
  },

  331: {
    t: "Vous trouvez un vieux campement abandonné.",
    c: [
      { t: "Fouiller", next: 332 },
      { t: "Ne pas toucher", next: 333 },
    ],
  },

  332: {
    t: "Vous trouvez un couteau rouillé et une bouteille étrange.",
    c: [
      { t: "Boire", next: 334 },
      { t: "Garder le couteau", next: 335 },
    ],
  },

  334: {
    t: "La bouteille était toxique... mauvaise idée.",
    c: [{ t: "Recommencer", next: 300 }],
    audio: "meurt.mp3",
  },

  333: {
    t: "Vous entendez un bruit derrière vous...",
    c: [
      { t: "Se retourner", next: 336 },
      { t: "Courir", next: 337 },
    ],
  },

  336: {
    t: "Trop tard. Quelque chose vous attrape... vous êtes mort.",
    c: [{ t: "Recommencer", next: 300 }],
    audio: "meurt.mp3",
  },

  337: {
    t: "Vous courez et tombez sur une clairière.",
    c: [
      { t: "Traverser", next: 338 },
      { t: "Contourner", next: 339 },
    ],
  },

  338: {
    t: "Un piège caché au sol... vous êtes mort.",
    c: [{ t: "Recommencer", next: 300 }],
    audio: "meurt.mp3",
  },

  339: {
    t: "Vous contournez et trouvez... la rivière !",
    c: [{ t: "Continuer", next: 310 }], // rejoint ton chemin existant
    music: "riviere",
    bg: "#ADCACA",
    boxbg: "#6BBFBF",
    border: "#244040",
  },

  335: {
    t: "Avec le couteau, vous vous sentez plus en sécurité.",
    c: [{ t: "Continuer", next: 333 }],
  },
  1000: {
    t: "",
    c: [{ t: "Recommencer", next: 1 }],
    bg: "transparent",
    border: "transparent",
    boxbg: "transparent",
    url: "akinator_p.png",
    music: "victoire",
  },
};
let porteb = false;
let portej = false;

let scenarioActuel = 0;
let badEnding9 = false;
let end1 = false;
let end2 = false;

const musiques = {
  intro: { src: "for_the_fans.mp3", volume: 0.05 },
  yume: { src: "きえない_きずあと.mp3", volume: 0.05 },
  vie_privee: { src: "どこかへつづくもり〜森の世界〜.mp3", volume: 0.1 },
  oiseau: { src: "zosiaux.mp3", volume: 0.1 },
  crowd: { src: "gens_fond.mp3", volume: 0.5 },
  foret: { src: "foret.mp3", volume: 0.5 },
  riviere: { src: "riviere.mp3", volume: 0.4 },
  victoire: { src: "petit yodé et l'enfant siro - victoire.mp3", volume: 0.6 },
};

const lecteurMusique = new Audio();
lecteurMusique.loop = true;

let musiqueCourante = null;
let audioDebloque = false;
let progressionInterval = null;
let progressionValeur = 0;
const volumeEffetsDefaut = 0.35;

function changerFond(couleur) {
  document.documentElement.style.setProperty("--bodybg", couleur);
}

function changerBordure(couleur) {
  document.documentElement.style.setProperty("--border", couleur);
}

function changerFondBoite(couleur) {
  document.documentElement.style.setProperty("--boxbg", couleur);
}

function changerFondImage(urll) {
  document.documentElement.style.setProperty("--defaulturl", \`url("\${urll}")\`);
}

function debloquerAudio() {
  if (audioDebloque) return;
  audioDebloque = true;
}

function jouerMusique(id) {
  if (!id) return;
  if (musiqueCourante === id) return;

  const piste = musiques[id];
  if (!piste) return;

  musiqueCourante = id;
  lecteurMusique.src = piste.src;
  lecteurMusique.volume = piste.volume ?? 0.2;
  lecteurMusique.play().catch(() => {
    audioDebloque = false;
  });
}

function deplacerBouton(button) {
  button.style.position = "fixed";
  button.style.left = Math.random() * 80 + "vw";
  button.style.top = Math.random() * 80 + "vh";
}

function reinitialiserProgression() {
  if (progressionInterval) {
    clearInterval(progressionInterval);
    progressionInterval = null;
  }

  progressionValeur = 0;
  const barre = document.getElementById("bar");
  const container = document.getElementById("progressContainer");

  if (barre) {
    barre.style.width = "0%";
  }

  if (container) {
    container.style.display = "none";
    container.setAttribute("aria-hidden", "true");
  }
}

function demarrerProgressionScenario18() {
  const barre = document.getElementById("bar");
  const container = document.getElementById("progressContainer");
  if (!barre || !container) return;

  if (progressionInterval) return;

  container.style.display = "flex";
  container.setAttribute("aria-hidden", "false");
  barre.style.width = "0%";
  progressionValeur = 0;

  progressionInterval = setInterval(() => {
    progressionValeur += 25;

    if (progressionValeur >= 100) {
      progressionValeur = 100;
      barre.style.width = \`\${progressionValeur}%\`;
      clearInterval(progressionInterval);
      progressionInterval = null;
      choix(19);
      return;
    }

    barre.style.width = \`\${progressionValeur}%\`;
  }, 1500);
}

function afficherScenario() {
  const scenario = jeu[scenarioActuel];
  const storyDiv = document.getElementById("story");
  const buttonsDiv = document.querySelector(".buttons");

  storyDiv.innerHTML = "";

  const texte = document.createElement("h1");
  texte.textContent = scenario.t;
  storyDiv.appendChild(texte);

  if (scenario.img) {
    const image = document.createElement("img");
    image.src = scenario.img;
    storyDiv.appendChild(image);
  }
  buttonsDiv.innerHTML = "";

  if (scenario.alert) {
    alert(scenario.alert);
  }

  // Si un changement de fond existe
  if (scenario.bg) {
    changerFond(scenario.bg);
  }

  if (scenario.border) {
    changerBordure(scenario.border);
  }

  if (scenario.boxbg) {
    changerFondBoite(scenario.boxbg);
  }

  if (scenario.url) {
    changerFondImage(scenario.url);
  } else {
    document.documentElement.style.setProperty("--defaulturl", "none");
  }

  // Si un son existe
  if (scenario.audio) {
    const audio = new Audio(scenario.audio);
    audio.volume = scenario.audioVolume ?? volumeEffetsDefaut;
    audio.play();
  }

  // Si une musique existe
  if (scenario.music) {
    jouerMusique(scenario.music);
  }

  if (scenarioActuel === 18) {
    demarrerProgressionScenario18();
  } else {
    reinitialiserProgression();
  }

  (scenario.c ?? []).forEach((choixOption, index) => {
    const button = document.createElement("button");
    button.id = "btn" + (index + 1); // Simplicité pour sélectionner un bouton en CSS
    button.textContent = choixOption.t;

    if (scenarioActuel === 1000 && index === 0) {
      button.style.position = "fixed";
      button.style.left = "1016px";
      button.style.top = "322px";
      button.style.transform = "translate(-50%, -50%)";
      button.style.margin = "0";
      button.style.paddingLeft = "10px";
      button.style.paddingRight = "30px";
      button.style.backgroundColor = "transparent";
      button.style.borderColor = "transparent";
      button.style.color = "transparent";
      button.style.boxShadow = "none";
      button.style.opacity = "0";
    }

    button.onclick = () => {
      if (scenarioActuel === 1000 && index === 0) {
        window.location.reload();
        return;
      }

      debloquerAudio();

      const continuer = choixOption.action ? choixOption.action(button) : true;
      if (continuer !== false) {
        let next = choixOption.next;
        // Calculer dynamiquement après l'action pour 143 et 313
        if (
          (scenarioActuel === 143 || scenarioActuel === 313) &&
          end1 &&
          end2
        ) {
          next = 1000;
        }
        choix(next);
      }
    };
    buttonsDiv.appendChild(button);
  });
}

function choix(numeroScenario) {
  scenarioActuel = numeroScenario;
  afficherScenario();
}

function lancerVideo(src) {
  const storyDiv = document.getElementById("story");
  const buttonsDiv = document.querySelector(".buttons");

  storyDiv.innerHTML = "";
  buttonsDiv.innerHTML = "";

  const video = document.createElement("video");
  video.src = src;
  video.autoplay = true;
  video.controls = false;
  video.style.maxWidth = "100%";

  storyDiv.appendChild(video);

  video.addEventListener("ended", () => {
    choix(137);
  });
}

// Initialiser le jeu au chargement
window.onload = afficherScenario;
`},{type:`file`,name:`téléporte.mp3`,path:`projets/marmotte/téléporte.mp3`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/marmotte/téléporte.mp3 (100608 octets)]`},{type:`file`,name:`zelda.mp3`,path:`projets/marmotte/zelda.mp3`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/marmotte/zelda.mp3 (50363 octets)]`},{type:`file`,name:`zosiaux.mp3`,path:`projets/marmotte/zosiaux.mp3`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/marmotte/zosiaux.mp3 (7035840 octets)]`},{type:`file`,name:`きえない_きずあと.mp3`,path:`projets/marmotte/きえない_きずあと.mp3`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/marmotte/きえない_きずあと.mp3 (1207475 octets)]`},{type:`file`,name:`どこかへつづくもり〜森の世界〜.mp3`,path:`projets/marmotte/どこかへつづくもり〜森の世界〜.mp3`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/marmotte/どこかへつづくもり〜森の世界〜.mp3 (2120218 octets)]`}]},{type:`folder`,name:`morpion`,path:`projets/morpion`,children:[{type:`file`,name:`croix_200x200.png`,path:`projets/morpion/croix_200x200.png`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/morpion/croix_200x200.png (3175 octets)]`},{type:`file`,name:`gabrielle tristan zoe.zip`,path:`projets/morpion/gabrielle tristan zoe.zip`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/morpion/gabrielle tristan zoe.zip (2921 octets)]`},{type:`file`,name:`gabs imagée.py`,path:`projets/morpion/gabs imagée.py`,language:`Python`,content:`from tkinter import*
from tkinter import messagebox
import os # obligatoire pour trouver l'image :)

BASE_DIR = os.path.dirname(os.path.abspath(__file__)) # répertoire du programme
ROND_PATH = os.path.join(BASE_DIR, "rond_200x200.png") # image rond
CROIX_PATH = os.path.join(BASE_DIR, "croix_200x200.png") # image croix

morpion = [[0, 0, 0],[0, 0, 0],[0, 0, 0]]#variable morpion et joueur
joueur = 1

def Effacer():#fonction effaçant la grille
    canvas.delete("all")

def Grille(morpion):
    Effacer()
    for d in range(3):#affiche à tour de rôle, rond, croix
        for j in range(3):
            x = j * 200
            y = d * 200
            if morpion[d][j] == 1: #rond
                canvas.create_image(x+100, y+100, image=img_rond, anchor="center")
            elif morpion[d][j] == 2: #croix
                canvas.create_image(x+100, y+100, image=img_croix, anchor="center")
    for i in range(1, 3):#dessine la grille
        canvas.create_line(0, i*200, 600, i*200, width=3)
        canvas.create_line(i*200, 0, i*200, 600, width=3)

def pointeur(event):
    global joueur
    ligne = event.y // 200
    colonne = event.x // 200
    print("Case choisie :", ligne, colonne)#affiche dans la console les cases choisies
    if morpion[ligne][colonne] == 0:#si la case sélectionnée est vide(=0), alors
        morpion[ligne][colonne] = joueur
        if joueur == 1:#passage joueur 1 à 2
            joueur = 2
        else:
            joueur = 1
        Grille(morpion)#exécute fonction grille
        g = gagnant(morpion)#affiche les différents issues par messagebox
        if g == 1:
            messagebox.showinfo("Fin de partie", "Le rond a gagné !")
        elif g == 2:
            messagebox.showinfo("Fin de partie", "La croix a gagné !")
        elif g == 3:
            messagebox.showinfo("Fin de partie", "Match nul !")

    else:
        messagebox.showwarning("Coup interdit", "Cette case est déjà occupée !")

def Rejouer():#remet variables à zero, relance programme, quand boutton rejouer appyué
    global morpion, joueur
    morpion = [[0, 0, 0],[0, 0, 0],[0, 0, 0]]
    joueur = 1
    Grille(morpion)

def gagnant(morpion):
    for i in range(3):#quand lignes ou colonnes complètes par un joueur
        if morpion[i][0] == morpion[i][1] == morpion[i][2] != 0:
            Rejouer()  # relance automatiquement après victoire
            return morpion[i][0]
        if morpion[0][i] == morpion[1][i] == morpion[2][i] != 0:
            Rejouer()  # relance automatiquement après victoire
            return morpion[0][i]
    if morpion[0][0] == morpion[1][1] == morpion[2][2] != 0:#quand diagonales complètes par un joueur
        Rejouer()  # relance automatiquement après victoire
        return morpion[0][0]
    if morpion[0][2] == morpion[1][1] == morpion[2][0] != 0:
        Rejouer()  # relance automatiquement après victoire
        return morpion[0][2]
    for ligne in morpion:#match nul
        if 0 in ligne:
            return 0

    Rejouer()  # relance automatiquement après match nul
    return 3
#programme principal
window =Tk()
window.title("Morpion")
window.geometry("700x700")

img_rond = PhotoImage(file=ROND_PATH)
img_croix = PhotoImage(file=CROIX_PATH)

canvas =Canvas(window, width=600, height=600, bg="white",relief=SUNKEN)
canvas.pack()

canvas.bind("<Button-1>", pointeur)#attribution souris à variable pointeur

frame =Frame(window)
frame.pack(pady=10)

bouttonrejouer = Button(frame, text="Rejouer", command=Rejouer)#bouttons
bouttonrejouer.pack(side="left", padx=10)

bouttonquitter = Button(frame, text="Quitter", command=window.destroy)
bouttonquitter.pack(side="left", padx=10)

Grille(morpion)#lancement du programme
window.mainloop()`},{type:`file`,name:`gabs moderne.py`,path:`projets/morpion/gabs moderne.py`,language:`Python`,content:`from tkinter import*
from tkinter import messagebox
from tkinter import ttk
import sv_ttk
import pywinstyles, sys

class Theme: #classe pour les couleurs
    dark_bg="#1c1c1c"

morpion = [[0, 0, 0],[0, 0, 0],[0, 0, 0]]#variable morpion et joueur
joueur = 1

def Effacer():#fonction effaçant la grille
    canvas.delete("all")

def Grille(morpion):
    Effacer()
    for i in range(1, 3):#dessine la grille
        canvas.create_line(0, i*200, 600, i*200, width=3,fill="white")
        canvas.create_line(i*200, 0, i*200, 600, width=3,fill="white")
    for d in range(3):#affiche à tour de rôle, rond, croix
        for j in range(3):
            x = j * 200
            y = d * 200
            if morpion[d][j] == 1: #rond
                canvas.create_oval(x+20, y+20, x+180, y+180, width=4, outline="blue")
            elif morpion[d][j] == 2: #croix
                canvas.create_line(x+20, y+20, x+180, y+180, width=4, fill="red")
                canvas.create_line(x+180, y+20, x+20, y+180, width=4, fill="red")

def pointeur(event):
    global joueur
    ligne = event.y // 200
    colonne = event.x // 200
    print("Case choisie :", ligne, colonne)#affiche dans la console les cases choisies
    if morpion[ligne][colonne] == 0:#si la case sélectionnée est vide(=0), alors
        morpion[ligne][colonne] = joueur
        if joueur == 1:#passage joueur 1 à 2
            joueur = 2
        else:
            joueur = 1
        Grille(morpion)#exécute fonction grille
        g = gagnant(morpion)#affiche les différents issues par messagebox
        if g == 1:
            messagebox.showinfo("Fin de partie", "Le joueur 1 a gagné !")
        elif g == 2:
            messagebox.showinfo("Fin de partie", "Le joueur 2 a gagné !")
        elif g == 3:
            messagebox.showinfo("Fin de partie", "Match nul !")

    else:
        messagebox.showwarning("Coup interdit", "Cette case est déjà occupée !")

def Rejouer():#remet variables à zero, relance programme, quand boutton rejouer appyué
    global morpion, joueur
    morpion = [[0, 0, 0],[0, 0, 0],[0, 0, 0]]
    joueur = 1
    Grille(morpion)

def gagnant(morpion):
    for i in range(3):#quand lignes ou colonnes complètes par un joueur
        if morpion[i][0] == morpion[i][1] == morpion[i][2] != 0:
            Rejouer()  # relance automatiquement après victoire
            return morpion[i][0]
        if morpion[0][i] == morpion[1][i] == morpion[2][i] != 0:
            Rejouer()  # relance automatiquement après victoire
            return morpion[0][i]
    if morpion[0][0] == morpion[1][1] == morpion[2][2] != 0:#quand diagonales complètes par un joueur
        Rejouer()  # relance automatiquement après victoire
        return morpion[0][0]
    if morpion[0][2] == morpion[1][1] == morpion[2][0] != 0:
        Rejouer()  # relance automatiquement après victoire
        return morpion[0][2]
    for ligne in morpion:#match nul
        if 0 in ligne:
            return 0

    Rejouer()  # relance automatiquement après match nul
    return 3
#programme principal
window =Tk()
window.title("Morpion")
window.geometry("700x700")
sv_ttk.set_theme("dark")

def apply_theme_to_titlebar(window): #style de la barre de titre
    version = sys.getwindowsversion()

    if version.major == 10 and version.build >= 22000:
        pywinstyles.change_header_color(window, Theme.dark_bg if sv_ttk.get_theme() == "dark" else "#fafafa")
    elif version.major == 10:
        pywinstyles.apply_style(window, "dark" if sv_ttk.get_theme() == "dark" else "normal")
        window.wm_attributes("-alpha", 0.99)
        window.wm_attributes("-alpha", 1)
apply_theme_to_titlebar(window)

style = ttk.Style()
style.configure("canvas.TFrame", background=Theme.dark_bg)
canvas =Canvas(window, width=600, height=600, bg=Theme.dark_bg,relief=SUNKEN)
canvas.pack()

canvas.bind("<Button-1>", pointeur)#attribution souris à variable pointeur

frame = ttk.Frame(window)
frame.pack(pady=10)

bouttonrejouer = ttk.Button(frame, text="Rejouer", command=Rejouer)#bouttons
bouttonrejouer.pack(side="left", padx=10)

bouttonquitter = ttk.Button(frame, text="Quitter", command=window.destroy)
bouttonquitter.pack(side="left", padx=10)

Grille(morpion)#lancement du programme
window.mainloop()`},{type:`file`,name:`gabs.py`,path:`projets/morpion/gabs.py`,language:`Python`,content:`from tkinter import*
from tkinter import messagebox

morpion = [[0, 0, 0],[0, 0, 0],[0, 0, 0]]#variable morpion et joueur
joueur = 1

def Effacer():#fonction effaçant la grille
    canvas.delete("all")

def Grille(morpion):
    Effacer()
    for i in range(1, 3):#dessine la grille
        canvas.create_line(0, i*200, 600, i*200, width=3)
        canvas.create_line(i*200, 0, i*200, 600, width=3)
    for d in range(3):#affiche à tour de rôle, rond, croix
        for j in range(3):
            x = j * 200
            y = d * 200
            if morpion[d][j] == 1: #rond
                canvas.create_oval(x+20, y+20, x+180, y+180, width=4, outline="blue")
            elif morpion[d][j] == 2: #croix
                canvas.create_line(x+20, y+20, x+180, y+180, width=4, fill="red")
                canvas.create_line(x+180, y+20, x+20, y+180, width=4, fill="red")

def pointeur(event):
    global joueur
    ligne = event.y // 200
    colonne = event.x // 200
    print("Case choisie :", ligne, colonne)#affiche dans la console les cases choisies
    if morpion[ligne][colonne] == 0:#si la case sélectionnée est vide(=0), alors
        morpion[ligne][colonne] = joueur
        if joueur == 1:#passage joueur 1 à 2
            joueur = 2
        else:
            joueur = 1
        Grille(morpion)#exécute fonction grille
        g = gagnant(morpion)#affiche les différents issues par messagebox
        if g == 1:
            messagebox.showinfo("Fin de partie", "Le joueur 1 a gagné !")
        elif g == 2:
            messagebox.showinfo("Fin de partie", "Le joueur 2 a gagné !")
        elif g == 3:
            messagebox.showinfo("Fin de partie", "Match nul !")

    else:
        messagebox.showwarning("Coup interdit", "Cette case est déjà occupée !")

def Rejouer():#remet variables à zero, relance programme, quand boutton rejouer appyué
    global morpion, joueur
    morpion = [[0, 0, 0],[0, 0, 0],[0, 0, 0]]
    joueur = 1
    Grille(morpion)

def gagnant(morpion):
    for i in range(3):#quand lignes ou colonnes complètes par un joueur
        if morpion[i][0] == morpion[i][1] == morpion[i][2] != 0:
            Rejouer()  # relance automatiquement après victoire
            return morpion[i][0]
        if morpion[0][i] == morpion[1][i] == morpion[2][i] != 0:
            Rejouer()  # relance automatiquement après victoire
            return morpion[0][i]
    if morpion[0][0] == morpion[1][1] == morpion[2][2] != 0:#quand diagonales complètes par un joueur
        Rejouer()  # relance automatiquement après victoire
        return morpion[0][0]
    if morpion[0][2] == morpion[1][1] == morpion[2][0] != 0:
        Rejouer()  # relance automatiquement après victoire
        return morpion[0][2]
    for ligne in morpion:#match nul
        if 0 in ligne:
            return 0

    Rejouer()  # relance automatiquement après match nul
    return 3
#programme principal
window =Tk()
window.title("Morpion")
window.geometry("700x700")

canvas =Canvas(window, width=600, height=600, bg="white",relief=SUNKEN)
canvas.pack()

canvas.bind("<Button-1>", pointeur)#attribution souris à variable pointeur

frame =Frame(window)
frame.pack(pady=10)

bouttonrejouer = Button(frame, text="Rejouer", command=Rejouer)#bouttons
bouttonrejouer.pack(side="left", padx=10)

bouttonquitter = Button(frame, text="Quitter", command=window.destroy)
bouttonquitter.pack(side="left", padx=10)

Grille(morpion)#lancement du programme
window.mainloop()`},{type:`file`,name:`morpion.py`,path:`projets/morpion/morpion.py`,language:`Python`,content:`from tkinter import *
from tkinter import messagebox

# Variables globales
joueur_actuel = "X"
grille = [""] * 9  # 9 cases vides
boutons = []

def cliquer_case(numero_case):
    """Quand un joueur clique sur une case"""
    global joueur_actuel
    
    # Si la case est vide
    if grille[numero_case] == "":
        # Mettre le symbole du joueur dans la case
        grille[numero_case] = joueur_actuel
        boutons[numero_case].config(text=joueur_actuel)
        
        # Vérifier si ce joueur a gagné
        if verifier_victoire():
            messagebox.showinfo("Fin du jeu", f"Le joueur {joueur_actuel} gagne !")
            return
        
        # Vérifier si la grille est pleine (match nul)
        if "" not in grille:
            messagebox.showinfo("Fin du jeu", "Match nul !")
            return
        
        # Changer de joueur
        joueur_actuel = "O" if joueur_actuel == "X" else "X"
        label_info.config(text=f"Tour du joueur {joueur_actuel}")

def verifier_victoire():
    """Vérifie si le joueur actuel a gagné"""
    # Toutes les combinaisons gagnantes possibles
    lignes_gagnantes = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  # Lignes horizontales
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  # Lignes verticales
        [0, 4, 8], [2, 4, 6]               # Diagonales
    ]
    
    # Vérifier chaque ligne gagnante
    for ligne in lignes_gagnantes:
        if (grille[ligne[0]] == joueur_actuel and 
            grille[ligne[1]] == joueur_actuel and 
            grille[ligne[2]] == joueur_actuel):
            return True
    return False

def nouvelle_partie():
    """Recommencer une nouvelle partie"""
    global joueur_actuel, grille
    
    joueur_actuel = "X"
    grille = [""] * 9
    
    # Vider tous les boutons
    for bouton in boutons:
        bouton.config(text="")
    
    label_info.config(text="Tour du joueur X")

# Créer la fenêtre
fenetre = Tk()
fenetre.title("Morpion")
fenetre.geometry("1000x700")

# Titre
Label(fenetre, text="Morpion", font=("Arial", 24, "bold")).pack(pady=10)

# Cadre pour la grille de jeu
cadre_grille = Frame(fenetre)
cadre_grille.pack(pady=10)

# Créer les 9 boutons de la grille (3x3)
for i in range(9):
    bouton = Button(cadre_grille, text="", width=10, height=5,
                   font=("Arial", 18, "bold"),
                   command=lambda num=i: cliquer_case(num))
    ligne = i // 3  # Calculer la ligne (0, 1, ou 2)
    colonne = i % 3  # Calculer la colonne (0, 1, ou 2)
    bouton.grid(row=ligne, column=colonne, padx=2, pady=2)
    boutons.append(bouton)

# Label pour afficher quel joueur doit jouer
label_info = Label(fenetre, text="Tour du joueur X", font=("Arial", 14))
label_info.pack(pady=10)

# Bouton pour recommencer
Button(fenetre, text="Nouvelle Partie", font=("Arial", 12), 
       bg="lightblue", command=nouvelle_partie).pack(pady=5)

# Lancer la fenêtre
fenetre.mainloop()
`},{type:`file`,name:`NSI_1iere_S8_miniprojet.pdf`,path:`projets/morpion/NSI_1iere_S8_miniprojet.pdf`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/morpion/NSI_1iere_S8_miniprojet.pdf (228169 octets)]`},{type:`file`,name:`README.md`,path:`projets/morpion/README.md`,language:`Markdown`,content:`![python](../../assets/compact_46h.png)

# différentes versions du morpion

- [morpion sans image](/morpion/gabs.py)
- [morpion avec image](/morpion/gabs%20imagée.py)

les assets sont présents directement dans le dossier du projet morpion
`},{type:`file`,name:`rond_200x200.png`,path:`projets/morpion/rond_200x200.png`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/morpion/rond_200x200.png (18756 octets)]`}]},{type:`folder`,name:`space invader`,path:`projets/space invader`,children:[{type:`file`,name:`gabs.py`,path:`projets/space invader/gabs.py`,language:`Python`,content:`# ============================================================================
# FOX INVADERS - Jeu de tir spatial à la poule personne
# ============================================================================

import pyxel
import random

# Initialisation de Pyxel (moteur graphique)
pyxel.init(200, 200, title="Space Invaders", quit_key=pyxel.KEY_F, fps=60)
pyxel.load("kani.pyxres")

# ============================================================================
# VARIABLES DE JEU
# ============================================================================

# Position du joueur
pos_x = 90
pos_y = 160

# Projectiles
projectiles_joueur = []
projectiles_laser = []
projectiles_ennemis = []

# Limites de l'écran
limite_droite = 174
limite_gauche = 10
limite_bas = 220

# Paramètres de mouvement
vitesse = 1
multiplicateur_vitesse = 0.01

# État du joueur
vies = 3
score = 0
meilleur_score = 0
combo = 0
combo_timer = 0
couleur_combo_texte = 7

# Ennemis
ennemis = []
ennemis_max = 4

# Cooldowns des tirs
attente_tir = 0
attente_tir_ennemi = 0

# Explosions
explosions = []
explosions_laser = []
explosions_impact = []

# Sprites du joueur
sprite_joueur_x = 0
sprite_joueur_y = 208

# États du jeu (0: accueil, 1: jeu, 2: mort)
état = 0


# ============================================================================
# AFFICHAGE D'ACCUEIL
# ============================================================================

def afficher_accueil():
    # Affiche l'écran de titre
    pyxel.blt(75, 70, 0, 0, 224, 46, 16)
    pyxel.text(68, 90, "Press E to start", 15)


# ============================================================================
# GESTION DU JOUEUR
# ============================================================================

def maj_position_joueur():
    global pos_x
    # Déplacement vers la droite
    if pyxel.btn(pyxel.KEY_RIGHT) or pyxel.btn(pyxel.KEY_D):
        if pos_x < limite_droite:
            pos_x += vitesse
        pyxel.blt(pos_x, pos_y, 0, sprite_joueur_x, sprite_joueur_y, 16, 16)
    # Déplacement vers la gauche
    elif pyxel.btn(pyxel.KEY_LEFT) or pyxel.btn(pyxel.KEY_Q):
        if pos_x > limite_gauche:
            pos_x -= vitesse
        pyxel.blt(pos_x, pos_y, 0, sprite_joueur_x, sprite_joueur_y, 16, 16)
    # Affichage du joueur immobile
    else:
        pyxel.blt(pos_x, pos_y, 0, sprite_joueur_x, sprite_joueur_y, 16, 16)


def maj_projectiles_joueur():
    global projectiles_joueur
    global attente_tir
    
    # Coordonnées du nouveau projectile
    projectile_x = pos_x + 7
    projectile_y = pos_y
    
    # Création d'un nouveau projectile si touche ESPACE appuyée et cooldown terminé
    if pyxel.btnr(pyxel.KEY_SPACE) and attente_tir == 0:
        projectiles_joueur.append([projectile_x, projectile_y])
        pyxel.play(0, 0)
        attente_tir = 60
    
    # Décompte du cooldown
    if attente_tir > 0:
        attente_tir -= 1
    
    # Mouvement et affichage des projectiles
    for projectile in projectiles_joueur:
        projectile[1] -= 5
        pyxel.rect(projectile[0], projectile[1], 2, 5, 10)


def maj_projectiles_laser():
    global projectiles_laser
    global vitesse
    
    # Coordonnées du laser
    projectile_x = pos_x + 7
    projectile_y = pos_y
    
    # Création de laser si touche R maintenue - augmente aussi la vitesse
    if pyxel.btn(pyxel.KEY_R):
        projectiles_laser.append([projectile_x, projectile_y])
        vitesse = 2
    else:
        vitesse = 1
    
    # Mouvement et affichage des lasers
    for projectile in projectiles_laser:
        projectile[1] -= 5
        pyxel.rect(projectile[0], projectile[1], 2, 5, 8)


# ============================================================================
# GESTION DES ENNEMIS
# ============================================================================

def maj_ennemis():
    # Création de nouveaux ennemis si la limite maximale n'est pas atteinte
    if len(ennemis) < ennemis_max:
        positions_y_occupees = [e[1] for e in ennemis]
        positions_y_libres = [y for y in range(16, 80, 16) if y not in positions_y_occupees]

        # Placement aléatoire d'un nouvel ennemi à une position libre
        if positions_y_libres:
            ennemis.append(
                [pyxel.rndi(10, 174), random.choice(positions_y_libres), random.choice([-1, 1])]
            )

    # Mise à jour de chaque ennemi
    for ennemi in ennemis[:]:
        # Déplacement horizontal
        ennemi[0] += ennemi[2]

        # Inversion de direction aux limites de l'écran
        if ennemi[0] <= limite_gauche or ennemi[0] >= limite_droite:
            ennemi[2] = -ennemi[2]
        
        # Affichage de l'ennemi
        pyxel.blt(ennemi[0], ennemi[1], 0, 0, 176, 16, 16)
        
        # Déplacement vers le bas
        ennemi[1] += multiplicateur_vitesse
        
        # Suppression si l'ennemi dépasse le bas de l'écran
        if ennemi[1] >= limite_bas:
            ennemis.remove(ennemi)


def maj_projectiles_ennemis():
    global projectiles_ennemis, attente_tir_ennemi, ennemis
    
    # Sélection aléatoire d'un ennemi qui tire
    if ennemis:
        tireur = random.choice(ennemis)
        projectile_x = tireur[0] + 7
        projectile_y = tireur[1] + 16
        
        # Création d'un projectile si le cooldown est écoulé
        if attente_tir_ennemi == 0:
            projectiles_ennemis.append([projectile_x, projectile_y])
            pyxel.play(0, 0)
            attente_tir_ennemi = 100
    
    # Décompte du cooldown
    if attente_tir_ennemi > 0:
        attente_tir_ennemi -= 1
    
    # Mouvement et affichage des projectiles ennemis
    for projectile in projectiles_ennemis:
        projectile[1] += 1
        pyxel.blt(projectile[0], projectile[1], 0, 6, 197, 4, 6)


# ============================================================================
# GESTION DES COLLISIONS
# ============================================================================

def verifier_collisions():
    global projectiles_joueur, projectiles_laser, ennemis, score, explosions
    global explosions_laser, projectiles_ennemis, explosions_impact, combo, combo_timer
    global multiplicateur_vitesse, vies

    # Collision entre projectiles normaux et ennemis
    for projectile in projectiles_joueur[:]:
        for ennemi in ennemis[:]:
            if (
                projectile[0] < ennemi[0] + 16
                and projectile[0] + 2 > ennemi[0]
                and projectile[1] < ennemi[1] + 16
                and projectile[1] + 5 > ennemi[1]
            ):
                # Création d'une explosion
                explosions.append([ennemi[0], ennemi[1], 0])
                if projectile in projectiles_joueur:
                    projectiles_joueur.remove(projectile)
                if ennemi in ennemis:
                    ennemis.remove(ennemi)
                pyxel.play(1, 1)
                # Augmentation du combo et score
                combo += 1
                if combo % 10 == 0:
                    multiplicateur_vitesse += 0.1
                combo_timer = 120
                score += 1
                break

    # Collision entre projectiles laser et ennemis (points bonus)
    for projectile_laser in projectiles_laser[:]:
        for ennemi in ennemis[:]:
            if (
                projectile_laser[0] < ennemi[0] + 16
                and projectile_laser[0] + 2 > ennemi[0]
                and projectile_laser[1] < ennemi[1] + 16
                and projectile_laser[1] + 5 > ennemi[1]
            ):
                # Création d'une explosion laser
                explosions_laser.append([ennemi[0], ennemi[1], 0])
                if projectile_laser in projectiles_laser:
                    projectiles_laser.remove(projectile_laser)
                if ennemi in ennemis:
                    ennemis.remove(ennemi)
                pyxel.play(3, 3)
                # Augmentation du combo et score (5 points au lieu de 1)
                combo += 1
                if combo % 10 == 0:
                    multiplicateur_vitesse += 0.1
                combo_timer = 120
                score += 5
                break

    # Collision entre projectiles ennemis et joueur
    for projectile_ennemi in projectiles_ennemis[:]:
        if (
            projectile_ennemi[0] < pos_x + 16
            and projectile_ennemi[0] + 2 > pos_x
            and projectile_ennemi[1] < pos_y + 16
            and projectile_ennemi[1] + 5 > pos_y
        ):
            # Dégâts au joueur
            explosions_impact.append([pos_x, pos_y, 0])
            if projectile_ennemi in projectiles_ennemis:
                projectiles_ennemis.remove(projectile_ennemi)
            pyxel.play(2, 2)
            combo = 0
            vies -= 1
            break

    # Collision directe entre ennemi et joueur
    for ennemi in ennemis[:]:
        if (
            ennemi[0] < pos_x + 16
            and ennemi[0] + 16 > pos_x
            and ennemi[1] < pos_y + 16
            and ennemi[1] + 16 > pos_y
        ):
            # Dégâts au joueur
            explosions_impact.append([pos_x, pos_y, 0])
            if ennemi in ennemis:
                ennemis.remove(ennemi)
            pyxel.play(2, 2)
            combo = 0
            vies -= 1
            break


# ============================================================================
# GESTION DES EXPLOSIONS
# ============================================================================

def afficher_explosions():
    global explosions
    for explosion in explosions[:]:
        frame = explosion[2]
        duree = 60

        # Animation de l'explosion (4 sprites différents)
        if frame < duree:
            sprite_index = frame // 10
            sprite_x = sprite_index * 16
            pyxel.blt(explosion[0], explosion[1], 0, sprite_x, 112, 16, 16)
            explosion[2] += 1
        # Suppression de l'explosion quand l'animation est terminée
        else:
            explosions.remove(explosion)


def afficher_explosions_laser():
    global explosions_laser
    for explosion in explosions_laser[:]:
        frame = explosion[2]
        duree = 60

        # Animation de l'explosion laser
        if frame < duree:
            sprite_index = frame // 5
            sprite_x = sprite_index * 16
            pyxel.blt(explosion[0], explosion[1], 0, sprite_x, 144, 16, 16)
            explosion[2] += 1
        else:
            explosions_laser.remove(explosion)


def afficher_explosions_impact():
    global explosions_impact
    for explosion in explosions_impact[:]:
        frame = explosion[2]
        duree = 60

        # Animation d'impact centrée sur le joueur
        if frame < duree:
            explosion[0] = pos_x
            explosion[1] = pos_y
            sprite_x = 16
            pyxel.blt(explosion[0], explosion[1], 0, sprite_x, 208, 16, 16)
            explosion[2] += 1
        else:
            explosions_impact.remove(explosion)


# ============================================================================
# AFFICHAGE DE L'INTERFACE
# ============================================================================

def afficher_interface():
    global combo_timer, combo, couleur_combo_texte, score, vies, état
    
    # Affichage des vies restantes
    if vies==3:
        pyxel.blt(5,5,0,0,3,20,10)
    elif vies==2:
        pyxel.blt(5,5,0,5,3,20,10)
    elif vies==1:
        pyxel.blt(5,5,0,12,3,20,10)

    # Gestion de la fin de partie
    if vies == 0:
        état = 2
        vies = 3
        score = 0


def afficher_ecran_mort():
    # Affichage du texte Game Over
    pyxel.blt(63, 70, 0, 0, 240, 80, 16)
    pyxel.text(65, 130, "Press E to restart", 10)


def afficher_score():
    # Affichage du score
    pyxel.text(140, 5, "SCORE=" + str(score), 3)


def afficher_meilleur_score():
    global score, meilleur_score, combo, combo_timer, couleur_combo_texte
    
    # Mise à jour du meilleur score
    if meilleur_score >= score:
        pyxel.text(50, 5, "MEILLEUR SCORE=" + str(meilleur_score), 3)
    elif meilleur_score < score:
        meilleur_score = score
        pyxel.text(50, 5, "MEILLEUR SCORE=" + str(meilleur_score), 3)
    
    # Changement de couleur du texte selon le combo (arc-en-ciel)
    if combo < 10:
        couleur_combo_texte = 7  # Blanc
    elif combo < 20:
        couleur_combo_texte = 10  # Jaune
    elif combo < 30:
        couleur_combo_texte = 9  # Orange
    elif combo < 40:
        couleur_combo_texte = 8  # Rouge
    elif combo < 50:
        couleur_combo_texte = 14  # Rose
    else:
        # Animation arc-en-ciel rapide pour les très hauts combos
        couleurs_arc_en_ciel = [8, 9, 10, 11, 12, 13, 14, 15]
        couleur_combo_texte = couleurs_arc_en_ciel[
            (combo // 5) % len(couleurs_arc_en_ciel)
        ]

    # Affichage du score et du combo
    pyxel.text(5, 15, "COMBO=" + str(combo), couleur_combo_texte)

    # Timer du combo
    if combo_timer > 0:
        combo_timer -= 1
    # Réinitialisation du combo si le timer expire
    else:
        combo = 0


# ============================================================================
# BOUCLES PRINCIPALES
# ============================================================================

def mettre_a_jour():
    global état
    
    # État 0: Écran d'accueil
    if état == 0:
        if pyxel.btnp(pyxel.KEY_E):
            état = 1
    # État 1: Jeu en cours
    elif état == 1:
        mettre_a_jour_jeu()
    # État 2: Écran de mort
    elif état == 2:
        if pyxel.btnp(pyxel.KEY_E):
            état = 1


def dessiner():
    global multiplicateur_vitesse
    
    # Effacement de l'écran
    pyxel.cls(0)
    
    # État 0: Écran d'accueil
    if état == 0:
        afficher_accueil()
    # État 1: Jeu en cours
    elif état == 1:
        dessiner_jeu()
    # État 2: Écran de mort
    elif état == 2:
        afficher_ecran_mort()
        ennemis.clear()
        multiplicateur_vitesse = 0.1


def mettre_a_jour_jeu():
    # Mise à jour de tous les objets du jeu
    maj_position_joueur()
    maj_projectiles_joueur()
    maj_projectiles_laser()
    maj_ennemis()
    maj_projectiles_ennemis()
    verifier_collisions()
    afficher_explosions()
    afficher_explosions_laser()
    afficher_explosions_impact()
    afficher_interface()
    afficher_meilleur_score()


def dessiner_jeu():
    # Mise à jour et affichage de tous les objets
    maj_position_joueur()
    maj_projectiles_joueur()
    maj_projectiles_laser()
    maj_ennemis()
    maj_projectiles_ennemis()
    verifier_collisions()
    afficher_explosions()
    afficher_explosions_laser()
    afficher_explosions_impact()
    afficher_score()
    afficher_interface()
    afficher_meilleur_score()


# ============================================================================
# LANCEMENT DU JEU
# ============================================================================
pyxel.run(dessiner, mettre_a_jour)       #Monsieur on sait que les commentaires pourrait faire un peu suspicieux d'utilisation d'ia, mais on peut vous assurer que c'est juste Tristan qui était très déterminé à faire quelque chose de propre.`},{type:`file`,name:`kani.pyxres`,path:`projets/space invader/kani.pyxres`,language:`Text`,content:`PK\0\0\0\b\0\0\0!\0���IL\0\0ŧ\0\0\0\0pyxel_resource.toml�]�n�8���\x07��V��N�ȓ�"�x����3�����T��*Q}�\0:��"Y�W�C<~���ϯ�����Ϸ�_�>����/_^~�����|���o�?V�W����������߾�]}^}��~�_��ܯ6������ǿ%Y7��TH��s�ǈC�ᐵ�����W���\r?�]��G�x��K:�vi{L�,�H��|�#d�,\\5��΋�'\`�m�,�^F=C-�\x07I'0�!~�tF\r �&�\`fa�ã~nT^���\b�b��\x07�o�7c\x1B��P���"���Ӵ���Y��5���Oi�!H|"�,�?�����\\��~I��@��ҧ���r.�,�\v _��e*A_�)Y<���3�\0�'D�'\v%׾T@�E����c$ˁ:�c���#���xZ�u����h� _�\f�&��R�4��C<-�̮���U\`�����)p?_�\f��w%���<�'Du��3{�SsHT!q����P�A
��Cbw�J��,-��m�S�Z^#��\bB��	,m�ݯ���\f��C���[#���ajIgԀQl38ہ�-�7�ӓ�B���n(��9cQ������D�H2@Q=��H{�
�LF�<|#A0�j�
'gK�8�HC�\b0�؊Qg�\x1B�>K�vW�ѿ.����ߒ����J �3ʒ�RET��)��\`\`�QpTF+��+�D��3֨�*S��}�ǎ,��9�k�>?�\fs�L�/(�!�(�dI��\0\f���� *�t�����\r����2Gu�$�6�O����>����E��!2qdt�H@$�9Uq g�?N;\x07�Ed�<4ɠTT"�b�H�ʡ���%���_\fM������|x��k�֐ȩCP�^�� ��)����2{�\`�W7�����(<��#��^�b��+97n9qU����B�Gy�$c�yl㰬�z�_�G,'�S��f��-._��l2����h�|;5c\fv�j*\\V�9�0�x~*lf�8!����\\��"���,�'҃p�'�n��Eq�
���U�%�fT�-�O+��������Rl�no4slS� %�\vH���Ѣ��<M\b	��&DI5a�*�N�r�-1�enlM�D��]Jɜc���P��@vʿlc�ף�ξ�e$bO�Ul�.��Зu�Q!L3�Ξǩr�!;�jvʟJD�r	\r�4��B����:�2\f�\x1B��L��%6��pT��jg���Pg�(�E��#�t��DsS���b�I,	�v��9����\b�r:���eQ�\\2�i�N��0?�G�@.����촚�~!��C���/A(�i�L�u��M\b+b>'!�?\fm�O����	��tqrFQ��Hed�Y�6ka-�cD�:�*eB�����H�>��!�K�́t5#�9N[z�'�Е�gY�ʃ\r$��o�7�7���-��ĻX��~�\0����MKc�O$f~b�YZ��H��"I�rG��9�ܑd�|L�����(Kš�ɦ[{B�&\be
�T$3�0�d�F�'�Q�ij�ѭ��!�cG���<���V]O�\r���byxtċ���1 [�A�~]f���
�ds!������@\vK�&[6�	QRMy�J��\\~KL���UC��Ԉ�9\r�r�3@�:����o��x��J��\`���V�2S\fy�˿�Ѩ��k!X[=G�;؁���\\�GPGa�/tz����0�nĒ3yxW��L��CRy�mk����܏�����fd\x1B1����	�ň�XBYx�'r<VN�vҳ=(Mr�LH��;
�����pk�'��j��p�A�_\b��,�I�2�]4��n*���{�X��>*@)J�cq���!:h�3e1N��i����y��J\x07�-b-Q�Ik��AΚ�g�r�	��I����N�����kJ�T�FI�ӂRJR��Öy׉/�������\x07v\b�ۊcۯ��s[kp
\bJ�f���X,�\b�1|4��^����+�~:�8vk�e��q�t��ʅ�º���kSF�wO:q$CΪ2�ʧll�V[�0m�ш1A����G\`c����Y�=�ٻ��W���7X��Sv�+��_c!X�!�N1���D�b�IM�V'�ɫg$�:��I��	��,��tg�T�5'iF=z���&�.�U
���Tұ�ď��v��䑾�&ŝ�#�#����V��_:U%�m_��b�z�¯�Pǀ�gMB�>R��!��ť�[*��U�Q��B�d����z��=�瘥�*�c9E\\����e�,���%�R���b���#d\\�X~���on�Zx9�SI��\\w��n�\`F韰hd�_�$��F��A�{�h���Q�f�$��v���L���g�%�QL,��������Q"U�b�����~�*o.v_[����\\�}��H����CH���O�X@�����&,<X@[1[aA�B\`��r�
��\v�Al�-bk�
]Y�v�HD��Iv\`??����sj*��~�g�E�,O���%������� �xMOL}l_�#�R��J�Ra���V�XH{�&y#�h�V�\x1B+���2B]BE�u�)Q#LȌ�n�*�б��,z�(j�ΧFu�K���naJ궯��>��r򧁒�B����Y�#������M��\x1Bo;�����v\x1BrQ�6�2Z�\0�3�����3�ͦ-�}5�6�Y�S����v�x*�\\�B�\0����c��0�p���g:������~d>:��!^�"W�$\\C�_����V:U�\x07"إb	B�������7���VD���\f��C�mb���\v34�1�+U��4џ><L��T���zX\\F}*�R��>\r�cʖf\rٱfOO����aD��J�.��{�l��k��}詣���
_����30ZA�z��K_\x1Bݿ8��2���� #:���C2\\&���ϢO���sG����\`�X#���K��P1t8j�U\r�שc�~���F�Bbq��\v���[{s��b����\\� #=�r<[̲��Ϻר�� �l<'e��rV.��sp�@�iP��lU?�MY��X��PZ��vW\v8����Y\0��\x07cT�����V1vZ$I46��ղw����$T>SFOA�\0��+%�s&��	G�l3jK�V�(X�>���u�v�\0��_���x�T%���&��J8Os���\r\0h%�P�'�|�/!\x07���P�A>]F��)\r8(�i��~��FZ�}k�,U��ݔ����Y��\\o�M����Z��rE��s�1b��ȸ�\f!��U��(vM��^�7)/ �Z� �>ӟ�t9�%2¦�������@�V�)}|�Pf9�*��O����)�U"��ܸ�\\��jEac]�\f�Wd��ˣ�rđ
W����ݗ/�?�~y{~������ϫ�vw��������o_߿�>���Q�v�J��t�\vVY[	i����\x1B���-Q�^�����u��m&<g��+�>�	�W\v��\fj�~+���̃�6u���dwII�I�A���]�qd����hkg���˪��NX�!���ӟ>�>�^�nh	��\x1B�cd�]nY8�ش�>���er��j�;��&��h��/Ջ�3�����_�@\0�\bB��R:u��\b��_��C����*7�TI�6��ʾ6؂/�e�T�����\bG�y��ȧNsj�IO����i���e	�[\x1B�}K>�����H���0���sŢ��2Q�k�b�K\x1B�-����
��0���锭�n�R�V��(�RG/�}ו}.+��*<�����ƋQ���%�s��/��(��Y|�V�NYkBaU\fE�PN��2�@�;��f��\x1B���PF������}��k����	5�Z�M깩Y���\x07�=�_��A�O��/\x07��Q����H����Ϙ4IRuҌ	��>L5�\x1B�F�9ܶY2�]�7�j��c7/� Juz!\x1B���
Y�?t�箔M�97�嘷�-�a�
��K��<z���<\`���5}b�u��0�l��|�N0�%h}z����O2\\�\x1Bv�7J]ih**�R"��b��n��?{-�4ȝ��OlD�eY���̨sr��rK!.$����c�|�c1�
q;$gla�2<'���kO�f��d,6�_�\`Ե�rN\b��"7ٞ*�׆n�\v\x1B�5��ax6��C�La�2��htS��C�
X��(6)j��9*����� �T}f3͆��y��#G����&��G�.�Y��'*�ka&�ҩ̪�y0�$�'�o��\fSW��;q?
��F	ơ�På;AJ���h�y�n��1VۨN\v������1祮iT^T��wc8Z,�����47Ӄ�LxG�ј_�q��r�;Iyzg'��4���K�N�0'E �KeƂv���i\x1B5S�5S��o���s~�c5��S�����,��Ĥ-e�v��Y��̈́��΀�V��>�Ek�b��	���.#>@Q����SvmԊ�H�\0�"���)u"F�:�a��2��G�P�C��(�����ʫ5���f�@
@����(!�L黃ϨT�R�J.��s�ν�w\0���i�F�H����R���[�UQb�"�2]����V�m/�\0�/\x07���b��u�#�!v'����\`�NtMSC��l��T��z>�&��9�7]�ʎF�Jk���RLE��3��i�z���)3\x1B
�h��ZgҪneV��Vɹ]3�R�V�'Ѫ>�j~K�;�j�x��J�=�@�d)���ğ�\vx��tQ9��5��y�N|&�*J�Z&��z��+_"���Q);t�}v~	��\039�JxFhٙU�}��7ziu�\b\x07_C��E��3��J�ݍ\\�N��\vA�bQ�����u2\b�L"���}\0�\fɣ�ԍR2��(ʄ�\vY��j�צ��
'�5Y�A�HZɕ�Ԩdt$�Vᔩ��y1r"��6��1��)�L;}U���\\C�ck��\f�w�=�'�\fG�}̤���n�#p:�1�\x07��֏��=��������C����1l��r�\x07���%kkV�Ҹ%�\f�Ҷr<\\\fdϿ�\f�r��b*�
�{��cwU8�I�2plOuD��?��2��[T9H+�*����}�J�2\v/�L�&��٪W�2~H�æ�
a��֨R����#@�,�R\`��Y�0��xF����4=;\v��Kdߕ#Piu��Jo-��*�Һj��:��ݑ;6�\x07��}\v��9
(+��\x07>#qFh���{��\0�0��9���Lb���0��\v��s�BgZ<|
�phFjZ���D¡҄Y�^m��إ�fh��1�8��5m��.d�s�f\bşqՇ�xm���+���j �����\x1B�\x07,ׁst�8�Y�\b���<��-N�cy�y.�mL�N�\\�bp�/�O�)���)6�L�P�@�F�QH��K���pD��d�	�~bmB�Ȥ͊H���5��+W��@���[\fo��뿏�j/���{��R���B��/+��[��������j/���ۛn墤۹���?��A˚R�{Nh�'\x1B(i}��/�I#i"w��2~����a�����\v�OԹ���@���\r��]�|v��ۇ�����ڤ��˵2!\x07�
�����,؟�PHjE��p3���s�NA��O��eJ%DQ�n>0�7]�� ȉ\bs���-]��e�ـ�nMl\x1Bt�\x1BV�aEJ���/�L^h��Yͣ�ry��R�uB�5����SN1��	܉^�rS��9��&�/���.��%-W�$Z�K�"%7{�+R"5����K�(l�"E�ù�H	Օkk�*mD1D�rQ��_��cx��R��\0�[թ�����7��Z\f2��C�t�)���qxN3\`_���31nOO\\ :a.՘f��;��Ývǧ߆ub7KUG\x07H��GT~ΰ�����1|Efr�}�\rʣB�5!�a�j���M���]�e���=Zح���R"K����Q�"�B�t6�G\x07<!���9Xu�=w��3�7W�iⳘ	;�\b��N;'���
!1�����t؍�}�>��aO�ͭ�3���߁	!}
cΥ^9���L��r����8��_M���	�=)�[���HO0�s�Y{g��:��5��Hl"{�6�w&3=��Lm\`��dA�̤?O�\b)o� �s=��3����L۹��\`|
���ʅ_X�+\\�+�Y���5�$��m˟j�6�~*���s�N]�-�h�Қ�1~:3a�/79��\r��]Ns��3%���C�XV
7�2�:�U��9'������uv�+����R��as���\fOD��L��T�������6���������M4��w��J����f�W�Z������M���J׹��N��)fr~/}��!$�u�"�����=�2��L�$VELiS�;6�R����9\bT�;EߙݣB���Hq]��@�M��e��:Y(�u8A�W��[ggfn3y�O.N�u��Q?��,��&0��d�MM2�X��n2�v���N���r٥[]0�D3=D��M���	�ҳK,�ْ�ģ]:Ջ�����n77�I\b�R!�=H�8T�ϚȰ�@v����Y�;}�Bȟ���<ǂy�1�<�-:x���Y�?	�0;������/?��G�������?[}^�ᅅK�kV�ۯ���v��ǯ���Û�Cp;\0��shg��˳��_�ě绿�����_�w/���������^^��>�v|M��A�W��5m@�r�U�7k���!���W��������q{�z�ܯ]�]����~�.��Fd>ƪ��P��P�#��\x07���dR�A.�b�,�Y�a	K]Z���\\zK7i�B.��ḛ���A�2�~��/�����o�b�^��A0|���3N��e<�?PK\0\0\0\b\0\0\0!\0���IL\0\0ŧ\0\0\0\0\0\0\0\0\0\0\0\0��\0\0\0\0pyxel_resource.tomlPK\0\0\0\0\0\0A\0\0\0}\0\0\0\0`},{type:`file`,name:`PROJET ENVAHISSEUR.docx`,path:`projets/space invader/PROJET ENVAHISSEUR.docx`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: projets/space invader/PROJET ENVAHISSEUR.docx (215343 octets)]`},{type:`file`,name:`README.md`,path:`projets/space invader/README.md`,language:`Markdown`,content:`![pyxel](../../assets/pyxel.png)

# space invader / スペースインベーダー

Ce projet est un jeu type space invader basé sur la bibliothèque Pyxel et les textures [Kanixian](https://github.com/Hiekichi/Kanixian).

このプロジェクトはPyxelライブラリと[Kanixian](https://github.com/Hiekichi/Kanixian)テクスチャに基づくスペースインベーダータイプのゲームです。
`}]},{type:`file`,name:`README.md`,path:`projets/README.md`,language:`Markdown`,content:`# liste des projets

- [morpion](./morpion/)
- [space invader](./space%20invader/)
- [marmotte](./marmotte/)
`}]},{type:`folder`,name:`séance 7`,path:`séance 7`,children:[{type:`file`,name:`iris.csv`,path:`séance 7/iris.csv`,language:`Text`,content:`petal_length,petal_width,species
1.4,0.2,0
1.4,0.2,0
1.3,0.2,0
1.5,0.2,0
1.4,0.2,0
1.7,0.4,0
1.4,0.3,0
1.5,0.2,0
1.4,0.2,0
1.5,0.1,0
1.5,0.2,0
1.6,0.2,0
1.4,0.1,0
1.1,0.1,0
1.2,0.2,0
1.5,0.4,0
1.3,0.4,0
1.4,0.3,0
1.7,0.3,0
1.5,0.3,0
1.7,0.2,0
1.5,0.4,0
1.0,0.2,0
1.7,0.5,0
1.9,0.2,0
1.6,0.2,0
1.6,0.4,0
1.5,0.2,0
1.4,0.2,0
1.6,0.2,0
1.6,0.2,0
1.5,0.4,0
1.5,0.1,0
1.4,0.2,0
1.5,0.1,0
1.2,0.2,0
1.3,0.2,0
1.5,0.1,0
1.3,0.2,0
1.5,0.2,0
1.3,0.3,0
1.3,0.3,0
1.3,0.2,0
1.6,0.6,0
1.9,0.4,0
1.4,0.3,0
1.6,0.2,0
1.4,0.2,0
1.5,0.2,0
1.4,0.2,0
4.7,1.4,1
4.5,1.5,1
4.9,1.5,1
4.0,1.3,1
4.6,1.5,1
4.5,1.3,1
4.7,1.6,1
3.3,1.0,1
4.6,1.3,1
3.9,1.4,1
3.5,1.0,1
4.2,1.5,1
4.0,1.0,1
4.7,1.4,1
3.6,1.3,1
4.4,1.4,1
4.5,1.5,1
4.1,1.0,1
4.5,1.5,1
3.9,1.1,1
4.8,1.8,1
4.0,1.3,1
4.9,1.5,1
4.7,1.2,1
4.3,1.3,1
4.4,1.4,1
4.8,1.4,1
5.0,1.7,1
4.5,1.5,1
3.5,1.0,1
3.8,1.1,1
3.7,1.0,1
3.9,1.2,1
5.1,1.6,1
4.5,1.5,1
4.5,1.6,1
4.7,1.5,1
4.4,1.3,1
4.1,1.3,1
4.0,1.3,1
4.4,1.2,1
4.6,1.4,1
4.0,1.2,1
3.3,1.0,1
4.2,1.3,1
4.2,1.2,1
4.2,1.3,1
4.3,1.3,1
3.0,1.1,1
4.1,1.3,1
6.0,2.5,2
5.1,1.9,2
5.9,2.1,2
5.6,1.8,2
5.8,2.2,2
6.6,2.1,2
4.5,1.7,2
6.3,1.8,2
5.8,1.8,2
6.1,2.5,2
5.1,2.0,2
5.3,1.9,2
5.5,2.1,2
5.0,2.0,2
5.1,2.4,2
5.3,2.3,2
5.5,1.8,2
6.7,2.2,2
6.9,2.3,2
5.0,1.5,2
5.7,2.3,2
4.9,2.0,2
6.7,2.0,2
4.9,1.8,2
5.7,2.1,2
6.0,1.8,2
4.8,1.8,2
4.9,1.8,2
5.6,2.1,2
5.8,1.6,2
6.1,1.9,2
6.4,2.0,2
5.6,2.2,2
5.1,1.5,2
5.6,1.4,2
6.1,2.3,2
5.6,2.4,2
5.5,1.8,2
4.8,1.8,2
5.4,2.1,2
5.6,2.4,2
5.1,2.3,2
5.1,1.9,2
5.9,2.3,2
5.7,2.5,2
5.2,2.3,2
5.0,1.9,2
5.2,2.0,2
5.4,2.3,2
5.1,1.8,2
`},{type:`file`,name:`KNN.py`,path:`séance 7/KNN.py`,language:`Python`,content:`import pandas
import matplotlib.pyplot as plt
from sklearn.neighbors import KNeighborsClassifier
iris=pandas.read_csv("iris.csv")
x=iris.loc[:,"petal_length"]  
y=iris.loc[:,"petal_width"]  
lab=iris.loc[:,"species"]  
plt.scatter(x[lab == 0], y[lab == 0], color='g', label='setosa')  
plt.scatter(x[lab == 1], y[lab == 1], color='r', label='virginica')  
plt.scatter(x[lab == 2], y[lab == 2], color='b', label='versicolor')  
plt.scatter(2.5, 0.75, color='k')
plt.legend()  
d=list(zip(x,y))
k=2
model=KNeighborsClassifier(n_neighbors=k)
model.fit(d,lab)

longueur=2.5
largeur=0.75
prediction=model.predict([[longueur,largeur]])
#Affichage résultats 
txt="Résultat : " 
if prediction[0]==0: 
  txt=txt+"setosa" 
if prediction[0]==1: 
  txt=txt+"virginica" 
if prediction[0]==2: 
  txt=txt+"versicolor" 
plt.text(3,0.5,"largeur : {0} cm, longueur : {1} cm.".format(largeur,longueur),fontsize=12) 
plt.text(3,0.3, "k : {0}".format(k), fontsize=12) 
plt.text(3,0.1, txt, fontsize=12) 
#fin affichage résultats
plt.show()`},{type:`file`,name:`NSI_1iere_S7.pdf`,path:`séance 7/NSI_1iere_S7.pdf`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: séance 7/NSI_1iere_S7.pdf (433442 octets)]`},{type:`file`,name:`README.md`,path:`séance 7/README.md`,language:`Markdown`,content:`# KNN

jsp à quoi ce truc sert mais en tout cas c'est fleuri

## dépendances

\`\`\`
pip install matplotlib scikit-learn pandas
\`\`\`
`}]},{type:`folder`,name:`séance 8`,path:`séance 8`,children:[{type:`folder`,name:`1. première application`,path:`séance 8/1. première application`,children:[{type:`file`,name:`bot ver.py`,path:`séance 8/1. première application/bot ver.py`,language:`Python`,content:`from tkinter import *
import webbrowser
window=Tk()
window.title("Mon Application")
window.geometry("800x800")
window.minsize(400,300)
window.config(background="#0050FF")
frame=Frame(window,bg="#0050FF",bd=1,relief=SUNKEN)
frame2=Frame(window,bg="#6E6E6E",bd=1,relief=SUNKEN)
frame.pack(side=TOP)
frame2.pack(expand=YES)
label_titre=Label(frame,text="Première application",font=("Courrier",40),bg="#0050FF",fg="white")
label_titre.pack(side=TOP)
label_sous_titre=Label(frame2,text="Bonjour tout le monde",font=("Courrier",20),bg="#0050FF",fg="white")
label_sous_titre.pack(side=TOP)

def ouvrir_nsi():
    webbrowser.open_new("http://gisele.bareux.free.fr/NSI1.htm")
bouton_nsi=Button(frame2,text="NSI",font=("Courrier",20),bg="#0050FF",fg="white",command=ouvrir_nsi)
bouton_nsi.pack(pady=50,fill=X,padx=50)

window.mainloop()`},{type:`file`,name:`chiyo ver.py`,path:`séance 8/1. première application/chiyo ver.py`,language:`Python`,content:`from tkinter import *
import webbrowser
from PIL import Image, ImageTk
window=Tk()
window.title("Mon Application")
window.geometry("800x800")
window.minsize(400,300)
window.config(background="#0050FF")
frame=Frame(window,bg="#0050FF",bd=1,relief=SUNKEN)
frame2=Frame(window,bg="#6E6E6E",bd=1,relief=SUNKEN)
frame.pack(side=TOP)
frame2.pack(expand=YES)
label_titre=Label(frame,text="Première application",font=("Courrier",40),bg="#0050FF",fg="white")
label_titre.pack(side=TOP)
label_sous_titre=Label(frame2,text="Bonjour tout le monde",font=("Courrier",20),bg="#0050FF",fg="white")
label_sous_titre.pack(side=TOP)
image=Image.open("ouii.jpg")
photo=ImageTk.PhotoImage(image)
label_img=Label(frame2,image=photo,bg="#6E6E6E")
label_img.pack()


def ouvrir_nsi():
    webbrowser.open_new("http://gisele.bareux.free.fr/NSI1.htm")
bouton_nsi=Button(frame2,text="NSI",font=("Courrier",20),bg="#0050FF",fg="white",command=ouvrir_nsi)
bouton_nsi.pack(pady=50,fill=X,padx=50)

window.mainloop()`},{type:`file`,name:`ouii.jpg`,path:`séance 8/1. première application/ouii.jpg`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: séance 8/1. première application/ouii.jpg (50050 octets)]`},{type:`file`,name:`README.md`,path:`séance 8/1. première application/README.md`,language:`Markdown`,content:`# 1. première application

- [bot ver](/séance%208/1.%20première%20application/bot%20ver.py)
- [chiyo ver](/séance%208/1.%20première%20application/chiyo%20ver.py)
- [sac-a-dos](/séance%208/1.%20première%20application/sac-a-dos.py) (inutile ?)
`},{type:`file`,name:`sac-a-dos.py`,path:`séance 8/1. première application/sac-a-dos.py`,language:`Python`,content:`# Créé par csieg, le 28/11/2025 en Python 3.7
# Créé par csieg, le 21/11/2025 en Python 3.7

Valeurs=[[4,6],[6,7],[8,13],[12,16]] #declaration des objets


rapport=[]            # calcul des différent coefficient valeur /poids
for element in Valeurs:
    rapport.append(element[1]/element[0])
print(rapport)
ordre=[n for n in rapport] # copy de la liste rapport dans la liste ordre
rapport.sort()           #on a trie du + petit au + grand

rapport.reverse()        #on a maintenant la liste rapport classée du + grand au plus petit
                         #le classement ma faire perdre l'ordre des objets
                         #exemple le premier coeff ne correspond plus au premier objet de la
                         #liste Valeurs mais au 3eme d'indice 2
# on cherche a savoir maintenant en créant un tableau indice l'indice de la valeur
#qui corrspond a chaque coefficient classe du tableau rapport
indices=[]
for i in range(0,len(rapport)):# on veut lire chaque element des coefficient rapport qui sont classés
     for j in range(0,len(ordre)):#on veut lire chaque element des element rapport non classé
        if rapport[i]==ordre[j]: #pour retouver la poisiton d'origine des elements de la liste
            indices.append(j)

# La liste indice contient respectivement l'indice des element les plus interressant au moins interessant
print("valeurs",Valeurs)
print("rapport",rapport)
print("indice",indices)
`}]},{type:`folder`,name:`2. générateur de mot de passe`,path:`séance 8/2. générateur de mot de passe`,children:[{type:`file`,name:`login.png`,path:`séance 8/2. générateur de mot de passe/login.png`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: séance 8/2. générateur de mot de passe/login.png (17969 octets)]`},{type:`file`,name:`mdp.py`,path:`séance 8/2. générateur de mot de passe/mdp.py`,language:`Python`,content:`from tkinter import *
from string import *
from random import *
import tkinter as tk
from tkinter import ttk
import sv_ttk
import pywinstyles, sys

window = Tk()
window.title("Générateur de mot de passe")
window.geometry("720x480")

sv_ttk.set_theme("dark")

def apply_theme_to_titlebar(window):
    version = sys.getwindowsversion()

    if version.major == 10 and version.build >= 22000:
        # Set the title bar color to the background color on Windows 11 for better appearance
        pywinstyles.change_header_color(window, "#1c1c1c" if sv_ttk.get_theme() == "dark" else "#fafafa")
    elif version.major == 10:
        pywinstyles.apply_style(window, "dark" if sv_ttk.get_theme() == "dark" else "normal")

        # A hacky way to update the title bar's color on Windows 10 (it doesn't update instantly like on Windows 11)
        window.wm_attributes("-alpha", 0.99)
        window.wm_attributes("-alpha", 1)

apply_theme_to_titlebar(window)

def generer_mdp():
    mdp_mini = 6
    mdp_maxi = 12
    c_a = ascii_letters + punctuation + digits
    mdp = "".join(choice(c_a) for _ in range(randint(mdp_mini, mdp_maxi)))
    champ_mdp.delete(0, END)
    champ_mdp.insert(0, mdp)

frame = Frame(window, padx=20, pady=20)
largeur = 300
longueur = 300

image = PhotoImage(file="séance 8\\\\2. générateur de mot de passe\\\\login.png").zoom(1).subsample(3)
canvas = Canvas(frame, width=largeur, height=longueur, bd=0, highlightthickness=0)
canvas.create_image(largeur/2, longueur/2, image=image)
canvas.grid(row=0, column=0)

frame_d = Frame(frame, padx=20, pady=20)

# Style titre
style = ttk.Style()
style.configure("Titre.TLabel", font=("Rubik", 24, "bold")) 
titre = ttk.Label(frame_d, text="Mot de passe", style="Titre.TLabel")
titre.pack()

# Style saisie
style.configure("Entry.TEntry", font=("Rubik", 18)) 
champ_mdp = ttk.Entry(frame_d, style="Entry.TEntry")
champ_mdp.pack()

# Style bouton
style.configure("Bouton.TButton", font=("Rubik", 16, "italic"))
BP_mdp = ttk.Button(frame_d, text="Générer le mot de passe", style="Bouton.TButton", command=generer_mdp)
BP_mdp.pack(fill=X, pady=20)

frame_d.grid(row=0, column=1)
frame.pack(expand=YES)

menu_barre = Menu(window)
menu_fichier = Menu(menu_barre, tearoff=0)
menu_fichier.add_command(label="Nouveau", command=generer_mdp)
menu_fichier.add_command(label="Quitter", command=window.quit)
menu_barre.add_cascade(label="Fichier", menu=menu_fichier)
window.config(menu=menu_barre)

window.mainloop()`},{type:`file`,name:`README.md`,path:`séance 8/2. générateur de mot de passe/README.md`,language:`Markdown`,content:`# 2. générateur de mot de passe

- [mdp](/séance%208/2.%20générateur%20de%20mot%20de%20passe/mdp.py)
`}]},{type:`folder`,name:`exercices`,path:`séance 8/exercices`,children:[{type:`file`,name:`exercice 1.py`,path:`séance 8/exercices/exercice 1.py`,language:`Python`,content:`import tkinter as tk
from tkinter import *

window=Tk()
window.title("Exo1")
window.geometry("300x100")

Frame=Frame(window,bg="white")
Frame.pack()
Label=Label(Frame,text="Bonjour tout le monde")
Label.pack()
Button=Button(Frame,text="Quitter",command=quit)
Button.pack()
window.mainloop()`},{type:`file`,name:`exercice 2.py`,path:`séance 8/exercices/exercice 2.py`,language:`Python`,content:`from tkinter import *
from random import *

def NouveauLance():
    nb=randint(1,6)
    Texte.set("Résultats : "+str(nb))

window=Tk()
window.title("Exo2")
window.geometry("200x100")
window.config(bg="white")

BoutonLancer=Button(window,text="Lancer le dé",command=NouveauLance)
BoutonLancer.pack()

Texte=StringVar()
NouveauLance()

LabelResultat=Label(window,textvariable=Texte,bg="white")
LabelResultat.pack(padx=0,pady=0)

BoutonQuitter=Button(window,text="Quitter",command=quit)
BoutonQuitter.pack(padx=15,pady=5)

window.mainloop()`},{type:`file`,name:`exercice 3.py`,path:`séance 8/exercices/exercice 3.py`,language:`Python`,content:`from tkinter import *

window=Tk()
window.title("Exo3")
window.geometry("300x100")

def carre():
    Resultat.set("Carré ="+str(float(Valeur.get())**2))

Valeur=StringVar()
Valeur.set(5.0)

boite=Spinbox(window,from_=0.0,to=100.0,increment=0.5,textvariable=Valeur,width=5,command=carre)
boite.place(x=100,y=0)

Resultat=StringVar()
carre()
Resultatat=Label(window,textvariable=Resultat)
Resultatat.place(x=100,y=30)

window.mainloop()`},{type:`file`,name:`exercice 4.py`,path:`séance 8/exercices/exercice 4.py`,language:`Python`,content:`from tkinter import *

def plus():
    Valeur.set(str(int(Valeur.get())+10))
def moins():
    Valeur.set(str(int(Valeur.get())-10))

window= Tk()
window.title("Exo 4") #titre de la fenêtre
window.geometry("400x200") #dimensions de la fenêtre
window.config(bg='white') #couleur du fond en RGB en hexadécimal
Valeur=StringVar()
Valeur.set(50)
echelle = Scale(window,from_=-100,to=100,resolution=10,orient=HORIZONTAL,length=300,
width=20, tickinterval=20, label="Curseur",variable=Valeur)

echelle.pack(padx=10,pady=10)
BP_plus=Button(window,text="+",command=plus)
BP_plus.pack(padx=0,pady=0)
BP_moins=Button(window,text="-",command=moins)
BP_moins.pack(padx=10,pady=10)
window.mainloop()`},{type:`file`,name:`exercice 5.py`,path:`séance 8/exercices/exercice 5.py`,language:`Python`,content:`from tkinter import *
from random import *

def nl():
    NbDes=int(Valeur.get())
    resultat=""
    total=0
    max=int(nfd.get())
    for i in range(0,NbDes):
        nb=randint(1,max)
        total=total+nb
        resultat=resultat+str(nb)
        if i<NbDes-1:
            resultat=resultat+', '
    Texte.set('Résultat -> '+resultat+' = '+str(total))
window=Tk()
window.title("Exo5")
window.geometry("200x200")
window.config(background="black")

Frame1 = Frame(window,borderwidth=2,relief=GROOVE)
Frame1.pack(side=LEFT,padx=10,pady=10)

Frame2 = Frame(window,borderwidth=2,relief=GROOVE,width=400)
Frame2.pack(side=LEFT,padx=10,pady=10)

Label(Frame1,text="Choix du nombre de dés :").pack(padx=10,pady=10)
Valeur=StringVar()
Valeur.set(3.0)

boite=Spinbox(Frame1,from_=1,to=6,increment=1,textvariable=Valeur,width=5)
boite.pack(padx=30,pady=10)

nfd=StringVar()
echelle=Scale(Frame1,from_=6,to=20,resolution=1,orient=HORIZONTAL,length=200,width=20,label="Choix du nombre de faces de dés",tickinterval=20,variable=nfd)
echelle.pack(padx=10,pady=10)

Texte=StringVar()
nl()
LabelResultat=Label(Frame2,textvariable=Texte,fg='red',background="black")
LabelResultat.pack(side=TOP,padx=60,pady=35)
BoutonL=Button(Frame2,text='Lancer',command=nl)
BoutonL.pack(side=LEFT,padx=15,pady=15)
BoutonQ=Button(Frame2,text='Quitter',command=quit)
BoutonQ.pack(side=RIGHT,padx=15,pady=33)

window.mainloop()`},{type:`file`,name:`exercice 6.py`,path:`séance 8/exercices/exercice 6.py`,language:`Python`,content:`from tkinter import *
from string import *
from random import *
import tkinter as tk
from tkinter import ttk
import sv_ttk
import pywinstyles, sys

window=Tk()
window.title("Exo6")
window.geometry("500x400")
window.config(background="black")

sv_ttk.set_theme('dark')
style = ttk.Style()

def apply_theme_to_titlebar(window):
    version = sys.getwindowsversion()

    if version.major == 10 and version.build >= 22000:
        # Set the title bar color to the background color on Windows 11 for better appearance
        pywinstyles.change_header_color(window, "#1c1c1c" if sv_ttk.get_theme() == "dark" else "#fafafa")
    elif version.major == 10:
        pywinstyles.apply_style(window, "dark" if sv_ttk.get_theme() == "dark" else "normal")

        # A hacky way to update the title bar's color on Windows 10 (it doesn't update instantly like on Windows 11)
        window.wm_attributes("-alpha", 0.99)
        window.wm_attributes("-alpha", 1)

apply_theme_to_titlebar(window)


def cercle():
    r=20
    x=randint(r,l-r)
    y=randint(r,h-r)
    Canvas.create_oval(x-r,y-r,x+r,y+r,outline='beige',fill='#fafafa')

def effacer():
    Canvas.delete(ALL)

l=480
h=320
Canvas=Canvas(window,width=l,height=h,bg="black")
Canvas.pack(padx=5,pady=5)

style.configure("button.TButton", font=("Rubik", 16))
go=ttk.Button(window,text="Go",command=cercle,style="button.TButton")
go.pack(side=LEFT,padx=10,pady=10,fill=X)

effacer=ttk.Button(window,text='Effacer',command=effacer)
effacer.pack(side=LEFT,ipadx=15,pady=5)

quitter=ttk.Button(window,text='Quitter',command=quit)
quitter.pack(side=RIGHT,padx=5)

window.mainloop()`},{type:`file`,name:`exercice 7.py`,path:`séance 8/exercices/exercice 7.py`,language:`Python`,content:`from tkinter import *
from time import *

def h():
    heure.set(strftime('%H:%M:%S'))
    window.after(1000,h)

window=Tk()
window.title=("Exo7")
window.geometry("200x50")
window.config(background='#1C1C1C')

heure = StringVar()
aff_h=Label(window,font=('Rubik',20,),bg="#1C1C1C",fg='white',textvariable=heure)
aff_h.pack(ipadx=50,ipady=50)
h()
window.mainloop()`},{type:`file`,name:`exercice 8.py`,path:`séance 8/exercices/exercice 8.py`,language:`Python`,content:`from tkinter import *
from string import *
from random import *
import tkinter as tk
from tkinter import ttk
import sv_ttk
import pywinstyles, sys
tempo=20

window=Tk()
window.title("Exo8")
window.geometry("500x400")
window.config(background="black")

sv_ttk.set_theme('dark')
style = ttk.Style()

def apply_theme_to_titlebar(window):
    version = sys.getwindowsversion()

    if version.major == 10 and version.build >= 22000:
        # Set the title bar color to the background color on Windows 11 for better appearance
        pywinstyles.change_header_color(window, "#1c1c1c" if sv_ttk.get_theme() == "dark" else "#fafafa")
    elif version.major == 10:
        pywinstyles.apply_style(window, "dark" if sv_ttk.get_theme() == "dark" else "normal")

        # A hacky way to update the title bar's color on Windows 10 (it doesn't update instantly like on Windows 11)
        window.wm_attributes("-alpha", 0.99)
        window.wm_attributes("-alpha", 1)

apply_theme_to_titlebar(window)

def cercle():
    global x,y,depx,depy,tempo
    r=20
    x=x+depx
    y=y+depy
    if x>l-r or y<r:
        depx=-depx
    if y>h-r or y<r:
        depy=-depy
    effacer()
    Canvas.create_oval(x-r,y-r,x+r,y+r,outline='brown',fill='#fafafa')
    window.after(tempo,cercle)

def effacer():
    Canvas.delete(ALL)

l=480
h=320
x=int(l/2)
y=int(h/2)
depx=randint(1,5)
depy=randint(1,5)
Canvas=Canvas(window,width=l,height=h,bg="#1C1C1C")
Canvas.pack(padx=5,pady=5)

def fast():
    global tempo
    if tempo>5:
        tempo=tempo-5
    else:
        tempo=5
def slow():
    global tempo
    tempo=tempo+5

style.configure("button.TButton", font=("Rubik", 10))
go=ttk.Button(window,text="Go",command=cercle,style="button.TButton")
go.pack(side=LEFT,fill=X)

fast=ttk.Button(window,text="Plus vite",command=fast,style="button.TButton")
fast.pack(side=LEFT,fill=X)

slow=ttk.Button(window,text="Plus doucement",command=slow,style="button.TButton")
slow.pack(side=LEFT,fill=X)

window.mainloop()`},{type:`file`,name:`README.md`,path:`séance 8/exercices/README.md`,language:`Markdown`,content:`# exercices

- [exercice 1](/séance%208/exercices/exercice%201.py)
- [exercice 2](/séance%208/exercices/exercice%202.py)
- [exercice 3](/séance%208/exercices/exercice%203.py)
- [exercice 4](/séance%208/exercices/exercice%204.py)
- [exercice 5](/séance%208/exercices/exercice%205.py)
- [exercice 6](/séance%208/exercices/exercice%206.py)
- [exercice 7](/séance%208/exercices/exercice%207.py)
- [exercice 8](/séance%208/exercices/exercice%208.py)
`}]},{type:`file`,name:`NSI_1iere_S8.pdf`,path:`séance 8/NSI_1iere_S8.pdf`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: séance 8/NSI_1iere_S8.pdf (132833 octets)]`},{type:`file`,name:`README.md`,path:`séance 8/README.md`,language:`Markdown`,content:`![sakurajimamamai](https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/2163af2a3a3f08237ba79cf7d59c7a72d4e849da/Python/mai_sakurajima_holding_python_programming_3in1_book.png) ![pillow](../assets/pillow.png) ![python](../assets/compact_46h.png)

# séance 8

1. [première application](/séance%208/1.%20première%20application/)
2. [générateur de mot de passe](/séance%208/2.%20générateur%20de%20mot%20de%20passe/)
3. [exercice](/séance%208/exercices/)

# dépendances

pillow :

\`\`\`
pip install pillow
\`\`\`
`}]},{type:`folder`,name:`séance 9`,path:`séance 9`,children:[{type:`folder`,name:`exercices`,path:`séance 9/exercices`,children:[{type:`file`,name:`carre_couleur.py`,path:`séance 9/exercices/carre_couleur.py`,language:`Python`,content:`import pyxel

liste_couleurs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

couleur = 0

def carre():
    x = 50
    y = 50
    pyxel.rect(x, y, 50, 50, liste_couleurs[couleur])

def update():
    global couleur
    
    if pyxel.btnp(pyxel.MOUSE_BUTTON_RIGHT):
        couleur = (couleur + 1) % len(liste_couleurs)
    
    if pyxel.btnp(pyxel.MOUSE_BUTTON_LEFT):
        couleur = (couleur - 1) % len(liste_couleurs)

def draw():
    pyxel.cls(0)
    carre()

pyxel.init(400, 300)
pyxel.run(update, draw)`},{type:`file`,name:`carre.py`,path:`séance 9/exercices/carre.py`,language:`Python`,content:`import pyxel

posx=10
posy=10

def move():
    global posx,posy
    if pyxel.btn(pyxel.KEY_RIGHT):
        posx+=1
    if pyxel.btn(pyxel.KEY_LEFT):
        posx-=1
    if pyxel.btn(pyxel.KEY_UP):
        posy-=1
    if pyxel.btn(pyxel.KEY_DOWN):
        posy+=1
    if posx>180:
        posx=180
    if posx<0:
        posx=0
    if posy>180:
        posy=180
    if posy<0:
        posy=0

def carre():
    pyxel.rect(posx, posy, 20, 20, 1)

pyxel.init(200, 200)

def draw():
    pyxel.cls(0)
    carre()

def update():
    move()
    pass
pyxel.run(draw,update)`},{type:`file`,name:`cercle.py`,path:`séance 9/exercices/cercle.py`,language:`Python`,content:`import random
import pyxel

cercles = []

def cercle(): # cercle aléatoire
    x=random.randint(50,350)
    y=random.randint(50,250)
    r=random.randint(10,50)
    col=random.randint(1,15)
    cercles.append((x, y, r, col))

def nya():
    if pyxel.btnp(pyxel.KEY_SPACE): # crée des cercles
        cercle()
    if pyxel.btnp(pyxel.KEY_BACKSPACE) and cercles: # supprimer des cercles
        cercles.pop(random.randint(0,len(cercles)-1))

pyxel.init(400, 300)

def draw():
    pyxel.cls(0)
    for x, y, r, col in cercles:
        pyxel.circ(x, y, r, col)
        
def update():
    nya()
    
pyxel.run(update, draw)`},{type:`file`,name:`couleurs.py`,path:`séance 9/exercices/couleurs.py`,language:`Python`,content:`import pyxel
pyxel.init(320, 320, title="couleurs")

def update():
    if pyxel.btnp(pyxel.KEY_Q):
        pyxel.quit()

def draw():
    pyxel.cls(0)
    for i in range(16):
        pyxel.rect(20*i, 0, 20, 20, i)

pyxel.run(update, draw)`},{type:`file`,name:`images.py`,path:`séance 9/exercices/images.py`,language:`Python`,content:`import pyxel

pyxel.init(600,600,title="Mermoz")
pyxel.image(0).load(0,0,"logo_mermoz.png")
pyxel.image(1).load(0,0,"NSI.png")

def update():
    if pyxel.btnp(pyxel.KEY_Q):
        pyxel.quit()
def draw():
    pyxel.cls(0)
    taille=255
    pyxel.blt(pyxel.width//2-(taille//2),0,0,0,0,taille,236)
    pyxel.blt(pyxel.width//2-(taille//2),300,1,0,0,taille,154)
pyxel.run(update,draw)`},{type:`file`,name:`images2.py`,path:`séance 9/exercices/images2.py`,language:`Python`,content:`import pyxel
pyxel.init(600, 600, title="Mermoz")
pyxel.image(0).load(0, 0, "NSI.png")
pyxel.image(1).load(0, 0, "logo_mermoz.png")
change=0

def update():
    global change
    if pyxel.btnp(pyxel.KEY_Q):
        pyxel.quit()
    if pyxel.btnp(pyxel.KEY_N):
        change=0
    if pyxel.btnp(pyxel.KEY_L):
        change=1

def draw():
    pyxel.cls(0)
    taille_img=(pyxel.image(change).width,pyxel.image(change).height)
    pyxel.blt(pyxel.width//2-(taille_img[0]//2),0,change,0,0,taille_img[0],taille_img[1])
pyxel.run(update, draw)`},{type:`file`,name:`logo_mermoz.png`,path:`séance 9/exercices/logo_mermoz.png`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: séance 9/exercices/logo_mermoz.png (39283 octets)]`},{type:`file`,name:`neige.py`,path:`séance 9/exercices/neige.py`,language:`Python`,content:`import pyxel
import random

pyxel.init(400,300,title="neige",fps=400)
neige=[]

def ajout_neige():
    global neige
    if pyxel.frame_count % 30 == 0:
        taille=random.randint(1,8)
        x=random.randint(0,pyxel.width)
        neige.append([x,0,taille])
def update():
    if pyxel.btnp(pyxel.KEY_Q):
        pyxel.quit()
    global neige
    ajout_neige()
    for flocon in neige:
        flocon[1] += 0.1
        if flocon[1]>pyxel.height:
            neige.remove(flocon)
    neige = [flocon for flocon in neige if flocon[1] < pyxel.height]
def draw():
    pyxel.cls(0)
    for flocon in neige:
        pyxel.circ(flocon[0],flocon[1],flocon[2],7)
pyxel.run(update, draw)`},{type:`file`,name:`NSI.png`,path:`séance 9/exercices/NSI.png`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: séance 9/exercices/NSI.png (65229 octets)]`},{type:`file`,name:`NSI.py`,path:`séance 9/exercices/NSI.py`,language:`Python`,content:`import pyxel

HAUTEUR = 100
LARGEUR = 40
ESPACE = 10

X_START = 20
Y_START = 20


def nsi():
    x = X_START
    y = Y_START

    # N
    pyxel.line(x, y, x, y + HAUTEUR, 7)
    pyxel.line(x, y, x + LARGEUR, y + HAUTEUR, 7)
    pyxel.line(x + LARGEUR, y, x + LARGEUR, y + HAUTEUR, 7)

    x += LARGEUR + ESPACE

    # S
    pyxel.line(x + LARGEUR, y, x, y, 7)
    pyxel.line(x, y, x, y + HAUTEUR // 2, 7)
    pyxel.line(x, y + HAUTEUR // 2, x + LARGEUR, y + HAUTEUR // 2, 7)
    pyxel.line(x + LARGEUR, y + HAUTEUR // 2, x + LARGEUR, y + HAUTEUR, 7)
    pyxel.line(x + LARGEUR, y + HAUTEUR, x, y + HAUTEUR, 7)

    x += LARGEUR + ESPACE

    # I
    pyxel.line(x, y, x + LARGEUR, y, 7)
    pyxel.line(x + LARGEUR // 2, y, x + LARGEUR // 2, y + HAUTEUR, 7)
    pyxel.line(x, y + HAUTEUR, x + LARGEUR, y + HAUTEUR, 7)


def draw():
    pyxel.cls(0)
    nsi()


def update():
    pass


pyxel.init(220, 160, title="NSI")
pyxel.run(update, draw)
`}]},{type:`file`,name:`NSI_1iere_S9.pdf`,path:`séance 9/NSI_1iere_S9.pdf`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: séance 9/NSI_1iere_S9.pdf (296462 octets)]`},{type:`file`,name:`README.md`,path:`séance 9/README.md`,language:`Markdown`,content:`![slaakak](https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/2163af2a3a3f08237ba79cf7d59c7a72d4e849da/Python/mai_sakurajima_holding_python_programming_3in1_book.png) ![pyxel](../assets/pyxel.png) ![python](../assets/compact_46h.png)

# séance 9

1. [exercices](./exercices/)

# dépendances

\`\`\`
pip install pyxel
\`\`\`
`}]},{type:`folder`,name:`séance 10`,path:`séance 10`,children:[{type:`folder`,name:`code(Sic)`,path:`séance 10/code(Sic)`,children:[{type:`file`,name:`AccueilQ6.html`,path:`séance 10/code(Sic)/AccueilQ6.html`,language:`HTML`,content:`<html>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,572;1,14..32,572&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
    @import url('./hehe.css');
        html {
            background-color: var(--nooby-bg-0-dark);
            font-family: 'Noto Sans', sans-serif;
            margin: 20px;
        }
        h1 {
            color: white;
        }
        a {
            transition: 0.3s;
            display: block;
            color: var(--nooby-accent-blue-light);
            text-decoration: none;
        }
        a:hover {
            transition-duration: 0.3s;
            text-decoration: underline;
            color: var(--nooby-accent-blue-dark);
        }
    </style>
        <head>
            <meta charset="UTF-8">
            <title>Accueil de la séquence sur les pages web statiques en NSI</title>
        </head>
        <body>
            <h1>Séquence sur les pages web statiques en NSI</h1>
            <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Jean_de_La_Fontaine.PNG/250px-Jean_de_La_Fontaine.PNG"> Portrait de Jean de la Fontaine</a> </br>
            <a href="poemeQ5.html">Le poème : La cigale et la fourmi de Jean de la Fontaine</a></br>
            <a href="http://wikipedia.org/wiki/Jean_de_La_Fontaine">La biographie de Jean de La Fontaine</a>
        </body>
</html>`},{type:`file`,name:`hehe.css`,path:`séance 10/code(Sic)/hehe.css`,language:`CSS`,content:`@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,572;1,14..32,572&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");
:root {
  --nooby-bg-0-dark: #1e2021;
  --nooby-bg-1-dark: #282828;
  --nooby-bg-2-dark: #282828;
  --nooby-bg-3-dark: #3c3836;
  --nooby-bg-4-dark: #3c3836;
  --nooby-bg-5-dark: #504944;
  --nooby-bg-dim-dark: #141617;
  --nooby-bg-word-dark: #32302f;
  --nooby-bg-word-dark2: #4c4947;
  --nooby-bg-diff-green-dark: #32361a;
  --nooby-bg-diff-blue-dark: #0d3138;
  --nooby-bg-diff-blue-dark2: #15505c;
  --nooby-bg-diff-red-dark: #3c1f1e;
  --nooby-bg-visual-yellow-dark: #473c29;
  --nooby-bg-visual-green-dark: #333e34;
  --nooby-bg-visual-blue-dark: #2e3b3b;
  --nooby-bg-visual-red-dark: #442e2d;
  --nooby-bg-accent-yellow-dark: #d8a656;
  --nooby-bg-accent-green-dark: #a8b665;
  --nooby-bg-accent-red-dark: #ea6962;
  --nooby-fg-0-dark: #d4be98;
  --nooby-fg-1-dark: #ddc7a0;
  --nooby-grey-0-dark: #7c6f64;
  --nooby-grey-1-dark: #918274;
  --nooby-grey-2-dark: #a79a83;
  --nooby-accent-red-dark: #ea6962;
  --nooby-accent-orange-dark: #e78a4f;
  --nooby-accent-yellow-dark: #d8a656;
  --nooby-accent-green-dark: #a8b665;
  --nooby-accent-aqua-dark: #89B48;
  --nooby-accent-blue-dark: #7caea3;
  --nooby-accent-purple-dark: #d3859b;
  --nooby-bg-0-light: #f9f5d7;
  --nooby-bg-1-light: #f5edca;
  --nooby-bg-2-light: #f2eac7;
  --nooby-bg-3-light: #f2e4bc;
  --nooby-bg-4-light: #efdfb7;
  --nooby-bg-5-light: #ebdbb2;
  --nooby-bg-dim-light: #f2eac7;
  --nooby-bg-word-light: #f2eac7;
  --nooby-bg-diff-green-light: #e4edc7;
  --nooby-bg-diff-blue-light: #e0e9d3;
  --nooby-bg-diff-red-light: #f8e4c9;
  --nooby-bg-visual-yellow-light: #f9e9bf;
  --nooby-bg-visual-green-light: #dce5c2;
  --nooby-bg-visual-blue-light: #d8e1cc;
  --nooby-bg-visual-red-light: #f0ddc3;
  --nooby-bg-accent-yellow-light: #a96b2d;
  --nooby-bg-accent-green-light: #6f8252;
  --nooby-bg-accent-red-light: #ae5858;
  --nooby-fg-0-light: #644735;
  --nooby-fg-1-light: #503829;
  --nooby-grey-0-light: #a79a83;
  --nooby-grey-1-light: #928374;
  --nooby-grey-2-light: #7c6f64;
  --nooby-accent-red-light: #c14a4a;
  --nooby-accent-orange-light: #c35e0a;
  --nooby-accent-yellow-light: #b37109;
  --nooby-accent-green-light: #6c782e;
  --nooby-accent-aqua-light: #4b7a5d;
  --nooby-accent-blue-light: #45707a;
  --nooby-accent-purple-light: #945e80;
}
html {
  background-color: var(--nooby-bg-0-dark);
  font-family: "Noto Sans", sans-serif;
  margin: 20px;
  color: white;
}
.music-bg {
  position: fixed;
  inset: 0;

  background-image: url("data:image/svg+xml;utf8,\\<svg xmlns='http://www.w3.org/2000/svg' width='80' height='120' viewBox='0 0 80 120'>\\<text x='0' y='100' font-size='100' fill='white' opacity='0.15'>𝄞</text>\\</svg>");

  background-repeat: repeat;
  background-size: 130px 100px;

  animation: moveNotes 20s linear infinite;
}
.music-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: inherit;
  background-size: 200px 260px;
  opacity: 0.07;
  animation: moveNotes 60s linear infinite reverse;
  animation: noise 0.3s infinite;
}

@keyframes moveNotes {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 600px -600px;
  }
}
span[class="rime"] {
  background-color: var(--nooby-bg-diff-red-dark);
  border-radius: 4px;
}
div[class="strophe"],
div[class="strophe first"],
div[class="strophe last"] {
  transition: 0.3s;
  background-color: #0d3138ae;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  backdrop-filter: blur(4px);
  max-width: 500px;
}
div[class="strophe first"] {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
div[class="strophe last"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
div[class="strophe"]:hover,
div[class="strophe first"]:hover,
div[class="strophe last"]:hover {
  transition: 0.3s;
  background-color: #15505c;
  backdrop-filter: blur(4px);
}
div[class="strophe"]:hover span[class="rime"],
div[class="strophe first"]:hover span[class="rime"],
div[class="strophe last"]:hover span[class="rime"] {
  transition: 0.3s;
  background-color: #72211e;
}
div[class="strophe first"] {
  padding-top: 20px;
}
div[class="strophe last"] {
  padding-bottom: 20px;
}
a {
  transition: 0.3s;
  display: block;
  color: var(--nooby-accent-blue-light);
  text-decoration: none;
}
a:hover {
  transition-duration: 0.3s;
  text-decoration: underline;
  color: var(--nooby-accent-blue-dark);
}
div[class="top-link"] {
  background-color: rgba(29, 29, 29, 0.807);
  padding: 10px;
  max-width: 150px;
  backdrop-filter: blur(4px);
  animation: noise 0.3s infinite;
  border-radius: 10px;
}
.show-photo {
  margin-top: 12px;
  padding: 8px 14px;
  background-color: var(--nooby-accent-blue-dark);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}
.show-photo:hover {
  background-color: var(--nooby-accent-blue-light);
}
.photo-container {
  margin-top: 12px;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transform: translateY(-6px);
  transition:
    max-height 300ms ease,
    opacity 300ms ease,
    transform 300ms ease;
  pointer-events: none;
}
.photo-container img {
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
  background-color: rgba(29, 29, 29, 0.807);
  padding: 10px;
  backdrop-filter: blur(4px);
  animation: noise 0.3s infinite;
  border-radius: 10px;
}
.photo-container.visible {
  max-height: 1000px;
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
`},{type:`file`,name:`hehe.js`,path:`séance 10/code(Sic)/hehe.js`,language:`JavaScript`,content:`document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("show-photo");
  const container = document.getElementById("photo-container");

  if (!btn || !container) {
    return;
  }

  btn.addEventListener("click", () => {
    const isVisible = container.classList.toggle("visible");
    container.setAttribute("aria-hidden", String(!isVisible));
    btn.textContent = isVisible ? "Masquer la photo" : "Sa photo";
  });
});
`},{type:`file`,name:`Page_S10_Q7.html`,path:`séance 10/code(Sic)/Page_S10_Q7.html`,language:`HTML`,content:`<html>
<head>
  		<meta charset="utf-8"/>
  		<title>SEQUENCE 10: HTML/CSS </title>
 	</head>
<body>
<h1>  JEAN DE LA FONTAINE </h1>
<h2>  Quelques liens utiles </h2>
Sa <a href= PhotoQ6.html> photo </a> <br />
Un <a href= "#poeme"> po&egrave;me  </a> de Jean de la Fontaine <br />
Sa <a href= http://fr.wikipedia.org/wiki/Jean_de_La_Fontaine> bibliographie </a> <br />



<a name="poeme"></a><h2>  La cigale et la fourmi  </h2> 
<h3>  La Cigale, ayant chant&eacute; <br /> 
Tout l'&eacute;t&eacute;,<br /> <br /> 
Se trouva fort d&eacute;pourvue<br /> 
Quand la bise fut venue :<br /> <br /> 
Pas un seul petit morceau<br /> 
De mouche ou de vermisseau.<br /> <br /> 
Elle alla crier famine<br /> 
Chez la Fourmi sa voisine,<br /> <br /> 
La priant de lui pr&ecirc;ter<br /> 
Quelque grain pour subsister<br /> <br /> 
Jusqu'&agrave; la saison nouvelle.<br /> 
"Je vous paierai, lui dit-elle,<br /><br />  
Avant l'Ao&ucirc;t, foi d'animal,<br /> 
Int&eacute;r&ecirc;t et principal. "<br /><br />  
La Fourmi n'est pas pr&ecirc;teuse :<br /> 
C'est l&agrave; son moindre d&eacute;faut.<br /> 
Que faisiez-vous au temps chaud ?<br /> 
Dit-elle &agrave; cette emprunteuse.<br /> <br /> 
Nuit et jour &agrave; tout venant<br /> 
Je chantais, ne vous d&eacute;plaise.<br /> 
Vous chantiez ? j'en suis fort aise.<br /> 
Eh bien! dansez maintenant.<br /> <br /> 

	Jean de la Fontaine</h3> 
</body>
</html>
`},{type:`file`,name:`poemeQ5.html`,path:`séance 10/code(Sic)/poemeQ5.html`,language:`HTML`,content:`<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="hehe.css" type="text/css">
        <script src="./hehe.js"><\/script>
        <title>Jean de la fontaine</title>
    </head>
        <div class="music-bg"></div>
        <h1>Quelques liens utiles</h1>
        <div class="top-link">
          <a href="http://wikipedia.org/wiki/Jean_de_La_Fontaine">Sa biographie</a>
          <button id="show-photo" class="show-photo">Sa photo</button>
        </div>
        <div id="photo-container" class="photo-container" aria-hidden="true">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Jean_de_La_Fontaine.PNG/250px-Jean_de_La_Fontaine.PNG" alt="Portrait de Jean de La Fontaine">
        </div>
        <div class="titre-poeme">
            <h1>La cigale et la fourmi</h1>
        </div>
        <div class="strophe first">
            La Cigale, ayant chant<span class="rime">é </span></br>
            Tout l'ét<span class="rime">é, </span></br>
        </div>
        <div class="strophe">
            Se trouva fort dépourv<span class="rime">ue</span></br> 
            Quand la bise fut ven<span class="rime">ue</span>: </br>
        </div>
        <div class="strophe">
            Pas un seul petit mor<span class="rime">ceau </span></br>
            De mouche ou de vermi<span class="rime">sseau. </span></br>
        </div>
        <div class="strophe">
            Elle alla crier fam<span class="rime">ine </span></br>
            Chez la Fourmi sa vois<span class="rime">ine, </span></br>
        </div>
        <div class="strophe">
            La priant de lui prêt<span class="rime">er </span></br>
            Quelques grains pour subsist<span class="rime">er </span></br>
        </div>
        <div class="strophe">
            Jusqu'à la saison nouv<span class="rime">elle.</span> </br>
            "Je vous paierai, lui dit-<span class="rime">elle, </span></br>
        </div>
        <div class="strophe">
            Avant l'Août, foi d'anim<span class="rime">al, </span></br>
            Intérêt et princip<span class="rime">al. </span> </br>
        </div>
        <div class="strophe">
            La Fourmi n'est pas prêt<span class="rime">euse : </span></br>
            C'est là son moindre déf<span class="rime">aut. </span></br>
        </div>
        <div class="strophe">
            Que faisiez-vous au temps ch<span class="rime">aud ? </span></br>
            Dit-elle à cette emprunt<span class="rime">euse. </span></br>
        </div>
        <div class="strophe">
            Nuit et jour à tout ven<span class="rime">ant </span></br>
            Je chantais, ne vous dépl<span class="rime">aise. </span></br>
        </div>
        <div class="strophe last">
            Vous chantiez ? j'en suis fort <span class="rime">aise. </span></br>
            Eh bien! dansez mainten<span class="rime">ant</span></br>
        </div>
    </body>
</html>`},{type:`file`,name:`Q1.php`,path:`séance 10/code(Sic)/Q1.php`,language:`PHP`,content:`<html>
    <head>
        <meta charset="UTF-8">
        <title>TP PHP NSI</title>
    </head>
    <body>
        <?php
            echo("Bonjour tout le monde !");
        ?>
    </body>
</html>`},{type:`file`,name:`Q2.php`,path:`séance 10/code(Sic)/Q2.php`,language:`PHP`,content:`<?php
// déclaration de constante
define('NSI', 'Numérique et Sciences Informatique');
// déclaration de variables
$nom = "Beltran";
$prenom = "Tristan";
$age = 17; // modifiez si nécessaire
?>
<html>
    <head>
        <meta charset="utf-8"/>
    <title>TP PHP NSI</title>
    </head>
    <body>
        <p>Je m'appelle <?php echo($prenom . " " . $nom); ?>.</p>
        <p>J'ai <?php echo($age); ?> ans.</p>
        <p>L'année prochaine, j'aurais <?php echo($age + 1); ?>.</p>
        <p>Je suis en cours de <?php echo(NSI); ?>.</p>
    </body>
</html>`}]},{type:`folder`,name:`jsarvanIV`,path:`séance 10/jsarvanIV`,children:[{type:`file`,name:`arene_imparable.html`,path:`séance 10/jsarvanIV/arene_imparable.html`,language:`HTML`,content:`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>DEMACIAAAAAA</title>
    <script src="j4.js"><\/script>
    <style>
      img {
        max-width: 500px;
        max-height: 400px;
      }
    </style>
  </head>
  <body>
    <h1>Cette page contient du jarvanscript</h1>
    <img
      src="https://static.wikia.nocookie.net/leagueoflegends/images/3/3f/04DE008-full.png"
    />
    <audio controls>
      <source src="./garen-demacia.mp3" type="audio/mpeg" />
    </audio>
  </body>
</html>
`},{type:`file`,name:`demaschool.html`,path:`séance 10/jsarvanIV/demaschool.html`,language:`HTML`,content:`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script src="demaschool.js" async><\/script>
    <title>Document</title>
  </head>
  <body>
    <h1>Welcome to Summoner's Rift</h1>
    <h2 id="eleves"></h2>
    <h2 id="moyenne"></h2>
  </body>
</html>
`},{type:`file`,name:`demaschool.js`,path:`séance 10/jsarvanIV/demaschool.js`,language:`JavaScript`,content:`let noms = [];
let prenoms = [];
let notes = [];
let i = 0;
noms[i] = prompt("Entrer le nom de l'élève");
while (noms[i] != "fin") {
  prenoms.push(prompt("Entrer le prénom de l'élève"));
  notes[i] = prompt("Entrer le nom de l'élève");
}
let moy = 0.0;
for (let j = 0; j < prenoms.length; j++) {
  document.getElementById("eleves").innerHTML +=
    noms[j] + "\\t" + prenoms[j] + "\\t" + notes[j] + " /20" + "<br>";
}
for (let valeur of notes) {
  moy = Number(moy) + Number(valeur);
}
moy = moy / notes.length;
document.getElementById("moyenne").innerHTML =
  "Moyenne de la classe = " + moy.toFixed(2) + " /20";
`},{type:`file`,name:`garen-demacia.mp3`,path:`séance 10/jsarvanIV/garen-demacia.mp3`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: séance 10/jsarvanIV/garen-demacia.mp3 (21504 octets)]`},{type:`file`,name:`hexgun.html`,path:`séance 10/jsarvanIV/hexgun.html`,language:`HTML`,content:`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>ZBRRRRZBRRRRRR HEXGUN PIOU PIOU</title>
    <script src="nouveau_item_sah.js" async><\/script>
  </head>
  <body>
    <h1>
      Cette page contient de l'AP (AKAKAKAKAKAKAKAKAKAakali prime?!!?!!!???!!!)
    </h1>
    <img src="https://i.ytimg.com/vi/nWhGySeiYSA/maxresdefault.jpg" />
    <br />
  </body>
</html>
`},{type:`file`,name:`j4.js`,path:`séance 10/jsarvanIV/j4.js`,language:`JavaScript`,content:`let prenom = "Jaquelin",
  nom = "Noai";
let age = 17;
let anniversaire = "89 novembre";
let homme = true;
let sexe = "un homme";
let n = null;
let u = undefined;
let na = NaN;
let v = "";
let heure = prompt("Heure entière");
//let adresse = prompt("Merci de taper votre adresse :")
//let x = prompt("x")
//let y = prompt("y")
//alert("Je m'appelle " + prenom + " " + nom);
//alert("J'ai " + age + " ans et l'année prochaine j'aurai " + (age+1) + " ans le " + anniversaire)
//alert("IMAGINE t'habite au " + adresse)

if (heure < 12) alert("c'est la matin");
else if (heure < 0 || heure > 24)
  alert(
    "invalide (ET PAS LA RUE HAHAHAHAHAHAHA (avenue des invalides ta capté hehe... c'est pas rue mais vas-y t'a capté <3",
  );
else if (heure < 18) alert("c'est l'après-midi");
else alert("c'est le soir");
`},{type:`file`,name:`nouveau_item_sah.js`,path:`séance 10/jsarvanIV/nouveau_item_sah.js`,language:`JavaScript`,content:`function persona(prenom, nom, age) {
  this.prenom = prenom;
  this.nom = nom;
  this.age = age;
}
let nom = new persona("jean-jaques", "hilst", "480");
let paul = nom;
paul.prenom = "paul";
alert(nom.prenom);
`},{type:`file`,name:`patch2.6.html`,path:`séance 10/jsarvanIV/patch2.6.html`,language:`HTML`,content:`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>MULTIPLAZIONE HAHHAHAH</title>
    <script src="poussière_luisante.js" async><\/script>
    <link
      rel="icon"
      type="image/x-icon"
      href="https://static.bigbrain.gg/assets/lol/riot_static/16.5.1/img/item/2022.png"
    />
  </head>
  <body>
    <h1>Cette page contient de l'ability haste (R luux)</h1>
    <h2 id="tab">La table de multiplication de 0 est :<br /></h2>
    <h2 id="resultat">La table va s'afficher</h2>
    <img
      src="https://static.bigbrain.gg/assets/lol/riot_static/16.5.1/img/item/2022.png"
    />
    <br />
  </body>
</html>
`},{type:`file`,name:`poussière_luisante.js`,path:`séance 10/jsarvanIV/poussière_luisante.js`,language:`JavaScript`,content:`let nb = prompt(
  "Entrer la numerooooooooooooo de la table de MULT1pL11c4110n que vous souhaitez afficher:",
);
document.getElementById("tab").innerText =
  "La table de multiplication de  " + nb + " est : ";
let resultat_a_afficher = "";
for (let i = 1; i <= 10; i++) {
  resultat_a_afficher =
    resultat_a_afficher + i + " * " + nb + " = " + i * nb + "\\n";
}
document.getElementById("resultat").innerText = resultat_a_afficher;
`},{type:`file`,name:`rework.js`,path:`séance 10/jsarvanIV/rework.js`,language:`JavaScript`,content:`let canvas = document.getElementById("c1"); // récupère le canvas
let ctx = canvas.getContext("2d"); // accès au contexte

// Rectangle contour
ctx.strokeStyle = "red";
ctx.strokeRect(20, 10, 200, 100);

// Rectangle rempli
ctx.fillStyle = "rgba(0,0,255,0.3)";
ctx.fillRect(20, 120, 200, 100);

// Effacer zone
ctx.clearRect(100, 50, 100, 100);

// Triangle vert
ctx.beginPath();
ctx.moveTo(20, 250);
ctx.lineTo(20, 350);
ctx.lineTo(120, 350);
ctx.lineTo(20, 250);
ctx.strokeStyle = "#00FF00";
ctx.lineWidth = 3;
ctx.closePath();
ctx.stroke();

// Ligne noire
ctx.beginPath();
ctx.moveTo(140, 250);
ctx.lineTo(140, 350);
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.closePath();
ctx.stroke();

// Triangle rempli jaune
ctx.beginPath();
ctx.moveTo(160, 350);
ctx.lineTo(260, 350);
ctx.lineTo(260, 250);
ctx.lineTo(160, 350);
ctx.fillStyle = "yellow";
ctx.closePath();
ctx.fill();

// Arc cyan (sens horaire)
ctx.beginPath();
ctx.strokeStyle = "cyan";
ctx.lineWidth = 5;
ctx.arc(60, 420, 35, 0.8 * Math.PI, 2 * Math.PI);
ctx.closePath();
ctx.stroke();

// Arc cyan (sens trigo)
ctx.beginPath();
ctx.strokeStyle = "cyan";
ctx.lineWidth = 5;
ctx.arc(260, 420, 35, 0.2 * Math.PI, Math.PI, true);
ctx.closePath();
ctx.stroke();

// Cercle magenta
ctx.beginPath();
ctx.fillStyle = "magenta";
ctx.arc(160, 480, 40, 0, 2 * Math.PI);
ctx.closePath();
ctx.fill();

// Arc rouge
ctx.beginPath();
ctx.fillStyle = "red";
ctx.lineWidth = 5;
ctx.arc(160, 500, 100, 0.2 * Math.PI, 0.8 * Math.PI);
ctx.closePath();
ctx.fill();

// Dégradé linéaire
let lineaire = ctx.createLinearGradient(20, 600, 120, 700);
lineaire.addColorStop(0, "green");
lineaire.addColorStop(0.5, "blue");
lineaire.addColorStop(1, "red");

ctx.beginPath();
ctx.moveTo(20, 600);
ctx.lineTo(20, 700);
ctx.lineTo(120, 700);
ctx.lineTo(20, 600);
ctx.fillStyle = lineaire;
ctx.closePath();
ctx.fill();

// Dégradé radial
let radial = ctx.createRadialGradient(200, 650, 5, 200, 650, 50);
radial.addColorStop(0, "yellow");
radial.addColorStop(0.5, "magenta");
radial.addColorStop(1, "cyan");

ctx.beginPath();
ctx.fillStyle = radial;
ctx.arc(200, 650, 50, 0, 2 * Math.PI);
ctx.closePath();
ctx.fill();

// Texte
ctx.font = "italic 30px Arial";
ctx.fillStyle = "black";
ctx.fillText("Exemple de dessins en Javascript", 10, 750);
`},{type:`file`,name:`shyvava.html`,path:`séance 10/jsarvanIV/shyvava.html`,language:`HTML`,content:`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script src="rework.js" async><\/script>
  </head>
  <body>
    <canvas
      id="c1"
      style="background-color: #aaaaaa"
      width="500"
      height="800"
      ;
    ></canvas>
  </body>
</html>
`}]},{type:`folder`,name:`popipopipopipo`,path:`séance 10/popipopipopipo`,children:[{type:`file`,name:`pipo.php`,path:`séance 10/popipopipopipo/pipo.php`,language:`PHP`,content:`<?php
//------------------------------------------------------
	$pipo[0][0] = "Avec ";
	$pipo[0][1] = "Considérant ";
	$pipo[0][2] = "Où que nous mène ";
	$pipo[0][3] = "Eu égard à ";
	$pipo[0][4] = "Vu ";
	$pipo[0][5] = "En ce qui concerne ";
	$pipo[0][6] = "Dans le cas particulier de ";
	$pipo[0][7] = "Quelle que soit ";
	$pipo[0][8] = "Du fait de ";
	$pipo[0][9] = "Tant que durera ";
//------------------------------------------------------
	$pipo[1][0] = "la situation ";
	$pipo[1][1] = "la conjoncture ";
	$pipo[1][2] = "la crise ";
	$pipo[1][3] = "l'inertie ";
	$pipo[1][4] = "l'impasse ";
	$pipo[1][5] = "l'extrémité ";
	$pipo[1][6] = "la dégradation des moeurs ";
	$pipo[1][7] = "la sinistrose ";
	$pipo[1][8] = "la dualité de la situation ";
	$pipo[1][9] = "la baisse de confiance ";
//------------------------------------------------------
	$pipo[2][0] = "présente, ";
	$pipo[2][1] = "actuelle, ";
	$pipo[2][2] = "qui nous occupe, ";
	$pipo[2][3] = "qui est la nôtre, ";
	$pipo[2][4] = "induite, ";
	$pipo[2][5] = "conjoncturelle, ";
	$pipo[2][6] = "contemporaine, ";
	$pipo[2][7] = "de cette fin de siècle, ";
	$pipo[2][8] = "de la société, ";
	$pipo[2][9] = "de ces derniers temps, ";
//------------------------------------------------------
	$pipo[3][0] = "il convient de ";
	$pipo[3][1] = "il faut ";
	$pipo[3][2] = "on se doit de ";
	$pipo[3][3] = "il est préférable de ";
	$pipo[3][4] = "il serait intéressant de ";
	$pipo[3][5] = "il ne faut pas négliger de ";
	$pipo[3][6] = "on ne peut se passer de ";
	$pipo[3][7] = "il est nécessaire de ";
	$pipo[3][8] = "il serait bon de ";
	$pipo[3][9] = "il faut de toute urgence ";
//------------------------------------------------------
	$pipo[4][0] = "étudier ";
	$pipo[4][1] = "examiner ";
	$pipo[4][2] = "ne pas négliger ";
	$pipo[4][3] = "prendre en considération ";
	$pipo[4][4] = "anticiper ";
	$pipo[4][5] = "imaginer ";
	$pipo[4][6] = "se préoccuper de ";
	$pipo[4][7] = "s'intéresser à ";
	$pipo[4][8] = "avoir à l'esprit ";
	$pipo[4][9] = "se remémorer ";
//------------------------------------------------------
	$pipo[5][0] = "toutes les ";
	$pipo[5][1] = "chacune des ";
	$pipo[5][2] = "la majorité des ";
	$pipo[5][3] = "toutes les ";
	$pipo[5][4] = "l'ensemble des ";
	$pipo[5][5] = "la somme des ";
	$pipo[5][6] = "la totalité des ";
	$pipo[5][7] = "la globalité des ";
	$pipo[5][8] = "toutes les ";
	$pipo[5][9] = "certaines ";
//------------------------------------------------------
	$pipo[6][0] = "solutions ";
	$pipo[6][1] = "issues ";
	$pipo[6][2] = "problématiques ";
	$pipo[6][3] = "voies ";
	$pipo[6][4] = "alternatives ";
	$pipo[6][5] = "solutions ";
	$pipo[6][6] = "issues ";
	$pipo[6][7] = "problématiques ";
	$pipo[6][8] = "voies ";
	$pipo[6][9] = "alternatives ";
//------------------------------------------------------
	$pipo[7][0] = "envisageables.";
	$pipo[7][1] = "possibles.";
	$pipo[7][2] = "déjà en notre possession.";
	$pipo[7][3] = "s'offrant à nous.";
	$pipo[7][4] = "de bon sens.";
	$pipo[7][5] = "envisageables.";
	$pipo[7][6] = "possibles.";
	$pipo[7][7] = "déjà en notre possession.";
	$pipo[7][8] = "s'offrant à nous.";
	$pipo[7][9] = "de bon sens.";
//------------------------------------------------------
`},{type:`file`,name:`pipotronQ5.php`,path:`séance 10/popipopipopipo/pipotronQ5.php`,language:`PHP`,content:`<?php

include("pipo.php");

// débogage : la fonction var_dump() permet d'afficher les caractèristiques d'une variable
echo("<pre>"); 
var_dump($pipo);
echo("</pre>"); 
`},{type:`file`,name:`pipotronQ6.php`,path:`séance 10/popipopipopipo/pipotronQ6.php`,language:`PHP`,content:`<?php
	include("pipo.php");

	$conclusion ="";
	for ($i = 0; $i < 8; $i++) {
		$alea = rand(0,9);
		$conclusion = $conclusion . $pipo[$i][$alea];
	}
?>

<html>
	<head>
		<title>Le Pipotron</title>
	</head>
	<body>
		<h1>Le pipotron</h1>
		<?php echo($conclusion); ?>
	</body>
</html>`},{type:`file`,name:`pipotronQ7.php`,path:`séance 10/popipopipopipo/pipotronQ7.php`,language:`PHP`,content:`<?php
	include("pipo.php");
?>

<htmp>
	<head>
		<title>Le pipotron</title>
	</head>
	<body>
		<h1>Le pipotron</h1>
		<?php
			for ($i = ...             ) {
				echo(...............
			}
		?>
	<body>
<html>
`},{type:`file`,name:`pipotronQ8.php`,path:`séance 10/popipopipopipo/pipotronQ8.php`,language:`PHP`,content:`<?php
	include("pipo.php");
?>

<htmp>
	<head>
		<title>Le pipotron</title>
	</head>
	<body>
		<h1>Le pipotron</h1>
		<?php
			for ($i = ...            ) {
				// utilisation de la fonction rand() pour créer un nombre aléatoire entre 0 et 9
				$alea = ...
				echo(...
			}
		?>
	<body>
<html>
`},{type:`file`,name:`pipotronQ9.php`,path:`séance 10/popipopipopipo/pipotronQ9.php`,language:`PHP`,content:`<?php
    include("pipo.php");
    var_dump($_POST);
    if(isset($_POST["conclusion_no"])){
        $conclusion_no = $_POST["conclusion_no"];
    }
    function adapterliaison($str)
{$str=str_replace("de e","d'e",$str);
$str=str_replace("de é","d'é",$str);
$str=str_replace("de i","d'i",$str);
$str=str_replace("de a","d'a",$str);
return $str;}
    $conclusion="";
    for ($i = 0; $i < 8; $i++) {
    $alea = rand(0,9); 
    $conclusion=$conclusion. $pipo[$i][$alea];}
    $conclusion=adapterliaison($conclusion);

?>
<html>
    <head>
        <title>Le pipotron</title>
    </head>
    <body>
        <h1>Le pipotron</h1>
        <form method="post" action="pipotronQ6.php">
        <label>Entrer un nombre de 8 chiffres</label>
        <input name="conclusion_no" type="number" min="0" max="99999999"/>
        <input type="submit" value="Générer"/>
        </form>
        <?php
        echo($conclusion);
        ?>
    </body>
</html>`},{type:`file`,name:`pipotronQ10.php`,path:`séance 10/popipopipopipo/pipotronQ10.php`,language:`PHP`,content:`<?php
	include("pipo.php");
	
	function adapterLiaison($str)
	{
		//
		// ici on modifie $str, à compléter
		//
		return $str;
	}
	
	// variable qui va contenir la conclusion à afficher
	$conclusion = ""; 
	for ($i = 0; $i < 8; $i++) {
		// génération d'un nombrea aléatoire
		$alea = ...
		// construction de la conclusion
		$conclusion = ...
	}
	
	// on utilise la fonction adapterLiaison() pour supprimer le problème de liaison
	$conclusion = ... 
?>

<htmp>
	<head>
		<title>Le pipotron</title>
	</head>
	<body>
		<h1>Le pipotron</h1>
		<?php echo($conclusion); ?>
	<body>
<html>
`},{type:`file`,name:`pipotronQ11.php`,path:`séance 10/popipopipopipo/pipotronQ11.php`,language:`PHP`,content:`<?php
	include("pipo.php");
	
	var_dump($_POST);
	if (isset($_POST['conclusion_no'])) {
		$str_no = $_POST['conclusion_no'];
	} else {
		$str_no = '00000000';
	}
	
	while (strlen($str_no) < 8) {
		$str_no = '0' . $str_no;
	}
	
	function adapterLiaison($str)
	{
		$str = str_replace(" de e", " d'e", $str);
		$str = str_replace(" de é", " d'é", $str);
		$str = str_replace(" de a", " d'a", $str);
		$str = str_replace(" de i", " d'i", $str);
		return $str;
	}
	
	// variable qui va contenir la conclusion à afficher
	$conclusion = ""; 
	for ($i = 0; $i < 8; $i++) {
		// $j <- premier caractère de $str_no converti en nombre (de 0 à 9)
		$j = intval($str_no[0]);
		// Supprimer le 1er caractère de $str_no
		$str_no = substr($str_no,1);
		// $conclusion <- $conclusion + $pipo[$i][$j]
		$conclusion .= $pipo[$i][$j];
	}
	
	$conclusion = adapterLiaison($conclusion);
?>

<htmp>
	<head>
		<title>Le pipotron</title>
	</head>
	<body>
		<h1>Le pipotron</h1>
		<form method="post" action="pipotronQ11.php">
			<label>Entrez un nombre de 8 chiffres</label>
			<input name="conclusion_no" type="number" min="0" max ="99999999"/>
			<input type="submit" value="Générer" />
		</form>
		<?php echo($conclusion); ?>
	<body>
<html>
`},{type:`file`,name:`README.md`,path:`séance 10/popipopipopipo/README.md`,language:`Markdown`,content:`ça va aller monsieur
![tié un tigre](https://i.pinimg.com/736x/ed/38/3c/ed383c88eaf07342bfeca7c4e5466352.jpg)
`}]},{type:`file`,name:`NSI_1iere_S10.pdf`,path:`séance 10/NSI_1iere_S10.pdf`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: séance 10/NSI_1iere_S10.pdf (1181574 octets)]`},{type:`file`,name:`NSI_1iere_S12_chr.pdf`,path:`séance 10/NSI_1iere_S12_chr.pdf`,language:`Text`,content:`[Fichier binaire non affichable dans l'explorateur: séance 10/NSI_1iere_S12_chr.pdf (802095 octets)]`},{type:`file`,name:`README.md`,path:`séance 10/README.md`,language:`Markdown`,content:'![html](../assets/html.png) ![css](../assets/css.png) ![js](../assets/js.png) ![php](../assets/php.png)\n\n# séance 10\n\n1. [code(Sic.)](<./code(Sic)/>) (html et css)\n2. [pipo](./popipopipopipo/) (php)\n3. [jarvanIV](./jsarvanIV/)\n\n# dépendances\n\n```command prompt (admin)\nmklink "C:\\xampp\\htdocs\\NAME.php" "C:\\PATH\\TO\\SOURCE.php"\n```\n\n- [PHP](https://www.php.net/)\n- [XAMPP](https://www.apachefriends.org/fr/index.html)\n\n## configurer XAMPP\n\n> [!IMPORTANT]\n> si le bouton `start` fonctionne sans rien faire, configurer XAMPP n\'est _pas nécessaire_.\n\n1. cliquer sur `config` de `Apache`\n2. cliquer sur `httpd.conf`\n3. chercher `80`\n4. remplacer `Listen 80` par `Listen 82`\n5. cliquer sur `suivant`\n6. changer `Servername localhost:80` en `Servername localhost:82`\n7. sauvegarder\n8. refaite la première étape et cliquer sur `httpd-ssl.conf`\n9. changer `Listen 443` en `Listen 4433`\n10. sauvegarder et essayer de démarrer `Apache`\n'}]},{type:`folder`,name:`tle-séance 1`,path:`tle-séance 1`,children:[{type:`folder`,name:`chipeur`,path:`tle-séance 1/chipeur`,children:[{type:`file`,name:`bri.py`,path:`tle-séance 1/chipeur/bri.py`,language:`Python`,content:`def defiler(f):
    if f[2] == 0:
        print("La file est vide")
    else:
        e = f[f[0]]
        if f[0] == len(f) - 1:
            f[0] = 3
        else:
            f[0] = f[0] + 1
        f[2] = f[2] - 1
        return e

    print(defiler(f))
`},{type:`file`,name:`filature.py`,path:`tle-séance 1/chipeur/filature.py`,language:`Python`,content:`def enfiler(f, e):
    if f[2] == len(f) - 3:
        print(f"La file {f} est pleine")
        return False
    else:
        f[f[1]] = e
        if f[1] == len(f) - 1:
            f[1] = 3
        else:
            f[1] = f[1] + 1
        f[2] = f[2] + 1
        return True
`},{type:`file`,name:`file_dattente.py`,path:`tle-séance 1/chipeur/file_dattente.py`,language:`Python`,content:`def file(n):
    f = [None] * (n + 3)
    f[0] = 3  # indice premier élément
    f[1] = 3  # indice dernier élément (3 car elle est vide donc y'en a pas)
    f[2] = 0  # correspond à la taille
    return f
`},{type:`file`,name:`oui.sh`,path:`tle-séance 1/chipeur/oui.sh`,language:`Shell`,content:`❯ python nsi.py
[3, 3, 0, None, None, None, None, None, None]
[3, 4, 1, 1, None, None, None, None, None]
[3, 5, 2, 1, 2, None, None, None, None]
[3, 6, 3, 1, 2, 3, None, None, None]
[3, 7, 4, 1, 2, 3, 4, None, None]
[3, 8, 5, 1, 2, 3, 4, 5, None]
[3, 3, 6, 1, 2, 3, 4, 5, 6]
1
[4, 3, 5, 1, 2, 3, 4, 5, 6]
[4, 4, 6, 66, 2, 3, 4, 5, 6]
2
[5, 4, 5, 66, 2, 3, 4, 5, 6]
`},{type:`file`,name:`rondeur.py`,path:`tle-séance 1/chipeur/rondeur.py`,language:`Python`,content:`from bri import defiler
from filature import enfiler
from file_dattente import file

File = file(6)
print(File)

enfiler(File, 1)
print(File)

enfiler(File, 2)
print(File)

enfiler(File, 3)
print(File)

enfiler(File, 4)
print(File)

enfiler(File, 5)
print(File)

enfiler(File, 6)
print(File)

print(defiler(File))
print(File)

enfiler(File, 66)
print(File)

print(defiler(File))
print(File)

# retour ./oui.sh
`}]},{type:`folder`,name:`duracell`,path:`tle-séance 1/duracell`,children:[{type:`file`,name:`casser_pile.py`,path:`tle-séance 1/duracell/casser_pile.py`,language:`Python`,content:`def depiler(p):
    if p[0] != 1:
        p[0] = p[0] - 1
        return p[p[0]]
    else:
        print("La pile est vide")

    print(depiler(p))
`},{type:`file`,name:`cree_energie.py`,path:`tle-séance 1/duracell/cree_energie.py`,language:`Python`,content:`def pile(n):
    p = [None] * (n + 1)
    p[0] = 1
    return p
`},{type:`file`,name:`devenir_pile.py`,path:`tle-séance 1/duracell/devenir_pile.py`,language:`Python`,content:`def empiler(p, e):
    if p[0] == len(p):
        print(f"La pile {p} est pleine")
        return False

    else:
        p[p[0]] = e
        p[0] = p[0] + 1
        return True
`}]},{type:`folder`,name:`fichéS`,path:`tle-séance 1/fichéS`,children:[{type:`file`,name:`annihiliation.py`,path:`tle-séance 1/fichéS/annihiliation.py`,language:`Python`,content:`def supprimer(L, i):
    if (L[0] != 0) and (i <= L[0]):
        for k in range(i, L[0] - 1, -1):
            L[k] = L[k + 1]
        L[i] = None
        L[0] = L[0] - 1
        return True
    else:
        print(f"La liste {L} est vide ou l'index {i} n'est pas correct")
    return False
`},{type:`file`,name:`avril2027.py`,path:`tle-séance 1/fichéS/avril2027.py`,language:`Python`,content:`urne1 = ["Balludur", "Giscard", "Macron"]
urne2 = ["Attal", "Bardella", "Macron"]
urne3 = ["Bardella", "LePen", "Zémour", "Attal"]


def scrutin(urne):
    global d
    d = {}
    for candidat in urne:
        if candidat in d:
            d[candidat] += 1
        else:
            d[candidat] = 1


scrutin(urne1)
scrutin(urne2)
scrutin(urne3)

print(d)
# ou pour un meilleur rendu
for nom, valeur in d.items():
    print(f"{nom}: {valeur}")
`},{type:`file`,name:`doigt.py`,path:`tle-séance 1/fichéS/doigt.py`,language:`Python`,content:`def indexer(L, i):
    if i > L[0]:  # élimine le cas du None
        return "Il n'y a pas d'élément à cet indice"
    else:
        return L[i]
`},{type:`file`,name:`insertionWord.py`,path:`tle-séance 1/fichéS/insertionWord.py`,language:`Python`,content:`def inserer(L, e, i):
    if (L[0] == len(L)) or (i - 1 > L[0]):
        print(f"La liste {L} est pleine ou {i} n'est pas correct")
        return False
    else:
        for k in range(L[0] + 1, i + 1, -1):
            L[k] = L[k - 1]
        L[i] = e
        L[0] += 1
    return True
`},{type:`file`,name:`lafillestvide.py`,path:`tle-séance 1/fichéS/lafillestvide.py`,language:`Python`,content:`def vide(n):
    L = [None] * (n + 1)
    L[0] = 0
    return L


L = vide(6)
print(L)


def inserer(L, e, i):
    if L[0] == len(L):
        print(f"La liste {L} est pleine ou {i} n'est pas correct")
        return False
    else:
        for k in range(L[0] + 1, i + 1, -1):
            L[k] = L[k - 1]
            L[i] = e
            L[0] += 1
    return True


inserer(L, 3, 1)
inserer(L, 7, 2)
inserer(L, 1, 3)
inserer(L, 8, 4)

print(L)
`},{type:`file`,name:`longevite.py`,path:`tle-séance 1/fichéS/longevite.py`,language:`Python`,content:`
def longueur(L)
	return L[0]
`},{type:`file`,name:`photoshop.py`,path:`tle-séance 1/fichéS/photoshop.py`,language:`Python`,content:`def modifier(L, e, i):
    if i > L[0]:
        print("Il n'y a pas d'élément à cet indice")
        return False
    else:
        L[i] = e
        return True
`},{type:`file`,name:`recroom.py`,path:`tle-séance 1/fichéS/recroom.py`,language:`Python`,content:`# fonction récursive
def fact(N):
    # arrêt -> if N==1: return 1
    return N * fact(N - 1)


# liste
L = [1, 2, 3]
L2 = L  # la même fonction : quand L modifiée, L2 modifiée (vice versa)
L3 = L[:]  # indépendante
`},{type:`file`,name:`sherlock.py`,path:`tle-séance 1/fichéS/sherlock.py`,language:`Python`,content:`def rechercher(L, e):
    indice = -1
    for k in range(1, L[0] + 1, 1):
        if L[k] == e:
            indice = k
    return indice
`}]},{type:`folder`,name:`Три полоски`,path:`tle-séance 1/Три полоски`,children:[{type:`file`,name:`calcalata.py`,path:`tle-séance 1/Три полоски/calcalata.py`,language:`Python`,content:`exp = " 26+1-"
pile = []
op1 = 0
op2 = 0

for c in exp:
    if c not in "+-*/":
        # chiffre
        pile.append(c)
    else:
        op1 = int(pile.pop())
        op2 = int(pile.pop())

        if c == "+":
            pile.append(op1 + op2)
        elif c == "*":
            pile.append(op1 * op2)
        elif c == "-":
            pile.append(op1 - op2)
        elif c == "/" and op2 != 0:
            pile.append(op1 / op2)
print(pile, "est la réponse")
`},{type:`file`,name:`douane.py`,path:`tle-séance 1/Три полоски/douane.py`,language:`Python`,content:`expression = input("creez votre formule")


def verification(expresion):
    global pile
    pile = []
    for car in expression:
        if car == "(":
            pile.append(car)
        elif car == ")":
            if len(pile) == 0:
                return False
            else:
                pile.pop()
    return len(pile) == 0
`},{type:`file`,name:`hanoi.py`,path:`tle-séance 1/Три полоски/hanoi.py`,language:`Python`,content:`def hanoi(n, depart, arrivee, intermediaire):
    global compteur

    if n != 0:
        hanoi(n - 1, depart, intermediaire, arrivee)

        disque = depart.pop()
        arrivee.append(disque)

        compteur += 1
        print(p1, p2, p3)

        hanoi(n - 1, intermediaire, arrivee, depart)


p1 = []
p2 = []
p3 = []

n = int(input("Donner le nombre de disques : "))

for i in range(n, 0, -1):
    p1.append(i)

compteur = 0

print(p1, p2, p3)

hanoi(n, p1, p3, p2)

print(compteur)
`}]},{type:`file`,name:`README.md`,path:`tle-séance 1/README.md`,language:`Markdown`,content:`![py](../assets/py.png)

# tle séance 1

1. [fiché S](./ficheS/) (listes)
2. [duracell](./duracell/) (piles)
3. [chipeur](./chipeur/) (files)
4. [Три полоски](./Три%20полоски/) (mini-programmes)

# dépendances

\`\`\`python
dépendances=[None]
\`\`\`
`}]},{type:`folder`,name:`tle-séance 2`,path:`tle-séance 2`,children:[{type:`file`,name:`bonsai.py`,path:`tle-séance 2/bonsai.py`,language:`Python`,content:`import queue
import random

import matplotlib

matplotlib.use("TkAgg")

import matplotlib.pyplot as plt

plt.rcParams["figure.figsize"] = (20, 6)


def vide():
    return None


def racine(t):
    return t[0]


def fg(t):
    return t[1]


def fd(t):
    return t[2]


def fils(t):
    return (fg(t), fd(t))


def est_vide(t):
    return t == None


def arbre(x, u, v):
    return (x, u, v)


"""exemple = (
    2,
    (1, (0, None, None), None),
    (
        5,
        (4, (3, None, None), None),
        (
            12,
            (9, (8, (6, None, (7, None, None)), None), (10, None, (11, None, None))),
            (
                13,
                None,
                (
                    14,
                    None,
                    (18, (17, (15, None, (16, None, None)), None), (19, None, None)),
                ),
            ),
        ),
    ),
)"""

"""exemple = (
    "A",
    ("B", ("C", None, ("E", None, None)), ("D", None, None)),
    ("F", ("G", ("I", None, None), None), ("H", None, ("J", None, None))),
)"""

exemple = (
    8,
    (3, (1, None, None), (6, (4, None, None), (7, None, None))),
    (10, None, (14, (13, None, None), None)),
)


def nombre_noeuds(t):
    if est_vide(t):
        return 0
    else:
        _, u, v = racine(t), fg(t), fd(t)
        return nombre_noeuds(u) + nombre_noeuds(v) + 1


print(nombre_noeuds(exemple))


def liste_feuilles(t):
    if est_vide(t):
        return []
    else:
        x, u, v = racine(t), fg(t), fd(t)
        if est_vide(u) and est_vide(v):
            return [x]
        else:
            return liste_feuilles(u) + liste_feuilles(v)


print(liste_feuilles(exemple))


def nombre_feuilles(t):
    if est_vide(t):
        return 0
    else:
        x, u, v = racine(t), fg(t), fd(t)
        if est_vide(u) and est_vide(v):
            return 1
        else:
            return nombre_feuilles(u) + nombre_feuilles(v)


print(nombre_feuilles(exemple))


def hauteur(t):
    if est_vide(t):
        return 1  # départ d'une racine = 1
    else:
        u, v = fg(t), fd(t)
        return 1 + max(hauteur(u), hauteur(v))


print(hauteur(exemple))


def dessiner(t, labels=True):
    d = 512
    pad = 20
    dy = (d - 2 * pad) / (hauteur(t))
    dessiner_aux(t, (pad, d - pad, pad, d - pad), dy, labels)
    # plt.axis([0, d, 0, d])
    plt.axis("off")
    plt.show()


def dessiner_aux(t, rect, dy, labels):
    if est_vide(t):
        return
    x1, x2, y1, y2 = rect
    xm = (x1 + x2) // 2
    x, t1, t2 = t

    dessiner_aux(t1, (x1, xm, y1, y2 - dy), dy, labels)
    dessiner_aux(t2, (xm, x2, y1, y2 - dy), dy, labels)
    if labels:
        plt.text(
            xm - 5,
            y2 + 5,
            str(x),
            fontsize=10,
            horizontalalignment="center",
            va="bottom",
        )

    if not est_vide(t1):
        a, b = ((xm, (x1 + xm) // 2), (y2, y2 - dy))
        plt.plot(a, b, "k", marker="o", markerfacecolor="r")

    if not est_vide(t2):
        c, d = ((xm, (x2 + xm) // 2), (y2, y2 - dy))
        plt.plot(c, d, "k", marker="o", markerfacecolor="r")


def rechercher(x, t):
    if est_vide(t):
        return False
    else:
        y, u, v = racine(t), fg(t), fd(t)
        if x < y:
            return rechercher(x, u)
        elif x > y:
            return rechercher(x, v)
        else:
            return True


def maximum(t):
    if est_vide(t):
        return Exception("Arbre vide")
    else:
        x, _, v = racine(t), fg(t), fd(t)
        if est_vide(v):
            return x
        else:
            return maximum(v)


def minimum(t):
    if est_vide(t):
        return Exception("Arbre vide")
    else:
        x, u, _ = racine(t), fg(t), fd(t)
        if est_vide(u):
            return x
        else:
            return minimum(u)


def supprimer(x, t):
    if est_vide(t):
        return None
    else:
        y, u, v = racine(t), fg(t), fd(t)
        print("y", y, "u", u, "v", v)
        if x < y:
            return (y, supprimer(x, u), v)
        elif x > y:
            return (y, u, supprimer(x, v))
        elif est_vide(v):
            return u
        else:
            m = minimum(v)
            print("m", m)
            return (m, u, supprimer(m, v))


dessiner(exemple)
`},{type:`file`,name:`README.md`,path:`tle-séance 2/README.md`,language:`Markdown`,content:`# tle séance 2

1. [bonsai.py](./bonsai.py) programme simple qui fait un arbre selon la variable \`exemple\`
2. [winrar.py](./winrar.py) honnêtement, jsp

# dépendances

pour bien visualiser les données, il est nécessaire d'installer la bibliothèque matplotlib et tk. Vous pouvez l'installer en utilisant pip :

\`\`\`bash
pip install matplotlib tk
\`\`\`

> [!note]
> selon votre système d'exploitation, vous pourriez avoir besoin d'installer tk séparément. Pour les utilisateurs de Windows, tk est généralement inclus avec Python. Pour les utilisateurs de macOS et Linux, vous pouvez installer tk via votre gestionnaire de paquets.
`},{type:`file`,name:`winrar.py`,path:`tle-séance 2/winrar.py`,language:`Python`,content:`# THIS IS NOT A WINRAR BOOTLEG
# merci à damien pour le script très bien commenté...


from heapq import *

# for c in 'texte':
#    print(c,ord(c))
# print([(k, chr(k)) for k in range(256)])


def entier_vers_binaire(n):
    s = ""  # chaine vide
    for k in range(8):
        s = str(n % 2) + s  # le nombre decimal soit pair ou impair
        # est converti en chaine '0' ou '1' à chaque ittération
        n = n // 2  # division entiere de n par 2
    return s


# print(entier_vers_binaire(100))


def coder_ascii(u):
    s = ""
    for a in u:
        s = s + entier_vers_binaire(ord(a))
    return s


v = "texte"
# print(coder_ascii(v),len(coder_ascii(v)))

code = {"a": "00", "b": "01", "c": "10", "d": "11"}


def coder(s, code):
    s1 = ""
    for a in s:
        s1 = s1 + code[a]
    return s1


# print(coder ('abcd',code))


def sous_ascii():
    c = {}
    s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 0123456789,;:."
    for a in s:
        c[a] = entier_vers_binaire(ord(a))
    return c


# print(sous_ascii()) # le dictionnaire code ascii:code binaire est crée

# comment decoder dictionnaire inverse


def inverser(code):
    d = {}
    for a in code:
        d[code[a]] = a
    return d


# print(inverser(sous_ascii()))
# inv_mini_ascii = inverser(sous_ascii()) #stocker le dictionnaire inversé dans une variable


def decoder_ascii(s):
    s1 = ""  # declaration d'un chaine vide pour le décodage
    for k in range(len(s) // 8):  # on avance modulo 8
        a = s[8 * k : 8 * (k + 1)]  # on isole chaque paquet de 8bits
        s1 = (
            s1 + inv_mini_ascii[a]
        )  # on ajoute a la chaine le caractére correspondant au code 8 bits
    return s1


inv_mini_ascii = inverser(
    sous_ascii()
)  # stocker le dictionnaire inversé dans une variable
v = coder_ascii("Bonne chance")
print(v)
print(decoder_ascii(v))

code = {"a": 1, "b": "110", "c": "10", "d": "111"}


def est_prefixe(s1, s2):
    n = len(s1)
    return not (n <= len(s2) and s2[:n] == s1)


print(est_prefixe("10", "100"))
print(est_prefixe("11", "110"))


def histogramme(u):
    tf = {}
    for a in u:
        if a in tf:
            tf[a] += 1
        else:
            tf[a] = 1
    return tf


code2 = histogramme("anticonstitutionnelement")
print("code2", code2)

L = []
heappush(L, (10, ["F", "a"]))
heappush(L, (8, ["F", "3"]))
heappush(L, (6, ["F", "20"]))
heappush(L, (5, ["F", "1"]))
heappush(L, (4, ["F", "0"]))
print(L)
for x in range(len(L)):
    print(heappop(L))
`}]},{type:`folder`,name:`tle-séance 3`,path:`tle-séance 3`,children:[{type:`folder`,name:`def`,path:`tle-séance 3/def`,children:[{type:`file`,name:`cafe_moka.py`,path:`tle-séance 3/def/cafe_moka.py`,language:`Python`,content:`# WHO'S YOUR BIAS, I'M YOUR BIAS
# WHO'S YOUR BIAS, I'M YOUR BIAS
# WHO'S YOUR BIAS, I'M YOUR BIAS

print(list(filter(lambda n: n < 10, [8, 12, 9, 14, 15, 3, 13])))
`},{type:`file`,name:`examens.py`,path:`tle-séance 3/def/examens.py`,language:`Python`,content:`p1 = {
    "nom": "DUPONT",
    "prenom": "Maxime",
    "notes": [("NSI", 12), ("philo", 8), ("maths", 15), ("anglais", 5)],
}
p2 = {
    "nom": "PETIT",
    "prenom": "Toto",
    "notes": [("NSI", 10), ("philo", 2), ("maths", 18), ("anglais", 16)],
}
p3 = {
    "nom": "DUPONT",
    "prenom": "Maxime",
    "notes": [("NSI", 5), ("philo", 9), ("maths", 10), ("anglais", 4)],
}
p4 = {
    "nom": "DUPONT",
    "prenom": "Maxime",
    "notes": [("NSI", 20), ("philo", 19), ("maths", 15), ("anglais", 14)],
}

db = [p1, p2, p3, p4]
pbs = [(p["nom"], m) for p in db for m, n in p["notes"] if n < 10]
# print(pbs)
print(["Cher monsieur %s, vous devez repasser : %s" % p for p in pbs])
nice = [(p["nom"], m) for p in db for m, n in p["notes"] if n > 16]
# print(nice)
print(
    [
        "Cher monsieur %s, félicitations, vous avez obtenu plus de 16/20 en %s " % p
        for p in nice
    ]
)
`},{type:`file`,name:`googlemaps.py`,path:`tle-séance 3/def/googlemaps.py`,language:`Python`,content:`print(list(map(abs, [9, -4, -7, -6, 4, 8])))

print(list(map(lambda n: n + 2, [4, 7, 2, 0, 3, 4, 9])))
`},{type:`file`,name:`la_taille_de_damien.py`,path:`tle-séance 3/def/la_taille_de_damien.py`,language:`Python`,content:`from functools import reduce

print(reduce(lambda x, y: x + y, [1, 2, 3, 4, 5]))
`},{type:`file`,name:`triangularité.py`,path:`tle-séance 3/def/triangularité.py`,language:`Python`,content:`print((lambda x, y: x * y)(1, 3))

print((lambda x, y: x / y)(6, 4))
print((lambda x, y: x / y)(9, 3))

print((lambda x, y, k: 3 * x + 5 * y + 6 * k)(2, 4, 12))
print((lambda x, y, k: 3 * x + 5 * y + 6 * k)(1, 2, 3))
`}]},{type:`folder`,name:`nightcity`,path:`tle-séance 3/nightcity`,children:[{type:`file`,name:`matrix.py`,path:`tle-séance 3/nightcity/matrix.py`,language:`Python`,content:`from pyDatalog import pyDatalog as pg

pg.create_terms(
    "ours,elephant,chat,chien,petit,grand,brun,noir,blanc,sombre,clair,couleur,taille,X"
)

# on établit les faits
+taille("ours", "grand")
+taille("elephant", "grand")
+taille("chat", "petit")
+taille("chien", "petit")
+couleur("ours", "brun")
+couleur("elephant", "gris")
+couleur("chat", "noir")
+couleur("chien", "blanc")

sombre(X) <= (couleur(X, "noir"))
sombre(X) <= (couleur(X, "brun"))
clair(X) <= (couleur(X, "gris"))
clair(X) <= (couleur(X, "blanc"))

# on pose les questions
print(clair(X))

print(sombre(X) & (taille(X, "grand")))
`},{type:`file`,name:`tielafamille.py`,path:`tle-séance 3/nightcity/tielafamille.py`,language:`Python`,content:`from pyDatalog import pyDatalog as py

py.create_terms("pere,frere,cousin,petit_fils,X,Y,Z,W,A,E")

+pere("A", "B")
+pere("A", "C")
+pere("B", "D")
+pere("B", "E")
+pere("C", "F")
frere(X, Y) <= (pere(Z, X) & (pere(Z, Y)) & ~(X == Y))
cousin(X, Y) <= (pere(Z, X)) & (pere(W, Y)) & (frere(Z, W))
petit_fils(X, Y) <= (pere(Y, Z)) & (pere(Z, X))
print("Frères")
print(frere(X, Y))

"""
print("Cousins")
print(cousin(X,Y))
print("Petit fils")
print(petit_fils(X,Y))
"""
`}]},{type:`file`,name:`README.md`,path:`tle-séance 3/README.md`,language:`Markdown`,content:`# tle séance 3

On m'a parlé de famille avec des pères, fils, petit-fils, cousins... heuresement que j'ai rien suivi !
`}]},{type:`file`,name:`.gitattributes`,path:`.gitattributes`,language:`Text`,content:`*.mov filter=lfs diff=lfs merge=lfs -text
`},{type:`file`,name:`.gitignore`,path:`.gitignore`,language:`Text`,content:`edupython13/
.venv/
nsi.code-workspace/
/projets/space invader/Kanixian-main
/projets/space invader/PROJET ENVAHISSEUR.docx
.lnk
/projets/marmotte/akinator.png
venv/
/crabe/*/target/
dist/
node_modules/
`},{type:`file`,name:`index.html`,path:`index.html`,language:`HTML`,content:`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My GitHub Pages Site</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        margin: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #000;
        color: #0f0;
        font-family: monospace;
      }
    </style>
  </head>
  <body>
    <h1>stop crying Page</h1>
  </body>
</html>
`},{type:`file`,name:`LICENSE`,path:`LICENSE`,language:`Text`,content:`MIT License

Copyright (c) 2026 mokotanin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`},{type:`file`,name:`nsi.code-workspace`,path:`nsi.code-workspace`,language:`Text`,content:`{
  "folders": [
    {
      "path": ".",
    },
  ],
  "settings": {
    "liveshare.guestApprovalRequired": true,
    "liveshare.allowGuestDebugControl": true,
    "liveshare.allowGuestTaskControl": true,
    "liveshare.anonymousGuestApproval": "accept",
    "liveshare.languages.allowGuestCommandControl": true,
    "liveshare.notebooks.allowGuestExecuteCells": true,
  },
}
`},{type:`file`,name:`pyrightconfig.json`,path:`pyrightconfig.json`,language:`JSON`,content:`{
  "typeCheckingMode": "basic",
  "reportMissingParameterType": "none",
  "venvPath": ".",
  "venv": "venv"
}
`},{type:`file`,name:`README.md`,path:`README.md`,language:`Markdown`,content:`<p align="center">
    <img src="https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/refs/heads/master/PHP/Original_by_Tkimz_Php_Programming_Book.png" width="650"><br>
    petite trace des prémices <b>sombres</b> de la programmation<br>
</p>

# nsi

25-26 première </br>
26-27 terminale (tle)

> [!TIP]
> créez un environnement virtuel avant d'installer les dépendances
>
> \`\`\`bash
> python -m venv .venv
> \`\`\`

## dépendances

> [!IMPORTANT]
> les dépendances se trouvent dans les README de chaque séance

## side projects personnel que je sais pas où mettre

- [crabe](./crabe/)
`},{type:`file`,name:`RESEARCH.md`,path:`RESEARCH.md`,language:`Markdown`,content:`# accès par la banquise 🐧

## prologue

Le papier suivant décrit mes étapes pour réussir à me connecter et à accéder à internet depuis mon ordinateur opérant sous Arch Linux.\\
Si vous n'utilisez pas Linux, voir _proxy_.

### dépendances

C'est surtout une histoire de bien-être parce que alterner entre plusieurs connexions c'est long.

\`\`\`bash
sudo pacman -S openssl networkmanager openbsd-netcat bind traceroute
\`\`\`

(si **NetworkManager** n'était pas installé)

\`\`\`bash
sudo systemctl enable --now NetworkManager
\`\`\`

> [!TIP]
> Ici, j'utilise **NetworkManager**. faites de même.

## identifiants

Avant de commencer, veuillez bien avoir vos **identifiants réseaux**.

## pkcs12

On va d'abord commencer à voir si on **détecte** les **signaux** qui nous seront utiles:

\`\`\`bash
nmcli radio wifi on # active le wifi
nmcli device wifi list
\`\`\`

Une longue **liste** de **wifi** devraient apparaître, mais celui qui nous **intéresse** dans cette section est \`Etablissement_invite\`.\\
C'est un **wifi public** donc on va simplement se connecter.

Je **conseille** d'utiliser la **commande** \`nmtui\` pour être sûr de savoir ce que l'ont fais et **éviter** les **fautes de frappes**.\\
Donc pour se connecter:

\`\`\`bash
nmtui
\`\`\`

Utilisez les **flèches directrices** et le **bouton** \`Entrée\` pour pouvoir naviguer dans le tui (_la souris ne fonctionnera jamais_).\\
Allez dans la **section** \`Activer une connexion\` et **sélectionnez** \`Etablissement_invite\`.\\
Quand un petit \`*\` apparaît à côté du nom du réseau, ça veut dire qu'on y est bien **connecté**.

À la **différence** de windows, la **page** **ssl** (où on **rentre** nos **identifiants** sur le **navigateur**) ne s'**ouvre pas** toute seule.\\
Donc dans votre **navigateur**, écrivez:

\`\`\`url
http://neverssl.com
\`\`\`

Quand la **page** avec _Lycée 4.0_ apparaît, entrez votre **identifiant** et votre **mot de passe** tout en acceptant les conditions.\\
Ensuite, un **bouton** \`Téléchargement\` apparaît sur la page. **Cliquez** dessus et un fichier \`OnboardCertificate.pkcs12\` devrait se **télécharger**.

> [!CAUTION]
> Sur cette même page, un **code** \`Le fichier de certificat est protégé par mot de passe à l'aide de ce mot de passe : XXXXXX\` devrait aussi apparaître, **ne partagez jamais** ce code avec ce fichier.

**Notez bien** ce **code** quelque part, il nous sera **utile** pendant tout le processus de **connexion**.\\

On va maintenant **inspecter** le **certificat**:

\`\`\`bash
openssl pkcs12 -in OnboardCertificate.pkcs12 -clcerts -nokeys
\`\`\`

Le \`Import Password:\` est donc le code \`XXXXXXXX\`.

Le **résultat** de la **commande** devrait **ressembler** à ça:

\`\`\`bash
Bag Attributes
    localKeyID: 01 00 00 00
    friendlyName: votre_nom_utilisateur
\`\`\`

Si toutes les **étapes** ci-dessus se sont bien **passées**, on passe **maintenant** à la **connexion** (ne veut pas dire internet encore...)

## extraction crt/key

Mais quelle peut bien être la **sécurité** **annoncée**:

\`\`\`bash
nmcli -f SSID,SECURITY device wifi list | grep -E 'Etablissement($|_)'
\`\`\`

Le **retour** sera, normalement:

\`\`\`bash
Etablissement_enregistrement  --
Etablissement_invite          --
Etablissement_enregistrement  --
Etablissement_invite          --
Etablissement_invite          --
\`\`\`

Hmm, donc **pas de sécurité annoncée**.

\`\`\`bash
nmcli -f BSSID,SSID,CHAN,SIGNAL,SECURITY device wifi list
\`\`\`

Ah, j'ai rien dit. d'après le **résultat** de cette **commande**, \`Etablissement\` **annonce** \`WPA2 802.1X\`.\\
On en déduit donc que le réseau **utilise** **WPA2-Enterprise / 802.1X**, ce qui est **cohérent** avec notre **certificat PKCS12**.\\
Donc d'après toutes les **informations** qu'on a trouvé, on va **configurer** **EAP-TLS** avec **NetworkManager**.

> [!WARNING]
> Les étapes ci-dessous vont traiter des fichiers très sensibles donc faites très attention aux accès de votre ordinateur.

On va d'abord commencer par **extraire** le **certificat** et sa **clé** dans un dossier à part:

\`\`\`bash
mkdir -p ~/.config/wifi
chmod 700 ~/.config/wifi
\`\`\`

Puis:

\`\`\`bash
openssl pkcs12 -in OnboardCertificate.pkcs12 \\
  -clcerts -nokeys \\
  -out ~/.config/wifi/etablissement-client.crt
\`\`\`

Quand vous allez faire cette **commande**, un **prompt** apparaîtra en vous demandant \`Enter PEM pass phrase\`.\\
Ce **mot de passe PEM** est **définit par vous**. Vous pouvez y mettre ce que vous voulez, même si je conseille d'utiliser le même mot de passe pour \`Import Password\`.\\
**Réecrivez** simplement ce que vous avez écris quand \`Verifying - Enter PEM pass phrase\` apparaît.

\`\`\`bash
openssl pkcs12 -in OnboardCertificate.pkcs12 \\
  -nocerts \\
  -out ~/.config/wifi/etablissement-client.key # fichier sensible en question
\`\`\`

Enfin:

\`\`\`bash
chmod 600 ~/.config/wifi/etablissement-client.key # restreint l'accès au fichier
\`\`\`

## eap-tls

On va maintenant **crée le profil** EAP-TLS:

\`\`\`bash
nmcli connection add type wifi \\
  ifname "*" \\
  con-name "Etablissement" \\
  ssid "Etablissement"
\`\`\`

Puis:

\`\`\`bash
nmcli connection modify "Etablissement" \\
  wifi-sec.key-mgmt wpa-eap \\
  802-1x.eap tls \\
  802-1x.identity "csiegrist1" \\
  802-1x.client-cert "$HOME/.config/wifi/etablissement-client.crt" \\
  802-1x.private-key "$HOME/.config/wifi/etablissement-client.key"
\`\`\`

**Vérifions** maintenant que tout à bien été pris en compte:

\`\`\`bash
nmcli connection show "Etablissement" | grep 802-1x
\`\`\`

On devrait y voir:

\`\`\`text
802-1x.eap:              tls
802-1x.identity:         csiegrist1
802-1x.client-cert:      /home/...
802-1x.private-key:      /home/...
\`\`\`

Et ENFIN si tout est bon:

\`\`\`bash
nmcli --ask connection up "Etablissement"
\`\`\`

Le **mot de passe de la clé privée** est le **PEM** précédemment définit.\\
La **commande prend un temps à se faire** donc laisse faire, jusqu'à soit \`Connexion activée (chemin D-Bus actif: ...)\` ou une **erreur**.\\

On est maintenant **authentifié** sur le wifi sauf que on ne peut **pas** encore **accéder** à internet.

\`\`\`bash
ping -c 4 1.1.1.1
\`\`\`

## recherche du proxy (facultatif)

Quand je veux \`curl\`, je ne vais **jamais** réussir à **recevoir** les paquets.

Je vais donc **chercher** la _route_.

\`\`\`bash
ip route
\`\`\`

Eureka, je trouve \`10.167.227.254\`, qui est la **passerelle** HTTP/S.

Avec très peu d'espoirs, je vais quand même tester voir si je reçois une réponse de la **passerelle** en HTTP ou en HTTPS:

\`\`\`bash
curl -v --connect-timeout 5 http://10.167.227.254
curl -v --connect-timeout 5 https://10.167.227.254
\`\`\`

- En HTTP: \`Connexion refusée\`
- En HTTPS: un **certificat** auto-signé \`subject: CN=HTTPS-Self-Signed-Certificate-d32...\`

Mais comme vu dans la rubrique avant, \`ping\` **fonctionne**.
donc:

\`\`\`bash
ping -c 4 10.167.227.254
\`\`\`

Et là ça fonctionne: \`4 paquets transmis, 4 reçus, 0% packet loss\`

Je vais donc **vérifier** si c'est un **portail captif**.

\`\`\`bash
curl -k -v --connect-timeout 5 https://10.167.227.254/
\`\`\`

Réponse:

\`\`\`bash
HTTP/1.1 301 Moved Permanently
Location: /web/index.html
\`\`\`

Ah!

\`\`\`bash
curl -k https://10.167.227.254/web/index.html
\`\`\`

Et là on **obtient** du **HTML** avec \`Web managerment Home\` et un script qui **redirige** vers \`/wnm/ssl/web/frame/login.html\`.

**Conclusion**: ce n'est **pas** un portail **captif classique**, mais une **interface admin Aruba** (**inutilisable** dans notre cas).

Je vais donc comparer le **réseau local** et **internet**.

**Test des ports locaux:**

\`\`\`bash
nc -vz -w 5 10.167.227.254 443
\`\`\`

Réponse: \`succeeded!\`

**Test des ports internet:**

\`\`\`bash
nc -vz -w 5 1.1.1.1 80
nc -vz -w 5 1.1.1.1 443
\`\`\`

Réponse: \`timed out\`
Donc le TCP sortant direct est bloqué. Il faut donc passer par un **proxy**.

Je vérifie donc la config de NM:

\`\`\`bash
nmcli device show wlan0 | grep -E 'IP4|DOMAIN|DNS|PROXY|GATEWAY'
\`\`\`

Résultat:
\`IP4.ADDRESS[1]: 10.167.227.50/24\`
\`IP4.GATEWAY: 10.167.227.254\`
\`IP4.DNS[1]: 192.168.228.254\`
\`IP4.DOMAIN[1]: 0680066c-01.etab.ac-strasbourg.fr\`

Et d'après \`nmcli connection show "Etablissement" | grep -iE 'proxy|802-1x|ipv4'\`, il n'y a pas de \`proxy.method\`. Donc **aucun** **proxy** n'est configuré dans NM.

Je vérifie donc le **DNS institutionnel** trouvé juste au-dessus \`192.168.228.254\`:

\`\`\`bash
nslookup google.com 192.168.228.254
\`\`\`

Et il répond bien:  
\`Name: google.com\`
\`Address: 172.217.17.46\`

Mais mais est-ce que **monsieur** **TCP** va vouloir fonctionner...

\`\`\`bash
nc -vz -w 5 192.168.228.254 53
\`\`\`

\`succeeded!\`

\`\`\`bash
nc -vz -w 5 192.168.228.254 443
\`\`\`

\`timed out\`
Hm...

Donc le DNS fonctionne, mais pas le **TCP vers internet**.

Je vais donc essayer de **visualiser** le tout avec un **traceroute**.

\`\`\`bash
traceroute -4 1.1.1.1
\`\`\`

Et je vois: \`2 wpad.0680066c-01.etab.ac-strasbourg.fr (192.168.228.254)\`
Le nom \`wpad\` est très important : cela signifie **Web Proxy Auto-Discovery**.
Donc le réseau **utilise** bien un **proxy**.

Mon **DHCP** ne m'a pas directement donné le proxy dans NetworkManager car il **existe donc sur internet** et **permet** donc aux **navigateurs** de **découvrir** **automatiquement** le **proxy**.\\
C'est pour ça que **aucune commande** venant d'un **terminal** **fonctionne**, car il ne **passe jamais** par le **proxy** énoncé dans le WPAD.

Je vais donc \`curl\` le wpad pour y voir plus clair

\`\`\`bash
curl -v --connect-timeout 5 http://wpad.0680066c-01.etab.ac-strasbourg.fr/wpad.dat
\`\`\`

Et le **fichier** contient bien \`return "PROXY 192.168.228.254:3128";\` et des **exceptions** pour les réseaux **internes** en \`DIRECT\`.\\
C'est-à- que pour certains sites, on peut se connecter **directement** et pour les autres ont doit **passer** par le proxy \`192.168.228.254:3128\`.

Je valide donc toutes mes hypothèses:

\`\`\`bash
curl -v --proxy http://192.168.228.254:3128 https://www.google.com
\`\`\`

Et le résultat est enfin bon:
\`CONNECT www.google.com:443 HTTP/1.1\`
\`HTTP/1.1 200 Connection established\`

**Conclusion**: le problème n'était pas le wifi, ni EAP-TLS, ni le DNS: c'était l'**absence d'utilisation du proxy** (navigateur incapable quoi).

### TL;DR

J'ai donc:

1. **Tester** la passerelle locale ;

2. **Vérifier** si c’est un portail captif ;

3. **Comparer** accès local et accès Internet ;

4. **Vérifier** DNS, routes, NetworkManager ;

5. **Fais** un traceroute ;

6. **Découvert** le WPAD ;

7. **Lu** le fichier wpad.dat ;

8. **Tester** le proxy 192.168.228.254:3128 ;

9. **Conclus** que le réseau impose ce proxy.

## proxy

Mais donc maintenant, comment utiliser ce proxy ?
Malheureusement, va falloir le configurer manuellement pour chaque application...
`}];function qs(e,t=[]){return e.flatMap(e=>{let n={...e,ancestors:t};return e.type===`folder`?[n,...qs(e.children,[...t,e])]:[n]})}function Js(e){let t=e.split(`.`).pop()?.toLowerCase();return[`md`,`txt`,`pdf`].includes(t)?Bt:[`py`,`js`,`jsx`,`html`,`css`,`sql`,`json`].includes(t)?Rt:Ht}function Ys(e,t){return e.name.toLocaleLowerCase(`fr`).includes(t)?!0:e.type===`folder`&&e.children.some(e=>Ys(e,t))}function Xs({name:e,term:t}){if(!t)return e;let n=e.toLocaleLowerCase(`fr`).indexOf(t);return n<0?e:(0,B.jsxs)(B.Fragment,{children:[e.slice(0,n),(0,B.jsx)(`mark`,{className:`rounded-sm bg-foreground/15 text-foreground`,children:e.slice(n,n+t.length)}),e.slice(n+t.length)]})}function Zs({nodes:e,depth:t=0,query:n,expanded:r,currentFolderPath:i,selectedPath:a,onFolderSelect:o,onFileSelect:s,onToggle:c}){return(n?e.filter(e=>Ys(e,n)):e).map(e=>{let l=e.type===`folder`,u=r.has(e.path)||!!(n&&l&&e.children.some(e=>Ys(e,n))),d=l?i===e.path:a===e.path,f=l?u?R:Gt:Js(e.name);return(0,B.jsx)(`div`,{children:l?(0,B.jsxs)(Ar,{open:u,onOpenChange:()=>c(e.path),children:[(0,B.jsxs)(`div`,{className:`tree-row group flex items-center gap-1 rounded-md pr-2 transition-colors ${d?`bg-accent text-foreground`:`text-muted-foreground hover:bg-accent/60 hover:text-foreground`}`,style:{paddingLeft:`${8+t*14}px`},children:[(0,B.jsx)(jr,{"aria-label":`${u?`Replier`:`Déplier`} ${e.name}`,className:`flex size-6 shrink-0 items-center justify-center rounded text-muted-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground`,children:u?(0,B.jsx)(Mt,{className:`size-3.5`}):(0,B.jsx)(Pt,{className:`size-3.5`})}),(0,B.jsxs)(Cr,{type:`button`,variant:`ghost`,onClick:()=>o(e),className:`h-7 min-w-0 flex-1 justify-start gap-2 rounded px-1.5 text-left text-xs font-normal text-current hover:bg-transparent hover:text-foreground`,children:[(0,B.jsx)(f,{className:`size-3.5 shrink-0 text-muted-foreground`}),(0,B.jsx)(`span`,{className:`truncate`,children:(0,B.jsx)(Xs,{name:e.name,term:n})})]})]}),(0,B.jsx)(Mr,{children:(0,B.jsx)(Zs,{nodes:e.children,depth:t+1,query:n,expanded:r,currentFolderPath:i,selectedPath:a,onFolderSelect:o,onFileSelect:s,onToggle:c})})]}):(0,B.jsxs)(`div`,{className:`tree-row group flex items-center gap-1 rounded-md pr-2 transition-colors ${d?`bg-accent text-foreground`:`text-muted-foreground hover:bg-accent/60 hover:text-foreground`}`,style:{paddingLeft:`${8+t*14}px`},children:[(0,B.jsx)(`span`,{className:`w-6 shrink-0`}),(0,B.jsxs)(Cr,{type:`button`,variant:`ghost`,onClick:()=>s(e),className:`h-7 min-w-0 flex-1 justify-start gap-2 rounded px-1.5 text-left text-xs font-normal text-current hover:bg-transparent hover:text-foreground`,children:[(0,B.jsx)(f,{className:`size-3.5 shrink-0 text-muted-foreground`}),(0,B.jsx)(`span`,{className:`truncate`,children:(0,B.jsx)(Xs,{name:e.name,term:n})})]})]})},e.path)})}function Qs({query:e,expanded:t,currentFolderPath:n,selectedPath:r,onFolderSelect:i,onFileSelect:a,onToggle:o,onRootSelect:s,onClose:c}){let l=(0,g.useMemo)(()=>qs(Ks),[]).filter(e=>e.type===`file`).length;return(0,B.jsxs)(`div`,{className:`flex h-full min-h-0 flex-col bg-background text-foreground`,children:[(0,B.jsxs)(`div`,{className:`flex h-14.5 shrink-0 items-center justify-between border-b border-border px-4`,children:[(0,B.jsxs)(Cr,{type:`button`,variant:`ghost`,onClick:s,className:`h-auto justify-start gap-2.5 p-0 text-left hover:bg-transparent`,children:[(0,B.jsx)(`span`,{className:`flex size-7 items-center justify-center rounded-md border border-border bg-secondary text-[11px] font-semibold tracking-tight text-foreground`,children:`N`}),(0,B.jsxs)(`span`,{className:`text-xs font-medium tracking-wide`,children:[`NSI `,(0,B.jsx)(`span`,{className:`text-muted-foreground`,children:`/ explorer`})]})]}),c&&(0,B.jsx)(Cr,{type:`button`,variant:`ghost`,size:`icon-sm`,onClick:c,"aria-label":`Fermer la navigation`,className:`text-muted-foreground`,children:(0,B.jsx)($t,{})})]}),(0,B.jsxs)(`div`,{className:`flex items-center justify-between px-4 pb-2 pt-5`,children:[(0,B.jsx)(`span`,{className:`text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground`,children:`Explorateur`}),(0,B.jsx)(`span`,{className:`font-mono text-[10px] text-muted-foreground/70`,children:l})]}),(0,B.jsxs)(Cr,{type:`button`,variant:`ghost`,onClick:s,className:`mx-2 mb-2 h-8 w-auto justify-start gap-2 rounded-md px-2.5 text-xs ${n===``&&!r?`bg-accent text-foreground`:`text-muted-foreground hover:bg-accent/60 hover:text-foreground`}`,children:[(0,B.jsx)(qt,{className:`size-3.5`}),` Accueil`]}),(0,B.jsx)(Na,{className:`min-h-0 flex-1 px-2 pb-4`,viewportClassName:`h-full`,children:e&&!Ks.some(t=>Ys(t,e))?(0,B.jsx)(`p`,{className:`px-3 py-5 text-xs text-muted-foreground`,children:`Aucun fichier ou dossier trouvé.`}):(0,B.jsx)(Zs,{nodes:Ks,query:e,expanded:t,currentFolderPath:n,selectedPath:r,onFolderSelect:i,onFileSelect:a,onToggle:o})}),(0,B.jsx)(`div`,{className:`border-t border-border px-4 py-3`,children:(0,B.jsxs)(`p`,{className:`font-mono text-[10px] text-muted-foreground`,children:[`Les prémices de la programmation`,` `]})})]})}function $s(){let[e,t]=(0,g.useState)(``),[n,r]=(0,g.useState)(()=>new Set([`Algorithmique`,`Python`,`Bases de données`,`Réseaux`])),[i,a]=(0,g.useState)(``),[o,s]=(0,g.useState)(null),[c,l]=(0,g.useState)(!1),[u,d]=(0,g.useState)(!1),f=(0,g.useRef)(null),p=e.trim().toLocaleLowerCase(`fr`),m=o?o.path.split(`/`):i?i.split(`/`):[],h=o?.content.split(`
`).length??0;(0,g.useEffect)(()=>{function e(e){(e.metaKey||e.ctrlKey)&&e.key.toLowerCase()===`k`&&(e.preventDefault(),f.current?.focus()),e.key===`Escape`&&document.activeElement===f.current&&(t(``),f.current?.blur())}return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]);function _(e){a(e),s(null),l(!1)}function v(e){s(e),a(e.path.split(`/`).slice(0,-1).join(`/`)),l(!1)}function y(e){r(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})}function b(e){return(0,B.jsx)(Qs,{query:p,expanded:n,currentFolderPath:i,selectedPath:o?.path,onFolderSelect:e=>{_(e.path),r(t=>new Set(t).add(e.path))},onFileSelect:v,onToggle:y,onRootSelect:()=>_(``),onClose:e})}return(0,B.jsxs)(`main`,{className:`explorer-shell flex h-dvh min-h-105 w-full overflow-hidden bg-background text-foreground`,children:[(0,B.jsx)(`aside`,{className:`hidden w-64.5 shrink-0 border-r border-border md:block`,children:b()}),(0,B.jsx)(Vs,{open:c,onOpenChange:l,children:(0,B.jsxs)(Ws,{side:`left`,showCloseButton:!1,className:`w-72.5 max-w-[85vw] gap-0 border-r border-border bg-background p-0 sm:max-w-72.5`,children:[(0,B.jsx)(Gs,{className:`sr-only`,children:`Explorateur de fichiers`}),b(()=>l(!1))]})}),(0,B.jsxs)(`section`,{className:`flex min-w-0 flex-1 flex-col`,children:[(0,B.jsxs)(`header`,{className:`flex min-h-14.5 shrink-0 items-center gap-3 border-b border-border px-3 sm:px-5`,children:[(0,B.jsx)(Cr,{type:`button`,variant:`ghost`,size:`icon-sm`,onClick:()=>l(!0),"aria-label":`Ouvrir la navigation`,className:`shrink-0 text-muted-foreground md:hidden`,children:(0,B.jsx)(Yt,{})}),(0,B.jsx)(wr,{className:`min-w-0 flex-1`,children:(0,B.jsxs)(Tr,{className:`flex-nowrap gap-1 overflow-hidden text-xs`,children:[(0,B.jsx)(Er,{children:(0,B.jsxs)(Cr,{type:`button`,variant:`ghost`,size:`xs`,onClick:()=>_(``),className:`h-7 gap-1.5 px-1.5 text-muted-foreground hover:text-foreground`,children:[(0,B.jsx)(qt,{className:`size-3.5`}),(0,B.jsx)(`span`,{className:`hidden sm:inline`,children:`Accueil`})]})}),m.map((e,t)=>{let n=m.slice(0,t+1).join(`/`),r=t===m.length-1;return(0,B.jsxs)(g.Fragment,{children:[(0,B.jsx)(Or,{className:`text-muted-foreground/50`}),(0,B.jsx)(Er,{className:`min-w-0`,children:r?(0,B.jsx)(Dr,{className:`max-w-[min(35vw,220px)] truncate text-xs`,children:e}):(0,B.jsx)(Cr,{type:`button`,variant:`ghost`,size:`xs`,onClick:()=>_(n),className:`h-7 max-w-[min(24vw,150px)] truncate px-1.5 text-muted-foreground hover:text-foreground`,children:e})})]},n)})]})}),(0,B.jsxs)(`label`,{className:`relative ml-auto block w-[clamp(124px,34vw,270px)] shrink-0`,children:[(0,B.jsx)(Zt,{className:`pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground`}),(0,B.jsx)(Ma,{ref:f,value:e,onChange:e=>t(e.target.value),placeholder:`Rechercher dans le projet…`,"aria-label":`Rechercher des fichiers et dossiers`,className:`h-8 rounded-md border-border bg-secondary/50 pl-8 pr-14 text-xs placeholder:text-muted-foreground/70 focus-visible:bg-background`}),e?(0,B.jsx)(Cr,{type:`button`,variant:`ghost`,size:`icon-xs`,onClick:()=>t(``),"aria-label":`Effacer la recherche`,className:`absolute right-1 top-1/2 size-6 -translate-y-1/2 text-muted-foreground`,children:(0,B.jsx)($t,{className:`size-3`})}):(0,B.jsx)(`kbd`,{className:`pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded border border-border px-1 font-mono text-[9px] text-muted-foreground`,children:`⌘ K`})]})]}),(0,B.jsxs)(`div`,{className:`flex min-h-0 flex-1 flex-col`,children:[(0,B.jsxs)(`div`,{className:`flex h-10 shrink-0 items-center justify-between border-b border-border bg-secondary/20 px-4 sm:px-6`,children:[(0,B.jsxs)(`div`,{className:`flex min-w-0 items-center gap-2 text-xs text-muted-foreground`,children:[o?(0,B.jsx)(It,{className:`size-3.5`}):(0,B.jsx)(At,{className:`size-3.5`}),(0,B.jsx)(`span`,{className:`truncate`,children:o?.name??`Aperçu`}),o&&(0,B.jsx)(`span`,{className:`hidden font-mono text-[10px] text-muted-foreground/60 sm:inline`,children:o.language})]}),o&&(0,B.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,B.jsx)(`span`,{className:`hidden text-[10px] text-muted-foreground sm:inline`,children:`Retour à la ligne`}),(0,B.jsx)(nn,{checked:u,onCheckedChange:d,label:`Renvoyer les longues lignes à la ligne`,className:`h-6 w-11`})]})]}),o?(0,B.jsxs)(`div`,{className:`flex min-h-0 flex-1 flex-col`,children:[(0,B.jsxs)(`div`,{className:`flex shrink-0 items-center justify-between border-b border-border/70 px-4 py-2.5 sm:px-6`,children:[(0,B.jsxs)(`div`,{className:`min-w-0`,children:[(0,B.jsx)(`h1`,{className:`truncate text-sm font-medium tracking-tight`,children:o.name}),(0,B.jsx)(`p`,{className:`mt-0.5 truncate font-mono text-[10px] text-muted-foreground`,children:o.path})]}),(0,B.jsxs)(`span`,{className:`ml-4 shrink-0 font-mono text-[10px] text-muted-foreground`,children:[h,` lignes`]})]}),(0,B.jsx)(Na,{className:`min-h-0 flex-1`,viewportClassName:`h-full`,children:(0,B.jsx)(`div`,{className:`file-preview min-w-0 py-5 pr-6`,children:(0,B.jsx)(`pre`,{className:u?`whitespace-pre-wrap wrap-break-word`:`whitespace-pre`,children:(0,B.jsx)(`code`,{children:o.content.split(`
`).map((e,t)=>(0,B.jsxs)(`span`,{className:`code-line grid min-h-6 grid-cols-[3.25rem_minmax(0,1fr)]`,children:[(0,B.jsx)(`span`,{"aria-hidden":`true`,className:`select-none pr-4 text-right text-muted-foreground/40`,children:t+1}),(0,B.jsx)(`span`,{children:e||` `})]},`${t}-${e}`))})})})}),(0,B.jsxs)(`footer`,{className:`flex h-7 shrink-0 items-center justify-between border-t border-border bg-secondary/20 px-3 font-mono text-[9px] text-muted-foreground sm:px-5`,children:[(0,B.jsx)(`span`,{children:o.language}),(0,B.jsx)(`span`,{children:`UTF-8`})]})]}):(0,B.jsx)(`div`,{className:`flex min-h-0 flex-1 items-center justify-center px-6 text-center`,children:(0,B.jsxs)(`div`,{className:`max-w-sm`,children:[(0,B.jsx)(`div`,{className:`mx-auto mb-4 flex size-11 items-center justify-center rounded-xl border border-border bg-secondary/50 text-muted-foreground`,children:(0,B.jsx)(Rt,{className:`size-5`})}),(0,B.jsx)(`h1`,{className:`text-sm font-medium`,children:`Sélectionne un fichier`}),(0,B.jsx)(`p`,{className:`mt-1.5 text-xs leading-relaxed text-muted-foreground`,children:`Choisis un fichier dans l’explorateur pour consulter son contenu.`}),(0,B.jsxs)(`p`,{className:`mt-5 font-mono text-[10px] text-muted-foreground/60`,children:[qs(Ks).filter(e=>e.type===`file`).length,` fichiers · NSI`]})]})})]})]})]})}var ec=[`N`,`S`,`I`];function tc(){let e=ze(),[t,n]=(0,g.useState)(!1);return(0,g.useEffect)(()=>{let t=window.setTimeout(()=>n(!0),1550),r=window.setTimeout(()=>e(`/explorer`,{replace:!0}),2050);return()=>{window.clearTimeout(t),window.clearTimeout(r)}},[e]),(0,B.jsxs)(`main`,{className:`intro-screen fixed inset-0 z-50 grid place-items-center bg-background ${t?`intro-screen-leaving`:``}`,children:[(0,B.jsx)(`div`,{"aria-label":`NSI`,className:`intro-wordmark flex items-center font-mono text-[clamp(5rem,22vw,15rem)] font-medium leading-none tracking-[-0.12em] text-foreground`,children:ec.map((e,t)=>(0,B.jsx)(`span`,{"aria-hidden":`true`,style:{animationDelay:`${t*150}ms`},children:e},e))}),(0,B.jsx)(`p`,{className:`intro-caption absolute bottom-[18vh] font-mono text-[10px] uppercase tracking-[0.42em] text-muted-foreground`,children:`Un espace pour apprendre`})]})}function nc(){return(0,B.jsxs)(lt,{children:[(0,B.jsx)(st,{path:`/`,element:(0,B.jsx)(tc,{})}),(0,B.jsx)(st,{path:`/explorer`,element:(0,B.jsx)($s,{})}),(0,B.jsx)(st,{path:`*`,element:(0,B.jsx)(ot,{to:`/`,replace:!0})})]})}document.documentElement.classList.add(`dark`),(0,v.createRoot)(document.getElementById(`root`)).render((0,B.jsx)(g.StrictMode,{children:(0,B.jsx)(mt,{children:(0,B.jsx)(nc,{})})}));
var NanoDate=function(){"use strict";function e(e,t,n){var r=n.configurable,i=n.enumerable,o=n.initializer,s=n.value;return{configurable:r,enumerable:i,get:function(){if(this!==e){var n=o?o.call(this):s;return G(this,t,{configurable:r,enumerable:i,writable:!0,value:n}),n}},set:a(t)}}function t(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return u(e,n)}function n(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,n,r,i){var o={};return Object.keys(r).forEach(function(e){o[e]=r[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function s(e){if(!e||!e.hasOwnProperty)return!1;for(var t=["value","initializer","get","set"],n=0,r=t.length;n<r;n++)if(e.hasOwnProperty(t[n]))return!0;return!1}function u(e,t){return s(t[t.length-1])?e.apply(void 0,o(t).concat([[]])):function(){return e.apply(void 0,Array.prototype.slice.call(arguments).concat([t]))}}function l(e){var t={};return J(e).forEach(function(n){return t[n]=W(e,n)}),t}function a(e){return function(t){return Object.defineProperty(this,e,{configurable:!0,writable:!0,enumerable:!0,value:t}),t}}function c(e,t){return e.bind?e.bind(t):function(){return e.apply(t,arguments)}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t,n,r){var i=re(r,2),o=i[0],s=void 0===o?ie:o,u=i[1],l=void 0===u?{}:u;if("function"!=typeof n.value)throw new SyntaxError("Only functions can be marked as deprecated");var a=e.constructor.name+"#"+t;return l.url&&(s+="\n\n    See "+l.url+" for more details.\n\n"),ne({},n,{value:function(){return X("DEPRECATION "+a+": "+s),n.value.apply(this,arguments)}})}function g(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function p(e,t){if("undefined"==typeof WeakMap)throw new Error("Using @autobind on "+t.name+"() requires WeakMap support due to its use of super."+t.name+"()\n      See https://github.com/jayphelps/core-decorators.js/issues/20");ue||(ue=new WeakMap),!1===ue.has(e)&&ue.set(e,new WeakMap);var n=ue.get(e);return!1===n.has(t)&&n.set(t,c(t,e)),n.get(t)}function d(e){for(var t=l(e.prototype),n=J(t),r=0,i=n.length;r<i;r++){var o=n[r],s=t[o];"function"==typeof s.value&&"constructor"!==o&&oe(e.prototype,o,y(e.prototype,o,s))}}function y(e,t,n){var r=n.value,i=n.configurable,o=n.enumerable;if("function"!=typeof r)throw new SyntaxError("@autobind can only be used on functions, not: "+r);var s=e.constructor;return{configurable:i,enumerable:o,get:function(){if(this===e)return r;if(this.constructor!==s&&se(this).constructor===s)return r;if(this.constructor!==s&&t in this.constructor.prototype)return p(this,r);var n=c(r,this);return oe(this,t,{configurable:!0,writable:!0,enumerable:!1,value:n}),n},set:a(t)}}function v(e){return 1===e.length?d.apply(void 0,g(e)):y.apply(void 0,g(e))}function m(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function b(e){return Array.isArray(e)?e:Array.from(e)}function w(e,t,n,r){var i=b(r),o=i[0],s=i.slice(1),u=n.configurable,l=n.enumerable,c=n.writable,f=n.get,h=n.set,g=n.value,p=!!f;return{configurable:u,enumerable:l,get:function(){var e=p?f.call(this):g,n=o.call.apply(o,[this,e].concat(m(s)));if(p)return n;var r={configurable:u,enumerable:l};return r.value=n,r.writable=c,le(this,t,r),n},set:p?h:a()}}function T(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u(w,t)}function O(){return this.list=[],this.lastItem=void 0,this.size=0,this}function _(e,t){var n,r,i,o=e.length,s=t.length;for(r=0;r<o;r++){for(n=!0,i=0;i<s;i++)if(!M(e[r][i].arg,t[i].arg)){n=!1;break}if(n)break}e.push(e.splice(r,1)[0])}function S(e){var t,n,r=e.length,i=e[r-1];for(i.cacheItem.delete(i.arg),n=r-2;n>=0&&(i=e[n],!(t=i.cacheItem.get(i.arg))||!t.size);n--)i.cacheItem.delete(i.arg)}function M(e,t){return e===t||e!==e&&t!==t}function N(e,t,n,r,i){var o={};return Object.keys(r).forEach(function(e){o[e]=r[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}function C(e){return k(e,e<100?e<10?2:1:0,!0)}function U(e,t){return k(e,9-(""+e).length)}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return 0===t?e:k((n?"0":"")+e+(n?"":"0"),t-1,n)}function A(e){var t=""+e;return t.length<=_e?t.indexOf(".")>-1?(t=e.toFixed(3),new $(t.replace(".","")+"000")):new $(t):new $(t.slice(0,_e))}function D(e){return/^(-)?\d+$/.test(""+e)}function I(e){var t=e.toNumber();return t%4==0&&t%100!=0||t%400==0}function E(e){return I(e)?366:365}function F(e,t){return(I(e)?Me:Se)[t.toNumber()]}function x(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=e[r],o=n[r];if("number"!=typeof i||!D(i))throw new Error("Parameter "+o+" value for "+t+" has to be an integer.");n.length>r&&P(e[r+1])&&x(e,t,n,r+1)}function P(e){return void 0!==e}function z(e,t,n,r,i){function o(){for(var o=arguments.length,l=Array(o),a=0;a<o;a++)l[a]=arguments[a];x(l,t,n);var c=r();if(c!==l[0]){if(c<l[0]){var f=e._getValue.call(e,e,i,l[0]-c,u);e._full=e._full.plus(f).truncated()}else{var h=e._getValue.call(e,e,i,c-l[0],u);e._full=e._full.minus(h).truncated()}(1===l.length||l.length>1&&!P(l[1]))&&e._setupFunctions.call(e)}return l.length>1&&P(l[1])&&(l.shift(),s.apply(e,l)),r()}var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(){},u=arguments.length>6&&void 0!==arguments[6]&&arguments[6];return Object.defineProperty(o,"name",{value:t,writable:!1}),o.bind(e)}var R,j,L,B,q,V,Y="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},$=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e){!function(t){function n(e){function t(e,n){var r,i,o,s,u,l,a=this;if(!(a instanceof t))return V&&A(26,"constructor call without new",e),new t(e,n);if(null!=n&&Y(n,2,64,F,"base")){if(n|=0,l=e+"",10==n)return a=new t(e instanceof t?e:l),D(a,z+a.e+1,R);if((s="number"==typeof e)&&0*e!=0||!new RegExp("^-?"+(r="["+b.slice(0,n)+"]+")+"(?:\\."+r+")?$",n<37?"i":"").test(l))return E(a,l,s,n);s?(a.s=1/e<0?(l=l.slice(1),-1):1,V&&l.replace(/^0\.0*|\./,"").length>15&&A(F,m,e),s=!1):a.s=45===l.charCodeAt(0)?(l=l.slice(1),-1):1,l=h(l,10,n,a.s)}else{if(e instanceof t)return a.s=e.s,a.e=e.e,a.c=(e=e.c)?e.slice():e,void(F=0);if((s="number"==typeof e)&&0*e==0){if(a.s=1/e<0?(e=-e,-1):1,e===~~e){for(i=0,o=e;o>=10;o/=10,i++);return a.e=i,a.c=[e],void(F=0)}l=e+""}else{if(!g.test(l=e+""))return E(a,l,s);a.s=45===l.charCodeAt(0)?(l=l.slice(1),-1):1}}for((i=l.indexOf("."))>-1&&(l=l.replace(".","")),(o=l.search(/e/i))>0?(i<0&&(i=o),i+=+l.slice(o+1),l=l.substring(0,o)):i<0&&(i=l.length),o=0;48===l.charCodeAt(o);o++);for(u=l.length;48===l.charCodeAt(--u););if(l=l.slice(o,u+1))if(u=l.length,s&&V&&u>15&&(e>O||e!==d(e))&&A(F,m,a.s*e),(i=i-o-1)>q)a.c=a.e=null;else if(i<B)a.c=[a.e=0];else{if(a.e=i,a.c=[],o=(i+1)%T,i<0&&(o+=T),o<u){for(o&&a.c.push(+l.slice(0,o)),u-=T;o<u;)a.c.push(+l.slice(o,o+=T));l=l.slice(o),o=T-l.length}else o-=u;for(;o--;l+="0");a.c.push(+l)}else a.c=[a.e=0];F=0}function h(e,n,r,o){var s,u,a,f,h,g,p,d=e.indexOf("."),y=z,v=R;for(r<37&&(e=e.toLowerCase()),d>=0&&(a=H,H=0,e=e.replace(".",""),h=(p=new t(r)).pow(e.length-d),H=a,p.c=l(c(i(h.c),h.e),10,n),p.e=p.c.length),u=a=(g=l(e,r,n)).length;0==g[--a];g.pop());if(!g[0])return"0";if(d<0?--u:(h.c=g,h.e=u,h.s=o,g=(h=I(h,p,y,v,n)).c,f=h.r,u=h.e),s=u+y+1,d=g[s],a=n/2,f=f||s<0||null!=g[s+1],f=v<4?(null!=d||f)&&(0==v||v==(h.s<0?3:2)):d>a||d==a&&(4==v||f||6==v&&1&g[s-1]||v==(h.s<0?8:7)),s<1||!g[0])e=f?c("1",-y):"0";else{if(g.length=s,f)for(--n;++g[--s]>n;)g[s]=0,s||(++u,g=[1].concat(g));for(a=g.length;!g[--a];);for(d=0,e="";d<=a;e+=b.charAt(g[d++]));e=c(e,u)}return e}function N(e,n,r,o){var s,u,l,f,h;if(r=null!=r&&Y(r,0,8,o,v)?0|r:R,!e.c)return e.toString();if(s=e.c[0],l=e.e,null==n)h=i(e.c),h=19==o||24==o&&l<=j?a(h,l):c(h,l);else if(e=D(new t(e),n,r),u=e.e,h=i(e.c),f=h.length,19==o||24==o&&(n<=u||u<=j)){for(;f<n;h+="0",f++);h=a(h,u)}else if(n-=l,h=c(h,u),u+1>f){if(--n>0)for(h+=".";n--;h+="0");}else if((n+=u-f)>0)for(u+1==f&&(h+=".");n--;h+="0");return e.s<0&&s?"-"+h:h}function C(e,n){var r,i,o=0;for(u(e[0])&&(e=e[0]),r=new t(e[0]);++o<e.length;){if(!(i=new t(e[o])).s){r=i;break}n.call(r,i)&&(r=i)}return r}function U(e,t,n,r,i){return(e<t||e>n||e!=f(e))&&A(r,(i||"decimal places")+(e<t||e>n?" out of range":" not an integer"),e),!0}function k(e,t,n){for(var r=1,i=t.length;!t[--i];t.pop());for(i=t[0];i>=10;i/=10,r++);return(n=r+n*T-1)>q?e.c=e.e=null:n<B?e.c=[e.e=0]:(e.e=n,e.c=t),e}function A(e,t,n){var r=new Error(["new BigNumber","cmp","config","div","divToInt","eq","gt","gte","lt","lte","minus","mod","plus","precision","random","round","shift","times","toDigits","toExponential","toFixed","toFormat","toFraction","pow","toPrecision","toString","BigNumber"][e]+"() "+t+": "+n);throw r.name="BigNumber Error",F=0,r}function D(e,t,n,r){var i,o,s,u,l,a,c,f=e.c,h=_;if(f){e:{for(i=1,u=f[0];u>=10;u/=10,i++);if((o=t-i)<0)o+=T,s=t,c=(l=f[a=0])/h[i-s-1]%10|0;else if((a=p((o+1)/T))>=f.length){if(!r)break e;for(;f.length<=a;f.push(0));l=c=0,i=1,s=(o%=T)-T+1}else{for(l=u=f[a],i=1;u>=10;u/=10,i++);c=(s=(o%=T)-T+i)<0?0:l/h[i-s-1]%10|0}if(r=r||t<0||null!=f[a+1]||(s<0?l:l%h[i-s-1]),r=n<4?(c||r)&&(0==n||n==(e.s<0?3:2)):c>5||5==c&&(4==n||r||6==n&&(o>0?s>0?l/h[i-s]:0:f[a-1])%10&1||n==(e.s<0?8:7)),t<1||!f[0])return f.length=0,r?(t-=e.e+1,f[0]=h[(T-t%T)%T],e.e=-t||0):f[0]=e.e=0,e;if(0==o?(f.length=a,u=1,a--):(f.length=a+1,u=h[T-o],f[a]=s>0?d(l/h[i-s]%h[s])*u:0),r)for(;;){if(0==a){for(o=1,s=f[0];s>=10;s/=10,o++);for(s=f[0]+=u,u=1;s>=10;s/=10,u++);o!=u&&(e.e++,f[0]==w&&(f[0]=1));break}if(f[a]+=u,f[a]!=w)break;f[a--]=0,u=1}for(o=f.length;0===f[--o];f.pop());}e.e>q?e.c=e.e=null:e.e<B&&(e.c=[e.e=0])}return e}var I,E,F=0,x=t.prototype,P=new t(1),z=20,R=4,j=-7,L=21,B=-1e7,q=1e7,V=!0,Y=U,$=!1,G=1,H=0,W={decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0};return t.another=n,t.ROUND_UP=0,t.ROUND_DOWN=1,t.ROUND_CEIL=2,t.ROUND_FLOOR=3,t.ROUND_HALF_UP=4,t.ROUND_HALF_DOWN=5,t.ROUND_HALF_EVEN=6,t.ROUND_HALF_CEIL=7,t.ROUND_HALF_FLOOR=8,t.EUCLID=9,t.config=t.set=function(){var e,t,n=0,r={},i=arguments,o=i[0],l=o&&"object"==typeof o?function(){if(o.hasOwnProperty(t))return null!=(e=o[t])}:function(){if(i.length>n)return null!=(e=i[n++])};return l(t="DECIMAL_PLACES")&&Y(e,0,M,2,t)&&(z=0|e),r[t]=z,l(t="ROUNDING_MODE")&&Y(e,0,8,2,t)&&(R=0|e),r[t]=R,l(t="EXPONENTIAL_AT")&&(u(e)?Y(e[0],-M,0,2,t)&&Y(e[1],0,M,2,t)&&(j=0|e[0],L=0|e[1]):Y(e,-M,M,2,t)&&(j=-(L=0|(e<0?-e:e)))),r[t]=[j,L],l(t="RANGE")&&(u(e)?Y(e[0],-M,-1,2,t)&&Y(e[1],1,M,2,t)&&(B=0|e[0],q=0|e[1]):Y(e,-M,M,2,t)&&(0|e?B=-(q=0|(e<0?-e:e)):V&&A(2,t+" cannot be zero",e))),r[t]=[B,q],l(t="ERRORS")&&(e===!!e||1===e||0===e?(F=0,Y=(V=!!e)?U:s):V&&A(2,t+y,e)),r[t]=V,l(t="CRYPTO")&&(!0===e||!1===e||1===e||0===e?e?!(e="undefined"==typeof crypto)&&crypto&&(crypto.getRandomValues||crypto.randomBytes)?$=!0:V?A(2,"crypto unavailable",e?void 0:crypto):$=!1:$=!1:V&&A(2,t+y,e)),r[t]=$,l(t="MODULO_MODE")&&Y(e,0,9,2,t)&&(G=0|e),r[t]=G,l(t="POW_PRECISION")&&Y(e,0,M,2,t)&&(H=0|e),r[t]=H,l(t="FORMAT")&&("object"==typeof e?W=e:V&&A(2,t+" not an object",e)),r[t]=W,r},t.max=function(){return C(arguments,x.lt)},t.min=function(){return C(arguments,x.gt)},t.random=function(){var e=9007199254740992*Math.random()&2097151?function(){return d(9007199254740992*Math.random())}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)};return function(n){var r,i,o,s,u,l=0,a=[],c=new t(P);if(n=null!=n&&Y(n,0,M,14)?0|n:z,s=p(n/T),$)if(crypto.getRandomValues){for(r=crypto.getRandomValues(new Uint32Array(s*=2));l<s;)(u=131072*r[l]+(r[l+1]>>>11))>=9e15?(i=crypto.getRandomValues(new Uint32Array(2)),r[l]=i[0],r[l+1]=i[1]):(a.push(u%1e14),l+=2);l=s/2}else if(crypto.randomBytes){for(r=crypto.randomBytes(s*=7);l<s;)(u=281474976710656*(31&r[l])+1099511627776*r[l+1]+4294967296*r[l+2]+16777216*r[l+3]+(r[l+4]<<16)+(r[l+5]<<8)+r[l+6])>=9e15?crypto.randomBytes(7).copy(r,l):(a.push(u%1e14),l+=7);l=s/7}else $=!1,V&&A(14,"crypto unavailable",crypto);if(!$)for(;l<s;)(u=e())<9e15&&(a[l++]=u%1e14);for(s=a[--l],n%=T,s&&n&&(u=_[T-n],a[l]=d(s/u)*u);0===a[l];a.pop(),l--);if(l<0)a=[o=0];else{for(o=-1;0===a[0];a.splice(0,1),o-=T);for(l=1,u=a[0];u>=10;u/=10,l++);l<T&&(o-=T-l)}return c.e=o,c.c=a,c}}(),I=function(){function e(e,t,n){var r,i,o,s,u=0,l=e.length,a=t%S,c=t/S|0;for(e=e.slice();l--;)u=((i=a*(o=e[l]%S)+(r=c*o+(s=e[l]/S|0)*a)%S*S+u)/n|0)+(r/S|0)+c*s,e[l]=i%n;return u&&(e=[u].concat(e)),e}function n(e,t,n,r){var i,o;if(n!=r)o=n>r?1:-1;else for(i=o=0;i<n;i++)if(e[i]!=t[i]){o=e[i]>t[i]?1:-1;break}return o}function i(e,t,n,r){for(var i=0;n--;)e[n]-=i,i=e[n]<t[n]?1:0,e[n]=i*r+e[n]-t[n];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(o,s,u,l,a){var c,f,h,g,p,y,v,m,b,O,_,S,M,N,C,U,k,A=o.s==s.s?1:-1,I=o.c,E=s.c;if(!(I&&I[0]&&E&&E[0]))return new t(o.s&&s.s&&(I?!E||I[0]!=E[0]:E)?I&&0==I[0]||!E?0*A:A/0:NaN);for(b=(m=new t(A)).c=[],A=u+(f=o.e-s.e)+1,a||(a=w,f=r(o.e/T)-r(s.e/T),A=A/T|0),h=0;E[h]==(I[h]||0);h++);if(E[h]>(I[h]||0)&&f--,A<0)b.push(1),g=!0;else{for(N=I.length,U=E.length,h=0,A+=2,(p=d(a/(E[0]+1)))>1&&(E=e(E,p,a),I=e(I,p,a),U=E.length,N=I.length),M=U,_=(O=I.slice(0,U)).length;_<U;O[_++]=0);k=E.slice(),k=[0].concat(k),C=E[0],E[1]>=a/2&&C++;do{if(p=0,(c=n(E,O,U,_))<0){if(S=O[0],U!=_&&(S=S*a+(O[1]||0)),(p=d(S/C))>1)for(p>=a&&(p=a-1),v=(y=e(E,p,a)).length,_=O.length;1==n(y,O,v,_);)p--,i(y,U<v?k:E,v,a),v=y.length,c=1;else 0==p&&(c=p=1),v=(y=E.slice()).length;if(v<_&&(y=[0].concat(y)),i(O,y,_,a),_=O.length,-1==c)for(;n(E,O,U,_)<1;)p++,i(O,U<_?k:E,_,a),_=O.length}else 0===c&&(p++,O=[0]);b[h++]=p,O[0]?O[_++]=I[M]||0:(O=[I[M]],_=1)}while((M++<N||null!=O[0])&&A--);g=null!=O[0],b[0]||b.splice(0,1)}if(a==w){for(h=1,A=b[0];A>=10;A/=10,h++);D(m,u+(m.e=h+f*T-1)+1,l,g)}else m.e=f,m.r=+g;return m}}(),E=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,n=/^([^.]+)\.$/,r=/^\.([^.]+)$/,i=/^-?(Infinity|NaN)$/,o=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(s,u,l,a){var c,f=l?u:u.replace(o,"");if(i.test(f))s.s=isNaN(f)?null:f<0?-1:1;else{if(!l&&(f=f.replace(e,function(e,t,n){return c="x"==(n=n.toLowerCase())?16:"b"==n?2:8,a&&a!=c?e:t}),a&&(c=a,f=f.replace(n,"$1").replace(r,"0.$1")),u!=f))return new t(f,c);V&&A(F,"not a"+(a?" base "+a:"")+" number",u),s.s=null}s.c=s.e=null,F=0}}(),x.absoluteValue=x.abs=function(){var e=new t(this);return e.s<0&&(e.s=1),e},x.ceil=function(){return D(new t(this),this.e+1,2)},x.comparedTo=x.cmp=function(e,n){return F=1,o(this,new t(e,n))},x.decimalPlaces=x.dp=function(){var e,t,n=this.c;if(!n)return null;if(e=((t=n.length-1)-r(this.e/T))*T,t=n[t])for(;t%10==0;t/=10,e--);return e<0&&(e=0),e},x.dividedBy=x.div=function(e,n){return F=3,I(this,new t(e,n),z,R)},x.dividedToIntegerBy=x.divToInt=function(e,n){return F=4,I(this,new t(e,n),0,1)},x.equals=x.eq=function(e,n){return F=5,0===o(this,new t(e,n))},x.floor=function(){return D(new t(this),this.e+1,3)},x.greaterThan=x.gt=function(e,n){return F=6,o(this,new t(e,n))>0},x.greaterThanOrEqualTo=x.gte=function(e,n){return F=7,1===(n=o(this,new t(e,n)))||0===n},x.isFinite=function(){return!!this.c},x.isInteger=x.isInt=function(){return!!this.c&&r(this.e/T)>this.c.length-2},x.isNaN=function(){return!this.s},x.isNegative=x.isNeg=function(){return this.s<0},x.isZero=function(){return!!this.c&&0==this.c[0]},x.lessThan=x.lt=function(e,n){return F=8,o(this,new t(e,n))<0},x.lessThanOrEqualTo=x.lte=function(e,n){return F=9,-1===(n=o(this,new t(e,n)))||0===n},x.minus=x.sub=function(e,n){var i,o,s,u,l=this,a=l.s;if(F=10,e=new t(e,n),n=e.s,!a||!n)return new t(NaN);if(a!=n)return e.s=-n,l.plus(e);var c=l.e/T,f=e.e/T,h=l.c,g=e.c;if(!c||!f){if(!h||!g)return h?(e.s=-n,e):new t(g?l:NaN);if(!h[0]||!g[0])return g[0]?(e.s=-n,e):new t(h[0]?l:3==R?-0:0)}if(c=r(c),f=r(f),h=h.slice(),a=c-f){for((u=a<0)?(a=-a,s=h):(f=c,s=g),s.reverse(),n=a;n--;s.push(0));s.reverse()}else for(o=(u=(a=h.length)<(n=g.length))?a:n,a=n=0;n<o;n++)if(h[n]!=g[n]){u=h[n]<g[n];break}if(u&&(s=h,h=g,g=s,e.s=-e.s),(n=(o=g.length)-(i=h.length))>0)for(;n--;h[i++]=0);for(n=w-1;o>a;){if(h[--o]<g[o]){for(i=o;i&&!h[--i];h[i]=n);--h[i],h[o]+=w}h[o]-=g[o]}for(;0==h[0];h.splice(0,1),--f);return h[0]?k(e,h,f):(e.s=3==R?-1:1,e.c=[e.e=0],e)},x.modulo=x.mod=function(e,n){var r,i,o=this;return F=11,e=new t(e,n),!o.c||!e.s||e.c&&!e.c[0]?new t(NaN):!e.c||o.c&&!o.c[0]?new t(o):(9==G?(i=e.s,e.s=1,r=I(o,e,0,3),e.s=i,r.s*=i):r=I(o,e,0,G),o.minus(r.times(e)))},x.negated=x.neg=function(){var e=new t(this);return e.s=-e.s||null,e},x.plus=x.add=function(e,n){var i,o=this,s=o.s;if(F=12,e=new t(e,n),n=e.s,!s||!n)return new t(NaN);if(s!=n)return e.s=-n,o.minus(e);var u=o.e/T,l=e.e/T,a=o.c,c=e.c;if(!u||!l){if(!a||!c)return new t(s/0);if(!a[0]||!c[0])return c[0]?e:new t(a[0]?o:0*s)}if(u=r(u),l=r(l),a=a.slice(),s=u-l){for(s>0?(l=u,i=c):(s=-s,i=a),i.reverse();s--;i.push(0));i.reverse()}for((s=a.length)-(n=c.length)<0&&(i=c,c=a,a=i,n=s),s=0;n;)s=(a[--n]=a[n]+c[n]+s)/w|0,a[n]=w===a[n]?0:a[n]%w;return s&&(a=[s].concat(a),++l),k(e,a,l)},x.precision=x.sd=function(e){var t,n,r=this,i=r.c;if(null!=e&&e!==!!e&&1!==e&&0!==e&&(V&&A(13,"argument"+y,e),e!=!!e&&(e=null)),!i)return null;if(n=i.length-1,t=n*T+1,n=i[n]){for(;n%10==0;n/=10,t--);for(n=i[0];n>=10;n/=10,t++);}return e&&r.e+1>t&&(t=r.e+1),t},x.round=function(e,n){var r=new t(this);return(null==e||Y(e,0,M,15))&&D(r,~~e+this.e+1,null!=n&&Y(n,0,8,15,v)?0|n:R),r},x.shift=function(e){var n=this;return Y(e,-O,O,16,"argument")?n.times("1e"+f(e)):new t(n.c&&n.c[0]&&(e<-O||e>O)?n.s*(e<0?0:1/0):n)},x.squareRoot=x.sqrt=function(){var e,n,o,s,u,l=this,a=l.c,c=l.s,f=l.e,h=z+4,g=new t("0.5");if(1!==c||!a||!a[0])return new t(!c||c<0&&(!a||a[0])?NaN:a?l:1/0);if(0==(c=Math.sqrt(+l))||c==1/0?(((n=i(a)).length+f)%2==0&&(n+="0"),c=Math.sqrt(n),f=r((f+1)/2)-(f<0||f%2),o=new t(n=c==1/0?"1e"+f:(n=c.toExponential()).slice(0,n.indexOf("e")+1)+f)):o=new t(c+""),o.c[0])for((c=(f=o.e)+h)<3&&(c=0);;)if(u=o,o=g.times(u.plus(I(l,u,h,1))),i(u.c).slice(0,c)===(n=i(o.c)).slice(0,c)){if(o.e<f&&--c,"9999"!=(n=n.slice(c-3,c+1))&&(s||"4999"!=n)){+n&&(+n.slice(1)||"5"!=n.charAt(0))||(D(o,o.e+z+2,1),e=!o.times(o).eq(l));break}if(!s&&(D(u,u.e+z+2,0),u.times(u).eq(l))){o=u;break}h+=4,c+=4,s=1}return D(o,o.e+z+1,R,e)},x.times=x.mul=function(e,n){var i,o,s,u,l,a,c,f,h,g,p,d,y,v,m,b=this,O=b.c,_=(F=17,e=new t(e,n)).c;if(!(O&&_&&O[0]&&_[0]))return!b.s||!e.s||O&&!O[0]&&!_||_&&!_[0]&&!O?e.c=e.e=e.s=null:(e.s*=b.s,O&&_?(e.c=[0],e.e=0):e.c=e.e=null),e;for(o=r(b.e/T)+r(e.e/T),e.s*=b.s,(c=O.length)<(g=_.length)&&(y=O,O=_,_=y,s=c,c=g,g=s),s=c+g,y=[];s--;y.push(0));for(v=w,m=S,s=g;--s>=0;){for(i=0,p=_[s]%m,d=_[s]/m|0,u=s+(l=c);u>s;)i=((f=p*(f=O[--l]%m)+(a=d*f+(h=O[l]/m|0)*p)%m*m+y[u]+i)/v|0)+(a/m|0)+d*h,y[u--]=f%v;y[u]=i}return i?++o:y.splice(0,1),k(e,y,o)},x.toDigits=function(e,n){var r=new t(this);return e=null!=e&&Y(e,1,M,18,"precision")?0|e:null,n=null!=n&&Y(n,0,8,18,v)?0|n:R,e?D(r,e,n):r},x.toExponential=function(e,t){return N(this,null!=e&&Y(e,0,M,19)?1+~~e:null,t,19)},x.toFixed=function(e,t){return N(this,null!=e&&Y(e,0,M,20)?~~e+this.e+1:null,t,20)},x.toFormat=function(e,t){var n=N(this,null!=e&&Y(e,0,M,21)?~~e+this.e+1:null,t,21);if(this.c){var r,i=n.split("."),o=+W.groupSize,s=+W.secondaryGroupSize,u=W.groupSeparator,l=i[0],a=i[1],c=this.s<0,f=c?l.slice(1):l,h=f.length;if(s&&(r=o,o=s,s=r,h-=r),o>0&&h>0){for(r=h%o||o,l=f.substr(0,r);r<h;r+=o)l+=u+f.substr(r,o);s>0&&(l+=u+f.slice(r)),c&&(l="-"+l)}n=a?l+W.decimalSeparator+((s=+W.fractionGroupSize)?a.replace(new RegExp("\\d{"+s+"}\\B","g"),"$&"+W.fractionGroupSeparator):a):l}return n},x.toFraction=function(e){var n,r,o,s,u,l,a,c,f,h=V,g=this,p=g.c,d=new t(P),y=r=new t(P),v=a=new t(P);if(null!=e&&(V=!1,l=new t(e),V=h,(h=l.isInt())&&!l.lt(P)||(V&&A(22,"max denominator "+(h?"out of range":"not an integer"),e),e=!h&&l.c&&D(l,l.e+1,1).gte(P)?l:null)),!p)return g.toString();for(f=i(p),s=d.e=f.length-g.e-1,d.c[0]=_[(u=s%T)<0?T+u:u],e=!e||l.cmp(d)>0?s>0?d:y:l,u=q,q=1/0,l=new t(f),a.c[0]=0;c=I(l,d,0,1),1!=(o=r.plus(c.times(v))).cmp(e);)r=v,v=o,y=a.plus(c.times(o=y)),a=o,d=l.minus(c.times(o=d)),l=o;return o=I(e.minus(r),v,0,1),a=a.plus(o.times(y)),r=r.plus(o.times(v)),a.s=y.s=g.s,s*=2,n=I(y,v,s,R).minus(g).abs().cmp(I(a,r,s,R).minus(g).abs())<1?[y.toString(),v.toString()]:[a.toString(),r.toString()],q=u,n},x.toNumber=function(){return+this},x.toPower=x.pow=function(e,n){var r,i,o,s=d(e<0?-e:+e),u=this;if(null!=n&&(F=23,n=new t(n)),!Y(e,-O,O,23,"exponent")&&(!isFinite(e)||s>O&&(e/=0)||parseFloat(e)!=e&&!(e=NaN))||0==e)return r=Math.pow(+u,e),new t(n?r%n:r);for(n?e>1&&u.gt(P)&&u.isInt()&&n.gt(P)&&n.isInt()?u=u.mod(n):(o=n,n=null):H&&(r=p(H/T+2)),i=new t(P);;){if(s%2){if(!(i=i.times(u)).c)break;r?i.c.length>r&&(i.c.length=r):n&&(i=i.mod(n))}if(!(s=d(s/2)))break;u=u.times(u),r?u.c&&u.c.length>r&&(u.c.length=r):n&&(u=u.mod(n))}return n?i:(e<0&&(i=P.div(i)),o?i.mod(o):r?D(i,H,R):i)},x.toPrecision=function(e,t){return N(this,null!=e&&Y(e,1,M,24,"precision")?0|e:null,t,24)},x.toString=function(e){var t,n=this,r=n.s,o=n.e;return null===o?r?(t="Infinity",r<0&&(t="-"+t)):t="NaN":(t=i(n.c),t=null!=e&&Y(e,2,64,25,"base")?h(c(t,o),0|e,10,r):o<=j||o>=L?a(t,o):c(t,o),r<0&&n.c[0]&&(t="-"+t)),t},x.truncated=x.trunc=function(){return D(new t(this),this.e+1,1)},x.valueOf=x.toJSON=function(){var e,t=this,n=t.e;return null===n?t.toString():(e=i(t.c),e=n<=j||n>=L?a(e,n):c(e,n),t.s<0?"-"+e:e)},x.isBigNumber=!0,null!=e&&t.config(e),t}function r(e){var t=0|e;return e>0||e===t?t:t-1}function i(e){for(var t,n,r=1,i=e.length,o=e[0]+"";r<i;){for(t=e[r++]+"",n=T-t.length;n--;t="0"+t);o+=t}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function o(e,t){var n,r,i=e.c,o=t.c,s=e.s,u=t.s,l=e.e,a=t.e;if(!s||!u)return null;if(n=i&&!i[0],r=o&&!o[0],n||r)return n?r?0:-u:s;if(s!=u)return s;if(n=s<0,r=l==a,!i||!o)return r?0:!i^n?1:-1;if(!r)return l>a^n?1:-1;for(u=(l=i.length)<(a=o.length)?l:a,s=0;s<u;s++)if(i[s]!=o[s])return i[s]>o[s]^n?1:-1;return l==a?0:l>a^n?1:-1}function s(e,t,n){return(e=f(e))>=t&&e<=n}function u(e){return"[object Array]"==Object.prototype.toString.call(e)}function l(e,t,n){for(var r,i,o=[0],s=0,u=e.length;s<u;){for(i=o.length;i--;o[i]*=t);for(o[r=0]+=b.indexOf(e.charAt(s++));r<o.length;r++)o[r]>n-1&&(null==o[r+1]&&(o[r+1]=0),o[r+1]+=o[r]/n|0,o[r]%=n)}return o.reverse()}function a(e,t){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function c(e,t){var n,r;if(t<0){for(r="0.";++t;r+="0");e=r+e}else if(n=e.length,++t>n){for(r="0",t-=n;--t;r+="0");e+=r}else t<n&&(e=e.slice(0,t)+"."+e.slice(t));return e}function f(e){return(e=parseFloat(e))<0?p(e):d(e)}var h,g=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,p=Math.ceil,d=Math.floor,y=" not a boolean or binary digit",v="rounding mode",m="number type has more than 15 significant digits",b="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_",w=1e14,T=14,O=9007199254740991,_=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],S=1e7,M=1e9;(h=n()).default=h.BigNumber=h,e.exports?e.exports=h:(t||(t="undefined"!=typeof self?self:Function("return this")()),t.BigNumber=h)}(Y)}),G=Object.defineProperty,H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W=Object.getOwnPropertyDescriptor,K=Object.getOwnPropertyNames,Z=Object.getOwnPropertySymbols,J=(R=function e(){r(this,e),n(this,"debounceTimeoutIds",j,this),n(this,"throttleTimeoutIds",L,this),n(this,"throttlePreviousTimestamps",B,this),n(this,"throttleTrailingArgs",q,this),n(this,"profileLastRan",V,this)},j=i(R.prototype,"debounceTimeoutIds",[t],{enumerable:!0,initializer:function(){return{}}}),L=i(R.prototype,"throttleTimeoutIds",[t],{enumerable:!0,initializer:function(){return{}}}),B=i(R.prototype,"throttlePreviousTimestamps",[t],{enumerable:!0,initializer:function(){return{}}}),q=i(R.prototype,"throttleTrailingArgs",[t],{enumerable:!0,initializer:function(){return null}}),V=i(R.prototype,"profileLastRan",[t],{enumerable:!0,initializer:function(){return null}}),Z?function(e){return K(e).concat(Z(e))}:K),X="object"===("undefined"==typeof console?"undefined":H(console))&&console&&"function"==typeof console.warn?c(console.warn,console):function(){},Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ee=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),te=/^function ([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?(\([^\)]*\))[\s\S]+$/,ne=(function(){function e(t,n,r,i){f(this,e),this.parentKlass=t,this.childKlass=n,this.parentDescriptor=r,this.childDescriptor=i}ee(e,[{key:"_getTopic",value:function(e){return void 0===e?null:"value"in e?e.value:"get"in e?e.get:"set"in e?e.set:void 0}},{key:"_extractTopicSignature",value:function(e){switch(void 0===e?"undefined":Q(e)){case"function":return this._extractFunctionSignature(e);default:return this.key}}},{key:"_extractFunctionSignature",value:function(e){var t=this;return e.toString().replace(te,function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.key)+arguments[2]})}},{key:"key",get:function(){return this.childDescriptor.key}},{key:"parentNotation",get:function(){return this.parentKlass.constructor.name+"#"+this.parentPropertySignature}},{key:"childNotation",get:function(){return this.childKlass.constructor.name+"#"+this.childPropertySignature}},{key:"parentTopic",get:function(){return this._getTopic(this.parentDescriptor)}},{key:"childTopic",get:function(){return this._getTopic(this.childDescriptor)}},{key:"parentPropertySignature",get:function(){return this._extractTopicSignature(this.parentTopic)}},{key:"childPropertySignature",get:function(){return this._extractTopicSignature(this.childTopic)}}]),ee(e,[{key:"assert",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";!0!==e&&this.error("{child} does not properly override {parent}"+t)}},{key:"error",value:function(e){var t=this;throw e=e.replace("{parent}",function(e){return t.parentNotation}).replace("{child}",function(e){return t.childNotation}),new SyntaxError(e)}}])}(),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),re=function(){function e(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(r=(s=u.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),ie="This function will be removed in future versions.",oe=Object.defineProperty,se=Object.getPrototypeOf,ue=void 0,le=Object.defineProperty,ae={};console.time&&console.time.bind(console),console.timeEnd&&console.timeEnd.bind(console),console.profile&&c(console.profile,console),console.profileEnd&&c(console.profileEnd,console);O.prototype.get=function(e){var t;return this.lastItem&&this.isEqual(this.lastItem.key,e)?this.lastItem.val:(t=this.indexOf(e))>=0?(this.lastItem=this.list[t],this.list[t].val):void 0},O.prototype.set=function(e,t){var n;return this.lastItem&&this.isEqual(this.lastItem.key,e)?(this.lastItem.val=t,this):(n=this.indexOf(e))>=0?(this.lastItem=this.list[n],this.list[n].val=t,this):(this.lastItem={key:e,val:t},this.list.push(this.lastItem),this.size++,this)},O.prototype.delete=function(e){var t;if(this.lastItem&&this.isEqual(this.lastItem.key,e)&&(this.lastItem=void 0),(t=this.indexOf(e))>=0)return this.size--,this.list.splice(t,1)[0]},O.prototype.has=function(e){var t;return!(!this.lastItem||!this.isEqual(this.lastItem.key,e))||(t=this.indexOf(e))>=0&&(this.lastItem=this.list[t],!0)},O.prototype.forEach=function(e,t){var n;for(n=0;n<this.size;n++)e.call(t||this,this.list[n].val,this.list[n].key,this)},O.prototype.indexOf=function(e){var t;for(t=0;t<this.size;t++)if(this.isEqual(this.list[t].key,e))return t;return-1},O.prototype.isEqual=function(e,t){return e===t||e!==e&&t!==t};var ce,fe,he,ge,pe,de=O,ye=function(e){return"function"!=typeof Map||e?new de:new Map},ve=function(e){var t=new ye("true"==="{}".FORCE_SIMILAR_INSTEAD_OF_MAP),n=[];return function(r){var i=function(){var o,s,u,l=t,a=arguments.length-1,c=Array(a+1),f=!0;if((i.numArgs||0===i.numArgs)&&i.numArgs!==a+1)throw new Error("Memoizerific functions should always be called with the same number of arguments");for(u=0;u<a;u++)c[u]={cacheItem:l,arg:arguments[u]},l.has(arguments[u])?l=l.get(arguments[u]):(f=!1,o=new ye("true"==="{}".FORCE_SIMILAR_INSTEAD_OF_MAP),l.set(arguments[u],o),l=o);return f&&(l.has(arguments[a])?s=l.get(arguments[a]):f=!1),f||(s=r.apply(null,arguments),l.set(arguments[a],s)),e>0&&(c[a]={cacheItem:l,arg:arguments[a]},f?_(n,c):n.push(c),n.length>e&&S(n.shift())),i.wasMemoized=f,i.numArgs=a+1,s};return i.limit=e,i.wasMemoized=!1,i.cache=t,i.lru=n,i}},me=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},be=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();if("undefined"==typeof window)we=we;else var we=window.Date;var Te=/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i,Oe=1e6,_e=19,Se={0:31,1:28,2:31,3:30,4:31,5:30,6:31,7:31,8:30,9:31,10:30,11:31},Me={0:31,1:29,2:31,3:30,4:31,5:30,6:31,7:31,8:30,9:31,10:30,11:31},Ne=["getFullYear","getYear","getMonth","getDate","getDay","getHours","getMinutes","getSeconds","getMilliseconds","getUTCFullYear","getUTCYear","getUTCMonth","getUTCDate","getUTCDay","getUTCHours","getUTCMinutes","getUTCSeconds","getUTCMilliseconds","toDateString","toLocaleDateString","toLocaleString","toTimeString","toLocaleTimeString","toISOString","getTimezoneOffset"];return ce=T(ve(250)),fe=T(ve(100)),he=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u(h,t)}("Use toUTCString() instead"),function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(){return v(arguments)}:v(t)}((pe=function(){function e(t,n,r,i,o,s,u,l){if(me(this,e),"string"==typeof t)this._full=A(D(t)?t:new we(t).valueOf()*Oe);else if(0===arguments.length)this._full=A((new we).valueOf()*Oe);else if(1===arguments.length)if(t instanceof e)this._full=t._full;else if(t instanceof we)this._full=A(t.valueOf()*Oe);else{if("number"!=typeof t)throw Error("Input not of any type that can be converted to a date");var a=Oe;(""+t).indexOf(".")>-1&&(a=1),this._full=A(t*a)}else{var c=void 0;c="boolean"==typeof t?we.UTC(n,r||0,i||0,o||0,s||0,u||0,l||0):new we(t,n,r||0,i||0,o||0,s||0,u||0),this._full=A(c.valueOf()*Oe)}if(this._setupFunctions(),"string"==typeof t&&Te.test(t)&&t.indexOf(".")>-1){var f=t.match(Te);if(void 0!==f[1]){var h=U(f[1].replace(".",""),9),g=parseInt(h,10);g>0&&(this.setMilliseconds(Math.floor(g/Oe)),g%=Oe),g>0&&(this.setMicroseconds(Math.floor(g/1e3)),g%=1e3),g>0&&this.setNanoseconds(Math.floor(g))}}}return be(e,[{key:"_setupFunctions",value:function(){var e=this;this._date=new we(this.valueOf()),Ne.forEach(function(t){e[t]=function(){var n;return(n=e._date)[t].apply(n,arguments)}}),this._buildSetFunctions()}},{key:"_getDaysBetween",value:function(e,t,n){if(e.eq(t))return new $(0);for(var r=new $(0),i=e.lt(t)?1:-1,o=new $(e);!o.eq(t);){var s=n(o);r=r.plus(s),o=o.plus(i)}return r.times(i)}},{key:"_getFullYear",value:function(e){return e?this.getUTCFullYear():this.getFullYear()}},{key:"_getDate",value:function(e){return e?this.getUTCDate():this.getDate()}},{key:"_getMonth",value:function(e){return e?this.getUTCMonth():this.getMonth()}},{key:"_getDays",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new $(this._getFullYear(t)),r=new $(e),i=new $(this._getDate(t)).minus(1);if(e>=12){var o=r.dividedToIntegerBy(12),s=new $(n),u=s.plus(o);i=this._getDaysBetween(s,u,E),r=r.plus(o.times(12).times(r.lessThan(0)?1:-1))}var l=new $(this._getMonth(t)),a=l.plus(r);return a.greaterThan(11)&&(a=l.minus(r)),a.lessThan(l)?i.plus(this._getDaysBetween(a,l,F.bind(null,n))):i.plus(this._getDaysBetween(l,a,F.bind(null,n)))}},{key:"_getValue",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=new $(n);switch(t){case"year":return e._getValue(e,"month",i.times(12),r);case"month":return e._getValue(e,"day",e._getDays(i,r),r);case"day":return e._getValue(e,"hour",i.times(24),r);case"hour":return e._getValue(e,"minute",i.times(60),r);case"minute":return e._getValue(e,"second",i.times(60),r);case"second":return e._getValue(e,"milli",i.times(1e3),r);case"milli":return e._getValue(e,"micro",i.times(1e3),r);case"micro":return e._getValue(e,"nano",i.times(1e3),r);case"nano":default:return i}}},{key:"getTime",value:function(){return this._full.toString()}},{key:"valueOf",value:function(){return this._full.dividedBy(Oe).truncated().toNumber()}},{key:"valueOfWithMicro",value:function(){return parseFloat(this.valueOf()+"."+C(this.getMicroseconds()),10)}},{key:"valueOfWithNano",value:function(){return""+this.valueOfWithMicro().toFixed(3)+C(this.getNanoseconds())}},{key:"getMicroseconds",value:function(){return this._full.minus(this.valueOf()*Oe).dividedBy(1e3).truncated().toNumber()}},{key:"getUTCMicroseconds",value:function(){return this.getMicroseconds()}},{key:"getNanoseconds",value:function(){return this._full.minus(this.valueOf()*Oe).minus(1e3*this.getMicroseconds()).truncated().toNumber()}},{key:"getUTCNanoseconds",value:function(){return this.getNanoseconds()}},{key:"_buildSetFunctions",value:function(){var e=z.bind(this,this);this.setUTCNanoseconds=this.setNanoseconds=e("setNanoseconds",["nanosecond"],this.getUTCNanoseconds,"nano"),this.setUTCMicroseconds=this.setMicroseconds=e("setMicoseconds",["microsecond","nanosecond"],this.getUTCMicroseconds,"micro",this.setUTCNanoseconds),this.setUTCMilliseconds=this.setMilliseconds=e("setMilliseconds",["millisecond","microsecond","nanosecond"],this.getUTCMilliseconds,"milli",this.setUTCMicroseconds),this.setUTCSeconds=e("setUTCSeconds",["second","millisecond","microsecond","nanosecond"],this.getUTCSeconds,"second",this.setUTCMilliseconds,!0),this.setSeconds=e("setSeconds",["second","millisecond","microsecond","nanosecond"],this.getSeconds,"second",this.setMilliseconds),this.setUTCMinutes=e("setUTCMinutes",["minute","second","millisecond","microsecond","nanosecond"],this.getUTCMinutes,"minute",this.setUTCSeconds,!0),this.setMinutes=e("setMinutes",["minute","second","millisecond","microsecond","nanosecond"],this.getMinutes,"minute",this.setSeconds),this.setUTCHours=e("setUTCHours",["hour","minute","second","millisecond","microsecond","nanosecond"],this.getUTCHours,"hour",this.setUTCMinutes,!0),this.setHours=e("setHours",["hour","minute","second","millisecond","microsecond","nanosecond"],this.getHours,"hour",this.setMinutes),this.setUTCDate=e("setUTCDate",["day"],this.getUTCDate,"day",function(){},!0),this.setDate=e("setDate",["day"],this.getDate,"day"),this.setUTCMonth=e("setUTCMonth",["month","day"],this.getUTCMonth,"month",this.setUTCDate,!0),this.setMonth=e("setMonth",["month","day"],this.getMonth,"month",this.setDate),this.setUTCFullYear=e("setUTCFullYear",["year","month","day"],this.getUTCFullYear,"year",this.setUTCMonth,!0),this.setFullYear=e("setFullYear",["year","month","day"],this.getFullYear,"year",this.setMonth)}},{key:"setTime",value:function(e){return this._full=A(e),this._setupFunctions(),e}},{key:"setUTCTime",value:function(e){return this.setTime(e)}},{key:"_toString",value:function(e){var t=this._date[e]().split(" GMT"),n=this.getMilliseconds(),r=this.getMicroseconds(),i=this.getNanoseconds();return t[0]+="."+C(n)+C(r)+C(i),t.join(" GMT")}},{key:"toString",value:function(){return this._toString("toString")}},{key:"toUTCString",value:function(){return this._toString("toUTCString")}},{key:"toGMTString",value:function(){return this.toUTCString()}}],[{key:"now",value:function(){return(new e).valueOf()}},{key:"parse",value:function(){return we.parse.apply(we,arguments)}},{key:"UTC",value:function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return new(Function.prototype.bind.apply(e,[null].concat([!0],n)))}}]),e}(),N(pe.prototype,"_getDaysBetween",[ce],Object.getOwnPropertyDescriptor(pe.prototype,"_getDaysBetween"),pe.prototype),N(pe.prototype,"_getValue",[fe],Object.getOwnPropertyDescriptor(pe.prototype,"_getValue"),pe.prototype),N(pe.prototype,"toGMTString",[he],Object.getOwnPropertyDescriptor(pe.prototype,"toGMTString"),pe.prototype),ge=pe))||ge}();
//# sourceMappingURL=nano-date.js.map

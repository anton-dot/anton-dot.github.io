"use strict";(self["webpackChunkmenglish"]=self["webpackChunkmenglish"]||[]).push([[850],{6077:function(r,t,o){var n=o(614),e=String,i=TypeError;r.exports=function(r){if("object"==typeof r||n(r))return r;throw new i("Can't set "+e(r)+" as a prototype")}},5787:function(r,t,o){var n=o(7976),e=TypeError;r.exports=function(r,t){if(n(t,r))return r;throw new e("Incorrect invocation")}},3013:function(r){r.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(r,t,o){var n,e,i,c=o(3013),a=o(9781),u=o(7854),p=o(614),f=o(111),y=o(2597),s=o(648),E=o(6330),A=o(8880),R=o(8052),v=o(7045),T=o(7976),_=o(9518),d=o(7674),I=o(5112),h=o(9711),g=o(9909),l=g.enforce,w=g.get,O=u.Int8Array,m=O&&O.prototype,S=u.Uint8ClampedArray,x=S&&S.prototype,D=O&&_(O),N=m&&_(m),C=Object.prototype,b=u.TypeError,M=I("toStringTag"),U=h("TYPED_ARRAY_TAG"),P="TypedArrayConstructor",L=c&&!!d&&"Opera"!==s(u.opera),V=!1,j={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},k={BigInt64Array:8,BigUint64Array:8},Y=function(r){if(!f(r))return!1;var t=s(r);return"DataView"===t||y(j,t)||y(k,t)},B=function(r){var t=_(r);if(f(t)){var o=w(t);return o&&y(o,P)?o[P]:B(t)}},F=function(r){if(!f(r))return!1;var t=s(r);return y(j,t)||y(k,t)},H=function(r){if(F(r))return r;throw new b("Target is not a typed array")},W=function(r){if(p(r)&&(!d||T(D,r)))return r;throw new b(E(r)+" is not a typed array constructor")},z=function(r,t,o,n){if(a){if(o)for(var e in j){var i=u[e];if(i&&y(i.prototype,r))try{delete i.prototype[r]}catch(c){try{i.prototype[r]=t}catch(p){}}}N[r]&&!o||R(N,r,o?t:L&&m[r]||t,n)}},G=function(r,t,o){var n,e;if(a){if(d){if(o)for(n in j)if(e=u[n],e&&y(e,r))try{delete e[r]}catch(i){}if(D[r]&&!o)return;try{return R(D,r,o?t:L&&D[r]||t)}catch(i){}}for(n in j)e=u[n],!e||e[r]&&!o||R(e,r,t)}};for(n in j)e=u[n],i=e&&e.prototype,i?l(i)[P]=e:L=!1;for(n in k)e=u[n],i=e&&e.prototype,i&&(l(i)[P]=e);if((!L||!p(D)||D===Function.prototype)&&(D=function(){throw new b("Incorrect invocation")},L))for(n in j)u[n]&&d(u[n],D);if((!L||!N||N===C)&&(N=D.prototype,L))for(n in j)u[n]&&d(u[n].prototype,N);if(L&&_(x)!==N&&d(x,N),a&&!y(N,M))for(n in V=!0,v(N,M,{configurable:!0,get:function(){return f(this)?this[U]:void 0}}),j)u[n]&&A(u[n],U,n);r.exports={NATIVE_ARRAY_BUFFER_VIEWS:L,TYPED_ARRAY_TAG:V&&U,aTypedArray:H,aTypedArrayConstructor:W,exportTypedArrayMethod:z,exportTypedArrayStaticMethod:G,getTypedArrayConstructor:B,isView:Y,isTypedArray:F,TypedArray:D,TypedArrayPrototype:N}},7745:function(r,t,o){var n=o(6244);r.exports=function(r,t){var o=0,e=n(t),i=new r(e);while(e>o)i[o]=t[o++];return i}},1843:function(r,t,o){var n=o(6244);r.exports=function(r,t){for(var o=n(r),e=new t(o),i=0;i<o;i++)e[i]=r[o-i-1];return e}},1572:function(r,t,o){var n=o(6244),e=o(9303),i=RangeError;r.exports=function(r,t,o,c){var a=n(r),u=e(o),p=u<0?a+u:u;if(p>=a||p<0)throw new i("Incorrect index");for(var f=new t(a),y=0;y<a;y++)f[y]=y===p?c:r[y];return f}},648:function(r,t,o){var n=o(1694),e=o(614),i=o(4326),c=o(5112),a=c("toStringTag"),u=Object,p="Arguments"===i(function(){return arguments}()),f=function(r,t){try{return r[t]}catch(o){}};r.exports=n?i:function(r){var t,o,n;return void 0===r?"Undefined":null===r?"Null":"string"==typeof(o=f(t=u(r),a))?o:p?i(t):"Object"===(n=i(t))&&e(t.callee)?"Arguments":n}},8544:function(r,t,o){var n=o(7293);r.exports=!n((function(){function r(){}return r.prototype.constructor=null,Object.getPrototypeOf(new r)!==r.prototype}))},7045:function(r,t,o){var n=o(6339),e=o(3070);r.exports=function(r,t,o){return o.get&&n(o.get,t,{getter:!0}),o.set&&n(o.set,t,{setter:!0}),e.f(r,t,o)}},3678:function(r){r.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},1060:function(r,t,o){var n=o(1702),e=Error,i=n("".replace),c=function(r){return String(new e(r).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,u=a.test(c);r.exports=function(r,t){if(u&&"string"==typeof r&&!e.prepareStackTrace)while(t--)r=i(r,a,"");return r}},5668:function(r,t,o){var n=o(1702),e=o(9662);r.exports=function(r,t,o){try{return n(e(Object.getOwnPropertyDescriptor(r,t)[o]))}catch(i){}}},9587:function(r,t,o){var n=o(614),e=o(111),i=o(7674);r.exports=function(r,t,o){var c,a;return i&&n(c=t.constructor)&&c!==o&&e(a=c.prototype)&&a!==o.prototype&&i(r,a),r}},4067:function(r,t,o){var n=o(648);r.exports=function(r){var t=n(r);return"BigInt64Array"===t||"BigUint64Array"===t}},6277:function(r,t,o){var n=o(1340);r.exports=function(r,t){return void 0===r?arguments.length<2?"":t:n(r)}},9518:function(r,t,o){var n=o(2597),e=o(614),i=o(7908),c=o(6200),a=o(8544),u=c("IE_PROTO"),p=Object,f=p.prototype;r.exports=a?p.getPrototypeOf:function(r){var t=i(r);if(n(t,u))return t[u];var o=t.constructor;return e(o)&&t instanceof o?o.prototype:t instanceof p?f:null}},7674:function(r,t,o){var n=o(5668),e=o(9670),i=o(6077);r.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var r,t=!1,o={};try{r=n(Object.prototype,"__proto__","set"),r(o,[]),t=o instanceof Array}catch(c){}return function(o,n){return e(o),i(n),t?r(o,n):o.__proto__=n,o}}():void 0)},4599:function(r,t,o){var n=o(7593),e=TypeError;r.exports=function(r){var t=n(r,"number");if("number"==typeof t)throw new e("Can't convert number to bigint");return BigInt(t)}},1694:function(r,t,o){var n=o(5112),e=n("toStringTag"),i={};i[e]="z",r.exports="[object z]"===String(i)},1340:function(r,t,o){var n=o(648),e=String;r.exports=function(r){if("Symbol"===n(r))throw new TypeError("Cannot convert a Symbol value to a string");return e(r)}},1439:function(r,t,o){var n=o(1843),e=o(260),i=e.aTypedArray,c=e.exportTypedArrayMethod,a=e.getTypedArrayConstructor;c("toReversed",(function(){return n(i(this),a(this))}))},7585:function(r,t,o){var n=o(260),e=o(1702),i=o(9662),c=o(7745),a=n.aTypedArray,u=n.getTypedArrayConstructor,p=n.exportTypedArrayMethod,f=e(n.TypedArrayPrototype.sort);p("toSorted",(function(r){void 0!==r&&i(r);var t=a(this),o=c(u(t),t);return f(o,r)}))},5315:function(r,t,o){var n=o(1572),e=o(260),i=o(4067),c=o(9303),a=o(4599),u=e.aTypedArray,p=e.getTypedArrayConstructor,f=e.exportTypedArrayMethod,y=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(r){return 8===r}}();f("with",{with:function(r,t){var o=u(this),e=c(r),f=i(o)?a(t):+t;return n(o,p(o),e,f)}}["with"],!y)},2801:function(r,t,o){var n=o(2109),e=o(7854),i=o(5005),c=o(9114),a=o(3070).f,u=o(2597),p=o(5787),f=o(9587),y=o(6277),s=o(3678),E=o(1060),A=o(9781),R=o(1913),v="DOMException",T=i("Error"),_=i(v),d=function(){p(this,I);var r=arguments.length,t=y(r<1?void 0:arguments[0]),o=y(r<2?void 0:arguments[1],"Error"),n=new _(t,o),e=new T(t);return e.name=v,a(n,"stack",c(1,E(e.stack,1))),f(n,this,d),n},I=d.prototype=_.prototype,h="stack"in new T(v),g="stack"in new _(1,2),l=_&&A&&Object.getOwnPropertyDescriptor(e,v),w=!!l&&!(l.writable&&l.configurable),O=h&&!w&&!g;n({global:!0,constructor:!0,forced:R||O},{DOMException:O?d:_});var m=i(v),S=m.prototype;if(S.constructor!==m)for(var x in R||a(S,"constructor",c(1,m)),s)if(u(s,x)){var D=s[x],N=D.s;u(m,N)||a(m,N,c(6,D.c))}}}]);
//# sourceMappingURL=850.bc63a6bd.js.map
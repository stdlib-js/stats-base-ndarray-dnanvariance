"use strict";var u=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var t=u(function(y,n){
var s=require('@stdlib/ndarray-base-numel-dimension/dist'),q=require('@stdlib/ndarray-base-stride/dist'),o=require('@stdlib/ndarray-base-offset/dist'),c=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),m=require('@stdlib/stats-strided-dnanvariance/dist').ndarray;function f(a){var r,e;return e=a[0],r=d(a[1]),m(s(e,0),r,c(e),q(e,0),o(e))}n.exports=f
});var l=require("path").join,g=require('@stdlib/utils-try-require/dist'),j=require('@stdlib/assert-is-error/dist'),p=t(),i,v=g(l(__dirname,"./native.js"));j(v)?i=p:i=v;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

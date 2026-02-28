"use strict";var q=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var y=q(function(D,l){
var f=require('@stdlib/math-base-special-abs/dist');function _(e,r,a,v,i,o,n){var t,u,s,c;if(e<=0)return NaN;for(t=v,u=n,c=f(r[t]-i[u]),t+=a,u+=o,s=1;s<e;s++)c+=f(r[t]-i[u]),t+=a,u+=o;return c}l.exports=_
});var x=q(function(F,p){
var b=require('@stdlib/strided-base-stride2offset/dist'),E=y();function O(e,r,a,v,i){var o=b(e,a),n=b(e,i);return E(e,r,a,o,v,i,n)}p.exports=O
});var m=q(function(G,j){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=x(),h=y();g(k,"ndarray",h);j.exports=k
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=m(),d,R=z(w(__dirname,"./native.js"));A(R)?d=B:d=R;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

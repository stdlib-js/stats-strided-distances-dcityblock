"use strict";var q=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var y=q(function(D,f){
var R=require('@stdlib/math-base-special-abs/dist');function _(e,r,a,t,i,u,o){var v,s,n,c;if(e<=0)return NaN;for(v=t,s=o,c=0,n=0;n<e;n++)c+=R(r[v]-i[s]),v+=a,s+=u;return c}f.exports=_
});var b=q(function(F,x){
var l=require('@stdlib/strided-base-stride2offset/dist'),E=y();function O(e,r,a,t,i){var u=l(e,a),o=l(e,i);return E(e,r,a,u,t,i,o)}x.exports=O
});var j=q(function(G,k){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=b(),h=y();g(p,"ndarray",h);k.exports=p
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=j(),d,m=z(w(__dirname,"./native.js"));A(m)?d=B:d=m;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

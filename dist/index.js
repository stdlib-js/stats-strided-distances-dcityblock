"use strict";var q=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var y=q(function(D,f){
var R=require('@stdlib/math-base-special-abs/dist');function _(r,e,a,t,i,u,o){var v,s,n,c;if(r<=0)return NaN;for(v=t,s=o,c=0,n=0;n<r;n++)c+=R(e[v]-i[s]),v+=a,s+=u;return c}f.exports=_
});var b=q(function(F,x){
var l=require('@stdlib/strided-base-stride2offset/dist'),E=y();function O(r,e,a,t,i){var u=l(r,a),o=l(r,i);return E(r,e,a,u,t,i,o)}x.exports=O
});var j=q(function(G,k){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=b(),h=y();g(p,"ndarray",h);k.exports=p
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=j(),d,m=z(w(__dirname,"./native.js"));A(m)?d=B:d=m;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

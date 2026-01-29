// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";function t(e,r,t,n,d,i,a){var m,o,f,l;if(e<=0)return NaN;for(o=a,l=s(r[m=n]-d[o]),m+=t,o+=i,f=1;f<e;f++)l+=s(r[m]-d[o]),m+=t,o+=i;return l}function n(e,s,n,d,i){return t(e,s,n,r(e,n),d,i,r(e,i))}e(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map

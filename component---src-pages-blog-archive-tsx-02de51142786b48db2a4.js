"use strict";(self.webpackChunkblog_tetsuyainfra=self.webpackChunkblog_tetsuyainfra||[]).push([[542],{4977:function(l,t,e){e.r(t),e.d(t,{Head:function(){return u}});var r=e(1883),n=(e(5021),e(4684),e(8052)),a=e(4001),o=(e(6514),e(917));const u=()=>(0,o.tZ)(a.Z,{title:"My Blog Posts"});t.default=l=>{let{data:t}=l;const{nodes:e}=t.allMarkdownRemark,a=Array.from(new Set(e.map((l=>{var t;return null==l||null===(t=l.fields)||void 0===t?void 0:t.year})))).filter((l=>"string"==typeof l)).sort(),u={};return e.forEach((l=>{var t,e;const r=null==l||null===(t=l.fields)||void 0===t?void 0:t.year,n=null==l||null===(e=l.fields)||void 0===e?void 0:e.month;u[r]||(u[r]=new Set),u[r].add(n)})),(0,o.tZ)(n.Z,{pageTitle:"Blog Archive Index"},(0,o.tZ)("ul",null,a.map(((l,t)=>(0,o.tZ)("li",{key:t},(0,o.tZ)("h3",null,l,"年"),(0,o.tZ)("ul",null,Array.from(u[l]).sort().map(((t,e)=>(0,o.tZ)("li",{key:e},(0,o.tZ)(r.rU,{to:"./"+l+"/"+t},Number(t),"月の記事一覧"))))))))))}}}]);
//# sourceMappingURL=component---src-pages-blog-archive-tsx-02de51142786b48db2a4.js.map
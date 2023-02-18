"use strict";(self.webpackChunktetsuyainfra_s_hideout=self.webpackChunktetsuyainfra_s_hideout||[]).push([[939],{5209:function(e,t,n){n.r(t),n.d(t,{Head:function(){return q},default:function(){return Q}});var r=n(4316),i=n(9299),a=n(4854);var o=()=>(0,a.useStaticQuery)("2482274573").allLinks.edges,s=n(3366),c=n(7462),u=n(7294),p=n(6010),l=n(5408),d=n(9707),m=n(4780),f=n(948),g=n(1657),x=n(2734);var h=u.createContext(),b=n(1588),w=n(4867);function k(e){return(0,w.Z)("MuiGrid",e)}const v=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var $=(0,b.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...v.map((e=>`grid-xs-${e}`)),...v.map((e=>`grid-sm-${e}`)),...v.map((e=>`grid-md-${e}`)),...v.map((e=>`grid-lg-${e}`)),...v.map((e=>`grid-xl-${e}`))]),S=n(5893);const Z=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function W(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function y({breakpoints:e,values:t}){let n="";Object.keys(t).forEach((e=>{""===n&&0!==t[e]&&(n=e)}));const r=Object.keys(e).sort(((t,n)=>e[t]-e[n]));return r.slice(0,r.indexOf(n))}const M=(0,f.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{container:r,direction:i,item:a,spacing:o,wrap:s,zeroMinWidth:c,breakpoints:u}=n;let p=[];r&&(p=function(e,t,n={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[n[`spacing-xs-${String(e)}`]];const r=[];return t.forEach((t=>{const i=e[t];Number(i)>0&&r.push(n[`spacing-${t}-${String(i)}`])})),r}(o,u,t));const l=[];return u.forEach((e=>{const r=n[e];r&&l.push(t[`grid-${e}-${String(r)}`])})),[t.root,r&&t.container,a&&t.item,c&&t.zeroMinWidth,...p,"row"!==i&&t[`direction-xs-${String(i)}`],"wrap"!==s&&t[`wrap-xs-${String(s)}`],...l]}})((({ownerState:e})=>(0,c.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:t}){const n=(0,l.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,l.k9)({theme:e},n,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${$.item}`]={maxWidth:"none"}),t}))}),(function({theme:e,ownerState:t}){const{container:n,rowSpacing:r}=t;let i={};if(n&&0!==r){const t=(0,l.P$)({values:r,breakpoints:e.breakpoints.values});let n;"object"==typeof t&&(n=y({breakpoints:e.breakpoints.values,values:t})),i=(0,l.k9)({theme:e},t,((t,r)=>{var i;const a=e.spacing(t);return"0px"!==a?{marginTop:`-${W(a)}`,[`& > .${$.item}`]:{paddingTop:W(a)}}:null!=(i=n)&&i.includes(r)?{}:{marginTop:0,[`& > .${$.item}`]:{paddingTop:0}}}))}return i}),(function({theme:e,ownerState:t}){const{container:n,columnSpacing:r}=t;let i={};if(n&&0!==r){const t=(0,l.P$)({values:r,breakpoints:e.breakpoints.values});let n;"object"==typeof t&&(n=y({breakpoints:e.breakpoints.values,values:t})),i=(0,l.k9)({theme:e},t,((t,r)=>{var i;const a=e.spacing(t);return"0px"!==a?{width:`calc(100% + ${W(a)})`,marginLeft:`-${W(a)}`,[`& > .${$.item}`]:{paddingLeft:W(a)}}:null!=(i=n)&&i.includes(r)?{}:{width:"100%",marginLeft:0,[`& > .${$.item}`]:{paddingLeft:0}}}))}return i}),(function({theme:e,ownerState:t}){let n;return e.breakpoints.keys.reduce(((r,i)=>{let a={};if(t[i]&&(n=t[i]),!n)return r;if(!0===n)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const o=(0,l.P$)({values:t.columns,breakpoints:e.breakpoints.values}),s="object"==typeof o?o[i]:o;if(null==s)return r;const u=Math.round(n/s*1e8)/1e6+"%";let p={};if(t.container&&t.item&&0!==t.columnSpacing){const n=e.spacing(t.columnSpacing);if("0px"!==n){const e=`calc(${u} + ${W(n)})`;p={flexBasis:e,maxWidth:e}}}a=(0,c.Z)({flexBasis:u,flexGrow:0,maxWidth:u},p)}return 0===e.breakpoints.values[i]?Object.assign(r,a):r[e.breakpoints.up(i)]=a,r}),{})}));const G=e=>{const{classes:t,container:n,direction:r,item:i,spacing:a,wrap:o,zeroMinWidth:s,breakpoints:c}=e;let u=[];n&&(u=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];const n=[];return t.forEach((t=>{const r=e[t];if(Number(r)>0){const e=`spacing-${t}-${String(r)}`;n.push(e)}})),n}(a,c));const p=[];c.forEach((t=>{const n=e[t];n&&p.push(`grid-${t}-${String(n)}`)}));const l={root:["root",n&&"container",i&&"item",s&&"zeroMinWidth",...u,"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==o&&`wrap-xs-${String(o)}`,...p]};return(0,m.Z)(l,k,t)},N=u.forwardRef((function(e,t){const n=(0,g.Z)({props:e,name:"MuiGrid"}),{breakpoints:r}=(0,x.Z)(),i=(0,d.Z)(n),{className:a,columns:o,columnSpacing:l,component:m="div",container:f=!1,direction:b="row",item:w=!1,rowSpacing:k,spacing:v=0,wrap:$="wrap",zeroMinWidth:W=!1}=i,y=(0,s.Z)(i,Z),N=k||v,z=l||v,C=u.useContext(h),R=f?o||12:C,j={},P=(0,c.Z)({},y);r.keys.forEach((e=>{null!=y[e]&&(j[e]=y[e],delete P[e])}));const L=(0,c.Z)({},i,{columns:R,container:f,direction:b,item:w,rowSpacing:N,columnSpacing:z,wrap:$,zeroMinWidth:W,spacing:v},j,{breakpoints:r.keys}),T=G(L);return(0,S.jsx)(h.Provider,{value:R,children:(0,S.jsx)(M,(0,c.Z)({ownerState:L,className:(0,p.Z)(T.root,a),as:m,ref:t},P))})}));var z=N,C=n(8320),R=n(7333);var j=(0,n(2807).ZP)(),P=n(6268);const L=["className","component","disableGutters","fixed","maxWidth","classes"],T=(0,P.Z)(),E=j("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,C.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),O=e=>(0,R.Z)({props:e,name:"MuiContainer",defaultTheme:T});var B=n(8216);const _=function(e={}){const{createStyledComponent:t=E,useThemeProps:n=O,componentName:r="MuiContainer"}=e,i=t((({theme:e,ownerState:t})=>(0,c.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,n)=>{const r=n,i=e.breakpoints.values[r];return 0!==i&&(t[e.breakpoints.up(r)]={maxWidth:`${i}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,c.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),a=u.forwardRef((function(e,t){const a=n(e),{className:o,component:u="div",disableGutters:l=!1,fixed:d=!1,maxWidth:f="lg"}=a,g=(0,s.Z)(a,L),x=(0,c.Z)({},a,{component:u,disableGutters:l,fixed:d,maxWidth:f}),h=((e,t)=>{const{classes:n,fixed:r,disableGutters:i,maxWidth:a}=e,o={root:["root",a&&`maxWidth${(0,C.Z)(String(a))}`,r&&"fixed",i&&"disableGutters"]};return(0,m.Z)(o,(e=>(0,w.Z)(t,e)),n)})(x,r);return(0,S.jsx)(i,(0,c.Z)({as:u,ownerState:x,className:(0,p.Z)(h.root,o),ref:t},g))}));return a}({createStyledComponent:(0,f.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,B.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,g.Z)({props:e,name:"MuiContainer"})});var D=_,F=n(917);const H=(0,r.Z)("div",{target:"e1u4pu4x0"})({name:"174v6x5",styles:"&>h2{margin:0;margin-top:0.5em;}&>ul{margin:0;margin-top:0.5em;padding-left:1.5em;}&>ul li{margin:0;}"});var Q=()=>{const e=o();return console.log(e),(0,F.tZ)(i.Z,null,(0,F.tZ)(D,null,(0,F.tZ)(z,{container:!0,spacing:2},e.map(((e,t)=>{let{node:n}=e;return(0,F.tZ)(z,{key:t,item:!0,xs:2},(0,F.tZ)(H,{key:t},(0,F.tZ)("h2",null,n.weight,":",n.category),(0,F.tZ)("ul",null,n.list.map(((e,t)=>{let{name:n,url:r}=e;return(0,F.tZ)("li",{key:t},(0,F.tZ)("a",{href:r},n))})))))})))))};const q=()=>(0,F.tZ)("title",null,"Links")}}]);
//# sourceMappingURL=component---src-pages-links-index-tsx-ed29652554c3730aad8b.js.map
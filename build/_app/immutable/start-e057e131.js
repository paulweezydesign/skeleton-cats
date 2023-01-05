import{S as at,i as rt,s as ot,a as it,e as B,c as st,b as z,g as de,t as F,d as pe,f as G,h as J,j as lt,o as Oe,k as ct,l as ft,m as ut,n as ve,p as C,q as dt,r as pt,u as ht,v as W,w as Y,x as Ne,y as X,z as Z,A as ce}from"./chunks/index-a51d240b.js";import{S as tt,I as q,g as ze,f as He,a as Ee,b as fe,s as M,i as We,c as ue,P as Ye,d as mt,e as _t,h as gt}from"./chunks/singletons-45a1b80e.js";function yt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function wt(a){return a.split("%25").map(decodeURI).join("%25")}function bt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const vt=["href","pathname","search","searchParams","toString","toJSON"];function Et(a,e){const n=new URL(a);for(const s of vt){let i=n[s];Object.defineProperty(n,s,{get(){return e(),i},enumerable:!0,configurable:!0})}return kt(n),n}function kt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Rt="/__data.json";function St(a){return a.replace(/\/$/,"")+Rt}function Lt(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let s=n.length;for(;s;)e=e*33^n[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&te.delete(Te(a)),he(a,e));const te=new Map;function Ot(a,e){const n=Te(a,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:i,...u}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&te.set(n,{body:i,init:u,ttl:1e3*Number(t)}),Promise.resolve(new Response(i,u))}return he(a,e)}function It(a,e,n){if(te.size>0){const s=Te(a,n),i=te.get(s);if(i){if(performance.now()<i.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(i.body,i.init);te.delete(s)}}return he(e,n)}function Te(a,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${Lt(e.body)}"]`),s}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Pt(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Tt(a).map(s=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(i)return e.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const t=s.split(/\[(.+?)\](?!\])/);return"/"+t.map((_,d)=>{if(d%2){if(_.startsWith("x+"))return ke(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return ke(String.fromCharCode(..._.slice(2).split("-").map(P=>parseInt(P,16))));const g=At.exec(_);if(!g)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,w,R,$,D]=g;return e.push({name:$,matcher:D,optional:!!w,rest:!!R,chained:R?d===1&&t[0]==="":!1}),R?"(.*?)":w?"([^/]*)?":"([^/]+?)"}return ke(_)}).join("")}).join("")}/?$`),params:e}}function Nt(a){return!/^\([^)]+\)$/.test(a)}function Tt(a){return a.slice(1).split("/").filter(Nt)}function Ut(a,e,n){const s={},i=a.slice(1);let u="";for(let t=0;t<e.length;t+=1){const f=e[t];let _=i[t];if(f.chained&&f.rest&&u&&(_=_?u+"/"+_:u),u="",_===void 0)f.rest&&(s[f.name]="");else{if(f.matcher&&!n[f.matcher](_)){if(f.optional&&f.chained){let d=i.indexOf(void 0,t);if(d===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)u=_;else return}for(;d>=t;)i[d]=i[d-1],d-=1;continue}return}s[f.name]=_}}if(!u)return s}function ke(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function $t(a,e,n,s){const i=new Set(e);return Object.entries(n).map(([f,[_,d,g]])=>{const{pattern:w,params:R}=Pt(f),$={id:f,exec:D=>{const P=w.exec(D);if(P)return Ut(P,R,s)},errors:[1,...g||[]].map(D=>a[D]),layouts:[0,...d||[]].map(t),leaf:u(_)};return $.errors.length=$.layouts.length=Math.max($.errors.length,$.layouts.length),$});function u(f){const _=f<0;return _&&(f=~f),[_,a[f]]}function t(f){return f===void 0?f:[i.has(f),a[f]]}}function jt(a){let e,n,s;var i=a[0][0];function u(t){return{props:{data:t[2],form:t[1]}}}return i&&(e=W(i,u(a))),{c(){e&&Y(e.$$.fragment),n=B()},l(t){e&&Ne(e.$$.fragment,t),n=B()},m(t,f){e&&X(e,t,f),z(t,n,f),s=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&2&&(_.form=t[1]),i!==(i=t[0][0])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{Z(d,1)}),pe()}i?(e=W(i,u(t)),Y(e.$$.fragment),G(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&J(n),e&&Z(e,t)}}}function Dt(a){let e,n,s;var i=a[0][0];function u(t){return{props:{data:t[2],$$slots:{default:[Vt]},$$scope:{ctx:t}}}}return i&&(e=W(i,u(a))),{c(){e&&Y(e.$$.fragment),n=B()},l(t){e&&Ne(e.$$.fragment,t),n=B()},m(t,f){e&&X(e,t,f),z(t,n,f),s=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&523&&(_.$$scope={dirty:f,ctx:t}),i!==(i=t[0][0])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{Z(d,1)}),pe()}i?(e=W(i,u(t)),Y(e.$$.fragment),G(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&J(n),e&&Z(e,t)}}}function Vt(a){let e,n,s;var i=a[0][1];function u(t){return{props:{data:t[3],form:t[1]}}}return i&&(e=W(i,u(a))),{c(){e&&Y(e.$$.fragment),n=B()},l(t){e&&Ne(e.$$.fragment,t),n=B()},m(t,f){e&&X(e,t,f),z(t,n,f),s=!0},p(t,f){const _={};if(f&8&&(_.data=t[3]),f&2&&(_.form=t[1]),i!==(i=t[0][1])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{Z(d,1)}),pe()}i?(e=W(i,u(t)),Y(e.$$.fragment),G(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&J(n),e&&Z(e,t)}}}function Xe(a){let e,n=a[5]&&Ze(a);return{c(){e=ct("div"),n&&n.c(),this.h()},l(s){e=ft(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=ut(e);n&&n.l(i),i.forEach(J),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(s,i){z(s,e,i),n&&n.m(e,null)},p(s,i){s[5]?n?n.p(s,i):(n=Ze(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&J(e),n&&n.d()}}}function Ze(a){let e;return{c(){e=dt(a[6])},l(n){e=pt(n,a[6])},m(n,s){z(n,e,s)},p(n,s){s&64&&ht(e,n[6])},d(n){n&&J(e)}}}function Ct(a){let e,n,s,i,u;const t=[Dt,jt],f=[];function _(g,w){return g[0][1]?0:1}e=_(a),n=f[e]=t[e](a);let d=a[4]&&Xe(a);return{c(){n.c(),s=it(),d&&d.c(),i=B()},l(g){n.l(g),s=st(g),d&&d.l(g),i=B()},m(g,w){f[e].m(g,w),z(g,s,w),d&&d.m(g,w),z(g,i,w),u=!0},p(g,[w]){let R=e;e=_(g),e===R?f[e].p(g,w):(de(),F(f[R],1,1,()=>{f[R]=null}),pe(),n=f[e],n?n.p(g,w):(n=f[e]=t[e](g),n.c()),G(n,1),n.m(s.parentNode,s)),g[4]?d?d.p(g,w):(d=Xe(g),d.c(),d.m(i.parentNode,i)):d&&(d.d(1),d=null)},i(g){u||(G(n),u=!0)},o(g){F(n),u=!1},d(g){f[e].d(g),g&&J(s),d&&d.d(g),g&&J(i)}}}function qt(a,e,n){let{stores:s}=e,{page:i}=e,{components:u}=e,{form:t}=e,{data_0:f=null}=e,{data_1:_=null}=e;lt(s.page.notify);let d=!1,g=!1,w=null;return Oe(()=>{const R=s.page.subscribe(()=>{d&&(n(5,g=!0),n(6,w=document.title||"untitled page"))});return n(4,d=!0),R}),a.$$set=R=>{"stores"in R&&n(7,s=R.stores),"page"in R&&n(8,i=R.page),"components"in R&&n(0,u=R.components),"form"in R&&n(1,t=R.form),"data_0"in R&&n(2,f=R.data_0),"data_1"in R&&n(3,_=R.data_1)},a.$$.update=()=>{a.$$.dirty&384&&s.page.set(i)},[u,t,f,_,d,g,w,s,i]}class Bt extends at{constructor(e){super(),rt(this,e,qt,Ct,ot,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ft="modulepreload",Gt=function(a,e){return new URL(a,e).href},Qe={},j=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(u=>{if(u=Gt(u,s),u in Qe)return;Qe[u]=!0;const t=u.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!s)for(let g=i.length-1;g>=0;g--){const w=i[g];if(w.href===u&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const d=document.createElement("link");if(d.rel=t?"stylesheet":Ft,t||(d.as="script",d.crossOrigin=""),d.href=u,document.head.appendChild(d),t)return new Promise((g,w)=>{d.addEventListener("load",g),d.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})})).then(()=>e())},Jt={},me=[()=>j(()=>import("./chunks/0-d0a34570.js"),["./chunks\\0-d0a34570.js","./components\\pages\\_layout.svelte-de8bd3de.js","./chunks\\index-a51d240b.js","./chunks\\index-da6c5c8b.js","./assets\\_layout-caa25a66.css"],import.meta.url),()=>j(()=>import("./chunks/1-5ab4b091.js"),["./chunks\\1-5ab4b091.js","./components\\error.svelte-5d2654c1.js","./chunks\\index-a51d240b.js","./chunks\\singletons-45a1b80e.js","./chunks\\index-da6c5c8b.js"],import.meta.url),()=>j(()=>import("./chunks/2-539a3ad4.js"),["./chunks\\2-539a3ad4.js","./components\\pages\\_page.svelte-b12e6c5f.js","./chunks\\index-a51d240b.js","./assets\\_page-f566d282.css"],import.meta.url),()=>j(()=>import("./chunks/3-1d33ea02.js"),["./chunks\\3-1d33ea02.js","./components\\pages\\about\\_page.svelte-f6b5692e.js","./chunks\\index-a51d240b.js"],import.meta.url),()=>j(()=>import("./chunks/4-b28c4d03.js"),["./chunks\\4-b28c4d03.js","./components\\pages\\contact\\_page.svelte-462424bc.js","./chunks\\index-a51d240b.js"],import.meta.url),()=>j(()=>import("./chunks/5-551d4d39.js"),["./chunks\\5-551d4d39.js","./components\\pages\\kittens\\_page.svelte-575f4a94.js","./chunks\\index-a51d240b.js","./assets\\_page-a02e459f.css"],import.meta.url),()=>j(()=>import("./chunks/6-5742422d.js"),["./chunks\\6-5742422d.js","./components\\pages\\kittens\\bean\\_page.svelte-40c99902.js","./chunks\\index-a51d240b.js"],import.meta.url),()=>j(()=>import("./chunks/7-500e0041.js"),["./chunks\\7-500e0041.js","./components\\pages\\kittens\\filaberta\\_page.svelte-1725f52e.js","./chunks\\index-a51d240b.js"],import.meta.url),()=>j(()=>import("./chunks/8-5802ab6c.js"),["./chunks\\8-5802ab6c.js","./components\\pages\\kittens\\garfield\\_page.svelte-0dc9c7eb.js","./chunks\\index-a51d240b.js"],import.meta.url),()=>j(()=>import("./chunks/9-11b4471d.js"),["./chunks\\9-11b4471d.js","./components\\pages\\kittens\\pancake\\_page.svelte-d9e09856.js","./chunks\\index-a51d240b.js"],import.meta.url),()=>j(()=>import("./chunks/10-d06f406c.js"),["./chunks\\10-d06f406c.js","./components\\pages\\kittens\\rocket\\_page.svelte-f007ac9c.js","./chunks\\index-a51d240b.js"],import.meta.url)],Kt=[],Mt={"/":[2],"/about":[3],"/contact":[4],"/kittens":[5],"/kittens/bean":[6],"/kittens/filaberta":[7],"/kittens/garfield":[8],"/kittens/pancake":[9],"/kittens/rocket":[10]},zt={handleError:({error:a})=>{console.error(a)}};class Ie{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class xe{constructor(e,n){this.status=e,this.location=n}}async function Ht(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([s,i])=>[s,await i])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Wt=-1,Yt=-2,Xt=-3,Zt=-4,Qt=-5,xt=-6;function en(a){if(typeof a=="number")return s(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const e=a,n=Array(e.length);function s(i,u=!1){if(i===Wt)return;if(i===Xt)return NaN;if(i===Zt)return 1/0;if(i===Qt)return-1/0;if(i===xt)return-0;if(u)throw new Error("Invalid input");if(i in n)return n[i];const t=e[i];if(!t||typeof t!="object")n[i]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[i]=new Date(t[1]);break;case"Set":const _=new Set;n[i]=_;for(let w=1;w<t.length;w+=1)_.add(s(t[w]));break;case"Map":const d=new Map;n[i]=d;for(let w=1;w<t.length;w+=2)d.set(s(t[w]),s(t[w+1]));break;case"RegExp":n[i]=new RegExp(t[1],t[2]);break;case"Object":n[i]=Object(t[1]);break;case"BigInt":n[i]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[i]=g;for(let w=1;w<t.length;w+=2)g[t[w]]=s(t[w+1]);break}else{const f=new Array(t.length);n[i]=f;for(let _=0;_<t.length;_+=1){const d=t[_];d!==Yt&&(f[_]=s(d))}}else{const f={};n[i]=f;for(const _ in t){const d=t[_];f[_]=s(d)}}return n[i]}return s(0)}const Re=$t(me,Kt,Mt,Jt),Ae=me[0],Pe=me[1];Ae();Pe();let ne={};try{ne=JSON.parse(sessionStorage[tt])}catch{}function Se(a){ne[a]=ue()}function tn({target:a,base:e}){var Je;const n=document.documentElement,s=[];let i=null;const u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,_=!1,d=!0,g=!1,w=!1,R=!1,$=!1,D,P=(Je=history.state)==null?void 0:Je[q];P||(P=Date.now(),history.replaceState({...history.state,[q]:P},"",location.href));const _e=ne[P];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let K,Ue,ae;async function $e(){ae=ae||Promise.resolve(),await ae,ae=null;const r=new URL(location.href),o=ie(r,!0);i=null,await De(o,r,[])}async function ge(r,{noScroll:o=!1,replaceState:c=!1,keepFocus:l=!1,state:p={},invalidateAll:h=!1},m,v){return typeof r=="string"&&(r=new URL(r,ze(document))),se({url:r,scroll:o?ue():null,keepfocus:l,redirect_chain:m,details:{state:p,replaceState:c},nav_token:v,accepted:()=>{h&&($=!0)},blocked:()=>{},type:"goto"})}async function je(r){const o=ie(r,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return i={id:o.id,promise:qe(o).then(c=>(c.type==="loaded"&&c.state.error&&(i=null),c))},i.promise}async function re(...r){const c=Re.filter(l=>r.some(p=>l.exec(p))).map(l=>Promise.all([...l.layouts,l.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(c)}async function De(r,o,c,l,p={},h){var v,b;Ue=p;let m=r&&await qe(r);if(m||(m=await Ge(o,{id:null},await ee(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(r==null?void 0:r.url)||o,Ue!==p)return!1;if(m.type==="redirect")if(c.length>10||c.includes(o.pathname))m=await oe({status:500,error:await ee(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return ge(new URL(m.location,o).href,{},[...c,o.pathname],p),!1;else((b=(v=m.props)==null?void 0:v.page)==null?void 0:b.status)>=400&&await M.updated.check()&&await le(o);if(s.length=0,$=!1,g=!0,l&&l.details){const{details:y}=l,S=y.replaceState?0:1;y.state[q]=P+=S,history[y.replaceState?"replaceState":"pushState"](y.state,"",o)}if(i=null,_?(t=m.state,m.props.page&&(m.props.page.url=o),D.$set(m.props)):Ve(m),l){const{scroll:y,keepfocus:S}=l;if(S||Le(),await ce(),d){const L=o.hash&&document.getElementById(o.hash.slice(1));y?scrollTo(y.x,y.y):L?L.scrollIntoView():scrollTo(0,0)}}else await ce();d=!0,m.props.page&&(K=m.props.page),h&&h(),g=!1}function Ve(r){var l;t=r.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),K=r.props.page,D=new Bt({target:a,props:{...r.props,stores:M},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};u.after_navigate.forEach(p=>p(c)),_=!0}async function Q({url:r,params:o,branch:c,status:l,error:p,route:h,form:m}){const v=c.filter(Boolean);let b="never";for(const O of c)(O==null?void 0:O.slash)!==void 0&&(b=O.slash);r.pathname=yt(r.pathname,b),r.search=r.search;const y={type:"loaded",state:{url:r,params:o,branch:c,error:p,route:h},props:{components:v.map(O=>O.node.component)}};m!==void 0&&(y.props.form=m);let S={},L=!K;for(let O=0;O<v.length;O+=1){const E=v[O];S={...S,...E.data},(L||!t.branch.some(T=>T===E))&&(y.props[`data_${O}`]=S,L=L||Object.keys(E.data??{}).length>0)}return L||(L=Object.keys(K.data).length!==Object.keys(S).length),(!t.url||r.href!==t.url.href||t.error!==p||m!==void 0||L)&&(y.props.page={error:p,params:o,route:h,status:l,url:new URL(r),form:m??null,data:L?S:K.data}),y}async function ye({loader:r,parent:o,url:c,params:l,route:p,server_data_node:h}){var y,S,L;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await r();if((y=b.universal)!=null&&y.load){let V=function(...E){for(const T of E){const{href:U}=new URL(T,c);v.dependencies.add(U)}};const O={route:{get id(){return v.route=!0,p.id}},params:new Proxy(l,{get:(E,T)=>(v.params.add(T),E[T])}),data:(h==null?void 0:h.data)??null,url:Et(c,()=>{v.url=!0}),async fetch(E,T){let U;E instanceof Request?(U=E.url,T={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...T}):U=E;const k=new URL(U,c).href;return V(k),_?It(U,k,T):Ot(U,T)},setHeaders:()=>{},depends:V,parent(){return v.parent=!0,o()}};m=await b.universal.load.call(null,O)??null,m=m?await Ht(m):null}return{node:b,loader:r,server:h,universal:(S=b.universal)!=null&&S.load?{type:"data",data:m,uses:v}:null,data:m??(h==null?void 0:h.data)??null,slash:((L=b.universal)==null?void 0:L.trailingSlash)??(h==null?void 0:h.slash)}}function Ce(r,o,c,l,p){if($)return!0;if(!l)return!1;if(l.parent&&r||l.route&&o||l.url&&c)return!0;for(const h of l.params)if(p[h]!==t.params[h])return!0;for(const h of l.dependencies)if(s.some(m=>m(new URL(h))))return!0;return!1}function we(r,o){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?o??null:null}async function qe({id:r,invalidating:o,url:c,params:l,route:p}){if((i==null?void 0:i.id)===r)return i.promise;const{errors:h,layouts:m,leaf:v}=p,b=[...m,v];h.forEach(k=>k==null?void 0:k().catch(()=>{})),b.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let y=null;const S=t.url?r!==t.url.pathname+t.url.search:!1,L=t.route?r!==t.route.id:!1,V=b.reduce((k,A,N)=>{var x;const I=t.branch[N],H=!!(A!=null&&A[0])&&((I==null?void 0:I.loader)!==A[1]||Ce(k.some(Boolean),L,S,(x=I.server)==null?void 0:x.uses,l));return k.push(H),k},[]);if(V.some(Boolean)){try{y=await et(c,V)}catch(k){return oe({status:500,error:await ee(k,{url:c,params:l,route:{id:p.id}}),url:c,route:p})}if(y.type==="redirect")return y}const O=y==null?void 0:y.nodes;let E=!1;const T=b.map(async(k,A)=>{var x;if(!k)return;const N=t.branch[A],I=O==null?void 0:O[A];if((!I||I.type==="skip")&&k[1]===(N==null?void 0:N.loader)&&!Ce(E,L,S,(x=N.universal)==null?void 0:x.uses,l))return N;if(E=!0,(I==null?void 0:I.type)==="error")throw I;return ye({loader:k[1],url:c,params:l,route:p,parent:async()=>{var Me;const Ke={};for(let be=0;be<A;be+=1)Object.assign(Ke,(Me=await T[be])==null?void 0:Me.data);return Ke},server_data_node:we(I===void 0&&k[0]?{type:"skip"}:I??null,N==null?void 0:N.server)})});for(const k of T)k.catch(()=>{});const U=[];for(let k=0;k<b.length;k+=1)if(b[k])try{U.push(await T[k])}catch(A){if(A instanceof xe)return{type:"redirect",location:A.location};let N=500,I;O!=null&&O.includes(A)?(N=A.status??N,I=A.error):A instanceof Ie?(N=A.status,I=A.body):I=await ee(A,{params:l,url:c,route:{id:p.id}});const H=await Be(k,U,h);return H?await Q({url:c,params:l,branch:U.slice(0,H.idx).concat(H.node),status:N,error:I,route:p}):await Ge(c,{id:p.id},I,N)}else U.push(void 0);return await Q({url:c,params:l,branch:U,status:200,error:null,route:p,form:o?void 0:null})}async function Be(r,o,c){for(;r--;)if(c[r]){let l=r;for(;!o[l];)l-=1;try{return{idx:l+1,node:{node:await c[r](),loader:c[r],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:r,error:o,url:c,route:l}){const p={},h=await Ae();let m=null;if(h.server)try{const y=await et(c,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;m=y.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await le(c)}const v=await ye({loader:Ae,url:c,params:p,route:l,parent:()=>Promise.resolve({}),server_data_node:we(m)}),b={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await Q({url:c,params:p,branch:[v,b],status:r,error:o,route:null})}function ie(r,o){if(We(r,e))return;const c=wt(r.pathname.slice(e.length)||"/");for(const l of Re){const p=l.exec(c);if(p)return{id:r.pathname+r.search,invalidating:o,route:l,params:bt(p),url:r}}}function Fe({url:r,type:o,intent:c,delta:l}){var v,b;let p=!1;const h={from:{params:t.params,route:{id:((v=t.route)==null?void 0:v.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((b=c==null?void 0:c.route)==null?void 0:b.id)??null},url:r},willUnload:!c,type:o};l!==void 0&&(h.delta=l);const m={...h,cancel:()=>{p=!0}};return w||u.before_navigate.forEach(y=>y(m)),p?null:h}async function se({url:r,scroll:o,keepfocus:c,redirect_chain:l,details:p,type:h,delta:m,nav_token:v,accepted:b,blocked:y}){const S=ie(r,!1),L=Fe({url:r,type:h,delta:m,intent:S});if(!L){y();return}Se(P),b(),w=!0,_&&M.navigating.set(L),await De(S,r,l,{scroll:o,keepfocus:c,details:p},v,()=>{w=!1,u.after_navigate.forEach(V=>V(L)),M.navigating.set(null)})}async function Ge(r,o,c,l){return r.origin===location.origin&&r.pathname===location.pathname&&!f?await oe({status:l,error:c,url:r,route:o}):await le(r)}function le(r){return location.href=r.href,new Promise(()=>{})}function nt(){let r;n.addEventListener("mousemove",h=>{const m=h.target;clearTimeout(r),r=setTimeout(()=>{l(m,2)},20)});function o(h){l(h.composedPath()[0],1)}n.addEventListener("mousedown",o),n.addEventListener("touchstart",o,{passive:!0});const c=new IntersectionObserver(h=>{for(const m of h)m.isIntersecting&&(re(new URL(m.target.href).pathname),c.unobserve(m.target))},{threshold:0});function l(h,m){const v=He(h,n);if(!v)return;const{url:b,external:y}=Ee(v,e);if(y)return;const S=fe(v);S.reload||(m<=S.preload_data?je(b):m<=S.preload_code&&re(b.pathname))}function p(){c.disconnect();for(const h of n.querySelectorAll("a")){const{url:m,external:v}=Ee(h,e);if(v)continue;const b=fe(h);b.reload||(b.preload_code===Ye.viewport&&c.observe(h),b.preload_code===Ye.eager&&re(m.pathname))}}u.after_navigate.push(p),p()}return{after_navigate:r=>{Oe(()=>(u.after_navigate.push(r),()=>{const o=u.after_navigate.indexOf(r);u.after_navigate.splice(o,1)}))},before_navigate:r=>{Oe(()=>(u.before_navigate.push(r),()=>{const o=u.before_navigate.indexOf(r);u.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(g||!_)&&(d=!1)},goto:(r,o={})=>ge(r,o,[]),invalidate:r=>{if(typeof r=="function")s.push(r);else{const{href:o}=new URL(r,location.href);s.push(c=>c.href===o)}return $e()},invalidateAll:()=>($=!0,$e()),preload_data:async r=>{const o=new URL(r,ze(document));await je(o)},preload_code:re,apply_action:async r=>{if(r.type==="error"){const o=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const p=await Be(t.branch.length,c,l.errors);if(p){const h=await Q({url:o,params:t.params,branch:c.slice(0,p.idx).concat(p.node),status:r.status??500,error:r.error,route:l});t=h.state,D.$set(h.props),ce().then(Le)}}else if(r.type==="redirect")ge(r.location,{invalidateAll:!0},[]);else{const o={form:r.data,page:{...K,form:r.data,status:r.status}};D.$set(o),r.type==="success"&&ce().then(Le)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var l;let c=!1;if(!w){const p={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};u.before_navigate.forEach(h=>h(p))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se(P);try{sessionStorage[tt]=JSON.stringify(ne)}catch{}}}),(r=navigator.connection)!=null&&r.saveData||nt(),n.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=He(o.composedPath()[0],n);if(!c)return;const{url:l,external:p,has:h}=Ee(c,e),m=fe(c);if(!l||!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||h.download)return;if(p||m.reload){Fe({url:l,type:"link"})||o.preventDefault(),w=!0;return}const[b,y]=l.href.split("#");if(y!==void 0&&b===location.href.split("#")[0]){R=!0,Se(P),t.url=l,M.page.set({...K,url:l}),M.page.notify();return}se({url:l,scroll:m.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),n.addEventListener("submit",o=>{var b;if(o.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(o.target),l=o.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const h=new URL(((b=o.submitter)==null?void 0:b.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(We(h,e))return;const{noscroll:m,reload:v}=fe(o.target);v||(o.preventDefault(),o.stopPropagation(),h.search=new URLSearchParams(new FormData(o.target)).toString(),se({url:h,scroll:m?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var c;if((c=o.state)!=null&&c[q]){if(o.state[q]===P)return;const l=o.state[q]-P;se({url:new URL(location.href),scroll:ne[o.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=o.state[q]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{R&&(R=!1,history.replaceState({...history.state,[q]:++P},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&M.navigating.set(null)})},_hydrate:async({status:r=200,error:o,node_ids:c,params:l,route:p,data:h,form:m})=>{f=!0;const v=new URL(location.href);({params:l={},route:p={id:null}}=ie(v,!1)||{});let b;try{const y=c.map(async(S,L)=>{const V=h[L];return ye({loader:me[S],url:v,params:l,route:p,parent:async()=>{const O={};for(let E=0;E<L;E+=1)Object.assign(O,(await y[E]).data);return O},server_data_node:we(V)})});b=await Q({url:v,params:l,branch:await Promise.all(y),status:r,error:o,form:m,route:Re.find(({id:S})=>S===p.id)??null})}catch(y){if(y instanceof xe){await le(new URL(y.location,location.href));return}b=await oe({status:y instanceof Ie?y.status:500,error:await ee(y,{url:v,params:l,route:p}),url:v,route:p})}Ve(b)}}}async function et(a,e){var u;const n=new URL(a);n.pathname=St(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const s=await he(n.href),i=await s.json();if(!s.ok)throw new Error(i);return(u=i.nodes)==null||u.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=en(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),i}function ee(a,e){return a instanceof Ie?a.body:zt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function rn({env:a,hydrate:e,paths:n,target:s,version:i}){mt(n),gt(i);const u=tn({target:s,base:n.base});_t({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{rn as start};

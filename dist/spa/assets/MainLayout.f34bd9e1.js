import{c as T,h as F,a as X,b as Y}from"./dom.3452ea71.js";import{c as d,h,r as y,i as U,o as R,n as j,a as P,d as A,g as C,l as B,w as S,e as I,f as N,p as K,j as Z,k as Q,m as ee,_ as te,q as oe,s as ne,t as $,u as _,v as ie,x as G,y as le,z as ae}from"./index.68b44011.js";import{Q as re}from"./QBtn.511e53a1.js";import{g as se,a as ue,b as ce,c as k}from"./scroll.a14f1fd1.js";var de=T({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:v}){const i=d(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>h("div",{class:i.value},F(v.default))}}),fe=T({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:v}){const i=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:i.value},F(v.default))}});function ve(){const e=y(!U.value);return e.value===!1&&R(()=>{e.value=!0}),e}const J=typeof ResizeObserver!="undefined",W=J===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var E=T({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:v}){let i=null,t,n={width:-1,height:-1};function r(s){s===!0||e.debounce===0||e.debounce==="0"?u():i===null&&(i=setTimeout(u,e.debounce))}function u(){if(clearTimeout(i),i=null,t){const{offsetWidth:s,offsetHeight:a}=t;(s!==n.width||a!==n.height)&&(n={width:s,height:a},v("resize",n))}}const m=C();if(Object.assign(m.proxy,{trigger:r}),J===!0){let s;return R(()=>{j(()=>{t=m.proxy.$el.parentNode,t&&(s=new ResizeObserver(r),s.observe(t),u())})}),P(()=>{clearTimeout(i),s!==void 0&&(s.disconnect!==void 0?s.disconnect():t&&s.unobserve(t))}),A}else{let w=function(){clearTimeout(i),a!==void 0&&(a.removeEventListener!==void 0&&a.removeEventListener("resize",r,B.passive),a=void 0)},g=function(){w(),t&&t.contentDocument&&(a=t.contentDocument.defaultView,a.addEventListener("resize",r,B.passive),u())};const s=ve();let a;return R(()=>{j(()=>{t=m.proxy.$el,t&&g()})}),P(w),()=>{if(s.value===!0)return h("object",{style:W.style,tabindex:-1,type:"text/html",data:W.url,"aria-hidden":"true",onLoad:g})}}}}),he=T({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:v,emit:i}){const{proxy:{$q:t}}=C(),n=I(N,()=>{console.error("QHeader needs to be child of QLayout")}),r=y(parseInt(e.heightHint,10)),u=y(!0),m=d(()=>e.reveal===!0||n.view.value.indexOf("H")>-1||t.platform.is.ios&&n.isContainer.value===!0),s=d(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return u.value===!0?r.value:0;const o=r.value-n.scroll.value.position;return o>0?o:0}),a=d(()=>e.modelValue!==!0||m.value===!0&&u.value!==!0),w=d(()=>e.modelValue===!0&&a.value===!0&&e.reveal===!0),g=d(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(a.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),x=d(()=>{const o=n.rows.value.top,p={};return o[0]==="l"&&n.left.space===!0&&(p[t.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),o[2]==="r"&&n.right.space===!0&&(p[t.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),p});function c(o,p){n.update("header",o,p)}function b(o,p){o.value!==p&&(o.value=p)}function H({height:o}){b(r,o),c("size",o)}function O(o){w.value===!0&&b(u,!0),i("focusin",o)}S(()=>e.modelValue,o=>{c("space",o),b(u,!0),n.animate()}),S(s,o=>{c("offset",o)}),S(()=>e.reveal,o=>{o===!1&&b(u,e.modelValue)}),S(u,o=>{n.animate(),i("reveal",o)}),S(n.scroll,o=>{e.reveal===!0&&b(u,o.direction==="up"||o.position<=e.revealOffset||o.position-o.inflectionPoint<100)});const q={};return n.instances.header=q,e.modelValue===!0&&c("size",r.value),c("space",e.modelValue),c("offset",s.value),P(()=>{n.instances.header===q&&(n.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const o=X(v.default,[]);return e.elevated===!0&&o.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(h(E,{debounce:0,onResize:H})),h("header",{class:g.value,style:x.value,onFocusin:O},o)}}}),me=T({name:"QPageContainer",setup(e,{slots:v}){const{proxy:{$q:i}}=C(),t=I(N,()=>{console.error("QPageContainer needs to be child of QLayout")});K(Z,!0);const n=d(()=>{const r={};return t.header.space===!0&&(r.paddingTop=`${t.header.size}px`),t.right.space===!0&&(r[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(r.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(r[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),r});return()=>h("div",{class:"q-page-container",style:n.value},F(v.default))}});const{passive:D}=B,ge=["both","horizontal","vertical"];var pe=T({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ge.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:v}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,n,r;S(()=>e.scrollTarget,()=>{s(),m()});function u(){t!==null&&t();const g=Math.max(0,ue(n)),x=ce(n),c={top:g-i.position.top,left:x-i.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const b=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";i.position={top:g,left:x},i.directionChanged=i.direction!==b,i.delta=c,i.directionChanged===!0&&(i.direction=b,i.inflectionPoint=i.position),v("scroll",{...i})}function m(){n=se(r,e.scrollTarget),n.addEventListener("scroll",a,D),a(!0)}function s(){n!==void 0&&(n.removeEventListener("scroll",a,D),n=void 0)}function a(g){if(g===!0||e.debounce===0||e.debounce==="0")u();else if(t===null){const[x,c]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];t=()=>{c(x),t=null}}}const w=C();return R(()=>{r=w.proxy.$el.parentNode,m()}),P(()=>{t!==null&&t(),s()}),Object.assign(w.proxy,{trigger:a,getPosition:()=>i}),A}}),be=T({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:v,emit:i}){const{proxy:{$q:t}}=C(),n=y(null),r=y(t.screen.height),u=y(e.container===!0?0:t.screen.width),m=y({position:0,direction:"down",inflectionPoint:0}),s=y(0),a=y(U.value===!0?0:k()),w=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),g=d(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),x=d(()=>a.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),c=d(()=>a.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function b(l){if(e.container===!0||document.qScrollPrevented!==!0){const f={position:l.position.top,direction:l.direction,directionChanged:l.directionChanged,inflectionPoint:l.inflectionPoint.top,delta:l.delta.top};m.value=f,e.onScroll!==void 0&&i("scroll",f)}}function H(l){const{height:f,width:z}=l;let L=!1;r.value!==f&&(L=!0,r.value=f,e.onScrollHeight!==void 0&&i("scroll-height",f),q()),u.value!==z&&(L=!0,u.value=z),L===!0&&e.onResize!==void 0&&i("resize",l)}function O({height:l}){s.value!==l&&(s.value=l,q())}function q(){if(e.container===!0){const l=r.value>s.value?k():0;a.value!==l&&(a.value=l)}}let o;const p={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:n,height:r,containerHeight:s,scrollbarWidth:a,totalWidth:d(()=>u.value+a.value),rows:d(()=>{const l=e.view.toLowerCase().split(" ");return{top:l[0].split(""),middle:l[1].split(""),bottom:l[2].split("")}}),header:Q({size:0,offset:0,space:!1}),right:Q({size:300,offset:0,space:!1}),footer:Q({size:0,offset:0,space:!1}),left:Q({size:300,offset:0,space:!1}),scroll:m,animate(){o!==void 0?clearTimeout(o):document.body.classList.add("q-body--layout-animate"),o=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),o=void 0},155)},update(l,f,z){p[l][f]=z}};if(K(N,p),k()>0){let z=function(){l=null,f.classList.remove("hide-scrollbar")},L=function(){if(l===null){if(f.scrollHeight>t.screen.height)return;f.classList.add("hide-scrollbar")}else clearTimeout(l);l=setTimeout(z,300)},V=function(M){l!==null&&M==="remove"&&(clearTimeout(l),z()),window[`${M}EventListener`]("resize",L)},l=null;const f=document.body;S(()=>e.container!==!0?"add":"remove",V),e.container!==!0&&V("add"),ee(()=>{V("remove")})}return()=>{const l=Y(v.default,[h(pe,{onScroll:b}),h(E,{onResize:H})]),f=h("div",{class:w.value,style:g.value,ref:e.container===!0?void 0:n,tabindex:-1},l);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:n},[h(E,{onResize:O}),h("div",{class:"absolute-full",style:x.value},[h("div",{class:"scroll",style:c.value},[f])])]):f}}});const we={created(){this.slideshow===!1&&this.$router.replace({path:"/"})},methods:{startStopSlideshow:function(){this.slideshow===!1&&this.$router.replace({path:"/s"}),this.slideshow===!0&&this.$router.replace({path:"/"}),this.slideshow=!this.slideshow}},data(){return{slideshow:!1}}},ye=G("galleria.");function xe(e,v,i,t,n,r){const u=ae("router-view");return oe(),ne(be,{view:"hHh lpR fFf",container:"",class:"tw-h-screen tw-m-auto tw-max-w-[1920px]"},{default:$(()=>[_(he,{reveal:"",class:"tw-mx-4 bg-primary text-white !tw-bg-white tw-h-20 tw-border-b-2"},{default:$(()=>[_(fe,{class:"tw-p-0 tw-h-full tw-w-full"},{default:$(()=>[_(de,{class:"tw-text-black tw-font-bold tw-text-2xl sm:tw-text-4xl"},{default:$(()=>[ye]),_:1}),_(re,{square:"",class:"tw-text-gray-500",flat:"",dense:"",onClick:ie(r.startStopSlideshow,["prevent"])},{default:$(()=>[G(le(this.slideshow===!1?"Start Slideshow":"Stop Slideshow"),1)]),_:1},8,["onClick"])]),_:1})]),_:1}),_(me,null,{default:$(()=>[_(u)]),_:1})]),_:1})}var _e=te(we,[["render",xe]]);export{_e as default};
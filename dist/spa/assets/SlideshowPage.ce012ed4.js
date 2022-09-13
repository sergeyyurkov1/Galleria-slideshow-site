import{u as le,a as ie,b as de,c as ve,Q as fe}from"./use-dark.8be6c442.js";import{e as me,h as j,c as W,u as ge,d as pe,b as se,l as he}from"./dom.3452ea71.js";import{U as we,V,d as ye,W as be,B as O,X as Y,E as J,H,C as K,r as Q,c as u,w as I,g as X,h as f,T as xe,n as _e,Y as Ce,Z as qe,o as ue,a as ce,$ as ee,a0 as Pe,_ as ke,q as U,s as Z,t as E,O as S,u as F,P as Se,Q as $e,R as Ie,y as te}from"./index.68b44011.js";import{g as Be,v as Ae,Q as z}from"./QBtn.511e53a1.js";const G={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Te=Object.keys(G);G.all=!0;function ne(e){const t={};for(const a of Te)e[a]===!0&&(t[a]=!0);return Object.keys(t).length===0?G:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}function oe(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function Ne(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),we.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Ve(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((a,i)=>{const l=parseFloat(a);l&&(t[i]=l)}),t}var Ee=me({name:"touch-swipe",beforeMount(e,{value:t,arg:a,modifiers:i}){if(i.mouse!==!0&&V.has.touch!==!0)return;const l=i.mouseCapture===!0?"Capture":"",n={handler:t,sensitivity:Ve(a),direction:ne(i),noop:ye,mouseStart(r){oe(r,n)&&be(r)&&(O(n,"temp",[[document,"mousemove","move",`notPassive${l}`],[document,"mouseup","end","notPassiveCapture"]]),n.start(r,!0))},touchStart(r){if(oe(r,n)){const s=r.target;O(n,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","notPassiveCapture"],[s,"touchend","end","notPassiveCapture"]]),n.start(r)}},start(r,s){V.is.firefox===!0&&Y(e,!0);const p=J(r);n.event={x:p.left,y:p.top,time:Date.now(),mouse:s===!0,dir:!1}},move(r){if(n.event===void 0)return;if(n.event.dir!==!1){H(r);return}const s=Date.now()-n.event.time;if(s===0)return;const p=J(r),h=p.left-n.event.x,c=Math.abs(h),g=p.top-n.event.y,v=Math.abs(g);if(n.event.mouse!==!0){if(c<n.sensitivity[1]&&v<n.sensitivity[1]){n.end(r);return}}else if(c<n.sensitivity[2]&&v<n.sensitivity[2])return;const w=c/s,b=v/s;n.direction.vertical===!0&&c<v&&c<100&&b>n.sensitivity[0]&&(n.event.dir=g<0?"up":"down"),n.direction.horizontal===!0&&c>v&&v<100&&w>n.sensitivity[0]&&(n.event.dir=h<0?"left":"right"),n.direction.up===!0&&c<v&&g<0&&c<100&&b>n.sensitivity[0]&&(n.event.dir="up"),n.direction.down===!0&&c<v&&g>0&&c<100&&b>n.sensitivity[0]&&(n.event.dir="down"),n.direction.left===!0&&c>v&&h<0&&v<100&&w>n.sensitivity[0]&&(n.event.dir="left"),n.direction.right===!0&&c>v&&h>0&&v<100&&w>n.sensitivity[0]&&(n.event.dir="right"),n.event.dir!==!1?(H(r),n.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ne(),n.styleCleanup=x=>{n.styleCleanup=void 0,document.body.classList.remove("non-selectable");const _=()=>{document.body.classList.remove("no-pointer-events--children")};x===!0?setTimeout(_,50):_()}),n.handler({evt:r,touch:n.event.mouse!==!0,mouse:n.event.mouse,direction:n.event.dir,duration:s,distance:{x:c,y:v}})):n.end(r)},end(r){n.event!==void 0&&(K(n,"temp"),V.is.firefox===!0&&Y(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(!0),r!==void 0&&n.event.dir!==!1&&H(r),n.event=void 0)}};e.__qtouchswipe=n,i.mouse===!0&&O(n,"main",[[e,"mousedown","mouseStart",`passive${l}`]]),V.has.touch===!0&&O(n,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const a=e.__qtouchswipe;a!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&a.end(),a.handler=t.value),a.direction=ne(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;t!==void 0&&(K(t,"main"),K(t,"temp"),V.is.firefox===!0&&Y(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchswipe)}});function Fe(){const e=new Map;return{getCache:function(t,a){return e[t]===void 0?e[t]=a:e[t]},getCacheWithFn:function(t,a){return e[t]===void 0?e[t]=a():e[t]}}}const De={name:{required:!0},disable:Boolean},re={setup(e,{slots:t}){return()=>f("div",{class:"q-panel scroll",role:"tabpanel"},j(t.default))}},ze={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Qe=["update:modelValue","before-transition","transition"];function Le(){const{props:e,emit:t,proxy:a}=X(),{getCacheWithFn:i}=Fe();let l,n;const r=Q(null),s=Q(null);function p(o){const d=e.vertical===!0?"up":"left";C((a.$q.lang.rtl===!0?-1:1)*(o.direction===d?1:-1))}const h=u(()=>[[Ee,p,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),c=u(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),g=u(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),v=u(()=>`--q-transition-duration: ${e.transitionDuration}ms`),w=u(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),b=u(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),x=u(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);I(()=>e.modelValue,(o,d)=>{const y=q(o)===!0?A(o):-1;n!==!0&&$(y===-1?0:y<A(d)?-1:1),r.value!==y&&(r.value=y,t("before-transition",o,d),_e(()=>{t("transition",o,d)}))});function _(){C(1)}function L(){C(-1)}Object.assign(a,{next:_,previous:L,goTo:B});function B(o){t("update:modelValue",o)}function q(o){return o!=null&&o!==""}function A(o){return l.findIndex(d=>d.props.name===o&&d.props.disable!==""&&d.props.disable!==!0)}function M(){return l.filter(o=>o.props.disable!==""&&o.props.disable!==!0)}function $(o){const d=o!==0&&e.animated===!0&&r.value!==-1?"q-transition--"+(o===-1?c.value:g.value):null;s.value!==d&&(s.value=d)}function C(o,d=r.value){let y=d+o;for(;y>-1&&y<l.length;){const k=l[y];if(k!==void 0&&k.props.disable!==""&&k.props.disable!==!0){$(o),n=!0,t("update:modelValue",k.props.name),setTimeout(()=>{n=!1});return}y+=o}e.infinite===!0&&l.length>0&&d!==-1&&d!==l.length&&C(o,o===-1?l.length:-1)}function T(){const o=A(e.modelValue);return r.value!==o&&(r.value=o),!0}function R(){const o=q(e.modelValue)===!0&&T()&&l[r.value];return e.keepAlive===!0?[f(Ce,b.value,[f(x.value===!0?i(w.value,()=>({...re,name:w.value})):re,{key:w.value,style:v.value},()=>o)])]:[f("div",{class:"q-panel scroll",style:v.value,key:w.value,role:"tabpanel"},[o])]}function m(){if(l.length!==0)return e.animated===!0?[f(xe,{name:s.value},R)]:R()}function P(o){return l=Be(j(o.default,[])).filter(d=>d.props!==null&&d.props.slot===void 0&&q(d.props.name)===!0),l.length}function N(){return l}return{panelIndex:r,panelDirectives:h,updatePanelsList:P,updatePanelIndex:T,getPanelContent:m,getEnabledPanels:M,getPanels:N,isValidPanelName:q,keepAliveProps:b,needsUniqueKeepAliveWrapper:x,goToPanelByOffset:C,goToPanel:B,nextPanel:_,previousPanel:L}}var Me=W({name:"QCarouselSlide",props:{...De,imgSrc:String},setup(e,{slots:t}){const a=u(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>f("div",{class:"q-carousel__slide",style:a.value},j(t.default))}});const Re={xs:2,sm:4,md:6,lg:10,xl:14};function ae(e,t,a){return{transform:t===!0?`translateX(${a.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var Oe=W({name:"QLinearProgress",props:{...le,...ge,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:t}){const{proxy:a}=X(),i=ie(e,a.$q),l=pe(e,Re),n=u(()=>e.indeterminate===!0||e.query===!0),r=u(()=>e.reverse!==e.query),s=u(()=>({...l.value!==null?l.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),p=u(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),h=u(()=>ae(e.buffer!==void 0?e.buffer:1,r.value,a.$q)),c=u(()=>`q-linear-progress__track absolute-full q-linear-progress__track--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__track--${i.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),g=u(()=>ae(n.value===!0?1:e.value,r.value,a.$q)),v=u(()=>`q-linear-progress__model absolute-full q-linear-progress__model--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__model--${n.value===!0?"in":""}determinate`),w=u(()=>({width:`${e.value*100}%`})),b=u(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"}`);return()=>{const x=[f("div",{class:c.value,style:h.value}),f("div",{class:v.value,style:g.value})];return e.stripe===!0&&n.value===!1&&x.push(f("div",{class:b.value,style:w.value})),f("div",{class:p.value,style:s.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},se(t.default,x))}}}),Ue=W({name:"QCarouselControl",props:{position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,default:()=>[18,18],validator:e=>e.length===2}},setup(e,{slots:t}){const a=u(()=>`q-carousel__control absolute absolute-${e.position}`),i=u(()=>({margin:`${e.offset[1]}px ${e.offset[0]}px`}));return()=>f("div",{class:a.value,style:i.value},j(t.default))}});let D=0;const je={fullscreen:Boolean,noRouteFullscreenExit:Boolean},We=["update:fullscreen","fullscreen"];function Xe(){const e=X(),{props:t,emit:a,proxy:i}=e;let l,n,r;const s=Q(!1);Ae(e)===!0&&I(()=>i.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&c()}),I(()=>t.fullscreen,g=>{s.value!==g&&p()}),I(s,g=>{a("update:fullscreen",g),a("fullscreen",g)});function p(){s.value===!0?c():h()}function h(){s.value!==!0&&(s.value=!0,r=i.$el.parentNode,r.replaceChild(n,i.$el),document.body.appendChild(i.$el),D++,D===1&&document.body.classList.add("q-body--fullscreen-mixin"),l={handler:c},ee.add(l))}function c(){s.value===!0&&(l!==void 0&&(ee.remove(l),l=void 0),r.replaceChild(i.$el,n),s.value=!1,D=Math.max(0,D-1),D===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),i.$el.scrollIntoView!==void 0&&setTimeout(()=>{i.$el.scrollIntoView()})))}return qe(()=>{n=document.createElement("span")}),ue(()=>{t.fullscreen===!0&&h()}),ce(c),Object.assign(i,{toggleFullscreen:p,setFullscreen:h,exitFullscreen:c}),{inFullscreen:s,toggleFullscreen:p}}const Ye=["top","right","bottom","left"],He=["regular","flat","outline","push","unelevated"];var Ke=W({name:"QCarousel",props:{...le,...ze,...je,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>He.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Ye.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...We,...Qe],setup(e,{slots:t}){const{proxy:{$q:a}}=X(),i=ie(e,a);let l,n;const{updatePanelsList:r,getPanelContent:s,panelDirectives:p,goToPanel:h,previousPanel:c,nextPanel:g,getEnabledPanels:v,panelIndex:w}=Le(),{inFullscreen:b}=Xe(),x=u(()=>b.value!==!0&&e.height!==void 0?{height:e.height}:{}),_=u(()=>e.vertical===!0?"vertical":"horizontal"),L=u(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(b.value===!0?" fullscreen":"")+(i.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${_.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${M.value}`:"")),B=u(()=>{const m=[e.prevIcon||a.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||a.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&a.lang.rtl===!0?m.reverse():m}),q=u(()=>e.navigationIcon||a.iconSet.carousel.navigationIcon),A=u(()=>e.navigationActiveIcon||q.value),M=u(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),$=u(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));I(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(l),C())}),I(()=>e.autoplay,m=>{m?C():clearInterval(l)});function C(){const m=Pe(e.autoplay)===!0?e.autoplay:5e3;l=setTimeout(m>=0?g:c,Math.abs(m))}ue(()=>{e.autoplay&&C()}),ce(()=>{clearInterval(l)});function T(m,P){return f("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${m} q-carousel__navigation--${M.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[f("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},v().map(P))])}function R(){const m=[];if(e.navigation===!0){const P=t["navigation-icon"]!==void 0?t["navigation-icon"]:o=>f(z,{key:"nav"+o.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${o.active===!0?"":"in"}active`,...o.btnProps,onClick:o.onClick}),N=n-1;m.push(T("buttons",(o,d)=>{const y=o.props.name,k=w.value===d;return P({index:d,maxIndex:N,name:y,active:k,btnProps:{icon:k===!0?A.value:q.value,size:"sm",...$.value},onClick:()=>{h(y)}})}))}else if(e.thumbnails===!0){const P=e.controlColor!==void 0?` text-${e.controlColor}`:"";m.push(T("thumbnails",N=>{const o=N.props;return f("img",{key:"tmb#"+o.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${o.name===e.modelValue?"":"in"}active`+P,src:o.imgSrc||o["img-src"],onClick:()=>{h(o.name)}})}))}return e.arrows===!0&&w.value>=0&&((e.infinite===!0||w.value>0)&&m.push(f("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${_.value} absolute flex flex-center`},[f(z,{icon:B.value[0],...$.value,onClick:c})])),(e.infinite===!0||w.value<n-1)&&m.push(f("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${_.value} absolute flex flex-center`},[f(z,{icon:B.value[1],...$.value,onClick:g})]))),se(t.control,m)}return()=>(n=r(t),f("div",{class:L.value,style:x.value},[he("div",{class:"q-carousel__slides-container"},s(),"sl-cont",e.swipeable,()=>p.value)].concat(R())))}});const Ze={components:{},setup(){const e=de(),t=Q(0);let a;return{store:e,slide:Q(0),progress:t,interval:a}},methods:{resetProgress:function(){this.key+=1,this.progress=0,clearInterval(this.interval),this.interval=setInterval(()=>{this.progress>=1&&clearInterval(this.interval),this.progress=this.progress+1},1)}},mounted(){this.resetProgress()},beforeUnmount(){clearInterval(this.interval)},data(){return{key:1}}},Ge={class:"tw-absolute tw-inset-0"},Je={class:"tw-bg-gray-100 tw-flex tw-flex-col md:tw-flex-row tw-h-full tw-justify-between"},et={class:"tw-relative tw-w-full tw-h-full"},tt={class:"tw-ml-4 tw-w-fit tw-m-0"},nt={class:"tw-text-black tw-font-bold tw-text-lg md:tw-text-xl tw-overflow-ellipsis tw-max-w-[calc(100vw-160px)] tw-overflow-x-hidden tw-whitespace-nowrap"},ot={class:"tw-text-gray-900 tw-font-thin tw-text-sm"},rt={class:"tw-w-[160px] tw-mr-4 tw-h-fit tw-m-0 tw-flex tw-flex-row tw-justify-end tw-align-middle"};function at(e,t,a,i,l,n){return U(),Z(ve,null,{default:E(()=>[S("div",Ge,[F(Ke,{"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"",modelValue:i.slide,"onUpdate:modelValue":t[2]||(t[2]=r=>i.slide=r),autoplay:14800,ref:"carousel",infinite:"",padding:"",onBeforeTransition:t[3]||(t[3]=()=>{this.resetProgress()}),class:"tw-w-full tw-h-full tw-py-8"},{default:E(()=>[(U(!0),Se(Ie,null,$e(i.store.data,(r,s)=>(U(),Z(Me,{name:s,key:s},{default:E(()=>[S("div",Je,[S("div",et,[F(fe,{fit:"contain",class:"tw-w-full tw-h-full",src:r._links.thumbnail.href},null,8,["src"])])])]),_:2},1032,["name"]))),128))]),control:E(()=>[(U(),Z(Oe,{key:l.key,value:i.progress,color:"black","animation-speed":"50000",class:"tw-z-20 tw-h-[2px] tw-absolute tw-bottom-[78px] tw-left-0"},null,8,["value"])),F(Ue,{position:"bottom",class:"tw-bg-white tw-z-10 !tw-m-0 tw-h-[80px] q-gutter-xs tw-w-full tw-flex tw-justify-between tw-items-center"},{default:E(()=>[S("div",tt,[S("p",nt,te(i.store.data[i.slide].title),1),S("p",ot,te(i.store.data[i.slide].date),1)]),S("div",rt,[F(z,{square:"",dense:"",flat:"","text-color":"black",icon:"skip_previous",onClick:t[0]||(t[0]=r=>e.$refs.carousel.previous())}),F(z,{square:"",dense:"",flat:"","text-color":"black",icon:"skip_next",onClick:t[1]||(t[1]=r=>e.$refs.carousel.next())})])]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var ct=ke(Ze,[["render",at]]);export{ct as default};
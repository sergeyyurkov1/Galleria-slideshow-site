import{c as B,i as X,j as W,a as G,h as M,k as T}from"./dom.3452ea71.js";import{h as t,r as C,c as V,w as p,L as J,M as K,a as Y,o as Z,l as ee,n as te,g as z,N as ae,_ as A,q as v,s as P,t as g,u as L,O as h,y as Q,P as N,Q as E,R as H,z as re}from"./index.68b44011.js";import{d as _,a as S,s as q,g as se}from"./scroll.a14f1fd1.js";import{u as ne,a as ie,Q as oe,b as le,c as ue}from"./use-dark.8be6c442.js";const ce=[t("g",{"stroke-width":"4","stroke-linecap":"round"},[t("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(180)"},[t("animate",{attributeName:"stroke-opacity",dur:"750ms",values:"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",repeatCount:"indefinite"})]),t("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(210)"},[t("animate",{attributeName:"stroke-opacity",dur:"750ms",values:"0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0",repeatCount:"indefinite"})]),t("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(240)"},[t("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1",repeatCount:"indefinite"})]),t("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(270)"},[t("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15",repeatCount:"indefinite"})]),t("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(300)"},[t("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25",repeatCount:"indefinite"})]),t("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(330)"},[t("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35",repeatCount:"indefinite"})]),t("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(0)"},[t("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45",repeatCount:"indefinite"})]),t("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(30)"},[t("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55",repeatCount:"indefinite"})]),t("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(60)"},[t("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65",repeatCount:"indefinite"})]),t("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(90)"},[t("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7",repeatCount:"indefinite"})]),t("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(120)"},[t("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85",repeatCount:"indefinite"})]),t("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(150)"},[t("animate",{attributeName:"stroke-opacity",dur:"750ms",values:"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",repeatCount:"indefinite"})])])];var de=B({name:"QSpinnerIos",props:X,setup(e){const{cSize:l,classes:i}=W(e);return()=>t("svg",{class:i.value,width:l.value,height:l.value,stroke:"currentColor",fill:"currentColor",viewBox:"0 0 64 64"},ce)}});const{passive:f}=ee;var fe=B({name:"QInfiniteScroll",props:{offset:{type:Number,default:500},debounce:{type:[String,Number],default:100},scrollTarget:{default:void 0},initialIndex:Number,disable:Boolean,reverse:Boolean},emits:["load"],setup(e,{slots:l,emit:i}){const o=C(!1),s=C(!0),c=C(null);let m=e.initialIndex||0,a,n;const y=V(()=>"q-infinite-scroll__loading"+(o.value===!0?"":" invisible"));function d(){if(e.disable===!0||o.value===!0||s.value===!1)return;const r=_(a),u=S(a),w=T(a);e.reverse===!1?Math.round(u+w+e.offset)>=Math.round(r)&&b():Math.round(u)<=e.offset&&b()}function b(){if(e.disable===!0||o.value===!0||s.value===!1)return;m++,o.value=!0;const r=_(a);i("load",m,u=>{s.value===!0&&(o.value=!1,te(()=>{if(e.reverse===!0){const w=_(a),R=S(a),U=w-r;q(a,R+U)}u===!0?k():c.value&&c.value.closest("body")&&n()}))})}function O(){m=0}function D(){s.value===!1&&(s.value=!0,a.addEventListener("scroll",n,f)),d()}function k(){s.value===!0&&(s.value=!1,o.value=!1,a.removeEventListener("scroll",n,f),n!==void 0&&n.cancel!==void 0&&n.cancel())}function I(){if(a&&s.value===!0&&a.removeEventListener("scroll",n,f),a=se(c.value,e.scrollTarget),s.value===!0){if(a.addEventListener("scroll",n,f),e.reverse===!0){const r=_(a),u=T(a);q(a,r-u)}d()}}function j(r){m=r}const F=z();Object.assign(F.proxy,{poll:()=>{n!==void 0&&n()},trigger:b,stop:k,reset:O,resume:D,setIndex:j});function $(r){r=parseInt(r,10);const u=n;n=r<=0?d:ae(d,isNaN(r)===!0?100:r),a&&s.value===!0&&(u!==void 0&&a.removeEventListener("scroll",u,f),a.addEventListener("scroll",n,f))}p(()=>e.disable,r=>{r===!0?k():D()}),p(()=>e.reverse,r=>{o.value===!1&&s.value===!0&&d()}),p(()=>e.scrollTarget,I),p(()=>e.debounce,$);let x=!1;return J(()=>{x!==!1&&a&&q(a,x)}),K(()=>{x=a?S(a):!1}),Y(()=>{s.value===!0&&a.removeEventListener("scroll",n,f)}),Z(()=>{$(e.debounce),I()}),()=>{const r=G(l.default,[]);return e.disable!==!0&&s.value===!0&&r[e.reverse===!1?"push":"unshift"](t("div",{class:y.value},M(l.loading))),t("div",{class:"q-infinite-scroll",ref:c},r)}}}),me=B({name:"QCard",props:{...ne,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:l}){const i=z(),o=ie(e,i.proxy.$q),s=V(()=>"q-card"+(o.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>t(e.tag,{class:s.value},M(l.default))}});const ve={props:["src","title","date"],name:"CardComponent"},he={class:"!tw-bg-black !tw-bg-opacity-30 absolute-full text-subtitle2 flex flex-center tw-flex-col tw-justify-end tw-items-start"},ye={class:"tw-m-4"},ge={class:"tw-text-lg sm:tw-text-xl md:tw-text-xl tw-font-bold ellipsis-3-lines"},pe={class:"tw-text-sm tw-font-thin tw-text-gray-200"};function _e(e,l,i,o,s,c){return v(),P(me,{square:"",flat:"",class:"my-card tw-mt-8"},{default:g(()=>[L(oe,{src:i.src},{default:g(()=>[h("div",he,[h("div",ye,[h("p",ge,Q(i.title),1),h("p",pe,Q(i.date),1)])])]),_:1},8,["src"])]),_:1})}var be=A(ve,[["render",_e]]);const ke={name:"IndexPage",components:{CardComponent:be},setup(){return{store:le()}},methods:{getToken:async function(){const e=await this.$axios.post("https://api.artsy.net/api/tokens/xapp_token?client_id=c465d92811cda139c009&client_secret=3341781ff826d2774819b16dc491c954");this.store.setToken(e.data.token)},getData:async function(e,l){this.store.token===""&&await this.getToken();const i=await this.$axios.get(this.store.nextLink,{headers:{"X-XAPP-Token":this.store.token}});this.store.putData(i.data._embedded.artworks),this.store.setNextLink(i.data._links.next.href),l()}},watch:{n:{handler(e){this.store.n=e},immediate:!0}},computed:{n(){return this.$q.screen.lt.sm?1:this.$q.screen.sm?2:4}}},xe={class:"tw-flex tw-mb-8 tw-gap-8"},we={class:"row justify-center q-my-md tw-mb-8"};function Ce(e,l,i,o,s,c){const m=re("CardComponent");return v(),P(ue,null,{default:g(()=>[L(fe,{onLoad:c.getData,debounce:"1000",class:"tw-px-[13px] tw-m-1 tw-mt-0"},{loading:g(()=>[h("div",we,[L(de,{color:"black",size:"40px"})])]),default:g(()=>[h("div",xe,[(v(!0),N(H,null,E(o.store.splitData,(a,n)=>(v(),N("div",{key:n,class:"tw-flex-[1_1_100%] sm:tw-flex-[1_1_50%] md:tw-flex-[1_1_25%]"},[(v(!0),N(H,null,E(a,(y,d)=>(v(),P(m,{key:d,src:y._links.thumbnail.href,title:y.title,date:y.date},null,8,["src","title","date"]))),128))]))),128))])]),_:1},8,["onLoad"])]),_:1})}var Le=A(ke,[["render",Ce]]);export{Le as default};

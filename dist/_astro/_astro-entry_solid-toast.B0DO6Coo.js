import{k as T,g as f,b,i as u,a as c,f as m,t as v,o as U,l as g,h as E,F as V,M as w,m as $,S as W,n as h,r as S,u as D,e as z,p as Y,s as y}from"./web.CGV0YjKn.js";import{m as j,c as G,s as q,d as I,r as L,g as J,a as P,A as B,b as A,e as K,f as Q,u as X}from"./toast.wqlfmKb2.js";import"./store.wnBxOkpW.js";const Z={display:"flex","align-items":"center",color:"#363636",background:"white","box-shadow":"0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05)","max-width":"350px","pointer-events":"auto",padding:"8px 10px","border-radius":"4px","line-height":"1.3","will-change":"transform"},ee={display:"flex","align-items":"center",flex:"1 1 auto",margin:"4px 10px","white-space":"pre-line"},C={"flex-shrink":0,"min-width":"20px","min-height":"20px",display:"flex","align-items":"center","justify-content":"center","text-align":"center"},F=e=>({calcMode:"spline",keyTimes:"0; 1",keySplines:e});var te=v("<div><style>.sldt-active{z-index:9999;}.sldt-active>*{pointer-events:auto;}</style><!$><!/>");const $e=e=>(T(()=>{j(e)}),T(()=>{const i=G();U(()=>{i&&i.forEach(t=>t&&clearTimeout(t))})}),(()=>{var i=f(te),t=i.firstChild,n=t.nextSibling,[r,o]=b(n.nextSibling);return u(i,c(V,{get each(){return q.toasts},children:s=>c(se,{toast:s})}),r,o),m(s=>{var d={...I,...e.containerStyle},a=e.containerClassName;return s.e=g(i,d,s.e),a!==s.t&&E(i,s.t=a),s},{e:void 0,t:void 0}),i})());var p=v("<div>"),ae=v("<div><!$><!/><div>");const ie=e=>{let i;return T(()=>{if(!i)return;const t=J(e.toast,e.position);e.toast.visible?i.animate([{transform:`translate3d(0,${t*-200}%,0) scale(.6)`,opacity:.5},{transform:"translate3d(0,0,0) scale(1)",opacity:1}],{duration:350,fill:"forwards",easing:"cubic-bezier(.21,1.02,.73,1)"}):i.animate([{transform:"translate3d(0,0,-1px) scale(1)",opacity:1},{transform:`translate3d(0,${t*-150}%,-1px) scale(.4)`,opacity:0}],{duration:400,fill:"forwards",easing:"cubic-bezier(.06,.71,.55,1)"})}),(()=>{var t=f(ae),n=t.firstChild,[r,o]=b(n.nextSibling),s=r.nextSibling,d=i;return typeof d=="function"?D(d,t):i=t,u(t,c(W,{get children(){return[c(w,{get when(){return e.toast.icon},get children(){var a=f(p);return u(a,()=>e.toast.icon),m(l=>g(a,C,l)),a}}),c(w,{get when(){return e.toast.type==="loading"},get children(){var a=f(p);return u(a,c(me,$(()=>e.toast.iconTheme))),m(l=>g(a,C,l)),a}}),c(w,{get when(){return e.toast.type==="success"},get children(){var a=f(p);return u(a,c(ce,$(()=>e.toast.iconTheme))),m(l=>g(a,C,l)),a}}),c(w,{get when(){return e.toast.type==="error"},get children(){var a=f(p);return u(a,c(ue,$(()=>e.toast.iconTheme))),m(l=>g(a,C,l)),a}})]}}),r,o),h(s,$(()=>e.toast.ariaProps),!1,!0),u(s,()=>L(e.toast.message,e.toast)),m(a=>{var l=e.toast.className,x={...Z,...e.toast.style},k=ee;return l!==a.e&&E(t,a.e=l),a.t=g(t,x,a.t),a.a=g(s,k,a.a),a},{e:void 0,t:void 0,a:void 0}),S(),t})()};var re=v("<div>");const se=e=>{const i=()=>{const r=e.toast.position||A.position,o=K(e.toast,r);return Q(r,o)},t=z(()=>i());let n;return Y(()=>{n&&X(n,e.toast)}),(()=>{var r=f(re);r.addEventListener("mouseleave",()=>P({type:B.END_PAUSE,time:Date.now()})),r.addEventListener("mouseenter",()=>P({type:B.START_PAUSE,time:Date.now()}));var o=n;return typeof o=="function"?D(o,r):n=r,u(r,(()=>{var s=z(()=>e.toast.type==="custom");return()=>s()?L(e.toast.message,e.toast):c(ie,{get toast(){return e.toast},get position(){return e.toast.position||A.position}})})()),m(s=>{var d=t(),a=e.toast.visible?"sldt-active":"";return s.e=g(r,d,s.e),a!==s.t&&E(r,s.t=a),s},{e:void 0,t:void 0}),r})()};var ne=v('<svg><circle cx=16 cy=16 r=0><animate attributeName=opacity values="0; 1; 1"></animate><animate attributeName=r values="0; 17.5; 16"></svg>',!1,!0,!1),le=v('<svg><circle cx=16 cy=16 r=12 opacity=0><animate attributeName=opacity values="1; 0"></animate><animate attributeName=r values="12; 26"></svg>',!1,!0,!1);const O=e=>{const i={dur:"0.35s",begin:"100ms",fill:"freeze",calcMode:"spline",keyTimes:"0; 0.6; 1",keySplines:"0.25 0.71 0.4 0.88; .59 .22 .87 .63"};return(()=>{var t=f(ne),n=t.firstChild,r=n.nextSibling;return h(n,i,!0,!1),h(r,i,!0,!1),m(()=>y(t,"fill",e.fill)),S(),t})()},H=e=>{const i={dur:"1s",begin:e.begin||"320ms",fill:"freeze",...F("0.0 0.0 0.2 1")};return(()=>{var t=f(le),n=t.firstChild,r=n.nextSibling;return h(n,i,!0,!1),h(r,i,!0,!1),m(()=>y(t,"fill",e.fill)),S(),t})()};var oe=v('<svg viewBox="0 0 32 32"width=1.25rem height=1.25rem><!$><!/><!$><!/><path fill=none stroke-width=4 stroke-dasharray=22 stroke-dashoffset=22 stroke-linecap=round stroke-miterlimit=10 d=M9.8,17.2l3.8,3.6c0.1,0.1,0.3,0.1,0.4,0l9.6-9.7><animate attributeName=stroke-dashoffset values=22;0 dur=0.25s begin=250ms fill=freeze>');const ce=e=>{const i=e.primary||"#34C759";return(()=>{var t=f(oe),n=t.firstChild,[r,o]=b(n.nextSibling),s=r.nextSibling,[d,a]=b(s.nextSibling),l=d.nextSibling,x=l.firstChild;return t.style.setProperty("overflow","visible"),u(t,c(O,{fill:i}),r,o),u(t,c(H,{fill:i,begin:"350ms"}),d,a),h(x,$(()=>F("0.0, 0.0, 0.58, 1.0")),!0,!1),m(()=>y(l,"stroke",e.secondary||"#FCFCFC")),S(),t})()};var de=v('<svg viewBox="0 0 32 32"width=1.25rem height=1.25rem><!$><!/><!$><!/><path fill=none stroke-width=4 stroke-dasharray=9 stroke-dashoffset=9 stroke-linecap=round d=M16,7l0,9><animate attributeName=stroke-dashoffset values=9;0 dur=0.2s begin=250ms fill=freeze></animate></path><circle cx=16 cy=23 r=2.5 opacity=0><animate attributeName=opacity values=0;1 dur=0.25s begin=350ms fill=freeze>');const ue=e=>{const i=e.primary||"#FF3B30";return(()=>{var t=f(de),n=t.firstChild,[r,o]=b(n.nextSibling),s=r.nextSibling,[d,a]=b(s.nextSibling),l=d.nextSibling,x=l.firstChild,k=l.nextSibling,R=k.firstChild;return t.style.setProperty("overflow","visible"),u(t,c(O,{fill:i}),r,o),u(t,c(H,{fill:i}),d,a),h(x,$(()=>F("0.0, 0.0, 0.58, 1.0")),!0,!1),h(R,$(()=>F("0.0, 0.0, 0.58, 1.0")),!0,!1),m(_=>{var N=e.secondary||"#FFFFFF",M=e.secondary||"#FFFFFF";return N!==_.e&&y(l,"stroke",_.e=N),M!==_.t&&y(k,"fill",_.t=M),_},{e:void 0,t:void 0}),S(),t})()};var fe=v('<svg viewBox="0 0 32 32"width=1.25rem height=1.25rem><path fill=none stroke-width=4 stroke-miterlimit=10 d=M16,6c3,0,5.7,1.3,7.5,3.4c1.5,1.8,2.5,4,2.5,6.6c0,5.5-4.5,10-10,10S6,21.6,6,16S10.5,6,16,6z></path><path fill=none stroke-width=4 stroke-linecap=round stroke-miterlimit=10 d=M16,6c3,0,5.7,1.3,7.5,3.4c0.6,0.7,1.1,1.4,1.5,2.2><animateTransform attributeName=transform type=rotate from="0 16 16"to="360 16 16"dur=0.75s repeatCount=indefinite>');const me=e=>(()=>{var i=f(fe),t=i.firstChild,n=t.nextSibling;return i.style.setProperty("overflow","visible"),m(r=>{var o=e.primary||"#E5E7EB",s=e.secondary||"#4b5563";return o!==r.e&&y(t,"stroke",r.e=o),s!==r.t&&y(n,"stroke",r.t=s),r},{e:void 0,t:void 0}),i})();export{$e as Toaster};

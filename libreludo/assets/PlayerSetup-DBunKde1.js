import{a as u,o as q,p as O,g as tn,w as en,q as on}from"./errorBoundaries-2t9vxQUe.js";import{y as nn,a2 as rn,u as an,J as sn,L as Ve}from"./useCleanup-qdbmwOdJ.js";import{c as It}from"./clsx-B-dksMZM.js";import{p as ln,a as cn,d as fn,v as un,r as dn,S as po}from"./validator-v8Uu-_mU.js";import{S as pn}from"./github-mark-white-f5oIrgMM.js";import{l as mo}from"./logError-C8va0ge_.js";const mn=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",...t},u.createElement("rect",{width:16,height:12,x:4,y:6,rx:3}),u.createElement("circle",{cx:8,cy:12,r:1}),u.createElement("circle",{cx:16,cy:12,r:1}),u.createElement("path",{d:"M12 4v2"}),u.createElement("circle",{cx:12,cy:3,r:1}),u.createElement("path",{d:"M9 15h6"})),yn=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",...t},u.createElement("circle",{cx:12,cy:8,r:4}),u.createElement("path",{d:"M6 20c0-4 4-6 6-6s6 2 6 6"})),vn="_player-input_d798u_1",gn="_player-input-colour-dot_d798u_13",hn="_bot-status-btn_d798u_20",_n="_player-name-input_d798u_38",ke={playerInput:vn,playerInputColourDot:gn,botStatusBtn:hn,playerNameInput:_n};function bn({colour:t,isBot:e,name:o,onBotStatusChange:n,onNameChange:a}){return q.jsxs("div",{className:ke.playerInput,children:[q.jsx("span",{className:ke.playerInputColourDot,style:{backgroundColor:nn[t]}}),q.jsx("input",{type:"text",placeholder:"Enter player name",className:ke.playerNameInput,value:o,onChange:r=>a(r.target.value.slice(0,rn))}),q.jsx("button",{className:ke.botStatusBtn,"data-tooltip-id":"bot-status-tooltip","data-tooltip-content":e?"Bot":"Human","aria-label":"Toggle Ludo bot on or off",onClick:()=>n(!e),children:e?q.jsx(mn,{}):q.jsx(yn,{})})]})}var me=t=>typeof t=="number"&&!isNaN(t),Pt=t=>typeof t=="string",ht=t=>typeof t=="function",wn=t=>Pt(t)||me(t),Ue=t=>Pt(t)||ht(t)?t:null,xn=(t,e)=>t===!1||me(t)&&t>0?t:e,Ge=t=>u.isValidElement(t)||Pt(t)||ht(t)||me(t);function Tn(t,e,o=300){let{scrollHeight:n,style:a}=t;requestAnimationFrame(()=>{a.minHeight="initial",a.height=n+"px",a.transition=`all ${o}ms`,requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(e,o)})})}function En({enter:t,exit:e,appendPosition:o=!1,collapse:n=!0,collapseDuration:a=300}){return function({children:r,position:s,preventExitTransition:i,done:l,nodeRef:c,isIn:d,playToast:m}){let y=o?`${t}--${s}`:t,f=o?`${e}--${s}`:e,v=u.useRef(0);return u.useLayoutEffect(()=>{let g=c.current,_=y.split(" "),b=p=>{p.target===c.current&&(m(),g.removeEventListener("animationend",b),g.removeEventListener("animationcancel",b),v.current===0&&p.type!=="animationcancel"&&g.classList.remove(..._))};g.classList.add(..._),g.addEventListener("animationend",b),g.addEventListener("animationcancel",b)},[]),u.useEffect(()=>{let g=c.current,_=()=>{g.removeEventListener("animationend",_),n?Tn(g,l,a):l()};d||(i?_():(v.current=1,g.className+=` ${f}`,g.addEventListener("animationend",_)))},[d]),O.createElement(O.Fragment,null,r)}}function yo(t,e){return{content:No(t.content,t.props),containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,reason:t.removalReason,status:e}}function No(t,e,o=!1){return u.isValidElement(t)&&!Pt(t.type)?u.cloneElement(t,{closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:o}):ht(t)?t({closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:o}):t}function Sn({closeToast:t,theme:e,ariaLabel:o="close"}){return O.createElement("button",{className:`Toastify__close-button Toastify__close-button--${e}`,type:"button",onClick:n=>{n.stopPropagation(),t(!0)},"aria-label":o},O.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},O.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function kn({delay:t,isRunning:e,closeToast:o,type:n="default",hide:a,className:r,controlledProgress:s,progress:i,rtl:l,isIn:c,theme:d}){let m=a||s&&i===0,y={animationDuration:`${t}ms`,animationPlayState:e?"running":"paused"};s&&(y.transform=`scaleX(${i})`);let f=It("Toastify__progress-bar",s?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${n}`,{"Toastify__progress-bar--rtl":l}),v=ht(r)?r({rtl:l,type:n,defaultClassName:f}):It(f,r),g={[s&&i>=1?"onTransitionEnd":"onAnimationEnd"]:s&&i<1?null:()=>{c&&o()}};return O.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":m},O.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${d} Toastify__progress-bar--${n}`}),O.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer","aria-valuenow":s?Math.round(i*100):void 0,"aria-valuemin":0,"aria-valuemax":100,className:v,style:y,...g}))}var An=1,Po=()=>`${An++}`;function Cn(t,e,o){let n=1,a=0,r=[],s=[],i=e,l=new Map,c=new Set,d=p=>(c.add(p),()=>c.delete(p)),m=()=>{s=Array.from(l.values()),c.forEach(p=>p())},y=({containerId:p,toastId:h,updateId:x})=>{let L=p?p!==t:t!==1,C=l.has(h)&&x==null;return L||C},f=(p,h)=>{l.forEach(x=>{var L;(h==null||h===x.props.toastId)&&((L=x.toggle)==null||L.call(x,p))})},v=p=>{var h,x;p.isActive&&((x=(h=p.props)==null?void 0:h.onClose)==null||x.call(h,p.removalReason),p.isActive=!1,o(yo(p,"removed")))},g=p=>{if(p==null)l.forEach(v);else{let h=l.get(p);h&&v(h)}m()},_=()=>{a-=r.length,r=[]},b=p=>{var h,x;let{toastId:L,updateId:C}=p.props,T=C==null;p.staleId&&l.delete(p.staleId),p.isActive=!0,l.set(L,p),m(),o(yo(p,T?"added":"updated")),T&&((x=(h=p.props).onOpen)==null||x.call(h))};return{id:t,props:i,observe:d,toggle:f,removeToast:g,toasts:l,clearQueue:_,buildToast:(p,h)=>{if(y(h))return;let{toastId:x,updateId:L,data:C,staleId:T,delay:A}=h,D=L==null;D&&a++;let I={...i,style:i.toastStyle,key:n++,...Object.fromEntries(Object.entries(h).filter(([Q,F])=>F!=null)),toastId:x,updateId:L,data:C,isIn:!1,className:Ue(h.className||i.toastClassName),progressClassName:Ue(h.progressClassName||i.progressClassName),autoClose:h.isLoading?!1:xn(h.autoClose,i.autoClose),closeToast(Q){let F=l.get(x);F&&(F.removalReason=Q,g(x))},deleteToast(){if(l.get(x)!=null){if(l.delete(x),a--,a<0&&(a=0),r.length>0){b(r.shift());return}m()}}};I.closeButton=i.closeButton,h.closeButton===!1||Ge(h.closeButton)?I.closeButton=h.closeButton:h.closeButton===!0&&(I.closeButton=Ge(i.closeButton)?i.closeButton:!0);let H={content:p,props:I,staleId:T};i.limit&&i.limit>0&&a>i.limit&&D?r.push(H):me(A)?setTimeout(()=>{b(H)},A):b(H)},setProps(p){i=p},setToggle:(p,h)=>{let x=l.get(p);x&&(x.toggle=h)},isToastActive:p=>{var h;return(h=l.get(p))==null?void 0:h.isActive},getSnapshot:()=>s}}var et=new Map,ue=[],Qe=new Set,Ln=t=>Qe.forEach(e=>e(t)),Do=()=>et.size>0;function Rn(){ue.forEach(t=>Bo(t.content,t.options)),ue=[]}var On=(t,{containerId:e})=>{var o;return(o=et.get(e||1))==null?void 0:o.toasts.get(t)};function $o(t,e){var o;if(e)return!!((o=et.get(e))!=null&&o.isToastActive(t));let n=!1;return et.forEach(a=>{a.isToastActive(t)&&(n=!0)}),n}function In(t){if(!Do()){ue=ue.filter(e=>t!=null&&e.options.toastId!==t);return}if(t==null||wn(t))et.forEach(e=>{e.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){let e=et.get(t.containerId);e?e.removeToast(t.id):et.forEach(o=>{o.removeToast(t.id)})}}var Nn=(t={})=>{et.forEach(e=>{e.props.limit&&(!t.containerId||e.id===t.containerId)&&e.clearQueue()})};function Bo(t,e){Ge(t)&&(Do()||ue.push({content:t,options:e}),et.forEach(o=>{o.buildToast(t,e)}))}function Pn(t){var e;(e=et.get(t.containerId||1))==null||e.setToggle(t.id,t.fn)}function zo(t,e){et.forEach(o=>{(e==null||!(e!=null&&e.containerId)||e?.containerId===o.id)&&o.toggle(t,e?.id)})}function Dn(t){let e=t.containerId||1;return{subscribe(o){let n=Cn(e,t,Ln);et.set(e,n);let a=n.observe(o);return Rn(),()=>{a(),et.delete(e)}},setProps(o){var n;(n=et.get(e))==null||n.setProps(o)},getSnapshot(){var o;return(o=et.get(e))==null?void 0:o.getSnapshot()}}}function $n(t){return Qe.add(t),()=>{Qe.delete(t)}}function Bn(t){return t&&(Pt(t.toastId)||me(t.toastId))?t.toastId:Po()}function ye(t,e){return Bo(t,e),e.toastId}function Pe(t,e){return{...e,type:e&&e.type||t,toastId:Bn(e)}}function De(t){return(e,o)=>ye(e,Pe(t,o))}function N(t,e){return ye(t,Pe("default",e))}N.loading=(t,e)=>ye(t,Pe("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e}));function zn(t,{pending:e,error:o,success:n},a){let r;e&&(r=Pt(e)?N.loading(e,a):N.loading(e.render,{...a,...e}));let s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},i=(c,d,m)=>{if(d==null){N.dismiss(r);return}let y={type:c,...s,...a,data:m},f=Pt(d)?{render:d}:d;return r?N.update(r,{...y,...f}):N(f.render,{...y,...f}),m},l=ht(t)?t():t;return l.then(c=>i("success",n,c)).catch(c=>i("error",o,c)),l}N.promise=zn;N.success=De("success");N.info=De("info");N.error=De("error");N.warning=De("warning");N.warn=N.warning;N.dark=(t,e)=>ye(t,Pe("default",{theme:"dark",...e}));function Mn(t){In(t)}N.dismiss=Mn;N.clearWaitingQueue=Nn;N.isActive=$o;N.update=(t,e={})=>{let o=On(t,e);if(o){let{props:n,content:a}=o,r={delay:100,...n,...e,toastId:e.toastId||t,updateId:Po()};r.toastId!==t&&(r.staleId=t);let s=r.render||a;delete r.render,ye(s,r)}};N.done=t=>{N.update(t,{progress:1})};N.onChange=$n;N.play=t=>zo(!0,t);N.pause=t=>zo(!1,t);function jn(t){var e;let{subscribe:o,getSnapshot:n,setProps:a}=u.useRef(Dn(t)).current;a(t);let r=(e=u.useSyncExternalStore(o,n,n))==null?void 0:e.slice();function s(i){if(!r)return[];let l=new Map;return t.newestOnTop&&r.reverse(),r.forEach(c=>{let{position:d}=c.props;l.has(d)||l.set(d,[]),l.get(d).push(c)}),Array.from(l,c=>i(c[0],c[1]))}return{getToastToRender:s,isToastActive:$o,count:r?.length}}function Fn(t){let[e,o]=u.useState(!1),[n,a]=u.useState(!1),r=u.useRef(null),s=u.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:i,pauseOnHover:l,closeToast:c,onClick:d,closeOnClick:m}=t;Pn({id:t.toastId,containerId:t.containerId,fn:o}),u.useEffect(()=>{if(t.pauseOnFocusLoss)return y(),()=>{f()}},[t.pauseOnFocusLoss]);function y(){document.hasFocus()||b(),window.addEventListener("focus",_),window.addEventListener("blur",b)}function f(){window.removeEventListener("focus",_),window.removeEventListener("blur",b)}function v(T){if(t.draggable===!0||t.draggable===T.pointerType){p();let A=r.current;s.canCloseOnClick=!0,s.canDrag=!0,A.style.transition="none",t.draggableDirection==="x"?(s.start=T.clientX,s.removalDistance=A.offsetWidth*(t.draggablePercent/100)):(s.start=T.clientY,s.removalDistance=A.offsetHeight*(t.draggablePercent===80?t.draggablePercent*1.5:t.draggablePercent)/100)}}function g(T){let{top:A,bottom:D,left:I,right:H}=r.current.getBoundingClientRect();T.pointerType==="mouse"&&t.pauseOnHover&&T.clientX>=I&&T.clientX<=H&&T.clientY>=A&&T.clientY<=D?b():_()}function _(){o(!0)}function b(){o(!1)}function p(){s.didMove=!1,document.addEventListener("pointermove",x),document.addEventListener("pointerup",L)}function h(){document.removeEventListener("pointermove",x),document.removeEventListener("pointerup",L)}function x(T){let A=r.current;if(s.canDrag&&A){s.didMove=!0,e&&b(),t.draggableDirection==="x"?s.delta=T.clientX-s.start:s.delta=T.clientY-s.start,s.start!==T.clientX&&(s.canCloseOnClick=!1);let D=t.draggableDirection==="x"?`${s.delta}px, var(--y)`:`0, calc(${s.delta}px + var(--y))`;A.style.transform=`translate3d(${D},0)`,A.style.opacity=`${1-Math.abs(s.delta/s.removalDistance)}`}}function L(){h();let T=r.current;if(s.canDrag&&s.didMove&&T){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance){a(!0),t.closeToast(!0),t.collapseAll();return}T.style.transition="transform 0.2s, opacity 0.2s",T.style.removeProperty("transform"),T.style.removeProperty("opacity")}}let C={onPointerDown:v,onPointerUp:g};return i&&l&&(C.onMouseEnter=b,t.stacked||(C.onMouseLeave=_)),m&&(C.onClick=T=>{d&&d(T),s.canCloseOnClick&&c(!0)}),{playToast:_,pauseToast:b,isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:C}}var Mo=typeof window<"u"?u.useLayoutEffect:u.useEffect,$e=({theme:t,type:e,isLoading:o,...n})=>O.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${e})`,...n});function Wn(t){return O.createElement($e,{...t},O.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function qn(t){return O.createElement($e,{...t},O.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function Hn(t){return O.createElement($e,{...t},O.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function Vn(t){return O.createElement($e,{...t},O.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function Xn(){return O.createElement("div",{className:"Toastify__spinner"})}var Je={info:qn,warning:Wn,success:Hn,error:Vn,spinner:Xn},Kn=t=>t in Je;function Yn({theme:t,type:e,isLoading:o,icon:n}){let a=null,r={theme:t,type:e};return n===!1||(ht(n)?a=n({...r,isLoading:o}):u.isValidElement(n)?a=u.cloneElement(n,r):o?a=Je.spinner():Kn(e)&&(a=Je[e](r))),a}var Un=t=>{let{isRunning:e,preventExitTransition:o,toastRef:n,eventHandlers:a,playToast:r}=Fn(t),{closeButton:s,children:i,autoClose:l,onClick:c,type:d,hideProgressBar:m,closeToast:y,transition:f,position:v,className:g,style:_,progressClassName:b,updateId:p,role:h,progress:x,rtl:L,toastId:C,deleteToast:T,isIn:A,isLoading:D,closeOnClick:I,theme:H,ariaLabel:Q}=t,F=It("Toastify__toast",`Toastify__toast-theme--${H}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":I}),M=ht(g)?g({rtl:L,position:v,type:d,defaultClassName:F}):It(F,g),U=Yn(t),K=!!x||!l,X={closeToast:y,type:d,theme:H},$=null;return s===!1||(ht(s)?$=s(X):u.isValidElement(s)?$=u.cloneElement(s,X):$=Sn(X)),O.createElement(f,{isIn:A,done:T,position:v,preventExitTransition:o,nodeRef:n,playToast:r},O.createElement("div",{id:C,tabIndex:0,onClick:c,"data-in":A,className:M,...a,style:_,ref:n,...A&&{role:h,"aria-label":Q}},U!=null&&O.createElement("div",{className:It("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},U),No(i,t,!e),$,!t.customProgressBar&&O.createElement(kn,{...p&&!K?{key:`p-${p}`}:{},rtl:L,theme:H,delay:l,isRunning:e,isIn:A,closeToast:y,hide:m,type:d,className:b,controlledProgress:K,progress:x||0})))},Gn=(t,e=!1)=>({enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}),Qn=En(Gn("bounce",!0)),Jn={position:"top-right",transition:Qn,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:t=>t.altKey&&t.code==="KeyT"};function Zn(t){let e={...Jn,...t},o=t.stacked,[n,a]=u.useState(!0),r=u.useRef(null),{getToastToRender:s,isToastActive:i,count:l}=jn(e),{className:c,style:d,rtl:m,containerId:y,hotKeys:f}=e;function v(_){let b=It("Toastify__toast-container",`Toastify__toast-container--${_}`,{"Toastify__toast-container--rtl":m});return ht(c)?c({position:_,rtl:m,defaultClassName:b}):It(b,Ue(c))}function g(){o&&(a(!0),N.play())}return Mo(()=>{var _;if(o){let b=r.current.querySelectorAll('[data-in="true"]'),p=12,h=(_=e.position)==null?void 0:_.includes("top"),x=0,L=0;Array.from(b).reverse().forEach((C,T)=>{let A=C;A.classList.add("Toastify__toast--stacked"),T>0&&(A.dataset.collapsed=`${n}`),A.dataset.pos||(A.dataset.pos=h?"top":"bot");let D=x*(n?.2:1)+(n?0:p*T),I=Math.max(.5,1-(n?L:0));A.style.setProperty("--y",`${h?D:D*-1}px`),A.style.setProperty("--g",`${p}`),A.style.setProperty("--s",`${I}`),x+=A.offsetHeight,L+=.025})}},[n,l,o]),u.useEffect(()=>{function _(b){var p;let h=r.current;f(b)&&((p=h?.querySelector('[tabIndex="0"]'))==null||p.focus(),a(!1),N.pause()),b.key==="Escape"&&(document.activeElement===h||h!=null&&h.contains(document.activeElement))&&(a(!0),N.play())}return document.addEventListener("keydown",_),()=>{document.removeEventListener("keydown",_)}},[f]),O.createElement("section",{ref:r,className:"Toastify",id:y,onMouseEnter:()=>{o&&(a(!1),N.pause())},onMouseLeave:g,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":e["aria-label"]},s((_,b)=>{let p=b.length?{...d}:{...d,pointerEvents:"none"};return O.createElement("div",{tabIndex:-1,className:v(_),"data-stacked":o,style:p,key:`c-${_}`},b.map(({content:h,props:x})=>O.createElement(Un,{...x,stacked:o,collapseAll:g,isIn:i(x.toastId,x.containerId),key:`t-${x.key}`},h)))}))}var tr=`:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: hsl(6, 78%, 57%);
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-container-width: fit-content;
  --toastify-toast-width: 320px;
  --toastify-toast-offset: 16px;
  --toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));
  --toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));
  --toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));
  --toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));
  --toastify-toast-background: #fff;
  --toastify-toast-padding: 14px;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-toast-bd-radius: 6px;
  --toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  /* Used only for colored theme */
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  --toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
  /* used to control the opacity of the progress trail */
  --toastify-color-progress-bgo: 0.2;
}

.Toastify__toast-container {
  z-index: var(--toastify-z-index);
  -webkit-transform: translate3d(0, 0, var(--toastify-z-index));
  position: fixed;
  width: var(--toastify-container-width);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.Toastify__toast-container--top-left {
  top: var(--toastify-toast-top);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--top-center {
  top: var(--toastify-toast-top);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--top-right {
  top: var(--toastify-toast-top);
  right: var(--toastify-toast-right);
  align-items: end;
}
.Toastify__toast-container--bottom-left {
  bottom: var(--toastify-toast-bottom);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--bottom-center {
  bottom: var(--toastify-toast-bottom);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--bottom-right {
  bottom: var(--toastify-toast-bottom);
  right: var(--toastify-toast-right);
  align-items: end;
}

.Toastify__toast {
  --y: 0px;
  position: relative;
  touch-action: none;
  width: var(--toastify-toast-width);
  min-height: var(--toastify-toast-min-height);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: var(--toastify-toast-padding);
  border-radius: var(--toastify-toast-bd-radius);
  box-shadow: var(--toastify-toast-shadow);
  max-height: var(--toastify-toast-max-height);
  font-family: var(--toastify-font-family);
  /* webkit only issue #791 */
  z-index: 0;
  /* inner swag */
  display: flex;
  flex: 1 auto;
  align-items: center;
  word-break: break-word;
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container {
    width: 100vw;
    left: env(safe-area-inset-left);
    margin: 0;
  }
  .Toastify__toast-container--top-left,
  .Toastify__toast-container--top-center,
  .Toastify__toast-container--top-right {
    top: env(safe-area-inset-top);
    transform: translateX(0);
  }
  .Toastify__toast-container--bottom-left,
  .Toastify__toast-container--bottom-center,
  .Toastify__toast-container--bottom-right {
    bottom: env(safe-area-inset-bottom);
    transform: translateX(0);
  }
  .Toastify__toast-container--rtl {
    right: env(safe-area-inset-right);
    left: initial;
  }
  .Toastify__toast {
    --toastify-toast-width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
}

.Toastify__toast-container[data-stacked='true'] {
  width: var(--toastify-toast-width);
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container[data-stacked='true'] {
    width: 100vw;
  }
}

.Toastify__toast--stacked {
  position: absolute;
  width: 100%;
  transform: translate3d(0, var(--y), 0) scale(var(--s));
  transition: transform 0.3s;
}

.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,
.Toastify__toast--stacked[data-collapsed] .Toastify__close-button {
  transition: opacity 0.1s;
}

.Toastify__toast--stacked[data-collapsed='false'] {
  overflow: visible;
}

.Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
  opacity: 0;
}

.Toastify__toast--stacked:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: calc(var(--g) * 1px);
  bottom: 100%;
}

.Toastify__toast--stacked[data-pos='top'] {
  top: 0;
}

.Toastify__toast--stacked[data-pos='bot'] {
  bottom: 0;
}

.Toastify__toast--stacked[data-pos='bot'].Toastify__toast--stacked:before {
  transform-origin: top;
}

.Toastify__toast--stacked[data-pos='top'].Toastify__toast--stacked:before {
  transform-origin: bottom;
}

.Toastify__toast--stacked:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  transform: scaleY(3);
  z-index: -1;
}

.Toastify__toast--rtl {
  direction: rtl;
}

.Toastify__toast--close-on-click {
  cursor: pointer;
}

.Toastify__toast-icon {
  margin-inline-end: 10px;
  width: 22px;
  flex-shrink: 0;
  display: flex;
}

.Toastify--animate {
  animation-fill-mode: both;
  animation-duration: 0.5s;
}

.Toastify--animate-icon {
  animation-fill-mode: both;
  animation-duration: 0.3s;
}

.Toastify__toast-theme--dark {
  background: var(--toastify-color-dark);
  color: var(--toastify-text-color-dark);
}

.Toastify__toast-theme--light {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--default {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--info {
  color: var(--toastify-text-color-info);
  background: var(--toastify-color-info);
}

.Toastify__toast-theme--colored.Toastify__toast--success {
  color: var(--toastify-text-color-success);
  background: var(--toastify-color-success);
}

.Toastify__toast-theme--colored.Toastify__toast--warning {
  color: var(--toastify-text-color-warning);
  background: var(--toastify-color-warning);
}

.Toastify__toast-theme--colored.Toastify__toast--error {
  color: var(--toastify-text-color-error);
  background: var(--toastify-color-error);
}

.Toastify__progress-bar-theme--light {
  background: var(--toastify-color-progress-light);
}

.Toastify__progress-bar-theme--dark {
  background: var(--toastify-color-progress-dark);
}

.Toastify__progress-bar--info {
  background: var(--toastify-color-progress-info);
}

.Toastify__progress-bar--success {
  background: var(--toastify-color-progress-success);
}

.Toastify__progress-bar--warning {
  background: var(--toastify-color-progress-warning);
}

.Toastify__progress-bar--error {
  background: var(--toastify-color-progress-error);
}

.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
  background: var(--toastify-color-transparent);
}

.Toastify__close-button {
  color: #fff;
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  z-index: 1;
}

.Toastify__toast--rtl .Toastify__close-button {
  left: 6px;
  right: unset;
}

.Toastify__close-button--light {
  color: #000;
  opacity: 0.3;
}

.Toastify__close-button > svg {
  fill: currentColor;
  height: 16px;
  width: 14px;
}

.Toastify__close-button:hover,
.Toastify__close-button:focus {
  opacity: 1;
}

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
  transform-origin: left;
}

.Toastify__progress-bar--animated {
  animation: Toastify__trackProgress linear 1 forwards;
}

.Toastify__progress-bar--controlled {
  transition: transform 0.2s;
}

.Toastify__progress-bar--rtl {
  right: 0;
  left: initial;
  transform-origin: right;
  border-bottom-left-radius: initial;
}

.Toastify__progress-bar--wrp {
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: var(--toastify-toast-bd-radius);
  border-bottom-right-radius: var(--toastify-toast-bd-radius);
}

.Toastify__progress-bar--wrp[data-hidden='true'] {
  opacity: 0;
}

.Toastify__progress-bar--bg {
  opacity: var(--toastify-color-progress-bgo);
  width: 100%;
  height: 100%;
}

.Toastify__spinner {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: var(--toastify-spinner-color-empty-area);
  border-right-color: var(--toastify-spinner-color);
  animation: Toastify__spin 0.65s linear infinite;
}

@keyframes Toastify__bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes Toastify__bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.Toastify__bounce-enter--top-left,
.Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft;
}

.Toastify__bounce-enter--top-right,
.Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight;
}

.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown;
}

.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp;
}

.Toastify__bounce-exit--top-left,
.Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft;
}

.Toastify__bounce-exit--top-right,
.Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight;
}

.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp;
}

.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown;
}

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes Toastify__zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translate3d(0, var(--y), 0) scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}

.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn;
}

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut;
}

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

@keyframes Toastify__flipOut {
  from {
    transform: translate3d(0, var(--y), 0) perspective(400px);
  }
  30% {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.Toastify__flip-enter {
  animation-name: Toastify__flipIn;
}

.Toastify__flip-exit {
  animation-name: Toastify__flipOut;
}

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0);
  }
}

@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0);
  }
}

.Toastify__slide-enter--top-left,
.Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft;
}

.Toastify__slide-enter--top-right,
.Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}

.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown;
}

.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp;
}

.Toastify__slide-exit--top-left,
.Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-right,
.Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes Toastify__spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,vo=new Map,er=(t,e)=>{Mo(()=>{if(typeof document>"u")return;let o=document,n=vo.get(o);if(n){e&&n.setAttribute("nonce",e);return}let a=o.createElement("style");a.textContent=t,e&&a.setAttribute("nonce",e),o.head.appendChild(a),vo.set(o,a)},[e])};function or(t){return er(tr,t.nonce),O.createElement(Zn,{...t})}const nr=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#fff",viewBox:"0 0 24 24",...t},u.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})),rr="_player-setup_1q1ff_1",ar="_player-setup-dialog_1q1ff_10",sr="_player-count-selector_1q1ff_32",ir="_player-count_1q1ff_32",lr="_player-inputs_1q1ff_73",cr="_play-btn_1q1ff_83",fr="_version_1q1ff_120",ur="_go-to-home_1q1ff_129",dr="_load-game_1q1ff_160",pr="_gh-follow-btn_1q1ff_180",dt={playerSetup:rr,playerSetupDialog:ar,playerCountSelector:sr,playerCount:ir,playerInputs:lr,playBtn:cr,version:fr,goToHome:ur,loadGame:dr,ghFollowBtn:pr},Qt=Math.min,Nt=Math.max,Oe=Math.round,Ae=Math.floor,gt=t=>({x:t,y:t}),mr={left:"right",right:"left",bottom:"top",top:"bottom"};function jo(t,e,o){return Nt(t,Qt(e,o))}function ve(t,e){return typeof t=="function"?t(e):t}function Jt(t){return t.split("-")[0]}function ge(t){return t.split("-")[1]}function Fo(t){return t==="x"?"y":"x"}function oo(t){return t==="y"?"height":"width"}function xt(t){const e=t[0];return e==="t"||e==="b"?"y":"x"}function no(t){return Fo(xt(t))}function yr(t,e,o){o===void 0&&(o=!1);const n=ge(t),a=no(t),r=oo(a);let s=a==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=Ie(s)),[s,Ie(s)]}function vr(t){const e=Ie(t);return[Ze(t),e,Ze(e)]}function Ze(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}const go=["left","right"],ho=["right","left"],gr=["top","bottom"],hr=["bottom","top"];function _r(t,e,o){switch(t){case"top":case"bottom":return o?e?ho:go:e?go:ho;case"left":case"right":return e?gr:hr;default:return[]}}function br(t,e,o,n){const a=ge(t);let r=_r(Jt(t),o==="start",n);return a&&(r=r.map(s=>s+"-"+a),e&&(r=r.concat(r.map(Ze)))),r}function Ie(t){const e=Jt(t);return mr[e]+t.slice(e.length)}function wr(t){var e,o,n,a;return{top:(e=t.top)!=null?e:0,right:(o=t.right)!=null?o:0,bottom:(n=t.bottom)!=null?n:0,left:(a=t.left)!=null?a:0}}function Wo(t){return typeof t!="number"?wr(t):{top:t,right:t,bottom:t,left:t}}function Ne(t){const{x:e,y:o,width:n,height:a}=t;return{width:n,height:a,top:o,left:e,right:e+n,bottom:o+a,x:e,y:o}}function _o(t,e,o){let{reference:n,floating:a}=t;const r=xt(e),s=no(e),i=oo(s),l=Jt(e),c=r==="y",d=n.x+n.width/2-a.width/2,m=n.y+n.height/2-a.height/2,y=n[i]/2-a[i]/2;let f;switch(l){case"top":f={x:d,y:n.y-a.height};break;case"bottom":f={x:d,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:m};break;case"left":f={x:n.x-a.width,y:m};break;default:f={x:n.x,y:n.y}}const v=ge(e);return v&&(f[s]+=y*(v==="end"?1:-1)*(o&&c?-1:1)),f}async function xr(t,e){var o;e===void 0&&(e={});const{x:n,y:a,platform:r,rects:s,elements:i,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:m="floating",altBoundary:y=!1,padding:f=0}=ve(e,t),v=Wo(f),_=i[y?m==="floating"?"reference":"floating":m],b=Ne(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(_)))==null||o?_:_.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(i.floating)),boundary:c,rootBoundary:d,strategy:l})),p=m==="floating"?{x:n,y:a,width:s.floating.width,height:s.floating.height}:s.reference,h=await(r.getOffsetParent==null?void 0:r.getOffsetParent(i.floating)),x=await(r.isElement==null?void 0:r.isElement(h))&&await(r.getScale==null?void 0:r.getScale(h))||{x:1,y:1},L=Ne(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:i,rect:p,offsetParent:h,strategy:l}):p);return{top:(b.top-L.top+v.top)/x.y,bottom:(L.bottom-b.bottom+v.bottom)/x.y,left:(b.left-L.left+v.left)/x.x,right:(L.right-b.right+v.right)/x.x}}const Tr=50,Er=async(t,e,o)=>{const{placement:n="bottom",strategy:a="absolute",middleware:r=[],platform:s}=o,i=s.detectOverflow?s:{...s,detectOverflow:xr},l=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:a}),{x:d,y:m}=_o(c,n,l),y=n,f=0;const v={};for(let g=0;g<r.length;g++){const _=r[g];if(!_)continue;const{name:b,fn:p}=_,{x:h,y:x,data:L,reset:C}=await p({x:d,y:m,initialPlacement:n,placement:y,strategy:a,middlewareData:v,rects:c,platform:i,elements:{reference:t,floating:e}});d=h??d,m=x??m,v[b]={...v[b],...L},C&&f<Tr&&(f++,typeof C=="object"&&(C.placement&&(y=C.placement),C.rects&&(c=C.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:a}):C.rects),{x:d,y:m}=_o(c,y,l)),g=-1)}return{x:d,y:m,placement:y,strategy:a,middlewareData:v}},Sr=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:a,rects:r,platform:s,elements:i,middlewareData:l}=e,{element:c,padding:d=0}=ve(t,e)||{};if(c==null)return{};const m=Wo(d),y={x:o,y:n},f=no(a),v=oo(f),g=await s.getDimensions(c),_=f==="y",b=_?"top":"left",p=_?"bottom":"right",h=_?"clientHeight":"clientWidth",x=r.reference[v]+r.reference[f]-y[f]-r.floating[v],L=y[f]-r.reference[f],C=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let T=C?C[h]:0;(!T||!await(s.isElement==null?void 0:s.isElement(C)))&&(T=i.floating[h]||r.floating[v]);const A=x/2-L/2,D=T/2-g[v]/2-1,I=Qt(m[b],D),H=Qt(m[p],D),Q=T-g[v]-H,F=T/2-g[v]/2+A,M=jo(I,F,Q),U=!l.arrow&&ge(a)!=null&&F!==M&&r.reference[v]/2-(F<I?I:H)-g[v]/2<0,K=U?F<I?F-I:F-Q:0;return{[f]:y[f]+K,data:{[f]:M,centerOffset:F-M-K,...U&&{alignmentOffset:K}},reset:U}}}),kr=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:a,middlewareData:r,rects:s,initialPlacement:i,platform:l,elements:c}=e,{mainAxis:d=!0,crossAxis:m=!0,fallbackPlacements:y,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:g=!0,..._}=ve(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const b=Jt(a),p=xt(i),h=Jt(i)===i,x=await(l.isRTL==null?void 0:l.isRTL(c.floating)),L=y||(h||!g?[Ie(i)]:vr(i)),C=v!=="none";!y&&C&&L.push(...br(i,g,v,x));const T=[i,...L],A=await l.detectOverflow(e,_),D=[];let I=((n=r.flip)==null?void 0:n.overflows)||[];if(d&&D.push(A[b]),m){const M=yr(a,s,x);D.push(A[M[0]],A[M[1]])}if(I=[...I,{placement:a,overflows:D}],!D.every(M=>M<=0)){var H,Q;const M=(((H=r.flip)==null?void 0:H.index)||0)+1,U=T[M];if(U&&(!(m==="alignment"?p!==xt(U):!1)||I.every($=>xt($.placement)===p?$.overflows[0]>0:!0)))return{data:{index:M,overflows:I},reset:{placement:U}};let K=(Q=I.filter(X=>X.overflows[0]<=0).sort((X,$)=>X.overflows[1]-$.overflows[1])[0])==null?void 0:Q.placement;if(!K)switch(f){case"bestFit":{var F;const X=(F=I.filter($=>{if(C){const J=xt($.placement);return J===p||J==="y"}return!0}).map($=>[$.placement,$.overflows.filter(J=>J>0).reduce((J,yt)=>J+yt,0)]).sort(($,J)=>$[1]-J[1])[0])==null?void 0:F[0];X&&(K=X);break}case"initialPlacement":K=i;break}if(a!==K)return{reset:{placement:K}}}return{}}}},Ar=new Set(["left","top"]);async function Cr(t,e){const{placement:o,platform:n,elements:a}=t,r=await(n.isRTL==null?void 0:n.isRTL(a.floating)),s=Jt(o),i=ge(o),l=xt(o)==="y",c=Ar.has(s)?-1:1,d=r&&l?-1:1,m=ve(e,t);let{mainAxis:y,crossAxis:f,alignmentAxis:v}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return i&&typeof v=="number"&&(f=i==="end"?v*-1:v),l?{x:f*d,y:y*c}:{x:y*c,y:f*d}}const Lr=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;const{x:a,y:r,placement:s,middlewareData:i}=e,l=await Cr(e,t);return s===((o=i.offset)==null?void 0:o.placement)&&(n=i.arrow)!=null&&n.alignmentOffset?{}:{x:a+l.x,y:r+l.y,data:{...l,placement:s}}}}},Rr=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:a,platform:r}=e,{mainAxis:s=!0,crossAxis:i=!1,limiter:l={fn:p=>{let{x:h,y:x}=p;return{x:h,y:x}}},...c}=ve(t,e),d={x:o,y:n},m=await r.detectOverflow(e,c),y=xt(a),f=Fo(y);let v=d[f],g=d[y];const _=(p,h)=>jo(h+m[p==="y"?"top":"left"],h,h-m[p==="y"?"bottom":"right"]);s&&(v=_(f,v)),i&&(g=_(y,g));const b=l.fn({...e,[f]:v,[y]:g});return{...b,data:{x:b.x-o,y:b.y-n,enabled:{[f]:s,[y]:i}}}}}};function Be(){return typeof window<"u"}function Zt(t){return qo(t)?(t.nodeName||"").toLowerCase():"#document"}function at(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function _t(t){var e;return(e=(qo(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function qo(t){return Be()?t instanceof Node||t instanceof at(t).Node:!1}function pt(t){return Be()?t instanceof Element||t instanceof at(t).Element:!1}function Tt(t){return Be()?t instanceof HTMLElement||t instanceof at(t).HTMLElement:!1}function bo(t){return!Be()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof at(t).ShadowRoot}function ze(t){const{overflow:e,overflowX:o,overflowY:n,display:a}=mt(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&a!=="inline"&&a!=="contents"}function Or(t){return/^(table|td|th)$/.test(Zt(t))}function Me(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}const Ir=/transform|translate|scale|rotate|perspective|filter/,Nr=/paint|layout|strict|content/,Rt=t=>!!t&&t!=="none";let Xe;function ro(t){const e=pt(t)?mt(t):t;return Rt(e.transform)||Rt(e.translate)||Rt(e.scale)||Rt(e.rotate)||Rt(e.perspective)||!ao()&&(Rt(e.backdropFilter)||Rt(e.filter))||Ir.test(e.willChange||"")||Nr.test(e.contain||"")}function Pr(t){let e=Dt(t);for(;Tt(e)&&!de(e);){if(ro(e))return e;if(Me(e))return null;e=Dt(e)}return null}function ao(){return Xe==null&&(Xe=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Xe}function de(t){return/^(html|body|#document)$/.test(Zt(t))}function mt(t){return at(t).getComputedStyle(t)}function je(t){return pt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Dt(t){if(Zt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||bo(t)&&t.host||_t(t);return bo(e)?e.host:e}function Ho(t){const e=Dt(t);return de(e)?(t.ownerDocument||t).body:Tt(e)&&ze(e)?e:Ho(e)}function pe(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const a=Ho(t),r=a===((n=t.ownerDocument)==null?void 0:n.body),s=at(a);if(r){const i=to(s);return e.concat(s,s.visualViewport||[],ze(a)?a:[],i&&o?pe(i):[])}else return e.concat(a,pe(a,[],o))}function to(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Vo(t){const e=mt(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const a=Tt(t),r=a?t.offsetWidth:o,s=a?t.offsetHeight:n,i=Oe(o)!==r||Oe(n)!==s;return i&&(o=r,n=s),{width:o,height:n,$:i}}function so(t){return pt(t)?t:t.contextElement}function Gt(t){const e=so(t);if(!Tt(e))return gt(1);const o=e.getBoundingClientRect(),{width:n,height:a,$:r}=Vo(e);let s=(r?Oe(o.width):o.width)/n,i=(r?Oe(o.height):o.height)/a;return(!s||!Number.isFinite(s))&&(s=1),(!i||!Number.isFinite(i))&&(i=1),{x:s,y:i}}const Dr=gt(0);function Xo(t){const e=at(t);return!ao()||!e.visualViewport?Dr:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function $r(t,e,o){return e===void 0&&(e=!1),!!o&&e&&o===at(t)}function $t(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const a=t.getBoundingClientRect(),r=so(t);let s=gt(1);e&&(n?pt(n)&&(s=Gt(n)):s=Gt(t));const i=$r(r,o,n)?Xo(r):gt(0);let l=(a.left+i.x)/s.x,c=(a.top+i.y)/s.y,d=a.width/s.x,m=a.height/s.y;if(r&&n){const y=at(r),f=pt(n)?at(n):n;let v=y,g=to(v);for(;g&&f!==v;){const _=Gt(g),b=g.getBoundingClientRect(),p=mt(g),h=b.left+(g.clientLeft+parseFloat(p.paddingLeft))*_.x,x=b.top+(g.clientTop+parseFloat(p.paddingTop))*_.y;l*=_.x,c*=_.y,d*=_.x,m*=_.y,l+=h,c+=x,v=at(g),g=to(v)}}return Ne({width:d,height:m,x:l,y:c})}function Fe(t,e){const o=je(t).scrollLeft;return e?e.left+o:$t(_t(t)).left+o}function Ko(t,e){const o=t.getBoundingClientRect(),n=o.left+e.scrollLeft-Fe(t,o),a=o.top+e.scrollTop;return{x:n,y:a}}function Br(t){let{elements:e,rect:o,offsetParent:n,strategy:a}=t;const r=a==="fixed",s=_t(n),i=e?Me(e.floating):!1;if(n===s||i&&r)return o;let l={scrollLeft:0,scrollTop:0},c=gt(1);const d=gt(0),m=Tt(n);if((m||!r)&&((Zt(n)!=="body"||ze(s))&&(l=je(n)),m)){const f=$t(n);c=Gt(n),d.x=f.x+n.clientLeft,d.y=f.y+n.clientTop}const y=s&&!m&&!r?Ko(s,l):gt(0);return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-l.scrollLeft*c.x+d.x+y.x,y:o.y*c.y-l.scrollTop*c.y+d.y+y.y}}function zr(t){return t.getClientRects?Array.from(t.getClientRects()):[]}function Mr(t){const e=je(t),o=t.ownerDocument.body,n=Nt(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),a=Nt(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let r=-e.scrollLeft+Fe(t);const s=-e.scrollTop;return mt(o).direction==="rtl"&&(r+=Nt(t.clientWidth,o.clientWidth)-n),{width:n,height:a,x:r,y:s}}const jr=25;function Fr(t,e,o){o===void 0&&(o="viewport");const n=o==="layoutViewport",a=at(t),r=_t(t),s=a.visualViewport;let i=r.clientWidth,l=r.clientHeight,c=0,d=0;if(s){const y=!ao()||e==="fixed";n?y||(c=-s.offsetLeft,d=-s.offsetTop):(i=s.width,l=s.height,y&&(c=s.offsetLeft,d=s.offsetTop))}if(Fe(r)<=0){const y=r.ownerDocument,f=y.body,v=getComputedStyle(f),g=y.compatMode==="CSS1Compat"&&parseFloat(v.marginLeft)+parseFloat(v.marginRight)||0,_=Math.abs(r.clientWidth-f.clientWidth-g),b=getComputedStyle(r).scrollbarGutter==="stable both-edges"?_/2:_;b<=jr&&(i-=b)}return{width:i,height:l,x:c,y:d}}function Wr(t,e){const o=$t(t,!0,e==="fixed"),n=o.top+t.clientTop,a=o.left+t.clientLeft,r=Gt(t),s=t.clientWidth*r.x,i=t.clientHeight*r.y,l=a*r.x,c=n*r.y;return{width:s,height:i,x:l,y:c}}function wo(t,e,o){let n;if(e==="viewport"||e==="layoutViewport")n=Fr(t,o,e);else if(e==="document")n=Mr(_t(t));else if(pt(e))n=Wr(e,o);else{const a=Xo(t);n={x:e.x-a.x,y:e.y-a.y,width:e.width,height:e.height}}return Ne(n)}function qr(t,e){const o=e.get(t);if(o)return o;let n=pe(t,[],!1).filter(i=>pt(i)&&Zt(i)!=="body"),a=null;const r=mt(t).position==="fixed";let s=r?Dt(t):t;for(;pt(s)&&!de(s);){const i=mt(s),l=ro(s),c=a?a.position:r?"fixed":"";!l&&(c==="fixed"||c==="absolute"&&i.position==="static")?n=n.filter(m=>m!==s):a=i,s=Dt(s)}return e.set(t,n),n}function Hr(t){let{element:e,boundary:o,rootBoundary:n,strategy:a}=t;const s=[...o==="clippingAncestors"?Me(e)?[]:qr(e,this._c):[].concat(o),n],i=wo(e,s[0],a);let l=i.top,c=i.right,d=i.bottom,m=i.left;for(let y=1;y<s.length;y++){const f=wo(e,s[y],a);l=Nt(f.top,l),c=Qt(f.right,c),d=Qt(f.bottom,d),m=Nt(f.left,m)}return{width:c-m,height:d-l,x:m,y:l}}function Vr(t){const{width:e,height:o}=Vo(t);return{width:e,height:o}}function Xr(t,e,o){const n=Tt(e),a=_t(e),r=o==="fixed",s=$t(t,!0,r,e);let i={scrollLeft:0,scrollTop:0};const l=gt(0);if((n||!r)&&((Zt(e)!=="body"||ze(a))&&(i=je(e)),n)){const y=$t(e,!0,r,e);l.x=y.x+e.clientLeft,l.y=y.y+e.clientTop}!n&&a&&(l.x=Fe(a));const c=a&&!n&&!r?Ko(a,i):gt(0),d=s.left+i.scrollLeft-l.x-c.x,m=s.top+i.scrollTop-l.y-c.y;return{x:d,y:m,width:s.width,height:s.height}}function Ke(t){return mt(t).position==="static"}function xo(t,e){if(!Tt(t)||mt(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return _t(t)===o&&(o=o.ownerDocument.body),o}function Yo(t,e){const o=at(t);if(Me(t))return o;if(!Tt(t)){let a=Dt(t);for(;a&&!de(a);){if(pt(a)&&!Ke(a))return a;a=Dt(a)}return o}let n=xo(t,e);for(;n&&Or(n)&&Ke(n);)n=xo(n,e);return n&&de(n)&&Ke(n)&&!ro(n)?o:n||Pr(t)||o}const Kr=async function(t){const e=this.getOffsetParent||Yo,o=this.getDimensions,n=await o(t.floating);return{reference:Xr(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Yr(t){return mt(t).direction==="rtl"}const Ur={convertOffsetParentRelativeRectToViewportRelativeRect:Br,getDocumentElement:_t,getClippingRect:Hr,getOffsetParent:Yo,getElementRects:Kr,getClientRects:zr,getDimensions:Vr,getScale:Gt,isElement:pt,isRTL:Yr};function Uo(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Gr(t,e,o){let n=null,a;const r=_t(t);function s(){var d;clearTimeout(a),(d=n)==null||d.disconnect(),n=null}function i(d,m){d===void 0&&(d=!1),m===void 0&&(m=1),s();const y=t.getBoundingClientRect(),{left:f,top:v,width:g,height:_}=y;if(d||e(),!g||!_)return;const b=Ae(v),p=Ae(r.clientWidth-(f+g)),h=Ae(r.clientHeight-(v+_)),x=Ae(f),C={rootMargin:-b+"px "+-p+"px "+-h+"px "+-x+"px",threshold:Nt(0,Qt(1,m))||1};let T=!0;function A(D){const I=D[0].intersectionRatio;if(!Uo(y,t.getBoundingClientRect()))return i();if(I!==m){if(!T)return i();I?i(!1,I):a=setTimeout(()=>{i(!1,1e-7)},1e3)}T=!1}try{n=new IntersectionObserver(A,{...C,root:r.ownerDocument})}catch{n=new IntersectionObserver(A,C)}n.observe(t)}const l=at(t),c=()=>i(o);return l.addEventListener("resize",c),i(!0),()=>{l.removeEventListener("resize",c),s()}}function Qr(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:a=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:i=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,c=so(t),d=a||r?[...c?pe(c):[],...e?pe(e):[]]:[];d.forEach(b=>{a&&b.addEventListener("scroll",o),r&&b.addEventListener("resize",o)});const m=c&&i?Gr(c,o,r):null;let y=-1,f=null;s&&(f=new ResizeObserver(b=>{let[p]=b;p&&p.target===c&&f&&e&&(f.unobserve(e),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var h;(h=f)==null||h.observe(e)})),o()}),c&&!l&&f.observe(c),e&&f.observe(e));let v,g=l?$t(t):null;l&&_();function _(){const b=$t(t);g&&!Uo(g,b)&&o(),g=b,v=requestAnimationFrame(_)}return o(),()=>{var b;d.forEach(p=>{a&&p.removeEventListener("scroll",o),r&&p.removeEventListener("resize",o)}),m?.(),(b=f)==null||b.disconnect(),f=null,l&&cancelAnimationFrame(v)}}const Jr=Lr,Zr=Rr,ta=kr,ea=Sr,To=(t,e,o)=>{const n=new Map,a=o??{},r={...Ur,...a.platform,_c:n};return Er(t,e,{...a,platform:r})};var Ye={exports:{}};var Eo;function oa(){return Eo||(Eo=1,(function(t){(function(){var e={}.hasOwnProperty;function o(){for(var r="",s=0;s<arguments.length;s++){var i=arguments[s];i&&(r=a(r,n(i)))}return r}function n(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return o.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var s="";for(var i in r)e.call(r,i)&&r[i]&&(s=a(s,i));return s}function a(r,s){return s?r?r+" "+s:r+s:r}t.exports?(o.default=o,t.exports=o):window.classNames=o})()})(Ye)),Ye.exports}var na=oa();const Re=tn(na);var So={};const ra="react-tooltip-core-styles",aa="react-tooltip-base-styles",ko={core:!1,base:!1};function Ao({css:t,id:e=aa,type:o="base",ref:n}){var a,r;if(!t||typeof document>"u"||ko[o]||o==="core"&&typeof process<"u"&&(!((a=process==null?void 0:So)===null||a===void 0)&&a.REACT_TOOLTIP_DISABLE_CORE_STYLES)||o!=="base"&&typeof process<"u"&&(!((r=process==null?void 0:So)===null||r===void 0)&&r.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;o==="core"&&(e=ra),n||(n={});const{insertAt:s}=n;if(document.getElementById(e))return;const i=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.id=e,l.type="text/css",s==="top"&&i.firstChild?i.insertBefore(l,i.firstChild):i.appendChild(l),l.styleSheet?l.styleSheet.cssText=t:l.appendChild(document.createTextNode(t)),ko[o]=!0}const Co=async({elementReference:t=null,tooltipReference:e=null,tooltipArrowReference:o=null,place:n="top",offset:a=10,strategy:r="absolute",middlewares:s=[Jr(Number(a)),ta({fallbackAxisSideDirection:"start"}),Zr({padding:5})],border:i,arrowSize:l=8})=>{if(!t)return{tooltipStyles:{},tooltipArrowStyles:{},place:n};if(e===null)return{tooltipStyles:{},tooltipArrowStyles:{},place:n};const c=s;return o?(c.push(ea({element:o,padding:5})),To(t,e,{placement:n,strategy:r,middleware:c}).then((({x:d,y:m,placement:y,middlewareData:f})=>{var v,g;const _={left:`${d}px`,top:`${m}px`,border:i},{x:b,y:p}=(v=f.arrow)!==null&&v!==void 0?v:{x:0,y:0},h=(g={top:"bottom",right:"left",bottom:"top",left:"right"}[y.split("-")[0]])!==null&&g!==void 0?g:"bottom",x=i&&{borderBottom:i,borderRight:i};let L=0;if(i){const C=`${i}`.match(/(\d+)px/);L=C?.[1]?Number(C[1]):1}return{tooltipStyles:_,tooltipArrowStyles:{left:b!=null?`${b}px`:"",top:p!=null?`${p}px`:"",right:"",bottom:"",...x,[h]:`-${l/2+L-1}px`},place:y}}))):To(t,e,{placement:"bottom",strategy:r,middleware:c}).then((({x:d,y:m,placement:y})=>({tooltipStyles:{left:`${d}px`,top:`${m}px`},tooltipArrowStyles:{},place:y})))},Lo=(t,e)=>!("CSS"in window&&"supports"in window.CSS)||window.CSS.supports(t,e),Ro=(t,e,o)=>{let n=null;const a=function(...r){const s=()=>{n=null};!n&&(t.apply(this,r),n=setTimeout(s,e))};return a.cancel=()=>{n&&(clearTimeout(n),n=null)},a},Oo=t=>t!==null&&!Array.isArray(t)&&typeof t=="object",eo=(t,e)=>{if(t===e)return!0;if(Array.isArray(t)&&Array.isArray(e))return t.length===e.length&&t.every(((a,r)=>eo(a,e[r])));if(Array.isArray(t)!==Array.isArray(e))return!1;if(!Oo(t)||!Oo(e))return t===e;const o=Object.keys(t),n=Object.keys(e);return o.length===n.length&&o.every((a=>eo(t[a],e[a])))},sa=t=>{if(!(t instanceof HTMLElement||t instanceof SVGElement))return!1;const e=getComputedStyle(t);return["overflow","overflow-x","overflow-y"].some((o=>{const n=e.getPropertyValue(o);return n==="auto"||n==="scroll"}))},Io=t=>{if(!t)return null;let e=t.parentElement;for(;e;){if(sa(e))return e;e=e.parentElement}return document.scrollingElement||document.documentElement},ia=typeof window<"u"?u.useLayoutEffect:u.useEffect,lt=t=>{t.current&&(clearTimeout(t.current),t.current=null)},la="DEFAULT_TOOLTIP_ID",ca={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},fa=u.createContext({getTooltipData:()=>ca});function Go(t=la){return u.useContext(fa).getTooltipData(t)}var Ot={tooltip:"core-styles-module_tooltip__3vRRp",fixed:"core-styles-module_fixed__pcSol",arrow:"core-styles-module_arrow__cvMwQ",content:"core-styles-module_content__BRKdB",noArrow:"core-styles-module_noArrow__xock6",clickable:"core-styles-module_clickable__ZuTTB",show:"core-styles-module_show__Nt9eE",closing:"core-styles-module_closing__sGnxF"},Ce={tooltip:"styles-module_tooltip__mnnfp",content:"styles-module_content__ydYdI",arrow:"styles-module_arrow__K0L3T",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};const ua=({forwardRef:t,id:e,className:o,classNameArrow:n,variant:a="dark",anchorId:r,anchorSelect:s,place:i="top",offset:l=10,events:c=["hover"],openOnClick:d=!1,positionStrategy:m="absolute",middlewares:y,wrapper:f,delayShow:v=0,delayHide:g=0,float:_=!1,hidden:b=!1,noArrow:p=!1,clickable:h=!1,closeOnEsc:x=!1,closeOnScroll:L=!1,closeOnResize:C=!1,openEvents:T,closeEvents:A,globalCloseEvents:D,imperativeModeOnly:I,style:H,position:Q,afterShow:F,afterHide:M,disableTooltip:U,content:K,contentWrapperRef:X,isOpen:$,defaultIsOpen:J=!1,setIsOpen:yt,previousActiveAnchor:te,activeAnchor:z,setActiveAnchor:Bt,border:he,opacity:_e,arrowColor:be,arrowSize:zt=8,role:We="tooltip"})=>{var Et;const ot=u.useRef(null),Mt=u.useRef(null),ct=u.useRef(null),St=u.useRef(null),jt=u.useRef(null),[kt,we]=u.useState({tooltipStyles:{},tooltipArrowStyles:{},place:i}),[nt,ee]=u.useState(!1),[Ft,bt]=u.useState(!1),[W,Wt]=u.useState(null),xe=u.useRef(!1),qt=u.useRef(null),{anchorRefs:Te,setActiveAnchor:oe}=Go(e),ne=u.useRef(!1),[wt,re]=u.useState([]),At=u.useRef(!1),Ht=d||c.includes("click"),Ee=Ht||T?.click||T?.dblclick||T?.mousedown,ae=T?{...T}:{mouseover:!0,focus:!0,mouseenter:!1,click:!1,dblclick:!1,mousedown:!1};!T&&Ht&&Object.assign(ae,{mouseenter:!1,focus:!1,mouseover:!1,click:!0});const Ct=A?{...A}:{mouseout:!0,blur:!0,mouseleave:!1,click:!1,dblclick:!1,mouseup:!1};!A&&Ht&&Object.assign(Ct,{mouseleave:!1,blur:!1,mouseout:!1});const G=D?{...D}:{escape:x||!1,scroll:L||!1,resize:C||!1,clickOutsideAnchor:Ee||!1};I&&(Object.assign(ae,{mouseover:!1,focus:!1,mouseenter:!1,click:!1,dblclick:!1,mousedown:!1}),Object.assign(Ct,{mouseout:!1,blur:!1,mouseleave:!1,click:!1,dblclick:!1,mouseup:!1}),Object.assign(G,{escape:!1,scroll:!1,resize:!1,clickOutsideAnchor:!1})),ia((()=>(At.current=!0,()=>{At.current=!1})),[]);const rt=w=>{At.current&&(w&&bt(!0),setTimeout((()=>{At.current&&(yt?.(w),$===void 0&&ee(w))}),10))};u.useEffect((()=>{if(e){if(nt){S(te);const E=w(z),B=[...new Set([...E,e])].filter(Boolean).join(" ");z?.setAttribute("aria-describedby",B)}else S(z);return()=>{S(z),S(te)}}function w(E){var B;return((B=E?.getAttribute("aria-describedby"))===null||B===void 0?void 0:B.split(" "))||[]}function S(E){const B=w(E).filter((Y=>Y!==e));B.length?E?.setAttribute("aria-describedby",B.join(" ")):E?.removeAttribute("aria-describedby")}}),[z,nt,e,te]),u.useEffect((()=>{if($===void 0)return()=>null;$&&bt(!0);const w=setTimeout((()=>{ee($)}),10);return()=>{clearTimeout(w)}}),[$]),u.useEffect((()=>{if(nt!==xe.current)if(lt(jt),xe.current=nt,nt)F?.();else{const w=(S=>{const E=S.match(/^([\d.]+)(ms|s)$/);if(!E)return 0;const[,B,Y]=E;return Number(B)*(Y==="ms"?1:1e3)})(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));jt.current=setTimeout((()=>{bt(!1),Wt(null),M?.()}),w+25)}}),[nt]);const se=w=>{we((S=>eo(S,w)?S:w))},ie=(w=v)=>{lt(ct),Ft?rt(!0):ct.current=setTimeout((()=>{rt(!0)}),w)},Vt=(w=g)=>{lt(St),St.current=setTimeout((()=>{ne.current||rt(!1)}),w)},le=w=>{var S;if(!w)return;const E=(S=w.currentTarget)!==null&&S!==void 0?S:w.target;if(!E?.isConnected)return Bt(null),void oe({current:null});v?ie():rt(!0),Bt(E),oe({current:E}),lt(St)},Xt=()=>{h?Vt(g||100):g?Vt():rt(!1),lt(ct)},Kt=({x:w,y:S})=>{var E;const B={getBoundingClientRect:()=>({x:w,y:S,width:0,height:0,top:S,left:w,right:w,bottom:S})};Co({place:(E=W?.place)!==null&&E!==void 0?E:i,offset:l,elementReference:B,tooltipReference:ot.current,tooltipArrowReference:Mt.current,strategy:m,middlewares:y,border:he,arrowSize:zt}).then((Y=>{se(Y)}))},Yt=w=>{if(!w)return;const S=w,E={x:S.clientX,y:S.clientY};Kt(E),qt.current=E},ce=w=>{var S;if(!nt)return;const E=w.target;E.isConnected&&(!((S=ot.current)===null||S===void 0)&&S.contains(E)||[document.querySelector(`[id='${r}']`),...wt].some((B=>B?.contains(E)))||(rt(!1),lt(ct)))},Se=Ro(le,50),V=Ro(Xt,50),Z=w=>{V.cancel(),Se(w)},k=()=>{Se.cancel(),V()},R=u.useCallback((()=>{var w,S;const E=(w=W?.position)!==null&&w!==void 0?w:Q;E?Kt(E):_?qt.current&&Kt(qt.current):z?.isConnected&&Co({place:(S=W?.place)!==null&&S!==void 0?S:i,offset:l,elementReference:z,tooltipReference:ot.current,tooltipArrowReference:Mt.current,strategy:m,middlewares:y,border:he,arrowSize:zt}).then((B=>{At.current&&se(B)}))}),[nt,z,K,H,i,W?.place,l,m,Q,W?.position,_,zt]);u.useEffect((()=>{var w,S;const E=new Set(Te);wt.forEach((P=>{U?.(P)||E.add({current:P})}));const B=document.querySelector(`[id='${r}']`);B&&!U?.(B)&&E.add({current:B});const Y=()=>{rt(!1)},ft=Io(z),ut=Io(ot.current);G.scroll&&(window.addEventListener("scroll",Y),ft?.addEventListener("scroll",Y),ut?.addEventListener("scroll",Y));let tt=null;G.resize?window.addEventListener("resize",Y):z&&ot.current&&(tt=Qr(z,ot.current,R,{ancestorResize:!0,elementResize:!0,layoutShift:!0}));const it=P=>{P.key==="Escape"&&rt(!1)};G.escape&&window.addEventListener("keydown",it),G.clickOutsideAnchor&&window.addEventListener("click",ce);const j=[],Ut=P=>!!(P?.target&&z?.contains(P.target)),Qo=P=>{nt&&Ut(P)||le(P)},Jo=P=>{nt&&Ut(P)&&Xt()},io=["mouseover","mouseout","mouseenter","mouseleave","focus","blur"],lo=["click","dblclick","mousedown","mouseup"];Object.entries(ae).forEach((([P,vt])=>{vt&&(io.includes(P)?j.push({event:P,listener:Z}):lo.includes(P)&&j.push({event:P,listener:Qo}))})),Object.entries(Ct).forEach((([P,vt])=>{vt&&(io.includes(P)?j.push({event:P,listener:k}):lo.includes(P)&&j.push({event:P,listener:Jo}))})),_&&j.push({event:"pointermove",listener:Yt});const co=()=>{ne.current=!0},fo=()=>{ne.current=!1,Xt()},uo=h&&(Ct.mouseout||Ct.mouseleave);return uo&&((w=ot.current)===null||w===void 0||w.addEventListener("mouseover",co),(S=ot.current)===null||S===void 0||S.addEventListener("mouseout",fo)),j.forEach((({event:P,listener:vt})=>{E.forEach((qe=>{var fe;(fe=qe.current)===null||fe===void 0||fe.addEventListener(P,vt)}))})),()=>{var P,vt;G.scroll&&(window.removeEventListener("scroll",Y),ft?.removeEventListener("scroll",Y),ut?.removeEventListener("scroll",Y)),G.resize?window.removeEventListener("resize",Y):tt?.(),G.clickOutsideAnchor&&window.removeEventListener("click",ce),G.escape&&window.removeEventListener("keydown",it),uo&&((P=ot.current)===null||P===void 0||P.removeEventListener("mouseover",co),(vt=ot.current)===null||vt===void 0||vt.removeEventListener("mouseout",fo)),j.forEach((({event:qe,listener:fe})=>{E.forEach((Zo=>{var He;(He=Zo.current)===null||He===void 0||He.removeEventListener(qe,fe)}))}))}}),[z,R,Ft,Te,wt,T,A,D,Ht,v,g]),u.useEffect((()=>{var w,S;let E=(S=(w=W?.anchorSelect)!==null&&w!==void 0?w:s)!==null&&S!==void 0?S:"";!E&&e&&(E=`[data-tooltip-id='${e.replace(/'/g,"\\'")}']`);const B=new MutationObserver((Y=>{const ft=[],ut=[];Y.forEach((tt=>{if(tt.type==="attributes"&&tt.attributeName==="data-tooltip-id"&&(tt.target.getAttribute("data-tooltip-id")===e?ft.push(tt.target):tt.oldValue===e&&ut.push(tt.target)),tt.type==="childList"){if(z){const it=[...tt.removedNodes].filter((j=>j.nodeType===1));if(E)try{ut.push(...it.filter((j=>j.matches(E)))),ut.push(...it.flatMap((j=>[...j.querySelectorAll(E)])))}catch{}it.some((j=>{var Ut;return!!(!((Ut=j?.contains)===null||Ut===void 0)&&Ut.call(j,z))&&(bt(!1),rt(!1),Bt(null),lt(ct),lt(St),!0)}))}if(E)try{const it=[...tt.addedNodes].filter((j=>j.nodeType===1));ft.push(...it.filter((j=>j.matches(E)))),ft.push(...it.flatMap((j=>[...j.querySelectorAll(E)])))}catch{}}})),(ft.length||ut.length)&&re((tt=>[...tt.filter((it=>!ut.includes(it))),...ft]))}));return B.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"],attributeOldValue:!0}),()=>{B.disconnect()}}),[e,s,W?.anchorSelect,z]),u.useEffect((()=>{R()}),[R]),u.useEffect((()=>{if(!X?.current)return()=>null;const w=new ResizeObserver((()=>{setTimeout((()=>R()))}));return w.observe(X.current),()=>{w.disconnect()}}),[K,X?.current]),u.useEffect((()=>{var w;const S=document.querySelector(`[id='${r}']`),E=[...wt,S];z&&E.includes(z)||Bt((w=wt[0])!==null&&w!==void 0?w:S)}),[r,wt,z]),u.useEffect((()=>(J&&rt(!0),()=>{lt(ct),lt(St)})),[]),u.useEffect((()=>{var w;let S=(w=W?.anchorSelect)!==null&&w!==void 0?w:s;if(!S&&e&&(S=`[data-tooltip-id='${e.replace(/'/g,"\\'")}']`),S)try{const E=Array.from(document.querySelectorAll(S));re(E)}catch{re([])}}),[e,s,W?.anchorSelect]),u.useEffect((()=>{ct.current&&(lt(ct),ie(v))}),[v]);const st=(Et=W?.content)!==null&&Et!==void 0?Et:K,Lt=nt&&Object.keys(kt.tooltipStyles).length>0;return u.useImperativeHandle(t,(()=>({open:w=>{if(w?.anchorSelect)try{document.querySelector(w.anchorSelect)}catch{return void console.warn(`[react-tooltip] "${w.anchorSelect}" is not a valid CSS selector`)}Wt(w??null),w?.delay?ie(w.delay):rt(!0)},close:w=>{w?.delay?Vt(w.delay):rt(!1)},activeAnchor:z,place:kt.place,isOpen:!!(Ft&&!b&&st&&Lt)}))),Ft&&!b&&st?O.createElement(f,{id:e,role:We,className:Re("react-tooltip",Ot.tooltip,Ce.tooltip,Ce[a],o,`react-tooltip__place-${kt.place}`,Ot[Lt?"show":"closing"],Lt?"react-tooltip__show":"react-tooltip__closing",m==="fixed"&&Ot.fixed,h&&Ot.clickable),onTransitionEnd:w=>{lt(jt),nt||w.propertyName!=="opacity"||(bt(!1),Wt(null),M?.())},style:{...H,...kt.tooltipStyles,opacity:_e!==void 0&&Lt?_e:void 0},ref:ot},O.createElement(f,{className:Re("react-tooltip-content-wrapper",Ot.content,Ce.content)},st),O.createElement(f,{className:Re("react-tooltip-arrow",Ot.arrow,Ce.arrow,n,p&&Ot.noArrow),style:{...kt.tooltipArrowStyles,background:be?`linear-gradient(to right bottom, transparent 50%, ${be} 50%)`:void 0,"--rt-arrow-size":`${zt}px`},ref:Mt})):null},da=({content:t})=>O.createElement("span",{dangerouslySetInnerHTML:{__html:t}}),pa=O.forwardRef((({id:t,anchorId:e,anchorSelect:o,content:n,html:a,render:r,className:s,classNameArrow:i,variant:l="dark",place:c="top",offset:d=10,wrapper:m="div",children:y=null,events:f=["hover"],openOnClick:v=!1,positionStrategy:g="absolute",middlewares:_,delayShow:b=0,delayHide:p=0,float:h=!1,hidden:x=!1,noArrow:L=!1,clickable:C=!1,closeOnEsc:T=!1,closeOnScroll:A=!1,closeOnResize:D=!1,openEvents:I,closeEvents:H,globalCloseEvents:Q,imperativeModeOnly:F=!1,style:M,position:U,isOpen:K,defaultIsOpen:X=!1,disableStyleInjection:$=!1,border:J,opacity:yt,arrowColor:te,arrowSize:z,setIsOpen:Bt,afterShow:he,afterHide:_e,disableTooltip:be,role:zt="tooltip"},We)=>{const[Et,ot]=u.useState(n),[Mt,ct]=u.useState(a),[St,jt]=u.useState(c),[kt,we]=u.useState(l),[nt,ee]=u.useState(d),[Ft,bt]=u.useState(b),[W,Wt]=u.useState(p),[xe,qt]=u.useState(h),[Te,oe]=u.useState(x),[ne,wt]=u.useState(m),[re,At]=u.useState(f),[Ht,Ee]=u.useState(g),[ae,Ct]=u.useState(null),[G,rt]=u.useState(null),se=u.useRef(null),ie=u.useRef($),{anchorRefs:Vt,activeAnchor:le}=Go(t),Xt=V=>V?.getAttributeNames().reduce(((Z,k)=>{var R;return k.startsWith("data-tooltip-")&&(Z[k.replace(/^data-tooltip-/,"")]=(R=V?.getAttribute(k))!==null&&R!==void 0?R:null),Z}),{}),Kt=V=>{const Z={place:k=>{var R;jt((R=k)!==null&&R!==void 0?R:c)},content:k=>{ot(k??n)},html:k=>{ct(k??a)},variant:k=>{var R;we((R=k)!==null&&R!==void 0?R:l)},offset:k=>{ee(k===null?d:Number(k))},wrapper:k=>{var R;wt((R=k)!==null&&R!==void 0?R:m)},events:k=>{const R=k?.split(" ");At(R??f)},"position-strategy":k=>{var R;Ee((R=k)!==null&&R!==void 0?R:g)},"delay-show":k=>{bt(k===null?b:Number(k))},"delay-hide":k=>{Wt(k===null?p:Number(k))},float:k=>{qt(k===null?h:k==="true")},hidden:k=>{oe(k===null?x:k==="true")},"class-name":k=>{Ct(k)}};Object.values(Z).forEach((k=>k(null))),Object.entries(V).forEach((([k,R])=>{var st;(st=Z[k])===null||st===void 0||st.call(Z,R)}))};u.useEffect((()=>{ot(n)}),[n]),u.useEffect((()=>{ct(a)}),[a]),u.useEffect((()=>{jt(c)}),[c]),u.useEffect((()=>{we(l)}),[l]),u.useEffect((()=>{ee(d)}),[d]),u.useEffect((()=>{bt(b)}),[b]),u.useEffect((()=>{Wt(p)}),[p]),u.useEffect((()=>{qt(h)}),[h]),u.useEffect((()=>{oe(x)}),[x]),u.useEffect((()=>{Ee(g)}),[g]),u.useEffect((()=>{ie.current!==$&&console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")}),[$]),u.useEffect((()=>{typeof window<"u"&&window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles",{detail:{disableCore:$==="core",disableBase:$}}))}),[]),u.useEffect((()=>{var V;const Z=new Set(Vt);let k=o;if(!k&&t&&(k=`[data-tooltip-id='${t.replace(/'/g,"\\'")}']`),k)try{document.querySelectorAll(k).forEach((S=>{Z.add({current:S})}))}catch{console.warn(`[react-tooltip] "${k}" is not a valid CSS selector`)}const R=document.querySelector(`[id='${e}']`);if(R&&Z.add({current:R}),!Z.size)return()=>null;const st=(V=G??R)!==null&&V!==void 0?V:le.current,Lt=new MutationObserver((S=>{S.forEach((E=>{var B;if(!st||E.type!=="attributes"||!(!((B=E.attributeName)===null||B===void 0)&&B.startsWith("data-tooltip-")))return;const Y=Xt(st);Kt(Y)}))})),w={attributes:!0,childList:!1,subtree:!1};if(st){const S=Xt(st);Kt(S),Lt.observe(st,w)}return()=>{Lt.disconnect()}}),[Vt,le,G,e,o]),u.useEffect((()=>{M?.border&&console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),J&&!Lo("border",`${J}`)&&console.warn(`[react-tooltip] "${J}" is not a valid \`border\`.`),M?.opacity&&console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),yt&&!Lo("opacity",`${yt}`)&&console.warn(`[react-tooltip] "${yt}" is not a valid \`opacity\`.`)}),[]);let Yt=y;const ce=u.useRef(null);if(r){const V=r({content:G?.getAttribute("data-tooltip-content")||Et||null,activeAnchor:G});Yt=V?O.createElement("div",{ref:ce,className:"react-tooltip-content-wrapper"},V):null}else Et&&(Yt=Et);Mt&&(Yt=O.createElement(da,{content:Mt}));const Se={forwardRef:We,id:t,anchorId:e,anchorSelect:o,className:Re(s,ae),classNameArrow:i,content:Yt,contentWrapperRef:ce,place:St,variant:kt,offset:nt,wrapper:ne,events:re,openOnClick:v,positionStrategy:Ht,middlewares:_,delayShow:Ft,delayHide:W,float:xe,hidden:Te,noArrow:L,clickable:C,closeOnEsc:T,closeOnScroll:A,closeOnResize:D,openEvents:I,closeEvents:H,globalCloseEvents:Q,imperativeModeOnly:F,style:M,position:U,isOpen:K,defaultIsOpen:X,border:J,opacity:yt,arrowColor:te,arrowSize:z,setIsOpen:Bt,afterShow:he,afterHide:_e,disableTooltip:be,activeAnchor:G,previousActiveAnchor:se.current,setActiveAnchor:V=>{rt((Z=>(V?.isSameNode(Z)||(se.current=Z),V)))},role:zt};return O.createElement(ua,{...Se})}));typeof window<"u"&&window.addEventListener("react-tooltip-inject-styles",(t=>{t.detail.disableCore||Ao({css:":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s;--rt-arrow-size:8px}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit;z-index:-1;-webkit-backface-visibility:hidden;backface-visibility:hidden}.core-styles-module_content__BRKdB{position:relative;z-index:1}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}",type:"core"}),t.detail.disableBase||Ao({css:`
.styles-module_tooltip__mnnfp{border-radius:3px;font-size:90%;width:max-content}.styles-module_content__ydYdI{background:inherit;border-radius:inherit;padding:8px 16px}.styles-module_arrow__K0L3T{width:var(--rt-arrow-size);height:var(--rt-arrow-size)}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,type:"base"})}));const Le={allBotPlayer:"all-bot-player",playerNameEmpty:"player-name-empty",corruptedSave:"corrupted-save",incompatibleSave:"incompatible-save"},ma=[{name:"Player 1",isBot:!1},{name:"Player 2",isBot:!1},{name:"Player 3",isBot:!1},{name:"Player 4",isBot:!1}],wa=en(function(){const[e,o]=u.useState(2),[n,a]=u.useState(!1),[r,s]=u.useState(ma),i=on(),l=an(),c=u.useMemo(()=>sn[ln(e)],[e]);u.useEffect(()=>{l()},[l]);const d=y=>{try{if(y.preventDefault(),n)return;if(a(!0),cn()&&!confirm("Start a new game? Your current save will be lost"))return a(!1);fn();const f=r.slice(0,e),v=f.every(_=>_.isBot);if(f.some(_=>_.name===""||[..._.name].every(b=>b===" ")))N("Player name must not be empty",{type:"error",toastId:Le.playerNameEmpty});else if(v)N("There must be at least one human player",{type:"error",toastId:Le.allBotPlayer});else return void i("/play",{state:{initData:f}});a(!1)}catch(f){mo("PlayerSetup.handlePlayBtnClick")(f),a(!1)}},m=y=>{try{if(y.preventDefault(),n)return;a(!0);const{success:f,data:v}=un(dn());if(!f)N("Save file does not exist or it's corrupted",{type:"error",toastId:Le.corruptedSave});else if(v.version!==po)N(`Incompatible save: v${v.version} (requires v${po})`,{type:"error",toastId:Le.incompatibleSave});else return void i("/play");a(!1)}catch(f){mo("PlayerSetup.handleLoadLinkClick")(f),a(!1)}};return q.jsxs("div",{className:dt.playerSetup,children:[q.jsxs("main",{className:dt.playerSetupDialog,style:{"--player-count":e},children:[q.jsx("div",{className:dt.playerCountSelector,children:[2,3,4].map(y=>q.jsx("button",{className:dt.playerCount,onClick:()=>o(y),children:y},y))}),q.jsx("div",{className:dt.playerInputs,children:c.map((y,f)=>q.jsx(bn,{colour:y,name:r[f].name,isBot:r[f].isBot,onBotStatusChange:v=>s(r.map((g,_)=>_===f?{...g,isBot:v}:g)),onNameChange:v=>s(r.map((g,_)=>_===f?{...g,name:v}:g))},f))}),q.jsx(Ve,{className:dt.playBtn,to:"/play",onClick:d,"aria-disabled":n,children:"PLAY"}),q.jsx(Ve,{className:dt.loadGame,to:"/play",title:"Load last game",onClick:m,"aria-disabled":n,children:"or, load last game"}),q.jsxs("small",{className:dt.version,children:["v","2.2.1"]})]}),q.jsx(Ve,{to:"/",className:dt.goToHome,children:q.jsx(nr,{})}),q.jsxs("a",{href:"https://github.com/priyanshurav",rel:"noopener noreferrer",target:"_blank",className:dt.ghFollowBtn,"aria-label":"Follow @priyanshurav on GitHub",children:[q.jsx(pn,{"aria-hidden":"true"}),"Follow @priyanshurav"]}),q.jsx(or,{position:"top-center"}),q.jsx(pa,{id:"bot-status-tooltip",className:"tooltip",openEvents:{focus:!1,mouseover:!0},place:"bottom-start"})]})}),xa=()=>[{title:"LibreLudo - Player Setup"}];export{wa as default,xa as meta};

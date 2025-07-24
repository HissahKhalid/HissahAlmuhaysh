var ie=Object.defineProperty;var ae=(e,t,i)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var C=(e,t,i)=>ae(e,typeof t!="symbol"?t+"":t,i);var M;(r=>(r.isTouch="ontouchstart"in window||navigator.maxTouchPoints>0,r.isChrome=navigator.userAgent.toLowerCase().includes("chrome/"),r.isWebKit=navigator.userAgent.toLowerCase().includes("applewebkit/"),r.isSafari=r.isWebKit&&!r.isChrome,r.isSafariDesktop=r.isSafari&&!r.isTouch,r.isWindows=/Win/u.test(navigator.platform),r.isMacOS=/Mac/u.test(navigator.platform),r.isAndroidWebView=r.isChrome&&navigator.userAgent.toLowerCase().includes("; wv)"),r.isIosWebView=r.isWebKit&&!navigator.userAgent.toLowerCase().includes("safari/"),r.isWebView=r.isAndroidWebView||r.isIosWebView))(M||={});var T=class extends Promise{constructor(){let i,u;super((o,s)=>{i=o,u=s});C(this,"_state","initial");C(this,"resolve");C(this,"reject");this.resolve=o=>{this._state="fulfilled",i(o)},this.reject=o=>{this._state="rejected",u(o)}}get state(){return this._state}pending(){return this._state="pending",this}isResolved(){return this._state==="fulfilled"||this._state==="rejected"}};T.prototype.constructor=Promise;var X="framer_",h="editSite";var O="__framer_hide_editorbar_until",N="2147483647";function Z(e,t){return function(u,o){let[s,a]=t(!1);return e(()=>{let f=c=>{c.origin===u&&typeof c.data=="object"&&c.data&&"apiVersion"in c.data&&"type"in c.data&&"component"in c.data&&c.data.apiVersion===1&&c.data.type==="initializeComponent"&&c.data.component===o&&a(!0)};return window.addEventListener("message",f),()=>{window.removeEventListener("message",f)}},[u,o]),s}}function G(e,t,i,u,o){return function(){let a=e(),f=i()?.activeLocale??void 0,{collectionUtils:c}=u(),[y,r]=o(),E=a?.id,D=a?.collectionId,P=a?.pathVariables;return t(()=>{if(!E)return;let w=!1;return se(f,D,c,P).then(k=>{w||r({collectionItemNodeId:k,webPageNodeId:E})}).catch(()=>{w||r({collectionItemNodeId:void 0,webPageNodeId:E})}),()=>{w=!0}},[f,D,c,P,E]),y}}async function se(e,t,i,u){if(!t)return;let o=Object.values(u??{}),[s]=o;if(o.length!==1||!s||typeof s!="string")return;let a=i?.[t];return(await a?.())?.getRecordIdBySlug(s,e)}function $(e,t,i,u,o){let s=G(e,t,i,u,o),a=Z(t,o);return function(c,y){let r=s(),E=a(y,"OnPageActiveRouteStore");t(()=>{E&&c.current?.contentWindow?.postMessage({apiVersion:1,type:"updateNodeIds",nodeIds:r},y)},[c,r,y,E])}}var B=12,K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAApNJREFUSA2tlUtLlFEYgEe7mtFFQ8NLFBG1SJAwahtiLVy5ceVSEPQH1LZf0Lp9FO1bdYNyI7gyBFcS2kAzilYq3sfxeYZ55Zv6FGfohWfOd97vnPd23u9MXeZoaeb1Q7gPHXAFzsAS5GACxiEPqVKXqs1kmtAPQi+cAtedToz1PJ8ExxPwDl7CAlRImoN7rBiF86ABHTiGAzMIh8n3O+ifwWc4EL0n5TGTYQijvjNSxbUadozInUeGZ3nuh1WYgpIkM+hGMwYajAgdrfUn+AaLoLTCAxiAOxCZxL4RdB+gZMjxEjwHo4hS8Jh5DR9hz0mKaNizegoNEI7Wee6FXJTISG6AUgDr+QImoAiHie+mwZJow/PRps4uwnsnRj8Epqc4voVJJ8eULOtW4BFYYjPpgjc+3IWI2sh/wFeoVl6xYQ48dDGLfjOwc/ygQqz595hUMVouS9QHBm4l6k3HWpnBLqicgVrlCxujSbR1Swd+UDpQYRS/oVaZZ2MWwlZBB9Zdxf+QTYw8SRgq6sAvz7vH6JULEB9USVHFjzZskgPRQR4ayxoXXIdaHdg9HrB2rErByWxZERnYtrWUzD0esDbtTmXPhzXwHrKLxEUbYGbVyDkWWwkdadfqbPmwDXZSCyh2VAf8BM/nOOJH5Y0QopMt2I5U/KO4DZZJB47XwEX+ex0mGroMV8sLwp56gyuGwiyW4SZ4c8bt2cZzO7jBNeqtsRHbeZ1g9krsMbhfYPv/c5gecA+4yAVuitFszE5Hjva872OMdXagF19JIoOYWyozMTI3J0tmA6gLvXPfO1cc/XOqOLe/HbjwD8yCXRD3VNJROEgatiRZMJsKsbZHia3nAdphtq8fkiWyXJbBe8uM1aXKPouNnz2Bm1kwAAAAAElFTkSuQmCC",z="__framer-editorbar-container",b="__framer-editorbar-label",F="__framer-editorbar-button",V="__framer-editorbar-loading-spinner",W="__framer-editorbar-button-tooltip-visible",ce=`
#${z} {
    align-items: center;
    bottom: 50%;
    display: flex;
    gap: 8px;
    position: fixed;
    right: 10px;
    transform: translateY(50%);
    z-index: ${N};
}

#${b} {
    background-color: #111;
    border-radius: 8px;
    font-family: "Inter", "Inter-Regular", system-ui, Arial, sans-serif;
    font-size: 12px;
    height: fit-content;
    opacity: 0;
    padding: 4px 8px;
    transition: opacity 0.4s ease-out;
    font-weight: 500;
}

#${F} {
    all: unset;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
    display: flex;
    height: 30px;
    justify-content: center;
    width: 30px;
}

#${b}.${W} {
    opacity: 1;
}

#${b}, #${F} {
    backdrop-filter: blur(10px);
    background-color: rgba(34, 34, 34, 0.8);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(255, 255, 255, 0.15) 0px 0px 0px 1px;
    color: #fff;
}

#${V} {
    width: ${B}px;
    height: ${B}px;
    -webkit-mask: url(${K});
    mask: url(${K});
    -webkit-mask-size: ${B}px;
    mask-size: ${B}px;
    background-color: #fff;


    animation-duration: 800ms;
    animation-iteration-count: infinite;
    animation-name: __framer-loading-spin;
    animation-timing-function: linear;
}

@keyframes __framer-loading-spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
`,H=document.createElement("style");H.type="text/css";H.innerHTML=ce;document.head.appendChild(H);function J(e,t){function i(){return e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",fill:"none",children:[e("path",{d:"M 0 1.414 C 0 0.633 0.633 0 1.414 0 L 1.414 0 C 2.195 0 2.828 0.633 2.828 1.414 L 2.828 12.021 L 1.414 13.435 L 0 12.021 Z",transform:"translate(4.336 -0.468) rotate(45 1.5 6.75)",fill:"transparent",strokeWidth:"1.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M 7 11 L 11 11",fill:"transparent",strokeWidth:"1.5",stroke:"currentColor",strokeLinecap:"round"})]})}function u(){return e("div",{id:V})}return function({isLoading:s,editorVisible:a,onClick:f}){let[c,y]=t(!1),[r,E]=t(a);return r!==a&&(E(a),a||y(!1)),e("div",{children:[e("span",{"aria-label":"Edit Framer Content",children:"Edit Content",id:b,className:c?W:void 0}),e("button",{"aria-labelledby":b,children:s?u():i(),id:F,onClick:f,onMouseMove:()=>{y(!0)},onMouseLeave:()=>{y(!1)}})],id:z})}}var v="data-original-href",q="link[rel*='icon']",de=`${q}:not([${v}])`,ue="https://framerusercontent.com/sites/icons/writing-hand-favicon.png";function Q(){document.querySelectorAll(de).forEach(e=>{e instanceof HTMLLinkElement&&(e.setAttribute(v,e.href),e.setAttribute("href",ue))})}function ee(){document.querySelectorAll(q).forEach(e=>{e instanceof HTMLLinkElement&&e.getAttribute(v)&&(e.setAttribute("href",e.getAttribute(v)??""),e.removeAttribute(v))})}var pe=Date.now();function fe(){let e=localStorage.getItem(O);if(!e)return!1;let t=Date.now(),i=Number(e);return t>=i||Number.isNaN(i)?(localStorage.removeItem(O),!1):!0}function me(){return window.self!==window.top}var ge=`
#__framer-editorbar {
    /* https://sergeyski.com/css-color-scheme-and-iframes-lessons-learned-from-disqus-background-bug */
    color-scheme: light;
    overflow: hidden;
    position: fixed;
    border: none;
    z-index: ${N};
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
}

#__framer-editorbar.old-entrypoint {
    width: calc(100% - 10px);
}

#__framer-editorbar.status_hidden {
    display: none;
}

#__framer-editorbar.status_visually_hidden {
    --padding-right: 0px;
    clip-path: circle(1px at calc(100% - 20px) calc(50% + 4px));
    z-index: ${Number(N)-1};
}

#__framer-editorbar.status_measuring {
    clip-path: unset;
}
`,j=document.createElement("style");j.type="text/css";j.innerHTML=ge;document.head.appendChild(j);var x=new URL(import.meta.url).origin;function ye(){let e=new URL(window.location.href),t=e.searchParams.has(h),i=e.searchParams.has(h.toLowerCase());if(!t&&!i)return!1;let u=t?h:h.toLowerCase(),o=e.searchParams.get(u);if(o!==""&&o!==null)return!1;for(let s of e.searchParams.keys())if(s!==h&&s!==h.toLowerCase()&&!s.startsWith(X))return!1;return e.searchParams.delete(h),e.searchParams.delete(h.toLowerCase()),window.history.replaceState({},"",e.toString()),!0}var Ee=ye();function je({dependencies:e}){if(e.__version!==1)throw new Error("Unsupported dependencies version");if(fe()||me()||M.isWebView)return function(){return null};let{createElement:t,memo:i,useCallback:u,useEffect:o,useRef:s,useState:a}=e.react,{createPortal:f}=e["react-dom"],{useCurrentRoute:c,useLocaleInfo:y,useRouter:r}=e.framer;function E(){let[g,l]=a(!1),d=u(()=>{"requestIdleCallback"in window?requestIdleCallback(()=>{l(!0)}):setTimeout(()=>{l(!0)},300)},[]);return o(()=>{document.readyState==="complete"?d():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&d()},{once:!0})},[d]),g}function D(g){let[l,d]=a({className:"status_hidden"});return o(()=>{if(g)return;function p(n){n.origin===x&&typeof n.data=="object"&&n.data?.apiVersion===1&&(n.data.type==="beginSizeMeasuring"&&d({className:"status_measuring"}),n.data.type==="updateStyle"&&d({style:{clipPath:n.data.clipPath}}),n.data.type==="editorBarHidden"&&(d({className:"status_hidden"}),window.removeEventListener("message",p)),n.data.type==="enterFullscreen"&&d({className:"fullscreen"}))}return window.addEventListener("message",p),()=>{window.removeEventListener("message",p)}},[]),l}function P(g){let[l,d]=a(!1);return o(()=>{if(l||g)return;function p(n){if(n.origin===x&&typeof n.data=="object"&&n.data?.apiVersion===1&&n.data.type==="editorBarHidden"&&!l){let R=Date.now()+6048e5;localStorage.setItem(O,R.toString()),d(!0),window.removeEventListener("message",p)}}return window.addEventListener("message",p),()=>{window.removeEventListener("message",p)}},[]),l}function w(g,l){let[d,p]=a(!1),[n,I]=a(!0),[R,A]=a(!1),[U,_]=a("hidden"),S=s();return S.current??=new T,o(()=>{if(!l)return;function L(m){m.origin===x&&typeof m.data=="object"&&m.data?.apiVersion===1&&(m.data.type==="accessResult"&&m.data.data.status==="success"?p(!0):m.data.type==="exitFullscreen"?(document.body.style.overflow="auto",window.scrollTo({behavior:"instant",top:m.data.position?.top??0}),_("hidden")):m.data.type==="sandboxReadyState"&&m.data.data.status==="ready"&&(I(!1),setTimeout(()=>{S.current?.resolve()},50)))}return window.addEventListener("message",L),()=>{window.removeEventListener("message",L)}},[p,I,_]),{showEntrypointButton:d,entrypointButtonLoading:R?n:!1,iframeState:U,onEditContent:()=>{g.current?.contentWindow?.postMessage({apiVersion:1,type:"enterOnPageEditing"},x),_("fullscreen"),A(!0),S.current?.then(()=>{g.current?.contentWindow?.postMessage({apiVersion:1,type:"showCanvas",position:{top:window.scrollY}},x),setTimeout(()=>{document.body.style.overflow="hidden"},300),A(!1)})}}}let k=$(c,o,y,r,a);function te({framerSiteId:g,features:l,iframeRef:d,measuringProps:p}){k(d,x);let n=new URL(import.meta.url),I=n.pathname.lastIndexOf("/");if(I<0)throw new Error("Invalid pathname");let R=l?.editorBarDisableFrameAncestorsSecurity?"fake-domain.example":window.location.hostname;return n.pathname=n.pathname.slice(0,I),n.searchParams.set("framerSiteId",g),n.searchParams.set("source",R),n.searchParams.set("features",JSON.stringify(l||{})),n.searchParams.set("loadStart",pe.toString()),Ee&&n.searchParams.set("forceShow","true"),t("iframe",{...p,id:"__framer-editorbar",ref:d,src:n.href})}let oe=J(t,a);function re({framerSiteId:g,features:l}){let d=l?.editorBarOnPageEditing||!1,p=s(null),n=s(document.title),I=E(),R=D(d);P(d);let{showEntrypointButton:A,entrypointButtonLoading:U,iframeState:_,onEditContent:S}=w(p,d),L=_==="fullscreen";if(o(()=>{L?(document.title="Editing Page...",Q()):(document.title=n.current,ee())},[L]),!I)return null;let m;_==="fullscreen"?m="fullscreen":A?m="status_visually_hidden":m="status_hidden";let Y=t(te,{framerSiteId:g,features:l,iframeRef:p,measuringProps:d?{className:m}:{...R,className:`${R.className??""} old-entrypoint`}}),ne=A?t(oe,{isLoading:U,onClick:S,editorVisible:_==="fullscreen"}):null;return f(d?[ne,Y]:Y,document.body)}return i(re)}export{je as createEditorBar};
//# sourceMappingURL=init.mjs.map

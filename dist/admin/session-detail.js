var g=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var I=(e,t)=>{var o={};for(var s in e)K.call(e,s)&&t.indexOf(s)<0&&(o[s]=e[s]);if(e!=null&&g)for(var s of g(e))t.indexOf(s)<0&&H.call(e,s)&&(o[s]=e[s]);return o};var d=(e,t,o)=>new Promise((s,i)=>{var l=n=>{try{_(o.next(n))}catch(a){i(a)}},r=n=>{try{_(o.throw(n))}catch(a){i(a)}},_=n=>n.done?s(n.value):Promise.resolve(n.value).then(l,r);_((o=o.apply(e,t)).next())});var D=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];var x={ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN",COACH:"COACH"};function f(e,t="GET",o=!1,s=!1,i=!1,l=!0){try{let r={"Content-Type":"application/json"};i&&(r={}),s&&(r.Authorization=`Bearer ${s}`);let _={method:t,headers:r};return o&&(l?_.body=JSON.stringify(o):_.body=o),fetch(e,_).then(n=>n.ok?n.json():n.json().then(a=>(Promise.reject(a.message),{isFetchOk:!1,status:n.status,message:a.message,payload:a&&a.payload?a.payload:null}))).then(n=>n).catch(n=>(console.error("Error in fetch",n),n))}catch(r){return console.error("Error!: "+r),r}}function U(e="nammax_auth"){let o=`; ${document.cookie}`.split(`; ${e}=`);return o.length===2?o.pop().split(";").shift():null}function E(e="/",t=2e3){setTimeout(()=>{window.location.href=e},t)}function h(e=null,t=!1,o=!1,s=!1){if(e==null)return"NaN";let i=new Date,l=new Date(e),r=l.getHours(),_="";if(s||(_=r>=12?"PM":"AM",r=r%12||12),t){let n=l.getMinutes();return n=n<10?`0${n}`:n,o?`${i.getDate()===l.getDate()?"Today At":i.getDate()+1===l.getDate()?"Tomorrow At":i.getDate()+2===l.getDate()?"Day After Tomorrow At":N(e)} ${r}:${n} ${_}`:`${r}:${n} ${_}`}else return o?`${i.getDate()===l.getDate()?"Today At":i.getDate()+1===l.getDate()?"Tomorrow At":i.getDate()+2===l.getDate()?"Day After Tomorrow At":N(e)} ${r} ${_}`:`${N(e)} ${r} ${_}`}function N(e=null){if(e==null)return"NaN";let t=new Date(e);return`${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()}`}function y(e=null){if(e==null)return"NaN";e=e*60;let t=`${e/60^0}`.slice(-2),o=("0"+e%60).slice(-2);return t!="0"?o!="00"?`${t} HR ${o} M`:t+" HR":o+" Mins"}function T(e="/admin/sign-in",t="sidebar-logout-btn"){let o=document.getElementById(t);o?o.onclick=()=>v(e):console.error("Logout button not found")}function v(e="/sign-in"){window.localStorage.removeItem("auth"),E(`${e}`)}function L(e=x.ADMIN){if(e===x.ADMIN){let t=document.getElementById("admin-nav"),o=document.getElementById("super-admin-nav");t&&(t.style.display="flex"),o&&o.remove()}else if(e===x.SUPER_ADMIN){let t=document.getElementById("admin-nav"),o=document.getElementById("super-admin-nav");o&&(o.style.display="flex"),t&&t.remove()}}function C(){let e=document.getElementById("loading-screen");e?e.remove():console.log("did not find loading screen")}function B({mode:e="API",clientObjRefName:t="name",data:o,token:s,API:i,extraXanoInputObj:l=[],searchContainerElId:r=""},_,n=null,a=null){let c,R,u;if(r.length>0){let A=document.getElementById(r);c=A.querySelector("#search-input"),c.setAttribute("placeholder","Search"),R=A.querySelector("#search-btn"),u=A.querySelector("#search-reset-btn")}else c=document.getElementById("search-input"),c.setAttribute("placeholder","Search"),R=document.getElementById("search-btn"),u=document.getElementById("search-reset-btn");u.onclick=()=>{c.value="",M(u,{mode:e,clientObjRefName:t,data:o,searchquery:"",token:s,API:i,extraXanoInputObj:l},_,n,a)},R.onclick=()=>{let A=c.value;M(u,{mode:e,clientObjRefName:t,data:o,searchquery:A,token:s,API:i,extraXanoInputObj:l},_,n,a)}}function M(R,u,A,se,re){return d(this,arguments,function*(e,{mode:t,clientObjRefName:o,data:s,searchquery:i,token:l,API:r,extraXanoInputObj:_=[]},n,a,c){if(i.length===0)e.style.display="none",a?n(s,a):n(s);else try{if(t==="API"){let m={search_query:`${i}:*`};_.length>0&&_.map(j=>{for(let[z,w]of Object.entries(j))m[z]=w});let p=yield f(r+"query","POST",m,l);if(p.isFetchOk!==void 0&&!p.isFetchOk)throw console.error(p.message),Error("API call failed");e.style.display="flex",a?n(p,a):n(p)}else{let m=s.filter(p=>p[o].toLowerCase().includes(i.toLowerCase()));e.style.display="flex",a?n(m,a):n(m)}}catch(m){c?c():console.error(m)}})}var S="/admin/sign-in";var b="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/admin/session_detail/";var O;window.onload=function(){return d(this,null,function*(){T("/admin/sign-in","sidebar-logout-btn");var e=new URL(document.location.href);if(O=e.searchParams.get("sessionId")||null,!O){console.error("No session id found");return}let t=U();if(t){let s=yield f(b+O,"GET",!1,t);if(s.isFetchOk!==void 0&&!s.isFetchOk){console.error(s.message);return}let o=s,{team_role:i}=o,l=I(o,["team_role"]);i&&(i===x.SUPER_ADMIN||i===x.ADMIN)?(L(i),P(l)):E(`${S}?reason=UNAUTHORIZED_USER`)}else E(`${S}?reason=NOT_SIGNED_IN`)})};function P(e){return d(this,null,function*(){let{sessions:t}=e;G(t),X(t.users),B({mode:"client",clientObjRefName:"name",data:t.users},X),C()})}function G(e){var o,s,i,l,r,_,n;$("#session-detail-name").text(e.session_name),$("#session-detail-coach").text(e.name),$("#session-detail-location").text(e.location),$("#session-detail-date").text(`${N(e.time)} (${D[new Date(e.time).getDay()]})`),$("#session-detail-duration").text(y(e.duration)),$("#session-detail-scheduled-time").text(h(e.time,!0)),$("#session-detail-start-time").text((o=h(e.start_time,!0))!=null?o:"NaN"),$("#session-detail-end-time").text((s=h(e.end_time,!0))!=null?s:"NaN");let t=(l=(i=e==null?void 0:e.users)==null?void 0:i.filter(a=>a.attended===!0).length)!=null?l:0;$("#session-detail-signed-up-users").text((_=(r=e==null?void 0:e.users)==null?void 0:r.length)!=null?_:"0"),$("#session-detail-missed-users").text(((n=e==null?void 0:e.users)==null?void 0:n.length)-t),$("#session-detail-attended-users").text(t),$("#session-comment").text(e.comments!==""?e.comments:"No comments")}function X(e){let t=document.getElementById("table-container"),o=t.querySelector("#table-item");function s(i){let l=t.querySelectorAll(".adb-user.w-inline-block");l.forEach((r,_)=>{_!==l.length-1&&r.remove()}),i==null||i.forEach((r,_)=>{let n=o.cloneNode(!0);n.setAttribute("id",""),n.setAttribute("href",`/admin/user?userId=${r.user_id}`);let a=n.querySelectorAll(".colcontent");_%2===0&&(n.style.backgroundColor="#00edf4"),r.profile_picture&&(a[0].style.backgroundImage=`url(${r.profile_picture.url})`),a[1].innerText=r.name,a[2].innerText="",a[3].innerText="",a[4].innerText="",a[5].innerText="",a[6].innerText="",a[7].innerText="",n.style.display="flex",t.prepend(n)})}s(e),o.style.display="none"}

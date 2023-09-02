var f=(e,t,o)=>new Promise((l,i)=>{var _=n=>{try{r(o.next(n))}catch(s){i(s)}},a=n=>{try{r(o.throw(n))}catch(s){i(s)}},r=n=>n.done?l(n.value):Promise.resolve(n.value).then(_,a);r((o=o.apply(e,t)).next())});var u={ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN",COACH:"COACH"};function g(e,t="GET",o=!1,l=!1,i=!1,_=!0){try{let a={"Content-Type":"application/json"};i&&(a={}),l&&(a.Authorization=`Bearer ${l}`);let r={method:t,headers:a};return o&&(_?r.body=JSON.stringify(o):r.body=o),fetch(e,r).then(n=>n.ok?n.json():n.json().then(s=>(Promise.reject(s.message),{isFetchOk:!1,status:n.status,message:s.message,payload:s&&s.payload?s.payload:null}))).then(n=>n).catch(n=>(console.error("Error in fetch",n),n))}catch(a){return console.error("Error!: "+a),a}}function S(e="nammax_auth"){let o=`; ${document.cookie}`.split(`; ${e}=`);return o.length===2?o.pop().split(";").shift():null}function E(e="/",t=2e3){setTimeout(()=>{window.location.href=e},t)}function L(e=null,t=!1,o=!1,l=!1){if(e==null)return"NaN";let i=new Date,_=new Date(e),a=_.getHours(),r="";if(l||(r=a>=12?"PM":"AM",a=a%12||12),t){let n=_.getMinutes();return n=n<10?`0${n}`:n,o?`${i.getDate()===_.getDate()?"Today At":i.getDate()+1===_.getDate()?"Tomorrow At":i.getDate()+2===_.getDate()?"Day After Tomorrow At":h(e)} ${a}:${n} ${r}`:`${a}:${n} ${r}`}else return o?`${i.getDate()===_.getDate()?"Today At":i.getDate()+1===_.getDate()?"Tomorrow At":i.getDate()+2===_.getDate()?"Day After Tomorrow At":h(e)} ${a} ${r}`:`${h(e)} ${a} ${r}`}function h(e=null){if(e==null)return"NaN";let t=new Date(e);return`${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()}`}function T(e="/admin/sign-in",t="sidebar-logout-btn"){let o=document.getElementById(t);o?o.onclick=()=>H(e):console.error("Logout button not found")}function H(e="/sign-in"){window.localStorage.removeItem("auth"),E(`${e}`)}function C(e=u.ADMIN){if(e===u.ADMIN){let t=document.getElementById("admin-nav"),o=document.getElementById("super-admin-nav");t&&(t.style.display="flex"),o&&o.remove()}else if(e===u.SUPER_ADMIN){let t=document.getElementById("admin-nav"),o=document.getElementById("super-admin-nav");o&&(o.style.display="flex"),t&&t.remove()}}function M(){let e=document.getElementById("loading-screen");e?e.remove():console.log("did not find loading screen")}function b({mode:e="API",clientObjRefName:t="name",data:o,token:l,API:i,extraXanoInputObj:_=[],searchContainerElId:a=""},r,n=null,s=null){let c,p,m;if(a.length>0){let x=document.getElementById(a);c=x.querySelector("#search-input"),c.setAttribute("placeholder","Search"),p=x.querySelector("#search-btn"),m=x.querySelector("#search-reset-btn")}else c=document.getElementById("search-input"),c.setAttribute("placeholder","Search"),p=document.getElementById("search-btn"),m=document.getElementById("search-reset-btn");m.onclick=()=>{c.value="",B(m,{mode:e,clientObjRefName:t,data:o,searchquery:"",token:l,API:i,extraXanoInputObj:_},r,n,s)},p.onclick=()=>{let x=c.value;B(m,{mode:e,clientObjRefName:t,data:o,searchquery:x,token:l,API:i,extraXanoInputObj:_},r,n,s)}}function B(p,m,x,y,oe){return f(this,arguments,function*(e,{mode:t,clientObjRefName:o,data:l,searchquery:i,token:_,API:a,extraXanoInputObj:r=[]},n,s,c){if(i.length===0)e.style.display="none",s?n(l,s):n(l);else try{if(t==="API"){let A={search_query:`${i}:*`};r.length>0&&r.map(j=>{for(let[z,K]of Object.entries(j))A[z]=K});let d=yield g(a+"query","POST",A,_);if(d.isFetchOk!==void 0&&!d.isFetchOk)throw console.error(d.message),Error("API call failed");e.style.display="flex",s?n(d,s):n(d)}else{let A=l.filter(d=>d[o].toLowerCase().includes(i.toLowerCase()));e.style.display="flex",s?n(A,s):n(A)}}catch(A){c?c():console.error(A)}})}var R="/admin/sign-in";var O="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/super_admin/all_sessions",X="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/super_admin/all_sessions/search/";var D=null,I=0,N=[];window.onload=function(){return f(this,null,function*(){T(R,"sidebar-logout-btn");let e=S();if(e){let t=yield g(O+"/1","GET",!1,e);if(t.isFetchOk!==void 0&&!t.isFetchOk){console.error(t.message),t.payload&&t.payload.role===u.ADMIN&&t.payload.gyms&&t.payload.gyms.length>0?E(`/admin/gym/g?gymCode=${t.payload.gyms[0].gym_id}`):E(`${R}?reason=UNAUTHORIZED_USER`);return}C(u.SUPER_ADMIN),P(t,e)}else E(`${R}?reason=NOT_SIGNED_IN`)})};function P(e,t){return f(this,null,function*(){U(e),b({data:e,token:t,API:X},U),M()})}function U(e,t=!1){let o=document.getElementById("table-container"),l=o.querySelector("#table-item");function i(_){var n;D=_.nextPage;let a=o.querySelectorAll(".adb-user.w-inline-block");a.forEach((s,c)=>{c!==a.length-1&&s.remove()});let r=(n=N==null?void 0:N.items)==null?void 0:n.sort((s,c)=>c.time-s.time);r==null||r.forEach((s,c)=>{var x,y;let p=l.cloneNode(!0);p.setAttribute("id",""),p.setAttribute("href",`/admin/session?sessionId=${s.id}`);let m=p.querySelectorAll(".colcontent");c%2===0&&(p.style.backgroundColor="#00edf4"),m[1].innerText=s.session_name,m[2].innerText=s.name||"NaN",m[3].innerText=s.code,m[4].innerText=h(s.time),m[5].innerText=L(s.time,!0),m[6].innerText=(y=(x=s==null?void 0:s.users)==null?void 0:x.length)!=null?y:0,m[7].innerText=s.status,p.style.display="flex",o.prepend(p)})}t?(N.items.push(...e.items),N.nextPage=e.nextPage):N=e,i(N),l.style.display="none"}var w=new IntersectionObserver(e=>{e[0].intersectionRatio<=0||(I>0&&D?v(D):I<1&&I++)});w.observe(document.querySelector(".loadmore"));function v(e){return f(this,null,function*(){let t=S();if(t){let o=yield g(O+`/${e}`,"GET",!1,t);if(o.isFetchOk!==void 0&&!o.isFetchOk){console.error(o.message),o.payload&&o.payload.role===u.ADMIN&&o.payload.gyms&&o.payload.gyms.length>0?E(`/admin/gym/g?gymCode=${o.payload.gyms[0].gym_id}`):console.log("error fetching paginated");return}U(o,!0)}})}

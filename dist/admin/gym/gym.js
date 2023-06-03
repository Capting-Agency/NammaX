var T=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var D=(t,o)=>{var n={};for(var i in t)Y.call(t,i)&&o.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&T)for(var i of T(t))o.indexOf(i)<0&&q.call(t,i)&&(n[i]=t[i]);return n};var h=(t,o,n)=>new Promise((i,c)=>{var u=e=>{try{s(n.next(e))}catch(a){c(a)}},x=e=>{try{s(n.throw(e))}catch(a){c(a)}},s=e=>e.done?i(e.value):Promise.resolve(e.value).then(u,x);s((n=n.apply(t,o)).next())});var y=["January","February","March","April","May","June","July","August","September","October","November","December"],E={ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN",COACH:"COACH"};function S(t,o="GET",n=!1,i=!1,c=!1,u=!0){try{let x={"Content-Type":"application/json"};c&&(x={}),i&&(x.Authorization=`Bearer ${i}`);let s={method:o,headers:x};return n&&(u?s.body=JSON.stringify(n):s.body=n),fetch(t,s).then(e=>e.ok?e.json():e.json().then(a=>(Promise.reject(a.message),{isFetchOk:!1,status:e.status,message:a.message,payload:a&&a.payload?a.payload:null}))).then(e=>e).catch(e=>(console.error("Error in fetch",e),e))}catch(x){return console.error("Error!: "+x),x}}function C(t="nammax_auth"){let n=`; ${document.cookie}`.split(`; ${t}=`);return n.length===2?n.pop().split(";").shift():null}function R(t="/",o=0){setTimeout(()=>{window.location.href=t},o)}function L(t=null,o=!1){if(t==null)return"NaN";var n=new Date(t),i=n.getHours(),c=i>=12?"PM":"AM";if(i=i%12||12,o){var u=n.getMinutes();return u=u<10?`0${u}`:u,`${i}:${u} ${c}`}else return`${i} ${c}`}function w(t=null){if(t==null)return"NaN";let o=new Date(t);return`${o.getDate()}/${o.getMonth()+1}/${o.getFullYear()}`}function B(t=null){if(t==null)return"NaN";let o=t.split("-"),n=Date.now()-new Date(parseInt(o[2]),parseInt(o[1])-1,parseInt(o[0])).getTime(),i=new Date(n);return Math.abs(i.getUTCFullYear()-1970)}function b(t,o=null){if(t!=null){var n,i=t.options.length-1;for(n=i;n>=0;n--)n!==o&&t.remove(n)}}function M(t="/admin/sign-in",o="sidebar-logout-btn"){let n=document.getElementById(o);n?n.onclick=()=>j(t):console.error("Logout button not found")}function j(t="/sign-in"){window.localStorage.removeItem("auth"),R(`${t}`)}function g(t=0){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"}).format(Number(t)).replace(/^(\D+)/,"$1 ")}function k(t=E.ADMIN){if(t===E.ADMIN){let o=document.getElementById("admin-nav"),n=document.getElementById("super-admin-nav");o&&(o.style.display="flex"),n&&n.remove()}else if(t===E.SUPER_ADMIN){let o=document.getElementById("admin-nav"),n=document.getElementById("super-admin-nav");n&&(n.style.display="flex"),o&&o.remove()}}function X(t){if(!t)return console.error("url does not cotnain gym id");let o=document.getElementById("navbar-home"),n=document.getElementById("navbar-finance"),i=document.getElementById("navbar-users"),c=document.getElementById("navbar-sessions");o&&o.setAttribute("href",`/admin/gym/g?gymCode=${t}`),n&&n.setAttribute("href",`/admin/gym/finance?gymCode=${t}`),i&&i.setAttribute("href",`/admin/gym/users?gymCode=${t}`),c&&c.setAttribute("href",`/admin/gym/sessions?gymCode=${t}`)}function v(t){if(!t)return console.error("gym data not found");let o=document.getElementById("gym-code-location"),n=document.getElementById("header-address"),i=document.getElementById("header-partner"),c=document.getElementById("header-contact"),u=document.getElementById("header-email");o&&(o.innerText=`${t.code} \u2022 ${t.location}`),n&&(n.innerText=t.address),i&&(i.innerText=t.partner),c&&(c.innerText=t.contact),u&&(u.innerText=t.partner_email)}function K(){let t=document.getElementById("loading-screen");t&&(t.style.display="none")}var O="/admin/sign-in",H="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/admin/gyms/";var P="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/admin/sessions/search/",G="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/admin/users/search/";function U({mode:t="API",clientObjRefName:o="name",data:n,token:i,API:c,extraXanoInputObj:u=[],searchContainerElId:x=""},s,e=null,a=null){let r,l,_;if(x.length>0){let m=document.getElementById(x);r=m.querySelector("#search-input"),r.setAttribute("placeholder","Search"),l=m.querySelector("#search-btn"),_=m.querySelector("#search-reset-btn")}else r=document.getElementById("search-input"),r.setAttribute("placeholder","Search"),l=document.getElementById("search-btn"),_=document.getElementById("search-reset-btn");_.onclick=()=>{r.value="",F(_,{mode:t,clientObjRefName:o,data:n,searchquery:"",token:i,API:c,extraXanoInputObj:u},s,e,a)},l.onclick=()=>{let m=r.value;F(_,{mode:t,clientObjRefName:o,data:n,searchquery:m,token:i,API:c,extraXanoInputObj:u},s,e,a)}}function F(l,_,m,p,N){return h(this,arguments,function*(t,{mode:o,clientObjRefName:n,data:i,searchquery:c,token:u,API:x,extraXanoInputObj:s=[]},e,a,r){if(c.length===0)t.style.display="none",a?e(i,a):e(i);else try{if(o==="API"){let d={search_query:`${c}:*`};s.length>0&&s.map(f=>{for(let[I,W]of Object.entries(f))d[I]=W});let A=yield S(x+"query","POST",d,u);if(A.isFetchOk!==void 0&&!A.isFetchOk)throw console.error(A.message),Error("API call failed");t.style.display="flex",a?e(A,a):e(A)}else{let d=i.filter(A=>A[n].toLowerCase().includes(c.toLowerCase()));t.style.display="flex",a?e(d,a):e(d)}}catch(d){r?r():console.error(d)}})}(()=>{let t,o;window.onload=function(){return h(this,null,function*(){M(O,"sidebar-logout-btn");var s=new URL(document.location.href);if(t=s.searchParams.get("gymCode")||null,t)X(t);else{console.error("No gym id found");return}let e=C();if(e){let r=yield S(H+t,"GET",!1,e);if(r.isFetchOk!==void 0&&!r.isFetchOk){console.error(r.message);return}let a=r,{team_role:l}=a,_=D(a,["team_role"]);l&&(l===E.SUPER_ADMIN||l===E.ADMIN)?(k(l),n(_,e)):R(`${O}?reason=UNAUTHORIZED_USER`)}else R(`${O}?reason=NOT_SIGNED_IN`)})};function n(s,e){return h(this,null,function*(){let{sessions:a,users:r,gym:l,finances:_,footfall:m}=s;l&&v(l);let p;o=_.some((d,A)=>{if(d.month===new Date().getMonth()+1)return p=A,!0})?_[p]:_[_.length-1],o===void 0&&(o=null),c(r,o,m),i(r,o,_,m),u(a.items,l.code),x(r.items),U({data:a,token:e,API:P,extraXanoInputObj:[{gym_id:t}]},u,l.code),U({data:r,token:e,API:G,searchContainerElId:"user-search-container",extraXanoInputObj:[{gym_id:t}]},x,l.code),K()})}function i(s,e,a,r){let l=document.getElementById("select-month");b(l),a.forEach((_,m)=>{var p=document.createElement("option");p.value=m,p.innerText=y[_.month-1]+", "+_.year,_.month===e.month&&(p.selected=!0),l.appendChild(p)}),l.onchange=_=>{e=a[_.target.value],e===void 0&&(e=null),c(s,e,r)}}function c(s=[],e=[],a=0){var r;e?(document.getElementById("gym-statistics-month-year").innerText=y[e.month-1]+" "+e.year,document.getElementById("financial-expenses").innerText=g(Number(e.additional_expenses)),document.getElementById("financial-revenue").innerText=g(Number(e.gross_revenue)+Number(e.additional_revenue)),document.getElementById("financial-profit").innerText=g(e.net_profit),document.getElementById("gym-statistics-total-members").innerText=(r=s==null?void 0:s.items)==null?void 0:r.length,$("#gym-statistics-completed-sessions").text(a||0),$("#gym-statistics-active-members").text(s.items.filter(l=>l.membership_status!=="INACTIVE"&&l.membership_status!=="TRIAL").length)):(document.getElementById("gym-statistics-month-year").innerText="This months data not found",document.getElementById("financial-expenses").innerText="No data found",document.getElementById("financial-revenue").innerText="No data found",document.getElementById("financial-profit").innerText="No data found")}function u(s,e){let a=document.getElementById("sessions-container"),r=a.querySelector("#table-item");function l(_){let m=a.querySelectorAll(".adb-user.w-inline-block");m.forEach((p,N)=>{N!==m.length-1&&p.remove()}),_.forEach((p,N)=>{var f,I;let d=r.cloneNode(!0);d.setAttribute("id",""),d.setAttribute("href",`/admin/session?sessionId=${p.id}`);let A=d.querySelectorAll(".colcontent");N%2===0&&(d.style.backgroundColor="#00edf4"),A[1].innerText=p.session_name,A[2].innerText=p.name||"-",A[3].innerText=e,A[4].innerText=w(p.time),A[5].innerText=L(p.time,!0),A[6].innerText=(I=(f=p==null?void 0:p.users)==null?void 0:f.length)!=null?I:0,A[7].innerText=p.status,d.style.display="flex",a.prepend(d)})}l(s),r.style.display="none"}function x(s){let e=document.getElementById("users-container"),a=e.querySelector("#table-item");function r(l){let _=e.querySelectorAll(".adb-user.w-inline-block");_.forEach((m,p)=>{p!==_.length-1&&m.remove()}),l.forEach((m,p)=>{let N=a.cloneNode(!0);N.setAttribute("id",""),N.setAttribute("href",`/admin/user?userId=${m.id}`),p%2===0&&(N.style.backgroundColor="#00edf4");let d=N.querySelectorAll(".colcontent");m.profile_picture&&(d[0].style.backgroundImage=`url(${m.profile_picture.url})`),d[1].innerText=m.name,d[2].innerText=m.membership_status||"INACTIVE",d[3].innerText=m.gender,d[4].innerText=B(m.date_of_birth),N.style.display="flex",e.prepend(N)})}r(s),a.style.display="none"}})();

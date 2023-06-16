var T=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var L=(t,n)=>{var e={};for(var o in t)F.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&T)for(var o of T(t))n.indexOf(o)<0&&W.call(t,o)&&(e[o]=t[o]);return e};var N=(t,n,e)=>new Promise((o,r)=>{var c=a=>{try{i(e.next(a))}catch(s){r(s)}},_=a=>{try{i(e.throw(a))}catch(s){r(s)}},i=a=>a.done?o(a.value):Promise.resolve(a.value).then(c,_);i((e=e.apply(t,n)).next())});var p={ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN",COACH:"COACH"};function f(t,n="GET",e=!1,o=!1,r=!1,c=!0){try{let _={"Content-Type":"application/json"};r&&(_={}),o&&(_.Authorization=`Bearer ${o}`);let i={method:n,headers:_};return e&&(c?i.body=JSON.stringify(e):i.body=e),fetch(t,i).then(a=>a.ok?a.json():a.json().then(s=>(Promise.reject(s.message),{isFetchOk:!1,status:a.status,message:s.message,payload:s&&s.payload?s.payload:null}))).then(a=>a).catch(a=>(console.error("Error in fetch",a),a))}catch(_){return console.error("Error!: "+_),_}}function S(t="nammax_auth"){let e=`; ${document.cookie}`.split(`; ${t}=`);return e.length===2?e.pop().split(";").shift():null}function x(t="/",n=2e3){setTimeout(()=>{window.location.href=t},n)}function w(t=null){if(t==null)return"NaN";let n=t.split("-"),e=Date.now()-new Date(parseInt(n[2]),parseInt(n[1])-1,parseInt(n[0])).getTime(),o=new Date(e);return Math.abs(o.getUTCFullYear()-1970)}function M(t="/admin/sign-in",n="sidebar-logout-btn"){let e=document.getElementById(n);e?e.onclick=()=>Y(t):console.error("Logout button not found")}function Y(t="/sign-in"){window.localStorage.removeItem("auth"),x(`${t}`)}function B(t=p.ADMIN){if(t===p.ADMIN){let n=document.getElementById("admin-nav"),e=document.getElementById("super-admin-nav");n&&(n.style.display="flex"),e&&e.remove()}else if(t===p.SUPER_ADMIN){let n=document.getElementById("admin-nav"),e=document.getElementById("super-admin-nav");e&&(e.style.display="flex"),n&&n.remove()}}function b(t){if(!t)return console.error("url does not cotnain gym id");let n=document.getElementById("navbar-home"),e=document.getElementById("navbar-finance"),o=document.getElementById("navbar-users"),r=document.getElementById("navbar-sessions");n&&n.setAttribute("href",`/admin/gym/g?gymCode=${t}`),e&&e.setAttribute("href",`/admin/gym/finance?gymCode=${t}`),o&&o.setAttribute("href",`/admin/gym/users?gymCode=${t}`),r&&r.setAttribute("href",`/admin/gym/sessions?gymCode=${t}`)}function k(t){if(!t)return console.error("gym data not found");let n=document.getElementById("gym-code-location"),e=document.getElementById("header-address"),o=document.getElementById("header-partner"),r=document.getElementById("header-contact"),c=document.getElementById("header-email");n&&(n.innerText=`${t.code} \u2022 ${t.location}`),e&&(e.innerText=t.address),o&&(o.innerText=t.partner),r&&(r.innerText=t.contact),c&&(c.innerText=t.partner_email)}function X(){let t=document.getElementById("loading-screen");t?t.remove():console.log("did not find loading screen")}function C(t){let n=new Date(t);return n.setMinutes(n.getMinutes()-n.getTimezoneOffset()),n}function I(t,n,e=!1){let o=864e5;return Math.round((C(n)-C(t))/o)}function v({mode:t="API",clientObjRefName:n="name",data:e,token:o,API:r,extraXanoInputObj:c=[],searchContainerElId:_=""},i,a=null,s=null){let l,A,m;if(_.length>0){let h=document.getElementById(_);l=h.querySelector("#search-input"),l.setAttribute("placeholder","Search"),A=h.querySelector("#search-btn"),m=h.querySelector("#search-reset-btn")}else l=document.getElementById("search-input"),l.setAttribute("placeholder","Search"),A=document.getElementById("search-btn"),m=document.getElementById("search-reset-btn");m.onclick=()=>{l.value="",K(m,{mode:t,clientObjRefName:n,data:e,searchquery:"",token:o,API:r,extraXanoInputObj:c},i,a,s)},A.onclick=()=>{let h=l.value;K(m,{mode:t,clientObjRefName:n,data:e,searchquery:h,token:o,API:r,extraXanoInputObj:c},i,a,s)}}function K(A,m,h,ct,mt){return N(this,arguments,function*(t,{mode:n,clientObjRefName:e,data:o,searchquery:r,token:c,API:_,extraXanoInputObj:i=[]},a,s,l){if(r.length===0)t.style.display="none",s?a(o,s):a(o);else try{if(n==="API"){let d={search_query:`${r}:*`};i.length>0&&i.map($=>{for(let[P,G]of Object.entries($))d[P]=G});let u=yield f(_+"query","POST",d,c);if(u.isFetchOk!==void 0&&!u.isFetchOk)throw console.error(u.message),Error("API call failed");t.style.display="flex",s?a(u,s):a(u)}else{let d=o.filter(u=>u[e].toLowerCase().includes(r.toLowerCase()));t.style.display="flex",s?a(d,s):a(d)}}catch(d){l?l():console.error(d)}})}var R="/admin/sign-in";var O="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/admin/users/";var H="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/admin/users/search/";var E,U=null,D=0,g=[];window.onload=function(){return N(this,null,function*(){M("/admin/sign-in","sidebar-logout-btn");var t=new URL(document.location.href);if(E=t.searchParams.get("gymCode")||null,E)b(E);else{console.error("No gym id found");return}let n=S();if(n){let o=yield f(O+E+"/1","GET",!1,n);if(o.isFetchOk!==void 0&&!o.isFetchOk){console.error(o.message),x(`${R}?reason=NOT_SIGNED_IN`);return}let e=o,{team_role:r}=e,c=L(e,["team_role"]);r&&(r===p.SUPER_ADMIN||r===p.ADMIN)?(B(r),q(c,n)):x(`${R}?reason=UNAUTHORIZED_USER`)}else x(`${R}?reason=NOT_SIGNED_IN`)})};function q(t,n){return N(this,null,function*(){let{users:e,gym:o}=t;o&&k(o),y(e),j(e,o),v({data:e,token:n,API:H,extraXanoInputObj:[{gym_id:E}]},y,o.code),X()})}function j(t,n){document.getElementById("total-capacity").innerText=n.capacity,document.getElementById("total-users").innerText=t.items.length,document.getElementById("active-sessions").innerText=n.sessions.length}function y(t,n=!1){let e=document.getElementById("table-container"),o=e.querySelector("#table-item");function r(c){U=c.nextPage;let _=e.querySelectorAll(".adb-user.w-inline-block");_.forEach((i,a)=>{a!==_.length-1&&i.remove()}),g.items.forEach((i,a)=>{let s=o.cloneNode(!0);s.setAttribute("id",""),s.setAttribute("href",`/admin/user?userId=${i.id}`);let l=s.querySelectorAll(".colcontent");if(a%2===0&&(s.style.backgroundColor="#00edf4"),i.profile_picture&&(l[0].style.backgroundImage=`url(${i.profile_picture.url})`),i!=null&&i.membership_end_date){let A=new Date(i.membership_end_date),m=new Date;(i==null?void 0:i.session_ledger)!==void 0&&i.session_ledger.length<=3?l[0].style.border="3px solid #009ca1":I(m,A,!0)<=3?l[0].style.border="3px solid red":I(m,A,!0)<=7&&(l[0].style.border="3px solid orange")}l[1].innerText=i.name,l[2].innerText=`Ends on ${i.membership_end_date}`||"INACTIVE",l[3].innerText=i.gender,l[4].innerText=w(i.date_of_birth),s.style.display="flex",e.prepend(s)})}n?(g.items.push(...t.items),g.nextPage=t.nextPage):g=t,r(g),o.style.display="none"}var z=new IntersectionObserver(t=>{t[0].intersectionRatio<=0||(D>0&&U?J(U):D<1&&D++)});z.observe(document.querySelector(".loadmore"));function J(t){return N(this,null,function*(){let n=S();if(n){let e=yield f(O+E+`/${t}`,"GET",!1,n);if(e.isFetchOk!==void 0&&!e.isFetchOk){console.error(e.message),e.payload&&e.payload.role===p.ADMIN&&e.payload.gyms&&e.payload.gyms.length>0?x(`/admin/gym/g?gymCode=${e.payload.gyms[0].gym_id}`):console.log("error fetching paginated");return}y(e.users,!0)}})}

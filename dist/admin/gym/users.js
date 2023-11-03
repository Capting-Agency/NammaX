var T=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var L=(e,o)=>{var t={};for(var n in e)F.call(e,n)&&o.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&T)for(var n of T(e))o.indexOf(n)<0&&k.call(e,n)&&(t[n]=e[n]);return t};var u=(e,o,t)=>new Promise((n,i)=>{var c=a=>{try{s(t.next(a))}catch(r){i(r)}},l=a=>{try{s(t.throw(a))}catch(r){i(r)}},s=a=>a.done?n(a.value):Promise.resolve(a.value).then(c,l);s((t=t.apply(e,o)).next())});var p={ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN",COACH:"COACH"};function h(e,o="GET",t=!1,n=!1,i=!1,c=!0){try{let l={"Content-Type":"application/json"};i&&(l={}),n&&(l.Authorization=`Bearer ${n}`);let s={method:o,headers:l};return t&&(c?s.body=JSON.stringify(t):s.body=t),fetch(e,s).then(a=>a.ok?a.json():a.json().then(r=>(Promise.reject(r.message),{isFetchOk:!1,status:a.status,message:r.message,payload:r&&r.payload?r.payload:null}))).then(a=>a).catch(a=>(console.error("Error in fetch",a),a))}catch(l){return console.error("Error!: "+l),l}}function O(e="nammax_auth"){let t=`; ${document.cookie}`.split(`; ${e}=`);return t.length===2?t.pop().split(";").shift():null}function N(e="/",o=2e3){setTimeout(()=>{window.location.href=e},o)}function B(e=null){if(e==null)return"NaN";let o=e.split("-"),t=Date.now()-new Date(parseInt(o[2]),parseInt(o[1])-1,parseInt(o[0])).getTime(),n=new Date(t);return Math.abs(n.getUTCFullYear()-1970)}function M(e="/admin/sign-in",o="sidebar-logout-btn"){let t=document.getElementById(o);t?t.onclick=()=>W(e):console.error("Logout button not found")}function W(e="/sign-in"){window.localStorage.removeItem("auth"),N(`${e}`)}function b(e=p.ADMIN){if(e===p.ADMIN){let o=document.getElementById("admin-nav"),t=document.getElementById("super-admin-nav");o&&(o.style.display="flex"),t&&t.remove()}else if(e===p.SUPER_ADMIN){let o=document.getElementById("admin-nav"),t=document.getElementById("super-admin-nav");t&&(t.style.display="flex"),o&&o.remove()}}function X(e){if(!e)return console.error("url does not cotnain gym id");let o=document.getElementById("navbar-home"),t=document.getElementById("navbar-finance"),n=document.getElementById("navbar-users"),i=document.getElementById("navbar-sessions");o&&o.setAttribute("href",`/admin/gym/g?gymCode=${e}`),t&&t.setAttribute("href",`/admin/gym/finance?gymCode=${e}`),n&&n.setAttribute("href",`/admin/gym/users?gymCode=${e}`),i&&i.setAttribute("href",`/admin/gym/sessions?gymCode=${e}`)}function j(e){if(!e)return console.error("gym data not found");let o=document.getElementById("gym-code-location"),t=document.getElementById("header-address"),n=document.getElementById("header-partner"),i=document.getElementById("header-contact"),c=document.getElementById("header-email");o&&(o.innerText=`${e.code} \u2022 ${e.location}`),t&&(t.innerText=e.address),n&&(n.innerText=e.partner),i&&(i.innerText=e.contact),c&&(c.innerText=e.partner_email)}function w(){let e=document.getElementById("loading-screen");e?e.remove():console.warn("Loading screen not found")}function C(e){let o=new Date(e);return o.setMinutes(o.getMinutes()-o.getTimezoneOffset()),o}function I(e,o,t=!1){let n=864e5;return Math.round((C(o)-C(e))/n)}function K({mode:e="API",clientObjRefName:o="name",data:t,token:n,API:i,extraXanoInputObj:c=[],searchContainerElId:l=""},s,a=null,r=null){let _,A,m;if(l.length>0){let E=document.getElementById(l);_=E.querySelector("#search-input"),_.setAttribute("placeholder","Search"),A=E.querySelector("#search-btn"),m=E.querySelector("#search-reset-btn")}else _=document.getElementById("search-input"),_.setAttribute("placeholder","Search"),A=document.getElementById("search-btn"),m=document.getElementById("search-reset-btn");m.onclick=()=>{_.value="",z(m,{mode:e,clientObjRefName:o,data:t,searchquery:"",token:n,API:i,extraXanoInputObj:c},s,a,r)},A.onclick=()=>{let E=_.value;z(m,{mode:e,clientObjRefName:o,data:t,searchquery:E,token:n,API:i,extraXanoInputObj:c},s,a,r)}}function z(A,m,E,Ae,ue){return u(this,arguments,function*(e,{mode:o,clientObjRefName:t,data:n,searchquery:i,token:c,API:l,extraXanoInputObj:s=[]},a,r,_){if(i.length===0)e.style.display="none",r?a(n,r):a(n);else try{if(o==="API"){let x={search_query:`${i}:*`};s.length>0&&s.map(v=>{for(let[$,G]of Object.entries(v))x[$]=G});let d=yield h(l+"query","POST",x,c);if(d.isFetchOk!==void 0&&!d.isFetchOk)throw console.error(d.message),Error("API call failed");e.style.display="flex",r?a(d,r):a(d)}else{let x=n.filter(d=>d[t].toLowerCase().includes(i.toLowerCase()));e.style.display="flex",r?a(x,r):a(x)}}catch(x){_?_():console.error(x)}})}var R="/admin/sign-in";var S="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/admin/users/";var H="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/admin/users/search/";var Y="https://www.nammacrossfit.com",P=Y;var ie=`${P}/sign-up-2`;var _e=`${P}/user/dashboard`;var f,U=null,D=0,g=[];window.onload=function(){return u(this,null,function*(){M("/admin/sign-in","sidebar-logout-btn");var e=new URL(document.location.href);if(f=e.searchParams.get("gymCode")||null,f)X(f);else{console.error("No gym id found");return}let o=O();if(o){let n=yield h(S+f+"/1","GET",!1,o);if(n.isFetchOk!==void 0&&!n.isFetchOk){console.error(n.message),N(`${R}?reason=NOT_SIGNED_IN`);return}let t=n,{team_role:i}=t,c=L(t,["team_role"]);i&&(i===p.SUPER_ADMIN||i===p.ADMIN)?(b(i),q(c,o)):N(`${R}?reason=UNAUTHORIZED_USER`)}else N(`${R}?reason=NOT_SIGNED_IN`)})};function q(e,o){return u(this,null,function*(){let{users:t,gym:n}=e;n&&j(n),y(t),V(t,n),K({data:t,token:o,API:H,extraXanoInputObj:[{gym_id:f}]},y,n.code),w()})}function V(e,o){document.getElementById("total-capacity").innerText=o.capacity,document.getElementById("total-users").innerText=e.items.length,document.getElementById("active-sessions").innerText=o.sessions.length}function y(e,o=!1){let t=document.getElementById("table-container"),n=t.querySelector("#table-item");function i(c){U=c.nextPage;let l=t.querySelectorAll(".adb-user.w-inline-block");l.forEach((s,a)=>{a!==l.length-1&&s.remove()}),g.items.forEach((s,a)=>{let r=n.cloneNode(!0);r.setAttribute("id",""),r.setAttribute("href",`/admin/user?userId=${s.id}`);let _=r.querySelectorAll(".colcontent");if(a%2===0&&(r.style.backgroundColor="#00edf4"),s.profile_picture&&(_[0].style.backgroundImage=`url(${s.profile_picture.url})`),s!=null&&s.membership_end_date){let A=new Date(s.membership_end_date),m=new Date;(s==null?void 0:s.session_ledger)!==void 0&&s.session_ledger.length<=3?_[0].style.border="3px solid #009ca1":I(m,A,!0)<=3?_[0].style.border="3px solid red":I(m,A,!0)<=7&&(_[0].style.border="3px solid orange")}_[1].innerText=s.name,_[2].innerText=s.membership_end_date?`Ends on ${s.membership_end_date}`:"INACTIVE",_[3].innerText=s.gender,_[4].innerText=B(s.date_of_birth),r.style.display="flex",t.prepend(r)})}o?(g.items.push(...e.items),g.nextPage=e.nextPage):g=e,i(g),n.style.display="none"}var J=new IntersectionObserver(e=>{e[0].intersectionRatio<=0||(D>0&&U?Q(U):D<1&&D++)});J.observe(document.querySelector(".loadmore"));function Q(e){return u(this,null,function*(){let o=O();if(o){let t=yield h(S+f+`/${e}`,"GET",!1,o);if(t.isFetchOk!==void 0&&!t.isFetchOk){console.error(t.message),t.payload&&t.payload.role===p.ADMIN&&t.payload.gyms&&t.payload.gyms.length>0?N(`/admin/gym/g?gymCode=${t.payload.gyms[0].gym_id}`):console.error("error fetching paginated");return}y(t.users,!0)}})}

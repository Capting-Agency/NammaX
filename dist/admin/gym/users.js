var y=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var T=(t,n)=>{var e={};for(var o in t)P.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&y)for(var o of y(t))n.indexOf(o)<0&&G.call(t,o)&&(e[o]=t[o]);return e};var d=(t,n,e)=>new Promise((o,s)=>{var _=i=>{try{r(e.next(i))}catch(a){s(a)}},l=i=>{try{r(e.throw(i))}catch(a){s(a)}},r=i=>i.done?o(i.value):Promise.resolve(i.value).then(_,l);r((e=e.apply(t,n)).next())});var m={ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN",COACH:"COACH"};function h(t,n="GET",e=!1,o=!1,s=!1,_=!0){try{let l={"Content-Type":"application/json"};s&&(l={}),o&&(l.Authorization=`Bearer ${o}`);let r={method:n,headers:l};return e&&(_?r.body=JSON.stringify(e):r.body=e),fetch(t,r).then(i=>i.ok?i.json():i.json().then(a=>(Promise.reject(a.message),{isFetchOk:!1,status:i.status,message:a.message,payload:a&&a.payload?a.payload:null}))).then(i=>i).catch(i=>(console.error("Error in fetch",i),i))}catch(l){return console.error("Error!: "+l),l}}function S(t="nammax_auth"){let e=`; ${document.cookie}`.split(`; ${t}=`);return e.length===2?e.pop().split(";").shift():null}function A(t="/",n=2e3){setTimeout(()=>{window.location.href=t},n)}function L(t=null){if(t==null)return"NaN";let n=t.split("-"),e=Date.now()-new Date(parseInt(n[2]),parseInt(n[1])-1,parseInt(n[0])).getTime(),o=new Date(e);return Math.abs(o.getUTCFullYear()-1970)}function C(t="/admin/sign-in",n="sidebar-logout-btn"){let e=document.getElementById(n);e?e.onclick=()=>F(t):console.error("Logout button not found")}function F(t="/sign-in"){window.localStorage.removeItem("auth"),A(`${t}`)}function w(t=m.ADMIN){if(t===m.ADMIN){let n=document.getElementById("admin-nav"),e=document.getElementById("super-admin-nav");n&&(n.style.display="flex"),e&&e.remove()}else if(t===m.SUPER_ADMIN){let n=document.getElementById("admin-nav"),e=document.getElementById("super-admin-nav");e&&(e.style.display="flex"),n&&n.remove()}}function B(t){if(!t)return console.error("url does not cotnain gym id");let n=document.getElementById("navbar-home"),e=document.getElementById("navbar-finance"),o=document.getElementById("navbar-users"),s=document.getElementById("navbar-sessions");n&&n.setAttribute("href",`/admin/gym/g?gymCode=${t}`),e&&e.setAttribute("href",`/admin/gym/finance?gymCode=${t}`),o&&o.setAttribute("href",`/admin/gym/users?gymCode=${t}`),s&&s.setAttribute("href",`/admin/gym/sessions?gymCode=${t}`)}function M(t){if(!t)return console.error("gym data not found");let n=document.getElementById("gym-code-location"),e=document.getElementById("header-address"),o=document.getElementById("header-partner"),s=document.getElementById("header-contact"),_=document.getElementById("header-email");n&&(n.innerText=`${t.code} \u2022 ${t.location}`),e&&(e.innerText=t.address),o&&(o.innerText=t.partner),s&&(s.innerText=t.contact),_&&(_.innerText=t.partner_email)}function k(){let t=document.getElementById("loading-screen");t?t.remove():console.log("did not find loading screen")}function X({mode:t="API",clientObjRefName:n="name",data:e,token:o,API:s,extraXanoInputObj:_=[],searchContainerElId:l=""},r,i=null,a=null){let c,R,x;if(l.length>0){let E=document.getElementById(l);c=E.querySelector("#search-input"),c.setAttribute("placeholder","Search"),R=E.querySelector("#search-btn"),x=E.querySelector("#search-reset-btn")}else c=document.getElementById("search-input"),c.setAttribute("placeholder","Search"),R=document.getElementById("search-btn"),x=document.getElementById("search-reset-btn");x.onclick=()=>{c.value="",b(x,{mode:t,clientObjRefName:n,data:e,searchquery:"",token:o,API:s,extraXanoInputObj:_},r,i,a)},R.onclick=()=>{let E=c.value;b(x,{mode:t,clientObjRefName:n,data:e,searchquery:E,token:o,API:s,extraXanoInputObj:_},r,i,a)}}function b(R,x,E,lt,_t){return d(this,arguments,function*(t,{mode:n,clientObjRefName:e,data:o,searchquery:s,token:_,API:l,extraXanoInputObj:r=[]},i,a,c){if(s.length===0)t.style.display="none",a?i(o,a):i(o);else try{if(n==="API"){let p={search_query:`${s}:*`};r.length>0&&r.map(v=>{for(let[H,$]of Object.entries(v))p[H]=$});let u=yield h(l+"query","POST",p,_);if(u.isFetchOk!==void 0&&!u.isFetchOk)throw console.error(u.message),Error("API call failed");t.style.display="flex",a?i(u,a):i(u)}else{let p=o.filter(u=>u[e].toLowerCase().includes(s.toLowerCase()));t.style.display="flex",a?i(p,a):i(p)}}catch(p){c?c():console.error(p)}})}var g="/admin/sign-in";var I="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/admin/users/";var K="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/admin/users/search/";var N,U=null,O=0,f=[];window.onload=function(){return d(this,null,function*(){C("/admin/sign-in","sidebar-logout-btn");var t=new URL(document.location.href);if(N=t.searchParams.get("gymCode")||null,N)B(N);else{console.error("No gym id found");return}let n=S();if(n){let o=yield h(I+N+"/1","GET",!1,n);if(o.isFetchOk!==void 0&&!o.isFetchOk){console.error(o.message),A(`${g}?reason=NOT_SIGNED_IN`);return}let e=o,{team_role:s}=e,_=T(e,["team_role"]);s&&(s===m.SUPER_ADMIN||s===m.ADMIN)?(w(s),W(_,n)):A(`${g}?reason=UNAUTHORIZED_USER`)}else A(`${g}?reason=NOT_SIGNED_IN`)})};function W(t,n){return d(this,null,function*(){let{users:e,gym:o}=t;o&&M(o),D(e),Y(e,o),X({data:e,token:n,API:K,extraXanoInputObj:[{gym_id:N}]},D,o.code),k()})}function Y(t,n){document.getElementById("total-capacity").innerText=n.capacity,document.getElementById("total-users").innerText=t.items.length,document.getElementById("active-sessions").innerText=n.sessions.length}function D(t,n=!1){let e=document.getElementById("table-container"),o=e.querySelector("#table-item");function s(_){U=_.nextPage;let l=e.querySelectorAll(".adb-user.w-inline-block");l.forEach((r,i)=>{i!==l.length-1&&r.remove()}),f.items.forEach((r,i)=>{let a=o.cloneNode(!0);a.setAttribute("id",""),a.setAttribute("href",`/admin/user?userId=${r.id}`);let c=a.querySelectorAll(".colcontent");i%2===0&&(a.style.backgroundColor="#00edf4"),r.profile_picture&&(c[0].style.backgroundImage=`url(${r.profile_picture.url})`),c[1].innerText=r.name,c[2].innerText=`Ends on ${r.membership_end_date}`||"INACTIVE",c[3].innerText=r.gender,c[4].innerText=L(r.date_of_birth),a.style.display="flex",e.prepend(a)})}n?(f.items.push(...t.items),f.nextPage=t.nextPage):f=t,s(f),o.style.display="none"}var q=new IntersectionObserver(t=>{t[0].intersectionRatio<=0||(O>0&&U?j(U):O<1&&O++)});q.observe(document.querySelector(".loadmore"));function j(t){return d(this,null,function*(){let n=S();if(n){let e=yield h(I+N+`/${t}`,"GET",!1,n);if(e.isFetchOk!==void 0&&!e.isFetchOk){console.error(e.message),e.payload&&e.payload.role===m.ADMIN&&e.payload.gyms&&e.payload.gyms.length>0?A(`/admin/gym/g?gymCode=${e.payload.gyms[0].gym_id}`):console.log("error fetching paginated");return}D(e.users,!0)}})}

var S=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var I=(t,o)=>{var e={};for(var n in t)H.call(t,n)&&o.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&S)for(var n of S(t))o.indexOf(n)<0&&P.call(t,n)&&(e[n]=t[n]);return e};var N=(t,o,e)=>new Promise((n,s)=>{var l=i=>{try{r(e.next(i))}catch(a){s(a)}},c=i=>{try{r(e.throw(i))}catch(a){s(a)}},r=i=>i.done?n(i.value):Promise.resolve(i.value).then(l,c);r((e=e.apply(t,o)).next())});var d={ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN",COACH:"COACH"};function E(t,o="GET",e=!1,n=!1,s=!1,l=!0){try{let c={"Content-Type":"application/json"};s&&(c={}),n&&(c.Authorization=`Bearer ${n}`);let r={method:o,headers:c};return e&&(l?r.body=JSON.stringify(e):r.body=e),fetch(t,r).then(i=>i.ok?i.json():i.json().then(a=>(Promise.reject(a.message),{isFetchOk:!1,status:i.status,message:a.message,payload:a&&a.payload?a.payload:null}))).then(i=>i).catch(i=>(console.error("Error in fetch",i),i))}catch(c){return console.error("Error!: "+c),c}}function O(t="nammax_auth"){let e=`; ${document.cookie}`.split(`; ${t}=`);return e.length===2?e.pop().split(";").shift():null}function h(t="/",o=0){setTimeout(()=>{window.location.href=t},o)}function g(t=null,o=!1){if(t==null)return"NaN";var e=new Date(t),n=e.getHours(),s=n>=12?"PM":"AM";if(n=n%12||12,o){var l=e.getMinutes();return l=l<10?`0${l}`:l,`${n}:${l} ${s}`}else return`${n} ${s}`}function U(t=null){if(t==null)return"NaN";let o=new Date(t);return`${o.getDate()}/${o.getMonth()+1}/${o.getFullYear()}`}function y(t,o=null){if(t!=null){var e,n=t.options.length-1;for(e=n;e>=0;e--)e!==o&&t.remove(e)}}function D(t="/admin/sign-in",o="sidebar-logout-btn"){let e=document.getElementById(o);e?e.onclick=()=>G(t):console.error("Logout button not found")}function G(t="/sign-in"){window.localStorage.removeItem("auth"),h(`${t}`)}function T(t=d.ADMIN){if(t===d.ADMIN){let o=document.getElementById("admin-nav"),e=document.getElementById("super-admin-nav");o&&(o.style.display="flex"),e&&e.remove()}else if(t===d.SUPER_ADMIN){let o=document.getElementById("admin-nav"),e=document.getElementById("super-admin-nav");e&&(e.style.display="flex"),o&&o.remove()}}function C({mode:t="API",clientObjRefName:o="name",data:e,token:n,API:s,extraXanoInputObj:l=[],searchContainerElId:c=""},r,i=null,a=null){let _,A,m;if(c.length>0){let x=document.getElementById(c);_=x.querySelector("#search-input"),_.setAttribute("placeholder","Search"),A=x.querySelector("#search-btn"),m=x.querySelector("#search-reset-btn")}else _=document.getElementById("search-input"),_.setAttribute("placeholder","Search"),A=document.getElementById("search-btn"),m=document.getElementById("search-reset-btn");m.onclick=()=>{_.value="",L(m,{mode:t,clientObjRefName:o,data:e,searchquery:"",token:n,API:s,extraXanoInputObj:l},r,i,a)},A.onclick=()=>{let x=_.value;L(m,{mode:t,clientObjRefName:o,data:e,searchquery:x,token:n,API:s,extraXanoInputObj:l},r,i,a)}}function L(A,m,x,at,rt){return N(this,arguments,function*(t,{mode:o,clientObjRefName:e,data:n,searchquery:s,token:l,API:c,extraXanoInputObj:r=[]},i,a,_){if(s.length===0)t.style.display="none",a?i(n,a):i(n);else try{if(o==="API"){let p={search_query:`${s}:*`};r.length>0&&r.map(X=>{for(let[v,K]of Object.entries(X))p[v]=K});let u=yield E(c+"query","POST",p,l);if(u.isFetchOk!==void 0&&!u.isFetchOk)throw console.error(u.message),Error("API call failed");t.style.display="flex",a?i(u,a):i(u)}else{let p=n.filter(u=>u[e].toLowerCase().includes(s.toLowerCase()));t.style.display="flex",a?i(p,a):i(p)}}catch(p){_?_():console.error(p)}})}var f="/admin/sign-in";var w="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/admin/team_detail/",M="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/admin/team_detail/search/";var R,b;window.onload=function(){return N(this,null,function*(){D(f,"sidebar-logout-btn");var t=new URL(document.location.href);if(R=t.searchParams.get("teamId")||null,!R){console.error("No team id found");return}let o=O();if(o){let n=yield E(w+R,"GET",!1,o);if(n.isFetchOk!==void 0&&!n.isFetchOk){console.error(n.message);return}let e=n,{team_role:s}=e,l=I(e,["team_role"]);s&&(s===d.SUPER_ADMIN||s===d.ADMIN)?(T(s),F(l,o)):h(`${f}?reason=UNAUTHORIZED_USER`)}else h(`${f}?reason=NOT_SIGNED_IN`)})};function F(t,o){return N(this,null,function*(){let{sessions:e,team:n}=t;if(n.gyms.length>0&&n.gyms[0].gym_id)b=n.gyms[0].gym_id;else{console.error("No gym id found");return}W(n),B(e,n.name),C({data:e,token:o,API:M,extraXanoInputObj:[{team_id:n.id}]},B,n.name)})}function W(t){var n;$("#team-detail-name").text(t.name),$("#team-detail-email").text(t.email),$("#team-detail-gender").text("NaN"),$("#team-detail-number").text(t.contact_number),$("#team-detail-dob").text("NaN");let o=document.getElementById("team-detail-gym");if(y(o),t.gyms.length===0){var e=document.createElement("option");e.value="No gyms",e.innerText="No gyms",o.appendChild(e)}else(n=t==null?void 0:t.gyms)==null||n.forEach(s=>{var l=document.createElement("option");l.value=s.id,l.innerText=s.location,o.appendChild(l)})}function B(t,o){let e=document.getElementById("table-container"),n=e.querySelector("#table-item");function s(l){let c=e.querySelectorAll(".adb-user.w-inline-block");c.forEach((r,i)=>{i!==c.length-1&&r.remove()}),l.forEach((r,i)=>{var A,m;let a=n.cloneNode(!0);a.setAttribute("id",""),a.setAttribute("href",`/admin/session?sessionId=${r.id}`);let _=a.querySelectorAll(".colcontent");i%2===0&&(a.style.backgroundColor="#00edf4"),_[1].innerText=r.session_name,_[2].innerText=o,_[3].innerText=r.code,_[4].innerText=U(r.time),_[5].innerText=g(r.time,!0),_[6].innerText=(m=(A=r==null?void 0:r.users)==null?void 0:A.length)!=null?m:0,_[7].innerText=r.status,a.style.display="flex",e.prepend(a)})}s(t),n.style.display="none"}var k=k||[];k.push(function(){$(document).off("submit"),$("form").on("submit",function(t){return N(this,null,function*(){t.preventDefault(),$(this).attr("id")==="team-detail-form-block"&&console.log(b)})})});

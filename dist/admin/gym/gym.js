var j=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var z=(e,n)=>{var o={};for(var s in e)se.call(e,s)&&n.indexOf(s)<0&&(o[s]=e[s]);if(e!=null&&j)for(var s of j(e))n.indexOf(s)<0&&re.call(e,s)&&(o[s]=e[s]);return o};var y=(e,n,o)=>new Promise((s,c)=>{var m=t=>{try{l(o.next(t))}catch(r){c(r)}},i=t=>{try{l(o.throw(t))}catch(r){c(r)}},l=t=>t.done?s(t.value):Promise.resolve(t.value).then(m,i);l((o=o.apply(e,n)).next())});var K=["Male","Female","Other","Prefer not to say"];var C=["January","February","March","April","May","June","July","August","September","October","November","December"],S={ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN",COACH:"COACH"},h=["DROPOUT","NO SHOW","NEW USER","TRIAL","NO RENEWAL","NO MEMBERSHIP"];function O(e,n="GET",o=!1,s=!1,c=!1,m=!0){try{let i={"Content-Type":"application/json"};c&&(i={}),s&&(i.Authorization=`Bearer ${s}`);let l={method:n,headers:i};return o&&(m?l.body=JSON.stringify(o):l.body=o),fetch(e,l).then(t=>t.ok?t.json():t.json().then(r=>(Promise.reject(r.message),{isFetchOk:!1,status:t.status,message:r.message,payload:r&&r.payload?r.payload:null}))).then(t=>t).catch(t=>(console.error("Error in fetch",t),t))}catch(i){return console.error("Error!: "+i),i}}function H(e="nammax_auth"){let o=`; ${document.cookie}`.split(`; ${e}=`);return o.length===2?o.pop().split(";").shift():null}function D(e="/",n=2e3){setTimeout(()=>{window.location.href=e},n)}function F(e=null,n=!1,o=!1,s=!1){if(e==null)return"NaN";let c=new Date,m=new Date(e),i=m.getHours(),l="";if(s||(l=i>=12?"PM":"AM",i=i%12||12),n){let t=m.getMinutes();return t=t<10?`0${t}`:t,o?`${c.getDate()===m.getDate()?"Today At":c.getDate()+1===m.getDate()?"Tomorrow At":c.getDate()+2===m.getDate()?"Day After Tomorrow At":R(e)} ${i}:${t} ${l}`:`${i}:${t} ${l}`}else return o?`${c.getDate()===m.getDate()?"Today At":c.getDate()+1===m.getDate()?"Tomorrow At":c.getDate()+2===m.getDate()?"Day After Tomorrow At":R(e)} ${i} ${l}`:`${R(e)} ${i} ${l}`}function R(e=null){if(e==null)return"NaN";let n=new Date(e);return`${n.getDate()}/${n.getMonth()+1}/${n.getFullYear()}`}function G(e=null){if(e==null)return"NaN";let n=e.split("-"),o=Date.now()-new Date(parseInt(n[2]),parseInt(n[1])-1,parseInt(n[0])).getTime(),s=new Date(o);return Math.abs(s.getUTCFullYear()-1970)}function k(e,n=null){if(e!=null){var o,s=e.options.length-1;for(o=s;o>=0;o--)o!==n&&e.remove(o)}}function q(e="/admin/sign-in",n="sidebar-logout-btn"){let o=document.getElementById(n);o?o.onclick=()=>ae(e):console.error("Logout button not found")}function ae(e="/sign-in"){window.localStorage.removeItem("auth"),D(`${e}`)}function T(e=0){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"}).format(Number(e)).replace(/^(\D+)/,"$1 ")}function W(e=new Date,n=0){let o=e;return o&&o.setDate(o.getDate()+n),o}function Y(e=S.ADMIN){if(e===S.ADMIN){let n=document.getElementById("admin-nav"),o=document.getElementById("super-admin-nav");n&&(n.style.display="flex"),o&&o.remove()}else if(e===S.SUPER_ADMIN){let n=document.getElementById("admin-nav"),o=document.getElementById("super-admin-nav");o&&(o.style.display="flex"),n&&n.remove()}}function V(e){if(!e)return console.error("url does not cotnain gym id");let n=document.getElementById("navbar-home"),o=document.getElementById("navbar-finance"),s=document.getElementById("navbar-users"),c=document.getElementById("navbar-sessions");n&&n.setAttribute("href",`/admin/gym/g?gymCode=${e}`),o&&o.setAttribute("href",`/admin/gym/finance?gymCode=${e}`),s&&s.setAttribute("href",`/admin/gym/users?gymCode=${e}`),c&&c.setAttribute("href",`/admin/gym/sessions?gymCode=${e}`)}function J(e){if(!e)return console.error("gym data not found");let n=document.getElementById("gym-code-location"),o=document.getElementById("header-address"),s=document.getElementById("header-partner"),c=document.getElementById("header-contact"),m=document.getElementById("header-email");n&&(n.innerText=`${e.code} \u2022 ${e.location}`),o&&(o.innerText=e.address),s&&(s.innerText=e.partner),c&&(c.innerText=e.contact),m&&(m.innerText=e.partner_email)}function Q(){let e=document.getElementById("loading-screen");e?e.remove():console.log("did not find loading screen")}function P(e){let n=new Date(e);return n.setMinutes(n.getMinutes()-n.getTimezoneOffset()),n}function L(e,n,o=!1){let s=864e5;return Math.round((P(n)-P(e))/s)}var U="/admin/sign-in",Z="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/admin/gyms/";var ee="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/admin/sessions/search/",b="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/admin/users/search/";function B({mode:e="API",clientObjRefName:n="name",data:o,token:s,API:c,extraXanoInputObj:m=[],searchContainerElId:i=""},l,t=null,r=null){let _,u,x;if(i.length>0){let a=document.getElementById(i);_=a.querySelector("#search-input"),_.setAttribute("placeholder","Search"),u=a.querySelector("#search-btn"),x=a.querySelector("#search-reset-btn")}else _=document.getElementById("search-input"),_.setAttribute("placeholder","Search"),u=document.getElementById("search-btn"),x=document.getElementById("search-reset-btn");x.onclick=()=>{_.value="",te(x,{mode:e,clientObjRefName:n,data:o,searchquery:"",token:s,API:c,extraXanoInputObj:m},l,t,r)},u.onclick=()=>{let a=_.value;te(x,{mode:e,clientObjRefName:n,data:o,searchquery:a,token:s,API:c,extraXanoInputObj:m},l,t,r)}}function te(u,x,a,d,A){return y(this,arguments,function*(e,{mode:n,clientObjRefName:o,data:s,searchquery:c,token:m,API:i,extraXanoInputObj:l=[]},t,r,_){if(c.length===0)e.style.display="none",r?t(s,r):t(s);else try{if(n==="API"){let p={search_query:`${c}:*`};l.length>0&&l.map(N=>{for(let[E,I]of Object.entries(N))p[E]=I});let f=yield O(i+"query","POST",p,m);if(f.isFetchOk!==void 0&&!f.isFetchOk)throw console.error(f.message),Error("API call failed");e.style.display="flex",r?t(f,r):t(f)}else{let p=s.filter(f=>f[o].toLowerCase().includes(c.toLowerCase()));e.style.display="flex",r?t(p,r):t(p)}}catch(p){_?_():console.error(p)}})}function M({tag:e="gym",API:n=null,parentTableName:o="user-table-subscription-header",tableColumnContainerName:s="user-table-gym-header",extraXanoInputObj:c=[],filterData:m=null,searchContainerElId:i="",token:l},t){if(!m){console.error("No Filter Data provided");return}let r=document.getElementById(s);if(!r){console.error("Failed to find column container");return}let _=r.querySelector("#filter-search");if(!_){console.error("Failed to find column filter");return}le(s,_,m),r.onclick=d=>{d.stopPropagation(),_.style.display="block"};let u=_.querySelector("#close-btn");u?u.onclick=d=>{d.stopPropagation(),_.style.display="none"}:console.error("Failed to find close btn");let x=r.querySelector("#filter-btn");if(!x){console.error("Failed to find submit filter btn");return}x.onclick=()=>{let d=_.querySelector(`input[name="${s}"]:checked`).value,A;i.length>0?A=document.getElementById(i).querySelector("#search-input"):A=document.getElementById("search-input"),ie(e,d,n,t,l,A.value,o,s,_,c)};let a=r.querySelector("#reset-filter-btn");if(!a){console.error("Failed to find reset filter btn");return}a.onclick=d=>{d.stopPropagation(),ne("","",n,t,l,"",c),oe("hide",o,s,_)}}function ie(e,n,o,s,c,m,i,l,t,r){return y(this,null,function*(){ne(e,n,o,s,c,m,r),oe("show",i,l,t)})}function ne(l,t,r,_,u,x){return y(this,arguments,function*(e,n,o,s,c,m,i=[]){let a={search_query:(m==null?void 0:m.length)>0?`${m}:*`:"",tag:e,filter:n||""};i.length>0&&i.map(A=>{for(let[p,f]of Object.entries(A))a[p]=f});let d=yield O(o+"query","POST",a,c);if(d.isFetchOk!==void 0&&!d.isFetchOk)throw console.error(d.message),Error("API call failed");s&&s(d)})}function oe(e="show",n,o,s){let c=document.getElementById(n);if(!c){console.error("Could not find parent table name");return}if(c.querySelectorAll(".text-w").forEach(i=>{i.style.textDecoration="none"}),e==="show"){let i=document.getElementById(o);if(!i){console.error("Could not find column name");return}i.style.textDecoration="underline",s.querySelector("#reset-filter-btn").style.display="block"}else e==="hide"&&(s.querySelector("#reset-filter-btn").style.display="none");setTimeout(()=>{s.style.display="none"},500)}function le(e,n,o){let s=n.querySelector("label");o.forEach(c=>{let m=s.cloneNode(!0),i=m.querySelector("input"),l=m.querySelector("span");i.value=c.value,i.name=e,l.innerText=c.text,n.prepend(m)}),s.remove()}(()=>{let e,n;window.onload=function(){return y(this,null,function*(){q(U,"sidebar-logout-btn");var l=new URL(document.location.href);if(e=l.searchParams.get("gymCode")||null,e)V(e);else{console.error("No gym id found");return}let t=H();if(t){let _=yield O(Z+e,"GET",!1,t);if(_.isFetchOk!==void 0&&!_.isFetchOk){console.error(_.message);return}let r=_,{team_role:u}=r,x=z(r,["team_role"]);u&&(u===S.SUPER_ADMIN||u===S.ADMIN)?(Y(u),o(x,t)):D(`${U}?reason=UNAUTHORIZED_USER`)}else D(`${U}?reason=NOT_SIGNED_IN`)})};function o(l,t){return y(this,null,function*(){let{sessions:r,users:_,gym:u,finances:x,footfall:a}=l;u&&J(u);let d;n=x.some((p,f)=>{if(p.month===new Date().getMonth()+1)return d=f,!0})?x[d]:x[x.length-1],n===void 0&&(n=null),c(_,n,a),s(_,n,x,a),m(r.items,u.code),i(_),B({data:r,token:t,API:ee,extraXanoInputObj:[{gym_id:e}]},m,u.code),B({data:_,token:t,API:b,searchContainerElId:"user-search-container",extraXanoInputObj:[{gym_id:e}]},i,u.code),M({tag:"subscription",parentTableName:"user-table-header-container",tableColumnContainerName:"user-table-subscription-header",filterData:h.map(p=>({text:p,value:p})),extraXanoInputObj:[{gym_id:e}],token:t,API:b},i),M({tag:"gender",parentTableName:"user-table-header-container",tableColumnContainerName:"user-table-gender-header",filterData:K.map(p=>({text:p,value:p})),extraXanoInputObj:[{gym_id:e}],token:t,API:b},i),Q()})}function s(l,t,r,_){let u=document.getElementById("select-month");k(u),r.forEach((x,a)=>{var d=document.createElement("option");d.value=a,d.innerText=C[x.month-1]+", "+x.year,x.month===t.month&&(d.selected=!0),u.appendChild(d)}),u.onchange=x=>{t=r[x.target.value],t===void 0&&(t=null),c(l,t,_)}}function c(l=[],t=[],r=0){var _;t?(document.getElementById("gym-statistics-month-year").innerText=C[t.month-1]+" "+t.year,document.getElementById("financial-expenses").innerText=T(Number(t.additional_expenses)),document.getElementById("financial-revenue").innerText=T(Number(t.gross_revenue)+Number(t.additional_revenue)),document.getElementById("financial-profit").innerText=T(t.net_profit),document.getElementById("gym-statistics-total-members").innerText=(_=l==null?void 0:l.items)==null?void 0:_.length,$("#gym-statistics-completed-sessions").text(r||0),$("#gym-statistics-active-members").text(l.items.filter(u=>u.membership_status!=="INACTIVE").length)):(document.getElementById("gym-statistics-month-year").innerText="This months data not found",document.getElementById("financial-expenses").innerText="No data found",document.getElementById("financial-revenue").innerText="No data found",document.getElementById("financial-profit").innerText="No data found")}function m(l,t){let r=document.getElementById("sessions-container"),_=r.querySelector("#table-item");function u(x){let a=r.querySelectorAll(".adb-user.w-inline-block");a.forEach((d,A)=>{A!==a.length-1&&d.remove()}),x.forEach((d,A)=>{var N,E;let p=_.cloneNode(!0);p.setAttribute("id",""),p.setAttribute("href",`/admin/session?sessionId=${d.id}`);let f=p.querySelectorAll(".colcontent");A%2===0&&(p.style.backgroundColor="#00edf4"),f[1].innerText=d.session_name,f[2].innerText=d.name||"-",f[3].innerText=t,f[4].innerText=R(d.time),f[5].innerText=F(d.time,!0),f[6].innerText=(E=(N=d==null?void 0:d.users)==null?void 0:N.length)!=null?E:0,f[7].innerText=d.status,p.style.display="flex",r.prepend(p)})}u(l),_.style.display="none"}function i(l){let t=document.getElementById("users-container"),r=t.querySelector("#table-item");function _(u){let x=t.querySelectorAll(".adb-user.w-inline-block");x.forEach((a,d)=>{d!==x.length-1&&a.remove()}),u.items.forEach((a,d)=>{let A=r.cloneNode(!0);A.setAttribute("id",""),A.setAttribute("href",`/admin/user?userId=${a.id}`),d%2===0&&(A.style.backgroundColor="#00edf4");let p=A.querySelectorAll(".colcontent");if(a.profile_picture&&(p[0].style.backgroundImage=`url(${a.profile_picture.url})`),a.membership_end_date){let w=new Date(a.membership_end_date),v=new Date;(a==null?void 0:a.session_ledger)!==void 0&&a.session_ledger.length<=3?p[0].style.border="3px solid #009ca1":L(v,w,!0)<=3?p[0].style.border="3px solid red":L(v,w,!0)<=7&&(p[0].style.border="3px solid orange")}p[1].innerText=a.name;let f=W(new Date(a.created_at),7),N=new Date().getTime(),E=a.tokens,I=a.session_ledger.length,X=a.membership_end_date?new Date(a.membership_end_date).getTime():null,g="";E===2&&I===0?f.getTime()<N?g=h[0]:g=h[2]:E===0&&I===0?f.getTime()>N?g=h[1]:g=h[2]:E===1&&I===1?g=h[3]:a.membership_status!=="TRIAL"&&I>0&&f.getTime()>N&&X<=N?g=h[4]:X<N&&(g=h[5]),p[2].innerText=g||a.membership_status||"INACTIVE",p[3].innerText=a.gender||"Unselected",p[4].innerText=G(a.date_of_birth),a.session_ledger.length>0?p[5].innerText=R(a.session_ledger[a.session_ledger.length-1].time):p[5].innerText="N/A",A.style.display="flex",t.prepend(A)})}_(l),r.style.display="none"}})();

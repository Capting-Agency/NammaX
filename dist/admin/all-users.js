var f=(o,e,t)=>new Promise((s,a)=>{var _=r=>{try{n(t.next(r))}catch(i){a(i)}},l=r=>{try{n(t.throw(r))}catch(i){a(i)}},n=r=>r.done?s(r.value):Promise.resolve(r.value).then(_,l);n((t=t.apply(o,e)).next())});var B=["Male","Female","Other","Prefer not to say"];var N={ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN",COACH:"COACH"},h=["DROPOUT","NO SHOW","NEW USER","TRIAL","NO RENEWAL","NO MEMBERSHIP"];function E(o,e="GET",t=!1,s=!1,a=!1,_=!0){try{let l={"Content-Type":"application/json"};a&&(l={}),s&&(l.Authorization=`Bearer ${s}`);let n={method:e,headers:l};return t&&(_?n.body=JSON.stringify(t):n.body=t),fetch(o,n).then(r=>r.ok?r.json():r.json().then(i=>(Promise.reject(i.message),{isFetchOk:!1,status:r.status,message:i.message,payload:i&&i.payload?i.payload:null}))).then(r=>r).catch(r=>(console.error("Error in fetch",r),r))}catch(l){return console.error("Error!: "+l),l}}function U(o="nammax_auth"){let t=`; ${document.cookie}`.split(`; ${o}=`);return t.length===2?t.pop().split(";").shift():null}function g(o="/",e=2e3){setTimeout(()=>{window.location.href=o},e)}function X(o=null){if(o==null)return"NaN";let e=new Date(o);return`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()}`}function j(o="/admin/sign-in",e="sidebar-logout-btn"){let t=document.getElementById(e);t?t.onclick=()=>q(o):console.error("Logout button not found")}function q(o="/sign-in"){window.localStorage.removeItem("auth"),g(`${o}`)}function w(o=new Date,e=0){let t=o;return t&&t.setDate(t.getDate()+e),t}function z(o=N.ADMIN){if(o===N.ADMIN){let e=document.getElementById("admin-nav"),t=document.getElementById("super-admin-nav");e&&(e.style.display="flex"),t&&t.remove()}else if(o===N.SUPER_ADMIN){let e=document.getElementById("admin-nav"),t=document.getElementById("super-admin-nav");t&&(t.style.display="flex"),e&&e.remove()}}function v(){let o=document.getElementById("loading-screen");o?o.remove():console.log("did not find loading screen")}function M(o){let e=new Date(o);return e.setMinutes(e.getMinutes()-e.getTimezoneOffset()),e}function T(o,e,t=!1){let s=864e5;return Math.round((M(e)-M(o))/s)}function D({tag:o="gym",API:e=null,parentTableName:t="user-table-subscription-header",tableColumnContainerName:s="user-table-gym-header",extraXanoInputObj:a=[],filterData:_=null,searchContainerElId:l="",token:n},r){if(!_){console.error("No Filter Data provided");return}let i=document.getElementById(s);if(!i){console.error("Failed to find column container");return}let c=i.querySelector("#filter-search");if(!c){console.error("Failed to find column filter");return}Y(s,c,_),i.onclick=p=>{p.stopPropagation(),c.style.display="block"};let u=c.querySelector("#close-btn");u?u.onclick=p=>{p.stopPropagation(),c.style.display="none"}:console.error("Failed to find close btn");let m=i.querySelector("#filter-btn");if(!m){console.error("Failed to find submit filter btn");return}m.onclick=()=>{let p=c.querySelector(`input[name="${s}"]:checked`).value,y;l.length>0?y=document.getElementById(l).querySelector("#search-input"):y=document.getElementById("search-input"),W(o,p,e,r,n,y.value,t,s,c,a)};let d=i.querySelector("#reset-filter-btn");if(!d){console.error("Failed to find reset filter btn");return}d.onclick=p=>{p.stopPropagation(),P("","",e,r,n,"",a),K("hide",t,s,c)}}function W(o,e,t,s,a,_,l,n,r,i){return f(this,null,function*(){P(o,e,t,s,a,_,i),K("show",l,n,r)})}function P(n,r,i,c,u,m){return f(this,arguments,function*(o,e,t,s,a,_,l=[]){let d={search_query:(_==null?void 0:_.length)>0?`${_}:*`:"",tag:o,filter:e||""};l.length>0&&l.map(y=>{for(let[x,A]of Object.entries(y))d[x]=A});let p=yield E(t+"query","POST",d,a);if(p.isFetchOk!==void 0&&!p.isFetchOk)throw console.error(p.message),Error("API call failed");s&&s(p)})}function K(o="show",e,t,s){let a=document.getElementById(e);if(!a){console.error("Could not find parent table name");return}if(a.querySelectorAll(".text-w").forEach(l=>{l.style.textDecoration="none"}),o==="show"){let l=document.getElementById(t);if(!l){console.error("Could not find column name");return}l.style.textDecoration="underline",s.querySelector("#reset-filter-btn").style.display="block"}else o==="hide"&&(s.querySelector("#reset-filter-btn").style.display="none");setTimeout(()=>{s.style.display="none"},500)}function Y(o,e,t){let s=e.querySelector("label");t.forEach(a=>{let _=s.cloneNode(!0),l=_.querySelector("input"),n=_.querySelector("span");l.value=a.value,l.name=o,n.innerText=a.text,e.prepend(_)}),s.remove()}function $({mode:o="API",clientObjRefName:e="name",data:t,token:s,API:a,extraXanoInputObj:_=[],searchContainerElId:l=""},n,r=null,i=null){let c,u,m;if(l.length>0){let d=document.getElementById(l);c=d.querySelector("#search-input"),c.setAttribute("placeholder","Search"),u=d.querySelector("#search-btn"),m=d.querySelector("#search-reset-btn")}else c=document.getElementById("search-input"),c.setAttribute("placeholder","Search"),u=document.getElementById("search-btn"),m=document.getElementById("search-reset-btn");m.onclick=()=>{c.value="",H(m,{mode:o,clientObjRefName:e,data:t,searchquery:"",token:s,API:a,extraXanoInputObj:_},n,r,i)},u.onclick=()=>{let d=c.value;H(m,{mode:o,clientObjRefName:e,data:t,searchquery:d,token:s,API:a,extraXanoInputObj:_},n,r,i)}}function H(u,m,d,p,y){return f(this,arguments,function*(o,{mode:e,clientObjRefName:t,data:s,searchquery:a,token:_,API:l,extraXanoInputObj:n=[]},r,i,c){if(a.length===0)o.style.display="none",i?r(s,i):r(s);else try{if(e==="API"){let x={search_query:`${a}:*`};n.length>0&&n.map(F=>{for(let[k,G]of Object.entries(F))x[k]=G});let A=yield E(l+"query","POST",x,_);if(A.isFetchOk!==void 0&&!A.isFetchOk)throw console.error(A.message),Error("API call failed");o.style.display="flex",i?r(A,i):r(A)}else{let x=s.filter(A=>A[t].toLowerCase().includes(a.toLowerCase()));o.style.display="flex",i?r(x,i):r(x)}}catch(x){c?c():console.error(x)}})}var I="/admin/sign-in";var L="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/super_admin/all_users";var R="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/super_admin/dashboard/search/";var C=null,b=0,O=[];window.onload=function(){return f(this,null,function*(){j(I,"sidebar-logout-btn");let o=U();if(o){let e=yield E(L+"/1","GET",!1,o);if(e.isFetchOk!==void 0&&!e.isFetchOk){console.error(e.message),e.payload&&e.payload.role===N.ADMIN&&e.payload.gyms&&e.payload.gyms.length>0?g(`/admin/gym/g?gymCode=${e.payload.gyms[0].gym_id}`):g(`${I}?reason=UNAUTHORIZED_USER`);return}z(N.SUPER_ADMIN),J(e,o)}else g(`${I}?reason=NOT_SIGNED_IN`)})};function J(o,e){return f(this,null,function*(){let{users:t,gyms:s}=o;S(t),$({data:t,token:e,API:R},S),D({tag:"gym",parentTableName:"user-table-header-container",tableColumnContainerName:"user-table-gym-header",filterData:s.map(a=>({text:a.code,value:a.id})),token:e,API:R},S),D({tag:"subscription",parentTableName:"user-table-header-container",tableColumnContainerName:"user-table-subscription-header",filterData:h.map(a=>({text:a,value:a})),token:e,API:R},S),D({tag:"gender",parentTableName:"user-table-header-container",tableColumnContainerName:"user-table-gender-header",filterData:B.map(a=>({text:a,value:a})),token:e,API:R},S),v()})}function S(o,e=!1){let t=document.getElementById("table-container"),s=t.querySelector("#table-item");function a(_){C=_.nextPage;let l=t.querySelectorAll(".adb-user.w-inline-block");l.forEach((n,r)=>{r!==l.length-1&&n.remove()}),O.items.forEach((n,r)=>{let i=s.cloneNode(!0);i.setAttribute("id",""),i.setAttribute("href",`/admin/user?userId=${n.id}`);let c=i.querySelectorAll(".colcontent");if(r%2===0&&(i.style.backgroundColor="#00edf4"),n.profile_picture&&(c[0].style.backgroundImage=`url(${n.profile_picture.url})`),n.membership_end_date){let d=new Date(n.membership_end_date),p=new Date;(n==null?void 0:n.session_ledger)!==void 0&&n.session_ledger.length<=3?c[0].style.border="3px solid #009ca1":T(p,d,!0)<=3?c[0].style.border="3px solid red":T(p,d,!0)<=7&&(c[0].style.border="3px solid orange")}c[1].innerText=n.name,c[2].innerText=n.code||"unselected";let u=w(new Date(n.created_at),7),m="";n.tokens===2&&n.session_ledger.length===0&&u.getTime()<new Date().getTime()?m=h[0]:n.tokens===0&&n.session_ledger.length===0&&u.getTime()>new Date().getTime()?m=h[1]:n.tokens===2&&n.session_ledger.length===0?m=h[2]:n.tokens===1&&n.session_ledger.length===1?m=h[3]:n.membership_status!=="TRIAL"&&n.session_ledger.length>0&&u.getTime()>new Date().getTime()?m=h[4]:n.membership_end_date&&new Date(n.membership_end_date).getTime()<new Date().getTime()&&(m=h[5]),c[3].innerText=m||n.membership_status||"INACTIVE",c[4].innerText=n.gender.charAt(0),c[5].innerText=n.session_ledger.length||0,n.session_ledger.length>0?c[6].innerText=X(n.session_ledger[n.session_ledger.length-1].time):c[6].innerText="N/A",i.style.display="flex",t.prepend(i)})}e?(O.items.push(...o.items),O.nextPage=o.nextPage):O=o,a(O),s.style.display="none"}var V=new IntersectionObserver(o=>{o[0].intersectionRatio<=0||(b>0&&C?Q(C):b<1&&b++)});V.observe(document.querySelector(".loadmore"));function Q(o){return f(this,null,function*(){let e=U();if(e){let t=yield E(L+`/${o}`,"GET",!1,e);if(t.isFetchOk!==void 0&&!t.isFetchOk){console.error(t.message),t.payload&&t.payload.role===N.ADMIN&&t.payload.gyms&&t.payload.gyms.length>0?g(`/admin/gym/g?gymCode=${t.payload.gyms[0].gym_id}`):console.log("error fetching paginated");return}S(t,!0)}})}

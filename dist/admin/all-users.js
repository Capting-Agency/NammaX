var f=(n,e,t)=>new Promise((s,r)=>{var _=a=>{try{o(t.next(a))}catch(i){r(i)}},l=a=>{try{o(t.throw(a))}catch(i){r(i)}},o=a=>a.done?s(a.value):Promise.resolve(a.value).then(_,l);o((t=t.apply(n,e)).next())});var B=["Male","Female","Other","Prefer not to say"];var N={ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN",COACH:"COACH"},E=["DROPOUT","NO SHOW","NEW USER","TRIAL","NO RENEWAL","NO MEMBERSHIP"];function y(n,e="GET",t=!1,s=!1,r=!1,_=!0){try{let l={"Content-Type":"application/json"};r&&(l={}),s&&(l.Authorization=`Bearer ${s}`);let o={method:e,headers:l};return t&&(_?o.body=JSON.stringify(t):o.body=t),fetch(n,o).then(a=>a.ok?a.json():a.json().then(i=>(Promise.reject(i.message),{isFetchOk:!1,status:a.status,message:i.message,payload:i&&i.payload?i.payload:null}))).then(a=>a).catch(a=>(console.error("Error in fetch",a),a))}catch(l){return console.error("Error!: "+l),l}}function U(n="nammax_auth"){let t=`; ${document.cookie}`.split(`; ${n}=`);return t.length===2?t.pop().split(";").shift():null}function h(n="/",e=2e3){setTimeout(()=>{window.location.href=n},e)}function w(n=null){if(n==null)return"NaN";let e=new Date(n);return`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()}`}function X(n="/admin/sign-in",e="sidebar-logout-btn"){let t=document.getElementById(e);t?t.onclick=()=>W(n):console.error("Logout button not found")}function W(n="/sign-in"){window.localStorage.removeItem("auth"),h(`${n}`)}function j(n=new Date,e=0){let t=n;return t&&t.setDate(t.getDate()+e),t}function z(n=N.ADMIN){if(n===N.ADMIN){let e=document.getElementById("admin-nav"),t=document.getElementById("super-admin-nav");e&&(e.style.display="flex"),t&&t.remove()}else if(n===N.SUPER_ADMIN){let e=document.getElementById("admin-nav"),t=document.getElementById("super-admin-nav");t&&(t.style.display="flex"),e&&e.remove()}}function v(){let n=document.getElementById("loading-screen");n?n.remove():console.error("did not find loading screen")}function M(n){let e=new Date(n);return e.setMinutes(e.getMinutes()-e.getTimezoneOffset()),e}function T(n,e,t=!1){let s=864e5;return Math.round((M(e)-M(n))/s)}function D({tag:n="gym",API:e=null,parentTableName:t="user-table-subscription-header",tableColumnContainerName:s="user-table-gym-header",extraXanoInputObj:r=[],filterData:_=null,searchContainerElId:l=""},o,a){if(!_){console.error("No Filter Data provided");return}let i=document.getElementById(s);if(!i){console.error("Failed to find column container");return}let c=i.querySelector("#filter-search");if(!c){console.error("Failed to find column filter");return}V(s,c,_),i.onclick=p=>{p.stopPropagation(),c.style.display="block"};let u=c.querySelector("#close-btn");u?u.onclick=p=>{p.stopPropagation(),c.style.display="none"}:console.error("Failed to find close btn");let m=i.querySelector("#filter-btn");if(!m){console.error("Failed to find submit filter btn");return}m.onclick=()=>{let p=c.querySelector(`input[name="${s}"]:checked`).value,S;l.length>0?S=document.getElementById(l).querySelector("#search-input"):S=document.getElementById("search-input"),Y(n,p,e,a,o,S.value,t,s,c,r)};let d=i.querySelector("#reset-filter-btn");if(!d){console.error("Failed to find reset filter btn");return}d.onclick=p=>{p.stopPropagation(),P("","",e,a,o,"",r,!0),K("hide",t,s,c)}}function Y(n,e,t,s,r,_,l,o,a,i){return f(this,null,function*(){P(n,e,t,s,r,_,i),K("show",l,o,a)})}function P(a,i,c,u,m,d){return f(this,arguments,function*(n,e,t,s,r,_,l=[],o=!1){if(o){s&&s({isFilter:!0,filterQueries:{},API:t,isReset:o});return}let p={search_query:(_==null?void 0:_.length)>0?`${_}:*`:"",tag:n,filter:e||""};l.length>0&&l.map(S=>{for(let[x,A]of Object.entries(S))p[x]=A}),r=p,s&&s({isFilter:!0,filterQueries:r,API:t})})}function K(n="show",e,t,s){let r=document.getElementById(e);if(!r){console.error("Could not find parent table name");return}if(r.querySelectorAll(".text-w").forEach(l=>{l.style.textDecoration="none"}),n==="show"){let l=document.getElementById(t);if(!l){console.error("Could not find column name");return}l.style.textDecoration="underline",s.querySelector("#reset-filter-btn").style.display="block"}else n==="hide"&&(s.querySelector("#reset-filter-btn").style.display="none");setTimeout(()=>{s.style.display="none"},500)}function V(n,e,t){let s=e.querySelector("label");t.forEach(r=>{let _=s.cloneNode(!0),l=_.querySelector("input"),o=_.querySelector("span");l.value=r.value,l.name=n,o.innerText=r.text,e.prepend(_)}),s.remove()}function H({mode:n="API",clientObjRefName:e="name",data:t,token:s,API:r,extraXanoInputObj:_=[],searchContainerElId:l=""},o,a=null,i=null){let c,u,m;if(l.length>0){let d=document.getElementById(l);c=d.querySelector("#search-input"),c.setAttribute("placeholder","Search"),u=d.querySelector("#search-btn"),m=d.querySelector("#search-reset-btn")}else c=document.getElementById("search-input"),c.setAttribute("placeholder","Search"),u=document.getElementById("search-btn"),m=document.getElementById("search-reset-btn");m.onclick=()=>{c.value="",$(m,{mode:n,clientObjRefName:e,data:t,searchquery:"",token:s,API:r,extraXanoInputObj:_},o,a,i)},u.onclick=()=>{let d=c.value;$(m,{mode:n,clientObjRefName:e,data:t,searchquery:d,token:s,API:r,extraXanoInputObj:_},o,a,i)}}function $(u,m,d,p,S){return f(this,arguments,function*(n,{mode:e,clientObjRefName:t,data:s,searchquery:r,token:_,API:l,extraXanoInputObj:o=[]},a,i,c){if(r.length===0)n.style.display="none",i?a(s,i):a(s);else try{if(e==="API"){let x={search_query:`${r}:*`};o.length>0&&o.map(G=>{for(let[k,q]of Object.entries(G))x[k]=q});let A=yield y(l+"query","POST",x,_);if(A.isFetchOk!==void 0&&!A.isFetchOk)throw console.error(A.message),Error("API call failed");n.style.display="flex",i?a(A,i):a(A)}else{let x=s.filter(A=>A[t].toLowerCase().includes(r.toLowerCase()));n.style.display="flex",i?a(x,i):a(x)}}catch(x){c?c():console.error(x)}})}var I="/admin/sign-in";var L="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/super_admin/all_users";var R="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/super_admin/dashboard/search/";var J="https://www.nammacrossfit.com",F=J;var _e=`${F}/sign-up-2`;var me=`${F}/user/dashboard`;var b=null,C=0,O=[];window.onload=function(){return f(this,null,function*(){X(I,"sidebar-logout-btn");let n=U();if(n){let e=yield y(L+"/1","GET",!1,n);if(e.isFetchOk!==void 0&&!e.isFetchOk){console.error(e.message),e.payload&&e.payload.role===N.ADMIN&&e.payload.gyms&&e.payload.gyms.length>0?h(`/admin/gym/g?gymCode=${e.payload.gyms[0].gym_id}`):h(`${I}?reason=UNAUTHORIZED_USER`);return}z(N.SUPER_ADMIN),Z(e,n)}else h(`${I}?reason=NOT_SIGNED_IN`)})};function Z(n,e){return f(this,null,function*(){let{users:t,gyms:s}=n;g(t),H({data:t,token:e,API:R},g),D({tag:"gym",parentTableName:"user-table-header-container",tableColumnContainerName:"user-table-gym-header",filterData:s.map(r=>({text:r.code,value:r.id})),token:e,API:R},g),D({tag:"subscription",parentTableName:"user-table-header-container",tableColumnContainerName:"user-table-subscription-header",filterData:E.map(r=>({text:r,value:r})),token:e,API:R},g),D({tag:"gender",parentTableName:"user-table-header-container",tableColumnContainerName:"user-table-gender-header",filterData:B.map(r=>({text:r,value:r})),token:e,API:R},g),v()})}function g(n,e=!1){let t=document.getElementById("table-container"),s=t.querySelector("#table-item");function r(_){b=_.nextPage;let l=t.querySelectorAll(".adb-user.w-inline-block");l.forEach((o,a)=>{a!==l.length-1&&o.remove()}),O.items.forEach((o,a)=>{let i=s.cloneNode(!0);i.setAttribute("id",""),i.setAttribute("href",`/admin/user?userId=${o.id}`);let c=i.querySelectorAll(".colcontent");if(a%2===0&&(i.style.backgroundColor="#00edf4"),o.profile_picture&&(c[0].style.backgroundImage=`url(${o.profile_picture.url})`),o.membership_end_date){let d=new Date(o.membership_end_date),p=new Date;(o==null?void 0:o.session_ledger)!==void 0&&o.session_ledger.length<=3?c[0].style.border="3px solid #009ca1":T(p,d,!0)<=3?c[0].style.border="3px solid red":T(p,d,!0)<=7&&(c[0].style.border="3px solid orange")}c[1].innerText=o.name,c[2].innerText=o.code||"unselected";let u=j(new Date(o.created_at),7),m="";o.tokens===2&&o.session_ledger.length===0&&u.getTime()<new Date().getTime()?m=E[0]:o.tokens===0&&o.session_ledger.length===0&&u.getTime()>new Date().getTime()?m=E[1]:o.tokens===2&&o.session_ledger.length===0?m=E[2]:o.tokens===1&&o.session_ledger.length===1?m=E[3]:o.membership_status!=="TRIAL"&&o.session_ledger.length>0&&u.getTime()>new Date().getTime()?m=E[4]:o.membership_end_date&&new Date(o.membership_end_date).getTime()<new Date().getTime()&&(m=E[5]),c[3].innerText=m||o.membership_status||"INACTIVE",c[4].innerText=o.gender.charAt(0),c[5].innerText=o.session_ledger.length||0,o.session_ledger.length>0?c[6].innerText=w(o.session_ledger[o.session_ledger.length-1].time):c[6].innerText="N/A",i.style.display="flex",t.prepend(i)})}e?(O.items.push(...n.items),O.nextPage=n.nextPage):O=n,r(O),s.style.display="none"}var Q=new IntersectionObserver(n=>{n[0].intersectionRatio<=0||(C>0&&b?ee(b):C<1&&C++)});Q.observe(document.querySelector(".loadmore"));function ee(n){return f(this,null,function*(){let e=U();if(e){let t=yield y(L+`/${n}`,"GET",!1,e);if(t.isFetchOk!==void 0&&!t.isFetchOk){console.error(t.message),t.payload&&t.payload.role===N.ADMIN&&t.payload.gyms&&t.payload.gyms.length>0?h(`/admin/gym/g?gymCode=${t.payload.gyms[0].gym_id}`):console.error("error fetching paginated");return}g(t,!0)}})}

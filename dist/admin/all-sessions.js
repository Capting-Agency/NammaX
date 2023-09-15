var N=(t,o,n)=>new Promise((i,l)=>{var r=s=>{try{e(n.next(s))}catch(c){l(c)}},a=s=>{try{e(n.throw(s))}catch(c){l(c)}},e=s=>s.done?i(s.value):Promise.resolve(s.value).then(r,a);e((n=n.apply(t,o)).next())});var A={ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN",COACH:"COACH"};var B=["YET TO START","COMPLETED","IN PROGRESS"];function E(t,o="GET",n=!1,i=!1,l=!1,r=!0){try{let a={"Content-Type":"application/json"};l&&(a={}),i&&(a.Authorization=`Bearer ${i}`);let e={method:o,headers:a};return n&&(r?e.body=JSON.stringify(n):e.body=n),fetch(t,e).then(s=>s.ok?s.json():s.json().then(c=>(Promise.reject(c.message),{isFetchOk:!1,status:s.status,message:c.message,payload:c&&c.payload?c.payload:null}))).then(s=>s).catch(s=>(console.error("Error in fetch",s),s))}catch(a){return console.error("Error!: "+a),a}}function C(t="nammax_auth"){let n=`; ${document.cookie}`.split(`; ${t}=`);return n.length===2?n.pop().split(";").shift():null}function h(t="/",o=2e3){setTimeout(()=>{window.location.href=t},o)}function w(t=null,o=!1,n=!1,i=!1){if(t==null)return"NaN";let l=new Date,r=new Date(t),a=r.getHours(),e="";if(i||(e=a>=12?"PM":"AM",a=a%12||12),o){let s=r.getMinutes();return s=s<10?`0${s}`:s,n?`${l.getDate()===r.getDate()?"Today At":l.getDate()+1===r.getDate()?"Tomorrow At":l.getDate()+2===r.getDate()?"Day After Tomorrow At":R(t)} ${a}:${s} ${e}`:`${a}:${s} ${e}`}else return n?`${l.getDate()===r.getDate()?"Today At":l.getDate()+1===r.getDate()?"Tomorrow At":l.getDate()+2===r.getDate()?"Day After Tomorrow At":R(t)} ${a} ${e}`:`${R(t)} ${a} ${e}`}function R(t=null){if(t==null)return"NaN";let o=new Date(t);return`${o.getDate()}/${o.getMonth()+1}/${o.getFullYear()}`}function X(t="/admin/sign-in",o="sidebar-logout-btn"){let n=document.getElementById(o);n?n.onclick=()=>q(t):console.error("Logout button not found")}function q(t="/sign-in"){window.localStorage.removeItem("auth"),h(`${t}`)}function j(t=A.ADMIN){if(t===A.ADMIN){let o=document.getElementById("admin-nav"),n=document.getElementById("super-admin-nav");o&&(o.style.display="flex"),n&&n.remove()}else if(t===A.SUPER_ADMIN){let o=document.getElementById("admin-nav"),n=document.getElementById("super-admin-nav");n&&(n.style.display="flex"),o&&o.remove()}}function z(){let t=document.getElementById("loading-screen");t?t.remove():console.log("did not find loading screen")}function U({tag:t="gym",API:o=null,parentTableName:n="user-table-subscription-header",tableColumnContainerName:i="user-table-gym-header",extraXanoInputObj:l=[],filterData:r=null,searchContainerElId:a=""},e,s){if(!r){console.error("No Filter Data provided");return}let c=document.getElementById(i);if(!c){console.error("Failed to find column container");return}let _=c.querySelector("#filter-search");if(!_){console.error("Failed to find column filter");return}Y(i,_,r),c.onclick=d=>{d.stopPropagation(),_.style.display="block"};let m=_.querySelector("#close-btn");m?m.onclick=d=>{d.stopPropagation(),_.style.display="none"}:console.error("Failed to find close btn");let p=c.querySelector("#filter-btn");if(!p){console.error("Failed to find submit filter btn");return}p.onclick=()=>{let d=_.querySelector(`input[name="${i}"]:checked`).value,O;a.length>0?O=document.getElementById(a).querySelector("#search-input"):O=document.getElementById("search-input"),W(t,d,o,s,e,O.value,n,i,_,l)};let u=c.querySelector("#reset-filter-btn");if(!u){console.error("Failed to find reset filter btn");return}u.onclick=d=>{d.stopPropagation(),v("","",o,s,e,"",l,!0),P("hide",n,i,_)}}function W(t,o,n,i,l,r,a,e,s,c){return N(this,null,function*(){v(t,o,n,i,l,r,c),P("show",a,e,s)})}function v(s,c,_,m,p,u){return N(this,arguments,function*(t,o,n,i,l,r,a=[],e=!1){if(e){i&&i({isFilter:!0,filterQueries:{},API:n,isReset:e});return}let d={search_query:(r==null?void 0:r.length)>0?`${r}:*`:"",tag:t,filter:o||""};a.length>0&&a.map(O=>{for(let[x,f]of Object.entries(O))d[x]=f}),l=d,i&&i({isFilter:!0,filterQueries:l,API:n})})}function P(t="show",o,n,i){let l=document.getElementById(o);if(!l){console.error("Could not find parent table name");return}if(l.querySelectorAll(".text-w").forEach(a=>{a.style.textDecoration="none"}),t==="show"){let a=document.getElementById(n);if(!a){console.error("Could not find column name");return}a.style.textDecoration="underline",i.querySelector("#reset-filter-btn").style.display="block"}else t==="hide"&&(i.querySelector("#reset-filter-btn").style.display="none");setTimeout(()=>{i.style.display="none"},500)}function Y(t,o,n){let i=o.querySelector("label");n.forEach(l=>{let r=i.cloneNode(!0),a=r.querySelector("input"),e=r.querySelector("span");a.value=l.value,a.name=t,e.innerText=l.text,o.prepend(r)}),i.remove()}function $({mode:t="API",clientObjRefName:o="name",data:n,token:i,API:l,extraXanoInputObj:r=[],searchContainerElId:a=""},e,s=null,c=null){let _,m,p;if(a.length>0){let u=document.getElementById(a);_=u.querySelector("#search-input"),_.setAttribute("placeholder","Search"),m=u.querySelector("#search-btn"),p=u.querySelector("#search-reset-btn")}else _=document.getElementById("search-input"),_.setAttribute("placeholder","Search"),m=document.getElementById("search-btn"),p=document.getElementById("search-reset-btn");p.onclick=()=>{_.value="",K(p,{mode:t,clientObjRefName:o,data:n,searchquery:"",token:i,API:l,extraXanoInputObj:r},e,s,c)},m.onclick=()=>{let u=_.value;K(p,{mode:t,clientObjRefName:o,data:n,searchquery:u,token:i,API:l,extraXanoInputObj:r},e,s,c)}}function K(m,p,u,d,O){return N(this,arguments,function*(t,{mode:o,clientObjRefName:n,data:i,searchquery:l,token:r,API:a,extraXanoInputObj:e=[]},s,c,_){if(l.length===0)t.style.display="none",c?s(i,c):s(i);else try{if(o==="API"){let x={search_query:`${l}:*`};e.length>0&&e.map(F=>{for(let[G,k]of Object.entries(F))x[G]=k});let f=yield E(a+"query","POST",x,r);if(f.isFetchOk!==void 0&&!f.isFetchOk)throw console.error(f.message),Error("API call failed");t.style.display="flex",c?s(f,c):s(f)}else{let x=i.filter(f=>f[n].toLowerCase().includes(l.toLowerCase()));t.style.display="flex",c?s(x,c):s(x)}}catch(x){_?_():console.error(x)}})}var T="/admin/sign-in";var b="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/super_admin/all_sessions",I="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/super_admin/all_sessions/search/";var y=null,M=0,g=[],S={},H="";window.onload=function(){return N(this,null,function*(){X(T,"sidebar-logout-btn");let t=C();if(t){let o=yield E(b+"/1","GET",!1,t);if(o.isFetchOk!==void 0&&!o.isFetchOk){console.error(o.message),o.payload&&o.payload.role===A.ADMIN&&o.payload.gyms&&o.payload.gyms.length>0?h(`/admin/gym/g?gymCode=${o.payload.gyms[0].gym_id}`):h(`${T}?reason=UNAUTHORIZED_USER`);return}j(A.SUPER_ADMIN),J(o,t)}else h(`${T}?reason=NOT_SIGNED_IN`)})};function J(t,o){return N(this,null,function*(){let{sessions:n,coaches:i,gyms:l}=t;D(n),$({sessions:n,token:o,API:I},D),U({tag:"coach",parentTableName:"coach-table-header-container",tableColumnContainerName:"coach-table-coach-header",filterData:i.map(r=>({text:r.name,value:r.id})),API:I},S,L),U({tag:"gym",parentTableName:"coach-table-header-container",tableColumnContainerName:"coach-table-gym-header",filterData:l.map(r=>({text:r.code,value:r.id})),API:I},S,L),U({tag:"status",parentTableName:"coach-table-header-container",tableColumnContainerName:"coach-table-status-header",filterData:B.map(r=>({text:r,value:r})),API:I},S,L),z()})}function D(t,o=!1){let n=document.getElementById("table-container"),i=n.querySelector("#table-item");function l(r){y=r.nextPage;let a=n.querySelectorAll(".adb-user.w-inline-block");a.forEach((s,c)=>{c!==a.length-1&&s.remove()});let e=g==null?void 0:g.items;e==null||e.forEach((s,c)=>{var p,u;let _=i.cloneNode(!0);_.setAttribute("id",""),_.setAttribute("href",`/admin/session?sessionId=${s.id}`);let m=_.querySelectorAll(".colcontent");c%2===0&&(_.style.backgroundColor="#00edf4"),m[1].innerText=s.session_name,m[2].innerText=s.name||"-",m[3].innerText=s.code,m[4].innerText=R(s.time),m[5].innerText=w(s.time,!0),m[6].innerText=(u=(p=s==null?void 0:s.users)==null?void 0:p.length)!=null?u:0,m[7].innerText=s.status,_.style.display="flex",n.prepend(_)})}o?(g.items.push(...t.items),g.nextPage=t.nextPage):g=t,l(g),i.style.display="none"}var V=document.getElementById("table-container"),Z=new IntersectionObserver(t=>{t[0].intersectionRatio<=0||(M>0&&y?L({},y):M<1&&M++)},{root:V,threshold:[0,1]});Z.observe(document.querySelector(".loadmore"));function L(r){return N(this,arguments,function*({isFilter:t=!1,filterQueries:o=S||{},API:n=H,isReset:i=!1},l=y){let a=C();if(a)if(Object.entries(o).length>0&&n)if(S=o,H=n,t){let e=yield E(n+"query","POST",o,a);if(e.isFetchOk!==void 0&&!e.isFetchOk){console.error(e.message),e.payload&&e.payload.role===A.ADMIN&&e.payload.gyms&&e.payload.gyms.length>0?h(`/admin/gym/g?gymCode=${e.payload.gyms[0].gym_id}`):console.log("error fetching paginated");return}else{D(e,!1);return}}else{o.page=l;let e=yield E(n+"query","POST",o,a);if(e.isFetchOk!==void 0&&!e.isFetchOk){console.error(e.message),e.payload&&e.payload.role===A.ADMIN&&e.payload.gyms&&e.payload.gyms.length>0?h(`/admin/gym/g?gymCode=${e.payload.gyms[0].gym_id}`):console.log("error fetching paginated");return}else{D(e,y);return}}else{i&&(y=null,l=1,S={});let e=yield E(b+`/${l}`,"GET",!1,a);if(e.isFetchOk!==void 0&&!e.isFetchOk){console.error(e.message),e.payload&&e.payload.role===A.ADMIN&&e.payload.gyms&&e.payload.gyms.length>0?h(`/admin/gym/g?gymCode=${e.payload.gyms[0].gym_id}`):console.log("error fetching paginated");return}D(e.sessions,!0)}})}

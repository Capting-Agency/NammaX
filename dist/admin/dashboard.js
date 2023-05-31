var R=(l,r,o)=>new Promise((m,x)=>{var E=i=>{try{u(o.next(i))}catch(_){x(_)}},A=i=>{try{u(o.throw(i))}catch(_){x(_)}},u=i=>i.done?m(i.value):Promise.resolve(i.value).then(E,A);u((o=o.apply(l,r)).next())});var S={ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN",COACH:"COACH"};function y(l,r="GET",o=!1,m=!1,x=!1,E=!0){try{let A={"Content-Type":"application/json"};x&&(A={}),m&&(A.Authorization=`Bearer ${m}`);let u={method:r,headers:A};return o&&(E?u.body=JSON.stringify(o):u.body=o),fetch(l,u).then(i=>i.ok?i.json():i.json().then(_=>(Promise.reject(_.message),{isFetchOk:!1,status:i.status,message:_.message,payload:_&&_.payload?_.payload:null}))).then(i=>i).catch(i=>(console.error("Error in fetch",i),i))}catch(A){return console.error("Error!: "+A),A}}function U(l="nammax_auth"){let o=`; ${document.cookie}`.split(`; ${l}=`);return o.length===2?o.pop().split(";").shift():null}function I(l="/",r=0){setTimeout(()=>{window.location.href=l},r)}function L(l=null){if(l==null)return"NaN";let r=l.split("-"),o=Date.now()-new Date(parseInt(r[2]),parseInt(r[1])-1,parseInt(r[0])).getTime(),m=new Date(o);return Math.abs(m.getUTCFullYear()-1970)}function B(l="/admin/sign-in",r="sidebar-logout-btn"){let o=document.getElementById(r);o?o.onclick=()=>K(l):console.error("Logout button not found")}function K(l="/sign-in"){window.localStorage.removeItem("auth"),I(`${l}`)}function M(l=S.ADMIN){if(l===S.ADMIN){let r=document.getElementById("admin-nav"),o=document.getElementById("super-admin-nav");r&&(r.style.display="flex"),o&&o.remove()}else if(l===S.SUPER_ADMIN){let r=document.getElementById("admin-nav"),o=document.getElementById("super-admin-nav");o&&(o.style.display="flex"),r&&r.remove()}}function v({mode:l="API",clientObjRefName:r="name",data:o,token:m,API:x,extraXanoInputObj:E=[],searchContainerElId:A=""},u,i=null,_=null){let h,O,e;if(A.length>0){let t=document.getElementById(A);h=t.querySelector("#search-input"),h.setAttribute("placeholder","Search"),O=t.querySelector("#search-btn"),e=t.querySelector("#search-reset-btn")}else h=document.getElementById("search-input"),h.setAttribute("placeholder","Search"),O=document.getElementById("search-btn"),e=document.getElementById("search-reset-btn");e.onclick=()=>{h.value="",k(e,{mode:l,clientObjRefName:r,data:o,searchquery:"",token:m,API:x,extraXanoInputObj:E},u,i,_)},O.onclick=()=>{let t=h.value;k(e,{mode:l,clientObjRefName:r,data:o,searchquery:t,token:m,API:x,extraXanoInputObj:E},u,i,_)}}function k(O,e,t,a,n){return R(this,arguments,function*(l,{mode:r,clientObjRefName:o,data:m,searchquery:x,token:E,API:A,extraXanoInputObj:u=[]},i,_,h){if(x.length===0)l.style.display="none",_?i(m,_):i(m);else try{if(r==="API"){let s={search_query:`${x}:*`};u.length>0&&u.map(d=>{for(let[c,N]of Object.entries(d))s[c]=N});let p=yield y(A+"query","POST",s,E);if(p.isFetchOk!==void 0&&!p.isFetchOk)throw console.error(p.message),Error("API call failed");l.style.display="flex",_?i(p,_):i(p)}else{let s=m.filter(p=>p[o].toLowerCase().includes(x.toLowerCase()));l.style.display="flex",_?i(s,_):i(s)}}catch(s){h?h():console.error(s)}})}var D="/admin/sign-in";var C="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/super_admin/dashboard";var X="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/super_admin/dashboard/search/";(()=>{let l=1,r=null,o=0,m=[];window.onload=function(){return R(this,null,function*(){B("/admin/sign-in","sidebar-logout-btn");let e=U();if(e){let t=yield y(C+"/1","GET",!1,e);if(t.isFetchOk!==void 0&&!t.isFetchOk){console.error(t.message),t.payload&&t.payload.role===S.ADMIN&&t.payload.gyms&&t.payload.gyms.length>0?I(`/admin/gym/g?gymCode=${t.payload.gyms[0].gym_id}`):I(`${D}?reason=UNAUTHORIZED_USER`);return}M(S.SUPER_ADMIN),x(t,e)}else I(`${D}?reason=NOT_SIGNED_IN`)})};function x(e,t){return R(this,null,function*(){let{users:a,gyms:n,finance:s,footfall:p}=e;h(s),O(a),E(n,a,p),A(n),u(a),v({data:a,token:t,API:X},u)})}function E(e,t,a){if(e&&e.length>0){let n=t.items.filter(s=>{let p=new Date,d=new Date(s.created_at),c=Math.abs(p-d);return Math.ceil(c/(1e3*60*60*24))<=24});document.getElementById("gym-statistics-new-sign-ups").innerText=n.length,document.getElementById("gym-statistics-attendence").innerText=a||0,document.getElementById("gym-statistics-top-performer").innerText=e[0].code,document.getElementById("gym-statistics-total-members").innerText=t.items.length}}function A(e){let t=document.getElementById("gym-container"),a=t.querySelector("#gym-item");e.forEach(n=>{var p,d,c,N,f,g,T,w;let s=a.cloneNode(!0);s.setAttribute("id",""),s.setAttribute("href",`/admin/gym/g?gymCode=${n.id}`),n.map_icon&&(s.querySelector("#gym-map").style.backgroundImage=`url(${n.map_icon.url})`),s.querySelector("#gym-code").innerText=n.code,s.querySelector("#gym-name").innerText=n.location,s.querySelector("#gym-coach").innerText=n.partner||"NaN",s.querySelector("#gym-active-sessions").innerText=(d=(p=n==null?void 0:n.sessions)==null?void 0:p.length)!=null?d:0,s.querySelector("#gym-revenue").innerText=Number((c=n==null?void 0:n.finance)==null?void 0:c.gross_revenue)+Number((N=n==null?void 0:n.finance)==null?void 0:N.additional_revenue),s.querySelector("#gym-active-users").innerText=(g=(f=n==null?void 0:n.users)==null?void 0:f.filter(b=>b.membership_status!=="INACTIVE"&&b.membership_status!=="TRIAL").length)!=null?g:0,s.querySelector("#gym-users").innerText=(w=(T=n==null?void 0:n.users)==null?void 0:T.length)!=null?w:0,t.prepend(s)}),a.remove()}function u(e,t=!1){let a=document.getElementById("table-container"),n=a.querySelector("#table-item");function s(p){l=p.curPage,r=p.nextPage;let d=a.querySelectorAll(".adb-user.w-inline-block");d.forEach((c,N)=>{N!==d.length-1&&(N!==d.length-2||o>0)&&c.remove()}),m.items.forEach((c,N)=>{let f=n.cloneNode(!0);f.setAttribute("id",""),f.setAttribute("href",`/admin/user?userId=${c.id}`);let g=f.querySelectorAll(".colcontent");N%2===0&&(f.style.backgroundColor="#00edf4"),c.profile_picture&&(g[0].style.backgroundImage=`url(${c.profile_picture.url})`),g[1].innerText=c.name,g[2].innerText=c.code,g[3].innerText=c.membership_status||"INACTIVE",g[4].innerText=c.gender,g[5].innerText=L(c.date_of_birth),f.style.display="flex",a.prepend(f)})}t?(m.items.push(...e.items),m.curPage=e.curPage,m.nextPage=e.nextPage):m=e,s(m),n.style.display="none"}new IntersectionObserver(e=>{e[0].intersectionRatio<=0||(o>0&&r?_(r):o<1&&o++)}).observe(document.querySelector(".loadmore"));function _(e){return R(this,null,function*(){let t=U();if(t){let a=yield y(C+`/${e}`,"GET",!1,t);if(a.isFetchOk!==void 0&&!a.isFetchOk){console.error(a.message),a.payload&&a.payload.role===S.ADMIN&&a.payload.gyms&&a.payload.gyms.length>0?I(`/admin/gym/g?gymCode=${a.payload.gyms[0].gym_id}`):console.log("error fetching paginated");return}u(a.users,!0)}})}function h(e){return R(this,null,function*(){let t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=[...new Set(e.map(d=>d.month))].sort(),n={},s={};a.map(d=>{n[d]=e.filter(c=>c.month===d).reduce((c,N)=>c+N.gross_revenue+N.additional_revenue,0),s[d]=e.filter(c=>c.month===d).reduce((c,N)=>c+N.net_profit,0)});let p=document.getElementById("dashboard-profits-chart").getContext("2d");p.canvas.parentNode.style.height="400px",p.canvas.parentNode.style.width="400px",new Chart(p,{type:"bar",data:{labels:a.map(d=>t[d-1]),datasets:[{label:"Revenue",data:Object.values(n),backgroundColor:["#00EDF4"]},{label:"Profit",data:Object.values(s),backgroundColor:["#E0FFC1"]}]},options:{scales:{x:{grid:{display:!1},stacked:!0},y:{grid:{display:!1},stacked:!0}}}})})}function O(e){return R(this,null,function*(){let t=e.items.filter(n=>n.membership_status!=="INACTIVE"),a=document.getElementById("dashboard-sessions-chart").getContext("2d");a.canvas.parentNode.style.height="300px",a.canvas.parentNode.style.width="300px",e.length===t.length?new Chart(a,{type:"pie",data:{labels:[`Total/Active Users ${e.length}`],datasets:[{label:"Revenue",data:[e.length],backgroundColor:["#00EDF4"]}]},options:{plugins:{legend:{position:"top"}}}}):new Chart(a,{type:"pie",data:{labels:[`Total Users ${e.length}`,`Active Users ${t.length}`],datasets:[{label:"Revenue",data:[e.length,t.length],backgroundColor:["#00EDF4","#E0FFC1"]}]},options:{plugins:{legend:{position:"top"}}}})})}})();

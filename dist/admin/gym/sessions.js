var j=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var Y=(n,e)=>{var t={};for(var o in n)pe.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&j)for(var o of j(n))e.indexOf(o)<0&&_e.call(n,o)&&(t[o]=n[o]);return t};var h=(n,e,t)=>new Promise((o,r)=>{var l=s=>{try{i(t.next(s))}catch(a){r(a)}},c=s=>{try{i(t.throw(s))}catch(a){r(a)}},i=s=>s.done?o(s.value):Promise.resolve(s.value).then(l,c);i((t=t.apply(n,e)).next())});var I={ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN",COACH:"COACH"};function E(n,e="GET",t=!1,o=!1,r=!1,l=!0){try{let c={"Content-Type":"application/json"};r&&(c={}),o&&(c.Authorization=`Bearer ${o}`);let i={method:e,headers:c};return t&&(l?i.body=JSON.stringify(t):i.body=t),fetch(n,i).then(s=>s.ok?s.json():s.json().then(a=>(Promise.reject(a.message),{isFetchOk:!1,status:s.status,message:a.message,payload:a&&a.payload?a.payload:null}))).then(s=>s).catch(s=>(console.error("Error in fetch",s),s))}catch(c){return console.error("Error!: "+c),c}}function B(n="nammax_auth"){let t=`; ${document.cookie}`.split(`; ${n}=`);return t.length===2?t.pop().split(";").shift():null}function L(n="/",e=0){setTimeout(()=>{window.location.href=n},e)}function C(n=1e3){setTimeout(()=>{window.location.reload()},n)}function F(n=null,e=!1){if(n==null)return"NaN";var t=new Date(n),o=t.getHours(),r=o>=12?"PM":"AM";if(o=o%12||12,e){var l=t.getMinutes();return l=l<10?`0${l}`:l,`${o}:${l} ${r}`}else return`${o} ${r}`}function z(n=null){if(n==null)return"NaN";let e=new Date(n);return`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()}`}function J(n=null){if(n==null)return"NaN";n=n*60;let e=`${n/60^0}`.slice(-2),t=("0"+n%60).slice(-2);return e!="0"?t!="00"?`${e} HR ${t} M`:e+" HR":t+" Mins"}function b(n,e=null){if(n!=null){var t,o=n.options.length-1;for(t=o;t>=0;t--)t!==e&&n.remove(t)}}function V(n="/admin/sign-in",e="sidebar-logout-btn"){let t=document.getElementById(e);t?t.onclick=()=>Ae(n):console.error("Logout button not found")}function Ae(n="/sign-in"){window.localStorage.removeItem("auth"),L(`${n}`)}function Q(n=I.ADMIN){if(n===I.ADMIN){let e=document.getElementById("admin-nav"),t=document.getElementById("super-admin-nav");e&&(e.style.display="flex"),t&&t.remove()}else if(n===I.SUPER_ADMIN){let e=document.getElementById("admin-nav"),t=document.getElementById("super-admin-nav");t&&(t.style.display="flex"),e&&e.remove()}}function Z(n){if(!n)return console.error("url does not cotnain gym id");let e=document.getElementById("navbar-home"),t=document.getElementById("navbar-finance"),o=document.getElementById("navbar-users"),r=document.getElementById("navbar-sessions");e&&e.setAttribute("href",`/admin/gym/g?gymCode=${n}`),t&&t.setAttribute("href",`/admin/gym/finance?gymCode=${n}`),o&&o.setAttribute("href",`/admin/gym/users?gymCode=${n}`),r&&r.setAttribute("href",`/admin/gym/sessions?gymCode=${n}`)}function ee(n){if(!n)return console.error("gym data not found");let e=document.getElementById("gym-code-location"),t=document.getElementById("header-address"),o=document.getElementById("header-partner"),r=document.getElementById("header-contact"),l=document.getElementById("header-email");e&&(e.innerText=`${n.code} \u2022 ${n.location}`),t&&(t.innerText=n.address),o&&(o.innerText=n.partner),r&&(r.innerText=n.contact),l&&(l.innerText=n.partner_email)}function te({single:n=!0,baseElement:e="",TriggerBtn:t="jsModalOpen",_modalWindow:o="jsModal"},r){if(n){var l=e.querySelector("#"+t);l.onclick=function(){var s=document.getElementById(o);r&&r(),s.classList?s.classList.add("open"):s.className+=" open"}}else for(var c=document.getElementsByClassName(t),i=0;i<c.length;i++)c[i].onclick=function(){var s=this.getAttribute("href").substr(1),a=document.getElementById(s);a.classList?a.classList.add("open"):a.className+=" open"}}function ne({TriggerBtn:n="jsModalClose",_modalWindow:e="jsModal"},t){var o=document.getElementById(n),r=document.getElementById(e);o.onclick=function(){r.classList?r.classList.remove("open"):r.className=r.className.replace(new RegExp("(^|\\b)"+"open".split(" ").join("|")+"(\\b|$)","gi")," ")},t&&t()}function se({mode:n="API",clientObjRefName:e="name",data:t,token:o,API:r,extraXanoInputObj:l=[],searchContainerElId:c=""},i,s=null,a=null){let d,_,m;if(c.length>0){let u=document.getElementById(c);d=u.querySelector("#search-input"),d.setAttribute("placeholder","Search"),_=u.querySelector("#search-btn"),m=u.querySelector("#search-reset-btn")}else d=document.getElementById("search-input"),d.setAttribute("placeholder","Search"),_=document.getElementById("search-btn"),m=document.getElementById("search-reset-btn");m.onclick=()=>{d.value="",oe(m,{mode:n,clientObjRefName:e,data:t,searchquery:"",token:o,API:r,extraXanoInputObj:l},i,s,a)},_.onclick=()=>{let u=d.value;oe(m,{mode:n,clientObjRefName:e,data:t,searchquery:u,token:o,API:r,extraXanoInputObj:l},i,s,a)}}function oe(_,m,u,A,w){return h(this,arguments,function*(n,{mode:e,clientObjRefName:t,data:o,searchquery:r,token:l,API:c,extraXanoInputObj:i=[]},s,a,d){if(r.length===0)n.style.display="none",a?s(o,a):s(o);else try{if(e==="API"){let p={search_query:`${r}:*`};i.length>0&&i.map(T=>{for(let[g,U]of Object.entries(T))p[g]=U});let f=yield E(c+"query","POST",p,l);if(f.isFetchOk!==void 0&&!f.isFetchOk)throw console.error(f.message),Error("API call failed");n.style.display="flex",a?s(f,a):s(f)}else{let p=o.filter(f=>f[t].toLowerCase().includes(r.toLowerCase()));n.style.display="flex",a?s(p,a):s(p)}}catch(p){d?d():console.error(p)}})}var ie=Webflow||[];var M="/admin/sign-in";var ae="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/admin/sessions/",X="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/admin/sessions/add_session/",re="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/admin/session/add_recurring_session",le="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/admin/session/delete_recurring_session";var ce="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/admin/sessions/search/";var R,S,y,G,v,H,K,k,O,de;window.onload=function(){return h(this,null,function*(){V("/admin/sign-in","sidebar-logout-btn");var n=new URL(document.location.href);if(R=n.searchParams.get("gymCode")||null,R)Z(R);else{console.error("No gym id found");return}let e=B();if(e){let o=yield E(ae+R,"GET",!1,e);if(o.isFetchOk!==void 0&&!o.isFetchOk){console.error(o.message);return}let t=o,{team_role:r}=t,l=Y(t,["team_role"]);r===I.SUPER_ADMIN||r===I.ADMIN?(Q(r),fe(l,e)):L(`${M}?reason=UNAUTHORIZED_USER`)}else L(`${M}?reason=NOT_SIGNED_IN`)})};$(document).ready(function(){S=document.getElementById("add-manual-session-form-block"),y=S.querySelector("#sessions-select-gym"),G=S.querySelector("#session-name-input"),v=S.querySelector("#sessions-select-coach"),H=S.querySelector("#datepicker-input"),K=S.querySelector("#timepicker-input"),k=S.querySelector("#sessions-select-duration"),O=S.querySelector("#session-select-capacity"),de=S.querySelector("#sessions-select-btn"),y.disabled=!0,G.disabled=!0,v.disabled=!0,H.disabled=!0,K.disabled=!0,k.disabled=!0,O.disabled=!0,de.disabled=!0,$(H).datepicker({startDate:new Date,format:"dd/mm/yyyy",language:"en",multidate:!0,orientation:"bottom auto"}),$(K).timepicker({timeFormat:"h:mm p",interval:15,defaultTime:"7",minTime:"7",maxTime:"11:45pm"})});function fe(n,e){return h(this,null,function*(){let{manual_type_sessions:t,recurring_type_sessions:o,recurring_sessions:r,gym:l}=n;y.disabled=!1,l&&ee(l),me([...t,...o],l.code),Ne(r,e),xe(e),se({data:t,token:e,API:ce,extraXanoInputObj:[{gym_id:R}]},me,l.code)})}function me(n,e){let t=document.getElementById("table-container"),o=t.querySelector("#table-item");function r(l){let c=t.querySelectorAll(".adb-user.w-inline-block");c.forEach((i,s)=>{s!==c.length-1&&i.remove()}),l.forEach((i,s)=>{var _,m;let a=o.cloneNode(!0);a.setAttribute("id",""),a.setAttribute("href",`/admin/session?sessionId=${i.id}`);let d=a.querySelectorAll(".colcontent");s%2===0&&(a.style.backgroundColor="#00edf4"),d[1].innerText=i.session_name,d[2].innerText=i.name||"To Be Decided",d[3].innerText=e,d[4].innerText=z(i.time),d[5].innerText=F(i.time,!0),d[6].innerText=(m=(_=i==null?void 0:i.users)==null?void 0:_.length)!=null?m:0,d[7].innerText=i.status,a.style.display="flex",t.prepend(a)})}r(n),o.style.display="none"}function Ne(n,e){let o=document.getElementById("recursive-table-container").querySelectorAll(".recursive-table-columns");function r(l){let c;o.forEach((i,s)=>{let a=s+1,d=i.querySelector("#recursive-table-wrapper"),_=d.querySelector("#recursive-table-item");l.forEach(m=>{if(m.weekday==a){let u=_.cloneNode(!0);u.setAttribute("id","");let A=u.querySelectorAll(".colcontent");A[0].innerText=m.session_name,A[1].innerText=F(m.time,!0),A[2].innerText=J(m.duration),A[3].innerText=m.capacity;let w=u.querySelector(".delete-icon-w.off");u.onmouseover=()=>{w.style.display="flex"},u.onmouseout=()=>{w.style.display="none"};let p=u.querySelector(".delete-recurring-session");p.onclick=()=>h(this,null,function*(){document.querySelectorAll(".delete-recurring-session").forEach(U=>{U.disabled=!0});let T={recurring_id:m.id},g=yield E(le,"POST",T,e);if(g.isFetchOk!==void 0&&!g.isFetchOk){console.error(g.message),$("#add-recurring-session-form-block").hide().siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("Failed to delete recurring session"),C(1500);return}u.remove(),$("#add-recurring-session-form-block").hide().siblings(".w-form-fail").hide().siblings(".w-form-done").show().text("Successfully deleted recurring session"),C(1500)}),u.style.display="flex",d.prepend(u)}}),te({_modalWindow:"recursive-popout",TriggerBtn:"add-recursive-weekday-btn",baseElement:i},()=>{let m=document.getElementById("recursive-popout"),u=m.querySelector("#recursive-sessions-name-select"),A=m.querySelector("#recursive-sessions-duration-select"),w=m.querySelector("#recursive-sessions-capacity-select"),p=m.querySelector("#datepicker-input"),f=m.querySelector("#timepicker-input"),T=m.querySelector("#selected-day"),g=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];b(p),[g[a-1]].forEach(N=>{var x=document.createElement("option");x.value=a,x.innerText=N,x.selected=!0,p.appendChild(x)}),p.disabled=!0,T.innerText=g[a-1],f.style.color="#080808",$(f).timepicker({timeFormat:"HH:mm",interval:15,defaultTime:"7",minTime:"7",maxTime:"11:45pm",zindex:10}),b(A,0);let U=["15 mins","30 mins","45 mins","1 hour","1 hour and 15 mins","1 hour and 30 mins","1 hour and 45 mins","2 hours","2 hour and 15 mins","2 hour and 30 mins","2 hour and 45 mins","3 hours","3 hour and 15 mins","3 hour and 30 mins","3 hour and 45 mins"],ue=["0.25","0.5","0.75","1","1.25","1.5","1.75","2","2.25","2.5","2.75","3","3.25","3.5","3.75"];U.forEach((N,x)=>{var D=document.createElement("option");D.value=ue[x],D.innerText=N,A.appendChild(D)});function W(){return h(this,null,function*(){let N;if(c?N=c:N=yield E(X+R,"GET",!1,e),N.isFetchOk!==void 0&&!N.isFetchOk){console.error(N.message);return}c=N;let{gyms:x,session_names:D}=N;b(u),D.forEach(q=>{var P=document.createElement("option");P.value=q.name,P.innerText=q.name,u.appendChild(P)}),w.setAttribute("max",x[0].capacity),w.setAttribute("placeholder","Max capacity: "+x[0].capacity),u.removeEventListener("focus",W)})}u.addEventListener("focus",W)}),_.style.display="none"})}ne({_modalWindow:"recursive-popout",TriggerBtn:"close-recursive-session-popout-btn"}),r(n)}function xe(n){$("form :input").attr("autocomplete","off");function e(){return h(this,null,function*(){let t=yield E(X+R,"GET",!1,n);if(t.isFetchOk!==void 0&&!t.isFetchOk){console.error(t.message);return}G.disabled=!1,v.disabled=!1,H.disabled=!1,K.disabled=!1,k.disabled=!1,O.disabled=!1;let{gyms:o,coaches:r}=t;b(y),o.forEach((i,s)=>{var a=document.createElement("option");a.value=i.id,a.innerText=i.location,s===0&&(a.selected=!0),y.appendChild(a)}),b(v,0),r.forEach(i=>{var s=document.createElement("option");s.value=i.id,s.innerText=i.name,v.appendChild(s)}),b(k,0);let l=["15 mins","30 mins","45 mins","1 hour","1 hour and 15 mins","1 hour and 30 mins","1 hour and 45 mins","2 hours","2 hour and 15 mins","2 hour and 30 mins","2 hour and 45 mins","3 hours","3 hour and 15 mins","3 hour and 30 mins","3 hour and 45 mins"],c=["0.25","0.5","0.75","1","1.25","1.5","1.75","2","2.25","2.5","2.75","3","3.25","3.5","3.75"];l.forEach((i,s)=>{var a=document.createElement("option");a.value=c[s],a.innerText=i,k.appendChild(a)}),O.setAttribute("max",o[0].capacity),O.setAttribute("placeholder","Max capacity: "+o[0].capacity),y.addEventListener("change",()=>{o.some(i=>i.id===parseInt(y.value)?(O.setAttribute("max",i.capacity),O.setAttribute("placeholder","Max capacity: "+i.capacity),!0):!1)},!1),y.removeEventListener("focus",e)})}y.addEventListener("focus",e)}var he=ie||[];he.push(function(){$(document).off("submit"),$("form").on("change",function(){let n=$(this);if(n.attr("id")==="add-manual-session-form-block"){let e=n[0][0].value,t=n[0][1].value,o=n[0][3].value,r=n[0][5].value,l=n[0][6].value;e!==""&&t!==""&&t!=="Session Name"&&o!==""&&r!==""&&r!=="Duration"&&l.trim()!==""&&(n[0][7].disabled=!1,n[0][7].classList.remove("disabled"))}}),$("form").on("submit",function(n){return h(this,null,function*(){n.preventDefault();let e=$(this);if(e.attr("id")==="add-manual-session-form-block"){let t=document.getElementById("submit");t&&(t.disabled=!0,t.classList.add("disabled"));let o=B();if(o){let r=e[0][0].value,l=e[0][1].value,c=e[0][2].value,i=e[0][3].value,s=e[0][4].value,a=e[0][5].value,d=e[0][6].value;if(r!==""&&l!==""&&l!=="Session Name"&&i!==""&&s!==""&&a!==""&&a!=="Duration"&&d.trim()!==""){let _={};_.items=[...i.split(",").map(u=>{let A=u.split("/");return{gym_id:r,session_name:l,team_id:c==="Coach"?null:c,time:new Date(`${A[2]}/${A[1]}/${A[0]} ${s}`).getTime(),duration:a,capacity:d}})];let m=yield E(X+r,"POST",_,o);if(m.isFetchOk!==void 0&&!m.isFetchOk){console.error(m.message),e.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("There was an error trying to add your session. Please refresh your browser and try again."),t&&(t.disabled=!1,t.classList.remove("disabled"));return}e.hide().siblings(".w-form-done").show().siblings(".w-form-fail").hide(),C()}else l==="Session Name"?e[0][1].style.borderColor="red":e[0][1].style.borderColor="black",i.trim()===""?e[0][3].style.borderColor="red":e[0][3].style.borderColor="black",s.trim()===""?e[0][4].style.borderColor="red":e[0][4].style.borderColor="black",a==="Duration"?e[0][5].style.borderColor="red":e[0][5].style.borderColor="black",d.trim()===""?e[0][6].style.borderColor="red":e[0][6].style.borderColor="black",e.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("Please fill out all fields"),t&&(t.disabled=!1,t.classList.remove("disabled"))}}else if(e.attr("id")==="add-recurring-session-modal-form-block"){let t=document.getElementById("submit");t&&(t.disabled=!0,t.classList.add("disabled"));let o=B();if(o){let r=e[0][0].value,l=e[0][1].value,c=e[0][2].value,i=e[0][3].value,s=e[0][4].value;if(r!==""&&l!==""&&c!==""&&i!==""&&s!==""){let a={gym_id:R,session_name:r,weekday:parseInt(l),time:new Date().setHours(c.split(":")[0],c.split(":")[1],0,0),duration:i,capacity:s},d=yield E(re,"POST",a,o);if(d.isFetchOk!==void 0&&!d.isFetchOk){console.error(d.message),e.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("There was an error trying to add your session. Please refresh your browser and try again."),t&&(t.disabled=!1,t.classList.remove("disabled"));return}e.hide().siblings(".w-form-done").show().siblings(".w-form-fail").hide(),C()}}else L(`${M}?reason=NOT_SIGNED_IN`)}})})});

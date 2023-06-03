var Q=Object.getOwnPropertySymbols;var Ae=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable;var Z=(n,t)=>{var e={};for(var o in n)Ae.call(n,o)&&t.indexOf(o)<0&&(e[o]=n[o]);if(n!=null&&Q)for(var o of Q(n))t.indexOf(o)<0&&Ne.call(n,o)&&(e[o]=n[o]);return e};var h=(n,t,e)=>new Promise((o,i)=>{var r=a=>{try{l(e.next(a))}catch(s){i(s)}},c=a=>{try{l(e.throw(a))}catch(s){i(s)}},l=a=>a.done?o(a.value):Promise.resolve(a.value).then(r,c);l((e=e.apply(n,t)).next())});var I={ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN",COACH:"COACH"};function x(n,t="GET",e=!1,o=!1,i=!1,r=!0){try{let c={"Content-Type":"application/json"};i&&(c={}),o&&(c.Authorization=`Bearer ${o}`);let l={method:t,headers:c};return e&&(r?l.body=JSON.stringify(e):l.body=e),fetch(n,l).then(a=>a.ok?a.json():a.json().then(s=>(Promise.reject(s.message),{isFetchOk:!1,status:a.status,message:s.message,payload:s&&s.payload?s.payload:null}))).then(a=>a).catch(a=>(console.error("Error in fetch",a),a))}catch(c){return console.error("Error!: "+c),c}}function v(n="nammax_auth"){let e=`; ${document.cookie}`.split(`; ${n}=`);return e.length===2?e.pop().split(";").shift():null}function w(n="/",t=0){setTimeout(()=>{window.location.href=n},t)}function k(n=1e3){setTimeout(()=>{window.location.reload()},n)}function G(n=null,t=!1){if(n==null)return"NaN";var e=new Date(n),o=e.getHours(),i=o>=12?"PM":"AM";if(o=o%12||12,t){var r=e.getMinutes();return r=r<10?`0${r}`:r,`${o}:${r} ${i}`}else return`${o} ${i}`}function ee(n=null){if(n==null)return"NaN";let t=new Date(n);return`${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()}`}function te(n=null){if(n==null)return"NaN";n=n*60;let t=`${n/60^0}`.slice(-2),e=("0"+n%60).slice(-2);return t!="0"?e!="00"?`${t} HR ${e} M`:t+" HR":e+" Mins"}function O(n,t=null){if(n!=null){var e,o=n.options.length-1;for(e=o;e>=0;e--)e!==t&&n.remove(e)}}function ne(n="/admin/sign-in",t="sidebar-logout-btn"){let e=document.getElementById(t);e?e.onclick=()=>he(n):console.error("Logout button not found")}function he(n="/sign-in"){window.localStorage.removeItem("auth"),w(`${n}`)}function oe(n=I.ADMIN){if(n===I.ADMIN){let t=document.getElementById("admin-nav"),e=document.getElementById("super-admin-nav");t&&(t.style.display="flex"),e&&e.remove()}else if(n===I.SUPER_ADMIN){let t=document.getElementById("admin-nav"),e=document.getElementById("super-admin-nav");e&&(e.style.display="flex"),t&&t.remove()}}function se(n){if(!n)return console.error("url does not cotnain gym id");let t=document.getElementById("navbar-home"),e=document.getElementById("navbar-finance"),o=document.getElementById("navbar-users"),i=document.getElementById("navbar-sessions");t&&t.setAttribute("href",`/admin/gym/g?gymCode=${n}`),e&&e.setAttribute("href",`/admin/gym/finance?gymCode=${n}`),o&&o.setAttribute("href",`/admin/gym/users?gymCode=${n}`),i&&i.setAttribute("href",`/admin/gym/sessions?gymCode=${n}`)}function ie(n){if(!n)return console.error("gym data not found");let t=document.getElementById("gym-code-location"),e=document.getElementById("header-address"),o=document.getElementById("header-partner"),i=document.getElementById("header-contact"),r=document.getElementById("header-email");t&&(t.innerText=`${n.code} \u2022 ${n.location}`),e&&(e.innerText=n.address),o&&(o.innerText=n.partner),i&&(i.innerText=n.contact),r&&(r.innerText=n.partner_email)}function ae({single:n=!0,baseElement:t="",TriggerBtn:e="jsModalOpen",_modalWindow:o="jsModal"},i){if(n){var r=t.querySelector("#"+e);r.onclick=function(){var a=document.getElementById(o);i&&i(),a.classList?a.classList.add("open"):a.className+=" open"}}else for(var c=document.getElementsByClassName(e),l=0;l<c.length;l++)c[l].onclick=function(){var a=this.getAttribute("href").substr(1),s=document.getElementById(a);s.classList?s.classList.add("open"):s.className+=" open"}}function re({TriggerBtn:n="jsModalClose",_modalWindow:t="jsModal"},e){var o=document.getElementById(n),i=document.getElementById(t);o.onclick=function(){i.classList?i.classList.remove("open"):i.className=i.className.replace(new RegExp("(^|\\b)"+"open".split(" ").join("|")+"(\\b|$)","gi")," ")},e&&e()}function ce({mode:n="API",clientObjRefName:t="name",data:e,token:o,API:i,extraXanoInputObj:r=[],searchContainerElId:c=""},l,a=null,s=null){let u,p,d;if(c.length>0){let m=document.getElementById(c);u=m.querySelector("#search-input"),u.setAttribute("placeholder","Search"),p=m.querySelector("#search-btn"),d=m.querySelector("#search-reset-btn")}else u=document.getElementById("search-input"),u.setAttribute("placeholder","Search"),p=document.getElementById("search-btn"),d=document.getElementById("search-reset-btn");d.onclick=()=>{u.value="",le(d,{mode:n,clientObjRefName:t,data:e,searchquery:"",token:o,API:i,extraXanoInputObj:r},l,a,s)},p.onclick=()=>{let m=u.value;le(d,{mode:n,clientObjRefName:t,data:e,searchquery:m,token:o,API:i,extraXanoInputObj:r},l,a,s)}}function le(p,d,m,_,U){return h(this,arguments,function*(n,{mode:t,clientObjRefName:e,data:o,searchquery:i,token:r,API:c,extraXanoInputObj:l=[]},a,s,u){if(i.length===0)n.style.display="none",s?a(o,s):a(o);else try{if(t==="API"){let f={search_query:`${i}:*`};l.length>0&&l.map(D=>{for(let[R,L]of Object.entries(D))f[R]=L});let A=yield x(c+"query","POST",f,r);if(A.isFetchOk!==void 0&&!A.isFetchOk)throw console.error(A.message),Error("API call failed");n.style.display="flex",s?a(A,s):a(A)}else{let f=o.filter(A=>A[e].toLowerCase().includes(i.toLowerCase()));n.style.display="flex",s?a(f,s):a(f)}}catch(f){u?u():console.error(f)}})}var de=Webflow||[];var X="/admin/sign-in";var W="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/admin/sessions/",H="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/admin/sessions/add_session/",me="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/admin/session/add_recurring_session",ue="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/admin/session/delete_recurring_session";var pe="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/admin/sessions/search/";var g,y,S,j,M,K,P,B,b,_e,Y=null,q=0,T=[];window.onload=function(){return h(this,null,function*(){ne("/admin/sign-in","sidebar-logout-btn");var n=new URL(document.location.href);if(g=n.searchParams.get("gymCode")||null,g)se(g);else{console.error("No gym id found");return}let t=v();if(t){let o=yield x(W+g+"/1/s","GET",!1,t);if(o.isFetchOk!==void 0&&!o.isFetchOk){console.error(o.message);return}let e=o,{team_role:i}=e,r=Z(e,["team_role"]);i===I.SUPER_ADMIN||i===I.ADMIN?(oe(i),xe(r,t)):w(`${X}?reason=UNAUTHORIZED_USER`)}else w(`${X}?reason=NOT_SIGNED_IN`)})};$(document).ready(function(){y=document.getElementById("add-manual-session-form-block"),S=y.querySelector("#sessions-select-gym"),j=y.querySelector("#session-name-input"),M=y.querySelector("#sessions-select-coach"),K=y.querySelector("#datepicker-input"),P=y.querySelector("#timepicker-input"),B=y.querySelector("#sessions-select-duration"),b=y.querySelector("#session-select-capacity"),_e=y.querySelector("#sessions-select-btn"),S.disabled=!0,j.disabled=!0,M.disabled=!0,K.disabled=!0,P.disabled=!0,B.disabled=!0,b.disabled=!0,_e.disabled=!0,$(K).datepicker({startDate:new Date,format:"dd/mm/yyyy",language:"en",multidate:!0,orientation:"bottom auto"}),$(P).timepicker({timeFormat:"h:mm p",interval:15,defaultTime:"7",minTime:"7",maxTime:"11:45pm"})});function xe(n,t){return h(this,null,function*(){let{manual_type_sessions:e,recurring_type_sessions:o,recurring_sessions:i,gym:r,nextPage:c}=n;S.disabled=!1,r&&ie(r),z([...e,...o],r.code,c),Ee(i,t),ye(t),ce({data:e,token:t,API:pe,extraXanoInputObj:[{gym_id:g}]},z,r.code)})}function z(n,t,e,o=!1){let i=document.getElementById("table-container"),r=i.querySelector("#table-item");function c(l){Y=e;let a=i.querySelectorAll(".adb-user.w-inline-block");a.forEach((s,u)=>{u!==a.length-1&&s.remove()}),T.forEach((s,u)=>{var m,_;let p=r.cloneNode(!0);p.setAttribute("id",""),p.setAttribute("href",`/admin/session?sessionId=${s.id}`);let d=p.querySelectorAll(".colcontent");u%2===0&&(p.style.backgroundColor="#00edf4"),d[1].innerText=s.session_name,d[2].innerText=s.name||"To Be Decided",d[3].innerText=t,d[4].innerText=ee(s.time),d[5].innerText=G(s.time,!0),d[6].innerText=(_=(m=s==null?void 0:s.users)==null?void 0:m.length)!=null?_:0,d[7].innerText=s.status,p.style.display="flex",i.prepend(p)})}o?(T.push(...n),T.nextPage=e):(T=n,T.nextPage=e),c(T),r.style.display="none"}function Ee(n,t){let o=document.getElementById("recursive-table-container").querySelectorAll(".recursive-table-columns");function i(r){let c;o.forEach((l,a)=>{let s=a+1,u=l.querySelector("#recursive-table-wrapper"),p=u.querySelector("#recursive-table-item");r.forEach(d=>{if(d.weekday==s){let m=p.cloneNode(!0);m.setAttribute("id","");let _=m.querySelectorAll(".colcontent");_[0].innerText=d.session_name,_[1].innerText=G(d.time,!0),_[2].innerText=te(d.duration),_[3].innerText=d.capacity;let U=m.querySelector(".delete-icon-w.off");m.onmouseover=()=>{U.style.display="flex"},m.onmouseout=()=>{U.style.display="none"};let f=m.querySelector(".delete-recurring-session");f.onclick=()=>h(this,null,function*(){document.querySelectorAll(".delete-recurring-session").forEach(L=>{L.disabled=!0});let D={recurring_id:d.id},R=yield x(ue,"POST",D,t);if(R.isFetchOk!==void 0&&!R.isFetchOk){console.error(R.message),$("#add-recurring-session-form-block").hide().siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("Failed to delete recurring session"),k(1500);return}m.remove(),$("#add-recurring-session-form-block").hide().siblings(".w-form-fail").hide().siblings(".w-form-done").show().text("Successfully deleted recurring session"),k(1500)}),m.style.display="flex",u.prepend(m)}}),ae({_modalWindow:"recursive-popout",TriggerBtn:"add-recursive-weekday-btn",baseElement:l},()=>{let d=document.getElementById("recursive-popout"),m=d.querySelector("#recursive-sessions-name-select"),_=d.querySelector("#recursive-sessions-duration-select"),U=d.querySelector("#recursive-sessions-capacity-select"),f=d.querySelector("#datepicker-input"),A=d.querySelector("#timepicker-input"),D=d.querySelector("#selected-day"),R=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];O(f),[R[s-1]].forEach(N=>{var E=document.createElement("option");E.value=s,E.innerText=N,E.selected=!0,f.appendChild(E)}),f.disabled=!0,D.innerText=R[s-1],A.style.color="#080808",$(A).timepicker({timeFormat:"HH:mm",interval:15,defaultTime:"7",minTime:"7",maxTime:"11:45pm",zindex:10}),O(_,0);let L=["15 mins","30 mins","45 mins","1 hour","1 hour and 15 mins","1 hour and 30 mins","1 hour and 45 mins","2 hours","2 hour and 15 mins","2 hour and 30 mins","2 hour and 45 mins","3 hours","3 hour and 15 mins","3 hour and 30 mins","3 hour and 45 mins"],fe=["0.25","0.5","0.75","1","1.25","1.5","1.75","2","2.25","2.5","2.75","3","3.25","3.5","3.75"];L.forEach((N,E)=>{var C=document.createElement("option");C.value=fe[E],C.innerText=N,_.appendChild(C)});function J(){return h(this,null,function*(){let N;if(c?N=c:N=yield x(H+g,"GET",!1,t),N.isFetchOk!==void 0&&!N.isFetchOk){console.error(N.message);return}c=N;let{gyms:E,session_names:C}=N;O(m),C.forEach(V=>{var F=document.createElement("option");F.value=V.name,F.innerText=V.name,m.appendChild(F)}),U.setAttribute("max",E[0].capacity),U.setAttribute("placeholder","Max capacity: "+E[0].capacity),m.removeEventListener("focus",J)})}m.addEventListener("focus",J)}),p.style.display="none"})}re({_modalWindow:"recursive-popout",TriggerBtn:"close-recursive-session-popout-btn"}),i(n)}function ye(n){$("form :input").attr("autocomplete","off");function t(){return h(this,null,function*(){let e=yield x(H+g,"GET",!1,n);if(e.isFetchOk!==void 0&&!e.isFetchOk){console.error(e.message);return}j.disabled=!1,M.disabled=!1,K.disabled=!1,P.disabled=!1,B.disabled=!1,b.disabled=!1;let{gyms:o,coaches:i}=e;O(S),o.forEach((l,a)=>{var s=document.createElement("option");s.value=l.id,s.innerText=l.location,a===0&&(s.selected=!0),S.appendChild(s)}),O(M,0),i.forEach(l=>{var a=document.createElement("option");a.value=l.id,a.innerText=l.name,M.appendChild(a)}),O(B,0);let r=["15 mins","30 mins","45 mins","1 hour","1 hour and 15 mins","1 hour and 30 mins","1 hour and 45 mins","2 hours","2 hour and 15 mins","2 hour and 30 mins","2 hour and 45 mins","3 hours","3 hour and 15 mins","3 hour and 30 mins","3 hour and 45 mins"],c=["0.25","0.5","0.75","1","1.25","1.5","1.75","2","2.25","2.5","2.75","3","3.25","3.5","3.75"];r.forEach((l,a)=>{var s=document.createElement("option");s.value=c[a],s.innerText=l,B.appendChild(s)}),b.setAttribute("max",o[0].capacity),b.setAttribute("placeholder","Max capacity: "+o[0].capacity),S.addEventListener("change",()=>{o.some(l=>l.id===parseInt(S.value)?(b.setAttribute("max",l.capacity),b.setAttribute("placeholder","Max capacity: "+l.capacity),!0):!1)},!1),S.removeEventListener("focus",t)})}S.addEventListener("focus",t)}var Se=new IntersectionObserver(n=>{n[0].intersectionRatio<=0||(q>0&&Y?ge(Y):q<1&&q++)});Se.observe(document.querySelector(".loadmore"));function ge(n){return h(this,null,function*(){let t=v();if(t){let e=yield x(W+g+`/${n}/s`,"GET",!1,t);if(e.isFetchOk!==void 0&&!e.isFetchOk){console.error(e.message),e.payload&&e.payload.role===I.ADMIN&&e.payload.gyms&&e.payload.gyms.length>0?w(`/admin/gym/g?gymCode=${e.payload.gyms[0].gym_id}`):console.log("error fetching paginated");return}let{manual_type_sessions:o,recurring_type_sessions:i,gym:r,nextPage:c}=e;z([...o,...i],r.code,c,!0)}})}var Re=de||[];Re.push(function(){$(document).off("submit"),$("form").on("change",function(){let n=$(this);if(n.attr("id")==="add-manual-session-form-block"){let t=n[0][0].value,e=n[0][1].value,o=n[0][3].value,i=n[0][5].value,r=n[0][6].value;t!==""&&e!==""&&e!=="Session Name"&&o!==""&&i!==""&&i!=="Duration"&&r.trim()!==""&&(n[0][7].disabled=!1,n[0][7].classList.remove("disabled"))}}),$("form").on("submit",function(n){return h(this,null,function*(){n.preventDefault();let t=$(this);if(t.attr("id")==="add-manual-session-form-block"){let e=document.getElementById("submit");e&&(e.disabled=!0,e.classList.add("disabled"));let o=v();if(o){let i=t[0][0].value,r=t[0][1].value,c=t[0][2].value,l=t[0][3].value,a=t[0][4].value,s=t[0][5].value,u=t[0][6].value;if(i!==""&&r!==""&&r!=="Session Name"&&l!==""&&a!==""&&s!==""&&s!=="Duration"&&u.trim()!==""){let p={};p.items=[...l.split(",").map(m=>{let _=m.split("/");return{gym_id:i,session_name:r,team_id:c==="Coach"?null:c,time:new Date(`${_[2]}/${_[1]}/${_[0]} ${a}`).getTime(),duration:s,capacity:u}})];let d=yield x(H+i,"POST",p,o);if(d.isFetchOk!==void 0&&!d.isFetchOk){console.error(d.message),t.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("There was an error trying to add your session. Please refresh your browser and try again."),e&&(e.disabled=!1,e.classList.remove("disabled"));return}t.hide().siblings(".w-form-done").show().siblings(".w-form-fail").hide(),k()}else r==="Session Name"?t[0][1].style.borderColor="red":t[0][1].style.borderColor="black",l.trim()===""?t[0][3].style.borderColor="red":t[0][3].style.borderColor="black",a.trim()===""?t[0][4].style.borderColor="red":t[0][4].style.borderColor="black",s==="Duration"?t[0][5].style.borderColor="red":t[0][5].style.borderColor="black",u.trim()===""?t[0][6].style.borderColor="red":t[0][6].style.borderColor="black",t.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("Please fill out all fields"),e&&(e.disabled=!1,e.classList.remove("disabled"))}}else if(t.attr("id")==="add-recurring-session-modal-form-block"){let e=document.getElementById("submit");e&&(e.disabled=!0,e.classList.add("disabled"));let o=v();if(o){let i=t[0][0].value,r=t[0][1].value,c=t[0][2].value,l=t[0][3].value,a=t[0][4].value;if(i!==""&&r!==""&&c!==""&&l!==""&&a!==""){let s={gym_id:g,session_name:i,weekday:parseInt(r),time:new Date().setHours(c.split(":")[0],c.split(":")[1],0,0),duration:l,capacity:a},u=yield x(me,"POST",s,o);if(u.isFetchOk!==void 0&&!u.isFetchOk){console.error(u.message),t.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("There was an error trying to add your session. Please refresh your browser and try again."),e&&(e.disabled=!1,e.classList.remove("disabled"));return}t.hide().siblings(".w-form-done").show().siblings(".w-form-fail").hide(),k()}}else w(`${X}?reason=NOT_SIGNED_IN`)}})})});

var A=(t,o,e)=>new Promise((r,s)=>{var a=c=>{try{n(e.next(c))}catch(l){s(l)}},i=c=>{try{n(e.throw(c))}catch(l){s(l)}},n=c=>c.done?r(c.value):Promise.resolve(c.value).then(a,i);n((e=e.apply(t,o)).next())});function _(t,o="GET",e=!1,r=!1,s=!1,a=!0){try{let i={"Content-Type":"application/json"};s&&(i={}),r&&(i.Authorization=`Bearer ${r}`);let n={method:o,headers:i};return e&&(a?n.body=JSON.stringify(e):n.body=e),fetch(t,n).then(c=>c.ok?c.json():c.json().then(l=>(Promise.reject(l.message),{isFetchOk:!1,status:c.status,message:l.message,payload:l&&l.payload?l.payload:null}))).then(c=>c).catch(c=>(console.error("Error in fetch",c),c))}catch(i){return console.error("Error!: "+i),i}}function p(t="nammax_auth"){let e=`; ${document.cookie}`.split(`; ${t}=`);return e.length===2?e.pop().split(";").shift():null}function m(t="/",o=2e3){setTimeout(()=>{window.location.href=t},o)}function N(t=1e3){setTimeout(()=>{window.location.reload()},t)}function S(t=null,o=!1,e=!1,r=!1){if(t==null)return"NaN";let s=new Date,a=new Date(t),i=a.getHours(),n="";if(r||(n=i>=12?"PM":"AM",i=i%12||12),o){let c=a.getMinutes();return c=c<10?`0${c}`:c,e?`${s.getDate()===a.getDate()?"Today At":s.getDate()+1===a.getDate()?"Tomorrow At":s.getDate()+2===a.getDate()?"Day After Tomorrow At":g(t)} ${i}:${c} ${n}`:`${i}:${c} ${n}`}else return e?`${s.getDate()===a.getDate()?"Today At":s.getDate()+1===a.getDate()?"Tomorrow At":s.getDate()+2===a.getDate()?"Day After Tomorrow At":g(t)} ${i} ${n}`:`${g(t)} ${i} ${n}`}function g(t=null){if(t==null)return"NaN";let o=new Date(t);return`${o.getDate()}/${o.getMonth()+1}/${o.getFullYear()}`}function O(t=null){if(t==null)return"NaN";t=t*60;let o=`${t/60^0}`.slice(-2),e=("0"+t%60).slice(-2);return o!="0"?e!="00"?`${o} HR ${e} M`:o+" HR":e+" Mins"}function D(t,o=null){if(t!=null){var e,r=t.options.length-1;for(e=r;e>=0;e--)e!==o&&t.remove(e)}}function U(){let t=document.getElementById("loading-screen");t?t.remove():console.error("did not find loading screen")}function I(t,o,e){return t.hasOwnProperty(o)&&t[o]===e}function y(t,o){return t.hasOwnProperty(o)}function E({single:t=!0,baseElement:o="",TriggerBtn:e="jsModalOpen",_modalWindow:r="jsModal"},s){if(t){var a=o.querySelector("#"+e);a.onclick=function(){var c=document.getElementById(r);s&&s(),c.classList?c.classList.add("open"):c.className+=" open"}}else for(var i=document.getElementsByClassName(e),n=0;n<i.length;n++)i[n].onclick=function(){var c=this.getAttribute("href").substr(1),l=document.getElementById(c);l.classList?l.classList.add("open"):l.className+=" open"}}function h({TriggerBtn:t="jsModalClose",_modalWindow:o="jsModal"},e){var r=document.getElementById(t),s=document.getElementById(o);r.onclick=function(){s.classList?s.classList.remove("open"):s.className=s.className.replace(new RegExp("(^|\\b)"+"open".split(" ").join("|")+"(\\b|$)","gi")," ")},e&&e()}var C=Webflow||[];var u="/coach/sign-in",R="/coach/dashboard";var L="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/coach/all_coaches",T="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/coach/session_summary/",b="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/coach/session_summary/search/",B="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/coach/session_summary/comments/",M="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/coach/session_summary/update_coach/";var v="https://www.nammacrossfit.com",w=v;var se=`${w}/sign-up-2`;var ae=`${w}/user/dashboard`;var x,d=[];window.onload=function(){let t=p();t?(H(t),U()):m(`${u}?reason=NOT_SIGNED_IN`)};function H(t){return A(this,null,function*(){var a;var o=new URL(document.location.href);x=o.searchParams.get("session"),x||m(R);let e=yield _(T+x,"GET",!1,t);if(e.isFetchOk!==void 0&&!e.isFetchOk){console.error(e.message);return}if(e.status!=="COMPLETED"){console.error("Session hasnt been completed yet!"),m(R);return}let r=[],s=[];(a=e==null?void 0:e.users)==null||a.forEach(i=>{i.attended?r.push(i):s.push(i)}),z(e,r.length),P(r),K(s),k(e.users),G(e.secondary_coach,t),W(e.comments,t)})}function z(t,o){var a,i,n;let e=document.getElementById("header-container");e.querySelector("#session-name").innerText=t.session_name,e.querySelector("#start-time").innerText=(a=S(t.start_time,!0))!=null?a:"NaN",e.querySelector("#date").innerText=new Date(t.time).toLocaleDateString("en-us",{weekday:"short",month:"short",day:"numeric"}),e.querySelector("#gym-location").innerText=t.location,e.querySelector("#duration").innerText=O(t.duration);let r=new Date(t.end_time).getHours()-new Date(t.start_time).getHours(),s=(new Date(t.end_time).getMinutes()-new Date(t.start_time).getMinutes())/60;e.querySelector("#actual-duration").innerText=O(parseFloat(r)+parseFloat(s)),e.querySelector("#users-attended").innerText=o,e.querySelector("#users-missed").innerText=((i=t==null?void 0:t.users)==null?void 0:i.length)-o,e.querySelector("#end-time").innerText=(n=S(t.end_time,!0))!=null?n:"NaN"}function P(t){let o=document.getElementById("attended-container"),e=o.querySelector("#attended-item");if(t.length===0){let r=document.createElement("p");r.style.color="black",r.innerText="All users missed this session",o.append(r)}else t.forEach(r=>{let s=e.cloneNode(!0);s.setAttribute("id",""),s.style.display="flex",r.profile_picture&&(s.querySelector("#profile-pic").src=r.profile_picture.url),s.querySelector("#attended-name").innerText=r.name,o.append(s)});e.remove()}function K(t){let o=document.getElementById("missed-container"),e=o.querySelector("#missed-item");if(t.length===0){let r=document.createElement("p");r.style.color="black",r.innerText="No users missed this session",o.append(r)}else t.forEach(r=>{let s=e.cloneNode(!0);s.setAttribute("id",""),s.style.display="flex",r.profile_picture&&(s.querySelector("#profile-pic").src=r.profile_picture.url),s.querySelector("#missed-name").innerText=r.name,o.append(s)});e.remove()}function k(t){E({baseElement:document.getElementById("btn-container"),TriggerBtn:"edit-users-btn",_modalWindow:"edit-user-popout"},()=>{d=t,f(t)}),h({TriggerBtn:"close-edit-user-btn",_modalWindow:"edit-user-popout"})}function f(t){let o=document.getElementById("session-current-user-container"),e=o.querySelector("#session-current-user-item");o.querySelectorAll(".summary-user-details").forEach((s,a)=>{a!==0&&s.remove()}),t.forEach(s=>{let a=e.cloneNode(!0);a.setAttribute("id",""),a.style.display="flex",s.attended||(a.style.backgroundColor="#ff634e",a.querySelector("#session-current-user-delete-btn").style.filter="grayscale(1)"),s.profile_picture&&(a.querySelector("#session-current-user-pfp").style.backgroundImage=`url(${s.profile_picture.url})`),a.querySelector("#session-current-user-name").innerText=s.name,a.querySelector("#session-current-user-missed-btn").onclick=()=>{let i=d.findIndex(n=>n.user_id===s.user_id);if(i>=0){let n=d[i];n&&y(n,"user_id")&&I(n,"attended",!0)?d[i].attended=!1:n&&y(n,"user_id")&&I(n,"attended",!1)&&(d[i].attended=!0)}f(d)},a.querySelector("#session-current-user-delete-btn").onclick=()=>{d=d.filter(i=>i.user_id!==s.user_id),f(d)},o.append(a)}),e.style.display="none"}function F(t){let e=document.getElementById("edit-user-popout").querySelector("#search-item-container"),r=e.querySelector("#search-item");function s(a){if(e.querySelectorAll(".summary-user-details.search-item").forEach((n,c)=>{c!==0&&n.remove()}),a.length===0){let n=document.createElement("p");n.style.color="black",n.innerText="No users with this name found",n.classList.add("summary-user-details","search-item"),n.style.display="flex",e.append(n)}else a.forEach(n=>{let c=r.cloneNode(!0);c.setAttribute("id",""),c.style.display="flex",n.profile_picture&&(c.querySelector("#search-item-pfp").style.backgroundImage=`url(${n.profile_picture.url})`),c.querySelector("#search-item-name").innerText=n.name,c.onclick=()=>{let l;d.some((j,X)=>{if(j.user_id===n.user_id)return l=X,!0})?(d[l].attended=!0,f(d)):(n.attended=!0,d.push(n),f(d)),c.remove()},e.append(c)})}s(t),r.style.display="none"}function G(t,o){E({baseElement:document.getElementById("btn-container"),TriggerBtn:"add-coach-btn",_modalWindow:"add-coach-popout"},()=>{let e=document.getElementById("coach-form-block"),r=e.querySelector("#second-coach-select");if(t.team_id){let a=e.querySelector("#coach-already-added-text");a.innerText=`Coach ${t.name} already added`,a.classList.remove("hide")}function s(){return A(this,null,function*(){let a=yield _(L,"GET",!1,o);if(a.isFetchOk!==void 0&&!a.isFetchOk){console.error(a.message),m(`${u}?reason=NOT_SIGNED_IN`);return}D(r),a.forEach(i=>{var n=document.createElement("option");n.value=i.id,n.innerHTML=i.name,r.appendChild(n)}),r.removeEventListener("focus",s)})}r.addEventListener("focus",s)}),h({TriggerBtn:"close-add-coach-btn",_modalWindow:"add-coach-popout"})}function W(t){E({baseElement:document.getElementById("btn-container"),TriggerBtn:"add-notes-btn",_modalWindow:"add-notes-popout"},()=>{q(t)}),h({TriggerBtn:"close-add-notes-btn",_modalWindow:"add-notes-popout"})}function q(t){let o=document.getElementById("comments");t&&(o.value=t)}var Y=C||[];Y.push(function(){$(document).off("submit"),$("form").on("submit",function(t){return A(this,null,function*(){t.preventDefault();let o=$(this);if(o.attr("id")==="coach-form-block"){let e=document.getElementById("second-coach-submit-btn"),r;e&&(e.disabled=!0,r=e.innerText,e.innerText="Confirming...");let s=p();if(s){let a=document.getElementById("second-coach-select"),i={name:a.options[a.selectedIndex].text,coach_id:parseInt(a.value)},n=yield _(M+x,"POST",i,s);if(n.isFetchOk!==void 0&&!n.isFetchOk){console.error(n.message),o.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("There was an error trying to add the second coach. Please refresh your browser and try again."),e&&(e.disabled=!1,e.innerText=r);return}o.hide().siblings(".w-form-done").show().siblings(".w-form-fail").hide(),N()}else m(`${u}?reason=NOT_SIGNED_IN`)}else if(o.attr("id")==="notes-form-block"){let e=document.getElementById("submit-comments-btn"),r;e&&(e.disabled=!0,r=e.innerText,e.innerText="Confirming...");let s=p();if(s){let i={comment:document.getElementById("comments").value},n=yield _(B+x,"POST",i,s);if(n.isFetchOk!==void 0&&!n.isFetchOk){console.error(n.message),o.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("Failed to add comment. Please refresh your browser and try again."),e&&(e.disabled=!1,e.innerText=r);return}N()}else m(`${u}?reason=NOT_SIGNED_IN`)}else if(o.attr("id")==="search-form-block"){let e=p();if(e){let a=document.getElementById("edit-user-popout").querySelector("#search-input").value;if(a.length===0)return;let i={search_query:`${a}:*`},n=yield _(b+a,"POST",i,e);if(n.isFetchOk!==void 0&&!n.isFetchOk){console.error(n.message),o.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("Oops, that user may not exist! Just to be safe, please try again after refreshing your browser.");return}F(n)}else m(`${u}?reason=NOT_SIGNED_IN`)}else if(o.attr("id")==="update-session-form-block"){let e=document.getElementById("update-session-btn"),r;e&&(e.disabled=!0,r=e.innerText,e.innerText="Confirming...");let s=p();if(s){let a={};a.items=[...d.map(n=>({user_id:n.user_id,attended:n.attended}))];let i=yield _(T+x,"POST",a,s);if(i.isFetchOk!==void 0&&!i.isFetchOk){console.error(i.message),o.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("There was an error trying to update the session. Please refresh your browser and try again."),e&&(e.disabled=!1,e.innerText=r);return}o.hide().siblings(".w-form-done").show().siblings(".w-form-fail").hide(),N()}else m(`${u}?reason=NOT_SIGNED_IN`)}})})});

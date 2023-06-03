var A=(e,r,a)=>new Promise((s,m)=>{var _=t=>{try{n(a.next(t))}catch(o){m(o)}},c=t=>{try{n(a.throw(t))}catch(o){m(o)}},n=t=>t.done?s(t.value):Promise.resolve(t.value).then(_,c);n((a=a.apply(e,r)).next())});function h(e,r="GET",a=!1,s=!1,m=!1,_=!0){try{let c={"Content-Type":"application/json"};m&&(c={}),s&&(c.Authorization=`Bearer ${s}`);let n={method:r,headers:c};return a&&(_?n.body=JSON.stringify(a):n.body=a),fetch(e,n).then(t=>t.ok?t.json():t.json().then(o=>(Promise.reject(o.message),{isFetchOk:!1,status:t.status,message:o.message,payload:o&&o.payload?o.payload:null}))).then(t=>t).catch(t=>(console.error("Error in fetch",t),t))}catch(c){return console.error("Error!: "+c),c}}function R(e="nammax_auth"){let a=`; ${document.cookie}`.split(`; ${e}=`);return a.length===2?a.pop().split(";").shift():null}function d(e="/",r=0){setTimeout(()=>{window.location.href=e},r)}function O(e=null,r=!1){if(e==null)return"NaN";var a=new Date(e),s=a.getHours(),m=s>=12?"PM":"AM";if(s=s%12||12,r){var _=a.getMinutes();return _=_<10?`0${_}`:_,`${s}:${_} ${m}`}else return`${s} ${m}`}function f(e=null){if(e==null)return"NaN";e=e*60;let r=`${e/60^0}`.slice(-2),a=("0"+e%60).slice(-2);return r!="0"?a!="00"?`${r} HR ${a} M`:r+" HR":a+" Mins"}function I(){let e=document.getElementById("loading-screen");e&&(e.style.display="none")}var g=Webflow||[];var N="/coach/sign-in",U="/coach/dashboard";var D="/coach/session-summary/";var S="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/coach/sessions/attendence/";(()=>{let e={},r,a;window.onload=function(){let n=R();n?(s(n),I()):d(`${N}?reason=NOT_SIGNED_IN`)};function s(n){return A(this,null,function*(){var t=new URL(document.location.href);r=t.searchParams.get("session"),r||d(U),document.getElementById("submit-attendence-btn").disabled=!0;let o=yield h(S+r,"GET",!1,n);if(o.isFetchOk!==void 0&&!o.isFetchOk){console.error(o.message),d(`${N}?reason=NOT_SIGNED_IN`);return}o&&o.length>0&&(a=o[0].gym_id),o.some(i=>i.status==="COMPLETED"?(console.error("Session is already completed"),d(`/coach/session-summary?session=${i.id}`),!1):i.status==="IN PROGRESS"?(m(i),_(i,n),c(i,n),!0):(console.error("Session either unknown or not in progress"),d(`/coach/session-summary?session=${i.id}`),!1))})}function m(n){let t=document.getElementById("header-container");t.querySelector("#session-name").innerText=n.session_name,t.querySelector("#time").innerText=O(n.time,!0),t.querySelector("#date").innerText=new Date(n.time).toLocaleDateString("en-us",{weekday:"short",month:"short",day:"numeric"}),t.querySelector("#gym-location").innerText=n.location,t.querySelector("#duration").innerText=f(n.duration)}function _(n){let t=document.getElementById("attendence-container"),o=t.querySelector("#attendence-item");n.users.forEach((i,x)=>{let l=o.cloneNode(!0);l.setAttribute("id",""),l.querySelector("#index").innerText=x+1,i.profile_picture&&l.querySelector("#profile-pic").setAttribute("src",i.profile_picture.url),l.querySelector("#user-name").innerText=i.name,l.querySelector("#user-level").innerText=i.level,l.querySelector("#user-injury").innerText=i.injury;let p=l.querySelector("#attendence-checkmarks"),E=p.querySelector("#did-attend"),u=p.querySelector("#did-not-attend");u.classList.add("is-true"),E.onclick=()=>{E.classList.add("is-true"),u.classList.remove("is-true"),e[i.user_id]={attended:!0}},u.onclick=()=>{u.classList.add("is-true"),E.classList.remove("is-true"),e[i.user_id]={attended:!1}},e[i.user_id]={attended:!1},t.append(l)}),o.remove()}function c(n,t){let o=document.getElementById("submit-attendence-btn");o.disabled=!1,o.onclick=()=>A(this,null,function*(){o.disabled=!0;let i=[];Object.keys(e).forEach(p=>i.push({user_id:parseInt(p),attended:e[p].attended}));let x={allUsersAttendence:i,gym_id:a,session_id:parseInt(n.id)||n.id||""},l=yield h(S+n.id,"POST",x,t);if(l.isFetchOk!==void 0&&!l.isFetchOk){console.error(l.message),d(`${N}?reason=NOT_SIGNED_IN`),o.disabled=!1;return}d(`${D}?session=${n.id}`)})}})();var L=g||[];L.push(function(){$(document).off("submit"),$("form").on("submit",function(e){return A(this,null,function*(){e.preventDefault()})})});

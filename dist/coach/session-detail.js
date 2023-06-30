var A=(t,o,s)=>new Promise((m,c)=>{var _=e=>{try{n(s.next(e))}catch(a){c(a)}},r=e=>{try{n(s.throw(e))}catch(a){c(a)}},n=e=>e.done?m(e.value):Promise.resolve(e.value).then(_,r);n((s=s.apply(t,o)).next())});function S(t,o="GET",s=!1,m=!1,c=!1,_=!0){try{let r={"Content-Type":"application/json"};c&&(r={}),m&&(r.Authorization=`Bearer ${m}`);let n={method:o,headers:r};return s&&(_?n.body=JSON.stringify(s):n.body=s),fetch(t,n).then(e=>e.ok?e.json():e.json().then(a=>(Promise.reject(a.message),{isFetchOk:!1,status:e.status,message:a.message,payload:a&&a.payload?a.payload:null}))).then(e=>e).catch(e=>(console.error("Error in fetch",e),e))}catch(r){return console.error("Error!: "+r),r}}function I(t="nammax_auth"){let s=`; ${document.cookie}`.split(`; ${t}=`);return s.length===2?s.pop().split(";").shift():null}function d(t="/",o=2e3){setTimeout(()=>{window.location.href=t},o)}function U(t=null,o=!1,s=!1,m=!1){if(t==null)return"NaN";let c=new Date,_=new Date(t),r=_.getHours(),n="";if(m||(n=r>=12?"PM":"AM",r=r%12||12),o){let e=_.getMinutes();return e=e<10?`0${e}`:e,s?`${c.getDate()===_.getDate()?"Today":c.getDate()+1===_.getDate()?"Tomorrow":c.getDate()+2===_.getDate()?"Day After Tomorrow":h(t)} ${r}:${e} ${n}`:`${r}:${e} ${n}`}else return s?`${c.getDate()===_.getDate()?"Today":c.getDate()+1===_.getDate()?"Tomorrow":c.getDate()+2===_.getDate()?"Day After Tomorrow":h(t)} ${r} ${n}`:`${h(t)} ${r} ${n}`}function h(t=null){if(t==null)return"NaN";let o=new Date(t);return`${o.getDate()}/${o.getMonth()+1}/${o.getFullYear()}`}function T(t=null){if(t==null)return"NaN";t=t*60;let o=`${t/60^0}`.slice(-2),s=("0"+t%60).slice(-2);return o!="0"?s!="00"?`${o} HR ${s} M`:o+" HR":s+" Mins"}function y(){let t=document.getElementById("loading-screen");t?t.remove():console.log("did not find loading screen")}function g(t){let o=new Date(t);return o.setMinutes(o.getMinutes()-o.getTimezoneOffset()),o}function f(t,o,s=!1){let m=864e5;return Math.round((g(o)-g(t))/m)}var L=Webflow||[];var N="/coach/sign-in",C="/coach/dashboard";var w="/coach/session-summary/";var R="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/coach/sessions/attendence/";(()=>{let t={},o,s;window.onload=function(){let n=I();n?(m(n),y()):d(`${N}?reason=NOT_SIGNED_IN`)};function m(n){return A(this,null,function*(){var e=new URL(document.location.href);o=e.searchParams.get("session"),o||d(C),document.getElementById("submit-attendence-btn").disabled=!0;let a=yield S(R+o,"GET",!1,n);if(a.isFetchOk!==void 0&&!a.isFetchOk){console.error(a.message),d(`${N}?reason=NOT_SIGNED_IN`);return}a&&a.length>0&&(s=a[0].gym_id),a.some(i=>i.status==="COMPLETED"?(console.error("Session is already completed"),d(`/coach/session-summary?session=${i.id}`),!1):i.status==="IN PROGRESS"?(c(i),_(i,n),r(i,n),!0):(console.error("Session either unknown or not in progress"),d(`/coach/session-summary?session=${i.id}`),!1))})}function c(n){let e=document.getElementById("header-container");e.querySelector("#session-name").innerText=n.session_name,e.querySelector("#time").innerText=U(n.time,!0),e.querySelector("#date").innerText=new Date(n.time).toLocaleDateString("en-us",{weekday:"short",month:"short",day:"numeric"}),e.querySelector("#gym-location").innerText=n.location,e.querySelector("#duration").innerText=T(n.duration)}function _(n){let e=document.getElementById("attendence-container"),a=e.querySelector("#attendence-item");n.users.forEach((i,x)=>{let l=a.cloneNode(!0);if(l.setAttribute("id",""),l.querySelector("#index").innerText=x+1,i.profile_picture&&l.querySelector("#profile-pic").setAttribute("src",i.profile_picture.url),i.membership_end_date){let O=new Date(i.membership_end_date),D=new Date;(i==null?void 0:i.session_ledger)!==void 0&&i.session_ledger.length<=3?l.querySelector("#profile-pic").style.border="3px solid #009ca1":f(D,O,!0)<=3?l.querySelector("#profile-pic").style.border="3px solid red":f(D,O,!0)<=7&&(l.querySelector("#profile-pic").style.border="3px solid orange")}l.querySelector("#user-name").innerText=i.name,l.querySelector("#user-level").innerText=i.level,l.querySelector("#user-injury").innerText=i.injury;let p=l.querySelector("#attendence-checkmarks"),E=p.querySelector("#did-attend"),u=p.querySelector("#did-not-attend");u.classList.add("is-true"),E.onclick=()=>{E.classList.add("is-true"),u.classList.remove("is-true"),t[i.user_id]={attended:!0}},u.onclick=()=>{u.classList.add("is-true"),E.classList.remove("is-true"),t[i.user_id]={attended:!1}},t[i.user_id]={attended:!1},e.append(l)}),a.remove()}function r(n,e){let a=document.getElementById("submit-attendence-btn");a.disabled=!1,a.onclick=()=>A(this,null,function*(){a.disabled=!0;let i=[];Object.keys(t).forEach(p=>i.push({user_id:parseInt(p),attended:t[p].attended}));let x={allUsersAttendence:i,gym_id:s,session_id:parseInt(n.id)||n.id||""},l=yield S(R+n.id,"POST",x,e);if(l.isFetchOk!==void 0&&!l.isFetchOk){console.error(l.message),d(`${N}?reason=NOT_SIGNED_IN`),a.disabled=!1;return}d(`${w}?session=${n.id}`)})}})();var M=L||[];M.push(function(){$(document).off("submit"),$("form").on("submit",function(t){return A(this,null,function*(){t.preventDefault()})})});

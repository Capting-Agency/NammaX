var N=(e,o,r)=>new Promise((d,c)=>{var _=t=>{try{n(r.next(t))}catch(s){c(s)}},i=t=>{try{n(r.throw(t))}catch(s){c(s)}},n=t=>t.done?d(t.value):Promise.resolve(t.value).then(_,i);n((r=r.apply(e,o)).next())});function h(e,o="GET",r=!1,d=!1,c=!1,_=!0){try{let i={"Content-Type":"application/json"};c&&(i={}),d&&(i.Authorization=`Bearer ${d}`);let n={method:o,headers:i};return r&&(_?n.body=JSON.stringify(r):n.body=r),fetch(e,n).then(t=>t.ok?t.json():t.json().then(s=>(Promise.reject(s.message),{isFetchOk:!1,status:t.status,message:s.message,payload:s&&s.payload?s.payload:null}))).then(t=>t).catch(t=>(console.error("Error in fetch",t),t))}catch(i){return console.error("Error!: "+i),i}}function g(e="nammax_auth"){let r=`; ${document.cookie}`.split(`; ${e}=`);return r.length===2?r.pop().split(";").shift():null}function p(e="/",o=2e3){setTimeout(()=>{window.location.href=e},o)}function U(e=null,o=!1,r=!1,d=!1){if(e==null)return"NaN";let c=new Date,_=new Date(e),i=_.getHours(),n="";if(d||(n=i>=12?"PM":"AM",i=i%12||12),o){let t=_.getMinutes();return t=t<10?`0${t}`:t,r?`${c.getDate()===_.getDate()?"Today At":c.getDate()+1===_.getDate()?"Tomorrow At":c.getDate()+2===_.getDate()?"Day After Tomorrow At":E(e)} ${i}:${t} ${n}`:`${i}:${t} ${n}`}else return r?`${c.getDate()===_.getDate()?"Today At":c.getDate()+1===_.getDate()?"Tomorrow At":c.getDate()+2===_.getDate()?"Day After Tomorrow At":E(e)} ${i} ${n}`:`${E(e)} ${i} ${n}`}function E(e=null){if(e==null)return"NaN";let o=new Date(e);return`${o.getDate()}/${o.getMonth()+1}/${o.getFullYear()}`}function T(e=null){if(e==null)return"NaN";e=e*60;let o=`${e/60^0}`.slice(-2),r=("0"+e%60).slice(-2);return o!="0"?r!="00"?`${o} HR ${r} M`:o+" HR":r+" Mins"}function y(){let e=document.getElementById("loading-screen");e?e.remove():console.error("did not find loading screen")}function D(e){let o=new Date(e);return o.setMinutes(o.getMinutes()-o.getTimezoneOffset()),o}function S(e,o,r=!1){let d=864e5;return Math.round((D(o)-D(e))/d)}var L=Webflow||[];var f="/coach/sign-in",C="/coach/dashboard";var B="/coach/session-summary/";var O="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/coach/sessions/attendence/";var b="https://www.nammacrossfit.com",M=b;var v=`${M}/sign-up-2`;var G=`${M}/user/dashboard`;(()=>{let e={},o,r;window.onload=function(){let n=g();n?(d(n),y()):p(`${f}?reason=NOT_SIGNED_IN`)};function d(n){return N(this,null,function*(){var t=new URL(document.location.href);o=t.searchParams.get("session"),o||p(C);let s=document.getElementById("submit-attendence-btn");s&&(s.disabled=!0);let a=yield h(O+o,"GET",!1,n);if(a.isFetchOk!==void 0&&!a.isFetchOk){console.error(a.message),p(`${f}?reason=NOT_SIGNED_IN`);return}a&&a.length>0&&(r=a[0].gym_id),a.some(m=>m.status==="COMPLETED"?(console.error("Session is already completed"),p(`/coach/session-summary?session=${m.id}`),!1):m.status==="IN PROGRESS"?(c(m),_(m,n),i(m,n),!0):(console.error("Session either unknown or not in progress"),p(`/coach/session-summary?session=${m.id}`),!1))})}function c(n){let t=document.getElementById("header-container");t.querySelector("#session-name").innerText=n.session_name,t.querySelector("#time").innerText=U(n.time,!0),t.querySelector("#date").innerText=new Date(n.time).toLocaleDateString("en-us",{weekday:"short",month:"short",day:"numeric"}),t.querySelector("#gym-location").innerText=n.location,t.querySelector("#duration").innerText=T(n.duration)}function _(n){let t=document.getElementById("attendence-container"),s=t.querySelector("#attendence-item");n.users.forEach((a,m)=>{let l=s.cloneNode(!0);if(l.setAttribute("id",""),l.querySelector("#index").innerText=m+1,a.profile_picture&&l.querySelector("#profile-pic").setAttribute("src",a.profile_picture.url),a.membership_end_date){let R=new Date(a.membership_end_date),I=new Date;(a==null?void 0:a.session_ledger)!==void 0&&a.session_ledger.length<=3?l.querySelector("#profile-pic").style.border="3px solid #009ca1":S(I,R,!0)<=3?l.querySelector("#profile-pic").style.border="3px solid red":S(I,R,!0)<=7&&(l.querySelector("#profile-pic").style.border="3px solid orange")}l.querySelector("#user-name").innerText=a.name,l.querySelector("#user-level").innerText=a.level,l.querySelector("#user-injury").innerText=a.injury;let u=l.querySelector("#attendence-checkmarks"),x=u.querySelector("#did-attend"),A=u.querySelector("#did-not-attend");A.classList.add("is-true"),x.onclick=()=>{x.classList.add("is-true"),A.classList.remove("is-true"),e[a.user_id]={attended:!0}},A.onclick=()=>{A.classList.add("is-true"),x.classList.remove("is-true"),e[a.user_id]={attended:!1}},e[a.user_id]={attended:!1},t.append(l)}),s.remove()}function i(n,t){let s=document.getElementById("submit-attendence-btn");s&&(s.disabled=!1),s.onclick=()=>N(this,null,function*(){s.disabled=!0;let a=s.value;s.value="Submitting";let m=[];Object.keys(e).forEach(x=>m.push({user_id:parseInt(x),attended:e[x].attended}));let l={allUsersAttendence:m,gym_id:r,session_id:parseInt(n.id)||n.id||""},u=yield h(O+n.id,"POST",l,t);if(u.isFetchOk!==void 0&&!u.isFetchOk){console.error(u.message),p(`${f}?reason=NOT_SIGNED_IN`),s.disabled=!1,s.value=a;return}p(`${B}?session=${n.id}`)})}})();var X=L||[];X.push(function(){$(document).off("submit"),$("form").on("submit",function(e){return N(this,null,function*(){e.preventDefault()})})});

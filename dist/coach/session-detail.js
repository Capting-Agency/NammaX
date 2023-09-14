var N=(e,n,r)=>new Promise((d,_)=>{var c=t=>{try{o(r.next(t))}catch(s){_(s)}},i=t=>{try{o(r.throw(t))}catch(s){_(s)}},o=t=>t.done?d(t.value):Promise.resolve(t.value).then(c,i);o((r=r.apply(e,n)).next())});function h(e,n="GET",r=!1,d=!1,_=!1,c=!0){try{let i={"Content-Type":"application/json"};_&&(i={}),d&&(i.Authorization=`Bearer ${d}`);let o={method:n,headers:i};return r&&(c?o.body=JSON.stringify(r):o.body=r),fetch(e,o).then(t=>t.ok?t.json():t.json().then(s=>(Promise.reject(s.message),{isFetchOk:!1,status:t.status,message:s.message,payload:s&&s.payload?s.payload:null}))).then(t=>t).catch(t=>(console.error("Error in fetch",t),t))}catch(i){return console.error("Error!: "+i),i}}function I(e="nammax_auth"){let r=`; ${document.cookie}`.split(`; ${e}=`);return r.length===2?r.pop().split(";").shift():null}function p(e="/",n=2e3){setTimeout(()=>{window.location.href=e},n)}function U(e=null,n=!1,r=!1,d=!1){if(e==null)return"NaN";let _=new Date,c=new Date(e),i=c.getHours(),o="";if(d||(o=i>=12?"PM":"AM",i=i%12||12),n){let t=c.getMinutes();return t=t<10?`0${t}`:t,r?`${_.getDate()===c.getDate()?"Today At":_.getDate()+1===c.getDate()?"Tomorrow At":_.getDate()+2===c.getDate()?"Day After Tomorrow At":E(e)} ${i}:${t} ${o}`:`${i}:${t} ${o}`}else return r?`${_.getDate()===c.getDate()?"Today At":_.getDate()+1===c.getDate()?"Tomorrow At":_.getDate()+2===c.getDate()?"Day After Tomorrow At":E(e)} ${i} ${o}`:`${E(e)} ${i} ${o}`}function E(e=null){if(e==null)return"NaN";let n=new Date(e);return`${n.getDate()}/${n.getMonth()+1}/${n.getFullYear()}`}function y(e=null){if(e==null)return"NaN";e=e*60;let n=`${e/60^0}`.slice(-2),r=("0"+e%60).slice(-2);return n!="0"?r!="00"?`${n} HR ${r} M`:n+" HR":r+" Mins"}function T(){let e=document.getElementById("loading-screen");e?e.remove():console.log("did not find loading screen")}function D(e){let n=new Date(e);return n.setMinutes(n.getMinutes()-n.getTimezoneOffset()),n}function S(e,n,r=!1){let d=864e5;return Math.round((D(n)-D(e))/d)}var L=Webflow||[];var f="/coach/sign-in",C="/coach/dashboard";var M="/coach/session-summary/";var R="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/coach/sessions/attendence/";(()=>{let e={},n,r;window.onload=function(){let o=I();o?(d(o),T()):p(`${f}?reason=NOT_SIGNED_IN`)};function d(o){return N(this,null,function*(){var t=new URL(document.location.href);n=t.searchParams.get("session"),n||p(C);let s=document.getElementById("submit-attendence-btn");s&&(s.disabled=!0);let a=yield h(R+n,"GET",!1,o);if(a.isFetchOk!==void 0&&!a.isFetchOk){console.error(a.message),p(`${f}?reason=NOT_SIGNED_IN`);return}a&&a.length>0&&(r=a[0].gym_id),a.some(m=>m.status==="COMPLETED"?(console.error("Session is already completed"),p(`/coach/session-summary?session=${m.id}`),!1):m.status==="IN PROGRESS"?(_(m),c(m,o),i(m,o),!0):(console.error("Session either unknown or not in progress"),p(`/coach/session-summary?session=${m.id}`),!1))})}function _(o){let t=document.getElementById("header-container");t.querySelector("#session-name").innerText=o.session_name,t.querySelector("#time").innerText=U(o.time,!0),t.querySelector("#date").innerText=new Date(o.time).toLocaleDateString("en-us",{weekday:"short",month:"short",day:"numeric"}),t.querySelector("#gym-location").innerText=o.location,t.querySelector("#duration").innerText=y(o.duration)}function c(o){let t=document.getElementById("attendence-container"),s=t.querySelector("#attendence-item");o.users.forEach((a,m)=>{let l=s.cloneNode(!0);if(l.setAttribute("id",""),l.querySelector("#index").innerText=m+1,a.profile_picture&&l.querySelector("#profile-pic").setAttribute("src",a.profile_picture.url),a.membership_end_date){let O=new Date(a.membership_end_date),g=new Date;(a==null?void 0:a.session_ledger)!==void 0&&a.session_ledger.length<=3?l.querySelector("#profile-pic").style.border="3px solid #009ca1":S(g,O,!0)<=3?l.querySelector("#profile-pic").style.border="3px solid red":S(g,O,!0)<=7&&(l.querySelector("#profile-pic").style.border="3px solid orange")}l.querySelector("#user-name").innerText=a.name,l.querySelector("#user-level").innerText=a.level,l.querySelector("#user-injury").innerText=a.injury;let u=l.querySelector("#attendence-checkmarks"),x=u.querySelector("#did-attend"),A=u.querySelector("#did-not-attend");A.classList.add("is-true"),x.onclick=()=>{x.classList.add("is-true"),A.classList.remove("is-true"),e[a.user_id]={attended:!0}},A.onclick=()=>{A.classList.add("is-true"),x.classList.remove("is-true"),e[a.user_id]={attended:!1}},e[a.user_id]={attended:!1},t.append(l)}),s.remove()}function i(o,t){let s=document.getElementById("submit-attendence-btn");s&&(s.disabled=!1),s.onclick=()=>N(this,null,function*(){s.disabled=!0;let a=s.value;s.value="Submitting";let m=[];Object.keys(e).forEach(x=>m.push({user_id:parseInt(x),attended:e[x].attended}));let l={allUsersAttendence:m,gym_id:r,session_id:parseInt(o.id)||o.id||""},u=yield h(R+o.id,"POST",l,t);if(u.isFetchOk!==void 0&&!u.isFetchOk){console.error(u.message),p(`${f}?reason=NOT_SIGNED_IN`),s.disabled=!1,s.value=a;return}p(`${M}?session=${o.id}`)})}})();var B=L||[];B.push(function(){$(document).off("submit"),$("form").on("submit",function(e){return N(this,null,function*(){e.preventDefault()})})});

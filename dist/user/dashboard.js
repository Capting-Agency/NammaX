var x=(a,r,o)=>new Promise((l,_)=>{var t=n=>{try{i(o.next(n))}catch(e){_(e)}},s=n=>{try{i(o.throw(n))}catch(e){_(e)}},i=n=>n.done?l(n.value):Promise.resolve(n.value).then(t,s);i((o=o.apply(a,r)).next())});var T=["January","February","March","April","May","June","July","August","September","October","November","December"];function h(a,r="GET",o=!1,l=!1,_=!1,t=!0){try{let s={"Content-Type":"application/json"};_&&(s={}),l&&(s.Authorization=`Bearer ${l}`);let i={method:r,headers:s};return o&&(t?i.body=JSON.stringify(o):i.body=o),fetch(a,i).then(n=>n.ok?n.json():n.json().then(e=>(Promise.reject(e.message),{isFetchOk:!1,status:n.status,message:e.message,payload:e&&e.payload?e.payload:null}))).then(n=>n).catch(n=>(console.error("Error in fetch",n),n))}catch(s){return console.error("Error!: "+s),s}}function L(a=null,r="nammax_auth",o=60*60*24){a&&(document.cookie=`${r}=${a}; path=/; max-age=${o}`)}function g(a="nammax_auth"){let o=`; ${document.cookie}`.split(`; ${a}=`);return o.length===2?o.pop().split(";").shift():null}function E(a="/",r=2e3){setTimeout(()=>{window.location.href=a},r)}function y(a=1e3){setTimeout(()=>{window.location.reload()},a)}function N(a=null,r=!1,o=!1,l=!1){if(a==null)return"NaN";let _=new Date,t=new Date(a),s=t.getHours(),i="";if(l||(i=s>=12?"PM":"AM",s=s%12||12),r){let n=t.getMinutes();return n=n<10?`0${n}`:n,o?`${_.getDate()===t.getDate()?"Today":_.getDate()+1===t.getDate()?"Tomorrow":_.getDate()+2===t.getDate()?"Day After Tomorrow":""} ${s}:${n} ${i}`:`${s}:${n} ${i}`}else return o?`${_.getDate()===t.getDate()?"Today":_.getDate()+1===t.getDate()?"Tomorrow":_.getDate()+2===t.getDate()?"Day After Tomorrow":""} ${s} ${i}`:`${s} ${i}`}function S(a=null){if(a==null)return"NaN";a=a*60;let r=`${a/60^0}`.slice(-2),o=("0"+a%60).slice(-2);return r!="0"?o!="00"?`${r} HR ${o} M`:r+" HR":o+" Mins"}function w(a,r=null){if(a!=null){var o,l=a.options.length-1;for(o=l;o>=0;o--)o!==r&&a.remove(o)}}function k(a="/sign-in"){window.localStorage.removeItem("auth"),E(`${a}`)}function R(a=!1,r=!0,o="current-time"){let l=document.getElementById(o);l&&r?(l.innerText=`${new Date().toLocaleDateString("en-us",{weekday:"short",month:"short",day:"numeric"})} | ${N(new Date,!0,!1,a)}`,setTimeout(()=>R(a,r,o),2e4)):l&&!r&&(l.innerText=N(new Date,!0,!1,a),setTimeout(()=>R(a,r,o),2e4))}function b(){let a=document.getElementById("loading-screen");a?a.remove():console.log("did not find loading screen")}function D({single:a=!0,baseElement:r="",TriggerBtn:o="jsModalOpen",_modalWindow:l="jsModal"},_){if(a){var t=r.querySelector("#"+o);t.onclick=function(){var n=document.getElementById(l);_&&_(),n.classList?n.classList.add("open"):n.className+=" open"}}else for(var s=document.getElementsByClassName(o),i=0;i<s.length;i++)s[i].onclick=function(){var n=this.getAttribute("href").substr(1),e=document.getElementById(n);e.classList?e.classList.add("open"):e.className+=" open"}}function I({TriggerBtn:a="jsModalClose",_modalWindow:r="jsModal"},o){var l=document.getElementById(a),_=document.getElementById(r);l.onclick=function(){_.classList?_.classList.remove("open"):_.className=_.className.replace(new RegExp("(^|\\b)"+"open".split(" ").join("|")+"(\\b|$)","gi")," ")},o&&o()}var C=Webflow||[];var O="/sign-in",B="/sign-up-2";var M="/user/dashboard";var v="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/user/dashboard",X="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/user/dashboard/book_session/",P="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/user/dashboard/cancel_session/",K="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/user/dashboard/filters";var F=[],H=[];function G(a){var r=new URL("https://x8ki-letl-twmt.n7.xano.io/api:ocRzyo-e/oauth/google/continue");r.searchParams.set("REDIRECT_URL","https://nammacrossfit.com/user/dashboard"),r.searchParams.set("code",a),r=r.toString();var o=new URL(document.location.href);o.searchParams.delete("code"),o.searchParams.delete("scope"),o.searchParams.delete("authuser"),o.searchParams.delete("hd"),o.searchParams.delete("prompt"),history.replaceState(null,"",o.toString()),fetch(r,{headers:F,method:"GET"}).then(l=>l.json()).then(l=>H=l).then(()=>L(H.token)).catch(l=>{console.error("Error:",l)})}(()=>{window.onload=function(){var t=new URL(document.location.href),s=t.searchParams.get("code");if(s)G(s);else{let i=g(),n=document.querySelector("#navbar-logout-btn");n&&(n.onclick=()=>{k()}),i?(R(),a(i),r(i)):E(`${O}?reason=NOT_SIGNED_IN`)}};function a(t){return x(this,null,function*(){var s=new URL(document.location.href),i=s.searchParams.get("session_name"),n=s.searchParams.get("time");let e=v;if(i&&i!=="Select Program"||n){e+="?",i&&(e+=`session_name=${i}&`),n&&(e+=`time=${n}`);let d=document.getElementById("on-a-filter-container");d.style.display="flex"}let c=yield h(e,"GET",!1,t);if(c.isFetchOk!==void 0&&!c.isFetchOk){console.error(c.message),E(`${O}?reason=NOT_SIGNED_IN`);return}let{users:m,sessions:p}=c;if(m.gym_id===0)E(`${B}?reason=UNSET_DETAILS`);else{o(m);let d=[],A=[];p.forEach(u=>{u.users.some(U=>U&&m&&U.user_id===m.id?(d.push(u),!0):!1)||A.push(u)}),l(m,d),_(m,A)}b()})}function r(t){let s=document.getElementById("filter-form-block"),i=s.querySelector("#filter-program"),n=s.querySelector("#datepicker-input");$(n).attr("autocomplete","off"),$(n).datepicker({startDate:new Date,format:"dd/mm/yyyy",language:"en",orientation:"bottom auto"});function e(){return x(this,null,function*(){let c=yield h(K,"GET",!1,t);if(c.isFetchOk!==void 0&&!c.isFetchOk){console.error(c.message),E(`${O}?reason=NOT_SIGNED_IN`);return}let{sessions:m}=c;w(i,0),m.forEach(p=>{var d=document.createElement("option");d.value=p.name,d.innerHTML=p.name,i.appendChild(d)}),i.removeEventListener("focus",e)})}i.addEventListener("focus",e)}function o(t){document.getElementById("user_name").innerText=t.name,document.getElementById("gym-location").innerText=t.location,t.profile_picture&&(document.getElementById("profile-avatar").style.backgroundImage=`url(${t.profile_picture.url})`)}function l(t,s){return x(this,null,function*(){let i=document.getElementById("booked-sessions-container"),n=i.querySelector("#booked-sessions-item");s.forEach(e=>{let c=n.cloneNode(!0);c.setAttribute("id",""),c.querySelector("#booked-session-name").innerText=e.session_name,c.querySelector("#booked-time").innerText=N(e.time,!0,!0),c.querySelector("#booked-duration").innerText=S(e.duration),c.querySelector("#booked-session-slot-bar").style.width=e.users.length/e.capacity*100+"%",c.querySelector("#booked-capacity").innerText=`${e.users.length}/${e.capacity}`,D({baseElement:c,TriggerBtn:"cancel-booked-session-btn",_modalWindow:"cancel-booked-session-popout"},()=>{let m=document.getElementById("cancel-booked-session-popout");m.querySelector("#session-name").innerText=e.session_name,m.querySelector("#date").innerText=new Date(e.time).toLocaleDateString("en-us",{weekday:"short",month:"short",day:"numeric"}),m.querySelector("#time").innerText=N(e.time),m.querySelector("#duration").innerText=S(e.duration),m.querySelector("#capacity").innerHTML=`${e.users.length}/${e.capacity}`;let p=m.querySelector("#confirm-cancel-booking-popout-btn");p.onclick=()=>x(this,null,function*(){p.disabled=!0;let d=g(),A={session_id:e.id},u=yield h(P+e.id,"POST",A,d);if(u.isFetchOk!==void 0&&!u.isFetchOk){let f=m.querySelector("#warning_block");f.innerText=u.message,f.style.display="flex",p.disabled=!1;return}y()})}),i.prepend(c)}),I({TriggerBtn:"close-cancel-booked-session-modal-btn",_modalWindow:"cancel-booked-session-popout"}),i.classList.remove("off"),n.remove()})}function _(t,s){return x(this,null,function*(){let i=document.getElementById("view-sessions-container"),n=i.querySelector("#view-sessions-item");s.forEach(e=>{let c=n.cloneNode(!0);c.setAttribute("id",""),c.querySelector("#session-name").innerText=e.session_name,c.querySelector("#time").innerText=N(e.time,!1,!0),c.querySelector("#duration").innerText=S(e.duration),c.querySelector("#session-slot-bar").style.width=e.users.length/e.capacity*100+"%",c.querySelector("#capacity").innerText=`${e.users.length}/${e.capacity}`,D({baseElement:c,TriggerBtn:"book-session-btn",_modalWindow:"book-session-popout"},()=>{let m=document.getElementById("book-session-popout");if(m.querySelector("#name").innerText=e.session_name,m.querySelector("#date").innerText=new Date(e.time).toLocaleDateString("en-us",{weekday:"short",month:"short",day:"numeric"}),m.querySelector("#time").innerText=N(e.time),m.querySelector("#duration").innerText=S(e.duration),m.querySelector("#capacity").innerText=`${e.users.length}/${e.capacity}`,t!=null&&t.membership_end_date){console.log(t==null?void 0:t.membership_end_date);let d=t==null?void 0:t.membership_end_date.split("-"),A=T[d[1]-1];m.querySelector("#remaining_sessions").innerText=`Your membership ends on ${d[2]}-${A}-${d[0]}`}else t!=null&&t.tokens&&(t==null?void 0:t.tokens)>0?m.querySelector("#remaining_sessions").innerText=t==null?void 0:t.tokens.toString().padStart(3,"0"):m.querySelector("#remaining_sessions").innerText="Please contact an admin for a membership";let p=m.querySelector("#confirm-booking-popout-btn");p.onclick=()=>x(this,null,function*(){p.disabled=!0;let d=g(),A={session_id:e.id},u=yield h(X+e.id,"POST",A,d);if(u.isFetchOk!==void 0&&!u.isFetchOk){let f=m.querySelector("#warning_block");f.innerText=u.message,f.style.display="flex",p.disabled=!1;return}y()})}),i.prepend(c)}),I({TriggerBtn:"close-cancel-booking-session-modal-btn",_modalWindow:"book-session-popout"}),i.classList.remove("off"),n.remove()})}})();var q=C||[];q.push(function(){$(document).off("submit"),$("form").submit(function(a){return x(this,null,function*(){a.preventDefault();let r=$(this);if(g()){let l=r[0][0].value,_=r[0][1].value,t=M;if((l&&l!=="Select Program"||_)&&(t+="?",l!=="Select Program"&&l!=="Loading..."&&(t+=`session_name=${l}&`),_)){let s=_.split("/"),i=new Date(+s[2],s[1]-1,+s[0]).toISOString(),n=new Date((typeof i=="string"?new Date(i):i).toLocaleString("en-US",{timeZone:"Asia/Kolkata"}));t+=`time=${n.getTime()+1e7}`}E(t)}})})});

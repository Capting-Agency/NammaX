var f=(e,t,n)=>new Promise((l,m)=>{var s=o=>{try{a(n.next(o))}catch(r){m(r)}},i=o=>{try{a(n.throw(o))}catch(r){m(r)}},a=o=>o.done?l(o.value):Promise.resolve(o.value).then(s,i);a((n=n.apply(e,t)).next())});var C=["January","February","March","April","May","June","July","August","September","October","November","December"];function R(e,t="GET",n=!1,l=!1,m=!1,s=!0){try{let i={"Content-Type":"application/json"};m&&(i={}),l&&(i.Authorization=`Bearer ${l}`);let a={method:t,headers:i};return n&&(s?a.body=JSON.stringify(n):a.body=n),fetch(e,a).then(o=>o.ok?o.json():o.json().then(r=>(Promise.reject(r.message),{isFetchOk:!1,status:o.status,message:r.message,payload:r&&r.payload?r.payload:null}))).then(o=>o).catch(o=>(console.error("Error in fetch",o),o))}catch(i){return console.error("Error!: "+i),i}}function w(e=null,t="nammax_auth",n=60*60*24){e&&(document.cookie=`${t}=${e}; path=/; max-age=${n}`)}function O(e="nammax_auth"){let n=`; ${document.cookie}`.split(`; ${e}=`);return n.length===2?n.pop().split(";").shift():null}function h(e="/",t=2e3){setTimeout(()=>{window.location.href=e},t)}function U(e=1e3){setTimeout(()=>{window.location.reload()},e)}function E(e=null,t=!1,n=!1,l=!1){if(e==null)return"NaN";let m=new Date,s=new Date(e),i=s.getHours(),a="";if(l||(a=i>=12?"PM":"AM",i=i%12||12),t){let o=s.getMinutes();return o=o<10?`0${o}`:o,n?`${m.getDate()===s.getDate()?"Today At":m.getDate()+1===s.getDate()?"Tomorrow At":m.getDate()+2===s.getDate()?"Day After Tomorrow At":T(e)} ${i}:${o} ${a}`:`${i}:${o} ${a}`}else return n?`${m.getDate()===s.getDate()?"Today At":m.getDate()+1===s.getDate()?"Tomorrow At":m.getDate()+2===s.getDate()?"Day After Tomorrow At":T(e)} ${i} ${a}`:`${T(e)} ${i} ${a}`}function T(e=null){if(e==null)return"NaN";let t=new Date(e);return`${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()}`}function y(e=null){if(e==null)return"NaN";e=e*60;let t=`${e/60^0}`.slice(-2),n=("0"+e%60).slice(-2);return t!="0"?n!="00"?`${t} HR ${n} M`:t+" HR":n+" Mins"}function v(e,t=null){if(e!=null){var n,l=e.options.length-1;for(n=l;n>=0;n--)n!==t&&e.remove(n)}}function k(e="/sign-in"){window.localStorage.removeItem("auth"),h(`${e}`)}function D(e=!1,t=!0,n="current-time"){let l=document.getElementById(n);l&&t?(l.innerText=`${new Date().toLocaleDateString("en-us",{weekday:"short",month:"short",day:"numeric"})} | ${E(new Date().getTime(),!0,!1,e)}`,setTimeout(()=>D(e,t,n),2e4)):l&&!t&&(l.innerText=E(new Date().getTime(),!0,!1,e),setTimeout(()=>D(e,t,n),2e4))}function P(){let e=document.getElementById("loading-screen");e?e.remove():console.error("did not find loading screen")}function M(e){let t=new Date(e);return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t}function j(e,t,n=!1){let l=864e5;return Math.round((M(t)-M(e))/l)}function L({single:e=!0,baseElement:t="",TriggerBtn:n="jsModalOpen",_modalWindow:l="jsModal"},m){if(e){var s=t.querySelector("#"+n);s.onclick=function(){var o=document.getElementById(l);m&&m(),o.classList?o.classList.add("open"):o.className+=" open"}}else for(var i=document.getElementsByClassName(n),a=0;a<i.length;a++)i[a].onclick=function(){var o=this.getAttribute("href").substr(1),r=document.getElementById(o);r.classList?r.classList.add("open"):r.className+=" open"}}function b({TriggerBtn:e="jsModalClose",_modalWindow:t="jsModal"},n){var l=document.getElementById(e),m=document.getElementById(t);l.onclick=function(){m.classList?m.classList.remove("open"):m.className=m.className.replace(new RegExp("(^|\\b)"+"open".split(" ").join("|")+"(\\b|$)","gi")," ")},n&&n()}var X=Webflow||[];var V="https://www.nammacrossfit.com",z=V,I="/sign-in",F="/sign-up-2",ce=`${z}/sign-up-2`,H="/user/dashboard",K=`${z}/user/dashboard`,G="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/user/dashboard",W="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/user/dashboard/book_session/",q="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/user/dashboard/cancel_session/",Y="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/user/dashboard/filters",J="https://xoxo-jnzf-s0on.m2.xano.io/api:U0aE1wpF/oauth/google/continue";var Q=[];function Z(e){return f(this,null,function*(){var t=new URL(J);t.searchParams.set("redirect_uri",`${K}/`),t.searchParams.set("code",e),t=t.toString();var n=new URL(document.location.href);n.searchParams.delete("code"),n.searchParams.delete("scope"),n.searchParams.delete("authuser"),n.searchParams.delete("hd"),n.searchParams.delete("prompt"),history.replaceState(null,"",n.toString());try{let l=yield fetch(t,{headers:Q,method:"GET"});return l=yield l.json(),w(l.token),l.token}catch(l){return console.error("Error:",l),null}})}(()=>{window.onload=function(){return f(this,null,function*(){var s=new URL(document.location.href),i=s.searchParams.get("code");let a;i&&(a=yield Z(i)),a||(a=O());let o=document.querySelector("#navbar-logout-btn");o&&(o.onclick=()=>{k()}),a?(D(),e(a),t(a)):h(`${I}?reason=NOT_SIGNED_IN`)})};function e(s){return f(this,null,function*(){var i=new URL(document.location.href),a=i.searchParams.get("session_name"),o=i.searchParams.get("time");let r=G;if(a&&a!=="Select Program"||o){r+="?",a&&(r+=`session_name=${a}&`),o&&(r+=`time=${o}`);let d=document.getElementById("on-a-filter-container");d.style.display="flex"}let c=yield R(r,"GET",!1,s);if(c.isFetchOk!==void 0&&!c.isFetchOk){console.error(c.message),h(`${I}?reason=NOT_SIGNED_IN`);return}let{users:_,sessions:p}=c;if(_.gym_id===0||_.height===0||_.weight===0||_.date_of_birth===""||_.date_of_birth===null)h(`${F}?reason=UNSET_DETAILS`);else{n(_);let d=[],A=[];p.forEach(x=>{x.users.some(N=>N&&_&&N.user_id===_.id?(d.push(x),!0):!1)||A.push(x)}),l(d),m(_,A),P()}})}function t(s){let i=document.getElementById("filter-form-block"),a=i.querySelector("#filter-program"),o=i.querySelector("#datepicker-input");$(o).attr("autocomplete","off"),$(o).datepicker({startDate:new Date,format:"dd/mm/yyyy",language:"en",orientation:"bottom auto"});function r(){return f(this,null,function*(){let c=yield R(Y,"GET",!1,s);if(c.isFetchOk!==void 0&&!c.isFetchOk){console.error(c.message),h(`${I}?reason=NOT_SIGNED_IN`);return}let{sessions:_}=c;v(a,0),_.forEach(p=>{var d=document.createElement("option");d.value=p.name,d.innerHTML=p.name,a.appendChild(d)}),a.removeEventListener("focus",r)})}a.addEventListener("focus",r)}function n(s){document.getElementById("user_name").innerText=s.name,document.getElementById("gym-location").innerText=s.location,s.profile_picture&&(document.getElementById("profile-avatar").style.backgroundImage=`url(${s.profile_picture.url})`)}function l(s){return f(this,null,function*(){let i=document.getElementById("booked-sessions-container"),a=i.querySelector("#booked-sessions-item");s.sort((r,c)=>c.time-r.time).forEach(r=>{let c=a.cloneNode(!0);c.setAttribute("id",""),c.querySelector("#booked-session-name").innerText=r.session_name,c.querySelector("#booked-time").innerText=E(r.time,!0,!0),c.querySelector("#booked-duration").innerText=y(r.duration);let _=(r.users.length/r.capacity).toFixed(2);c.querySelector("#booked-capacity").innerText=`${_>=1?"Full":_>.85?"Few Slots Left":_>.6?"Filling Fast!":(_*100).toFixed(2)+"%"}`,c.querySelector("#booked-session-slot-bar").style.width=_*100+"%",L({baseElement:c,TriggerBtn:"cancel-booked-session-btn",_modalWindow:"cancel-booked-session-popout"},()=>{let p=document.getElementById("cancel-booked-session-popout");p.querySelector("#session-name").innerText=r.session_name,p.querySelector("#date").innerText=new Date(r.time).toLocaleDateString("en-us",{weekday:"short",month:"short",day:"numeric"}),p.querySelector("#time").innerText=E(r.time,!0),p.querySelector("#duration").innerText=y(r.duration);let d=(r.users.length/r.capacity).toFixed(2);p.querySelector("#capacity").innerHTML=d*100+"%";let A=p.querySelector("#confirm-cancel-booking-popout-btn");A.onclick=()=>f(this,null,function*(){A.disabled=!0;let x=p.innerText;A.innerText="Cancelling";let u=O(),N={session_id:r.id},g=yield R(q+r.id,"POST",N,u);if(g.isFetchOk!==void 0&&!g.isFetchOk){let S=p.querySelector("#warning_block");S.innerText=g.message,S.style.display="flex",A.disabled=!1,A.innerText=x;return}U()})}),i.prepend(c)}),b({TriggerBtn:"close-cancel-booked-session-modal-btn",_modalWindow:"cancel-booked-session-popout"}),i.classList.remove("off"),a.remove()})}function m(s,i){return f(this,null,function*(){let a=document.getElementById("view-sessions-container"),o=a.querySelector("#view-sessions-item");i.sort((c,_)=>_.time-c.time).forEach(c=>{let _=o.cloneNode(!0);_.setAttribute("id",""),_.querySelector("#session-name").innerText=c.session_name,_.querySelector("#time").innerText=E(c.time,!0,!0),_.querySelector("#duration").innerText=y(c.duration);let p=(c.users.length/c.capacity).toFixed(2);_.querySelector("#capacity").innerText=`${p>=1?"Full":p>.85?"Few Slots Left":p>.6?"Filling Fast!":(p*100).toFixed(2)+"%"}`,_.querySelector("#session-slot-bar").style.width=p*100+"%",L({baseElement:_,TriggerBtn:"book-session-btn",_modalWindow:"book-session-popout"},()=>{let d=document.getElementById("book-session-popout");d.querySelector("#name").innerText=c.session_name,d.querySelector("#date").innerText=new Date(c.time).toLocaleDateString("en-us",{weekday:"short",month:"short",day:"numeric"}),d.querySelector("#gym_location").innerText=s.location,d.querySelector("#time").innerText=E(c.time,!0),d.querySelector("#duration").innerText=y(c.duration);let A=((c.users.length/c.capacity).toFixed(2)*100).toFixed(2);if(d.querySelector("#capacity").innerText=`${A}%`,s!=null&&s.tokens&&(s==null?void 0:s.tokens)>0){let u=s==null?void 0:s.membership_end_date.split("-"),N=C[u[1]-1];j(new Date(u[0],u[1]-1,u[2]),new Date)>=1?d.querySelector("#remaining_sessions").innerText=`Your membership ended on ${u[2]}-${N}-${u[0]})`:d.querySelector("#remaining_sessions").innerText=`${s==null?void 0:s.tokens} tokens. (ends on ${u[2]}-${N}-${u[0]})`}else d.querySelector("#remaining_sessions").innerText="Membership Expired. Please contact an admin for a membership";let x=d.querySelector("#confirm-booking-popout-btn");x.onclick=()=>f(this,null,function*(){x.disabled=!0;let u=x.innerText;x.innerText="Confirming...";let N=O(),g={session_id:c.id},S=yield R(W+c.id,"POST",g,N);if(S.isFetchOk!==void 0&&!S.isFetchOk){let B=d.querySelector("#warning_block");B.innerText=S.message,B.style.display="flex",x.disabled=!1,x.innerText=u;return}U()})}),a.prepend(_)}),b({TriggerBtn:"close-cancel-booking-session-modal-btn",_modalWindow:"book-session-popout"}),a.classList.remove("off"),o.remove()})}})();var ee=X||[];ee.push(function(){$(document).off("submit"),$("form").submit(function(e){return f(this,null,function*(){e.preventDefault();let t=$(this);if(O()){let l=t[0][0].value,m=t[0][1].value,s=t[0][2];s.disabled=!0,s.value="Applying Filter";let i=H;if((l&&l!=="Select Program"||m)&&(i+="?",l!=="Select Program"&&l!=="Loading..."&&(i+=`session_name=${l}&`),m)){let a=m.split("/"),o=new Date(+a[2],a[1]-1,+a[0]).toISOString(),r=new Date((typeof o=="string"?new Date(o):o).toLocaleString("en-US",{timeZone:"Asia/Kolkata"}));i+=`time=${r.getTime()+1e7}`}h(i)}})})});

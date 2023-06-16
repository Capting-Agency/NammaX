var I=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var D=(e,n)=>{var t={};for(var i in e)W.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&I)for(var i of I(e))n.indexOf(i)<0&&Y.call(e,i)&&(t[i]=e[i]);return t};var A=(e,n,t)=>new Promise((i,r)=>{var s=o=>{try{c(t.next(o))}catch(l){r(l)}},a=o=>{try{c(t.throw(o))}catch(l){r(l)}},c=o=>o.done?i(o.value):Promise.resolve(o.value).then(s,a);c((t=t.apply(e,n)).next())});var p={ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN",COACH:"COACH"};function x(e,n="GET",t=!1,i=!1,r=!1,s=!0){try{let a={"Content-Type":"application/json"};r&&(a={}),i&&(a.Authorization=`Bearer ${i}`);let c={method:n,headers:a};return t&&(s?c.body=JSON.stringify(t):c.body=t),fetch(e,c).then(o=>o.ok?o.json():o.json().then(l=>(Promise.reject(l.message),{isFetchOk:!1,status:o.status,message:l.message,payload:l&&l.payload?l.payload:null}))).then(o=>o).catch(o=>(console.error("Error in fetch",o),o))}catch(a){return console.error("Error!: "+a),a}}function g(e="nammax_auth"){let t=`; ${document.cookie}`.split(`; ${e}=`);return t.length===2?t.pop().split(";").shift():null}function R(e="/",n=2e3){setTimeout(()=>{window.location.href=e},n)}function w(e=null,n=!1,t=!1,i=!1){if(e==null)return"NaN";let r=new Date,s=new Date(e),a=s.getHours(),c="";if(i||(c=a>=12?"PM":"AM",a=a%12||12),n){let o=s.getMinutes();return o=o<10?`0${o}`:o,t?`${r.getDate()===s.getDate()?"Today":r.getDate()+1===s.getDate()?"Tomorrow":r.getDate()+2===s.getDate()?"Day After Tomorrow":""} ${a}:${o} ${c}`:`${a}:${o} ${c}`}else return t?`${r.getDate()===s.getDate()?"Today":r.getDate()+1===s.getDate()?"Tomorrow":r.getDate()+2===s.getDate()?"Day After Tomorrow":""} ${a} ${c}`:`${a} ${c}`}function y(e=null){if(e==null)return"NaN";let n=new Date(e);return`${n.getDate()}/${n.getMonth()+1}/${n.getFullYear()}`}function U(e=null){if(e==null)return"NaN";let n=e.split("-"),t=Date.now()-new Date(parseInt(n[2]),parseInt(n[1])-1,parseInt(n[0])).getTime(),i=new Date(t);return Math.abs(i.getUTCFullYear()-1970)}function h(e,n=null){if(e!=null){var t,i=e.options.length-1;for(t=i;t>=0;t--)t!==n&&e.remove(t)}}function T(e="/admin/sign-in",n="sidebar-logout-btn"){let t=document.getElementById(n);t?t.onclick=()=>q(e):console.error("Logout button not found")}function q(e="/sign-in"){window.localStorage.removeItem("auth"),R(`${e}`)}function b(e=null,n=0){if(e==null)return"NaN";var t=e.getDate();return e.setMonth(e.getMonth()+ +n),e.getDate()!=t&&e.setDate(0),e}function L(e=new Date,n=0){let t=e;return t&&t.setDate(t.getDate()+n),t}function C(e=p.ADMIN){if(e===p.ADMIN){let n=document.getElementById("admin-nav"),t=document.getElementById("super-admin-nav");n&&(n.style.display="flex"),t&&t.remove()}else if(e===p.SUPER_ADMIN){let n=document.getElementById("admin-nav"),t=document.getElementById("super-admin-nav");t&&(t.style.display="flex"),n&&n.remove()}}function k(){let e=document.getElementById("loading-screen");e?e.remove():console.log("did not find loading screen")}function M({mode:e="API",clientObjRefName:n="name",data:t,token:i,API:r,extraXanoInputObj:s=[],searchContainerElId:a=""},c,o=null,l=null){let m,f,_;if(a.length>0){let N=document.getElementById(a);m=N.querySelector("#search-input"),m.setAttribute("placeholder","Search"),f=N.querySelector("#search-btn"),_=N.querySelector("#search-reset-btn")}else m=document.getElementById("search-input"),m.setAttribute("placeholder","Search"),f=document.getElementById("search-btn"),_=document.getElementById("search-reset-btn");_.onclick=()=>{m.value="",B(_,{mode:e,clientObjRefName:n,data:t,searchquery:"",token:i,API:r,extraXanoInputObj:s},c,o,l)},f.onclick=()=>{let N=m.value;B(_,{mode:e,clientObjRefName:n,data:t,searchquery:N,token:i,API:r,extraXanoInputObj:s},c,o,l)}}function B(f,_,N,pe,Ae){return A(this,arguments,function*(e,{mode:n,clientObjRefName:t,data:i,searchquery:r,token:s,API:a,extraXanoInputObj:c=[]},o,l,m){if(r.length===0)e.style.display="none",l?o(i,l):o(i);else try{if(n==="API"){let d={search_query:`${r}:*`};c.length>0&&c.map(H=>{for(let[F,G]of Object.entries(H))d[F]=G});let u=yield x(a+"query","POST",d,s);if(u.isFetchOk!==void 0&&!u.isFetchOk)throw console.error(u.message),Error("API call failed");e.style.display="flex",l?o(u,l):o(u)}else{let d=i.filter(u=>u[t].toLowerCase().includes(r.toLowerCase()));e.style.display="flex",l?o(d,l):o(d)}}catch(d){m?m():console.error(d)}})}var v=Webflow||[];var O="/admin/sign-in";var S="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/admin/user_detail/",X="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/admin/user_detail/payment/";var E,K;window.onload=function(){return A(this,null,function*(){T(O,"sidebar-logout-btn");var e=new URL(document.location.href);if(E=e.searchParams.get("userId")||null,!E){console.error("No user id found");return}let n=g();if(n){let i=yield x(S+E,"GET",!1,n);if(i.isFetchOk!==void 0&&!i.isFetchOk){console.error(i.message);return}let t=i,{team_role:r}=t,s=D(t,["team_role"]);r&&(r===p.SUPER_ADMIN||r===p.ADMIN)?(C(r),j(s)):R(`${O}?reason=UNAUTHORIZED_USER`)}else R(`${O}?reason=NOT_SIGNED_IN`)})};function j(e){return A(this,null,function*(){let{gyms:n,user:t,payment_ledger:i}=e;K=t.gym_id,z(t,n),P(t.session_ledger),J(i),Q(),M({mode:"client",clientObjRefName:"session_name",data:t.session_ledger},P),k()})}function z(e,n){e.profile_picture&&$("#user-detail-pfp").css("background-image",`url(${e.profile_picture.url})`),$("#user-detail-name").text(e.name),$("#user-detail-email").text(e.email),$("#user-detail-gender").text(e.gender),$("#user-detail-number").text(e.contact_number),$("#user-detail-weight").text(e.weight),$("#user-detail-height").text(e.height),$("#user-detail-dob").text(`${e.date_of_birth} (${U(e.date_of_birth)} Y/O)`);let t=document.getElementById("user-detail-gym");h(t),n.forEach(r=>{var s=document.createElement("option");s.value=r.id,s.innerText=r.location,r.id===e.gym_id&&(s.selected=!0),t.appendChild(s)}),new Date(e.membership_end_date).getTime()>new Date().getTime()?$("#user-detail-membership").text(`${e.membership_status} (${e.membership_end_date})`).css("background-color","#fff").css("color","#000"):$("#user-detail-membership").text("No Membership").css("background-color","#ff634e");let i=document.getElementById("user-detail-fitness-level");h(i),["Beginner","Amateur","Advanced","Hardcore"].forEach(r=>{var s=document.createElement("option");s.value=r,s.innerText=r,r===e.level&&(s.selected=!0),i.appendChild(s)})}function P(e){let n=document.getElementById("table-container"),t=n.querySelector("#table-item");function i(r){let s=n.querySelectorAll(".adb-user.w-inline-block");s.forEach((a,c)=>{c!==s.length-1&&a.remove()}),r.forEach((a,c)=>{var m;let o=t.cloneNode(!0);o.setAttribute("id",""),o.setAttribute("href",`/admin/session?sessionId=${a.sessions_id}`);let l=o.querySelectorAll(".colcontent");c%2===0&&(o.style.backgroundColor="#00edf4"),l[1].innerText=a.session_name,l[2].innerText=a.name,l[3].innerText=a.code,l[4].innerText=y(a.time),l[5].innerText=w(a.time,!0),l[6].innerText=((m=a==null?void 0:a.users)==null?void 0:m.length)||0,l[7].innerText=a.status,o.style.display="flex",n.prepend(o)})}i(e),t.style.display="none"}function J(e){let n=document.getElementById("payment-container"),t=n.querySelector("#payment-item");function i(r){r.sort((a,c)=>a.time-c.time).forEach((a,c)=>{let o=t.cloneNode(!0);o.setAttribute("id","");let l=o.querySelectorAll(".colcontent");c%2===0&&(o.style.backgroundColor="#00edf4"),l[0].innerText=a.amount,l[1].innerText=a.mode_of_payment,l[2].innerText=a.membership_plan,l[3].innerText=y(a.time),l[4].innerText=a.transaction_id||"NaN",o.style.display="flex",n.prepend(o)})}i(e),t.style.display="none"}function Q(){let e=document.getElementById("mode-of-payment-select"),n=document.getElementById("membership-plan-select"),t=document.getElementById("datepicker-input");h(e),["Cash","Card","Online"].forEach((i,r)=>{var s=document.createElement("option");s.value=i,s.innerText=i,r===0&&(s.selected=!0),e.appendChild(s)}),h(n),["1 day","7 days","21 days","1 month","3 months","6 months","1 year"].forEach((i,r)=>{var s=document.createElement("option");s.value=i,s.innerText=i,r===0&&(s.selected=!0),n.appendChild(s)}),$(t).datepicker({format:"dd/mm/yyyy",language:"en",multidate:!1,orientation:"bottom auto"}).datepicker("setDate","now")}var V=v||[];V.push(function(){$(document).off("submit"),$("form").on("submit",function(e){return A(this,null,function*(){e.preventDefault();let n=$(this);if(n.attr("id")==="payment-form-block"){let t=g();if(t){let i=n[0][0].value,r=n[0][1].value,s=n[0][2].value,a=n[0][3].value,c=n[0][4].value;if(i!==""&&r!==""&&s!==""&&a!==""){let o,l=!1;switch(s){case"1 day":o=1,l=!0;break;case"7 days":o=7,l=!0;break;case"21 days":o=21,l=!0;break;case"1 month":o=1;break;case"3 months":o=3;break;case"6 months":o=6;break;case"1 year":o=12;break}let m=a.split("/"),f={amount:i,transaction_id:c||null,mode_of_payment:r,membership_plan:s,membership_end_date:l?L(new Date,o):b(new Date,o),time:new Date(`${m[2]}/${m[1]}/${m[0]} ${new Date().getHours()}:${new Date().getMinutes()}`).getTime(),gym_id:K},_=yield x(X+E,"POST",f,t);if(_.isFetchOk!==void 0&&!_.isFetchOk){console.error(_.message),n.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("There was an error trying to add your session. Please refresh your browser and try again.");return}n.siblings(".w-form-done").show().siblings(".w-form-fail").hide(),window.location.reload()}else console.error("Please fill in the required fields"),n.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("Please fill in the first four fields")}else console.error("No token found"),n.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("Please fill out all fields")}else if(n.attr("id")==="user-detail-form-block"){let t=g();if(t){let i=document.getElementById("user-detail-gym").value,r=document.getElementById("user-detail-fitness-level").value,s={gym_id:i,level:r},a=yield x(S+E,"POST",s,t);if(a.isFetchOk!==void 0&&!a.isFetchOk){console.error(a.message),n.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("There was an error trying to add your session. Please refresh your browser and try again.");return}n.hide().siblings(".w-form-done").show().siblings(".w-form-fail").hide(),window.location.reload()}else console.error("No token found"),n.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("Please fill out all fields")}})})});

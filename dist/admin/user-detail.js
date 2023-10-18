var D=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var U=(e,t)=>{var n={};for(var s in e)W.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&D)for(var s of D(e))t.indexOf(s)<0&&Y.call(e,s)&&(n[s]=e[s]);return n};var A=(e,t,n)=>new Promise((s,a)=>{var l=r=>{try{c(n.next(r))}catch(i){a(i)}},o=r=>{try{c(n.throw(r))}catch(i){a(i)}},c=r=>r.done?s(r.value):Promise.resolve(r.value).then(l,o);c((n=n.apply(e,t)).next())});var f={ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN",COACH:"COACH"};function h(e,t="GET",n=!1,s=!1,a=!1,l=!0){try{let o={"Content-Type":"application/json"};a&&(o={}),s&&(o.Authorization=`Bearer ${s}`);let c={method:t,headers:o};return n&&(l?c.body=JSON.stringify(n):c.body=n),fetch(e,c).then(r=>r.ok?r.json():r.json().then(i=>(Promise.reject(i.message),{isFetchOk:!1,status:r.status,message:i.message,payload:i&&i.payload?i.payload:null}))).then(r=>r).catch(r=>(console.error("Error in fetch",r),r))}catch(o){return console.error("Error!: "+o),o}}function O(e="nammax_auth"){let n=`; ${document.cookie}`.split(`; ${e}=`);return n.length===2?n.pop().split(";").shift():null}function R(e="/",t=2e3){setTimeout(()=>{window.location.href=e},t)}function T(e=null,t=!1,n=!1,s=!1){if(e==null)return"NaN";let a=new Date,l=new Date(e),o=l.getHours(),c="";if(s||(c=o>=12?"PM":"AM",o=o%12||12),t){let r=l.getMinutes();return r=r<10?`0${r}`:r,n?`${a.getDate()===l.getDate()?"Today At":a.getDate()+1===l.getDate()?"Tomorrow At":a.getDate()+2===l.getDate()?"Day After Tomorrow At":N(e)} ${o}:${r} ${c}`:`${o}:${r} ${c}`}else return n?`${a.getDate()===l.getDate()?"Today At":a.getDate()+1===l.getDate()?"Tomorrow At":a.getDate()+2===l.getDate()?"Day After Tomorrow At":N(e)} ${o} ${c}`:`${N(e)} ${o} ${c}`}function N(e=null){if(e==null)return"NaN";let t=new Date(e);return`${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()}`}function b(e=null){if(e==null)return"NaN";let t=e.split("-"),n=Date.now()-new Date(parseInt(t[2]),parseInt(t[1])-1,parseInt(t[0])).getTime(),s=new Date(n);return Math.abs(s.getUTCFullYear()-1970)}function E(e,t=null){if(e!=null){var n,s=e.options.length-1;for(n=s;n>=0;n--)n!==t&&e.remove(n)}}function L(e="/admin/sign-in",t="sidebar-logout-btn"){let n=document.getElementById(t);n?n.onclick=()=>q(e):console.error("Logout button not found")}function q(e="/sign-in"){window.localStorage.removeItem("auth"),R(`${e}`)}function C(e=null,t=0){if(e==null)return"NaN";var n=e.getDate();return e.setMonth(e.getMonth()+ +t),e.getDate()!=n&&e.setDate(0),e}function B(e=new Date,t=0){let n=e;return n&&n.setDate(n.getDate()+t),n}function M(e=f.ADMIN){if(e===f.ADMIN){let t=document.getElementById("admin-nav"),n=document.getElementById("super-admin-nav");t&&(t.style.display="flex"),n&&n.remove()}else if(e===f.SUPER_ADMIN){let t=document.getElementById("admin-nav"),n=document.getElementById("super-admin-nav");n&&(n.style.display="flex"),t&&t.remove()}}function w(){let e=document.getElementById("loading-screen");e?e.remove():console.log("did not find loading screen")}function P({mode:e="API",clientObjRefName:t="name",data:n,token:s,API:a,extraXanoInputObj:l=[],searchContainerElId:o=""},c,r=null,i=null){let m,d,_;if(o.length>0){let u=document.getElementById(o);m=u.querySelector("#search-input"),m.setAttribute("placeholder","Search"),d=u.querySelector("#search-btn"),_=u.querySelector("#search-reset-btn")}else m=document.getElementById("search-input"),m.setAttribute("placeholder","Search"),d=document.getElementById("search-btn"),_=document.getElementById("search-reset-btn");_.onclick=()=>{m.value="",v(_,{mode:e,clientObjRefName:t,data:n,searchquery:"",token:s,API:a,extraXanoInputObj:l},c,r,i)},d.onclick=()=>{let u=m.value;v(_,{mode:e,clientObjRefName:t,data:n,searchquery:u,token:s,API:a,extraXanoInputObj:l},c,r,i)}}function v(d,_,u,S,ge){return A(this,arguments,function*(e,{mode:t,clientObjRefName:n,data:s,searchquery:a,token:l,API:o,extraXanoInputObj:c=[]},r,i,m){if(a.length===0)e.style.display="none",i?r(s,i):r(s);else try{if(t==="API"){let p={search_query:`${a}:*`};c.length>0&&c.map(k=>{for(let[F,G]of Object.entries(k))p[F]=G});let x=yield h(o+"query","POST",p,l);if(x.isFetchOk!==void 0&&!x.isFetchOk)throw console.error(x.message),Error("API call failed");e.style.display="flex",i?r(x,i):r(x)}else{let p=s.filter(x=>x[n].toLowerCase().includes(a.toLowerCase()));e.style.display="flex",i?r(p,i):r(p)}}catch(p){m?m():console.error(p)}})}var X=Webflow||[];var y="/admin/sign-in";var I="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/admin/user_detail/",j="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/admin/user_detail/payment/";var J="https://nammax.webflow.io",V="https://www.nammacrossfit.com",Q=[J,V],z=Q[1];var de=`${z}/sign-up-2`;var ue=`${z}/user/dashboard`;var g,H;window.onload=function(){return A(this,null,function*(){L(y,"sidebar-logout-btn");var e=new URL(document.location.href);if(g=e.searchParams.get("userId")||null,!g){console.error("No user id found");return}let t=O();if(t){let s=yield h(I+g,"GET",!1,t);if(s.isFetchOk!==void 0&&!s.isFetchOk){console.error(s.message);return}let n=s,{team_role:a}=n,l=U(n,["team_role"]);a&&(a===f.SUPER_ADMIN||a===f.ADMIN)?(M(a),Z(l)):R(`${y}?reason=UNAUTHORIZED_USER`)}else R(`${y}?reason=NOT_SIGNED_IN`)})};function Z(e){return A(this,null,function*(){let{gyms:t,user:n,payment_ledger:s}=e;H=n.gym_id,ee(n,t),K(n.session_ledger),te(s),ne(),P({mode:"client",clientObjRefName:"session_name",data:n.session_ledger},K),w()})}function ee(e,t){e.profile_picture&&$("#user-detail-pfp").css("background-image",`url(${e.profile_picture.url})`),$("#user-detail-name").text(e.name),$("#user-detail-email").text(e.email),$("#user-detail-gender").text(e.gender),$("#user-detail-number").text(e.contact_number),$("#user-detail-weight").text(e.weight),$("#user-detail-height").text(e.height),$("#user-detail-dob").text(`${e.date_of_birth} (${b(e.date_of_birth)} Y/O)`);let n=document.getElementById("user-detail-gym");E(n),t.forEach(l=>{var o=document.createElement("option");o.value=l.id,o.innerText=l.location,l.id===e.gym_id&&(o.selected=!0),n.appendChild(o)});let s=e.membership_end_date.split("-");new Date(e.membership_end_date).getTime()>new Date().getTime()?$("#user-detail-membership").text(`${e.membership_status} (${s[2]}-${s[1]}-${s[0]})`).css("background-color","#fff").css("color","#000"):$("#user-detail-membership").text("No Membership").css("background-color","#ff634e");let a=document.getElementById("user-detail-fitness-level");E(a),["Beginner","Amateur","Advanced","Hardcore"].forEach(l=>{var o=document.createElement("option");o.value=l,o.innerText=l,l===e.level&&(o.selected=!0),a.appendChild(o)})}function K(e){let t=document.getElementById("table-container"),n=t.querySelector("#table-item");function s(a){let l=t.querySelectorAll(".adb-user.w-inline-block");l.forEach((o,c)=>{c!==l.length-1&&o.remove()}),a.forEach((o,c)=>{var m;let r=n.cloneNode(!0);r.setAttribute("id",""),r.setAttribute("href",`/admin/session?sessionId=${o.sessions_id}`);let i=r.querySelectorAll(".colcontent");c%2===0&&(r.style.backgroundColor="#00edf4"),i[1].innerText=o.session_name,i[2].innerText=o.name,i[3].innerText=o.code,i[4].innerText=N(o.time),i[5].innerText=T(o.time,!0),i[6].innerText=((m=o==null?void 0:o.users)==null?void 0:m.length)||0,i[7].innerText=o.status,r.style.display="flex",t.prepend(r)})}s(e),n.style.display="none"}function te(e){let t=document.getElementById("payment-container"),n=t.querySelector("#payment-item");function s(a){a.sort((o,c)=>o.time-c.time).forEach((o,c)=>{let r=n.cloneNode(!0);r.setAttribute("id","");let i=r.querySelectorAll(".colcontent");c%2===0&&(r.style.backgroundColor="#00edf4"),i[0].innerText=o.amount,i[1].innerText=o.mode_of_payment,i[2].innerText=o.membership_plan,i[3].innerText=N(o.time),i[4].innerText=o.transaction_id||"NaN",r.style.display="flex",t.prepend(r)})}s(e),n.style.display="none"}function ne(){let e=document.getElementById("mode-of-payment-select"),t=document.getElementById("membership-plan-select"),n=document.getElementById("datepicker-input"),s=document.getElementById("num_of_tokens");E(e),["Cash","Card","Online"].forEach((a,l)=>{var o=document.createElement("option");o.value=a,o.innerText=a,l===0&&(o.selected=!0),e.appendChild(o)}),E(t),["1 day","7 days","21 days","1 month","3 months","6 months","1 year"].forEach((a,l)=>{var o=document.createElement("option");o.value=a,o.innerText=a,l===0&&(o.selected=!0),s.value=1,t.appendChild(o)}),t.onchange=a=>{a.target.value==="1 day"?s.value=1:a.target.value==="7 days"?s.value=7:a.target.value==="21 days"?s.value=21:a.target.value==="1 month"?s.value=30:a.target.value==="3 months"?s.value=90:a.target.value==="6 months"?s.value=180:a.target.value==="1 year"&&(s.value=360)},$(n).datepicker({format:"dd/mm/yyyy",language:"en",multidate:!1,orientation:"bottom auto"}).datepicker("setDate","now")}var oe=X||[];oe.push(function(){$(document).off("submit"),$("form").on("submit",function(e){return A(this,null,function*(){e.preventDefault();let t=$(this);if(t.attr("id")==="payment-form-block"){let n=O();if(n){let s=t[0][0].value,a=t[0][1].value,l=t[0][2].value,o=t[0][3].value,c=t[0][4].value,r=t[0][5].value;if(s!==""&&a!==""&&l!==""&&o!==""&&c!==""&&c!==0){let i,m=!1;switch(l){case"1 day":i=1,m=!0;break;case"7 days":i=7,m=!0;break;case"21 days":i=21,m=!0;break;case"1 month":i=1;break;case"3 months":i=3;break;case"6 months":i=6;break;case"1 year":i=12;break}let d=o.split("/"),_=new Date(`${d[2]}/${d[1]}/${d[0]} ${new Date().getHours()}:${new Date().getMinutes()}`),u={amount:s,transaction_id:r||null,mode_of_payment:a,membership_plan:l,membership_end_date:m?B(_,i):C(_,i),time:_.getTime(),num_of_tokens:Number(c)||1,gym_id:H},S=yield h(j+g,"POST",u,n);if(S.isFetchOk!==void 0&&!S.isFetchOk){console.error(S.message),t.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("There was an error trying to add your session. Please refresh your browser and try again.");return}t.siblings(".w-form-done").show().siblings(".w-form-fail").hide(),window.location.reload()}else console.error("Please fill in the required fields"),t.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("Please fill in the first four fields")}else console.error("No token found"),t.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("Please fill out all fields")}else if(t.attr("id")==="user-detail-form-block"){let n=O();if(n){let s=document.getElementById("user-detail-gym").value,a=document.getElementById("user-detail-fitness-level").value,l={gym_id:s,level:a},o=yield h(I+g,"POST",l,n);if(o.isFetchOk!==void 0&&!o.isFetchOk){console.error(o.message),t.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("There was an error trying to add your session. Please refresh your browser and try again.");return}t.hide().siblings(".w-form-done").show().siblings(".w-form-fail").hide(),window.location.reload()}else console.error("No token found"),t.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("Please fill out all fields")}})})});

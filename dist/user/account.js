var p=(n,e,t)=>new Promise((a,c)=>{var m=i=>{try{l(t.next(i))}catch(o){c(o)}},r=i=>{try{l(t.throw(i))}catch(o){c(o)}},l=i=>i.done?a(i.value):Promise.resolve(i.value).then(m,r);l((t=t.apply(n,e)).next())});var E=["Male","Female","Other","Prefer not to say"];function u(n,e="GET",t=!1,a=!1,c=!1,m=!0){try{let r={"Content-Type":"application/json"};c&&(r={}),a&&(r.Authorization=`Bearer ${a}`);let l={method:e,headers:r};return t&&(m?l.body=JSON.stringify(t):l.body=t),fetch(n,l).then(i=>i.ok?i.json():i.json().then(o=>(Promise.reject(o.message),{isFetchOk:!1,status:i.status,message:o.message,payload:o&&o.payload?o.payload:null}))).then(i=>i).catch(i=>(console.error("Error in fetch",i),i))}catch(r){return console.error("Error!: "+r),r}}function N(n="nammax_auth"){let t=`; ${document.cookie}`.split(`; ${n}=`);return t.length===2?t.pop().split(";").shift():null}function _(n="/",e=0){setTimeout(()=>{window.location.href=n},e)}function h(n=1e3){setTimeout(()=>{window.location.reload()},n)}function f(n=null){if(n==null)return"NaN";let e=new Date(n);return`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()}`}function d(n,e=null){if(n!=null){var t,a=n.options.length-1;for(t=a;t>=0;t--)t!==e&&n.remove(t)}}function g(n="/sign-in"){window.localStorage.removeItem("auth"),_(`${n}`)}var I=Webflow||[];var A="/sign-in",R="/sign-up-2";var x="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/user/account",O="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/user/upload/image";window.onload=function(){let n=document.querySelector("#navbar-logout-btn");n&&(n.onclick=()=>{g()});let e=N();e?S(e):_(`${A}?reason=NOT_SIGNED_IN`)};function S(n){return p(this,null,function*(){let e=yield u(x,"GET",!1,n);if(e.isFetchOk!==void 0&&!e.isFetchOk){console.error(e.message),_(`${A}?reason=NOT_SIGNED_IN`);return}$("#account-submit-btn").prop("disabled",!0),e.gym_id===0?_(`${R}?reason=UNSET_DETAILS`):(y(e),U())})}function y(n){let{user:e,gyms:t}=n;e.profile_picture&&(document.getElementById("profile_avatar").style.backgroundImage=`url(${e.profile_picture.url})`);let a=e.name.split(new RegExp("(?<=^\\S+)\\s"));document.getElementById("full-name").innerText=e.name||"",document.getElementById("firstname").value=a[0]||"",document.getElementById("lastname").value=a[1]||"",document.getElementById("email").value=e.email||"",document.getElementById("date_of_birth").innerText=e.date_of_birth||"",document.getElementById("phone_number").value=e.contact_number||"",document.getElementById("height").value=e.height||"",document.getElementById("weight").value=e.weight||"";let c=document.getElementById("fitness_level");c&&(c.value=e.level||"Unevaluated"),e.membership_end_date?(document.getElementById("active-membership").classList.remove("off"),document.getElementById("membership-end-date").innerText=f(e.membership_end_date)):document.getElementById("inactive-membership").classList.remove("off");let m=document.getElementById("gender_select");d(m),E.forEach(o=>{var s=document.createElement("option");s.value=o,s.text=o,o===e.gender&&(s.selected=!0),m.appendChild(s)});let r=document.getElementById("gym_select");d(r),t.forEach(o=>{var s=document.createElement("option");s.value=o.id,s.text=o.location,o.id===e.gym_id&&(s.selected=!0),r.appendChild(s)});let l=document.getElementById("injury_select");d(l),["None","Bone","Muscle","Tissue"].forEach(o=>{var s=document.createElement("option");s.value=o,s.text=o,o===e.injury&&(s.selected=!0),l.appendChild(s)});let i=document.getElementById("severity_select");d(i),[{text:"None",severity:"0"},{text:"1 (Low)",severity:"1"},{text:"2",severity:"2"},{text:"3",severity:"3"},{text:"4",severity:"4"},{text:"5 (high)",severity:"5"}].forEach(o=>{var s=document.createElement("option");s.value=o.severity,s.text=o.text,o.severity===e.severity&&(s.selected=!0),i.appendChild(s)})}function U(){let n=document.getElementById("pfp_input"),e=document.getElementById("profile_avatar");n.addEventListener("change",function(t){t.target&&t.target.files.length>0&&t.target.files[0]&&(e.style.backgroundImage=`url(${URL.createObjectURL(t.target.files[0])})`,$("#wf-form-user-data").data("changed",!0),$("#account-submit-btn").prop("disabled",!1),$("#account-submit-btn").removeClass("disabled"))})}function D(n,e){return p(this,null,function*(){let t=document.getElementById("pfp_input"),a=t.files[0];if(a!==void 0){if(a.size>2097152){alert("File too big. Max size is 2MB");return}if(a.type!=="image/jpg"&&a.type!=="image/jpeg"&&a.type!=="image/png"){alert("Incorrect file type. Acceptable types: .png, .jpg, .jpeg");return}let c=new FormData;c.append("content",a);let m=yield u(O,"POST",c,n,!0,!1);if(m.isFetchOk!==void 0&&!m.isFetchOk){console.error(m.message),e.siblings(".w-form-done").hide().siblings(".w-form-fail").show();let r=document.getElementById("account-submit-btn");r&&(r.disabled=!1);return}t.value="",document.getElementById("profile_avatar").style.backgroundImage=`url(https://x8ki-letl-twmt.n7.xano.io${m.path})`}return!0})}var b=I||[];b.push(function(){$(document).off("submit"),$("form").on("change",function(){$("#account-submit-btn").prop("disabled",!1),$("#account-submit-btn").removeClass("disabled"),$("form").data("changed",!0)}),$("form").submit(function(n){return p(this,null,function*(){n.preventDefault();let e=document.getElementById("account-submit-btn");e&&(e.disabled=!0);let t=$(this);if(!t.data("changed")&&document.getElementById("pfp_input").files[0]===void 0){e&&(e.disabled=!1);return}let a=N();if(a){let c=!1;if(t.data("changed")){let r={name:document.getElementById("firstname").value+" "+document.getElementById("lastname").value,email:document.getElementById("email").value,gender:document.getElementById("gender_select").value,height:document.getElementById("height").value,weight:document.getElementById("weight").value,contact_number:document.getElementById("phone_number").value.replace("+",""),gym_id:document.getElementById("gym_select").value,injury:document.getElementById("injury_select").value,severity:document.getElementById("severity_select").value},l=yield u(x,"POST",r,a);l.isFetchOk!==void 0&&!l.isFetchOk?(t.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("There was an error updating your account details, please refresh and try again - Err:",l.message),e&&(e.disabled=!1)):t.siblings(".w-form-done").show().siblings(".w-form-fail").hide().text("Your sessions have been updated successfully"),c=!0}let m=D(a,t);c&&m&&h(2e3)}else _(`${A}?reason=NOT_SIGNED_IN`)})})});

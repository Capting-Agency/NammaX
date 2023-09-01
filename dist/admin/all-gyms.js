var E=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var h=(t,n)=>{var e={};for(var o in t)b.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&E)for(var o of E(t))n.indexOf(o)<0&&T.call(t,o)&&(e[o]=t[o]);return e};var d=(t,n,e)=>new Promise((o,s)=>{var i=a=>{try{_(e.next(a))}catch(l){s(l)}},r=a=>{try{_(e.throw(a))}catch(l){s(l)}},_=a=>a.done?o(a.value):Promise.resolve(a.value).then(i,r);_((e=e.apply(t,n)).next())});var m={ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN",COACH:"COACH"};function N(t,n="GET",e=!1,o=!1,s=!1,i=!0){try{let r={"Content-Type":"application/json"};s&&(r={}),o&&(r.Authorization=`Bearer ${o}`);let _={method:n,headers:r};return e&&(i?_.body=JSON.stringify(e):_.body=e),fetch(t,_).then(a=>a.ok?a.json():a.json().then(l=>(Promise.reject(l.message),{isFetchOk:!1,status:a.status,message:l.message,payload:l&&l.payload?l.payload:null}))).then(a=>a).catch(a=>(console.error("Error in fetch",a),a))}catch(r){return console.error("Error!: "+r),r}}function f(t="nammax_auth"){let e=`; ${document.cookie}`.split(`; ${t}=`);return e.length===2?e.pop().split(";").shift():null}function u(t="/",n=2e3){setTimeout(()=>{window.location.href=t},n)}function g(t=1e3){setTimeout(()=>{window.location.reload()},t)}function R(t="/admin/sign-in",n="sidebar-logout-btn"){let e=document.getElementById(n);e?e.onclick=()=>M(t):console.error("Logout button not found")}function M(t="/sign-in"){window.localStorage.removeItem("auth"),u(`${t}`)}function O(t=0){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"}).format(Number(t)).replace(/^(\D+)/,"$1 ")}function S(t=m.ADMIN){if(t===m.ADMIN){let n=document.getElementById("admin-nav"),e=document.getElementById("super-admin-nav");n&&(n.style.display="flex"),e&&e.remove()}else if(t===m.SUPER_ADMIN){let n=document.getElementById("admin-nav"),e=document.getElementById("super-admin-nav");e&&(e.style.display="flex"),n&&n.remove()}}function I(){let t=document.getElementById("loading-screen");t?t.remove():console.log("did not find loading screen")}var D=Webflow||[];var x="/admin/sign-in";var U="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/super_admin/all_gyms",y="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/super_admin/all_gyms/add_gym",L="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/super_admin/all_gyms/upload/image";window.onload=function(){return d(this,null,function*(){R(x,"sidebar-logout-btn");let t=f();if(t){let e=yield N(U,"GET",!1,t);if(e.isFetchOk!==void 0&&!e.isFetchOk){console.error(e.message);return}let n=e,{team_role:o}=n,s=h(n,["team_role"]);o&&(o===m.SUPER_ADMIN||o===m.ADMIN)?(S(o),B(s)):u(`${x}?reason=UNAUTHORIZED_USER`)}else u(`${x}?reason=NOT_SIGNED_IN`)})};function B(t){return d(this,null,function*(){let{gyms:n}=t;X(),v(n),I()})}function v(t){let n=document.getElementById("gym-container"),e=n.querySelector("#gym-item");t.forEach(o=>{var r,_,a,l,p;let s=e.cloneNode(!0);s.setAttribute("id",""),s.setAttribute("href",`/admin/gym/g?gymCode=${o.id}`),o.map_icon&&(s.querySelector("#gym-map").style.backgroundImage=`url(${o.map_icon.url})`),s.querySelector("#gym-code").innerText=o.code,s.querySelector("#gym-name").innerText=o.location,s.querySelector("#gym-coach").innerText=o.partner,s.querySelector("#gym-active-sessions").innerText=(_=(r=o==null?void 0:o.sessions)==null?void 0:r.length)!=null?_:0;let i=0;o.finances.forEach(c=>{i+=Number(c.gross_revenue)+Number(c.additional_revenue)}),o.finances.length>0?i=i/o.finances.length:i=null,s.querySelector("#gym-revenue").innerText=(a=O(Math.round(i)||0))!=null?a:"NaN",s.querySelector("#gym-active-users").innerText=o.users.filter(c=>c.membership_status!=="INACTIVE").length||0,s.querySelector("#gym-users").innerText=(p=(l=o==null?void 0:o.users)==null?void 0:l.length)!=null?p:0,n.prepend(s)}),e.remove()}function j(t,n,e){return d(this,null,function*(){let o=document.getElementById("pfp_input"),s=o.files[0];if(s!==void 0){if(s.size>2097152){alert("File too big. Max size is 2MB");return}if(s.type!=="image/jpg"&&s.type!=="image/jpeg"&&s.type!=="image/png"){alert("Incorrect file type. Acceptable types: .png, .jpg, .jpeg");return}let i=new FormData;i.append("content",s),i.append("gym_id",e);let r=yield N(L,"POST",i,t,!0,!1);if(r.isFetchOk!==void 0&&!r.isFetchOk){console.error(r.message),n.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("Uh oh, failed to upload image!");return}return o.value="",r}return!0})}function X(){let t=document.getElementById("pfp_input"),n=document.getElementById("pfp_preview"),e=document.getElementById("preview-icon-container");t.addEventListener("change",function(o){o.target&&o.target.files.length>0&&o.target.files[0]?(e.style.display="flex",n.src=URL.createObjectURL(o.target.files[0])):e.style.display="none"})}var w=D||[];w.push(function(){$(document).off("submit"),$("form").on("change",function(){let t=$(this),n=t[0][0].value,e=t[0][1].value,o=t[0][2].value,s=t[0][3].value,i=t[0][4].value,r=t[0][5].value,_=t[0][6].value,a=t[0][7].value,l=t[0][8].value;n!==""&&e!==""&&o!==""&&s!==""&&i!==""&&r!==""&&_!==""&&l!==""&&a!==""&&(t[0][9].disabled=!1,t[0][9].classList.remove("disabled"))}),$("form").on("submit",function(t){return d(this,null,function*(){t.preventDefault();let n=document.getElementById("sessions-select-btn");n.disabled=!0,n.classList.add("disabled"),n.value="SUBMITTING...";let e=$(this),o=f();if(o){let s=e[0][0].value,i=e[0][1].value,r=e[0][2].value,_=e[0][3].value,a=e[0][4].value,l=e[0][5].value,p=e[0][6].value,c=e[0][7].value,C=e[0][8].value;if(s!==""&&i!==""&&r!==""&&_!==""&&a!==""&&l!==""&&p!==""&&C!==""&&c!==""){let A=yield N(y,"POST",{location:s,code:i,address:r,capacity:_,partner_name:a,partner_email:l,partner_contact:p,franchise_cut:c},o);if(A.isFetchOk!==void 0&&!A.isFetchOk){console.error(A.message),e.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("There was an error trying to add your session. Please refresh your browser and try again."),n.disabled=!1,n.classList.remove("disabled"),n.value="ADD NEW GYM";return}e.hide().siblings(".w-form-done").show().siblings(".w-form-fail").hide(),yield j(o,e,A.id),g()}else s.trim()===""?e[0][0].style.borderColor="red":e[0][1].style.borderColor="black",i.trim()===""?e[0][1].style.borderColor="red":e[0][2].style.borderColor="black",r.trim()===""?e[0][2].style.borderColor="red":e[0][3].style.borderColor="black",_.trim()===""?e[0][3].style.borderColor="red":e[0][4].style.borderColor="black",a.trim()==="Duration"?e[0][4].style.borderColor="red":e[0][5].style.borderColor="black",l.trim()===""?e[0][5].style.borderColor="red":e[0][6].style.borderColor="black",p.trim()===""?e[0][6].style.borderColor="red":e[0][6].style.borderColor="black",c.trim()===""?e[0][7].style.borderColor="red":e[0][7].style.borderColor="black",e.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("Please fill out all fields"),n.disabled=!1,n.classList.remove("disabled"),n.value="ADD NEW GYM"}else u(`${x}?reason=NOT_SIGNED_IN`)})})});

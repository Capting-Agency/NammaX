var l=(t,n,e)=>new Promise((a,i)=>{var r=o=>{try{_(e.next(o))}catch(c){i(c)}},s=o=>{try{_(e.throw(o))}catch(c){i(c)}},_=o=>o.done?a(o.value):Promise.resolve(o.value).then(r,s);_((e=e.apply(t,n)).next())});function d(t,n="GET",e=!1,a=!1,i=!1,r=!0){try{let s={"Content-Type":"application/json"};i&&(s={}),a&&(s.Authorization=`Bearer ${a}`);let _={method:n,headers:s};return e&&(r?_.body=JSON.stringify(e):_.body=e),fetch(t,_).then(o=>o.ok?o.json():o.json().then(c=>(Promise.reject(c.message),{isFetchOk:!1,status:o.status,message:c.message,payload:c&&c.payload?c.payload:null}))).then(o=>o).catch(o=>(console.error("Error in fetch",o),o))}catch(s){return console.error("Error!: "+s),s}}function u(t="nammax_auth"){let e=`; ${document.cookie}`.split(`; ${t}=`);return e.length===2?e.pop().split(";").shift():null}function m(t="/",n=2e3){setTimeout(()=>{window.location.href=t},n)}function A(t=1e3){setTimeout(()=>{window.location.reload()},t)}function I(t="/sign-in"){window.localStorage.removeItem("auth"),m(`${t}`)}function f(){let t=document.getElementById("loading-screen");t?t.remove():console.error("did not find loading screen")}function N(t,n){let e=document.getElementById(t);e&&(e.onclick=()=>{I(n)})}var E=Webflow||[];var g="https://xoxo-jnzf-s0on.m2.xano.io",p="/admin/sign-in";var x="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/admin/account";var h="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/coach/upload/image";var R="https://www.nammacrossfit.com",O=R;var j=`${O}/sign-up-2`;var X=`${O}/user/dashboard`;window.onload=function(){return l(this,null,function*(){N("navbar-logout-btn",p);let t=u();if(t){let n=yield d(x,"GET",!1,t);if(n.isFetchOk!==void 0&&!n.isFetchOk){console.error(n.message),m(`${p}?reason=NOT_SIGNED_IN`);return}S(n)}else m(`${p}?reason=NOT_SIGNED_IN`)})};function S(t){return l(this,null,function*(){$("#account-submit-btn").prop("disabled",!0),D(t),U(),f()})}function D(t){t.profile_picture&&(document.getElementById("profile_avatar").style.backgroundImage=`url(${t.profile_picture.url})`);let n=t.name.split(new RegExp("(?<=^\\S+)\\s"));document.getElementById("admin_full_name").innerText=t.name||"",document.getElementById("admin_firstname").value=n[0]||"",document.getElementById("admin_lastname").value=n[1]||"",document.getElementById("admin_email").value=t.email||"",document.getElementById("admin_phone_number").value=t.phone_number||""}function U(){let t=document.getElementById("pfp_input"),n=document.getElementById("profile_avatar");t.addEventListener("change",function(e){e.target&&e.target.files.length>0&&e.target.files[0]&&(n.style.backgroundImage=`url(${URL.createObjectURL(e.target.files[0])})`,$("#wf-form-user-data").data("changed",!0),$("#account-submit-btn").prop("disabled",!1),$("#account-submit-btn").removeClass("disabled"))})}function L(t,n){return l(this,null,function*(){let e=document.getElementById("pfp_input"),a=e.files[0];if(a!==void 0){if(a.size>2097152){alert("File too big. Max size is 2MB");return}if(a.type!=="image/jpg"&&a.type!=="image/jpeg"&&a.type!=="image/png"){alert("Incorrect file type. Acceptable types: .png, .jpg, .jpeg");return}let i=new FormData;i.append("content",a);let r=yield d(h,"POST",i,t,!0,!1);if(r.isFetchOk!==void 0&&!r.isFetchOk){console.error(r.message),n.siblings(".w-form-done").hide().siblings(".w-form-fail").show();let s=document.getElementById("account-submit-btn");s&&(s.disabled=!1);return}e.value="",document.getElementById("profile_avatar").style.backgroundImage=`url(${g}${r.path})`}return!0})}$("#new-password, #confirm-new-password").on("keyup",function(){($("#new-password").val().length>0||$("#confirm-new-password").val().length>0)&&($("#new-password").val()==$("#confirm-new-password").val()?$("#confirm-password-warning").html("Passwords Match").css("color","green"):$("#confirm-password-warning").html("Passwords don't match").css("color","red"))});var T=E||[];T.push(function(){$(document).off("submit"),$("form").on("change",function(){$("#account-submit-btn").prop("disabled",!1),$("#account-submit-btn").removeClass("disabled"),$("form").data("changed",!0)}),$("form").submit(function(t){return l(this,null,function*(){t.preventDefault();let n,e=document.getElementById("account-submit-btn");e&&(n=e.value,e.disabled=!0,e.value="Updating");let a=$(this);if(!a.data("changed")&&document.getElementById("pfp_input").files[0]===void 0){e&&(e.disabled=!1,e.value=n);return}let i=u();if(i){let r=!1;if(a.data("changed")){let _={name:document.getElementById("admin_firstname").value+" "+document.getElementById("admin_lastname").value,email:document.getElementById("admin_email").value,phone_number:document.getElementById("admin_phone_number").value.replaceAll("+","")};if($("#new-password").val().trim().length>0)if($("#new-password").val()==$("#confirm-new-password").val())_.password=$("#new-password").val().trim();else{a.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("Passwords don't match"),e&&(e.disabled=!1,e.value=n);return}let o=yield d(x,"POST",_,i);o.isFetchOk!==void 0&&!o.isFetchOk?(a.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("There was an error updating your account details - Err:",o.message),e&&(e.disabled=!1,e.value=n)):a.siblings(".w-form-done").show().siblings(".w-form-fail").hide().text("Your account has been updated successfully"),r=!0}let s=L(i,a);r&&s&&A(2e3)}else m(`${p}?reason=NOT_SIGNED_IN`)})})});

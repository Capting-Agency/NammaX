var _=(t,o,e)=>new Promise((a,i)=>{var r=n=>{try{c(e.next(n))}catch(l){i(l)}},s=n=>{try{c(e.throw(n))}catch(l){i(l)}},c=n=>n.done?a(n.value):Promise.resolve(n.value).then(r,s);c((e=e.apply(t,o)).next())});function m(t,o="GET",e=!1,a=!1,i=!1,r=!0){try{let s={"Content-Type":"application/json"};i&&(s={}),a&&(s.Authorization=`Bearer ${a}`);let c={method:o,headers:s};return e&&(r?c.body=JSON.stringify(e):c.body=e),fetch(t,c).then(n=>n.ok?n.json():n.json().then(l=>(Promise.reject(l.message),{isFetchOk:!1,status:n.status,message:l.message,payload:l&&l.payload?l.payload:null}))).then(n=>n).catch(n=>(console.error("Error in fetch",n),n))}catch(s){return console.error("Error!: "+s),s}}function d(t="nammax_auth"){let e=`; ${document.cookie}`.split(`; ${t}=`);return e.length===2?e.pop().split(";").shift():null}function p(t="/",o=2e3){setTimeout(()=>{window.location.href=t},o)}function A(t=1e3){setTimeout(()=>{window.location.reload()},t)}function f(t="/sign-in"){window.localStorage.removeItem("auth"),p(`${t}`)}function N(){let t=document.getElementById("loading-screen");t?t.remove():console.log("did not find loading screen")}var E=Webflow||[];var h="https://xoxo-jnzf-s0on.m2.xano.io";var u="/coach/sign-in";var x="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/coach/account",g="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/coach/upload/image";window.onload=function(){return _(this,null,function*(){let t=document.querySelector("#navbar-logout-btn");t&&(t.onclick=()=>{f(u)});let o=d();if(o){let e=yield m(x,"GET",!1,o);if(e.isFetchOk!==void 0&&!e.isFetchOk){console.error(e.message);return}O(e)}else p(`${u}?reason=NOT_SIGNED_IN`)})};function O(t){return _(this,null,function*(){$("#account-submit-btn").prop("disabled",!0),R(t),I(),N()})}function R(t){t.profile_picture&&(document.getElementById("profile_avatar").style.backgroundImage=`url(${t.profile_picture.url})`);let o=t.name.split(new RegExp("(?<=^\\S+)\\s"));document.getElementById("coach_full_name").innerText=t.name||"",document.getElementById("coach_firstname").value=o[0]||"",document.getElementById("coach_lastname").value=o[1]||"",document.getElementById("coach_email").value=t.email||"",document.getElementById("coach_phone_number").value=t.phone_number||""}function I(){let t=document.getElementById("pfp_input"),o=document.getElementById("profile_avatar");t.addEventListener("change",function(e){e.target&&e.target.files.length>0&&e.target.files[0]&&(o.style.backgroundImage=`url(${URL.createObjectURL(e.target.files[0])})`,$("#wf-form-user-data").data("changed",!0),$("#account-submit-btn").prop("disabled",!1),$("#account-submit-btn").removeClass("disabled"))})}function S(t,o){return _(this,null,function*(){let e=document.getElementById("pfp_input"),a=e.files[0];if(a!==void 0){if(a.size>2097152){alert("File too big. Max size is 2MB");return}if(a.type!=="image/jpg"&&a.type!=="image/jpeg"&&a.type!=="image/png"){alert("Incorrect file type. Acceptable types: .png, .jpg, .jpeg");return}let i=new FormData;i.append("content",a);let r=yield m(g,"POST",i,t,!0,!1);if(r.isFetchOk!==void 0&&!r.isFetchOk){console.error(r.message),o.siblings(".w-form-done").hide().siblings(".w-form-fail").show();let s=document.getElementById("account-submit-btn");s&&(s.disabled=!1);return}e.value="",document.getElementById("profile_avatar").style.backgroundImage=`url(${h}${r.path})`}return!0})}$("#new-password, #confirm-new-password").on("keyup",function(){($("#new-password").val().length>0||$("#confirm-new-password").val().length>0)&&($("#new-password").val()==$("#confirm-new-password").val()?$("#confirm-password-warning").html("Passwords Match").css("color","green"):$("#confirm-password-warning").html("Passwords don't match").css("color","red"))});var D=E||[];D.push(function(){$(document).off("submit"),$("form").on("change",function(){$("#account-submit-btn").prop("disabled",!1),$("#account-submit-btn").removeClass("disabled"),$("form").data("changed",!0)}),$("form").submit(function(t){return _(this,null,function*(){t.preventDefault();let o,e=document.getElementById("account-submit-btn");e&&(o=e.value,e.disabled=!0,e.value="Updating");let a=$(this);if(!a.data("changed")&&document.getElementById("pfp_input").files[0]===void 0){e&&(e.disabled=!1,e.value=o);return}let i=d();if(i){let r=!1;if(a.data("changed")){let c={name:document.getElementById("coach_firstname").value+" "+document.getElementById("coach_lastname").value,email:document.getElementById("coach_email").value,phone_number:document.getElementById("coach_phone_number").value.replaceAll("+","")};if($("#new-password").val().trim().length>0)if($("#new-password").val()==$("#confirm-new-password").val())c.password=$("#new-password").val().trim();else{a.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("Passwords don't match"),e&&(e.disabled=!1,e.value=o);return}let n=yield m(x,"POST",c,i);n.isFetchOk!==void 0&&!n.isFetchOk?(a.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("There was an error updating your account details - Err:",n.message),e&&(e.disabled=!1,e.value=o)):a.siblings(".w-form-done").show().siblings(".w-form-fail").hide().text("Your account has been updated successfully"),r=!0}let s=S(i,a);r&&s&&A(2e3)}else p(`${u}?reason=NOT_SIGNED_IN`)})})});

var l=(e,o,n)=>new Promise((a,_)=>{var c=t=>{try{i(n.next(t))}catch(r){_(r)}},s=t=>{try{i(n.throw(t))}catch(r){_(r)}},i=t=>t.done?a(t.value):Promise.resolve(t.value).then(c,s);i((n=n.apply(e,o)).next())});function m(e,o="GET",n=!1,a=!1,_=!1,c=!0){try{let s={"Content-Type":"application/json"};_&&(s={}),a&&(s.Authorization=`Bearer ${a}`);let i={method:o,headers:s};return n&&(c?i.body=JSON.stringify(n):i.body=n),fetch(e,i).then(t=>t.ok?t.json():t.json().then(r=>(Promise.reject(r.message),{isFetchOk:!1,status:t.status,message:r.message,payload:r&&r.payload?r.payload:null}))).then(t=>t).catch(t=>(console.error("Error in fetch",t),t))}catch(s){return console.error("Error!: "+s),s}}function p(e=null,o="nammax_auth",n=60*60*24){e&&(document.cookie=`${o}=${e}; path=/; max-age=${n}`)}function x(e="/",o=2e3){setTimeout(()=>{window.location.href=e},o)}var d=Webflow||[];var u="/sign-up-2",A="https://www.nammacrossfit.com/sign-up-2";var N="https://xoxo-jnzf-s0on.m2.xano.io/api:ocRzyo-e/oauth/google/init";var f="https://xoxo-jnzf-s0on.m2.xano.io/api:GEC76oIp/auth/signup";var R=[],E=[];function g(e){window.location.href=e.authUrl}function O(){var e=new URL(N);e.searchParams.set("redirect_uri",`${A}/`),e=e.toString();try{fetch(e,{headers:R,method:"GET"}).then(o=>o.ok?o.json():Promise.reject(o)).then(o=>E=o).then(()=>g(E)).catch(o=>{console.error("Error:",o)})}catch(o){console.error("Error!: "+o)}}var h=document.querySelector("#google-auth-btn");h&&h.addEventListener("click",()=>{O()});$("#password, #confirm-password").on("keyup",function(){($("#password").val().length>0||$("#confirm-password").val().length>0)&&($("#password").val()==$("#confirm-password").val()?$("#password-confirm-block").html("Passwords Match").css("color","green"):$("#password-confirm-block").html("Passwords don't match").css("color","red"))});var S=d||[];S.push(function(){$(document).off("submit"),$("form").submit(function(e){return l(this,null,function*(){e.preventDefault();let o=document.getElementById("xano-auth"),n;o&&(o.disabled=!0,n=o.value,o.value="Confirming...");let a=$(this);if(!($("#password").val()==$("#confirm-password").val())){a.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("Passwords don't match"),o&&(o.disabled=!1,o.value=n);return}if($("#password").val().length<5){a.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("Password length must be atleast 5 characters"),o&&(o.disabled=!1,o.value=n);return}let c={email:document.getElementById("email").value,password:document.getElementById("password").value.trim(),name:(document.getElementById("first_name").value+" "+document.getElementById("last_name").value).trim()},s=yield m(f,"POST",c);if(s.isFetchOk!==void 0&&!s.isFetchOk){console.error(s.message),a.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("Oops, there was an error signing you up. Please refresh the page and try again."),o&&(o.disabled=!1,o.value=n);return}Object.keys(s).includes("authToken")===!1?(a.siblings(".w-form-done").hide().siblings(".w-form-fail").show(),o&&(o.disabled=!1,o.value=n)):(p(s.authToken),a.hide().siblings(".w-form-done").show().siblings(".w-form-fail").hide(),x(u))})})});

var l=(e,o,n)=>new Promise((i,c)=>{var s=t=>{try{_(n.next(t))}catch(r){c(r)}},a=t=>{try{_(n.throw(t))}catch(r){c(r)}},_=t=>t.done?i(t.value):Promise.resolve(t.value).then(s,a);_((n=n.apply(e,o)).next())});function m(e,o="GET",n=!1,i=!1,c=!1,s=!0){try{let a={"Content-Type":"application/json"};c&&(a={}),i&&(a.Authorization=`Bearer ${i}`);let _={method:o,headers:a};return n&&(s?_.body=JSON.stringify(n):_.body=n),fetch(e,_).then(t=>t.ok?t.json():t.json().then(r=>(Promise.reject(r.message),{isFetchOk:!1,status:t.status,message:r.message,payload:r&&r.payload?r.payload:null}))).then(t=>t).catch(t=>(console.error("Error in fetch",t),t))}catch(a){return console.error("Error!: "+a),a}}function p(e=null,o="nammax_auth",n=60*60*24){e&&(document.cookie=`${o}=${e}; path=/; max-age=${n}`)}function x(e="/",o=2e3){setTimeout(()=>{window.location.href=e},o)}var A=Webflow||[];var u="/user/dashboard",d="https://nammacrossfit.com/user/dashboard";var N="https://xoxo-jnzf-s0on.m2.xano.io/api:ocRzyo-e/oauth/google/init";var f="https://xoxo-jnzf-s0on.m2.xano.io/api:GEC76oIp/auth/login";var R=[],E=[];function O(e){window.location.href=e.authUrl}function g(){var e=new URL(N);e.searchParams.set("redirect_uri",d),e=e.toString();try{fetch(e,{headers:R,method:"GET"}).then(o=>o.ok?o.json():Promise.reject(o)).then(o=>E=o).then(()=>O(E)).catch(o=>{console.error("Error:",o)})}catch(o){console.error("Error!: "+o)}}var h=document.querySelector("#google-auth-btn");h&&h.addEventListener("click",()=>{g()});var S=A||[];S.push(function(){$(document).off("submit"),$("form").submit(function(e){return l(this,null,function*(){e.preventDefault();let o=document.getElementById("submit"),n;o&&(o.disabled=!0,n=o.value,o.value="Logging In");let i=$(this),c={email:document.getElementById("email").value,password:document.getElementById("password").value},s=yield m(f,"POST",c);if(!s)return;if(s.isFetchOk!==void 0&&!s.isFetchOk){i.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text(s&&s.message?s.message:"There was an error signing you in. Please try again."),console.error(s.message),o&&(o.disabled=!1,o.value=n);return}Object.keys(s).includes("authToken")===!1?(i.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("There was an error signing you in. Please try again."),o&&(o.disabled=!1,o.value=n)):(p(s.authToken,"nammax_auth",60*60*24*30),x(u),i.hide().siblings(".w-form-done").show().siblings(".w-form-fail").hide())})})});

var c=(e,t,o)=>new Promise((l,a)=>{var _=n=>{try{r(o.next(n))}catch(i){a(i)}},s=n=>{try{r(o.throw(n))}catch(i){a(i)}},r=n=>n.done?l(n.value):Promise.resolve(n.value).then(_,s);r((o=o.apply(e,t)).next())});function m(e,t="GET",o=!1,l=!1,a=!1,_=!0){try{let s={"Content-Type":"application/json"};a&&(s={}),l&&(s.Authorization=`Bearer ${l}`);let r={method:t,headers:s};return o&&(_?r.body=JSON.stringify(o):r.body=o),fetch(e,r).then(n=>n.ok?n.json():n.json().then(i=>(Promise.reject(i.message),{isFetchOk:!1,status:n.status,message:i.message,payload:i&&i.payload?i.payload:null}))).then(n=>n).catch(n=>(console.error("Error in fetch",n),n))}catch(s){return console.error("Error!: "+s),s}}function p(e=null,t="nammax_auth",o=60*60*24){e&&(document.cookie=`${t}=${e}; path=/; max-age=${o}`)}function u(e="/",t=2e3){setTimeout(()=>{window.location.href=e},t)}var A=Webflow||[];var d="/sign-up-2";var N="https://x8ki-letl-twmt.n7.xano.io/api:GEC76oIp/auth/signup";var h=[],x=[];function R(e){window.location.href=e.authUrl}function f(){var e=new URL("https://x8ki-letl-twmt.n7.xano.io/api:ocRzyo-e/oauth/google/init");e.searchParams.set("redirect_uri","https://nammacrossfit.com/sign-up-2"),e=e.toString();try{fetch(e,{headers:h,method:"GET"}).then(t=>t.ok?t.json():Promise.reject(t)).then(t=>x=t).then(()=>R(x)).catch(t=>{console.error("Error:",t)})}catch(t){console.error("Error!: "+t)}}var E=document.querySelector("#google-auth-btn");E&&E.addEventListener("click",()=>{f()});var O=A||[];O.push(function(){$(document).off("submit"),$("form").submit(function(e){return c(this,null,function*(){e.preventDefault();let t=document.getElementById("xano-auth");t&&(t.disabled=!0);let o=$(this),l={email:document.getElementById("email").value,password:document.getElementById("password").value,name:(document.getElementById("first_name").value+" "+document.getElementById("last_name").value).trim()},a=yield m(N,"POST",l);if(a.isFetchOk!==void 0&&!a.isFetchOk){console.error(a.message),o.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("Oops, there was an error signing you up. Please refresh the page and try again."),t&&(t.disabled=!1);return}Object.keys(a).includes("authToken")===!1?(o.siblings(".w-form-done").hide().siblings(".w-form-fail").show(),t&&(t.disabled=!1)):(p(a.authToken),o.hide().siblings(".w-form-done").show().siblings(".w-form-fail").hide(),u(d))})})});

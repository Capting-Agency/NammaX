var m=(o,e,n)=>new Promise((l,a)=>{var _=t=>{try{r(n.next(t))}catch(i){a(i)}},s=t=>{try{r(n.throw(t))}catch(i){a(i)}},r=t=>t.done?l(t.value):Promise.resolve(t.value).then(_,s);r((n=n.apply(o,e)).next())});function c(o,e="GET",n=!1,l=!1,a=!1,_=!0){try{let s={"Content-Type":"application/json"};a&&(s={}),l&&(s.Authorization=`Bearer ${l}`);let r={method:e,headers:s};return n&&(_?r.body=JSON.stringify(n):r.body=n),fetch(o,r).then(t=>t.ok?t.json():t.json().then(i=>(Promise.reject(i.message),{isFetchOk:!1,status:t.status,message:i.message,payload:i&&i.payload?i.payload:null}))).then(t=>t).catch(t=>(console.error("Error in fetch",t),t))}catch(s){return console.error("Error!: "+s),s}}function p(o=null,e="nammax_auth",n=60*60*24){o&&(document.cookie=`${e}=${o}; path=/; max-age=${n}`)}function A(o="/",e=2e3){setTimeout(()=>{window.location.href=o},e)}var d=Webflow||[];var u="/coach/dashboard";var N="https://x8ki-letl-twmt.n7.xano.io/api:GEC76oIp/coach_auth/login";var x=d||[];x.push(function(){$(document).off("submit"),$("form").submit(function(o){return m(this,null,function*(){o.preventDefault();let e=document.getElementById("submit");e&&(e.disabled=!0);let n=$(this),l={email:document.getElementById("email").value,password:document.getElementById("password").value},a=yield c(N,"POST",l);if(a.isFetchOk!==void 0&&!a.isFetchOk){n.siblings(".w-form-done").hide().siblings(".w-form-fail").show(),console.error(a.message),e&&(e.disabled=!1);return}Object.keys(a).includes("authToken")===!1?(n.siblings(".w-form-done").hide().siblings(".w-form-fail").show(),e&&(e.disabled=!1)):(p(a.authToken,"nammax_auth",60*60*24*7),A(u),n.hide().siblings(".w-form-done").show().siblings(".w-form-fail").hide())})})});

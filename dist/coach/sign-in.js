var c=(o,n,e)=>new Promise((a,l)=>{var _=t=>{try{r(e.next(t))}catch(i){l(i)}},s=t=>{try{r(e.throw(t))}catch(i){l(i)}},r=t=>t.done?a(t.value):Promise.resolve(t.value).then(_,s);r((e=e.apply(o,n)).next())});function m(o,n="GET",e=!1,a=!1,l=!1,_=!0){try{let s={"Content-Type":"application/json"};l&&(s={}),a&&(s.Authorization=`Bearer ${a}`);let r={method:n,headers:s};return e&&(_?r.body=JSON.stringify(e):r.body=e),fetch(o,r).then(t=>t.ok?t.json():t.json().then(i=>(Promise.reject(i.message),{isFetchOk:!1,status:t.status,message:i.message,payload:i&&i.payload?i.payload:null}))).then(t=>t).catch(t=>(console.error("Error in fetch",t),t))}catch(s){return console.error("Error!: "+s),s}}function p(o=null,n="nammax_auth",e=60*60*24){o&&(document.cookie=`${n}=${o}; path=/; max-age=${e}`)}function A(o="/",n=0){setTimeout(()=>{window.location.href=o},n)}var d="/coach/dashboard";var N="https://x8ki-letl-twmt.n7.xano.io/api:GEC76oIp/coach_auth/login";var u=u||[];u.push(function(){$(document).off("submit"),$("form").submit(function(o){return c(this,null,function*(){o.preventDefault();let n=$(this),e={email:document.getElementById("email").value,password:document.getElementById("password").value},a=yield m(N,"POST",e);if(a.isFetchOk!==void 0&&!a.isFetchOk){n.siblings(".w-form-done").hide().siblings(".w-form-fail").show(),console.error(a.message);return}Object.keys(a).includes("authToken")===!1?n.siblings(".w-form-done").hide().siblings(".w-form-fail").show():(p(a.authToken,"nammax_auth",60*60*24*7),A(d),n.hide().siblings(".w-form-done").show().siblings(".w-form-fail").hide())})})});

var m=(r,n,o)=>new Promise((l,t)=>{var c=e=>{try{s(o.next(e))}catch(a){t(a)}},i=e=>{try{s(o.throw(e))}catch(a){t(a)}},s=e=>e.done?l(e.value):Promise.resolve(e.value).then(c,i);s((o=o.apply(r,n)).next())});var u={ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN",COACH:"COACH"};function f(r,n="GET",o=!1,l=!1,t=!1,c=!0){try{let i={"Content-Type":"application/json"};t&&(i={}),l&&(i.Authorization=`Bearer ${l}`);let s={method:n,headers:i};return o&&(c?s.body=JSON.stringify(o):s.body=o),fetch(r,s).then(e=>e.ok?e.json():e.json().then(a=>(Promise.reject(a.message),{isFetchOk:!1,status:e.status,message:a.message,payload:a&&a.payload?a.payload:null}))).then(e=>e).catch(e=>(console.error("Error in fetch",e),e))}catch(i){return console.error("Error!: "+i),i}}function g(r=null,n="nammax_auth",o=60*60*24){r&&(document.cookie=`${n}=${r}; path=/; max-age=${o}`)}function d(r="/",n=2e3){setTimeout(()=>{window.location.href=r},n)}var p=Webflow||[];var y="/admin/dashboard",h="/admin/gym/g",x="/admin/all-gyms",b="https://xoxo-jnzf-s0on.m2.xano.io/api:GEC76oIp/admin_auth/login",D=p||[];D.push(function(){$(document).off("submit"),$("form").submit(function(r){return m(this,null,function*(){r.preventDefault();let n=document.getElementById("submit");n&&(n.disabled=!0);let o=$(this),l={email:document.getElementById("admin_email-2").value,password:document.getElementById("admin_password").value},t=yield f(b,"POST",l);if(t.isFetchOk!==void 0&&!t.isFetchOk){o.siblings(".w-form-done").hide().siblings(".w-form-fail").show(),console.error(t.message),n&&(n.disabled=!1);return}Object.keys(t).includes("authToken")===!1?(o.siblings(".w-form-done").hide().siblings(".w-form-fail").show(),n&&(n.disabled=!1)):(g(t.authToken),t.role===u.SUPER_ADMIN?d(y):t.role===u.ADMIN?t.gyms&&t.gyms.length>0?d(`${h}?gymCode=${t.gyms[0].gym_id}`):d(x):console.error("Unknown role"),o.hide().siblings(".w-form-done").show().siblings(".w-form-fail").hide())})})});

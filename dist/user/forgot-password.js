var c=(r,s,e)=>new Promise((o,l)=>{var _=t=>{try{i(e.next(t))}catch(n){l(n)}},a=t=>{try{i(e.throw(t))}catch(n){l(n)}},i=t=>t.done?o(t.value):Promise.resolve(t.value).then(_,a);i((e=e.apply(r,s)).next())});function m(r,s="GET",e=!1,o=!1,l=!1,_=!0){try{let a={"Content-Type":"application/json"};l&&(a={}),o&&(a.Authorization=`Bearer ${o}`);let i={method:s,headers:a};return e&&(_?i.body=JSON.stringify(e):i.body=e),fetch(r,i).then(t=>t.ok?t.json():t.json().then(n=>(Promise.reject(n.message),{isFetchOk:!1,status:t.status,message:n.message,payload:n&&n.payload?n.payload:null}))).then(t=>t).catch(t=>(console.error("Error in fetch",t),t))}catch(a){return console.error("Error!: "+a),a}}var p=Webflow||[];var A="https://x8ki-letl-twmt.n7.xano.io/api:jniIGW5W/auth/magic-link";var u=p||[];u.push(function(){$(document).off("submit"),$("form").submit(function(r){return c(this,null,function*(){r.preventDefault();let s=$(this),e={email:document.getElementById("email").value},o=yield m(`${A}?email=${e.email}`,"GET");if(o.isFetchOk!==void 0&&!o.isFetchOk){s.siblings(".w-form-done").hide().siblings(".w-form-fail").show(),console.error(o.message);return}else s.hide().siblings(".w-form-done").show().siblings(".w-form-fail").hide()})})});

var c=(r,i,o)=>new Promise((n,_)=>{var l=t=>{try{a(o.next(t))}catch(e){_(e)}},s=t=>{try{a(o.throw(t))}catch(e){_(e)}},a=t=>t.done?n(t.value):Promise.resolve(t.value).then(l,s);a((o=o.apply(r,i)).next())});function m(r,i="GET",o=!1,n=!1,_=!1,l=!0){try{let s={"Content-Type":"application/json"};_&&(s={}),n&&(s.Authorization=`Bearer ${n}`);let a={method:i,headers:s};return o&&(l?a.body=JSON.stringify(o):a.body=o),fetch(r,a).then(t=>t.ok?t.json():t.json().then(e=>(Promise.reject(e.message),{isFetchOk:!1,status:t.status,message:e.message,payload:e&&e.payload?e.payload:null}))).then(t=>t).catch(t=>(console.error("Error in fetch",t),t))}catch(s){return console.error("Error!: "+s),s}}var p=Webflow||[];var x="https://x8ki-letl-twmt.n7.xano.io/api:jniIGW5W/auth/magic-link";var A=p||[];A.push(function(){$(document).off("submit"),$("form").submit(function(r){return c(this,null,function*(){r.preventDefault();let i=$(this),o={email:document.getElementById("email").value},n=yield m(`${x}?email=${o.email}`,"GET");if(n.isFetchOk!==void 0&&!n.isFetchOk){i.siblings(".w-form-done").hide().siblings(".w-form-fail").show(),console.error(n.message);return}else i.hide().siblings(".w-form-done").show().siblings(".w-form-fail").hide()})})});

var m=(i,r,t)=>new Promise((n,_)=>{var c=o=>{try{a(t.next(o))}catch(e){_(e)}},s=o=>{try{a(t.throw(o))}catch(e){_(e)}},a=o=>o.done?n(o.value):Promise.resolve(o.value).then(c,s);a((t=t.apply(i,r)).next())});function l(i,r="GET",t=!1,n=!1,_=!1,c=!0){try{let s={"Content-Type":"application/json"};_&&(s={}),n&&(s.Authorization=`Bearer ${n}`);let a={method:r,headers:s};return t&&(c?a.body=JSON.stringify(t):a.body=t),fetch(i,a).then(o=>o.ok?o.json():o.json().then(e=>(Promise.reject(e.message),{isFetchOk:!1,status:o.status,message:e.message,payload:e&&e.payload?e.payload:null}))).then(o=>o).catch(o=>(console.error("Error in fetch",o),o))}catch(s){return console.error("Error!: "+s),s}}var p=Webflow||[];var x="https://xoxo-jnzf-s0on.m2.xano.io/api:jniIGW5W/auth/magic-link";var A=p||[];A.push(function(){$(document).off("submit"),$("form").submit(function(i){return m(this,null,function*(){i.preventDefault();let r=$(this),t={email:document.getElementById("email").value},n=yield l(`${x}?email=${t.email}`,"GET");if(n.isFetchOk!==void 0&&!n.isFetchOk){r.siblings(".w-form-done").hide().siblings(".w-form-fail").show(),console.error(n.message);return}else r.hide().siblings(".w-form-done").show().siblings(".w-form-fail").hide()})})});

var m=(n,t,e)=>new Promise((o,c)=>{var i=a=>{try{s(e.next(a))}catch(_){c(_)}},r=a=>{try{s(e.throw(a))}catch(_){c(_)}},s=a=>a.done?o(a.value):Promise.resolve(a.value).then(i,r);s((e=e.apply(n,t)).next())});var A=["Male","Female","Other","Prefer not to say"];function p(n,t="GET",e=!1,o=!1,c=!1,i=!0){try{let r={"Content-Type":"application/json"};c&&(r={}),o&&(r.Authorization=`Bearer ${o}`);let s={method:t,headers:r};return e&&(i?s.body=JSON.stringify(e):s.body=e),fetch(n,s).then(a=>a.ok?a.json():a.json().then(_=>(Promise.reject(_.message),{isFetchOk:!1,status:a.status,message:_.message,payload:_&&_.payload?_.payload:null}))).then(a=>a).catch(a=>(console.error("Error in fetch",a),a))}catch(r){return console.error("Error!: "+r),r}}function N(n=null,t="nammax_auth",e=60*60*24){n&&(document.cookie=`${t}=${n}; path=/; max-age=${e}`)}function d(n="nammax_auth"){let e=`; ${document.cookie}`.split(`; ${n}=`);return e.length===2?e.pop().split(";").shift():null}function l(n="/",t=2e3){setTimeout(()=>{window.location.href=n},t)}var f=Webflow||[];var u="/sign-in";var E="/user/dashboard";var x="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/user/preferences";var R=[],h=[];function g(n){var t=new URL("https://x8ki-letl-twmt.n7.xano.io/api:ocRzyo-e/oauth/google/continue");t.searchParams.set("redirect_uri","https://nammacrossfit.com/sign-up-2"),t.searchParams.set("code",n),t=t.toString();var e=new URL(document.location.href);e.searchParams.delete("code"),e.searchParams.delete("scope"),e.searchParams.delete("authuser"),e.searchParams.delete("hd"),e.searchParams.delete("prompt"),history.replaceState(null,"",e.toString()),fetch(t,{headers:R,method:"GET"}).then(o=>o.json()).then(o=>h=o).then(()=>N(h.token)).catch(o=>{console.error("Error:",o)})}window.onload=function(){var n=new URL(document.location.href),t=n.searchParams.get("reason"),e=n.searchParams.get("code");if(t){let o=document.getElementById("warning_block");o.style.display="block",o.innerText="Please fill these required details in order to use the app"}if(e)g(e);else{let o=d();o?O(o):l(`${u}?reason=NOT_SIGNED_IN`)}};function O(n){return m(this,null,function*(){let t=yield p(x,"GET",!1,n);if(t.isFetchOk!==void 0&&!t.isFetchOk){console.error(t.message);return}let{user:e,gyms:o}=t;e.weight&&(document.getElementById("weight").value=e.weight),e.height&&(document.getElementById("height").value=e.height),e.date_of_birth&&(document.getElementById("date_of_birth").value=e.date_of_birth);let c=document.getElementById("gym_select");o.forEach(r=>{var s=document.createElement("option");s.value=r.id,s.text=r.location,r.id===e.gym_id&&(s.selected=!0),c.appendChild(s)});let i=document.getElementById("gender_select");A.forEach(r=>{var s=document.createElement("option");s.value=r,s.text=r,r===t.gender&&(s.selected=!0),i.appendChild(s)})})}var S=f||[];S.push(function(){$(document).off("submit"),$("form").submit(function(n){return m(this,null,function*(){n.preventDefault();let t=document.getElementById("next-btn");t&&(t.disabled=!0);let e=$(this),o=d();if(o){let c={date_of_birth:document.getElementById("date_of_birth").value,gender:document.getElementById("gender_select").value,height:document.getElementById("height").value,weight:document.getElementById("weight").value,gym_id:parseInt(document.getElementById("gym_select").value)},i=yield p(x,"POST",c,o);if(i.isFetchOk!==void 0&&!i.isFetchOk){console.error(i.message),e.siblings(".w-form-done").hide().siblings(".w-form-fail").show(),t&&(t.disabled=!1);return}else e.hide().siblings(".w-form-done").show().siblings(".w-form-fail").hide(),l(E)}else l(`${u}?reason=NOT_SIGNED_IN`)})})});

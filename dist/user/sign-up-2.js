var p=(n,t,e)=>new Promise((s,a)=>{var c=i=>{try{r(e.next(i))}catch(_){a(_)}},o=i=>{try{r(e.throw(i))}catch(_){a(_)}},r=i=>i.done?s(i.value):Promise.resolve(i.value).then(c,o);r((e=e.apply(n,t)).next())});var N=["Male","Female","Other","Prefer not to say"];function d(n,t="GET",e=!1,s=!1,a=!1,c=!0){try{let o={"Content-Type":"application/json"};a&&(o={}),s&&(o.Authorization=`Bearer ${s}`);let r={method:t,headers:o};return e&&(c?r.body=JSON.stringify(e):r.body=e),fetch(n,r).then(i=>i.ok?i.json():i.json().then(_=>(Promise.reject(_.message),{isFetchOk:!1,status:i.status,message:_.message,payload:_&&_.payload?_.payload:null}))).then(i=>i).catch(i=>(console.error("Error in fetch",i),i))}catch(o){return console.error("Error!: "+o),o}}function E(n=null,t="nammax_auth",e=60*60*24){n&&(document.cookie=`${t}=${n}; path=/; max-age=${e}`)}function x(n="nammax_auth"){let e=`; ${document.cookie}`.split(`; ${n}=`);return e.length===2?e.pop().split(";").shift():null}function l(n="/",t=2e3){setTimeout(()=>{window.location.href=n},t)}var f=Webflow||[];var m="/sign-in";var h="https://www.nammacrossfit.com/sign-up-2",R="/user/dashboard";var g="https://xoxo-jnzf-s0on.m2.xano.io/api:U0aE1wpF/oauth/google/continue";var u="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/user/preferences";var O=[],A=[];function S(n){var t=new URL(g);t.searchParams.set("redirect_uri",`${h}/`),t.searchParams.set("code",n),t=t.toString();var e=new URL(document.location.href);e.searchParams.delete("code"),e.searchParams.delete("scope"),e.searchParams.delete("authuser"),e.searchParams.delete("hd"),e.searchParams.delete("prompt"),history.replaceState(null,"",e.toString());let s=null;return fetch(t,{headers:O,method:"GET"}).then(a=>a.json()).then(a=>A=a).then(()=>{E(A.token),s=A.token}).catch(a=>{console.error("Error:",a)}),s}window.onload=function(){var n=new URL(document.location.href),t=n.searchParams.get("reason"),e=n.searchParams.get("code");if(t){let a=document.getElementById("warning_block");a.style.display="block",a.innerText="Please fill these required details in order to use the app"}let s;e&&(s=S(e)),s||(s=x()),s?I(s):l(`${m}?reason=NOT_SIGNED_IN`)};function I(n){return p(this,null,function*(){let t=yield d(u,"GET",!1,n);if(t.isFetchOk!==void 0&&!t.isFetchOk){console.error(t.message),l(`${m}?reason=NOT_SIGNED_IN`,1e3);return}let{user:e,gyms:s}=t;e.weight&&(document.getElementById("weight").value=e.weight),e.height&&(document.getElementById("height").value=e.height),e.date_of_birth&&(document.getElementById("date_of_birth").value=e.date_of_birth);let a=document.getElementById("gym_select");s.forEach(o=>{var r=document.createElement("option");r.value=o.id,r.text=o.location,o.id===e.gym_id&&(r.selected=!0),a.appendChild(r)});let c=document.getElementById("gender_select");N.forEach(o=>{var r=document.createElement("option");r.value=o,r.text=o,o===t.gender&&(r.selected=!0),c.appendChild(r)})})}var D=f||[];D.push(function(){$(document).off("submit"),$("form").submit(function(n){return p(this,null,function*(){n.preventDefault();let t=document.getElementById("next-btn"),e;t&&(t.disabled=!0,e=t.value,t.value="Confirming...");let s=$(this),a=x();if(a){let c={date_of_birth:document.getElementById("date_of_birth").value,gender:document.getElementById("gender_select").value,height:document.getElementById("height").value,weight:document.getElementById("weight").value,gym_id:parseInt(document.getElementById("gym_select").value)},o=yield d(u,"POST",c,a);if(o.isFetchOk!==void 0&&!o.isFetchOk){console.error(o.message),s.siblings(".w-form-done").hide().siblings(".w-form-fail").show(),t&&(t.disabled=!1,t.value=e);return}else s.hide().siblings(".w-form-done").show().siblings(".w-form-fail").hide(),l(R)}else l(`${m}?reason=NOT_SIGNED_IN`)})})});

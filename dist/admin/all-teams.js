var E=(o,t,e)=>new Promise((r,l)=>{var c=n=>{try{i(e.next(n))}catch(s){l(s)}},a=n=>{try{i(e.throw(n))}catch(s){l(s)}},i=n=>n.done?r(n.value):Promise.resolve(n.value).then(c,a);i((e=e.apply(o,t)).next())});var x={ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN",COACH:"COACH"};function h(o,t="GET",e=!1,r=!1,l=!1,c=!0){try{let a={"Content-Type":"application/json"};l&&(a={}),r&&(a.Authorization=`Bearer ${r}`);let i={method:t,headers:a};return e&&(c?i.body=JSON.stringify(e):i.body=e),fetch(o,i).then(n=>n.ok?n.json():n.json().then(s=>(Promise.reject(s.message),{isFetchOk:!1,status:n.status,message:s.message,payload:s&&s.payload?s.payload:null}))).then(n=>n).catch(n=>(console.error("Error in fetch",n),n))}catch(a){return console.error("Error!: "+a),a}}function b(o="nammax_auth"){let e=`; ${document.cookie}`.split(`; ${o}=`);return e.length===2?e.pop().split(";").shift():null}function g(o="/",t=2e3){setTimeout(()=>{window.location.href=o},t)}function B(o=1e3){setTimeout(()=>{window.location.reload()},o)}function L(o,t=null){if(o!=null){var e,r=o.options.length-1;for(e=r;e>=0;e--)e!==t&&o.remove(e)}}function v(o="/admin/sign-in",t="sidebar-logout-btn"){let e=document.getElementById(t);e?e.onclick=()=>q(o):console.error("Logout button not found")}function q(o="/sign-in"){window.localStorage.removeItem("auth"),g(`${o}`)}function w(o=x.ADMIN){if(o===x.ADMIN){let t=document.getElementById("admin-nav"),e=document.getElementById("super-admin-nav");t&&(t.style.display="flex"),e&&e.remove()}else if(o===x.SUPER_ADMIN){let t=document.getElementById("admin-nav"),e=document.getElementById("super-admin-nav");e&&(e.style.display="flex"),t&&t.remove()}}function X(){let o=document.getElementById("loading-screen");o?o.remove():console.error("did not find loading screen")}function z({mode:o="API",clientObjRefName:t="name",data:e,token:r,API:l,extraXanoInputObj:c=[],searchContainerElId:a=""},i,n=null,s=null){let _,p,m;if(a.length>0){let A=document.getElementById(a);_=A.querySelector("#search-input"),_.setAttribute("placeholder","Search"),p=A.querySelector("#search-btn"),m=A.querySelector("#search-reset-btn")}else _=document.getElementById("search-input"),_.setAttribute("placeholder","Search"),p=document.getElementById("search-btn"),m=document.getElementById("search-reset-btn");m.onclick=()=>{_.value="",j(m,{mode:o,clientObjRefName:t,data:e,searchquery:"",token:r,API:l,extraXanoInputObj:c},i,n,s)},p.onclick=()=>{let A=_.value;j(m,{mode:o,clientObjRefName:t,data:e,searchquery:A,token:r,API:l,extraXanoInputObj:c},i,n,s)}}function j(p,m,A,M,fe){return E(this,arguments,function*(o,{mode:t,clientObjRefName:e,data:r,searchquery:l,token:c,API:a,extraXanoInputObj:i=[]},n,s,_){if(l.length===0)o.style.display="none",s?n(r,s):n(r);else try{if(t==="API"){let f={search_query:`${l}:*`};i.length>0&&i.map(k=>{for(let[F,W]of Object.entries(k))f[F]=W});let N=yield h(a+"query","POST",f,c);if(N.isFetchOk!==void 0&&!N.isFetchOk)throw console.error(N.message),Error("API call failed");o.style.display="flex",s?n(N,s):n(N)}else{let f=r.filter(N=>N[e].toLowerCase().includes(l.toLowerCase()));o.style.display="flex",s?n(f,s):n(f)}}catch(f){_?_():console.error(f)}})}var K=Webflow||[];var R="/admin/sign-in";var H="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/super_admin/all_teams",C="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/super_admin/all_teams/add_team";var Y="https://www.nammacrossfit.com",P=Y;var le=`${P}/sign-up-2`;var ce=`${P}/user/dashboard`;var I,y,T,D,U,u,O,d,S=[];$(document).ready(function(){u=document.querySelector("#team-gym-select"),I=document.querySelector("#team-name-input"),y=document.querySelector("#team-email-input"),U=document.querySelector("#team-password-input"),T=document.querySelector("#team-phone-input"),D=document.querySelector("#team-salary-input"),O=document.querySelector("#team-role-select"),d=document.querySelector("#team-add-member-btn"),u.disabled=!0,I.disabled=!0,y.disabled=!0,U.disabled=!0,T.disabled=!0,D.disabled=!0,O.disabled=!0,d.disabled=!0});window.onload=function(){return E(this,null,function*(){v(R,"sidebar-logout-btn");let o=b();if(o){let t=yield h(H,"GET",!1,o);if(t.isFetchOk!==void 0&&!t.isFetchOk){console.error(t.message),t.payload&&t.payload.role===x.ADMIN&&t.payload.gyms&&t.payload.gyms.length>0?g(`/admin/gym/g?gymCode=${t.payload.gyms[0].gym_id}`):g(`${R}?reason=UNAUTHORIZED_USER`);return}w(x.SUPER_ADMIN),J(t,o)}else g(`${R}?reason=NOT_SIGNED_IN`)})};function J(o,t){return E(this,null,function*(){u.disabled=!1,G(o),V(t),z({mode:"client",data:o,clientObjRefName:"name"},G),X()})}function G(o){let t=document.getElementById("table-container"),e=t.querySelector("#table-item");function r(l){let c=t.querySelectorAll(".adb-user.w-inline-block");c.forEach((a,i)=>{i!==c.length-1&&a.remove()}),l.forEach((a,i)=>{let n=e.cloneNode(!0);n.setAttribute("id",""),n.setAttribute("href",`/admin/team?teamId=${a.id}`);let s=n.querySelectorAll(".colcontent");i%2===0&&(n.style.backgroundColor="#00edf4"),a.profile_picture&&(s[0].style.backgroundImage=`url(${a.profile_picture.url})`),s[1].innerText=a.name,s[2].innerText=a.role,s[4].innerText=a.email,s[5].innerText=a.phone_number||"-";let _="",p=0;a.gyms.forEach((m,A)=>{var M;_+=m.code,A<a.gyms.length-1&&(_+=", "),p+=((M=m==null?void 0:m.users)==null?void 0:M.length)||0}),s[3].innerText=_||"-",s[6].innerText=p,s[7].innerText=a.status,n.style.display="flex",t.prepend(n)})}r(o),e.style.display="none"}function V(o){$("form :input").attr("autocomplete","off");function t(){return E(this,null,function*(){let e=yield h(C,"GET",!1,o);if(e.isFetchOk!==void 0&&!e.isFetchOk){console.error(e.message);return}Q(e),u.removeEventListener("focus",t)})}u.addEventListener("focus",t)}function Q(o){L(u),o.forEach(t=>{let e=document.createElement("option");e.setAttribute("value",t.id),e.innerText=t.code+" - "+t.location,u.appendChild(e)}),$(u).attr("multiple","multiple"),$(u).multiselect({onInitialized:function(t){S=[t[0].selectedOptions[0].value]},onChange:function(){var t=$(".multiselect-option.dropdown-item.active"),e=[];$(t).each(function(){e.push($(this).find(".form-check-input").val())}),S=e}}),$(u).siblings(".btn-group").addClass("adb-session-dd").children(".multiselect.dropdown-toggle").css("height","100%"),L(O),Object.keys(x).forEach(t=>{let e=document.createElement("option");e.setAttribute("value",t.replace(" ","_")),e.innerText=t,O.appendChild(e)}),I.disabled=!1,y.disabled=!1,U.disabled=!1,T.disabled=!1,D.disabled=!1,O.disabled=!1}var Z=K||[];Z.push(function(){$(document).off("submit"),$("form").on("change",function(){let o=I.value,t=y.value,e=U.value,r=D.value;S.length>0&&o!==""&&t!==""&&e!==""&&r!==""&&(d.disabled=!1,d.classList.remove("disabled"))}),$("form").on("submit",function(o){return E(this,null,function*(){o.preventDefault();let t;d&&(t=d.value,d.disabled=!0,d.value="Adding member");let e=$(this),r=I.value,l=y.value,c=U.value,a=T.value,i=D.value,n=O.value,s=b();if(s)if(S.length>0&&r!==""&&l!==""&&c!==""&&i!==""){let _={gyms:[...S.map(m=>({gym_id:parseInt(m)}))],name:r,email:l,password:c,salary:i,phone_number:a.trim()===""?null:a,role:n},p=yield h(C,"POST",_,s);if(p.isFetchOk!==void 0&&!p.isFetchOk){console.error(p.message),e.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("There was an error adding the team member, please refresh and try again");return}B()}else S.length===0?e[0][0].style.borderColor="red":e[0][0].style.borderColor="black",r.trim()===""?e[0][1].style.borderColor="red":e[0][1].style.borderColor="black",l.trim()===""?e[0][2].style.borderColor="red":e[0][2].style.borderColor="black",c.trim()===""?e[0][3].style.borderColor="red":e[0][3].style.borderColor="black",i.trim()===""?e[0][6].style.borderColor="red":e[0][6].style.borderColor="black",e.siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("Please fill out all (required) fields"),d&&(d.disabled=!1,d.value=t,d.classList.remove("disabled"));else g(`${R}?reason=NOT_SIGNED_IN`)})})});

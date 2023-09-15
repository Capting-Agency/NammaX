var U=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var I=(e,t)=>{var n={};for(var a in e)K.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&U)for(var a of U(e))t.indexOf(a)<0&&P.call(e,a)&&(n[a]=e[a]);return n};var g=(e,t,n)=>new Promise((a,d)=>{var x=c=>{try{A(n.next(c))}catch(o){d(o)}},l=c=>{try{A(n.throw(c))}catch(o){d(o)}},A=c=>c.done?a(c.value):Promise.resolve(c.value).then(x,l);A((n=n.apply(e,t)).next())});var T=["January","February","March","April","May","June","July","August","September","October","November","December"],E={ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN",COACH:"COACH"};function D(e,t="GET",n=!1,a=!1,d=!1,x=!0){try{let l={"Content-Type":"application/json"};d&&(l={}),a&&(l.Authorization=`Bearer ${a}`);let A={method:t,headers:l};return n&&(x?A.body=JSON.stringify(n):A.body=n),fetch(e,A).then(c=>c.ok?c.json():c.json().then(o=>(Promise.reject(o.message),{isFetchOk:!1,status:c.status,message:o.message,payload:o&&o.payload?o.payload:null}))).then(c=>c).catch(c=>(console.error("Error in fetch",c),c))}catch(l){return console.error("Error!: "+l),l}}function S(e="nammax_auth"){let n=`; ${document.cookie}`.split(`; ${e}=`);return n.length===2?n.pop().split(";").shift():null}function R(e="/",t=2e3){setTimeout(()=>{window.location.href=e},t)}function L(e=1e3){setTimeout(()=>{window.location.reload()},e)}function y(e=null){if(e==null)return"NaN";let t=new Date(e);return`${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()}`}function b(e=null){if(e==null)return"NaN";let t=e.split("/");return new Date(`${t[2]}/${t[1]}/${t[0]} ${new Date().getHours()}:${new Date().getMinutes()}`).getTime()}function C(e="/admin/sign-in",t="sidebar-logout-btn"){let n=document.getElementById(t);n?n.onclick=()=>H(e):console.error("Logout button not found")}function H(e="/sign-in"){window.localStorage.removeItem("auth"),R(`${e}`)}function h(e=0){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"}).format(Number(e)).replace(/^(\D+)/,"$1 ")}function B(e=E.ADMIN){if(e===E.ADMIN){let t=document.getElementById("admin-nav"),n=document.getElementById("super-admin-nav");t&&(t.style.display="flex"),n&&n.remove()}else if(e===E.SUPER_ADMIN){let t=document.getElementById("admin-nav"),n=document.getElementById("super-admin-nav");n&&(n.style.display="flex"),t&&t.remove()}}function M(e){if(!e)return console.error("url does not cotnain gym id");let t=document.getElementById("navbar-home"),n=document.getElementById("navbar-finance"),a=document.getElementById("navbar-users"),d=document.getElementById("navbar-sessions");t&&t.setAttribute("href",`/admin/gym/g?gymCode=${e}`),n&&n.setAttribute("href",`/admin/gym/finance?gymCode=${e}`),a&&a.setAttribute("href",`/admin/gym/users?gymCode=${e}`),d&&d.setAttribute("href",`/admin/gym/sessions?gymCode=${e}`)}function w(e){if(!e)return console.error("gym data not found");let t=document.getElementById("gym-code-location"),n=document.getElementById("header-address"),a=document.getElementById("header-partner"),d=document.getElementById("header-contact"),x=document.getElementById("header-email");t&&(t.innerText=`${e.code} \u2022 ${e.location}`),n&&(n.innerText=e.address),a&&(a.innerText=e.partner),d&&(d.innerText=e.contact),x&&(x.innerText=e.partner_email)}function X(){let e=document.getElementById("loading-screen");e?e.remove():console.log("did not find loading screen")}var j=Webflow||[];var O="/admin/sign-in";var v="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/admin/finance_detail",z="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/admin/finance_detail/new_entry";(()=>{let e,t,n,a;window.onload=function(){return g(this,null,function*(){C("/admin/sign-in","sidebar-logout-btn");var o=new URL(document.location.href);if(e=o.searchParams.get("gymCode")||null,t=o.searchParams.get("month")||null,n=o.searchParams.get("year")||null,e)M(e);else{console.error("No gym id found");return}let i=S();if(i){let m=yield D(v,"POST",{gym_id:e,month:t,year:n},i);if(m.isFetchOk!==void 0&&!m.isFetchOk){console.error(m.message);return}let _=m,{team_role:s}=_,r=I(_,["team_role"]);s===E.SUPER_ADMIN||s===E.ADMIN?(B(s),d(r,i)):R(`${O}?reason=UNAUTHORIZED_USER`)}else R(`${O}?reason=NOT_SIGNED_IN`)})};function d(o){return g(this,null,function*(){let{gym:i,finance:_,payment_ledger:p}=o;if(i&&w(i),A(),_){let m=_[0],{id:s,additional_entries:r}=m,u=I(m,["id","additional_entries"]);s&&(a=s),x(u),l(r,p)}X()})}function x(o){let{month:i,year:_,member_revenue:p,fixed_expense:m,gross_revenue:s,additional_expenses:r,net_profit:u}=o;document.getElementById("finance-month").innerText=T[i-1],document.getElementById("finance-year").innerText=_,document.getElementById("financial-gross-gym-revenue").innerText=h(p)||"0",document.getElementById("financial-franchise-cut").innerText=h(m)||"0",document.getElementById("financial-net-gym-revenue").innerText=h(s)||"0",document.getElementById("financial-gym-expenses").innerText=h(r)||"0",document.getElementById("financial-net-profit").innerText=h(u)||"0"}function l(o=[],i=[]){let _=document.getElementById("account-table-container"),p=_.querySelector("#account-table-item"),m=[...i.map(r=>({time:r.time,description:`${r.name}  (${r.mode_of_payment} | ${y(r.membership_end_date)})`,debit:null,credit:r.amount,user:!0}))],s=o.concat(m);s.sort((r,u)=>u.time-r.time),s==null||s.forEach((r,u)=>{let f=p.cloneNode(!0);f.setAttribute("id","");let N=f.querySelectorAll(".colcontent");u%2===0&&(f.style.backgroundColor="#00edf4"),r&&r.user&&(f.style.textDecoration="underline"),N[0].innerText=y(r.time),N[1].innerText=r.description||"",N[2].innerText=r.debit||"",N[3].innerText=r.credit||"",_.append(f)}),p.remove()}function A(){let o=new Date,i=new Date(o.getFullYear(),o.getMonth(),1),_=new Date(o.getFullYear(),o.getMonth(),31),p=document.getElementById("datepicker-input");$(p).datepicker({startDate:i,endDate:_,format:"dd/mm/yyyy",language:"en",multidate:!1,orientation:"bottom auto"}).datepicker("setDate","now");let s=document.getElementById("entry-form-block").querySelector("#entry-btn");s.onclick=()=>{s.disabled||(s.disabled=!0,s.value="Submitting...",s.classList.contains("disabled")||s.classList.add("disabled"),c())}}function c(){return g(this,null,function*(){let o=$("#entry-form-block");if(o.attr("id")==="entry-form-block"){let i=document.getElementById("entry-btn"),_;i&&(_=i.value,i.disabled=!0,i.value="Adding Entry",i.classList.add("disabled"));let p=S();if(p){let m=o[0][0].value||"",s=o[0][1].value||"",r=o[0][2].value||"",u=o[0][3].value||"";if(m!==""&&s!==""&&(r!==""||u!=="")){let f={finance_id:a,gym_id:e,month:t,year:n,time:b(m),description:s,debit:r,credit:u},N=yield D(z,"POST",f,p);if(N.isFetchOk!==void 0&&!N.isFetchOk){console.error(N.message),i&&(i.disabled=!1,i.value=_,i.classList.remove("disabled")),o.hide().siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("Failed to add new entry. Please try again - Error: "+N.message);return}o.hide().siblings(".w-form-fail").hide().siblings(".w-form-done").show().text("Successfully added new entry!"),L()}}else R(`${O}?reason=NOT_SIGNED_IN`)}})}})();var F=j||[];F.push(function(){$(document).off("submit"),$("form").on("change",function(){let e=$(this);if(e.attr("id")==="entry-form-block"){let t=e[0][0].value||"",n=e[0][1].value||"",a=e[0][2].value||"",d=e[0][3].value||"",l=document.getElementById("entry-form-block").querySelector("#entry-btn");t!==""&&n!==""&&(a!==""||d!=="")?(l.disabled=!1,l.classList.remove("disabled")):(l.disabled=!0,l.classList.contains("disabled")||l.classList.addClass("disabled"))}}),$("form").on("submit",function(e){return g(this,null,function*(){e.preventDefault()})})});

var z=Object.defineProperty,P=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var U=(e,n,a)=>n in e?z(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,g=(e,n)=>{for(var a in n||={})H.call(n,a)&&U(e,a,n[a]);if(y)for(var a of y(n))k.call(n,a)&&U(e,a,n[a]);return e},R=(e,n)=>P(e,K(n));var O=(e,n,a)=>new Promise((u,p)=>{var N=o=>{try{i(a.next(o))}catch(s){p(s)}},l=o=>{try{i(a.throw(o))}catch(s){p(s)}},i=o=>o.done?u(o.value):Promise.resolve(o.value).then(N,l);i((a=a.apply(e,n)).next())});var L=["January","February","March","April","May","June","July","August","September","October","November","December"],x={ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN",COACH:"COACH"};function I(e,n="GET",a=!1,u=!1,p=!1,N=!0){try{let l={"Content-Type":"application/json"};p&&(l={}),u&&(l.Authorization=`Bearer ${u}`);let i={method:n,headers:l};return a&&(N?i.body=JSON.stringify(a):i.body=a),fetch(e,i).then(o=>o.ok?o.json():o.json().then(s=>(Promise.reject(s.message),{isFetchOk:!1,status:o.status,message:s.message,payload:s&&s.payload?s.payload:null}))).then(o=>o).catch(o=>(console.error("Error in fetch",o),o))}catch(l){return console.error("Error!: "+l),l}}function D(e="nammax_auth"){let a=`; ${document.cookie}`.split(`; ${e}=`);return a.length===2?a.pop().split(";").shift():null}function f(e="/",n=2e3){setTimeout(()=>{window.location.href=e},n)}function T(e=1e3){setTimeout(()=>{window.location.reload()},e)}function b(e=null){if(e==null)return"NaN";let n=new Date(e);return`${n.getDate()}/${n.getMonth()+1}/${n.getFullYear()}`}function C(e="/admin/sign-in",n="sidebar-logout-btn"){let a=document.getElementById(n);a?a.onclick=()=>F(e):console.error("Logout button not found")}function F(e="/sign-in"){window.localStorage.removeItem("auth"),f(`${e}`)}function A(e=0){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"}).format(Number(e)).replace(/^(\D+)/,"$1 ")}function B(e=x.ADMIN){if(e===x.ADMIN){let n=document.getElementById("admin-nav"),a=document.getElementById("super-admin-nav");n&&(n.style.display="flex"),a&&a.remove()}else if(e===x.SUPER_ADMIN){let n=document.getElementById("admin-nav"),a=document.getElementById("super-admin-nav");a&&(a.style.display="flex"),n&&n.remove()}}function M(){let e=document.getElementById("loading-screen");e?e.remove():console.error("did not find loading screen")}var w=Webflow||[];var S="/admin/sign-in";var X="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/super_admin/all_finance_detail",v="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/super_admin/all_finance_detail/new_entry";var G="https://www.nammacrossfit.com",j=G;var Z=`${j}/sign-up-2`;var ee=`${j}/user/dashboard`;(()=>{let e,n;window.onload=function(){return O(this,null,function*(){C("/admin/sign-in","sidebar-logout-btn");var i=new URL(document.location.href);if(e=i.searchParams.get("month")||null,n=i.searchParams.get("year")||null,!e||!n){console.error("No month or year found");return}let o=D();if(o){let _=yield I(X,"POST",{month:e,year:n},o);if(_.isFetchOk!==void 0&&!_.isFetchOk){console.error(_.message),_.payload&&_.payload.role===x.ADMIN&&_.payload.gyms&&_.payload.gyms.length>0?f(`/admin/gym/g?gymCode=${_.payload.gyms[0].gym_id}`):f(`${S}?reason=UNAUTHORIZED_USER`);return}B(x.SUPER_ADMIN),a(_,o)}else f(`${S}?reason=NOT_SIGNED_IN`)})};function a(i){let{finance:o,external_finance:s,payment_ledger:_}=i,m=o.reduce((r,t)=>{let c=t.month+","+t.year;return r[c]!==void 0?r[c]=R(g({},r[c]),{external_additional_revenue:0,external_additional_expenses:0,gross_revenue:t.gross_revenue,fixed_expense:t.fixed_expense,member_revenue:t.member_revenue}):r[c]=t,r},{}),d=s.reduce((r,t)=>{let c=t.month+","+t.year;return r[c]!==void 0?r[c]=R(g({},r[c]),{external_additional_revenue:Number(t.credit||0)+Number(r[c].external_additional_revenue||0),external_additional_expenses:Number(t.debit||0)+Number(r[c].external_additional_expenses||0)}):r[c]=t,r},m);N(),u(d),p(_,s),M()}function u(i){let{month:o,year:s,member_revenue:_,fixed_expense:m,gross_revenue:d,external_additional_revenue:r,external_additional_expenses:t}=i[e+","+n],c=Number(m||0)+Number(r||0)-Number(t||0);document.getElementById("finance-month").innerText=L[o-1],document.getElementById("finance-year").innerText=s,document.getElementById("financial-member-revenue").innerText=A(_||"0")||"0",document.getElementById("financial-fixed-expense").innerText=A(m||"0")||"0",document.getElementById("financial-gross-revenue").innerText=A(d||"0")||"0",document.getElementById("financial-additional-revenue").innerText=A(r||"0")||"0",document.getElementById("financial-additional-expenses").innerText=A(t||"0")||"0",document.getElementById("financial-net-profit").innerText=A(c||"0")||"0"}function p(i=[],o=[]){let s=document.getElementById("account-table-container"),_=s.querySelector("#account-table-item"),m={};i.map(t=>m[t.code]!==void 0?m[t.code]=R(g({},m[t.code]),{credit:Number(t.amount)+Number(m[t.code].credit)}):m[t.code]={time:null,description:`${t.code}`,debit:null,credit:Number(t.amount),user:!0});let d=[...o.map(t=>({time:t.created_at,description:t.description,debit:t.debit,credit:t.credit}))],r=Object.values(m);r=r.concat(d),r.sort((t,c)=>c.time-t.time),r==null||r.forEach((t,c)=>{let E=_.cloneNode(!0);E.setAttribute("id","");let h=E.querySelectorAll(".colcontent");c%2===0&&(E.style.backgroundColor="#00edf4"),h[0].innerText=t&&t.user?"":b(t.time),h[1].innerText=t.description||"",h[2].innerText=t.debit||"",h[3].innerText=t.credit||"",s.append(E)}),_.remove()}function N(){let o=document.getElementById("entry-form-block").querySelector("#entry-btn"),s=new Date,_=new Date(s.getFullYear(),s.getMonth(),1),m=new Date(s.getFullYear(),s.getMonth(),31),d=document.getElementById("datepicker-input");$(d).datepicker({startDate:_,endDate:m,format:"dd/mm/yyyy",language:"en",multidate:!1,orientation:"bottom auto"}).datepicker("setDate","now"),o.onclick=()=>{o.disabled||(o.disabled=!0,o.value="Submitting...",o.classList.contains("disabled")||o.classList.add("disabled"),l())}}function l(){return O(this,null,function*(){let i=$("#entry-form-block");if(i.attr("id")==="entry-form-block"){let o=document.getElementById("entry-btn");o&&(o.disabled=!0);let s=D();if(s){let _=i[0][0].value||"",m=i[0][1].value||"",d=i[0][2].value||"",r=i[0][3].value||"";if(_!==""&&m!==""&&(d!==""||r!=="")){let t={time:new Date(_).getTime(),month:e,year:n,description:m,debit:d,credit:r},c=yield I(v,"POST",t,s);if(c.isFetchOk!==void 0&&!c.isFetchOk){console.error(c.message),i.hide().siblings(".w-form-done").hide().siblings(".w-form-fail").show().text("Failed to add new entry. Please try again - Error: "+c.message),o&&(o.disabled=!1);return}i.hide().siblings(".w-form-fail").hide().siblings(".w-form-done").show().text("Successfully added new entry!"),T()}}}})}})();var W=w||[];W.push(function(){$(document).off("submit"),$("form").on("change",function(){let e=$(this);if(e.attr("id")==="entry-form-block"){let n=e[0][0].value||"",a=e[0][1].value||"",u=e[0][2].value||"",p=e[0][3].value||"",l=document.getElementById("entry-form-block").querySelector("#entry-btn");n!==""&&a!==""&&(u!==""||p!=="")?(l.disabled=!1,l.classList.remove("disabled")):(l.disabled=!0,l.classList.contains("disabled")||l.classList.addClass("disabled"))}}),$("form").on("submit",function(e){return O(this,null,function*(){e.preventDefault()})})});

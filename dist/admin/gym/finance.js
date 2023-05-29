var E=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var h=(t,a)=>{var n={};for(var r in t)D.call(t,r)&&a.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&E)for(var r of E(t))a.indexOf(r)<0&&T.call(t,r)&&(n[r]=t[r]);return n};var N=(t,a,n)=>new Promise((r,_)=>{var c=o=>{try{s(n.next(o))}catch(e){_(e)}},i=o=>{try{s(n.throw(o))}catch(e){_(e)}},s=o=>o.done?r(o.value):Promise.resolve(o.value).then(c,i);s((n=n.apply(t,a)).next())});var u=["January","February","March","April","May","June","July","August","September","October","November","December"],m={ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN",COACH:"COACH"};function f(t,a="GET",n=!1,r=!1,_=!1,c=!0){try{let i={"Content-Type":"application/json"};_&&(i={}),r&&(i.Authorization=`Bearer ${r}`);let s={method:a,headers:i};return n&&(c?s.body=JSON.stringify(n):s.body=n),fetch(t,s).then(o=>o.ok?o.json():o.json().then(e=>(Promise.reject(e.message),{isFetchOk:!1,status:o.status,message:e.message,payload:e&&e.payload?e.payload:null}))).then(o=>o).catch(o=>(console.error("Error in fetch",o),o))}catch(i){return console.error("Error!: "+i),i}}function R(t="nammax_auth"){let n=`; ${document.cookie}`.split(`; ${t}=`);return n.length===2?n.pop().split(";").shift():null}function A(t="/",a=0){setTimeout(()=>{window.location.href=t},a)}function S(t="/admin/sign-in",a="sidebar-logout-btn"){let n=document.getElementById(a);n?n.onclick=()=>C(t):console.error("Logout button not found")}function C(t="/sign-in"){window.localStorage.removeItem("auth"),A(`${t}`)}function p(t=0){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"}).format(Number(t)).replace(/^(\D+)/,"$1 ")}function I(t=m.ADMIN){if(t===m.ADMIN){let a=document.getElementById("admin-nav"),n=document.getElementById("super-admin-nav");a&&(a.style.display="flex"),n&&n.remove()}else if(t===m.SUPER_ADMIN){let a=document.getElementById("admin-nav"),n=document.getElementById("super-admin-nav");n&&(n.style.display="flex"),a&&a.remove()}}function g(t){if(!t)return console.error("url does not cotnain gym id");let a=document.getElementById("navbar-home"),n=document.getElementById("navbar-finance"),r=document.getElementById("navbar-users"),_=document.getElementById("navbar-sessions");a&&a.setAttribute("href",`/admin/gym/g?gymCode=${t}`),n&&n.setAttribute("href",`/admin/gym/finance?gymCode=${t}`),r&&r.setAttribute("href",`/admin/gym/users?gymCode=${t}`),_&&_.setAttribute("href",`/admin/gym/sessions?gymCode=${t}`)}function O(t){if(!t)return console.error("gym data not found");let a=document.getElementById("gym-code-location"),n=document.getElementById("header-address"),r=document.getElementById("header-partner"),_=document.getElementById("header-contact"),c=document.getElementById("header-email");a&&(a.innerText=`${t.code} \u2022 ${t.location}`),n&&(n.innerText=t.address),r&&(r.innerText=t.partner),_&&(_.innerText=t.contact),c&&(c.innerText=t.partner_email)}var x="/admin/sign-in";var U="https://x8ki-letl-twmt.n7.xano.io/api:Kml2N_BA/admin/finance/";(()=>{let t,a;window.onload=function(){return N(this,null,function*(){S("/admin/sign-in","sidebar-logout-btn");var i=new URL(document.location.href);if(t=i.searchParams.get("gymCode")||null,t)g(t);else{console.error("No gym id found");return}let s=R();if(s){let e=yield f(U+t,"GET",!1,s);if(e.isFetchOk!==void 0&&!e.isFetchOk){console.error(e.message);return}let o=e,{team_role:l}=o,d=h(o,["team_role"]);l===m.SUPER_ADMIN||l===m.ADMIN?(I(l),n(d)):A(`${x}?reason=UNAUTHORIZED_USER`)}else A(`${x}?reason=NOT_SIGNED_IN`)})};function n(i){return N(this,null,function*(){let{gym:s,finances:o}=i;s&&O(s);let e;a=o.some((d,y)=>{if(d.month===new Date().getMonth()+1&&d.year===new Date().getFullYear())return e=y,!0})?o[e]:o[o.length-1],a===void 0&&(a=null),r(a),_(o),c(o)})}function r(i){i?(document.getElementById("gym-statistics-month-year").innerText=u[i.month-1]+" "+i.year,document.getElementById("financial-expenses").innerText=p(Number(i.additional_expenses)),document.getElementById("financial-revenue").innerText=p(Number(i.gross_revenue)+Number(i.additional_revenue)),document.getElementById("financial-profit").innerText=p(i.net_profit)):(document.getElementById("gym-statistics-month-year").innerText="This months data not found",document.getElementById("financial-expenses").innerText="No data found",document.getElementById("financial-revenue").innerText="No data found",document.getElementById("financial-profit").innerText="No data found")}function _(i){let s=document.getElementById("financial-data-container"),o=s.querySelector("#financial-data-item");i.forEach(e=>{let l=o.cloneNode(!0);l.setAttribute("id",""),l.setAttribute("href","/admin/gym/financial-month?gymCode="+t+"&month="+e.month+"&year="+e.year),l.querySelector("#financial-data-month-year ").innerText=u[e.month-1]+" "+e.year,l.querySelector("#financial-data-revenue").innerText=p(Number(e.gross_revenue)+Number(e.additional_revenue)),l.querySelector("#financial-data-expenses").innerText=p(Number(e.additional_expenses)),l.querySelector("#financial-data-profit").innerText=p(e.net_profit),e.net_profit<0?(l.querySelector("#financial-indicator").classList.add("is-loss"),l.querySelector("#financial-data-profit").style.color="#ff634e"):l.querySelector("#financial-indicator").classList.add("is-profitable"),s.prepend(l)}),o.remove()}function c(i){let s=document.getElementById("finance-chart").getContext("2d"),o=[...i.map(e=>u[e.month-1])];new Chart(s,{type:"bar",data:{labels:o,datasets:[{label:"Revenue",data:[...i.map(e=>Number(e.gross_revenue)+Number(e.additional_revenue))],backgroundColor:["#00EDF4"]},{label:"Profit",data:[...i.map(e=>e.net_profit)],backgroundColor:["#E0FFC1"]},{label:"Expenses",data:[...i.map(e=>-Number(e.additional_expenses))],backgroundColor:["#ff0000"]}]},options:{scales:{x:{grid:{display:!1},stacked:!0},y:{grid:{display:!1},stacked:!0}}}})}})();

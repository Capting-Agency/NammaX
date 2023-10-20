var f=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var E=(e,a)=>{var n={};for(var r in e)L.call(e,r)&&a.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&f)for(var r of f(e))a.indexOf(r)<0&&C.call(e,r)&&(n[r]=e[r]);return n};var N=(e,a,n)=>new Promise((r,c)=>{var l=o=>{try{i(n.next(o))}catch(t){c(t)}},s=o=>{try{i(n.throw(o))}catch(t){c(t)}},i=o=>o.done?r(o.value):Promise.resolve(o.value).then(l,s);i((n=n.apply(e,a)).next())});var u=["January","February","March","April","May","June","July","August","September","October","November","December"],m={ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN",COACH:"COACH"};function h(e,a="GET",n=!1,r=!1,c=!1,l=!0){try{let s={"Content-Type":"application/json"};c&&(s={}),r&&(s.Authorization=`Bearer ${r}`);let i={method:a,headers:s};return n&&(l?i.body=JSON.stringify(n):i.body=n),fetch(e,i).then(o=>o.ok?o.json():o.json().then(t=>(Promise.reject(t.message),{isFetchOk:!1,status:o.status,message:t.message,payload:t&&t.payload?t.payload:null}))).then(o=>o).catch(o=>(console.error("Error in fetch",o),o))}catch(s){return console.error("Error!: "+s),s}}function R(e="nammax_auth"){let n=`; ${document.cookie}`.split(`; ${e}=`);return n.length===2?n.pop().split(";").shift():null}function d(e="/",a=2e3){setTimeout(()=>{window.location.href=e},a)}function g(e="/admin/sign-in",a="sidebar-logout-btn"){let n=document.getElementById(a);n?n.onclick=()=>M(e):console.error("Logout button not found")}function M(e="/sign-in"){window.localStorage.removeItem("auth"),d(`${e}`)}function p(e=0){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"}).format(Number(e)).replace(/^(\D+)/,"$1 ")}function O(e=m.ADMIN){if(e===m.ADMIN){let a=document.getElementById("admin-nav"),n=document.getElementById("super-admin-nav");a&&(a.style.display="flex"),n&&n.remove()}else if(e===m.SUPER_ADMIN){let a=document.getElementById("admin-nav"),n=document.getElementById("super-admin-nav");n&&(n.style.display="flex"),a&&a.remove()}}function S(e){if(!e)return console.error("url does not cotnain gym id");let a=document.getElementById("navbar-home"),n=document.getElementById("navbar-finance"),r=document.getElementById("navbar-users"),c=document.getElementById("navbar-sessions");a&&a.setAttribute("href",`/admin/gym/g?gymCode=${e}`),n&&n.setAttribute("href",`/admin/gym/finance?gymCode=${e}`),r&&r.setAttribute("href",`/admin/gym/users?gymCode=${e}`),c&&c.setAttribute("href",`/admin/gym/sessions?gymCode=${e}`)}function I(e){if(!e)return console.error("gym data not found");let a=document.getElementById("gym-code-location"),n=document.getElementById("header-address"),r=document.getElementById("header-partner"),c=document.getElementById("header-contact"),l=document.getElementById("header-email");a&&(a.innerText=`${e.code} \u2022 ${e.location}`),n&&(n.innerText=e.address),r&&(r.innerText=e.partner),c&&(c.innerText=e.contact),l&&(l.innerText=e.partner_email)}function D(){let e=document.getElementById("loading-screen");e?e.remove():console.error("did not find loading screen")}var A="/admin/sign-in";var U="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/admin/finance/";var B="https://www.nammacrossfit.com",y=B;var w=`${y}/sign-up-2`;var K=`${y}/user/dashboard`;(()=>{let e,a;window.onload=function(){return N(this,null,function*(){g("/admin/sign-in","sidebar-logout-btn");var s=new URL(document.location.href);if(e=s.searchParams.get("gymCode")||null,e)S(e);else{console.error("No gym id found");return}let i=R();if(i){let t=yield h(U+e,"GET",!1,i);if(t.isFetchOk!==void 0&&!t.isFetchOk){console.error(t.message),d(`${A}?reason=NOT_SIGNED_IN`);return}let o=t,{team_role:_}=o,x=E(o,["team_role"]);_===m.SUPER_ADMIN||_===m.ADMIN?(O(_),n(x)):d(`${A}?reason=UNAUTHORIZED_USER`)}else d(`${A}?reason=NOT_SIGNED_IN`)})};function n(s){return N(this,null,function*(){let{gym:i,finances:o}=s;i&&I(i);let t;a=o.some((x,T)=>{if(x.month===new Date().getMonth()+1&&x.year===new Date().getFullYear())return t=T,!0})?o[t]:o[o.length-1],a===void 0&&(a=null),r(a),c(o),l(o),D()})}function r(s){s?(document.getElementById("gym-statistics-month-year").innerText=u[s.month-1]+" "+s.year,document.getElementById("financial-expenses").innerText=p(Number(s.additional_expenses)),document.getElementById("financial-revenue").innerText=p(Number(s.gross_revenue)+Number(s.additional_revenue)),document.getElementById("financial-profit").innerText=p(s.net_profit)):(document.getElementById("gym-statistics-month-year").innerText="This months data not found",document.getElementById("financial-expenses").innerText="No data found",document.getElementById("financial-revenue").innerText="No data found",document.getElementById("financial-profit").innerText="No data found")}function c(s){let i=document.getElementById("financial-data-container"),o=i.querySelector("#financial-data-item");s.forEach(t=>{let _=o.cloneNode(!0);_.setAttribute("id",""),_.setAttribute("href","/admin/gym/financial-month?gymCode="+e+"&month="+t.month+"&year="+t.year),_.querySelector("#financial-data-month-year ").innerText=u[t.month-1]+" "+t.year,_.querySelector("#financial-data-revenue").innerText=p(Number(t.gross_revenue)+Number(t.additional_revenue)),_.querySelector("#financial-data-expenses").innerText=p(Number(t.additional_expenses)),_.querySelector("#financial-data-profit").innerText=p(t.net_profit),t.net_profit<0?(_.querySelector("#financial-indicator").classList.add("is-loss"),_.querySelector("#financial-data-profit").style.color="#ff634e"):_.querySelector("#financial-indicator").classList.add("is-profitable"),i.prepend(_)}),o.remove()}function l(s){let i=document.getElementById("finance-chart").getContext("2d"),o=[...s.map(t=>u[t.month-1])];new Chart(i,{type:"bar",data:{labels:o,datasets:[{label:"Expenses",data:[...s.map(t=>Number(t.net_profit)<=0?-Math.abs(Number(t.net_profit)):0)],backgroundColor:["#ff0000"]},{label:"Profit",data:[...s.map(t=>t.net_profit<=0?0:Number(t.net_profit))],backgroundColor:["#E0FFC1"]}]},options:{scales:{x:{grid:{display:!1},stacked:!0},y:{grid:{display:!1},stacked:!0}}}})}})();

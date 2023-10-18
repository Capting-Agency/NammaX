var C=Object.defineProperty,b=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var R=(e,r,t)=>r in e?C(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,N=(e,r)=>{for(var t in r||={})M.call(r,t)&&R(e,t,r[t]);if(g)for(var t of g(r))v.call(r,t)&&R(e,t,r[t]);return e},E=(e,r)=>b(e,B(r));var S=(e,r,t)=>new Promise((p,d)=>{var s=o=>{try{_(t.next(o))}catch(n){d(n)}},i=o=>{try{_(t.throw(o))}catch(n){d(n)}},_=o=>o.done?p(o.value):Promise.resolve(o.value).then(s,i);_((t=t.apply(e,r)).next())});var A=["January","February","March","April","May","June","July","August","September","October","November","December"],c={ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN",COACH:"COACH"};function O(e,r="GET",t=!1,p=!1,d=!1,s=!0){try{let i={"Content-Type":"application/json"};d&&(i={}),p&&(i.Authorization=`Bearer ${p}`);let _={method:r,headers:i};return t&&(s?_.body=JSON.stringify(t):_.body=t),fetch(e,_).then(o=>o.ok?o.json():o.json().then(n=>(Promise.reject(n.message),{isFetchOk:!1,status:o.status,message:n.message,payload:n&&n.payload?n.payload:null}))).then(o=>o).catch(o=>(console.error("Error in fetch",o),o))}catch(i){return console.error("Error!: "+i),i}}function I(e="nammax_auth"){let t=`; ${document.cookie}`.split(`; ${e}=`);return t.length===2?t.pop().split(";").shift():null}function x(e="/",r=2e3){setTimeout(()=>{window.location.href=e},r)}function D(e="/admin/sign-in",r="sidebar-logout-btn"){let t=document.getElementById(r);t?t.onclick=()=>X(e):console.error("Logout button not found")}function X(e="/sign-in"){window.localStorage.removeItem("auth"),x(`${e}`)}function m(e=0){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"}).format(Number(e)).replace(/^(\D+)/,"$1 ")}function U(e=c.ADMIN){if(e===c.ADMIN){let r=document.getElementById("admin-nav"),t=document.getElementById("super-admin-nav");r&&(r.style.display="flex"),t&&t.remove()}else if(e===c.SUPER_ADMIN){let r=document.getElementById("admin-nav"),t=document.getElementById("super-admin-nav");t&&(t.style.display="flex"),r&&r.remove()}}function y(){let e=document.getElementById("loading-screen");e?e.remove():console.log("did not find loading screen")}var f="/admin/sign-in";var T="https://xoxo-jnzf-s0on.m2.xano.io/api:Kml2N_BA/super_admin/all_finance";var j="https://nammax.webflow.io",z="https://www.nammacrossfit.com",K=[j,z],L=K[1];var F=`${L}/sign-up-2`;var G=`${L}/user/dashboard`;(()=>{let e;window.onload=function(){return S(this,null,function*(){D("/admin/sign-in","sidebar-logout-btn");let s=I();if(s){let i=yield O(T,"GET",!1,s);if(i.isFetchOk!==void 0&&!i.isFetchOk){console.error(i.message),i.payload&&i.payload.role===c.ADMIN&&i.payload.gyms&&i.payload.gyms.length>0?x(`/admin/gym/g?gymCode=${i.payload.gyms[0].gym_id}`):x(`${f}?reason=UNAUTHORIZED_USER`);return}U(c.SUPER_ADMIN),r(i,s)}else x(`${f}?reason=NOT_SIGNED_IN`)})};function r(s){let{finance:i,external_finance:_}=s,o={};i.map(a=>o[a.month+","+a.year]!==void 0?o[a.month+","+a.year]=E(N({},o[a.month+","+a.year]),{additional_revenue:a.additional_revenue+o[a.month+","+a.year].additional_revenue,additional_expenses:0,gross_revenue:a.gross_revenue+o[a.month+","+a.year].gross_revenue}):o[a.month+","+a.year]=a);let n=o;_.map(a=>n[a.month+","+a.year]!==void 0?n[a.month+","+a.year]=E(N({},n[a.month+","+a.year]),{additional_revenue:a.credit+n[a.month+","+a.year].additional_revenue,additional_expenses:a.debit+n[a.month+","+a.year].additional_expenses}):a);let u=Object.keys(n).sort();p(n),t(n,u),d(n,u),y()}function t(s,i){let _=document.getElementById("financial-data-container"),o=_.querySelector("#financial-data-item");i.forEach(n=>{let[u,a]=n.split(","),l=o.cloneNode(!0);l.setAttribute("id",""),l.setAttribute("href","/admin/all-financial-month?month="+u+"&year="+a),l.querySelector("#financial-data-month ").innerText=A[u-1],l.querySelector("#financial-data-year ").innerText=a,l.querySelector("#financial-data-revenue").innerText=m(Number(s[n].gross_revenue)+Number(s[n].additional_revenue)),l.querySelector("#financial-data-expenses").innerText=m(Number(s[n].additional_expenses||0));let h=Number(s[n].gross_revenue)+Number(s[n].additional_revenue)-Number(s[n].additional_expenses);l.querySelector("#financial-data-profit").innerText=m(h||0),h<0?(l.querySelector("#financial-indicator").classList.add("is-loss"),l.querySelector("#financial-data-profit").style.color="#ff634e"):l.querySelector("#financial-indicator").classList.add("is-profitable"),_.prepend(l)}),o.remove()}function p(s){let i=new Date().getMonth()+1,_=new Date().getFullYear();if(e=s[i+","+_],e===void 0&&(e=null),!e)document.getElementById("gym-financial-month").innerText="This months",document.getElementById("gym-financial-year").innerText="data not found",document.getElementById("financial-expenses").innerText="No data found",document.getElementById("financial-revenue").innerText="No data found",document.getElementById("financial-profit").innerText="No data found";else{document.getElementById("gym-statistics-month-year").innerText=`${A[e.month-1]}  ${e.year}`||"-",document.getElementById("financial-expenses").innerText=m(Number(e.additional_expenses||0)),document.getElementById("financial-revenue").innerText=m(Number(e.gross_revenue)+Number(e.additional_revenue||0));let o=Number(e.gross_revenue)+Number(e.additional_revenue)-Number(e.additional_expenses);document.querySelector("#financial-profit").innerText=m(o||0)}}function d(s,i){let _=document.getElementById("finance-chart").getContext("2d"),o=[...i.map(n=>A[n.split(",")[0]-1])];console.log(s),console.log(i[0]),new Chart(_,{type:"bar",data:{labels:o,datasets:[{label:"Profit",data:[...i.map(n=>Number(s[n].gross_revenue)+Number(s[n].additional_revenue)-Number(s[n].additional_expenses)<=0?0:Number(s[n].gross_revenue)+Number(s[n].additional_revenue)-Number(s[n].additional_expenses))],backgroundColor:["#E0FFC1"]},{label:"Expenses",data:[...i.map(n=>Number(s[n].gross_revenue)+Number(s[n].additional_revenue)-Number(s[n].additional_expenses)<=0?-Number(s[n].additional_expenses):0)],backgroundColor:["#ff0000"]}]},options:{scales:{x:{grid:{display:!1},stacked:!0},y:{grid:{display:!1},stacked:!0}}}})}})();

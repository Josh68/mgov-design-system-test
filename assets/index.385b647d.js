import{j as e,a as m,F as u,A as h,R as l,H as p,b as f,C as g,c as b,d as C,e as d,f as v}from"./vendor.23413495.js";const x=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};x();const q=({children:o})=>e("div",{id:"layout",children:o}),y="mgov-design-system-test",D={base:`/${y}/`},k=window.location.pathname.replace(D.base,"/"),L=({path:o,children:a,title:n="Test page"})=>e(q,{children:k===o?m(u,{children:[" ",e("h1",{children:n}),e("div",{children:a})]}):e(h,{children:"There's nothing here"})}),N=m(u,{children:[e("strong",{children:"An Explanation"}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),w=()=>{const[o,a]=l.useState(!1);return m(u,{children:[e(p,{showDrawer:()=>a(!0),helpDrawerOpen:o,"aria-expanded":o,children:"Open a drawer"}),o&&e(f,{heading:"My Help Drawer",onCloseClick:()=>a(!1),closeButtonText:e(g,{}),children:N})]})},O=()=>{const[o,a]=l.useState(!0),[n,c]=l.useState(!0),[t,i]=l.useState(!0);return e(u,{children:e(b,{children:e(C,{heading:"See some choices",defaultOpen:!1,children:e(d,{name:"choices",label:"My Choices",type:"radio",onChange:r=>{a(r.currentTarget.value==="true")},choices:[{label:"Some label",checked:o,value:"true",checkedChildren:e(d,{name:"nestedChoices",label:"My Nested Choices",type:"checkbox",hint:e(w,{}),onChange:r=>{c(r.currentTarget.value==="true")},choices:[{label:"Checkbox label",checked:n,value:"true"},{label:"Another checkbox label",checked:!n,value:"false"}]})},{label:"Some other label",checked:!o,value:"false",checkedChildren:e(d,{name:"nestedChoices2",label:"My Other Nested Choices",type:"checkbox",onChange:r=>{i(r.currentTarget.value==="true")},choices:[{label:"Checkbox label",checked:t,value:"true"},{label:"Another checkbox label",checked:!t,value:"false"}]})}]})})})})};v.render(e(l.StrictMode,{children:e(L,{path:"/",title:"Nested ChoiceLists and Help Drawer",children:e(O,{})})}),document.getElementById("root"));

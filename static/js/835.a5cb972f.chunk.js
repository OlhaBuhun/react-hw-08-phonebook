"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[835],{6835:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(4420),u=t(3634),o=t(184),a=function(e){var n=e.contact,t=(0,r.I0)();return(0,o.jsxs)("li",{children:[(0,o.jsxs)("p",{children:[n.name,": ",n.number]}),(0,o.jsx)("button",{type:"button",onClick:function(){t((0,u.GK)(n.id))},children:"Delete"})]})},c=t(3553),i=function(e){return e.contacts.items},s=function(e){return e.contacts.loading},l=function(e){return e.filters},m=(0,c.P1)([i,l],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),f=function(){var e=(0,r.v9)(m);return(0,o.jsx)("ul",{children:e.map((function(e){return(0,o.jsx)(a,{contact:e},e.id)}))})},d=t(2791),h=function(){var e=(0,r.v9)(i),n=(0,r.I0)();return(0,o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r=t.target,o=r.elements.name.value,a=r.elements.number.value;return e.some((function(e){return e.name===o}))?(console.log("not name"),r.reset()):e.some((function(e){return e.number===a}))?(console.log("not phone"),r.reset()):(n((0,u.uK)({name:o,number:a})),void r.reset())},children:[(0,o.jsxs)("label",{htmlFor:"name",children:["Name",(0,o.jsx)("input",{type:"text",name:"name",value:e.name,required:!0})]}),(0,o.jsxs)("label",{htmlFor:"name",children:["Number",(0,o.jsx)("input",{type:"tel",name:"number",value:e.number,required:!0})]}),(0,o.jsx)("button",{type:"submit",children:"Add contact"})]})},v=t(3165),x=function(){var e=(0,r.v9)(l),n=(0,r.I0)();return(0,o.jsxs)("label",{children:["Find contacts by name",(0,o.jsx)("input",{type:"text",name:"filter",placeholder:"Enter contact name",value:e,onChange:function(e){var t=e.target.value.toLowerCase().trim();n((0,v.T)(t))}})]})};function p(){var e=(0,r.I0)(),n=(0,r.v9)(s);return(0,d.useEffect)((function(){e((0,u.yF)())}),[e]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:n&&"Request in progress..."}),(0,o.jsx)(h,{}),(0,o.jsx)(x,{}),(0,o.jsx)(f,{})]})}}}]);
//# sourceMappingURL=835.a5cb972f.chunk.js.map
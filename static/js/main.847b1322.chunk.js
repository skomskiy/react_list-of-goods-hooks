(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(7),o=n.n(c),s=n(6),r=n(8),i=n(1),a=(n(13),n(14),n(4)),l=n.n(a),u=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function h(t,e,n){var c=Object(r.a)(t);switch(e){case"alphabet":c.sort((function(t,e){return t.localeCompare(e)}));break;case"lenght":c.sort((function(t,e){return t.length-e.length}))}return n?c.reverse():c}var j=function(){var t=Object(i.useState)("none"),e=Object(s.a)(t,2),n=e[0],c=e[1],o=Object(i.useState)(!1),r=Object(s.a)(o,2),a=r[0],j=r[1];return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{onClick:function(){return c("alphabet")},className:l()("button is-info",{"is-light":"alphabet"!==n}),type:"button",children:"Sort alphabetically"}),Object(u.jsx)("button",{onClick:function(){return c("lenght")},className:l()("button is-info",{"is-light":"lenght"!==n}),type:"button",children:"Sort by length"}),Object(u.jsx)("button",{onClick:function(){return j(!a)},className:l()("button is-warning",{"is-light":!a}),type:"button",children:"Reverse"}),"none"!==n||a?Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return c("none"),j(!1)},children:"Reset"}):""]}),Object(u.jsx)("ul",{children:h(b,n,a).map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.847b1322.chunk.js.map
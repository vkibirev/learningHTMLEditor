!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){const r=n(1);function o(t,e){return document.querySelector(t).addEventListener("click",e)}function u(){let t=document.querySelector(".active");return t||!1}function a(){let t=document.querySelector(".board"),e=document.querySelector(".schema"),n=function(){let t=0,e="";return function n(r){let o=r.children;for(let r=0;r<o.length;++r){"\t".repeat(t),o[r].tagName;let u=`${"\t".repeat(t)}</${o[r].tagName}>`;e+=`\n ${u}`,o[r].textContent&&0===o[r].children.length&&(e+="\n"+"\t".repeat(t+1)+o[r].textContent),0!==o[r].children.length&&(++t,n(o[r])),e+=`\n ${u}`}return e}}();return e.textContent=t?n(t):""}document.body.insertBefore(r.tag("main","",[r.tag("div","",[r.tag("div","",[r.tag("div","")],{class:"block-left schema"}),r.tag("div","",[r.tag("div","",[r.tag("div","",[r.tag("ul","",[r.tag("li","hello"),r.tag("li","world")])])],{class:"board"})],{class:"block-right"})],{class:"row"}),r.tag("div","",[r.tag("div","",[r.tag("input","",[],{id:"input"}),r.tag("button","Set text",[],{class:"setter"}),r.tag("button","Create tag",[],{class:"createTag"}),r.tag("button","Remove",[],{class:"remove"})],{class:"block-left"}),r.tag("div","",[r.tag("div","Current tag: ",[],{id:"currentTag"})],{class:"block-right"})],{class:"row"})]),document.querySelector("script")),o(".board",function(t){let e;return function(t){let n=t.target;n!==e&&u()&&u().classList.remove("active"),t.target.classList.toggle("active"),function(t){let e=u().tagName.toLowerCase(),n=document.querySelector("#currentTag");if(u())return n.textContent=`Current tag: ${e}`}(t.target),e=t.target}}()),o(".setter",function(){if(u()&&""===input.value)return u().textContent="default",void a();return u().textContent=input.value,void a()}),o(".createTag",function(){if(u()&&!["h1","h2","h3","h4","div","p","ul","ol","li"].includes(input.value))return void alert(`${input.value} value aren't allowed you can use only these tags: h1, h2, h3, h4, div, p, ul, ol, li`);return u().appendChild(r.tag(input.value,"")),void a()}),o(".remove",function(){u()&&u().remove();return void a()}),a()},function(t,e){t.exports.tag=function(t,e,n=[],r={}){let o=document.createElement(t);e&&(o.textContent=e);for(let t=0;t<n.length;++t)o.appendChild(n[t]);for(let t in r)o.setAttribute(t,r[t]);return o}}]);
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e="https://mate-academy.github.io/phone-catalogue-static/api/phones";function n(){return fetch(e+".json").then(function(e){return e.json()}).then(function(e){return e.map(function(e){return e.id})})}function t(n){var t=n.map(function(n){return fetch(e+"/".concat(n,".json")).then(function(e){return e.json()}).catch(function(e){return alert("Error:",e)})});return Promise.race(t).then(function(e){var n=document.createElement("div"),t=document.createElement("ul");t.id="first-received-list";var r=document.createElement("H3");r.innerText="First Received",n.className="first-received",document.body.append(n),n.append(r),n.append(t);var c=document.createElement("li");c.innerText=e.name,t.append(c)})}function r(n){var t=n.map(function(n){return fetch(e+"/".concat(n,".json")).then(function(e){return e.json()})});return Promise.all(t).then(function(e){var n=document.createElement("div"),t=document.createElement("ul"),r=document.createElement("H3");r.innerText="All Successful",n.className="all-successful",document.body.append(n),n.append(r),n.append(t),e.forEach(function(e){var n=document.createElement("li");n.innerText="Name:"+e.name+"\nID:"+e.id.toUpperCase()+"\n___",t.append(n)})})}function c(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=document.createElement("div"),c=document.createElement("H3"),a=document.createElement("ul");r.style.display="block",c.innerText="Race of Promises",document.body.prepend(r),r.append(c),r.append(a),o(e,n,t,a)}function o(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,c=arguments.length>3?arguments[3]:void 0;if(0!==t){var a=n.map(function(n){return fetch(e+"/".concat(n,".json")).then(function(e){return e.json()})});Promise.race(a).then(function(e){var a=document.createElement("li");a.innerText="Number ".concat(r," to resolve: ")+e.name,c.append(a),o(n.filter(function(n){return n!==e.id}),t-1,r+1,c)})}}n().then(function(e){return t(e)}),n().then(function(e){return r(e)}),n().then(function(e){return c(e)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.dd2d7640.js.map
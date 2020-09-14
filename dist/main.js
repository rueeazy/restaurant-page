!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=(()=>{window.contentContainer=document.querySelector("#content");return{loadPage:()=>{window.main=document.createElement("div"),main.classList.add("main"),contentContainer.appendChild(main),(()=>{window.nav=document.createElement("nav"),nav.classList.add("navbar"),nav.id="navbar",main.appendChild(nav),window.logo=document.createElement("div"),logo.id="akira",logo.innerText="Akira",nav.appendChild(logo),window.sushi=document.createElement("h1"),sushi.id="sushi",sushi.innerText="Sushi",logo.appendChild(sushi),window.ul=document.createElement("ul"),ul.classList.add("links"),ul.id="links",nav.appendChild(ul);for(let e=0;e<5;e++){let t=document.createElement("li");t.id="li-"+e,t.setAttribute("data-list",""+e),ul.appendChild(t)}document.querySelector("#li-0").innerText="Home",document.querySelector("#li-1").innerText="About",document.querySelector("#li-2").innerText="Menu",document.querySelector("#li-3").innerText="Hours",document.querySelector("#li-4").innerText="Contact Us"})(),(()=>{let e=document.createElement("div");e.classList.add("center-container"),e.id="center-container",main.appendChild(e);let t=document.createElement("div");t.classList.add("header"),t.id="header",t.innerText="Akira Sushi",e.appendChild(t);let n=document.createElement("div");n.classList.add("lower-text"),n.id="lower-text",n.innerText="Beer. Wine. Sake.",e.appendChild(n)})()},loadMain:()=>{const e=document.querySelector("#center-container");let t=document.createElement("div");t.classList.add("header"),t.id="header",t.innerText="Akira Sushi",e.appendChild(t);let n=document.createElement("div");n.classList.add("lower-text"),n.id="lower-text",n.innerText="Beer. Wine. Sake.",e.appendChild(n)}}})(),o=(()=>{const e=e=>{let t=document.createElement("h1");t.classList.add("tab-header"),t.id="tab-header",t.textContent="About Us",e.appendChild(t);let n=document.createElement("p");n.classList.add("about-text-content"),n.id="about-text-content",n.textContent=" Akira Santa Cruz opened in February 2012 right in the thick of midtown. Akira prides itself on the quality of its fresh fish! Having an amazing customer base allows us to bring you quality product every day. Come in and let our chefs make you a custom omakase or chirashi donburi for a more tradition taste, or choose from over a hundred roll combinations with bold and magnificent flavorings. Chefs in the kitchen prepare our salmon teriyaki, skirt steak and hamachi kama, all very popular grill items. Come in for lunch and enjoy sushi lunch specials and bento boxes. Best deal around! Not to mention our 2 happy hours we have daily! We also specialize in Japanese saké and beer from all over the region. Come in and cheers us at Akira Santa Cruz! Kanpai!",e.appendChild(n)};return{aboutContainer:()=>{const t=document.querySelector("#center-container");let n=document.createElement("div");n.classList.add("about-container"),t.appendChild(n),e(n)}}})(),r=(()=>{const e=e=>{let t=document.createElement("h1");t.classList.add("tab-header"),t.id="tab-header",t.textContent="Menu",e.appendChild(t);let n=document.createElement("p");n.classList.add("menu-text-content"),n.id="menu-text-content",n.textContent="Located in Seabright, Akira Santa Cruz prides itself on its fresh fish combined with bold flavorings. A casual sushi experience mixed with hip vibes and wonderful local art. Please join us at the original Akira Sushi!",e.appendChild(n)};return{menuContainer:()=>{const t=document.querySelector("#center-container");let n=document.createElement("div");n.classList.add("menu-container"),t.appendChild(n),e(n)}}})(),i=(()=>{const e=e=>{let t=document.createElement("h1");t.classList.add("tab-header"),t.id="tab-header",t.textContent="Hours",e.appendChild(t);let n=document.createElement("p");n.classList.add("hours-text-content"),n.id="hours-text-content",n.textContent="Open Daily 11:30am–8pm",e.appendChild(n)};return{hoursContainer:()=>{const t=document.querySelector("#center-container");let n=document.createElement("div");n.classList.add("hours-container"),t.appendChild(n),e(n)}}})(),d=(()=>{const e=e=>{let t=document.createElement("h1");t.classList.add("tab-header"),t.id="tab-header",t.textContent="Contact Us",e.appendChild(t);let n=document.createElement("p");n.classList.add("contact-text-content"),n.id="contact-text-content",n.textContent="(831) 600-7093",e.appendChild(n)};return{contactContainer:()=>{const t=document.querySelector("#center-container");let n=document.createElement("div");n.classList.add("contact-container"),t.appendChild(n),e(n)}}})();a.loadPage();document.querySelector('[data-list = "0"]').style.color="#FF0000";const l=e=>{if(document.querySelector("#center-container").querySelectorAll("*").forEach(e=>e.remove()),document.querySelectorAll("[data-list]").forEach(e=>{e.style.color="#FFFFFF"}),"li-0"==e.target.id){document.querySelector('[data-list = "0"]').style.color="#FF0000",a.loadMain()}else if("li-1"==e.target.id){document.querySelector('[data-list = "1"]').style.color="#FF0000",o.aboutContainer()}else if("li-2"==e.target.id){document.querySelector('[data-list = "2"]').style.color="#FF0000",r.menuContainer()}else if("li-3"==e.target.id){document.querySelector('[data-list = "3"]').style.color="#FF0000",i.hoursContainer()}else if("li-4"==e.target.id){document.querySelector('[data-list = "4"]').style.color="#FF0000",d.contactContainer()}};document.querySelectorAll("[data-list").forEach(e=>{e.addEventListener("click",l)})}]);
!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();function e(e){var t=document.createElement("button");t.innerHTML=e,t.style.width="150px",t.style.height="40px",document.getElementsByTagName("header")[0].appendChild(t)}!function(){let t=document.createElement("header");t.style.height="100px",document.getElementsByTagName("div")[0].appendChild(t),e("About Me"),e("Projects")}(),function(){let e=document.createElement("p");e.innerText="You’ve found my personal corner of the internet - everything you want to know about me is here.",document.getElementsByTagName("div")[0].appendChild(e)}(),function(){let e=document.createElement("footer");e.style.height="100px",document.getElementsByTagName("div")[0].appendChild(e)}();
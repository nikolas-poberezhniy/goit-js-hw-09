!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),o=document.querySelector("body"),n=null;function d(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}t.disabled=!0,e.addEventListener("click",(function(){o.style.backgroundColor=d(),e.disabled=!0,t.disabled=!1,n=setInterval((function(){o.style.backgroundColor=d()}),1e3)})),t.addEventListener("click",(function(){e.disabled=!0,t.disabled=!0,clearInterval(n),e.removeAttribute("disabled"),console.log(2)}))}();
//# sourceMappingURL=01-color-switcher.97e42654.js.map
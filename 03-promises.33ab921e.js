var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("iQIUW");function i(e,t){const n=Math.random()>.3;return console.log(n),new Promise(((r,o)=>{setTimeout((()=>{n?r({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(e=>{e.preventDefault();!function(e,t,n){for(let r=1;r<=n;r++){i(r,e).then((({position:e,delay:t})=>{o.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{o.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),e+=t}}(parseInt(e.currentTarget.elements.delay.value),parseInt(e.currentTarget.elements.step.value),parseInt(e.currentTarget.elements.amount.value)),e.currentTarget.reset}));
//# sourceMappingURL=03-promises.33ab921e.js.map

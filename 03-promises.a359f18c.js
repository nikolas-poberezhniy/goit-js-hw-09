var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("iQIUW");document.querySelector(".form").addEventListener("submit",(e=>{e.preventDefault();!function(e,t,n){setTimeout((()=>{!function(e,t){let n=1,r=e;const i=setInterval((()=>{n===t&&clearInterval(i),function(e,t){const n=Math.random()>.3;return new Promise(((r,o)=>{n?r({position:e,delay:t}):o({position:e,delay:t})}))}(n,r).then((({position:e,delay:t})=>{o.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{o.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),n+=1,r+=e}),e)}(t,n)}),e)}(parseInt(e.currentTarget.elements.delay.value),parseInt(e.currentTarget.elements.step.value),parseInt(e.currentTarget.elements.amount.value))}));
//# sourceMappingURL=03-promises.a359f18c.js.map

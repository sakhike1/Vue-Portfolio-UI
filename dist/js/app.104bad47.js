(function(e){function t(t){for(var a,s,n=t[0],c=t[1],i=t[2],u=0,b=[];u<n.length;u++)s=n[u],Object.prototype.hasOwnProperty.call(l,s)&&l[s]&&b.push(l[s][0]),l[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,s=1;s<r.length;s++){var c=r[s];0!==l[c]&&(a=!1)}a&&(o.splice(t--,1),e=n(n.s=r[0]))}return e}var a={},l={app:0},o=[];function s(e){return n.p+"js/"+({about:"about"}[e]||e)+"."+{about:"29d04887"}[e]+".js"}function n(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.e=function(e){var t=[],r=l[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=l[e]=[t,a]}));t.push(r[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=s(e);var i=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(u);var r=l[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,r[1](i)}l[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},n.m=e,n.c=a,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("7a23"),l={class:"bg-black"},o=Object(a["e"])("footer",{msg:"Welcome to Your Vue.js App"},null,-1);function s(e,t,r,s,n,c){var i=Object(a["v"])("Navbar"),u=Object(a["v"])("Hero"),d=Object(a["v"])("router-view");return Object(a["r"])(),Object(a["d"])(a["a"],null,[Object(a["e"])("div",l,[Object(a["h"])(i,{msg:"Welcome to Your Vue.js App"}),Object(a["h"])(u,{msg:"Welcome to Your Vue.js App"}),o]),Object(a["h"])(d)],64)}var n={class:"bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400"},c={class:"container px-6 py-12 mx-auto md:flex md:justify-between md:items-center"},i={class:"flex items-center justify-between"},u=Object(a["g"])("Sakhile "),d=Object(a["e"])("button",{type:"button",class:"text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"},[Object(a["e"])("svg",{viewBox:"0 0 24 24",class:"w-6 h-6 fill-current"},[Object(a["e"])("path",{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})])],-1),b=[d],f=Object(a["e"])("li",{class:"text-gray-100 hover:text-indigo-400"},"Home",-1),g=Object(a["e"])("li",{class:"text-gray-100 hover:text-indigo-400"},"About",-1),x=Object(a["e"])("li",{class:"text-gray-100 hover:text-indigo-400"},"Projects",-1),m=Object(a["e"])("li",{class:"text-gray-100 hover:text-indigo-400"},"Contact Us",-1),h=[f,g,x,m];function v(e,t,r,l,o,s){var d=Object(a["v"])("router-link");return Object(a["r"])(),Object(a["d"])("div",n,[Object(a["e"])("nav",c,[Object(a["e"])("div",i,[Object(a["h"])(d,{to:"/",class:"text-xl font-bold text-gray-100 md:text-2xl hover:text-indigo-400"},{default:Object(a["z"])((function(){return[u]})),_:1}),Object(a["e"])("div",{onClick:t[0]||(t[0]=function(){return l.toggleNav&&l.toggleNav.apply(l,arguments)}),class:"flex md:hidden"},b)]),Object(a["e"])("ul",{class:Object(a["n"])([l.showMenu?"flex":"hidden","flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"])},h,2)])])}var p={setup:function(){var e=Object(a["u"])(!1),t=function(){return e.value=!e.value};return{showMenu:e,toggleNav:t}}},y=r("6b0d"),w=r.n(y);const j=w()(p,[["render",v]]);var O=j,k={class:"pb-6 bg-black mt-40 sm:pb-8 lg:pb-12"},P=Object(a["f"])('<div class="max-w-screen-2xl px-4 md:px-8 mx-auto"><section class="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16"><div class="xl:w-5/12 flex flex-col justify-between"><div class="sm:text-center lg:text-left lg:py-12 xl:py-24"><h1 class="text-white text-lg sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">Frontend developer with two years <br> experience </h1><div class="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5"><a href="#" class="inline-flex items-center justify-center h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">Download CV</a><a href="#" class="inline-flex items-center justify-center h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">Availability</a></div></div></div><div class="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg"><img src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&amp;q=75&amp;fit=crop&amp;w=1000" loading="lazy" alt="Photo by Fakurian Design" class="w-full h-full object-cover object-center"></div></section></div>',1),A=[P];function H(e,t,r,l,o,s){return Object(a["r"])(),Object(a["d"])("div",k,A)}var z={};const S=w()(z,[["render",H]]);var C=S,T={class:"py-20 2xl:py-40 bg-gray-800"},M=Object(a["f"])('<div class="container px-4 mx-auto"><div class="flex flex-wrap -mx-4 pb-24 mb-16 border-b border-gray-400"><div class="w-full lg:w-2/5 px-4 mb-16 lg:mb-0"><span class="text-lg text-blue-400 font-bold">We&#39;re Zospace</span><h2 class="max-w-sm mt-8 mb-12 text-5xl text-white font-bold font-heading">Thank you for your time</h2><p class="mb-16 text-gray-300">The brown fox jumps over the lazy dog.</p><div><a class="inline-block mb-4 sm:mb-0 sm:mr-4 py-4 px-12 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200" href="#">Active demo</a><a class="inline-block px-12 py-4 text-white font-bold border border-gray-200 hover:border-white rounded-full" href="#">Contact</a></div></div><div class="w-full lg:w-3/5 px-4"><div class="flex flex-wrap -mx-4"><div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-16 lg:mb-0"><ul class="text-lg"><li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Hello</a></li><li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Story</a></li><li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Pricing</a></li><li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Applications</a></li><li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Stats</a></li><li><a class="text-gray-200 hover:text-gray-100" href="#">Blog</a></li></ul></div><div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-16 lg:mb-0"><ul class="text-lg"><li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Newsletter</a></li><li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Features</a></li><li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">How it works</a></li><li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">FAQ</a></li><li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Portfolio</a></li><li><a class="text-gray-200 hover:text-gray-100" href="#">Team</a></li></ul></div><div class="w-full lg:w-1/3 px-4"><ul class="text-lg"><li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">New account</a></li><li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Log in</a></li><li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Testimonials</a></li><li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Contact</a></li><li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Privacy Policy</a></li><li><a class="text-gray-200 hover:text-gray-100" href="#">Cookies</a></li></ul></div></div></div></div><div class="md:flex justify-between"><p class="text-lg text-gray-200 mb-8 md:mb-0">© 2021 Shuffle. All rights reserved.</p><div class="flex items-center"><a class="inline-block mr-2" href="#"><img class="h-12" src="zospace-assets/logos/facebook.svg" alt=""></a><a class="inline-block mr-2" href="#"><img class="h-12" src="zospace-assets/logos/instagram.svg" alt=""></a><a class="inline-block" href="#"><img class="h-12" src="zospace-assets/logos/twitter.svg" alt=""></a></div></div></div>',1),N=[M];function _(e,t,r,l,o,s){return Object(a["r"])(),Object(a["d"])("section",T,N)}var F={};const V=w()(F,[["render",_]]);var W=V,E={name:"Home",components:{Navbar:O,Hero:C,footer:W}};r("bd80");const L=w()(E,[["render",s]]);var Y=L,q=(r("d3b7"),r("3ca3"),r("ddb0"),r("6c02"));const B={},D=B;var J=D,Q=[{path:"/",name:"Home",component:J},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],U=Object(q["a"])({history:Object(q["b"])(),routes:Q}),Z=U;r("ba8c");Object(a["c"])(Y).use(Z).mount("#app")},ba8c:function(e,t,r){},bd80:function(e,t,r){"use strict";r("daba")},daba:function(e,t,r){}});
//# sourceMappingURL=app.104bad47.js.map
!function(){var e={373:function(){var e=document.querySelector(".page__body"),t=document.createElement("footer");t.className="footer";var n=document.createElement("p"),a=n.cloneNode(!0);a.innerHTML="aleksem07";var i=n.cloneNode(!0);i.innerHTML="RS School 2023";var d=document.createElement("a"),s=d.cloneNode(!0);s.href="https://github.com/aleksem07";var l=d.cloneNode(!0);l.href="https://rs.school/",e.appendChild(t),t.appendChild(s),s.appendChild(a),t.appendChild(l),l.appendChild(i)},984:function(){var e=document.querySelector(".page__body"),t=document.createElement("header");t.className="header";var n=document.createElement("h1");n.className="header__title",n.textContent="Virtual keyboard";var a=document.createElement("p");a.className="header__desc",a.innerText="Клавиатура создана в ОС Линукс\n  \n Переключение раскладки сочетанием ShiftLeft + ControlLeft",e.appendChild(t),t.appendChild(n),t.appendChild(a)},243:function(){function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var t=document.querySelector(".keyboard").children;document.addEventListener("keydown",(function(n){if("ShiftLeft"===n.code){var a,i=function(t,n){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=function(t,n){if(t){if("string"==typeof t)return e(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){a&&(t=a);var i=0,d=function(){};return{s:d,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(e){throw e},f:d}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,o=!1;return{s:function(){a=a.call(t)},n:function(){var e=a.next();return l=e.done,e},e:function(e){o=!0,s=e},f:function(){try{l||null==a.return||a.return()}finally{if(o)throw s}}}}(t);try{for(i.s();!(a=i.n()).done;)a.value.textContent.toUpperCase()}catch(e){i.e(e)}finally{i.f()}}}))},562:function(){var e=document.querySelector(".keyb"),t=document.querySelector(".keyboard");e.addEventListener("click",(function(){"hide keyb Off"==e.textContent?(e.textContent="hide keyb On",e.classList.add("active"),t.style.height="0",t.style.padding="0",t.style.top="-61px"):"hide keyb On"==e.textContent&&(e.textContent="hide keyb Off",e.classList.remove("active"),t.style.height="200px",t.style.top="0px",t.style.padding="10px")}))},91:function(e){"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},588:function(e,t,n){"use strict";e.exports=n.p+"assets/favicon.png"},213:function(e,t,n){"use strict";e.exports=n.p+"assets/favicon.svg"}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var d=t[a]={exports:{}};return e[a](d,d.exports,n),d.exports}n.m=e,n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e}(),n.b=document.baseURI||self.location.href,function(){"use strict";var e=n(91),t=n.n(e),a=new URL(n(213),n.b),i=new URL(n(588),n.b),d=(t()(a),t()(i),n(984),[{id:"Backquote",key:"`",add:"~",size:"small"},{id:"Digit1",key:"1",add:"!",size:"small"},{id:"Digit2",key:"2",add:"@",size:"small"},{id:"Digit3",key:"3",add:"#",size:"small"},{id:"Digit4",key:"4",add:"$",size:"small"},{id:"Digit5",key:"5",add:"%",size:"small"},{id:"Digit6",key:"6",add:"^",size:"small"},{id:"Digit7",key:"7",add:"&",size:"small"},{id:"Digit8",key:"8",add:"*",size:"small"},{id:"Digit9",key:"9",add:"(",size:"small"},{id:"Digit0",key:"0",add:")",size:"small"},{id:"Minus",key:"-",add:"_",size:"small"},{id:"Equal",key:"=",add:"+",size:"small"},{id:"Backspace",key:"Backspace",add:"",size:"big"},{id:"Tab",key:"Tab",add:"",size:"small"},{id:"KeyQ",key:"q",add:"",size:"small"},{id:"KeyW",key:"w",add:"",size:"small"},{id:"KeyE",key:"e",add:"",size:"small"},{id:"KeyR",key:"r",add:"",size:"small"},{id:"KeyT",key:"t",add:"",size:"small"},{id:"KeyY",key:"y",add:"",size:"small"},{id:"KeyU",key:"u",add:"",size:"small"},{id:"KeyI",key:"i",add:"",size:"small"},{id:"KeyO",key:"o",add:"",size:"small"},{id:"KeyP",key:"p",add:"",size:"small"},{id:"BracketLeft",key:"[",add:"{",size:"small"},{id:"BracketRight",key:"]",add:"}",size:"small"},{id:"Backslash",key:"\\",add:"/",size:"small"},{id:"Delete",key:"del",add:"",size:"small"},{id:"CapsLock",key:"Caps",add:"",size:"big"},{id:"KeyA",key:"a",add:"",size:"small"},{id:"KeyS",key:"s",add:"",size:"small"},{id:"KeyD",key:"d",add:"",size:"small"},{id:"KeyF",key:"f",add:"",size:"small"},{id:"KeyG",key:"g",add:"",size:"small"},{id:"KeyH",key:"h",add:"",size:"small"},{id:"KeyJ",key:"j",add:"",size:"small"},{id:"KeyK",key:"k",add:"",size:"small"},{id:"KeyL",key:"l",add:"",size:"small"},{id:"Semicolon",key:";",add:"",size:"small"},{id:"Quote",key:"'",add:"",size:"small"},{id:"Enter",key:"Enter",add:"",size:"big"},{id:"ShiftLeft",key:"Shift",add:"",size:"big"},{id:"KeyZ",key:"z",add:"",size:"small"},{id:"KeyX",key:"x",add:"",size:"small"},{id:"KeyC",key:"c",add:"",size:"small"},{id:"KeyV",key:"v",add:"",size:"small"},{id:"KeyB",key:"b",add:"",size:"small"},{id:"KeyN",key:"n",add:"",size:"small"},{id:"KeyM",key:"m",add:"",size:"small"},{id:"Comma",key:",",add:"",size:"small"},{id:"Period",key:".",add:"",size:"small"},{id:"Slash",key:"/",add:"",size:"small"},{id:"ArrowUp",key:"▲",add:"",size:"small"},{id:"ShiftRight",key:"Shift",add:"",size:"big"},{id:"ControlLeft",key:"Ctrl",add:"",size:"small"},{id:"MetaLeft",key:"Win",add:"",size:"small"},{id:"AltLeft",key:"Alt",add:"",size:"small"},{id:"Space",key:"Space",add:"",size:"super-big"},{id:"AltRight",key:"Alt",add:"",size:"small"},{id:"ArrowLeft",key:"◄",add:"",size:"small"},{id:"ArrowDown",key:"▼",add:"",size:"small"},{id:"ArrowRight",key:"►",add:"",size:"small"},{id:"ControlRight",key:"Ctrl",add:"",size:"small"}]),s=[{id:"Backquote",key:"ё",add:"",size:"small"},{id:"Digit1",key:"1",add:"!",size:"small"},{id:"Digit2",key:"2",add:'"',size:"small"},{id:"Digit3",key:"3",add:"№",size:"small"},{id:"Digit4",key:"4",add:";",size:"small"},{id:"Digit5",key:"5",add:"%",size:"small"},{id:"Digit6",key:"6",add:":",size:"small"},{id:"Digit7",key:"7",add:"?",size:"small"},{id:"Digit8",key:"8",add:"*",size:"small"},{id:"Digit9",key:"9",add:"(",size:"small"},{id:"Digit0",key:"0",add:")",size:"small"},{id:"Minus",key:"-",add:"_",size:"small"},{id:"Equal",key:"=",add:"+",size:"small"},{id:"Backspace",key:"Backspace",add:"",size:"big"},{id:"Tab",key:"Tab",add:"",size:"small"},{id:"KeyQ",key:"й",add:"",size:"small"},{id:"KeyW",key:"ц",add:"",size:"small"},{id:"KeyE",key:"у",add:"",size:"small"},{id:"KeyR",key:"к",add:"",size:"small"},{id:"KeyT",key:"е",add:"",size:"small"},{id:"KeyY",key:"н",add:"",size:"small"},{id:"KeyU",key:"г",add:"",size:"small"},{id:"KeyI",key:"ш",add:"",size:"small"},{id:"KeyO",key:"щ",add:"",size:"small"},{id:"KeyP",key:"з",add:"",size:"small"},{id:"BracketLeft",key:"х",add:"",size:"small"},{id:"BracketRight",key:"ъ",add:"",size:"small"},{id:"Backslash",key:"\\",add:"/",size:"small"},{id:"Delete",key:"del",add:"",size:"small"},{id:"CapsLock",key:"Caps",add:"",size:"big"},{id:"KeyA",key:"ф",add:"",size:"small"},{id:"KeyS",key:"ы",add:"",size:"small"},{id:"KeyD",key:"в",add:"",size:"small"},{id:"KeyF",key:"а",add:"",size:"small"},{id:"KeyG",key:"п",add:"",size:"small"},{id:"KeyH",key:"р",add:"",size:"small"},{id:"KeyJ",key:"о",add:"",size:"small"},{id:"KeyK",key:"л",add:"",size:"small"},{id:"KeyL",key:"д",add:"",size:"small"},{id:"Semicolon",key:"ж",add:"",size:"small"},{id:"Quote",key:"э",add:"",size:"small"},{id:"Enter",key:"Enter",add:"",size:"big"},{id:"ShiftLeft",key:"Shift",add:"",size:"big"},{id:"KeyZ",key:"я",add:"",size:"small"},{id:"KeyX",key:"ч",add:"",size:"small"},{id:"KeyC",key:"с",add:"",size:"small"},{id:"KeyV",key:"м",add:"",size:"small"},{id:"KeyB",key:"и",add:"",size:"small"},{id:"KeyN",key:"т",add:"",size:"small"},{id:"KeyM",key:"ь",add:"",size:"small"},{id:"Comma",key:"б",add:"",size:"small"},{id:"Period",key:"ю",add:"",size:"small"},{id:"Slash",key:".",add:"",size:"small"},{id:"ArrowUp",key:"▲",add:"",size:"small"},{id:"ShiftRight",key:"Shift",add:"",size:"big"},{id:"ControlLeft",key:"Ctrl",add:"",size:"small"},{id:"MetaLeft",key:"Win",add:"",size:"small"},{id:"AltLeft",key:"Alt",add:"",size:"small"},{id:"Space",key:"Space",add:"",size:"super-big"},{id:"AltRight",key:"Alt",add:"",size:"small"},{id:"ArrowLeft",key:"◄",add:"",size:"small"},{id:"ArrowDown",key:"▼",add:"",size:"small"},{id:"ArrowRight",key:"►",add:"",size:"small"},{id:"ControlRight",key:"Ctrl",add:"",size:"small"}];function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var o=function(){var e,t=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d,s=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,d=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw d}}}}(document.querySelector(".keyboard").children);try{for(t.s();!(e=t.n()).done;){var n=e.value;"Backspace"===n.dataset.code&&(n.className="button big material-icons",n.firstChild.textContent="backspace"),"Space"===n.dataset.code&&(n.className="button super-big material-icons",n.firstChild.textContent="space_bar"),"Enter"===n.dataset.code&&(n.className="button big material-icons",n.firstChild.textContent="subdirectory_arrow_left"),"ArrowUp"===n.dataset.code&&(n.className="button small material-icons",n.firstChild.textContent="arrow_upward"),"ArrowDown"===n.dataset.code&&(n.className="button small material-icons",n.firstChild.textContent="arrow_downward"),"ArrowLeft"===n.dataset.code&&(n.className="button small material-icons",n.firstChild.textContent="arrow_back"),"ArrowRight"===n.dataset.code&&(n.className="button small material-icons",n.firstChild.textContent="arrow_forward")}}catch(e){t.e(e)}finally{t.f()}};function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var c=JSON.parse(localStorage.getItem("lang")),u={tags:{div:document.createElement("div"),button:document.createElement("button"),ul:document.createElement("ul"),li:document.createElement("li"),span:document.createElement("span"),textarea:document.createElement("textarea")},elements:{body:document.querySelector(".page__body"),main:null,screen:null,cursor:null,ledPanel:null,currentLanguageLed:null,cleanKey:null,soundKey:null,voiceKey:null,keyboardHideKey:null,keyboard:null,buttonItem:null,buttonName:null,buttonAdd:null},init:function(){this.elements.main=document.createElement("main"),this.elements.screen=this.tags.div.cloneNode(!0),this.elements.cursor=this.tags.textarea.cloneNode(!0),this.elements.ledPanel=this.tags.div.cloneNode(!0),this.elements.currentLanguageLed=this.tags.button.cloneNode(!0),this.elements.cleanKey=this.tags.button.cloneNode(!0),this.elements.soundKey=this.tags.button.cloneNode(!0),this.elements.voiceKey=this.tags.button.cloneNode(!0),this.elements.keyboardHideKey=this.tags.button.cloneNode(!0),this.elements.keyboard=this.tags.ul.cloneNode(!0),this.elements.main.classList.add("main"),this.elements.screen.classList.add("screen"),this.elements.cursor.classList.add("screen__cursor"),this.elements.ledPanel.classList.add("screen__add-led"),this.elements.currentLanguageLed.className="screen__lang-led add-led",this.elements.cleanKey.className="clean add-led",this.elements.soundKey.className="add-led sound off",this.elements.voiceKey.className="add-led voice off",this.elements.keyboardHideKey.className="add-led keyb off",this.elements.keyboard.classList.add("keyboard"),this.elements.currentLanguageLed.textContent="En",this.elements.cleanKey.textContent="cleaner(ESC)",this.elements.soundKey.textContent="sound Off",this.elements.voiceKey.textContent="voice Off",this.elements.keyboardHideKey.textContent="hide keyb Off",this.elements.soundKey.disabled="true",this.elements.voiceKey.disabled="true",this.elements.body.appendChild(this.elements.main),this.elements.main.appendChild(this.elements.screen),this.elements.screen.appendChild(this.elements.cursor),this.elements.screen.appendChild(this.elements.ledPanel),this.elements.ledPanel.appendChild(this.elements.currentLanguageLed),this.elements.ledPanel.appendChild(this.elements.cleanKey),this.elements.ledPanel.appendChild(this.elements.soundKey),this.elements.ledPanel.appendChild(this.elements.voiceKey),this.elements.ledPanel.appendChild(this.elements.keyboardHideKey),this.elements.main.appendChild(this.elements.keyboard)},buttons:function(e){var t,n=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d,s=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,d=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw d}}}}(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;this.elements.buttonItem=this.tags.li.cloneNode(!0),this.elements.buttonName=this.tags.span.cloneNode(!0),this.elements.buttonAdd=this.tags.span.cloneNode(!0),this.elements.buttonName.textContent=a.key,this.elements.buttonAdd.textContent=a.add,this.elements.buttonItem.className="button ".concat(a.size),this.elements.buttonName.classList.add("button-first"),this.elements.buttonAdd.classList.add("button-second"),this.elements.buttonItem.dataset.code="".concat(a.id),this.elements.keyboard.appendChild(this.elements.buttonItem),this.elements.buttonItem.appendChild(this.elements.buttonName),this.elements.buttonItem.appendChild(this.elements.buttonAdd)}}catch(e){n.e(e)}finally{n.f()}}};u.init(),0==localStorage.length?u.buttons(d):u.buttons(c),u.elements.screen.focus(),o();var y=document.querySelector(".keyboard"),m=function(){var e=y.children;Array.from(e).map((function(e){e.firstChild.textContent.length<2&&(e.firstChild.textContent=e.firstChild.textContent.toUpperCase())}))},f=function(){var e=y.children;Array.from(e).map((function(e){e.classList.remove("active"),e.firstChild.textContent=e.firstChild.textContent.toLowerCase(),e.firstChild.textContent.length>1&&e.firstChild.textContent.length<6&&"del"!==e.firstChild.textContent&&(e.firstChild.textContent=e.firstChild.textContent[0].toUpperCase()+e.firstChild.textContent.slice(1))}))};function h(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d,s=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,d=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw d}}}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var p=document.querySelector(".screen__cursor"),b=document.querySelector(".clean"),g=document.querySelector(".keyboard").children;p.focus();var v=function(){var e,t=h(document.querySelector(".keyboard").children);try{var n=function(){var t=e.value;t.onclick=function(){p.focus();var e=t.querySelector(".button-first"),n=e.textContent,a=p.value;n.length<2&&(a="",a+=n,n=e.textContent,p.setRangeText("".concat(a),p.selectionStart,p.selectionEnd,"end"));var i=function(e){a="",a+=n=e,p.setRangeText("".concat(a),p.selectionStart,p.selectionEnd,"end")};t.classList.contains("super-big")&&i(" "),"Enter"===t.dataset.code&&i("\n"),"ArrowUp"===t.dataset.code&&i("▲"),"ArrowLeft"===t.dataset.code&&i("◄"),"ArrowDown"===t.dataset.code&&i("▼"),"ArrowRight"===t.dataset.code&&i("►"),"Backspace"===t.dataset.code&&(p.value=p.value.substring(0,p.value.length-1)),p.value.length>0&&document.querySelector(".screen").classList.add("action"),p.value.length<1&&document.querySelector(".screen").classList.remove("action"),console.log(t),"CapsLock"===t.dataset.code&&t.classList.toggle("active"),"CapsLock"===t.dataset.code&&t.classList.contains("active")?m():"CapsLock"!==t.dataset.code||t.classList.contains("active")||f()},t.addEventListener("mousedown",(function(){"ShiftLeft"!==t.dataset.code&&"ShiftRight"!==t.dataset.code||m()})),t.addEventListener("mouseup",(function(){"ShiftLeft"!==t.dataset.code&&"ShiftRight"!==t.dataset.code||f()}))};for(t.s();!(e=t.n()).done;)n()}catch(e){t.e(e)}finally{t.f()}};b.addEventListener("click",(function(){p.value="",document.querySelector(".screen").classList.remove("action")})),document.addEventListener("keydown",(function(e){if("Tab"!=e.key){p.focus(),"Escape"===e.key&&(p.value="",b.style.background="tomato",b.style.boxShadow="inset -1px -1px 5px 0 #3a3a3a"),p.value.length>0&&document.querySelector(".screen").classList.add("action"),p.value.length<1&&document.querySelector(".screen").classList.remove("action");var t,n=h(g);try{for(n.s();!(t=n.n()).done;){var a=t.value;e.code===a.dataset.code&&"CapsLock"===a.dataset.code&&a.classList.toggle("active"),e.code==a.dataset.code&&"CapsLock"!=a.dataset.code&&a.classList.add("active"),e.code!==a.dataset.code||a.classList.contains("active")||"CapsLock"!=e.code?"CapsLock"==e.code&&a.classList.contains("active")&&m():f()}}catch(e){n.e(e)}finally{n.f()}}})),document.addEventListener("keyup",(function(e){var t,n=h(g);try{for(n.s();!(t=n.n()).done;){var a=t.value;e.code==a.dataset.code&&"CapsLock"!=a.dataset.code&&a.classList.remove("active"),"Escape"===e.key&&(p.textContent="",b.style.background="#3a3a3a",b.style.boxShadow="-2px -2px 4px 0 #3a3a3a")}}catch(e){n.e(e)}finally{n.f()}}));var z=document.querySelector(".keyboard"),C=document.querySelector(".screen__lang-led");"ё"===document.querySelector(".small").firstChild.textContent?C.textContent="Ru":C.textContent="En",v();var S=function(){return"En"===C.textContent?C.textContent="Ru":"Ru"===C.textContent&&(C.textContent="En"),"En"===C.textContent?(z.innerHTML="",u.buttons(d),v(),o(),localStorage.setItem("lang",JSON.stringify(d))):"Ru"===C.textContent?(z.innerHTML="",u.buttons(s),v(),o(),localStorage.setItem("lang",JSON.stringify(s))):void 0};document.addEventListener("keydown",(function(e){"Shift"===e.key&&m()})),document.addEventListener("keyup",(function(e){"Shift"===e.key&&f()})),function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var i=new Set;document.addEventListener("keydown",(function(t){i.add(t.code);for(var a=0,d=n;a<d.length;a++){var s=d[a];if(!i.has(s))return}i.clear(),e(),document.addEventListener("keyup",(function(e){i.delete(e.code)}))}))}((function(){return S()}),"ShiftLeft","ControlLeft"),C.addEventListener("click",(function(){return S()})),n(562),n(243),n(373)}()}();
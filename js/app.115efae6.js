(function(t){function e(e){for(var o,a,c=e[0],s=e[1],l=e[2],g=0,d=[];g<c.length;g++)a=c[g],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),i=n.n(o);i.a},"568c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("button",{staticClass:"button_addNote",on:{click:function(e){return e.preventDefault(),t.addNote(e)}}},[t._v(" "+t._s(t.addSheet)+" ")]),n("div",{staticClass:"div-clear",style:t.heightDivClear}),n("lang-menu"),t._l(t.getNotes,(function(t,e){return n("notes",{key:e,attrs:{keyNote:e}})}))],2)},r=[],a=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),c=n("2f62"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"transition-notes",appear:""}},[t.showdiv?n("div",[n("transition",{attrs:{name:"transition-notes_big",appear:""}},[n("div",{staticClass:"note_div-big",class:t.color,style:t.heightBigDiv},[t.showdiv?n("div",{staticClass:"small-big-button button-small",on:{click:t.smallDiv}}):n("div",{staticClass:"small-big-button button-big",on:{click:t.bigDiv}}),n("button",{attrs:{id:"button-delete"},on:{click:function(e){return t.deleteNote(t.keyNote)}}},[t._v("X")]),n("div",{staticClass:"contain_title"},[t.showTitle?n("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:t.getNotes[t.keyNote].titleNote,expression:"getNotes[keyNote].titleNote"}],staticClass:"input-content input-content_big",attrs:{type:"text",maxlength:t.maxlength},domProps:{value:t.getNotes[t.keyNote].titleNote},on:{blur:t.changeTitleBox,input:function(e){e.target.composing||t.$set(t.getNotes[t.keyNote],"titleNote",e.target.value)}}}):n("span",{staticClass:"input-content input-content_big",on:{click:t.changeTitleBox}},[t._v(" "+t._s(t.title)+" ")])]),n("div",{staticClass:"contain_content contain_content_big"},[t.showContent?n("textarea",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:t.getNotes[t.keyNote].content,expression:"getNotes[keyNote].content"}],staticClass:"textarea-content textarea textarea_big",style:t.fontSize,attrs:{wrap:"off"},domProps:{value:t.getNotes[t.keyNote].content},on:{blur:t.changeContentBox,input:function(e){e.target.composing||t.$set(t.getNotes[t.keyNote],"content",e.target.value)}}}):n("div",{staticClass:"textarea-content",style:t.fontSize,on:{click:t.changeContentBox}},[n("i",[t._v(t._s(t.content))])])]),t.showColor?n("div",{staticClass:"div-calor div-calor_main",class:t.color,on:{click:function(e){t.showColor=!t.showColor}}}):n("div",{staticClass:"container-div-calor"},[n("div",{staticClass:"div-calor div-calor_red",on:{click:function(e){return t.changeColor("red")}}}),n("div",{staticClass:"div-calor div-calor_green",on:{click:function(e){return t.changeColor("green")}}}),n("div",{staticClass:"div-calor div-calor_white",on:{click:function(e){return t.changeColor("white")}}})]),n("div",{staticClass:"container-fontsize"},[n("button",{staticClass:"button-fontsize",on:{click:function(e){return t.decrement(t.keyNote)}}},[t._v("-")]),t._v(" "+t._s(t.getNotes[this.keyNote].fontSize)+" "),n("button",{staticClass:"button-fontsize",on:{click:function(e){return t.increment(t.keyNote)}}},[t._v("+")])])])])],1):n("div",{staticClass:"note_div",class:t.color,style:t.heightSmallDiv},[t.showdiv?n("div",{staticClass:"small-big-button button-small",on:{click:t.smallDiv}}):n("div",{staticClass:"small-big-button button-big",on:{click:t.bigDiv}}),n("button",{attrs:{id:"button-delete"},on:{click:function(e){return t.deleteNote(t.keyNote)}}},[t._v("X")]),n("div",{staticClass:"contain_title"},[t.showTitle?n("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:t.getNotes[t.keyNote].titleNote,expression:"getNotes[keyNote].titleNote"}],staticClass:"input-content",attrs:{type:"text",maxlength:t.maxlength},domProps:{value:t.getNotes[t.keyNote].titleNote},on:{blur:t.changeTitleBox,input:function(e){e.target.composing||t.$set(t.getNotes[t.keyNote],"titleNote",e.target.value)}}}):n("span",{staticClass:"input-content",on:{click:t.changeTitleBox}},[t._v(" "+t._s(t.title)+" ")])]),n("div",{staticClass:"contain_content"},[t.showContent?n("textarea",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:t.getNotes[t.keyNote].content,expression:"getNotes[keyNote].content"}],staticClass:"textarea-content textarea",style:t.fontSize,attrs:{wrap:"off"},domProps:{value:t.getNotes[t.keyNote].content},on:{blur:t.changeContentBox,input:function(e){e.target.composing||t.$set(t.getNotes[t.keyNote],"content",e.target.value)}}}):n("div",{staticClass:"textarea-content",style:t.fontSize,on:{click:t.changeContentBox}},[n("i",[t._v(t._s(t.content))])])]),t.showColor?n("div",{staticClass:"div-calor div-calor_main",class:t.color,on:{click:function(e){t.showColor=!t.showColor}}}):n("div",{staticClass:"container-div-calor"},[n("div",{staticClass:"div-calor div-calor_red",on:{click:function(e){return t.changeColor("red")}}}),n("div",{staticClass:"div-calor div-calor_green",on:{click:function(e){return t.changeColor("green")}}}),n("div",{staticClass:"div-calor div-calor_white",on:{click:function(e){return t.changeColor("white")}}})]),n("div",{staticClass:"container-fontsize"},[n("button",{staticClass:"button-fontsize",on:{click:function(e){return t.decrement(t.keyNote)}}},[t._v("-")]),t._v(" "+t._s(t.getNotes[this.keyNote].fontSize)+" "),n("button",{staticClass:"button-fontsize",on:{click:function(e){return t.increment(t.keyNote)}}},[t._v("+")])])])])},l=[];n("a9e3");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={data:function(){return{showTitle:!1,showContent:!1,showdiv:!1,showColor:!0}},props:{keyNote:Number},computed:g({},Object(c["c"])({getNotes:"getNotesArray",getLangTitle:"getLangTitle",getLangContent:"getLangContent"}),{title:function(){return""===this.getNotes[this.keyNote].titleNote?this.getLangTitle:this.getNotes[this.keyNote].titleNote},content:function(){return""===this.getNotes[this.keyNote].content?this.getLangContent:this.getNotes[this.keyNote].content},color:function(){return this.getNotes[this.keyNote].color},fontSize:function(){return"font-size: ".concat(this.getNotes[this.keyNote].fontSize,"px;")},maxlength:function(){var t=Math.max(document.documentElement.clientWidth,window.innerWidth||0);return t<1400&&t>1100?20:t<1100&&t>450?15:t<450?11:25},heightSmallDiv:function(){return"height: ".concat(.7*Math.max(document.documentElement.clientHeight,window.innerHeight||0),"px;")},heightBigDiv:function(){return"height: ".concat(.98*Math.max(document.documentElement.clientHeight,window.innerHeight||0),"px;")}}),methods:g({changeTitleBox:function(){this.showTitle=!this.showTitle},changeContentBox:function(){this.showContent=!this.showContent},bigDiv:function(){this.showdiv=!this.showdiv},smallDiv:function(){this.showdiv=!1}},Object(c["b"])({deleteNote:"deleteNote"}),{},Object(c["d"])({addColor:"addColor",increment:"incrementFontSize",decrement:"decrementFontSize"}),{changeColor:function(t){this.addColor({key:this.keyNote,color:t}),this.showColor=!0}}),watch:{title:function(){window.localStorage.setItem("notes-array",JSON.stringify(this.getNotes))},content:function(){window.localStorage.setItem("notes-array",JSON.stringify(this.getNotes))},color:function(){window.localStorage.setItem("notes-array",JSON.stringify(this.getNotes))},fontSize:function(){window.localStorage.setItem("notes-array",JSON.stringify(this.getNotes))}}},f=d,h=(n("fa3f"),n("2877")),v=Object(h["a"])(f,s,l,!1,null,null,null),m=v.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"lang-button"},[n("transition",{attrs:{name:"transition-lang",mode:"out-in"}},[t.showbutton?n("button",{on:{click:function(e){t.showbutton=!t.showbutton}}},[t._v(" "+t._s(t.lang))]):n("div",[n("button",{on:{click:function(e){return t.changeLang("ua")}}},[t._v("UA")]),n("button",{on:{click:function(e){return t.changeLang("en")}}},[t._v("EN")]),n("button",{on:{click:function(e){return t.changeLang("ru")}}},[t._v("RU")])])])],1)},b=[];function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var w={data:function(){return{showbutton:!0}},computed:y({},Object(c["c"])({lang:"getlang"})),methods:y({},Object(c["d"])({mutationLang:"changeLang"}),{changeLang:function(t){this.mutationLang(t),this.showbutton=!0,window.localStorage.setItem("lang-notes",JSON.stringify(t))}},Object(c["b"])({startLang:"startLang"})),mounted:function(){this.startLang()}},O=w,C=(n("6c72"),Object(h["a"])(O,p,b,!1,null,null,null)),k=C.exports;function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var j={data:function(){return{keyNote:null}},components:{Notes:m,langMenu:k},computed:_({},Object(c["c"])({getNotes:"getNotesArray",addSheet:"getAddSheet"}),{heightDivClear:function(){var t=Math.max(document.documentElement.clientWidth,window.innerWidth||0);return"height: ".concat(t<1024&&t>700?.1*Math.max(document.documentElement.clientHeight,window.innerHeight||0):t<700?.08*Math.max(document.documentElement.clientHeight,window.innerHeight||0):.14*Math.max(document.documentElement.clientHeight,window.innerHeight||0),"px;")}}),methods:_({},Object(c["b"])({mountNotes:"mountNotes"}),{},Object(c["d"])({addNote:"addNote"})),watch:{getNotes:function(){window.localStorage.setItem("notes-array",JSON.stringify(this.getNotes))}},mounted:function(){this.mountNotes()}},E=j,x=(n("034f"),Object(h["a"])(E,i,r,!1,null,null,null)),T=x.exports,D=(n("fb6a"),n("a434"),{state:{notesArray:[]},mutations:{addNote:function(t){t.notesArray.push({titleNote:"",content:"",color:"white",fontSize:14})},startNotesArray:function(t,e){t.notesArray=e.slice()},deleteNotesArray:function(t,e){t.notesArray.splice(e,1)},addColor:function(t,e){t.notesArray[e.key].color=e.color},incrementFontSize:function(t,e){t.notesArray[e].fontSize++},decrementFontSize:function(t,e){t.notesArray[e].fontSize--}},actions:{mountNotes:function(t){if(window.localStorage.getItem("notes-array")){var e=JSON.parse(window.localStorage.getItem("notes-array"));t.commit("startNotesArray",e)}},deleteNote:function(t,e){confirm("".concat(t.getters.getDelete))&&t.commit("deleteNotesArray",e)}},getters:{getNotesArray:function(t){return t.notesArray}}}),L={state:{lang:{en:{ADDSHEET:"ADD SHEET",LANG:"EN",DELETESHEET:"Delete sheet?",TITLE:"Title",CONTENT:"Text"},ua:{ADDSHEET:"ДОДАТИ АРКУШ",LANG:"UA",DELETESHEET:"Видалити аркуш?",TITLE:"Назва",CONTENT:"Текст"},ru:{ADDSHEET:"ДОБАВИТЬ ЛИСТ",LANG:"RU",DELETESHEET:"Удалить лист?",TITLE:"Название",CONTENT:"Текст"}},selectedLang:"ua"},mutations:{changeLang:function(t,e){t.selectedLang=e}},actions:{startLang:function(t){if(window.localStorage.getItem("lang-notes")){var e=JSON.parse(window.localStorage.getItem("lang-notes"));t.commit("changeLang",e)}}},getters:{getAddSheet:function(t){return t.lang[t.selectedLang].ADDSHEET},getlang:function(t){return t.lang[t.selectedLang].LANG},getDelete:function(t){return t.lang[t.selectedLang].DELETESHEET},getLangTitle:function(t){return t.lang[t.selectedLang].TITLE},getLangContent:function(t){return t.lang[t.selectedLang].CONTENT}}};o["a"].use(c["a"]);var P=new c["a"].Store({modules:{notes:D,multilang:L}});o["a"].config.productionTip=!1,new o["a"]({store:P,render:function(t){return t(T)}}).$mount("#app"),o["a"].directive("focus",{inserted:function(t){t.focus()}})},"6c72":function(t,e,n){"use strict";var o=n("568c"),i=n.n(o);i.a},"7f50":function(t,e,n){},"85ec":function(t,e,n){},fa3f:function(t,e,n){"use strict";var o=n("7f50"),i=n.n(o);i.a}});
//# sourceMappingURL=app.115efae6.js.map
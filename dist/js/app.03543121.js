(function(e){function t(t){for(var o,i,s=t[0],r=t[1],a=t[2],u=0,b=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&b.push(c[i][0]),c[i]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);d&&d(t);while(b.length)b.shift()();return l.push.apply(l,a||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],o=!0,s=1;s<n.length;s++){var r=n[s];0!==c[r]&&(o=!1)}o&&(l.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},c={app:0},l=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var a=0;a<s.length;a++)t(s[a]);var d=r;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00f7":function(e,t,n){"use strict";n("8ce8")},"063e":function(e,t,n){},"2b78":function(e,t,n){"use strict";n("ccc2")},"38b9":function(e,t,n){},"4aba":function(e,t,n){},"4f91":function(e,t,n){"use strict";n("063e")},5143:function(e,t,n){},5399:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function c(e,t,n,c,l,i){var s=Object(o["p"])("tool-bar"),r=Object(o["p"])("control-balls"),a=Object(o["p"])("note"),d=Object(o["p"])("textfield-group-fixed"),u=Object(o["p"])("colors"),b=Object(o["p"])("table-setter");return Object(o["l"])(),Object(o["d"])(o["a"],null,[Object(o["e"])("div",{class:Object(o["j"])(["dark-filter",{darken:l.isDarkMode}])},null,2),Object(o["h"])(s),Object(o["h"])(r,{isDarkMode:l.isDarkMode,isTouchMode:l.isTouchMode,isFullscreen:l.isFullscreen,onToggleDarkMode:i.toggleDarkMode,onToggleFullscreen:i.toggleFullscreen},null,8,["isDarkMode","isTouchMode","isFullscreen","onToggleDarkMode","onToggleFullscreen"]),Object(o["h"])(a,{isFullscreen:l.isFullscreen},null,8,["isFullscreen"]),Object(o["h"])(d),Object(o["h"])(u),Object(o["h"])(b)],64)}n("caad");var l=function(e){return Object(o["n"])("data-v-1af1e836"),e=e(),Object(o["m"])(),e},i={class:"toolbar shadow-3"},s=l((function(){return Object(o["e"])("i",{class:"logo material-icons shadow-2"},"format_list_bulleted",-1)})),r={class:"tools"},a=l((function(){return Object(o["e"])("i",{class:"material-icons"},"add",-1)})),d=[a],u=l((function(){return Object(o["e"])("i",{class:"material-icons"},"remove",-1)})),b=[u],f=l((function(){return Object(o["e"])("i",{class:"material-icons"},"grid_on",-1)})),h=[f],p=l((function(){return Object(o["e"])("i",{class:"material-icons"},"color_lens",-1)})),j=[p],O=l((function(){return Object(o["e"])("i",{class:"material-icons"},"clear_all",-1)})),v=[O],m=l((function(){return Object(o["e"])("i",{class:"material-icons"},"vertical_align_bottom",-1)})),T=[m],N=l((function(){return Object(o["e"])("i",{class:"material-icons file"},[Object(o["g"])("input "),Object(o["e"])("input",{id:"file-uploader",type:"file",accept:"application/json"})],-1)})),C=[N];function g(e,t,n,c,l,a){return Object(o["l"])(),Object(o["d"])("div",i,[s,Object(o["e"])("div",r,[Object(o["e"])("div",{class:Object(o["j"])(["tool btn btn-shallow",{disabled:!a.selectedNode.location||"td"==a.selectedNode.tagName}]),onClick:t[0]||(t[0]=function(){return a.openTextfield&&a.openTextfield.apply(a,arguments)})},d,2),Object(o["e"])("div",{class:Object(o["j"])(["tool btn btn-shallow",{disabled:!a.selectedNode.location||"td"==a.selectedNode.tagName}]),onClick:t[1]||(t[1]=function(){return a.deleteNode&&a.deleteNode.apply(a,arguments)})},b,2),Object(o["e"])("div",{class:Object(o["j"])(["tool btn btn-shallow",{disabled:"table"!=a.selectedNode.type}]),onClick:t[2]||(t[2]=function(){return a.tableSetOpen&&a.tableSetOpen.apply(a,arguments)})},h,2),Object(o["e"])("div",{class:Object(o["j"])(["tool btn btn-shallow",{disabled:!["basic-node","list-item"].includes(a.selectedNode.type)}]),onClick:t[3]||(t[3]=function(){return a.colorsOpen&&a.colorsOpen.apply(a,arguments)})},j,2),Object(o["e"])("div",{class:"tool btn btn-shallow",onClick:t[4]||(t[4]=function(){return a.clearNodes&&a.clearNodes.apply(a,arguments)})},v),Object(o["e"])("div",{class:"tool btn btn-shallow",onClick:t[5]||(t[5]=function(){return a.saveNote&&a.saveNote.apply(a,arguments)})},T),Object(o["e"])("div",{class:"tool btn btn-shallow",onClick:t[6]||(t[6]=function(){return a.readNote&&a.readNote.apply(a,arguments)})},C)])])}n("a434"),n("e9c4");var k={computed:{getThisObj:function(){var e;if(this.location)return this.getNodeObj({location:this.location,callback:function(t,n){e=t[n]}}),e}},methods:{getNodeObj:function(e){var t=e.parentObj,n=void 0===t?this.note:t,o=e.location,c=e.num,l=void 0===c?0:c,i=e.callback;l==o.length-1?i&&i(n.CTS,o[l]):this.getNodeObj({parentObj:n.CTS[o[l]],location:o,num:l+1,callback:i})}}};const S=k;var y=S,L=n("1344"),x=new L["a"],w=n("21a6"),M=n.n(w),F={inject:["note","selectedNode"],mixins:[y],mounted:function(){var e=this,t=document.querySelector("#file-uploader");t.addEventListener("change",(function(){var n=new FileReader;n.readAsText(t.files[0],"uft8"),n.onload=function(t){var n=t.target.result;e.note.CTS=JSON.parse(n)}})),x.on("textfield-return-toolBar",(function(t){e.insertNode(t)}))},methods:{openTextfield:function(){x.emit("note-offset"),x.emit("textfield-open","toolBar")},insertNode:function(e){if(e){var t=this.selectedNode.location;t&&this.getNodeObj({location:t,callback:function(t,n){t.splice(n+1,0,e)}})}},deleteNode:function(){var e=this.selectedNode.location;this.selectedNode.location=null,this.selectedNode.type=null,this.selectedNode.tagName=null,this.getNodeObj({location:e,callback:function(e,t){e.splice(t,1)}})},tableSetOpen:function(){this.tableSetter=!0,x.emit("note-offset"),x.emit("tableSetter-open"),x.emit("colors-close"),x.emit("textfield-close")},colorsOpen:function(){x.emit("colors-open"),x.emit("note-offset")},clearNodes:function(){this.note.CTS=[]},saveNote:function(){var e=new Blob([JSON.stringify(this.note.CTS)],{type:"text/plain;charset=utf-8"});M()(e,"myNote.json")},readNote:function(){var e=document.querySelector("#file-uploader");e.click()}}},_=(n("00f7"),n("6b0d")),D=n.n(_);const A=D()(F,[["render",g],["__scopeId","data-v-1af1e836"]]);var E=A,$=function(e){return Object(o["n"])("data-v-c1e46584"),e=e(),Object(o["m"])(),e},I=$((function(){return Object(o["e"])("div",{class:"block"},[Object(o["e"])("div",{class:"mask"}),Object(o["e"])("i",{class:"material-icons"},"apps")],-1)})),B={class:"material-icons"},P={class:"material-icons"},V=$((function(){return Object(o["e"])("div",{class:"ball shadow-1"},[Object(o["e"])("i",{class:"material-icons"},"touch_app")],-1)})),q={class:"material-icons"},J={class:"material-icons"};function R(e,t,n,c,l,i){return Object(o["l"])(),Object(o["d"])("div",{class:Object(o["j"])(["controlballs",{fullscreen:n.isFullscreen}])},[I,Object(o["e"])("div",{class:"ball shadow-1",onClick:t[0]||(t[0]=function(){return i.toggleDarkMode&&i.toggleDarkMode.apply(i,arguments)})},[Object(o["t"])(Object(o["e"])("i",B,"brightness_2",512),[[o["r"],!n.isDarkMode]]),Object(o["t"])(Object(o["e"])("i",P,"wb_sunny",512),[[o["r"],n.isDarkMode]])]),V,Object(o["e"])("div",{class:"ball shadow-1",onClick:t[1]||(t[1]=function(){return i.toggleFullscreen&&i.toggleFullscreen.apply(i,arguments)})},[Object(o["t"])(Object(o["e"])("i",q,"fullscreen",512),[[o["r"],!n.isFullscreen]]),Object(o["t"])(Object(o["e"])("i",J,"fullscreen_exit",512),[[o["r"],n.isFullscreen]])])],2)}var U={props:["isDarkMode","isTouchMode","isFullscreen"],methods:{toggleDarkMode:function(){this.$emit("toggleDarkMode")},toggleFullscreen:function(){this.$emit("toggleFullscreen")}}};n("4f91");const G=D()(U,[["render",R],["__scopeId","data-v-c1e46584"]]);var K=G,z=function(e){return Object(o["n"])("data-v-4e38764e"),e=e(),Object(o["m"])(),e},H=z((function(){return Object(o["e"])("div",{class:"mask"},null,-1)})),Q=z((function(){return Object(o["e"])("i",{class:"material-icons"},"add",-1)})),W=[Q];function X(e,t,n,c,l,i){var s=Object(o["p"])("floor-block"),r=Object(o["p"])("node-renderer"),a=Object(o["p"])("textfield-group");return Object(o["l"])(),Object(o["d"])("div",{class:Object(o["j"])(["note-outer shadow-3",{offset:l.offset,fullscreen:n.isFullscreen}])},[Object(o["e"])("div",{class:"note",ref:"note",onContextmenu:t[1]||(t[1]=Object(o["u"])((function(){}),["prevent"]))},[(Object(o["l"])(!0),Object(o["d"])(o["a"],null,Object(o["o"])(i.note.CTS,(function(e,t){return Object(o["l"])(),Object(o["d"])(o["a"],{key:e.id},["floor"==e.NT?(Object(o["l"])(),Object(o["c"])(s,{key:0,selected:e.SL,children:e.CTS,level:2,location:[t]},null,8,["selected","children","location"])):(Object(o["l"])(),Object(o["c"])(r,{key:1,nodeObj:e,index:t,level:1,location:[]},null,8,["nodeObj","index"]))],64)})),128)),H,Object(o["h"])(a,{ref:"textfield",isAdding:l.isNodeAdding,onToParent:i.closeNodeAdder},null,8,["isAdding","onToParent"]),Object(o["e"])("div",{class:Object(o["j"])(["btn btn-normal adder-btn",{disabled:l.isNodeAdding}]),onClick:t[0]||(t[0]=function(){return i.openNodeAdder&&i.openNodeAdder.apply(i,arguments)})},W,2)],544)],2)}n("99af");var Y=Object(o["e"])("div",{class:"mask"},null,-1);function Z(e,t,n,c,l,i){var s=Object(o["p"])("floor-block",!0),r=Object(o["p"])("node-renderer"),a=Object(o["p"])("block-controls");return Object(o["l"])(),Object(o["d"])("div",{class:Object(o["j"])(["floor shadow-2",{"shadow-6":n.selected}]),onMouseenter:t[0]||(t[0]=function(){return e.onMouseEnter&&e.onMouseEnter.apply(e,arguments)}),onMouseleave:t[1]||(t[1]=function(){return e.onMouseLeave&&e.onMouseLeave.apply(e,arguments)})},[Y,(Object(o["l"])(!0),Object(o["d"])(o["a"],null,Object(o["o"])(n.children,(function(t,c){return Object(o["l"])(),Object(o["d"])(o["a"],{key:t.id},["floor"==t.NT?(Object(o["l"])(),Object(o["c"])(s,{key:0,children:t.CTS,selected:t.SL,level:n.level+1,location:n.location.concat([c]),onMouseInChild:e.onMouseLeave},null,8,["children","selected","level","location","onMouseInChild"])):(Object(o["l"])(),Object(o["c"])(r,{key:1,nodeObj:t,index:c,level:n.level,location:n.location},null,8,["nodeObj","index","level","location"]))],64)})),128)),Object(o["h"])(a,{disabled:!e.hover,selected:n.selected,location:n.location,parentType:"floor"},null,8,["disabled","selected","location"])],34)}function ee(e,t,n,c,l,i){var s=Object(o["p"])("list-block"),r=Object(o["p"])("table-block"),a=Object(o["p"])("basic-node");return"list"==n.nodeObj.NT?(Object(o["l"])(),Object(o["c"])(s,{key:0,isOrdered:n.nodeObj.OL,selected:n.nodeObj.SL,children:n.nodeObj.CTS,location:n.location.concat([n.index])},null,8,["isOrdered","selected","children","location"])):"table"==n.nodeObj.NT?(Object(o["l"])(),Object(o["c"])(r,{key:1,selected:n.nodeObj.SL,children:n.nodeObj.CTS,location:n.location.concat([n.index])},null,8,["selected","children","location"])):(Object(o["l"])(),Object(o["c"])(a,{key:2,tagName:"h"==n.nodeObj.NT?n.nodeObj.NT+n.level:n.nodeObj.NT,content:n.nodeObj.CT,color:n.nodeObj.CL,selected:n.nodeObj.SL,location:n.location.concat([n.index])},null,8,["tagName","content","color","selected","location"]))}var te={data:function(){return{initialContent:this.content,editing:!1}},inject:["note","selectedNode"],props:["tagName","content","location","selected","color"],mixins:[y],computed:{fontColor:function(){return this.color?this.color:"#333"}},methods:{selectEvent:function(){this.selected?(x.emit("textfield-close"),x.emit("colors-close"),this.selectedNode.location=null,this.selectedNode.type=null,this.selectedNode.tagName=null,this.getThisObj.SL=!1):(this.selectedNode.location&&this.getNodeObj({location:this.selectedNode.location,callback:function(e,t){e[t].SL=!1}}),this.selectedNode.location=this.location,this.selectedNode.type="basic-node",this.selectedNode.tagName=this.tagName,this.getThisObj.SL=!0)}},render:function(){var e=this;return Object(o["i"])(this.tagName,{contentEditable:"hr"!=this.tagName,class:{selected:this.selected,editing:this.editing,empty:!this.content},style:{color:this.fontColor},onContextmenu:function(t){t.preventDefault(),e.selectEvent()},onClick:function(t){e.initialContent=t.target.innerText,e.editing=!0},onBlur:function(t){var n=t.target.innerText;n!=e.initialContent&&(e.getThisObj.CT=n),e.editing=!1}},this.content)}};const ne=te;var oe=ne,ce=Object(o["e"])("div",{class:"mask"},null,-1);function le(e,t,n,c,l,i){var s=Object(o["p"])("list-block",!0),r=Object(o["p"])("basic-node"),a=Object(o["p"])("list-child"),d=Object(o["p"])("block-controls");return Object(o["l"])(),Object(o["d"])("div",{class:Object(o["j"])(["list",{"shadow-6":n.selected,hover:e.hover&&!n.selected,empty:!n.children.length}]),onMouseenter:t[0]||(t[0]=function(){return e.onMouseEnter&&e.onMouseEnter.apply(e,arguments)}),onMouseleave:t[1]||(t[1]=function(){return e.onMouseLeave&&e.onMouseLeave.apply(e,arguments)})},[ce,Object(o["h"])(a,{ordered:n.isOrdered},{default:Object(o["s"])((function(){return[(Object(o["l"])(!0),Object(o["d"])(o["a"],null,Object(o["o"])(n.children,(function(t,c){return Object(o["l"])(),Object(o["d"])(o["a"],{key:t.id},["list"==t.NT?(Object(o["l"])(),Object(o["c"])(s,{key:0,isOrdered:t.OL,selected:t.SL,children:t.CTS,location:n.location.concat([c]),onMouseInChild:e.onMouseLeave},null,8,["isOrdered","selected","children","location","onMouseInChild"])):(Object(o["l"])(),Object(o["c"])(r,{key:1,tagName:"h"==t.NT?"h4":t.NT,content:t.CT,color:t.CL,selected:t.SL,location:n.location.concat([c])},null,8,["tagName","content","color","selected","location"]))],64)})),128))]})),_:1},8,["ordered"]),Object(o["h"])(d,{disabled:!e.hover,selected:n.selected,location:n.location,parentType:"list"},null,8,["disabled","selected","location"])],34)}var ie=function(e){return Object(o["n"])("data-v-5e6ac6ee"),e=e(),Object(o["m"])(),e},se=ie((function(){return Object(o["e"])("i",{class:"material-icons"},"add",-1)})),re=[se],ae={class:"checkbox"},de=["checked"],ue=ie((function(){return Object(o["e"])("i",{class:"checkbox-icon"},null,-1)}));function be(e,t,n,c,l,i){return Object(o["l"])(),Object(o["d"])("div",{class:Object(o["j"])(["controls",{disabled:n.disabled}])},[Object(o["e"])("div",{class:"btn btn-normal adder-btn",onClick:t[0]||(t[0]=function(){return i.addNode&&i.addNode.apply(i,arguments)})},re),Object(o["e"])("label",ae,[Object(o["e"])("input",{type:"checkbox",ref:"checkbox",checked:n.selected,onChange:t[1]||(t[1]=function(){return i.selectEvent&&i.selectEvent.apply(i,arguments)})},null,40,de),ue])],2)}var fe={props:["disabled","selected","location","parentType"],inject:["note","selectedNode"],mixins:[y],methods:{selectEvent:function(){var e=this.$refs.checkbox.checked;this.getThisObj.SL=e,e?(this.selectedNode.location&&this.getNodeObj({location:this.selectedNode.location,callback:function(e,t){e[t].SL=!1}}),this.selectedNode.location=this.location,this.selectedNode.type=this.parentType):(this.selectedNode.location=null,this.selectedNode.type=null)},addNode:function(){var e=this;"table"==this.parentType?this.getThisObj.CTS.push({CTS:[{NT:"td",CT:"表格项",SL:!1,CL:null},{NT:"td",CT:"表格项",SL:!1,CL:null},{NT:"td",CT:"表格项",SL:!1,CL:null},{NT:"td",CT:"表格项",SL:!1,CL:null}]}):(x.emit("note-offset"),x.emit("textfield-open",this.parentType),x.on("textfield-return-"+this.parentType,(function(t){t&&e.getThisObj.CTS.push(t),x.off("textfield-return-"+e.parentType)})))}}};n("2b78");const he=D()(fe,[["render",be],["__scopeId","data-v-5e6ac6ee"]]);var pe=he,je={data:function(){return{hover:!1,setTimeout:null}},methods:{onMouseEnter:function(){var e=this;this.setTimeout=setTimeout((function(){e.hover=!0}),400),this.location.length>1&&this.$emit("mouse-in-child")},onMouseLeave:function(){clearTimeout(this.setTimeout),this.selected||(this.hover=!1)}}};const Oe=je;var ve=Oe,me={name:"list-block",components:{BasicNode:oe,BlockControls:pe,listChild:{props:["ordered"],render:function(){return Object(o["i"])(this.ordered?"ol":"ul",this.$slots.default())}}},props:["children","isOrdered","location","selected"],mixins:[ve]};const Te=D()(me,[["render",le]]);var Ne=Te,Ce=function(e){return Object(o["n"])("data-v-b77be298"),e=e(),Object(o["m"])(),e},ge=Ce((function(){return Object(o["e"])("div",{class:"mask"},null,-1)}));function ke(e,t,n,c,l,i){var s=Object(o["p"])("table-row"),r=Object(o["p"])("block-controls");return Object(o["l"])(),Object(o["d"])("div",{class:Object(o["j"])(["table shadow-2",{"shadow-6":n.selected,hover:e.hover}]),onMouseenter:t[0]||(t[0]=function(){return e.onMouseEnter&&e.onMouseEnter.apply(e,arguments)}),onMouseleave:t[1]||(t[1]=function(){return e.onMouseLeave&&e.onMouseLeave.apply(e,arguments)})},[ge,Object(o["e"])("table",null,[Object(o["e"])("tbody",null,[(Object(o["l"])(!0),Object(o["d"])(o["a"],null,Object(o["o"])(n.children,(function(e,t){return Object(o["l"])(),Object(o["c"])(s,{key:e.id,children:e.CTS,location:n.location.concat([t])},null,8,["children","location"])})),128))])]),Object(o["h"])(r,{class:Object(o["j"])({"controls-margin":e.hover}),disabled:!e.hover,selected:n.selected,location:n.location,parentType:"table"},null,8,["class","disabled","selected","location"])],34)}var Se={props:["selected","children","location"],mixins:[ve],components:{BlockControls:pe,tableRow:{components:{BasicNode:oe},props:["children","location"],render:function(){var e=[];for(var t in this.children){var n=this.children[t];e.push(Object(o["i"])(oe,{tagName:"td",content:n.CT,color:n.CL,selected:n.SL,location:this.location.concat([t])}))}return Object(o["i"])("tr",e)}}}};n("c644");const ye=D()(Se,[["render",ke],["__scopeId","data-v-b77be298"]]);var Le=ye,xe={components:{BasicNode:oe,ListBlock:Ne,TableBlock:Le},props:["nodeObj","index","location","level"]};const we=D()(xe,[["render",ee]]);var Me=we,Fe={name:"floor-block",components:{BlockControls:pe,NodeRenderer:Me},props:["level","location","children","selected"],mixins:[ve]};const _e=D()(Fe,[["render",Z]]);var De=_e,Ae={class:"selector",ref:"selector"},Ee=Object(o["f"])('<option value="h">标题</option><option value="p">段落</option><option value="hr">割线</option><option value="floor">层次</option><option value="ol">序列</option><option value="ul">乱列</option><option value="table">表格</option>',7),$e=[Ee],Ie={class:"textfield",contenteditable:"true",ref:"inputter"},Be=Object(o["e"])("i",{class:"material-icons"},"close",-1),Pe=[Be];function Ve(e,t,n,c,l,i){return Object(o["l"])(),Object(o["d"])("div",{class:Object(o["j"])(["textfield-group shadow-2",{disabled:!n.isAdding}])},[Object(o["e"])("select",Ae,$e,512),Object(o["e"])("div",Ie,null,512),Object(o["e"])("div",{class:"textfield-closer closer",onClick:t[0]||(t[0]=function(e){return i.closeNodeAdder()})},Pe)],2)}var qe={methods:{returnObj:function(e,t){if("/"==t)return null;var n={NT:e,SL:!1};switch(e){case"h":case"p":case"li":n.CT=t,n.CL=null;break;case"hr":break;case"floor":n.CTS=[],t&&n.CTS.push({NT:"h",CT:t,CL:null,SL:!1});break;case"ol":n.NT="list",n.CTS=[],n.OL=!0;break;case"ul":n.NT="list",n.CTS=[],n.OL=!1;break;case"table":n.CO=4,n.CTS=[{CTS:[{NT:"td",CT:"表格项",SL:!1,CL:null},{NT:"td",CT:"表格项",SL:!1,CL:null},{NT:"td",CT:"表格项",SL:!1,CL:null},{NT:"td",CT:"表格项",SL:!1,CL:null}]}];break}return n}}};const Je=qe;var Re=Je,Ue={props:["isAdding"],mixins:[Re],methods:{focus:function(){var e=this.$refs.inputter;e.focus()},closeNodeAdder:function(){var e=this.$refs.selector,t=this.$refs.inputter,n=e.value,o=t.innerText,c=this.returnObj(n,o);this.$emit("toParent",c),t.blur(),t.innerText=""}}};const Ge=D()(Ue,[["render",Ve]]);var Ke=Ge,ze={components:{FloorBlock:De,NodeRenderer:Me,TextfieldGroup:Ke},data:function(){return{isNodeAdding:!1,offset:!1}},props:["isFullscreen"],inject:["note"],created:function(){var e=this;addEventListener("keydown",(function(t){var n=t.altKey,o=t.key;n&&"a"==o&&(t.preventDefault(),e.openNodeAdder())}))},mounted:function(){var e=this;x.on("note-offset",(function(){e.offset=!0})),x.on("note-offset-cancel",(function(){e.offset=!1}))},methods:{openNodeAdder:function(){this.isNodeAdding=!0,this.$refs.textfield.focus()},closeNodeAdder:function(e){this.isNodeAdding=!1,console.log(e),e&&this.note.CTS.push(e)}},watch:{isFullscreen:function(e,t){var n=this;e!=t&&(this.$refs.note.style.display="none",setTimeout((function(){n.$refs.note.style.display="block"}),1200))}}};n("fc9e");const He=D()(ze,[["render",X],["__scopeId","data-v-4e38764e"]]);var Qe=He,We={class:"selector",ref:"selector"},Xe=Object(o["e"])("option",{value:"h"},"标题",-1),Ye={value:"p"},Ze=Object(o["e"])("option",{value:"hr"},"割线",-1),et={value:"floor"},tt=Object(o["e"])("option",{value:"ol"},"序列",-1),nt=Object(o["e"])("option",{value:"ul"},"乱列",-1),ot={value:"li"},ct=Object(o["e"])("option",{value:"table"},"表格",-1),lt={class:"textfield",contenteditable:"true",ref:"inputter"},it=Object(o["e"])("i",{class:"material-icons"},"close",-1),st=[it];function rt(e,t,n,c,l,i){return Object(o["l"])(),Object(o["d"])("div",{class:Object(o["j"])(["textfield-group fixed-component fixed",{disabled:!l.isInputting}])},[Object(o["e"])("select",We,[Xe,Object(o["t"])(Object(o["e"])("option",Ye,"段落",512),[[o["r"],"list"!=l.commandFrom&&"li"!=i.selectedNode.tagName]]),Ze,Object(o["t"])(Object(o["e"])("option",et,"层次",512),[[o["r"],"list"!=l.commandFrom&&"li"!=i.selectedNode.tagName]]),tt,nt,Object(o["t"])(Object(o["e"])("option",ot,"列项",512),[[o["r"],"list"==l.commandFrom||"li"==i.selectedNode.tagName]]),ct],512),Object(o["e"])("div",lt,null,512),Object(o["e"])("div",{class:"textfield-closer closer",onClick:t[0]||(t[0]=function(){return i.closeTextfield&&i.closeTextfield.apply(i,arguments)})},st)],2)}var at={data:function(){return{isInputting:!1,commandFrom:""}},inject:["selectedNode"],mixins:[Re],mounted:function(){var e=this;x.on("textfield-open",(function(t){x.emit("colors-close"),x.emit("tableSetter-close"),e.commandFrom=t,e.isInputting=!0,e.$refs.inputter.focus()})),x.on("textfield-close",(function(){e.commandFrom=null,e.isInputting=!1}))},methods:{closeTextfield:function(){this.isInputting=!1,x.emit("note-offset-cancel");var e=this.$refs.selector.value,t=this.$refs.inputter.innerText,n=this.returnObj(e,t);x.emit("textfield-return-"+this.commandFrom,n),x.emit("textfield-return"),this.$refs.inputter.blur(),this.$refs.inputter.innerText=""}}};const dt=D()(at,[["render",rt]]);var ut=dt,bt=function(e){return Object(o["n"])("data-v-7235df6b"),e=e(),Object(o["m"])(),e},ft=["onClick"],ht={class:"input-group"},pt=bt((function(){return Object(o["e"])("div",{class:"hint"},"#",-1)})),jt=bt((function(){return Object(o["e"])("i",{class:"material-icons"},"close",-1)})),Ot=[jt];function vt(e,t,n,c,l,i){return Object(o["l"])(),Object(o["d"])("div",{class:Object(o["j"])(["colors fixed-component",{disabled:l.disabled}])},[(Object(o["l"])(!0),Object(o["d"])(o["a"],null,Object(o["o"])(l.colors,(function(e){return Object(o["l"])(),Object(o["d"])("div",{key:e.id,class:"color btn btn-shallow",style:Object(o["k"])({"background-color":e}),onClick:function(t){return i.setColor(e)}},null,12,ft)})),128)),Object(o["e"])("div",ht,[pt,Object(o["t"])(Object(o["e"])("input",{class:"inputer",placeholder:"******",type:"text",maxlength:"8","onUpdate:modelValue":t[0]||(t[0]=function(e){return l.colorValue=e})},null,512),[[o["q"],l.colorValue]])]),Object(o["e"])("div",{class:"closer",onClick:t[1]||(t[1]=function(){return i.close&&i.close.apply(i,arguments)})},Ot)],2)}var mt={data:function(){return{disabled:!0,colors:["#D50000","#FFD600","#333"],colorValue:"",timeout:null,targetNode:null}},inject:["selectedNode","note"],mixins:[y],mounted:function(){var e=this;x.on("colors-open",(function(){x.emit("textfield-closes"),x.emit("tableSetter-close"),e.disabled=!1,e.getNodeObj({location:e.selectedNode.location,callback:function(t,n){e.targetNode=t[n]}})})),x.on("colors-close",(function(){e.disabled=!0,e.targetNode=null}))},methods:{setColor:function(e){this.targetNode.CL=e},close:function(){x.emit("colors-close"),x.emit("note-offset-cancel")}},watch:{colorValue:function(e){var t=this;clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.setColor("#"+e)}),600)}}};n("89c4");const Tt=D()(mt,[["render",vt],["__scopeId","data-v-7235df6b"]]);var Nt=Tt,Ct=function(e){return Object(o["n"])("data-v-2774dfc0"),e=e(),Object(o["m"])(),e},gt={class:"input-group"},kt=Ct((function(){return Object(o["e"])("i",{class:"hint material-icons"},"view_headline",-1)})),St={class:"input-group"},yt=Ct((function(){return Object(o["e"])("i",{class:"hint material-icons"},"view_column",-1)})),Lt=Ct((function(){return Object(o["e"])("i",{class:"material-icons"},"check",-1)})),xt=[Lt],wt=Ct((function(){return Object(o["e"])("i",{class:"material-icons"},"close",-1)})),Mt=[wt];function Ft(e,t,n,c,l,i){return Object(o["l"])(),Object(o["d"])("div",{class:Object(o["j"])(["table-setter fixed-component",{disabled:!l.show}])},[Object(o["e"])("div",gt,[kt,Object(o["t"])(Object(o["e"])("input",{class:"inputer",type:"text",placeholder:" > 0 ","onUpdate:modelValue":t[0]||(t[0]=function(e){return l.row=e})},null,512),[[o["q"],l.row]])]),Object(o["e"])("div",St,[yt,Object(o["t"])(Object(o["e"])("input",{class:"inputer",type:"text",placeholder:" > 0 ","onUpdate:modelValue":t[1]||(t[1]=function(e){return l.col=e})},null,512),[[o["q"],l.col]])]),Object(o["e"])("div",{class:"closer",onClick:t[2]||(t[2]=function(){return i.tableSet&&i.tableSet.apply(i,arguments)})},xt),Object(o["e"])("div",{class:"closer",onClick:t[3]||(t[3]=function(){return i.close&&i.close.apply(i,arguments)})},Mt)],2)}var _t=n("b85c"),Dt={NT:"td",CT:"表格项",SL:!1,CL:null},At={inject:["note","selectedNode"],mixins:[y],data:function(){return{row:1,col:1,show:!1,targetNode:null,timeout:null}},mounted:function(){var e=this;x.on("tableSetter-open",(function(){e.show=!0})),x.on("tableSetter-close",(function(){e.show=!1})),addEventListener("keydown",(function(t){"Enter"==t.key&&e.tableSet()}))},methods:{tableSet:function(){var e=this.targetNode.CTS.length,t=this.targetNode.CTS[0].CTS.length,n=Math.abs(this.row-e),o=Math.abs(this.col-t);if(this.col>t){var c,l=Object(_t["a"])(this.targetNode.CTS);try{for(l.s();!(c=l.n()).done;)for(var i=c.value,s=0;s<o;s++)i.CTS.push(Dt)}catch(j){l.e(j)}finally{l.f()}}else{var r,a=Object(_t["a"])(this.targetNode.CTS);try{for(a.s();!(r=a.n()).done;)for(var d=r.value,u=0;u<o;u++)d.CTS.pop()}catch(j){a.e(j)}finally{a.f()}}if(this.row>e){for(var b={CTS:[]},f=0;f<this.col;f++)b.CTS.push(Dt);for(var h=0;h<n;h++)this.targetNode.CTS.push(b)}else for(var p=0;p<n;p++)this.targetNode.CTS.pop()},close:function(){x.emit("note-offset-cancel"),this.show=!1}},watch:{show:function(e){var t=this;e?(this.getNodeObj({location:this.selectedNode.location,callback:function(e,n){t.targetNode=e[n]}}),this.row=this.targetNode.CTS.length,this.col=this.targetNode.CTS[0].CTS.length):this.targetNode=null},row:function(e){var t=this;e<1?this.timeout=setTimeout((function(){t.row=1}),1e3):clearTimeout(this.timeout)},col:function(e){var t=this;e<1?this.timeout=setTimeout((function(){t.col=1}),1e3):clearTimeout(this.timeout)}}};n("eb7d");const Et=D()(At,[["render",Ft],["__scopeId","data-v-2774dfc0"]]);var $t=Et,It={CTS:[{NT:"h",CT:"这是一个大标题",CL:null,SL:!1},{NT:"hr",SL:!1},{NT:"p",CT:"这是一个段落",CL:null,SL:!1},{NT:"floor",SL:!1,CTS:[{NT:"h",CT:"这是层次中的大标题",CL:null,SL:!1},{NT:"p",CT:"这是一个段落",CL:null,SL:!1},{NT:"floor",SL:!1,CTS:[{NT:"h",CT:"这是层次中的大标题",CL:null,SL:!1},{NT:"p",CT:"这是一个段落",CL:null,SL:!1}]}]},{NT:"list",OL:!0,SL:!1,CTS:[{NT:"li",CT:"这是一个列表项",CL:null,SL:!1}]},{NT:"table",SL:!1,CTS:[{CTS:[{NT:"td",CT:"表格项",SL:!1,CL:null},{NT:"td",CT:"表格项",SL:!1,CL:null},{NT:"td",CT:"表格项",SL:!1,CL:null},{NT:"td",CT:"表格项",SL:!1,CL:null}]},{CTS:[{NT:"td",CT:"表格项",SL:!1,CL:null},{NT:"td",CT:"表格项",SL:!1,CL:null},{NT:"td",CT:"表格项",SL:!1,CL:null},{NT:"td",CT:"表格项",SL:!1,CL:null}]}]}]},Bt={name:"App",components:{Note:Qe,ControlBalls:K,ToolBar:E,TableSetter:$t,Colors:Nt,TextfieldGroupFixed:ut},data:function(){return{note:It,selectedNode:{location:null,type:null,tagName:null},isDarkMode:!1,isTouchMode:!1,isFullscreen:!1}},provide:function(){return{note:this.note,selectedNode:this.selectedNode}},methods:{toggleDarkMode:function(){this.isDarkMode=!this.isDarkMode},toggleFullscreen:function(){this.isFullscreen=!this.isFullscreen}}};n("7d5b");const Pt=D()(Bt,[["render",c]]);var Vt=Pt,qt=(n("5143"),n("38b9"),n("86be"),n("61fd"),n("8d2a"),n("cde1"),Object(o["b"])(Vt));qt.mount("#app")},"61fd":function(e,t,n){},"7d5b":function(e,t,n){"use strict";n("4aba")},"86be":function(e,t,n){},"89c4":function(e,t,n){"use strict";n("5399")},"8ce8":function(e,t,n){},"8d2a":function(e,t,n){},b9af:function(e,t,n){},c644:function(e,t,n){"use strict";n("d3a7")},ccc2:function(e,t,n){},cde1:function(e,t,n){},d3a7:function(e,t,n){},dbd8:function(e,t,n){},eb7d:function(e,t,n){"use strict";n("b9af")},fc9e:function(e,t,n){"use strict";n("dbd8")}});
//# sourceMappingURL=app.03543121.js.map
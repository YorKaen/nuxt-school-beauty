(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{336:function(t,o,e){var content=e(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(14).default)("10ae842c",content,!0,{sourceMap:!1})},369:function(t,o,e){"use strict";e(336)},370:function(t,o,e){var n=e(13)(!1);n.push([t.i,'.close[data-v-7244f8d7]{margin-left:auto;width:40px;height:40px;background-color:#1730b9;border-radius:100%;position:relative;flex:0 0 40px}.close[data-v-7244f8d7]:before{left:50%;transform:translateX(-50%)}.close[data-v-7244f8d7]:after,.close[data-v-7244f8d7]:before{position:absolute;content:"";width:15px;height:2px;background-color:#fff;top:50%}.close[data-v-7244f8d7]:after{left:30%;transform:rotate(90deg) translateY(-50%)}.accord[data-v-7244f8d7]{margin-bottom:20px;cursor:pointer}.accord-title[data-v-7244f8d7]{display:flex;flex-direction:row;margin-bottom:20px}.accord-body[data-v-7244f8d7]{padding-right:60px;overflow:hidden;max-height:0;transition:max-height .5s cubic-bezier(0,1,0,1)}.accord-body.open[data-v-7244f8d7]{max-height:400px;transition:max-height 1s ease-in-out}.accord .close[data-v-7244f8d7]{transition:all .3s ease-in-out}.accord .close.open[data-v-7244f8d7]{transform:rotate(130deg)}.accord .close.open[data-v-7244f8d7]:before{width:18px;height:2px;top:48%;left:50%;transform:translateX(-50%)}.accord .close.open[data-v-7244f8d7]:after{width:18px;height:2px;top:48%;left:25%;transform:rotate(95deg) translateY(-50%)}',""]),t.exports=n},412:function(t,o,e){"use strict";e.r(o);var n={name:"Accordion",data:function(){return{}},props:["items"],methods:{openItem:function(t){t.isopen=!t.isopen}},mounted:function(){}},r=(e(369),e(2)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"accordion"},t._l(t.items,(function(o,n){return e("div",{staticClass:"accord",on:{click:function(e){return t.openItem(o)}}},[e("div",{staticClass:"accord-title"},[e("div",{staticClass:"txt label-1 fw-m"},[t._v(t._s(o.title))]),e("div",{staticClass:"close",class:{open:o.isopen}})]),e("div",{staticClass:"accord-body",class:{open:o.isopen}},[t._v(t._s(o.content))])])})),0)}),[],!1,null,"7244f8d7",null);o.default=component.exports}}]);
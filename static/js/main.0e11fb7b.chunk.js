(this["webpackJsonpreact-crud"]=this["webpackJsonpreact-crud"]||[]).push([[0],{12:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(0),r=n.n(c),i=n(14),s=n.n(i),o=n(16),u=(n(12),n(4)),d=n(5),l=n(7),j=n(6),b=n.p+"static/media/WhatTimeIsItRightNow_logo.a66a8a22.png",O=n.p+"static/media/WhatTimeIsItRightNow_Original_series_logo.dc8a522c.png",h=n.p+"static/media/Philbert_thumbnail.5be45690.jpg",m=n.p+"static/media/Philbert_Opening.6f29b239.mp4",g=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={date:new Date},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(f,{}),Object(a.jsx)(v,{date:this.state.date}),Object(a.jsx)(I,{})]})}}]),n}(c.Component);function f(){return Object(a.jsx)("h1",{children:Object(a.jsx)("img",{className:"logo",src:b,alt:"WhatTimeIsItRightNow Logo"})})}function v(t){return Object(a.jsxs)("div",{className:"Clock",children:[Object(a.jsx)(p,{date:t.date}),Object(a.jsx)(N,{date:t.date})]})}function p(t){var e="".concat(function(t){return x[t.date.getDay()]}(t),", ").concat(function(t){return t.date.getDate()}(t)),n="".concat(function(t){return y[t.date.getMonth()]}(t)," ").concat(function(t){return t.date.getFullYear()}(t));return Object(a.jsxs)("div",{className:"localDate",children:[e,Object(a.jsx)("br",{}),n]})}var x=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];var y=["January","February","March","Aprill","May","June","July","August","September","October","November","December"];function N(t){return r.a.createElement("div",{className:"localTime"},"".concat(function(t){var e=t.date.getHours()-12>=0?t.date.getHours()-12:t.date.getHours();return e<10?"0".concat(e):e}(t),":").concat(function(t){var e=t.date.getMinutes();return e<10?"0".concat(e):e}(t),":").concat(function(t){var e=t.date.getSeconds();return e<10?"0".concat(e):e}(t)," ").concat(function(t){return t.date.getHours()-12>=0?"p.m.":"a.m."}(t)))}function I(){return Object(a.jsxs)("div",{className:"OriginalSeries",children:[Object(a.jsx)(k,{}),Object(a.jsx)(D,{}),Object(a.jsx)(S,{})]})}function k(){return Object(a.jsx)("h1",{children:Object(a.jsx)("img",{className:"OriginalSeriesLogo",src:O,alt:"WhatTimeIsItRightNow Original Series Logo"})})}function D(){return Object(a.jsx)("div",{children:Object(a.jsx)("video",{controls:!0,className:"PhilbertVideo",poster:h,children:Object(a.jsx)("source",{src:m,type:"video/mp4"})})})}function S(){return Object(a.jsx)("div",{className:"OriginalSeriesDetail",children:"COMING SOON!"})}var w=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)(g,{})}}]),n}(c.Component);s.a.render(Object(a.jsx)(o.a,{children:Object(a.jsx)(w,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.0e11fb7b.chunk.js.map
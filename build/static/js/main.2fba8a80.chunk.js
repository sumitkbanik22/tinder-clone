(this["webpackJsonptinder-clone"]=this["webpackJsonptinder-clone"]||[]).push([[0],{56:function(e,n,t){},57:function(e,n,t){},58:function(e,n,t){},65:function(e,n,t){},69:function(e,n,t){},90:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),s=t(15),r=t.n(s),i=(t(56),t(57),t(58),t(38)),o=t.n(i),j=t(104),l=t(39),d=t.n(l),u=t(2);var b=function(){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)(j.a,{children:Object(u.jsx)(o.a,{fontSize:"large",className:"header_icon"})}),Object(u.jsx)("img",{className:"header_logo",src:"https://media.designrush.com/inspirations/129349/conversions/_1513706350_604_tin-preview.jpg",alt:""}),Object(u.jsx)(j.a,{children:Object(u.jsx)(d.a,{fontSize:"large",className:"header_icon"})})]})},h=(t(65),t(40)),f=t.n(h),p=t(41),O=t.n(p),m=t(42),x=t.n(m),g=t(43),v=t.n(g),w=t(44),N=t.n(w);var S=function(){return Object(u.jsxs)("div",{className:"swipeButtons",children:[Object(u.jsx)(j.a,{fontSize:"small",className:"swipeButtons_repeat",children:Object(u.jsx)(f.a,{fontSize:"large"})}),Object(u.jsx)(j.a,{className:"swipeButtons_left",children:Object(u.jsx)(O.a,{fontSize:"large"})}),Object(u.jsx)(j.a,{className:"swipeButtons_star",children:Object(u.jsx)(x.a,{fontSize:"large"})}),Object(u.jsx)(j.a,{className:"swipeButtons_right",children:Object(u.jsx)(v.a,{fontSize:"large"})}),Object(u.jsx)(j.a,{className:"swipeButtons_lightning",children:Object(u.jsx)(N.a,{fontSize:"large"})})]})},_=t(25),z=t.n(_),B=t(45),C=t(48),k=t(46),y=t.n(k),F=(t(69),t(47)),L=t.n(F).a.create({baseURL:"https://tinder-clone-backend1a.herokuapp.com/"});var I=function(){var e=Object(c.useState)([]),n=Object(C.a)(e,2),t=n[0],a=n[1];return Object(c.useEffect)((function(){function e(){return(e=Object(B.a)(z.a.mark((function e(){var n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.get("/tinder/cards");case 2:n=e.sent,a(n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(u.jsx)("div",{className:"tinderCards",children:Object(u.jsx)("div",{className:"tenderCards_cardsContainer",children:t.map((function(e){return Object(u.jsx)(y.a,{className:"swipe",preventSwipe:["up","down"],onSwipe:function(n){return t=e.name,void console.log("removing: "+t);var t},onCardLeftScreen:function(){return n=e.name,void console.log(n+" left the screen!");var n},children:Object(u.jsx)("div",{style:{backgroundImage:"url(".concat(e.imgUrl,")")},className:"card",children:Object(u.jsx)("h3",{children:e.name})})},e.name)}))})})};var E=function(){return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(b,{}),Object(u.jsx)(I,{}),Object(u.jsx)(S,{})]})},J=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,105)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(E,{})}),document.getElementById("root")),J()}},[[90,1,2]]]);
//# sourceMappingURL=main.2fba8a80.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,n){e.exports=n(63)},63:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(30),u=n.n(c),o=n(15),i=n(17),l=n(8),s=n(9),h=n(11),m=n(10),p=n(12),b=n(32),f=n.n(b),E=n(65),O=n(66),j={searchTerm:""},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_SEARCH_TERM":return{searchTerm:t.searchTerm};default:return e}},v=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(E.a,{onSubmit:function(t){t.preventDefault(),f.a.get("/emissions/".concat(e.props.searchTerm)).then(function(e){console.log(e)})}},a.a.createElement(E.a.Label,null,"Search"),a.a.createElement(E.a.Control,{type:"input",value:this.props.searchTerm,onChange:function(t){e.props.changeSearchTerm(t.target.value)},placeholder:"Search"}),a.a.createElement(O.a,{type:"submit"},"Search"))}}]),t}(r.Component),T={changeSearchTerm:function(e){return{type:"CHANGE_SEARCH_TERM",searchTerm:e}}},y=Object(i.b)(function(e){return{searchTerm:e.searchTerm}},T)(v),C=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,"Result")}}]),t}(r.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,"CO\xb2-emissions"),a.a.createElement(y,null),a.a.createElement(C,null))}}]),t}(r.Component),S=Object(o.b)(d),w=function(){u.a.render(a.a.createElement(i.a,{store:S},a.a.createElement(g,null)),document.getElementById("root"))};w(),S.subscribe(w)}},[[35,2,1]]]);
//# sourceMappingURL=main.07181d9f.chunk.js.map
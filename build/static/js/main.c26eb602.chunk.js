(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,a){e.exports=a(76)},74:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(36),s=a.n(o),i=a(11),c=a(8),p=a(9),u=a(12),h=a(10),l=a(13),m=a(78),f=a(79),g=a(15),d=a.n(g),y=a(20),v=a(17),E=a(38),C=a.n(E),b={countrysEmissions:function(){var e=Object(y.a)(d.a.mark(function e(t,a,r){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("/api/emissions/".concat(t,"?percapita=").concat(a,"&compare=").concat(r));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t,a,r){return e.apply(this,arguments)}}()},O={searchTerm:"",searchPopulations:!1,compare:!1},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_SEARCH_TERM":return Object(v.a)({},e,{searchTerm:t.searchTerm});case"TOGGLE_POPULATION_CHECK_BOX":return Object(v.a)({},e,{searchPopulations:!e.searchPopulations});case"TOGGLE_COMPARE_CHECK_BOX":return Object(v.a)({},e,{compare:!e.compare});case"SET_RESULT":return Object(v.a)({},e,{country:t.country,data:t.data,highIncomeAverages:t.highIncomeAverages});default:return e}},x=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(m.a,{onSubmit:function(t){t.preventDefault(),e.props.searchCountrysEmissions(e.props.searchTerm,e.props.searchPopulations,e.props.compare)}},n.a.createElement(m.a.Label,{className:"search-title"},"Search"),n.a.createElement("p",null,"Search for a country to see how its CO\xb2 emissions have developed during the years"),n.a.createElement(m.a.Control,{className:"search-input",type:"input",value:this.props.searchTerm,onChange:function(t){e.props.changeSearchTerm(t.target.value)},placeholder:"Search"}),n.a.createElement(m.a.Check,{className:"search-checkbox",label:"Include populations",onChange:function(t){e.props.togglePopulationCheckBox()}}),n.a.createElement(m.a.Check,{className:"search-checkbox",label:"Compare to the averages of countries with high income",onChange:function(t){e.props.toggleCompareCheckBox()}}),n.a.createElement(f.a,{className:"search-button",type:"submit"},"Search"))}}]),t}(r.Component),j={changeSearchTerm:function(e){return{type:"CHANGE_SEARCH_TERM",searchTerm:e}},searchCountrysEmissions:function(e,t,a){return function(){var r=Object(y.a)(d.a.mark(function r(n){var o;return d.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,b.countrysEmissions(e,t,a);case 2:o=r.sent,n({type:"SET_RESULT",country:o.country.name,data:o.country.data,highIncomeAverages:o.highIncomeAverages});case 4:case"end":return r.stop()}},r,this)}));return function(e){return r.apply(this,arguments)}}()},togglePopulationCheckBox:function(){return{type:"TOGGLE_POPULATION_CHECK_BOX"}},toggleCompareCheckBox:function(){return{type:"TOGGLE_COMPARE_CHECK_BOX"}}},w=Object(i.b)(function(e){return{searchTerm:e.search.searchTerm,searchPopulations:e.search.searchPopulations,compare:e.search.compare}},j)(x),T=a(22),I=a.n(T),B=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=function(e,t){return{theme:{palette:"palette6"},title:{text:e,align:"center",margin:20,style:{fontSize:"20px",color:"#EA3546"}},yaxis:t,tooltip:{fixed:{enabled:!0,position:"topLeft",offsetY:30,offsetX:60},x:{formatter:function(e){return"Year: "+e}}},legend:{position:"top",horizontalAlign:"right",offsetX:40}}},t=function(e,t,a){var r=e.reduce(function(e,t){return Math.max(e,t)},0),n=t.reduce(function(e,t){return Math.max(e,t)},0);return Math.max(r,n)+a},a=e("Development of CO\xb2-Emissions",[{min:0,max:this.props.data?t(this.props.highIncomeAverages?this.props.highIncomeAverages.averages.map(function(e){return e.emissionsAverage}):[],this.props.data.map(function(e){return e.emissions}),5e3):1e3,seriesName:"CO\xb2-Emissions",axisTicks:{show:!0},axisBorder:{show:!0,color:"#662E9B"},labels:{style:{color:"#662E9B"}},title:{text:"CO\xb2-emissions (kt)",style:{color:"#662E9B"}},tooltip:{enabled:!0}}]),r=e("Development of Populations",[{min:0,max:this.props.data&&this.props.data.map(function(e){return e.population})?t(this.props.highIncomeAverages?this.props.highIncomeAverages.averages.map(function(e){return e.populationAverage}):[],this.props.data.map(function(e){return e.population}),1e6):1e3,seriesName:"Population",axisTicks:{show:!0},axisBorder:{show:!0,color:"#662E9B"},labels:{style:{color:"#662E9B"}},title:{text:"Population",style:{color:"#662E9B"}},tooltip:{enabled:!0}}]),o=e("Development of CO\xb2-Emissions per Capita",[{seriesName:"CO\xb2-Emissions Per Capita",min:0,max:this.props.data&&this.props.data.map(function(e){return e.perCapita})?t(this.props.highIncomeAverages?this.props.highIncomeAverages.averages.map(function(e){return 1e6*e.perCapitaAverage}):[],this.props.data.map(function(e){return 1e6*e.perCapita}),1e3):1e3,axisTicks:{show:!0},axisBorder:{show:!0,color:"#662E9B"},labels:{style:{color:"#662E9B"}},title:{text:"CO\xb2-emissions Per Capita (kg)",style:{color:"#662E9B"}},tooltip:{enabled:!0}}]),s=[{name:this.props.country?"".concat(this.props.country):"Searched country",type:"line",data:this.props.data&&this.props.data.map(function(e){return e.emissions})?this.props.data.filter(function(e){return null!==e.emissions}).map(function(e){return{x:e.year,y:e.emissions}}):[]},{name:"Average of countries with high income",type:"line",data:this.props.highIncomeAverages?this.props.highIncomeAverages.averages.filter(function(e){return e.year&&0!==e.emissionsAverage}).map(function(e){return{x:e.year,y:e.emissionsAverage}}):[]}],i=[{name:this.props.country?"".concat(this.props.country):"Searched country",type:"line",data:this.props.data&&this.props.data.map(function(e){return e.population})?this.props.data.filter(function(e){return null!==e.population}).map(function(e){return{x:e.year,y:e.population}}):[]},{name:"Average of countries with high income",type:"line",data:this.props.highIncomeAverages?this.props.highIncomeAverages.averages.filter(function(e){return e.year&&0!==e.populationAverage}).map(function(e){return{x:e.year,y:e.populationAverage}}):[]}],c=[{name:this.props.country?"".concat(this.props.country):"Searched country",type:"line",data:this.props.data&&this.props.data.map(function(e){return e.perCapita})?this.props.data.filter(function(e){return null!==e.perCapita}).map(function(e){return{x:e.year,y:1e6*e.perCapita}}):[]},{name:"Average of countries with high income",type:"line",data:this.props.highIncomeAverages?this.props.highIncomeAverages.averages.filter(function(e){return e.year&&e.perCapitaAverage&&0!==e.perCapitaAverage}).map(function(e){return{x:e.year,y:1e6*e.perCapitaAverage}}):[]}];return n.a.createElement("div",null,n.a.createElement("div",{className:"App"},n.a.createElement("h2",null,"Results"),n.a.createElement("div",{id:"country"},n.a.createElement("b",null,"Country: ",this.props.country)),n.a.createElement("div",{id:"emissions-chart",className:"chart"},n.a.createElement(I.a,{options:a,series:s,type:"line",width:"1000"})),n.a.createElement("div",{id:"populations-chart"},n.a.createElement(I.a,{options:r,series:i,type:"line",width:"1000"})),n.a.createElement("div",{id:"emissions-per-capita"},n.a.createElement(I.a,{options:o,series:c,type:"line",width:"1000"}))))}}]),t}(r.Component),k=Object(i.b)(function(e){return{country:e.search.country,data:e.search.data,highIncomeAverages:e.search.highIncomeAverages}})(B),P=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"CO\xb2-emissions"),n.a.createElement(w,null),n.a.createElement(k,null))}}]),t}(r.Component),_=a(14),S=a(41),N=Object(_.c)({search:A}),G=Object(_.d)(N,Object(_.a)(S.a)),L=(a(74),function(){s.a.render(n.a.createElement(i.a,{store:G},n.a.createElement(P,null)),document.getElementById("root"))});L(),G.subscribe(L)}},[[42,2,1]]]);
//# sourceMappingURL=main.c26eb602.chunk.js.map
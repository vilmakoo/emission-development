(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){e.exports=a(282)},278:function(e,t,a){},282:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(26),s=a.n(o),i=a(16),c=a(9),p=a.n(c),u=a(24),h=a(18),l=a(19),m=a(21),d=a(20),f=a(22),E=a(37),v=a.n(E),g=a(60),b=a.n(g),y=a(59),O=a.n(y),C=a(99),T=a.n(C),x=a(100),j=a.n(x),w=a(27),A=a(46),k=a.n(A),P={searchCountrysEmissions:function(){var e=Object(u.a)(p.a.mark(function e(t,a,r){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("/api/emissions/".concat(t,"?percapita=").concat(a,"&compare=").concat(r));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return","error");case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t,a,r){return e.apply(this,arguments)}}(),updateDatabase:function(){var e=Object(u.a)(p.a.mark(function e(){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("/api/update_database");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return","error");case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}(),searchTopEmitters:function(){var e=Object(u.a)(p.a.mark(function e(){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("/api/emissions/top_emitters");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return","error");case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}()},S={searchTerm:"",searchPopulations:!1,compare:!1,topEmitters:void 0},_=function(e){return{type:"SET_ERROR",error:e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_SEARCH_TERM":return Object(w.a)({},e,{searchTerm:t.searchTerm});case"TOGGLE_POPULATION_CHECK_BOX":return Object(w.a)({},e,{searchPopulations:!e.searchPopulations});case"TOGGLE_COMPARE_CHECK_BOX":return Object(w.a)({},e,{compare:!e.compare});case"SET_RESULT":return{searchTerm:e.searchTerm,searchPopulations:e.searchPopulations,compare:e.compare,country:t.country,data:t.data,highIncomeAverages:t.highIncomeAverages};case"SET_ERROR":return Object(w.a)({},e,{error:t.error});case"SET_TOP_EMITTERS":return{searchTerm:e.searchTerm,searchPopulations:e.searchPopulations,compare:e.compare,topEmitters:t.data};default:return e}},N=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("form",null,n.a.createElement(T.a,{className:"search-title"},"Search"),n.a.createElement("p",null,"Search for a country to see how its CO\xb2 emissions have developed during the years"),n.a.createElement(j.a,{className:"search-input",type:"input",onChange:function(t){e.props.changeSearchTerm(t.target.value)},placeholder:"Search",value:this.props.searchTerm}),n.a.createElement("div",{className:"checkboxes"},n.a.createElement(O.a,{control:n.a.createElement(b.a,{style:{fontSize:"20px"},className:"search-checkbox",checked:this.props.searchPopulations,onChange:function(t){e.props.togglePopulationCheckBox()}}),label:"Include populations"}),n.a.createElement(O.a,{control:n.a.createElement(b.a,{checked:this.props.compare,onChange:function(t){e.props.toggleCompareCheckBox()}}),label:"Compare to the averages of countries with high income"})),n.a.createElement(v.a,{className:"search-button",type:"submit",variant:"outlined",color:"primary",size:"large",onClick:function(t){t.preventDefault(),e.props.searchCountrysEmissions(e.props.searchTerm,e.props.searchPopulations,e.props.compare)}},"Search"),n.a.createElement(v.a,{className:"search-button",variant:"outlined",color:"secondary",onClick:function(t){e.props.searchTopEmitters()},size:"large"},"Search for countries with largest emissions per capita in 2014")))}}]),t}(r.Component),B={changeSearchTerm:function(e){return{type:"CHANGE_SEARCH_TERM",searchTerm:e}},searchCountrysEmissions:function(e,t,a){return function(){var r=Object(u.a)(p.a.mark(function r(n){var o;return p.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,P.searchCountrysEmissions(e,t,a);case 2:"error"===(o=r.sent)?n(_("Couldn't connect to the server")):"NOT FOUND"===o.country.name?n(_("Country not found")):n({type:"SET_RESULT",country:o.country.name,data:o.country.data,highIncomeAverages:o.highIncomeAverages}),setTimeout(function(){n(_(null))},4e3);case 5:case"end":return r.stop()}},r,this)}));return function(e){return r.apply(this,arguments)}}()},togglePopulationCheckBox:function(){return{type:"TOGGLE_POPULATION_CHECK_BOX"}},toggleCompareCheckBox:function(){return{type:"TOGGLE_COMPARE_CHECK_BOX"}},searchTopEmitters:function(){return function(){var e=Object(u.a)(p.a.mark(function e(t){var a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.searchTopEmitters();case 2:a=e.sent,t("error"===a?_("Couldn't connect to the server"):{type:"SET_TOP_EMITTERS",data:a}),setTimeout(function(){t(_(null))},4e3);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}},R=Object(i.b)(function(e){return{searchTerm:e.search.searchTerm,searchPopulations:e.search.searchPopulations,compare:e.search.compare}},B)(N),D=a(101),G=a.n(D),U=a(102),L=a.n(U),M=a(47),H=a.n(M),z=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=function(e,t){return{theme:{palette:"palette6"},title:{text:e,align:"center",margin:20,style:{fontSize:"20px",color:"#EA3546"}},yaxis:t,tooltip:{fixed:{enabled:!0,position:"topLeft",offsetY:30,offsetX:60},x:{formatter:function(e){return"Year: "+e}}},legend:{position:"top",horizontalAlign:"right",offsetX:40}}},t=function(e,t,a){var r=e.reduce(function(e,t){return Math.max(e,t)},0),n=t.reduce(function(e,t){return Math.max(e,t)},0);return Math.max(r,n)+a},a=e("Development of CO\xb2-emissions",[{min:0,max:this.props.data?t(this.props.highIncomeAverages?this.props.highIncomeAverages.averages.map(function(e){return e.emissionsAverage}):[],this.props.data.map(function(e){return e.emissions}),5e3):1e3,seriesName:"CO\xb2-emissions",axisTicks:{show:!0},axisBorder:{show:!0,color:"#662E9B"},labels:{style:{color:"#662E9B"}},title:{text:"CO\xb2-emissions (kt)",style:{color:"#662E9B"}},tooltip:{enabled:!0}}]),r=e("Development of Populations",[{min:0,max:this.props.data&&this.props.data.map(function(e){return e.population})?t(this.props.highIncomeAverages?this.props.highIncomeAverages.averages.map(function(e){return e.populationAverage}):[],this.props.data.map(function(e){return e.population}),1e6):1e3,seriesName:"Population",axisTicks:{show:!0},axisBorder:{show:!0,color:"#662E9B"},labels:{style:{color:"#662E9B"}},title:{text:"Population",style:{color:"#662E9B"}},tooltip:{enabled:!0}}]),o=e("Development of CO\xb2-emissions per Capita",[{seriesName:"CO\xb2-emissions Per Capita",min:0,max:this.props.data&&this.props.data.map(function(e){return e.perCapita})?t(this.props.highIncomeAverages?this.props.highIncomeAverages.averages.map(function(e){return 1e6*e.perCapitaAverage}):[],this.props.data.map(function(e){return 1e6*e.perCapita}),1e3):1e3,axisTicks:{show:!0},axisBorder:{show:!0,color:"#662E9B"},labels:{style:{color:"#662E9B"}},title:{text:"CO\xb2-emissions Per Capita (kg)",style:{color:"#662E9B"}},tooltip:{enabled:!0}}]),s=[{name:this.props.country?"".concat(this.props.country):"Searched country",type:"line",data:this.props.data&&this.props.data.map(function(e){return e.emissions})?this.props.data.filter(function(e){return null!==e.emissions}).map(function(e){return{x:e.year,y:e.emissions}}):[]},{name:"Average of countries with high income",type:"line",data:this.props.highIncomeAverages?this.props.highIncomeAverages.averages.filter(function(e){return e.year&&0!==e.emissionsAverage}).map(function(e){return{x:e.year,y:e.emissionsAverage}}):[]}],i=[{name:this.props.country?"".concat(this.props.country):"Searched country",type:"line",data:this.props.data&&this.props.data.map(function(e){return e.population})?this.props.data.filter(function(e){return null!==e.population}).map(function(e){return{x:e.year,y:e.population}}):[]},{name:"Average of countries with high income",type:"line",data:this.props.highIncomeAverages?this.props.highIncomeAverages.averages.filter(function(e){return e.year&&0!==e.populationAverage}).map(function(e){return{x:e.year,y:e.populationAverage}}):[]}],c=[{name:this.props.country?"".concat(this.props.country):"Searched country",type:"line",data:this.props.data&&this.props.data.map(function(e){return e.perCapita})?this.props.data.filter(function(e){return null!==e.perCapita}).map(function(e){return{x:e.year,y:1e6*e.perCapita}}):[]},{name:"Average of countries with high income",type:"line",data:this.props.highIncomeAverages?this.props.highIncomeAverages.averages.filter(function(e){return e.year&&e.perCapitaAverage&&0!==e.perCapitaAverage}).map(function(e){return{x:e.year,y:1e6*e.perCapitaAverage}}):[]}];return n.a.createElement("div",null,n.a.createElement("div",{className:"App"},n.a.createElement("div",{id:"country"},n.a.createElement("b",null,"Country: ",this.props.country)),n.a.createElement("div",{id:"emissions-chart",className:"chart"},n.a.createElement(H.a,{options:a,series:s,type:"line",width:"700"})),n.a.createElement("div",{id:"populations-chart"},n.a.createElement(H.a,{options:r,series:i,type:"line",width:"700"})),n.a.createElement("div",{id:"emissions-per-capita"},n.a.createElement(H.a,{options:o,series:c,type:"line",width:"700"}))))}}]),t}(r.Component),X=Object(i.b)(function(e){return{country:e.search.country,data:e.search.data,highIncomeAverages:e.search.highIncomeAverages}})(z),K=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e;return this.props.data?e=n.a.createElement(X,null):this.props.topEmitters&&(e=n.a.createElement(G.a,null,this.props.topEmitters.map(function(e){return n.a.createElement(L.a,{key:e},e)}))),n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("h2",null,"Results"),e))}}]),t}(r.Component),Y=Object(i.b)(function(e){return{data:e.search.data,topEmitters:e.search.topEmitters}})(K),W=a(103),J=a.n(W),F=a(104),q=a.n(F),Q=a(105),V=a.n(Q),Z=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t;return e=this.props.databaseError?this.props.databaseError:this.props.searchError?this.props.searchError:"in progress"===this.props.updatingDatabase?"Updating database...":"done"===this.props.updatingDatabase?"Database is now up to date!":void 0,t=this.props.databaseError||this.props.searchError?"notification-error":"notification-info",n.a.createElement("div",null,n.a.createElement(J.a,{open:void 0!==e},n.a.createElement(q.a,{classes:{root:t}},n.a.createElement(V.a,{classes:{root:"notification-text"}},e))))}}]),t}(n.a.Component),$=Object(i.b)(function(e){return{updatingDatabase:e.database.updatingDatabase,databaseError:e.database.error,searchError:e.search.error}})(Z),ee=a(106),te=a.n(ee),ae=a(107),re=a.n(ae),ne=a(28),oe=a.n(ne),se=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(te.a,{className:"info"},n.a.createElement(re.a,null,n.a.createElement(oe.a,{variant:"h2",component:"h3",color:"primary",gutterBottom:!0},"Welcome!"),n.a.createElement(oe.a,{paragraph:!0,color:"textPrimary",className:"info-text"},'With this app you can search for a country and see how its CO\xb2-emissions have developed during the years. This is done by typing the country\'s name to the search field on the right. To see how much the country has emitted per capita, check the "Include populations" check box. You can also compare these pieces of information to the average emissions of countries with high income. The results will be visualized in three charts: the first will show the emissions, the second the populations and the last one contains the emissions per capita.'),n.a.createElement(oe.a,{paragraph:!0,color:"textPrimary",className:"info-text"},"You can also see a list of countries with largest emissions per capita."),n.a.createElement(oe.a,{paragraph:!0,color:"textPrimary",className:"info-text"},'The database can be updated by clicking the "Update database" button. The system will then get the newest information from World Bank\'s API and update the database. This takes some time, so be patient.'))))}}]),t}(r.Component),ie={updatingDatabase:null,error:null},ce=function(e){return{type:"SET_UPDATING_STATE",updatingState:e}},pe=function(e){return{type:"SET_ERROR",error:e}},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ERROR":return Object(w.a)({},e,{error:t.error});case"SET_UPDATING_STATE":return Object(w.a)({},e,{updatingDatabase:t.updatingState});default:return e}},he=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=function(){var t=Object(u.a)(p.a.mark(function t(a){return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.props.updateDatabase();case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();return n.a.createElement("div",{className:"container"},n.a.createElement(se,null),n.a.createElement("div",{className:"rest"},n.a.createElement($,null),n.a.createElement("h1",null,"CO\xb2-emissions"),n.a.createElement(R,null),n.a.createElement(v.a,{className:"search-button",variant:"outlined",size:"large",onClick:t},"Update database"),n.a.createElement(Y,null)))}}]),t}(r.Component),le={updateDatabase:function(){return function(){var e=Object(u.a)(p.a.mark(function e(t){var a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(ce("in progress")),e.next=3,P.updateDatabase();case 3:a=e.sent,t("database updated"===a?ce("done"):pe("Couldn't connect to the server")),setTimeout(function(){t(ce(null)),t(pe(null))},4e3);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}},me=Object(i.b)(function(e){return{updatingDatabase:e.database.updatingDatabase}},le)(he),de=a(34),fe=a(108),Ee=Object(de.c)({search:I,database:ue}),ve=Object(de.d)(Ee,Object(de.a)(fe.a)),ge=(a(278),a(280),function(){s.a.render(n.a.createElement(i.a,{store:ve},n.a.createElement(me,null)),document.getElementById("root"))});ge(),ve.subscribe(ge)}},[[109,2,1]]]);
//# sourceMappingURL=main.add608b9.chunk.js.map
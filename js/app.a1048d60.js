(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],d=0,v=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&v.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(v.length)v.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/agenda/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},3747:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Navbar"),a("v-main",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-toolbar",{staticClass:"grey lighten-4",attrs:{elevation:"0"}},[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",[a("span",{staticClass:"font-weight-light light-blue--text text--lighten-3"},[t._v("WORSHIP")]),a("span",{staticClass:"light-blue--text text--darken-4"},[t._v("Agenda")])]),a("v-spacer"),a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{elevation:"0",text:"",color:"grey"}},n),[a("span",[t._v("menu")]),a("v-icon")],1)]}}])}),a("v-btn",{attrs:{text:"",color:"grey"}},[a("span",[t._v("sair")]),a("v-icon")],1)],1),a("v-navigation-drawer",{staticClass:"grey lighten-3",attrs:{app:"",temporary:"",absoluty:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",[a("v-list-item",[a("v-avatar",{attrs:{size:"128",rounded:"true"}},[a("v-img",{attrs:{src:"http://3.bp.blogspot.com/-eo-4mMmjtrY/U2RKG9eT6iI/AAAAAAAACuk/rQUfyuFKv9I/s1600/espinho+na+carne+de+paulo.jpg"}})],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title light-blue--text text--darken-4"},[t._v("Paulo")]),a("v-list-item-subtitle",{staticClass:"light-blue--text text--darken-4"},[t._v("paulo@12apostolos.com")])],1)],1),a("v-divider"),a("v-list-item-group",t._l(t.links,(function(e,n){return a("v-list-item",{key:n,attrs:{router:"",to:e.route}},[a("v-list-item-icon",[a("v-icon",{staticClass:"light-blue--text text--darken-4"},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"light-blue--text text--darken-4",domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1)],1)],1)},s=[],l={data:function(){return{drawer:!1,razaosocialbarra:"IGREJA AD TIMBO",links:[{icon:"mdi-view-dashboard",text:"Eventos",route:"/listaagenda"},{icon:"mdi-account",text:"Lista de Nomes",route:"/listafielagenda"},{icon:"mdi-account",text:"Lideranças",route:"/"}]}}},c=l,u=a("2877"),d=a("6544"),v=a.n(d),p=a("5bc1"),m=a("8212"),f=a("8336"),b=a("ce7e"),g=a("132d"),h=a("adda"),x=a("8860"),_=a("da13"),y=a("5d23"),V=a("1baa"),k=a("34c3"),w=a("e449"),C=a("f774"),j=a("2fa4"),A=a("71d9"),O=a("2a7f"),F=Object(u["a"])(c,i,s,!1,null,null,null),T=F.exports;v()(F,{VAppBarNavIcon:p["a"],VAvatar:m["a"],VBtn:f["a"],VDivider:b["a"],VIcon:g["a"],VImg:h["a"],VList:x["a"],VListItem:_["a"],VListItemContent:y["a"],VListItemGroup:V["a"],VListItemIcon:k["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"],VMenu:w["a"],VNavigationDrawer:C["a"],VSpacer:j["a"],VToolbar:A["a"],VToolbarTitle:O["a"]});var D={name:"App",components:{Navbar:T},data:function(){return{}}},I=D,S=a("7496"),L=a("a523"),P=a("f6c4"),E=Object(u["a"])(I,o,r,!1,null,null,null),M=E.exports;v()(E,{VApp:S["a"],VContainer:L["a"],VMain:P["a"]});var J=a("8c4f"),z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row")],1)},B=[],N={},$=N,R=a("0fd9"),Y=Object(u["a"])($,z,B,!1,null,null,null),G=Y.exports;v()(Y,{VRow:R["a"]});var H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"eventos"},[a("h1",{staticClass:"subtitle-1 light-blue--text text--darken-4"},[t._v("Eventos - Igreja Adventista do Timbó")]),a("v-container",{staticClass:"my-5"},[a("v-layout",{staticClass:"mb-3",attrs:{row:""}},[a("v-btn",{staticClass:"grey--text",attrs:{small:"",elevation:"0"},on:{click:function(e){return t.sortBy("title")}}},[a("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-folder")]),a("span",{staticClass:"caption text-lowercase grey--text"},[t._v("Por título")])],1),a("v-btn",{staticClass:"grey--text ml-4",attrs:{small:"",elevation:"0"},on:{click:function(e){return t.sortBy("person")}}},[a("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-account")]),a("span",{staticClass:"caption text-lowercase grey--text"},[t._v("Por liderança")])],1),a("v-spacer"),a("FormAgenda",{on:{projectAdded:function(e){t.snackbar=!0}}})],1),t._l(t.projects,(function(e,n){return a("v-card",{key:n,attrs:{flat:"",color:"#FFFFFF",tile:"",elevation:"0"}},[a("v-layout",{class:"pa-3 project "+e.status,attrs:{row:"",wrap:""}},[a("v-flex",[a("div",{staticClass:"caption grey--text"},[t._v("Titulo do evento")]),a("div",[t._v(t._s(e.title))])]),a("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Liderança")]),a("div",[t._v(t._s(e.person))])]),a("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Data do evento")]),a("div",[t._v(t._s(e.due))])]),a("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Hora do evento")]),a("div",[t._v(t._s(e.time))])]),a("v-flex",{attrs:{xs2:"",sm4:"",md2:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Status")]),a("div",[a("v-chip",{class:"v-chip--active white--text caption my-2",attrs:{small:"",color:""+e.status}},[t._v(t._s(e.status))])],1)])],1),a("v-divider")],1)}))],2)],1)},K=[],U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({staticClass:"light-blue darken-4",attrs:{small:"",elevation:"0"}},n),[a("span",{staticClass:"caption text-lowercase white--text"},[t._v("Novo Evento")])])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("h2",[t._v("Criar novo evento")])]),a("v-card-text",[a("v-form",{staticClass:"px-3"},[a("v-text-field",{attrs:{label:"Nome Evento",color:"light-blue darken-4"},model:{value:t.titulo,callback:function(e){t.titulo=e},expression:"titulo"}}),a("v-textarea",{attrs:{label:"Descrição",color:"light-blue darken-4"},model:{value:t.descricao,callback:function(e){t.descricao=e},expression:"descricao"}}),a("v-select",{attrs:{label:"Liderança",items:t.lideres,color:"light-blue darken-4",required:""},model:{value:t.lider,callback:function(e){t.lider=e},expression:"lider"}}),a("v-text-field",{attrs:{label:"Vagas disponíveis",color:"light-blue darken-4"},model:{value:t.vagasdisp,callback:function(e){t.vagasdisp=e},expression:"vagasdisp"}}),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-text-field",t._g({attrs:{value:t.computedDateFormatted,label:"Data do Evento",readonly:"",hint:"Formato em DD/MM/YYYY",color:"light-blue darken-4"}},n))]}}]),model:{value:t.menudata,callback:function(e){t.menudata=e},expression:"menudata"}},[a("v-date-picker",{attrs:{"no-title":"",locale:"pt-br"},on:{input:function(e){t.menudata=!1}},model:{value:t.dataevento,callback:function(e){t.dataevento=e},expression:"dataevento"}})],1)],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Hora do Evento",type:"time",color:"light-blue darken-4"},model:{value:t.horaevento,callback:function(e){t.horaevento=e},expression:"horaevento"}})],1)],1),a("v-spacer"),a("p"),a("v-btn",{attrs:{elevation:"0",color:"light-blue darken-4"},on:{click:function(e){return t.submit()}}},[a("span",{staticClass:"caption white--text"},[t._v("Salvar evento")])])],1)],1)],1)],1)},q=[],Q=(a("99af"),a("ac1f"),a("1276"),a("3835")),W={data:function(){return{dialog:!1,menudata:!1,titulo:"",descricao:"",lider:"",vagasdisp:"",dataevento:null,horaevento:null,lideres:["Jesus","Pedro","Tiago","Felipe","João","André","Mateus","Judas Tadeu","Bartolomeu"]}},computed:{computedDateFormatted:function(){return this.formatDate(this.dataevento)}},methods:{submit:function(){console.log(this.titulo,this.descricao,this.dataevento,this.computedDateFormatted),this.titulo="",this.descricao="",this.dialog=!1,this.dataevento=null,this.lider="",this.vagasdisp="",this.horaevento=null,this.$emit("projectAdded")},formatDate:function(t){if(!t)return null;var e=t.split("-"),a=Object(Q["a"])(e,3),n=a[0],o=a[1],r=a[2];return"".concat(r,"/").concat(o,"/").concat(n)}}},X=W,Z=a("b0af"),tt=a("99d9"),et=a("62ad"),at=a("2e4b"),nt=a("169a"),ot=a("4bd4"),rt=a("b974"),it=a("8654"),st=a("a844"),lt=Object(u["a"])(X,U,q,!1,null,null,null),ct=lt.exports;v()(lt,{VBtn:f["a"],VCard:Z["a"],VCardText:tt["a"],VCardTitle:tt["b"],VCol:et["a"],VDatePicker:at["a"],VDialog:nt["a"],VForm:ot["a"],VMenu:w["a"],VRow:R["a"],VSelect:rt["a"],VSpacer:j["a"],VTextField:it["a"],VTextarea:st["a"]});var ut,dt,vt={components:{FormAgenda:ct},data:function(){return{projects:[{title:"Eu sou o caminho",person:"Jesus",due:"1 Jan 2019",time:"18:30",status:"realizado",content:""},{title:"Dev full stack",person:"Jefferson",due:"13 Mar 2019",time:"20:30",status:"realizado",content:""},{title:"Oração forte",person:"Antonio",due:"25 Feb 2019",time:"16:00",status:"realizado",content:""},{title:"Vida em Cristo",person:"Mateus",due:"13 Feb 2019",time:"18:30",status:"realizado",content:""},{title:"Jejum de 10 dias",person:"Bartolomeu",due:"20 Dez 2019",time:"08:30",status:"cancelado",content:""},{title:"Igreja Santa do Timbó",person:"Paulo",due:"8 Jun 2020",time:"15:00",status:"realizado",content:""},{title:"Espírito de Luz",person:"Felipe",due:"28 Aug 2019",time:"21:00",status:"realizado",content:""},{title:"Na paz do senhor",person:"Tiago",due:"13 Jun 2020",time:"18:30",status:"aberto",content:""}]}},methods:{sortBy:function(t){this.projects.sort((function(e,a){return e[t]<a[t]?-1:1}))}}},pt=vt,mt=(a("7bfd"),a("cc20")),ft=a("0e8f"),bt=a("a722"),gt=Object(u["a"])(pt,H,K,!1,null,null,null),ht=gt.exports;v()(gt,{VBtn:f["a"],VCard:Z["a"],VChip:mt["a"],VContainer:L["a"],VDivider:b["a"],VFlex:ft["a"],VIcon:g["a"],VLayout:bt["a"],VSpacer:j["a"]});var xt,_t,yt={},Vt=Object(u["a"])(yt,ut,dt,!1,null,null,null),kt=Vt.exports,wt={},Ct=Object(u["a"])(wt,xt,_t,!1,null,null,null),jt=Ct.exports;n["a"].use(J["a"]);var At=[{path:"/",name:"Login",component:G},{path:"/listaagenda",name:"ListaAgenda",component:ht},{path:"/agenda",name:"Agenda",component:jt},{path:"/listafielagenda",name:"ListaFielAgenda",component:kt}],Ot=new J["a"]({mode:"history",base:"/agenda/",routes:At}),Ft=Ot,Tt=a("2f62");n["a"].use(Tt["a"]);var Dt=new Tt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),It=a("f309");n["a"].use(It["a"]);var St=new It["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:Ft,store:Dt,vuetify:St,render:function(t){return t(M)}}).$mount("#app")},"7bfd":function(t,e,a){"use strict";var n=a("3747"),o=a.n(n);o.a}});
//# sourceMappingURL=app.a1048d60.js.map
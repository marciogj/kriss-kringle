(function(e){function t(t){for(var a,o,s=t[0],l=t[1],c=t[2],d=0,v=[];d<s.length;d++)o=s[d],n[o]&&v.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(v.length)v.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],a=!0,s=1;s<i.length;s++){var l=i[s];0!==n[l]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=i[0]))}return e}var a={},n={app:0},r=[];function o(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=a,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(i,a,function(t){return e[t]}.bind(null,a));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var a=i("64a9"),n=i.n(a);n.a},3956:function(e,t,i){"use strict";var a=i("aad4"),n=i.n(a);n.a},4540:function(e,t){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getAllusers"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:55}};i.loc.source={body:"query {\n  getAllusers {\n        id\n        name\n    }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&t.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){a(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){a(e,t)}),e.definitions&&e.definitions.forEach(function(e){a(e,t)})}var n={};(function(){i.definitions.forEach(function(e){if(e.name){var t=new Set;a(e,t),n[e.name.value]=t}})})(),e.exports=i},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("097d");var a=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("nav",[i("router-link",{attrs:{to:"/"}},[e._v("Home")]),i("router-link",{attrs:{to:"/myboard"}},[e._v("My Board")]),i("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),i("router-view")],1)},r=[],o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hello"},[i("div",{staticClass:"holder"},[i("form",{on:{submit:function(t){return t.preventDefault(),e.addSkill(t)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.skill,expression:"skill"},{name:"validate",rawName:"v-validate",value:"min:5",expression:"'min:5'"}],attrs:{type:"text",placeholder:"Enter a skill you have...",name:"skill"},domProps:{value:e.skill},on:{input:function(t){t.target.composing||(e.skill=t.target.value)}}}),i("transition",{attrs:{name:"alert-in"}},[e.errors.has("skill")?i("p",{staticClass:"alert"},[e._v(e._s(e.errors.first("skill"))+" ")]):e._e()])],1),i("ul",e._l(e.skills,function(t,a){return i("li",{key:a},[e._v("\n        "+e._s(t.skill)+"\n        "),i("i",{staticClass:"fa fa-minus-circle",on:{click:function(t){e.remove(a)}}})])}),0)])])},s=[],l={name:"Skills",data:function(){return{skill:"",skills:[{skill:"Vue.js"},{skill:"Frontend Developer"}]}},methods:{addSkill:function(){var e=this;this.$validator.validateAll().then(function(t){t?(e.skills.push({skill:e.skill}),e.skill=""):console.log("Not valid")})},remove:function(e){this.skills.splice(e,1)}}},c=l,u=(i("3956"),i("2877")),d=Object(u["a"])(c,o,s,!1,null,"6086e10c",null);d.options.__file="Skills.vue";var v=d.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[e._m(0),a("ApolloQuery",{attrs:{query:i("4540")},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.result,n=i.loading,r=i.error,o=i.data;return[n?a("div",{staticClass:"loading apollo"},[e._v("Loading...")]):r?a("div",{staticClass:"error apollo"},[e._v("An error occured")]):o?a("div",{staticClass:"result apollo"},[e._v(e._s(o.getAllusers))]):a("div",{staticClass:"no-result apollo"},[e._v("No result :(")])]}}])})],1)},p=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-8"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-header"},[e._v("\n              Participantes\n          ")]),i("ul",{staticClass:"list-group list-group-flush"},[i("li",{staticClass:"list-group-item"},[e._v("Leão (Vini)")]),i("li",{staticClass:"list-group-item"},[e._v("Tigre (Larissa)")]),i("li",{staticClass:"list-group-item"},[e._v("Morcego (Márcio)")]),i("li",{staticClass:"list-group-item"},[e._v("Guepardo (Bruno)")])])]),i("div",{staticClass:"col-xs-12",staticStyle:{height:"50px"}})]),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"card bg-light mb-3",staticStyle:{"max-width":"18rem"}},[i("div",{staticClass:"card-header"},[e._v("Sobre você")]),i("div",{staticClass:"card-body"},[i("h5",{staticClass:"card-title"},[e._v("Morcego")]),i("p",{staticClass:"card-text"},[e._v("O morcego é um mamífero que voa e se alimenta de frutas ou sangue.")])])]),i("div",{staticClass:"card text-white bg-secondary mb-3",staticStyle:{"max-width":"18rem"}},[i("div",{staticClass:"card-header"},[e._v("Seu amigo...")]),i("div",{staticClass:"card-body"},[i("h5",{staticClass:"card-title"},[e._v("Leão | Vini")]),i("p",{staticClass:"card-text"},[e._v("O leão é um felino africano carnívoro.")])])])])])}],m={name:"MyBoard",data:function(){return{name:"Marcio",newMessage:""}}},_=m,h=Object(u["a"])(_,f,p,!1,null,null,null);h.options.__file="MyBoard.vue";var b=h.exports,g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"about"},[i("h1",[e._v("Kriss Kringle")]),i("p",[e._v("About kriss kringle or secret animal...")])])}],y=(i("7f7f"),{name:"About",data:function(){return{their_name:this.$route.params.name}}}),C=y,S=Object(u["a"])(C,g,k,!1,null,null,null);S.options.__file="About.vue";var O=S.exports,w={name:"app",components:{Skills:v,MyBoard:b,About:O}},E=w,x=(i("034f"),Object(u["a"])(E,n,r,!1,null,null,null));x.options.__file="App.vue";var A=x.exports,j=i("8c4f");a["a"].use(j["a"]);var P=new j["a"]({routes:[{path:"/",name:"skills",component:v},{path:"/myboard",name:"myboard",component:b},{path:"/about",name:"about",component:O}]}),N=(i("96cf"),i("3b8d"),i("cebc")),M=i("522d"),D=i("efe7");a["a"].use(M["a"]);var L="apollo-token",$=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_GRAPHQL_HTTP||"http://localhost:4000/graphql",V=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_FILES_ROOT||$.substr(0,$.indexOf("/graphql"));a["a"].prototype.$filesRoot=V;var q={httpEndpoint:$,wsEndpoint:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_GRAPHQL_WS||"ws://localhost:4000/graphql",tokenName:L,persisting:!1,websocketsOnly:!1,ssr:!1};function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(D["createApolloClient"])(Object(N["a"])({},q,e)),i=t.apolloClient,a=t.wsClient;i.wsClient=a;var n=new M["a"]({defaultClient:i,defaultOptions:{$query:{}},errorHandler:function(e){console.log("%cError","background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;",e.message)}});return n}var T=i("7bb1");a["a"].use(T["a"]),a["a"].config.productionTip=!1,new a["a"]({router:P,apolloProvider:B(),render:function(e){return e(A)}}).$mount("#app")},"64a9":function(e,t,i){},aad4:function(e,t,i){}});
//# sourceMappingURL=app.81f677a0.js.map
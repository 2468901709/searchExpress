(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"5f83":function(t,e,a){},"99af":function(t,e,a){"use strict";var n=a("23e7"),s=a("d039"),i=a("e8b5"),r=a("861d"),c=a("7b0b"),o=a("50c4"),u=a("8418"),l=a("65f0"),d=a("1dde"),f=a("b622"),v=a("2d00"),m=f("isConcatSpreadable"),p=9007199254740991,h="Maximum allowed index exceeded",b=v>=51||!s((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),C=d("concat"),w=function(t){if(!r(t))return!1;var e=t[m];return void 0!==e?!!e:i(t)},_=!b||!C;n({target:"Array",proto:!0,forced:_},{concat:function(t){var e,a,n,s,i,r=c(this),d=l(r,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?r:arguments[e],w(i)){if(s=o(i.length),f+s>p)throw TypeError(h);for(a=0;a<s;a++,f++)a in i&&u(d,f,i[a])}else{if(f>=p)throw TypeError(h);u(d,f++,i)}return d.length=f,d}})},f26d:function(t,e,a){"use strict";a("5f83")},f820:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",[a("div",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"text",attrs:{type:"text",placeholder:"请输入快递单号 "},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}),a("div",{staticClass:"close-icon",on:{click:function(e){t.value=""}}}),a("div",{staticClass:"search-icon",on:{click:t.search}})])]),a("div",{staticClass:"searchResult"},[t._m(0),t._l(t.data,(function(e,n){return a("div",{key:n,staticClass:"result-item"},[a("div",{staticClass:"time"},[t._v(t._s(e.time))]),a("div",{staticClass:"info"},[t._v(t._s(e.status))])])}))],2)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"res-title"},[a("div",{staticClass:"time"},[t._v("时间")]),a("div",{staticClass:"info"},[t._v("地点和跟踪进度")])])}],i=a("1da1"),r=(a("99af"),a("96cf"),a("bc3a")),c=a.n(r),o={name:"Home",data:function(){return{value:"",data:[]}},methods:{search:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n,s,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a="6029",n="https://qyexpress.market.alicloudapi.com/composite/queryexpress?mobile=".concat(a,"&number=").concat(t.value),s={headers:{Authorization:"APPCODE 1153fde779fa4eb69a59c0301d961062"}},e.next=5,c.a.get(n,s);case 5:i=e.sent,r=i.data.data.list,t.data=r,console.log(t.data);case 9:case"end":return e.stop()}}),e)})))()}}},u=o,l=(a("f26d"),a("2877")),d=Object(l["a"])(u,n,s,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=about.13af2170.js.map
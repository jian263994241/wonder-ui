(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{306:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n(6),r=n.n(a),i=n(0),o=n.n(i),u=n(10);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:15;return new Array(e).fill(!0).map((function(){return{label:"item",value:25+Math.round(50*Math.random())}}))}function l(e){var t=o.a.useState(c(20)),n=r()(t,2),a=n[0],i=n[1],l=o.a.useState(!1),f=r()(l,2),m=f[0],s=f[1],d=a.length<120;return o.a.createElement(u.v,{name:"ListView",navbar:!0,pageContent:!1},o.a.createElement(u.u,{data:a,renderItem:function e(t){var n=t.data,a=t.index;return o.a.createElement(u.t,{wrap:!0},a,": ",n.label," ",n.value,o.a.createElement(u.d,null,function r(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return new Array(e).fill(!0).map((function(){return t})).join(n)}(a%10,"默认itemSize, 实际会根据内容计算内容高度,")))},loadMoreItems:function e(){setTimeout((function(){if(!(a.length>=120)){var e=a.concat(c(20));i(e)}}),600)},hasNextPage:d,pullToRefresh:!0,refreshing:m,onRefresh:function e(){s(!0),setTimeout((function(){s(!1),i(c(20))}),600)},itemSize:44,pageSize:20,renderIndicator:function e(){return o.a.createElement(u.o,{alignContent:"center",justify:"center",style:{height:"100%"}},o.a.createElement(u.a,{text:"加载中..."}))},renderFooter:function e(){return o.a.createElement(u.o,{alignContent:"center",justify:"center",style:{height:"100%"}},o.a.createElement(u.C,{type:"caption"},"已经没有了"))}}))}}}]);
(this.webpackJsonplints1995=this.webpackJsonplints1995||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var i=n(17),a=n.n(i),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),s(e),c(e)}))},c=(n(27),n(28),n(1)),r=n(11),m=n(2),o=n(18),l=n(19),d=n(22),u=n(21),h=n(0),j=n.n(h),b=[{id:1,name:"\u9996\u9875",path:"/"},{id:3,name:"\u7b80\u5386",path:"/resume"},{id:2,name:"\u7b14\u8bb0",path:"http://note.youdao.com/s/AW2uaAEO"}],p=n(9),_=n.n(p),x=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).judgeCurrentActivePath=function(t){return e.props.location.pathname===t?_.a["item-active"]:null},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(c.jsx)("header",{className:_.a.header,children:Object(c.jsx)("ul",{className:_.a.items,children:b.map((function(t){return Object(c.jsx)("li",{className:_.a.item,children:t.path.includes("http")||t.path.includes("https")?Object(c.jsx)("a",{className:e.judgeCurrentActivePath(t.path),href:t.path,target:"_blank",rel:"noreferrer",children:t.name}):Object(c.jsx)(r.b,{className:[_.a.link,e.judgeCurrentActivePath(t.path)].join(" "),to:t.path,children:t.name})},t.id)}))})})}}]),n}(j.a.Component),O=Object(m.f)(x);var f=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(O,{}),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("h1",{children:"\u9996\u9875\u663e\u793a"})})]})},v=[{id:1,name:"\u9c9c\u6d3bGo-\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf",discription:"\u4e3a\u9c9c\u6d3bgo\u8ba2\u5976\u524d\u7aefapp\uff0c\u516c\u4f17\u53f7\uff0c\u5c0f\u7a0b\u5e8f\u63d0\u4f9b\u65e5\u5e38\u8fd0\u8425\u7ef4\u62a4\uff0c\u7ba1\u7406\u5de5\u4f5c\uff0c\u4ee5\u53ca\u4e3a\u5404\u5206\u5b50\u516c\u53f8\u63d0\u4f9b\u670d\u52a1\u3002",content:"1.\u53c2\u4e0e\u8ba2\u5355(\u5305\u62ec\u914d\u9001\u548c\u7ed3\u7b97)\uff0c\u5f81\u8ba2\uff0c\u8fd0\u8425\uff0c\u5976\u7ad9\u56f4\u680f\u6620\u5c04\u6a21\u5757\u9700\u6c42\u8ba8\u8bba\u548c\u9700\u6c42\u8bc4\u5ba1;<br/>\n    2.\u4f7f\u7528Vue.js,Nuxt.js\u642d\u5efa,\u4f7f\u7528ElementUI\u6784\u5efa\u7528\u6237\u754c\u9762\u5e76\u96c6\u6210Echarts\u548c\u9ad8\u5fb7\u5730\u56fe\u7ec4\u4ef6\u529f\u80fd;\n    3.\u5bf9\u9700\u8981UI\u7684\u9875\u9762\uff0c\u5bf9\u63a5UI\u5de5\u7a0b\u5e08\u5b8c\u6210\u8bbe\u8ba1\u8981\u6c42;<br/>\n    4.\u5bf9\u63a5\u540e\u7aef\u5f00\u53d1\u8fdb\u884cAPI\u8054\u8c03\u5de5\u4f5c\uff0c\u5e76\u81ea\u6d4b\u901a\u8fc7\u63d0\u6d4b;<br/>\n    5.\u53ca\u65f6\u5bf9\u6d4b\u8bd5\u5de5\u7a0b\u5e08\u63d0\u51fa\u7684bug\u548c\u4f18\u5316\u505a\u4fee\u6539;<br/>",summary:"\u7531\u4e8e\u7ba1\u7406\u540e\u53f0\u7cfb\u7edf\u5927\u90e8\u5206\u662f\u7edf\u4e00\u7684\u6240\u4ee5\u5bf9ElementUI\u8fdb\u884c\u4e86\u518d\u5c01\u88c5\uff08\u5305\u62ec\u8868\u683c\uff0c\u8868\u5355\uff0c\u4e0a\u4f20\u7b49\uff09;\n      \u4f18\u5316\u4f53\u9a8c\u5217\u8868\u8df3\u8f6c\u8be6\u60c5\u9875\uff0c\u5217\u8868\u72b6\u6001\u7f13\u5b58\uff0c\u4f7f\u4e4b\u53ef\u4ee5\u518d\u8fd4\u56de\u65f6\u4fdd\u7559\u4e4b\u524d\u7684\u5217\u8868\u64cd\u4f5c;\u5c01\u88c5\u9ad8\u5fb7\u7ec4\u4ef6\uff0c\u9879\u76ee\u5f00\u53d1\u4f7f\u7528\u66f4\u52a0\u65b9\u4fbf\u3002",startTime:"",endTime:"",images:[]},{id:2,name:"\u9c9c\u6d3bGo-\u5fae\u4fe1\u516c\u4f17\u53f7",discription:"",content:"",summary:"",startTime:"",endTime:"",images:[]},{id:3,name:"\u6709\u4fe1\u5c55\u4e1a-\u7ba1\u7406\u7cfb\u7edf",discription:"",content:"",summary:"",startTime:"",endTime:"",images:[]},{id:4,name:"\u6709\u4fe1\u67e5\u8be2-\u5fae\u4fe1\u516c\u4f17\u53f7",discription:"\u516c\u53f8\u4ece\u4e8bP2P\u5e73\u53f0\u670d\u52a1,\u6025\u9700\u4fe1\u8d37\u524d\u7f6e\u98ce\u63a7\u4e3a\u516c\u53f8\u6709\u4fe1\u94b1\u5305\u4fe1\u8d37\u5e73\u53f0\u63d0\u4f9b\u524d\u7f6e\u98ce\u63a7\u670d\u52a1\uff0c\u5bf9\u63a5\u5404\u65b9\u63d0\u4f9b\u7684\u903e\u671f\u67e5\u8be2\uff0c\u9ed1\u540d\u5355\u67e5\u8be2\u5b9e\u73b0\u591a\u529f\u80fd\u67e5\u8be2\uff0c\u63d0\u9ad8\u4fe1\u8d37\u5339\u914d\u5ea6\u6ee1\u8db3\u5404\u7aef\u7528\u6237\u9700\u6c42\u3002",content:"1.\u53c2\u4e0e\u9879\u76ee\u7684\u6574\u4f53\u8ba8\u8bba\uff0c\u9700\u6c42\u8bc4\u5ba1\u548c\u524d\u7aef\u8bbe\u8ba1;<br/>\n      2.\u72ec\u7acb\u5b8c\u6210\u516c\u4f17\u53f7\u5f00\u53d1\u548c\u5468\u8fed\u4ee3\u5de5\u4f5c;<br/>\n      3.\u4f7f\u7528Vue\u53ca\u5176\u5168\u5bb6\u6876\u8fdb\u884c\u5f00\u53d1\u5e76\u8fdb\u4e00\u6b65\u5c01\u88c5;<br/>\n      4.\u5bf9\u63a5UI\u8bbe\u8ba1\uff0c\u5b8c\u6210UI\u8981\u6c42;<br/>\n      5.\u5bf9\u63a5\u6d4b\u8bd5\uff0c\u81ea\u6d4b\u95ee\u9898\u53ca\u4fee\u590d\uff0c\u907f\u514d\u7ebf\u4e0a\u529f\u80fd\u5f02\u5e38;",summary:"\u4f7f\u7528Chrome\u6027\u80fd\u8c03\u8bd5\u5de5\u5177\u5206\u6790\u9875\u9762\u52a0\u8f7d\u901f\u5ea6\uff0c\u4f18\u5316\u9875\u9762\u54cd\u5e94\u901f\u5ea6\uff0c\u51cf\u5c0fVue-cli\u6253\u5305\u5927\u5c0f\uff0c\u4f7f\u9996\u9875\u52a0\u8f7d\u57281s\u4ee5\u5185\u3002",startTime:"2020-01-01",endTime:"2020-01-02",images:[]},{id:5,name:"\u563f\u5457APP(Hybrid App)-\u6d88\u8d39\u4ea7\u751f\u4ef7\u503c",discription:"\u5efa\u8bbeS2B2C\u751f\u6001\u7cfb\u7edf\uff0c\u4e3a\u54c1\u724c\u4f9b\u5e94\u5546\u63d0\u4f9b\u5e02\u573a\u6e20\u9053\uff0c\u4e3a\u5546\u6237\u63d0\u4f9b\u4e00\u4f53\u5316\u4f1a\u5458\u65b9\u6848\uff0c\u4e3a\u6d88\u8d39\u8005\u63d0\u4f9b\u6d88\u8d39\u670d\u52a1\u548c\u589e\u503c\u4f53\u9a8c\u3002",content:"",summary:"",startTime:"",endTime:"",images:[]},{id:6,name:"\u534e\u533b\u56fd\u9645-\u5728\u7ebf\u533b\u7597\u95ee\u8bca\u5e73\u53f0",discription:"\u5728\u7ebf\u95ee\u8bca\uff0c\u667a\u80fd\u8bca\u65ad\uff0c\u9884\u7ea6\u5404\u5927\u533b\u9662\u533b\u751f\u5c31\u8bca\u7684\u7efc\u5408\u6027\u5e73\u53f0\uff0c\u9879\u76ee\u5206\u4e3a\u533b\u751f\uff0c\u533b\u52a9\uff0c\u7528\u6237\u7aef\u4e09\u7aef\u3002",content:"1.\u4f7f\u7528Vue.js\u642d\u5efa\u9879\u76ee;<br/>\n     2.\u72ec\u7acb\u5b8c\u6210\u4e09\u7aefPC\u5e73\u53f0\u7684API\u5bf9\u63a5\uff0c\u96c6\u6210Echart\u56fe\u8868\u5e93\uff0c\u5bf9\u63a5\u7b2c\u4e09\u65b9\u5e73\u53f0IM\uff0c\u667a\u80fd\u95ee\u8bca\u5e73\u53f0\u7684\u5bf9\u63a5\u5e76\u5c01\u88c5;<br/>\n     3.\u8fdc\u7a0b\u5bf9\u63a5UI\u5de5\u7a0b\u5e08\uff0c\u5e76\u6309\u7167UI\u8981\u6c42\u5b9e\u73b0UI\u8bbe\u8ba1;<br/>\n     4.\u53ca\u65f6\u5904\u7406\u6d4b\u8bd5\u548c\u7528\u6237\u53cd\u9988\u95ee\u9898\uff0c\u6309\u65f6\u4fdd\u8d28\u4fdd\u91cf\u7684\u5b8c\u6210;",summary:"\u8be5\u9879\u76ee\u5f00\u53d1\u4eba\u5458\u51e0\u7ecf\u66f4\u6362\uff0c\u6700\u540e\u901a\u8fc7\u6211\u52a0\u5165\u9879\u76ee\u8d1f\u8d23PC\u5f00\u53d1\uff0c\u4fdd\u8d28\u4fdd\u91cf\u7684\u5b8c\u6210\u4e86\u9879\u76ee\u5e76\u4ea4\u4ed8\uff0c\n    \u901a\u8fc7\u534e\u533b\u9879\u76ee\uff0c\u589e\u5f3a\u4e86\u81ea\u8eab\u7684\u6c9f\u901a\u80fd\u529b\u548c\u534f\u8c03\u80fd\u529b\uff0c\u5bf9\u7b2c\u4e09\u65b9\u5f00\u653e\u5e73\u53f0\u7684\u7406\u89e3\u80fd\u529b\u52a0\u6df1\u3002\n    \u5bf9IM\u8bbe\u8ba1\u601d\u60f3\u6709\u4e86\u66f4\u6df1\u5165\u7684\u4e86\u89e3\uff0c\u5e2e\u52a9\u5176\u4ed6\u540c\u4e8b\u89e3\u51b3IM\u76f8\u5173\u95ee\u9898\uff0c\u5e2e\u52a9\u540c\u4e8b\u6392\u67e5\u89e3\u51b3\u4e86\u7f51\u7ad9\u8fd0\u884c\u65f6\u5185\u5b58\u6cc4\u9732\u95ee\u9898\u3002",startTime:"",endTime:"",images:[]}],g=n(7),I=n.n(g);var N=function(e){return Object(c.jsxs)("div",{className:I.a.items,children:[Object(c.jsxs)("h1",{className:I.a["item-title"],children:[Object(c.jsx)("i",{className:I.a["item-symbol"],children:"#"}),"\xa0",e.name]}),Object(c.jsx)("h2",{className:I.a["item-sub-title"],children:"\u9879\u76ee\u63cf\u8ff0\uff1a"}),Object(c.jsx)("p",{className:I.a["item-content"],children:e.discription}),Object(c.jsx)("h2",{className:I.a["item-sub-title"],children:"\u804c\u8d23\uff1a"}),Object(c.jsx)("div",{className:I.a["item-content"],dangerouslySetInnerHTML:{__html:e.content}}),Object(c.jsx)("h2",{className:I.a["item-sub-title"],children:"\u603b\u7ed3\uff1a"}),Object(c.jsx)("p",{className:I.a["item-content"],children:e.summary})]},e.id)};var y=[{path:"/",component:f},{path:"/resume",component:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(O,{}),Object(c.jsx)("div",{className:"container",children:v.map((function(e){return N(e)}))})]})}}],T=Object(c.jsx)(r.a,{children:Object(c.jsx)(m.c,{children:y.map((function(e,t){return Object(c.jsx)(m.a,{exact:!0,path:e.path,component:e.component},t)}))})});a.a.render(T,document.getElementById("root")),s()},7:function(e,t,n){e.exports={items:"resume_items__E13jP","item-title":"resume_item-title__m3iN5","item-sub-title":"resume_item-sub-title__1kPyB","item-content":"resume_item-content__1CFZS","item-symbol":"resume_item-symbol__SvEIS"}},9:function(e,t,n){e.exports={header:"Header_header__MbTxY",items:"Header_items__Sqxfz",item:"Header_item__20NYm",link:"Header_link__3idJx","item-active":"Header_item-active__2Uk2I"}}},[[35,1,2]]]);
//# sourceMappingURL=main.3cebdaf0.chunk.js.map
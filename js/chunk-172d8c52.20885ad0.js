(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-172d8c52"],{"0119":function(t,i,e){"use strict";e("877c")},1276:function(t,i,e){"use strict";var n=e("d784"),a=e("44e7"),s=e("825a"),c=e("1d80"),o=e("4840"),r=e("8aa5"),l=e("50c4"),u=e("14c3"),d=e("9263"),h=e("9f7f"),p=h.UNSUPPORTED_Y,g=[].push,f=Math.min,m=4294967295;n("split",2,(function(t,i,e){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var n=String(c(this)),s=void 0===e?m:e>>>0;if(0===s)return[];if(void 0===t)return[n];if(!a(t))return i.call(n,t,s);var o,r,l,u=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,f=new RegExp(t.source,h+"g");while(o=d.call(f,n)){if(r=f.lastIndex,r>p&&(u.push(n.slice(p,o.index)),o.length>1&&o.index<n.length&&g.apply(u,o.slice(1)),l=o[0].length,p=r,u.length>=s))break;f.lastIndex===o.index&&f.lastIndex++}return p===n.length?!l&&f.test("")||u.push(""):u.push(n.slice(p)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)}:i,[function(i,e){var a=c(this),s=void 0==i?void 0:i[t];return void 0!==s?s.call(i,a,e):n.call(String(a),i,e)},function(t,a){var c=e(n,t,this,a,n!==i);if(c.done)return c.value;var d=s(t),h=String(this),g=o(d,RegExp),v=d.unicode,H=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(p?"g":"y"),C=new g(p?"^(?:"+d.source+")":d,H),A=void 0===a?m:a>>>0;if(0===A)return[];if(0===h.length)return null===u(C,h)?[h]:[];var M=0,T=0,b=[];while(T<h.length){C.lastIndex=p?0:T;var y,x=u(C,p?h.slice(T):h);if(null===x||(y=f(l(C.lastIndex+(p?T:0)),h.length))===M)T=r(h,T,v);else{if(b.push(h.slice(M,T)),b.length===A)return b;for(var U=1;U<=x.length-1;U++)if(b.push(x[U]),b.length===A)return b;T=M=y}}return b.push(h.slice(M)),b}]}),p)},"44e7":function(t,i,e){var n=e("861d"),a=e("c6b6"),s=e("b622"),c=s("match");t.exports=function(t){var i;return n(t)&&(void 0!==(i=t[c])?!!i:"RegExp"==a(t))}},"52aa":function(t,i,e){},"877c":function(t,i,e){},bb66:function(t,i,e){"use strict";e("52aa")},cbdd:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"side-icons"},[e("div",{staticClass:"circle-icon",on:{click:t.toTop}},[e("i",{staticClass:"iconfont icon-fanhuidingbu"})])])},a=[],s={name:"SideIcons",data:function(){return{}},methods:{toTop:function(){var t=setInterval((function(){var i=document.documentElement.scrollTop||document.body.scrollTop,e=Math.floor(-i/5);document.documentElement.scrollTop=document.body.scrollTop=i+e,0===i&&clearInterval(t)}),30)}}},c=s,o=(e("0119"),e("2877")),r=Object(o["a"])(c,n,a,!1,null,"3bf24cb3",null);i["a"]=r.exports},cd6f:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"page"},[e("side-icons"),e("section",{staticClass:"section no-padding-bottom"},[t._m(0),e("el-row",{staticClass:"flex flex-wrap flex-stretch",attrs:{gutter:20}},t._l(t.teachingPageList,(function(i){return e("el-col",{key:i.id,staticClass:"margin-bottom-20px",attrs:{xs:24,sm:12,md:8}},[e("el-card",{attrs:{shadow:"hover"}},[e("p",{staticClass:"fs-20 bold"},[t._v(t._s(i.course))]),e("p",{staticClass:"margin-top-10px text"},[e("i",{staticClass:"el-icon-date"}),e("span",{staticClass:"margin-left-5px"},[t._v(t._s(i.time))])]),e("p",{staticClass:"margin-top-10px"},[e("i",{staticClass:"iconfont icon-dingwei"}),e("span",{staticClass:"margin-left-5px"},[t._v(t._s(i.school))]),i.with?e("span",[t._v(", "+t._s(i.with))]):t._e()])])],1)})),1),e("div",{staticClass:"pagination margin-top-20px"},[e("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":t.pageSize,total:t.total},on:{"current-change":t.pageChange}})],1)],1),e("section",{staticClass:"section"},[t._m(1),e("el-row",{staticClass:"flex flex-wrap flex-stretch",attrs:{gutter:20}},t._l(t.postdocList,(function(i){return e("el-col",{key:i.id,staticClass:"margin-bottom-20px",attrs:{xs:24,sm:12,md:8}},[e("el-card",{attrs:{shadow:"hover"}},[e("p",{staticClass:"fs-20 bold"},[t._v(t._s(i.name))]),e("p",{staticClass:"margin-top-10px text"},[e("i",{staticClass:"el-icon-date"}),e("span",{staticClass:"margin-left-5px"},[t._v(t._s(i.duration))])]),i.current?e("p",{staticClass:"margin-top-10px"},[t._v(t._s(i.current))]):t._e()])],1)})),1)],1)],1)},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"text-center"},[e("h3",{staticClass:"fs-36 text-decoration section-title"},[t._v("Teaching")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"text-center"},[e("h3",{staticClass:"fs-36 text-decoration section-title"},[t._v("Postdocs")])])}],s=(e("d81d"),e("ac1f"),e("1276"),e("fb6a"),e("cbdd")),c={teaching:["2008-2009,Math 2110: Differential Equations,HKBU","2008-2009,Math 3680: Functional Analysis,HKBU","2009-2010,Math 0022: Foundation of Mathematics I (Science),HKBU,with Dr. Qiao Zhonghua","2009-2010,Math 3680: Functional Analysis,HKBU","2010-2011,MATH 2150: Mathematical Analysis III,HKBU","2010-2011,MATH 3760: Abstract Algebra,HKBU","2011-2012,MATH 2150: Mathematical Analysis III,HKBU","2012-2013,MATH 2150: Mathematical Analysis III,HKBU","2012-2013,SCI 3530: Numerical Methods for PDE,HKBU,with Prof. Tang Tao","2012-2013,MATH 3620: Numerical Methods II,HKBU","2013-2014,SCI 3530: Numerical Methods for PDE,HKBU","2013-2014,MATH 3680: Functional Analysis,HKBU","2013-2014,MFFM7010: Topics in Probability Theory and Stochastic Processes,HKBU","2014-2015,SCI 3530/MATH3616: Numerical Methods for PDE,HKBU","2014-2015,MATH 3407: Advanced Linear Algebra,HKBU","2015-2016,MATH1006: Advanced Calculus I,HKBU,","2015-2016,MATH1006: Advanced Calculus I,HKBU","2015-2016,MATH3615/SCI3710: Introduction to Imaging Science,HKBU","2016-2017,MATH1006: Advanced Calculus I,HKBU","2016-2017,MATH2217: Advanced Calculus II,HKBU","2016-2017,MATH1006: Advanced Calculus I,HKBU ","2017-2018,MATH3230B: Numerical Analysis,CUHK","2017-2018,MATH4230: Optimization Theory,CUHK","2018-2019,MMAT5340: Probability and Stochastic Analysis,CUHK","2018-2019,MATH3320: Foundation of Data Analytics,CUHK","2018-2019,MATH4230: Optimization Theory,CUHK","2019-2020,MATH3320: Foundation of Data Analytics,CUHK","2019-2020,MATH6211: Topics in Applied Mathematics I,CUHK","2019-2020,MATH4230: Optimization Theory,CUHK","2020-2021,MATH3320: Foundation of Data Analytics,CUHK","2020-2021,MATH6211: Topics in Applied Mathematics I,CUHK","2020-2021,MATH4230: Optimization Theory,CUHK"],postdocs:[{id:1,name:"Dr. Ruyi Feng",duration:"2021-"},{id:2,name:"Dr. Yingying Fang",duration:"2021-"},{id:3,name:"Dr. Qianting Ma",duration:"2020-"},{id:4,name:"Dr. Haiyong Liao",duration:"2010",current:"Associate Professor, Department of Computer Science, Shantou University, China"},{id:5,name:"Dr. Huibin Chang",duration:"2012-2013",current:"Associate Professor, School of Mathematical Sciences, Tianjin Normal University, China"},{id:6,name:"Dr. Xu Guo",duration:"2018-2019",current:"Associate Professor, Shandong University, China"},{id:7,name:"Dr. Hongfei Yang",duration:"2018-",current:"co-supervised with Prof. Raymond Chan"}],postgraduate:[{id:1,name:""}]},o={components:{SideIcons:s["a"]},data:function(){return{page:1,pageSize:9,teachingPageList:[]}},computed:{total:function(){return this.teachingList.length},teachingList:function(){return c.teaching.map((function(t,i){var e=t.split(",");return{id:i,time:e[0],course:e[1],school:e[2],with:e[3]||""}}))},postdocList:function(){return c.postdocs}},created:function(){this.teachingPageList=this.teachingList.slice(0,this.pageSize)},methods:{pageChange:function(t){this.page=t,this.teachingPageList=this.teachingList.slice((t-1)*this.pageSize,t*this.pageSize)}}},r=o,l=(e("bb66"),e("2877")),u=Object(l["a"])(r,n,a,!1,null,"5c58ac2c",null);i["default"]=u.exports},d81d:function(t,i,e){"use strict";var n=e("23e7"),a=e("b727").map,s=e("1dde"),c=s("map");n({target:"Array",proto:!0,forced:!c},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},fb6a:function(t,i,e){"use strict";var n=e("23e7"),a=e("861d"),s=e("e8b5"),c=e("23cb"),o=e("50c4"),r=e("fc6a"),l=e("8418"),u=e("b622"),d=e("1dde"),h=d("slice"),p=u("species"),g=[].slice,f=Math.max;n({target:"Array",proto:!0,forced:!h},{slice:function(t,i){var e,n,u,d=r(this),h=o(d.length),m=c(t,h),v=c(void 0===i?h:i,h);if(s(d)&&(e=d.constructor,"function"!=typeof e||e!==Array&&!s(e.prototype)?a(e)&&(e=e[p],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return g.call(d,m,v);for(n=new(void 0===e?Array:e)(f(v-m,0)),u=0;m<v;m++,u++)m in d&&l(n,u,d[m]);return n.length=u,n}})}}]);
//# sourceMappingURL=chunk-172d8c52.20885ad0.js.map
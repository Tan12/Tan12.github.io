(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dd6e52c"],{"0119":function(e,n,i){"use strict";i("877c")},1276:function(e,n,i){"use strict";var a=i("d784"),t=i("44e7"),o=i("825a"),r=i("1d80"),s=i("4840"),c=i("8aa5"),l=i("50c4"),g=i("14c3"),m=i("9263"),p=i("9f7f"),d=p.UNSUPPORTED_Y,h=[].push,u=Math.min,v=4294967295;a("split",2,(function(e,n,i){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,i){var a=String(r(this)),o=void 0===i?v:i>>>0;if(0===o)return[];if(void 0===e)return[a];if(!t(e))return n.call(a,e,o);var s,c,l,g=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,u=new RegExp(e.source,p+"g");while(s=m.call(u,a)){if(c=u.lastIndex,c>d&&(g.push(a.slice(d,s.index)),s.length>1&&s.index<a.length&&h.apply(g,s.slice(1)),l=s[0].length,d=c,g.length>=o))break;u.lastIndex===s.index&&u.lastIndex++}return d===a.length?!l&&u.test("")||g.push(""):g.push(a.slice(d)),g.length>o?g.slice(0,o):g}:"0".split(void 0,0).length?function(e,i){return void 0===e&&0===i?[]:n.call(this,e,i)}:n,[function(n,i){var t=r(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,t,i):a.call(String(t),n,i)},function(e,t){var r=i(a,e,this,t,a!==n);if(r.done)return r.value;var m=o(e),p=String(this),h=s(m,RegExp),f=m.unicode,I=(m.ignoreCase?"i":"")+(m.multiline?"m":"")+(m.unicode?"u":"")+(d?"g":"y"),C=new h(d?"^(?:"+m.source+")":m,I),y=void 0===t?v:t>>>0;if(0===y)return[];if(0===p.length)return null===g(C,p)?[p]:[];var S=0,M=0,k=[];while(M<p.length){C.lastIndex=d?0:M;var A,b=g(C,d?p.slice(M):p);if(null===b||(A=u(l(C.lastIndex+(d?M:0)),p.length))===S)M=c(p,M,f);else{if(k.push(p.slice(S,M)),k.length===y)return k;for(var x=1;x<=b.length-1;x++)if(k.push(b[x]),k.length===y)return k;M=S=A}}return k.push(p.slice(S)),k}]}),d)},"44e7":function(e,n,i){var a=i("861d"),t=i("c6b6"),o=i("b622"),r=o("match");e.exports=function(e){var n;return a(e)&&(void 0!==(n=e[r])?!!n:"RegExp"==t(e))}},"877c":function(e,n,i){},a891:function(e,n,i){"use strict";i("c5e1")},c5e1:function(e,n,i){},cbdd:function(e,n,i){"use strict";var a=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"side-icons"},[i("div",{staticClass:"circle-icon",on:{click:e.toTop}},[i("i",{staticClass:"iconfont icon-fanhuidingbu"})])])},t=[],o={name:"SideIcons",data:function(){return{}},methods:{toTop:function(){var e=setInterval((function(){var n=document.documentElement.scrollTop||document.body.scrollTop,i=Math.floor(-n/5);document.documentElement.scrollTop=document.body.scrollTop=n+i,0===n&&clearInterval(e)}),30)}}},r=o,s=(i("0119"),i("2877")),c=Object(s["a"])(r,a,t,!1,null,"3bf24cb3",null);n["a"]=c.exports},d81d:function(e,n,i){"use strict";var a=i("23e7"),t=i("b727").map,o=i("1dde"),r=o("map");a({target:"Array",proto:!0,forced:!r},{map:function(e){return t(this,e,arguments.length>1?arguments[1]:void 0)}})},f26c:function(e,n,i){"use strict";i.r(n);var a=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"page"},[i("side-icons"),i("section",{staticClass:"section"},[i("el-tabs",{attrs:{"tab-position":"left"},model:{value:e.activeName,callback:function(n){e.activeName=n},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"Oral Presentation",name:"first"}},[i("div",{staticClass:"text-center"},[i("h3",{staticClass:"fs-36 text-decoration section-title"},[e._v("Oral Presentation")])]),i("div",{staticClass:"list"},[e._l(e.oralPageList,(function(n){return i("div",{key:n.id,staticClass:"item"},[i("p",{staticClass:"title"},[e._v(e._s(n.title))]),i("p",{staticClass:"text"},[i("i",{staticClass:"iconfont icon-geren"}),i("span",{staticClass:"margin-right-20px"},[e._v(e._s(n.role))]),i("i",{staticClass:"el-icon-date"}),i("span",{staticClass:"margin-right-20px"},[e._v(e._s(n.time))]),i("i",{staticClass:"iconfont icon-dingwei"}),i("span",[e._v(e._s(n.location))])])])})),i("div",{staticClass:"text-right margin-top-20px"},[i("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":e.pageSize,total:e.total},on:{"current-change":e.pageChange}})],1)],2)]),i("el-tab-pane",{attrs:{label:"Professional Activities",name:"second"}},[i("div",{staticClass:"text-center"},[i("h3",{staticClass:"fs-36 text-decoration section-title"},[e._v("Professional Activities")])]),i("div",{staticClass:"list"},[i("el-divider",{attrs:{"content-position":"left"}},[i("h4",{staticClass:"fs-18 list-title"},[e._v("Reviewer for Grants")])]),i("ol",{staticClass:"sub-list text-normal"},e._l(e.grantsList,(function(n){return i("li",{key:n},[e._v(e._s(n))])})),0)],1),i("div",{staticClass:"list"},[i("el-divider",{attrs:{"content-position":"left"}},[i("h4",{staticClass:"fs-18 list-title"},[e._v("Examiner of Ph.D. dissertation")])]),i("ol",{staticClass:"sub-list text-normal"},e._l(e.examinerList,(function(n){return i("li",{key:n},[e._v(e._s(n))])})),0)],1),i("div",{staticClass:"list"},[i("el-divider",{attrs:{"content-position":"left"}},[i("h4",{staticClass:"fs-18 list-title"},[e._v("Reviewer for Journals")])]),i("div",{staticClass:"flex sub-list text-normal"},[i("ol",{staticClass:"flex-1 padding-right-30px"},e._l(e.reviwerList.slice(0,20),(function(n){return i("li",{key:n},[e._v(e._s(n))])})),0),i("ol",{staticClass:"flex-1",attrs:{start:"21"}},e._l(e.reviwerList.slice(20),(function(n){return i("li",{key:n},[e._v(e._s(n))])})),0)])],1)]),i("el-tab-pane",{attrs:{label:"Conference and Workshop Organizer",name:"third"}},[i("div",{staticClass:"text-center"},[i("h3",{staticClass:"fs-36 text-decoration section-title"},[e._v("Conference and Workshop Organizer")])]),i("div",{staticClass:"list"},e._l(e.organizerList,(function(n){return i("div",{key:n.title,staticClass:"item"},[i("p",{staticClass:"title"},[e._v(e._s(n.title))]),i("p",{staticClass:"margin-top-20px text"},[i("i",{staticClass:"iconfont icon-geren"}),i("span",{staticClass:"margin-right-20px",domProps:{innerHTML:e._s(n.role)}}),i("i",{staticClass:"el-icon-date"}),i("span",{staticClass:"margin-right-20px",domProps:{innerHTML:e._s(n.time)}}),i("i",{staticClass:"iconfont icon-dingwei"}),i("span",{domProps:{innerHTML:e._s(n.location)}})])])})),0)])],1)],1)],1)},t=[],o=(i("d81d"),i("ac1f"),i("1276"),i("5319"),i("fb6a"),i("cbdd")),r={oral:['Invited speaker, "Statistical approach for dictionary learning", Workshop: Modélisation Statistique des Images, Luminy, France, May 5-9, 2008.','Invited speaker, "On the Matching Pursuit Shrinkage Algorithm", Workshop on Image Processing, Hong Kong Baptist University, Hong Kong, November 18, 2008.','Invited speaker, "Recent developments on sparse representation", The Third International Conference on Scientific Computing and Partial Differential Equations, Hong Kong, December 8-12, 2008.','Invited speaker, "On sparse representation", IIESMARS, Wuhan University, Wuhan, April 5-6, 2009.','Invited speaker, "Dictionary and sparse representation", Dept. of Mathematics, Shanghai University/East China Normal University, Shanghai, June 26, 2009.','Invited speaker, "Discussion on compressive sensing", Workshop on Mathematical and Computational Imaging, CMIV, Hong Kong Baptist University, Hong Kong, July 10, 2009.','Invited speaker, "Recent Developments on Information Hiding", ICM Day, Dept. of Mathematics, Hong Kong Baptist University, Hong Kong, July 30, 2009.','Invited speaker, "Linear Convergence Method for a Non-convex Variational Model", SIAM Conference on Imaging Science, Chicago, USA, April 12-14, 2010.','Invited speaker, "Poisson noise removal", Research workshop: Statistical Models for Images, Luminy, France, May 17-21, 2010.','Invited speaker, "Poisson Noise Removal via Learned Dictionary", VIISA: Workshop on Medical Imaging, The Chinese University of Hong Kong, Hong Kong, August 31, 2010.','Invited speaker, "Gaussian-impulse Noise Removal via l1-l0 Minimization", Workshop on Imaging Sciences, Hong Kong Baptist University, Hong Kong, April 30, 2011.','Invited speaker, "Variational approach for Gaussian-impulse Noise Removal", Semaine conjointe GdR MOA et GdR MSPC: Optimisation et traitement des images, La Londe les Maures (Var), France, June 8, 2011.','Invited speaker, "Dictionary Learning for Gaussian-Impulse Noise Removal", Seminar, The Chinese University of Hong Kong, Hong Kong, November 15, 2011.','Invited session speakers, "Sparsity-driven Multiplicative Noise Removal",International Conference on Scientific Computing (in honor of Prof. Tony F. Chan at his 60th birthday), The Chinese University of Hong Kong, Hong Kong, January 4-7, 2012.','Invited speaker, "Multiplicative Noise Removal", Mini-Workshop on Scientific Computing, The University of Macau, Macau, July 25-26, 2012.','Invited speaker, "A Convex Variational Model for Restoring Blurred Images with Multiplicative Noise", The International Workshop on Scientific Computing for Young Chinese Mathematicians, Hong Kong, March 15-17, 2013.','Invited speaker, "Non-Convex Models in Image Restoration and Segmentation", Colloquia & Seminars, Academy of Mathematics and Systems Science, Chinese Academy of Science, Beijing, China, May 27, 2013.','Special session speaker, "Non-Convex Models in Image Restoration and Segmentation", The Second International Conference on Interdisciplinary Applied and Computational Mathematics, Hangzhou, China, June 19-22, 2013.','Invited speaker, "Non-Convex Models in Image Restoration and Segmentation", HK-Berlin Half-Day Numerical Analysis, Hong Kong, September 2, 2013.','Invited speaker, "Non-Convex and Convex Models in Image Recovery and Segmentation", Departmental Colloquia, City University of Hong Kong, April 15, 2014.','Invited speaker, "Restoration of Images Corrupted by Multiplicative Noise", SIAM Conference on Imaging Science, Hong Kong, May 12-14, 2014.','Invited speaker, "Total Variation Dictionary Model and Dictionary Learning for Image Restoration", Scientific Computing Seminar, Technical University of Denmark, Denmark, June 25, 2014.','Invited speaker, "Total Variation Dictionary Model and Dictionary Learning for Image Recovery", Seminar, ESIEE, Paris, France, July 2, 2014.','Invited speaker, "Total Variation Dictionary Model and Dictionary Learning for Image Restoration", CMIV Workshop on Imaging Sciences, Hong Kong Baptist University, Hong Kong, August 25, 2014.','Invited speaker, "Total Variation Dictionary Model and Dictionary Learning for Image Recovery", Shanghai Workshop on Numerical Algebra, Imaging and Optimization, Shanghai Jiaotong University, Shanghai, China, December 13-14, 2014.','Invited speaker, "Convex Variational Model for Restoring Blurred Images with Rician Noise", Joint Fudan-HKBU Workshop on Data Science, Hong Kong Baptist University, Hong Kong, May 11-13, 2015.','Invited speaker, "A Two-stage Image Segmentation Model for Multi-channel Images", The International Conference on Inverse Problems, Imaging, and Applications, Zhejiang University, Hangzhou, China, August 6-9, 2015.','Invited speaker, "Convex Variational Model for Restoring Blurred Images with Rician Noise", The International Congress on Industrial and Applied Mathematics (ICIAM), Beijing, China, August 10-14, 2015.','Invited speaker, "Recent Progress in Image Recovery (dictionary, low rank)", The International Workshop on Mathematical Image Processing, Nankai University, Tianjin, China, August 14-16, 2015.','Invited speaker, "Recent Progress in Image Recovery (dictionary, low rank)", Joint Fudan-HKBU Workshop on Data Science, Fudan University, Shanghai, China, May 4-7, 2016.','Invited speaker, "Rician Noise Removal", International Workshop on Optimization and its Application, Shanghai University of Finance and Economics, Shanghai, China, May 9, 2016.','Invited speaker, "Two-stage Methods for Image Segmentation", International Conference on Image Processing: Theory, Method and Applications, Shanghai University, Shanghai, China, May 13-16, 2016.','Invited speaker, "Rician Noise Removal", Seminar, Central South University, Changsha, China, June 13, 2016.','Invited speaker, "A Universal Variational Framework for Sparsity Based Image Inpainting", SIAM Conference on Imaging Science, Albuquerque, USA, May 23-26, 2016.','Plenary speaker, "Image Recovery and Segmentation: Variational approach and Sparsity", International Conference on Image Processing, Computer Vision and Machine Learning based on Optimization and PDEs, Bergen, Norway, August 29-September 1, 2016.','Invited speaker, "Image Recovery and Segmentation: Variational approach and Sparsity", The Institute of Applied Physics and Computational Mathematics (IAPCM), Beijing, China, December 9, 2016.','Plenary speaker, "Convex and non-convex optimization in image recovery and segmentation", Workshop on Frame Theory and Sparse Representation for Complex Data, National University of Singapore, Singapore, May 29-June 2, 2017.','Invited speaker, "Image Recovery: the Never Ending Story", Workshop on Optimization in Scientific Computing, The Chinese University of Hong Kong, Hong Kong, June 21-23, 2017.','Invited speaker, "Convex and Non-Convex Optimization in Image Recovery and Segmentation", Seminar at the East China Normal University, Shanghai, China, December 21, 2017.','Invited speaker, "Convex and Non-Convex Optimization in Image Recovery and Segmentation", Symposium on Models, Theories, and Algorithms of Image Processing, Nanjing University of Posts and Telecommunications, Nanjing, China, April 13-15, 2018.','Invited speaker, "Convex Blind Image Deconvolution with Inverse Filtering", International Workshop On Image Processing and Inverse Problems, Beijing, China, April 21-24, 2018.','Invited speaker, "Convex Blind Image Deconvolution with Inverse Filtering", SIAM Conference on Imaging Science, Bologna, Italy, June 5-8, 2018.','Invited speaker, "Image Recovery: the Never Ending Story", Tian-Yuan Workshop on Mathematical Theory and Methods in Image Processing, Hunan Normal University, Changsha, China, April 26-29, 2018.','Invited speaker, "Medium imaging and image processing", CAM-ICCM2018, Nanjing China, December 10-14 2018.','Invited speaker, "Image Recovery: from Classical Methods to Deep Learning", International Workshop on Scientific Computing in Tianjin, Tianjin Normal University, Tianjin, China, July 4-7, 2019.','Invited speaker, "Convex and Non-convex Optimization in Image Recovery and Segmentation", Efficient Operator Splitting Techniques for Complex System and Large Scale Data Analysis, Sanya, China, January 14-18, 2019.','Invited speaker, "Convex and Non-convex Optimization in Image Recovery and Segmentation", Forum of Mathematics Image Processing Based on the Invese Problem, Henan Uinversity, Kaifeng, China, March 29-April 2, 2019.','Invited speaker, "Image Recovery: from Classical Approaches to Deep Learning", Workshop on Recent Developments on Mathematical/Statistical approaches in DAta Science (MSDAS), Dallas, USA, May 31-June 2, 2019.','Invited speaker, "Image Recovery: from Classical Approaches to Deep Learning", Colloquium, Tsinghua University, Beijing, China, November 21, 2019.','Invited speaker, "Image Smoothing via Gradient Sparsity and Surface Area Minimization", 2019 Workshop on Image Processing: Technique and Theory, The East China Normal University, Shanghai, China, November 30-December 1, 2019.','Invited speaker, "Image Recovery: from Classical Approaches to Deep Learning", Workshop on Computational and Applied Mathematics at the Mathematics, Center of BNU-UIC, Zhuhai, China, December 14-17, 2019.','Invited Speaker, "The Fixed Trust Region Method for Image Recovery", Online Seminar Series on Mathematics in Machine Learning and Imaging Science, Shenzhen University, August 9, 2020.','Invited Speaker, "The Artificial Trust Region Method for Image Recovery", Workshop on Image Processing: Theory, Method and Application, Tianjin University, Tianjin, September 19, 2020.','Invited Speaker, "The Fixed Trust Region Method for Image Recovery", Online Seminar, Shanghai University, October 9, 2020.'],pro:{grants:["National Natural Science Foundation of China, since 2014","Chinese Medicine and Science Panel of Faculty Research Grant, HKBU, since 2010","Research Development Fund, Xi’an Jiaotong-Liverpool University, China, 2013"],examiner:["Department of Mathematics, Hong Kong Baptist University, 2009, 2011, 2012, 2013, 2015, 2016, 2017","Department of Mathematics, The Chinese University of Hong Kong, 2018, 2019, 2020","Department of Applied Mathematics, The Hong Kong Polytechnic University (PolyU), 2018, 2019","Department of Mathematics, Hong Kong University of Science and Technology, 2018, 2020"],reviwer:["IEEE Transactions on Image Processing","IEEE Signal Processing Letters","IEEE Access","IEEE Transactions on Multimedia","IEEE Transactions on Industrial Informatics","IEEE Transactions on Circuits and Systems for Video Technology","Optics Express","SIAM Scientific Computing","SIAM Journal on Imaging Science","SIAM Review","Communications in Computational Physics","Computational and Mathematical Methods","Computers and Mathematics with Applications","Computers in Biology and Medicine","Computer Methods in Biomechanics and Biomedical Engineering: Imaging & Visualization","Computers and Electrical Engineering","Journal of Scientific Computing","Journal of Systems and Software","Journal of Electronic Imaging","Journal of Computational Mathematics","Signal, Image and Video Processing","Signal Processing","Signal Processing: Image Communication","International Journal of Computer Mathematics","Journal of Mathematical Imaging and Vision","Journal of Visual Communication and Image Representation","East Asia Journal on Applied Mathematics","Applicable Analysis","Applied Mathematics and Computation","Advances in Applied Mathematics and Mechanics","Numerical Algorithms","Mathematical Problems in Engineering","Multidimensional Systems & Signal Process","Applied and Computational Mathematics","Inverse Problems and Imaging","Inverse Problems in Science & Engineering","Numerical Linear Algebra with Applications","Taiwanese Journal of Mathematics","IET Image Processing","Journal of Infection","Applied and Computational Harmonic Analysis"]},organizer:["Session Chair, International Conference on Preconditioning Techniques for Scientific and Industrial Applications, Hong Kong, August 24-26, 2009","Chair, Workshop on Computational Imaging Science, Hong Kong, September 17, 2009","Session Chair, IEEE International Conference on Image Processing, Hong Kong, September 26-29, 2010","Technical Committee Member, European Workshop on Visual Information Processing, Paris, July 4-6, 2011","Chair, Summer Workshop on Imaging Sciences, Hong Kong Baptist University, Hong Kong, July 26, 2011","Member of Organizing Committee, International Conference on Imaging Science 2012 (in honor of Professor Stanley Osher at his 70th birthday), Hong Kong, December 12-14, 2012","Member of Organizing Committee, The 8th International Conference on Computational Physics (ICCP8), Hong Kong, January 7-11, 2013","Member of Local Organizing Committee, SIAM Conference on Imaging Science (SIAM-IS14), Hong Kong, May 12-14, 2014","Member of Organizing Committee, International Conference on Scientific Computing, Hong Kong, December 5-8, 2018","Member of Organizing Committee, The 26th International Domain Decomposition Conference, Hong Kong, December 2-6, 2019"]},s={components:{SideIcons:o["a"]},data:function(){return{page:1,pageSize:9,oralPageList:[],activeName:"first"}},computed:{total:function(){return this.oralList.length},oralList:function(){var e=r.oral.map((function(e,n){var i=e.split(",");return{id:n,role:i[0],title:i[1].replace(/"/g,""),location:i[2]+","+i[3],time:i[4]+","+i[5]}}));return e},grantsList:function(){return r.pro.grants},examinerList:function(){return r.pro.examiner},reviwerList:function(){return r.pro.reviwer},organizerList:function(){var e=r.organizer.map((function(e){var n=e.split(",");return{role:n[0],title:n[1].replace(/"/g,""),location:n[2],time:n[3]}}));return e}},created:function(){this.oralPageList=this.oralList.slice(0,this.pageSize)},methods:{pageChange:function(e){this.page=e,this.oralPageList=this.oralList.slice((e-1)*this.pageSize,e*this.pageSize)}}},c=s,l=(i("a891"),i("2877")),g=Object(l["a"])(c,a,t,!1,null,"0cfff6ea",null);n["default"]=g.exports},fb6a:function(e,n,i){"use strict";var a=i("23e7"),t=i("861d"),o=i("e8b5"),r=i("23cb"),s=i("50c4"),c=i("fc6a"),l=i("8418"),g=i("b622"),m=i("1dde"),p=m("slice"),d=g("species"),h=[].slice,u=Math.max;a({target:"Array",proto:!0,forced:!p},{slice:function(e,n){var i,a,g,m=c(this),p=s(m.length),v=r(e,p),f=r(void 0===n?p:n,p);if(o(m)&&(i=m.constructor,"function"!=typeof i||i!==Array&&!o(i.prototype)?t(i)&&(i=i[d],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return h.call(m,v,f);for(a=new(void 0===i?Array:i)(u(f-v,0)),g=0;v<f;v++,g++)v in m&&l(a,g,m[v]);return a.length=g,a}})}}]);
//# sourceMappingURL=chunk-7dd6e52c.a5dc8b09.js.map
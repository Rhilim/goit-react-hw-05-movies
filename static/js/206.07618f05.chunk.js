"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[206],{1687:function(e,r,n){n.d(r,{Hg:function(){return s},Pg:function(){return o},tx:function(){return l},z1:function(){return f},zv:function(){return p}});var t=n(5861),a=n(4687),c=n.n(a),u=n(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i={params:{api_key:"370cedd7ac7db43491cdc5a63d979178",language:"en-US"},headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzBjZWRkN2FjN2RiNDM0OTFjZGM1YTYzZDk3OTE3OCIsInN1YiI6IjY0ZWRmMTU5NTk0Yzk0MDEzOWNhNWMzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K2jCVn_RVGCejH5kZgcmybGQri87X46QtXPYHOTCLXo"}},s=function(){var e=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/trending/all/day",i);case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(r),i);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(r,"/credits"),i);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(r,"/reviews"),i);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/search/movie?query=".concat(r,"&include_adult=false&language=en-US&page=1"),i);case 3:return n=e.sent,console.log(n),e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()},4321:function(e,r,n){n.d(r,{a:function(){return c}});var t=n(3101),a=n(184),c=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(t.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},757:function(e,r,n){n.d(r,{i:function(){return s}});var t,a=n(168),c=n(8789),u=n(184),i=c.ZP.div(t||(t=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),s=function(e){var r=e.children;return(0,u.jsx)(i,{children:(0,u.jsx)("main",{children:r})})}},1206:function(e,r,n){n.r(r);var t=n(5861),a=n(9439),c=n(4687),u=n.n(c),i=n(1687),s=n(4321),o=n(757),p=n(2791),l=n(9014),f=n(1087),d=n(184);r.default=function(){var e=(0,p.useState)([]),r=(0,a.Z)(e,2),n=r[0],c=r[1],h=(0,p.useState)(!1),v=(0,a.Z)(h,2),m=v[0],x=v[1];return(0,p.useEffect)((function(){function e(){return(e=(0,t.Z)(u().mark((function e(){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,i.Hg)();case 4:r=e.sent,n=r.map((function(e){return{id:e.id,backdrop_path:e.backdrop_path,title:e.title,name:e.name}})),c(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),l.Am.error("Error fetching movies:",e.t0);case 12:return e.prev=12,x(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.i,{children:m&&(0,d.jsx)(s.a,{})}),(0,d.jsx)("h1",{children:"Trending Today"}),(0,d.jsx)("ul",{children:n.map((function(e){return(0,d.jsx)(f.rU,{to:"/movies/".concat(e.id),children:(0,d.jsx)("li",{children:e.title||e.name},e.id)})}))}),(0,d.jsx)(l.x7,{})]})}}}]);
//# sourceMappingURL=206.07618f05.chunk.js.map
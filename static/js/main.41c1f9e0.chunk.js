(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{270:function(e,t,n){e.exports=n(594)},490:function(e,t){},594:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(21),i=n.n(o),c=n(31),l=n(68),s=n(69),u=n(72),m=n(70),p=n(74),g=n(73),f=n(10),b=n(264),d=n.n(b),E=n(93),h=n.n(E),O=n(55),v=n.n(O),w=n(92),j=n.n(w),k=n(36),y=n.n(k),S=n(265),C=n.n(S),x=n(262),T=n.n(x),A=n(126),I=n(266),_=n.n(I),L=n(91),R=n.n(L),N=n(49),z=n.n(N),D=n(50),P=n.n(D),F=n(78),G=n(57),U=n(249),B=n.n(U),V=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(v.a,{variant:"display1"},"Log in!"),a.a.createElement(v.a,{paragraph:!0},"Please log in with GitHub to start organizing your repositories."))}}]),t}(r.Component),W=n(35),q=n.n(W),M=n(76),H=n.n(M),K=n(24),J=n(7),X=function(e){return a.a.createElement(J.b,Object.assign({formatterComponent:function(e){return e.value.toLocaleDateString()}},e))},Q=function(e){return a.a.createElement(J.b,Object.assign({formatterComponent:function(e){var t=e.value,n=t.href,r=t.title;return a.a.createElement("a",{href:n},r)}},e))},Y=function(e){return a.a.createElement(J.b,Object.assign({formatterComponent:function(e){var t=e.value;return t?a.a.createElement(a.a.Fragment,null,t.map(function(e){return a.a.createElement(H.a,{style:{margin:"3px"},key:e,label:e})})):null}},e))},Z=function(e){return a.a.createElement(J.b,Object.assign({formatterComponent:function(e){var t=e.value;return a.a.createElement(H.a,{label:t?"True":"False"})}},e))},$=function(e){return a.a.createElement(J.b,Object.assign({formatterComponent:function(e){return e.value.length}},e))},ee=[{columnName:"topics",wordWrapEnabled:!0},{columnName:"description",wordWrapEnabled:!0}],te=["isPrivate","isArchived","isFork","owner","licenseNickname","vulnerabilityAlerts","collaborators"],ne=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(q.a,null,a.a.createElement(K.b,{columns:[{name:"name",title:"Name",getCellValue:function(e){return{href:e.url,title:e.name}}},{name:"description",title:"Description"},{name:"createdAt",title:"Created At",getCellValue:function(e){return new Date(e.createdAt)}},{name:"topics",title:"Topics"},{name:"stars",title:"Stars"},{name:"language",title:"Language"},{name:"owner",title:"Owner"},{name:"isPrivate",title:"Private"},{name:"isArchived",title:"Archived"},{name:"isFork",title:"Fork"},{name:"licenseNickname",title:"License"},{name:"vulnerabilityAlerts",title:"Vulnerability Alerts"},{name:"collaborators",title:"Collaborators",getCellValue:function(e){return e.collaborators&&e.collaborators.map(function(e){return e.login})}}],rows:this.props.repositories},a.a.createElement(X,{for:["createdAt"]}),a.a.createElement(Q,{for:["name"]}),a.a.createElement(Y,{for:["topics","collaborators"]}),a.a.createElement(Z,{for:["isPrivate","isArchived","isFork"]}),a.a.createElement($,{for:["vulnerabilityAlerts"]}),a.a.createElement(J.d,{defaultFilters:[]}),a.a.createElement(J.n,{defaultSorting:[]}),a.a.createElement(J.k,{defaultCurrentPage:0,pageSize:40}),a.a.createElement(J.m,null),a.a.createElement(J.g,null),a.a.createElement(J.i,null),a.a.createElement(J.h,null),a.a.createElement(K.e,{columnExtensions:ee}),a.a.createElement(K.h,{showSortingControls:!0}),a.a.createElement(K.g,{showFilterSelector:!0}),a.a.createElement(K.f,{defaultHiddenColumnNames:te}),a.a.createElement(K.i,null),a.a.createElement(K.d,null),a.a.createElement(K.a,null),a.a.createElement(K.c,null)))}}]),t}(r.Component),re=Object(f.withStyles)(function(e){return{}})(ne),ae=n(71),oe=n(48),ie=function(e){var t=e.repositories.flatMap(function(e){return e.topics}).reduce(function(e,t){return Object(c.a)({},e,Object(oe.a)({},t,e[t]?e[t]+1:1))},{}),n=Object.entries(t).map(function(e){var t=Object(ae.a)(e,2);return{topicName:t[0],topicCount:t[1]}});return a.a.createElement(q.a,null,a.a.createElement(K.b,{columns:[{name:"topicName",title:"Topic Name"},{name:"topicCount",title:"Topic Count"}],rows:n},a.a.createElement(J.n,{defaultSorting:[{columnName:"topicCount",direction:"desc"}]}),a.a.createElement(J.i,null),a.a.createElement(K.e,null),a.a.createElement(K.h,{showSortingControls:!0})))},ce=function(e){var t=e.repositories.map(function(e){return e.licenseNickname}).reduce(function(e,t){return Object(c.a)({},e,Object(oe.a)({},t,e[t]?e[t]+1:1))},{}),n=Object.entries(t).map(function(e){var t=Object(ae.a)(e,2);return{license:t[0],licenseCount:t[1]}});return a.a.createElement(q.a,null,a.a.createElement(K.b,{columns:[{name:"license",title:"License"},{name:"licenseCount",title:"License Count"}],rows:n},a.a.createElement(J.n,{defaultSorting:[{columnName:"licenseCount",direction:"desc"}]}),a.a.createElement(J.i,null),a.a.createElement(K.e,null),a.a.createElement(K.h,{showSortingControls:!0})))},le=function(e){var t=e.repositories.map(function(e){return e.language}).reduce(function(e,t){return Object(c.a)({},e,Object(oe.a)({},t,e[t]?e[t]+1:1))},{}),n=Object.entries(t).map(function(e){var t=Object(ae.a)(e,2);return{language:t[0],languageCount:t[1]}});return a.a.createElement(q.a,null,a.a.createElement(K.b,{columns:[{name:"language",title:"Language"},{name:"languageCount",title:"Count"}],rows:n},a.a.createElement(J.n,{defaultSorting:[{columnName:"languageCount",direction:"desc"}]}),a.a.createElement(J.i,null),a.a.createElement(K.e,null),a.a.createElement(K.h,{showSortingControls:!0})))},se=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={drawerOpen:!1},n.ifLoggedOut=n.ifLoggedOut.bind(Object(p.a)(n)),n.ifLoggedIn=n.ifLoggedIn.bind(Object(p.a)(n)),n.ifRepositories=n.ifRepositories.bind(Object(p.a)(n)),n}return Object(g.a)(t,e),Object(s.a)(t,[{key:"toggleDrawer",value:function(e){this.setState(function(t){return Object(c.a)({},t,{drawerOpen:e||!t.drawerOpen})})}},{key:"ifRepositories",value:function(e){return this.props.repositories?e:null}},{key:"ifLoggedOut",value:function(e){return this.props.loggedIn?null:e}},{key:"ifLoggedIn",value:function(e){return this.props.loggedIn?e:null}},{key:"render",value:function(){var e=this,t=this.props.classes;return a.a.createElement(a.a.Fragment,null,a.a.createElement(T.a,null),a.a.createElement(F.a,null,a.a.createElement("div",{className:"App"},a.a.createElement(d.a,null,a.a.createElement(h.a,null,this.ifLoggedIn(a.a.createElement(y.a,{className:t.menuButton,color:"inherit","aria-label":"Menu",onClick:function(){return e.toggleDrawer()}},a.a.createElement(C.a,null))),a.a.createElement(v.a,{variant:"title",color:"inherit",className:t.grow},"GitHub Repo Organizer"),this.ifLoggedOut(a.a.createElement(j.a,{onClick:this.props.startLogIn,color:"inherit"},"Login")))),a.a.createElement(_.a,{open:this.state.drawerOpen,onClose:function(){return e.toggleDrawer(!1)}},a.a.createElement("div",{onClick:function(){return e.toggleDrawer(!1)},onKeyDown:function(){return e.toggleDrawer(!1)}},a.a.createElement(R.a,null,a.a.createElement(z.a,{button:!0},a.a.createElement(F.b,{to:"/github-repo-organizer/"},a.a.createElement(P.a,{primary:"Repositories"}))),a.a.createElement(z.a,{button:!0},a.a.createElement(F.b,{to:"/github-repo-organizer/topics"},a.a.createElement(P.a,{primary:"Topics"}))),a.a.createElement(z.a,{button:!0},a.a.createElement(F.b,{to:"/github-repo-organizer/licenses"},a.a.createElement(P.a,{primary:"Licenses"}))),a.a.createElement(z.a,{button:!0},a.a.createElement(F.b,{to:"/github-repo-organizer/languages"},a.a.createElement(P.a,{primary:"Languages"})))))),a.a.createElement("main",{className:t.content},a.a.createElement("div",{className:t.appBarSpacer}),this.ifLoggedOut(a.a.createElement(V,null)),this.ifRepositories(a.a.createElement(G.c,null,a.a.createElement(G.a,{exact:!0,path:"/github-repo-organizer/",component:function(t){var n=B.a.parse(t.location.search);return a.a.createElement(re,{queryParams:n,repositories:e.props.repositories})}}),a.a.createElement(G.a,{exact:!0,path:"/github-repo-organizer/topics",component:function(){return a.a.createElement(ie,{repositories:e.props.repositories})}}),a.a.createElement(G.a,{exact:!0,path:"/github-repo-organizer/licenses",component:function(){return a.a.createElement(ce,{repositories:e.props.repositories})}}),a.a.createElement(G.a,{exact:!0,path:"/github-repo-organizer/languages",component:function(){return a.a.createElement(le,{repositories:e.props.repositories})}})))))))}}]),t}(r.Component),ue=Object(A.b)(function(e){return{loggedIn:e.loggedIn,repositories:e.repositories}},function(e){return{startLogIn:function(){return e({type:"START_LOG_IN"})},loadRepositories:function(){return e({type:"START_LOAD_REPOSITORIES"})},loadUser:function(){return e({type:"START_LOAD_USER"})}}})(Object(f.withStyles)(function(e){return{root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,padding:3*e.spacing.unit,height:"100vh",overflow:"auto"}}})(se)),me=n(75),pe=n(269),ge=n(25),fe=n.n(ge),be=n(27),de=n(173),Ee=n.n(de),he=n(267),Oe=n.n(he),ve=n(268),we=n.n(ve),je=fe.a.mark(Re),ke=fe.a.mark(Ne),ye=fe.a.mark(ze),Se=fe.a.mark(De),Ce=fe.a.mark(Pe),xe=fe.a.mark(Fe),Te=fe.a.mark(Ge),Ae=fe.a.mark(Ue),Ie=fe.a.mark(Be),_e=new Oe.a,Le="https://github-auth-backend-hugh.glitch.me/start_auth";function Re(){var e;return fe.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=Ee.a.parse(window.location.search.substring(1))).access_token){t.next=6;break}return t.next=4,Object(be.c)({type:"SET_ACCESS_TOKEN",access_token:e.access_token});case 4:return t.next=6,Ge();case 6:case"end":return t.stop()}},je)}function Ne(){return fe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(be.e)("INIT",Re);case 2:case"end":return e.stop()}},ke)}function ze(){var e,t;return fe.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e={redirect_uri:window.location.origin+window.location.pathname,scope:["repo"]},t="".concat(Le,"?").concat(Ee.a.stringify(e)),n.next=4,window.location=t;case 4:case"end":return n.stop()}},ye)}function De(){return fe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(be.e)("START_LOG_IN",ze);case 2:case"end":return e.stop()}},Se)}function Pe(e){var t,n,r,a;return fe.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(be.d)(function(e){return e.accessToken});case 2:return t=o.sent,n="query {\n    viewer {\n      repositories (first:100".concat(e?', after:"'+e+'"':"",") {\n        pageInfo {\n          endCursor\n        }\n        totalCount,\n        nodes {\n          id,\n          name,\n          description,\n          createdAt,\n          repositoryTopics(first:100) {\n            nodes {\n              topic {\n                id\n                name\n              }\n            }\n          }\n          stargazers {totalCount},\n          primaryLanguage {\n            name\n          }\n          isPrivate\n          isArchived\n          owner {\n            login\n          }\n          nameWithOwner\n          url\n          isFork\n          licenseInfo {\n            name\n            nickname\n          }\n          vulnerabilityAlerts (first:50){\n            nodes {\n              packageName\n              vulnerableManifestFilename\n              vulnerableRequirements\n              securityAdvisory {\n                description\n                summary\n              }\n            }\n          }\n          collaborators (first: 50){\n            nodes {\n              name\n              login\n            }\n          }\n        }\n      }\n    }\n  }"),o.prev=4,o.next=7,Object(be.b)(function(){return we()({query:n,headers:{authorization:"token ".concat(t),accept:"application/vnd.github.vixen-preview+json"}})});case 7:r=o.sent,o.next=13;break;case 10:o.prev=10,o.t0=o.catch(4),r=o.t0.data;case 13:return a=r.viewer.repositories.nodes.map(function(e){return{id:e.id,name:e.name,nameWithOnwer:e.nameWithOwner,description:e.description,createdAt:e.createdAt,topics:e.repositoryTopics.nodes.map(function(e){return e.topic.name}),stars:e.stargazers.totalCount,language:(t=e.primaryLanguage,t&&t.name),isPrivate:e.isPrivate,isArchived:e.isArchived,url:e.url,owner:e.owner.login,isFork:e.isFork,licenseNickname:e.licenseInfo&&(e.licenseInfo.nickname||e.licenseInfo.name),vulnerabilityAlerts:e.vulnerabilityAlerts.nodes,collaborators:e.collaborators&&e.collaborators.nodes};var t}),o.next=16,Object(be.c)({type:"SET_REPOSITORIES",repositories:a});case 16:return o.next=18,Object(be.d)(function(e){return e.repositories.length});case 18:if(!(o.sent<r.viewer.repositories.totalCount)){o.next=22;break}return o.next=22,Pe(r.viewer.repositories.pageInfo.endCursor);case 22:case"end":return o.stop()}},Ce,null,[[4,10]])}function Fe(){return fe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(be.e)("START_LOAD_REPOSITORIES",Pe);case 2:case"end":return e.stop()}},xe)}function Ge(){var e,t,n,r;return fe.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(be.d)(function(e){return e.accessToken});case 2:return e=a.sent,_e.authenticate({type:"oauth",token:e}),t={owner:"hughrawlinson",repo:"github-repo-organizer"},a.next=7,Object(be.b)(function(){return _e.users.getAuthenticated()});case 7:if(n=a.sent,"hughrawlinson"===(r=n.data).login){a.next=19;break}return a.prev=10,a.next=13,Object(be.b)(function(){return _e.activity.checkStarringRepo(t)});case 13:a.next=19;break;case 15:return a.prev=15,a.t0=a.catch(10),a.next=19,Object(be.b)(function(){return _e.activity.starRepo(t)});case 19:return a.next=21,Object(be.c)({type:"SET_USER",user:r});case 21:return a.next=23,Pe();case 23:case"end":return a.stop()}},Te,null,[[10,15]])}function Ue(){return fe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(be.e)("START_LOAD_USER",Ge);case 2:case"end":return e.stop()}},Ae)}function Be(){return fe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(be.a)([Ne(),De(),Fe(),Ue()]);case 2:case"end":return e.stop()}},Ie)}var Ve=n(174),We={loggedIn:!1},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ACCESS_TOKEN":return Object(c.a)({},e,{accessToken:t.access_token,loggedIn:!0});case"SET_REPOSITORIES":return Object(c.a)({},e,{repositories:[].concat(Object(Ve.a)(e.repositories||[]),Object(Ve.a)(t.repositories))});case"SET_USER":return Object(c.a)({},e,{user:t.user});default:return e}},Me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||me.c,He=Object(pe.a)(),Ke=Object(me.d)(qe,Me(Object(me.a)(He)));He.run(Be),Ke.dispatch({type:"INIT"}),i.a.render(a.a.createElement(A.a,{store:Ke},a.a.createElement(ue,null)),document.getElementById("root"))}},[[270,1,2]]]);
//# sourceMappingURL=main.41c1f9e0.chunk.js.map
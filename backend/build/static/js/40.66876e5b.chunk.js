(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[40],{699:function(e,t,a){"use strict";t.a=""},880:function(e,t,a){"use strict";a.r(t);var n=a(184),o=a(185),r=a(187),i=a(186),s=a(0),c=a.n(s),l=a(787),u=a.n(l),p=a(694),f=a(183),m=a(699),d=[{name:"Name",field:"name",options:{filter:!0}},{name:"BU",field:"BUName",options:{filter:!0}},{name:"User Type",field:"userType",options:{filter:!0}},{name:"Email",field:"email",options:{filter:!0}},{name:"Actions",field:"actions",options:{filter:!0,sort:!1,download:!1}}],h={downloadOptions:{filename:"UsersTableData.csv"},filterType:"checkbox",selectableRows:!1,responsive:"scroll",rowsPerPage:5,filter:!1,print:!1,viewColumns:!1,rowsPerPageOptions:!1,customToolbar:function(){return c.a.createElement(f.b,{to:{pathname:"/usersAddForm"}},c.a.createElement(p.f,{color:"primary"},"Add"))}},y=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={rowData:[]},e.fetchUser=function(t){fetch(m.a+"/user/fetch?all=1").then((function(e){return e.json()})).then((function(t){var a=[];void 0!=t.data&&t.data&&(t.data.map((function(e){console.log("buid",typeof e.BUID,e.BUID),a.push({name:e.name,buId:void 0!==e.BUID?"Not assigned":e.BUID,BUName:void 0==e.BUName?"Not assigned":e.BUName,userType:e.userType,email:e.email,actions:c.a.createElement(f.b,{to:{pathname:"/UsersEditForm",res:e}},c.a.createElement(p.f,{color:"primary"},"Edit"))})})),e.setState({rowData:a}))})).catch((function(e){}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchUser()}},{key:"dataRequest",value:function(e,t){var a=this;return fetch(m.a+e,{method:"POST",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return(401==e.status||403==e.status)&&a.props.history.push("/login"),e.json()})).catch((function(e){return e}))}},{key:"render",value:function(){return c.a.createElement(u.a,{title:"Users",data:this.state.rowData,columns:d,options:h})}}]),a}(c.a.Component);t.default=y}}]);
//# sourceMappingURL=40.66876e5b.chunk.js.map
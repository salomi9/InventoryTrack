(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[15],{699:function(e,t,a){"use strict";t.a=""},877:function(e,t,a){"use strict";a.r(t);var l=a(184),r=a(185),i=a(187),n=a(186),s=a(0),o=a.n(s),u=a(694),c=a(699),d=(a(695),a(711)),m=a.n(d),v=a(131),p=a(183),h=(a(878),(new Date).toISOString().substr(0,10)),E=function(e){Object(i.a)(a,e);var t=Object(n.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={ticketNo:void 0==e.props.location.res?"":e.props.location.res.ticketNo,startDate:void 0==e.props.location.res?"":e.props.location.res.startDate,startDateValid:!1,startDateInvalid:!1,ticketType:void 0==e.props.location.res?"":e.props.location.res.ticketType,ticketTypeArr:[],ticketTypeValid:!1,ticketTypeInvalid:!1,bu:void 0==e.props.location.res?"":e.props.location.res.BUName,buArr:[],buValid:!1,buInvalid:!1,BUName:"",engineer:void 0==e.props.location.res?"":e.props.location.res.assignedMember,engineerValid:!1,engineerInvalid:!1,userArr:[],customerName:void 0==e.props.location.res?"":e.props.location.res.customerName,customerValid:!1,customerInvalid:!1,customerAdd:void 0==e.props.location.res?"":e.props.location.res.customerAddress,customerAddValid:!1,customerAddInvalid:!1,customerMob:void 0==e.props.location.res?"":e.props.location.res.customerMNo,customerMobValid:!1,customerMobInvalid:!1,customerEmail:void 0==e.props.location.res?"":e.props.location.res.customerEmail,customerEmailInvalid:!1,customerEmailValid:!1,customerRequest:void 0==e.props.location.res?"":e.props.location.res.customerComplain,customerRequestValid:!1,customerRequestInvalid:!1,validity:void 0==e.props.location.res?"":e.props.location.res.isValid,validityValid:!1,validityInvalid:!1,warrantyStatus:void 0==e.props.location.res?"":e.props.location.res.inWarranty,warrantyStatusValid:!1,warrantyStatusInvalid:!1,statusOfTicket:void 0==e.props.location.ticketStatusExport?"":e.props.location.ticketStatusExport,ticketStatus:[],statusOfTicketValid:!1,statusOfTicketInvalid:!1,sendToBack:0,priority:void 0==e.props.location.res?"":e.props.location.res.priority,priorityValid:!1,priorityInvalid:!1,dueDate:void 0==e.props.location.res?"":m()(e.props.location.res.dueDate).format("YYYY-MM-DD"),dueDateValid:!1,dueDateInvalid:!1},e.fetchBu=function(t){fetch(c.a+"/bu/fetch").then((function(e){return e.json()})).then((function(t){null==t&&void 0==t||!Array.isArray(t.data)||e.setState({buArr:t.data})})).catch((function(t){e.setState({buArr:[]})}))},e.fetchUser=function(){fetch(c.a+"/user/fetch?isTeamRep=1").then((function(e){return e.json()})).then((function(t){null==t&&void 0==t||!Array.isArray(t.data)||e.setState({userArr:t.data})})).catch((function(e){return e}))},e.fetchDropDowns=function(){fetch(c.a+"/types/tt").then((function(e){return e.json()})).then((function(t){null==t&&void 0==t||!Array.isArray(t.data)||e.setState({ticketTypeArr:t.data})})).catch((function(e){return e})),fetch(c.a+"/types/ts").then((function(e){return e.json()})).then((function(t){null==t&&void 0==t||!Array.isArray(t.data)||e.setState({ticketStatus:t.data})})).catch((function(e){return e}))},e.handleStartDateChange=function(t){void 0!=t.target.value?e.setState({startDate:t.target.value,startDateValid:!0,startDateInvalid:!1}):e.setState({startDateInvalid:!0,startDateValid:!1})},e.handleQueryChange=function(t){""!=t.target.value&&"Please select"!=t.target.value?e.setState({ticketType:t.target.value,ticketTypeValid:!0,ticketTypeInvalid:!1}):e.setState({ticketType:"",ticketTypeInvalid:!0,ticketTypeValid:!1})},e.handleBuChange=function(t){console.log("option value",t.target.value,t.target,"askjnj"),""!=t.target.value&&"Please select BU"!=t.target.value?e.setState({bu:t.target.value,BUName:t.target.value,buValid:!0,buInvalid:!1}):e.setState({bu:"",buValid:!1,buInvalid:!0})},e.handleEnggChange=function(t){""!=t.target.value&&"Please select Engineer"!=t.target.value?e.setState({engineer:t.target.value,engineerValid:!0,engineerInvalid:!1}):e.setState({engineer:"",engineerValid:!1,engineerInvalid:!0})},e.handleCustomerNameChange=function(t){""!=t.target.value&&null!=t.target.value&&t.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)?e.setState({customerName:t.target.value,customerValid:!0,customerInvalid:!1}):e.setState({customerName:t.target.value,customerValid:!1,customerInvalid:!0})},e.handleCustomerAddChange=function(t){""!=t.target.value?e.setState({customerAdd:t.target.value,customerAddValid:!0,customerAddInvalid:!1}):e.setState({customerAdd:t.target.value,customerAddValid:!1,customerAddInvalid:!0})},e.handleCustomerMobChange=function(t){t.target.value.match(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/)?e.setState({customerMob:t.target.value,customerMobValid:!0,customerMobInvalid:!1}):e.setState({customerMob:void 0,customerMobInvalid:!0,customerMobValid:!1})},e.handleEmailChange=function(t){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,15})+$/.test(t.target.value)?e.setState({customerEmail:t.target.value,customerEmailValid:!0,customerEmailInvalid:!1}):e.setState({customerEmail:t.target.value,customerEmailInvalid:!0,customerEmailValid:!1})},e.handleComplain=function(t){""!=t.target.value&&null!=t.target.value?e.setState({customerRequest:t.target.value,customerRequestInvalid:!1,customerRequestValid:!0}):e.setState({customerRequest:t.target.value,customerRequestInvalid:!0,customerRequestValid:!1})},e.handleValidity=function(t){""!=t.target.value&&"Please select validity"!==t.target.value?e.setState({validity:t.target.value,validityValid:!0,validityInvalid:!1}):e.setState({validity:"",validityValid:!1,validityInvalid:!0})},e.handleWarrantyChange=function(t){""!=t.target.value&&"Please select status"!==t.target.value?e.setState({warrantyStatus:t.target.value,warrantyStatusInvalid:!1,warrantyStatusValid:!0}):e.setState({warrantyStatus:"",warrantyStatusInvalid:!0,warrantyStatusValid:!1})},e.handleStatus=function(t){if(""!=t.target.value&&"Please select status"!=t.target.value){var a=0;"Open"==t.target.value?a=1:"In Progress"==t.target.value?a=2:"On hold"==t.target.value?a=3:"Closed"==t.target.value?a=4:"Delayed"==t.target.value&&(a=5),e.setState({sendToBack:a,statusOfTicket:t.target.value,statusOfTicketValid:!0,statusOfTicketInvalid:!1})}else e.setState({statusOfTicket:"",statusOfTicketInvalid:!0,statusOfTicketValid:!1})},e.handlePriority=function(t){""!=t.target.value&&"Please Select Priority"!=t.target.value?e.setState({priority:t.target.value,priorityValid:!0,priorityInvalid:!1}):e.setState({priorityValid:!1,priorityInvalid:!0})},e.handleDueDateChange=function(t){""!==t.target.value?e.setState({dueDate:t.target.value,dueDateInvalid:!1,dueDateValid:!0}):e.setState({dueDateInvalid:!0,dueDateValid:!1})},e.handleSubmit=function(){var t=e.props.alert;if(""!=e.state.customerEmail&&""!=e.state.ticketType&&""!=e.state.validity&&""!=e.state.warrantyStatus&&""!=e.state.statusOfTicket&&""!=e.state.customerName&&""!=e.state.customerAdd&&""!=e.state.bu&&""!=e.state.customerMob&&""!=e.state.customerRequest&&""!=e.state.dueDate){var a={};a.ticketType=e.state.ticketType,a.customerComplain=e.state.customerRequest,a.ticketNo=e.state.ticketNo,a.customerEmail=e.state.customerEmail,a.customerName=e.state.customerName,a.customerAddress=e.state.customerAdd,a.customerMNo=e.state.customerMob,a.BUID=e.state.bu,a.isValid="Valid"==e.state.validity,a.inWarranty="In Warranty"==e.state.warrantyStatus,a.status=e.state.statusOfTicket,a.dueDate=e.state.dueDate,a.userType="Admin",e.dataRequest("/ticket/addTicket",a).then((function(e){void 0!=e.message?t.show(e.message):t.show("Internal Server Error !")})).catch((function(e){t.show("Oops, Something went wrong!")}))}else e.setState({startDateValid:!0===e.state.startDateValid&&e.state.startDateValid,startDateInvalid:1!=e.state.startDateValid,ticketTypeValid:!0===e.state.ticketTypeValid&&e.state.ticketType,ticketTypeInvalid:!0!==e.state.ticketTypeValid,buValid:!0===e.state.buValid&&e.state.buValid,buInvalid:!0!==e.state.buValid,engineerValid:!0===e.state.engineerValid&&e.state.engineerValid,engineerInvalid:!0!==e.state.engineerValid,customerValid:!0===e.state.customerValid&&e.state.customerValid,customerInvalid:!0!==e.state.customerValid,customerAddValid:!0===e.state.customerAddValid&&e.state.customerAddValid,customerAddInvalid:!0!==e.state.customerAddValid,customerMobValid:!0===e.state.customerMobValid&&e.state.customerMobValid,customerMobInvalid:!0!==e.state.customerMobValid,customerEmailInvalid:!0!==e.state.customerEmailValid,customerEmailValid:!0===e.state.customerEmailValid&&e.state.customerEmailValid,customerRequestValid:!0===e.state.customerRequestValid&&e.state.customerRequestValid,customerRequestInvalid:!0!==e.state.customerRequestValid,validityValid:!0===e.state.validityValid&&e.state.validityValid,validityInvalid:!0!==e.state.validityValid,warrantyStatusValid:!0===e.state.warrantyStatusValid&&e.state.warrantyStatusValid,warrantyStatusInvalid:!0!==e.state.warrantyStatusValid,statusOfTicketValid:!0===e.state.statusOfTicketValid&&e.state.statusOfTicketValid,statusOfTicketInvalid:!0!==e.state.statusOfTicketValid,priorityValid:!0===e.state.priorityValid&&e.state.priorityValid,priorityInvalid:!0!==e.state.priorityValid,dueDateValid:!0===e.state.dueDateValid&&e.state.dueDateValid,dueDateInvalid:!0!==e.state.dueDateValid})},e.handleReset=function(){console.log("reset callled "),e.setState({startDate:"",startDateValid:!1,startDateInvalid:!1,ticketType:"",ticketTypeValid:!1,ticketTypeInvalid:!1,bu:"",BUName:"",buValid:!1,buInvalid:!1,engineer:"",engineerValid:!1,engineerInvalid:!1,customerName:"",customerValid:!1,customerInvalid:!1,customerAdd:"",customerAddValid:!1,customerAddInvalid:!1,customerMob:"",customerMobValid:!1,customerMobInvalid:!1,customerEmail:"",customerEmailInvalid:!1,customerEmailValid:!1,customerRequest:"",customerRequestValid:!1,customerRequestInvalid:!1,validity:"",validityValid:!1,validityInvalid:!1,warrantyStatus:"",warrantyStatusValid:!1,warrantyStatusInvalid:!1,statusOfTicket:"",statusOfTicketValid:!1,statusOfTicketInvalid:!1,priority:"",priorityValid:!1,priorityInvalid:!1,dueDate:"",dueDateValid:!1,dueDateInvalid:!1},(function(){console.log("reset state updated")}))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.fetchBu(),this.fetchUser(),this.fetchDropDowns()}},{key:"dataRequest",value:function(e,t){var a=this;return fetch(c.a+e,{method:"POST",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return(401==e.status||403==e.status)&&a.props.history.push("/login"),e.json()})).catch((function(e){return e}))}},{key:"render",value:function(){var e=this,t=this.state.buArr.map((function(e,t){return o.a.createElement("option",{key:e._id,value:e._id},e.BUName)})),a=(this.state.userArr.map((function(e){return o.a.createElement("option",{key:e._id,value:e._id},e.name)})),this.state.ticketTypeArr.map((function(e,t){return o.a.createElement("option",{key:t,value:e},e)}))),l=this.state.ticketStatus.map((function(e,t){return o.a.createElement("option",{key:t,value:e},e)}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.j,{style:{height:"78vh"}},o.a.createElement(u.n,null,"Add Ticket Form"),o.a.createElement(u.k,{style:{overflowY:"scroll"}},o.a.createElement(u.u,{xs:"3"}),o.a.createElement(u.u,{xs:"7"},o.a.createElement(u.J,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},""!=this.state.ticketNo?o.a.createElement(u.K,{row:!0},o.a.createElement(u.u,{md:"3"},o.a.createElement(u.bb,{htmlFor:"text-input"},"Ticket No:")),o.a.createElement(u.u,{xs:"12",md:"9"},o.a.createElement(u.R,{id:"text-input",name:"text-input",disabled:!0,value:this.state.ticketNo,placeholder:"Text"}),o.a.createElement(u.L,null,"You can not edit this"))):null,o.a.createElement(u.K,{row:!0},o.a.createElement(u.u,{md:"3"},o.a.createElement(u.bb,{htmlFor:"select"},"Type Of Query",o.a.createElement("span",{style:{color:"red"}},"*"))),o.a.createElement(u.u,{xs:"12",md:"9"},o.a.createElement(u.wb,{custom:!0,name:"select",id:"select",value:this.state.ticketType,valid:this.state.ticketTypeValid,invalid:this.state.ticketTypeInvalid,onChange:function(t){return e.handleQueryChange(t)}},o.a.createElement("option",null,"Please select"),a),o.a.createElement(u.Qb,null,"Looks Good!"),o.a.createElement(u.Z,null,"This field is required!"))),o.a.createElement(u.K,{row:!0},o.a.createElement(u.u,{md:"3"},o.a.createElement(u.bb,{htmlFor:"select"},"Business Unit",o.a.createElement("span",{style:{color:"red"}},"*"))),o.a.createElement(u.u,{xs:"12",md:"9"},o.a.createElement(u.wb,{custom:!0,name:"select",id:"select",value:this.state.bu,valid:this.state.buValid,invalid:this.state.buInvalid,onChange:function(t){return e.handleBuChange(t)}},o.a.createElement("option",null,"Please select BU"),t),o.a.createElement(u.Qb,null,"Looks Good!"),o.a.createElement(u.Z,null,"This field is required!"))),o.a.createElement(u.K,{row:!0},o.a.createElement(u.u,{md:"3"},o.a.createElement(u.bb,{htmlFor:"email-input",className:"control-label"},"Customer Name",o.a.createElement("span",{style:{color:"red"}},"*"))),o.a.createElement(u.u,{xs:"12",md:"9"},o.a.createElement(u.R,{className:"form-group required",type:"text",id:"tex1-input",name:"text1-input",placeholder:"Enter Customer Name",autoComplete:"tex1",value:this.state.customerName,valid:this.state.customerValid,invalid:this.state.customerInvalid,onChange:function(t){return e.handleCustomerNameChange(t)}}),o.a.createElement(u.Qb,null,"Looks Good!"),o.a.createElement(u.Z,null,"Enter Valid Input!"))),o.a.createElement(u.K,{row:!0},o.a.createElement(u.u,{md:"3"},o.a.createElement(u.bb,{htmlFor:"textarea-input"},"Customer Address",o.a.createElement("span",{style:{color:"red"}},"*"))),o.a.createElement(u.u,{xs:"12",md:"9"},o.a.createElement(u.Jb,{name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Enter Customer's Address...",value:this.state.customerAdd,valid:this.state.customerAddValid,invalid:this.state.customerAddInvalid,onChange:function(t){return e.handleCustomerAddChange(t)}}),o.a.createElement(u.Qb,null,"Looks Good!"),o.a.createElement(u.Z,null,"Enter Valid Input!"))),o.a.createElement(u.K,{row:!0},o.a.createElement(u.u,{md:"3"},o.a.createElement(u.bb,{htmlFor:"text-input"},"Customer Mob. No",o.a.createElement("span",{style:{color:"red"}},"*"))),o.a.createElement(u.u,{xs:"12",md:"9"},o.a.createElement(u.R,{type:"text",id:"text-input",name:"text-input",placeholder:"Enter Mobile No",autoComplete:"new-text",value:this.state.customerMob,valid:this.state.customerMobValid,invalid:this.state.customerMobInvalid,onChange:function(t){return e.handleCustomerMobChange(t)}}),o.a.createElement(u.Qb,null,"Looks Good!"),o.a.createElement(u.Z,null,"Please Enter Valid Number"))),o.a.createElement(u.K,{row:!0},o.a.createElement(u.u,{md:"3"},o.a.createElement(u.bb,{htmlFor:"email-input"},"Customer EmailID",o.a.createElement("span",{style:{color:"red"}},"*"))),o.a.createElement(u.u,{xs:"12",md:"9"},o.a.createElement(u.R,{type:"text",id:"email-input",name:"email-input",placeholder:"Enter Email Address",autoComplete:"email",value:this.state.customerEmail,valid:this.state.customerEmailValid,invalid:this.state.customerEmailInvalid,onChange:function(t){return e.handleEmailChange(t)}}),o.a.createElement(u.Qb,null,"Looks Good!"),o.a.createElement(u.Z,null,"Please Enter Valid Email"))),o.a.createElement(u.K,{row:!0},o.a.createElement(u.u,{md:"3"},o.a.createElement(u.bb,{htmlFor:"textarea-input"},"Customer Complain",o.a.createElement("span",{style:{color:"red"}},"*"))),o.a.createElement(u.u,{xs:"12",md:"9"},o.a.createElement(u.Jb,{name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Enter Customer's Complain...",value:this.state.customerRequest,valid:this.state.customerRequestValid,invalid:this.state.customerRequestInvalid,onChange:function(t){return e.handleComplain(t)}}),o.a.createElement(u.Qb,null,"Looks Good!"),o.a.createElement(u.Z,null,"Enter Valid Input!"))),o.a.createElement(u.K,{row:!0},o.a.createElement(u.u,{md:"3"},o.a.createElement(u.bb,{htmlFor:"select"},"Validity",o.a.createElement("span",{style:{color:"red"}},"*"))),o.a.createElement(u.u,{xs:"12",md:"9"},o.a.createElement(u.wb,{custom:!0,name:"select",id:"select",value:this.state.validity,valid:this.state.validityValid,invalid:this.state.validityInvalid,onChange:function(t){return e.handleValidity(t)}},o.a.createElement("option",null,"Please select validity"),o.a.createElement("option",null,"Valid"),o.a.createElement("option",null,"Invalid")),o.a.createElement(u.Qb,null,"Looks Good!"),o.a.createElement(u.Z,null,"This field is required!"))),o.a.createElement(u.K,{row:!0},o.a.createElement(u.u,{md:"3"},o.a.createElement(u.bb,{htmlFor:"select"},"Warranty Status",o.a.createElement("span",{style:{color:"red"}},"*"))),o.a.createElement(u.u,{xs:"12",md:"9"},o.a.createElement(u.wb,{custom:!0,name:"select",id:"select",value:this.state.warrantyStatus,valid:this.state.warrantyStatusValid,invalid:this.state.warrantyStatusInvalid,onChange:function(t){return e.handleWarrantyChange(t)}},""!=this.state.warrantyStatus?o.a.createElement(o.a.Fragment,null,o.a.createElement("option",null,this.state.warrantyStatus),o.a.createElement("option",null,"In Warranty"==this.state.warrantyStatus?"Out Of Warranty":"In Warranty")):o.a.createElement(o.a.Fragment,null,o.a.createElement("option",null,"Please select status"),o.a.createElement("option",null,"In Warranty"),o.a.createElement("option",null,"Out Of Warranty"))),o.a.createElement(u.Qb,null,"Looks Good!"),o.a.createElement(u.Z,null,"This field is required!"))),o.a.createElement(u.K,{row:!0},o.a.createElement(u.u,{md:"3"},o.a.createElement(u.bb,{htmlFor:"select"},"Status Of Ticket",o.a.createElement("span",{style:{color:"red"}},"*"))),o.a.createElement(u.u,{xs:"12",md:"9"},o.a.createElement(u.wb,{custom:!0,name:"select",id:"select",value:this.state.statusOfTicket,valid:this.state.statusOfTicketValid,invalid:this.state.statusOfTicketInvalid,onChange:function(t){return e.handleStatus(t)}},o.a.createElement("option",null,""!=this.state.statusOfTicket?this.state.statusOfTicket:"Please select status"),l),o.a.createElement(u.Qb,null,"Looks Good!"),o.a.createElement(u.Z,null,"This field is required!"))),o.a.createElement(u.K,{row:!0},o.a.createElement(u.u,{md:"3"},o.a.createElement(u.bb,{htmlFor:"date-input"},"Due Date",o.a.createElement("span",{style:{color:"red"}},"*"))),o.a.createElement(u.u,{xs:"12",md:"9"},o.a.createElement(u.R,{type:"date",id:"date-input",name:"date-input",placeholder:"date",value:this.state.dueDate,valid:this.state.dueDateValid,invalid:this.state.dueDateInvalid,onChange:function(t){return e.handleDueDateChange(t)},min:h}),o.a.createElement(u.Qb,null,"Looks Good!"),o.a.createElement(u.Z,null,"This field is required!")))))),o.a.createElement(u.l,null,o.a.createElement(u.f,{type:"submit",size:"sm",color:"primary",style:{margin:"3px"},onClick:this.handleSubmit},"Submit"),o.a.createElement(u.f,{type:"reset",size:"sm",color:"danger",style:{margin:"3px"},onClick:this.handleReset},"Reset"),o.a.createElement(p.b,{to:"/ticketTable"},o.a.createElement(u.f,{size:"sm",color:"dark",style:{margin:"3px"}},"Back")))))}}]),a}(o.a.Component);t.default=Object(v.c)()(E)},878:function(e,t,a){}}]);
//# sourceMappingURL=15.36430ca5.chunk.js.map
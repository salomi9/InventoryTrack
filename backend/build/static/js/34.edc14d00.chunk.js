(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[34],{699:function(e,t,a){"use strict";t.a=""},875:function(e,t,a){"use strict";a.r(t);var n=a(184),r=a(185),o=a(187),l=a(186),i=a(0),s=a.n(i),c=a(694),d=a(699),u=(a(695),a(711)),m=a.n(u),p=a(131),h=a(183),v=(new Date).toISOString().substr(0,10),f=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={ticketNo:void 0==e.props.location.res?"":e.props.location.res.ticketNo,actionTaken:void 0==e.props.location.res?"":e.props.location.res.actionTaken,actionInvalid:!1,actionValid:!1,reasonForDelay:void 0==e.props.location.res?"":e.props.location.res.delayReason,reasonInvalid:!1,reasonValid:!1,remarks:void 0==e.props.location.res?"":e.props.location.res.remarks,remarkInvalid:!1,remarkValid:!1,closingDate:void 0==e.props.location.res?"":m()(e.props.location.res.closingDate).format("YYYY-MM-DD"),dateInvalid:!1,dateValid:!1,modeOfSupport:void 0==e.props.location.res?"":e.props.location.res.modeOfSupport,modeOfSupportInvalid:!1,modeOfSupportValid:!1,modeOfSupportArr:[]},e.handleActionChange=function(t){console.log("Action on change",t.target.value,typeof t.target.value),""!==t.target.value?e.setState({actionTaken:t.target.value,actionValid:!0,actionInvalid:!1}):e.setState({actionTaken:t.target.value,actionInvalid:!0,actionValid:!1})},e.handleDelayChange=function(t){""!=t.target.value?e.setState({reasonForDelay:t.target.value,reasonValid:!0,reasonInvalid:!1}):e.setState({reasonForDelay:t.target.value,reasonValid:!1,reasonInvalid:!0})},e.handleRemarksChange=function(t){""!=t.target.value?e.setState({remarks:t.target.value,remarkValid:!0,remarkInvalid:!1}):e.setState({remarks:t.target.value,remarkValid:!1,remarkInvalid:!0})},e.handleClosingDateChange=function(t){""!==t.target.value?e.setState({closingDate:t.target.value,dateInvalid:!1,dateValid:!0}):e.setState({dateInvalid:!0,dateValid:!1})},e.submitForm=function(){var t=e.props.alert;if(null!=e.state.ticketNo&&void 0!=e.state.ticketNo&&""!=e.state.ticketNo&&null!=e.state.modeOfSupport&&void 0!=e.state.modeOfSupport&&""!=e.state.modeOfSupport&&null!=e.state.actionTaken&&void 0!=e.state.actionTaken&&""!=e.state.actionTaken){var a={};a.ticketNo=parseInt(e.state.ticketNo),a.actionTaken=e.state.actionTaken,a.delayReason=e.state.reasonForDelay,a.remarks=e.state.remarks,a.closingDate=e.state.closingDate,a.userType="Team Member",a.modeOfSupport=e.state.modeOfSupport,console.log("TM Form",a),console.log("Action Taken",a.actionTaken,typeof a.actionTaken),e.dataRequest("/ticket/editTicket",a).then((function(e){void 0!=e.message?t.show(e.message):t.show("Internal Server Error !")})).catch((function(e){console.log("inside TMForm",e)}))}else t.show("Please fill all the required fields")},e.handleReset=function(){e.setState({modeOfSupport:"",modeOfSupportInvalid:!1,modeOfSupportValid:!1,actionTaken:"",actionValid:!1,actionInvalid:!1,reasonForDelay:"",reasonValid:!1,reasonInvalid:!1,remarks:"",remarkValid:!1,remarkInvalid:!1,closingDate:"",dateValid:!1,dateInvalid:!1})},e.handleModeOfSupport=function(t){console.log("sdv",t.target.value),""!=t.target.value&&"Please Select Mode"!=t.target.value?e.setState({modeOfSupport:t.target.value,modeOfSupportValid:!0,modeOfSupportInvalid:!1}):e.setState({modeOfSupportValid:!1,modeOfSupportInvalid:!0})},e.fetchDropDowns=function(){fetch(d.a+"/types/ms").then((function(e){return e.json()})).then((function(t){null==t&&void 0==t||!Array.isArray(t.data)||e.setState({modeOfSupportArr:t.data})})).catch((function(e){return e}))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.fetchDropDowns()}},{key:"dataRequest",value:function(e,t){var a=this;return fetch(d.a+e,{method:"POST",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return(401==e.status||403==e.status)&&a.props.history.push("/login"),e.json()})).catch((function(e){return console.log("chartErr",e),e}))}},{key:"render",value:function(){var e=this,t=this.state.modeOfSupportArr.map((function(e,t){return s.a.createElement("option",{key:t,value:e},e)}));return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.j,{style:{height:"78vh"}},s.a.createElement(c.n,null,"Edit Ticket Form"),s.a.createElement(c.k,{style:{overflowY:"scroll"}},s.a.createElement(c.u,{xs:"3"}),s.a.createElement(c.u,{xs:"7"},s.a.createElement(c.J,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},s.a.createElement(c.K,{row:!0},s.a.createElement(c.u,{md:"3"},s.a.createElement(c.bb,{htmlFor:"text-input"},"Ticket No:")),s.a.createElement(c.u,{xs:"12",md:"9"},s.a.createElement(c.R,{id:"text-input",name:"text-input",disabled:!0,value:this.state.ticketNo,placeholder:"Text"}),s.a.createElement(c.L,null,"You can not edit this"))),s.a.createElement(c.K,{row:!0},s.a.createElement(c.u,{md:"3"},s.a.createElement(c.bb,{htmlFor:"select"},"Mode Of Support",s.a.createElement("span",{style:{color:"red"}},"*"))),s.a.createElement(c.u,{xs:"12",md:"9"},s.a.createElement(c.wb,{custom:!0,name:"select",id:"select",value:this.state.modeOfSupport,valid:this.state.modeOfSupportValid,invalid:this.state.modeOfSupportInvalid,onChange:function(t){return e.handleModeOfSupport(t)}},s.a.createElement("option",null,""!=this.state.modeOfSupport?this.state.modeOfSupport:"Please select Mode"),t),s.a.createElement(c.Qb,null,"Looks Good!"),s.a.createElement(c.Z,null,"This field is required!"))),s.a.createElement(c.K,{row:!0},s.a.createElement(c.u,{md:"3"},s.a.createElement(c.bb,{htmlFor:"textarea-input"},"Action Taken",s.a.createElement("span",{style:{color:"red"}},"*"))),s.a.createElement(c.u,{xs:"12",md:"9"},s.a.createElement(c.Jb,{name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Enter Action Taken...",value:this.state.actionTaken,valid:this.state.actionValid,invalid:this.state.actionInvalid,onChange:function(t){return e.handleActionChange(t)}}),s.a.createElement(c.Qb,null,"Looks Good!"),s.a.createElement(c.Z,null,"This field is required!"))),s.a.createElement(c.K,{row:!0},s.a.createElement(c.u,{md:"3"},s.a.createElement(c.bb,{htmlFor:"textarea-input"},"Reason For Delay")),s.a.createElement(c.u,{xs:"12",md:"9"},s.a.createElement(c.Jb,{name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Enter Reason For Delay...",value:this.state.reasonForDelay,valid:this.state.reasonValid,invalid:this.state.reasonInvalid,onChange:function(t){return e.handleDelayChange(t)}}))),s.a.createElement(c.K,{row:!0},s.a.createElement(c.u,{md:"3"},s.a.createElement(c.bb,{htmlFor:"textarea-input"},"Remarks")),s.a.createElement(c.u,{xs:"12",md:"9"},s.a.createElement(c.Jb,{name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Enter Remarks...",value:this.state.remarks,valid:this.state.remarkValid,invalid:this.state.remarkInvalid,onChange:function(t){return e.handleRemarksChange(t)}}))),s.a.createElement(c.K,{row:!0},s.a.createElement(c.u,{md:"3"},s.a.createElement(c.bb,{htmlFor:"date-input"},"Closing Date")),s.a.createElement(c.u,{xs:"12",md:"9"},s.a.createElement(c.R,{type:"date",id:"date-input",name:"date-input",placeholder:"date",min:v,value:this.state.closingDate,valid:this.state.dateValid,invalid:this.state.dateInvalid,onChange:function(t){return e.handleClosingDateChange(t)}})))))),s.a.createElement(c.l,null,s.a.createElement(c.f,{type:"submit",size:"sm",color:"primary",style:{margin:"3px"},onClick:this.submitForm},"Submit"),s.a.createElement(c.f,{type:"reset",size:"sm",color:"danger",style:{margin:"3px"},onClick:this.handleReset},"Reset"),s.a.createElement(h.b,{to:"/ticketTable"},s.a.createElement(c.f,{size:"sm",color:"dark",style:{margin:"3px"}},"Back")))))}}]),a}(s.a.Component);t.default=Object(p.c)()(f)}}]);
//# sourceMappingURL=34.edc14d00.chunk.js.map
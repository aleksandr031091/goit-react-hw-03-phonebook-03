(this["webpackJsonpgoit-react-hw-03-phonebook-03"]=this["webpackJsonpgoit-react-hw-03-phonebook-03"]||[]).push([[0],{11:function(t,e,n){t.exports={item:"ContactListItem_item__1npan",button:"ContactListItem_button__3EXJi"}},12:function(t,e,n){t.exports={label:"Filter_label__23XmH",input:"Filter_input__3K0YO"}},19:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n(13),c=n.n(r),i=(n(19),n(14)),o=n(4),s=n(5),u=n(8),l=n(7),m=n(6),d=n(9),b=n(3),j=n.n(b),p=n(0),h={name:"",number:""},f=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state=Object(d.a)({},h),t.onHandleSubmit=function(e){e.preventDefault(),t.props.addNewContact(Object(d.a)({},t.state)),t.setState(Object(d.a)({},h))},t.onHandleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(m.a)({},a,r))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{className:j.a.form,onSubmit:this.onHandleSubmit,children:[Object(p.jsxs)("label",{className:j.a.label,children:["Name",Object(p.jsx)("input",{className:j.a.input,type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.onHandleChange})]}),Object(p.jsxs)("label",{className:j.a.label,children:["Phone",Object(p.jsx)("input",{className:j.a.input,type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.onHandleChange})]}),Object(p.jsx)("button",{className:j.a.button,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),v=n(1),O=n.n(v),C=n(11),g=n.n(C),x=function(t){var e=t.name,n=t.number,a=t.removeItem,r=t.id;return Object(p.jsxs)("li",{className:g.a.item,children:[Object(p.jsx)("span",{children:e})," : ",Object(p.jsx)("span",{children:n}),Object(p.jsx)("button",{className:g.a.button,onClick:function(){a(r)},children:"Delete"})]})},_=x;x.prototype={name:O.a.string.isRequired,number:O.a.string.isRequired,removeItem:O.a.func.isRequired,id:O.a.string.isRequired};var y=function(t){var e=t.contacts,n=t.removeContact;return Object(p.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(p.jsx)(_,{id:e,name:a,number:r,removeItem:n},e)}))})},N=y;y.prototype={contacts:O.a.arrayOf(O.a.shape({id:O.a.string.isRequired,name:O.a.string.isRequired,number:O.a.string.isRequired})),removeContact:O.a.func.isRequired};var S=n(25),q=n(12),F=n.n(q),w=function(t){var e=t.onChange,n=t.value;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("label",{className:F.a.label,children:["Find contacts by name",Object(p.jsx)("input",{className:F.a.input,type:"text",value:n,onChange:function(t){e(t.target.value)}})]})})},R=w;w.prototype={onChange:O.a.func.isRequired,value:O.a.string.isRequired};var k=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addNewContact=function(e){var n,a=e.name,r=e.number,c={id:Object(S.a)(),name:a,number:r};null===(n=t.state.contacts.find((function(t){return t.name.toUpperCase()===a.toUpperCase()})))||void 0===n||n.alert("".concat(a,"is already in contacts")),t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(i.a)(e),[c])}}))},t.filterContacts=function(){return t.state.contacts.filter((function(e){return e.name.toUpperCase().includes(t.state.filter.toUpperCase())}))},t.onChangeFilter=function(e){t.setState({filter:e})},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contact&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(f,{addNewContact:this.addNewContact}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(R,{value:this.state.filter,onChange:this.onChangeFilter}),Object(p.jsx)(N,{contacts:this.filterContacts(),removeContact:this.removeContact})]})}}]),n}(a.Component);c.a.render(Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(k,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={form:"ContactForm_form__2IUqW",label:"ContactForm_label__3cSwc",input:"ContactForm_input__2u7Lv",button:"ContactForm_button__1xr6L"}}},[[23,1,2]]]);
//# sourceMappingURL=main.7940a132.chunk.js.map
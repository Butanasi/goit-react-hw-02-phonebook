(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={title:"App_title__nj-Ws"}},13:function(e,t,n){e.exports={container:"Container_container___E7eo"}},2:function(e,t,n){e.exports={label:"Form_label__3__eT",input:"Form_input__3k_Nm",button:"Form_button__3si-X"}},21:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(11),s=n.n(c),i=n(14),o=n(3),l=n(4),u=n(6),b=n(5),m=n(12),d=n(2),h=n.n(d),j=n(0),p=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(m.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number;e.props.onAddContacts({name:a,number:r}),e.resetForm()},e.resetForm=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("label",{className:h.a.label,children:"Name"}),Object(j.jsx)("input",{className:h.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:t,onChange:this.handleChange,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),Object(j.jsx)("label",{className:h.a.label,children:"Tel"}),Object(j.jsx)("input",{className:h.a.input,type:"tel",name:"number",value:n,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),Object(j.jsx)("button",{className:h.a.button,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),f=n(15),O=n(7),_=n.n(O),x=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(j.jsx)("ul",{className:_.a.list,children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(j.jsxs)("li",{className:_.a.item,children:[Object(j.jsxs)("i",{children:[a,":"]}),Object(j.jsx)("b",{children:r}),Object(j.jsx)("button",{className:_.a.button,onClick:function(){return n(t)},children:"Delete"})]},t)}))})},C=n(9),v=n.n(C),g=function(e){var t=e.value,n=e.onChange;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("label",{className:v.a.label,children:"Find contacts by name"}),Object(j.jsx)("input",{className:v.a.input,type:"text",value:t,onChange:n})]})},N=n(13),y=n.n(N),A=function(e){var t=e.children;return Object(j.jsx)("section",{className:y.a.container,children:t})},F=n(10),k=n.n(F),w=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.deleteContacts=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.handleFilter=function(t){e.setState({filter:t.currentTarget.value})},e.addContacts=function(t){var n=t.name,a=t.number,r=e.state.contacts.find((function(e){return e.name===n}));if(r)alert("This name is already in the phone book ");else{var c={id:Object(f.a)(),name:n,number:a};console.log(c),e.setState((function(e){var t=e.contacts;return{contacts:[c].concat(Object(i.a)(t))}}))}},e.getVisibleContacts=function(){var t=e.state,n=t.contacts,a=t.filter.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(a)}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.getVisibleContacts();return Object(j.jsxs)(A,{children:[Object(j.jsx)("h1",{className:k.a.title,children:"Phonebook"}),Object(j.jsx)(p,{onAddContacts:this.addContacts}),Object(j.jsx)("h2",{className:k.a.title,children:"Contacts"}),Object(j.jsx)(g,{value:e,onChange:this.handleFilter}),Object(j.jsx)(x,{contacts:t,onDeleteContact:this.deleteContacts})]})}}]),n}(a.Component),S=w;s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={list:"ContainerList_list__jxQP7",item:"ContainerList_item__awmQo",button:"ContainerList_button__22BN4"}},9:function(e,t,n){e.exports={input:"Filter_input__IAeNm",label:"Filter_label__2y4Cj"}}},[[21,1,2]]]);
//# sourceMappingURL=main.d56d68d5.chunk.js.map
(this["webpackJsonpFloaty-Notes"]=this["webpackJsonpFloaty-Notes"]||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(10),i=n.n(c),s=(n(16),n(11)),r=n(4),l=n(5),d=n(7),h=n(6),j=n(1),u=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={content:""},t.handleChange=function(e){t.setState({content:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state),t.setState({content:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:"form ",children:[Object(j.jsx)("label",{className:"label",children:"Add A Note :"}),Object(j.jsx)("input",{type:"text",onChange:this.handleChange,value:this.state.content})]})})}}]),n}(a.Component),b=n(20),v=function(t){var e=t.todos,n=t.deleteTodo,a=e.length?e.map((function(t){return 0!==t.id?Object(j.jsxs)(b.a.div,{className:"collection-item  row cont grey lighten-2",drag:!0,dragConstraints:{top:0,left:-115,right:115,bottom:0},children:[Object(j.jsx)("span",{className:"col",children:t.content}),Object(j.jsxs)(b.a.span,{whileHover:{scale:1.3},className:"col right butt",onClick:function(){n(t.id)},children:[" ","Delete"]})]},t.id):null})):null;return Object(j.jsx)("div",{className:"todos collection",children:a})},O=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)(b.a.div,{className:"col green prog lighten-4",whileHover:{color:"black"},children:"COMPLETED"}),Object(j.jsx)(b.a.div,{className:"col right red prog lighten-3",whileHover:{color:"black"},children:"INCOMPLETE"})]})}}]),n}(a.Component),f={hidden:{opacity:0},visible:{opacity:1,transition:{duration:1}}},p={hidden:{y:1e3},visible:{y:0}},m=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={todos:[{id:0,content:""}]},t.deleteTodo=function(e){var n=t.state.todos.filter((function(t){return t.id!==e}));t.setState({todos:n})},t.addTodo=function(e){e.id=Math.random();var n=[].concat(Object(s.a)(t.state.todos),[e]);t.setState({todos:n})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(b.a.div,{className:"todo-app container",variants:f,initial:"hidden",animate:"visible",children:[Object(j.jsx)(b.a.h4,{className:"center heading",variants:p,initial:"hidden",animate:"visible",children:"FloatyNotes"}),Object(j.jsxs)(b.a.div,{class:"inside",children:[Object(j.jsx)("div",{className:"conainer",children:Object(j.jsx)(v,{todos:this.state.todos,deleteTodo:this.deleteTodo})}),Object(j.jsx)(O,{}),Object(j.jsx)(u,{addTodo:this.addTodo})]})]})})}}]),n}(a.Component),g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),o(t),c(t),i(t)}))};i.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),g()}},[[18,1,2]]]);
//# sourceMappingURL=main.4b5d85d5.chunk.js.map
(this.webpackJsonpkitchen=this.webpackJsonpkitchen||[]).push([[9],{40:function(e,t,n){"use strict";var a=n(8),c=n(9),r=n(42),i=n.n(r),o="//"+window.location.hostname+":2004",d=function(){function e(){Object(a.a)(this,e)}return Object(c.a)(e,null,[{key:"getBookmark",value:function(){return i()({method:"GET",url:o+"/api/bookmark"}).then((function(e){return e.data}))}},{key:"addBookmark",value:function(e){return i()({method:"POST",url:o+"/api/bookmark",data:e}).then((function(e){return e.data}))}},{key:"getTags",value:function(){return i()({method:"GET",url:o+"/api/tags"}).then((function(e){return e.data}))}},{key:"addTag",value:function(e){return i()({method:"POST",url:o+"/api/tags",data:e}).then((function(e){return e.data}))}},{key:"deleteTag",value:function(e){return i()({method:"DELETE",url:"".concat(o,"/api/tags/").concat(e)}).then((function(e){return e.data}))}},{key:"updateTag",value:function(e){return i()({method:"PATCH",url:"".concat(o,"/api/tags/").concat(e.id),data:e}).then((function(e){return e.data}))}},{key:"addRecipe",value:function(e){return i()({method:"POST",url:"".concat(o,"/api/recipe"),data:e}).then((function(e){return e.data}))}},{key:"deleteRecipe",value:function(e){return i()({method:"DELETE",url:"".concat(o,"/api/recipe/").concat(e)}).then((function(e){return e.data}))}},{key:"saveRecipe",value:function(e){return i()({method:"PATCH",url:"".concat(o,"/api/recipe/").concat(e.id),data:e}).then((function(e){return e.data}))}},{key:"search",value:function(e){return i()({method:"POST",url:"".concat(o,"/api/search"),data:e}).then((function(e){return e.data}))}},{key:"random",value:function(){return i()({method:"POST",url:"".concat(o,"/api/random")}).then((function(e){return e.data}))}},{key:"getRecipe",value:function(e){return i()({method:"GET",url:"".concat(o,"/api/recipe/").concat(e)}).then((function(e){return e.data}))}},{key:"cameraUpload",value:function(e){return i()({method:"POST",url:"".concat(o,"/api/camera"),data:e}).then((function(e){return e.data}))}},{key:"gmail",value:function(e){return i()({method:"POST",url:"".concat(o,"/api/recipe/").concat(e.id,"/gmail"),data:e}).then((function(e){return e.data}))}},{key:"sendgrid",value:function(e){return i()({method:"POST",url:"".concat(o,"/api/recipe/").concat(e.id,"/sendgrid"),data:e}).then((function(e){return e.data}))}},{key:"upload",value:function(e){var t=new FormData;t.append(e.filename,e.file);var n=new Request("".concat(o,"/api/upload"),{method:"POST","content-type":"multipart/form-data",body:t});return fetch(n).then((function(e){return e.json()})).catch((function(e){return alert("Server error."),e}))}}]),e}();t.a=d},41:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},79:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n(41),c=n(8),r=n(9),i=n(19),o=n(11),d=n(10),u=n(0),s=n.n(u),l=n(20),p=n(40),h=n(1),m=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(u.Fragment,{children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-12 col-md-2",children:"Name"}),Object(h.jsx)("div",{className:"col-12 col-md-7",children:Object(h.jsx)("input",{type:"text",className:"form-control",name:"recipe_name",onChange:this.props.handleInputChange,value:this.props.recipe_name||""})})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-12 col-md-2",children:"Recipe"}),Object(h.jsx)("div",{className:"col-12 col-md-8",children:Object(h.jsx)("textarea",{name:"recipe",value:this.props.recipe,onChange:this.props.handleInputChange,className:"form-control ocr-textbox"})})]})]})}}]),n}(s.a.Component),b=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(u.Fragment,{children:[Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-12",children:["Image:\xa0\xa0\xa0\xa0",Object(h.jsx)("input",{name:"imagefile",id:"imagefile",type:"file",onChange:this.props.handleUpload})]})})]})}}]),n}(s.a.Component),j=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(u.Fragment,{children:[Object(h.jsx)("div",{className:"row button-row",children:Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.props.addRecipe,children:"Add"}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.props.backToUpload,children:"Back To Upload"})]})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})}}]),n}(s.a.Component),f=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={showForm:!1,showUpload:!0,image:"",recipe:"",recipe_name:""},a.handleInputChange=a.handleInputChange.bind(Object(i.a)(a)),a.addRecipe=a.addRecipe.bind(Object(i.a)(a)),a.handleUpload=a.handleUpload.bind(Object(i.a)(a)),a}return Object(r.a)(n,[{key:"handleInputChange",value:function(e){var t=e.target,n=t.name,c=t.value;this.setState(Object(a.a)({},n,c))}},{key:"backToUpload",value:function(){this.setState({recipe_name:"",recipe:"",showUpload:!0,showForm:!1})}},{key:"handleUpload",value:function(e){var t,n=this;t=document.getElementById("imagefile"),document.getElementById("spinner-holder").style.display="block";var a={file:t.files[0],filename:"imagefile"};p.a.upload(a).then((function(e){document.getElementById("spinner-holder").style.display="none",n.setState({recipe:e.text,showUpload:!1,showForm:!0})}))}},{key:"addRecipe",value:function(){var e=this,t=JSON.parse(JSON.stringify(this.state)),n=!1;if(""===this.state.recipe_name&&(n=!0,l.a.error("Missing recipe name")),""===this.state.recipe&&(n=!0,l.a.error("Missing recipe")),!n){var a={recipe_name:t.recipe_name,recipe:t.recipe,bookmarked:"n",ingredients:"",tags:[]};document.getElementById("spinner-holder").style.display="block",p.a.addRecipe(a).then((function(t){document.getElementById("spinner-holder").style.display="none",0!==parseInt(t.id)?(l.a.success("Recipe added!"),e.setState({recipe_name:"",recipe:"",showCamera:!0,showPictureForm:!1})):l.a.error("There was an error saving")}))}}},{key:"render",value:function(){return Object(h.jsxs)(u.Fragment,{children:[Object(h.jsx)("div",{className:this.state.showUpload?"":"hidden",children:Object(h.jsx)(b,{handleUpload:this.handleUpload})}),Object(h.jsxs)("div",{className:this.state.showForm?"":"hidden",children:[Object(h.jsx)(j,{addRecipe:this.addRecipe,backToUpload:this.backToUpload}),Object(h.jsx)(m,{handleInputChange:this.handleInputChange,recipe:this.state.recipe,recipe_name:this.state.recipe_name}),Object(h.jsx)(j,{addRecipe:this.addRecipe,backToUpload:this.backToUpload})]})]})}}]),n}(s.a.Component)}}]);
//# sourceMappingURL=9.b16446bb.chunk.js.map
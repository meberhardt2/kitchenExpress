(this.webpackJsonpkitchen=this.webpackJsonpkitchen||[]).push([[4],{40:function(e,t,a){"use strict";var n=a(8),r=a(9),i=a(42),s=a.n(i),c="//"+window.location.hostname+":2004",o=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,null,[{key:"getBookmark",value:function(){return s()({method:"GET",url:c+"/api/bookmark"}).then((function(e){return e.data}))}},{key:"addBookmark",value:function(e){return s()({method:"POST",url:c+"/api/bookmark",data:e}).then((function(e){return e.data}))}},{key:"getTags",value:function(){return s()({method:"GET",url:c+"/api/tags"}).then((function(e){return e.data}))}},{key:"addTag",value:function(e){return s()({method:"POST",url:c+"/api/tags",data:e}).then((function(e){return e.data}))}},{key:"deleteTag",value:function(e){return s()({method:"DELETE",url:"".concat(c,"/api/tags/").concat(e)}).then((function(e){return e.data}))}},{key:"updateTag",value:function(e){return s()({method:"PATCH",url:"".concat(c,"/api/tags/").concat(e.id),data:e}).then((function(e){return e.data}))}},{key:"addRecipe",value:function(e){return s()({method:"POST",url:"".concat(c,"/api/recipe"),data:e}).then((function(e){return e.data}))}},{key:"deleteRecipe",value:function(e){return s()({method:"DELETE",url:"".concat(c,"/api/recipe/").concat(e)}).then((function(e){return e.data}))}},{key:"saveRecipe",value:function(e){return s()({method:"PATCH",url:"".concat(c,"/api/recipe/").concat(e.id),data:e}).then((function(e){return e.data}))}},{key:"search",value:function(e){return s()({method:"POST",url:"".concat(c,"/api/search"),data:e}).then((function(e){return e.data}))}},{key:"random",value:function(){return s()({method:"POST",url:"".concat(c,"/api/random")}).then((function(e){return e.data}))}},{key:"getRecipe",value:function(e){return s()({method:"GET",url:"".concat(c,"/api/recipe/").concat(e)}).then((function(e){return e.data}))}},{key:"cameraUpload",value:function(e){return s()({method:"POST",url:"".concat(c,"/api/camera"),data:e}).then((function(e){return e.data}))}},{key:"gmail",value:function(e){return s()({method:"POST",url:"".concat(c,"/api/recipe/").concat(e.id,"/gmail"),data:e}).then((function(e){return e.data}))}},{key:"sendgrid",value:function(e){return s()({method:"POST",url:"".concat(c,"/api/recipe/").concat(e.id,"/sendgrid"),data:e}).then((function(e){return e.data}))}},{key:"upload",value:function(e){var t=new FormData;t.append(e.filename,e.file);var a=new Request("".concat(c,"/api/upload"),{method:"POST","content-type":"multipart/form-data",body:t});return fetch(a).then((function(e){return e.json()})).catch((function(e){return alert("Server error."),e}))}}]),e}();t.a=o},41:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},43:function(e,t,a){"use strict";function n(e,t){var a=e.tag.toUpperCase(),n=t.tag.toUpperCase(),r=0;return a>n?r=1:a<n&&(r=-1),r}a.d(t,"a",(function(){return n}))},45:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(41);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},46:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(8),r=a(9),i=a(11),s=a(10),c=a(0),o=a.n(c),d=a(1),l=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e={},t="modal fade",a="modal-backdrop fade";return this.props.showModal&&(e={paddingRight:"17px",display:"block"},t="modal fade show",a="modal-backdrop fade show"),Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)("div",{className:t,role:"dialog",style:e,children:Object(d.jsx)("div",{className:"modal-dialog",role:"document",children:Object(d.jsxs)("div",{className:"modal-content",children:[Object(d.jsx)("div",{className:"modal-header",children:Object(d.jsx)("h5",{className:"modal-title",children:this.props.title})}),Object(d.jsx)("div",{className:"modal-body",dangerouslySetInnerHTML:{__html:this.props.body}}),Object(d.jsxs)("div",{className:"modal-footer",children:[Object(d.jsx)("button",{type:"button",className:"btn "+this.props.primaryStyle,onClick:this.props.primaryAction,children:this.props.primaryText}),""!==this.props.secondaryText&&Object(d.jsx)("button",{type:"button",className:"btn "+this.props.secondaryStyle,onClick:this.props.secondaryAction,children:this.props.secondaryText})]})]})})}),Object(d.jsx)("div",{className:a})]})}}]),a}(o.a.Component),u=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(d.jsx)(l,{showModal:this.props.showModal,title:"Confirmation",body:"Proceed with deletion?",primaryText:"Delete",primaryAction:this.props.modalAction,primaryStyle:"btn-danger",secondaryText:"Cancel",secondaryAction:this.props.closeModal,secondaryStyle:"btn-secondary"})}}]),a}(o.a.Component)},47:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(8),r=a(9),i=a(19),s=a(11),c=a(10),o=a(0),d=a.n(o),l=a(1),u=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).addTag=r.addTag.bind(Object(i.a)(r)),r}return Object(r.a)(a,[{key:"addTag",value:function(e){e.preventDefault(),this.props.addTag(this.props.tag)}},{key:"render",value:function(){var e=this;return Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-12",children:Object(l.jsxs)("a",{href:"# ",onClick:function(t){return e.addTag(t)},children:[Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4wMIFxgOotqRGAAAAYFJREFUSMfFlb9OAkEQxr+zgkhzxA56wHcQ0AdAO1tj1FeA8EhUSumfRKRSaf2f2EgtGHp/NnNmcx53Rzh1ks0mM998MzuzOyv9snhxRqAoaUdSS1JVUtlMY0mPkvqSjj3Pe18oKpAHusAHyTI1bD4teRkYOQSnwAFQAVZtVYFD4MzBjYBSGvKxOTwB9RQJNYBn8xnPDWJlCTK/BPwFSuoDA/O9AXJRoK6Tub/obQGKwItxdKKMQUPrMSRDYBhjbzqN913DftDQhCwBSMCcG2xPklZM37K9l8Hb6oU4Jas7QCWDE1QN9ugqZ6YsRNQ8SYYhn4LpZ26JspSA8/NPShREu7d9I4MTBNf8zg3Qt303gwC7Ic7vhza1ozWWeGhbxjH5MQ2cUfEKrC05KtpRgBxwa4DBgsOuCFzFDjsDlpxx/Qw0U5BvOpm/pfkTSpZFIOfAEVCzR1QA1k134eCuE8lD5eo4jY+TCdCeV5akT9+XtG2Dqxb69B/sKp54njfRf8kXFOiYEKlDfDgAAAAASUVORK5CYII=",alt:"add tag"}),"\xa0",Object(l.jsx)("span",{className:"tag-link",children:this.props.tag.tag})]})})})}}]),a}(d.a.Component)},48:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(8),r=a(9),i=a(19),s=a(11),c=a(10),o=a(0),d=a.n(o),l=a(1),u=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).removeTag=r.removeTag.bind(Object(i.a)(r)),r}return Object(r.a)(a,[{key:"removeTag",value:function(e){e.preventDefault(),this.props.removeTag(this.props.tag)}},{key:"render",value:function(){var e=this;return Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-12",children:Object(l.jsxs)("a",{href:"# ",onClick:function(t){return e.removeTag(t)},children:[Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4wMIFyA6lPHZVgAAAXxJREFUSMfFlbtOAlEQhv+1gkizxA56wHcQ0AdAO1pj1FeA8EhUSqmYiFQqrYqY2EgtGHo/m1lzsiLsyqqTnJxkLv/MmduRfpm8RUIgK2lPUk1SUVLeRGNJQ0kdSSee573G8gqkgRbwxnKamm46KngeGDgAZ8AhUADW7RSBI+Dc0RsAuSjgYzN4BMoRAqoAI7MZf+vE0hJEfgn4MVLqAz2zvQFS85RaTuR+3G4BssCTYTTnCYOCln/akkDVKbzvCg6Cgq7a90DXsPYlac34NbvbCcxWO4QpWd4BCgm8oGhYQ5c5M2YmpNyPMGj9kE3G+DM3RUlSgPn+JykKvN3bvZXAC4I2v3MddOyuJ+CgHsL8HLSpPa2yQnp2DGPyZRs4q+IZ2FhxVTTmKaSAW1PoxVx2WeBq4bIzxZyzrkdANQL4thP5S5Q/IWdRBNQFjoGSDVEG2DTehaN3vRQ8lK6mU/hFNAEa36Vl2afvS9q1xVUKffoP1oqnnudN9F/0AZA4cSja75VSAAAAAElFTkSuQmCC",alt:"remove tag"}),"\xa0",Object(l.jsx)("span",{className:"tag-link",children:this.props.tag.tag})]})})})}}]),a}(d.a.Component)},80:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return A}));var n=a(45),r=a(41),i=a(8),s=a(9),c=a(19),o=a(11),d=a(10),l=a(0),u=a.n(l),p=a(20),h=a(40),m=a(47),g=a(48),b=a(1),j=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsxs)(l.Fragment,{children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-12 col-md-2",children:"Name"}),Object(b.jsx)("div",{className:"col-12 col-md-7",children:Object(b.jsx)("input",{type:"text",className:"form-control",name:"recipe_name",onChange:this.props.handleInputChange,value:this.props.recipe_name||""})}),Object(b.jsx)("div",{className:"col-12 col-md-2",children:Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"checkbox",value:"y",name:"bookmarked",checked:"y"===this.props.bookmarked,onChange:this.props.handleInputChange})," bookmarked"]})})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-12 col-md-2"}),Object(b.jsx)("div",{className:"col-12 col-md-5",children:Object(b.jsxs)("div",{className:"tag-holder",children:[Object(b.jsx)("div",{className:"tag-holder-header",children:"Assigned Tag(s)"}),this.props.tags.map((function(t,a){return Object(b.jsx)(g.a,{tag:t,removeTag:e.props.removeTag},t.id)}))]})}),Object(b.jsx)("div",{className:"col-12 col-md-5",children:Object(b.jsxs)("div",{className:"tag-holder",children:[Object(b.jsx)("div",{className:"tag-holder-header",children:"Available Tag(s)"}),this.props.all_tags.map((function(t,a){return Object(b.jsx)(m.a,{tag:t,addTag:e.props.addTag},t.id)}))]})})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-12 col-md-2",children:"Ingredients"}),Object(b.jsx)("div",{className:"col-12 col-md-10",children:Object(b.jsx)("textarea",{className:"form-control ingredients",name:"ingredients",onChange:this.props.handleInputChange,value:this.props.ingredients||""})})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-12 col-md-2",children:"Recipe"}),Object(b.jsx)("div",{className:"col-12 col-md-10",children:Object(b.jsx)("textarea",{className:"form-control recipe",name:"recipe",onChange:this.props.handleInputChange,value:this.props.recipe||""})})]})]})}}]),a}(u.a.Component),O=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleModal=n.handleModal.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"handleModal",value:function(){this.props.handleModal("delete_recipe")}},{key:"render",value:function(){return Object(b.jsxs)(l.Fragment,{children:[Object(b.jsx)("div",{className:"row button-row",children:Object(b.jsxs)("div",{className:"col-12",children:[0===parseInt(this.props.id)&&Object(b.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.props.addRecipe,children:"Add"}),0!==parseInt(this.props.id)&&Object(b.jsxs)(l.Fragment,{children:[Object(b.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.props.saveRecipe,children:"Save"}),Object(b.jsx)("button",{type:"button",className:"btn btn-danger",onClick:this.handleModal,children:"Delete"})]})]})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]})}}]),a}(u.a.Component),v=a(43),f=a(46),A=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={id:0,recipe_name:"",recipe:"",bookmarked:"n",ingredients:"",tags:[],all_tags:[],all_tags_immutable:[],showModal:!1,delete_id:0,modalAction:""},n.handleInputChange=n.handleInputChange.bind(Object(c.a)(n)),n.getRecipe=n.getRecipe.bind(Object(c.a)(n)),n.addTag=n.addTag.bind(Object(c.a)(n)),n.removeTag=n.removeTag.bind(Object(c.a)(n)),n.addRecipe=n.addRecipe.bind(Object(c.a)(n)),n.saveRecipe=n.saveRecipe.bind(Object(c.a)(n)),n.modalAction=n.modalAction.bind(Object(c.a)(n)),n.closeModal=n.closeModal.bind(Object(c.a)(n)),n.handleModal=n.handleModal.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.getElementById("spinner-holder").style.display="block",h.a.getTags().then((function(t){e.setState({all_tags:t,all_tags_immutable:t},(function(){0!==parseInt(this.props.match.params.id,0)?this.getRecipe(this.props.match.params.id):document.getElementById("spinner-holder").style.display="none"}))}))}},{key:"getRecipe",value:function(e){var t=this;h.a.getRecipe(e).then((function(e){for(var a=0;a<e.tags.length;a++)t.addTag(e.tags[a]);t.setState({id:e.id,recipe_name:e.recipe_name,recipe:e.recipe,bookmarked:e.bookmarked,ingredients:e.ingredients,tags:e.tags}),document.getElementById("spinner-holder").style.display="none"}))}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.name,n="";n="checkbox"===t.type?t.checked?"y":"n":t.value,this.setState(Object(r.a)({},a,n))}},{key:"addTag",value:function(e){for(var t=JSON.parse(JSON.stringify(this.state)),a=t.all_tags.slice(0),n=t.tags.slice(0),r=-1,i=0;i<a.length;i++)parseInt(a[i].id,10)===parseInt(e.id,10)&&(r=i);r>=0&&a.splice(r,1),n.push({id:e.id,tag:e.tag}),n.sort(v.a),this.setState({all_tags:a,tags:n})}},{key:"removeTag",value:function(e){for(var t=JSON.parse(JSON.stringify(this.state)),a=t.all_tags.slice(0),n=t.tags.slice(0),r=-1,i=0;i<n.length;i++)parseInt(n[i].id,10)===parseInt(e.id,10)&&(r=i);r>=0&&n.splice(r,1),a.push({id:e.id,tag:e.tag}),a.sort(v.a),this.setState({all_tags:a,tags:n})}},{key:"addRecipe",value:function(){var e=this,t=JSON.parse(JSON.stringify(this.state)),a=!1;if(""===this.state.recipe_name&&(a=!0,p.a.error("Missing recipe name")),""===this.state.recipe&&(a=!0,p.a.error("Missing recipe")),0===this.state.tags.length&&(a=!0,p.a.error("Missing tag(s)")),""===this.state.ingredients&&(a=!0,p.a.error("Missing ingrediants")),!a){var n={recipe_name:t.recipe_name,recipe:t.recipe,bookmarked:t.bookmarked,ingredients:t.ingredients,tags:t.tags};document.getElementById("spinner-holder").style.display="block",h.a.addRecipe(n).then((function(a){document.getElementById("spinner-holder").style.display="none",0!==parseInt(a.id)?(p.a.success("Recipe added!"),e.setState({recipe_name:"",recipe:"",bookmarked:"n",ingredients:"",tags:[],all_tags:t.all_tags_immutable})):p.a.error("There was an error saving")}))}}},{key:"saveRecipe",value:function(){var e=JSON.parse(JSON.stringify(this.state)),t=!1;if(""===this.state.recipe_name&&(t=!0,p.a.error("Missing recipe name")),""===this.state.recipe&&(t=!0,p.a.error("Missing recipe")),0===this.state.tags.length&&(t=!0,p.a.error("Missing tag(s)")),""===this.state.ingredients&&(t=!0,p.a.error("Missing ingrediants")),!t){var a={id:e.id,recipe_name:e.recipe_name,recipe:e.recipe,bookmarked:e.bookmarked,ingredients:e.ingredients,tags:e.tags};document.getElementById("spinner-holder").style.display="block",h.a.saveRecipe(a).then((function(e){document.getElementById("spinner-holder").style.display="none",p.a.success("Recipe saved!")}))}}},{key:"handleModal",value:function(e,t){this.setState({showModal:!0,modalAction:e})}},{key:"closeModal",value:function(){this.setState({showModal:!1})}},{key:"modalAction",value:function(){var e=this,t=JSON.parse(JSON.stringify(this.state));this.setState({showModal:!1}),document.getElementById("spinner-holder").style.display="block",h.a.deleteRecipe(t.id).then((function(a){e.setState({id:0,recipe_name:"",recipe:"",bookmarked:"n",ingredients:"",tags:[],all_tags:t.all_tags_immutable}),p.a.success("Recipe has been deleted"),document.getElementById("spinner-holder").style.display="none"}))}},{key:"render",value:function(){return Object(b.jsxs)(l.Fragment,{children:[Object(b.jsx)(O,{id:this.state.id,addRecipe:this.addRecipe,saveRecipe:this.saveRecipe,handleModal:this.handleModal}),Object(b.jsx)(j,Object(n.a)(Object(n.a)({handleInputChange:this.handleInputChange},this.state),{},{addTag:this.addTag,removeTag:this.removeTag})),Object(b.jsx)(O,{id:this.state.id,addRecipe:this.addRecipe,saveRecipe:this.saveRecipe,handleModal:this.handleModal}),Object(b.jsx)(f.a,{showModal:this.state.showModal,closeModal:this.closeModal,modalAction:this.modalAction})]})}}]),a}(u.a.Component)}}]);
//# sourceMappingURL=4.8bf7c0e2.chunk.js.map
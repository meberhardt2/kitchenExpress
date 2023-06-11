"use strict";(self.webpackChunkkitchen=self.webpackChunkkitchen||[]).push([[416],{374:function(e,n,t){var a=t(671),r=t(144),c=t(573),i=window&&window.location&&window.location.hostname;var o="".concat("devprod.eberhardt.cloud"===i?"http://devprod.eberhardt.cloud:4100":""),u=function(){function e(){(0,a.Z)(this,e)}return(0,r.Z)(e,null,[{key:"getBookmark",value:function(){return(0,c.Z)({method:"GET",url:o+"/api/bookmark"}).then((function(e){return e.data}))}},{key:"addBookmark",value:function(e){return(0,c.Z)({method:"POST",url:o+"/api/bookmark",data:e}).then((function(e){return e.data}))}},{key:"getTags",value:function(){return(0,c.Z)({method:"GET",url:o+"/api/tags"}).then((function(e){return e.data}))}},{key:"addTag",value:function(e){return(0,c.Z)({method:"POST",url:o+"/api/tags",data:e}).then((function(e){return e.data}))}},{key:"deleteTag",value:function(e){return(0,c.Z)({method:"DELETE",url:"".concat(o,"/api/tags/").concat(e)}).then((function(e){return e.data}))}},{key:"updateTag",value:function(e){return(0,c.Z)({method:"PATCH",url:"".concat(o,"/api/tags/").concat(e.id),data:e}).then((function(e){return e.data}))}},{key:"addRecipe",value:function(e){return(0,c.Z)({method:"POST",url:"".concat(o,"/api/recipe"),data:e}).then((function(e){return e.data}))}},{key:"deleteRecipe",value:function(e){return(0,c.Z)({method:"DELETE",url:"".concat(o,"/api/recipe/").concat(e)}).then((function(e){return e.data}))}},{key:"saveRecipe",value:function(e){return(0,c.Z)({method:"PATCH",url:"".concat(o,"/api/recipe/").concat(e.id),data:e}).then((function(e){return e.data}))}},{key:"search",value:function(e){return(0,c.Z)({method:"POST",url:"".concat(o,"/api/search"),data:e}).then((function(e){return e.data}))}},{key:"random",value:function(){return(0,c.Z)({method:"POST",url:"".concat(o,"/api/random")}).then((function(e){return e.data}))}},{key:"getRecipe",value:function(e){return(0,c.Z)({method:"GET",url:"".concat(o,"/api/recipe/").concat(e)}).then((function(e){return e.data}))}},{key:"cameraUpload",value:function(e){return(0,c.Z)({method:"POST",url:"".concat(o,"/api/camera"),data:e}).then((function(e){return e.data}))}},{key:"gmail",value:function(e){return(0,c.Z)({method:"POST",url:"".concat(o,"/api/recipe/").concat(e.id,"/gmail"),data:e}).then((function(e){return e.data}))}},{key:"sendgrid",value:function(e){return(0,c.Z)({method:"POST",url:"".concat(o,"/api/recipe/").concat(e.id,"/sendgrid"),data:e}).then((function(e){return e.data}))}},{key:"upload",value:function(e){var n=new FormData;n.append(e.filename,e.file);var t=new Request("".concat(o,"/api/upload"),{method:"POST","content-type":"multipart/form-data",body:n});return fetch(t).then((function(e){return e.json()})).catch((function(e){return alert("Server error."),e}))}}]),e}();n.Z=u},341:function(e,n,t){t(313);var a=t(417);n.Z=function(e){return(0,a.jsxs)("div",{className:"recipe-viewer",children:[(0,a.jsx)("h3",{children:e.recipe.recipe_name}),(0,a.jsx)("div",{className:"row",children:(0,a.jsxs)("div",{className:"col-12",children:[(0,a.jsx)("div",{children:(0,a.jsx)("strong",{children:"Ingredients"})}),(0,a.jsx)("br",{}),e.recipe.ingredients]})}),(0,a.jsx)("div",{className:"row",children:(0,a.jsxs)("div",{className:"col-12",children:[(0,a.jsx)("div",{children:(0,a.jsx)("strong",{children:"Recipe"})}),(0,a.jsx)("br",{}),e.recipe.recipe]})})]})}},416:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var a=t(439),r=t(313),c=t(374),i=t(341),o=t(417);var u=function(){var e=(0,r.useState)({recipe:{}}),n=(0,a.Z)(e,2),t=n[0],u=n[1];(0,r.useEffect)((function(){d()}),[]);var d=function(){console.log("refresh"),document.getElementById("spinner-holder").style.display="block",c.Z.getBookmark().then((function(e){document.getElementById("spinner-holder").style.display="none",u({recipe:e})}))};return(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)("div",{className:"row button-row",children:(0,o.jsx)("div",{className:"col-12",children:(0,o.jsx)("button",{className:"btn refresh",onClick:d,children:(0,o.jsx)("img",{src:"data:image/png;base64,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",alt:"refresh"})})})}),"undefined"!==typeof t.recipe.id&&(0,o.jsx)(i.Z,{recipe:t.recipe}),"undefined"===typeof t.recipe.id&&(0,o.jsx)(r.Fragment,{children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-12 text-center",children:"Nothing Bookmarked :-("})})})]})}}}]);
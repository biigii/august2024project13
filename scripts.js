// var mainHeading = document.createElement("h1")
// // mainHeading.innerHTML = "hello world";
// mainHeading.textContent = "hello world";
// document.body.appendChild(mainHeading)

var p = document.createElement("p");
p.textContent = "some text from javascript";
var content = document.querySelector("article.content");
content.appendChild(p) ;

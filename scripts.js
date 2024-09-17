// alert("hello");

//  strings and numbers
// we use " "  or ' ' for string


var number1 = 100;
var number2 = 200;
var number3 = "300";

// console.log(number1 + number2)
// console.log(number1 + number3)

number2 = 500;
var name = 'John'
var address = "123 street"

// list or array , we use square brackets for arrays [ ]
var fruits = ["apple", "orange", "kiwi", "cherry"];

console.log(fruits);
console.log(fruits[0])

var numbers = [100, 2, 0, 1000000, 67];
var anything = [100, "hello", 2, "street", "apple", 0]

// console.log(number2)

// console.log(document.body)
// in css we had background-color
// camel casing = backgroundColor
// margin-left = marginLeft
// border-radius = borderRadius
// font-size = fontSize
// document.body.style.backgroundColor = "rgb(123,23,70)";

// document.getElementById("heading").style.color = "#fff";
// document.getElementById("heading").style.backgroundColor = "#000";
// document.getElementById("heading").style.fontSize = "5em";
// document.getElementById("heading").style.textTransform = "uppercase";


var h1 = document.getElementById("heading");
h1.style.color = "#f11";
h1.style.backgroundColor = "#000";
h1.style.textAlign = "center";
h1.style.textTransform = "capitalize";

var subHeadings = document.getElementsByClassName("subheading");
// var subHeadings = document.getElementsByTagName("h2")
// console.log(subHeadings[0])

subHeadings[0].style.color = "#f99"

// var mainHeading = document.querySelector("h1");
// var mainHeading = document.querySelector("#heading")
var mainHeading = document.querySelector("h1#heading.heading");

var formTextInput = document.querySelector('[type="text"]');
var subheading = document.querySelector(".subheading");

var photo = document.querySelector("[data-something]");
photo.style.rotate = "45deg"; 

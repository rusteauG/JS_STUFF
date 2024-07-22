// const name = prompt("Enter Your Name:");
// //check if the input is empty or a number
// if (name.trim === "" || !isNaN(parseFloat(name))) {
// 	alert("please enter string only thst is not a number");
// } else {
// 	alert(`Hi ${name}`);
// }
var test = document.getElementById("id");

//using innerHTML
var innerText = (document.getElementById("myDiv").innerHTML =
	"<em>Hello, world!</em>");
//innerHTML renders the HTML tags as formatted text
var text = (document.getElementById("myContent").textContent =
	"<strong>Hello, world!</strong> Parsed as Literal Text");
//innerHTML and textContent are not the same. innerHTML is used to set or retrieve HTML content, while textContent is used to set or retrieve plain text content, without interpreting any HTML tags.
innerText += '<p style="color: red";>This text is red.</p>';
document.getElementById("myDiv").innerHTML = innerText;
console.log(innerText);

text = document.getElementById("myContent");
text.style.color = "blue";

// innerText dpesnt parse html only text like textContent

const boldText = document.getElementById("myDiv");
boldText.style.fontWeight = "bolder";
boldText.innerText = "Welcome to JS";

// eg#1
// 1)concata string and var together
let greeting = "Hello, ";
let name = "Neville";
let num = 123;
let fullGreeting = greeting.concat(name, " ", num);
console.log(fullGreeting);
console.log(name + " " + num);
console.log(name, num);
console.log("Age:" + 123);

const greet = document.getElementById("greeting");
greet.innerText = fullGreeting;
greet.style.fontFamily = "Georgia, serif";
greet.style.color = "#006699";
// -------------------------------------------------------------

//
let person = { name: "Alice", age: 25 };

// Comma-separated format
console.log("Person:", person); //

// String concatenation
console.log("Person: " + person); //object object
//  the person object is logged directly, whereas with string concatenation, it's converted to the string "[object Object]", which is less informative.

// So, in summary, the comma-separated format in console.log() provides more flexibility and better type handling compared to string concatenation, making it a more convenient and readable way to log multiple values in your JavaScript code.

//String Manipulation
var sentenceNode = document.getElementById("sentence");
var sentence = sentenceNode.innerText; //inner text literal A string

sentenceNode.style.textTransform = "uppercase"; //Apply on the node

// using js to make the string lowercase
console.log(sentence.toLowerCase());

//put into a new <p> with id sentenceLower
//create a new p element
const newPElement = document.createElement("p");

// set the text conten of the p elem
newPElement.textContent = sentence;

// Get the container elem where we want to append hte new p elm
const pContainer = document.getElementById("content");

// Append the new p element to container
pContainer.appendChild(newPElement);

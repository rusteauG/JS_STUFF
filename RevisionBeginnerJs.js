//Check for empty string trim leadin and trailing spaces
const name = "      d  ";
console.log(name.trim() === "");

console.log(parseFloat(name));
console.log(isNaN(parseFloat(name)));

if (!isNaN(parseFloat(name)) || name.trim === "") {
	console.log("Not a sTring Value");
} else {
	console.log(`You Entered a ${typeof name}`);
}

console.log(isNaN(2));
console.log(isNaN("d"));

// variables

/* var - function scoped-accsed in func or globally,can be re-assigned,redclared
within same scope, intialize with undefined if no value is provided
*/
function example() {
	console.log(x);
	var x = 10;
	console.log(x);
}
example();
console.log(x);
var x = 20;
console.log(x);
example();

// let -block level scope, can re-assign but not re-decl,Ref Error is not initialized
// if (true) {
//   // console.log(z);
//   let z=0;
// }
// console.log(z);

// Type Coercion-Automatic conversion of vlas one data type to another
//Numeric Coercion
console.log(5 + "2"); //String concat
console.log(5 - "2"); //numeric sub
console.log("5" * "2");
console.log("5" / "2");

//Boolean Coercion
//Falsy values 0 , ' ' , null , undefined NaN, false are Converted to FALSE
console.log(Boolean(0));
console.log(Boolean("")); //Empty String with no chars falsy
// console.log(Boolean(' '));// String with whitespaces , space,tabnewlines is truthy
console.log(Boolean("\n")); //. Even though these characters may not have any visible impact on the output, they still have a distinct representation in the computer's memory.

console.log(Boolean(42));

//String Coercion
console.log("The answer is " + 42); // Output: 'The answer is 42'
console.log("The answer is " + true); // Output: 'The answer is true'
console.log("2" + "2"); // Output: '22' (string concatenation)

//Equality comparisons and Coercion
//  == Loose equality - will perform type coercion before comparinf the values
// === Strict Equality not perform type coercion- true if values and type SAME!
console.log(5 == "5");
console.log(5 === "5");

//conditional Coercion
//coerce vals to boolean when used in conditional statement if
if (42) {
	console.log("This will be executed");
}
if ("") {
	console.log("");
} else {
	console.log("empty");
}

// // String MAnipulation\
// The substring() method extracts a section of a string and returns it as a new string, without modifying the original string.

var sentence =
	"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat".trim();
console.log(sentence);
console.log(sentence.length);
console.log(sentence.substr(1).length);
console.log(sentence.substring(1).length);
console.log(sentence.substring(0, 1));
console.log(sentence.substring(10, 0));
console.log(sentence.substring(10, 13));
console.log(sentence.substring(0, 13).length);

// split --To Array
// The split() method divides a string into an array of substrings by searching for a specified separator, such as a comma or a space
let words = "The quick brown fox jumps over the lazy dog.".split(" ");
console.log(words);

//  the.join()` method does the opposite - it joins the elements of an array into a single string.
let joinedWrods = " ( " + words.join(" )( ");

console.log(joinedWrods);

let updatedSentence = joinedWrods.slice(0, -1); //start at 0 index go up but not incl the last index
console.log(updatedSentence);

updatedSentence += " )";

console.log(updatedSentence);

// using slice treat -1 neg as offset
console.log(updatedSentence.slice(4, 9));
console.log(updatedSentence.substring(4, 9));
console.log(updatedSentence.slice(-4));
console.log(updatedSentence.substring(-4)); //be treated as 0.
console.log(updatedSentence.slice(0, -1)); //remove last char
console.log(updatedSentence.substring(0, -1));

// slice() is more flexible and easier to remember, as it treats negative indices as offsets from the end of the string. substring() is a bit more limited, but it may be a better choice if you need to ensure that negative indices are treated as 0.

//Slcie can also work on array
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// Extracting a subarray
let subArray = fruits.slice(1, 3);
console.log(subArray);
//Extracting subArray from End
let subArray2 = fruits.slice(-2);
console.log(subArray2);
//Cloning an array
let cloneFruits = fruits.slice();
console.log(cloneFruits);

// It creates a new array and does not modify the original array.
// Negative indices are treated as offsets from the end of the array.
// You can use slice() to clone an array by calling it with no arguments.

//Splice  Add or remove elements from Array
//Differs from slice it modis the original Array
//Can  ADD , REMOVE Elements , also extract
//splice(start, deleteCount, item1, item2, ...):

//REMove
fruits.splice(1, 2); //remove 2 elem from index 1
console.log(fruits);

//Adding
fruits.splice(1, 0, "Kiwi", "mango");
console.log(fruits);

//Remove and Adding , remove 1 elem starting from index 2 ND ADDS 2 ELEM
fruits.splice(2, 1, "lemnon", "orange");
console.log(fruits);

// string are imuutable
// If you need to modify a string in-place, you can convert it to an array of characters, perform the necessary changes, and then convert it back to a string, like this:\
let myString = "Hello, World!"
let charArray = myString.split("")
console.log(charArray);
charArray[0] = "J";
myString = charArray.join("")
console.log(myString);


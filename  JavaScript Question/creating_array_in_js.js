// crating array in js

var emptyArray = [];
var populatedArray = ['a', 'b', 'c', 'd', 'e'];
console.log(typeof(emptyArray)); // output: Object
console.log(typeof(populatedArray)); // output: Object

// another array creating example
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits); // ["Apple", "Banana", "Orange"]

// b. Using the Array Constructor
// You can create an array using the new Array() constructor.

const numbers = new Array(1, 2, 3);
console.log(numbers); // [1, 2, 3]

// Create an Array with a Specific Length:
const empty = new Array(5); // Creates an array with 5 undefined elements
console.log(empty); // [undefined, undefined, undefined, undefined, undefined]

// d. Using Array.from
// Creates an array from an iterable or array-like object.
const fromString = Array.from("Hello"); // Creates array from string
console.log(fromString); // ["H", "e", "l", "l", "o"]

const fromSet = Array.from(new Set([1, 2, 2, 3])); // From Set
console.log(fromSet); // [1, 2, 3]
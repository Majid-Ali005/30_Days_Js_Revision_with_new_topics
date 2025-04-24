console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof { name: "John" }); // "object"
console.log(typeof [1, 2, 3]); // "object" (array is an object)
console.log(typeof function() {}); // "function"
console.log(typeof null); // "object" (historical quirk)
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof 123n); // "bigint"
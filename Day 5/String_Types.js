let primitive = "Hello"; // Primitive string
let object = new String("Hello"); // String object

console.log(typeof primitive); // Output: string
console.log(typeof object); // Output: object

console.log(primitive.toUpperCase()); // Output: HELLO
console.log(object.toUpperCase()); // Output: HELLO

// Comparison
console.log(primitive === object); // Output: false
console.log(primitive === object.valueOf()); // Output: true

// type conversion me aap aik data type ko dosre data type me convert krthy hy.

// Using Number()
let str = "123.45";
console.log(Number(str)); // 123.45
console.log(Number("abc")); // NaN

// Using parseInt()
console.log(parseInt("123.45")); // 123
console.log(parseInt("42px")); // 42 (non-numeric part ignored)

// Using parseFloat()
console.log(parseFloat("123.45")); // 123.45
console.log(parseFloat("12.34.56")); // 12.34
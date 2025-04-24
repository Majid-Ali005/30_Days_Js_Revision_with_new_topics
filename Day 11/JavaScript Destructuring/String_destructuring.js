let str = "hello";
let [a, b, c] = str;
console.log(a, b, c); // h e l

// Rest Parameter
let [firstChar, ...restChars] = str;
console.log(firstChar, restChars); // h ["e", "l", "l", "o"]

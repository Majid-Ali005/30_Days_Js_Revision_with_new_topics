let text = "Hello, World! Hello!";
console.log(text.includes("World")); // true
console.log(text.startsWith("Hello")); // true
console.log(text.endsWith("!")); // true

console.log(text.indexOf("Hello")); // 0
console.log(text.lastIndexOf("Hello")); // 14
console.log(text.search(/World/)); // 7
console.log(text.match(/l/g)); // ["l", "l", "l", "l"]
console.log([...text.matchAll(/l/g)].map(m => m.index)); // [2, 3, 10, 15]
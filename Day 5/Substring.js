let text = "Hello, World!";
console.log(text.substring(0, 5)); // "Hello"
console.log(text.substring(7)); // "World!"
console.log(text.substring(-5, 5)); // "Hello" (negative as 0)
console.log(text.substring(7, 2)); // "llo, " (swaps 2, 7)
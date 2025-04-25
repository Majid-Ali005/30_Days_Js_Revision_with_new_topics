const str = "Hello WORLD";
const result = str.replace(/world/i, "Earth");
console.log(result); // Output: "Hello Earth"44

// search(): Pehle match ka index return karta hai, ya -1 agar match na mile.

const str1 = "Hello World";
console.log(str1.search(/world/i)); // Output: 6

// split(): Pattern ke basis pe string ko array mein split karta hai.

const str2 = "apple,banana,orange";
console.log(str2.split(/,/)); // Output: ["apple", "banana", "orange"]


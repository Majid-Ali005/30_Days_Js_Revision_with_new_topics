let text = "  Hello, World!  ";

// Case conversion
console.log(text.toUpperCase()); // "  HELLO, WORLD!  "
console.log(text.toLowerCase()); // "  hello, world!  ".

// Trimming
console.log(text.trim()); // "Hello, World!"
console.log(text.trimStart()); // "Hello, World!  "
console.log(text.trimEnd()); // "  Hello, World!"

// Extraction
console.log(text.slice(2, 7)); // "Hello"
console.log(text.substring(2, 7)); // "Hello"
console.log(text.charAt(3)); // "l"

// Search
console.log(text.indexOf("World")); // 8
console.log(text.lastIndexOf("l")); // 10
console.log(text.includes("Hello")); // true
console.log(text.startsWith("  H")); // true
console.log(text.endsWith("!  ")); // true

// Replace
console.log(text.replace("World", "JavaScript")); // "  Hello, JavaScript!  "
console.log(text.replaceAll("l", "L")); // "  HeLLo, WorLd!  "

// Split
console.log(text.split(",")); // ["  Hello", " World!  "]

// Concat & Repeat
console.log(text.concat(" Welcome!")); // "  Hello, World!   Welcome!"
console.log("Hi".repeat(3)); // "HiHiHi"

// Padding
console.log("5".padStart(3, "0")); // "005"
console.log("5".padEnd(3, "0")); // "500"
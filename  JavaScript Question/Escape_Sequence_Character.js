// escape_characters.js

// 1. Escaping Quotes
console.log("Example 1: Escaping Quotes");
console.log('She said, "Hello!"'); // Using single quotes to avoid escaping
console.log("She said, \"Hello!\""); // Escaping double quotes
console.log('It\'s a sunny day!'); // Escaping single quote

// 2. Newline and Tab
console.log("\nExample 2: Newline and Tab");
console.log("First line\nSecond line"); // Newline
console.log("Column1\tColumn2\tColumn3"); // Tab

// 3. Backslash
console.log("\nExample 3: Backslash");
console.log("This is a backslash: \\"); // Escaping backslash

// 4. Unicode and Hex
console.log("\nExample 4: Unicode and Hex");
console.log("Copyright symbol: \u00A9"); // Unicode for ©
console.log("Heart symbol: \u2665"); // Unicode for ♥
console.log("Copyright (hex): \xA9"); // Hex for ©

// 5. Combining Escape Characters
console.log("\nExample 5: Combining Escape Characters");
console.log("Path: C:\\Program Files\\App\nStatus:\tActive");
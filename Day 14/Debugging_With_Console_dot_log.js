let x = 10;
console.log("Value of x:", x); // Outputs: Value of x: 10

// advance console.log()

// Log Objects: Use console.dir() to inspect object properties:
console.dir(document.body);

// log table

console.table([{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]);

// log with context

console.group("User Data");
console.log("Name:", user.name);
console.log("Age:", user.age);
console.groupEnd();

// pro tip

console.time("Loop");
for (let i = 0; i < 1000; i++) { /* Code */ }
console.timeEnd("Loop"); // Outputs time taken
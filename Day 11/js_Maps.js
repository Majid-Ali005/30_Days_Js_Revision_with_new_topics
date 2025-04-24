// Empty Map
let emptyMap = new Map();
console.log(emptyMap); // Map(0) {}

// Map with initial key-value pairs
let userMap = new Map([
  ["name", "John"],
  ["age", 30],
  ["isAdmin", true],
]);
console.log(userMap); // Map(3) { "name" => "John", "age" => 30, "isAdmin" => true }

// Map with mixed key types
let mixedMap = new Map([
  [1, "one"],
  [{ id: 1 }, "user"],
  [() => {}, "function"],
]);
console.log(mixedMap); // Map(3) { 1 => "one", {id: 1} => "user", [Function] => "function" }
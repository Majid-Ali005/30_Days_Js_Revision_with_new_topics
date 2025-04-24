
// JavaScript Set Method

let map = new Map();
map.set("name", "Alice").set("age", 25);
console.log(map); // Map(2) { "name" => "Alice", "age" => 25 }

// Update existing key
map.set("name", "Bob");
console.log(map); // Map(2) { "name" => "Bob", "age" => 25 }

// Js Get Method

let map1 = new Map([
    ["id", 101],
    ["role", "developer"],
  ]);
  console.log(map1.get("id")); // 101
  console.log(map1.get("name")); // undefined


// js Maps set method

let map = new Map();
map.set("city", "Delhi");
map.set("country", "India");
console.log(map); // Map(2) { "city" => "Delhi", "country" => "India" }

// js Maps get method
let map1 = new Map([["score", 95]]);
console.log(map1.get("score")); // 95
console.log(map1.get("grade")); // undefined

// js Maps has method

let map2 = new Map([["name", "John"]]);
console.log(map2.has("name")); // true
console.log(map2.has("age")); // false

// js Maps has Method

let map3 = new Map([
    ["a", 1],
    ["b", 2],
  ]);
  map3.delete("a");
  console.log(map3); // Map(1) { "b" => 2 }

// js Maps clear method

let map4 = new Map([
    ["x", 10],
    ["y", 20],
  ]);
  map4.clear();
  console.log(map4); // Map(0) {}

// js Maps size Method
let map5 = new Map([
    ["p", "pen"],
    ["q", "quill"],
  ]);
  console.log(map5.size); // 2

// for-each callback maps
let map6 = new Map([
    ["fruit", "apple"],
    ["color", "red"],
  ]);
  map6.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
  // Output:
  // fruit: apple
  // color: red

  // keys
  let map7 = new Map([
    ["x", 10],
    ["y", 20],
  ]);
  for (let key of map7.keys()) {
    console.log(key);
  }
  // Output: x, y

  // values 

  let map8 = new Map([
    ["x", 10],
    ["y", 20],
  ]);
  for (let value of map8.values()) {
    console.log(value);
  }
  // Output: 10, 20





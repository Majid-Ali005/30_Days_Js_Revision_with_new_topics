// From Array of Arrays
let fruitMap = new Map([
    ["apple", 5],
    ["banana", 10],
  ]);
  console.log(fruitMap); // Map(2) { "apple" => 5, "banana" => 10 }
  
  // From Empty Map
  let emptyMap = new Map();
  console.log(emptyMap); // Map(0) {}
  
  // Adding entries later
  emptyMap.set("key1", "value1");
  console.log(emptyMap); // Map(1) { "key1" => "value1" }
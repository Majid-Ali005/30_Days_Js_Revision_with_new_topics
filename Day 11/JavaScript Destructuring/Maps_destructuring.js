let map = new Map([
    ["name", "John"],
    ["age", 30],
  ]);
  
  // Destructuring Map entries
  for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
  }
  // Output:
  // name: John
  // age: 30
  
  // Destructuring single entry
  let [[key1, value1]] = map;
  console.log(key1, value1); // name John
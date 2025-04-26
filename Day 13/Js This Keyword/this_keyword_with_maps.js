


// this keyword with maps
const myMap = new Map([["key1", "value1"], ["key2", "value2"]]);
myMap.forEach(function(value, key) {
  console.log(this); // `this` refers to `myMap`
}, myMap);
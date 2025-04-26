


// this keyword with sets
const mySet = new Set([1, 2, 3]);
mySet.forEach(function(value) {
  console.log(this); // `this` refers to `mySet`
}, mySet);
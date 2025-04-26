// Implicit Return
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8

// Explicit Return (if multiple lines)
const addDetailed = (a, b) => {
  const sum = a + b;
  return sum;
};
console.log(addDetailed(5, 3)); // Output: 8


//

// Wrong (interpreted as function body)
const getObj = () => { name: "Rahul" };
console.log(getObj()); // Output: undefined

// Correct
const getObjCorrect = () => ({ name: "Rahul" });
console.log(getObjCorrect()); // Output: { name: "Rahul" }
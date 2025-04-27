// Bad: No conventions
let TOTAL = 0;
function ADD(x) { TOTAL += x }

// Good: Following conventions
let total = 0;
function addToTotal(amount) {
  total += amount;
  return total;
}

console.log(addToTotal(10)); // Outputs 10
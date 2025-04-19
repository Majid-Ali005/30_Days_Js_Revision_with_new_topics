
// JavaScript toString() Method

let x = 123;
x.toString();
(123).toString();
(100 + 23).toString();
console.log(x); // output: 123
console.log(typeof(x)); // output: number
/**
 * yaha pr aap k pass 123 Numbers hy magr with the help of toString method ye convert ho rha hy matlab aap k pass return ho rha hy as a string.
 * console.log(typeof(x)); // output: number --> iss ka matlab hy k ye aap k acutal variable k data ko damage nhi kr rha hy bal k aik copy bana kr oss ko string me return kr rha hy etc.
 */

function safeDivide(a, b) {
    let result = a / b;
    return Number.isNaN(result) ? "Invalid" : result;
  }
  console.log(safeDivide(10, 0)); // Infinity
  console.log(safeDivide(0, 0)); // "Invalid"



  console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity

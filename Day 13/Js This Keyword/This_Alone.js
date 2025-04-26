
console.log(this); // Output: window (in browser)
// output: {}
"use strict";
console.log(this); // Output: undefined

// this in a Function (Default, Non-strict Mode)
function showThis() {
    console.log(this);
  }
  showThis(); // Output: window (in browser)



  // this function strict mode

  "use strict";
function showThis() {
  console.log(this);
}
showThis(); // Output: undefined
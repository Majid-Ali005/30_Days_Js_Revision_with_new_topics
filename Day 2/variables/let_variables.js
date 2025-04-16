


//variable declaration using let keywords in JavaScript
let x = 5;
let y = 6;
let z = x + y;
console.log(z);

//let variable block scope
{
    let x = 2;
  }
  // x can NOT be used here
  console.log(x);

  // you cannot redeclared let variable
  let x1 = 12;
//   lext x1 = 12; //error: --> SyntaxError: Unexpected identifier 'x1'

// var hoisiing
// carName = "Saab";
// let carName = "Volvo";

//let reassigned the value
let p = 12;
p = 13;
console.log(p);
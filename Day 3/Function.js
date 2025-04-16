// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
    return p1 * p2;
  }

  let result = myFunction(4, 3);
  console.log(result); // output: 12

  // fahrenheit to celsius program
  function toCelsius(f) {
    return (5/9) * (f-32);
  }
  let value = toCelsius(77);
  console.log(value);
 
  // parameter accessing with wrong parameter
  function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value1 = toCelsius();
  console.log(value1); // output: NaN 
  // aap k pass output NaN iss wja se a rha hy q k aap function ko call tho kr rhy hy magr aap ne oss me
  // parameter diya howa hy jiss ko aap function calling k time pr nhi de rhy hy tho oss wja se aap k pass ye NaN erro ata hy.

  function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  // aap k pass ye output iss wja se a rha hy q k aap function ko without parenthesis call kr rhy hy
  let value2 = toCelsius;
  console.log(value2); // output: [Function: toCelsius]

  // code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  
  // code here can NOT use carName
  console.log(carName);
  // matlab jiss variable ko aap ne jiss function me banaya hy oss ko aap oss se bahir use nhi kr sakty hy.
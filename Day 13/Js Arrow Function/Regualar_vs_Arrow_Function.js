// Regular Function
function add(a, b) {
    return a + b;
  }
  
  // Arrow Function
  const addArrow = (a, b) => a + b;

  // Arrow function with curly bracket body
  // aap agr one condition ho tho phir aap curly bracket agr nhi lagtay hy tho koi masla nhi hy etc.
// jaise iss upar wale example me hum ne nhi lagaya hy q k condition one hy etc.


  console.log(add(2, 3)); // Output: 5
  console.log(addArrow(2, 3)); // Output: 5
  

  // before arrow vs arrow function

  function multiply(a, b) {
    console.log(this); // Depends on how function is called
    return a * b;
  }
  
  const obj = {
    name: "Test",
    fn: multiply
  };
  
  obj.fn(2, 3); // Output: this = obj, returns 6
  multiply(2, 3); // Output: this = window (non-strict), returns 6
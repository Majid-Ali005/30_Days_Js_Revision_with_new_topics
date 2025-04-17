// Create nested Objects
const myObj = {
    name: "John",
    age: 30,
    myCars: {
      car1: "Ford",
      car2: "BMW",
      car3: "Fiat"
    }
  }
  let result = myObj.myCars.car2;;
  console.log(result); // Output: BMW
  let result2 = myObj.myCars["car1"]; // tho aap iss trha se direct key se b print kr sakty hy no problem.
  console.log(result2); // output: Ford
  let result22 = myObj["myCars"]["car2"]; // aap iss trha se b access kr sakty hy.
  console.log(result22); // output: BMW

let p1 = "myCars";
let p2 = "car2";
let showResult = myObj[p1][p2];
console.log(showResult); // output: BMW
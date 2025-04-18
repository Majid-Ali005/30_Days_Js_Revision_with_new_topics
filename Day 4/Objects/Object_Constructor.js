// Constructor Function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  // Create a Person object
  // tho aap k pass object kuch iss trha se banaya jata hy.
const myFather = new Person("John", "Doe", 50, "blue");
// Display age
let result = "Ali is " + myFather.age + "."; 
console.log(result); // output: Ali is 50.

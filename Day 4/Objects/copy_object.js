
// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age:50,
    eyeColor: "blue"
  };
  /**
   * tho agr aap iss example me dekhe tho mene person ki copy bana li hy const x = person ab ye x jo hy ye mere pass person ki copy agaye hy.
   * or me jo x.age = 10; kr rha ho ye mere pass person me data ko save kr rha hy jo age 50 ko age 10 kr rha hy.
   * tho yaha pr mere pass jo person hy ab oss ki copy ban k agaye hy x simple
   */

  // Try to create a Copy
const x = person;

// This will change age in person !!!
x.age = 10;

// access and print the object
let result = person.firstName + " is " + person.age + " years old.";
console.log(result);
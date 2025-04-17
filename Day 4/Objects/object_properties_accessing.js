
const person = {
    name: "ali",
    age: 25,
    country: "pakistan",
    city: "karachi",
    address: "abc karachi",
    phone: 2121215,
    salary: 100000

}
// objectName.property
let age = person.age; // tho aap iss trha se objectName se properties ko access kr sakty hy.
console.log(age); // Output: 25

//objectName["property"]
let age1 = person["age"]; // aap iss trha se direct key ko likh kr b properties ko print kr sakty hy.
console.log(age1); // output: 25


// Another Example
const person1 = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
  let result = person1.firstname + " is " + person1.age + " years old.";
  console.log(result); // output: John is 50 years old.

  // below we are accessing properties by using their key
  const person2 = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
  let personStore =  person2["firstname"] + " is " + person2["age"] + " years old.";
  console.log(personStore);

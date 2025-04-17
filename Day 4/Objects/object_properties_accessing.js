
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

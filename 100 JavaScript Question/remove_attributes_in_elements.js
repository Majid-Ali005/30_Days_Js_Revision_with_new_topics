var customer = { name: 'Tom Waits', age: 85}
delete customer.age
// customer will now be { name: 'Tom Waits' }

// Example object
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Remove the 'age' property
delete person.age;

console.log(person);
// Output: { name: "John", city: "New York" }
# JavaScript Objects
- Objects are containers for Properties and Methods.
- Properties are named Values.
- Methods are Functions stored as Properties.
- Properties can be primitive values, functions, or even other objects.

In JavaScript, almost "everything" is an object.

- Objects are objects
- Maths are objects
- Functions are objects
- Dates are objects
- Arrays are objects
- Maps are objects
- Sets are objects

All JavaScript values, except primitives, are objects.
![alt text](image.png)

### Object Properties
- A real life car has properties like weight and color:
- car.name = Fiat, car.model = 500, car.weight = 850kg, car.color = white.
- Car objects have the same properties, but the values differ from car to car.

### Object Methods
- A real life car has methods like start and stop:
- car.start(), car.drive(), car.brake(), car.stop().
- Car objects have the same methods, but the methods are performed at different times.

### JavaScript Variables
- JavaScript variables are containers for data values.
- This code assigns a simple value (Fiat) to a variable named car:
```bash
let car = "Fiat";
```
- aap k pass object b aik same like variable ki trha hota hy magr aap variable me aik time pr sirf aik hi value ko store kr sakty hy magr object me aap multiple values ko store kr sakty hy simple.

### JavaScript Objects
- Objects are variables too. But objects can contain many values.
- This code assigns many values (Fiat, 500, white) to an object named car:
```bash
//Example
const car = {type:"Fiat", model:"500", color:"white"};
```
*********************************************************
```bash
/**
 * aap k pass javascript me objects b variable ki trha hota hy
 * magr variable me aap aik time pr aik hi value ko store kr sakty hy magr objects me aap multiple store kr sakty hy.
*/
// Example: Variable
let name = "Majid Ali";
// Example: Objects
const Name = {
    name: "Majid Ali",
    age: 19,
    location: "karachi",
    city: "Karachi, Sindh",
    addres: "abc Karachi"
}
console.log(name); // variable printing
console.log(Name.name,Name.city, Name.location); // object printing // Output: Majid Ali Karachi, Sindh karachi
```
::::: Note:
It is a common practice to declare objects with the const keyword.

### JavaScript Object Definition
#### How to Define a JavaScript Object
- Using an Object Literal
- Using the new Keyword
- Using an Object Constructor
#### JavaScript Object Literal
- An object literal is a list of name:value pairs inside curly braces {}.
```bash
{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
```
- jo aap k pass name value pairs hotay hy curly brackets me tho oss ko javaScript ka literals kaha jata hy. Jaise variable me aap jiss b value ko store krthy tho oss ko value b kaha jata hy or lietrals b kaha ja sakta hy etc.
### Creating a JavaScript Object
- These examples create a JavaScript object with 4 properties:
```bash
// Create an Object
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```
- Spaces and line breaks are not important. An object initializer can span multiple lines:

```bash
<!DOCTYPE html>
<html>
<body>
<h1>Creating JavaScript Objects</h1>
<h2>Using an Object Literal</h2>

<p id="demo"></p>

<script>
// Create an Object:
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Display Data from the Object:
document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";
</script>

</body>
</html>

```
- iss niche wale object ko hum log empty bana rhy hy magr iss me hum log externally phir key pair dal rhy hy etc.
```bash
// Create an empty Object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue"; 

const person2 = person.firstName + " is " + person.age + " years old.";
console.log(person2);
// tho agr aap iss example me dekhe tho object hamare pass empty hy magr oss me hum log kuch properties dal rhy hy matlab add kr rhy hy etc.
```
### Using the new Keyword
- This example create a new JavaScript object using new Object(), and then adds 4 properties:
- tho aap object ko new k keyword se b bna sakty ho koi problem nhi hy.
- new k keyword ko laga dene se aap k pass kuch b nhi hota hy ye optional hota hy k aap iss k sath object bana b sakty hy or nhi b. Matlab koi required cheez nhi hy ye bs agr aap ko lagana ho tho aap laga sakty hy warna na lgana ho tho na lagao etc.

```bash
// object create with new keyword
// Create an Object
const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue"; 

let persronn = person.firstName + " is " + person.age + " years old.";
console.log(persronn);
```
#### Note:
- The examples above do exactly the same.
- But, there is no need to use new Object().
- For readability, simplicity and execution speed, use the object literal method.
![alt text](image-1.png)

### Accessing Object Properties
You can access object properties in two ways:
```bash 
// 1. first way
// iss me aap ko apne object ka name or phir jiss cheez ko print krna ho oss k property ka naam simple.
objectName.propertyName
```
```bash
objectName["propertyName"]
```
- ye object accessing k bare me hum logo ne already parh liya hy upar access kr k b etc.

### JavaScript Object Methods
![alt text](image-2.png)

:::: Example:
```bash
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  const result = person.fullName();
  console.log(result); // output: John Doe
```
- tho aap iss trha se object k andar function ko b bana sakty hy easily.
- or yaha pr hamare pass ye function me this.firstName jo hy ye hamare person k object ko refer kr rha hy matlab target kr rha hy etc. ya aap ye b keh sakty hy k oss k properties ko access kr rha hy etc.

- In the example above, this refers to the person object:
- this.firstName means the firstName property of person.
- this.lastName means the lastName property of person.

### In JavaScript, Objects are King.
#### If you Understand Objects, you Understand JavaScript.
- Objects are containers for Properties and Methods.
- Properties are named Values.
- Methods are Functions stored as Properties.
- Properties can be primitive values, functions, or even other objects.

### JavaScript Primitives
![alt text](image-3.png)
#### Immutable
![alt text](image-4.png)

### JavaScript Objects are Mutable
- Objects are mutable: They are addressed by reference, not by value.
- If person is an object, the following statement will not create a copy of person:
```bash
const x = person;
```
- tho aik achi practice yahi hy k aap object ko banatay waqt time const keyword ka use kare tha k aap k object ko koi change na kr saky etc. 
- The object x is not a copy of person. The object x is person.
- The object x and the object person share the same memory address.
- Any changes to x will also change person:
```bash

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
```

- tho agr aap iss example me dekhe tho mene person ki copy bana li hy const x = person ab ye x jo hy ye mere pass person ki copy agaye hy.
- or me jo x.age = 10; kr rha ho ye mere pass person me data ko save kr rha hy jo age 50 ko age 10 kr rha hy.
- tho yaha pr mere pass jo person hy ab oss ki copy ban k agaye hy x simple

## JavaScript Object Properties
- An Object is an Unordered Collection of Properties
- Properties are the most important part of JavaScript objects.
- Properties can be changed, added, deleted, and some are read only.
- matlab aap javaScript ki properties ko deletek, add etc kr sakty ho.
### Accessing JavaScript Properties
- aap javaScript k propertis ko access krne k liye simply aap ko apne object ka naam likna hy or phir oss properties ka naam jiss ko aap access krna chahtay hy etc.
- The syntax for accessing the property of an object is:
```bash
// objectName.property
let age = person.age;
```

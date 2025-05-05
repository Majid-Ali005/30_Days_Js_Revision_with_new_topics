JavaScript is an object-oriented scripting language that has evolved from a means to manipulate static HTML and CSS websites into the backbone of today’s most dynamic and interactive websites. Its popularity has increased in recent years because it has branched from just a browser-based language to numerous development frameworks like React, Angular, and Vue. As a result, there are usually plenty of JavaScript development jobs on the market.

Facing your first JavaScript job interview isn’t so daunting. If you know how to write code and build complete front-end applications in JavaScript, you should have no problem answering the questions they will ask during the interview. Still, it’s important to prepare for the interview questions as much as possible before the interview. You never know if they will ask questions irrelevant to your daily work or frameworks you rarely use.  

We have compiled a list of the most common interview questions you may face at your next JavaScript interview to help you. A quick review of them will refresh your knowledge of the language and give you confidence that you can supply the correct answers.

## 53 frequently asked JavaScript interview questions
This is a long list of questions, and an interviewer will most likely only ask some of them, but it doesn’t hurt to test yourself on each one. The more questions you know the answer to, the more confidence you will have walking into the interview.

### 1) What is JavaScript?
As mentioned above, Javascript is no longer just a  lightweight language. It has become a powerful, object-oriented, interpreted programming language that adds dynamic capabilities to HTML pages. All the popular web browsers use it as a scripting language. It also is used in the backend to create services in platforms like NodeJS.

### 2) How do you add JavaScript to a web page?
- hum js ko 3 ways se apne web page me add kr sakty hy oss k liye niche dekhe
1. aap js ko internally add kr k b use kr sakty hy.
2. aap js ko inline add kr k b use kr satky hy.
3. aap externally javaScript ko b use kr sakty hy ye way kaafi prefer kiya jata hy q k iss se aap k pass project code organize hojata hy jo k bohat hi important cheez hoti hy etc.

You can embed JavaScript directly into a web page using script tags, like the example below:

1. interanll JavaScript

```bash
<!DOCTYPE html>
<html lang="en">
<head>

    <!-- interall js -->
     <script>
        // iss trha aap script ka tage kisi b jagah add kr k interall js ko likh sakty hy.
     </script>

</head>
<body>

    <script>
        // iss trha aap script ka tage kisi b jagah add kr k interall js ko likh sakty hy.
     </script>
    
    aap apne html me kahi b iss ko use kr sakty hy but prefer way interall js ko use krna ka ye hota hy k aap iss ko end me use kare etc.
    
</body>
</html>
```
2. inline JavaScript

```bash
<!DOCTYPE html>
<html>
<body>

<h1>My First JavaScript</h1>

<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
Click me to display Date and Time.</button>

<p id="demo"></p>

</body>
</html> 

```

3. External JavaScript

```bash
<head>
<title>Your Page Title</title>
<script type="text/javascript" src="YourJavaScriptFile.js"></script>
</head>
```
- external js me aap aik file banatay hy externally or phir oss ko js k script tage k src me de detay hy jaise hum css k file ko kiya krthy thy bilkul oss hi trha tho phir ye aap k pass external JavaScript kehlata hy etc.

### 3) How do you add comments to JavaScript?
- aap k pass main comments jo hotay hy wo aik 
1. single line comments hota hy
2. or dosra multi-line comment hota hy.

```bash
You can add either line comments or block comments to JavaScript.

// This is a line comment. It must stay on one line.

/* This is a

block comment. It can

span as many lines as you’d like.*/
```
- or aik problem jiss ko hum ne samjha b tha k aap jub string ko kisi number k sath concatenate krthy hy with the help of + plus tho wo phir aap k pass number int ko string me convert krdeta hy

Solution
solution ye hy k + plus ki jagah comma ka usee kare etc.

### 4) Are there still local and global variables?
In modern JavaScript, the designations of global and local variables have become more exact. By definition, a global variable can be accessed from anywhere within the program and have “global scope” or global visibility within the program. Local variables are temporary variables that only have a scope within the function that generated them and have “local scope.”

// How to declare a local variable

In older versions of JavaScript, you declared a variable using the keyword “var”. In modern JavaScript, “var” has been replaced with the keyword “let”. Because of this, the distinction between global and local variables becomes more sharply defined. You declare a variable using “let”: 

let myFirstName = “John”;

If a variable is not within a function, an if block, or a loop, the variable is global in scope. 

#### Global Variable Example By Majid Ali

```bash

// global variable ki example k liye niche dekhe
let globalVariable = "this is the global variable";

function myFunction(){
    console.log(globalVariable);
    /**
     * tho agr aap ye dekhe tho wo global varialbe aap k pass function me use ho rha hy.
     * or issi hi ko global varialbe kaha jata hy.
     * aap global variable let,var,const jiss se b banaya bs wo globally access ho sakty hy etc. simple.
     */
}
myFunction(); // output: this is the global variable

```

#### Local Variable
```bash
// local variable

function myFunction1(){
    let LocalVariable = "this is the local variable";
}
console.log(LocalVariable); // Erro: ReferenceError: LocalVariable is not defined
/**
 * tho aap ko yaha pr ye error ==> ReferenceError: LocalVariable is not defined milega
 * q k ye varialbe jo LocalVariable hy ye function k andar hy tho iss ka jo scope hy wo local hy aap iss ko sirf iss function k andar hi use kr sakty hy issi waja se aap ko error mil rha hy etc.
 */
 ```

 ### 5) What data types does JavaScript support?
The data types supported by JavaScript are:

- Undefined
- Null
- Boolean
- String
- Symbol
- Number
- Object



### 6) Is JavaScript a case-sensitive language?
Yes, JavaScript is a case-sensitive language. When you name a variable, you must use the exact case to access that variable again. For that reason, like most case-sensitive languages, it is standard practice to use camelback notion where everything is in lowercase except mid-word capitalization. For example:

let   myFirstName = “Mary”;

- case sensitive matlab agr aap aik vriable ko Majid or dosre ko majid small letter se start krthy ho or aik ko capital tho yaha pr dono variable jo hy aik dosre se alag different hy simple yehi case sensitive hota hy etc.
```bash

// javaScript Case Sensitive
let Majid = "Ali 1";
let majid = "Ali 2";
console.log(Majid); // output: Ali 1
console.log(majid); // output: Ali 2
/**
 * tho iss trha se aap k pass dono variable alag alag honge because of the case sensitivity
 * jaise aap ko output me b dikh rha hy k dono ka output alag alag hy etc.
 */
 ```

 ### 8) What is the difference between Java and JavaScript?
 Java is an object-oriented, compiled programming language designed to run in the Java Virtual Machine. JavaScript is an object-oriented, interpreted scripting language designed to run in the browser or JavaScript engines like NodeJS.
 - tho aap k pass javaScript bilkul b nhi match hoti hy java k sath because both are the different lanaguages jaise js frontend k liye use hoti hy etc.
 - kuch variable k example k liye niche dekhe etc.

```bash
// creating variable in java

// String name = "John";
// System.out.println(name);

// creating variable in javaScript
let name = "john";
console.log(name);
/**
 * tho aap k pass js or java dono bilkul 100% alag alag languages hy or ye different domain k liye use hoti hy
 * aap ko iss variable k example se clear howa hoga.
 */

```

### 9) What is the difference between null and undefined in JavaScript?
A variable is undefined when you declare it without an assigned value, like below:

var x;

Null actually has to be assigned to a variable:

var x = null;
- variable undefined tub hota hy jub aap variable ko banatay hy matlab declare tho krthy hy magr oss me koi value save nhi krthy hy tho tub aap k pass wo variable phir undefined kehlata hy etc.
- null is not equal to zero: matlab hum nul tub provide krthy hy jub hamare pass ye error a rha ho k bhai aap ko variable me value ko assign krna hi krna hy tho tub hum log krthy hy use null ka iss me hum value ko baad me save krthy hy abhi k liye sirf null krdetay hy etc. simple.
```bash
// 9) What is the difference between null and undefined in JavaScript?

// undefine
/**
 * jub aap sirf variable ko declare krthy hy magr oss me koi value assign nhi krthy hy tho tub wo aap k pass undefined kehlat ahy etc.
 * jaise aap niche wale example me dekh b sakty hy simple.
 */
let undfinedInJs;
console.log(typeof(undfinedInJs)); // output: undefined

// Null
/**
 * tho null me ye hota hy k hum value ko baad me assign krthy hy magr abhi k liye hum apne varialbe ko null rakh detay hy.
 */
let nulljs = null;
console.log(typeof(nulljs)); // output: object
```

### 10) What does this mean in JavaScript?
The this keyword in JavaScript references the object in which the function is operating.
- kisi b aik specific cheez ko target jub hum log krthy hy tho oss ko phir this k keword k sath kiya jata hy etc. example k liye niche dekhe etc.

```bash
// js this keyword example

const person = {
    name: "Alice",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
person.greet(); // Outputs: Hello, my name is Alice

// Another this keyowrd example

function myFunction(name, age = 25) {
    this.name = name;
    this.age = age;
}
const person1 = new myFunction("ali");
console.log(person1.name); // "ali"
console.log(person1.age); // 25
// yaha pr ye 25 value mene function me direct bydefault di howe hy etc.
```

### 11) How do you create an object in JavaScript?
In modern JavaScript, there are several ways to create an object. You can even use, like Java, the keyword “new”. However, in the background, JavaScript uses an object notation called JSON, which stands for JavaScript Object Notation. At its simplest. you can create an object in JavaScript by using JSON as follows:
```bash
// creating object in js

const customer = {
  name: "Majid Ali",
  city: "karachi",
  country: "pakistan",
  passion: "programming"   
}
console.log(customer);
};
```
a. Using the Object Constructor
You can create an object using the new Object() constructor.
```bash
// creating object using object constructor bs iss me sirf aap k pass new keyword ajat ahy
// aap without new keyword b apne object ko bana sakty hy etc.
const person = new Object();
person.name = "Ali";
person.age = 25;
console.log(person); // { name: "Ali", age: 25 }
```

#### or aap iss trha se niche agr dekhe tho different ways se object ko bana create update etc kr sakty hy with different ways
In JavaScript, objects are key-value pairs that allow you to store and manipulate data dynamically. Since you asked about creating objects, adding, and deleting properties, and given your previous questions about `this` and a function like `myFunction`, I’ll provide a clear, concise explanation with examples covering multiple ways to create objects, add properties, delete properties, and related operations. I’ll also connect to your earlier context where applicable.

### 1. Creating Objects in JavaScript
There are several ways to create objects in JavaScript:

#### a. **Object Literal Notation**
The simplest way to create an object is using curly braces `{}`.
```javascript
const person = {
    name: "Ali",
    age: 25
};
console.log(person); // { name: "Ali", age: 25 }
```

#### b. **Using the `Object` Constructor**
You can create an object using the `new Object()` constructor.
```javascript
const person = new Object();
person.name = "Ali";
person.age = 25;
console.log(person); // { name: "Ali", age: 25 }
```

#### c. **Using a Constructor Function**
This connects to your previous question about `myFunction`. A constructor function creates objects when called with `new`.
```javascript
function Person(name, age = 25) {
    this.name = name;
    this.age = age;
}
const person = new Person("Ali");
console.log(person); // Person { name: "Ali", age: 25 }
```

#### d. **Using `Object.create()`**
Creates an object with a specified prototype.
```javascript
const person = Object.create(null); // No prototype
person.name = "Ali";
person.age = 25;
console.log(person); // { name: "Ali", age: 25 }
```

#### e. **Using ES6 Classes**
A modern way to create objects with a blueprint.
```javascript
class Person {
    constructor(name, age = 25) {
        this.name = name;
        this.age = age;
    }
}
const person = new Person("Ali");
console.log(person); // Person { name: "Ali", age: 25 }
```

### 2. Adding Properties to an Object
You can add properties to an object dynamically after creation using dot notation or bracket notation.

#### a. **Dot Notation**
```javascript
const person = {};
person.name = "Ali";
person.age = 25;
console.log(person); // { name: "Ali", age: 25 }
```

#### b. **Bracket Notation**
Useful for dynamic property names or names with spaces/special characters.
```javascript
const person = {};
person["name"] = "Ali";
person["user age"] = 25;
console.log(person); // { name: "Ali", "user age": 25 }
```

#### c. **Using `Object.defineProperty`**
For more control (e.g., making properties non-writable or non-enumerable).
```javascript
const person = {};
Object.defineProperty(person, "name", {
    value: "Ali",
    writable: true,
    enumerable: true
});
console.log(person); // { name: "Ali" }
```

#### d. **Adding Multiple Properties with `Object.assign`**
Merge or add multiple properties at once.
```javascript
const person = {};
Object.assign(person, { name: "Ali", age: 25 });
console.log(person); // { name: "Ali", age: 25 }
```

### 3. Deleting Properties
You can remove properties from an object using the `delete` operator.

#### a. **Using `delete` with Dot Notation**
```javascript
const person = { name: "Ali", age: 25 };
delete person.age;
console.log(person); // { name: "Ali" }
```

#### b. **Using `delete` with Bracket Notation**
```javascript
const person = { name: "Ali", age: 25 };
delete person["name"];
console.log(person); // { age: 25 }
```

#### c. **Note on `delete`**
- `delete` only removes own properties, not inherited ones.
- It returns `true` if the property was deleted or didn’t exist.
- It doesn’t affect variables or function declarations, only object properties.

### 4. Updating Properties
You can update existing properties by reassigning them.
```javascript
const person = { name: "Ali", age: 25 };
person.age = 30; // Update using dot notation
person["name"] = "Bob"; // Update using bracket notation
console.log(person); // { name: "Bob", age: 30 }
```

### 5. Checking for Properties
To verify if a property exists:
```javascript
const person = { name: "Ali", age: 25 };
console.log("name" in person); // true
console.log(person.hasOwnProperty("age")); // true
console.log(person.job); // undefined (property doesn’t exist)
```

### 6. Connecting to Your Previous Question
Your earlier code used a function to create an object-like structure with `this`:
```javascript
function myFunction(name, age = 25) {
    this.name = name;
    this.age = age;
}
const person = new myFunction("Ali");
```
This is an example of creating an object using a constructor function. You can add or delete properties to `person`:
```javascript
person.job = "Engineer"; // Add property
delete person.age; // Delete property
console.log(person); // { name: "Ali", job: "Engineer" }
```

Alternatively, to avoid `this` and global pollution (as discussed), you could rewrite it to return an object:
```javascript
function myFunction(name, age = 25) {
    return { name, age };
}
const person = myFunction("Ali");
person.job = "Engineer"; // Add property
delete person.age; // Delete property
console.log(person); // { name: "Ali", job: "Engineer" }
```

### 7. Practical Example (Combining All Concepts)
Here’s a comprehensive example showing creation, addition, deletion, and updates:
```javascript
// Create an object
let person = { name: "Ali" };

// Add properties
person.age = 25;
person["job"] = "Engineer";
Object.assign(person, { city: "Lahore" });

// Update a property
person.age = 30;

// Delete a property
delete person.job;

// Check properties
console.log("name" in person); // true
console.log(person); // { name: "Ali", age: 30, city: "Lahore" }
```

### 8. Common Pitfalls
- **Immutable Properties**: If a property is defined with `writable: false` (via `Object.defineProperty`), you can’t update or delete it without changing its descriptor.
- **Global Pollution**: Avoid assigning properties to `this` in regular functions (as in your `myFunction("ali")` example) to prevent modifying the global object.
- **Non-Enumerable Properties**: Properties added via `Object.defineProperty` may not appear in loops like `for...in` unless `enumerable: true` is set.

### 9. Clarification
If you have a specific scenario (e.g., creating objects in a loop, adding dynamic properties, or integrating with your `myFunction` code), please provide details. For example:
- Do you want to create multiple objects dynamically?
- Are you working in a specific environment (browser, Node.js)?
- Do you need advanced features like getters/setters or property descriptors?

### Answer
In JavaScript, you can create objects using object literals (`{}`), `new Object()`, constructor functions, `Object.create()`, or ES6 classes. Add properties with dot notation (`obj.name = "Ali"`), bracket notation (`obj["name"] = "Ali"`), `Object.assign`, or `Object.defineProperty`. Delete properties with `delete obj.name` or `delete obj["name"]`. Update properties by reassigning them. Example:
```javascript
const person = { name: "Ali" };
person.age = 25; // Add
person.age = 30; // Update
delete person.age; // Delete
console.log(person); // { name: "Ali" }
```
For your `myFunction`, use `new` or return an object to manage properties safely.

### 12) How do you create an array in JavaScript?
You can create an array in JavaScript by using the object literal, like the example below:
```bash
// crating array in js

var emptyArray = [];
var populatedArray = ['a', 'b', 'c', 'd', 'e'];
console.log(typeof(emptyArray)); // output: Object
console.log(typeof(populatedArray)); // output: Object
```
- tho aap kuch iss trha se simplye array ko create kr sakty hy.

In JavaScript, an array is a data structure used to store multiple values in a single variable, typically in an ordered, indexed list. Since you asked about creating arrays and your previous questions covered objects and `this` in JavaScript, I’ll provide a clear, concise explanation of how to create arrays, along with examples of common operations (like adding or removing elements) to complement your earlier queries about object manipulation. I’ll also keep it relevant and straightforward, assuming you’re building on your understanding of JavaScript data structures.

### 1. Creating Arrays in JavaScript
There are several ways to create an array in JavaScript:

#### a. **Array Literal Notation**
The most common way is using square brackets `[]`.
```javascript
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits); // ["Apple", "Banana", "Orange"]
```

- **Empty Array**:
```javascript
const emptyArray = [];
console.log(emptyArray); // []
```

#### b. **Using the `Array` Constructor**
You can create an array using the `new Array()` constructor.
```javascript
const numbers = new Array(1, 2, 3);
console.log(numbers); // [1, 2, 3]
```

- **Create an Array with a Specific Length**:
```javascript
const empty = new Array(5); // Creates an array with 5 undefined elements
console.log(empty); // [undefined, undefined, undefined, undefined, undefined]
```

- **Single Number Argument** (sets length, not value):
```javascript
const single = new Array(10); // Array of length 10, all elements undefined
console.log(single); // [undefined × 10]
```

#### c. **Using `Array.of`**
Creates an array from arguments, useful to avoid the single-number length issue with `new Array()`.
```javascript
const singleNumber = Array.of(10); // Creates [10], not an array of length 10
console.log(singleNumber); // [10]
```

#### d. **Using `Array.from`**
Creates an array from an iterable or array-like object.
```javascript
const fromString = Array.from("Hello"); // Creates array from string
console.log(fromString); // ["H", "e", "l", "l", "o"]

const fromSet = Array.from(new Set([1, 2, 2, 3])); // From Set
console.log(fromSet); // [1, 2, 3]
```

### 2. Basic Array Operations
Since your previous questions involved adding and deleting properties in objects, here are analogous operations for arrays (adding and removing elements).

#### a. **Adding Elements**
- **Push (Add to End)**:
```javascript
const fruits = ["Apple"];
fruits.push("Banana");
console.log(fruits); // ["Apple", "Banana"]
```

- **Unshift (Add to Start)**:
```javascript
fruits.unshift("Orange");
console.log(fruits); // ["Orange", "Apple", "Banana"]
```

- **Assign by Index**:
```javascript
fruits[3] = "Mango"; // Adds at index 3 (may leave gaps if index is beyond length)
console.log(fruits); // ["Orange", "Apple", "Banana", "Mango"]
```

#### b. **Removing Elements**
- **Pop (Remove from End)**:
```javascript
const last = fruits.pop();
console.log(fruits); // ["Orange", "Apple", "Banana"]
console.log(last); // "Mango" (returned value)
```

- **Shift (Remove from Start)**:
```javascript
const first = fruits.shift();
console.log(fruits); // ["Apple", "Banana"]
console.log(first); // "Orange"
```

- **Splice (Remove from Specific Index)**:
```javascript
fruits.splice(1, 1); // Remove 1 element at index 1
console.log(fruits); // ["Apple"]
```

#### c. **Updating Elements**
Assign a new value to a specific index.
```javascript
fruits[0] = "Grape";
console.log(fruits); // ["Grape"]
```

#### d. **Checking Array Length**
```javascript
console.log(fruits.length); // 1
```

### 3. Connecting to Your Previous Questions
Your earlier questions focused on objects (e.g., creating objects with `myFunction` and managing properties). Arrays are similar in that they store data, but they use numeric indices instead of named keys. For example, you could store objects in an array:
```javascript
// From your previous context: Creating objects
function myFunction(name, age = 25) {
    return { name, age };
}
const person1 = myFunction("Ali");
const person2 = myFunction("Bob", 30);

// Store objects in an array
const people = [person1, person2];
console.log(people); // [{ name: "Ali", age: 25 }, { name: "Bob", age: 30 }]

// Add a new person
people.push(myFunction("Sara", 28));
console.log(people); // [{ name: "Ali", age: 25 }, { name: "Bob", age: 30 }, { name: "Sara", age: 28 }]

// Remove a person
people.splice(1, 1); // Remove Bob
console.log(people); // [{ name: "Ali", age: 25 }, { name: "Sara", age: 28 }]
```

This shows how arrays can hold objects created from your `myFunction`, and you can add or remove them like object properties.

### 4. Practical Example
Here’s a comprehensive example combining array creation and operations:
```javascript
// Create an array
let students = ["Ali", "Bob"];

// Add elements
students.push("Sara"); // Add to end
students[0] = "Alice"; // Update index 0
students.unshift("John"); // Add to start

// Remove elements
students.pop(); // Remove Sara
students.shift(); // Remove John

console.log(students); // ["Alice", "Bob"]
console.log(students.length); // 2
```

### 5. Common Pitfalls
- **Sparse Arrays**: Assigning to an index beyond the array’s length creates undefined gaps (e.g., `arr[10] = "test"` in a 2-element array).
- **Constructor Gotcha**: `new Array(10)` creates an array of length 10, not `[10]`. Use `Array.of(10)` for clarity.
- **Mutating Methods**: Methods like `push`, `pop`, `splice`, etc., modify the array in place. Use `slice` or spread (`[...]`) for non-destructive operations.

### 6. Clarification
If you have a specific use case (e.g., creating arrays dynamically, working with arrays of objects, or integrating with your `myFunction`), please provide details. For example:
- Do you want to create an array of objects from `myFunction`?
- Are you working in a specific environment (browser, Node.js)?
- Do you need array methods like `map`, `filter`, or `reduce`?

### Answer
In JavaScript, create arrays using:
- **Literal**: `const arr = [1, 2, 3];`
- **Constructor**: `const arr = new Array(1, 2, 3);`
- **Array.of**: `const arr = Array.of(10);` (for single elements)
- **Array.from**: `const arr = Array.from("Hello");`

Add elements with `push` (end), `unshift` (start), or `arr[index] = value`. Remove elements with `pop` (end), `shift` (start), or `splice(index, count)`. Example:
```javascript
const fruits = ["Apple"];
fruits.push("Banana"); // Add
fruits[0] = "Orange"; // Update
fruits.pop(); // Remove
console.log(fruits); // ["Orange"]
```
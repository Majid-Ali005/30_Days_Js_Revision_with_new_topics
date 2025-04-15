# JavaScript Syntax

## The Syntax
The syntax of JavaScript is similar to other programming languages such as C and Java. It uses keywords, variables, and functions to create statements and expressions. A statement is a line of code that performs a specific action, and an expression is a line of code that evaluates to a value.

The syntax of JavaScript refers to the set of rules that determine how JavaScript programs are constructed. At its most basic level, the syntax involves creating classes and methods.

## Constructs of Javascript
The variable
One of the basic constructs of JavaScript is the variable. Variables are used to store and manipulate data. They are declared using the keyword “var,” “let,” or “const.” The difference between “var,” “let,” and “const” is the scope and the ability to reassign the value. “Var” is function scope (they are only accessible within the function in which they are declared), “let” is block scope (they are only accessible within the block of code in which they are declared), and “const” is block scope and cannot be reassigned (if you try to reassign a value to a variable declared with “const,” you will get an error).
```bash
var myVariable = "Hello, World!";
//accessible in a function

let myVariable2 = "Hello, World!";
//accessible in the block

const myVariable3 = "Hello, World!";
//accessible in the block and cannot be reassigned
```
### var example
- tho agr aap iss below wale example me dekhe tho aap agr var ko kisi b block k andar banatay hy tho phir aap oss ko sirf ossi hi block me use kr sakty hy oss k bahir aap oss ko use nhi kr sakty hy. Jaise mene yaha pr bahir block se access krne ki koshsih ki hy tho mujhe error show ho rha hy tho ye error iss wja se hy k aap iss ko var ko out of the block use nhi kr sakty hy etc.
- var k andar aik or cheez b hoti hy k aap iss k andar kisi b type k data ko store kr sakty hy iss me koi restriction nhi hy jaise kisi value ko assign krna ya phir same name se multiple name k variable banana etc aap var se kr sakty hy. magr let,const se ye nhi kr sakty hy aap.
```bash
function myFunction() {
    var name = "Majid Ali";
}
console.log(name);

// error --> ReferenceError: name is not defined

```

## The function
Another important construct in JavaScript is the function. Functions are blocks of code that can be executed multiple times. They are declared using the keyword “function” followed by a name and a set of parentheses. For example:

```bash 

function FirstFunction() {
    console.log("hello this is a fucntion in javascript");
}
console.log(FirstFunction());
```
### parameters in function
Functions can also take parameters, which are values that are passed into the function when it is called.

```bash
// function in paramerter
function FunctionWithParameter(name) {
    console.log("function parameter is " + name);
}
console.log(FunctionWithParameter("Majid Ali"));
```

## Statements and loops
JavaScript also has a variety of control structures, such as if/else statements and for loops. These structures allow you to control the flow of code and make decisions based on certain conditions. For example:

```bash
//if statements in javaScript
let name1 = "Ali";
if(name1 == "Majid") {
    console.log("Hello, Majid")
}else{
    console.log("Hello, Stranger");
}
```

for loop aap ko cheeze ati hy cheetah so don't overthinking
```bash
//for loop
for (var i = 0; i <=5; i++){
    console.log(i);
}
```
ye aap k pass se 0 to 6 thak k number ko print karega

### Arrays and objects
JavaScript also has a wide range of built-in objects, such as Arrays and Objects, which can be used to store and manipulate data in more complex ways. For example:

```bash
var myArray = [1, 2, 3, 4, 5]; console.log(myArray[2]); 
// Output: 3

//Array
let array = [1, 2, 3, 4, 5];
console.log(array[2])//tho ye aap k pass 3 index b data ko print krdega yaha pr aap [iss me] index k hisab se data ko print kr sakty hy.
var myObject = { name: "John", age: 30 }; console.log(myObject.name); 
// Output: "John"

//Object
let objctName = {
    name: "Majid Ali",
    age: "25",
    city: "karachi",
    phone: 25252512,
    address: "karachi city"
}
console.log(objctName); // iss se sara object ka data print hojayega
console.log(objctName.city) // iss se aap k passp specific aik city print hojayeg

```
## Conclusion
In conclusion, JavaScript is a powerful and versatile programming language that is essential for creating interactive and dynamic web pages. By understanding its syntax and basic constructs, developers can create effective and efficient code. It is always advisable to keep practicing and experimenting with different constructs and features of javascript to be able to use it efficiently.

## Best Practices
- It’s generally recommended to use const by default for variables that don't need to be reassigned. This helps prevent accidental changes and makes your code more predictable.
- Use let when you need to reassign the variable within its scope.
- Avoid using var due to its potential for scoping issues, especially in modern JavaScript code

## Learning JavaScript
**Take a Course**: Many online platforms offer comprehensive JavaScript courses.
**Learn From Books**: There are numerous books available that cater to different levels of JavaScript learners.
**Coding Bootcamps**: These intensive training programs can help you learn JavaScript quickly.
**Meetups & Conferences**: Networking with other developers can provide valuable insights and learning opportunities.
**Build Projects**: Practical application of knowledge is one of the best ways to learn.
**Read Documentation**: Official JavaScript documentation can be a great resource.
**Contribute to Open Source Projects**: This provides real-world experience and helps solidify your understanding of JavaScript.
Remember, JavaScript is a case-sensitive language, so `myVariable` and `myvariable` are considered two different variables. Also, JavaScript programmers often use camel case that starts with a lowercase letter, such as `firstName` or `lastName`.

## JavaScript Language Basics
JavaScript is a programming language used to add functionality and user interaction to websites. It was originally used on the front end but can now also be used on the back end with Node.js. JavaScript is distinct from Java, despite their similar names. It is loosely typed, meaning types exist but are not enforced.

## Declaring variables
In JavaScript, var, let, and const are used to declare variables, but they have some differences in terms of scope and mutability:

### var
- Variables declared with var are function-scoped or globally scoped, but not block-scoped.
- This means that var variables are accessible anywhere within the function or global context in which they are declared.
- If var is used inside a block (like a loop or an if statement), the variable is accessible outside that block.
- Variables declared with var can be redeclared and reassigned.
```bash
function withVar() {
  var x = 10;
  if (true) {
    var x = 20;  // Redeclaration with var is allowed
    console.log(x); // This will print 20 (local scope)
  }
  console.log(x); // This will also print 20 (function scope)
}
```

### let
- Variables declared with let are block-scoped.
- This means that let variables are only accessible within the block (like a loop or an if statement) in which they are declared.
- Variables declared with let can be reassigned, but not redeclared in the same scope.

```bash
function withLet() {
  let y = 10;
  if (true) {
    let y = 20;  // Redeclaration with let is not allowed (block scope)
    console.log(y); // This will print 20 (local scope)
  }
  console.log(y); // This will print 10 (unchanged outside the block)
}
```

## const
- Variables declared with const are also block-scoped.
- const is used to declare constants, meaning that the value of a const variable cannot be changed once it has been assigned.
- const variables must be assigned a value when they are declared, and cannot be left uninitialized.

## Math Operators
JavaScript provides various math operators to perform numerical operations. Here’s a breakdown of some common ones with examples.

```bash
let sum = 10 + 5;
console.log(sum); // Output: 15

let difference = 20 - 7;
console.log(difference); // Output: 13

let product = 3 * 4;
console.log(product); // Output: 12

let quotient = 30 / 6;
console.log(quotient); // Output: 5

let remainder = 11 % 3;
console.log(remainder); // Output: 2 (11 divided by 3 leaves a remainder of 2)

let base = 2 ** 3;
console.log(base); // Output: 8 (2 raised to the power of 3 is 8)

let points = 10;
console.log(points++); // Output: 10 (original value), then points becomes 11

let health = 100;
console.log(health--); // Output: 100 (original value), then health becomes 99
```

## Return Statement:

- The return statement is used to specify the value that a function sends back after it executes.
- A function can optionally return a value using the return keyword followed by the expression or variable holding the value.
- The returned value can then be stored in a variable or used in an expression when the function is called.

```bash
function sum(x, y) {
  let total = x + y;
  return total;
}

let result = sum(5, 3);
console.log(result); // Output: 8
```

## W3School

### JavaScript Syntax
- JavaScript syntax is the set of rules, how JavaScript programs are constructed:
```bash 
// How to create variables:
var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;
```
### JavaScript Values
The JavaScript syntax defines two types of values:

- Fixed values
- Variable values
Fixed values are called Literals.

Variable values are called Variables.

### JavaScript Literals
The two most important syntax rules for fixed values are:

1. Numbers are written with or without decimals:
```bash
10.50

1001
```
2. Strings are text, written within double or single quotes:
- or ye single quotes ko aksar one chracter ko jub hum store krthy hy tho tub iss ko use kiya jata hy etc.
```bash
let name = "Majid Ali";
console.log(name); 
let name1 = 'Majid Ali'
console.log(name1);

```
## JavaScript Variables
- In a programming language, variables are used to store data values.
- JavaScript uses the keywords var, let and const to declare variables.
- An equal sign is used to assign values to variables.

 In this example, x is defined as a variable. Then, x is assigned (given) the value 6:
```bash 
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Variables</h2>

<p>In this example, x is defined as a variable.
Then, x is assigned the value of 6:</p>

<p id="demo"></p>

<script>
let x;
x = 6;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>

```
## JavaScript Operators
JavaScript uses arithmetic operators ( + - * / ) to compute values:
```bash
(5 + 6) * 10

let val1 = 2;
let val2 = 2;
//Multiplication
let mul = (vale1 * val2);
console.log(mul);
//addition
let add = (vale1 + val2);
console.log(add);

etc
```
## Assignment ya Assign Operator
- JavaScript uses an assignment operator ( = ) to assign values to variables:
```bash 
let j,k;
j = 10;
k = 10;
let add1 = j + k;
console.log(add1);

```
- aap direct b variable me value ko assign kr sakty hy
- yaha pr ye = equal operator aap k pass assignment operator kaha jata hy jo k aap ko value ko right side se left side pr store krtha hy aap k variable me matlab variable k name me etc.

## JavaScript Expressions
- An expression is a combination of values, variables, and operators, which computes to a value.
- The computation is called an evaluation.
- For example, 5 * 10 evaluates to 50:

```bash
console.log(5 * 10);
```

- Expressions can also contain variable values:
```bash
let a = 5;
let b = 10;
let result = a * b;
console.log(result);
```
- The values can be of various types, such as numbers and strings.
- For example, "John" + " " + "Doe", evaluates to "John Doe": --> or iss ko + matlab contcatenation b kaha jata hy

aap number ko b contcatenation kr sakty hy bs oss ko sirf string me store krna hy eg: let a = "1"; etc.

## JavaScript Keywords
- JavaScript keywords are used to identify actions to be performed.
- The let keyword tells the browser to create variables:
```bash
let x, y;
x = 5 + 6;
y = x * 10;
```
- The var keyword also tells the browser to create variables:
```bash
var x, y;
x = 5 + 6;
y = x * 10;
```

## JavaScript Comments
- Not all JavaScript statements are "executed".
- Code after double slashes // or between /* and */ is treated as a comment.
- Comments are ignored, and will not be executed:
```bash
let x = 5;   // I will be executed

// let x = 6;   I will NOT be executed
```
- aap iss comments ka use kr k code ko explain krthy tha k aap ko baad me samjh aye or agr iss ko koi dosra b parhe tho oss ko b samajh aye. or iss se aap notes taking b kr sakty hy without using any copy and any other digital stuff.

## Identifiers are JavaScript names.

- Identifiers are used to name variables and keywords, and functions.
- The rules for legal names are the same in most programming languages.
- A JavaScript name must begin with:
- A letter (A-Z or a-z)
- A dollar sign ($)
- Or an underscore (_)

## Note
- Numbers are not allowed as the first character in names.
- This way JavaScript can easily distinguish identifiers from numbers.

## JavaScript is Case Sensitive
- All JavaScript identifiers are case sensitive. 
- The variables lastName and lastname, are two different variables:
```bash
let lastname, lastName;
lastName = "Doe";
lastname = "Peterson";
```

## JavaScript and Camel Case
![Logo](https://juniortoexpert.com/wp-content/uploads/naming-convention-snake-case-kebab-case-camel-case.png)

Historically, programmers have used different ways of joining multiple words into one variable name:

*Hyphens:*

first-name, last-name, master-card, inter-city.

Hyphens are not allowed in JavaScript. They are reserved for subtractions.

*Underscore:*

first_name, last_name, master_card, inter_city.

Upper Camel Case (Pascal Case):

FirstName, LastName, MasterCard, InterCity.


*Lower Camel Case:*

JavaScript programmers tend to use camel case that starts with a lowercase letter:

firstName, lastName, masterCard, interCity.

## Grok A.i Overview
JavaScript (JS) syntax refers to the set of rules that define how JavaScript code is written and structured. Here's a concise overview of key elements of JS syntax:

1. **Case Sensitivity**: JavaScript is case-sensitive (`myVar` and `myvar` are different).

2. **Statements**: Code is written in statements, which are executed line by line. Statements end with a semicolon (`;`), though it's optional in many cases due to automatic semicolon insertion.
   ```javascript
   let x = 5;
   console.log(x);
   ```

3. **Comments**:
   - Single-line: `// This is a comment`
   - Multi-line: `/* This is a multi-line comment */`

4. **Variables**: Declared using `let`, `const`, or `var`.
   ```javascript
   let name = "Ali"; // mutable
   const age = 25;   // immutable
   var city = "Lahore"; // older, avoid
   ```

5. **Data Types**:
   - Primitive: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
   - Non-primitive: `object`, `array`, `function`
   ```javascript
   let str = "Hello"; // string
   let num = 42;     // number
   let arr = [1, 2, 3]; // array
   let obj = { key: "value" }; // object
   ```

6. **Operators**:
   - Arithmetic: `+`, `-`, `*`, `/`, `%`
   - Assignment: `=`, `+=`, `-=`
   - Comparison: `==`, `===`, `!=`, `!==`, `>`, `<`
   - Logical: `&&`, `||`, `!`
   ```javascript
   let sum = 5 + 3; // 8
   let isEqual = (5 === "5"); // false
   ```

7. **Functions**: Defined using `function` keyword or arrow syntax.
   ```javascript
   function greet(name) {
       return "Hello, " + name;
   }
   const add = (a, b) => a + b;
   ```

8. **Conditionals**:
   ```javascript
   if (condition) {
       // code
   } else {
       // code
   }
   ```

9. **Loops**:
   ```javascript
   for (let i = 0; i < 5; i++) {
       console.log(i);
   }
   while (condition) {
       // code
   }
   ```

10. **Objects and Arrays**:
    ```javascript
    let person = { name: "Ahmed", age: 30 };
    let numbers = [1, 2, 3];
    ```

11. **Error Handling**:
    ```javascript
    try {
        // code
    } catch (error) {
        console.log(error);
    }
    ```

12. **ES6+ Features**:
    - Arrow functions: `() => {}`
    - Destructuring: `let {name, age} = person;`
    - Template literals: `` `Hello, ${name}` ``
    - Spread/rest: `[...arr]`, `...obj`

JavaScript is flexible but strict in certain areas (e.g., undeclared variables with `use strict`). If you want a deeper dive into any specific part, let me know!






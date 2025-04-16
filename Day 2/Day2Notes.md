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

# JavaScript Comments
- JavaScript comments can be used to explain JavaScript code, and to make it more readable.
- JavaScript comments can also be used to prevent execution, when testing alternative code.

### Two Types Of Comments in JavaScript
1. Single Line Comments
2. Multi line comments
3. Inline Comments
### Single Line Comments
- Single line comments start with //.
- Any text between // and the end of the line will be ignored by JavaScript (will not be executed).
#### Single Line Comments
```bash
//1. Single Line Comment
//variable making with var
var name = "Majid Ali";
//to print vairiable in console 
console.log(name);
// you can alos make a variable with let and const etc.
//or ye comment compiler ignore karega matlab iss ko print nhi karega

```
- aap ko issi hi trha se pehly comment ko use krna hy or phir apna jo b code ho wo likhna hy etc.
#### This example uses a single line comment at the end of each line to explain the code:
```bash 
let x = 5;      // Declare x, give it the value of 5
let y = x + 2;  // Declare y, give it the value of x + 2
```

### Multi-line Comments
- Multi-line comments start with /* and end with */.
- Any text between /* and */ will be ignored by JavaScript.
- This example uses a multi-line comment (a comment block) to explain the code:
```bash
<!DOCTYPE html>
<html>
<body>

<h1 id="myH"></h1>
<p id="myP"></p>

<script>
/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
*/
document.getElementById("myH").innerHTML = "JavaScript Comments";
document.getElementById("myP").innerHTML = "My first paragraph.";
</script>

</body>
</html>

```
- It is most common to use single line comments.
- log zyda thar single line comments ko use krthy hy.

### Inline comments
Single-line comments at the end of a code line are referred to as inline comments.
```bash
let x = 99;    // assign numerical value to x
let y = x + 2; // assign the sum of x + 2 to y
```

### Nested Comments
aap comment k andar comment ko b likh sakty ho
```bash
/*
This is a multi-line comment
/*
This is an attempt to nest a comment, but it will cause an error!
*/
console.log("Hello, World!");
```

### Using Comments to Prevent Execution
- Using comments to prevent execution of code is suitable for code testing.
- Adding // in front of a code line changes the code lines from an executable line to a comment.
- This example uses // to prevent execution of one of the code lines:
```bash
//document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
```

## Multi Line Comments
```bash
// Multi Line Comments
/*
her is
we are
create
a function with 
multi line comment 
so see below and enjoy
*/
function Myfunction(){
    console.log("hello multi line comment")
}
console.log(Myfunction());
```
### Comments
- bhai dekho comment bohat zaroori hotay hy espccially jub aa kisi k sath kisi project me collaborate kr rhy ho ya phir interview de rhy ho tho oss time pr efficiently comments ka use krna bohat hi important hojata hy.
- aap ko sirf code nhi likhna hy bal k aap ka code bilkul aik dcoumented hona chaye hy tha k aap ko b baad me samajh aye or jo banda aap k sath kaam kr rha hy ya phir aap k code ko dekh rha hy tho wo b easily samjh jaye etc.
- Avoid Over-commenting: While comments are beneficial, excessive commenting can clutter the code. Aim for a balance where comments add value without stating the obvious.
- comments krna aap k code ki calrity ko improve krtha hy magr aisa aap ko nhi krna hy k jaha pr comment ki zaroorat nhi ho or aap waha pr b comments kr rhy ho etc. So avoid the overcommenting. matlab fazool k comments aap ko nhi likhne hy.
- jub b aap kisi naye cheez ko kr rhy hy tho phir apne code ko aik bar visit kr liya kare oss ko update kiya kare apne hisab se aap jo b changes krthy hy etc.
- aap ko lambe comments tub likhne chaye hy jub aap koi barha kaam kr rhy or oss ko explain kare with the help of multi line comments. Jaise agr koi function kisi number ko add kr rha hy tho aap pore function ko multi line comment me explain kare k aap k pass kiya kiya ho rha hy or kiya kiya nhi etc.
- Use Comments Before Code: Place comments above the code you’re explaining to save time for the reader.
- aap extensions ko b use kr sakty hy apne code ko comment krne k liye vs code me. aap google kr k dekh sakty hy etc.
- Aksar aap zyda thar tub comments krthy hy jub koi code hard ho samjhne me.


##  jsDoc in JavaScript
![Logo](https://www.aipython.in/wp-content/uploads/2020/02/variable_real_world.png)
- tho aap ka comment kuch iss trha se highlight hojayega.
```bash
/**
 * This is function takes in user id and shopping cart
 * loops through items to make invoice send via api
 * returns json 
 */

```
- iss trha k comment ko likhne k liye aap ko simply pehly forward slash / ye likhna hoga or phir do bar star likhna hy tho phir har enter pr aap k pass ye start atay rehenge jub thak aap comments krna chahtay hy tho aap iss ko zaroor use kare q k bohat sare tutorial iss ko nhi batatay hy etc.
- iss trha k comment k likne se aap ka time zaya nhi hoga.
- then when I returned to my code the following day I had no idea what I was trying to achieve. I have wasted countless hours using this approach, so remember there is no shame in leaving comments but keep them structured and meaningful.
- tho aap ko comment krne se darna nhi hy bs comment likhna hy jo b ho.

# javaScript Variables
![Logo](https://www.aipython.in/wp-content/uploads/2020/02/variable_real_world.png)

## Variables are Containers for Storing Data
JavaScript Variables can be declared in 4 ways:

- Automatically
- Using var
- Using let
- Using const

### Undeclared Variables - Automatically Variables
- undeclared variables ya phir automatically vriables me ye hota hy k aap direct variable ko banatay hy aap koi b let ya var ya const ka use nhi krthy hy bs direct apne variable ko banatay hy tho iss trha k variable k banane ko undeclared variables ya phir automatically variables kaha jata hy etc.

```bash
//here we are making the undeclared variable in javaScript

x = 6;
y = 7;
a = "hello world";
z = x + y;
console.log(z);
console.log(typeof(x)); // number
console.log(typeof(a)); // string
```
- NOTE: It is considered good programming practice to always declare variables before use.
- ye aik achi practice hoti hy programming me k aap pehly variable ko declare kare or phir oss ko use kare.
From the examples you can guess:

- x stores the value 6
- y stores the value 7
- z stores the value 13
- a store the value hello world

### Example using var
```bash
// aap var k keywords se b variable ko bana sakty ho easily.
var a = 10;
var b = 10;
var add = a + b;
console.log(add);
```
### Note
- The var keyword was used in all JavaScript code from 1995 to 2015.
- The let and const keywords were added to JavaScript in 2015.
- The var keyword should only be used in code written for older browsers.

### Example Using Let
```bash
let x = 5;
let y = 6;
let z = x + y;
```

### Example using const
```bash
const x = 5;
const y = 6;
const z = x + y;
```
### Mixed Example
```bash
const price1 = 5;
const price2 = 6;
let total = price1 + price2;
```

- The two variables price1 and price2 are declared with the const keyword.
- These are constant values and cannot be changed.
- The variable total is declared with the let keyword.
- The value total can be changed.

## When to Use var, let, or const?
1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers.

## Note
Variables are containers for storing values.

# JavaScript Identifiers
- All JavaScript variables must be identified with unique names.
- These unique names are called identifiers.
- Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).
- The general rules for constructing names for variables (unique identifiers) are:

1. Names can contain letters, digits, underscores, and dollar signs.
2. Names must begin with a letter.
3. Names can also begin with $ and _ (but we will not use it in this tutorial).
4. Names are case sensitive (y and Y are different variables).
5. Reserved words (like JavaScript keywords) cannot be used as names.

### Note
JavaScript identifiers are case-sensitive.

iss case-sensitive ka matlab ye hota hy k aap k pass for example do variable hy myname or dosra hy myName tho ye dono aik dosre se different hy matlab dono alag alag variable hy tho issi hi ko case-sensitive kaha jata hy.

```bash
//jaise yaha par ye dono variable aik dosre se different hy
let name = "Majid Ali";
let Name = "Majid Ali"
console.log(name);
console.log(Name);
```
### The Assignment Operator
- ye assignment operator aap k pass aap k value ko aap k variable me store krne ka kaam krtha hy.
- ye aap k right side k value ko left side k variable me store krtha hy.
- In JavaScript, the equal sign (=) is an "assignment" operator, not an "equal to" operator.
- ye aap k pass equal se alag hy different hy. javaScript me equal == double se kiya jata hy tho sing = aap k pass assignment operator kehlata hy.
- NOTE: The "equal to" operator is written like == in JavaScript.

#### NOTE:
- agr aap number ko string matlab double ya phir single quotation me agr store krthy hy tho phir iss ko as a string hi consider kiya jayega.
```bash
//number aap k pass without quotation likha jata hy
// aap jaise string me agr number ko store krthy hy tho phir oss ko string k thora pr consider kiya jayega.
// tho aap data type jiss trha use hotay hy oss ka khayal rakhna partha hy etc.
let number1 = "12";
let number2 = 12;
console.log(typeof(number1)); // string
console.log(typeof(number2)); // number
```

## Declaring a JavaScript Variable
- Creating a variable in JavaScript is called "declaring" a variable.
- You declare a JavaScript variable with the var or the let keyword:
```bash
var carName;
//OR
let carName
```
- After the declaration, the variable has no value (technically it is undefined).
- To assign a value to the variable, use the equal sign:
```bash
carName = "Volvo";

```
- You can also assign a value to the variable when you declare it: matlab aap direct b variable k andar value ko assign kr sakty hy.
```bash
//like this
let carName = "Volvo";

//or pehly declare krna pr phir value assign krna ye kuch iss trha hota hy
let cName;
cName = "Volvo";
```
### Note
It's a good programming practice to declare all variables at the beginning of a script.

## One Statement, Many Variables
- You can declare many variables in one statement.
- Start the statement with let and separate the variables by comma:
```bash
let person = "John Doe", carName = "Volvo", price = 200;
```

## Value = undefined
- In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.
- A variable declared without a value will have the value undefined.
- The variable carName will have the value undefined after the execution of this statement:
```bash
let carName; //Undefined
```
- q k aap ne variable ko declared tho krdiya hy magr oss me koi value assign nhi ki tho iss waja se iss variable ki undefined hogi.
## Re-Declaring JavaScript Variables
- If you re-declare a JavaScript variable declared with var, it will not lose its value.
- The variable carName will still have the value "Volvo" after the execution of these statements:
```bash
var carName = "Volvo";
var carName;
console.log(carName);

var NewCar = "Parado 1 ";
var NewCar = "Parado 2";
console.log(NewCar); // Output: Parado 2

```
- aik hi name se do variables banana aap k pass sirf var hi provide krtha hy.
### Note
You cannot re-declare a variable declared with let or const.
```bash
// This will not work: q k aap let se same name k do variables ko nhi bana sakty hy.
let carName = "Volvo";
let carName;

```

## JavaScript Dollar Sign $
- Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names:
- matlab aap javaScript me $ dollar k sign k sath variable ko bana sakty hy.
```bash
// koi b error aap ko nhi milega q k aap dollar sign se javaScript me variable bana sakty ho
let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;
console.log($);
console.log($$$);
console.log($myMoney);
console.log(typeof($)); // String
console.log(typeof($$$)); // number
console.log(typeof($myMoney)); // number
```
- Using the dollar sign is not very common in JavaScript, but professional programmers often use it as an alias for the main function in a JavaScript library.

- In the JavaScript library jQuery, for instance, the main function $ is used to select HTML elements. In jQuery $("p"); means "select all p elements".

### JavaScript Underscore (_)
- Since JavaScript treats underscore as a letter, identifiers containing _ are valid variable names:
- Underscore ko aksar barhe name ko jorhne k liye use kiya jata hy jaise My_Is etc.
```bash
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;
```
- Using the underscore is not very common in JavaScript, but a convention among professional programmers is to use it as an alias for "private (hidden)" variables.

# Medium

![Logo](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*uAScWdray8Vo-6iR49kHfg.png)
- Javascript is a loosely or dynamically typed language. It means while declaring a variable you don’t have to explicitly mention what type of data you are going to store.
- loosely or dynamically typed language ka matlab ye hota hy k aap ko variable ko banatay waqt koi b data type ko mention krne ki zaroorat nhi hoti hy bal k ye run hojane pr khud ba khud oss value ko assign krdetay hy apne hisab k type k mutabik dynamically ye kaam hota hy etc.
jaise aap agr js me koi variable with let a = 25; krthy hy tho aap ne yaha pr koi b type jo hy mentioned nhi kiya howa hy tho js aap k pass loosely or dynamically typed language hy tho ye khud ba khud iss ko type assign krdeta hy etc.
-  Javascript uses automatic type casting or type conversion to do so. It is smart enough to figure out what you have assigned to it and when you make changes it adapts accordingly. In most of the famous and older languages like java, c++ you have to specify what data type(Numbers, Strings, Float, etc) a variable will contain.
- A Variable is like a container for storing values like String, Number, Boolean, etc and complex data structure(Arrays, Objects) and even the entire function. Variables are used to store values or result of any operation that we want to use later on. The variable value can be changed later on in the program.
- javaScipt Engine: jub b aap koi variable ya phir koi or kaam krthy hy tho oss ko process jiss ko store krna kehlata hy wo javaScript ka engine krtha hy.
-  var a,b; --> aap iss trha se aik time pr do variables ya phir multiple variables b bana sakty hy. like: var a = 10, b = 20,c = 10;
- Error: console.log(company) // Uncaught ReferenceError: company is not defined --> agr aap k pass koi variable nhi bana howa hy magr aap apne se koi b name console.log() krhty hy tho phir aap ko ye wala error milega etc.
- If you try to access the variable that doesn’t exist, you will get an error message.

### Var Hoisting:
Var variables can be accessed before their declaration. Javascript moves all the var variables to the top of the function or global context. This is known as var hoisting.
![Logo](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*wOW-T-1wBUNEMQqn6ARgmw.png)

# JavaScript Let
- The let keyword was introduced in ES6 (2015)
- Variables declared with let have Block Scope
- Variables declared with let must be Declared before use
- Variables declared with let cannot be Redeclared in the same scope

## Block Scope
- Before ES6 (2015), JavaScript did not have Block Scope.
- JavaScript had Global Scope and Function Scope.
- ES6 introduced the two new JavaScript keywords: let and const.
- These two keywords provided Block Scope in JavaScript:
#### Example
Variables declared inside a { } block cannot be accessed from outside the block:
```bash
{
  let x = 2;
}
// x can NOT be used here
```

## Global Scope
- Variables declared with the var always have Global Scope.
- Variables declared with the var keyword can NOT have block scope:
#### Example
Variables declared with varinside a { } block can be accessed from outside the block:
```bash
{
  var x = 2;
}
// x CAN be used here
```

### Cannot be Redeclared
- Variables defined with let can not be redeclared.
- You can not accidentally redeclare a variable declared with let.
- With let you can not do this:
```bash
 // you cannot redeclared let variable
  let x1 = 12;
  lext x1 = 12; //error: --> SyntaxError: Unexpected identifier 'x1'
```
- Variables defined with var can be redeclared.
```bash
var x = "John Doe";

var x = 0;
```

### Redeclaring Variables
- Redeclaring a variable using the var keyword can impose problems.
- Redeclaring a variable inside a block will also redeclare the variable outside the block:
#### Exampel:
```bash
var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2
```
- Redeclaring a variable using the let keyword can solve this problem.
- Redeclaring a variable inside a block will not redeclare the variable outside the block:
```bash
let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10
```
- tho aap k pass let kisi b variable ko Redeclare krne k problem ko solve krdeta hy. Matlab let se jub aap aik varialble ko banatay ho tho phir ossi hi same name se aap koi dosra variable nhi bana sakty ho etc.
### What is Good?
- let and const have block scope.
- let and const can not be redeclared.
- let and const must be declared before use.
- let and const does not bind to this.
- let and const are not hoisted.

### What is Not Good?
- var does not have to be declared.
- var is hoisted.
- var binds to this.

### Redeclaring
- Redeclaring a JavaScript variable with var is allowed anywhere in a program:
- Example:
```bash
var x = 2;
// Now x is 2

var x = 3;
// Now x is 3
```
- With let, redeclaring a variable in the same block is NOT allowed:
- Example:
```bash
var x = 2;   // Allowed
let x = 3;   // Not allowed

{
let x = 2;   // Allowed
let x = 3;   // Not allowed
}

{
let x = 2;   // Allowed
var x = 3;   // Not allowed
}
```
- Redeclaring a variable with let, in another block, IS allowed:
```bash
let x = 2;   // Allowed

{
let x = 3;   // Allowed
}

{
let x = 4;    // Allowed
}
```

### Let Hoisting
- Variables defined with var are hoisted to the top and can be initialized at any time.
- Meaning: You can use the variable before it is declared:

#### Var Hoisting
```bash
//var hoisting

xh = "var hoisting";
var xh;
console.log(xh); //output: -> var hoisting
```
- simple hositing ka matlab ye hota hy k jaise mene pehly variable k andar value ko store kiya howa hy phir oss se niche variable ko define kiya howa hy magr var aap k pass hosting ko support krtha hy tho ye khud b khud upar lag jata hy or variable declare hojta hy simple. aap ko koi b error dekhne ko nhi milega.
- magr agr aap let se krthy hy tho tub aap ko error milega q k aap k pass let jo hy hoisting ko support nhi krtha hy.

- Variables defined with let are also hoisted to the top of the block, but not initialized.
- Meaning: Using a let variable before it is declared will result in a ReferenceError:
```bash
carName = "Saab";
let carName = "Volvo";
//error: -> ReferenceError: Cannot access 'carName' before initialization
```
### JavaScript Const
- The const keyword was introduced in ES6 (2015)
- Variables defined with const cannot be Redeclared
- Variables defined with const cannot be Reassigned
- Variables defined with const have Block Scope
- matlab jub aap const se variable ko banatay hy tho oss ka scope hota hy jaise hamare pass var or let me hota hy etc.
- aap let or var k variable me value ko reassigned kr sakty hy magr const me nhi kr sakty hy
```bash
//let reassigned the value
let p = 12;
p = 13;
console.log(p); // output: 13
```
- jaise yaha pr aap dekh sakty hy k hum ne let k variable me value ko reassgined krdiya hy. tho ye let me possible hy magr const me nhi hy.

### Cannot be Reassigned
- A variable defined with the const keyword cannot be reassigned:
```bash
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
//Error: TypeError: Assignment to constant variable.
```
### Must be Assigned
- JavaScript const variables must be assigned a value when they are declared:
- Matlab aap const me value ko declared krthy time value ko assign tho kr sakty hy magr reassigned nhi kr sakty hy.
```bash
//ye aap k pass correct way hy below
//Correct
const PI = 3.14159265359;
```
```bash
// ye aap k pass correct way nhi hy q k aap const me value ko reassign nhi kr sakty hy.
// Incorrect
const PI;
PI = 3.14159265359;
```
### When to use JavaScript const?
- Always declare a variable with const when you know that the value should not be changed.
- aap tub hi const ko use kare jub aap chahtay hy k bhai mujhe iss variable k andar data ko change nhi krna hy. Matlab koi b banda iss k andar value ko change na kr saky tho tub hum log const ka use krthy hy.

Use const when you declare:

- A new Array
- A new Object
- A new Function
- A new RegExp
- aksar array,object,function,RegExpression etc ko jub aap banatay hy tho tub aap aksar const ka use krthy hy jo k aik achi practice hoti hy etc.

Constant Objects and Arrays
- The keyword const is a little misleading.
- It does not define a constant value. It defines a constant reference to a value.
- reference to a value: --> iss ka matlab ye hy k aap ka jo variable hota hy const keyword sirf oss ko const banta hy or phir refrence deta hy value ko k aap iss ko change nhi kr sakty hy q k mujhe as a const define kiya gaya hy etc.

Because of this you can NOT:

- Reassign a constant value
- Reassign a constant array
- Reassign a constant object

But you CAN:

- Change the elements of constant array
- Change the properties of constant object

### Constant Arrays
- You can change the elements of a constant array:
- Matlab aap array k elements ko change kr sakty hy magr array ko pora assign nhi kr sakty hy jub aap const ki madad se array ko banatay hy etc.
- Example:
```bash
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

// OR 
const array1 = ["a",12,"b","c",true,"hello"];
array1[0] = "c"; // no problem change hojayega array ka element
console.log(array1); // [ 'c', 12, 'b', 'c', true, 'hello' ]
```
- But you can NOT reassign the array:
```bash
const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR

//Error: cars = ["Toyota", "Volvo", "Audi"]; 
     ^
//TypeError: Assignment to constant variable.
```

### Constant Objects
- You can change the properties of a constant object:
- objects ko bantay waqt aap phir iss me iss k perperties ko change kr sakty hy no problem.
```bash
// You can create a const object:
const car = {
    type: "Fiat",
    model: "500",
    color: "white"
};

// You can change a property:
car.color = "red";

// You can add a property:
/**
 * bhai ye owner ka key and value aap k pass available hi nhi tha aap k object me tho aap issi trha se apne key or object ko direct bahir se b add kr sakty ho
 * 
 */
car.owner = "Johnson";
// print object with console.log()
console.log(car);
```
- But you can NOT reassign the object:
- matlab aap object k properties ko tho change or update kr sakty hy jiss ko hum ne upar dekh liye hy magr aap pore object ko reassign nhi kr sakty hy. 
```bash
const car = {type:"Fiat", model:"500", color:"white"};

car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR
```

### Different Between Let,Var,Const
![Logo](https://miro.medium.com/v2/resize:fit:1400/0*tkspzKBpgWrQo97J.jpg)

### Hoisting
- Variables defined with var are hoisted to the top and can be initialized at any time.
- var aap k pass Hoisting hota hy magr const nhi hota hy.
- Variables defined with const are also hoisted to the top, but not initialized.
- Meaning: Using a const variable before it is declared will result in a ReferenceError:
- matlab ye top me tho chala jata hy hoisting kr k magr initialized nhi hota hy.
```bash
alert (carName);
const carName = "Volvo";
// Error: --> ReferenceError: alert is not defined
```
















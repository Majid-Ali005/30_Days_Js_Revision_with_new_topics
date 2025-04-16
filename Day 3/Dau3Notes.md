## JavaScript Operators
Javascript operators are used to perform different types of mathematical and logical computations.

Examples:

- The Assignment Operator = assigns values
- The Addition Operator + adds values
- The Multiplication Operator * multiplies values
- The Comparison Operator > compares values

### JavaScript Have Cool Operators

- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Unary Operators
- Bitwise Operators
- String Operators
- Conditional (Ternary) Operator

ab hum log aik aik kr k inn sare operators samjhty hy.
### Arithmetic Operators

- + (Addition)
- - (Subtraction -)
- * (Multiplication)
- / (Division)
- % (Modulus)
- ** (Exponentiation)

Example:
```bash
let x = 10;
let y = 5;
/**
 * first hum ne two variables ko liya howa hy jiss k upar hum log operatios apply karenge
 * 
 */

console.log(x + y); // Output: 15 yaha pr simple addtion ho rha hy like 2 + 2
console.log(x - y); // Output: 5 yaha pr simple subraction ho rha hy like 2 - 2
console.log(x * y); // Output: 50 yaha pr simple multiplication ho rha hy like 2 * 2
console.log(x / y); // Output: 2 yaha pr simple division ho rha hy like 2 / 2
console.log(x % y); // Output: 0 yaha pr aap k pass modulus apply ho rha hy jo k aap ko kisi b value ka reminder deta hy.
console.log(x ** y); // Output: 100000 // yaha pr aap k pass Exponential ho rha hy jaise do ki power do etc wo wala simple. like y=2^x


```

### Assignment Operators

- = (Assignment)
- += (Addition assignment)
- -= (Subtraction assignment)
- *= (Multiplication assignment)
- /= (Division assignment)
- %= (Modulus assignment)

Example:

```bash
let x = 10;
// 1. yaha pr simply hamare pass x k andar 10 store ho rha hy with the help of = to assignment operator jiss ko hum ne pehly b samjha tha.
console.log(x); // Output: 10


x += 5;
// yaha pr aap k pass ye += ye krtha hy k ye value ko pehly plus kr k oss variable me add krtha hy or phir assign krdeta hy
// jaise yaha pr x += 5; tho aap k pass 10 jo k pehly x ki value hy oss me 5 plus ho rha hy.
console.log(x); // Output: 15

x -= 3;
// or yaha pr hamare pass assignment ho rha hy magr aap k pass jo 15 tha q k hum ne apne x ki variable ko 10 se 15 me update krdiya tha.
// tho oss me se hamare pass minus subtract ho rha hy 3 simple 
console.log(x); // Output: 12

x *= 2;
// or ye aap k pass pehly multiply kr rha hy or phir value ko assign kr rha hy.
console.log(x); // Output: 24

x /= 4;
// or yaha pr aap k pass pehly division ho rhi hy or phir assignment
console.log(x); // Output: 6

x %= 5;
// or yaha pr b aap k pass simply pehly modulus ho rha hy or phir assignment.
console.log(x); // Output: 1
```

### Comparison Operators

- == (Equal to) This operator is a comparison operator that checks whether two values are equal.
- === (Strict equal to) This operator, also known as the strict equality operator, checks whether two values are equal and of the same type
- != (Not equal to)
- !== (Strict not equal to)
- > (Greater than)
- < (Less than)
- >= (Greater than or equal to)
- <= (Less than or equal to)
```bash
let c = 5;
let d = "5";
/**
 * aap iss comparison operators ko zyda thar loop ya phir if me use karoge.
 * iss aap k pass condition k sahi ya phir ghalat hone pr console me aap k pass true and false print hoga simple.
 */

//(==)
console.log(c == d); // Output: true 
console.log(5 == "5"); // Output: true 
console.log(0 == false); // Output: true

//(===)
console.log(c === d); // Output: false
console.log(5 === "5"); // Output: false
console.log(0 === false); // Output: false

console.log(c != d); // Output: false
console.log(c !== d); // Output: true
console.log(c > d); // Output: false
console.log(c < d); // Output: false
console.log(c >= d); // Output: true
console.log(c <= d); // Output: true
```

### Logical Operators

- && (Logical AND)
- || (Logical OR)
- ! (Logical NOT)
- iss operator ki madad se aap aik line me multiple condition ko check kr sakty hy.
- && AND operator: ye AND operator aap ko ye bolta hy k bhai me tub hi run honga jub dono taraf k condition true ho or agr aik b false ho tho me run nhi karoga.
- || OR Operator: -> ye OR operator aap ko bolta hy k bhai aap k pass agr dono taraf me se aik b condition true hojaye tho me run krjaonga koi masla nhi hy.
- ! Logical Operator: -> ye logical not operator aap k pass true ko false or false ko true krdeta hy simple.

Example:
```bash
let c = 5;
let d = "5";
/**
 * aap iss comparison operators ko zyda thar loop ya phir if me use karoge.
 * iss aap k pass condition k sahi ya phir ghalat hone pr console me aap k pass true and false print hoga simple.
 */

//(==)
console.log(c == d); // Output: true 
console.log(5 == "5"); // Output: true 
console.log(0 == false); // Output: true

//(===)
console.log(c === d); // Output: false
console.log(5 === "5"); // Output: false
console.log(0 === false); // Output: false

console.log(c != d); // Output: false
console.log(c !== d); // Output: true
console.log(c > d); // Output: false
console.log(c < d); // Output: false
console.log(c >= d); // Output: true
console.log(c <= d); // Output: true
```

### Unary Operators

- + (Unary plus)
- - (Unary minus -)
- ++ (Increment)
- -- (Decrement)
- typeof (Typeof)
- delete (Delete)
- void (Void)
- ! (Logical NOT)
- Unary operator ka b simple sa funda hy k ye aap k value ko increase or decrease krtha hy matlab aap k value ko increment or dercrement krtha hy simply.
```bash
let g = 10;
// yaha pr simple sa hum logo ne aik variable ko liya howa hy jiss me  10 store hy
console.log(-g); // Output: -10
console.log(++g); // Output: 11
console.log(typeof g); // Output: "number"
console.log(delete g); // Output: true
```
### Bitwise Operators
- & (Bitwise AND)
- | (Bitwise OR)
- ^ (Bitwise XOR)
- ~ (Bitwise NOT)
- << (Left shift)
- >> (Sign-propagating right shift)
- >>> (Zero-fill right shift)
- ye bitwise operator aap k pass bit k level pr kaam krtha hy or ye aap k hardware k kaafi nazdeeq hotay hy.

Example:
```bash
let h = 5; // Binary: 101
let i = 3; // Binary: 011

console.log(h & i); // Output: 1 (Bitwise AND)
console.log(h | i); // Output: 7 (Bitwise OR)
console.log(h ^ i); // Output: 6 (Bitwise XOR)
console.log(~h); // Output: -6 (Bitwise NOT)
console.log(h << 1); // Output: 10 (Left shift)
console.log(h >> 1); // Output: 2 (Sign-propagating right shift)
console.log(h >>> 1); // Output: 2 (Zero-fill right shift)
```

### String Operators

- + (Concatenation +)
- string ka aik hi operator hota hy jo k concatenation kehlata hy ye do string jhorne ka kaam krtha hy simply.
```bash
// jaise yaha pr aap k pass hello alag variable me save hy or world alag magr hum ne issko console.log() me + k sign k sath concatenate kiya howa hy etc.
let str1 = "Hello, ";
let str2 = "World!";

console.log(str1 + str2); // Output: "Hello, World!"
// yaha pr aap k pass concatenation ho rhi hy.
```

### Conditional (Ternary) Operator

- condition ? expr1 : expr2
```bash
let age = 20;
let status = (age >= 18) ? "adult" : "minor";

console.log(status); // Output: "adult"
```
- aap iss me logical operators ko b use kr sakty ho or b complex or better condition banane k liye.
Great question! You **can use logical operators** inside a ternary operator to make your condition more complex. Logical operators like `&&` (AND), `||` (OR), and `!` (NOT) help you create more detailed conditions.

Here’s an example of using logical operators inside a ternary operator:

### Example 1: Using `&&` (AND)
```javascript
let age = 20;
let hasID = true;

let status = (age >= 18 && hasID) ? "adult with ID" : "not allowed";
console.log(status); // Output: "adult with ID"
```

### Example 2: Using `||` (OR)
```javascript
let age = 16;
let withParent = true;

let status = (age >= 18 || withParent) ? "allowed" : "not allowed";
console.log(status); // Output: "allowed"
```

### Example 3: Using `!` (NOT)
```javascript
let isBanned = false;

let status = (!isBanned) ? "access granted" : "access denied";
console.log(status); // Output: "access granted"
```

You can also combine multiple logical operators:
```javascript
let age = 17;
let hasID = false;
let withParent = true;

let status = (age >= 18 && hasID || withParent) ? "can enter" : "cannot enter";
console.log(status); // Output: "can enter"
```
### Operators
Operators play a crucial role in programming by enabling us to perform various operations on data. In JavaScript, operators are symbols or keywords that allow us to manipulate and combine values. They provide the foundation for performing arithmetic calculations, making comparisons, assigning values, and more. 
- operators aap k pass simple symbols hotay hy jo k perform krthy hy kuch specific tasks on data k upar or har operator ko different categories me dala gaya hy jo k different tarikay se work krtha hy.
- jaise building banane wale k pass different types k tools hotay hy issi trha programming me Operators hotay hy jiss ki madad se aap data k upar operations ko apply krthy hy etc.
- Operators are essential for performing computations, making decisions, and manipulating data in programming. 
- By mastering these operators, you’ll have the ability to manipulate data, perform calculations, make decisions, and create powerful programs. 
- aap ko operators ya koi or topics ka ana zaroori tho hy magr sub se zyda important ye hota hy k aap oss operators ko sahis se use kr sakoi combinely jaise hackathon etc me.
- Because confidence is everything tho aap confidently kisi b cheez ko use karo daro mat. or sharmao mat. apnie productivity or skills ko show krwao.

- One Question niche code ka ouput kiya hoga
```bash
Consider the following code:
let x = 5;
let y = '8';
let z = x + y; // 58 
// tho aap k pass 58 iss wja se a rha hy q k 8 jo hy string me jo k + k sath 5 k sath simply concatenate ho rha hy etc.
```
# JavaScript Arithmetic
- Arithmetic operators perform arithmetic on numbers (literals or variables).
A typical arithmetic operation operates on two numbers.

The two numbers can be literals:
```bash
let x = 100 + 50;

// or variables:

let x = a + b;

// or expressions:

let x = (100 + 50) * a;


```
### Operators and Operands
- The numbers (in an arithmetic operation) are called operands.
- The operation (to be performed between the two operands) is defined by an operator.
![Logo](https://assets.digitalocean.com/articles/javascript-unary-operators-simple-and-useful/EOsYiNm9TS6iit5j04dY_Screen%20Shot%202017-02-03%20at%205.30.44%20PM.png)
- Remainder
The modulus operator (%) returns the division remainder.

- NOTE: yaha thak hum logo ne deeply operators ko parh liya hy ab aap iss se koi b question etc solve kr sakty hy.

# JavaScript Data Types
Great question! 🙌  
Let’s break down **data types in JavaScript** in **simple English** with **real-life examples** so it’s super easy to understand.

---

### ✅ **What is a Data Type?**

A **data type** tells the computer **what kind of data** you're working with.

Just like in real life we have:
- Numbers (like money, age),
- Text (like your name),
- True/False (like yes or no),
- Boxes (that can hold other things),

JavaScript also has data types to store different types of information.

---

### 🧠 **Main JavaScript Data Types with Real-Life Examples**

| Data Type        | Description                         | Real-Life Example                      | Code Example                |
|------------------|-------------------------------------|----------------------------------------|-----------------------------|
| **Number**       | Any number (integer or decimal)     | Age: `20`, Price: `99.99`              | `let age = 20;`             |
| **String**       | Text (inside quotes)                | Name: `"Ali"`, City: `"Karachi"`       | `let name = "Ali";`         |
| **Boolean**      | Only `true` or `false`              | Light on? `true`, Logged in? `false`   | `let isOnline = true;`      |
| **Undefined**    | A variable declared but no value yet| Empty plate—it's there but nothing in it| `let x;`                    |
| **Null**         | No value on purpose                 | Like a cup with **intentionally** nothing | `let item = null;`       |
| **Object**       | A collection of key-value pairs     | A student with name, age, city         | `let student = {name: "Ali", age: 16}` |
| **Array**        | A list of items                     | Shopping list: `["milk", "bread"]`     | `let items = ["pen", "book"];` |

---

### 🧸 **Quick Real-Life Analogy**
Let’s say you have a **school bag** (like a variable), inside it you can put:
- **Books** (Strings)
- **Notebook pages with numbers** (Numbers)
- **Checklist: is homework done?** (Boolean)
- **An empty box** (Undefined or Null)
- **Multiple pens in a pencil case** (Array)
- **ID card with name, class, roll number** (Object)

---

## JavaScript has 8 Datatypes
- String
- Number
- Bigint
- Boolean
- Undefined
- Null
- Symbol
- Object
- Data types aap k computer ko batata hy k aap konse types k data ko store krne ja rhay hy apne computer me simple.

### The Object Datatype
- The object data type can contain both built-in objects, and user defined objects:
- Built-in object types can be:
- objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.
::::Note
A JavaScript variable can hold any type of data.

## The Concept of Data Types
- In programming, data types is an important concept.
- To be able to operate on variables, it is important to know something about the type.
- Without data types, a computer cannot safely solve this:
```bash
let x = 16 + "Volvo";
console.log(x);
// matlab iss me aisa hojata hy k aap k pass aik data type jo hy dosre me khud ba khud conver hojata hy.
// jaise yaha pr 16 number hy magr aap ne oss k sath String Volvo ko + concatenate kiya hy tho aap ka jo 16 hy ye b convert hojata hy string me or ye aik main concept hy jo k taqreeban har programming language me hota hy.
```
- Does it make any sense to add "Volvo" to sixteen? Will it produce an error or will it produce a result?
- JavaScript will treat the example above as:
```bash
let x = "16" + "Volvo";
// matlab ye aap k number ko string me convert krdeta hy.
```
:::::Note
- When adding a number and a string, JavaScript will treat the number as a string.
- matlab jub b aap number ko javaScript me + concatenate krthy hy number k sath tho ye number aap k pass khud ba khud convert hojata hy string. jub aap string ko number k sath concatenate krthy hy etc.

Example:
```bash
let x = 16 + "Ali";
console.log(x) // 16Ali

// OR

let x1 = "Ali" + 16;
console.log(x1); Ali16
```

- JavaScript evaluates expressions from left to right. Different sequences can produce different results:
- NOTE: javaSCript me expressions aap k pass left to right evaluates hota hy. Tho aap agr different sequence se data ko likhty hy tho aap ko result b different mil sakta hy. jaise upar wale example me hum ne 16 ko kabhi aghy rakha or kabhi piche tho result hamare pass different print ho rhy thy etc.
```bash
let x = 16 + 4 + "Volvo";
console.log(x);  // Output: 20Volvo
// ab yaha pr aap ne different sequence ko follow kiya hy jaise 16 + 4 kiya howa hy tho aap k pass pehly wo dono add ho rhy hy or phir oss k sath Volvo add + matlab concatenate kr rha hy or aap ko result 20Volvo ye mil rha hy simple.


```
```bash
// Like Another Example
let x2 = "Volvo" + 16 + 4;
console.log(x2); // Output: Volvo164
```
- In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".
- In the second example, since the first operand is a string, all operands are treated as strings.

## JavaScript Types are Dynamic
- JavaScript has dynamic types. This means that the same variable can be used to hold different data types:
- matlab aap apni marzi se kisi b data ko jub save krthy hy tho javaScript oss ko oss k related oss ko save krdeta hy. jaise string,int,float etc.
- matlab aap ko variable banatay time koi b data types dene ki zaroorat nhi parthi hy.bs aap data ko store kareo or javaScript oss ko phir apne hisab se save krdeta hy etc.

```bash
let x;       // Now x is undefined
x = 5;       // Now x is a Number
x = "John";  // Now x is a String
```

### JavaScript Strings
- A string (or a text string) is a series of characters like "John Doe".
- Strings are written with quotes. You can use single or double quotes:

Example:
```BASH
// Using double quotes:
let carName1 = "Volvo XC60";

// Using single quotes:
let carName2 = 'Volvo XC60';
```
- You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
```bash
// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';
```
- magr aap double ya single ko do bar use nhi kr sakty hy. jaise ""ghalat"", "'sahid'".
- Number: javaScript me aap number ko without quotation b use kr sakty hy etc.

### Note
Most programming languages have many number types:

Whole numbers (integers):
byte (8-bit), short (16-bit), int (32-bit), long (64-bit)

Real numbers (floating-point):
float (32-bit), double (64-bit).

Javascript numbers are always one type:
double (64-bit floating point).

- typeof() --> iss typeof operator se aap variable k type ko maloom kr sakty hy.
### Undefined
In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
- tho aap k pass undefined b aik data type hy.
```bash
let car;    // Value is undefined, type is undefined
```

### Empty Values
An empty value has nothing to do with undefined.

An empty string has both a legal value and a type.
```bash
let car = "";    // The value is "", the typeof is "string"
```
# Medium
- UNDEFINED:-> Closely related to null. The difference is that undefined is a type given to variable automatically by the broswer that have not yet been defined.
- In JavaScript, data types are broadly categorized into two categories — primitive types and non-primitive types.

- Primitive data types are basic data types that represent a single value, whereas non-primitive data types are complex data types that represent a collection of values.
Feature | Primitive | Non-Primitive
Simple or Complex? | Simple | Complex
Stored how? | By value | By reference
Mutable? | No (immutable) | Yes (mutable)
Examples | Number, String, etc. | Object, Array, etc.
- aap k pass primivite data type string,number etc hotay hy or non-primitive data type me object,array etc ata hy.
- aap k pass non-primitive data jo hy wo primitive data type se hi nikal k ayi hy.

### BigInt
BigInt is a relatively new data type introduced in ECMAScript 2020. It is used to represent integers larger than the maximum value that can be represented by the number data type. BigInts are represented by appending “n” to the end of an integer literal. For example:
```bash
let bigNum = 9007199254740991n;
```

### Null
The null data type represents the intentional absence of any object value. It is often used to signify that a variable has no value assigned to it. For example:
```bash
let y = null;
console.log(y); // Output: null
```

## Symbol Data Type In JavaScript
Great! Let's talk about **`Symbol`** in JavaScript in **very simple words** 😄

---

### 🟣 What is a Symbol?

A **Symbol** is a **unique and primitive data type** in JavaScript introduced in **ES6**.

Even if two symbols look the same, **they are always different**.

---

### ✅ Why use Symbol?

Symbols are mainly used to **create unique property keys** for objects, so there is **no conflict** with other keys.

---

### ✨ Simple Example:
```javascript
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false (even though both say "id")
```

🔹 Even though both `id1` and `id2` look the same, they are **not equal** — each `Symbol()` creates a **unique value**.

---

### 🧰 Using Symbol as a unique object key:
```javascript
let student = {};
let id = Symbol("id");

student[id] = 101;

console.log(student); // { [Symbol(id)]: 101 }
console.log(student[id]); // 101
```

So the key `id` is a symbol, not a string like `"id"`. It's **hidden from normal loops** like `for...in`.

---

### 🔍 When would you use Symbol?
- To add **unique keys** to objects without risking key name conflict.
- To make **private-like properties** in objects.
- In some **built-in features** (like `Symbol.iterator` in loops).

---

### 🧠 Key Points to Remember:
- `Symbol()` always creates a unique value.
- You can add a **description** for debugging, like `Symbol("id")`.
- Symbols are **not shown in for...in** loops.
- Symbols are **primitive** types, like string or number.

---

### ⚠️ Bonus Tip: Symbols are not auto-converted to strings
```javascript
let id = Symbol("id");
console.log("ID is: " + id); // ❌ TypeError
```

To fix it, use:
```javascript
console.log("ID is: " + id.toString()); // ✅
```

---

Important Properties of JavaScript Datatype:
JavaScript Types are Dynamic
JavaScript is a dynamically typed language, which means that variables can hold values of any data type and can be assigned a new value of a different data type at any point in time during the execution of the program.

This is in contrast to the statically typed languages such as Java or C++, where the data type of a variable must be declared at the time of its creation and cannot be changed later.

In a dynamically typed language like JavaScript, the data type of a variable is inferred at runtime based on the value assigned to it. For example, consider the following code snippet:
```bash
let a = 5;
console.log(typeof a); // Output: "number"

a = "Hello World";
console.log(typeof a); // Output: "string"
```
### Benefits of Dynamic Data Types
Dynamic typing provides several benefits, such as increased flexibility and reduced development time. For example, in JavaScript, you do not need to worry about declaring variables with the correct data type or explicitly casting values from one type to another. This can make the code more concise and easier to read.

### Date
Dates are a built-in non-primitive data type in JavaScript. They are used to represent dates and times, and can be created using the Date constructor. Dates have many built-in methods for working with dates and times.
```bash
let today = new Date();
console.log(today.toLocaleString()); // outputs something like "3/4/2023, 2:25:30 PM"
console.log(today.toDateString()); // outputs something like "Sat Mar 04 2023"
```

# JavaScript Functions
- A JavaScript function is a block of code designed to perform a particular task.
- A JavaScript function is executed when "something" invokes it (calls it).
- javaScript me function aik specific task ko krne k liye banatay hy or aap iss ko multiple bar call kr sakty hy or function calling ko invokes b kaha jata hy.
- jaise agr aap ko apne program me do number ko plus krne wala program chaye hy tho tub aap aik function me oss ko bana kr rakh sakty hy or phir jub b aap ko zaroorat parhe tho bs sirf oss function ko call krna hy tho aap k pass wo program ajayega tho iss trha k kisi b specific tasks ko krne k liye function ka use kiya jata hy etc.

```bash
// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
    return p1 * p2;
  }
// ye 4, 3 ye aap k pass argument kehlatay hy jo k function k parameter me ja kr save hota hy.
  let result = myFunction(4, 3);
  console.log(result); // output: 12
 // aap iss trha se function ko call kr sakty hy.
```
- function ko function k keyword se banaya jata hy or phir parenthesis or phir curly brackest se oss ka body banya jata hy etc.
- or iss me (p1, p2) --> iss me ye p1 or p2 jo hy ye aap k parameter kehlata hy.
### JavaScript Function Syntax
- A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
- Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
- The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)
- The code to be executed, by the function, is placed inside curly brackets: {}
```bash
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```
- Function parameters are listed inside the parentheses () in the function definition.
- Function arguments are the values received by the function when it is invoked.
- Inside the function, the arguments (the parameters) behave as local variables.

### Function Invocation
- The code inside the function will execute when "something" invokes (calls) the function:
- When an event occurs (when a user clicks a button)
- When it is invoked (called) from JavaScript code
- Automatically (self invoked)

### Function Invocation
- The code inside the function will execute when "something" invokes (calls) the function:
- When an event occurs (when a user clicks a button)
- When it is invoked (called) from JavaScript code
- Automatically (self invoked)
- aghy hum log iss k bare me b cover karenge k hum log kaise button k onclick pr kaise function ko call kr sakty hy etc.

::::: Example:
```bash
<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Functions</h1>

<p>Call a function which performs a calculation and returns the result:</p>

<p id="demo"></p>

<script>
let x = myFunction(4, 3);
document.getElementById("demo").innerHTML = x;

function myFunction(a, b) {
  return a * b;
}
</script>

</body>
</html>

```
### Why Functions?
- With functions you can reuse code
- You can write code that can be used many times.
- You can use the same code with different arguments, to produce different results.
- or ye aap k code ko Dry run hone se bachata hy - Dry means donot repeat yourself.

### The () Operator
- The () operator invokes (calls) the function:
- aap iss trha se parenthesis k sath apne function ko call kr sakty hy.
::::Example

- program: Convert Fahrenheit to Celsius: yaha pr hum log simple sa program fahrenheit se celsius me convert krne ka program bantay hy.
```bash
 // fahrenheit to celsius program
  function toCelsius(f) {
    return (5/9) * (f-32);
  }
  let value = toCelsius(77);
  console.log(value);
  // aap iss trha se fahrenheit se celsius me convert krne ka program bana sakty hy easily. with the help of function.
```
- Accessing a function with incorrect parameters can return an incorrect answer:
```bash
// parameter accessing with wrong parameter
  function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value1 = toCelsius();
  console.log(value1); // output: NaN 
  // aap k pass output NaN iss wja se a rha hy q k aap function ko call tho kr rhy hy magr aap ne oss me
  // parameter diya howa hy jiss ko aap function calling k time pr nhi de rhy hy tho oss wja se aap k pass ye NaN erro ata hy
```
- Accessing a function without () returns the function and not the function result:
```bash
 function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  // aap k pass ye output iss wja se a rha hy q k aap function ko without parenthesis call kr rhy hy
  let value2 = toCelsius;
  console.log(value2); // output: [Function: toCelsius]
```
- Note: -> As you see from the examples above, toCelsius refers to the function object, and toCelsius() refers to the function result.

### Functions Used as Variable Values
- Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.
- aap function ko simply variable ki trha b use kr sakty hy. Matlab ye aap k pass variable b aap iss ko consider kr sakty hy.
- jaise aap variable banatay hy aap ossi trha function ko b use kr sakty hy etc.
- Instead of using a variable to store the return value of a function:
```bash
<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Functions</h1>
<p>Using a function as a variable:</p>

<p id="demo"></p>

<script>
let text = "The temperature is " + toCelsius(77) + " Celsius.";
document.getElementById("demo").innerHTML = text;

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
} 
</script>

</body>
</html>

```
### Local Variables
- Variables declared within a JavaScript function, become LOCAL to the function.
- Local variables can only be accessed from within the function.
```bash
function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  
  // code here can NOT use carName
  console.log(carName);
  // matlab jiss variable ko aap ne jiss function me banaya hy oss ko aap oss se bahir use nhi kr sakty hy.
  //Error: ReferenceError: carName is not defined --> kuch iss trha ka error aap ko milega.
```
- iss scoping k bare me hum ne already parh rakha hy upar k var,let,const ki kiya scoping hoti hy etc.
- Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
- Local variables are created when a function starts, and deleted when the function is completed.
- LOCAL VARIABLE: --> local variable wo hota hy jiss ko aap ossi hi function k andar use kr sakty hy oss se bahir agr aap use krne ki koshish krthy tho phir aap ko ye ReferenceError: carName is not defined wala error milega.
- GLOBAL VARIABLE: --> ye global variable aap apne program me kahi pr b use kr sakty ho. iss me koi scoping etc nhi hoti hy.

# Medium
- function aap k pass kuch input ko leta hy or phir oss input pr aap koi program banatay hy or aap ko phir output milta hy etc.

### The Complete Guid To JavaScript Function
- Functions can be flexible, reusable, and modular but if you don’t know their key features, you might miss out on using functions at their fullest potential.
### What is a function?
- In simple words, functions are actions or processes that receive an input and return an output. They can perform various tasks and calculations.
- For example, if I want to calculate something when the user clicks the button, I will write a function for that action.
- If I want to close the image modal, I will write a function.
- If I want to remove something from a shopping cart, I will write a function to achieve that.
- I can even write one function that can run another function. I can control functions with other functions.
### How to define a function?
To start using functions, you need to define (create) them. You can define functions in various ways.
##### Common ways to define a function:
- Function declaration
- Function expression
- IIFE (Immediately invoked function expression)
- Arrow function expression
- Function constructor
- Generator function
- Methods

We are going to go through each of these topics in more detail and expand on a lot of interesting features of JavaScript functions.

#### Function declaration
One of the ways to define a function is a function declaration. When you create a function with a name, it’s called a function declaration (aka function definition or function statement). This is the most standard, basic way of writing a function and what you will use very often as a beginner.

Here is an illustration of a function declaration:
```bash
// function declaration
function myFunction(msg) {
    console.log(msg);
}
let functioCalling = myFunction("this is simple msg"); // output: this is simple msg
// tho aap ko function ko directly call kr sakty without console.log() q k js me function direct pehly call hotay hy
console.log(functioCalling); // output: undefined
```
- The function declaration above consists of:

- A function keyword
- The name of this function
- A parenthesis that holds the parameter(s)
- The body of the function, enclosed in curly braces with statements that define the function
![alt text](image.png)
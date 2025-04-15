## What is JavaScript?
- JavaScript is the programming language of the web.

- It can update and change both HTML and CSS.

- It can calculate, manipulate and validate data.

## Why Study JavaScript?
JavaScript is one of the 3 languages all web developers must learn:

   1. HTML - to define the content of web pages

   2. CSS - to specify the layout of web pages

   3. JavaScript - to program the behavior of web pages (jaise agr kisi button pr aap click krhty ho tho oss k upar kiya hojana chaye hy ye sub cheeze aap k pass javaScript handle krthi hy in most of the cases)

- JavaScript accepts both double and single quotes eg: "",''

## JavaScript Where To 
- matlab JavaScript ko hum log kaha kaha pr use kr sakty hy

### The <script> Tag
- In HTML, JavaScript code is inserted between <script> and </script> tags.
- aap iss <script> yaha javaScript likh sakty hy </script> tho aap iss script tage ko kahi pr b open kr k apne javaScript ko likh sakty hy in html me.

## JavaScript Functions and Events
- A JavaScript function is a block of JavaScript code, that can be executed when "called" for.
- For example, a function can be called when an event occurs, like when the user clicks a button.
- You will learn much more about functions and events in later chapters.

## JavaScript in <head> or <body>
- You can place any number of scripts in an HTML document.
- Scripts can be placed in the <body>, or in the <head> section of an HTML page, or in both.
- jaie mene abhi baat ki k aap javaScript ko head or body dono me use kr sakty ho wahi baat yaha pr b ho rhi hy.

## JavaScript in <head>
- In this example, a JavaScript function is placed in the <head> section of an HTML page.
- The function is invoked (called) when a button is clicked
```bash
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>
<h2>Demo JavaScript in Head</h2>

<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

</body>
</html>
 ```
 - tho kuch is trha se aap javaScript ko head me use kr sakty ho

## JavaScript in <body>
- In this example, a JavaScript function is placed in the <body> section of an HTML page.
- The function is invoked (called) when a button is clicked:
```bash

<!DOCTYPE html>
<html>
<body>

<h2>Demo JavaScript in Body</h2>

<p id="demo">A Paragraph</p>

<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
</html>
 ```
 - aap ne ye jo javaScript head or body me use kiya hy iss ko internal javaScript kaha jata hy or issi trha hamare pass aik external javascript b hota hy

 ## External JavaScript
 - Scripts can also be placed in external files
 - external javaScript me aap simply aik fiel ko banatay hy javaScript k externally or phir aap oss ko apne html k head me oss ko link krthy hy or iss ko external javascript kaha jata hy
 - External scripts are practical when the same code is used in many different web pages.
- JavaScript files have the file extension .js.
- To use an external script, put the name of the script file in the src (source) attribute of a <script> tag
```bash 
<script src="myScript.js"></script>
```
- aap ko sirf apne script k tag me src attribute ko add krna hy or phir apne file ka name dena hy jo k aap ne externally banaya howa tha jaise yaha pr mene myScript.js diya howa hy. tho ab aap jitne b code karenge wo iss myScript.js k andar externally karenge or phir apne html k file ko run karenge tho aap k pass ye javaScript ki file run hojayegi simple. but ye aap k pass link howa hona chaye hy js ki file.
- External scripts cannot contain <script> tags. 
iss ka matlab ye hy k aap ko phir oss file k andar script tag ko banane ki zaroorat nhi hoti hy.

```bash 
<script src="myScript1.js"></script>
<script src="myScript2.js"></script>
```
- aap iss trha se multiple file ko b link kr sakty hy

## External JavaScript Advantages
Placing scripts in external files has some advantages:

- It separates HTML and code
- It makes HTML and JavaScript easier to read and maintain
- Cached JavaScript files can speed up page loads

## External References
An external script can be referenced in 3 different ways:

1. With a full URL (a full web address)
2. With a file path (like /js/)
2. Without any path
- tho aap inn 3 ways se apne javaScript k file ko link kr sakty ho or ab hum log aik aik kr k iss ko samjhty hy.

### Full URL
- ye jaise aap k pass CDN hota hy bilkul wahi cheez hy iss me aap kisi website k url ko link me detay hy
```bash 
<script src="https://www.w3schools.com/js/myScript.js"></script>
```
### File path
- iss me aap apne pore file ka path detay hy jaise aap ne oss ko kaha kiss folder me save kiya howa hy on sub ko pora batatay ho link me
```bash   
<script src="/js/myScript.js"></script>
 ```
 - jaise yaha pr js ka folder hy or oss me file myScript.js ko link kiya howa hy simple.

 ### no path to link
 - iss me aap koi path nhi detay hy bal k direct apne file ka name detay hy etc.
 ```bash 
 <script src="myScript.js"></script>
 ```

 ## JavaScript Output
 JavaScript Display Possibilities
JavaScript can "display" data in different ways:

- Writing into an HTML element, using innerHTML or innerText.
- Writing into the HTML output using document.write().
- Writing into an alert box, using window.alert().
- Writing into the browser console, using console.log().

Sure! Here's a complete list of commonly used JavaScript output methods with examples:

---

### ✅ **1. `console.log()`**  
Used to display output in the browser’s developer console.

```javascript
console.log("Hello, World!");
```

---

### ✅ **2. `alert()`**  
Displays a pop-up alert box in the browser.

```javascript
alert("Hello, World!");
```

---

### ✅ **3. `document.write()`**  
Writes directly to the HTML document (not recommended for dynamic use after the page is loaded).

```javascript
document.write("Hello, World!");
```

---

### ✅ **4. `innerHTML`**  
Outputs content inside an HTML element.

```html
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello, World!";
</script>
```

---

### ✅ **5. `innerText` / `textContent`**  
Outputs plain text to an HTML element (without HTML formatting).

```html
<p id="demoText"></p>

<script>
document.getElementById("demoText").innerText = "Hello, World!";
</script>
```

---

### ✅ **6. `prompt()`**  
Displays a dialog box asking the user for input, and can output the value.

```javascript
let name = prompt("What is your name?");
console.log(name); // Output to console
```

---

### ✅ **7. `confirm()`**  
Displays a dialog box with OK/Cancel and returns `true` or `false`.

```javascript
let result = confirm("Are you sure?");
console.log(result);
```

---

Would you like a small webpage that shows all of these in action together?

Here are **some more JavaScript output methods** you can use:

---

### ✅ **8. `console.error()`**  
Displays an error message in the console (usually in red).

```javascript
console.error("This is an error message.");
```

---

### ✅ **9. `console.warn()`**  
Displays a warning message in the console (usually yellow).

```javascript
console.warn("This is a warning.");
```

---

### ✅ **10. `console.info()`**  
Displays informational messages in the console.

```javascript
console.info("This is some info.");
```

---

### ✅ **11. `console.table()`**  
Displays data in a table format in the console.

```javascript
let data = {name: "Ali", age: 20};
console.table(data);
```

---

### ✅ **12. `console.group()` / `console.groupEnd()`**  
Groups related logs together.

```javascript
console.group("User Info");
console.log("Name: Ali");
console.log("Age: 20");
console.groupEnd();
```

---

### ✅ **13. `window.print()`**  
Opens the print dialog (used for printing the web page).

```javascript
window.print();
```

---

Let me know if you want **all these methods in one file** so you can test them!

## yaha pr inn sub ki aik file hy jiss ko aap log run kr sakty ho
That error usually happens when you try to run **browser-specific code (like `window.print()`) in a non-browser environment**, such as:

- **Node.js**
- Some online compilers
- Backend JavaScript

### 🔧 Fix:

If you're working in a browser (like inside an HTML file), the `window` object is available. But in Node.js or server-side JS, it is not.

---

### ✅ Here's a complete HTML file you can run in your browser (Chrome, Firefox, etc.) to avoid the error:

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Output Methods</title>
</head>
<body>

<h2>Check your browser console and page output</h2>
<p id="output"></p>

<script>
  // Output to console
  console.log("This is console.log()");
  console.error("This is console.error()");
  console.warn("This is console.warn()");
  console.info("This is console.info()");

  // Table output
  console.table([{name: "Ali", age: 20}, {name: "Sara", age: 22}]);

  // Grouping
  console.group("Group Example");
  console.log("Inside the group");
  console.groupEnd();

  // Alert
  alert("This is alert()");

  // document.write
  document.write("This is document.write()<br>");

  // innerHTML
  document.getElementById("output").innerHTML = "This is innerHTML()";

  // prompt
  let name = prompt("What is your name?");
  console.log("User name:", name);

  // confirm
  let answer = confirm("Do you want to continue?");
  console.log("User chose:", answer);

  // Print (only works in browser)
  window.print();
</script>

</body>
</html>
```

👉 Just **copy and paste** this into a `.html` file and open it in a browser.

# Note
- Use innerHTML when you want to change an HTML element.
- Use innerText when you only want to change the plain text.

# Main Point
- Using document.write() after an HTML document is loaded, will delete all existing HTML:
- matlab jaise aap onclick agr krthy or phir oss ko document.write ki madad se print krthy hy tho existing data jitna b aap k pass html ka hoga wo sub ka sub delete hojayega. aap iss niche wale example ko run kr k dekh sakty ho etc.
```bash 
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<button type="button" onclick="document.write(5 + 6)">Try it</button>

</body>
</html>
  ```
  - The document.write() method should only be used for testing.
## windows.alert
```bash <script>
window.alert(5 + 6);
</script>```
- You can skip the window keyword.

- In JavaScript, the window object is the global scope object. This means that variables, properties, and methods by default belong to the window object. This also means that specifying the window keyword is optional:
- aap iss window keyword ko ignore kr sakty hy iss k ilawa b aap k pass sare k sare function sahi se work karenge. ye window ka keyword ye hota hy jitne b function hy wo sare k sare yaha se belong krthy hy etc.
- console.log() ko aksar debugging purpose k liye use kiya jata hy.

## Window.print()
- iss method ki madad se aap page ko print kr sakty hy.
```bash <!DOCTYPE html>
<html>
<body>

<h2>The window.print() Method</h2>

<p>Click the button to print the current page.</p>

<button onclick="window.print()">Print this page</button>

</body>
</html>
```
## JavaScript Statements

JavaScript Statements Kya Hain?
JavaScript statements ek tarha ke instructions hain jo browser ya JavaScript engine ko batate hain ke kya karna hai. Har statement ek kaam karta hai, jese variable banana, calculation karna, ya koi condition check karna. Ye code ka building block hain aur normally ek line mein likhe jate hain, jo semicolon (;) ke saath end hota hai (haan, kabhi kabhi semicolon optional hota hai, lekin is ke baare mein baad mein baat karenge).
Misaal ke tor pe:
let naam = "Ali"; // Ye ek statement hai jo variable banata hai
console.log(naam); // Ye ek statement hai jo naam print karta hai

Ab har point ko deeply cover karte hain:

1. Industry Practices

Clean Code: Industry mein developers statements ko aise likhte hain ke code readable ho. Har statement ka purpose clear hona chahiye. Maslan, let x = 5; ke bajaye let userAge = 25; likhna behtar hai kyun ke naam se samajh aata hai.
Semicolon Rule: Professional code mein aksar semicolons use kiye jate hain taake errors na ho. Modern tools jese ESLint bhi isay recommend karte hain.
Modular Code: Statements ko functions ya blocks mein organize kiya jata hai taake code ko maintain karna asaan ho. Maslan, ek bada project ho to har feature ke statements alag file ya module mein rakhe jate hain.
Pakistan ke Developers: Yahan ke web developers (khaas tor pe Karachi ya Lahore ke startups mein) statements ko frameworks jese React ke saath use karte hain, lekin basics strong hona zaroori hai.


2. Programmers Kaise Sochte Hain

Step-by-Step Logic: Programmers har statement ko ek chhota qadam samajhte hain jo bade problem ko solve karta hai. Maslan, agar unhe user ka naam aur umar print karni ho, to woh sochte hain:
Variable declare karo (let naam = "Ali";)
Data process karo (let greeting = "Hello, " + naam;)
Output dikhao (console.log(greeting);)


Reusability: Woh aise statements likhte hain jo baar baar use ho sakein, jese functions mein statements dalna.
Debugging: Agar code kaam na kare, to woh har statement ko alag alag check karte hain taake galti ka pata chale.
Big Picture: Experienced programmers statements ke peeche logic sochte hain—kya ye statement performance ko behtar banaye ga ya code ko slow kare ga?


3. Common Mistakes

Semicolon Bhoolna: Beginners aksar semicolon lagana bhool jate hain, jo kabhi kabhi errors deta hai, khaas tor pe jab code minify hota hai. Maslan:let a = 5 // semicolon nahi hai
let b = 10 // yahan error aa sakta hai


Wrong Syntax: Statements ke rules na samajhna, jese if condition ke baad curly braces {} na lagana:if (true) console.log("Hello"); // Theek hai
if (true) console.log("Hello") console.log("World"); // Galat, confusion ho sakti hai


Overcomplicating: Ek hi statement mein bohat sara kaam karna, jese:let result = x + y * z / 2; // Isay chhote statements mein todna behtar hai


Not Using Blocks: Loops ya conditions mein proper blocks na banana, jese:for (let i = 0; i < 5; i++) console.log(i); // Ek line theek hai
for (let i = 0; i < 5; i++) console.log(i) console.log("Done"); // Galat




4. Pro Tips

Use Descriptive Names: Statements mein variables ke naam meaningful rakho, jese let totalPrice = 500; ke bajaye let x = 500;.
Break It Down: Bade statements ko chhote chhote statements mein toodo taake debugging asaan ho. Maslan:let fullName = firstName + " " + lastName; // Chhota aur clear


Use Comments: Har important statement ke saath comment likho taake baad mein samajh aaye:let age = 25; // User ki umar store karne ke liye


Learn Shortcuts: Modern JavaScript mein shorthand statements use karo, jese:let count = count + 1; // Purana tareeqa
count++; // Naya aur short


Check Tools: ESLint ya Prettier jese tools use karo jo statements ke errors ko pehle hi catch kar lein.


5. Projects Kaise Banayein
JavaScript statements har project ka base hain. Tum in chhote projects se statements ka use seekh sakte ho:

Counter App:
Ek button jo number barhaye ya ghataye.
Statements ka use: Variables (let count = 0;), event listeners (button.addEventListener(...)), aur DOM updates (document.getElementById("count").innerText = count;) ke liye.
Kaise Karo:
HTML mein button aur display area banao.
JavaScript statements likho jo click pe count update karein.
Console mein test karo ke har statement kaam kar raha hai.




Temperature Converter:
Celsius ko Fahrenheit mein badalne ka app.
Statements ka use: Input lena (let celsius = input.value;), calculation (let fahrenheit = (celsius * 9/5) + 32;), aur output dikhana (result.innerText = fahrenheit;).


GitHub Tip: Har project ke statements ko GitHub pe commit karo aur comments likho ke har statement kya karta hai. Ye portfolio ke liye acha hai.


6. Confidence Kaise Build Karein

Chhote Steps: Har statement ko samajh ke likho. Maslan, pehle let x = 5; try karo, phir x = x + 1;—chhoti jeet confidence deti hai.
Test Karo: Har statement ko console mein test karke dekho ke kya output aata hai. Ye tumhe control ka ehsas dilaye ga.
Doston se Share Karo: Apne code ke statements kisi dost ya online community (jese Pakistan ke coding groups) mein share karo. Feedback se himmat barhegi.
Repeat Karke Seekho: Ek hi statement ko bar bar alag tareeqon se likho, jese count = count + 1; ko count += 1; ya count++; likh ke dekho.
Real-World Dekho: Websites jese CodePen pe jao aur dekho ke log statements kaise use karte hain—ye inspiration dega.


7. Practical Samajh
JavaScript statements ko aise samjho ke tum projects bana sako, interviews clear kar sako, aur problems solve karo:

Projects:
Ek to-do list banao jisme ye statements use ho:let tasks = []; // Array banaya
tasks.push("Kaam 1"); // Task add kiya
console.log(tasks); // Output dekha


Isay DOM ke saath extend karo taake tasks screen pe dikhein.


Interviews:
Interview mein aksar statements se related questions aate hain, jese “variable kaise declare karte hain?” ya “loop kaise likhoge?”. Ye seekho:for (let i = 0; i < 5; i++) {
    console.log(i); // 0 se 4 tak print karega
}


Practice sites jese LeetCode pe statements ke basic problems solve karo.


Problem-Solving:
Agar koi button click pe text badalna ho, to ye statements use karo:document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("text").innerText = "Badal gaya!";
});


Isay samajh ke alag alag tareeqon se try karo.




Types of Statements
JavaScript mein kai tarha ke statements hote hain. Yahan kuch important hain:

Declaration Statements:
Variables banane ke liye, jese:let naam = "Ali";
const pi = 3.14;




Expression Statements:
Koi calculation ya value assign karna, jese:let sum = 5 + 10;
console.log(sum);




Conditional Statements:
Conditions check karne ke liye, jese:if (age >= 18) {
    console.log("Vote kar sakte ho");
} else {
    console.log("Abhi nahi");
}




Loop Statements:
Bar bar kaam karne ke liye, jese:for (let i = 1; i <= 5; i++) {
    console.log(i);
}




Function Statements:
Functions define karne ke liye, jese:function sayHello() {
    console.log("Hello!");
}





Har type ko projects mein use karna seekho taake practical samajh aaye.

Agla Step
Ab tum JavaScript statements ke basics samajh gaye ho. Main suggest karta hoon ke agla topic variables aur data types ho, kyun ke statements aksar variables ke saath hi kaam karte hain. Ya phir tum conditionals (if-else) ya loops seekhna chaho? Tum batao, aur main isi tarha deeply samjhaoonga!
Aur job ke liye tip: Pakistan mein JavaScript ke projects ke liye GitHub portfolio bohat kaam aata hai. Apne chhote projects wahan dalo aur statements ke comments likho—ye recruiters ko impress karta hai.

## w3 School
### statement example
```bash 
let x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
z = x + y;      // Statement 4
```
## JavaScript Programs
- A computer program is a list of "instructions" to be "executed" by a computer.
- In a programming language, these programming instructions are called statements.
- A JavaScript program is a list of programming statements.
- In HTML, JavaScript programs are executed by the web browser.

## JavaScript Statements
- JavaScript statements are composed of:
- Values, Operators, Expressions, Keywords, and Comments.
- This statement tells the browser to write "Hello Dolly." inside an HTML element with id="demo":
```bash <!DOCTYPE html>
<html>
<body>

<h2>JavaScript Statements</h2>

<p>In HTML, JavaScript statements are executed by the browser.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello Dolly.";
</script>

</body>
</html>
```
- Most JavaScript programs contain many JavaScript statements.
- The statements are executed, one by one, in the same order as they are written.
- JavaScript programs (and JavaScript statements) are often called JavaScript code.

## Semicolons ;
- Semicolons separate JavaScript statements.
- Add a semicolon at the end of each executable statement:
```bash 
let a, b, c;  // Declare 3 variables
a = 5;        // Assign the value 5 to a
b = 6;        // Assign the value 6 to b
c = a + b;    // Assign the sum of a and b to c
```
- When separated by semicolons, multiple statements on one line are allowed:
```bash a = 5; b = 6; c = a + b;
```
# Note
On the web, you might see examples without semicolons.
Ending statements with semicolon is not required, but highly recommended.

## JavaScript White Space
- JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.
- The following lines are equivalent:
- matlab ye white space ko count hi nhi krtha hy agr aap detay ho ya na detay hy ye oss ko equal hi count krtha hy etc.
```bash      
let person = "Hege";
let person="Hege";
 ```
- A good practice is to put spaces around operators ( = + - * / ):
``bash    
let x = y + z;
  ```

## JavaScript Keywords
- JavaScript statements often start with a keyword to identify the JavaScript action to be performed.
- eg: if,for,let,var,const etc.
- JavaScript keywords are reserved words. Reserved words cannot be used as names for variables.

## JavaScript Code Blocks
- JavaScript statements can be grouped together in code blocks, inside curly brackets {...}.
- The purpose of code blocks is to define statements to be executed together.
- One place you will find statements grouped together in blocks, is in JavaScript functions:

Example:
``bash function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";
}
```

Theek hai, shuru se samjhta hoon aur bilkul asaan Urdu mein. Tumne JavaScript ka pehla topic poocha: **JavaScript kya hai?** Main isay detail se samjhaoonga aur har cheez cover karoonga jo tumne kaha—industry practices, programmers ka sochne ka tareeqa, common mistakes, pro tips, project guidance, confidence building, aur practical samajh jo tum projects aur interviews mein use kar sako.

---

### **JavaScript Kya Hai?**
JavaScript ek programming language hai jo websites ko interactive banati hai. Jab tum kisi website pe button dabate ho, form bharte ho, ya kuch animate hota hai (jese sliders ya pop-ups), to yeh sab aksar JavaScript ke wajah se hota hai. Ye web browsers mein chalta hai (jese Chrome, Firefox) aur aaj kal servers pe bhi use hota hai (Node.js ke through). JavaScript ko web ka dil kaha jata hai kyun ke HTML (structure) aur CSS (styling) ke saath mil kar ye websites ko zinda karta hai.

Ab har point ko cover karta hoon:

---

### **1. Industry Practices**
- **Real-World Use**: Industry mein JavaScript har jagah hai. Web development ke liye ye must hai—React, Angular, Vue jese frameworks is pe bane hain. Companies jese Google, Facebook, aur chhoti startups bhi isay front-end (user interface) aur back-end (server-side) ke liye use karti hain.
- **Modern Tools**: Developers JavaScript ke saath tools jese VS Code, Git, aur package managers (NPM) use karte hain. Industry mein team code ko clean aur modular rakhti hai taake baad mein changes asaan ho.
- **Job Relevance**: Pakistan mein web developers ke liye JavaScript must hai. Freelancing platforms jese Upwork ya Fiverr pe bhi JavaScript projects bohat milte hain.

---

### **2. Programmers Kaise Sochte Hain**
- **Problem-Solving**: Professional programmers JavaScript ko ek tool samajhte hain jo problems solve karta hai. Maslan, agar unhe user ka data save karna ho, to woh sochte hain ke kaise code ko fast aur secure banaya jaye.
- **Breaking Down Tasks**: Woh bade projects ko chhote pieces mein todte hain. Jese, ek login system banana ho to pehle UI, phir validation, phir server call—sab alag alag sochte hain.
- **Learning Mindset**: Achhe programmers hamesha naye JavaScript features seekhte rehte hain, jese ES6 ya async programming, kyun ke tech tezi se badalti hai.

---

### **3. Common Mistakes**
- **Not Understanding Basics**: Beginners aksar variables, functions, ya loops ko theek se nahi samajhte aur direct frameworks seekhne lagte hain, jo confusion deta hai.
- **Ignoring Errors**: Console errors ko ignore karna badi galti hai. Har error ek lesson hai.
- **Messy Code**: Code ko organize nahi karna (jese proper variable names na dena) baad mein problem deta hai.
- **Copy-Pasting Code**: Stack Overflow se code copy karke samajh nahi lagana buri aadat hai.

---

### **4. Pro Tips**
- **Use Console.log**: Debugging ke liye console.log bohat kaam aata hai. Apne code ke output ko dekho taake galtiyan samajh aayein.
- **Learn ES6**: Modern JavaScript (ES6) seekho, jese arrow functions, destructuring—ye industry mein bohat use hota hai.
- **Practice Small**: Chhote chhote programs likho, jese calculator ya to-do list, taake concepts clear ho.
- **Read Documentation**: MDN Web Docs JavaScript ke liye best resource hai. Isay bookmark karo.

---

### **5. Projects Kaise Banayein**
JavaScript seekhne ke liye projects banana bohat zaroori hai. Abhi kyun ke tum beginner ho, in chhote projects se shuru karo:
- **To-Do List**: Ek app jahan tasks add aur delete kar sako. Ye variables, arrays, aur functions seekhaye ga.
- **Calculator**: Basic math operations ka calculator banao. Ye logic building ke liye acha hai.
- **Quiz App**: Ek simple quiz jisme questions aur score ho. Ye events aur conditionals cover karega.
- **Kaise Karo**:
  1. HTML aur CSS se pehle basic structure banao.
  2. JavaScript mein chhote functions likho jo ek ek feature handle karein.
  3. Code ko test karte jao aur errors ko console se dekho.
  4. GitHub pe apna code upload karo taake portfolio ban jaye.

---

### **6. Confidence Kaise Build Karein**
- **Chhoti Jeet**: Har chhota project complete karne pe khud ko shabash do. Ye confidence barhata hai.
- **Mistakes se Seekho**: Galtiyan karna normal hai. Har error ko samajh ke usay theek karo.
- **Community Join Karo**: Pakistan mein Discord ya WhatsApp groups hain jahan developers baat karte hain. Wahan se motivation milega.
- **Show Your Work**: Apne projects LinkedIn ya GitHub pe share karo. Logon ke feedback se himmat barhegi.
- **Fake It Till You Make It**: Shuru mein lagta hai ke kuch nahi aata, lekin practice ke saath sab asaan ho jata hai.

---

### **7. Practical Samajh**
JavaScript ko aise samjho ke tum isay kisi bhi project ya interview mein use kar sako:
- **Projects**: Upar diye projects (to-do list, calculator) banao. Ye tumhe practical skills dein ge.
- **Interviews**: Interview mein aksar basic questions poochte hain jese “variable kya hai” ya “array mein loop kaise chalayein”. Is liye basics strong karo.
- **Problem-Solving**: Sites jese LeetCode ya HackerRank pe JavaScript ke chhote problems solve karo. Ye interviews ke liye logic banata hai.
- **Example**: Agar koi pooche ke JavaScript se button click pe alert kaise dikhao, to ye code hoga:
  ```javascript
  document.getElementById("myButton").addEventListener("click", function() {
      alert("Button dabaya gaya!");
  });
  ```
  Isay samjho aur try karo—ye event handling ka basic concept hai.

---

### **Agla Step**
Ab tumne JavaScript ka basic idea seekh liya. Main suggest karta hoon ke agla topic **variables aur data types** ho, kyun ke ye JavaScript ka foundation hai. Tum isay seekhoge to code likhna shuru kar sako ge. Ya phir koi aur topic chaho, jese **functions** ya **events**? Tum batao, aur main usay isi tarha detail se samjhaoonga!

Aur haan, job ke liye ek tip: Pakistan mein JavaScript developers ke liye bohat scope hai, khaas tor pe startups aur freelancing mein. Apna GitHub profile banake projects dalo—ye bohat impress karta hai. Ab batao, kya seekhna hai agla?


## Error 
- agr aap same name se kisi variable ya phir kisi data ko banatay hy tho aap k pass code line by line chalta hy tho wo aap k first wale statement ko ignore krdeta hy or end me oss ko ossi trha same jo statement milta hy ye phir ossi hi ko execute krdeta hy etc.
```bash
let data = {name: "Majid", age:25, name1:"Ali", age:18};
console.table(data);
```
#### output:
 (index) │ Values  │
├─────────┼─────────┤
│ name    │ 'Majid' │
│ age     │ 18      │
│ name1   │ 'Ali'   
- ab agr yaha pr aap dekhe tho aap k pass 25 jo age hy wo print nhi ho rha hy q k aap ne do same name se key ko banaya hy tho js last wale sirf 18 ko print kr rha hy simple.
#### Solution
```bash
let data = {name: "Majid", age:25, name1:"Ali", age1:18};
console.table(data);
```
- tho iss se aap k pass pora ka pora statement print hojayega q k sub k name alag alag hy simple.





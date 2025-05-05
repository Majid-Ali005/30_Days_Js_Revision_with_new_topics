// anonymous_function.js
// Yeh file dikhata hai ke anonymous function ko parameter ke roop mein kaise use karte hain

// 1. BASIC EXAMPLE: Anonymous function as a callback
// Ek function jo dusre function ko parameter ke roop mein accept karta hai
function processData(callback) {
    console.log("Processing data...");
    callback(); // Anonymous function ko call karo
}

// Anonymous function directly as parameter
processData(function() {
    console.log("Anonymous Function: Data processed!"); // Output: Data processed!
});

// 2. USING ARROW FUNCTION: Anonymous arrow function as parameter
// Arrow function bhi anonymous ho sakta hai
processData(() => {
    console.log("Anonymous Arrow Function: Data processed!"); // Output: Data processed!
});

// 3. CONNECTING TO PREVIOUS CONTEXT (myFunction ke saath)
// Aapka myFunction use karke anonymous function ka example
function myFunction(name, age = 25) {
    return { name, age };
}
const person = myFunction("Ali");

// Ek function jo person ke saath anonymous callback use karta hai
function displayPerson(person, callback) {
    console.log("Displaying person:", person.name);
    callback(person); // Anonymous function ko person ke saath call karo
}

// Anonymous function mein person ka data use karna
displayPerson(person, function(p) {
    console.log("Anonymous Function: Person's age is", p.age); // Output: Person's age is 25
});

// 4. PRACTICAL EXAMPLE: setTimeout ke saath anonymous function
// setTimeout ek anonymous function leta hai jo delay ke baad chalta hai
setTimeout(function() {
    console.log("Anonymous Function in setTimeout: Executed after 1 second!");
}, 1000); // Output: (after 1 second) Executed after 1 second!
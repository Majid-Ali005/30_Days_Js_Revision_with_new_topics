function myFunction() {
    var name = "Majid Ali";
}
// console.log(name);
let x1 = "hello world";
const x2 = 25;
console.log(x1);
console.log(x2);

//Function in JavaScript

function FirstFunction() {
    console.log("hello this is a fucntion in javascript");
}
console.log(FirstFunction());

// function in paramerter
function FunctionWithParameter(name) {
    console.log("function parameter is " + name);
}
console.log(FunctionWithParameter("Majid Ali"));

//Statements and loops in javaScript

//if statements in javaScript
let name1 = "Ali";
if(name1 == "Majid") {
    console.log("Hello, Majid")
}else{
    console.log("Hello, Stranger");
}

//for loop
for (var i = 0; i <=5; i++){
    console.log(i);
}

//Array and Object in JaravScript
//Array
let array = [1, 2, 3, 4, 5];
console.log(array[2])//tho ye aap k pass 3 index b data ko print krdega

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
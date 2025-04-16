// function declaration
function myFunction(msg) {
    console.log(msg);
}
let functioCalling = myFunction("this is simple msg"); // output: this is simple msg
// tho aap ko function ko directly call kr sakty without console.log() q k js me function direct pehly call hotay hy
console.log(functioCalling); // output: undefined

// Function Calling
function HelloFunction(Hello){
    console.log(Hello);
    console.log("Hello World without parameter");
}
HelloFunction("hello world");
// output: hello world
// Hello World without parameter
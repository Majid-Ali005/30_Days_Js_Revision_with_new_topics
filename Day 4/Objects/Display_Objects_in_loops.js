/**
 * yaha pr hum logo ne pehly simple aik object banaya hy person k name se.
 * or phir aik variable banaya hy let text = ""; k naam se jiss ko hum log use karenge loop me properties ko print krne k liye.
 * or phir me javaScript k in keyword ko use kr rha ho loop me. or phir simplye assignment += operator laga kr object ko print kr rha ho.
 */

// Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  // Build a Text
let text = "";
for (let x in person) {
  text += person[x] + " ";
};
let result = text;
console.log(result); // John 30 New York 
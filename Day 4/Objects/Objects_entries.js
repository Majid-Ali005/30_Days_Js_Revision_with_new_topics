//Create Object of fruits
const fruits = {Bananas:300, Oranges:200, Apples:500}; 

let text = "";
for (let [fruit, amount] of Object.entries(fruits)) {
  text += fruit + ": " + amount + "<br>";
}

let result = text;
console.log(result);
// better screen pr print krne k liye document.write ka use kare jiss se kuch iss trha k result milega.
// Bananas: 300
// Oranges: 200
// Apples: 500
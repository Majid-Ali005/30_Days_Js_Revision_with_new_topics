let a = 5;
let b = a++ + 2; // Postfix increment (++) has higher precedence than addition (+)
console.log(b); // Output: 7 (a++ returns 5, then 5 + 2 = 7)
console.log(a); // Output: 6 (a is incremented after the expression)

let c = ++a + 2; // Prefix increment (++) has higher precedence
console.log(c); // Output: 9 (a is now 6, ++a makes it 7, then 7 + 2 = 9)
console.log(a); // Output: 7
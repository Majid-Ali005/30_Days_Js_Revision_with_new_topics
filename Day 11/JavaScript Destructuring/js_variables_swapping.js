// wiht destructuring

let a = 5;
let b = 10;

[a, b] = [b, a];
console.log(a, b); // 10 5

// without destructuring

let a1 = 5;
let b1 = 10;
let temp = a;
a1 = b1;
b1 = temp;
console.log(a1, b1); // 10 5
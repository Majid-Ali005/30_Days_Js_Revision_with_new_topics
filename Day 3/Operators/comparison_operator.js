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
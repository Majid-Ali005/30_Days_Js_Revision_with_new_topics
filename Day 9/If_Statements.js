
// simple comparison example
let age = 18;
console.log(age >= 18); // True
console.log(age > 18); // False
/**
 * ye aap k comparison pr depend krtha hy k aap konsa kiss trha se condition laga rhay ho.
 * jaise first me true iss wja se a rha hy q k aap ne >= equal b sath me lagaya hy jiss k hisab se condition sahi ho rhi hy.
 * or phir niche False wale me aap ne sirf > greater than lagaya hy iss wja se false a rha hy jiss se hamare pass condition false hojati hy etc.
 * tho flow ko control krthy waqt inn cheezo ka khayal rakho.
 */

// Another If Else Example

let isAdult = age >= 18 && age <= 65; // true
console.log(isAdult);
// aap iss trha se aik line me b conditions ko likh sakty hy etc.

// Another Only If Condition Statement
let marks = 75;
if (marks >= 60) {
  console.log("You passed the exam!");
}
// Output: You passed the exam! q k condition sahi ho rhi hy.
// Note: agr aap k pass condition match nhi ho rhi hy tho phir aap k pass kuch b print nhi hoga
// or agr match hota hy tho phir aap k pass you passed the examp! print hojayega.
// or condition match na hone pr kuch iss waja se print nhi ho rha hy q k aap ne else ki condition nhi lagaye hy.
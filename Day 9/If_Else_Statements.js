/**
 * aap k pass yaha pr agr isLoginIn true ho tho phri welcome to the dashbaord ayega.
 * warna agr ye false ho tho phir pleas login in. ayega simple.
 * aap ko (kuch banao) aap ko iss bracket k andar kuch likna partha hy or phir {jo show krna ho} or phir iss curly brackets jiss cheez ko print krwana ho oss ko likhna hy etc.
 */

let isLoggedIn = true;
if (isLoggedIn) {
  console.log("Welcome to the dashboard!");
} else {
  console.log("Please log in.");
}
// Output: Please log in.


// Real Life Example
let temperature = 25;
if (temperature > 30) {
  console.log("Wear light clothes.");
} else if (temperature > 20) {
  console.log("Wear a jacket.");
} else {
  console.log("Wear warm clothes.");
}
// Output: Wear a jacket.
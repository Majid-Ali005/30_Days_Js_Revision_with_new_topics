// switch statements example jo k days ki hy
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
// Output: Wednesday
//yaha pr aap k pass days k hisab se jo b value day ki variable me ayegi tho oss k hisab se aap k pass phir condition show hogi etc.

// Adin Role Example
let role = "Admin";
switch (role) {
  case "Admin":
  case "SuperAdmin":
    console.log("Full access granted");
    break;
  case "User":
    console.log("Limited access");
    break;
  default:
    console.log("Access denied");
}
// Output: Full access granted

// Strict Comparison 
// aap k pass switch statement strict comparison krtha hy ===
let value = "1";
switch (value) {
  case 1:
    console.log("Number 1");
    break;
  case "1":
    console.log("String 1");
    break;
  default:
    console.log("No match");
}
// Output: String 1

// driving license example
// Bad: Complex condition
switch (true) {
    case age > 18 && hasLicense:
      console.log("Can drive");
      break;
  }
  
  // Good: Use if-else
  if (age > 18 && hasLicense) {
    console.log("Can drive");
  }
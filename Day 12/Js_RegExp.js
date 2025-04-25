// Email validation ka example
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const email = "user@example.com";

if (emailRegex.test(email)) {
  console.log("Valid email");
} else {
  console.log("Invalid email");
}
// Output: Valid email

// aap ye regExp k ye jo code hy iss ko online find kr sakty hy jaise email k liye ya phir phone number k liye etc.
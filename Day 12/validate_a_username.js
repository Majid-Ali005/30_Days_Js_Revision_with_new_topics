const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
const username = "john_doe123";

if (usernameRegex.test(username)) {
  console.log("Valid username");
} else {
  console.log("Invalid username");
}
// Output: Valid username
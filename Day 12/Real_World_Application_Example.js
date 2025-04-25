const phoneRegex = /^\+91\s\d{10}$/;
const phone = "+91 9876543210";

if (phoneRegex.test(phone)) {
  console.log("Valid Indian phone number");
} else {
  console.log("Invalid phone number");
}
// Output: Valid Indian phone number
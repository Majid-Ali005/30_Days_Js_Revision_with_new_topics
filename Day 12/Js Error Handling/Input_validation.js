function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format");
    }
    return true;
  }
  
  try {
    validateEmail("invalid-email"); // Throws error
  } catch (error) {
    console.log("Error:", error.message); // Output: Error: Invalid email format
  }
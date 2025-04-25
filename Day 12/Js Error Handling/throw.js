try {
    let x = -5;
    if (x < 0) {
      throw new Error("Negative numbers are not allowed");
    }
    console.log("Value is valid");
  } catch (error) {
    console.log("Error:", error.message); // Output: Error: Negative numbers are not allowed
  }
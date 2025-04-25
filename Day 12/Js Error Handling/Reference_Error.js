try {
    console.log(undefinedVariable); // Variable not declared
  } catch (error) {
    console.log("Error:", error.name, error.message);
    // Output: Error: ReferenceError undefinedVariable is not defined
  }
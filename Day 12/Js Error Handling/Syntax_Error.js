try {
    eval("let x = 5; y = }"); // Invalid syntax
  } catch (error) {
    console.log("Error:", error.name, error.message);
    // Output: Error: SyntaxError Unexpected token '}'
  }
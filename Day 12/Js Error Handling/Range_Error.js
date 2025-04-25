try {
    let arr = new Array(-1); // Array size cannot be negative
  } catch (error) {
    console.log("Error:", error.name, error.message);
    // Output: Error: RangeError Invalid array length
  }
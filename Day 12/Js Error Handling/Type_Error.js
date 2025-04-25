try {
    let obj = null;
    obj.someMethod(); // Cannot call method on null
  } catch (error) {
    console.log("Error:", error.name, error.message);
    // Output: Error: TypeError Cannot read properties of null (reading 'someMethod')
  }
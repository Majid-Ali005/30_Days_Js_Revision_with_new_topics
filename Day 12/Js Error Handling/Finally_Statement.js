function processNumber(num) {
    try {
      if (typeof num !== "number") {
        throw new Error("Input must be a number");
      }
      console.log("Processing:", num);
      return num * 2;
    } catch (error) {
      console.log("Error:", error.message);
    } finally {
      console.log("Cleanup: Done processing");
    }
  }
  
  console.log(processNumber(5)); // Output: Processing: 5, Cleanup: Done processing, 10
  console.log(processNumber("abc")); // Output: Error: Input must be a number, Cleanup: Done processing, undefined
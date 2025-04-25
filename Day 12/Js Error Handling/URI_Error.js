try {
    decodeURI("%"); // Invalid URI component
  } catch (error) {
    console.log("Error:", error.name, error.message);
    // Output: Error: URIError URI malformed
  }
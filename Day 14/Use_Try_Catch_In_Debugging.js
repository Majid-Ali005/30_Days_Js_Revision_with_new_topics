try {
    const data = JSON.parse(invalidJson);
  } catch (error) {
    console.error("Parsing error:", error.message);
  }
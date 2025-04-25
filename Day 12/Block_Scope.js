{
    let blockVar = "I'm block-scoped";
    const anotherBlockVar = "Also block-scoped";
    console.log(blockVar); // Output: I'm block-scoped
  }
  console.log(blockVar); // Error: blockVar is not defined
  
  if (true) {
    let ifVar = "Inside if block";
    console.log(ifVar); // Output: Inside if block
  }
  console.log(ifVar); // Error: ifVar is not defined
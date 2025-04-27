// Bad: No semicolons, inconsistent braces
if (true) console.log("Hi")
    else {
      console.log("Bye")
    }
    
    // Good: Semicolons, consistent braces
    if (true) {
      console.log("Hi");
    } else {
      console.log("Bye");
    }
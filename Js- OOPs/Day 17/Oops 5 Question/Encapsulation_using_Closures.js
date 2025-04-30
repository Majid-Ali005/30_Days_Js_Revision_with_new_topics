function createCounter() {
    let count = 0; // Private variable (encapsulated via closure)
  
    return {
      increment: function() {
        count++;
        return count;
      },
      decrement: function() {
        count--;
        return count;
      },
      getCount: function() {
        return count;
      }
    };
  }
  
  // Create a counter object
  let counter = createCounter();
  
  // Test the methods
  console.log(counter.increment()); // Output: 1
  console.log(counter.increment()); // Output: 2
  console.log(counter.decrement()); // Output: 1
  console.log(counter.getCount()); // Output: 1
  console.log(counter.count); // Output: undefined (count is private)

// Example
const user = {
    name: "Amit",
    sayHello: function() {
      console.log(`Hello, ${this.name}`);
    }
  };
  user.sayHello(); // Output: Hello, Amit

  // Nested Method Issue
  const user1 = {
    name: "Amit",
    sayHello: function() {
      function nested() {
        console.log(this.name); // `this` is not `user` here, it's `global/window` in non-strict mode
      }
      nested();
    }
  };
  user1.sayHello(); // Output: undefined (or error in strict mode)

  // Solution: Arrow function ya explicit binding use karen.

  const user2 = {
    name: "Amit",
    sayHello: function() {
      const nested = () => {
        console.log(this.name); // Arrow function inherits `this` from parent
      };
      nested();
    }
  };
  user2.sayHello(); // Output: Amit
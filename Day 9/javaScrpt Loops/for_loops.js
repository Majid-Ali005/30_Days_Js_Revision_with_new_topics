// for loop ek control structure hai jo code block ko specific number of times repeat karta hai. Yeh tab use hota hai jab aapko pata ho kitni baar loop chalana hai.

for (let i = 1; i <= 5; i++) {
    console.log(`Iteration ${i}`);
  }
  // Output:
  // Iteration 1
  // Iteration 2
  // Iteration 3
  // Iteration 4
  // Iteration 5

  // aap issi trha or b loop ko 10 thak jaha thak aap chahtay hy aap chala sakty hy etc.


  // Bad and Good Use of Loop

  // Bad
for (let i = 0; i < array.length; i++) {
    let len = array.length; // Redundant calculation
    console.log(array[i]);
  }
  
  // Good
  const len = array.length;
  for (let i = 0; i < len; i++) {
    console.log(array[i]);
  }
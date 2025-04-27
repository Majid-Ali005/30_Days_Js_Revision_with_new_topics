// Bad: Inconsistent indentation
function example(){
    let x = 1;
  if (x) {
        console.log(x);
  }
}

// Good: 2-space indentation
function example() {
  let x = 1;
  if (x) {
    console.log(x);
  }
}

example(); // Outputs 1
let count = 1;
while (count <= 5) {
  console.log("Count: " + count);
  count++; // Increment to avoid infinite loop
}
// Output:
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 5


// anther while loop example

let input = "";
while (input !== "exit") {
  input = prompt("Type something (or 'exit' to stop):");
  console.log("You typed: " + input);
}
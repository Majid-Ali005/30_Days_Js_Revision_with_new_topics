const regex = /\w+/g;
const str = "hello world";
let result;
while ((result = regex.exec(str)) !== null) {
  console.log(`Match: ${result[0]} at index: ${result.index}`);
}
// Output:
// Match: hello at index: 0
// Match: world at index: 6
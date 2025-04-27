function countOccurrences(arr, num) {
    let count = 0;
    for (let i = 0; i <= arr.length; i++) { // Bug: Off-by-one error
      if (arr[i] === num) {
        count++;
      }
    }
    return count;
  }
  
  const numbers = [1, 2, 2, 3, 2];
  console.log("Occurrences of 2:", countOccurrences(numbers, 2)); // Outputs 4 instead of 3
// Bad: Inconsistent style
function calculateSum(a,b){let sum=0;for(let i=0;i<a.length;i++)sum+=a[i]+b;return sum}

// Good: Following a style guide (e.g., Airbnb)
function calculateSum(numbers, offset) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] + offset;
  }
  return sum;
}

console.log(calculateSum([1, 2, 3], 5)); // Outputs 11
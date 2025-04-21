function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function generateLotteryNumbers(count, min, max) {
    const numbers = new Set();
    while (numbers.size < count) {
      numbers.add(randomNumber(min, max));
    }
    return [...numbers];
  }
  
  console.log(generateLotteryNumbers(6, 1, 49)); // e.g., [7, 14, 23, 28, 35, 41]
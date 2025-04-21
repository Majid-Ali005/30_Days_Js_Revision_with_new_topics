// Here’s a proper random function that can generate both integers and floats, with input validation:

/**
 * Generates a random number (integer or float) between min and max.
 * @param {number} min - The minimum value (inclusive).
 * @param {number} max - The maximum value (inclusive for integers, exclusive for floats).
 * @param {boolean} isInteger - If true, returns an integer; otherwise, returns a float.
 * @returns {number} - The random number.
 */
function randomNumber(min, max, isInteger = true) {
    // Input validation
    if (typeof min !== 'number' || typeof max !== 'number' || isNaN(min) || isNaN(max)) {
      throw new Error('Min and max must be valid numbers');
    }
    if (min > max) {
      throw new Error('Min must be less than or equal to max');
    }
  
    const range = max - min;
    const random = Math.random() * range + min;
  
    return isInteger ? Math.floor(random) + (random === range ? 0 : 1) : random;
  }
  
  // Examples
  console.log(randomNumber(1, 10));       // Integer: e.g., 7
  console.log(randomNumber(1, 10, false)); // Float: e.g., 4.392837
  console.log(randomNumber(0, 100));      // Integer: e.g., 42
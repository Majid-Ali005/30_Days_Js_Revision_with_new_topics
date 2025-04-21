// Array of quotes
const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" }
  ];
  
  /**
   * Generates a random integer between min and max (inclusive).
   * @param {number} min - Minimum value.
   * @param {number} max - Maximum value.
   * @returns {number} - Random integer.
   */
  function getRandomInt(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number' || isNaN(min) || isNaN(max)) {
      throw new Error('Min and max must be valid numbers');
    }
    if (min > max) {
      throw new Error('Min must be less than or equal to max');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  /**
   * Displays a random quote from the quotes array.
   */
  function generateQuote() {
    const randomIndex = getRandomInt(0, quotes.length - 1);
    const quote = quotes[randomIndex];
    document.getElementById('quote').textContent = `"${quote.text}"`;
    document.getElementById('author').textContent = `- ${quote.author}`;
  }
  
  /**
   * Shares the current quote (simulated with an alert).
   */
  function shareQuote() {
    const quote = document.getElementById('quote').textContent;
    const author = document.getElementById('author').textContent;
    alert(`Share this quote: ${quote} ${author}`);
  }
  
  // Generate a quote on page load
  generateQuote();
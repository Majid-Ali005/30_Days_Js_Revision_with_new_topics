// Calculate area, circumference, and diameter
function calculate() {
    const radius = parseFloat(document.getElementById('radius').value);
    
    // Input validation
    if (isNaN(radius) || radius < 0) {
      document.getElementById('result').innerHTML = 'Please enter a valid radius!';
      return;
    }
  
    // Calculations using Math
    const area = Math.PI * Math.pow(radius, 2); // Area = πr²
    const circumference = 2 * Math.PI * radius; // Circumference = 2πr
    const diameter = 2 * radius;
  
    // Display results with 2 decimal places
    document.getElementById('result').innerHTML = `
      <p>Area: ${area.toFixed(2)} square units</p>
      <p>Circumference: ${circumference.toFixed(2)} units</p>
      <p>Diameter: ${diameter.toFixed(2)} units</p>
    `;
  }
  
  // Generate random radius between 1 and 10
  function randomRadius() {
    const random = Math.floor(Math.random() * 10) + 1;
    document.getElementById('radius').value = random;
    calculate();
  }
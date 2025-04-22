function processFoodOrder(itemCode, isEvening) {
    // Input validation
    if (isNaN(itemCode) || itemCode < 1 || itemCode > 4) {
      return "Invalid item code. Please enter a number between 1 and 4.";
    }
  
    let item = "";
    let basePrice = 0;
  
    // Select item and price based on item code
    switch (Number(itemCode)) {
      case 1:
        item = "Pizza";
        basePrice = 300;
        break;
      case 2:
        item = "Burger";
        basePrice = 150;
        break;
      case 3:
        item = "Pasta";
        basePrice = 200;
        break;
      case 4:
        item = "Salad";
        basePrice = 100;
        break;
      default:
        return "Unexpected error. Please try again.";
    }
  
    // Apply evening surcharge
    let surcharge = 0;
    if (isEvening) {
      surcharge = basePrice * 0.15; // 15% surcharge
    }
  
    const finalPrice = basePrice + surcharge;
  
    return `
      Item: ${item}
      Base Price: ₹${basePrice}
      Evening Surcharge: ₹${surcharge}
      Final Price: ₹${finalPrice}
    `;
  }
  
  // Test cases
  console.log(processFoodOrder(1, true)); // Pizza with surcharge
  console.log(processFoodOrder(2, false)); // Burger without surcharge
  console.log(processFoodOrder(3, true)); // Pasta with surcharge
  console.log(processFoodOrder(5, false)); // Invalid code
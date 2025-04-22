function vendingMachine(code, isStudent) {
    // Input validation
    if (isNaN(code) || code < 1 || code > 5) {
      return "Invalid code. Please enter a number between 1 and 5.";
    }
  
    let item = "";
    let price = 0;
  
    // Select item and price based on code
    switch (Number(code)) {
      case 1:
        item = "Cola";
        price = 50;
        break;
      case 2:
        item = "Chips";
        price = 30;
        break;
      case 3:
        item = "Candy";
        price = 20;
        break;
      case 4:
        item = "Water";
        price = 15;
        break;
      case 5:
        item = "Coffee";
        price = 40;
        break;
      default:
        return "Unexpected error. Please try again.";
    }
  
    // Apply student discount
    let discount = 0;
    if (isStudent) {
      discount = price * 0.10; // 10% discount
    }
  
    const finalPrice = price - discount;
  
    return `
      Item: ${item}
      Original Price: ₹${price}
      Discount: ₹${discount}
      Final Price: ₹${finalPrice}
    `;
  }
  
  // Test cases
  console.log(vendingMachine(1, true)); // Cola with discount
  console.log(vendingMachine(3, false)); // Candy without discount
  console.log(vendingMachine(6, true)); // Invalid code
  console.log(vendingMachine(4, true)); // Water with discount
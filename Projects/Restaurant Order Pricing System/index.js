function calculateOrderPrice(item, size, isStudent) {
    // Input validation
    const validItems = ["Pizza", "Burger", "Salad"];
    const validSizes = ["Small", "Medium", "Large"];
    if (!validItems.includes(item) || !validSizes.includes(size)) {
      return "Invalid item or size. Please select valid options.";
    }
  
    // Price calculation
    let basePrice = 0;
  
    if (item === "Pizza") {
      if (size === "Small") basePrice = 200;
      else if (size === "Medium") basePrice = 350;
      else basePrice = 500;
    } else if (item === "Burger") {
      if (size === "Small") basePrice = 100;
      else if (size === "Medium") basePrice = 150;
      else basePrice = 200;
    } else if (item === "Salad") {
      if (size === "Small") basePrice = 80;
      else if (size === "Medium") basePrice = 120;
      else basePrice = 160;
    }
  
    // Apply student discount
    let discount = 0;
    if (isStudent) {
      discount = basePrice * 0.10;
    }
  
    const finalPrice = basePrice - discount;
  
    return `
      Item: ${item} (${size})
      Base Price: ₹${basePrice}
      Discount: ₹${discount}
      Final Price: ₹${finalPrice}
    `;
  }
  
  // Test cases
  console.log(calculateOrderPrice("Pizza", "Medium", true));
  console.log(calculateOrderPrice("Burger", "Large", false));
  console.log(calculateOrderPrice("Salad", "Small", true));
  console.log(calculateOrderPrice("Pasta", "Medium", false));
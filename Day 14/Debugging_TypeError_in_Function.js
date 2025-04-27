function calculateTotal(cart) {
    let total = 0;
    for (let item of cart) {
      total += item.price; // Bug: Some items might not have a 'price' property
    }
    return total;
  }
  
  const cart = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 50 },
    { name: null } // Bug: Missing price property
  ];
  
  console.log("Total:", calculateTotal(cart));
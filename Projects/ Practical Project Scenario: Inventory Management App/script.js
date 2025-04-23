'use strict';

// Inventory array
const inventory = [];

// Add item to inventory
function addItem() {
  const nameInput = document.getElementById('itemName');
  const quantityInput = document.getElementById('itemQuantity');
  const message = document.getElementById('message');
  const name = nameInput.value.trim();
  const quantity = parseInt(quantityInput.value);

  // Validation
  if (!name || isNaN(quantity) || quantity < 0) {
    message.textContent = "Please enter a valid name and non-negative quantity!";
    return;
  }

  inventory.push({ name, quantity });
  nameInput.value = '';
  quantityInput.value = '';
  message.textContent = '';
  displayInventory();
}

// Display inventory
function displayInventory() {
  const inventoryDiv = document.getElementById('inventory');
  inventoryDiv.innerHTML = '<h2>Inventory</h2>';

  // Loop through inventory using for...of
  for (let item of inventory) {
    const div = document.createElement('div');
    div.className = 'item';
    div.textContent = `${item.name}: ${item.quantity}`;
    inventoryDiv.appendChild(div);
  }
}

// Process inventory
function processInventory() {
  const message = document.getElementById('message');
  message.textContent = '';

  // Nested loop with label
  processing: for (let item of inventory) {
    // Skip invalid quantities using continue
    if (item.quantity < 0) {
      message.textContent = `Skipped invalid item: ${item.name}`;
      continue processing; // Skip to next item
    }

    // Break if out-of-stock
    if (item.quantity === 0) {
      message.textContent = `Stopped: ${item.name} is out of stock!`;
      break processing; // Stop processing
    }

    // Process valid items
    message.textContent = `Processed: ${item.name}, Quantity: ${item.quantity}`;
    console.log(`Processing ${item.name}: ${item.quantity} units`);
  }

  // If no items processed
  if (!message.textContent) {
    message.textContent = "No items to process!";
  }
}

// Enter key support
document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addItem();
  }
});

// Initialize
displayInventory();
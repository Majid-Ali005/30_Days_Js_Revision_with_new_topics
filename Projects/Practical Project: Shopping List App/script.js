'use strict';

// Array to store items
const items = [];

// Add item
function addItem() {
  const input = document.getElementById('itemInput');
  const item = input.value.trim();

  if (!item) {
    alert('Kuch likhein!');
    return;
  }

  items.push(item); // Add to array
  input.value = ''; // Clear input
  displayItems(); // Refresh list
}

// Display items
function displayItems() {
  const itemList = document.getElementById('itemList');
  itemList.innerHTML = ''; // Clear previous list

  // Loop over array using for...of
  for (let item of items) {
    const li = document.createElement('li');
    li.className = 'item';

    // Check if item has "urgent" (string looping)
    let isUrgent = false;
    const lowerItem = item.toLowerCase();
    for (let char of lowerItem) {
      if (lowerItem.includes('urgent')) {
        isUrgent = true;
        break; // Optimize by breaking early
      }
    }

    // Highlight urgent items
    if (isUrgent) {
      li.className += ' urgent';
    }

    // Add item text and delete button
    li.innerHTML = `${item} <button onclick="deleteItem('${item}')">Delete</button>`;
    itemList.appendChild(li);
  }
}

// Delete item
function deleteItem(item) {
  const index = items.indexOf(item);
  if (index !== -1) {
    items.splice(index, 1); // Remove item
    displayItems(); // Refresh list
  }
}

// Enter key support
document.getElementById('itemInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addItem();
  }
});
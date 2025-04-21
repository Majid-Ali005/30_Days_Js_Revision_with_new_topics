/**
 * User access ko check karta hai aur UI update karta hai.
 */
function checkAccess() {
    const role = document.getElementById('role').value;
    const age = parseInt(document.getElementById('age').value, 10);
  
    // Comparison aur Logical Operators
    const isAdult = !isNaN(age) && age >= 18;
    const isAdmin = role === 'admin';
    const isUser = role === 'user';
    const isGuest = role === 'guest';
  
    // Access level decide karo
    let accessLevel;
    if (isAdmin && isAdult) {
      accessLevel = 'Full Admin Access';
    } else if (isUser && isAdult) {
      accessLevel = 'User Access';
    } else if (isGuest || !isAdult) {
      accessLevel = 'Guest Access';
    } else {
      accessLevel = 'No Access';
    }
  
    // Ternary operator for message
    const message = isAdult ? `Welcome, ${role}!` : 'Access restricted: Age below 18';
  
    // Optional Chaining aur Nullish Coalescing ka use
    const user = { profile: { name: null } }; // Simulated API response
    const displayName = user?.profile?.name ?? 'Anonymous';
  
    // Result display karo
    document.getElementById('result').innerHTML = `
      <p>${message}</p>
      <p>Access Level: ${accessLevel}</p>
      <p>User: ${displayName}</p>
    `;
  }
  
  // Initial check
  document.addEventListener('DOMContentLoaded', () => {
    checkAccess();
  });
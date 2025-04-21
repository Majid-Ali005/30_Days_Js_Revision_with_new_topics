/**
 * Validates the form and updates UI.
 */
function validateForm() {
    const username = document.getElementById('username').value;
    const age = parseInt(document.getElementById('age').value, 10);
  
    // Boolean validations
    const isUsernameValid = Boolean(username.trim());
    const isAgeValid = !isNaN(age) && age >= 18;
  
    // Update error messages
    document.getElementById('username-error').textContent = isUsernameValid
      ? ''
      : 'Username is required';
    document.getElementById('age-error').textContent = isAgeValid
      ? ''
      : 'Age must be 18 or older';
  
    // Enable/disable submit button
    const isFormValid = isUsernameValid && isAgeValid;
    document.getElementById('submit').disabled = !isFormValid;
  
    // Handle submit action
    if (isFormValid) {
      document.getElementById('submit').onclick = () => {
        alert(`Form submitted! Username: ${username}, Age: ${age}`);
      };
    }
  }
  
  // Add event listeners for real-time validation
  document.getElementById('username').addEventListener('input', validateForm);
  document.getElementById('age').addEventListener('input', validateForm);
  
  // Initial validation
  validateForm();
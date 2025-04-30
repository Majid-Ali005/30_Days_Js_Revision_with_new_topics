class BankAccount {
    #balance = 0; // Private field for balance
  
    // Method to deposit money
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        return `Deposited ${amount}. New balance: ${this.#balance}`;
      }
      return "Invalid deposit amount";
    }
  
    // Method to get current balance
    getBalance() {
      return this.#balance;
    }
  }
  
  // Create a bank account object
  let account = new BankAccount();
  
  // Test the methods
  console.log(account.deposit(100)); // Output: Deposited 100. New balance: 100
  console.log(account.deposit(-50)); // Output: Invalid deposit amount
  console.log(account.getBalance()); // Output: 100
  console.log(account.#balance); // Error: Private field '#balance' is not accessible
function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private variable (hidden)
    
    return {
      deposit(amount) { // Public method (exposed interface)
        if (amount > 0) {
          balance += amount;
          console.log(`Deposited ${amount}. New balance: ${balance}`);
        }
      },
      withdraw(amount) { // Public method (exposed interface)
        if (amount > 0 && amount <= balance) {
          balance -= amount;
          console.log(`Withdrew ${amount}. New balance: ${balance}`);
        } else {
          console.log("Insufficient funds or invalid amount.");
        }
      },
      getBalance() { // Public method (exposed interface)
        return balance;
      }
    };
  }
  
  const account = createBankAccount(1000);
  account.deposit(500);   // Output: Deposited 500. New balance: 1500
  account.withdraw(200);  // Output: Withdrew 200. New balance: 1300
  console.log(account.getBalance()); // Output: 1300
  // console.log(account.balance); // Output: undefined (balance is hidden)
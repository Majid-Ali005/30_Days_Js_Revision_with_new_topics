class BankAccount {
    constructor(accountHolder, balance = 0) {
      this.accountHolder = accountHolder;
      this.balance = balance;
    }
  
    // Instance method
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        return `Deposited $${amount}. New balance: $${this.balance}`;
      }
      return "Invalid amount";
    }
  
    // Instance method
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        return `Withdrawn $${amount}. New balance: $${this.balance}`;
      }
      return "Invalid amount or insufficient funds";
    }
  
    // Getter method
    getBalance() {
      return this.balance;
    }
  }
  
  const account = new BankAccount("Sonia", 1000);
  console.log(account.deposit(500)); // Output: Deposited $500. New balance: $1500
  console.log(account.withdraw(200)); // Output: Withdrawn $200. New balance: $1300
  console.log(account.getBalance()); // Output: 1300
// Activity 5: Private Fields (Optional)

// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposit: ${amount}`);
    } else {
      console.log("Deposit amount must be positive");
    }
  }
  withdraw(amount) {
    if (amount > 0) {
      if (amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdraw: ${amount}`);
      } else {
        console.log(`Insufficient funds to withdraw: ${amount}`);
      }
    } else {
      console.log("Withdrawal amount must be positive");
    }
  }
  getbalance() {
    return this.#balance;
  }
}

const MyAccount = new Account(1000);

MyAccount.deposit(500);
MyAccount.withdraw(400);

console.log(MyAccount.getbalance());

//  Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
MyAccount.deposit(500); // Deposits $500
console.log(`Current Balance: $${MyAccount.getbalance()}`); // Logs: Current Balance: $1500

MyAccount.withdraw(400); // Withdraws $400
console.log(`Current Balance: $${MyAccount.getbalance()}`);

MyAccount.withdraw(1300); // Tries to withdraw $1200
console.log(`Current Balance: $${MyAccount.getbalance()}`);

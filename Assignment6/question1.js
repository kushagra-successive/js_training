//class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount {
  constructor(balance, owner) {
    this.balance = balance;
    this.owner = owner;
  }

  deposit(amount) {
    this.balance += amount; //incrementing the amount in current balance
  }

  withdraw(amount) {
    this.balance -= amount; //decrementing the amount in current balance
  }

  displayBalance() {
    console.log(`total amount of ${this.owner} : ${this.balance}`);
  }
}
const user = new BankAccount(60000, "Kushagra");
user.displayBalance();
user.deposit(3000);
user.withdraw(1200);
user.displayBalance();

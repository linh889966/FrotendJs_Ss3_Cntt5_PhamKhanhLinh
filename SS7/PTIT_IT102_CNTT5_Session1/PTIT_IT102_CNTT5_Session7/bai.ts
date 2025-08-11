class BankAccount {
  constructor(accountNumber, openingBalance = 0) {
    this.accountNumber = accountNumber;
    this._balance = openingBalance;
    this._history = [];
    this._status = "active";
  }
  deposit(amount) {
    if (amount <= 0) return false;
    this._balance += amount;
    this._history.push({ type: "DEPOSIT", amount, balance: this._balance, time: new Date().toISOString() });
    console.log(`[${this.accountNumber}] +${amount} -> ${this._balance}`);
    return true;
  }
  withdraw(amount) {
    if (amount <= 0) return false;
    if (amount > this._balance) { console.log("Insufficient funds"); return false; }
    this._balance -= amount;
    this._history.push({ type: "WITHDRAW", amount, balance: this._balance, time: new Date().toISOString() });
    console.log(`[${this.accountNumber}] -${amount} -> ${this._balance}`);
    return true;
  }
  showHistory() { console.table(this._history); }
  get balance() { return this._balance; }
}

class SavingAccount extends BankAccount {
  constructor(accountNumber, openingBalance = 0, interestRate = 0.03) {
    super(accountNumber, openingBalance);
    this.interestRate = interestRate;
  }
  withdraw(amount) {
    if (amount <= 0) return false;
    if (amount > this._balance) amount = this._balance;
    return super.withdraw(amount);
  }
}

const sAcc = new SavingAccount("SA-001", 1000, 0.05);
sAcc.deposit(250);
sAcc.withdraw(500);
sAcc.withdraw(1000);
console.log("Balance:", sAcc.balance);
sAcc.showHistory();

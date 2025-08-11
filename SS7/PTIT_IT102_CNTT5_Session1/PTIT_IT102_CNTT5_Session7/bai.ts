import java.util.*;

class Account {
    public String accountNumber;
    protected double balance;
    protected List<String> history;
    protected String status;

    public Account(String accountNumber, double balance, String status) {
        this.accountNumber = accountNumber;
        this.balance = Math.max(0, balance);
        this.status = status;
        this.history = new ArrayList<>();
        history.add("OPEN balance=" + this.balance);
    }

    public void deposit(double amount) {
        if (amount <= 0) return;
        balance += amount;
        history.add("DEPOSIT +" + amount + " => balance=" + balance);
    }

    public void withdraw(double amount) {
        if (amount <= 0) return;
        if (amount <= balance) {
            balance -= amount;
            history.add("WITHDRAW -" + amount + " => balance=" + balance);
        } else {
            history.add("WITHDRAW " + amount + " FAILED (insufficient) balance=" + balance);
        }
    }

    public void showHistory() {
        System.out.println("History of " + accountNumber + ":");
        for (String line : history) System.out.println(line);
    }
}

class SavingAccount extends Account {
    private double interestRate;

    public SavingAccount(String accountNumber, double balance, String status, double interestRate) {
        super(accountNumber, balance, status);
        this.interestRate = interestRate;
    }

    @Override
    public void withdraw(double amount) {
        if (amount <= 0) return;
        double taken = Math.min(amount, balance);
        balance -= taken;
        history.add("WITHDRAW request=" + amount + " taken=" + taken + " => balance=" + balance);
    }
}

public class Main {
    public static void main(String[] args) {
        SavingAccount sa = new SavingAccount("ACC-001", 1000, "active", 0.03);
        sa.deposit(500);
        sa.withdraw(1200);
        sa.withdraw(500);
        sa.deposit(50);
        sa.showHistory();
    }
}

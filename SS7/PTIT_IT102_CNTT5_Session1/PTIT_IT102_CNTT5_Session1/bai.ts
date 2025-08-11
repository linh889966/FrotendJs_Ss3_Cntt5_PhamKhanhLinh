class Employee {
    public String name;
    protected String company;
    private String phone;

    public Employee(String name, String company, String phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public void printfInfo() {
        System.out.println("Name: " + name);
        System.out.println("Company: " + company);
        System.out.println("Phone: " + phone);
    }
}

class Manager extends Employee {
    public int teamSize;

    public Manager(String name, String company, String phone, int teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }

    @Override
    public void printfInfo() {
        super.printfInfo();
        System.out.println("Team Size: " + teamSize);
    }
}

public class Main {
    public static void main(String[] args) {
        Manager m = new Manager("Linh", "Halink", "090-123-456", 8);
        m.printfInfo();
        m.name = "Linh P.";
        m.setPhone("098-000-111");
    }
}

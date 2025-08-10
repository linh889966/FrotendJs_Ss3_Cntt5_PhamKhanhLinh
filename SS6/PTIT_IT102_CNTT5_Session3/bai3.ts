class Employee {
  public name: string;
  protected company: string;
  private phone: string;

  constructor(name: string, company: string, phone: string) {
    this.name = name;
    this.company = company;
    this.phone = phone;
  }

  printInfo(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Company: ${this.company}`);
    console.log(`Phone: ${this.phone}`);
  }
}

const emp = new Employee("John Doe", "ABC Corp", "0123456789");
emp.printInfo();

class Employee {
  name;
  _company;
  #phone;
  constructor(name: string, company: string, phone: string)  {
    this.name = name;
    this._company = company;
    this.#phone = phone;
  }
  get phone() { return this.#phone; }
  set phone(v) { this.#phone = v; }
  printInfo() {
    console.log(`Employee: ${this.name} | Company: ${this._company} | Phone: ${this.#phone}`);
  }
}

class Manager extends Employee {
  constructor(name: string, company: string, phone: string, teamSize: number) {
    super(name, company, phone);
    this.teamSize = teamSize;
  }
  printInfo() {
    super.printInfo();
    console.log(`Team size: ${this.teamSize}`);
  }
}

const m1 = new Manager("An", "ABC Corp", "0901-234-567", 8);
m1.printInfo();

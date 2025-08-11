class Person {
  constructor(name) {
    if (new.target === Person) throw new Error("Person is abstract");
    this.name = name;
  }
  displayInfo() { throw new Error("displayInfo() must be overridden"); }
}

class Student extends Person {
  constructor(name, id) { super(name); this.id = id; }
  displayInfo() { console.log(`Student - id: ${this.id} | name: ${this.name}`); }
}

class Teacher extends Person {
  constructor(name, subject) { super(name); this.subject = subject; }
  displayInfo() { console.log(`Teacher - name: ${this.name} | subject: ${this.subject}`); }
}

new Student("Lan", "ST001").displayInfo();
new Teacher("Huy", "Math").displayInfo();

class Student {
  constructor(
    public id: number,
    public age: number,
    public email: string
  ) {}

  toString(): string {
    return `ID: ${this.id} | Age: ${this.age} | Email: ${this.email}`;
  }
}

const students: Student[] = [];

students.push(new Student(1, 20, "a1@example.com"));
students.push(new Student(2, 21, "b2@example.com"));
students.push(new Student(3, 19, "c3@example.com"));

for (const s of students) {
  console.log(s.toString());
}

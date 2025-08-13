"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    id;
    age;
    email;
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    toString() {
        return `ID: ${this.id} | Age: ${this.age} | Email: ${this.email}`;
    }
}
const students = [];
students.push(new Student(1, 20, "a1@example.com"));
students.push(new Student(2, 21, "b2@example.com"));
students.push(new Student(3, 19, "c3@example.com"));
for (const s of students) {
    console.log(s.toString());
}
//# sourceMappingURL=bai2.js.map
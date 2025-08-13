"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Định nghĩa lớp Student
class Student {
    id;
    age;
    email;
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    displayInfo() {
        console.log(`ID: ${this.id}, Tuổi: ${this.age}, Email: ${this.email}`);
    }
}
// Tạo mảng chứa các sinh viên
let students = [
    new Student(1, 20, "an@example.com"),
    new Student(2, 21, "binh@example.com"),
    new Student(3, 22, "chi@example.com"),
    new Student(4, 20, "dung@example.com"),
    new Student(5, 23, "ha@example.com")
];
// Duyệt mảng và in thông tin sinh viên
students.forEach(student => {
    student.displayInfo();
});
//# sourceMappingURL=bai2.js.map
// Định nghĩa lớp Student
class Student {
    id: number;
    age: number;
    email: string;

    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }

    displayInfo(): void {
        console.log(`ID: ${this.id}, Tuổi: ${this.age}, Email: ${this.email}`);
    }
}

// Tạo mảng chứa các sinh viên
let students: Student[] = [
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

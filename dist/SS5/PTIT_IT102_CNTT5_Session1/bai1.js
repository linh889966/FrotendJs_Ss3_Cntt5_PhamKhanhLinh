"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tạo mảng chứa tên của 5 sinh viên, tất cả đều là string
let studentNames = ["An", "Bình", "Chi", "Dũng", "Hà"];
// Duyệt qua mảng và hiển thị tên sinh viên bằng console.log
studentNames.forEach((name, index) => {
    console.log(`Sinh viên ${index + 1}: ${name}`);
});
// type Subject = {
//     subjectId: number,
//     subjectName: string,
//     score: number,
// }
// type Student = {
//     name: string,
//     age: number,
//     subjects: Subject
// }
// let students: Student[] = [];
// function addStudent(student: Student): void {
//     students.push(student);
// }
// function updateStudent(name: string, newName: string, newAge: number): void {
//     const student = students.find(s => s.name === name);
//     if (student) {
//         student.name = newName;
//         student.age = newAge;
//     } else {
//         console.log("Sinh viên không tồn tại");
//     }
// }
// function deleteStudent(name: string): void {
//     let deleteIndex = students.findIndex(s => s.name === name);
//     if (deleteIndex !== -1) {
//         students.splice(deleteIndex, 1);
//     } else {
//         console.log("Sinh viên không tồn tại");
//     }
// //b3. gọi kiểm tra
//# sourceMappingURL=bai1.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Định nghĩa lớp Employee
class Employee {
    name; // Có thể truy cập từ mọi nơi
    company; // Truy cập được trong class và subclass
    phone; // Chỉ truy cập trong class
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Tên nhân viên: ${this.name}`);
        console.log(`Công ty: ${this.company}`);
        console.log(`Số điện thoại: ${this.phone}`);
    }
}
// Tạo đối tượng từ lớp Employee và gọi phương thức printInfo
let emp = new Employee("Nguyễn Văn A", "ABC Corp", "0901234567");
emp.printInfo();
//# sourceMappingURL=bai3.js.map
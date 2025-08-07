// Định nghĩa lớp Employee
class Employee {
    public name: string;         // Có thể truy cập từ mọi nơi
    protected company: string;   // Truy cập được trong class và subclass
    private phone: string;       // Chỉ truy cập trong class

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    public printInfo(): void {
        console.log(`Tên nhân viên: ${this.name}`);
        console.log(`Công ty: ${this.company}`);
        console.log(`Số điện thoại: ${this.phone}`);
    }
}

// Tạo đối tượng từ lớp Employee và gọi phương thức printInfo
let emp = new Employee("Nguyễn Văn A", "ABC Corp", "0901234567");
emp.printInfo();

class Vehicle {
    public name: string;
    protected year: number;
    private company: string;
    readonly id: number;

    constructor(id: number, name: string, year: number, company: string) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }

    // Phương thức public để truy xuất thông tin đóng gói
    public printInfo(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Year: ${this.year}`);
        console.log(`Company: ${this.company}`);
    }
}

// Tạo một đối tượng Vehicle và in ra thông tin
let car = new Vehicle(101, "Toyota Camry", 2022, "Toyota Motor Corporation");
car.printInfo();



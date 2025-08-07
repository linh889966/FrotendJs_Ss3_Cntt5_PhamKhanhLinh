class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public getWidth(): number {
        return this.width;
    }

    public getHeight(): number {
        return this.height;
    }

    public setWidth(width: number): void {
        this.width = width;
    }

    public setHeight(height: number): void {
        this.height = height;
    }

    public getArea(): number {
        return this.width * this.height;
    }

    public getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

let rect = new Rectangle(10, 5);

console.log("Kích thước ban đầu:");
console.log("Chiều rộng:", rect.getWidth());
console.log("Chiều dài:", rect.getHeight());
console.log("Diện tích:", rect.getArea());
console.log("Chu vi:", rect.getPerimeter());

rect.setWidth(20);
rect.setHeight(8);

console.log("\nSau khi cập nhật kích thước:");
console.log("Chiều rộng:", rect.getWidth());
console.log("Chiều dài:", rect.getHeight());
console.log("Diện tích:", rect.getArea());
console.log("Chu vi:", rect.getPerimeter());

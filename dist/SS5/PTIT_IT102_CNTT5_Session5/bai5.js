"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    setWidth(width) {
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
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
//# sourceMappingURL=bai5.js.map
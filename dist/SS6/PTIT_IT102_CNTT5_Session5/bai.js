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
    setWidth(width) {
        this.width = width;
    }
    getHeight() {
        return this.height;
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
const rect = new Rectangle(5, 10);
console.log("Diện tích:", rect.getArea());
console.log("Chu vi:", rect.getPerimeter());
rect.setWidth(8);
rect.setHeight(12);
console.log("Diện tích sau cập nhật:", rect.getArea());
console.log("Chu vi sau cập nhật:", rect.getPerimeter());
//# sourceMappingURL=bai.js.map
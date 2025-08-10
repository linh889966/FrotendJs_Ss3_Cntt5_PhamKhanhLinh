class Rectangle {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getWidth(): number {
    return this.width;
  }

  setWidth(width: number): void {
    this.width = width;
  }

  getHeight(): number {
    return this.height;
  }

  setHeight(height: number): void {
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
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

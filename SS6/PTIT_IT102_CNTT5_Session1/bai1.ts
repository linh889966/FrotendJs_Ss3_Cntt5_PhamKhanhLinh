// Ứng dụng lập trình hướng đối tượng (OOP) trong TypeScript
// Hệ thống quản lý cửa hàng thú cưng

// ===== Lớp cha Animal =====
class Animal {
  // Thuộc tính
  private name: string;        // private: chỉ truy cập bên trong lớp Animal
  protected age: number;       // protected: truy cập được trong lớp Animal và lớp con
  public species: string;      // public: truy cập được từ mọi nơi

  // Hàm khởi tạo
  constructor(name: string, age: number, species: string) {
    this.name = name;          // gán tên
    this.age = age;            // gán tuổi
    this.species = species;    // gán loài
  }

  // Phương thức mặc định: tiếng kêu của động vật
  public speak(): void {
    console.log(`${this.species} makes a sound.`);
  }

  // Getter & Setter cho name
  public getName(): string {
    return this.name;          // trả về giá trị name
  }
  public setName(n: string): void {
    this.name = n;              // cập nhật giá trị name
  }

  // Getter & Setter cho age
  public getAge(): number {
    return this.age;            // trả về tuổi
  }
  public setAge(a: number): void {
    if (a < 0 || !Number.isFinite(a)) // kiểm tra giá trị hợp lệ
      throw new Error("Tuổi không hợp lệ");
    this.age = a;                // cập nhật tuổi
  }

  // Phương thức in thông tin
  public info(): string {
    return `[${this.species}] name=${this.getName()}, age=${this.getAge()}`;
  }
}

// ===== Lớp con Dog =====
class Dog extends Animal {
  public breed: string; // giống chó

  constructor(name: string, age: number, breed: string) {
    super(name, age, "Dog"); // gọi constructor lớp cha (Animal)
    this.breed = breed;      // gán giống
  }

  // Ghi đè phương thức speak
  public speak(): void {
    console.log("Woof"); // tiếng chó sủa
  }

  // In thông tin đầy đủ
  public info(): string {
    return `${super.info()}, breed=${this.breed}`;
  }
}

// ===== Lớp con Cat =====
class Cat extends Animal {
  public breed: string; // giống mèo

  constructor(name: string, age: number, breed: string) {
    super(name, age, "Cat"); // gọi constructor lớp cha
    this.breed = breed;      // gán giống
  }

  // Ghi đè phương thức speak
  public speak(): void {
    console.log("Meow"); // tiếng mèo kêu
  }

  // In thông tin đầy đủ
  public info(): string {
    return `${super.info()}, breed=${this.breed}`;
  }
}

// ===== Lớp con Rabbit =====
class Rabbit extends Animal {
  public breed: string; // giống thỏ

  constructor(name: string, age: number, breed: string) {
    super(name, age, "Rabbit"); // gọi constructor lớp cha
    this.breed = breed;         // gán giống
  }

  // Ghi đè phương thức speak
  public speak(): void {
    console.log("Squeak"); // tiếng thỏ kêu
  }

  // In thông tin đầy đủ
  public info(): string {
    return `${super.info()}, breed=${this.breed}`;
  }
}

// ===== Phần Demo sử dụng =====

// Tạo danh sách các đối tượng động vật trong cửa hàng
const store: Animal[] = [
  new Dog("Buddy", 3, "Golden Retriever"), // tạo đối tượng chó
  new Cat("Mimi", 2, "British Shorthair"), // tạo đối tượng mèo
  new Rabbit("Snow", 1, "Mini Lop"),       // tạo đối tượng thỏ
];

// Duyệt và in thông tin + tiếng kêu (đa hình)
for (const a of store) {
  console.log(a.info()); // in thông tin
  a.speak();             // phát tiếng kêu
}

// ===== Cập nhật thông tin =====
const dog = store[0] as Dog; // ép kiểu về Dog
dog.setAge(dog.getAge() + 1); // tăng tuổi lên 1
dog.setName("Buddy Jr.");     // đổi tên chó

const cat = store[1] as Cat;  
cat.breed = "Maine Coon";     // đổi giống mèo (thuộc tính public nên gán trực tiếp)

console.log("--- Sau khi cập nhật ---");
for (const a of store) console.log(a.info());

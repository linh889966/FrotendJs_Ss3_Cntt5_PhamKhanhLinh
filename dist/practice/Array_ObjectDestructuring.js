"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Array & Object destructuring
const arr = [1, 2, 3, 4, 5];
let a = arr[0];
let b = arr[1];
let c = arr[2];
console.log(a, b, c); // 1 2 3
// Sử dụng destructuring
const Arr = [1, 2, 3, 4, 5];
const [x, y, z] = Arr;
console.log(x, y, z); // 1 2 3
// áp dùng destructuring với object
const obj = ["Linh", "Hà Nội", "PTIT"];
const [name, city, school] = obj;
console.log(name, city, school); // Linh Hà Nội PTIT
// áp dụng destructuring để lấy tên obj
const person = {
    Name: "Nguyễn Văn A",
    age: 30,
    job: "Developer"
};
const { Name } = person;
console.log(name); // Nguyễn Văn A
//# sourceMappingURL=Array_ObjectDestructuring.js.map
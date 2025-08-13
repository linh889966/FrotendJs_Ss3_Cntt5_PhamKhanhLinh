"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// cú pháp
let name = `Phạm Khánh Linh`; // viết chuỗi bằng dấu blacktick 
// string interpolation ( nội suy chuỗi) 
let Name = `Linh`;
let fullName = `Tên đầy đủ của tôi là: ${Name}`; // sử dụng ${biến} để chèn giá trị biến vào chuỗi
//chuỗi nhiều dòng
let stringMultiLine = `Đây là chỗi 1 \n + Đây là chuỗi 2 \n + Đây là chuỗi 3`; // sử dụng \n để xuống dòng trong chuỗi
// biểu thức nhúng embedded expression dùng để xử lý phức tạp , như gọi hàm và toán tử
const getGreeting = (ten) => `Xin chào ${ten}!`;
console.log(`${getGreeting("Linh")}`); // gọi hàm getGreeting và chèn kết quả vào chuỗi
// const getGet= (ten)=> `Xin chào ${ten}!`;
// console.log(`${getGet("Linh")}`); // gọi hàm getGet và chèn kết quả vào chuỗi
//# sourceMappingURL=template.js.map
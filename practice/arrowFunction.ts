//dùng để khai báo ngắn gọn hơn với =>
const student = (a:number, b:number) => a+b;


// không có This riêng trong arrow function . thay vào đó sử dụgn  this của ngữ cảnh bao quanh (lexical scping)
const person1 = {
    points: 23,
    score: () => {
        this.points++;
    },
};

person1.score();
console.log(person1.points); // output: 23

//
const person2 = {
    points: 23,
    score: function () {
        this.points++;
    },
};

person1.score();
console.log(person2.points); // ✅ 24

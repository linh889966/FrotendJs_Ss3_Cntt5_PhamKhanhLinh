var Student = /** @class */ (function () {
    function Student(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    Student.prototype.toString = function () {
        return "ID: ".concat(this.id, " | Age: ").concat(this.age, " | Email: ").concat(this.email);
    };
    return Student;
}());
var students = [];
students.push(new Student(1, 20, "a1@example.com"));
students.push(new Student(2, 21, "b2@example.com"));
students.push(new Student(3, 19, "c3@example.com"));
for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
    var s = students_1[_i];
    console.log(s.toString());
}

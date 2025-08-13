"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getInfo() {
        return `${this.title} - ${this.author}`;
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }
}
let book1 = new Book("Đắc Nhân Tâm", "Dale Carnegie");
let book2 = new Book("Tuổi trẻ đáng giá bao nhiêu", "Rosie Nguyễn");
let book3 = new Book("Nhà giả kim", "Paulo Coelho");
let book4 = new Book("Muôn kiếp nhân sinh", "Nguyên Phong");
let book5 = new Book("Hạt giống tâm hồn", "Nhiều tác giả");
let library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.showBooks();
//# sourceMappingURL=bai6.js.map
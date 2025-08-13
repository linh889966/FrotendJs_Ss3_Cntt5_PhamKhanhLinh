"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    updateInfo(newTitle, newAuthor) {
        this.title = newTitle;
        this.author = newAuthor;
    }
    getInfo() {
        return `${this.id}. ${this.title} - ${this.author}`;
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    updateBookById(id, newTitle, newAuthor) {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.updateInfo(newTitle, newAuthor);
        }
    }
    showBooks() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(book => {
            console.log(book.getInfo());
        });
    }
}
let library = new Library();
let book1 = new Book(1, "Đắc Nhân Tâm", "Dale Carnegie");
let book2 = new Book(2, "Tuổi trẻ đáng giá bao nhiêu", "Rosie Nguyễn");
let book3 = new Book(3, "Nhà giả kim", "Paulo Coelho");
let book4 = new Book(4, "Muôn kiếp nhân sinh", "Nguyên Phong");
let book5 = new Book(5, "Hạt giống tâm hồn", "Nhiều tác giả");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.updateBookById(3, "Nhà giả kim (Bản mới)", "Paulo Coelho");
library.showBooks();
//# sourceMappingURL=bai7.js.map
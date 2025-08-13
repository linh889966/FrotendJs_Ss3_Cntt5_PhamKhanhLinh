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
    getTitle() {
        return this.title;
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
    showBooks() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(book => {
            console.log(book.getInfo());
        });
    }
    searchByTitle(keyword) {
        const results = this.books.filter(book => book.getTitle().toLowerCase().includes(keyword.toLowerCase()));
        if (results.length === 0) {
            console.log(`Không tìm thấy sách với từ khóa: "${keyword}"`);
        }
        else {
            console.log(`Kết quả tìm kiếm với từ khóa: "${keyword}":`);
            results.forEach(book => console.log(book.getInfo()));
        }
    }
}
let library = new Library();
library.addBook(new Book(1, "Đắc Nhân Tâm", "Dale Carnegie"));
library.addBook(new Book(2, "Tuổi trẻ đáng giá bao nhiêu", "Rosie Nguyễn"));
library.addBook(new Book(3, "Nhà giả kim", "Paulo Coelho"));
library.addBook(new Book(4, "Muôn kiếp nhân sinh", "Nguyên Phong"));
library.addBook(new Book(5, "Hạt giống tâm hồn", "Nhiều tác giả"));
library.searchByTitle("giả kim");
library.searchByTitle("tâm");
library.searchByTitle("không có");
//# sourceMappingURL=bai8.js.map
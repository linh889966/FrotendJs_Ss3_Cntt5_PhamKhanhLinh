"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    listBooks() {
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getTitle()} - ${book.getAuthor()}`);
        });
    }
    searchBookByTitle(keyword) {
        const results = this.books.filter(book => book.getTitle().toLowerCase().includes(keyword.toLowerCase()));
        if (results.length === 0) {
            console.log("Không tìm thấy sách.");
        }
        else {
            results.forEach((book, index) => {
                console.log(`${index + 1}. ${book.getTitle()} - ${book.getAuthor()}`);
            });
        }
    }
}
const library = new Library();
library.addBook(new Book("Book A", "Author A"));
library.addBook(new Book("Book B", "Author B"));
library.addBook(new Book("Advanced TypeScript", "Author C"));
library.addBook(new Book("Book D", "Author D"));
console.log("Danh sách sách trong thư viện:");
library.listBooks();
console.log("\nKết quả tìm kiếm với từ khóa 'Book':");
library.searchBookByTitle("Book");
console.log("\nKết quả tìm kiếm với từ khóa 'TypeScript':");
library.searchBookByTitle("TypeScript");
//# sourceMappingURL=bai.js.map
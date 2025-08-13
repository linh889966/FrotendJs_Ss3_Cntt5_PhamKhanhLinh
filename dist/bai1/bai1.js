"use strict";
// Lớp cơ bản Book chứa các thông tin chung của 1 cuốn sách
class Book {
}
// Lớp TextBook kế thừa từ Book, bổ sung thêm thuộc tính grade
class TextBook extends Book {
}
// Lớp generic Library dùng để quản lý danh sách sách
// T được giới hạn (extends) là kiểu Book hoặc các lớp kế thừa Book
class Library {
    constructor() {
        // Mảng lưu trữ các đối tượng sách (có thể là Book hoặc TextBook)
        this.books = [];
    }
    // Thêm sách mới vào thư viện
    addBook(book) {
        this.books.push(book);
    }
    // Lấy sách theo vị trí index trong mảng
    getBookIndex(index) {
        return this.books[index];
    }
    // Lấy sách theo id
    getBookById(id) {
        return this.books.find(b => b.id === id);
    }
    // Xoá sách theo id
    removeBook(id) {
        this.books = this.books.filter(b => b.id !== id);
    }
    // Cập nhật thông tin sách theo id
    // updatedBook là Partial<T> => cho phép truyền một phần thuộc tính của T
    updateBook(id, updatedBook) {
        const i = this.books.findIndex(b => b.id === id);
        if (i === -1)
            return false; // Không tìm thấy sách
        // Gộp thông tin mới vào sách cũ
        this.books[i] = { ...this.books[i], ...updatedBook };
        return true;
    }
    // Trả về toàn bộ danh sách sách
    listBooks() {
        return this.books;
    }
    // Tìm sách theo tiêu đề hoặc tác giả (không phân biệt hoa thường)
    findBookByTitleOrAuthor(searchTerm) {
        const q = searchTerm.toLowerCase();
        return this.books.filter(b => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q));
    }
    // Trả về tổng số sách trong thư viện
    getTotalBooks() {
        return this.books.length;
    }
    // Tìm sách theo năm xuất bản
    findBooksByYear(year) {
        return this.books.filter(b => b.year === year);
    }
}
// ======= SỬ DỤNG =======
// Tạo thư viện lưu trữ sách giáo khoa
const library = new Library();
// Thêm một sách giáo khoa vào thư viện
library.addBook({
    id: 1,
    title: "Toán lớp 1",
    author: "Nguyễn Văn A",
    year: 2020,
    grade: "1"
});
// In danh sách sách ra console
console.log(library.listBooks());

// Lớp cơ bản Book chứa các thông tin chung của 1 cuốn sách
class Book {
  id!: number;      // Mã định danh duy nhất của sách
  title!: string;   // Tiêu đề sách
  author!: string;  // Tác giả
  year!: number;    // Năm xuất bản
}

// Lớp TextBook kế thừa từ Book, bổ sung thêm thuộc tính grade
class TextBook extends Book {
  grade!: string;   // Khối/lớp phù hợp (ví dụ: "1", "12")
}

// Lớp generic Library dùng để quản lý danh sách sách
// T được giới hạn (extends) là kiểu Book hoặc các lớp kế thừa Book
class Library<T extends Book> {
  // Mảng lưu trữ các đối tượng sách (có thể là Book hoặc TextBook)
  private books: T[] = [];

  // Thêm sách mới vào thư viện
  addBook(book: T): void {
    this.books.push(book);
  }

  // Lấy sách theo vị trí index trong mảng
  getBookIndex(index: number): T | undefined {
    return this.books[index];
  }

  // Lấy sách theo id
  getBookById(id: number): T | undefined {
    return this.books.find(b => b.id === id);
  }

  // Xoá sách theo id
  removeBook(id: number): void {
    this.books = this.books.filter(b => b.id !== id);
  }

  // Cập nhật thông tin sách theo id
  // updatedBook là Partial<T> => cho phép truyền một phần thuộc tính của T
  updateBook(id: number, updatedBook: Partial<T>): boolean {
    const i = this.books.findIndex(b => b.id === id);
    if (i === -1) return false; // Không tìm thấy sách
    // Gộp thông tin mới vào sách cũ
    this.books[i] = { ...this.books[i], ...updatedBook };
    return true;
  }

  // Trả về toàn bộ danh sách sách
  listBooks(): T[] {
    return this.books;
  }

  // Tìm sách theo tiêu đề hoặc tác giả (không phân biệt hoa thường)
  findBookByTitleOrAuthor(searchTerm: string): T[] {
    const q = searchTerm.toLowerCase();
    return this.books.filter(
      b => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)
    );
  }

  // Trả về tổng số sách trong thư viện
  getTotalBooks(): number {
    return this.books.length;
  }

  // Tìm sách theo năm xuất bản
  findBooksByYear(year: number): T[] {
    return this.books.filter(b => b.year === year);
  }
}

// ======= SỬ DỤNG =======

// Tạo thư viện lưu trữ sách giáo khoa
const library = new Library<TextBook>();

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

class Book {
    private id: number;
    private title: string;
    private author: string;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getInfo(): string {
        return `${this.id}. ${this.title} - ${this.author}`;
    }
}

class Library {
    private books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public showBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(book => {
            console.log(book.getInfo());
        });
    }

    public searchByTitle(keyword: string): void {
        const results = this.books.filter(book =>
            book.getTitle().toLowerCase().includes(keyword.toLowerCase())
        );
        if (results.length === 0) {
            console.log(`Không tìm thấy sách với từ khóa: "${keyword}"`);
        } else {
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

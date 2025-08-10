class Book {
  private title: string;
  private author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  getTitle(): string {
    return this.title;
  }

  getAuthor(): string {
    return this.author;
  }
}

class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  listBooks(): void {
    this.books.forEach((book, index) => {
      console.log(`${index + 1}. ${book.getTitle()} - ${book.getAuthor()}`);
    });
  }
}

const book1 = new Book("Book A", "Author A");
const book2 = new Book("Book B", "Author B");
const book3 = new Book("Book C", "Author C");
const book4 = new Book("Book D", "Author D");
const book5 = new Book("Book E", "Author E");

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.listBooks();

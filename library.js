class Library {
  constructor() {
    this.books = [];
  }
  addBook(name, author, pageCount, logger) {
    if (this.books.find((book) => book.name === name)) {
      throw new Error("A book with the same name already exists.");
    }
    const book = { name, author, pageCount };
    this.books.push(book);
    logger.log(`Book added: ${name} by ${author} (${pageCount} pages)`);
  }
  removeBook(name, logger) {
    const index = this.books.findIndex((book) => book.name === name);
    if (index === -1) {
      throw new Error("Book not found.");
    }
    const book = this.books.splice(index, 1)[0];
    logger.log(
      `Book removed: ${book.name} by ${book.author} (${book.pageCount} pages)`
    );
  }
}
class DatabaseLogger {
  log(message) {
    // Save log message to database
  }
}
class FileLogger {
  log(message) {
    // Save log message to file
  }
}
class ConsoleLogger {
  log(message) {
    console.log(message);
  }
}

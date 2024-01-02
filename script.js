const library = [];

// BOOK CONSTRUCTOR
function Book(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
}

// A FUNCTION DEFINE ON THE PROTOTYPE RATHER THAN IN THE CONSTRUCTOR
Book.prototype.info = function () {
    if (read)
        return `${this.title} by ${this.author}, ${pageCount} pages long, already read`;
    else
        return `${this.title} by ${this.author}, ${pageCount} pages long, not read yet`;
}

// A FEW BOOKS TO FILL THE LIBRARY WHILE THE PROJECT GROWS
const book1 = new Book("The Hobbit", "J R R Tolkien", 310, true);
const book2 = new Book("The Lord of the Rings", "J R R Tolkien", 1178, true);
const book3 = new Book("The Sandman", "N Gaiman", 3000, true);
const book4 = Object.create(Book);
book4.title = "Meditations";
book4.author = "Marcus Aurelius";
book4.pageCount = 88;
book4.read = false;

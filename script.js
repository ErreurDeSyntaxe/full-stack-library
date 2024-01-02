// EVERYDAY PHYSICAL THING CONSTRUCTOR
function Thing(location) {
    this.location = location;
}

Thing.prototype.locate = function () {
    return "I'm somewhere close to " + this.location;
}

const thing1 = new Thing("the living room");

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

Object.setPrototypeOf(Book.prototype, Thing.prototype);

// A FEW BOOKS TO FILL THE LIBRARY WHILE THE PROJECT GROWS
const book1 = new Book("The Hobbit", "Tolkien", 400, true);
const book2 = new Book("The LOTR", "Tolkien", 1200, true);
const book3 = new Book("The Sandman", "Gaiman", 2000, true);
const book4 = Object.create(Book);
book4.title = "Meditations";
book4.author = "Marcus Aurelius";
book4.pageCount = 200;
book4.read = false;

// TRYING OUT OBJECT FUNCTIONS
console.table(book4);
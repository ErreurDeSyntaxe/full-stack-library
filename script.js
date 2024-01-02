const library = [];
let bookshelf = document.querySelector(".bookshelf");

// BOOK CONSTRUCTOR
function Book(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
}

// A FUNCTION DEFINE ON THE PROTOTYPE RATHER THAN IN THE CONSTRUCTOR
Book.prototype.info = function () {
    if (this.read)
        return `${this.title} by ${this.author}, ${this.pageCount} pages long, already read`;
    else
        return `${this.title} by ${this.author}, ${this.pageCount} pages long, not read yet`;
}

// A FEW BOOKS TO FILL THE LIBRARY WHILE THE PROJECT GROWS
const book1 = new Book("The Hobbit", "J R R Tolkien", 310, true);
const book2 = new Book("The Lord of the Rings", "J R R Tolkien", 1178, true);
const book3 = new Book("The Sandman", "N Gaiman", 3000, true);
const book4 = Object.create(Book.prototype);
book4.title = "Meditations";
book4.author = "M Aurelius";
book4.pageCount = 88;
book4.read = false;

library.push(book1);
library.push(book2);
library.push(book3);
library.push(book4);

function displayBooks() {
    for (let i = 0; i < library.length; i++) {
        let aBook = document.createElement("div");
        let title = document.createElement("p");
        let author = document.createElement("p");
        let pageCount = document.createElement("p");
        let readButton = document.createElement("button");
        let lineBreak = document.createElement("br");
        let rmvButton = document.createElement("button");

        title.textContent = library[0].title;
        title.style.fontStyle = "italic";
        author.textContent = library[0].author;
        pageCount.textContent = library[0].pageCount + " pages";
        readButton.textContent = "Read";
        rmvButton.textContent = "Remove";

        // add classes so the CSS takes effect

        aBook.appendChild(title);
        aBook.appendChild(author);
        aBook.appendChild(pageCount);
        aBook.appendChild(readButton);
        aBook.appendChild(lineBreak);
        aBook.appendChild(rmvButton);

        console.log(aBook);
        bookshelf.appendChild(aBook);
    }
}

displayBooks();
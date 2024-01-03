const library = [];
let bookshelf = document.querySelector(".bookshelf");
let addBook = document.querySelector("add-button");
// addBook.addEventListener("click", () => {
//     createForm();
// });

// function createForm() {
//     let i = 0;
//     return i;
// }

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
const book1 = new Book("The Hobbit", "Tolkien", 310, true);
const book2 = new Book("The Lord of the Rings", "Tolkien", 1178, true);
const book3 = new Book("The Sandman", "Gaiman", 3000, true);
const book4 = Object.create(Book.prototype);
book4.title = "Meditations";
book4.author = "Aurelius";
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

        title.textContent = library[i].title;
        title.style.fontStyle = "italic";
        author.textContent = library[i].author;
        pageCount.textContent = library[i].pageCount + " pages";
        readButton.textContent = "Read";
        rmvButton.textContent = "Remove";

        // add classes so the CSS takes effect
        aBook.classList.toggle("book-card")
        title.classList.toggle("centered");
        author.classList.toggle("centered");
        pageCount.classList.toggle("centered");
        readButton.classList.toggle("read-button");
        rmvButton.classList.toggle("rmv-button");

        // activate the buttons
        readButton.addEventListener("click", () => {
            readButton.classList.toggle("read-button");
            readButton.classList.toggle("notread-button");
            if (readButton.textContent == "Read")
                readButton.textContent = "Not Read";
            else
                readButton.textContent = "Read";
        });
        rmvButton.addEventListener("click", () => {
            aBook.remove();
            removeBook(title.textContent);
        });

        aBook.appendChild(title);
        aBook.appendChild(author);
        aBook.appendChild(pageCount);
        aBook.appendChild(readButton);
        aBook.appendChild(lineBreak);
        aBook.appendChild(rmvButton);

        bookshelf.appendChild(aBook);
    }
}

function removeBook(string) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].title === string) {
            library.splice(i, 1);
        }
    }
}

displayBooks();
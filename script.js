const library = [];
const bookshelf = document.querySelector(".bookshelf");
const dialog = document.querySelector("dialog");
const addBook = document.querySelector(".add-button");
const confirmBook = document.querySelector("#confirm-button");
const inTitle = document.querySelector("#title");
const inAuthor = document.querySelector("#author");
const inPageCount = document.querySelector("#page-count");
const wasRead = document.querySelector("#wasRead");
const addBookForm = document.querySelector("#add-book-form");

addBook.addEventListener("click", () => {
    dialog.showModal();
});

confirmBook.addEventListener("click", (event) => {
    if (inTitle.value == "" ||
        inAuthor.value == "" ||
        inPageCount.value == "" ||
        inPageCount.value > 10000 ||
        inPageCount.value < 1)
        return;
    else
        submitBook();
});

function submitBook() {
    let newBook = new Book(inTitle.value, inAuthor.value,
        inPageCount.value, wasRead.checked);
    library.push(newBook);
    displayBook(newBook);

    dialog.close();
    addBookForm.reset();
}

// BOOK CONSTRUCTOR
function Book(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
}

function displayBook(newBook) {
    // CREATE THE DOM ELEMENTS NEEDED
    let aBook = document.createElement("div");
    let title = document.createElement("p");
    let author = document.createElement("p");
    let pageCount = document.createElement("p");
    let readButton = document.createElement("button");
    let lineBreak = document.createElement("br");
    let rmvButton = document.createElement("button");

    title.textContent = newBook.title;
    title.style.fontStyle = "italic";
    author.textContent = newBook.author;
    pageCount.textContent = newBook.pageCount + " pages";
    if (newBook.read) {
        readButton.textContent = "Read";
        readButton.classList.toggle("read-button");
    } else {
        readButton.textContent = "Not Read";
        readButton.classList.toggle("notread-button");
    }
    rmvButton.textContent = "Remove";

    // add classes so the CSS takes effect
    aBook.classList.toggle("book-card")
    title.classList.toggle("centered");
    author.classList.toggle("centered");
    pageCount.classList.toggle("centered");
    rmvButton.classList.toggle("rmv-button");

    // activate the buttons on each book-card
    readButton.addEventListener("click", () => {
        readButton.classList.toggle("read-button");
        readButton.classList.toggle("notread-button");
        if (readButton.textContent == "Read") {
            readButton.textContent = "Not Read";
        } else {
            readButton.textContent = "Read";
        }
        updateRead(newBook.title);
    });
    rmvButton.addEventListener("click", () => {
        aBook.remove();//remove from DOM
        removeBook(title.textContent);//remove from array
    });

    aBook.appendChild(title);
    aBook.appendChild(author);
    aBook.appendChild(pageCount);
    aBook.appendChild(readButton);
    aBook.appendChild(lineBreak);
    aBook.appendChild(rmvButton);

    bookshelf.appendChild(aBook);
}

function updateRead(string) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].title === string) {
            library[i].read = !library[i].read;
            return;
        }
    }
}

function removeBook(string) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].title === string) {
            library.splice(i, 1);
            return;
        }
    }
}
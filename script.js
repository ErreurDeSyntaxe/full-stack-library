'use strict';

class Book {
  constructor(title, author, pageCount, readStatus) {
    this.id = Math.random().toString().slice(-8);
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
    console.log('new Book created');
    console.log(this);
  }
  updateReadStatus() {
    this.readStatus = !this.readStatus;
  }
}

class Library {
  #bookList = []; // where the Book objects are stored
  constructor() {
    this.bookshelf = document.querySelector('.bookshelf'); // where book cards are displayed
    this.dialog = document.querySelector('.dialog'); // modal window containing the form
    this.btnFormOpen = document.querySelector('.btn-form-open'); // btn that opens the modal
    this.form = document.getElementById('form'); // the form
    this.inputTitle = document.getElementById('title'); // form input
    this.inputAuthor = document.getElementById('author'); // form input
    this.inputPageCount = document.getElementById('page-count'); // form input
    this.inputReadStatus = document.getElementById('read-status'); // form input
    this.btnConfirm = document.getElementById('btn-confirm'); // btn to submit the form

    // event listeners
    this.bookshelf.addEventListener('click', (e) => this.handleClick(e));
    this.btnFormOpen.addEventListener('click', () => this.dialog.showModal());
    this.btnConfirm.addEventListener('click', (e) => {
      e.preventDefault();
      // sending an object instead of four arguments
      const userInput = {
        title: this.inputTitle.value,
        author: this.inputAuthor.value,
        pageCount: this.inputPageCount.value,
        readStatus: this.inputReadStatus.checked,
      };

      // sending an object instead of four arguments
      if (this.validateInput(userInput)) {
        this.createBook(userInput);
        this.clearModal();
      }
    });
  }
  findBookCardAndIndex(e) {
    const target = e.target.closest('.book-card');
    const index = this.#bookList.findIndex(
      (book) => book.id === target.dataset.id
    );
    return { target, index };
  }
  // event delegation for changing Read/Not Read status and Removing a Book
  handleClick(e) {
    // Read Status
    if (e.target?.classList.contains('read-status')) {
      const { target, index } = this.findBookCardAndIndex(e);
      const status = target.querySelector('.read-status');

      // Reflect the changes on the DOM
      this.#bookList[index].updateReadStatus();
      status.classList.toggle('notread-button');
      status.classList.toggle('read-button');
      status.textContent =
        status.textContent === 'Not Read' ? 'Read' : 'Not Read';
    }

    // Remove the Book from DOM and Library
    if (e.target?.classList.contains('rmv-button')) {
      const { target, index } = this.findBookCardAndIndex(e);
      // Reflect the changes on the DOM
      this.#bookList.splice(index, 1);
      target.remove();
    }
  }
  clearModal() {
    this.form.reset();
    this.dialog.close();
  }
  validateInput(userInput) {
    const { title, author, pageCount } = userInput;
    return title !== '' && author !== '' && pageCount !== '' && pageCount > 0;
  }
  createBook(userInput) {
    const { title, author, pageCount, readStatus } = userInput;
    const book = new Book(title, author, pageCount, readStatus);
    this.displayBook(book);
    this.#bookList.push(book);
    console.log(this.#bookList);
  }
  displayBook(bookObject) {
    const { id, title, author, pageCount, readStatus } = bookObject;
    const bookHtml = `
      <div class="book-card" data-id="${id}">
        <p class="centered" style="font-style: italic;">${title}</p>
        <p class="centered">${author}</p>
        <p class="centered">${pageCount} pages</p>
        <button class="${
          readStatus ? 'read-button' : 'notread-button'
        } read-status">${readStatus ? 'Read' : 'Not Read'}</button>
        <br>
        <button class="rmv-button">Remove</button>
      </div>`;
    this.bookshelf.insertAdjacentHTML('beforeend', bookHtml);
  }
}

const myLibrary = new Library();
const temp1 = {
  title: 'The Hobbit',
  author: 'Tolkien',
  pageCount: 321,
  readStatus: true,
};
const temp2 = {
  title: 'Neverwhere',
  author: 'Gaiman',
  pageCount: 564,
  readStatus: true,
};
const temp3 = {
  title: 'The Secret',
  author: 'Whocares',
  pageCount: 222,
  readStatus: false,
};
const temp4 = {
  title: 'Dune',
  author: 'Herbert',
  pageCount: 586,
  readStatus: true,
};
myLibrary.createBook(temp1);
myLibrary.createBook(temp2);
myLibrary.createBook(temp3);
myLibrary.createBook(temp4);

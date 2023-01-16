import Book from './book.js'
const storedBooks = JSON.parse(localStorage.getItem('bookstored'));
const empty = document.querySelector('.empty_bookstore');
const tableBody = document.querySelector('.table_body');

const BookActions = class AwesomeLibrary {
  constructor() {
    this.storedBooks = storedBooks;
  }

  addBookDetails() {
    const booksData = new Book(title.value, author.value);
    if (!this.storedBooks) {
      this.storedBooks = [];
    }
    this.storedBooks.push(booksData);
    localStorage.setItem('bookstored', JSON.stringify(this.storedBooks));
    this.displayBooks();
  }

  displayBooks() {
    if (!this.storedBooks || !this.storedBooks === 0 || this.storedBooks === []) {
      empty.innerHTML = 'No books in the library';
    } else {
      empty.style.display = 'none';
      let eachTableRow = '';
      for (let i = 0; i < this.storedBooks.length; i += 1) {
        eachTableRow
            += `<tr>
                  <td>"${this.storedBooks[i].title}" by ${this.storedBooks[i].author}</td>
                  <td><button type="button" id=${i} class="remove_btn">Remove</button></td>
              </tr>
              `;
      }
      tableBody.innerHTML = eachTableRow;
      const deleteBookBtn = document.querySelectorAll('.remove_btn');
      this.removeBooks(deleteBookBtn);
    }
  }

  removeBooks(deleteBookBtn) {
    deleteBookBtn.forEach((elementBtn) => {
      elementBtn.addEventListener('click', () => {
        const index = elementBtn.getAttribute('id');
        this.storedBooks.splice(index, 1);
        localStorage.setItem('bookstored', JSON.stringify(this.storedBooks));
        this.displayBooks();
      });
    });
  }
};

export { BookActions };

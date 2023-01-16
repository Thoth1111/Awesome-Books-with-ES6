import { BookActions } from './modules/lib.js';
import { refresh } from './modules/clear.js';
import { DateTime } from './modules/luxon.js';

const title = document.querySelector('.title_input');
const author = document.querySelector('.author_input');
const form = document.querySelector('.book_form');
const clock = document.querySelector('.date_time');
const library = new BookActions();

window.addEventListener('load', () => {
  library.displayBooks();
  const now = DateTime.now().toLocaleString({
    weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit',
  });
  clock.innerHTML = `${now}`;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  library.addBookDetails();
  refresh(title, author);
});

const listNav = document.querySelector('.list_tab');
const addNav = document.querySelector('.add_tab');
const contactNav = document.querySelector('.contact_tab');
const list = document.querySelector('.tab_content_1');
const add = document.querySelector('.tab_content_2');
const contact = document.querySelector('.tab_content_3');

addNav.addEventListener('click', () => {
  list.classList.add('hide');
  add.classList.add('active');
  contact.classList.remove('active');
});

contactNav.addEventListener('click', () => {
  list.classList.add('hide');
  add.classList.remove('active');
  contact.classList.add('active');
});

listNav.addEventListener('click', () => {
  list.classList.remove('hide');
  add.classList.remove('active');
  contact.classList.remove('active');
});
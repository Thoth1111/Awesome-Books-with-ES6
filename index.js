import BookActions from './modules/lib.js';
import { DateTime } from './modules/luxon.js';
import { addTab, listTab, contactTab } from './modules/listeners.js';
import {
  form, clock, listNav, addNav, contactNav, title, author,
} from './modules/variables.js';

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
  title.value = '';
  author.value = '';
});

listNav.addEventListener('click', listTab);
addNav.addEventListener('click', addTab);
contactNav.addEventListener('click', contactTab);
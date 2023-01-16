const list = document.querySelector('.tab_content_1');
const add = document.querySelector('.tab_content_2');
const contact = document.querySelector('.tab_content_3');

const listTab = () => {
  list.classList.remove('hide');
  add.classList.remove('active');
  contact.classList.remove('active');
};

const addTab = () => {
  list.classList.add('hide');
  add.classList.add('active');
  contact.classList.remove('active');
};

const contactTab = () => {
  list.classList.add('hide');
  add.classList.remove('active');
  contact.classList.add('active');
};

export { listTab, addTab, contactTab };

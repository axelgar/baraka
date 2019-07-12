'use strict';

function main () {
  const hideBtns = document.querySelectorAll('.hide-btn');
  const showBtns = document.querySelectorAll('.show-btn');

  showBtns.forEach(showBtn => {
    showBtn.addEventListener('click', e => {
      const card = e.target.parentElement.parentElement.parentElement;
      card.classList.replace('card', 'hide');
      const form = card.previousElementSibling;
      form.classList.replace('hide', 'show');
    });
  });

  hideBtns.forEach(hideBtn => {
    hideBtn.addEventListener('click', e => {
      const card = e.target.parentElement.parentElement.parentElement;
      card.classList.replace('hide', 'card');
      const form = card.previousElementSibling;
      form.classList.replace('show', 'hide');
    });
  });

  const addBtn = document.querySelector('.add-new-btn');
  const newForm = document.querySelector('.add-new');

  addBtn.addEventListener('click', () => {
    newForm.classList.toggle('hide');
    newForm.classList.toggle('show');
    addBtn.classList.toggle('rotate');
  });
}

window.addEventListener('load', main);

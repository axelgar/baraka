'use strict';

// const card = document.getElementById('card-image');
const hideBtns = document.querySelectorAll('.hide-btn');
const showBtns = document.querySelectorAll('.show-btn');

showBtns.forEach(showBtn => {
  showBtn.addEventListener('click', e => {
    const card = e.target.parentElement.parentElement.parentElement;
    card.classList.replace('card', 'hide');
    const form = card.previousElementSibling;
    form.classList.replace('hide', 'show');
    console.log(form);
  });
});

hideBtns.forEach(hideBtn => {
  hideBtn.addEventListener('click', e => {
    const card = e.target.parentElement.parentElement.parentElement;
    card.classList.replace('hide', 'card');
    const form = card.previousElementSibling;
    form.classList.replace('show', 'hide');
    console.log(form);
  });
});

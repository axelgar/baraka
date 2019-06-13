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

const addBtn = document.querySelector('.add-new-btn');
const newForm = document.querySelector('.add-new');

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const carousel = document.querySelector('.carousel');

if (arrowLeft && arrowRight && carousel) {
  arrowLeft.onclick = () => {
    if (carousel.scrollLeft === 0) {
      carousel.scrollLeft += 3000;
    }
    carousel.scrollLeft -= carousel.offsetWidth;
  };

  arrowRight.onclick = () => {
    if (carousel.scrollLeft >= (carousel.offsetWidth * 2)) {
      carousel.scrollLeft = 0;
    }
    carousel.scrollLeft += carousel.offsetWidth;
  };
}

addBtn.addEventListener('click', () => {
  newForm.classList.toggle('hide');
  newForm.classList.toggle('show');
  addBtn.classList.toggle('rotate');
});

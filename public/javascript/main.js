'use strict';

// const card = document.getElementById('card-image');
const cardsArray = document.querySelectorAll('.card');

// ni puta idea de como hacerlo dinamico

cardsArray.forEach((card, index) => {
  const hideBtn = document.getElementById(`hide-btn-${index}`);
  const showBtn = document.getElementById(`show-btn-${index}`);
  const form = document.getElementById(`form-${index}`);

  showBtn.addEventListener('click', () => {
    form.classList.replace('hide', 'show');
    card.classList.replace('card', 'hide');
  });

  hideBtn.addEventListener('click', () => {
    form.classList.replace('show', 'hide');
    card.classList.replace('hide', 'card');
  });
});

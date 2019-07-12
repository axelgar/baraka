'use strict';

function main () {
  const arrowLeft = document.querySelectorAll('.arrow-left');
  const arrowRight = document.querySelectorAll('.arrow-right');
  const carousel = document.querySelectorAll('.carousel');

  arrowLeft.forEach((arrow, index) => {
    arrow.addEventListener('click', (event) => {
      if (carousel[index].scrollLeft === 0) {
        carousel[index].scrollLeft += 3000;
      }
      carousel[index].scrollLeft -= carousel[index].offsetWidth;
    });
  });

  arrowRight.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
      if (carousel[index].scrollLeft >= (carousel[index].offsetWidth * 2)) {
        carousel[index].scrollLeft = 0;
      }
      carousel[index].scrollLeft += carousel[index].offsetWidth;
    });
  });
}

window.addEventListener('load', main);

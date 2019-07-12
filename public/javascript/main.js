'use strict';

function main () {
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');
  const carousel = document.querySelector('.carousel');

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

window.addEventListener('load', main);

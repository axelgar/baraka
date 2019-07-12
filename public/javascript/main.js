'use strict';

function main () {
  const arrowLeft = document.querySelectorAll('.arrow-left');
  const arrowRight = document.querySelectorAll('.arrow-right');
  const carousel = document.querySelectorAll('.carousel');

  arrowLeft.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
      var numberOfPictures = carousel[index].children[0].children.length - 1;

      console.log(numberOfPictures);
      if (carousel[index].scrollLeft === 0) {
        carousel[index].scrollLeft += carousel[index].offsetWidth * numberOfPictures;
      }
      carousel[index].scrollLeft -= carousel[index].offsetWidth;
    });
  });

  arrowRight.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
      var numberOfPictures = carousel[index].children[0].children.length - 1;
      if (carousel[index].scrollLeft >= (carousel[index].offsetWidth * numberOfPictures)) {
        carousel[index].scrollLeft = 0;
      } else {
        carousel[index].scrollLeft += carousel[index].offsetWidth;
      }
    });
  });
}

window.addEventListener('load', main);

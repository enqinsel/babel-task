const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
    if (index >= slideElements.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slideElements.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});



const slide = document.querySelector('.slide.slide-1');

const button = slide.querySelector('button');

button.addEventListener('mouseenter', function() {
  const span = this.querySelector('span');
  if (span) {
    span.classList.add('button-text');
  }
});

button.addEventListener('mouseleave', function() {
  const span = this.querySelector('span');
  if (span) {
    span.classList.remove('button-text');
  }
});






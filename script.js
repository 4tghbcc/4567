javascriptconst images = [
  'images/image1.jpg',
  'images/image2.jpg',
  'images/image3.jpg',
  'images/image4.jpg',
  'images/image5.jpg',
];

let currentIndex = 0;

const imgEl = document.querySelector('.slider__img');
const prevBtn = document.querySelector('.slider__btn--prev');
const nextBtn = document.querySelector('.slider__btn--next');
const counterEl = document.querySelector('.slider__counter');

function updateSlider() {
  imgEl.src = images[currentIndex];
  counterEl.textContent = \Изображение ${currentIndex + 1} из ${images.length}\;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
});

// Инициализируем первый просмотр
updateSlider();

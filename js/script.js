document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    let currentSlideIndex = 0;
  
    function nextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      sliderContainer.scrollLeft = currentSlideIndex * sliderContainer.offsetWidth;
    }
  
    // Инициализация слайдера
    setInterval(function () {
      nextSlide();
    }, 5000);
  });
  
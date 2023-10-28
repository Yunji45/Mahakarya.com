/**
   * Intro Carousel
   */
var swiper = new Swiper('.intro-carousel', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  autoplay: {
      delay: 10000, // Set the desired autoplay delay (e.g., 5 seconds)
  },
})


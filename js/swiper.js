var swiper = new Swiper(".aboutUs__supporters-swiper", {
  slidesPerView: 6,
  spaceBetween: 96,
  speed: 500,
  loop: true,
  autoplay: {
    delay: 1000,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    420: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 66
    },
  
  }
});
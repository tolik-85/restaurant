const swiperBlog = new Swiper('.testimonials-slider', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 4,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
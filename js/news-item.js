const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 3,
    loop: true,
    spaceBetween: 40,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
});
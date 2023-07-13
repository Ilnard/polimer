const benefits = document.querySelectorAll('.benefit')
benefits.forEach(benefit => {
    const benefitBtn = benefit.querySelector('.benefit__icon')
    benefitBtn.addEventListener('click', () => {
        benefit.classList.toggle('benefit_active')
    })
})

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    }
  });
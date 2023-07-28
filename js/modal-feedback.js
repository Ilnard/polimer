const modalOpenBtns = document.querySelectorAll('.modal-open-btn')
const modal = document.querySelector('.modal-feedback__wrapper')
const modalCloseBtn = document.querySelector('.modal-feedback__close-icon')

modalOpenBtns.forEach(modalOpenBtn => {
    modalOpenBtn.addEventListener('click', () => {
        modal.classList.add('modal-feedback__wrapper_active')
    })
})
modalCloseBtn.addEventListener('click', () => {
    modal.classList.remove('modal-feedback__wrapper_active')
})
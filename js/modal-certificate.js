const certificates = document.querySelectorAll('.certificates-swiper-slide')
const modalCertificate = document.querySelector('.modal-certificate__wrapper')
const modalCertificatePicture = modalCertificate.querySelector('.modal-certificate__certificate')
const modalCertificateClose = modalCertificate.querySelector('.modal-certificate__close-icon')


certificates.forEach(certificate => {
    certificate.addEventListener('click', () => {
        const src = certificate.querySelector('img').src
        modalCertificate.classList.add('modal-certificate__wrapper_active')
        modalCertificatePicture.src = src
    })
})
modalCertificateClose.addEventListener('click', () => {
    modalCertificate.classList.remove('modal-certificate__wrapper_active')
})
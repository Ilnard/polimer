const cardsBlocks = document.querySelectorAll('.cards')

cardsBlocks.forEach(cardsBlock => {
    const cardsBlockBlock = cardsBlock.querySelector('.cards-block')
    const dropdownBtn = cardsBlock.querySelector('.cards__dropdown-icon')

    const cardsBlockBlockHeight = cardsBlockBlock.offsetHeight
    cardsBlockBlock.style.maxHeight = cardsBlockBlockHeight + 'px'

    dropdownBtn.addEventListener('click', () => {
        cardsBlock.classList.toggle('cards_closed')
    })
})
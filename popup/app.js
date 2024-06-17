const btnClose = document.querySelector('.popup__close')
const popupLinks = document.querySelectorAll('.popup__link')
const popup = document.querySelector('.popup')
const popupContent = document.querySelector('.popup__content')

popupLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()

    popup.classList.add('active')
  })
})

popupContent.addEventListener('click', (e) => {
  e.stopPropagation()
})
btnClose.addEventListener('click', (e) => {
  e.preventDefault()
  popup.classList.remove('active')
})
window.addEventListener('keydown', (e) => {
  if (e.keyCode === 27) {
    popup.classList.remove('active')
  }
})
window.addEventListener('click', ({ target }) => {
  const popup = target.closest('.popup')
  const clickedOnClosedPopup = popup && !popup.classList.contains('active')

  popup.classList.remove('active')

  if (clickedOnClosedPopup) popup.classList.add('active')
})

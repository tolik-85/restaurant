const burgerBtn = document.querySelector('.burger')
const closeMenuBtn = document.querySelector('.modal-nav-close')
const modalMenu = document.querySelector('.modal')

closeMenuBtn.addEventListener('click', toggleModal)
burgerBtn.addEventListener('click', toggleModal)

function toggleModal() {
  // document.body.classList.toggle('body--overflow-hidden')
  modalMenu.classList.toggle('active')
}

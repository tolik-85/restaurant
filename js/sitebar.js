const elSitebarOpenerBtn = document.querySelector('.sitebar_opener')
const elSidebar = document.querySelector('.sidebar')
const elOverlayModal = document.querySelector('.overlay-modal')

elSitebarOpenerBtn.addEventListener('click', toggleSiteBar)
elOverlayModal.addEventListener('click', toggleSiteBar)

function toggleSiteBar() {
  // document.body.classList.toggle('body--overflow-hidden')
  elSidebar.classList.toggle('active')
  elOverlayModal.classList.toggle('active')
}

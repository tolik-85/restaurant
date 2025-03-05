const elTabsOpener = document.querySelector('.tabs-opener')
const elPortfolioTabs = document.querySelector('.portfolio-tabs')
const elsPortfolioTab = document.querySelectorAll('.portfolio-tab')

elTabsOpener.addEventListener('click', openTabs)

function openTabs() {
  elPortfolioTabs.classList.toggle('active')
  if (elPortfolioTabs.style.maxHeight) {
    elPortfolioTabs.style.maxHeight = null
  } else {
    elPortfolioTabs.style.maxHeight = elPortfolioTabs.scrollHeight + 'px'
  }
}

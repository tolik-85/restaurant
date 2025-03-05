const elOneColumnBtn = document.querySelector('.one-column')
const elTwoColumsBtn = document.querySelector('.two-colums')
const elPostsWrapper = document.querySelector('.posts-wrapper')
const elLoadingBtn = document.querySelector('.btn--white') //
const elPagination = document.querySelector('.posts-pagination') //
const elSpanBredcrumbs = document.querySelector('.active-page')
const elHeroTitle = document.querySelector('.hero-title')

elOneColumnBtn.addEventListener('click', function () {
  elPostsWrapper.classList.add('posts-wrapper--one-column')
  elLoadingBtn.style.display = 'block' //
  elPagination.style.display = 'none' //
  elSpanBredcrumbs.textContent = ' Blog List One Column'
  elHeroTitle.textContent = 'Blog List - One Column' //
})
elTwoColumsBtn.addEventListener('click', function () {
  elPostsWrapper.classList.remove('posts-wrapper--one-column')
  elLoadingBtn.style.display = 'none' //
  elPagination.style.display = 'block' //
  elSpanBredcrumbs.textContent = 'Blog Two Columns'
  elHeroTitle.textContent = 'Blogs - Two Columns' //
})

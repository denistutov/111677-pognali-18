var pageHeader = document.querySelector('.page-header');
var toggleHeaderMenu = document.querySelector('.page-header__toggle');
var headerMenu = document.querySelector('.page-header__nav');

pageHeader.classList.add('page-header--js');

toggleHeaderMenu.addEventListener('click', function (evt) {
  evt.preventDefault();
  pageHeader.classList.toggle('page-header--menu-open');
  headerMenu.classList.toggle('page-header__nav--is-open');
  toggleHeaderMenu.classList.toggle('page-header__toggle--is-open');
});

window.addEventListener('scroll', function (evt) {
  if (headerMenu.classList.contains('page-header__nav--is-open')) {
    evt.preventDefault();
  } else {
    if (window.pageYOffset > 300) {
      pageHeader.classList.add('page-header--scroll');
    } else {
      pageHeader.classList.remove('page-header--scroll');
    }
  }
});

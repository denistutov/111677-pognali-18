var pageHeader = document.querySelector('.page-header');
var toggleHeaderMenu = document.querySelector('.page-header__toggle');
var headerMenu = document.querySelector('.page-header__nav');
var headerLogo = document.querySelector('.page-header__logo');

pageHeader.classList.add('page-header--js');

toggleHeaderMenu.addEventListener('click', function (evt) {
  evt.preventDefault();
  pageHeader.classList.toggle('page-header--menu-open');
  headerMenu.classList.toggle('page-header__nav--is-open');
  toggleHeaderMenu.classList.toggle('page-header__toggle--is-open');

  if (pageHeader.classList.contains('page-header--scroll')) {
    evt.preventDefault();
  } else {
    headerLogo.classList.toggle('logo--blue');
  }
});

window.addEventListener('scroll', function (evt) {
  if (headerMenu.classList.contains('page-header__nav--is-open')) {
    evt.preventDefault();
  } else {
    if (window.pageYOffset > 300) {
      pageHeader.classList.add('page-header--scroll');
      headerLogo.classList.add('logo--blue');
    } else {
      pageHeader.classList.remove('page-header--scroll');
      headerLogo.classList.remove('logo--blue');
    }
  }
});

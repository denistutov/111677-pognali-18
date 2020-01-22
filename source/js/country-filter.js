var countryFilter = document.querySelector('.country-filter');
var closeCountryFilter = countryFilter.querySelector('.country-popup__button');
var countryFilterPopup = countryFilter.querySelector('.country-filter__popup');
var countryFilterToggle = countryFilter.querySelectorAll('.country-filter__button');

countryFilter.classList.add('country-filter--js');

countryFilterToggle.forEach(button => button.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (evt) {
    countryFilterPopup.classList.toggle('country-filter__popup--is-close');
    countryFilter.classList.toggle('country-filter--filter-close');
    return button;
  }
}));


closeCountryFilter.addEventListener('click', function (evt) {
  evt.preventDefault();
  countryFilterPopup.classList.toggle('country-filter__popup--is-close');
});

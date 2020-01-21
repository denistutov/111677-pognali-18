var addNewCountry = document.querySelector('.country-select--add-new');
var openCountrySelect = document.querySelector('.country-select-form');
var countrySelectButton = addNewCountry.querySelector('.country-select__drop-list');
var closeCountrySelect = openCountrySelect.querySelector('.button--popup-close');

countrySelectButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  openCountrySelect.classList.add('modal-popup--is-open');
});

closeCountrySelect.addEventListener('click', function (evt) {
  evt.preventDefault();
  openCountrySelect.classList.remove('modal-popup--is-open');
});

var openRatesBusiness = document.querySelector('.rates__business');
var modalBusinessForm = document.querySelector('.business');
var businessCloseButton = document.querySelector('.business__close');

openRatesBusiness.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalBusinessForm.classList.add('modal-popup--is-open');
});

businessCloseButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalBusinessForm.classList.remove('modal-popup--is-open');
});

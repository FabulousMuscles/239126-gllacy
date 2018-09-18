/*Попап*/
var popup = document.querySelector('.modal-content-wrapper');
var button = document.querySelector('.js-button');
var popupClose = document.querySelector('.modal-content-close');

/*Слайдер*/


/*функции для попапа*/
buttonClickHandler = function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-hidden');
  document.addEventListener('keydown', popupCloseKeydownHandler);
}

popupCloseClickHandler = function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-hidden');
    document.removeEventListener('keydown', popupCloseKeydownHandler);
}

popupCloseKeydownHandler = function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.add('modal-hidden');
  }
}

/*события для попапа*/
button.addEventListener('click', buttonClickHandler);
popupClose.addEventListener('click', popupCloseClickHandler);

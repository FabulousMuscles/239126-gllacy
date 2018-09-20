'use strict';
/*Попап*/
var popup = document.querySelector('.modal-content-wrapper');
var button = document.querySelector('.js-button');
var popupClose = document.querySelector('.modal-content-close');
var popupItem = popup.querySelector('.modal-content');
var form = popup.querySelector('form');
var nameField = form.querySelector('#name-field');
var emailField = form.querySelector('#email-to-answer-field');

/*Слайдер*/
var controls = document.querySelector('.controls');
var body = document.querySelector('body');
var sliderWrapper = document.querySelector('.slider-wrapper');
var slides = {
  jsBtnSlideOne: 'slide-1',
  jsBtnSlideTwo: 'slide-2',
  jsBtnSlideThree: 'slide-3'
}

/*функции для слайдера*/
var controlsClickHandler = function (evt) {
  var activeSlide = sliderWrapper.querySelector('.active-slide');
  var defaultBodyClass = body.classList[0];
  var target = evt.target;
  var checkedButton = controls.querySelector('.control-btn-checked');
  if (target.classList.contains('control-btn') & !target.classList.contains('control-btn-checked')) {
    checkedButton.classList.remove('control-btn-checked');
    target.classList.add('control-btn-checked');
    checkedButton = target;

    var value = checkedButton.classList[1];
    body.classList.remove(defaultBodyClass);
    body.classList.add('background-color-' + slides[value]);
    var currentSlide = sliderWrapper.querySelector('.' + slides[value]);
    activeSlide.classList.remove('active-slide');
    var activeSlide = currentSlide.classList.add('active-slide');
  }
}

/*функции для попапа*/
var buttonClickHandler = function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  popupItem.classList.add('animation-popup');
  document.addEventListener('keydown', popupCloseKeydownHandler);
};

var popupCloseClickHandler = function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
    popupItem.classList.remove('animation-popup');
    popupItem.classList.remove('animation-error');
    document.removeEventListener('keydown', popupCloseKeydownHandler);
};

var popupCloseKeydownHandler = function (evt) {
  if (evt.keyCode === 27) {
    popupCloseClickHandler(evt);
  }
};

var formSubmitErrorHandler = function (evt) {
  if (!nameField.value || !emailField.value) {
    evt.preventDefault();
    popupItem.classList.add('animation-error');
  }
};

/*события для попапа*/
button.addEventListener('click', buttonClickHandler);
popupClose.addEventListener('click', popupCloseClickHandler);
form.addEventListener('submit', formSubmitErrorHandler);

/*события для слайдера*/
controls.addEventListener('click', controlsClickHandler);

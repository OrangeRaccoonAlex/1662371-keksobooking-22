import {createOffer} from './api.js';

const adForm = document.querySelector('.ad-form');
const adFormFieldset = adForm.querySelectorAll('fieldset');
const address = adForm.querySelector('#address')
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const main = document.querySelector('main');

function activate(){
  adForm.classList.remove('ad-form--disabled');

  adFormFieldset.forEach((el) => {
    el.removeAttribute('disabled');
  })

  adForm.addEventListener('submit', submit);
  adForm.addEventListener('reset', reset);
}

function deactivate(){
  // TODO возможно, нужно очищать форму объявления
  adForm.classList.add('ad-form--disabled');

  adFormFieldset.forEach((el) => {
    el.setAttribute('disabled', 'true');
  });

  adForm.removeEventListener('submit', submit);
  adForm.removeEventListener('reset', reset);
}

function setAddress(x, y){
  address.value = `${x}, ${y}`;
}

// 2.6
// TODO Сообщение должно исчезать по нажатию на клавишу Esc и по клику на произвольную область экрана.
function showSuccessMessage(){
  let successMessageTemplate = successMessage.cloneNode(true);
  main.appendChild(successMessageTemplate);
}

// 2.7
// TODO Сообщение должно исчезать после нажатия на кнопку .error__button, по нажатию на клавишу Esc
//  и по клику на произвольную область экрана. В таком случае вся введённая пользователем информация сохраняется,
//  чтобы у него была возможность отправить форму повторно.
function showErrorMessage(){
  let errorMessageTemplate = errorMessage.cloneNode(true);
  main.appendChild(errorMessageTemplate);
}

function submit(evt){
  evt.preventDefault();
  const offer = new FormData(evt.target);
  createOffer(offer, showSuccessMessage, showErrorMessage);
}

// 2.5
// TODO починить пропадающий адрес
// TODO переводить метку в начальное положение
function reset(){
  setTimeout(() => {
    setAddress(35.500, 139.500);
  }, 500)
}

export { activate, deactivate, setAddress };

/*
* 1. при упешной отправке или при клике на "очистить" сбрасывать значения в форме
* 2. это должна быть функция, которая будет очищать поля формы и вызываться при onSuccess и при клике на "очистить"
* 3. мне нужно два модуля: отправка данны на сервер и модуль, обработки клика
* 4. модуль отправки на сервер есть, осталось написать модуль обработки клика
*/

// TODO Цена за ночь: Максимальное значение — 1000000.

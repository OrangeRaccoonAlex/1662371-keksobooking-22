// import {MAIN_PIN_COORDINATES} from './constants.js';
import {resetMainPin} from './leafletMapSettings.js';

const adForm = document.querySelector('.ad-form');
const adFormFieldset = adForm.querySelectorAll('fieldset');
const resetFormButton = adForm.querySelector('.ad-form__reset')

function activateForm(){
  adForm.classList.remove('ad-form--disabled');

  adFormFieldset.forEach((el) => {
    el.removeAttribute('disabled');
  });
}

function deactivateForm(){
  adForm.classList.add('ad-form--disabled');

  adFormFieldset.forEach((el) => {
    el.setAttribute('disabled', 'true');
  });
}

function setAddress(x, y){
  let address = adForm.querySelector('#address')
  address.value = `${x}, ${y}`;
}

function resetForm(evt) {
  evt.preventDefault();
  adForm.reset();
  // setAddress(MAIN_PIN_COORDINATES.lat, MAIN_PIN_COORDINATES.lng);
}

resetFormButton.addEventListener('click', resetForm);

adForm.addEventListener('submit', resetMainPin);
adForm.addEventListener('reset', resetMainPin);

export { activateForm, deactivateForm, setAddress, resetForm };

/*
* 1. при упешной отправке или при клике на "очистить" сбрасывать значения в форме
* 2. это должна быть функция, которая будет очищать поля формы и вызываться при onSuccess и при клике на "очистить"
* 3. мне нужно два модуля: отправка данны на сервер и модуль, обработки клика
* 4. модуль отправки на сервер есть, осталось написать модуль обработки клика
*/

/*
* 1. как заполнить координаты при сбрасывании формы?
*  1.1 я могу сбрасывать все поля и потом снова записывать в поел адреса координаты - не сработало
*  1.2 я могу указать для очистики все поля, кроме этого
*  1.3 я могу при сбрасывании в модуле карты снова устанавливать значения
*
* */

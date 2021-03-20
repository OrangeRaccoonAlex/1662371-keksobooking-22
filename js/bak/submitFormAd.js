import { sendData } from './workWithServer.js';

const adForm = document.querySelector('.ad-form');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');

function showSuccessMessage(){
  let successMessageTemplate = successMessage.cloneNode(true);
  return document.querySelector('main').appendChild(successMessageTemplate);
}

function showErrorMessage(){
  let errorMessageTemplate = errorMessage.cloneNode(true);
  return document.querySelector('main').appendChild(errorMessageTemplate);
}

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  let formData = new FormData(evt.target);
  sendData(formData, showSuccessMessage, showErrorMessage);
});

function hideMessage(){
  adForm.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      successMessage.style['display'] = 'none';
      errorMessage.style['display'] = 'none';
    }
  });
}

/*
* при клике на esc мои сообщения должны закрываться
* вот я показываю сообщение, далее должен начать работать слушатель (отдельная функция)
* сообщения показываются когда? когда отработал промис, значит функцию надо отправлять в промис
* как только кнопка была нажата, я прячу сообщения, например, через display: none
*
* */



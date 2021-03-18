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



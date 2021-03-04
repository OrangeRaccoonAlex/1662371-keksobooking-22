let adForm = document.querySelector('.ad-form');

function activateForm(){
  adForm.classList.remove('ad-form--disabled');

  let adFormFieldset = adForm.querySelectorAll('fieldset');
  adFormFieldset.forEach((el) => {
    el.setAttribute('disabled', 'false');
  });
}

function deactivateForm(){
  adForm.classList.add('ad-form--disabled');

  let adFormFieldset = adForm.querySelectorAll('fieldset');
  adFormFieldset.forEach((el) => {
    el.setAttribute('disabled', 'true');
  });
}

export { activateForm, deactivateForm };

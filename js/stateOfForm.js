let adForm = document.querySelector('.ad-form');
let adFormFieldset = adForm.querySelectorAll('fieldset');

function activateForm(){
  adForm.classList.remove('ad-form--disabled');

  adFormFieldset.forEach((el) => {
    el.setAttribute('disabled', 'false');
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

export { activateForm, deactivateForm, setAddress };

const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelects = mapFilters.querySelectorAll('select');
const mapFiltersFieldset = mapFilters.querySelectorAll('fieldset');

function activate(){
  mapFilters.classList.remove('map__filters--disabled');

  mapFiltersSelects.forEach((el) => {
    el.removeAttribute('disabled');
  });

  mapFiltersFieldset.forEach((el) => {
    el.removeAttribute('disabled');
  });
}

function deactivate(){
  // TODO возможно, нужно очищать форму фильтров

  mapFilters.classList.add('map__filters--disabled');

  mapFiltersSelects.forEach((el) => {
    el.setAttribute('disabled', 'true');
  });

  mapFiltersFieldset.forEach((el) => {
    el.setAttribute('disabled', 'true');
  });
}


export { activate, deactivate };

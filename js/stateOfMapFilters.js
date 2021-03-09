let mapFilters = document.querySelector('.map__filters');
let mapFiltersSelects = mapFilters.querySelectorAll('select');
let mapFiltersFieldset = mapFilters.querySelectorAll('fieldset');

function activateMapFilters(){
  mapFilters.classList.remove('map__filters--disabled');

  mapFiltersSelects.forEach((el) => {
    el.setAttribute('disabled', 'false');
  });

  mapFiltersFieldset.forEach((el) => {
    el.setAttribute('disabled', 'false');
  });
}

function deactivateMapFilters(){
  mapFilters.classList.add('map__filters--disabled');

  mapFiltersSelects.forEach((el) => {
    el.setAttribute('disabled', 'true');
  });

  mapFiltersFieldset.forEach((el) => {
    el.setAttribute('disabled', 'true');
  });
}


export { activateMapFilters, deactivateMapFilters };

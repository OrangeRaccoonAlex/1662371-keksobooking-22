let mapFilters = document.querySelector('.map__filters');

function activateMapFilters(){
  mapFilters.classList.remove('map__filters--disabled');

  let mapFiltersSelects = mapFilters.querySelectorAll('select');
  mapFiltersSelects.forEach((el) => {
    el.setAttribute('disabled', 'false');
  });

  let mapFiltersFieldset = mapFilters.querySelectorAll('fieldset');
  mapFiltersFieldset.forEach((el) => {
    el.setAttribute('disabled', 'false');
  });
}

function deactivateMapFilters(){
  mapFilters.classList.add('map__filters--disabled');

  let mapFiltersSelects = mapFilters.querySelectorAll('select');
  mapFiltersSelects.forEach((el) => {
    el.setAttribute('disabled', 'true');
  });

  let mapFiltersFieldset = mapFilters.querySelectorAll('fieldset');
  mapFiltersFieldset.forEach((el) => {
    el.setAttribute('disabled', 'true');
  });
}


export { activateMapFilters, deactivateMapFilters };

import {getOffers} from './api.js';
import {ADS_AMOUNT} from './constants.js';

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

// ФИЛЬТРАЦИЯ

// 5.8. Объекты, расположенные неподалёку, можно фильтровать.
// слушает форму
mapFilters.addEventListener('chenge', startFiltering);

function startFiltering(){
  const form = new FormData;
  metaFilter(offer, form);
}

// функции-предикаты для сравнения данных с бека и тем, что выбрал пользователь
function filterType(offer, type){
  return offer.type === type;
}
function filterGuest(offer, guests){
  return offer.guests === guests;
}
function filterRooms(offer, rooms){
  return offer.rooms === rooms;
}
function filterPrice(offer, price){
  if (0 <= offer.price && offer.price <= 10000) return price;
  if (10000 <= offer.price && offer.price <= 50000) return price;
  if (50000 <= offer.price) return price;
}

function filterFeatures(offer, features){
  return offer.rooms.include(features);
}

// собирает все фильтры в однин единый фильтр
function metaFilter(offer, form) {
  return  filterType(offer, form.type)
          && filterGuest(offer, form.guests)
          && filterRooms(offer, form.rooms)
          && filterPrice(offer, form.price)
          && filterFeatures(offer, form.features);
}
// TODO надо как то найти координаты объекта, который прошел все проверки в metaFilter
function collectLocation(){
  // ...
  console.log('собирает координаты отфильтрованных объектов')
  // следит, что бы полученных локаций было не больше чем ADS_AMOUNT

  // 5.9. Как до изменения фильтров, так и при изменении фильтра, на карте должны показываться все подходящие варианты,
  // но не более 10 меток (не считая специальной), независимо от выбранного фильтра.
  locations.slice(0, ADS_AMOUNT);
}

// агрегирует в объекты данные, которые приходят извне
function getOffer(offers) {
  offers.filter((offer) => {
    return metaFilter(offer);
  })
}

getOffers(getOffer, () => {})

export { activate, deactivate };

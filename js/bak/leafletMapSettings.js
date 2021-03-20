/* global L:readonly */

// import { setAddress } from './stateOfForm.js';
import { activatePage } from './stateOfPage.js'
import { createCustomPopup } from './generatingPopupMarkup.js'
import  { getData } from './workWithServer.js'
import { MAIN_PIN_COORDINATES } from './constants.js'

const map = L.map('map-canvas')
  .on('load', () => {
    activatePage();
  })
  .setView({
    lat: 35.681700,
    lng: 139.753882,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  MAIN_PIN_COORDINATES,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

// setAddress(MAIN_PIN_COORDINATES.lat, MAIN_PIN_COORDINATES.lng);

// mainPinMarker.on('moveend', function() {
//   let x = Number(mainPinMarker.getLatLng().lat.toFixed(5));
//   let y = Number(mainPinMarker.getLatLng().lng.toFixed(5));
//   // setAddress(x, y);
// });

mainPinMarker.addTo(map);

function resetMainPin(){
  mainPinMarker.setLatLng(MAIN_PIN_COORDINATES);
}

// добавляю не основные метки

function renderPins(ads){
  ads.forEach((ad) => {
    const { lat, lng} = ad.location;
    const pinIcon = L.icon({
      iconUrl: '../img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
    const marker = L.marker(
      {lat, lng},
      {icon: pinIcon},
    );
    marker.addTo(map).bindPopup(createCustomPopup(ad));

  });
}

function renderPinsWithError(){
  // TODO красиво вывести сообщение об ошибке
  alert('Ой! Кажется, что-то пошло не так :( попробуйте перезагрузить страницу')
}

getData(renderPins, renderPinsWithError);

export { resetMainPin };






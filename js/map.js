/* global L:readonly */

import * as page from './page.js'
import { setAddress } from './ad-form.js'
import { MAIN_PIN_COORDINATES } from './constants.js'
import {createCustomPopup} from './generating-popup-markup.js';
import {getOffers} from './api.js';

let map;

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

// collectLocation(locations){
//  renderPins(locations);
// }

function renderPinsWithError(){
  // TODO красиво вывести сообщение об ошибке
  alert('Ой! Кажется, что-то пошло не так :( попробуйте перезагрузить страницу')
}

function activate(){
  map = L.map('map-canvas')
    .on('load', () => {
      page.activate();
      setAddress(MAIN_PIN_COORDINATES.lat, MAIN_PIN_COORDINATES.lng);
      getOffers(renderPins, renderPinsWithError);
    })
    .setView(MAIN_PIN_COORDINATES, 10)

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
  mainPinMarker.on('moveend', function() {
    let x = Number(mainPinMarker.getLatLng().lat.toFixed(5));
    let y = Number(mainPinMarker.getLatLng().lng.toFixed(5));
    setAddress(x, y);
  });
  mainPinMarker.addTo(map);
}


function deactivate(){
  page.deactivate();

  if(!map){
    return
  }
  map.remove();
}

export {activate, deactivate};

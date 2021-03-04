/* global L:readonly */
// import { createAd, createAds } from './utils.js';
// import { ADS_AMOUNT } from './constants.js'
// import { createPopupTemplate } from './generatingPopupMarkup'
// import { activatePage } from './stateOfPage.js'

const map = L.map('map-canvas')
  .on('load', () => {
    // activatePage();
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



// // добавляю основной пин
// const mainPinIcon = L.icon({
//   iconUrl: '../img/main-pin.svg',
//   iconSize: [52, 52],
//   iconAnchor: [26, 52],
// });
//
// const mainPinMarker = L.marker(
//   {
//     lat: 35.681700,
//     lng: 139.753882,
//   },
//   {
//     draggable: true,
//     icon: mainPinIcon,
//   },
// );
//
//
// let points = [];
//
// for(let i = 0; i < createAds(ADS_AMOUNT).length; i++) {
//   points.push(createAd().location);
//   console.log(points);
// }
//
// points.forEach(({lat, lng}) => {
//   const pinIcon = L.icon({
//     iconUrl: '../img/pin.svg',
//     iconSize: [40, 40],
//     iconAnchor: [20, 40],
//   });
//   const marker = L.marker(
//     { lat, lng },
//     { icon: pinIcon },
//   );
//
//   marker.addTo(map).bindPopup(createPopupTemplate);
// });
//
// mainPinMarker.addTo(map);


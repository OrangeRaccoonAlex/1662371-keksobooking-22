import { setAddress } from './stateOfForm.js';
/* global L:readonly */
import { activatePage } from './stateOfPage.js'

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

function addMainPin() {
  const mainPinIcon = L.icon({
    iconUrl: '/img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const mainPinMarker = L.marker(
    {
      lat: 35.681700,
      lng: 139.753882,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  setAddress(35.681700, 139.753882);

  mainPinMarker.on('moveend', function() {
    let x = Number(mainPinMarker.getLatLng().lat.toFixed(5));
    let y = Number(mainPinMarker.getLatLng().lng.toFixed(5));
    setAddress(x, y);
  });

  mainPinMarker.addTo(map);
}

addMainPin();

// добавляю основной пин
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
// //
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



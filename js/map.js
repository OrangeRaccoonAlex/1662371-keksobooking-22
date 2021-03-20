/* global L:readonly */
import * as page from './page.js'

let map;

function activate(){
  console.log('map activated');

  map = L.map('map-canvas')
    .on('load', () => {
      page.activate();
    })
    .setView({
      lat: 35.681700,
      lng: 139.753882,
    }, 10)


  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
}

function deactivate(){
  console.log('map deactivated');
  page.deactivate();

  if(!map){
    return
  }
  map.remove();
}

export {activate, deactivate};






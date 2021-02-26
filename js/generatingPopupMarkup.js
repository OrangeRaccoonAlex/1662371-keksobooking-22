import './utils.js';
import { createAd } from './utils.js';
import { typeOfHousing } from './dictionary.js'

let popupTitle = document.querySelector('.popup__title');
popupTitle.textContent = createAd().offer.title;

let popupAddress = document.querySelector('.popup__text--address');
popupAddress.textContent = createAd().offer.address;

let popupPrice = document.querySelector('.popup__text--price');
popupPrice.textContent = `${createAd().offer.price} ₽/ночь`;

let popupType = document.querySelector('.popup__type');
popupType.textContent = typeOfHousing[createAd().offer.type];

let popupCapacity = document.querySelector('.popup__text--capacity');
popupCapacity.textContent = `${createAd().offer.rooms} комнаты для ${createAd().offer.guests} гостей`

let popupTime = document.querySelector('.popup__text--time');
popupTime.textContent = `Заезд после ${createAd().offer.checkIn}, выезд до${createAd().offer.checkOut}`

let popupFeatures = document.querySelector('.popup__features');
popupFeatures.textContent = createAd().offer.features;

let popupDescription = document.querySelector('.popup__description');
popupDescription.textContent = createAd().offer.description;

let popupPhotos = document.querySelector('.popup__photos');
let popupPhoto = document.querySelector('.popup__photo');
for (let i = 0; i < createAd().offer.photos.length; i++) {
  let photoBox = popupPhotos.appendChild(popupPhoto.cloneNode(true));
  popupPhoto.src = createAd().offer.photos[i];
  photoBox.src = createAd().offer.photos[i];
}

let popupAvatar = document.querySelector('.popup__avatar');
popupAvatar.src = createAd().author.avatar;


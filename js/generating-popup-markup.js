import { typeOfHousing, typeOhFeatures } from './dictionary.js'

const popupTemplate = document.querySelector('#card').content.querySelector('.popup');

function fillPopupTemplate(data){
  const popup = popupTemplate.cloneNode(true);

  if (data.offer.title) {
    let popupTitle = popup.querySelector('.popup__title');
    popupTitle.textContent = data.offer.title;
  }

  if (data.offer.address) {
    let popupAddress = popup.querySelector('.popup__text--address');
    popupAddress.textContent = data.offer.address;
  }

  if (data.offer.price) {
    let popupPrice = popup.querySelector('.popup__text--price');
    popupPrice.textContent = `${data.offer.price} ₽/ночь`;
  }

  if (data.offer.type) {
    let popupType = popup.querySelector('.popup__type');
    popupType.textContent = typeOfHousing[data.offer.type];
  }

  if (data.offer.rooms && data.offer.guests) {
    let popupCapacity = popup.querySelector('.popup__text--capacity');
    popupCapacity.textContent = `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`
  }

  if (data.offer.checkIn && data.offer.checkOut) {
    let popupTime = popup.querySelector('.popup__text--time');
    popupTime.textContent = `Заезд после ${data.offer.checkIn}, выезд до${data.offer.checkOut}`
  }

  if (data.offer.features) {
    let popupFeatures = popup.querySelector('.popup__features');
    let featuresArr = data.offer.features;
    let features = [];
    featuresArr.forEach((item) => {
      features.push(typeOhFeatures[item]);
      return features;
    })
    popupFeatures.textContent = features;
  }

  if (data.offer.description) {
    let popupDescription = popup.querySelector('.popup__description');
    popupDescription.textContent = data.offer.description;
  }

  if(data.offer.photos) {
    let popupPhotos = popup.querySelector('.popup__photos');
    let popupPhoto = popupPhotos.querySelector('.popup__photo');

    for (let i = 0; i < data.offer.photos.length; i++) {
      if (data.offer.photos[i]) {
        let popupTemplate = popupPhoto.cloneNode(true);
        popupTemplate.src = data.offer.photos[i];
        popupPhotos.appendChild(popupTemplate);
      }
    }

    popupPhoto.remove();
  }
  if (data.author.avatar) {
    let popupAvatar = popup.querySelector('.popup__avatar');
    popupAvatar.src = data.author.avatar;
  }

  return popup;
}

function createCustomPopup(point){
  return fillPopupTemplate(point);
}

export { createCustomPopup }



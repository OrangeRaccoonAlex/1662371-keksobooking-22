function getOffers(onSuccess, onError) {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) =>{
      onSuccess(data);
    })
    .catch((error) => {
      onError(error);
    });
}

function createOffer(offer, onSuccess, onError){
  fetch('https://22.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body: offer,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => {
      onError(error);
    });
}

export {getOffers, createOffer}

const getData = (onSuccess, onError) => {
  return fetch('https://22.javascript.pages.academy/keksobooking/data')
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
};

const sendData = (data, onSuccess, onError) => {
  return fetch('https://22.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body: data,
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

export {getData, sendData};

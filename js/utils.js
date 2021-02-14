import { ADS_AMOUNT, TITLES, DESCRIPTIONS, TYPES, CHECKIN_AND_CHECKOUT_TIMES, FEATURES, PHOTOS } from './constants.js'

// функция для получения рандомного целого числа в пределах от min до max
function getRandomInt(min, max) {
  if (min < 0 || max < 0) {
    alert('Диапазон задан не верно')
  } else if (max < min) {
    alert('Максимальное значение не должно быть меньше минимального')
  } else {
    const floatNumber = Math.random() * (max - min + 1) + min;
    const intNumber = Math.floor(floatNumber);
    return intNumber;
  }
}

// функция для получения рандомного числа c плавающей запятой в пределах от min до max и кол-вом знаков после запятой
function getRandomFloat(min, max, fractionDigits) {
  if (min < 0 || max < 0) {
    alert('Диапазон задан не верно')
  } else if (max < min) {
    alert('Максимальное значение не должно быть меньше минимального')
  } else {
    const power = Math.pow(10, fractionDigits);
    let floatNumber = Math.random() * (max - min + 1) + min;
    floatNumber = Math.floor(floatNumber * power) / power;
    return floatNumber;
  }
}

// функция для получения рандомного значения из массива
function getRandomArrayElement(arr) {
  return arr[getRandomInt(0, arr.length - 1)];
}

// функция для создания и заполнения массива рандомной длины
function getRandomArray(length, arr) {
  return Array.from({ length }, () => getRandomArrayElement(arr));
}

// перемешивает массив
function shuffle(arr) {
  let currentIndex = arr.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  return arr;
}

// функция для создания массива случайной длинный без повторяющихся элементов
function getRandomArrayNoRep(arr) {
  let arrLength = getRandomInt(1, arr.length);
  let newArr = shuffle(arr).slice(getRandomInt(1, arr.length), arrLength.length);

  return newArr;
}

// функция-конструктор, заполняет объект рандомными данными
function createAd() {
  const location = {
    x: getRandomFloat(35.65000, 35.70000, 5),
    y: getRandomFloat(139.70000, 139.80000, 5),
  };

  return {
    author: { avatar: `img/avatars/user0${getRandomInt(1, 8)}.png` },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${location.x}, ${location.y}`,
      price: getRandomInt(10000, 20000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInt(1, 4),
      guests: getRandomInt(1, 6),
      checkIn: getRandomArrayElement(CHECKIN_AND_CHECKOUT_TIMES),
      checkOut: getRandomArrayElement(CHECKIN_AND_CHECKOUT_TIMES),
      features: getRandomArrayNoRep(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArray(getRandomInt(1, 10), PHOTOS),
    },
    location,
  };
}

// функция-размноживатель, создает нужное количество объявлений
function createAds(length) {
  // return new Array(length).fill(null).map(createAd);
  // return new Array(length).fill(null).map(() => createAd());
  return Array.from({ length }, createAd);
}

getRandomFloat(0, 20, 3);
getRandomInt(0, 20);
createAds(ADS_AMOUNT);


// Функция для генерации положительного числа в т.ч. с плавающей запятой в заданном диапозоне

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

getRandomInt(0, 20);

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
getRandomFloat(0, 20, 3);


// Функция для генерации временных данных

const AUTOR = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
]

const TITLE = [
  'Сдается уютная квартирка недалеко от метро',
  'Сдам квартиру. Есть все условия для комфортного проживания',
  'Лучшая квартира на районе!',
  'Уютная квартира в центре города',
  'Сдается квартира посуточно',
  'Уютный причал для уставшего путника',
]

const address = [
  // строка — адрес предложения.
  // Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}
]
const price = [
// число — стоимость. Любое положительное число.
]

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
]
const rooms = [
  // число — количество комнат. Любое положительное число.
]

const guests = [
  // число — количество гостей, которое можно разместить. Любое положительное число.
]

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
]

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
]

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
]

const DESCRIPTION = [
  'Просторная квартира в туристическом районе, недалеко от метро, есть все необходимое для комфортного отдыха',
  'Сдается посуточно квартира, со всеми условиями. Отличный вид с балкона',
  'Лучше жилья вы не найдете! мы вам гарантируем!' +
  'Японское гостеприимство в сочетании с европейским интерьером не оставят вас равнодушным! Вам позавидует сам Будда!',
  'Лучшее предложение недалеко от Акихабары! Рядом находятся автобусные остановки, в квартире раздельный санузел,' +
  'имеется комфортабельная кухня',
]

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]

const location = [
  // объект — местоположение в виде географических координат. Состоит из двух полей:
  // x, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000
  //
  // y, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000
]


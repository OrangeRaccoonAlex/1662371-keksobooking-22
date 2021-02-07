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


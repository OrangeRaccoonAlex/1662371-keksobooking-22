// Функция для генерации положительного числа в т.ч. с плавающей запятой в заданном диапозоне

function getRandomInt(min, max, diapason){
  if (min < 0 || max < 0) {
    alert('диапазон задан не верно')
  } else if (max < min) {
    alert('Максимальное значение не должно быть меньше минимального')
  } else {
    let wholeNumber = Math.random() * (max - min + 1) + min;
    // возвращаю число с заданным количеством знаков после запятой
    return Math.floor(wholeNumber * diapason) / diapason;
  }
}
getRandomInt(0, 20, 100);

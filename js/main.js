function getRandomInt(min, max){
  let num =  Math.random() * (max - min) + min;
  return Number(num.toFixed(1));
};
getRandomInt(0, 20);

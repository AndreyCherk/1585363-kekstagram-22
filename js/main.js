// Взял с https://learn.javascript.ru/task/random-int-min-max
const getRandomInteger = function(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert(getRandomInteger(1, 10));

const checkingStringlength = function(str, max) {
  if (str.length <= max)  {
    return true;
  }

  return false;
}

alert(checkingStringlength);

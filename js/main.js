// Взял с https://learn.javascript.ru/task/random-int-min-max
const getRandomInteger = function(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const checkingStringlength = function(str, max) {
  return str.length <= max;
}

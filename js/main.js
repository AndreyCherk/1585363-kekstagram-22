// Взял с https://learn.javascript.ru/task/random-int-min-max
const getRandomInteger = function(min, max) {
  Math.floor(min + Math.random() * (max + 1 - min));
  return Math.floor(rand);
}

const checkingStringlength = function(str, max) {
        if (str.length <= max)  {
            return true;
        }
    }
    return false;
}

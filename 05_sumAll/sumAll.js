const sumAll = function(min, max) {
  let result = 0;
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  for (let i = min; i <= max; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;

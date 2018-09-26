module.exports = function getZerosCount(number, base) {
  let k = base;// your implementation
  let array = [];

  for (let i = 2; i <= base;) {
    if (k % i == 0) {
      if (isNaN(array[i])) {
        array[i] = 0;
      }
      array[i]++;
      k = k / i;
    }
    else {
      i++;
    }
  }
  
  let arrayTwo = [];
  for (let i = 0; i <= base; ++i) {
    if (!isNaN(array[i])) {
      let temp = i, res = 0;
      while (number / temp) {
        res = res + Math.floor(number / temp);
        temp = temp * i;
      }
      arrayTwo.push(Math.floor(res / array[i]));
    }
  }
  return arrayMin(arrayTwo);
  
  function arrayMin(array) {
  return array.reduce((a, b) => Math.min(a, b));
}
}

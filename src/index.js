module.exports = function getZerosCount(number, base) {
  let k = base;// your implementation
  let plains = [];

  for (let i = 2; i <= base;) {
    if (k % i == 0) {
      if (isNaN(plains[i])) {
        plains[i] = 0;
      }
      plains[i]++;
      k = k / i;
    }
    else {
      i++;
    }
  }
  let answer = [];
  for (let i = 0; i <= base; ++i) {
    if (!isNaN(
      plains[i])) {
      let temp = i, res = 0;
      while (number / temp) {
        res = res + Math.floor(number / temp);
        temp = temp * i;
      }
      answer.push(Math.floor(res /
        plains[i]));
    }
  }
  return arrayMin(answer);
}
function arrayMin(array) {
  return array.reduce((a, b) => Math.min(a, b));
}
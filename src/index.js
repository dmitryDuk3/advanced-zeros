module.exports = function getZerosCount(number, base) {
  let amount = 0;// your implementation
    let array = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127];
    for(let i = 0; i < array.length; i++) {
    while (base % array[i] === 0 && base / array[i] !== 1) {
      base = base / array[i];
    }
  }
  
   while(number > base) {
    amount += parseInt(number / base);
    number = number / base;
  } 
  
  return amount;
}
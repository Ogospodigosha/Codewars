function divisibleBy(numbers, divisor){
  let newNumbers =  numbers.filter(el => el % divisor === 0);
   return newNumbers;
}


console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
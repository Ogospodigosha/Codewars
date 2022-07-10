function squareSum(numbers){
    let array = numbers.map(item => item**2);
    let rezult=0;
    for (let elem of array) {
      rezult+=elem;
    }
    return rezult;
  }
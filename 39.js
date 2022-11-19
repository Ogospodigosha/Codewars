const removeSmallest = (numbers) => {
    let minimumNumbers = Math.min(...numbers)
    if ( minimumNumbers=== Infinity) {
        return numbers
    }
    let count = [];
    for (let i =0; i<numbers.length; i++) {
        if (numbers[i] === minimumNumbers) {
            count.push(i)
        }
    }
    let minimumIndex = Math.min(...count)
  return  numbers.filter((el, index) => index !== minimumIndex)
}



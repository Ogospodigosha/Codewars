let countPositivesSumNegatives = (input) => {
    let positive = 0;
    for (let elem of input) {
        let sum = elem > 0 ? elem : 0;
        positive+= sum;
    }
   console.log(positive)
    return positive;
}
console.log(countPositivesSumNegatives[1,2,3,-5,1,-7])
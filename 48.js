const solution = (number) => {
    if (number < 0) {
        return 0
    }
    let num = 0;
    for (let i=1; i< number; i++) {
        if (i % 3 === 0 || i %5 === 0 ) {
            num +=i
        }
    }
    return num

}
console.log(solution(10))
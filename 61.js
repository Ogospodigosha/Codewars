function duplicateCount(text) {
    let obj = {};
    let rezult = 0
    let arr = text.toLowerCase().split('')
    arr.forEach(el => {
        obj[el] ? obj[el] = obj[el] += 1 : obj[el] = 1
    })
    for (let prop in obj) {
        obj[prop] > 1 ? rezult += 1 : ""
    }
    return rezult
}

console.log(duplicateCount("aA11"))
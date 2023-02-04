
const runningSum = (arr) => {
    let i = 0;
    let j = 0;
    let resultArr = []
    while (i < arr.length) {
        if (i === 0) {
            resultArr.push(arr[j])
        } else {
            let prefix = arr[i]+arr[j] ;
            arr[j] = arr[j] + arr[i]
            resultArr.push(prefix)
        }
        i++
    }
    return resultArr
}

console.log(runningSum([1,1,1,1,1]))































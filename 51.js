const findOdd =(arr) =>{
    let rezult = 0
    for (let i=0; i< arr.length; i++) {
       let num =  arr.filter(el => el=== arr[i] )
        if (num.length % 2 !==0) {
            rezult = num[0]
        }
    }
    return rezult
}

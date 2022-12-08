const index = (array, n) =>{
    let newArr =  array.filter((el, index) => index === n)
    return newArr[0] ? newArr[0] ** n : -1
}


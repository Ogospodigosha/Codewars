function smallEnough(a, limit){
    let arr = a.map(el=> el<=limit).filter((el)=>el === false);
    return arr[0] === undefined
}




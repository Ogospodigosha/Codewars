let number=function(array){

    let newArray =   array.map((el, index)=>el = `${index+1}: ${el}`)
    return newArray
}
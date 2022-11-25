const order = (words) =>{
    let obj = {}
    let arr = []
    let rezult = []
    words = words.split(' ')
    for (let i=0; i<words.length; i++) {
       let letter = words[i].split('')
        for (let elem of letter) {
            if (!isNaN(+elem)) {
                obj[elem] =  words[i]
                arr.push(elem)
            }
        }

    }
    let newArr = arr.sort((a,b)=> a-b)
        for (let i=0; i<=newArr.length; i++) {
            if (obj[i] !== undefined)
            rezult.push(obj[i])
        }
    return rezult.join(' ')

}


const count =(string) =>{
    if (string === "") {
        return {}
    }
    let rezult = {}
    for (let i=0; i<string.length; i++) {
        if (rezult[string[i]] === undefined) {
            rezult[string[i]] = 1
        } else {
            rezult[string[i]] = rezult[string[i]] +1
        }


    }
    return rezult
}




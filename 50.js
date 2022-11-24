const encrypt = (text, n) => {
    let even = ""
    let odd = ""
    let rezult = ""
    for (let k = 1; k <= n; k++) {
        text.split('').map((el, index) => index % 2 === 0 ? even += el : odd += el)
        rezult = odd + even
        text = rezult
        odd =""
        even = ""
    }

    return rezult
}

 console.log(encrypt("012345", 2))


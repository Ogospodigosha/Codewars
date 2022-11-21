const wave = (str) =>{
   let arrStr = str.split('')
   let copyStr = str;
   let rezult = []
   for (let i=0; i< arrStr.length; i++) {
       arrStr[i] = copyStr[i].toUpperCase()
   arrStr[i] !== " " ?   rezult.push( arrStr.join('')) : ""

       arrStr[i] = str[i]
   }
   return rezult
}


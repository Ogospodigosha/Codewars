function sortMyString(S) {
   let firstLetter = S.split("").filter((el, i)=>{return i%2 === 0}).join('');
   let secondLetter = S.split("").filter((el, i)=>{return i%2 !== 0}).join('');
   return firstLetter + " " + secondLetter
}
console.log(sortMyString("YCOLUE'VREER"))




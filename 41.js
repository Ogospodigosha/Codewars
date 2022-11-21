
const stray = (numbers) =>{
    let sortNum = numbers.sort((a,b) => a -b)
    for (let i=0; i<sortNum.length; i++) {
      if  (sortNum[i] !== sortNum[i+1] && sortNum[i+1] === sortNum[i+2]){
           return sortNum[i]
      }
    }

}
console.log(stray([17, 17, 3, 17, 17, 17, 17]))
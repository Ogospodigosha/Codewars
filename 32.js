
function arrayPlusArray(arr1, arr2) {
  let  sumArr1 = arr1.reduce((prev,item)=> prev + item)
  let sumArr2 = arr2.reduce((prev,item)=> prev + item)
    return sumArr1 + sumArr2
}



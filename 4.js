// //You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
function mergeArrays(arr1, arr2) {
  let arr3 = [];
  for (let elem of arr1) {
    arr3.push(elem);
  }
  for (let elem2 of arr2) {
    arr3.push(elem2);
  }
  for (let n=0; n< arr3.length; n++){
    for (let i=0; i<arr3.length -1 -n; i++) {
        if (arr3[i] > arr3[i+1]) {
            const buff = arr3[i];
            arr3[i] = arr3[i+1];
            arr3[i+1] = buff;
        }

    }
  }
  for (let j=0; j<arr3.length; j++) {
    if(arr3[j]=== arr3[j-1]){
        arr3.splice(j,1);
        j--;
     }
  }
  return arr3;
}



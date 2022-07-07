//Write a function which calculates the average of the numbers in a given list.
function find_average(array) {
    let sum =0;
    if (array.length === 0) {
        return 0;
    }
    for (let i=0; i<array.length; i++) {
        sum+=array[i];
        
    }
    let rezult = sum / array.length ;
    return rezult;
}


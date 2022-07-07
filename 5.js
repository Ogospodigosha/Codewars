//Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
function nearestSq(n){
    if (Math.sqrt(n) % 1 === 0) {
        return n;
    } 
    let num = Math.pow(Math.round(Math.sqrt(n)), 2);
        

    return num;
}
console.log(nearestSq(111));
//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
function repeatStr (n, s) {
    let rezult ="";
    for (let i=1; i<=n; i++) {
        rezult+=s;
    }
    return rezult;
}
console.log(repeatStr(2, 'Gosha'));
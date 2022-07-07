//Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)
function sortMyString(S) {
   let rezult1="";
   let rezult2=" ";
   for (let i=0; i<S.length; i++) {
    if (i % 2 === 0) {
      rezult1+=S[i];
    } else {
      rezult2 += S[i];
      
    }
   } 
   let sum = rezult1 + rezult2;
   return sum;
}

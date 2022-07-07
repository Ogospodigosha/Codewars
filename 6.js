//Write a function that checks if a given string (case insensitive) is a palindrome.
function isPalindrome(x) {
    let str = x.toLowerCase();
    let str1 = str.split('');
    let rezult ="";
    for (let i=str1.length-1; i>=0; i--) {
        rezult+= str1[i];
    }
    if (str === rezult) {
        return true;
    } else {
        return false
    }
  }




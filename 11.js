// // Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// // All letters will be lowercase and all inputs will be valid.
function wordWalue(word){
    let alphabet = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8,
        "i": 9,
        "j": 10,
        "k": 11,
        "l": 12,
        "m": 13,
        "n": 14,
        "o": 15,
        "p": 16,
        "q": 17,
        "r": 18,
        "s": 19,
        "t": 20,
        "u": 21,
        "v": 22,
        "w": 23,
        "x": 24,
        "y": 25,
        "z": 26 
    };
    let arr = word.split('');
    let rezult = 0;
    for (let elem of arr) {
        for (let elem1 in alphabet) {
            if(elem1 === elem) {
                rezult+= alphabet[elem1];
                
            }
            
        }
        
    }
    return rezult;
}
 console.log(wordWalue("csemgputlqyoumjb"))


function high(x){
    let array = x.split(' ');
    let obj={};
    for (let i=0; i<array.length; i++) {
        let key = array[i];
        obj[key] = wordWalue(array[i]);
    }
    let keysSorted = Object.keys(obj).sort(function(a,b){return obj[a]-obj[b]})
    if (wordWalue(keysSorted[keysSorted.length-1]) === wordWalue(keysSorted[keysSorted.length-2])) {
        return keysSorted[keysSorted.length-2];
    }
     return keysSorted[keysSorted.length-1];
   
}
console.log(high("cm kl pg ho"));


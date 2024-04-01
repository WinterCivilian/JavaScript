let sentence = "";

function sentencify(words, n){

    if (n >= (words.length -1)){
       return words[words.length -1] + "!";
        
    }
    


    return words[n] + " " + sentencify(words, n+1);
    
}



const wordArray = [ "The", "quick", "silver", "wolf" ];

console.log(sentencify(wordArray, 0)); // prints "The quick silver wolf!"

console.log(sentencify(wordArray, 1)); // prints "quick silver wolf!"

console.log(sentencify(wordArray, 2)); // prints "silver wolf!"

console.log(sentencify(wordArray, 3)); // prints "silver wolf!"
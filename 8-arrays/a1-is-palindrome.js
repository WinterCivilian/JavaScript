function isPalindrome(word) {

    for(let i = 0; i < word.length; i++){
        if(word[i] != word[word.length -1 -i]){
            return false
        }
    }
    return true;
}


let value = isPalindrome("saippuakivikauppias");
console.log(value); // prints true

value = isPalindrome("saippuakäpykauppias");
console.log(value); // prints false

value = isPalindrome("sammallammas");
console.log(value); // prints true

value = isPalindrome("risetovotesir");
console.log(value); // prints true

value = isPalindrome("hölkötin pölkötin");
console.log(value); // prints false

value = isPalindrome("abba");
console.log(value); // prints true

value = isPalindrome("");
console.log(value); // prints true
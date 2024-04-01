const sentence = "this is a short sentence";

function reverseWords(words){

    const myArray = words.split(" "); //join


    for (let i = 0; i < myArray.length; i++){

        let index = myArray[i];
        let temp = "";

        for (let j = index.length -1; j >= 0; j--){

            temp += index[j];
        }

        myArray[i] = temp;
    }

    const reversedArray = myArray.join(" ");
    return reversedArray;

}

const reversed = reverseWords(sentence);
console.log(reversed); // prints "siht si a trohs ecnetnes"
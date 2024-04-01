let wordOne = "hello";
let wordTwo = "helmi";

if (wordOne.length > wordTwo.length){
    console.log(wordOne +  " is longer than " + wordTwo);
}
else if (wordOne.length < wordTwo.length){
    console.log(wordTwo +  " is longer than " + wordOne);
}
else {
    console.log(wordOne +  " and " + wordTwo + " are equally long");
}
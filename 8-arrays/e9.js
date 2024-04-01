myArray = [ "cherry",  "banana", "coconut", "apple", "pear", "pineapple", "lemon", "pumpkin" ];

secondArray = [];


for (const arr of myArray){
    if (arr.length  > 6){
        secondArray.push(arr);
    } 
}

console.log(secondArray);
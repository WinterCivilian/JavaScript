myArray = [5, 7, 2, 9, 3, 13, 15, 6, 17, 24];

for (const index in myArray){
    if (myArray[index] % 3 === 0){
        console.log(myArray[index]);
    } 
}


for (const arr of myArray){
    if (arr % 3 === 0){
        console.log(arr);
    } 
}
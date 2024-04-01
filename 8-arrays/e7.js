myArray = [4, 7, 11, 5, 6, 9, 15, 7];


for (let i = 0; i < myArray.length; i++){
    if(myArray[i] < 7){
        myArray.splice(i, 1);
        i--;
    }
}


console.log(myArray);
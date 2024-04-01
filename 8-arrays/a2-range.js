function numberRange (start, end){

    arr = [];

    erotus = Math.abs(start - end)

    if(start < end){
        for (let i = 0; i < (erotus +1) ; i++){
            arr.push(start + i);
        }
    }

    if(start > end){
        for (let i = 0; i < (erotus + 1); i++){
            arr.push(start - i);
        }
    }
    
    return arr;
}

console.log(numberRange(1, 5));   // prints [ 1, 2, 3, 4, 5 ]
console.log(numberRange(-5, -1)); // prints [ -5, -4, -3, -2, -1 ]
console.log(numberRange(9, 5));   // prints [ 9, 8, 7, 6, 5 ]
console.log(numberRange(100, 90));  
console.log(numberRange(-10, 20));


// start, end = end, start
// [a,b] = [b,a]
const array = [ 1, 3, 4, 7, 11 ];

function insertNumber(arr, nro){
    // index tells us where to splice
    let index = 0;

    // go through the array and check for the size of numbers
    for (let i = 0; i < arr.length; i++){
        
        if (arr[0] > nro){
            index = i;
            break;
        }
        if (arr[arr.length-1] < nro){
            index = arr.length;
            break;
        }
        if (arr[i] > nro){
            index = i;
            break;
        }

    }

    arr.splice(index, 0, nro);

    return arr;
}


console.log(insertNumber(array, 10));
console.log(insertNumber(array, -5));
console.log(insertNumber(array, 90));
console.log(insertNumber(array, 15));
console.log(insertNumber(array, -800));
console.log(insertNumber(array, 0));

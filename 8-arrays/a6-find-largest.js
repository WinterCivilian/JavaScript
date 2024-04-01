const array = [ 4, 19, 7, 1, 9, 22, 6, 13 ];
const array2 = [ 14, 19, 7, 1, 9, 262, 6, 1300 ];


function findLargest (arr){
    let temp = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > temp){
            temp = arr[i];
        }
    }

    return temp;
}


const largest = findLargest(array);
console.log(largest); // prints 22

const largest2 = findLargest(array2);
console.log(largest2);
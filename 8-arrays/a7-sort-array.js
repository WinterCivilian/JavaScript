const array = [ 4, 19, 7, 1, 9, 22, 6, 13 ];
const array2 = [ -4, 129, 7, 1, -9, 2200, 6, 813 ];

function sortNumberArray(arr){

// switch the places of two numbers if they are "the wrong way"
for(let i = 0; i< arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
        }
    }
    // check if the array is complete, otherwise repeat the function
    for (let j = 0; j < arr.length; j++){
        if(arr[j] > arr[j+1]){
            sortNumberArray(arr)
        }
    }

    return arr;
}


sortNumberArray(array);
console.log(array); // prints [ 1, 4, 6, 7, 9, 13, 19, 22 ]

sortNumberArray(array2);
console.log(array2);
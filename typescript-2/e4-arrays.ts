let arr: number[] = [];

for (let i = 0; i < 10; i++){
    arr[i] = Math.random();
}

console.log(arr);

console.log(sortNumberArray(arr));

//arrays a-7
function sortNumberArray(arr: number[]){

    // switch the places of two numbers if they are "the wrong way"
    for(let i = 0; i< arr.length; i++){
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
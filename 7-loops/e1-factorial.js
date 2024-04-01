
function factorial(n){

    index = 1;
    result = 1;

    while (index < (n+1)){
        
        result *= index
        index++;

    }

    return result
}
console.log(factorial(10));

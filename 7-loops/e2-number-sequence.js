function sequence(n){

    index = 1;
    result = 1;

    while (index < (n+1)){
        
        result = index * 3;
        index++;

        console.log(result);

    }

    return result
}

sequence(5);
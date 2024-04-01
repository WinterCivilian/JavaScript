function sequence(n){

    index = 1;
    result = 1;

    do{
        result = index * 3;
        index++;
        console.log(result);
    }
    while (index > (10)){   //always false now, note the > symbol  
    }

    return result
}

sequence(5);
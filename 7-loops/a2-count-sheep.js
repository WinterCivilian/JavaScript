function countSheep (n){
    
    let sheepcounter = ""
    
    for (let number = 0; number < n; number++){
        sheepcounter += (number+1) + " sheep... ";
    }

    return sheepcounter;
}


console.log(countSheep(5));
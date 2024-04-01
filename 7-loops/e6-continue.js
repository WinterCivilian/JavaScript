let kerroin = 1;

for (let number = 1; number < 11; number++){
    if(number % 3 === 0){
        continue;
    }
    
    kerroin *= (number);
    console.log(kerroin);
}
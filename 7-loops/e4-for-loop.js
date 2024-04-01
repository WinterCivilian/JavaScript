// 0 100 200 300 400 500 600 700 800 900 1000
// 1 2 4 8 16 32 64 128
// 3 6 9 12 15
// 9 8 7 6 5 4 3 2 1 0
// 1 1 1 2 2 2 3 3 3 4 4 4
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4



function forLoop(n){

    let doubleIt = 1;  
    let increase = 1;

 for(let number = 0; number < 11; number++){
        console.log(number*100);
 }

 for(let number = 0; number < 7; number++){
    console.log(doubleIt *= 2);
}

for(let number = 1; number < 6; number++){
    console.log(number * 3);
}

for(let number = 9; number > -1; number--){
    console.log(number);
}

for(let number = 1; number < 13; number++){
    
    console.log(increase);

    if (number%3 === 0){
        increase += 1;
    }
}

for(let number = 0; number < 15; number++){
    let nro = number%5;
    console.log(nro);
}


}

forLoop();
// function exponentValueList(n){
    
//     if (n < 1){
//         console.log("N should be positive");
//     }
    
//     for (let number = 0; number < n; number++){
        
//         console.log(2**(number+1));
//     }
// }


function exponentValueList(n, power){
    
    if (n < 1){
        console.log("N should be positive");
    }
    
    for (let number = 0; number < n; number++){
        
        console.log(power**(number+1));
    }
}

exponentValueList(10, (3));
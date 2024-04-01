for (let number = 1; number < 101; number++){
    let printable = "";

    if (number%3 == 0){
        printable += "Fizz"
    }
    if (number%5 == 0){
        printable += "Buzz"
    }
    if(printable === ""){
        printable += number;
    }
    console.log(printable)
}

let nro = 1;

while (nro < 101){
    
    let print = "";

    if(nro%3 === 0){
        print += "Fizz";
    }
    if(nro%5 === 0){
        print += "Buzz";
    }
    if(print === ""){
        print += nro;
    }

    console.log(print);
    nro++;
}
let n1 = 0;
let n2 = 1;

function fibonacci (n){
    console.log(n1);

    if (n > 0){
        let oldn2 = n2;
        n2 = n1 + n2;
        n1 = oldn2;
        return fibonacci(n-1);
    }
    else{
        return n;
    }

}

fibonacci(15);
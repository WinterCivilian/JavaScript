let n1 = 0;
let n2 = 1;

function sequence (n){
    console.log(n1);

    if (n > 0){
        let oldn2 = n2;
        n2 = n1*3 + n2;
        n1 = oldn2;
        return sequence(n-1);
    }
    else{
        return n;
    }

}

sequence(17);
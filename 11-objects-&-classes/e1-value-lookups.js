const fruits = {
    "banana": 118,
    "apple": 85,
    "mango": 200,
    "lemon": 65
}


function printWeight (f){
    
    if(fruits[f] == null){
        console.log("Not recognised. Allowed fruits are " + Object.keys(fruits))
    }
    else{
        console.log(f + " weighs " + fruits[f] + " grams");
    }

}

printWeight("banana");
printWeight("manga");
printWeight("mango");
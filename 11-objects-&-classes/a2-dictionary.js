//A
const dictionaryObject = {
    hello: "hei",
    world: "maailma",
    bit: "bitti",
    byte: "tavu",
    integer: "kokonaisluku",
    boolean: "totuusarvo",
    string: "merkkijono",
    network: "verkko"
}

//B
function printTranslatableWords (){
    console.log("We can translate the following words " + Object.keys(dictionaryObject));
}

printTranslatableWords();

function translate (word){
    
    if (dictionaryObject[word] == null){
        console.log("No translation exists for word word given as the argument");
        return null;
    }
    
    return dictionaryObject[word];

}


console.log(translate("network")); // prints "verkko"
console.log(translate("hello"));
console.log(translate("world"));
console.log(translate("integer"));

console.log(translate("tööt"));

function hello(lingua:string){
    if (lingua === "fi"){
        console.log("Hei maailma!");
    }
    else if (lingua === "se"){
        console.log("Hejsan Världen!");
    }
    else if (lingua === "en"){
        console.log("Hello World!");
    }
    else{
        console.log("Ni Hao!")
    }
}

hello("fi");
hello("en");
hello("se");
hello("Testi");


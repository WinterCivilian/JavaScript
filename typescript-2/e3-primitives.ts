function output (sentence: string){

    const splitBySpace = sentence.split(' ');

    let out = {length : 0, words : 0};

    out.length = sentence.length;
    out.words = splitBySpace.length;


    return out;    

}
    
const words = "Hello World!"
const words2 = "Hello again World!"
const words3 = "Hello once again World!"



console.log(output(words));
console.log(output(words2));
console.log(output(words3));
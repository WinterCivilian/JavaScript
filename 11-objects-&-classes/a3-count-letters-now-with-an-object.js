
function getCountOfLetters(words){

    const myObject = {
    }

    for (let i = 0; i < words.length; i++){
        if(words[i] == " "){
            continue;
        }
        if (myObject[words[i]] == undefined){
            myObject[words[i]] = 1;
        }
        else{
            myObject[words[i]] += 1;
        }
    }

    return myObject;
}


const result = getCountOfLetters("a black cat");
console.log(result);
/* prints 
{
	a: 3,
	b: 1,
	c: 2,
	k: 1,
	l: 1,
	t: 1
}
*/

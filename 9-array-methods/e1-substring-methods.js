const sentence = "According to all known laws of aviation, there is no way a bee should be able to fly."

const uusi = sentence.split(' ');

for (let i = 0; i < uusi.length; i++){
    if(uusi[i].toLowerCase().startsWith('a')){
        console.log(uusi[i]);
    }
}

//console.log(uusi);
//uusi[i].toLowerCase().startsWith('a')
//toLowerCase()

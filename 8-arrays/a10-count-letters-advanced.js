const charIndex = { a : 0, 
    b : 1, 
    c : 2, 
    d : 3, 
    e : 4, 
    f : 5, 
    g : 6, 
    h : 7,
    i : 8,
    j : 9,
    k : 10,
    l : 11,
    m : 12,
    n : 13,
    o : 14, 
    p : 15,
    q : 16,
    r : 17,
    s : 18,
    t : 19,
    u : 20,
    v : 21,
    w : 22,
    x : 23,
    y : 24, 
    z : 25 };


function getCountOfLetters (sentence){
    let arr = Array(26);

    //arr[0] = 5
    //arr[1] = 8
    //console.log(charIndex.a);


    for (let j = 0; j < arr.length; j++){
        arr[j] = 0;
    }

    //console.log(arr.length);
    //console.log(arr);

    for (let i = 0; i < sentence.length;  i++){

        if (arr[charIndex[sentence[i]]] === false){
            continue;
        }

        arr[charIndex[sentence[i]]] += 1; 

        //let temp = sentence[i];
        //console.log(temp);
        //console.log(charIndex[sentence[i]]);
    }

    return arr;
}


const result = getCountOfLetters("a black cat");
console.log(result); // prints [ 3, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, ... 1, 0, 0, 0, 0, 0, 0  ]
    // corresponding letters:    a  b  c  d  e  f  g, h, i, j, k, l, ... t, u, v, w, x, y, z 
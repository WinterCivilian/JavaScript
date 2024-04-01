const objectArray = [ { x: 14, y: 21, type: "tree", toDelete: false },
                      { x: 1, y: 30, type: "house", toDelete: false },
                      { x: 22, y: 10, type: "tree", toDelete: true },
                      { x: 5, y: 34, type: "rock", toDelete: true },
                      null,
                      { x: 19, y: 40, type: "tree", toDelete: false },
                      { x: 35, y: 35, type: "house", toDelete: false },
                      { x: 19, y: 40, type: "tree", toDelete: true },
                      { x: 24, y: 31, type: "rock", toDelete: false } ];

const objectArray2 = [ { x: 14, y: 21, type: "tree", toDelete: false },
                      { x: 1, y: 30, type: "house", toDelete: false },
                      { x: 22, y: 10, type: "tree", toDelete: true },
                      { x: 5, y: 34, type: "rock", toDelete: true },
                      null,
                      { x: 19, y: 40, type: "tree", toDelete: false },
                      { x: 35, y: 35, type: "house", toDelete: false },
                      { x: 19, y: 40, type: "tree", toDelete: true },
                      { x: 24, y: 31, type: "rock", toDelete: false } ];

//a

for (let i = 0; i < objectArray.length; i++){
    if (objectArray[i] == null){
        continue;
    }
    if(objectArray[i].toDelete == true){
        objectArray[i] = null;
    }
}

console.log(objectArray);

//b

const arr = objectArray2.map(unit => {
    if (unit === null || unit.toDelete == false){
        return unit;
    }

    return null;
});

console.log(arr);


// c
// I see very little difference between a and b.
// Both have to go through the array completely.
// The only true difference is that in b we create a completely new array
// which presumably takes more memory because the original also remains.
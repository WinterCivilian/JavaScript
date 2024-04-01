interface Boat {
    hullBreached: boolean,
    fillLevel: number
    sunk?: boolean;
}

let Titanic: Boat;
    
Titanic = {
    hullBreached: true,
    fillLevel: 0
    }

function isItSinking (data: Boat){

    if (data.hullBreached == true){
        data.fillLevel += 20;
        console.log(data.fillLevel);
    }
    if (data.fillLevel == 100){
        data.sunk = true;
        console.log(data);
    }

}

isItSinking(Titanic);
isItSinking(Titanic);
isItSinking(Titanic);
isItSinking(Titanic);
isItSinking(Titanic);
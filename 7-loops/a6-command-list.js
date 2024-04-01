const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";

const robot = {
	x : 0,
    y : 0
};

function moveRobot(command){
    for (let number = 0; number < command.length; number++){
        
        console.log(number);

        if(command.charAt(number) === 'N'){
            robot.y += 1;
        }
        if(command.charAt(number) === 'E'){
            robot.x += 1;
        }
        if(command.charAt(number) === 'S'){
            robot.y -= 1;
        }
        if(command.charAt(number) === 'W'){
            robot.x -= 1;
        }
        if(command.charAt(number) === 'C'){
            continue;
        }
        if(command.charAt(number) === 'B'){
            break;
        }
    }

    console.log("X is " + robot.x + " and Y is " + robot.y);
}

moveRobot(commandList)
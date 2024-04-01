const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";

let y = 0;
let x = 0;


function robotCommand(commands){

    commandHandlers = {
        N: () => y++,
        E: () => x++,
        S: () => y--,
        W: () => x--,
        C: () => {}}

        for (let i = 0; i < commands.length; i++){
            if (commands[i] == 'B') break;
            
            commandHandlers[commands[i]]();
        }


    return [x,y];
}

console.log(robotCommand(commandList));
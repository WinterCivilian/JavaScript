let x = 0;
let y = 0;

const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";


class Robot{
    constructor(x, y){
        this.x = x;
        this.y = y;
        // this.commandHandlers = {
        //     N: () => this.y++,
        //     E: () => this.x++,
        //     S: () => this.y--,
        //     W: () => this.x--,
        //     C: () => {}}
    }

    handleCommandList(commands){
        const commandHandlers = {
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
}

const robot = new Robot(x, y);
console.log(robot);


console.log(x); //global x
console.log(y); //global y
console.log(robot.handleCommandList(commandList));


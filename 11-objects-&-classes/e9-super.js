// Robot that can move vertically
// (along the y-axis)
class Robot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    handleMessage(message) {
        if (message === "moveNorth") { this.y++; }
        else if (message == "moveSouth") { this.y--; }
        else if (message == "moveEast") { this.x++; }
        else if (message == "moveWest") { this.x++; }
        else console.log("Invalid command");
    }
}

// Robot that can move diagonally
class FlexibleRobot extends Robot {

    // constructor(x, y) {
    //     super(x, y);
    // } 

    handleMessage(message) {
        if (message === "moveNE") { this.x++, this.y++; }
        else if (message == "moveSW") { this.x--, this.y--; }
        else if (message == "moveNW") { this.x--, this.y++; }
        else if (message == "moveSE") { this.x++, this.y--; }
        else {
            // If the message wasn't one of our
            // "extended" messages,
            // then call the original message handler
            super.handleMessage(message);
        }
    }
}


const robo = new FlexibleRobot(0,0);

robo.handleMessage("moveNE");
console.log(robo.x, robo.y);

robo.handleMessage("moveNE");
console.log(robo.x, robo.y);

robo.handleMessage("moveEast");
console.log(robo.x, robo.y);

robo.handleMessage("moveEast");
console.log(robo.x, robo.y);
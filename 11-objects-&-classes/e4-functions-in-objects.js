const processor = { 
    name: "Buutti SuperCalculator 6000",
    cache: "96 GB",
    clockSpeed: 9001.0,
    overclock: function() {this.clockSpeed += 500},
    savePower: function() {if (this.clockSpeed > 2000) {this.clockSpeed = 2000} else{this.clockSpeed = this.clockSpeed/2} }
}
    
console.log(processor.clockSpeed);

processor.overclock();
console.log(processor.clockSpeed);

processor.overclock();
console.log(processor.clockSpeed);

processor.savePower();
console.log(processor.clockSpeed);

processor.savePower();
console.log(processor.clockSpeed);

processor.overclock();
console.log(processor.clockSpeed);

processor.overclock();
console.log(processor.clockSpeed);

processor.overclock();
console.log(processor.clockSpeed);

processor.savePower();
console.log(processor.clockSpeed);
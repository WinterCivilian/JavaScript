const dune = {
    name: "Dune",
    pageCount: 412,
    read : false,
};

const eyeOfTheWorld = {
    name: "The Eye of the World",
    pageCount: 782,
    read : false,
};

console.log(dune);
console.log(eyeOfTheWorld);

dune.read = true;
eyeOfTheWorld.read = true;

console.log(dune);
console.log(eyeOfTheWorld);

const duneArray = ["Dune", 412, false]
const eyeOfTheWorldArray = ["The Eye of the World", 782, false]

//extra
console.log(duneArray);
console.log(eyeOfTheWorldArray);

const computer1 = {
    time: 42,
    averageEnergyConsuption: 600,
};

const computer2 = {
    time: 57,
    averageEnergyConsuption: 480,
};

power1 = computer1.time * computer1.averageEnergyConsuption;
power2 = computer2.time * computer2.averageEnergyConsuption;


console.log((power1 < power2) ? "#1" : "#2");
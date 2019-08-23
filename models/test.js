const circuitApi = require('./circuits.js')

circuitApi.createCircuit().then((newCircuit) => {
    console.log(newCircuit);
});

circuitApi.getAllCircuits().then((allCircuits) => {
    console.log(allCircuits);
})

circuitApi.getCircuit(circuitId).then(circuit => {
    console.log(circuit)
})
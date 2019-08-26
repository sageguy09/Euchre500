/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 import mongoose connection
 */
const mongoose = require('./connection.js')


/* Step 2
 * create model schema 
 */
const CircuitSchema = new mongoose.Schema({
  crctName: String,
  crctCreatedBy: String,
  nameP1: String,
  nameP2: String,
  nameP3: String,
  nameP4: String,
  scoreP1: Number,
  scoreP2: Number,
  scoreP3: Number,
  scoreP4: Number,
  euchreP1: Number,
  euchreP2: Number,
  euchreP3: Number,
  euchreP4: Number,
  loanerP1: Number,
  loanerP2: Number,
  loanerP3: Number,
  loanerP4: Number,
  marchP1: Number,
  marchP2: Number,
  marchP3: Number,
  marchP4: Number,
  winsP1: Number,
  winsP2: Number,
  winsP3: Number,
  winsP4: Number,
  lossP1: Number,
  lossP2: Number,
  lossP3: Number,
  lossP4: Number,
  totalP1: Number,
  totalP2: Number,
  totalP3: Number,
  totalP4: Number
});

/* Step 3
 * TODO: create collection API
 */
const CircuitCollection = mongoose.model('circuit', CircuitSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getHelloWorldString() {
  return 'hello world'
}

function getAllCircuits() {
  return CircuitCollection.find()
}

function getCircuit(circuitId) {
  return CircuitCollection.findById(circuitId);
}

/*
function getCircuitId(addedCircuit) {
  return CircuitCollection.findOne(added)
}
*/


function addNewCircuit(newCircuit) {
  return CircuitCollection.insertMany(newCircuit);
}

function getCircuitByName(circuitName){
  return CircuitCollection.findOne(circuitName.name)
}

function deleteCircuit(circuitId) {
  return CircuitCollection.findByIdAndDelete(circuitId)
}

function updateCircuit(circuitId, circuit) {
  return CircuitCollection.findByIdAndUpdate(circuitId, circuit)
}



/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addNewCircuit,
  deleteCircuit,
  getCircuitByName,
  getHelloWorldString,
  getAllCircuits,
  getCircuit,
  updateCircuit
}

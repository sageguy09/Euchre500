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
  crcCreatedBy: String,
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
  totalP4: Number,
})

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
//create is a testing function only
function createCircuit() {
  return CircuitCollection.create({
    crctName: "test circuit",
  crctCreatedBy: "Ryan",
  nameP1: "Max",
  nameP2: "Tyler",
  nameP3: "Dana",
  nameP4: "Wes",
  scoreP1: 0,
  scoreP2: 0,
  scoreP3: 0,
  scoreP4: 0,
  euchreP1: 0,
  euchreP2: 0,
  euchreP3: 0,
  euchreP4: 0,
  loanerP1: 0,
  loanerP2: 0,
  loanerP3: 0,
  loanerP4: 0,
  marchP1: 0,
  marchP2: 0,
  marchP3: 0,
  marchP4: 0,
  winsP1: 0,
  winsP2: 0,
  winsP3: 0,
  winsP4: 0,
  lossP1: 0,
  lossP2: 0,
  lossP3: 0,
  lossP4: 0,
  totalP1: 0,
  totalP2: 0,
  totalP3: 0,
  totalP4: 0
  })
}
function getAllCircuits() {
  return CircuitCollection.find()
}

function getCircuit(circuitId) {
  return CircuitCollection.findById(circuitId)
}

function addNewCircuit(circuitId) {
  return CircuitCollection.insertMany([circuitId])
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
  createCircuit,
  deleteCircuit,
  getHelloWorldString,
  getAllCircuits,
  getCircuit,
  updateCircuit
}

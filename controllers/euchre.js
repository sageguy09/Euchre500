/* import express */
const express = require('express')

/* Step 2
 Import the api files from the models
 */
const playersApi = require('../models/players.js')
const circuitsApi = require('../models/circuits.js')
const resourcesApi = require('../models/resources.js')
/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 */
const euchreRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 *
 * TODO: delete this handler; it's just a sample
 */ 

//get main test
euchreRouter.get('/', (req, res) => {
  res.send(playersApi.getHelloWorldString())
})

//get main/users test
euchreRouter.get('/players', (req, res) => {
  res.send(playersApi.getHelloWorldString())
})
//get main/circuits test
//euchreRouter.get('/circuits', (req, res) => {
  //res.send(circuitsApi.getHelloWorldString())
//})
//*testing* create circuit handler
euchreRouter.get("/newCircuit", (req, res) => {
  res.send(circuitsApi.createCircuit)
})
//get all circuits
euchreRouter.get('/circuits', (req, res) => {
  circuitsApi.getAllCircuits().then(circuits =>{
    res.render('./circuits/allCrcts', {circuits})
  })
})
//get circuit
euchreRouter.get('/:circuitId', (req, res) => {
  circuitsApi.getCircuit(req.params.circuitId).then(circuit => {
    res.render('./circuits/circuit', {circuit});
  })
})
//get main/resources test
euchreRouter.get('/resources', (req, res) => {
  res.send(resourcesApi.getHelloWorldString())
})
/* Step 6
 * Export the router from the file.
 */
module.exports = {
  euchreRouter
}

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


//render newCrct view
euchreRouter.get("/circuits/new", (req, res) => {
  res.render('./circuits/newCrct');
})

//get all circuits
euchreRouter.get('/circuits', (req, res) => {
  circuitsApi.getAllCircuits().then(circuits =>{
    res.render('./circuits/allCrcts', {circuits})
  })
})
//post handler for newCrct - redirect to single circuit view
euchreRouter.post('/circuits/addedCircuit', (req, res) =>{
  circuitsApi.addNewCircuit(req.body).then( newCircuit => {
     /*circuitsApi.getCircuitByName(newCircuit).then(circuit => {
       //console.log(circuit.id)
       
     })*/
     res.redirect('/sitemain/circuits/')
  })
})
//get single circuit
euchreRouter.get('/circuits/:circuitId', (req, res) => {
  circuitsApi.getCircuit(req.params.circuitId).then(circuit => {
    res.render('./circuits/circuit', {circuit});
  })
})
//put handler to update an existing circuit - redirect to single circuit view
euchreRouter.put('/:circuitId', (req, res) => {
  circuitsApi.updateCircuit(req.params.circuitId, req.body).then( circuit => {
    res.redirect('/sitemain/circuits/' + req.params.circuitId);
  })
})

euchreRouter.get('/circuits/:circuitId/edit', (req, res) => {
  circuitsApi.getCircuit(req.params.circuitId).then(circuit => {
    res.render('./circuits/updateCrct', {circuit});
  })
})
/*
comment out until ready to implement
//get main/users test
euchreRouter.get('/players', (req, res) => {
  res.send(playersApi.getHelloWorldString())
})
//get main/resources test
euchreRouter.get('/resources', (req, res) => {
  res.send(resourcesApi.getHelloWorldString())
})
*/



/* Step 6
 * Export the router from the file.
 */
module.exports = {
  euchreRouter
}

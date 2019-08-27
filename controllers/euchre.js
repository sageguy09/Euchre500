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
  res.render('./main')
})

/* ****** CIRCUITS ****** */

//render newCrct view
euchreRouter.get("/circuits/new", (req, res) => {
  playersApi.getAllPlayers().then(players => {
   res.render('./circuits/newCrct', {players});
})
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
//delete function
euchreRouter.delete('/circuits/:circuitId', (req, res) => {
  circuitsApi.deleteCircuit(req.params.circuitId).then(deletedCircuit => {
    res.redirect('/sitemain/circuits')
  })
})

//put handler to update an existing circuit - redirect to single circuit view
euchreRouter.put('/circuits/:circuitId', (req, res) => {
  circuitsApi.updateCircuit(req.params.circuitId, req.body).then( circuit => {
    res.redirect('/sitemain/circuits/' + req.params.circuitId);
  })
})
//get edit circuit 
euchreRouter.get('/circuits/:circuitId/edit', (req, res) => {
  circuitsApi.getCircuit(req.params.circuitId).then(circuit => {
    res.render('./circuits/updateCrctScores', {circuit});
  })
})

/* ****** PLAYERS ****** */

//get all players
euchreRouter.get('/players', (req, res) => {
  playersApi.getAllPlayers().then(players =>{
    res.render('./players/allPlayers', {players})
  })
})
//render add newPlayer view
euchreRouter.get('/players/new', (req, res) => {
  res.render('./players/newPlayer')
})
//post handler for newCrct - redirect to single circuit view
euchreRouter.post('/players', (req, res) =>{
  playersApi.addNewPlayer(req.body).then( newPlayer => {
     res.redirect('/sitemain/players/')
  })
})

//get single player
euchreRouter.get('/players/:playerId', (req, res) => {
  playersApi.getPlayer(req.params.playerId).then(player => {
    res.render('./players/player', {player});
  })
})

//delete player function
euchreRouter.delete('/players/:playerId', (req, res) => {
  playersApi.deletePlayer(req.params.playerId).then(deletedPlayer => {
    res.redirect('/sitemain/players')
  })
})

//put handler to update an existing player - redirect to single circuit view
euchreRouter.put('/players/:playerId', (req, res) => {
  playersApi.updatePlayer(req.params.playerId, req.body).then( player => {
    res.redirect('/sitemain/players/' + req.params.playerId);
  })
})
//get updatePlayer form
euchreRouter.get('/players/:playerId/edit', (req, res) => {
  playersApi.getPlayer(req.params.playerId).then(player => {
    res.render('./players/updatePlayer', {player});
  })
})


/* ****** RESOURCEs ****** */


//get all resources
euchreRouter.get('/resources', (req, res) => {
  resourcesApi.getAllResources().then(resources => {
    res.render('./resources/allRsrcs' , {resources})
  })
})
euchreRouter.get('/resources/new', (req,res) => {
  playersApi.getAllPlayers().then(players => {
      res.render('./resources/newRsrc', {players})
      
    })
})

//render add newResource view
// euchreRouter.get('/resources/new', (req, res) => {
  // res.render('./resources/newRsrc')
// })


//post handler for newResource - redirect to single resource view
euchreRouter.post('/resources', (req, res) =>{
  resourcesApi.addNewResource(req.body).then( newResource => {
     res.redirect('/sitemain/resources/')
  })
})

//get single resource
euchreRouter.get('/resources/:resId', (req, res) => {
  resourcesApi.getResource(req.params.resId).then(resource => {
    res.render('./resources/resource', {resource});
  })
})

//delete resource function
euchreRouter.delete('/resources/:resId', (req, res) => {
  resourcesApi.deleteResource(req.params.resId).then(deletedResource => {
    res.redirect('/sitemain/resources')
  })
})

//put handler to update an existing resource - redirect to single resource view
euchreRouter.put('/resources/:resId', (req, res) => {
  resourcesApi.updateResource(req.params.resId, req.body).then( resource => {
    res.redirect('/sitemain/resources/' + req.params.resId);
  })
})
//get updatePlayer form
// euchreRouter.get('/resources/:resId/edit', (req, res) => {
  // resourcesApi.getResource(req.params.resId).then(resource => {
    // res.render('./resources/updateRsrc', {resource});
  // })
// })

euchreRouter.get('/resources/:resId/edit', (req, res) => {
   resourcesApi.getResource(req.params.resId).then(resource => {
    playersApi.getAllPlayers().then(players => {
      res.render('./resources/updateRsrc', {resource, players});
  })
})
})

/* Step 6
 * Export the router from the file.
 */
module.exports = {
  euchreRouter
}

/* import express */
const express = require('express')

/* Step 2
 Import the api files from the models
 */
const usersApi = require('../models/users.js')
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
euchreRouter.get('/users', (req, res) => {
  res.send(usersApi.getHelloWorldString())
})

euchreRouter.get('/circuits', (req, res) => {
  res.send(circuitsApi.getHelloWorldString())
})

euchreRouter.get('/resources', (req, res) => {
  res.send(resourcesApi.getHelloWorldString())
})
/* Step 6
 * Export the router from the file.
 */
module.exports = {
  euchreRouter
}

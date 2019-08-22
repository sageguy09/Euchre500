/* import express */
const express = require('express')

/* Step 2
 * Import the api files from the models
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const usersApi = require('../models/users.js')
const circuitsApi = require('../models/circuits.js')
const resourcesApi = require('../models/resources.js')
/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const euchreRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
euchreRouter.get('/', (req, res) => {
  res.send(usersApi.getHelloWorldString())
})

euchreRouter.get('/', (req, res) => {
  res.send(circuitsApi.getHelloWorldString())
})

euchreRouter.get('/', (req, res) => {
  res.send(resourcesApi.getHelloWorldString())
})
/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  euchreRouterRouter
}

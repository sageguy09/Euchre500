/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 import mongoose connection
 */
const mongoose = require('./connection.js')

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const PlayerSchema = new mongoose.Schema({
  playerAlias: String,
  firstName : String,
  location: String,
  playerUid: String
})

//})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const PlayerCollection = mongoose.model('Players', PlayerSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getHelloWorldString() {
  return 'hello world'
}

function getAllPlayers() {
  return PlayerCollection.find()
}

function getPlayer(playerId){
  return PlayerCollection.findById(playerId)
}
function getPlayerByName(playerName) {
  return PlayerCollection.findOne(circuitName.name)
}

function addNewPlayer(newPlayer){
  return PlayerColletion.insertMany(newPlayer);
}

function deletePlayer(playerId) {
  return PlayerCollection.findByIdAndDelete(playerId)
}

function updatePlayer(playerId, player) {
  return PlayerCollection.findByIdAndUpdate(playerId, player)
}


/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addNewPlayer,
  deletePlayer,
  getAllPlayers,
  getHelloWorldString,
  getPlayer, 
  getPlayerByName,
  updatePlayer
}

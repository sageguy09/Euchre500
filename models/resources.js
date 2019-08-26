/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 import mongoose connection
 */
const mongoose = require('./connection.js')

/* Step 2
 * TODO: create model schema 
 */
const ResourcesSchema = new mongoose.Schema({
  resourceName: String,
  resourceDescription: String,
  resourceAddedBy: String
})


/* Step 3
 *
 * create collection API
 */
const ResourcesCollection = mongoose.model('Resource', ResourcesSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getHelloWorldString() {
  return 'hello world'
}

function getAllResources() {
  return ResourcesCollection.find()
}

function getResources(resId){
  return ResourcesCollection.findById(resId)
}
function getResourceByName(resId) {
  return ResourcesCollection.findOne(resId.name)
}

function addNewResources(newResource){
  return ResourcesCollection.insertMany(newResource);
}

function deleteResource(resId) {
  return ResourcesCollection.findByIdAndDelete(resId)
}

function updateResource (resId, resource) {
  return ResourcesCollection.findByIdAndUpdate(resId, resource)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllResources,
  getResources,
  getResourceByName,
  addNewResources,
  deleteResource,
  updateResource
}

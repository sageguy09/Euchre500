/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 *
 */
const mongoose = require('./connection.js')


/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
//const SampleModelSchema = new mongoose.Schema({
//  name: String
//})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
//const SampleCollection = mongoose.model('Sample', SampleModelSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getHelloWorldString() {
  return 'hello world'
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getHelloWorldString
}

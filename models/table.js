const mongoose = require("mongoose")
const tableSchema = mongoose.Schema({
material: String,
shape: String,
numlegs: Number
})
module.exports = mongoose.model("Table",
tableSchema)
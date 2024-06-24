const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    deviceAddress: String,
    deviceLocation: String,
    item1: Number,
    item2: Number,
    item3: Number,
    item4: Number 
})

const itemModel = mongoose.model("device", itemSchema)

module.exports = itemModel
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    title: String,
    image: String
}, { timestamps: true })

module.exports.Item = mongoose.model('Item', itemSchema);


const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
})

const tinderCards = mongoose.model("tinderCards", cardSchema);

module.exports = tinderCards;

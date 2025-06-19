// src/models/pet.model.js
const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: String,
  type: String,
  age: Number,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // nombre del modelo relacionado
  }
});

module.exports = mongoose.model('Pet', petSchema);

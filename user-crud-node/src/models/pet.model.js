// src/models/pet.model.js
const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: { type: String, required: true }, //name: debe ser string y obligatorio.
  type: { type: String, required: true, unique: true }, // email: obligatorio y único (no se pueden repetir emails).
  age: { type: Number, required: true }, //age: debe ser número y obligatorio.
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // nombre del modelo relacionado
  }
}); //<- Cada propiedad define un campo en la colección users

module.exports = mongoose.model('Pet', petSchema);

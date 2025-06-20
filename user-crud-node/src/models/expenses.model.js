const mongoose = require('mongoose'); // <- Importamos el modelo de Mongoose, que representa a la colección users en tu base de datos MongoDB.

const userSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId,
      ref: 'User', required: true }, //userID: debe ser un id de user y obligatorio.
  petId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true, required: true, unique: true }, // petId: debe ser un id de pet y obligatorio.
  amount: { type: Number, required: true },  // amount: tipo numero y obligatorio.
  category : { type: String, required: true }, //category: dla categorias, como comida o veterinario
  description: { type: String, required: false } //description: no es obligatorio.
}); //<- Cada propiedad define un campo en la colección users



module.exports = mongoose.model('Expense', userSchema); // <- Creamos el modelo llamado User basado en userSchema

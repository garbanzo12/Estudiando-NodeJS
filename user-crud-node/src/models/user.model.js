const mongoose = require('mongoose'); // Importamos el modelo de Mongoose, que representa a la colección users en tu base de datos MongoDB.
const bcrypt = require('bcryptjs'); // <-  Se usa para encriptar y comparar contraseñas de forma segura.


const userSchema = new mongoose.Schema({
  name: { type: String, required: true }, //name: debe ser string y obligatorio.
  email: { type: String, required: true, unique: true }, // email: obligatorio y único (no se pueden repetir emails).
  password: { type: String, required: true },  // password: obligatorio.
  age: { type: Number, required: true }, //age: debe ser número y obligatorio.
  genre: { type: String, required: true } //age: debe ser número y obligatorio.
}); //<- Cada propiedad define un campo en la colección users

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10); // <- Se genera un salt (valor aleatorio) con 10 rondas, ademas que se encrypta
  this.password = await bcrypt.hash(this.password, salt); // <- Tomo la contraseña original y al mezclo con el sal generado, genero un hash unico y guardo ese nuevo hash en vez de la contraseña original
  next();
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);// <- Compara la contraseña que ingresa con la que está en la base de datos (ya encriptada).
};
module.exports = mongoose.model('User', userSchema); // <- Creamos el modelo llamado User basado en userSchema

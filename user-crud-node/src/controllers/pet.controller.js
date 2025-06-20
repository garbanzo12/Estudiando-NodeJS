// src/controllers/pet.controller.js
// src/controllers/pet.controller.js
const Pet = require('../models/pet.model');

exports.createPet = async (req, res) => {
   console.log("👤 Usuario en createPet:", req.user); // <-- Añadir esta línea
  try {
    const { name, species, age } = req.body;

    const newPet = new Pet({
      name,
      type: species,
      age,
      owner: req.user.userId  
    });
    await newPet.save();

    res.status(201).json({ message: "Mascota registrada exitosamente", pet: newPet });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error al crear la mascota", error });
  }
};



exports.getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find().populate('owner', 'name email'); // muestra datos del dueño
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id).populate('owner');
    if (!pet) return res.status(404).json({ message: 'Pet not found' });
    res.json(pet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePet = async (req, res) => {
  try {
    const updated = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Pet not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePet = async (req, res) => {
  try {
    const deleted = await Pet.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Pet not found' });
    res.json({ message: 'Pet deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getMyPets = async (req, res) => {
  try {
    const pets = await Pet.find({ owner: req.user.userId }); // <-- Aquí usamos el userId que llega del token
    res.json(pets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message }); // <-- Aquí falla ahora, por eso tu error 500
  }
};

// src/routes/pet.routes.js
const express = require('express');
const router = express.Router();
const petController = require('../controllers/pet.controller');
const auth = require("../middlewares/auth");
router.post("/", auth, petController.createPet);
router.get('/my', auth, petController.getMyPets);
router.get('/', petController.getAllPets);
router.get('/:id', petController.getPetById);
router.put('/:id', petController.updatePet);
router.delete('/:id', petController.deletePet);
module.exports = router;

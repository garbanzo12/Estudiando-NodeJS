const { body } = require('express-validator'); // <- Extraemos el método body de express-validator,Este método se usa para validar campos del req.body

exports.createUserValidator = [
  body('name')
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),

  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Email is invalid'),

  body('age')
    .notEmpty().withMessage('Age is required')
    .isInt({ gt: 0 }).withMessage('Age must be a positive number'),
  body('genre')
    .notEmpty().withMessage('genre is required')
    .isLength({ min: 2 }).withMessage('Genre must be at least 2 characters'),
]; // <- Exportamos un arreglo de validaciones que luego será usado como middleware en rutas.


exports.updateUserValidator = [
  body('name')
    .optional()
    .isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),

  body('email')
    .optional()
    .isEmail().withMessage('Email is invalid'),

  body('age')
    .optional()
    .isInt({ gt: 0 }).withMessage('Age must be a positive number'),
  body('genre')
    .optional()
    .isLength({ min: 2 }).withMessage('Genre must be at least 2 characters'),
];// <- Exportamos un arreglo de validaciones que luego será usado como middleware en rutas.
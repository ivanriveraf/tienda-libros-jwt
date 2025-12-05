const express = require('express');
const { listarLibros, comprarLibro } = require('../controllers/libros.controller');
const { validarToken } = require('../middleware/auth');
const r = express.Router();
r.get('/',listarLibros);
r.post('/:id/comprar',validarToken,comprarLibro);
module.exports = r;

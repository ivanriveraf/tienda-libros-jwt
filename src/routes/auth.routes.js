const express = require('express');
const { registrar, login } = require('../controllers/auth.controller');
const r = express.Router();
r.post('/registro',registrar);
r.post('/login',login);
module.exports = r;

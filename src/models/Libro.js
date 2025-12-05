const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Libro = sequelize.define('Libro', {
  titulo: DataTypes.STRING,
  autor: DataTypes.STRING,
  stock: DataTypes.INTEGER,
  precio: DataTypes.DECIMAL(10,2)
});

module.exports = Libro;

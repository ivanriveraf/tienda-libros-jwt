// scripts/resetLibros.js
require('dotenv').config();

const sequelize = require('../src/config/database');
const Libro = require('../src/models/Libro');

const librosSeed = [
  { titulo: 'El Señor de los Anillos', autor: 'J.R.R. Tolkien', stock: 50, precio: 15000 },
  { titulo: '1984', autor: 'George Orwell', stock: 40, precio: 12000 },
  { titulo: 'Clean Code', autor: 'Robert C. Martin', stock: 30, precio: 25000 },
  { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', stock: 45, precio: 11000 },
  { titulo: 'Harry Potter y la Piedra Filosofal', autor: 'J.K. Rowling', stock: 60, precio: 13000 },
  { titulo: 'Juego de Tronos', autor: 'George R.R. Martin', stock: 25, precio: 22000 },
  { titulo: 'Cracking the Coding Interview', autor: 'Gayle Laakmann', stock: 20, precio: 28000 },
  { titulo: 'Refactoring', autor: 'Martin Fowler', stock: 15, precio: 26000 },
  { titulo: 'You Don’t Know JS', autor: 'Kyle Simpson', stock: 35, precio: 18000 },
  { titulo: 'Eloquent JavaScript', autor: 'Marijn Haverbeke', stock: 30, precio: 16000 },
  { titulo: 'Patrones de Diseño', autor: 'GoF', stock: 10, precio: 30000 },
  { titulo: 'Código Limpio en JavaScript', autor: 'Varios', stock: 25, precio: 19000 },
  { titulo: 'Introducción a PostgreSQL', autor: 'Varios', stock: 30, precio: 14000 }
];

(async () => {
  try {
    // Asegura que las tablas existen
    await sequelize.sync();

    // Borra todos los libros actuales
    await Libro.destroy({ where: {} });

    // Inserta los libros de ejemplo con stock lleno
    await Libro.bulkCreate(librosSeed);

    console.log('✅ Libros reseteados con stock completo');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error al resetear libros:', error);
    process.exit(1);
  }
})();

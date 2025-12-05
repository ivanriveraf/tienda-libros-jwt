const express = require('express');
const path = require('path');
require('dotenv').config();

const sequelize = require('./src/config/database');
const Usuario = require('./src/models/Usuario');
const Libro = require('./src/models/Libro');

const authRoutes = require('./src/routes/auth.routes');
const librosRoutes = require('./src/routes/libros.routes');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Rutas de vistas (Frontend)
app.get('/', (req, res) => res.render('index'));
app.get('/login', (req, res) => res.render('login'));
app.get('/registro', (req, res) => res.render('register'));
app.get('/libros', (req, res) => res.render('libros'));

// Rutas API (Backend)
app.use('/api/auth', authRoutes);
app.use('/api/libros', librosRoutes);

// Sincronizar DB y arrancar servidor
const PORT = process.env.PORT || 3000;

sequelize
  .sync()
  .then(async () => {
    console.log('✅ Base de datos sincronizada');

   const count = await Libro.count();
if (count === 0) {
  await Libro.bulkCreate([
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
  ]);
  console.log('📚 Libros de ejemplo creados');
}


    app.listen(PORT, () => {
      console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
      console.log('🧩 Modo vistas EJS activo');
    });
  })
  .catch((err) => {
    console.error('❌ Error al sincronizar la base de datos:', err);
  });

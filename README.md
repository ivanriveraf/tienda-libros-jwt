# 🛒 Tienda de Libros con Autenticación JWT, PostgreSQL y Bootstrap  
**Proyecto Fullstack Node.js + Express + Sequelize + EJS**

Este proyecto implementa una **tienda de libros funcional**, donde los usuarios pueden:

- Registrarse  
- Iniciar sesión  
- Comprar libros (solo usuarios autenticados)  
- Ver stock en tiempo real  
- Ver mensajes interactivos con animaciones  
- Cerrar sesión dinámicamente  
- Resetear stock en ambiente de desarrollo  

Incluye una interfaz moderna con **Bootstrap 5**, animaciones estilo *Matrix*, y un backend robusto con **PostgreSQL + Sequelize**.

---

## 🚀 Tecnologías Utilizadas

### **Backend**
- Node.js  
- Express  
- PostgreSQL  
- Sequelize ORM  
- JWT (JSON Web Tokens)  
- Bcrypt para contraseñas  

### **Frontend**
- EJS Templates  
- Bootstrap 5  
- CSS custom (animaciones estilo Matrix)  

### **Extras**
- Script para resetear libros  
- Navbar dinámico según autenticación  
- Spinner de carga personalizado  

## 📌 Problema que Resuelve

La aplicación aborda una problemática común en sistemas de ecommerce y gestión de inventario:
controlar el acceso a las compras, validar stock en tiempo real y mantener la integridad del inventario, garantizando que solo usuarios autenticados puedan realizar transacciones y que estas afecten correctamente la disponibilidad del producto.

El sistema busca resolver:

Compras sin autenticación

Inconsistencias en el stock

Falta de trazabilidad en las acciones del usuario

Necesidad de una interfaz simple para visualizar el catálogo y operar compras

### 💡 Solución Implementada

La aplicación desarrolla una tienda de libros con autenticación JWT, permitiendo que:

Usuarios puedan registrarse e iniciar sesión

Solo usuarios autenticados puedan acceder a la ruta protegida /libros/:id/comprar

Al comprar un libro:

Se valida el stock disponible

Se descuenta en tiempo real

Se actualiza la tabla del catálogo automáticamente

Además incorpora:

PostgreSQL + Sequelize para una gestión robusta de datos

Middleware de autenticación para proteger rutas sensibles

Bootstrap 5 + EJS para una interfaz limpia y responsiva

Animaciones y feedback visual (spinner Matrix, alertas dinámicas) para mejorar la experiencia de usuario

### 👤 Rol en el Proyecto

Este proyecto fue desarrollado íntegramente por Iván Rivera, cumpliendo roles de:

Diseño del backend

Modelos, rutas y controladores

Autenticación JWT

Middleware de seguridad

Lógica de compra y validación

Diseño del frontend

Interfaz con Bootstrap

Renderizado dinámico con EJS

Componentes interactivos con JavaScript

Arquitectura y DevOps

Configuración de entorno .env

Gestión del repositorio con Git y GitHub

Deploy de base de datos PostgreSQL en Render

Deploy del servicio web

### 🔄 Flujo Principal de Compra

Usuario inicia sesión → recibe un JWT

Frontend guarda el token en localStorage

Usuario abre /libros

Al presionar “Comprar”:

Se envía POST con el token en el header

Middleware verifica el JWT

Controlador valida stock

Sequelize descuenta inventario

UI muestra:

Spinner Matrix

Mensaje de éxito/error

---

## 📌 Características Principales

### 🔐 **Autenticación JWT**
- Registro de usuario  
- Inicio de sesión  
- Token guardado en `localStorage`  
- Rutas protegidas: solo usuarios autenticados pueden comprar  

---

### 📚 **Gestión de Libros**
- Catálogo dinámico obtenido desde la API  
- Tabla con ID, título, autor, stock y precio  
- Compra por cantidad  
- Descuento automático en stock  
- Mensajes de éxito/error con Bootstrap  
- Spinner de carga Matrix al comprar  
- “Sin stock” cuando llega a cero  
- Scroll automático para ver mensajes importantes  

---

### 🛒 **Proceso de Compra**
1. Usuario selecciona cantidad  
2. Aparece animación de carga  
3. Se verifica stock  
4. Se descuenta stock automáticamente  
5. Se muestra mensaje visual  
6. La tabla se actualiza en vivo  

---

### 🔄 **Reset de Libros (modo desarrollo)**
El proyecto incluye un script:

```
npm run reset:libros
```

Qué hace:

- Borra todos los libros  
- Crea nuevamente 13 libros con **stock alto**  
- Mantiene los usuarios intactos  

Ideal para pruebas y demos.

---

## 📁 Estructura del Proyecto

```
tienda-libros-jwt/
├── scripts/
│   └── resetLibros.js
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── public/
│   │   └── css/styles.css
│   ├── routes/
│   └── views/
├── .env / .env.example
├── server.js
├── package.json
└── README.md
```

---

##  Instalación y Ejecución

### 1️⃣ Clonar el repositorio  
```
git clone <URL-del-repo>
cd tienda-libros-jwt
```

### 2️⃣ Instalar dependencias  
```
npm install
```

### 3️⃣ Configurar variables de entorno  
Crea `.env` basado en `.env.example`:

```
DB_NAME=tienda_libros
DB_USER=postgres
DB_PASS=TU_PASSWORD
DB_HOST=localhost
DB_PORT=5432
JWT_SECRET=loquequieras123
PORT=3000
```

### 4️⃣ Ejecutar en modo desarrollo  
```
npm run dev
```

### 5️⃣ Para resetear catálogo de libros  
```
npm run reset:libros
```

---

## 🧪 Rutas Principales

### **Rutas Públicas**
| Método | Ruta        | Descripción |
|-------|-------------|-------------|
| GET   | `/`         | Página principal |
| GET   | `/login`    | Iniciar sesión |
| GET   | `/registro` | Crear cuenta |

---

### **API**
| Método | Ruta                        | Descripción |
|--------|------------------------------|-------------|
| POST   | `/api/auth/registro`         | Crear usuario |
| POST   | `/api/auth/login`            | Login + JWT |
| GET    | `/api/libros`                | Listar libros |
| POST   | `/api/libros/:id/comprar`    | Comprar libro *(requiere JWT)* |

---

## 🧭 Comportamiento del Navbar

✔ Muestra **Login / Registro** cuando NO hay sesión  
✔ Muestra **Cerrar Sesión** cuando sí la hay  
✔ Actualiza dinámicamente sin recargar la página  

---

## 💚 Animaciones Estilo Matrix

Incluye:

- Spinner verde neón animado  
- Brillo dinámico  
- Alertas con efecto “terminal”  
- Flujo visual claro al comprar  

---

## 🧑‍💻 Autores y Créditos

Proyecto desarrollado por:

- **Iván Rivera** – Desarrollo y estructura del proyecto

---

## 📄 Licencia

Este proyecto es completamente libre para uso educativo, personal o como parte de tu portafolio profesional.

---


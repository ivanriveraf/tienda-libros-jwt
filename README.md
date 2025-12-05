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


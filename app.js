const express = require('express');
const pg = require('pg');
const path = require('path');
const cookieParser = require('cookie-parser'); // Importa el módulo 'cookie-parser' para trabajar con cookies

// Configura la conexión a la base de datos
const pool = new pg.Pool({
  user: 'postgres',
  password: 'gxdfrf',
  host: 'localhost',
  database: 'postgres',
  port: 5433,
});

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser()); // Agrega el middleware de cookie-parser

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
  });
  
app.get("/register.html", (req, res) => {
    res.sendFile(__dirname + '/register.html');
  });

app.get('/script-in-sesion.js', (req, res) => {
    res.sendFile(__dirname + '/script-in-sesion.js', {
      headers: {
        'Content-Type': 'text/javascript'
      }
    });
  });

  app.get("/index.html", (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
app.get("/adultos.html", (req, res) => {
    res.sendFile(__dirname + '/adultos.html');
  });

  app.get("pediatria.html", (req, res) => {
    res.sendFile(__dirname + 'pediatria.html');
  });
  app.get("/sala_prueba.html", (req, res) => {
    res.sendFile(__dirname + '/sala_prueba.html');
  });

app.get("/style.css", (req, res) => {
    res.sendFile(path.join(__dirname, "style.css"));
  });

app.get('/script.js', (req, res) => {
    res.sendFile(__dirname + '/script.js', {
      headers: {
        'Content-Type': 'text/javascript'
      }
    });
  });

app.post('/validar-inicio-sesion', (req, res) => {
    const { usuario, contrasena } = req.body;
  
    pool.query('SELECT * FROM usuarios2 WHERE dni = $1 AND contraseña = $2', [usuario, contrasena], (error, result) => {
      if (error) {
        console.error('Error al consultar la base de datos:', error);
        res.status(500).json({ error: 'Ocurrió un error al verificar las credenciales.' });
      } else {
        if (result.rows.length > 0) {
          const usuario = result.rows[0];
          // Almacena el rol del usuario en una cookie
          res.cookie('rol', usuario.rol);
          res.json({ mensaje: 'Credenciales válidas. Inicio de sesión exitoso.' });
        } else {
            res.status(401).json({ error: 'Credenciales inválidas. Inicio de sesión fallido.' });
        }
      }
    });
  });
// Ruta para registrar un usuario en la base de datos
app.post('/registrar-usuario', (req, res) => {
  const { email, nombre, contrasena } = req.body; // Obtén los datos del cuerpo de la solicitud

  // Realiza una consulta para insertar al nuevo usuario en la base de datos
  pool.query('INSERT INTO usuarios (email, nombre, contrasena) VALUES ($3, $2, $4)', [email, nombre, contrasena], (error, result) => {
      if (error) {
          console.error('Error al registrar el usuario:', error);
          res.status(500).json({ mensaje: 'Ocurrió un error al registrar el usuario.' });
      } else {
          res.json({ mensaje: 'Usuario registrado exitosamente.' });
      }
  });
});

app.get('/consultar-datos', (req, res) => {
  pool.query('SELECT * FROM usuarios', (error, result) => {
    if (error) {
      console.error('Error al consultar la base de datos:', error);
      res.status(500).json({ error: 'Ocurrió un error al consultar la base de datos.' });
    } else {
      res.json(result.rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});

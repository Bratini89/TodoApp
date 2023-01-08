const { password } = require('pg/lib/defaults');
const { Sequelize } =  require('sequelize');

// crear una instancia con parametros de configuracion de nuestra base de datos
// un objeto de configuracion ---> credenciales de mi base de datos
const db = new Sequelize({
  database: "todoapp",
  username: "postgres", // postgres para ustedes
  host: "localhost", // 127.0.0.1
  port: "5432" ,// puerto de la base de dato
  password: "ruut", // pones tu contrasena
  dialect: "postgres" // la base de datos que estamos usando
})

module.exports =  db;
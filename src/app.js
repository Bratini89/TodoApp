// importar express
const express = require("express");
const db = require("./utils/database")
const initModels =  require('./models/init.models');
const Users = require("./models/users.model");
const Todos = require("./models/todos.models");

// crear una instancia de express
const app = express();
//;

app.use(express.json());

const PORT = 8000;

// probando la conexion a la base de datos
db.authenticate()
 .then(() =>    console.log("Connection Established"))
 .catch((error) => console.log(error));
 
 initModels();
 // usar el metodo sync para sincronizar la informacion de la base de datos
 
 // devuelve una promesa y la resolvemos con then

 db.sync({force: false})
 .then(() => console.log("Base de datos actualizada"))
 .catch((error) => console.log(error));

app.get('/', (req, res) => {
    res.status(200).json({message: "Bienvenido al servidor desde el backend"})
});

// definir las rutas de nuestros endpoints ( de ahora en adelante ep)
// todas las consultas de usuarios
// localhost:8000/users => todo para usuarios
// localhost:8000/todos => todo para tareas

// Get a /users
app.get('/users', async (req, res) => {
  try {
    // vamos a obtener el resultado  de consultar a todos los usuarios de db
    const users = await Users.findAll(); // SELECT * FROM USERS
     res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
})

app.get('/todos', async (req, res) => {
  try {
    // Consultaremos todas las tareas de database
    const todos = await Todos.findAll(); // SELECT * FROM TODOS
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
})

// Obtener un usuario sabiendo su id

app.get("/users/:id", async (req, res) => {
    try {
      console.log(req.params);
      const { id } = req.params;
      const result = await Users.findByPk(id);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  });

  //Obtener un una tarea sabiendo su id

  app.get("/todos/:id", async (req, res) => {
    try {
      console.log(req.params);
      const { id } = req.params;
      const result = await Todos.findByPk(id);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  })

  // obtener un usuario por username
  app.get("/users/username/:username", async (req, res) => {
    try {
      const { username } = req.params;
      const result = await Users.findOne({ where: { username } }); // SELECT * FROM users WHERE username = iannacus
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  });



  // Creando usuari0

  app.post("/users", async (req, res) => {
    try {
      const user = req.body;
      const result = await Users.create(user);
      res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
      console.log(error);
    }
  });

  // Crando una nueva tarea

  app.post("/todos", async (req, res) => {
    try {
      const todo = req.body;
      const result = await Todos.create(todo);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json(error.message);
      console.log(error);
    }
  })

  // actualizar un usuario, solo podemos cambiar el password
  
  app.put("/users/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const field = req.body;
      const result = await Users.update(field, {
        where: {id},
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });

  // 
  app.put("/todos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const field = req.body;
      const result = await Todos.update(field, {
        where: {id},
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });

  //eliminar un usuario => id
  app.delete("/users/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Users.destroy({
        where: { id },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });
  

//Eliminar tarea por el Id

  app.delete("/todos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Todos.destroy({
        where: { id },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });
  
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Vamos a terminar los modelos --> rapido
// model todos
// crear las relaciones entre los modelos
// les voy a ensenar a insertar informacion desde  este mismo proyecto

// vamos a estar haciendo los endpoints y consultas

// users 

// vamos a insertar informacion en nuestra base de datos
//  desde nuestro proyecto de node


// consultar la informacion con endpoints

// Tarea agregar tarea un post, actualizar tarea put, borrar tarea delete
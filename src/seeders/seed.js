
const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todos.models');


const users = [
    {
        username: 'Carlos',
        email: 'carlos@gmail.com',
        password: '123456',

    },
    {
        username: 'Mario',
        email: 'mario@gmail.com',
        password: '123456',

    },
    {
        username: 'Pedro',
        email: 'pedro@gmail.com',
        password: '123456',

    }
];

const todos = [{
    title: 'Tarea 1',
    description: 'shalala shalalal',
    userId: 1
},
{
    title: 'Tarea 2',
    description: 'shalala shalala',
    userId: 1
},
{
    title: 'Tarea  imposible',
    userId: 2
},
{
    title: 'Dormir zzzz',
    description: ' porque node no me deja ',
    userId: 3
}
];

// const categories = [];

// const todosCategories = [];

// create
// findOne, findAll, findByPk
// update
// destroy

db.sync({ force: false })
    .then(() => {
        console.log("Iniciando con el sembradio malicioso");
        users.forEach((user) => Users.create(user)); // INSERT INTO users

        setTimeout(() => {
            todos.forEach((todo) => Todos.create(todo)); // INSERT INTO todos
        }, 100)
    })
    .catch((error) => console.log(error));
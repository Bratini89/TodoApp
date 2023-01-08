const db =  require('../utils/database');
const {DataTypes} = require('sequelize');
const Users = require('./users.model');

const Todos = db.define('todos',{
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    description: {
        type: DataTypes.STRING,
    },
    isComplete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: "is_complete",
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"user_id",
        references: {
            model: Users,
            key: "id",
    },
    },
});

 module.exports = Todos;
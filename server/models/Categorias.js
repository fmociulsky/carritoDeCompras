const Sequelize = require('sequelize');

const db = require('../config/database');

const Categoria = db.define('categorias', {
    nombre :{ type: Sequelize.STRING}
})

module.exports = Categoria;
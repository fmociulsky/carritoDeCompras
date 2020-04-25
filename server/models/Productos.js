const Sequelize = require('sequelize');
const Categoria = require('./Categorias');

const db = require('../config/database');

const Producto = db.define('productos', {
    titulo :{ type: Sequelize.STRING},
    descripcion :{ type: Sequelize.STRING},
    precio :{ type: Sequelize.STRING},
    precio_oferta :{ type: Sequelize.STRING},
    categoria :{ type: Sequelize.INTEGER},
    subcategoria :{ type: Sequelize.INTEGER},
    imagen :{ type: Sequelize.STRING}
})

module.exports = Producto;
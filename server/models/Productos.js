const Sequelize = require('sequelize');

const db = require('../config/database');

const Producto = db.define('productos', {
    titulo :{ type: Sequelize.STRING},
    descripcion :{ type: Sequelize.STRING},
    precio :{ type: Sequelize.STRING},
    precio_oferta :{ type: Sequelize.STRING},
    categoria_id :{ type: Sequelize.INTEGER},
})

module.exports = Producto;
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const productosController = require('../controllers/productosController');

module.exports = function(){
    router.get('/', homeController.mainPage);

    router.get('/productos', productosController.listarProductos);

    return router;
}
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const categoriasController = require('../controllers/categoriasController');
const productosController = require('../controllers/productosController');


module.exports = function(){
    router.get('/', homeController.mainPage);

    router.get('/productos', productosController.listarProductos);

    router.get('/producto', productosController.nuevoProducto);

    router.get('/producto/:id', productosController.detalleProducto);

    router.post('/producto', productosController.guardarProducto);

    router.post('/producto/:id', productosController.actualizarProducto);

    router.get('/categorias', categoriasController.listarCatetogorias);

    router.post('/categorias', categoriasController.guardarCatetogorias);

    return router;
}
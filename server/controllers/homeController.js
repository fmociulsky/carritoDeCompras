const Producto = require('../models/Productos');

exports.mainPage = async (req, res) =>{
    const promises = [];
    const productos = await Producto.findAll();
    console.log(productos);
    
    res.render('index', {
        productos
    });
}
const Producto = require('../models/Productos');

exports.listarProductos = async (req, res) =>{
    /*const promises = [];
    const productos = await Producto.findAll();
    console.log(productos);*/
    
    res.render('producto');
}


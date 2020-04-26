const Producto = require('../models/Productos');
const Categoria = require('../models/Categorias');

exports.mainPage = async (req, res) =>{
    const promises = [];
    const productos = await Producto.findAll();
    const categorias = await Categoria.findAll();
    let categoriasMap = new Map();
    categorias.forEach(categoria=>{
        categoriasMap.set(categoria.id, categoria.nombre);
    });

    productos.forEach(p=>{
        p.dataValues.categoria = categoriasMap.get(p.dataValues.categoria);     
    });

    res.render('index', {
        productos
    });
}
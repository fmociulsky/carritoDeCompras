const Producto = require('../models/Productos');
const Categoria = require('../models/Categorias');

exports.listarProductos = async (req, res) =>{
    const productos = await Producto.findAll();
    
    res.render('productos', {
        productos
    });
}

exports.nuevoProducto = async (req, res) =>{
    const categorias = await Categoria.findAll();
    res.render('producto',{
        categorias
    });
}

exports.detalleProducto = async (req, res) =>{
    const producto = await Producto.findByPk(req.params.id);
    const categorias = await Categoria.findAll();
    
    res.render('producto/detalle', {
        producto,
        categorias
    });
}

exports.guardarProducto = async (req, res) =>{
    let {titulo, descripcion, categoria, precio, precio_oferta, imagen} = req.body;
    Producto.create({
        titulo,
        descripcion,
        categoria,
        precio,
        precio_oferta,
        imagen
    })
        .then(testimonial=>{
            res.redirect("/productos")
        })
        .catch(error=>console.log(error))
}
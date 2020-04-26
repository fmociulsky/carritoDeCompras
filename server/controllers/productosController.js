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

exports.actualizarProducto = async (req, res) =>{
    console.log(req.params.id)
    let {titulo, descripcion, categoria, precio, precio_oferta, imagen} = req.body;
    await Producto.update({ 
        titulo,descripcion, categoria, precio, precio_oferta, imagen
      }, {
        where: {id: req.params.id},
        new: true,
        returning: true, // needed for affectedRows to be populated
        plain: true // makes sure that the returned instances are just plain objects
      });
    const producto = await Producto.findByPk(req.params.id);
    const categorias = await Categoria.findAll();
    res.render("producto/detalle",{
        producto,
        categorias
    });
}
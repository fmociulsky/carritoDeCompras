const Categoria = require('../models/Categorias');

exports.listarCatetogorias = async (req, res) =>{
    console.log('Lista Categorias');
    const categorias = await Categoria.findAll();
    
    res.render('categorias', {
        categorias
    });
}

exports.guardarCatetogorias = async (req, res) =>{
    let {categorias} = req.body;
    let categoriasObject = [];
    categorias.forEach(categoria=>{
        let cat = {'nombre': categoria};
        categoriasObject.push(cat);
    });
    console.log(categoriasObject);

    



    Categoria.bulkCreate(
        categoriasObject
    ).then(()=>{
            res.redirect("/categorias")
        })
        .catch(error=>console.log(error))
   //res.redirect("/categorias");
}
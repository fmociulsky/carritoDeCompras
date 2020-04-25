document.addEventListener("DOMContentLoaded", function() {
    var elements = document.getElementsByTagName("INPUT");
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Este campo no puede quedar vacio");
            }
        };
        elements[i].oninput = function(e) {
            e.target.setCustomValidity("");
        };
    }
})

function editar(e){
    e.preventDefault();
    console.log('Editar');
}

function agregarCategoria(){
    const tabla = document.getElementsByTagName("tbody")[0];
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>
                        <form-group><input class="m-0" type="text" name="categorias"></form-group>
                    </td>`;
    tabla.appendChild(tr);
}

function guardarCategorias(){
    const form = document.getElementsByTagName("form")[0];
    form.submit();
    /*const tabla = document.getElementsByTagName("tbody")[0];
    const nuevasCategorias = [];
    const cats = tabla.getElementsByTagName("input");


    for (let i = 0; i < cats.length; i++) {
        const element = cats[i];
        if(element.value != ""){
            nuevasCategorias.push(element.value);
        }    
    }*/
}
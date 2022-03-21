

//DOM de eventos
document
.getElementById("Formulario-producto")
.addEventListener("submit", function (elemento){

    elemento.preventDefault(); //evalua el comportamiento del elemento

    //obtener valores de formulario
    const nombre = document.getElementById("name").value,
    precio = document.getElementById("precio").value,
    año = document.getElementById("año").value;

    //Crear nuevo objeto producto 
    const producto = new Producto(nombre, precio,año);

    //Crear nuevo usuario
    const usuario = new Usuario();

    //boton de validacion 
    if(nombre == " " || precio == " " || año == " "){
        usuario.showMessege("Por favor insertar nombre de usuario");
    } 

    //Guardar producto 
    usuario.AddProducto(producto);
    usuario.showMessege("Produccto agregado correctamente");
    usuario.restForm();
});

document.getElementById("Lista-producto").addEventListener("click", (elemento)=>{
    const usuario = new Usuario();
    usuario.AddProduct(elemento.target);
    elemento.preventDefault();
})

//Producto Clase

export class Producto{
    constructor(nombre, precio, año){
        this.nombre = nombre;
        this.precio = precio;
        this.año = año;
    }

}
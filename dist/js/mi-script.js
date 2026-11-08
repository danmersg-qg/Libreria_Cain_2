function mostrarcontenidoModal(condicional)
{
    var titulomodal = document.getElementById("txttitulomodal");
    var contenidomodal = document.getElementById("txtcontenidomodal");
    
    if(condicional == "1")
    {
        titulomodal.innerHTML = "Título Modal 1";
        contenidomodal.innerHTML = "Contenido del Modal 1";
    }
    else if(condicional == "2"){
        titulomodal.innerHTML = "Título Modal 2";
        contenidomodal.innerHTML = "Contenido del Modal 2";
    }
} 

var lista= [];

function AgregarElemento(_Producto, _Precio)
{
    var objeto = {
        Producto: _Producto,
        Precio: _Precio
    };
    lista.push(objeto);
    MostrarLista();
}

function MostrarLista(){
    var mostrar = document.getElementById("listadoProducto");
    var contenido = "";
    for(var i=0; i<lista.length; i++)
    {
        contenido = contenido +
        "<div class='col-12 col-md-3'>"+
            "<div class='card mb-2'>" + 
                "<div class='card-body'>" + 
                    "Producto: <label class='fw-bold'>" +lista[i].Producto + "</label><br>" +
                     "Precio: <span class='badge text-bg-success'>"+ lista[i].Precio + "</span> <br> <br>" +
                    "<button class='btn btn-danger' onclick='QuitarProducto("+i+")'>Quitar Producto"+"</button>"+
                "</div>"+
            "</div>" +
        "</div>";
        
    }
    mostrar.innerHTML = contenido;
}
 
function QuitarProducto(index){
    lista.splice(index, 1);
    MostrarLista();
}
 
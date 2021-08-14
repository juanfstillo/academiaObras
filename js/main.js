//  PLANTILLA CLASE 12 - jQuery
//----------------------------------FUNCIONES----------------------------------//
// OCULTAMOS EL CONTEDOR DE NOTIFICACIONES PARA PODER MOSTRARLO LA PRIMERA VEZ CON FADEIN
$("#notificacion").hide();
//CREAMOS UNA ESTRUCTURA HTML POR CADA ROBOT EN DATOSROBOTS

//AGREGAMOS UNA ESTRUCTURA HTML AL CONTENEDOR DE ID contenidoGenerado
function generarHTMLJQ(producto){
  //UTILIZAMOS EL METODO DE jQUERY PREPEND PARA AGREGAR
  $('#contenidoGenerado').append(componenteCard(producto))
}
//----------------------------------EVENTOS----------------------------------//
window.addEventListener('load', () => {
  console.log("¡IMAGENES CARGADAS!");
})
//----------------------------------PROGRAMA PRINCIPAL----------------------------------//
//POR CADA ELEMENTO EN "DATOSROBOTS" VAMOS A CREAR UNA ESTRUCTURA EN EL HTML ASOCIADA.
for(let producto of DATOSAPP){
  //LLAMADA A LA FUNCIÓN DE generarHTML POR CADA ROBOT. PASAMOS LA INFORMACION DEL "robot" POR PARÁMETRO.
  generarHTMLJQ(producto);
}

$('.btncompra').click(function (e) { 
  let seleccionado = CARRITO.find( producto => producto.id == this.id);
  console.log(seleccionado);
  if (seleccionado != undefined){
    seleccionado.vender();
  }else{
    let producto = new Producto(DATOSAPP.find( producto => producto.id == this.id))
    producto.vender();
    CARRITO.push(producto);
  }
  generarSalida(CARRITO);
  //console.log(CARRITO)
});

function generarSalida(carrito){
  $('#carrito').empty();
  let precioFinal = 0;
  for (const producto of carrito) {
    precioFinal += producto.precio;
    $('#carrito').append(`<h4>${producto.nombre} - Juega con  ${producto.raqueta} y tiene nivel ${producto.nivel} // stock: ${producto.stock} // Precio final ${precioFinal}</h4>`);
  }
}


//ES POSIBLE TAMBIEN AGREGAR A TODOS LOS ELEMENTOS SELECCIONADOS (NOTAR QUE AL SE UNA CLASE SE SELECCIONA Y AGREGA A MAS DE UNO)
//$(".card-title").append(componenteBadge('OFERTA','badge-info'));

//Agregamos Jquery ocultos
$("body").prepend(`<h2 "display:none">Bienvenidos al centro de  Tenis <small class="text-muted">de Obras</small></h2>`);
$("h2").fadeIn();
$("h2")
    .animate({fontSize: '2cm', opacity:'0.4'}, "slow",()=>{
    })
      .delay(4000)
        .animate({fontSize: '1cm', opacity:'1'},"slow",()=>{
});

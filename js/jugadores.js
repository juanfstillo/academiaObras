//  PLANTILLA CLASE 12 - jQuery
//----------------------------------FUNCIONES----------------------------------//
// OCULTAMOS EL CONTEDOR DE NOTIFICACIONES PARA PODER MOSTRARLO LA PRIMERA VEZ CON FADEIN
$("#notificacion").hide();
//CREAMOS UNA ESTRUCTURA HTML POR CADA ROBOT EN DATOSROBOTS

//AGREGAMOS UNA ESTRUCTURA HTML AL CONTENEDOR DE ID contenidoGenerado
function generarHTMLJQ(producto){
  //UTILIZAMOS EL METODO DE jQUERY PREPEND PARA AGREGAR
  $('#contenidoGenerado').append(componenteCardJugador(producto))
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


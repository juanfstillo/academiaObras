//  PLANTILLA AFTER AJAX
const APIPROVINCIAS = "https://apis.datos.gob.ar/georef/api/provincias"

$(document).ready(function () {
    //OCULTAMOS EL BOTÓN QUE DISPARA EL MODAL
    $("#btnModal").hide();
    //LLAMAR AL API DE PROVINCIAS
    $.get(APIPROVINCIAS, function(datos,estado){
        $('#selectProvincias').empty();
        //console.log(datos);
        //POR CADA PROVINCIA EN DATOS PROVINCIA CREAMOS UN OPTION
        for (const provincia of datos.provincias) {
            //console.log(provincia);
            $('#selectProvincias').append(`<option value="${provincia.id}">${provincia.nombre}</option>`)
        }
        //OCULTAMOS EL SPINNER DEL MODAL
        $("#spnModal").hide();
        //CARGAMOS LOS MUNICIPIOS EN EL SELECT DE MUNICIOPIOS PARA EL PRIMER MUNICIPIO DE LA LISTA
        cargarMunicios(datos.provincias[0].id);
        //MOSTRAMOS EL BOTON QUE DISPARA EL MODAL
        $("#btnModal").show();
    });
});

$('#selectProvincias').change(function (e) { 
   // console.log($(this).val());
   // console.log($(e.target).val());
   //CADA VEZ QUE CAMBIA EL VALOR DEL SELECT SE REALIZAR UNA LLAMADA AL API PARA CARGAR LOS MUNICIPIOS CORRESPONDIENTES.
   let idProvincia = $(this).val();
   //LA LLAMADA AL API PARA LOS MUNICIPIOS SE REALIZA MEDIANTE UNA FUNCIÒN. ASI PUEDE UTILIZARSE EN LA CARGA INICIAL TAMBIEN.
   cargarMunicios(idProvincia);
   /*
   let apiMunicipios = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${idProvincia}&campos=id,nombre&max=100`
   console.log(apiMunicipios);
   $.get(apiMunicipios, function(datos,estado){
        $('#selectMunicipios').empty();
        //console.log(datos);
        for (const municipio of datos.municipios) {
            //console.log(provincia);
            $('#selectMunicipios').append(`<option value="${municipio.id}">${municipio.nombre}</option>`)
        }
   });
   */
});
//FUNCION QUE REALIZA LA LLAMADA AL API PARA OBTENER LOS MUNICIPIOS SEGUN EL ID DE LA PROVINCIA
function cargarMunicios(id){
   let apiMunicipios = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${id}&campos=id,nombre&max=100`
   console.log(apiMunicipios);
   //SE REALIZA LA LLAMADA GET Y SE CARGAR EL SELECT
   $.get(apiMunicipios, function(datos,estado){
        $('#selectMunicipios').empty();
        //console.log(datos);
        for (const municipio of datos.municipios) {
            //console.log(provincia);
            $('#selectMunicipios').append(`<option value="${municipio.id}">${municipio.nombre}</option>`)
        }
   });
}
//MANEJO DEL EVENTO SUBMIT DEL FORMULARIO EN EL MODAL
$("#modalForm").submit(function (e) { 
    e.preventDefault();
    //console.log($(this).children());
    //OBTENGO TODOS LOS INPUT DEL FORMULARIO ID modalForm
    let inputs = $('#modalForm :input')
    //OBTENGO EL TEXTO DE LA PROVINCIA Y MUNICIPIO SELECCIONADO. RECORDEMOS QUE EN value SE ENCUENTRA EL ID DE LA PROVINCIA Y EL MUNICIPIO
    let provinciaActual = $('#selectProvincias').find(":selected").text()
    let municipioActual = $('#selectMunicipios').find(":selected").text()
    //console.log($('#selectProvincias').find(":selected").text());
    //CREO UN OBJETO LITERAL CON LA ESTRUCTURA DEL FORMULARIO
    let info   = {
        nombre :    inputs[0].value,
        direccion : inputs[1].value,
        provincia : provinciaActual,
        municipio : municipioActual
    }
    console.log(info);
    //AGREGO UNA SALIDA AL HTML CON LA INFORMACION DEL OBJETO
    $("#contenidoGenerado").append(`<div class="card bg-light mb-3" style="max-width: 18rem;">
                                        <div class="card-header">Torneo: ${info.nombre}</div>
                                        <div class="card-body">
                                        <h5 class="card-title">Direccion: ${info.direccion}</h5>
                                        <p class="card-text">${info.provincia} - ${info.municipio}</p>
                                        </div>
                                    </div>`);
    //OCULTO EL MODAL 
    $('#exampleModal').modal('hide')
});
//FUNCION QUE RETORNA UNA PLANTILLA LITERAL CON LOS DATOS DEL ROBOT ENVIADO POR PARAMETRO
function componenteCard(producto){
    return `<div class="card mx-2">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="images/${producto.img}" class="img-thumbnail">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${producto.nombre} ${getBadge(producto.stock)}</h5>
                    <h4 >$ ${producto.precio}</h4>
                    <h4 >Raqueta ${producto.raqueta}</h4>
                    <h4 >Nivel ${producto.nivel}</h4>
                    <button id="${producto.id}" type="button" class="btn btn-info btncompra">Agregar</button>
                  </div>
                </div>
              </div>
            </div>`
            
            
  }
  
function componenteBadge(string, clase){
 return `<span class="badge ${clase}">${string}</span>`;
}

function getBadge(stock){
   if(stock >= 6){
    return componenteBadge('DISPONIBLE', 'badge-info')
   }else if (stock >=1 && stock <=5){
    return componenteBadge('QUEDAN POCOS', 'badge-warning')
   }else if(stock <= 0){
    return componenteBadge('NO DISPONIBLE', 'badge-danger')
   }
}

function componenteCardJugador(producto){
  return `<div class="card mx-2">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="../images/${producto.img}" class="img-thumbnail">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Nombre: ${producto.nombre}</h5>
                  <h4 >Precio: $ ${producto.precio}</h4>
                  <h4 >Raqueta: ${producto.raqueta}</h4>
                  <h4 >Nivel: ${producto.nivel}</h4>
                </div>
              </div>
            </div>
          </div>`
                  
}
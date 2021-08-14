class Producto{
    constructor(literal){
        this.id = literal.id;
        this.nombre = literal.nombre;
        this.edad = literal.edad;
        this.img = literal.img;
        this.precio= literal.precio;
        this.nivel= literal.nivel;
        this.stock    = literal.stock;
        this.raqueta    = literal.raqueta;
        this.cantidad = 0
    }
    vender(){
        if(this.stock > 0){
            this.stock = this.stock - 1;
        }
    }
}
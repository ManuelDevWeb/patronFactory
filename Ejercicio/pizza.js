/* Clase producto */
class producto {
    //Constructor del objeto producto
    constructor(nombreComida, nombreBebida, propina, tipoServicio) {
        this.nombreComida = nombreComida;
        this.nombreBebida = nombreBebida;
        this.propina = propina;
        this.tipoServicio = tipoServicio;
    }
}

//Hereda de la clase producto
class pizza extends producto {
    //Constructor del objeto pizza
    constructor(cantidad, precioPizza, nombreComida = '', nombreBebida = '', propina = '', tipoServicio = '', grosorMasa = '', bordeMasa = '', tamaño = '', condimentos = '') {
        //Llamando atributos del padre
        super(nombreComida, nombreBebida, propina, tipoServicio);
        this.cantidad = cantidad;
        this.precioPizza = precioPizza;
        this.datosPiza = {
            'Nombre: ': nombreComida,
            'Bebida: ': nombreBebida,
            'Masa: ': grosorMasa,
            'Borde pizza: ': bordeMasa,
            'Tamaño pizza: ': tamaño,
            'Condimentos: ': condimentos,
            'Cantidad propina: ': propina,
            'Tipo de servicio: ': tipoServicio,
            'Cantidad pizzas: ': cantidad,
            'Precio pizza c/u': precioPizza,
            'Precio total pizzas: $': cantidad * precioPizza,
            '****************************************': '',
        }
    }

    //Metodo que retorna los datos del producto
    getDatosPizza() {
        console.log(this.datosPiza);
    }
}

//Exportando la clase pizza
module.exports = pizza;
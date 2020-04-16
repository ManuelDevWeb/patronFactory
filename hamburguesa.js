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
class hamburguesa extends producto {
    //Constructor del objeto hamburguesa
    constructor(cantidad, precioGaseosa, precioHamburguesa, nombreComida = '', nombreBebida = '', propina = '', tipoServicio = '', tipoPan = '', terminoCarne = '', salsas = '', vegetales = '') {
        //Llamando atributos del padre
        super(nombreComida, nombreBebida, propina, tipoServicio);
        this.cantidad = cantidad;
        this.precioGaseosa = precioGaseosa;
        this.precioHamburguesa = precioHamburguesa;
        this.DatosHamburguesa = {
            'Nombre: ': nombreComida,
            'Bebida: ': nombreBebida,
            'Tipo Pan: ': tipoPan,
            'Termino Carne: ': terminoCarne,
            'Salsas: ': salsas,
            'Vegetales: ': vegetales,
            'Cantidad propina: ': propina,
            'Tipo de servicio: ': tipoServicio,
            'Precio Hamburguesa: ': precioHamburguesa,
            'Precio Gaseosa: ': precioGaseosa,
            'Cantidad Hamburguesas y Gaseosas: ': cantidad,
            'Precio de Hamburguesas + Gaseosas: $': cantidad * precioHamburguesa + cantidad * precioGaseosa,
            '****************************************': '',
        }
    }

    //Metodo que retorna los datos del producto
    getDatosHamburguesa() {
        console.log(this.DatosHamburguesa);
    }
}

//Exportando la clase hamburguesa
module.exports = hamburguesa;
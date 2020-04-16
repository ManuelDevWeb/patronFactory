//Importamos el archivo piza.js para poder tener acceso a la clase hamburguesa
const hamburguesa = require('./hamburguesa');

//Crecion de la clase especial
class especial {
    // Al instanciar un objeto de esta clase se le debe enviar los parametros cantidad, precioGaseosa y precioHamburguesa
    constructor(cantidad, precioGaseosa, precioHamburguesa) {
        return new hamburguesa(cantidad, precioGaseosa, precioHamburguesa, 'Hamburguesa', 'Pepsi', '5000$', 'Domicilio', 'Paisa', 'Pan Normal', 'Muy asada', ['roja,mostaza'], ['lechuga', 'cebolla']);
    }
}

//Exportando la clase especial
module.exports = especial;
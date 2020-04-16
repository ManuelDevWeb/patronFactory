//Importamos el archivo piza.js para poder tener acceso a la clase hamburguesa
const hamburguesa = require('./hamburguesa');

//Crecion de la clase sencilla
class sencilla {
    // Al instanciar un objeto de esta clase se le debe enviar los parametros cantidad, precioGaseosa y precioHamburguesa
    constructor(cantidad, precioGaseosa, precioHamburguesa) {
        return new hamburguesa(cantidad, precioGaseosa, precioHamburguesa, 'Hamburguesa', 'Coca-cola', '5000$', 'Para llevar', 'Argentina', 'Pan Nieve', '3/4', ['rosada,mostaza'], ['lechuga', 'tomate']);
    }
}

//Exportando clase sencilla
module.exports = sencilla;
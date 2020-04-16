//Importando los archivos .js para poder tener acceso a las clases especial y sencilla
var especial = require('./hamburguesaEspecial');
var sencilla = require('./hamburguesaSencilla');

//Creacion de la clase pizzaFactory
class hamburguesaFactory {
    //Metodo que recibe parametro tipoHamburguesa
    crearHamburguesa(tipoHamburguesa) {
        /* Estructura switch de tipoPizza, de acuerdo a cada tipoHamburguesa que le indiquemos este nos instanciara
           un objeto de la clase sencilla o especial respectivamente y se deben enviar sus parametros  */
        switch (tipoHamburguesa) {
            case 'especial':
                return new especial(2, 4000, 18000);
            case 'sencilla':
                return new sencilla(3, 4000, 12000);
            default:
                {
                    console.log('No hay de ese tipo de hamburguesa');
                }
        }
    }
}

//Exportando la clase hamburguesaFactory
module.exports = new hamburguesaFactory;
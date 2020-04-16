//Importando los archivos pizzaHawaiana.js y pizzaMexicana.js para poder tener acceso a las clases hawaiana y mexicana
var hawaiana = require('./pizzaHawaiana');
var mexicana = require('./pizzaMexicana');

//Creacion de la clase pizzaFactory
class pizzaFactory {
    //Metodo que recibe parametro tipoPizza
    crearPizza(tipoPizza) {
        /* Estructura switch de tipoPizza, de acuerdo a cada tipoPizza que le indiquemos este nos instanciara
           un objeto de la clase hawaiana o mexicana respectivamente y se deben enviar sus parametros  */
        switch (tipoPizza) {
            case 'hawaiana':
                return new hawaiana(5, 18000);
            case 'mexicana':
                return new mexicana(3, 32000);
            default:
                {
                    console.log('No hay ese tipo de pizza');
                }
        }
    }
}

//Exportando la clase pizzaFactory
module.exports = new pizzaFactory;
//Importamos el archivo piza.js para poder tener acceso a la clase pizza
var pizza = require('./pizza');

//Crecion de la clase hawaiana
class hawaiana {
    // Al instanciar un objeto de esta clase se le debe enviar los parametros cantidad y precioPizza
    constructor(cantidad, precioPizza) {
        return new pizza(cantidad, precioPizza, 'Pizza', 'Coca-cola', '3000$', 'Domicilio', 'Delgada', 'Sin queso', '8 personas', ['Oregano', 'pimienta', 'sal de ajo']);
    }
}

//Exportando la clase hawaiana
module.exports = hawaiana;
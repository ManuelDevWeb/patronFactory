//Importando el archivo pizza.js para poder tener acceso a la clase pizza
const pizza = require('./pizza');

//Creacion de la clase mexicana
class mexicana {
    //Al instanciar un objeto de esta clase se le debe enviar los parametros cantidad y precioPizza
    constructor(cantidad, precioPizza) {
        return new pizza(cantidad, precioPizza, 'Pizza', 'Sprite', '2500$', 'Comer en local', 'Gruesa', 'Sin queso', '16 personas', ['Oregano', 'pimienta']);
    }
}

//Exportando la clase mexicana
module.exports = mexicana;
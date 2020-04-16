/**
 * PATRÓN DE DISEÑO "FACTORY" Y "ABSTRACT FACTORY"
 * Autor: Carlos Manuel Valencia Londoño
 * Fecha 16/04/2020
 * 
 * Se diseño el patron Factory para un negocio que se dedica
 * a la venta de productos como pizzas y hamburguesas:
 * 
 * 1. Se relizaron las clases pizza y hamburguesa
 * 2. Posteriormente se realizaron los modelos de los tipos de pizzas
 *    y hamburguesas que se tienen.
 * 3. Se realiza la implementacion del factory en las clases
 *    pizzaFactory y hamburguesaFactory.
 * 4. Finalmente se realizo el archivo principal main.js y se ejecuto
 *    el codigo con exito.
 */


//Importando todos los archivos .js que necesitamos para tener acceso a cada una de sus clases.
var pizzaFactory = require('./pizzaFactory');
var hamburguesaFactory = require('./hamburgesaFactory');

//Llamamos el metodo de la clase pizzaFactory y le enviamos su parametro tipoPizza
var hawaianaFactory = pizzaFactory.crearPizza('hawaiana');
var mexicanaFactory = pizzaFactory.crearPizza('mexicana');

//Llamamos el metodo de la clase hamburguesaFactory y le enviamos su parametro tipoHamburguesa
var especialFactory = hamburguesaFactory.crearHamburguesa('especial');
var sencillaFactory = hamburguesaFactory.crearHamburguesa('sencilla');


//Llamando los respectivo metodos de cada clase para mostrar la informacion de cada producto
//Pizzas
hawaianaFactory.getDatosPizza();
mexicanaFactory.getDatosPizza();
//Hamburguesas
especialFactory.getDatosHamburguesa();
sencillaFactory.getDatosHamburguesa();
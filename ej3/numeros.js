// Declarar una función con el nombre esPar, esta función acepta un número como parámetro. Retorna un valor booleano true en caso de que el valor sea par y false en caso de que no lo sea. Exportar la función index.js.
// Instalar el módulo logplease como solo dependencia de desarrollo de nuestro proyecto. 

const Logger = require('logplease');
const logger = Logger.create('utils');

// exports.esPar = (num) => {
//     if(num %2 === 0){
//         return true
//     }else {
//         return false
//     }  
// };

exports.esPar = (num) => {
    if(num %2 === 0){
        return logger.info(`El número es par`)
    }else {
        return logger.error(`El número no es par`)
    }  
};



//   Ejercicio 2
//OK // Crear una carpeta con el nombre ej2
//OK // Inicializar un proyecto de Node.js utilizando NPM dentro de la carpeta ej2
//OK // El nombre del proyecto tiene que ser Ejercicio-2
//OK // Crear un archivo index.js
//OK // Instalar el módulo logplease como solo dependencia de desarrollo de nuestro proyecto
// Leer la documentación del módulo para aprender a usarlo
// Configurar el proyecto para que al ejecutar npm start ejecute el código del archivo index.js. Mostrar en consola:
// Hola Mundo de Node (usando el método debug)
// Noticias de última hora, Node.js me encanta!! (usando el método info)
// Tirando warnings como campeones (usando el método warn)
// Algo no está bien!!! (usando el método error)

const Logger = require('logplease');
const logger = Logger.create('utils');

logger.debug(`Hola Mundo de Node`);
logger.info(`Noticias de última hora, Node.js me encanta!!`);
logger.warn(`Tirando warnings como campeones`);
logger.error(`Algo no está bien!!!`);

// Ejercicio 3
// Crear una carpeta con el nombre ej3
// Inicializar un proyecto de Node.js utilizando NPM dentro de la carpeta ej3
// El nombre del proyecto tiene que ser Ejercicio-3
// Crear un archivo index.js
// Crear un archivo numeros.js

// Importar el módulo logplease. Importar el módulo numeros Llamar a la función esPar con los siguientes valores:
// 2, 3, 101, 201, 202, 100
// Si el número es par mostrar en consola el siguiente mensaje utilizando los métodos indicados del módulo logplease:
// El número es par (utilizar el método info)
// El número no es par (utilizar el método error)


const numeros = require("./numeros");

console.log(numeros.esPar(2));
console.log(numeros.esPar(3));
console.log(numeros.esPar(101));
console.log(numeros.esPar(201));
console.log(numeros.esPar(202));
console.log(numeros.esPar(100));




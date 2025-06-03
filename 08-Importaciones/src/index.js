// Importing functions and objects from other modules de la manera moderna utilizada en Angular y React
import { getTitle, getAuthor } from "./functions.js";
import { curso } from "./objects.js";

// Se desestructura el objeto functions del archivo functions.js
// const { getTitle, getAuthor } = require("./functions");
// const { curso } = require("./objects");

// Se desestructura el objeto curso del archivo objects.js
const { nombre, author } = curso

console.log(getTitle());
console.log(getAuthor('Sergie Code'));
console.log(nombre);
console.log(author);
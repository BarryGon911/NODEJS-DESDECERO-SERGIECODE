// Forma antigua de importar módulos en NodeJS

const fs = require('fs');
// console.log(fs);

const poema = fs.readFileSync('./poema.txt', 'utf-8');
// console.log(poema);

const poemaModified = poema.replace(/NodeJS/ig, 'Node.js');

fs.writeFileSync('./poema-copy.txt', poema, 'utf-8');
fs.writeFileSync('./poema-modified.txt', poemaModified, 'utf-8');
console.log('El poema se ha copiado correctamente');
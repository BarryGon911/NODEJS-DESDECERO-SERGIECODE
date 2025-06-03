// La forma de exportar funciones en ES6 "ECMA Script 6" es la siguiente:

export const getTitle = () => "Curso de NodeJS";
export const getAuthor = (author) => `El autor del curso es: ${author}`;

/*
const getTitle = () => "Curso de NodeJS";
const getAuthor = (author) => `${getAuthor}`;

Exporting functions using CommonJS syntax antes de ES6
module.exports = {
  getTitle,
  getAuthor
};
*/

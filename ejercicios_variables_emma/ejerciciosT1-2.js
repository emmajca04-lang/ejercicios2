// Ejercicios · T1.2 - Tipos de datos I · Primitivos

// Ejercicio 1 (básico) · ¿Qué saldrá por consola?
console.log(1 + '1'); // 11
console.log(typeof '42'); // string
console.log(2 + 3 * 4); // 14
console.log(17 % 5); // 3,4 // 2. Es el resto de dividir 17 entre 5
console.log('Godofredo'.length); // 9 (numero de characters)
console.log(10 === '10'); // false, uno es texto y el otro numero
console.log('Ornitorrinco'.toUpperCase().includes('RINCO')); // true
console.log(typeof (5 > 3)); // number? true // 'boolean' La comparación devuelve true, que es booleano
console.log(`${2 + 2} manzanas`); // 4 manzanas
console.log(!(3 >= 3) || 'a' !== 'b'); // false // true, la segunda condición es verdadera

// Ejercicio 2 (medio) · La ficha del libro
const title = 'La venganza de Xindasvinto';
const author = 'Ruperto Gil';
const pages = 320;
const isRead = true;

const bookCard = `${title} de ${author}
${pages} paginas
Leido: ${isRead}`

const isLongBook = pages > 300;

const hasRevengeInTitle = title.toLowerCase().includes('venganza');

const titleLength = title.length;

console.log(bookCard, isLongBook, hasRevengeInTitle, titleLength);

// Ejercicio 3 (reto) · ¿Nombre de usuario válido?

const username = 'godo';

const isValidUsername = username.length >=3 && username.length <=15 && !username.startsWith('_') && !username.includes(' ');

console.log(isValidUsername);



function isValidUsername(username) {
  return username.length >= 3 &&
         username.length <= 15 &&
         !username.startsWith('_') &&
         !username.includes(' ');
}

console.log(isValidUsername('godo'));

const hasCourt = true;
const players = 4;
const isRaining = false;

const canPlay = hasCourt && players === 4 && !isRaining;

const needsMorePlayers = players < 4;

console.log(canPlay, needsMorePlayers);


function canPlay(hasCourt, players, isRaining) {
  return hasCourt && players === 4 && !isRaining;
}

console.log(canPlay(true, 4, false));
console.log(canPlay(true, 3, false));  
console.log(canPlay(true, 4, true));   
console.log(canPlay(false, 5, false)); 
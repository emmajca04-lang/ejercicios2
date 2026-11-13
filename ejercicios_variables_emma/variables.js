// Ejercicio 3 (reto) · Intercambiar estanterías

let shelfA = 'Libros';
let shelfB = 'Discos';

// uso temp para guardar el valor original de shelfA,
// porque si lo cambio directamente perderia su valor
let temp = shelfA;

shelfA = shelfB;
shelfB = temp;

console.log(shelfA, shelfB);

// 2. calcular el total del carrito

let precio = 12.5;
let cantidad = 3;
let descuento = 5;

let subtotal = precio * cantidad;
let totalCarrito = subtotal - descuento;

console.log('Subtotal:', subtotal, '€');
console.log('Total:', totalCarrito, '€');


// Ejercicios de práctica · T1.1 - Variables
// Ejercicio 1 (básico) · Sigue la pista a la memoria

let coffees = 2;
let mood = 'dormido';

coffees = coffees + 1;
mood = 'despierto';

let total = coffees * 2;

coffees = 0;

console.log(coffees, mood, total);

/*
linea   coffees   mood       total
1       2         -          -
2       2         dormido    -
3       3         dormido    -
4       3         despierto  -
5       3         despierto  6
6       0         despierto  6
*/
// resultado: 0 despierto 6
// no cambia porque total ya tenia guardado el resultado 6
// antes de que coffees cambiara a 0


//Ejercicio 2 (básico) · ¿const o let?

const pizzeriaName = 'Pizzería Rodofasio';
const pizzaPrice = 9;
let orders = 0;
let deliveryStatus = 'En la pizzería';

// entra un pedido
orders = orders + 1;

// el repartidor sale
deliveryStatus = 'En camino';

console.log(pizzeriaName + ': ' + orders + ' pedido, repartidor ' + deliveryStatus);


// Ejercicio 3 (medio) · Encuentra el bug: el cine de Rutofisio

let totalPrice;
const pricePerTicket = 8;
const numTickets = 3;
const popcornPrice = 5;

// muevo el console.log al final porque totalPrice todavía no tenía valor
let finalPrice = pricePerTicket * numTickets;

// uso let porque después voy a cambiar el valor de finalPrice
finalPrice = finalPrice + popcornPrice;

totalPrice = finalPrice;

console.log('Total:', totalPrice, '€');


// Ejercicio 4 (medio) · La tortilla para todo el mundo

// Cantidades de la receta original
let huevos = 6;
let patatas = 4;
let cebollas = 1;
let personasReceta = 4;
let invitados = 10;

// primero calculo cuanto toca por persona:
// 6 huevos / 4 personas = 1.5 huevos por persona
// despues multiplico por los 10 invitados:
// 1.5 * 10 = 15 huevos
// cantidad de cada ingrediente por persona:
let huevosPorPersona = huevos / personasReceta;
let patatasPorPersona = patatas / personasReceta;
let cebollasPorPersona = cebollas / personasReceta;

// cantidad necesaria para todos los invitados
let huevosTotal = huevosPorPersona * invitados;
let patatasTotal = patatasPorPersona * invitados;
let cebollasTotal = cebollasPorPersona * invitados;

console.log('Para ' + invitados + ' personas: ' + huevosTotal + ' huevos, ' + patatasTotal + ' patatas y ' + cebollasTotal + ' cebollas');


// Ejercicio 5 (reto) · El ascensor de Gutufacio

// posicion inicial del ascensor
let currentFloor = 0;
let previousFloor;
let floorsTravelled = 0;

// movimientos del ascensor
const upFour = 4;
const downTwo = 2;
const upFive = 5;

// primer viaje: sube 4 plantas
previousFloor = currentFloor;
currentFloor = currentFloor + upFour;
floorsTravelled = floorsTravelled + upFour;

// segundo viaje: baja 2 plantas
previousFloor = currentFloor;
currentFloor = currentFloor - downTwo;
floorsTravelled = floorsTravelled + downTwo;

// tercer viaje: sube 5 plantas
previousFloor = currentFloor;
currentFloor = currentFloor + upFive;
floorsTravelled = floorsTravelled + upFive;

console.log(`Planta actual: ${currentFloor}
Planta anterior: ${previousFloor}
Plantas recorridas: ${floorsTravelled}`);

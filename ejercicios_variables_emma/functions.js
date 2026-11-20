function sum(num1, num2, num3) {
    console.log(num1 + num2 + num3)
};

sum(5, 5, 5);



function isValidUsername(username) {
    return username.length >= 3 &&
    username.length <= 15 &&
    !username.startsWith('_') &&
    !username.includes(' ');
}

console.log(isValidUsername('godo'));
console.log(isValidUsername('_rodofasio'));
console.log(isValidUsername('gu'));
console.log(isValidUsername('ruperto el grande'));
console.log(isValidUsername('abc'));
console.log(isValidUsername('xindasvininto_2025'));


const name = 'Godo';
const lastName = 'Fredo';

function getFullName(name, lastName) {
    return (name +  ' ' + lastName)
};

console.log(getFullName('Godo', 'Fredo'))


const batteryLevel = 80
const isCharging = true

function checkBattery(batteryLevel, isCharging) {
    if (isCharging === true) {
        console.log("Cargando (" + batteryLevel + "%)")
    } 
    else if (!isCharging && batteryLevel <=5){
            console.log("Bateria critica: el movil se apagara pronto")
        }
    else if (isCharging === false && batteryLevel >=20) {
        console.log("Bateria baja")
    }
    else {
        console.log('Bateria correcta')
    }
};

checkBattery (80, false)

const age = 10
const withAdult = false
const rating = '+12' //'TP' '+12' '+16' '+18'

function checkMovieEntrance(age, withAdult, rating){
if (rating === 'TP' ) {
    console.log('Puede entrar');
} else if (rating === '+12' && (age >= 12 || age >=7 && withAdult)) {
    console.log('Puede entrar')
} else if (rating === '+16' && age >=16){
    console.log('Puede entrar')
} else if (rating === '+18' && age >=18){
    console.log('Puede entrar')
} else if (rating !== 'TP' && rating !== '+12' && rating !== '+16' && rating !== '+18'){
    console.log('Classificacion desconocida')
}else {
    console.log('No puede entar')
}}

checkMovieEntrance(10, false, 'TP')
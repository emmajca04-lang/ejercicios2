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
    return console.log(name, lastName)
};

getFullName(name, lastName)


function calculateTip(bill, percent = 10) 

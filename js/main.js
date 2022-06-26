
const cal = prompt('+ OR -');

const no1 = parseFloat(prompt('first no.'));
const no2 = parseFloat(prompt('Enter no. '));

let result;

if (cal == '+') {
    result = no1 + no2;
}
else {
    result = no1 - no2;
}
console.log(prompt(result))
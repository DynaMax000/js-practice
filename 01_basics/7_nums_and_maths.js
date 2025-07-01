const score = 400;
console.log(score); // Number

const balance = new Number(100); // manually assigned Number object
console.log(balance); // Number object

console.log(balance.toString().length); // "100" (converts Number object to string)
console.log(balance.toFixed(2)); // "100.00" (formats number to 2 decimal places)

const otherBalance = 200.4567;
console.log(otherBalance.toPrecision(4)); // "200" (formats number to 4 significant digits)

const hundreds = 10000000;
console.log(hundreds.toLocaleString()); // "1,000,000" (formats number with commas)
console.log(hundreds.toLocaleString('en-US')); // "10,000,000" (formats number with commas in US locale)

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308 (largest number in JavaScript)
console.log(Number.MIN_VALUE); // 5e-324 (smallest positive number)

// +++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-2)); // 2 (absolute value)
console.log(Math.round(4.6)); // 5 (rounds to nearest integer)
console.log(Math.round(4.4)); // 4 (rounds to nearest integer)
console.log(Math.ceil(4.1)); // 5 (rounds up)
console.log(Math.floor(4.9)); // 4 (rounds down)
console.log(Math.min(1, 2, 3, -1)); // -1 (minimum value)
console.log(Math.max(1, 2, 3, -1)); // 3 (maximum value)


console.log(Math.random()); // random number between 0 and 1
console.log((Math.random() * 10) + 1); // random number between 1 and 10
console.log(Math.random() * 10); // random number between 0 and 9

const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * (max - min + 1))) + min); // random number between 10 and 20
let score = "33abc"; // not pure number 
// score = "33"; // 33
// score = null; // 0
// score = undefined; // NaN
// score = true; // 1
// score = "string" // NaN

console.log(typeof score);

let valueinNumber = Number(score);
console.log(typeof score);
console.log(typeof valueinNumber);

console.log(valueinNumber); // NaN (Not a Number)


// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

let isLoggedIn = 1;
isLoggedIn = "string"; // "string" (string) => true
isLoggedIn = ""; // "" (string) => false

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true


let someNumber = 33;

let someString = String(someNumber);
console.log(someString); // "33" 
console.log(typeof someString); // string


// ************** Operations ***************

let value = 3;
let ngValue = -value;
console.log(ngValue); // -3

// basic arithmetic operations
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 2);

let str1 = "Hello";
let str2 = "World";

let str3 = str1 + " " + str2; // Concatenation
console.log(str3); // "Hello World"

console.log("1" + 2); // "12" (string concatenation) string first 
console.log(1 + "2"); // "12" (string concatenation) number first

console.log("1" + 2 + 2); // "122"
console.log(1 + 2 + "2"); // "32" 

console.log(+true); // 1 (unary plus operator converts true to number)
console.log(+""); // 0 (unary plus operator converts empty string to number)

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2; // Chained assignment

let gameCounter = 100;
gameCounter++; // postfix increment
++gameCounter; //prefix increment
console.log(gameCounter);
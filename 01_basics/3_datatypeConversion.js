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
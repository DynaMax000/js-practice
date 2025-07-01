// array

const myArr = [1, 2, 3, 4, 5];
const myHeroes = new Array('Batman', 'Superman', 'Wonder Woman');

// console.log(myArr[0]);

// Array Methods
// console.log(myArr.length); // 5
myArr.push(6); // Adds 6 to the end of the array
myArr.push(7); // Adds 7 to the end of the array
// console.log(myArr); // [1, 2, 3, 4, 5, 6, 7]
// console.log(myArr.pop()); // Removes the last element (7) and returns it

myArr.unshift(12); // Adds 12 to the beginning of the array
// console.log(myArr); // [12, 1, 2, 3, 4, 5, 6]
myArr.shift(); // Removes the first element (1) and returns it
// console.log(myArr); // [1, 2, 3, 4, 5, 6]

// console.log(myArr.includes(3)); // true
// console.log(myArr.indexOf(3)); // 2

const newArr = myArr.join(); // Converts the array to a string
// console.log(newArr); // "1,2,3,4,5,6"
// console.log(typeof newArr); // "string"

// slice and splice
// console.log("A: ", myArr);
const myn1 = myArr.slice(0, 3); // Returns a new array from index 0 to 2 (not including 3)
// console.log(myn1);
// console.log("B: ", myArr);

const myn2 = myArr.splice(0, 3); // Removes 3 elements starting from index 1 and returns them
// console.log("C: ", myArr);
// console.log(myn2); // [1, 2, 3]

// splice changes the original array whereas slice does not

const marvelHeroes = ["Thor", "Iron Man", "Captain America"];
const dcHeroes = ["Batman", "Superman", "Wonder Woman"];

// marvelHeroes.push(dcHeroes); // Array inside Array
// console.log(marvelHeroes[3][1]);

const heroes = marvelHeroes.concat(dcHeroes); 
// console.log(heroes );

const allNewHeroes = [...marvelHeroes, ...dcHeroes]; // Spread operator
// console.log(allNewHeroes); 

const anotherArr = [1, 2, 3, 4, 5, [6, 7, 8], [3, 5, 8, [3, 2, 1]]];

const realAnotherArr = anotherArr.flat(Infinity);
// console.log(realAnotherArr); // Flattens the array to a single level

console.log(Array.isArray("Hello World")); // false
console.log(Array.from("Hello World")); // Converts a string to an array of characters

console.log(Array.from({name: "hello"})); // interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Creates an array with the scores
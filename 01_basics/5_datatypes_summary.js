// primitive and non primitive data types in JavaScript categorized based on how the data is stored and accessed in memory.

// primitive data types (7): Number, String, Boolean, null, undefined, Symbol, BigInt
const score = 100;
const scoreValue = 100.3 // Number data type (primitive)
const name = "John Doe"; // String data type (primitive)
const isActive = true; // Boolean data type (primitive)
const user = null; // Null data type (primitive)
let notDefined; // Undefined data type (primitive)
const id = Symbol("123"); // Symbol data type (primitive)
const anotherId = Symbol("123"); // Symbol data type (primitive)
const bigNumber = 1234567890123456789012345678901234567890n; // BigInt
console.log(id === anotherId); // false (Symbols are unique)
// data type (primitive)

// non-primitive [Reference] data types (3): object, array, function


const heroes = ["Superman", "Batman", "Wonder Woman"]; // Array data type (non-primitive)

const person = {
  name: "John",
  age: 30
}; // Object data type (non-primitive)

const greet = function() { 
  // Function data type (non-primitive)
  console.log("Hello World!");
};

console.log(typeof user); // "object" (null is considered an object in JavaScript)
console.log(typeof notDefined); // "undefined" (not defined variable)
console.log(typeof greet); // "function"



// +++++++++++++++++++++++++++++++++++++++++

// Stack and Heap Memory in JavaScript
// Stack memory is used for primitive data types and function calls, while heap memory is used for non-primitive data types like objects and arrays.

let myName = "John"; // Stored in stack memory
let anotherName = myName; // Copying value, stored in stack memory
anotherName = "Doe"; // Changing anotherName does not affect myName

console.log(myName); // "John"
console.log(anotherName); // "Doe"

let userOne = {
  email: "userOne@google.com",
  id: 123
}; // Stored in heap memory


let userTwo = userOne; // Copying reference, both point to the same object in heap memory
userTwo.email = "userTwo@google.com"; // Changing userTwo.email affects userOne.email

console.log(userOne.email); 
console.log(userTwo.email); 


// Heap => Reference
// Stack => Value
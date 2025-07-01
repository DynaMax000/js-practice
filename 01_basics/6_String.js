const name = "John Doe "; 
const age = 30;

// old way
// console.log(name + age + " years old");

// new way
console.log(`Hello my name is ${name} and I am ${age} years old.`);

const gameName = new String("Call-of-Duty");
console.log(gameName); // String object
console.log(typeof gameName); // "object" (String object)
console.log(gameName.length); // 12 (length of the string)

// gets all the properties and methods of the String object
console.log(gameName.__proto__); // String.prototype (shows the prototype of the String object)

console.log(gameName[0]); // "C" (accessing the first character)
console.log(gameName.toUpperCase()); // "CALL OF DUTY" (converts to uppercase)

console.log(gameName.charAt(5)); // "call of duty" (converts to lowercase)
console.log(gameName.indexOf("D")); // 8 

const newString = gameName.substring(0, 4); // 0 1 2 3
console.log(newString); // "Call"

const newString2 = gameName.slice(-8, -4);  
console.log(newString2);
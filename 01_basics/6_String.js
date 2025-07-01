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
// can't use -ve in subsring

const newString2 = gameName.slice(-8, 12); // 8 from end 
// C a l l - o f - D u t  y
// 0 1 2 3 4 5 6 7 8 9 10 11
// 11 10 9 8 7 6 5 4 3 2 1 0
//         - o f - D u t  y
console.log(newString2); // -of-Duty

const newString3 = "       John Doe";
console.log(newString3);
console.log(newString3.trim());

const url = "https://john.com/john%20doe";
const newUrl = url.replace("%20", "-"); // replace %20 with -
console.log(newUrl); // "https://john.com/john-doe"
console.log(url.includes("john")); // true (checks if the string contains "john")

console.log(gameName.split()); // ["Call-of-Duty"] (splits the string into an array)
console.log(gameName.split("-")); // ["Call", "of", "Duty"] (splits the string into an array using "-" as a separator)
console.log(gameName.split(" ")); // ["Call", "of", "Duty"] (splits the string into an array using space as a separator)
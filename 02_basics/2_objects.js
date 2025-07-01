// objects

// singleton <= constructors
// no singleton <= literals

// Singleton object from constructor
Object.create

// object literals 
const mySym = Symbol("key1");
// console.log(mySym); // Symbol(key1)
const obj = {
  "name": "john",
  "full name": "john doe",
  "age": 30,
  "isEmployed": true,
  [mySym]: "myKey1",
}

// console.log(obj);

// two ways to access object properties
// dot notation
// useful when property names are valid identifiers
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.isEmployed);
// console.log(obj.full name); // SyntaxError: Unexpected identifier

// bracket notation
// useful when property names are dynamic or not valid identifiers
// console.log(obj["name"]);
// console.log(obj["age"]);
// console.log(obj["isEmployed"]);
// console.log(obj["full name"]); // "john doe"
// console.log(obj[mySym]); // "myKey1"
// console.log(typeof obj[mySym]); // "string"

// obj.name = "jane"; // update property
// console.log(obj.name); // "jane"

// Object.freeze(obj); // make object immutable
// obj.name = "john"; // this will not change the name property
// console.log(obj.name); // "jane" (remains unchanged)

obj.greeting = function() {
  console.log("Hello User");
}

// console.log(obj.greeting); // [Function: greeting]
// console.log(obj.greeting()); // Hello User

obj.greetingTwo = function() {
  console.log(`Hello ${this.name}`); // this refers to the property of the same object in this case object obj
}
// console.log(obj.greetingTwo()); // Hello john

const user = new Object(); // creates an empty object
// console.log(user);

user.name = "Sammy";
user.age = 25;
user.isEmployed = false;

// console.log(user);

const userTwo = {
  email: "userTwo@example.com",
  fullName: {
    userFullName: {
      firstName: "John",
      lastName: "Doe"
    }
  }
}; 

// console.log(userTwo.fullName.userFullName.firstName); // John
// console.log(userTwo.fullName); 

const obj1 = {
  1: "a",
  2: "b",
}

const obj2 = {
  3: "c",
  4: "d",
}

// const obj3 = {obj1, obj2}; // this will create an object with obj1 and obj2 as properties
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2); // merging two objects using Object.assign
// // Object.assign(target, source1, source2, ...);
// console.log(obj3);

// Merging two objects using spread operator
const obj3 = {
  ...obj1,  // spread operator to merge obj1 and obj2
  ...obj2,
}
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "user1@example.com"
  },
  {
    id: 2,
    email: "user2@example.com"
  },
  {
    id: 3,
    email: "user3@example.com"
  },
]

// console.log(users[0].id);
// console.log(Object.keys(users[0])); // ["id", "email"]
// console.log(Object.values(users[0])); // [1, "user1@example.com"]
// console.log(Object.entries(users[0])); // [["id", 1], ["email", "user1@example.com"]]

// console.log(userTwo.hasOwnProperty("email")); // true
// console.log(userTwo.hasOwnProperty("age")); // false


const course = {
  courseName: "JavaScript Basics",
  price: 999,
  courseInstructor: "John Doe",
}

// destructuring the object
const {courseInstructor: instructor} = course;
console.log(instructor); // John Doe
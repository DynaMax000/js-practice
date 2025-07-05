// for of

// ["", "", ""];
// [{}, {}, {}];

const arr = [1, 2, 3, 4, 5];
for (const e of arr) {
  // console.log(e);
}

const greet = "hello";
for (const e of greet) {
  if (e == 'l') {
    // console.log("Found the letter l");
    break;
  }
  // console.log(`Each caracter is: ${e}`);
}

// map
const map = new Map();
map.set("IN", "India");
map.set("US", "United States");

for (const [key, value] of map) {
  // console.log(`Key: ${key}, Value: ${value}`);
}

// const myObj = {
//   "game1": "NFS",
//   game2: "FIFA",
// }

// for of not work with objects directly
// for(const [key, value] of myObj) {
//   console.log(key, value);
// }

const myObj = {
  game1: "NFS",
  game2: "FIFA",
  game3: "PUBG",
}

for (const key in myObj) {
  // console.log(key);
  // console.log(myObj[key]); // print value
  // console.log(`${key} is ${myObj[key]}`);
}

const gameArr = ["NFS", "FIFA", "PUBG"];
for (const key in gameArr) {
  // console.log(key); // prints index
  // console.log(gameArr[key]); // prints value
}

const codingLanguages = ["JavaScript", "Python", "Java", "C++", "Ruby"];
codingLanguages.forEach(element => {
  // console.log(element);
});

// codingLanguages.forEach(function (item) {
//   console.log(item);
// });

codingLanguages.forEach(prinMe);

function prinMe(item) {
  // console.log(item);
}

// const func = () => {
//   console.log("This is arrow function");
// }

codingLanguages.forEach((item, index, arr) => {
  // console.log(`Item: ${item}, Index: ${index}, Array: ${arr}`);
});

const myCoding = [
  {
    language: "JavaScript",
    type: "Dynamic",
  },
  {
    language: "Python",
    type: "Dynamic",
  },
  {
    language: "Java",
    type: "Static",
  }
]

myCoding.forEach((item) => {
  // console.log(item.language);
  // console.log(item.type);
});
// forof is used to iterate over iterable objects like arrays, strings, maps, and sets.

// forin is used to iterate over the properties of an object.

// forEach is a method available on arrays that executes a provided function once for each array element. It is not a loop but a higher-order function that takes a callback function as an argument.

// ++++++++ filter vs forEach +++++++++++

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNums = myNums.filter((num) => num > 2)
// console.log(filteredNums); // [3, 4, 5, 6, 7, 8, 9, 10]

const newNums = [];
myNums.forEach((num) => {
  if (num > 2) {
    newNums.push(num);
  }
});
// console.log(newNums); // [3, 4, 5, 6, 7, 8, 9, 10]

// ============= filter, map and reduce =============

const books = [
  {
    title: "JavaScript: The Good Parts",
    genre: "Programming",
    publish: 2008,
    edition: "1st",
  },
  {
    title: "Eloquent JavaScript",
    genre: "Programming",
    publish: 2011,
    edition: "2nd",
  },
  {
    title: "The Pragmatic Programmer",
    genre: "Programming",
    publish: 1999,
    edition: "1st",
  },
  {
    title: "Clean Code",
    genre: "Programming",
    publish: 2008,
    edition: "1st",
  },
  {
    title: "You Don't Know JS",
    genre: "Programming",
    publish: 2014,
    edition: "1st",
  },
  {
    title: "Science Fiction: A Very Short Introduction",
    genre: "Fiction",
    publish: 2011,
    edition: "1st",
  },
  {
    title: "The Mythical",
    genre: "Fiction",
    publish: 1975,
    edition: "1st",
  },
];

// const userBooks = books.filter((book) => book.genre === "Fiction");
const userBooks = books.filter((book) => book.publish > 2000 && book.genre === "Programming");
// console.log(userBooks);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numNums = nums.map((num) => num + 10);
// console.log(numNums); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// nums.forEach((num) => {
//   console.log(num + 10);
// });

// chaining
const num2 = nums.map((num) => num * 10).map((num) => num + 1).filter((num) => num > 40);
// console.log(num2);

const myArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const save = myArr1.reduce((acc, value) => {
//   console.log(acc, value);
//   return acc + value
// }, 0);
// console.log(save);

const shoppingCart = [
  {
    name: "Apple",
    price: 10,
  },
  {
    name: "Banana",
    price: 20,
  },
  {
    name: "Orange",
    price: 30,
  },
  {
    name: "Mango",
    price: 40,
  },
]

const priceToPay = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);
console.log(priceToPay);
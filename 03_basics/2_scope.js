let a = 100;
if (true) {
  let a = 10;
  // console.log("inner value of a: ", a);
  const b = 20;
  var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "John";

  function two() {
    const website = "example.com";
    console.log(username);
  }
  // console.log(website);
  two();
}

// one();
// two(); // getting error because two() is not defined in the global scope

if (true) {
  const username = "John";
  if (username === "John") {
    const website = "example.com";
    // console.log(username + " " + website);
  }
  // console.log(website); // getting error because website is not defined in this scope
}

// console.log(username); // getting error because username is not defined in this scope

// +++++++++++++++++ interesting example (Hoisting) ++++++++++++++++++++++++

function addOne(num) {
  return num + 1;
}

console.log(addOne(10));

const addTwo = function(num) {
  return num + 2;
}
console.log(addTwo(10)); // this is a function expression, so it can only be called after it is defined
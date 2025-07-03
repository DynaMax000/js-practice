function sayMyName() {
  console.log("J");
  console.log("o");
  console.log("h");
  console.log("n");
};

// sayMyName();

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
  return (num1 + num2);
}

const result = addTwoNumbers(5, 10);
// console.log("Result: ",result); // undefined, because the function does not return a value 

function loginUserMessage(username = "John") {
  if(!username) {
    return "Please enter username";
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage());

function calculateCarPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCarPrice(10000, 3000, 5000, 2000, 1500));

const user = {
  usename: "John",
  price: 1000,
}

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.usename} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
  usename: "Jane", 
  price: 2000,
})

const myArr = [300, 400, 500];
function handleArray(arr) {
  return (`First element is ${arr[0]} and second element is ${arr[1]}`);
};
console.log(handleArray(myArr));
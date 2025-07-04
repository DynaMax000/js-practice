// truthy and falsy values

const userName = [];

if(userName) {
  console.log("User name is defined");
}
else {
  console.log("User name is not defined");
}

if(userName.length === 0) {
  console.log("Array is empty");
}

let emptyObj = {
  name: "John",
};

if(Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

console.log(Object.keys(emptyObj));


// false == 0; // true
// false == "0" // true
// false == ""; // true
// 0 == ""; // true

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// true, 1, -1, BigInt 1n, "0", "false", [], {}, function() {}, Symbol(), Infinity, -Infinity
// everything else that is not falsy is truthy

// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10; // 5
val1 = null ?? 10; // 10
val1 = undefined ?? 10; // 10
val1 = null ?? 10 ?? 20 // 10

console.log(val1);

// Ternary Operator
// condition ? true : false

const iceTeaPrice = 40;
iceTeaPrice < 50 ? console.log("Ice tea is affordable") : console.log("Ice tea is expensive");
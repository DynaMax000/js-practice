// basic datatype comparisons in JavaScript
// console.log(2 > 1); // true
// console.log(2 < 1); // false
// console.log(2 >= 1); // true
// console.log(2 <= 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true
// console.log(2 === 1); // false

console.log("2" > 1);  // true (string "2" is coerced to number 2)
console.log("02" > 1); // true // (string "02" is coerced to number 2)

console.log(null > 0); // false (null is coerced to 0)
console.log(null < 0); // false (null is coerced to 0)
console.log(null == 0); // false (null is not equal to 0)
console.log(null >= 0); // true (null is coerced to 0)

console.log(undefined == 0); // false (undefined is not equal to 0);
console.log(undefined > 0); // false (undefined is not greater than 0)
console.log(undefined < 0); // false (undefined is not less than 0)
console.log(undefined == 0); // false (undefined is not equal to 0)
console.log(undefined >= 0); // false (undefined is not greater than or equal to 0)

// Avoid the above comparisons with undefined and null, as they can lead to unexpected results.

// === strict equality checks
        // -- checks datatype and value
console.log(2 === 2); // true (both are numbers)
console.log("2" === 2); // false (string "2" is not strictly equal to number 2)
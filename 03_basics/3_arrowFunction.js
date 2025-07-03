const user = {
  username: "John",
  price: 999,
  
  welcomeMessage: function() {
    // console.log(`Welcome ${username}`);
    console.log(`Welcome ${this.username}`);
    // this refers to the current context, which is the `user` object
    console.log(this);
  }
}

// user.welcomeMessage(); // This will throw an error because `username` is not defined in the function scope
// user.welcomeMessage(); // This will work because `this` refers to the `user` object
// user.username = "Jane"; // Changing the username property
// user.welcomeMessage(); // This will now print "Welcome Jane" because the username property has been updated
// console.log(this);

// function hello() {
//   let username = "John";
//   console.log(this.username); // This will log `undefined` because `this` does not refer to the `user` object in this context
// }
// hello();

const func = () => {
  let username = "John";
  console.log(this); // In an arrow function, `this` refers to the lexical scope, which is the global object in this case
} 
// func(); // This will log the global object (or `window` in browsers) because arrow functions do not have their own `this` context

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// }

// Implicit return in arrow functions
// const addTwo = (num1, num2) => ( num1 + num2 ); // This is a concise body arrow function
const addTwo = (num1, num2) => ( {usrname: "John"} );
// console.log(addTwo(5, 10)); // This will return 15
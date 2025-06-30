const accountId = 23001223;
// const means constant, it can't be changed

let accountEmail = "noone@gmail.com";
var accountPass = "jssl39242";
// let and var are used to declare variables that can be changed
accountCity = "Bengaluru" // This is a global variable, it can be accessed anywhere in the code
// If we don't use let or var, it becomes a global variable, but this is not preferred practice

let accountState; // undefined variable, it has no value yet
console.log(accountCity); // c is declared without let or var, it becomes a global variable
console.table([accountId, accountEmail, accountPass, accountCity, accountState]);

/*
  Prefer using let and const over var
  - let is block scoped, meaning it is only accessible within the block it is defined in
  - const is also block scoped, but it cannot be reassigned 
  - var is function scoped and global scoped, meaning it is accessible within the function it is defined in, but not outside of it
*/

// We do not use var due to block scope and functional scope problem 
{
  // This is a block scope
}
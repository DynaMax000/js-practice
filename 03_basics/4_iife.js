(function hello() {
  // named iffe
  console.log("DB connected");
})();

// iife is used to execute the code immediately and create a private scope
// iife = immediately invoked function expression
// ()() // iife to remove global scope pollution

((name) => {
  // unnamed iffe
  console.log(`DB connected for ${name}`);
})("John");
// const promise = new Promise(function (resolve, reject) {
//   // Do an async task
//   // DB calls, cryptography tasks, network requests, etc.

//   setTimeout(function () {
//     console.log("AsyncTask 1 is done");
//     resolve(); // Resolve the promise
//   }, 1000);
// });

// .then connection with resolve
// promise.then(function () {
//   console.log("Promise 1 consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("AsyncTask 2 is done");
//     resolve();
//   }, 2000);
// }).then(function () {
//   console.log("Promise 2 consumed");
// });

// const promise3 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "John", age: 30 });
//   }, 1000)
// });

// promise3.then(function (user) {
//   console.log("Promise 3 consumed");
//   console.log(user);
// });

// const promise4 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true; // Simulating no error, change to true to simulate an error
//     if (!error) {
//       resolve({ username: "Jane", age: 25 });
//     }
//     else {
//       reject("ERROR: Something went wrong!");
//     }
//   }, 1000)
// });

// let username = promise4
//   .then(user => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Promise 4 is either resolved or rejected");
//   });

// const promise5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true; // Simulating no error, change to true to simulate an error
//     if (!error) {
//       resolve({ username: "Alice", age: 28 });
//     }
//     else {
//       reject("ERROR: JS went wrong in Promise 5!");
//     }
//   }, 1000);
// })

// async function consumePromise5() {
//   try {
//     const response = await promise5;
//     console.log(response);
//   }
//   catch(error) {
//     console.log(error);
//   }
// }
// consumePromise5();

// async function getUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//   }
//   catch (error) {
//     console.error("Error fetching users:", error);
//   }
// }
// getUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.error("Error fetching users:", error));
let myDate = new Date();
console.log(myDate); // Current date and time

console.log(myDate.toString()); // String representation of the date
console.log(myDate.toDateString()); // Date part as a string
console.log(myDate.toTimeString()); // Time part as a string  
console.log(myDate.toISOString()); // ISO format string
console.log(myDate.toLocaleString()); // Locale-specific string representation

// let myCreatedDate = new Date(2025, 0, 23);
// let myCreatedDate = new Date(2025, 0, 23, 5, 3);
// let myCreatedDate = new Date("2025-01-23");
let myCreatedDate = new Date("01-14-2023");
console.log(myCreatedDate.toString()); 

let myTimeStamp = Date.now();
console.log(myTimeStamp); // Current timestamp in milliseconds since January 1, 1970

console.log(myCreatedDate.getTime()); // Timestamp of myCreatedDate in milliseconds

console.log(Math.floor(Date.now() / 1000)); // Current timestamp in seconds since January 1, 1970

let newDate = new Date();
console.log(newDate.getMonth() + 1); // Current month (0-based index, so +1 for human-readable format)

console.log(newDate.toLocaleDateString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
}))
// for loop

// for (let i = 0; i < 5; i++) {
//   if (i == 3) console.log("3 is best number");
//   console.log(i);
// }

// for(let i = 0; i < 11; i++) {
//   console.log(`Outer Loop Value: ${i}`);
//   for(let j = 0; j < 11; j++) {
//     // console.log(`Inner Loop Value: ${j} and Inner Loop Value: ${i}`);
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

let myArr = ["superman", "batman", "spiderman", "hulk", "ironman"];

for(let i = 0; i < myArr.length; i++) {
  // console.log(`Hero at index ${i} is ${myArr[i]}`);
}

// continue and break statements

for(let i = 1; i < 21; i++) {
 if(i === 5) {
   console.log("5 here");
   continue; // skip the rest of the loop for this iteration
 }
 console.log(i);
}
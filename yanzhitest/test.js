// for (let i = 0; i < 5; i++) {
//   if (i == 2) {
//     break;
//   }
//   console.log(i);
// }
// console.log("========");
// for (let i = 0; i < 5; i++) {
//   if (i == 2) {
//     continue;
//   }
//   console.log(i);
// }

// console.log("========");
// for(let i = 0; i <5 ;i++){
//   if(i == 3){
//     return;
//   }
//   console.log(i)
// }

let test = new Promise((res, rej) => {
  throw 123;
})
  .then(() => {
    console.log("then");
  })
  .catch((err) => {
    console.log(err);
  });

console.log(test);
setTimeout(() => {
  console.log(test);
}, 0);

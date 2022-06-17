for (let i = 0; i < 5; i++) {
  if (i == 2) {
    break
  }
  console.log(i)
}
console.log('========')
for (let i = 0; i < 5; i++) {
  if (i == 2) {
    continue
  }
  console.log(i)
}

console.log('========')
// for(let i = 0; i <5 ;i++){
//   if(i == 3){
//     return;
//   }
//   cosnole.log(i)
// }
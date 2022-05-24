let p1 = new Promise((reslove,reject)=>{
  return reslove(12)
})


console.log(p1)


p1.then((res)=>{
  console.log(res)
})

// ===============================
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(100).then((value) => {
  console.log(value);
});

console.log("text end")
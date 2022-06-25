const dayjs = require("dayJs");

// let date = new Date("2022-03-30 00:00:00")

function test() {
  console.time();
  for (let i = 0; i < 300000; i++) {
    const num = 24 * 60 * 60 * 1000;
    const date = new Date();
    const temp = date.getTime() + num;
    const result = dayjs(temp).format("YYYY-MM-DD");
    const today = dayjs(date).format("YYYY-MM-DD");
    if (result == today) {
      console.log(i, today, result);
    }
  }
  console.timeEnd();
}

// setTimeout(()=>{
test();
// },56 * 1000)

// let flag = dayjs("12").isValid()
// console.log(flag)

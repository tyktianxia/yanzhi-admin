const qs = require('qs')

const str = qs.stringify({
  test1: 111,
  test2: 222,
  test3: 4444,
})
console.log(str)
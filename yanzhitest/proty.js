let sym = Symbol("first");

let obj = {
  sym: 123,
  zz: 456,
};

let o2 = Object.defineProperty({}, "name", {});

for (let key in o2) {
  console.log(key);
}

console.log(Object.getOwnPropertyNames(o2));
console.log(Object.getOwnPropertyDescriptor(o2, "name"));
console.log(Object.getOwnPropertyDescriptor(obj, sym));
console.log(Object.getOwnPropertyDescriptor(obj, "zz"));
let a, b;
console.log((a = Object.getOwnPropertyDescriptors(obj)));
console.log((b = Object.getOwnPropertyDescriptors(o2)));

console.log(123)




function Test(){
  this.a = 1;
}

Test.prototype = {name:'yanzhi'}

let obj2 = new Test()
console.log(obj2)
console.log(Object.getPrototypeOf(obj2))

let obj3 =  Object.create({name:'yanzhi2'})
console.log(obj3)
console.log(Object.getPrototypeOf(obj3))


console.log(obj3.isPrototypeOf(obj2))
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

console.log(123);

function Test() {
  this.a = 1;
}

Test.prototype = { name: "yanzhi" };

let obj2 = new Test();
console.log(obj2);
console.log(Object.getPrototypeOf(obj2));

let obj3 = Object.create({ name: "yanzhi2" });
console.log(obj3);
console.log(Object.getPrototypeOf(obj3));

console.log(obj3.isPrototypeOf(obj2));

let m1 = new Map();

m1.set("a", 1).set("b", 2);
console.log(m1);

let m2 = new Map([
  ["c", 3],
  ["d", 4],
]);
console.log(m2);

let m3 = new Map([[{ name: "yanzhi" }, "hahahha"]]);
console.log(m3);

console.log("+++++++++++++++++++++++");

let s1 = new Set();
s1.add(3).add(4).add(3);
console.log(s1);
console.log(s1.size);
for (let i of s1) {
  console.log(i);
}
console.log(s1[2]);
console.log("+++++++++++++++++++++++");

function Test2() {
  this.name = "yanzhi";
  this.age = 19;
}

Test2.prototype = {
  like: "game",
};
let t1 = new Test2();
console.log(new Test2());

let as1 = Object.assign({}, t1);
console.log(as1);
console.log("+++++++++++++++++++++++");
console.log(JSON.stringify(t1));

t1.a = () => {
  return 123;
};
t1.b = Symbol("yanhzi222");
t1[Symbol("yanzhi333")] = 789;
t1.c = undefined;
t1.d = Number(1);
t1.e = String("123");
t1.f = Boolean(123);

console.log(
  JSON.stringify(t1, function (key, value) {
    console.log("key is ", key);
    console.log("value is ", value);
    return value;
  },'')
);


console.log("+++++++++++++++++++++++");

function t2(a,...arg){
  console.log(arg)
}


t2(1,3,4,5,66,)
const obj = new Proxy(
  { name: "yanzhi" },
  {
    get(target, proKey) {
      return target[proKey];
    },
  },
);
console.log(obj.name);
console.log(obj.name2);

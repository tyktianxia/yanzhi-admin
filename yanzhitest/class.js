class Father {
  a = 1;

  fn1() {
    console.log("father a:", this.a);
    console.log("father fn1");
  }
}

class Son extends Father {
  constructor() {}

  fn2() {
    console.log("son fn2");
  }

  fn1() {
    super.fn1();
    console.log("son fn1");
  }
}

const son = new Son();
son.fn2();
son.fn1();

class Person {
  name;
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} is speaking`);
  }
}

const p1 = new Person("lin");

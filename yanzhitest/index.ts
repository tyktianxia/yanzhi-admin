// 函数声明
function fn1(a: number): number {
  return 1;
}

// 表达式
const fn2 = (a: number): number => 1;

const fn3: (a: number) => number = () => 1;

// 两个概念
// 1 值得类型 2 变量的类型 （对于表达式来说是这样，对于函数、类等声明来说是啥样，需要深入学习）
// 变量赋值是将值赋给变量，通常（显示赋值）会对值类型与变量类型强校验  ？猜的
//

// 联合类型也是类型
// type 别名，不会新建一个新类型，只是新建一个新名字来引用那个类型（基于基本类型或现有定义的类型）
// 给基本类型起别名，没有实际意义

declare function t1(val: number): string;
declare function t1(val: string): string;

declare const n1: number;
declare const s1: string;
declare let b1: boolean;
declare let u1: undefined;

declare function f1(): string;
declare const t2: () => string;

export default {};

// 泛型类
/**
 * 泛型类
 * 泛型函数
 *
 */

// 泛型函数

function fn<T>(val: T): T {
  return val;
}

class Person<T> {
  _value: T;
  constructor(val: T) {
    this._value = val;
  }
}

let person = new Person("xiongmao");

let a = new Promise((res, rej) => {});

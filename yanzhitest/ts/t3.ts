import { readonly } from "vue";

function fn1<T>(val: T): Promise<T> {
  return new Promise((resolve) => {
    resolve(val);
  });
}
/**
 * 泛型：
 * 主要作用就是：保证输入输出类型相对统一
 * 使用泛型，可以在定义函数、接口或类的时候，不预先指定具体类型，而是在使用的时候再指定类型。
 * 可给函数传any类型，并且保证了输入输入的类型一致
 * （副作用： function request<T>(url:string):Promise<T>{},这种也合法）
 * 函数
 * 调用泛型（函数）时，要指定类型
 *   1、显示指定
 *   2、TS类型推断，自动推导出类型
 *
 * TS中一切都以类型为先
 *
 * 可以处理多个参数的函数
 *
 * 泛型约束
 *
 *
 * 泛型类
 *
 * 在一个大的作于域下，保证几个位置的类型一致
 * 泛型在成员之间提供有意义的约束，这些成员可以是：函数参数、函数返回值、类的实例成员、类的方法等
 *
 * 泛型接口
 *
 * 泛型数组
 *
 *
 * 好处：
 * 函数和类可以轻松的支持多种类型，增强程序的拓展性
 * 不必写冗长的联合类型，增强代码的可读性
 * 灵活控制类型之间的约束
 *
 *
 * 参考：
 * https://juejin.cn/post/7064351631072526350
 */

interface IKey {
  kay: string;
  value: number;
}

interface IKeyValue<T, U> {
  key: T;
  value: U;
}

const arr1: number[] = [];

const arr2: Array<string> = ["abc"];

interface I1 {
  name: string;
  readonly age: number;
  job: string;
  arms?: string;
}

let person1: I1 = {
  name: "莱克斯",
  age: 18,
  job: "剑士",
  arms: "焰光",
  money: "100000",
};

person1.job = "打捞";

interface ISum {
  (x: number, y: number): number;
}

const add: ISum = (num1, num2) => num1 + num2;

interface RandomKey {
  [propName: string]: string;
}

const obj: RandomKey = {
  a: 123,
  b: "abc",
};

interface LikeArray {
  [propName: number]: string;
}

const arr: LikeArray = ["hello", "lin"];

// duck模型

/**
 * 类
 * 封装 继承 多态
 * public private protected
 */

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} is speaking`);
  }
}

const p1 = new Person("lin");

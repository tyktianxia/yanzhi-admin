
// 函数声明
function fn1(a: number): number {
    return 1;
}


// 表达式 
const fn2 = (a: number): number => 1

const fn3: (a: number) => number = () => 1



// 对象
type inter = {
    a: string
}

type inter2 = string
type inter3 = string | number
let obj1: inter = {
    a: 1
}


// 两个概念
// 1 值得类型 2 变量的类型 （对于表达式来说是这样，对于函数、类等声明来说是啥样，需要深入学习）
// 变量赋值是将值赋给变量，通常（显示赋值）会对值类型与变量类型强校验  ？猜的
// 


// 联合类型也是类型  
// type 别名，不会新建一个新类型，只是新建一个新名字来引用那个类型（基于基本类型或现有定义的类型）
// 给基本类型起别名，没有实际意义
"use strict";

/*    
最新的 ECMAScript 标准定义了8种数据类型：         
    七种基本数据类型:
        数字（Number），整数或浮点数，例如： 42 或者 3.14159。
        字符串（String），字符串是一串表示文本值的字符序列，例如："Howdy" 。
        布尔值（Boolean），有2个值分别是：true 和 false.
        null ， 一个表明 null 值的特殊关键字。 JavaScript 是大小写敏感的，因此 null 与 Null、NULL或变体完全不同。
        undefined ，和 null 一样是一个特殊的关键字，undefined 表示变量未定义时的属性。
        任意精度的整数 (BigInt) ，可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。
        代表（Symbol） ( 在 ECMAScript 6 中新添加的类型).。一种实例是唯一且不可改变的数据类型。
    以及对象（Object）。
        七种基本数据类型
        变量
        语句
        函数
        表达式
        索引集合
        键值集合
数字：
    在 JavaScript 里面，数字均为双精度浮点类型（double-precision 64-bit binary format IEEE 754），即一个介于±2−1023和±2+1024之间的数字，或约为±10−308到±10+308，数字精度为53位。整数数值仅在±253 − 1的范围内可以表示准确。
    除了能够表示浮点数，数字类型也还能表示三种符号值: +Infinity（正无穷）、-Infinity（负无穷）和 NaN (not-a-number，非数字)。
    JavaScript最近添加了 BigInt 的支持，能够用于表示极大的数字。使用 BigInt 的时候有一些注意事项，例如，你不能让 BigInt 和 Number 直接进行运算，你也不能用 Math 对象去操作 BigInt 数字。
    您可以使用四种数字进制：十进制，二进制(0b开头)，八进制(0o开头)和十六进制(0x开头)。
    指数形式：[e后面乘/除几个0的倍数] 1E+3（1000），100E-2（1），2e4（20000），0.1e2（10）
    浮点数：.55， -.55，  0.55，  55.55， 5.55e5，  5.5e-5
字符串：通过在引号前加上反斜线'\'，可以在字符串中插入引号，这就是引号转义。
    \0	Null字节
    \b	退格符
    \f	换页符
    \n	换行符
    \r	回车符
    \t	Tab (制表符)
    \v	垂直制表符
    \'	单引号
    \"	双引号
    \\	反斜杠字符（\）
    \XXX	由从0到377最多三位八进制数XXX表示的 Latin-1 字符。例如，\251是版权符号的八进制序列。
    \xXX	由从00和FF的两位十六进制数字XX表示的Latin-1字符。例如，\ xA9是版权符号的十六进制序列。
    \uXXXX	由四位十六进制数字XXXX表示的Unicode字符。例如，\ u00A9是版权符号的Unicode序列。见Unicode escape sequences (Unicode 转义字符).
    \u{XXXXX}	Unicode代码点 (code point) 转义字符。例如，\u{2F804} 相当于Unicode转义字符 \uD87E\uDC04的简写。
布尔值：
对象：
    注意在接受一条语句的地方，你可能需要将对象字面量括在括号里，从而避免将字面量与块语句相混淆，({a:1,b:2})
    一个 javascript 对象有很多属性。一个对象的属性可以被解释成一个附加到对象上的变量。对象的属性和普通的 javascript 变量基本没什么区别，仅仅是属性属于某个对象。属性定义了对象的特征(译注：动态语言面向对象的鸭子类型)。你可以通过点符号来访问一个对象的属性（属性名必须是字符串才能这样用）。对象中未赋值的属性的值为undefined（而不是null）。JavaScript 对象的属性也可以通过方括号访问或者设置（属性名除了字符串两种方式都可以用，其他类型数据必须只能用[]访问设置）。 对象有时也被叫作关联数组, 因为每个属性都有一个用于访问它的字符串值。
  变量：
    在应用程序中，使用变量来作为值的符号名。变量的名字又叫做标识符，其需要遵守一定的规则。一个 JavaScript 标识符必须以字母、下划线（_）或者美元符号（$）开头；后续的字符也可以是数字（0-9）。因为 JavaScript 语言是区分大小写的，所以字母可以是从“A”到“Z”的大写字母和从“a”到“z”的小写字母。在函数之外声明的变量，叫做全局变量，因为它可被当前文档中的任何其他代码所访问。在函数内部声明的变量，叫做局部变量，因为它只能在当前函数的内部访问。ECMAScript 6 之前的 JavaScript 没有 语句块 作用域；相反，语句块中声明的变量将成为语句块所在函数（或全局作用域）的局部变量。例如，如下的代码将在控制台输出 5，因为 x 的作用域是声明了 x 的那个函数（或全局范围），而不是 if 语句块。
  语句:
  函数:
    对于函数来说，只有函数声明会被提升到顶部，而函数表达式不会被提升。
  表达式:
  索引集合:
  键值集合:

*/


/* 
var a = [10,20,30,]
console.log(
    a[0],
    a[1],
    a[2]
)
//数组本质是隐藏下标（数字键）的对象

var b = {'0':10,c1:20,2:30,}
console.log(
b[0],
b.c1,
b[2]
)
//标识符键，可以用.调用，其他类型的键和数组一样，用[]

var b = {'0':10,c1:20,2:30,}
console.log(
b['0'],
b['c1'],
b['2']
)
//标识符键，使用[]必须带引号，其他类型的键用[]可以省略引号，也可以加引号，本质都是字符串。

var myObj = new Object(),
    str = "myString",
    rand = Math.random(),
    obj = new Object();
myObj.type              = "Dot syntax";
myObj["date created"]   = "String with space";
myObj[str]              = "String value";
myObj[rand]             = "Random Number";
myObj[obj]              = "Object";
myObj[""]               = "Even an empty string";
console.log(myObj);
{
  type: 'Dot syntax',
  'date created': 'String with space',
  myString: 'String value',
  '0.6708031571244293': 'Random Number',
  '[object Object]': 'Object',
  '': 'Even an empty string'
}
//赋值属性时，如果属性键引用已声明变量名，则键转化为变量值；属性值为等号右边。方括号中的所有键都将转换为字符串类型，因为JavaScript中的对象只能使用String类型作为键类型。
 */



/* 
业务分布式-微服务
电脑集群-微服务节点复制-负载均衡
分布式架构:1.微服务，2.大数据存储，3，大数据计算（机器学习，深度学习）
高并发  两核，4个文件夹交替传送
多线程  一核，一个文件夹内，分2个压缩包传送
并行      两核，两个文件分开传输
多进程  多个文件同时传输
单进程  多个文件一个传完，传下一个

js多个实例跑（分布式微服务架构），单个实例高并发

增（赋值新变量）
删（赋值undefined）
改（重新赋值变量）
查（判断匹配，返回值）
数据结构（增删改查）
算法（函数，表达式）
函数传参=赋值给表达式，返回值
顺序语句，分支语句（判断比较真假），循环语句（赋值变量，判断比较真假/比较运算，算数运算）
与或非

表达式运算（
赋值运算/字符串运算
比较运算/逻辑运算/关系运算
算数运算/位运算
条件（三元）运算
逗号运算
一元运算
）
*/

/* 
js-node-
npm-cnpm-
express-generator-pug(模板语言)-
react-jsx-styled-components（JS处理CSS）-
nvm-nodemon（实时运行js）-
pm2-localtunnel（内网穿透）-
webpack-Gulp（自动化构建）-
es6-ts

html-css-dom-bom-xml
antdesign-bootstrap
d3-creat-three

mongodb-nginx-linux-python

xd-an-ai-dw-vscode-edge-emmet
*/

let obj1={
  a:10,//属性：数字
  b:"str1",//属性：字符串
  c:{obj2:"obj",arr1:[10,20]},//属性：对象
  d:[10,"str2",{a:10}],//属性：数组
  e:function name(params) {
      return 1;        
  }//方法：函数，返回值（数字，字符串，真假值）
}


/* 
自动分号补全：
一些 JavaScript 语句必须用分号结束，所以会被自动分号补全 (ASI)影响：

空语句
let、const、变量声明
import、export、模块定义
表达式语句
debugger
continue、break、throw
return

*/


//语句和声明
//控制流
{}  //块语句

;   //空语句

if (condition) {   
    continue             
} else {                
}  //if(continue)...else

switch (key) {
    case value:                    
        break;            
    default:
        break;
}  //switch(case(break)default)

try {   
    throw             
} catch (error) {                
} finally{                
}  //try(throw)catch,finally

//声明
var fruits = ['Apple', 'Banana'];
let b={
    a:"a",
    b:true,
    c:function name(params){},
    d:[1,2,3],
    e:{aa:11,bb:22}
}
const cc = (a,b) => {a*b};
const dd = () => 1*2; 

//函数和类
function name(params) {
    return this
}
class dog{
    constructor(hei,wid){
        this.age = "100"
    }
}class xiaohei extends dog{
    constructor(color){
        super(length,length);
        this.name = "heihei"
    }
}

//迭代
while (condition) {
}  //while

do {                
} while (condition); //do while

for (let index = 0; index < array.length; index++) {
    const element = array[index];                
}  //for

for (const key in object) {
    if (object.hasOwnProperty(key)) {
        const element = object[key];                    
    }
}   //for...in
  
for (const iterator of object) {                
}   //for...of

for await (variable of iterable) {
    statement
}   //for await...of

//其他
debugger    //调试代码

import * as myModule from '/modules/my-module.js';  //导入整个模块的内容
import {myExport} from '/modules/my-module.js';     //导入单个接口
import {foo, bar} from '/modules/my-module.js';     //导入多个接口
import {reallyReallyLongModuleExportName as shortName}
  from '/modules/my-module.js';       //导入带有别名的接口
import {
reallyReallyLongModuleMemberName as shortName, 
anotherLongModuleName as short
} from '/modules/my-module.js';     //导入时重命名多个接口
import '/modules/my-module.js';     //仅为副作用而导入一个模块
import myDefault from '/modules/my-module.js';      //导入默认值
let module = await import('/modules/my-module.js');   //动态import   

export {cc};    // 命名导出：导出早前定义的函数
export let myVariable = Math.sqrt(2);   //命名导出：导出单个特性（可以导出var，let，const,function,class）
export function myFunction() { };       //命名导出：导出单个特性
export default function() {}            //默认导出（函数）：
export default class {}                 //默认导出（类）：
export {default} from './other-module';     //模块重定向

{label : statement}     
let str = '';
loop1:
for (let i = 0; i < 5; i++) {
if (i === 1) {
    continue loop1;
}
str = str + i;
}
console.log(str);   //可使用一个标签来唯一标记一个循环，然后使用 break 或 continue 语句来指示程序是否中断循环或继续执行。需要注意的是，JavaScript 没有 goto 语句，标记只能和 break 或 continue 一起使用。例如 start : i = 5;  continue start;  break start;


//表达式和运算符
//主要表达式
[]  //数组字面量（常量）
{}  //对象字面量（常量）
/ab+c/i //正则字面量（常量）
()  //圆括号运算符 ( ) 用于控制表达式中的运算优先级。
null    //值 null 是一个字面量，不像 undefined，它不是全局对象的一个属性。null 是表示缺少的标识，指示变量未指向任何对象。把 null 作为尚未创建的对象，也许更好理解。

function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1            
  console.log(arguments[1]);
  // expected output: 2            
  console.log(arguments[2]);
  // expected output: 3
}            
func1(1, 2, 3);   //arguments

function name(params) {
    return this
}   //this

function* foo() {
    yield 'a';
    yield 'b';
    yield 'c';
  }
  
  let str = '';
  for (const val of foo()) {
    str = str + val;
  }
  
  console.log(str);     // expected output: "abc"
  //function*关键字可以在表达式内部定义一个生成器函数。
  
function* countAppleSales () {
    var saleList = [3, 7, 5];
    for (var i = 0; i < saleList.length; i++) {
      yield saleList[i];
    }
}   //yield关键字用来暂停和恢复一个生成器函数


function* g3() {
    yield* [1, 2];
    yield* "34";
    yield* arguments;
}              
var iterator = g3(5, 6);              
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: "3", done: false }
console.log(iterator.next()); // { value: "4", done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: 6, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
// yield* 表达式用于委托给另一个generator 或可迭代对象。

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  };    // async function expression assigned to a variable
  var add1 = async function(x) {
    var a = await resolveAfter2Seconds(20);
    var b = await resolveAfter2Seconds(30);
    return x + a + b;
  }              
  add1(10).then(v => {
    console.log(v);  // 4 秒后打印 60
  });              
  (async function(x) { // async function expression used as an IIFE
    var p_a = resolveAfter2Seconds(20);
    var p_b = resolveAfter2Seconds(30);
    return x + await p_a + await p_b;
  })(10).then(v => {
    console.log(v);  // 2 秒后打印 60
  });   
//async function 关键字用来在表达式中定义异步函数。当然，你也可以用 异步函数语句 来定义。

  function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }              
  async function f1() {
    var x = await resolveAfter2Seconds(10);
    console.log(x); // 10
  }
  f1();
//await  操作符用于等待一个Promise 对象。它只能在异步函数 async function 中使用。
  
//左手表达式
const person1 = {firstname:"firstname0",lastname:"lastname0"};
person1['firstname'] = 'Mario';
person1.lastname = 'Rossi';
//属性访问器提供了两种方式用于访问一个对象的属性，它们分别是点号和方括号

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }              
  const car1 = new Car('Eagle', 'Talon TSi', 1993);              
  console.log(car1.make);
  // expected output: "Eagle"
//new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。new 关键字会进行如下的操作：创建一个空的简单JavaScript对象（即{}）；链接该对象（即设置该对象的构造函数）到另一个对象 ；将步骤1新创建的对象作为this的上下文 ；如果该函数没有返回对象，则返回this。创建一个用户自定义的对象需要两步：通过编写函数来定义对象类型。通过 new 来创建对象实例。

function Foo() {
    if (!new.target) throw "Foo() must be called with new";
    console.log("Foo instantiated with new");
  }              
  Foo(); // throws "Foo() must be called with new"
  new Foo(); // logs "Foo instantiated with new"
//new.target属性允许你检测函数或构造方法是否是通过new运算符被调用的。在通过new运算符被初始化的函数或构造方法中，new.target返回一个指向构造方法或函数的引用。在普通的函数调用中，new.target 的值是undefined。new.target语法由一个关键字"new"，一个点，和一个属性名"target"组成。通常"new."的作用是提供属性访问的上下文，但这里"new."其实不是一个真正的对象。不过在构造方法调用中，new.target指向被new调用的构造函数，所以"new."成为了一个虚拟上下文。new.target属性适用于所有函数访问的元属性。在  arrow functions 中，new.target 指向最近的外层函数的new.target

class Rectangle {
    constructor() {}
    static logNbSides() {
      return 'I have 4 sides';
    }
  }              
  class Square extends Rectangle {
    constructor() {}
    static logDescription() {
      return super.logNbSides() + ' which are all equal';
    }
  }
  Square.logDescription(); // 'I have 4 sides which are all equal'
//super关键字用于访问和调用一个对象的父对象上的函数。

function sum(x, y, z) {
    return x + y + z;
  }              
  const numbers = [1, 2, 3];              
  console.log(sum(...numbers));
  // expected output: 6              
  console.log(sum.apply(null, numbers));
  // expected output: 6
//...obj,展开语法(Spread syntax), 可以在函数调用/数组构造时, 将数组表达式或者string在语法层面展开；还可以在构造字面量对象时, 将对象表达式按key-value的方式展开。(译者注: 字面量一般指 [1, 2, 3] 或者 {name: "mdn"} 这种简洁的构造方式)

//自增自减
A++
A--
++A
--A

//一元运算符
const Employee = {
    firstname: 'John',
    lastname: 'Doe'
  };              
  console.log(Employee.firstname);
  // expected output: "John"              
  delete Employee.firstname;              
  console.log(Employee.firstname);
  // expected output: undefined
// delete 操作符用于删除对象的某个属性；如果没有指向这个属性的引用，那它最终会被释放。

void function iife() {
    var bar = function () {};
    var baz = function () {};
    var foo = function () {
        bar();
        baz();
      };
    var biz = function () {};

    foo();
    biz();
}();
//void 运算符 对给定的表达式进行求值，然后返回 undefined。 

console.log(typeof 42);
// expected output: "number"
console.log(typeof 'blubber');
// expected output: "string"
console.log(typeof true);
// expected output: "boolean"
console.log(typeof undeclaredVariable);
// expected output: "undefined"
//typeof 操作符返回一个字符串，表示未经计算的操作数的类型。
+   //一元正号，加法
-   //一元负号，减法

//算数运算符
1+1
2-2
1/2
2*1
2%2 //取余
1**2    //1的2次幂

//关系运算符
const car = { make: 'Honda', model: 'Accord', year: 1998 };
console.log('make' in car);    // expected output: true
//in 如果指定的属性在指定的对象或其原型链中，则in 运算符返回true。

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // expected output: true
  
  console.log(auto instanceof Object);
  // expected output: true
//instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

1<2
2>1
a<=b    //小于等于
b>=a    //大于等于

//相等运算符
a==d    //等于
a!=b    //不等于
a===c   //恒等于
b!==c   //恒不等

//位移运算符
9 << 2  // << (左移)
9 >> 2  //>> (有符号右移)
9 >>> 2 //>>> (无符号右移)

//位运算符
9 & 1  //& (按位与)
9 | 1  //| (按位或)
9 ^ 1  //^ (按位异或)
~1  //按位非


//逻辑运算符
a && b  //与
a || b  //或
!b   //逻辑非

//条件运算符
(condition ? ifTrue : ifFalse)

//赋值操作符
a = 1
a *= 1
a /= 1
a %= 1
a += 1
a -= 1
a <<= 2 //左移赋值运算符使变量向左移动指定位数的比特位，然后把结果赋给该变量
a >>= 2 //右移赋值
a >>>= 2    //无符号右移赋值
a &= 2  //按位与赋值
a ^= 2  //按位异或赋值
a |= 2  //按位或赋值
[a, b] = [1, 2] //解构赋值
({a, b} = {a: 1, b: 2}); //解构对象,无声明赋值
var {a = 10, b = 5} = {a: 3};   //解构对象，默认值








//语法内置属性（全局对象，BOM的window对象属性，NODE的global对象属性）

//值属性
Infinity    //全局属性 Infinity 是一个数值，表示无穷数。            
NaN     //全局属性 NaN 的值表示不是一个数字（Not-A-Number）。
undefined   //一个没有被赋值的变量的类型是undefined。如果方法或者是语句中操作的变量没有被赋值，则会返回undefined。
globalThis  //在松散模式下，可以在函数中返回 this 来获取全局对象，但是在严格模式和模块环境下，this 会返回 undefined。globalThis 提供了一个标准的方式来获取不同环境下的全局 this  对象（也就是全局对象自身）。不像 window 或者 self 这些属性，它确保可以在有无窗口的各种环境下正常工作。所以，你可以安心的使用 globalThis，不必担心它的运行环境。为便于记忆，你只需要记住，全局作用域中的 this 就是 globalThis。




//基本对象
Object  //Object 构造函数创建一个对象包装器。
    //属性
    Object.length                   //值为 1。 
    Object.prototype                //表示 Object 的原型对象。
            //属性
            Object.prototype.constructor    //特定的函数，用于创建一个对象的原型。
            //方法
            Object.prototype.hasOwnProperty //返回一个布尔值 ，表示某个对象是否含有指定的属性，而且此属性非原型链继承的。
            Object.prototype.isPrototypeOf  //返回一个布尔值，表示指定的对象是否在本对象的原型链中。
            Object.prototype.propertyIsEnumerable   //判断指定属性是否可枚举
            Object.prototype.toLocaleString   //直接调用 toString()方法。
            Object.prototype.toString   //返回对象的字符串表示。
            Object.prototype.valueOf    //返回指定对象的原始值。
    //方法
    Object.assign
    //通过复制一个或多个对象来创建一个新的对象。
    Object.create
    //使用指定的原型对象和属性创建一个新对象。
    Object.defineProperty
    //给对象添加一个属性并指定该属性的配置。
    Object.defineProperties
    //给对象添加多个属性并分别指定它们的配置。
    Object.freeze
    //冻结对象：其他代码不能删除或更改任何属性。
    Object.getOwnPropertyDescriptor
    //返回对象指定的属性配置。
    Object.getOwnPropertyNames
    //返回一个数组，它包含了指定对象所有的可枚举或不可枚举的属性名。
    Object.getOwnPropertySymbols
    //返回一个数组，它包含了指定对象自身所有的符号属性。
    Object.getPrototypeOf
    //返回指定对象的原型对象。
    Object.is
    //比较两个值是否相同。所有 NaN 值都相等（这与==和===不同）。
    Object.isExtensible
    //判断对象是否可扩展。
    Object.isFrozen
    //判断对象是否已经冻结。
    Object.isSealed
    //判断对象是否已经密封。
    Object.keys
    //返回一个包含所有给定对象自身可枚举属性名称的数组。
    Object.preventExtensions
    //防止对象的任何扩展。
    Object.seal
    //防止其他代码删除对象的属性。
    Object.setPrototypeOf
    //设置对象的原型（即内部 [[Prototype]] 属性）。    
    Object.prototype.hasOwnProperty()
    //返回一个布尔值 ，表示某个对象是否含有指定的属性，而且此属性非原型链继承的。
    Object.prototype.isPrototypeOf()
    //返回一个布尔值，表示指定的对象是否在本对象的原型链中。
    Object.prototype.propertyIsEnumerable()
    //判断指定属性是否可枚举，内部属性设置参见 ECMAScript [[Enumerable]] attribute 。
    Object.prototype.toSource() 
    //返回字符串表示此对象的源代码形式，可以使用此字符串生成一个新的相同的对象。
    Object.prototype.toLocaleString()
    //直接调用 toString()方法。
    Object.prototype.toString()
    //返回对象的字符串表示。
    Object.prototype.unwatch() 
    //移除对象某个属性的监听。
    Object.prototype.valueOf()
    //返回指定对象的原始值。
    Object.prototype.watch() 
    //给对象的某个属性增加监听。
Function    //Function 构造函数创建一个新的 Function 对象。
    //属性
    Function.length
    //获取函数的接收参数个数。
    Function.name
    //获取函数的名称。
    Function.prototype.constructor
    //声明函数的原型构造方法，详细请参考 Object.constructor 。
    //方法
    Function.prototype.apply
    //在一个对象的上下文中应用另一个对象的方法；参数能够以数组形式传入。
    Function.prototype.bind
    //bind()方法会创建一个新函数,称为绑定函数.当调用这个绑定函数时,绑定函数会以创建它时传入 bind()方法的第一个参数作为 this,传入 bind()方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数.
    Function.prototype.call
    //在一个对象的上下文中应用另一个对象的方法；参数能够以列表形式传入。
    Function.prototype.toString
    //获取函数的实现源码的字符串。覆盖了 Object.prototype.toString 方法。
Boolean   //Boolean对象是一个布尔值的对象包装器。
    //方法
    Boolean.prototype.toString
    Boolean.prototype.valueOf
Symbol    //symbol 是一种基本数据类型 （primitive data type）。Symbol()函数会返回symbol类型的值，该类型具有静态属性和静态方法。
    //属性
    Symbol.length         //长度属性，值为0。
    Symbol.prototype      //symbol构造函数的原型
    Symbol.iterator       //一个返回一个对象默认迭代器的方法。被 for...of 使用。
    Symbol.match          //一个用于对字符串进行匹配的方法，也用于确定一个对象是否可以作为正则表达式使用。被 String.prototype.match() 使用。
    Symbol.replace        //一个替换匹配字符串的子串的方法. 被 String.prototype.replace() 使用。
    Symbol.search         //一个返回一个字符串中与正则表达式相匹配的索引的方法。被String.prototype.search() 使用。
    Symbol.split          //一个在匹配正则表达式的索引处拆分一个字符串的方法.。被 String.prototype.split() 使用。
    Symbol.hasInstance    //一个确定一个构造器对象识别的对象是否为它的实例的方法。被 instanceof 使用。
    Symbol.isConcatSpreadable   //一个布尔值，表明一个对象是否应该flattened为它的数组元素。被 Array.prototype.concat() 使用。
    Symbol.unscopables        //拥有和继承属性名的一个对象的值被排除在与环境绑定的相关对象外。
    Symbol.species            //一个用于创建派生对象的构造器函数。
    Symbol.toPrimitive        //一个将对象转化为基本数据类型的方法。
    Symbol.toStringTag        //用于对象的默认描述的字符串值。被 Object.prototype.toString() 使用。
    Symbol.prototype.constructor    //返回创建实例原型的函数. 默认为 Symbol 函数。
    //方法
    Symbol.for(key)       //使用给定的key搜索现有的symbol，如果找到则返回该symbol。否则将使用给定的key在全局symbol注册表中创建一个新的symbol。
    Symbol.keyFor(sym)    //从全局symbol注册表中，为给定的symbol检索一个共享的?symbol key。
    Symbol.prototype.toSource()                //返回包含Symbol 对象源码的字符串。覆盖Object.prototype.toSource() 方法。
    Symbol.prototype.toString()                //返回包含Symbol描述符的字符串。 覆盖Object.prototype.toString() 方法。
    Symbol.prototype.valueOf()                //返回 Symbol 对象的初始值.。覆盖 Object.prototype.valueOf() 方法。
    /* Symbol.prototype[ @@toPrimitive ]    */              //返回Symbol对象的初始值。
//错误对象
Error   //通过Error的构造器可以创建一个错误对象。当运行时错误产生时，Error的实例对象会被抛出。
    //属性
    Error.prototype       //允许添加属性到Error实例。
    EvalError
    //创建一个error实例，表示错误的原因：与 eval() 有关。
    RangeError
    //创建一个error实例，表示错误的原因：数值变量或参数超出其有效范围。
    ReferenceError
    //创建一个error实例，表示错误的原因：无效引用。
    SyntaxError
    //创建一个error实例，表示错误的原因：eval()在解析代码的过程中发生的语法错误。
    TypeError
    //创建一个error实例，表示错误的原因：变量或参数不属于有效类型。
    URIError
    //创建一个error实例，表示错误的原因：给 encodeURI()或  decodeURl()传递的参数无效。
//数字和日期
BigInt
    //方法
    BigInt.asIntN   //将 BigInt 值转换为一个 -2width-1 与 2width-1-1 之间的有符号整数。
    BigInt.asUintN()  //将一个 BigInt 值转换为 0 与 2width-1 之间的无符号整数。
    BigInt.prototype.toLocaleString  //返回此数字的 language-sensitive 形式的字符串。覆盖 Object.prototype.toLocaleString()  方法。
    BigInt.prototype.toString   //返回以指定基数(base)表示指定数字的字符串。覆盖 Object.prototype.toString() 方法。
    BigInt.prototype.valueOf    //返回指定对象的基元值。 覆盖 Object.prototype.valueOf() 方法。
Number
    //属性
    Number.EPSILON            //Number.EPSILON 属性表示 1 与Number可表示的大于 1 的最小的浮点数之间的差值。 属性的值接近于 2.2204460492503130808472633361816E-16，或者 2-52。你不必创建一个 Number 对象来访问这个静态属性（直接使用 Number.EPSILON）。
    Number.MAX_SAFE_INTEGER   //JavaScript 中最大的安全整数 (253 - 1)。
    Number.MAX_VALUE          //能表示的最大正数。最小的负数是 -MAX_VALUE。属性值接近于 1.79E+308。大于 MAX_VALUE 的值代表 "Infinity"。 因为 MAX_VALUE 是 Number 对象的一个静态属性，所以你应该直接使用Number.MAX_VALUE ，而不是作为一个创建的 Number 实例的属性。
    Number.MIN_SAFE_INTEGER   //JavaScript 中最小的安全整数 (-(253 - 1)).
    Number.MIN_VALUE          //能表示的最小正数即最接近 0 的正数 (实际上不会变成 0)。最大的负数是 -MIN_VALUE。属性是 JavaScript 里最接近 0 的正值，而不是最小的负值。值约为 5e-324。小于 MIN_VALUE ("underflow values") 的值将会转换为 0。因为 MIN_VALUE 是 Number 的一个静态属性，因此应该直接使用： Number.MIN_VALUE， 而不是作为一个创建的 Number 实例的属性。
    Number.NaN                //表示“非数字”（Not-A-Number）。和 NaN 相同。不必创建一个 Number 实例来访问该属性，使用 Number.NaN 来访问该静态属性。
    Number.NEGATIVE_INFINITY  //特殊的负无穷大值，在溢出时返回该值。
    Number.POSITIVE_INFINITY  //特殊的正无穷大值，在溢出时返回该值。
    Number.prototype          //Number 对象上允许的额外属性。
    //方法
    Number.isNaN            //确定传递的值是否是 NaN。
    Number.isFinite         //确定传递的值类型及本身是否是有限数。
    Number.isInteger        //确定传递的值类型是“number”，且是整数。
    Number.isSafeInteger    //确定传递的值是否为安全整数 ( -(253 - 1) 至 253 - 1之间)。
    Number.parseFloat       //把字符串参数解析成浮点数，和全局对象 parseFloat() 一样。
    Number.parseInt         //把字符串解析成特定基数对应的整型数字，和全局对象 parseInt() 一样。
    Number.toExponential()    //返回一个数字的指数形式的字符串，var a=77.1234,b=a.toExponential(2))//b="7.71e+1"
    Number.toFixed()               //返回指定小数位数的表示形式，var a=123,b=a.toFixed(2)//b="123.00"
    Number.toPrecision()           //返回一个指定精度的数字，var a=123,b=a.toPrecision(2)//b="1.2e+2"
Math
    //属性
    Math.E      //欧拉常数，也是自然对数的底数，约等于 2.718。
    Math.LN2    //2 的自然对数，约等于 0.693。
    Math.LN10   //10 的自然对数，约等于 2.303。
    Math.LOG2E  //以 2 为底的 E 的对数，约等于 1.443。
    Math.LOG10E //以 10 为底的 E 的对数，约等于 0.434。
    Math.PI     //圆周率，一个圆的周长和直径之比，约等于 3.14159。
    Math.SQRT1_2  //二分之一 ½ 的平方根，同时也是 2 的平方根的倒数，约等于 0.707。
    Math.SQRT2  //2 的平方根，约等于 1.414。
    //方法
    Math.abs(x)
    //返回一个数的绝对值。
    Math.acos(x)
    //返回一个数的反余弦值。
    Math.acosh(x)
    //返回一个数的反双曲余弦值。
    Math.asin(x)
    //返回一个数的反正弦值。
    Math.asinh(x)
    //返回一个数的反双曲正弦值。
    Math.atan(x)
    //返回一个数的反正切值。
    Math.atanh(x)
    //返回一个数的反双曲正切值。
    Math.atan2(y, x)
    //返回 y/x 的反正切值。
    Math.cbrt(x)
    //返回一个数的立方根。
    Math.ceil(x)
    //返回大于一个数的最小整数，即一个数向上取整后的值。
    Math.clz32(x)
    //返回一个 32 位整数的前导零的数量。
    Math.cos(x)
    //返回一个数的余弦值。
    Math.cosh(x)
    //返回一个数的双曲余弦值。
    Math.exp(x)
    //返回欧拉常数的参数次方，Ex，其中 x 为参数，E 是欧拉常数（2.718...，自然对数的底数）。
    Math.expm1(x)
    //返回 exp(x) - 1 的值。
    Math.floor(x)
    //返回小于一个数的最大整数，即一个数向下取整后的值。
    Math.fround(x)
    //返回最接近一个数的单精度浮点型表示。
    /* Math.hypot([x[, y[, …]]]) */
    //返回其所有参数平方和的平方根。
    Math.imul(x, y)
    //返回 32 位整数乘法的结果。
    Math.log(x)
    //返回一个数的自然对数（㏒e，即 ㏑）。
    Math.log1p(x)
    //返回一个数加 1 的和的自然对数（㏒e，即 ㏑）。
    Math.log10(x)
    //返回一个数以 10 为底数的对数。
    Math.log2(x)
    //返回一个数以 2 为底数的对数。
    /* Math.max([x[, y[, …]]]) */
    //返回零到多个数值中最大值。
    /* Math.min([x[, y[, …]]]) */
    //返回零到多个数值中最小值。
    Math.pow(x, y)
    //返回一个数的 y 次幂。
    Math.random()
    //返回一个 0 到 1 之间的伪随机数。
    Math.round(x)
    //返回四舍五入后的整数。
    Math.sign(x)
    //返回一个数的符号，得知一个数是正数、负数还是 0。
    Math.sin(x)
    //返回一个数的正弦值。
    Math.sinh(x)
    //返回一个数的双曲正弦值。
    Math.sqrt(x)
    //返回一个数的平方根。
    Math.tan(x)
    //返回一个数的正切值。
    Math.tanh(x)
    //返回一个数的双曲正切值。
    Math.toSource()
    //返回字符串 "Math"。
    Math.trunc(x)
    //返回一个数的整数部分，直接去除其小数点及之后的部分。
                
Date
    //属性
    Date.prototype
    //允许为 Date 对象添加属性。
    Date.length
    //Date.length 的值是 7。这是该构造函数可接受的参数个数。
    //方法
    Date.now()
    //返回自 1970-1-1 00:00:00  UTC（世界标准时间）至今所经过的毫秒数。
    Date.parse()
    //解析一个表示日期的字符串，并返回从 1970-1-1 00:00:00 所经过的毫秒数。
    Date.UTC()
    //接受和构造函数最长形式的参数相同的参数（从2到7），并返回从 1970-01-01 00:00:00 UTC 开始所经过的毫秒数。
    Date.prototype.getDate()
    //根据本地时间返回指定日期对象的月份中的第几天（1-31）。
    Date.prototype.getDay()
    //根据本地时间返回指定日期对象的星期中的第几天（0-6）。
    Date.prototype.getFullYear()
    //根据本地时间返回指定日期对象的年份（四位数年份时返回四位数字）。
    Date.prototype.getHours()
    //根据本地时间返回指定日期对象的小时（0-23）。
    Date.prototype.getMilliseconds()
    //根据本地时间返回指定日期对象的毫秒（0-999）。
    Date.prototype.getMinutes()
    //根据本地时间返回指定日期对象的分钟（0-59）。
    Date.prototype.getMonth()
    //根据本地时间返回指定日期对象的月份（0-11）。
    Date.prototype.getSeconds()
    //根据本地时间返回指定日期对象的秒数（0-59）。
    Date.prototype.getTime()
    //返回从1970-1-1 00:00:00 UTC（协调世界时）到该日期经过的毫秒数，对于1970-1-1 00:00:00 UTC之前的时间返回负值。
    Date.prototype.getTimezoneOffset()
    //返回当前时区的时区偏移。
    Date.prototype.getUTCDate()
    //根据世界时返回特定日期对象一个月的第几天（1-31）.
    Date.prototype.getUTCDay()
    //根据世界时返回特定日期对象一个星期的第几天（0-6）.
    Date.prototype.getUTCFullYear()
    //根据世界时返回特定日期对象所在的年份（4位数）.
    Date.prototype.getUTCHours()
    //根据世界时返回特定日期对象当前的小时（0-23）.
    Date.prototype.getUTCMilliseconds()
    //根据世界时返回特定日期对象的毫秒数（0-999）.
    Date.prototype.getUTCMinutes()
    //根据世界时返回特定日期对象的分钟数（0-59）.
    Date.prototype.getUTCMonth()
    //根据世界时返回特定日期对象的月份（0-11）.
    Date.prototype.getUTCSeconds()
    //根据世界时返回特定日期对象的秒数（0-59）.
    Date.prototype.getYear()
    //根据特定日期返回年份 (通常 2-3 位数). 使用 getFullYear() .   
    Date.prototype.setDate()
    //根据本地时间为指定的日期对象设置月份中的第几天。
    Date.prototype.setFullYear()
    //根据本地时间为指定日期对象设置完整年份（四位数年份是四个数字）。
    Date.prototype.setHours()
    //根据本地时间为指定日期对象设置小时数。
    Date.prototype.setMilliseconds()
    //根据本地时间为指定日期对象设置毫秒数。
    Date.prototype.setMinutes()
    //根据本地时间为指定日期对象设置分钟数。
    Date.prototype.setMonth()
    //根据本地时间为指定日期对象设置月份。
    Date.prototype.setSeconds()
    //根据本地时间为指定日期对象设置秒数。
    Date.prototype.setTime()
    //通过指定从 1970-1-1 00:00:00 UTC 开始经过的毫秒数来设置日期对象的时间，对于早于 1970-1-1 00:00:00 UTC的时间可使用负值。
    Date.prototype.setUTCDate()
    //根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。
    Date.prototype.setUTCFullYear()
    //根据世界时设置 Date 对象中的年份（四位数字）。
    Date.prototype.setUTCHours()
    //根据世界时设置 Date 对象中的小时 (0 ~ 23)。
    Date.prototype.setUTCMilliseconds()
    //根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。
    Date.prototype.setUTCMinutes()
    //根据世界时设置 Date 对象中的分钟 (0 ~ 59)。
    Date.prototype.setUTCMonth()
    //根据世界时设置 Date 对象中的月份 (0 ~ 11)。
    Date.prototype.setUTCSeconds()
    //根据世界时设置 Date 对象中的秒钟 (0 ~ 59)。
    Date.prototype.toDateString()
    //以人类易读（human-readable）的形式返回该日期对象日期部分的字符串。
    Date.prototype.toISOString()
    //把一个日期转换为符合 ISO 8601 扩展格式的字符串。
    Date.prototype.toJSON()
    //使用 toISOString() 返回一个表示该日期的字符串。为了在 JSON.stringify() 方法中使用。
    Date.prototype.toGMTString() 
    //返回一个基于 GMT (UT) 时区的字符串来表示该日期。请使用 toUTCString() 方法代替。
    Date.prototype.toLocaleDateString()
    //返回一个表示该日期对象日期部分的字符串，该字符串格式与系统设置的地区关联（locality sensitive）。
    Date.prototype.toLocaleFormat() 
    //使用格式字符串将日期转换为字符串。
    Date.prototype.toLocaleString()
    //返回一个表示该日期对象的字符串，该字符串与系统设置的地区关联（locality sensitive）。覆盖了 Object.prototype.toLocaleString() 方法。
    Date.prototype.toLocaleTimeString()
    //返回一个表示该日期对象时间部分的字符串，该字符串格式与系统设置的地区关联（locality sensitive）。
    Date.prototype.toSource()
    //返回一个与Date等价的原始字符串对象，你可以使用这个值去生成一个新的对象。重写了 Object.prototype.toSource() 这个方法。
    Date.prototype.toString()
    //返回一个表示该日期对象的字符串。覆盖了Object.prototype.toString() 方法。
    Date.prototype.toTimeString()
    //以人类易读格式返回日期对象时间部分的字符串。
    Date.prototype.toUTCString()
    //把一个日期对象转换为一个以UTC时区计时的字符串。
    Date.prototype.valueOf()
    //返回一个日期对象的原始值。覆盖了 Object.prototype.valueOf() 方法。          
                
//文本处理
String
    //属性
    String.prototype
    //可以为 String 对象增加新的属性。
    String.prototype.constructor
    //用于创造对象的原型对象的特定的函数。
    String.prototype.length
    //返回了字符串的长度。
    //方法
    String.fromCharCode()  
    //通过一串 Unicode 创建字符串。
    String.fromCodePoint() 
    //通过一串 码点 创建字符串。
    String.raw() 
    //通过模板字符串创建字符串。   
    //跟HTML无关的方法
    String.prototype.charAt()
    //返回特定位置的字符。
    String.prototype.charCodeAt()
    //返回表示给定索引的字符的Unicode的值。
    String.prototype.codePointAt()
    //返回使用UTF-16编码的给定位置的值的非负整数。
    String.prototype.concat()
    //连接两个字符串文本，并返回一个新的字符串。
    String.prototype.includes()
    //判断一个字符串里是否包含其他字符串。
    String.prototype.endsWith()
    //判断一个字符串的是否以给定字符串结尾，结果返回布尔值。
    String.prototype.indexOf()
    //从字符串对象中返回首个被发现的给定值的索引值，如果没有找到则返回-1。
    String.prototype.lastIndexOf()
    //从字符串对象中返回最后一个被发现的给定值的索引值，如果没有找到则返回-1。
    String.prototype.localeCompare()
    //返回一个数字表示是否引用字符串在排序中位于比较字符串的前面，后面，或者二者相同。
    String.prototype.match()
    //使用正则表达式与字符串相比较。
    String.prototype.normalize()
    //返回调用字符串值的Unicode标准化形式。
    String.prototype.padEnd()
    //在当前字符串尾部填充指定的字符串， 直到达到指定的长度。 返回一个新的字符串。
    String.prototype.padStart()
    //在当前字符串头部填充指定的字符串， 直到达到指定的长度。 返回一个新的字符串。                
    String.prototype.repeat()
    //返回指定重复次数的由元素组成的字符串对象。
    String.prototype.replace()
    //被用来在正则表达式和字符串直接比较，然后用新的子串来替换被匹配的子串。
    String.prototype.search()
    //对正则表达式和指定字符串进行匹配搜索，返回第一个出现的匹配项的下标。
    String.prototype.slice()
    //摘取一个字符串区域，返回一个新的字符串。
    String.prototype.split()
    //通过分离字符串成字串，将字符串对象分割成字符串数组。
    String.prototype.startsWith()
    //判断字符串的起始位置是否匹配其他字符串中的字符。
    String.prototype.substr()
    //通过指定字符数返回在指定位置开始的字符串中的字符。
    String.prototype.substring()
    //返回在字符串中指定两个下标之间的字符。
    String.prototype.toLocaleLowerCase()
    //根据当前区域设置，将符串中的字符转换成小写。对于大多数语言来说，toLowerCase的返回值是一致的。
    String.prototype.toLocaleUpperCase()
    //根据当前区域设置，将字符串中的字符转换成大写，对于大多数语言来说，toUpperCase的返回值是一致的。
    String.prototype.toLowerCase()
    //将字符串转换成小写并返回。
    String.prototype.toSource() 
    //返回一个对象文字代表着特定的对象。你可以使用这个返回值来创建新的对象。重写 Object.prototype.toSource 方法。
    String.prototype.toString()
    //返回用字符串表示的特定对象。重写 Object.prototype.toString 方法。
    String.prototype.toUpperCase()
    //将字符串转换成大写并返回。
    String.prototype.trim()
    //从字符串的开始和结尾去除空格。参照部分 ECMAScript 5 标准。
    String.prototype.trimStart()
    String.prototype.trimLeft() 
    //从字符串的左侧去除空格。
    String.prototype.trimEnd()
    String.prototype.trimRight() 
    //从字符串的右侧去除空格。
    String.prototype.valueOf()
    //返回特定对象的原始值。重写 Object.prototype.valueOf 方法。
    /* String.prototype[@@iterator]() */
    //返回一个新的迭代器对象，该对象遍历字符串值的索引位置，将每个索引值作为字符串值返回。
    
RegExp
    //属性
    /* get RegExp[@@species] */
    //该构造函数用于创建派生对象。
    RegExp.lastIndex
    //该索引表示从哪里开始下一个匹配
    RegExp.prototype.flags
    //含有 RegExp 对象 flags 的字符串。
    RegExp.prototype.dotAll
    //. 是否要匹配新行（newlines）。
    RegExp.prototype.global
    //针对字符串中所有可能的匹配项测试正则表达式，还是仅针对第一个匹配项。
    RegExp.prototype.ignoreCase
    //匹配文本的时候是否忽略大小写。
    RegExp.prototype.multiline
    //是否进行多行搜索。
    RegExp.prototype.source
    //正则表达式的文本。
    RegExp.prototype.sticky
    //搜索是否是 sticky。
    RegExp.prototype.unicode
    //Unicode 功能是否开启。
    //方法
    RegExp.prototype.compile()
    //(Re-)运行脚本的期间执行正则表达式。
    RegExp.prototype.exec()
    //在该字符串中执行匹配项的搜索。
    RegExp.prototype.test()
    //该正则在字符串里是否有匹配。
    /* RegExp.prototype[@@match]() */
    //对给定字符串执行匹配并返回匹配结果。
    /* RegExp.prototype[@@matchAll]() */
    //对给定字符串执行匹配，返回所有匹配结果。
    /* RegExp.prototype[@@replace]() */
    //给定新的子串，替换所有匹配结果。
    /* RegExp.prototype[@@search]() */
    //在给定字符串中搜索匹配项，并返回在字符串中找到字符索引。
    /* RegExp.prototype[@@split]() */
    //通过将给定字符串拆分为子字符串，并返回字符串形成的数组。
    RegExp.prototype.toString()
    //返回表示指定对象的字符串。重写{JSxRef（“”Object.prototype.toString（）“）}}方法。  
//数组
Array
    //属性
    Array.length
    //Array 构造函数的 length 属性，其值为1（注意该属性为静态属性，不是数组实例的 length 属性）。
    /* get Array[@@species] */
    //返回 Array 构造函数。
    Array.prototype
    //通过数组的原型对象可以为所有数组对象添加属性。
    Array.prototype.constructor
    //所有的数组实例都继承了这个属性，它的值就是 Array，表明了所有的数组都是由 Array 构造出来的。
    Array.prototype.length
    //上面说了，因为 Array.prototype 也是个数组，所以它也有 length 属性，这个值为 0，因为它是个空数组。
    //方法
    Array.from()
    //从类数组对象或者可迭代对象中创建一个新的数组实例。
    Array.isArray()
    //用来判断某个变量是否是一个数组对象。
    Array.of()
    //根据一组参数来创建新的数组实例，支持任意的参数数量和类型。   
    //修改器方法    
    Array.prototype.copyWithin() 
    //在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
    Array.prototype.fill() 
    //将数组中指定区间的所有元素的值，都替换成某个固定的值。
    Array.prototype.pop()
    //删除数组的最后一个元素，并返回这个元素。
    Array.prototype.push()
    //在数组的末尾增加一个或多个元素，并返回数组的新长度。
    Array.prototype.reverse()
    //颠倒数组中元素的排列顺序，即原先的第一个变为最后一个，原先的最后一个变为第一个。
    Array.prototype.shift()
    //删除数组的第一个元素，并返回这个元素。
    Array.prototype.sort()
    //对数组元素进行排序，并返回当前数组。
    Array.prototype.splice()
    //在任意的位置给数组添加或删除任意个元素。
    Array.prototype.unshift()
    //在数组的开头增加一个或多个元素，并返回数组的新长度。
    //访问方法
    Array.prototype.concat()
    //返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组。
    Array.prototype.includes() 
    //判断当前数组是否包含某指定的值，如果是返回 true，否则返回 false。
    Array.prototype.join()
    //连接所有数组元素组成一个字符串。
    Array.prototype.slice()
    //抽取当前数组中的一段元素组合成一个新数组。
    Array.prototype.toSource() 
    //返回一个表示当前数组字面量的字符串。遮蔽了原型链上的 Object.prototype.toSource() 方法。
    Array.prototype.toString()
    //返回一个由所有数组元素组合而成的字符串。遮蔽了原型链上的 Object.prototype.toString() 方法。
    Array.prototype.toLocaleString()
    //返回一个由所有数组元素组合而成的本地化后的字符串。遮蔽了原型链上的 Object.prototype.toLocaleString() 方法。
    Array.prototype.indexOf()
    //返回数组中第一个与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。
    Array.prototype.lastIndexOf()
    //返回数组中最后一个（从右边数第一个）与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。
    //迭代方法
    Array.prototype.forEach()
    //为数组中的每个元素执行一次回调函数。
    Array.prototype.entries() 
    //返回一个数组迭代器对象，该迭代器会包含所有数组元素的键值对。
    Array.prototype.every()
    //如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false。
    Array.prototype.some()
    //如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false。
    Array.prototype.filter()
    //将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回。
    Array.prototype.find() 
    //找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined。
    Array.prototype.findIndex() 
    //找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 -1。
    Array.prototype.keys() 
    //返回一个数组迭代器对象，该迭代器会包含所有数组元素的键。
    Array.prototype.map()
    //返回一个由回调函数的返回值组成的新数组。
    Array.prototype.reduce()
    //从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。
    Array.prototype.reduceRight()
    //从右到左为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。
    Array.prototype.values() 
    //返回一个数组迭代器对象，该迭代器会包含所有数组元素的值。
    /* Array.prototype[@@iterator]()  */
    //和上面的 values() 方法是同一个函数。
//使用键的集合对象
Map
    //属性
    Map.length
    //属性 length 的值为 0 。想要计算一个Map 中的条目数量， 使用 Map.prototype.size.
    /* get Map[@@species] */
    //本构造函数用于创建派生对象。
    Map.prototype
    //表示 Map 构造器的原型。 允许添加属性从而应用于所有的 Map 对象。
    Map.prototype.constructor
    //返回一个函数，它创建了实例的原型。默认是Map函数。
    Map.prototype.size
    //返回Map对象的键/值对的数量。
    //方法
    Map.prototype.clear()
    //移除Map对象的所有键/值对 。
    Map.prototype.delete(key)
    //如果 Map 对象中存在该元素，则移除它并返回 true；否则如果该元素不存在则返回 false。随后调用 Map.prototype.has(key) 将返回 false 。
    Map.prototype.entries()
    //返回一个新的 Iterator 对象，它按插入顺序包含了Map对象中每个元素的 [key, value] 数组。
    /* Map.prototype.forEach(callbackFn[, thisArg]) */
    //按插入顺序，为 Map对象里的每一键值对调用一次callbackFn函数。如果为forEach提供了thisArg，它将在每次回调中作为this值。
    Map.prototype.get(key)
    //返回键对应的值，如果不存在，则返回undefined。
    Map.prototype.has(key)
    //返回一个布尔值，表示Map实例是否包含键对应的值。
    Map.prototype.keys()
    //返回一个新的 Iterator对象， 它按插入顺序包含了Map对象中每个元素的键 。
    Map.prototype.set(key, value)
    //设置Map对象中键的值。返回该Map对象。
    Map.prototype.values()
    //返回一个新的Iterator对象，它按插入顺序包含了Map对象中每个元素的值 。
    /* Map.prototype[@@iterator]() */
    //返回一个新的Iterator对象，它按插入顺序包含了Map对象中每个元素的 [key, value] 数组。   
Set
    //属性
    /* get Set[@@species] */
    //构造函数用来创建派生对象.
    Set.prototype
    //Set 构造器的原型。
    Set.prototype.size
    //返回 Set 对象中的值的个数
    //方法
    Set.prototype.add(value)
    //在Set对象尾部添加一个元素。返回该Set对象。
    Set.prototype.clear()
    //移除Set对象内的所有元素。
    Set.prototype.delete(value)
    //移除Set的中与这个值相等的元素，返回Set.prototype.has(value)在这个操作前会返回的值（即如果该元素存在，返回true，否则返回false）。Set.prototype.has(value)在此后会返回false。
    Set.prototype.entries()
    //返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值的[value, value]数组。为了使这个方法和Map对象保持相似， 每个值的键和值相等。
    /* Set.prototype.forEach(callbackFn[, thisArg]) */
    //按照插入顺序，为Set对象中的每一个值调用一次callBackFn。如果提供了thisArg参数，回调中的this会是这个参数。
    Set.prototype.has(value)
    //返回一个布尔值，表示该值在Set中存在与否。
    Set.prototype.keys()
    //与values()方法相同，返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值。
    Set.prototype.values()
    //返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值。
    /* Set.prototype[@@iterator]() */
    //返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值。       
WeakMap
    //属性
    WeakMap.length
    //length  属性的值为 0。
    WeakMap.prototype
    //WeakMap 构造器的原型。 允许添加属性到所有的 WeakMap 对象。
    WeakMap.prototype.constructor
    //返回创建WeakMap实例的原型函数。 WeakMap函数是默认的。
    //方法
    WeakMap.prototype.delete(key)
    //移除key的关联对象。执行后 WeakMap.prototype.has(key)返回false。
    WeakMap.prototype.get(key)
    //返回key关联对象, 或者 undefined(没有key关联对象时)。
    WeakMap.prototype.has(key)
    //根据是否有key关联对象返回一个Boolean值。
    WeakMap.prototype.set(key, value)
    //在WeakMap中设置一组key关联对象，返回这个 WeakMap对象。
                
WeakSet
    //属性
    WeakSet.length
    //length 属性的值为 0.
    WeakSet.prototype
    //表示WeakSet构造函数的原型。 允许向所有WeakSet对象添加属性。
    WeakSet.prototype.constructor
    //返回构造函数即 WeakSet 本身.
    //方法
    WeakSet.prototype.add(value)
    //在该 WeakSet 对象中添加一个新元素 value.
    WeakSet.prototype.delete(value)
    //从该 WeakSet 对象中删除 value 这个元素, 之后 WeakSet.prototype.has(value) 方法便会返回 false.
    WeakSet.prototype.has(value)
    //返回一个布尔值,  表示给定的值 value 是否存在于这个 WeakSet 中.  
//结构化数据
JSON
    //方法
    JSON.parse()
    //解析JSON字符串并返回对应的值，可以额外传入一个转换函数，用来将生成的值和其属性, 在返回之前进行某些修改。
    JSON.stringify()
    //返回与指定值对应的JSON字符串，可以通过额外的参数, 控制仅包含某些属性, 或者以自定义方法来替换某些key对应的属性值。
//控制抽象化
Promise
    //属性
    Promise.length
    //length属性，其值总是为 1 (构造器参数的数目).
    Promise.prototype
    //表示 Promise 构造器的原型.
    Promise.prototype.constructor
    //返回被创建的实例函数.  默认为 Promise 函数.
    //方法
    Promise.all(iterable)
    //这个方法返回一个新的promise对象，该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功，一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。这个新的promise对象在触发成功状态以后，会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值，顺序跟iterable的顺序保持一致；如果这个新的promise对象触发了失败状态，它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息。Promise.all方法常被用于处理多个promise对象的状态集合。（可以参考jQuery.when方法---译者注）
    Promise.allSettled(iterable)
    //等到所有promises都完成（每个promise返回成功或失败）。返回一个promise，该promise在所有promise完成后完成。并带有一个对象数组，每个对象对应每个promise的结果。
    Promise.any(iterable)
    //接收一个Promise对象的集合，当其中的一个promise 成功，就返回那个成功的promise的值。
    Promise.race(iterable)
    //当iterable参数里的任意一个子promise被成功或失败后，父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，并返回该promise对象。
    Promise.reject(reason)
    //返回一个状态为失败的Promise对象，并将给定的失败信息传递给对应的处理方法
    Promise.resolve(value)
    //返回一个状态由给定value决定的Promise对象。如果该值是thenable(即，带有then方法的对象)，返回的Promise对象的最终状态由then方法执行决定；否则的话(该value为空，基本类型或者不带then方法的对象),返回的Promise对象状态为fulfilled，并且将该value传递给对应的then方法。通常而言，如果你不知道一个值是否是Promise对象，使用Promise.resolve(value) 来返回一个Promise对象,这样就能将该value以Promise对象形式使用。 
    Promise.prototype.catch(onRejected)
    //添加一个拒绝(rejection) 回调到当前 promise, 返回一个新的promise。当这个回调函数被调用，新 promise 将以它的返回值来resolve，否则如果当前promise 进入fulfilled状态，则以当前promise的完成结果作为新promise的完成结果.
    Promise.prototype.then(onFulfilled, onRejected)
    //添加解决(fulfillment)和拒绝(rejection)回调到当前 promise, 返回一个新的 promise, 将以回调的返回值来resolve.
    Promise.prototype.finally(onFinally)
    //添加一个事件处理回调于当前promise对象，并且在原promise对象解析完毕后，返回一个新的promise对象。回调会在当前promise运行完毕后被调用，无论当前promise的状态是完成(fulfilled)还是失败(rejected)
//反射
Reflect 
    //方法
    Reflect.apply(target, thisArgument, argumentsList)
    //对一个函数进行调用操作，同时可以传入一个数组作为调用参数。和 Function.prototype.apply() 功能类似。
    /* Reflect.construct(target, argumentsList[, newTarget]) */
    //对构造函数进行 new 操作，相当于执行 new target(...args)。
    Reflect.defineProperty(target, propertyKey, attributes)
    //和 Object.defineProperty() 类似。如果设置成功就会返回 true
    Reflect.deleteProperty(target, propertyKey)
    //作为函数的delete操作符，相当于执行 delete target[name]。
    /* Reflect.get(target, propertyKey[, receiver]) */
    //获取对象身上某个属性的值，类似于 target[name]。
    Reflect.getOwnPropertyDescriptor(target, propertyKey)
    //类似于 Object.getOwnPropertyDescriptor()。如果对象中存在该属性，则返回对应的属性描述符,  否则返回 undefined.
    Reflect.getPrototypeOf(target)
    //类似于 Object.getPrototypeOf()。
    Reflect.has(target, propertyKey)
    //判断一个对象是否存在某个属性，和 in 运算符 的功能完全相同。
    Reflect.isExtensible(target)
    //类似于 Object.isExtensible().
    Reflect.ownKeys(target)
    //返回一个包含所有自身属性（不包含继承属性）的数组。(类似于 Object.keys(), 但不会受enumerable影响).
    Reflect.preventExtensions(target)
    //类似于 Object.preventExtensions()。返回一个Boolean。
    /* Reflect.set(target, propertyKey, value[, receiver]) */
    //将值分配给属性的函数。返回一个Boolean，如果更新成功，则返回true。
    Reflect.setPrototypeOf(target, prototype)
    //设置对象原型的函数. 返回一个 Boolean， 如果更新成功，则返回true。         
Proxy
    //方法
    Proxy.revocable()
    //创建一个可撤销的Proxy对象。    
    handler.getPrototypeOf()
    //Object.getPrototypeOf 方法的捕捉器。
    handler.setPrototypeOf()
    //Object.setPrototypeOf 方法的捕捉器。
    handler.isExtensible()
    //Object.isExtensible 方法的捕捉器。
    handler.preventExtensions()
    //Object.preventExtensions 方法的捕捉器。
    handler.getOwnPropertyDescriptor()
    //Object.getOwnPropertyDescriptor 方法的捕捉器。
    handler.defineProperty()
    //Object.defineProperty 方法的捕捉器。
    handler.has()
    //in 操作符的捕捉器。
    handler.get()
    //属性读取操作的捕捉器。
    handler.set()
    //属性设置操作的捕捉器。
    handler.deleteProperty()
    //delete 操作符的捕捉器。
    handler.ownKeys()
    //Object.getOwnPropertyNames 方法和 Object.getOwnPropertySymbols 方法的捕捉器。
    handler.apply()
    //函数调用操作的捕捉器。
    handler.construct()
    //new 操作符的捕捉器。 
//国际化
Intl
    //属性
    Intl.Collator
    //collators的构造函数，用于启用对语言敏感的字符串比较的对象。
    Intl.DateTimeFormat
    //用于启用语言敏感的日期和时间格式的对象的构造函数。
    Intl.ListFormat
    //Constructor for objects that enable language-sensitive list formatting.
    Intl.NumberFormat
    //用于启用语言敏感数字格式的对象的构造函数。
    Intl.PluralRules
    //用于启用多种敏感格式和多种语言语言规则的对象的构造函数。
    Intl.RelativeTimeFormat
    //Constructor for objects that enable language-sensitive relative time formatting.
    //方法
    Intl.getCanonicalLocales()
    //返回规范区域名称（canonical locale name）。   
//加载管理 WebAssembly 代码
WebAssembly
    //方法
    WebAssembly.instantiate()
    //用于编译和实例化 WebAssembly 代码的主 API，返回一个 Module 和它的第一个Instance实例。
    WebAssembly.instantiateStreaming()
    //直接从流式底层源编译和实例化WebAssembly模块，同时返回Module及其第一个Instance实例。
    WebAssembly.compile()
    //把 WebAssembly 二进制代码编译为一个 WebAssembly.Module ，不进行实例化。
    WebAssembly.compileStreaming()
    //直接从流式底层源代码编译WebAssembly.Module ，将实例化作为一个单独的步骤。
    WebAssembly.validate()
    //校验 WebAssembly 二进制代码的类型数组是否合法，合法则返回 true ，否则返回 false 。   
    WebAssembly.Global()
    //创建一个新的WebAssembly Global 全局对象.
    WebAssembly.Module()
    //创建一个新的WebAssembly Module模块对象。
    WebAssembly.Instance()
    //创建一个新的WebAssembly Instance实例对象。
    WebAssembly.Memory()
    //创建一个新的WebAssembly Memory内存对象。
    WebAssembly.Table()
    //创建一个新的WebAssembly Table表格对象。
    WebAssembly.CompileError()
    //创建一个新的WebAssembly CompileError编译错误对象。
    WebAssembly.LinkError()
    //创建一个新的WebAssembly LinkError链接错误对象。
    WebAssembly.RuntimeError()
    //创建一个新的WebAssembly RuntimeError运行时错误对象。




//语法内置方法（全局方法），省略window，后加（）
eval    //eval() 函数会将传入的字符串当做 JavaScript 代码进行执行。
    console.log(eval('2 + 2'));// expected output: 4

isFinite    //该全局 isFinite() 函数用来判断被传入的参数值是否为一个有限数值（finite number）。在必要情况下，参数会首先转为一个数值。你可以用这个方法来判定一个数字是否是有限数字。isFinite 方法检测它参数的数值。如果参数是 NaN，正无穷大或者负无穷大，会返回false，其他返回 true。
    isFinite(Infinity);  // false
    isFinite(NaN);       // false
    isFinite(-Infinity); // false
    isFinite(0);         // true
    isFinite(2e64);      // true, 在更强壮的Number.isFinite(null)中将会得到false
    isFinite("0");       // true, 在更强壮的Number.isFinite('0')中将会得到false

isNaN   //isNaN() 函数用来确定一个值是否为NaN 。注：isNaN函数内包含一些非常有趣的规则；你也可以使用 ECMAScript 2015 中定义的 Number.isNaN() 来判断。
    isNaN(NaN);       // true
    isNaN(undefined); // true
    isNaN({});        // true
    isNaN(true);      // false
    isNaN(null);      // false
    isNaN(37);        // false

parseFloat      //parseFloat() 函数解析一个参数（必要时先转换为字符串）并返回一个浮点数。
    function circumference(r) {
      return parseFloat(r) * 2.0 * Math.PI;
    }                
    console.log(circumference(4.567));
    // expected output: 28.695307297889173                
    console.log(circumference('4.567abcdefgh'));
    // expected output: 28.695307297889173                
    console.log(circumference('abcdefgh'));
    // expected output: NaN

parseInt        //parseInt(string, radix)   解析一个字符串并返回指定基数的十进制整数， radix 是2-36之间的整数，表示被解析字符串的基数。
    function roughScale(x, base) {
      const parsed = parseInt(x, base);
      if (isNaN(parsed)) { return 0; }
      return parsed * 100;
    }                
    console.log(roughScale(' 0xF', 16));
    // expected output: 1500                
    console.log(roughScale('321', 2));
    // expected output: 0

decodeURI       //decodeURI() 函数能解码由encodeURI 创建或其它流程得到的统一资源标识符（URI）。
    const uri = 'https://mozilla.org/?x=шеллы';
    const encoded = encodeURI(uri);
    console.log(encoded);
    // expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"                
    try {
      console.log(decodeURI(encoded));
      // expected output: "https://mozilla.org/?x=шеллы"
    } catch (e) { // catches a malformed URI
      console.error(e);
    }

decodeURIComponent  //decodeURIComponent() 方法用于解码由 encodeURIComponent 方法或者其它类似方法编码的部分统一资源标识符（URI）。
    try { 
      var a = decodeURIComponent('%E0%A4%A'); 
    } catch(e) { 
      console.error(e); 
    }
    // URIError: malformed URI sequence

encodeURI           //encodeURI()  函数通过将特定字符的每个实例替换为一个、两个、三或四转义序列来对统一资源标识符 (URI) 进行编码 (该字符的 UTF-8 编码仅为四转义序列)由两个 "代理" 字符组成)。
    // 编码高-低位完整字符 ok
    console.log(encodeURI('\uD800\uDFFF'));
    // 编码单独的高位字符抛出 "Uncaught URIError: URI malformed"
    console.log(encodeURI('\uD800'));
    // 编码单独的低位字符抛出 "Uncaught URIError: URI malformed"
    console.log(encodeURI('\uDFFF'));

encodeURIComponent  //encodeURIComponent()函数通过将一个，两个，三个或四个表示字符的UTF-8编码的转义序列替换某些字符的每个实例来编码 URI （对于由两个“代理”字符组成的字符而言，将仅是四个转义序列） 。
    // encodes characters such as ?,=,/,&,:
    console.log(`?x=${encodeURIComponent('test?')}`);
    // expected output: "?x=test%3F"
    console.log(`?x=${encodeURIComponent('шеллы')}`);
    // expected output: "?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"







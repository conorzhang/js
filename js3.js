"use strict";
console.log('-------------global对象---------------')
//console.log(global)     //<ref *1> Object [global] {}    
///////////////////////////////////////////////////////////////
console.log(global.global)      //<ref *1> Object [global] {}           类型   对象名
console.log(typeof(global))     //object
console.log(global.prototype)   //undefined                             没有原型，顶级对象

console.log('-------------Math对象---------------')
//console.log(global.Math)        //Object [Math] {}
///////////////////////////////////////////////////////////////
console.log(Math)               //Object [Math] {}                     类型   对象名
console.log(typeof(Math))      //object
console.log(Math.prototype)     //undefined                            没有原型，顶级对象

console.log('-------------globalThis类型字面量---------------')
///////////////////////////////////////////////////////////////
console.log(globalThis)               //<ref *1> Object [global] {}                       字面量
console.log(typeof(globalThis))      //object
console.log(globalThis.prototype)     //undefined                      没有原型，顶级对象



console.log('-------------Infinity类型字面量---------------')
///////////////////////////////////////////////////////////////
console.log(Infinity)               //Infinity                                  字面量
console.log(typeof(Infinity))      //number
console.log(Infinity.prototype)     //undefined                       没有原型，顶级对象

console.log('-------------NaN类型字面量---------------')
///////////////////////////////////////////////////////////////
console.log(NaN)               //NaN                                    字面量
console.log(typeof(NaN))      //number
//console.log(undefined.prototype)   //undefined                       没有原型，顶级对象



console.log('-------------null类型字面量---------------')
///////////////////////////////////////////////////////////////
console.log(null)               //null                                    字面量
console.log(typeof(null))      //object
//console.log(null.prototype)     //                                      没有prototype属性，不可读

console.log('-------------undefined类型字面量---------------')
///////////////////////////////////////////////////////////////
console.log(undefined)               //undefined                          字面量
console.log(typeof(undefined))      //undefined 
//console.log(undefined.prototype)     //                                 没有prototype属性，不可读



console.log('-------------Number函数---------------')
//console.log(global.Number)      //[Function: Number]
///////////////////////////////////////////////////////////////
console.log(Number)            //[Function: Number]                     函数名
console.log(typeof(Number))     //function
console.log(Number.prototype)   //[Number: 0]                           原型是字面量0

console.log('-------------number类型字面量---------------')
///////////////////////////////////////////////////////////////
console.log(8)               //8                                        字面量
console.log(typeof(8))      //number
console.log((8).prototype)     //undefined                              没有原型，顶级对象

console.log('-------------Boolean函数---------------')
///////////////////////////////////////////////////////////////
console.log(Boolean)            //[Function: Boolean]                   函数名
console.log(typeof(Boolean))     //function
console.log(Boolean.prototype)   //[Number: false]                      原型是字面量false

console.log('-------------boolean类型字面量---------------')
///////////////////////////////////////////////////////////////
console.log(true)               //true                                  字面量
console.log(typeof(false))      //boolean
console.log((true).prototype)     //undefined                           没有原型，顶级对象

console.log('-------------String函数---------------')
///////////////////////////////////////////////////////////////
console.log(String)            //[Function: String]                     函数名
console.log(typeof(String))     //function
console.log(String.prototype)   //[String: 0]                           原型是字面量''

console.log('-------------string类型字面量---------------')
///////////////////////////////////////////////////////////////
console.log('s')               //s                                      字面量
console.log(typeof('s'))      //string
console.log(('s').prototype)     //undefined                            没有原型，顶级对象

console.log('-------------Object函数---------------')
///////////////////////////////////////////////////////////////
console.log(Object)            //[Function: Object]                     函数名
console.log(typeof(Object))     //function
console.log(Object.prototype)   //{}                                     原型是字面量{}

console.log('-------------object类型字面量---------------')
///////////////////////////////////////////////////////////////
console.log({})               //{}                                      字面量
console.log(typeof({}))      //object
console.log(({}).prototype)     //undefined                             没有原型，顶级对象

console.log('-------------Arry函数---------------')
///////////////////////////////////////////////////////////////
console.log(Array)            //[Function: Array]                       函数名
console.log(typeof(Array))     //function
console.log(Array.prototype)   //[]                                     原型是字面量{}

console.log('-------------arry类型字面量---------------')
///////////////////////////////////////////////////////////////
console.log([])               //[]                                      字面量
console.log(typeof([]))      //object
console.log(([]).prototype)     //undefined                             没有原型，顶级对象




console.log('-------------Function函数---------------')
///////////////////////////////////////////////////////////////
console.log(Function)            //[Function: Function]                 函数名       
console.log(typeof(Function))     //function
console.log(Function.prototype)   //[Function (anonymous)]              原型是匿名构造函数（对象） {} 或 function(){} 

console.log('-------------function类型字面量---------------')
///////////////////////////////////////////////////////////////
console.log(function () {})               //[Function (anonymous)]      字面量
console.log(typeof(function () {}))      //function
console.log((function () {}).prototype)     //{}                        原型是匿名构造函数（对象） {} 或 function(){} 

console.log(function fn() {})               //[Function fn]
console.log(typeof(function fn() {}))      //function
console.log((function fn() {}).prototype)     //fn {}                   原型是命名构造函数（对象） fn {}




console.log('-------------Symbol函数---------------')
///////////////////////////////////////////////////////////////
console.log(Symbol)            //[Function: Symbol]                      函数名
console.log(typeof(Symbol))     //function
console.log(Symbol.prototype)   //Symbol {}                              原型是命名构造函数（对象） Symbol {} 

console.log('-------------Symbol对象字面量---------------')
///////////////////////////////////////////////////////////////
console.log(Symbol())         //Symbol()                                 字面量
console.log(typeof(Symbol()))      //symbol                               
console.log(Symbol().prototype)     //undefined                          没有原型，顶级对象

console.log('-------------BigInt函数---------------')
///////////////////////////////////////////////////////////////
console.log(BigInt)            //[Function: BigInt]                       函数名
console.log(typeof(BigInt))     //function
console.log(BigInt.prototype)   //BigInt {}                               原型是命名构造函数（对象） BigInt {}   

console.log('-------------BigInt对象字面量---------------')
///////////////////////////////////////////////////////////////
console.log(BigInt(100))         //100n                                  字面量
console.log(typeof(BigInt(100)))      //bigint                               
console.log(BigInt(100).prototype)     //undefined                       没有原型，顶级对象

console.log('-------------RegExp函数---------------')
///////////////////////////////////////////////////////////////
console.log(RegExp)            //[Function: RegExp]                     函数名
console.log(typeof(RegExp))     //function
console.log(RegExp.prototype)   //RegExp {}                             原型是命名构造函数（对象） RegExp {} 

console.log('-------------RegExp对象字面量---------------')
console.log(RegExp())         //  /(?:)/                                  字面量
console.log(typeof(RegExp()))      //object                               
console.log(RegExp().prototype)     //undefined                         没有原型，顶级对象

console.log('-------------Date函数---------------')
///////////////////////////////////////////////////////////////
console.log(Date)               //[Function: Date]                      函数名
console.log(typeof(Date))      //function
console.log(Date.prototype)     //Date {}                               原型是命名构造函数（对象） Date {}

console.log('-------------Date对象字面量---------------')
//console.log(new Date())    //2020-09-09T04:51:12.736Z             
//console.log(new Date("October 13, 2014 11:13:00"))  //2014-10-13T03:13:00.000Z
//console.log(new Date(1990,10,18,18,10,59,999))      //1990-11-18T10:10:59.999Z  JavaScript 从 0 到 11 计算月份。一月是 0。十二月是11。
console.log(new Date(30000))         //1970-01-01T00:00:30.000Z             字面量
console.log(typeof(new Date(30000)))      //object                               
console.log(new Date(30000).prototype)     //undefined                       没有原型，顶级对象

console.log('-------------Error函数---------------')
///////////////////////////////////////////////////////////////
console.log(Error)            //[Function: Error]                      函数名
console.log(typeof(Error))     //function
console.log(Error.prototype)   //Error {}                              原型是命名构造函数（对象） Error {}

console.log('-------------Error对象字面量---------------')
console.log(new Error("Whoops!"))         //Error: Whoops!                            字面量
console.log(typeof(new Error("Whoops!")))      //object                               
console.log(new Error("Whoops!").prototype)     //undefined                        没有原型，顶级对象

console.log('-------------Map函数---------------')
///////////////////////////////////////////////////////////////
console.log(Map)            //[Function: Map]                      函数名
console.log(typeof(Map))     //function
console.log(Map.prototype)   //Map {}                             原型是命名构造函数（对象） Map {}

console.log('-------------Map对象字面量---------------')
let myMap=new Map()
let keyObj = {};                            // 传入的参数
myMap.set(keyObj, "和键keyObj关联的值");        // 传入的参数，传入的函数体（return返回值）
let keyFunc = function() {};
myMap.set(keyFunc, "和键keyFunc关联的值");
let keyString = 'a string';
myMap.set(keyString, "和键'a string'关联的值");
console.log(myMap)

console.log(new Map())         //Map(0) {}                             字面量
console.log(typeof(new Map()))      //object                               
console.log(new Map().prototype)     //undefined                        没有原型，顶级对象

console.log('-------------Set函数（去重数组）---------------')
///////////////////////////////////////////////////////////////
console.log(Set)            //[Function: Set]                      函数名
console.log(typeof(Set))     //function
console.log(Set.prototype)   //Set {}                              原型是命名构造函数（对象） Set {}

console.log('-------------Set对象字面量---------------')
let mySet = new Set();
mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add("some text"); // Set [ 1, 5, "some text" ]
let o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a: 1, b: 2}); // o 指向的是不同的对象，所以没问题
console.log(new Set())              //Set(0) {}                        字面量
console.log(typeof(new Set()))      //object                               
console.log(new Set().prototype)     //undefined                        没有原型，顶级对象




















console.log('-------------构造函数---------------')
function GOUZAO(a,b,c) {
    this.a1=a       //GOUZAO.a=a，等号右边a为参数传值，等号左边a为属性名
    this.b1=b
    this.c1=c
    this.d1='d'
    return this.d1
}
GOUZAO.d=12
//GOUZAO(1,2,3)     //报错TypeError: Cannot set property 'a1' of undefined
console.log(GOUZAO,GOUZAO.a1)       //[Function: GOUZAO] { d: 12 }    undefined         函数GOUZAO和加给它的属性d

//new实例化的对象：构造函数内的属性（this指定的）继承，构造函数外的属性（函数名.xx添加的属性）不继承
let gouzao=new GOUZAO()
console.log(gouzao)         //GOUZAO { a: undefined, b: undefined, c: undefined, d: 'd' }  由构造函数GOUZAO创建的对象。可以继承GOUZAO函数内this添加的属性，不能继承GOUZAO函数外添加的属性

let gouzao2=new GOUZAO(1,2,3,4,5,6)     //多传的参数无效，参数赋值给this属性，一一对应，如果this指定的属性非参数，则传参无效，new新建的实例属性默认值为this指定的值
console.log(gouzao2)            //GOUZAO { a1: 1, b1: 2, c1: 3, d1: 'd' }
gouzao2.d=44
console.log(gouzao2)             //GOUZAO { a1: 1, b1: 2, c1: 3, d1: 'd', d: 44 }

let gouzao3=new GOUZAO([1,2])
console.log(gouzao3)     //GOUZAO { a1: [ 1, 2 ], b1: undefined, c1: undefined, d1: 'd' } 

/* 
-------
解读打印：
-------
[Number: 12]            : 前面是数据类型，: 后面是值/名
[Function: Array]       : 前面是数据类型，: 后面是值/名
{}          对象字面量，匿名对象
[]          数组字面量，匿名对象
xxx {}      构造函数对象，有名对象，xxx为构造函数名，{}为对象体，继承构造函数内this创建的属性，new创建的时候不传参数，则this创建的属性为undefined。
<ref *1> Object [global] {global: [Circular *1],,,}         类型：Object，对象名称[global]，对象属性{global: [Circular *1],,,} 
Object [Math] {}       类型：Object，对象名称[Math]，对象属性{ 属性被node打印隐藏 }     


分类：
构造函数：创建多个同属性的独立对象
对象：创建多个同对象的属性

*/